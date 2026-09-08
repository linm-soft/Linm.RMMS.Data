# Traffic AI Vision Integration Blueprint (C# / .NET 8+)

Tài liệu này cung cấp toàn bộ mã nguồn, cấu trúc dữ liệu và quy trình tích hợp giữa **C# Backend**, **Cloudflare R2**, **OpenAI GPT-4o Mini** (Vision API) và **PostgreSQL** để phân tích ổ gà/biển báo giao thông.

## 1. Cấu trúc Database (PostgreSQL Schema)

Chạy câu lệnh SQL này trong database của bạn trên Railway để tạo bảng lưu trữ kết quả phân tích:

```sql
CREATE TABLE IF NOT EXISTS traffic_detections (
    id SERIAL PRIMARY KEY,
    object_key VARCHAR(512) NOT NULL,
    issue_type VARCHAR(50) NOT NULL, -- 'o_ga' hoặc 'bien_bao'
    confidence VARCHAR(20) NOT NULL, -- 'Cao', 'Trung_Binh', 'Thap'
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_traffic_issue_type ON traffic_detections(issue_type);
```

## 2. Thư viện NuGet Dependencies

Agent cần cài đặt các gói NuGet sau vào dự án ASP.NET Core:

```bash
dotnet add package AWSSDK.S3
dotnet add package OpenAI
dotnet add package Npgsql
```

## 3. Các thực thể dữ liệu (Data Models)

Định nghĩa cấu trúc mapping dữ liệu từ API Client gửi lên và từ JSON của OpenAI trả về.

```csharp
namespace TrafficAI.Models;

// Request từ Client gửi lên Backend sau khi đã upload xong ảnh lên R2
public record AnalysisRequest(string ObjectKey);

// Cấu trúc Mapping JSON trả về từ OpenAI GPT-4o Mini
public record TrafficAnalysisResult(
    [property: System.Text.Json.Serialization.JsonPropertyName("has_issue")] bool HasIssue,
    [property: System.Text.Json.Serialization.JsonPropertyName("detections")] List<DetectionItem> Detections
);

public record DetectionItem(
    [property: System.Text.Json.Serialization.JsonPropertyName("type")] string Type,
    [property: System.Text.Json.Serialization.JsonPropertyName("confidence")] string Confidence,
    [property: System.Text.Json.Serialization.JsonPropertyName("description")] string Description
);
```

## 4. Class Xử Lý Chính (TrafficVisionService)

Class này chịu trách nhiệm: Sinh Presigned URL thời hạn 5 phút từ R2 -> Gửi sang OpenAI -> Ép đầu ra JSON đúng định dạng -> Parse object.

```csharp
using Amazon.S3;
using Amazon.S3.Model;
using OpenAI;
using OpenAI.Chat;
using System.Text.Json;
using TrafficAI.Models;

namespace TrafficAI.Services;

public class TrafficVisionService
{
    private readonly IAmazonS3 _s3Client;
    private readonly ChatClient _chatClient;
    private readonly string _bucketName;
    private readonly ChatResponseFormat _jsonSchemaFormat;

    public TrafficVisionService()
    {
        // 1. Cấu hình Cloudflare R2 từ Biến Môi Trường (Railway Environments)
        var r2AccessKey = Environment.GetEnvironmentVariable("R2_ACCESS_KEY_ID") 
            ?? throw new InvalidOperationException("Missing R2_ACCESS_KEY_ID");
        var r2SecretKey = Environment.GetEnvironmentVariable("R2_SECRET_ACCESS_KEY") 
            ?? throw new InvalidOperationException("Missing R2_SECRET_ACCESS_KEY");
        var r2Endpoint = Environment.GetEnvironmentVariable("R2_ENDPOINT_URL") 
            ?? throw new InvalidOperationException("Missing R2_ENDPOINT_URL");
        _bucketName = Environment.GetEnvironmentVariable("R2_BUCKET_NAME") ?? "traffic-images";

        var s3Config = new AmazonS3Config { ServiceURL = r2Endpoint };
        _s3Client = new AmazonS3Client(r2AccessKey, r2SecretKey, s3Config);

        // 2. Cấu hình OpenAI Client
        string openAiApiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY") 
            ?? throw new InvalidOperationException("Missing OPENAI_API_KEY");
        var openAiClient = new OpenAIClient(openAiApiKey);
        _chatClient = openAiClient.GetChatClient("gpt-4o-mini");

        // 3. Khởi tạo sẵn Định dạng Ép buộc OpenAI tuân theo JSON Schema (Structured Outputs)
        _jsonSchemaFormat = ChatResponseFormat.CreateJsonSchemaFormat(
            jsonSchemaName: "traffic_analysis_schema",
            jsonSchema: BinaryData.FromString("""
            {
                "type": "object",
                "properties": {
                    "has_issue": { "type": "boolean", "description": "Có ổ gà hoặc biển báo trong ảnh không" },
                    "detections": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "type": { "type": "string", "enum": ["o_ga", "bien_bao"], "description": "Loại nhận diện được" },
                                "confidence": { "type": "string", "enum": ["Cao", "Trung_Binh", "Thap"], "description": "Độ tin cậy của AI" },
                                "description": { "type": "string", "description": "Mô tả ngắn gọn vị trí hoặc nội dung biển báo" }
                            },
                            "required": ["type", "confidence", "description"]
                        }
                    }
                },
                "required": ["has_issue", "detections"]
            }
            """)
        );
    }

    public async Task<TrafficAnalysisResult?> AnalyzeImageAsync(string objectKey)
    {
        // BƯỚC 1: Sinh Presigned GET URL giới hạn thời gian (Hết hạn sau 5 phút)
        var urlRequest = new GetPreSignedUrlRequest
        {
            BucketName = _bucketName,
            Key = objectKey,
            Expires = DateTime.UtcNow.AddMinutes(5),
            Verb = HttpVerb.GET
        };
        string presignedUrl = _s3Client.GetPreSignedURL(urlRequest);

        // BƯỚC 2: Đóng gói Payload đa phương thức (Prompt text + Link ảnh bảo mật)
        List<ChatMessage> messages = new()
        {
            new UserChatMessage(
                ChatMessageContentPart.CreateTextPart("Phân tích hình ảnh này để tìm kiếm và định danh các lỗi hạ tầng như ổ gà nguy hiểm hoặc các biển báo giao thông."),
                ChatMessageContentPart.CreateImagePart(new Uri(presignedUrl))
            )
        };

        ChatCompletionOptions options = new() { ResponseFormat = _jsonSchemaFormat };

        // BƯỚC 3: Gọi API GPT-4o Mini
        ChatCompletion completion = await _chatClient.CompleteChatAsync(messages, options);
        string rawJson = completion.Content.Text;

        // BƯỚC 4: Giải mã chuỗi JSON sạch trả về từ AI thành Object C#
        return JsonSerializer.Deserialize<TrafficAnalysisResult>(rawJson);
    }
}
```

## 5. Cấu hình Web API Endpoint & Ghi vào DB

Tích hợp Service vào hệ thống API (Ví dụ sử dụng Minimal API trong `Program.cs`):

```csharp
using Npgsql;
using TrafficAI.Models;
using TrafficAI.Services;

var builder = WebApplication.CreateBuilder(args);

// Đăng ký Service vào DI Container
builder.Services.Singleton<TrafficVisionService>();

var app = builder.Build();

string pgConnectionString = Environment.GetEnvironmentVariable("DATABASE_URL") 
    ?? throw new InvalidOperationException("Missing DATABASE_URL");

app.MapPost("/api/vision/analyze", async (AnalysisRequest request, TrafficVisionService visionService) =>
{
    if (string.IsNullOrWhiteSpace(request.ObjectKey))
    {
        return Results.BadRequest(new { error = "ObjectKey không được để trống" });
    }

    try
    {
        // 1. Gọi AI phân tích hình ảnh thông qua Presigned URL tạm thời
        var aiResult = await visionService.AnalyzeImageAsync(request.ObjectKey);

        if (aiResult == null)
        {
            return Results.Problem("Không thể giải mã dữ liệu trả về từ AI.");
        }

        // 2. Nếu phát hiện thấy có ổ gà hoặc biển báo, lưu vào PostgreSQL
        if (aiResult.HasIssue && aiResult.Detections.Count > 0)
        {
            using var conn = new NpgsqlConnection(pgConnectionString);
            await conn.OpenAsync();

            string insertQuery = """
                INSERT INTO traffic_detections (object_key, issue_type, confidence, description) 
                VALUES (@key, @type, @conf, @desc);
            """;

            foreach (var item in aiResult.Detections)
            {
                using var cmd = new NpgsqlCommand(insertQuery, conn);
                cmd.Parameters.AddWithValue("key", request.ObjectKey);
                cmd.Parameters.AddWithValue("type", item.Type);
                cmd.Parameters.AddWithValue("conf", item.Confidence);
                cmd.Parameters.AddWithValue("desc", item.Description);
                
                await cmd.ExecuteNonQueryAsync();
            }
        }

        return Results.Ok(new { message = "Xử lý thành công", data = aiResult });
    }
    catch (Exception ex)
    {
        return Results.Problem(\$"Lỗi hệ thống: {ex.Message}");
    }
});

app.Run();
```

## 6. Các biến môi trường cần nạp trên Railway
Agent cần đảm bảo hệ thống có đủ các khóa cấu hình sau tại mục `Variables`:
* `OPENAI_API_KEY`: API Key lấy từ trang quản trị OpenAI.
* `DATABASE_URL`: Connection string của PostgreSQL (Railway tự động cấp khi liên kết DB).
* `R2_ACCESS_KEY_ID`: Mã Access Key của Cloudflare R2.
* `R2_SECRET_ACCESS_KEY`: Mã Secret Key của Cloudflare R2.
* `R2_ENDPOINT_URL`: Endpoint S3 API của Cloudflare R2.
* `R2_BUCKET_NAME`: Tên Bucket chứa ảnh của bạn.
