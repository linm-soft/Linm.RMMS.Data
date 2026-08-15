# Azure OpenAI — đăng ký và dùng cho RMMS P1 (ai-asset-detect)

> **Đối tượng:** Dev / Infra gắn `Linm.AI.WebService` (`:5301`).  
> **Checklist tick:** [AZURE-OPENAI-CHECKLIST.md](./AZURE-OPENAI-CHECKLIST.md)  
> **Tracking:** [`specs/ai-asset-detect/run/STATUS.md`](../../specs/ai-asset-detect/run/STATUS.md)  
> **Platform (ERP / credit / gpt-4o-mini):** `Linm.Development.Rules/docs/plan/linm-ai-platform/azure-openai-setup.md`  
> **Cấm:** Azure SDK / key trong `Linm.RMMS.WebService` hoặc MFE. Key **chỉ** host AiService.

P1 detect đọc **ảnh thật** (JPEG/PNG). Model phải **có vision**: **`gpt-4o`** (mặc định code) hoặc `gpt-4o-mini`. Không dùng deployment text-only.

```
MFE (Chạy phát hiện)
  → BFF POST /ai-vision/detect-assets
  → RMMS.Api HttpAssetDetector
  → POST http://localhost:5301/api/v1/vision/detect
  → Azure OpenAI chat/completions (image_url hoặc data:image;base64)
```

Không có `Ai:Endpoint` + `Ai:ApiKey` → AiService **hash fallback** (không đọc pixel). Form vẫn tạo Draft nhưng class/score **không** từ ảnh.

---

## 1. Điều kiện trước khi đăng ký

| Hạng mục | Cần |
|----------|-----|
| Tài khoản | Microsoft Entra + quyền **Contributor** (hoặc Cognitive Services Contributor) trên subscription |
| Subscription | Pay-as-you-go / Enterprise — **billing bật** |
| Quota | Region có **gpt-4o** (vision). Thường: `eastus`, `eastus2`, `swedencentral`, `westeurope`. `southeastasia` có thể **không** có gpt-4o |
| Budget | Alert subscription (lab: $20–50/tháng) — xem [`12-AI-COST-PHASES.md`](../../context/12-AI-COST-PHASES.md) |
| Nội bộ | Quyết định resource name + RG (vd. `rg-linm-rmms-ai` · `linm-rmms-openai`) |

**Access:** Azure OpenAI / Foundry hiện tạo trực tiếp trên nhiều subscription. Nếu Create báo *Request access* / *not available* → điền [Azure OpenAI access form](https://aka.ms/oai/access) rồi chờ mail (1–2 ngày làm việc).

Tài liệu Microsoft: [Create resource](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource) · [GPT with vision](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/gpt-with-vision).

---

## 2. Đăng ký resource (Portal)

### 2.1 Tạo Azure OpenAI

1. [Azure Portal](https://portal.azure.com) → **Create a resource**.
2. Tìm **Azure OpenAI** (Cognitive Services) → **Create**.  
   Foundry mới: [ai.azure.com](https://ai.azure.com) → Create project / Azure OpenAI — cùng cặp **Endpoint + Key**.
3. Điền:
   - **Subscription** / **Resource group** (tạo mới nếu chưa có).
   - **Region** — chọn region **có gpt-4o** (không đoán `southeastasia`).
   - **Name** — vd. `linm-rmms-openai` (thành `https://linm-rmms-openai.openai.azure.com/`).
   - **Pricing tier** — Standard S0.
4. **Review + Create** → chờ Provisioning succeeded.

### 2.2 Deploy model vision

1. Resource → **Go to Azure OpenAI Studio** / [Foundry](https://ai.azure.com) (classic: tắt toggle *New Foundry* nếu bước lệch).
2. **Deployments** (hoặc **Models + endpoints**) → **+ Deploy model** → **Deploy base model**.
3. Chọn **gpt-4o** (version mới nhất, vd. `2024-11-20`).
4. **Deployment name** = **`gpt-4o`** — **khớp** `Ai:DeploymentDefault` trong AiService. Sai tên → HTTP 404.
5. Deployment type: **Global Standard** (lab) hoặc **Regional** nếu bắt buộc data residency.
6. Capacity (TPM): lab **10–30k TPM** đủ; tăng khi 429.
7. **Deploy** → status **Succeeded**.

Tuỳ chọn: deploy thêm `gpt-4o-mini` (rẻ hơn, vẫn vision) — đổi `Ai:DeploymentDefault` cho khớp.

### 2.3 Lấy Endpoint + Key

1. Resource → **Keys and Endpoint**.
2. Copy:
   - **Endpoint** — `https://{name}.openai.azure.com/` (có trailing `/` cũng được; code `TrimEnd('/')`).
   - **Key 1** (hoặc Key 2).
3. **Không** dán vào git, chat, `appsettings.json` commit, screenshot PR.

---

## 3. Gắn vào Linm.AI.WebService (local)

Host: `D:\AI-QLBD\Linm.AI.WebService` · URL `http://localhost:5301`.

`appsettings.json` **để trống** Endpoint/ApiKey. Gắn secret bằng User Secrets hoặc env.

### 3.1 User Secrets (khuyến nghị lab)

```powershell
cd D:\AI-QLBD\Linm.AI.WebService\api\src\Linm.AI.WebService.Api
dotnet user-secrets set "Ai:Endpoint" "https://linm-rmms-openai.openai.azure.com/"
dotnet user-secrets set "Ai:ApiKey" "<KEY1>"
dotnet user-secrets set "Ai:DeploymentDefault" "gpt-4o"
dotnet user-secrets set "Ai:ApiVersion" "2024-10-21"
dotnet user-secrets set "Ai:AllowDevFallback" "false"
```

`AllowDevFallback=false` khi verify thật: thiếu key / Azure lỗi → **fail**, không hash giả.

Xem secret (không in ra chat): `dotnet user-secrets list`

### 3.2 Env (PowerShell session / Docker)

```powershell
$env:Ai__Endpoint = "https://linm-rmms-openai.openai.azure.com/"
$env:Ai__ApiKey = "<KEY1>"
$env:Ai__DeploymentDefault = "gpt-4o"
$env:Ai__AllowDevFallback = "false"
```

Docker / hosting: `Ai__Endpoint`, `Ai__ApiKey`, `Ai__DeploymentDefault`. Không ghi key vào `appsettings.Production.json`.

### 3.3 Map cấu hình ↔ code

| Key | Giá trị lab | Dùng ở |
|-----|-------------|--------|
| `Ai:Enabled` | `true` | `HasAzure()` |
| `Ai:Endpoint` | `https://{name}.openai.azure.com/` | URL chat/completions |
| `Ai:ApiKey` | Key 1 | Header `api-key` |
| `Ai:DeploymentDefault` | `gpt-4o` | Path `/deployments/{name}/` |
| `Ai:ApiVersion` | `2024-10-21` | Query `api-version` |
| `Ai:ImageDelivery` | `Auto` | Lab localhost → Mode A (base64); URL public/R2 → Mode B |
| `Ai:AllowDevFallback` | `true` (dev) / `false` (verify) | Hash nếu Azure down |

---

## 4. Verify Azure (trước khi bấm UI)

Thay `$ENDPOINT` / `$KEY`. PowerShell:

```powershell
$ENDPOINT = "https://linm-rmms-openai.openai.azure.com"
$KEY = "<KEY1>"
$DEPLOY = "gpt-4o"

# 4a — text (resource + key + deployment sống)
curl.exe -sS -w "`nHTTP %{http_code}`n" `
  "$ENDPOINT/openai/deployments/$DEPLOY/chat/completions?api-version=2024-10-21" `
  -H "Content-Type: application/json" `
  -H "api-key: $KEY" `
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"Trả đúng chữ OK\"}],\"max_tokens\":8}"
```

Kỳ vọng: HTTP **200** + `choices[0].message.content`.

```powershell
# 4b — vision (bắt buộc P1). Ảnh public nhỏ hoặc data URI.
curl.exe -sS -w "`nHTTP %{http_code}`n" `
  "$ENDPOINT/openai/deployments/$DEPLOY/chat/completions?api-version=2024-10-21" `
  -H "Content-Type: application/json" `
  -H "api-key: $KEY" `
  -d "{\"messages\":[{\"role\":\"user\",\"content\":[{\"type\":\"text\",\"text\":\"Chỉ trả JSON {\\\"assetClass\\\":\\\"Biển báo\\\",\\\"score\\\":0.9}\"},{\"type\":\"image_url\",\"image_url\":{\"url\":\"https://aka.ms/azsdk/image-analysis/sample.jpg\"}}]}],\"max_tokens\":80}"
```

Kỳ vọng: HTTP **200**. 400 *unsupported image* / *model does not support image* → sai model (không phải gpt-4o vision).

```powershell
# 4c — AiService local (sau khi set secret + start :5301)
curl.exe -sS http://localhost:5301/health
curl.exe -sS -X POST http://localhost:5301/api/v1/vision/detect `
  -H "Content-Type: application/json" `
  -d "{\"imageUrl\":\"https://aka.ms/azsdk/image-analysis/sample.jpg\",\"lat\":21.02,\"lng\":105.84,\"taxonomy\":\"asset\",\"source\":\"lab\"}"
```

Kỳ vọng: `engine` = `P1`, `assetClass` thuộc 8 class TS, **không** note kiểu hash-only. `AllowDevFallback=false` mà 500 *chưa cấu hình* → secret chưa load (restart process).

---

## 5. Dùng trên trang phát hiện

Stack phải **cùng lúc**:

| Process | Port | Việc |
|---------|------|------|
| `Linm.AI.WebService` | 5301 | Azure |
| RMMS API **mới** (sau Schema upload) | 5101 | `HttpAssetDetector` + `/uploads` |
| BFF | (stack) | proxy `detect-assets` + `uploads/*` |
| MFE `start:std` | 9303 | UI |

**Không** commit key vào MFE. MFE chỉ upload + gọi BFF.

### Form **Tạo candidate**

1. **Chọn ảnh khung hình** (JPEG/PNG ≤ 4MB).
2. **Vĩ độ / Kinh độ** (không trống, không `0,0`).
3. **Tuyến đường** (SearchInput).
4. **Chạy phát hiện** (không phải **Lưu** — Lưu = tạo tay, không Azure).

Luồng: `uploadFrameDirect` → `POST …/detect-assets` → AiService → Azure → Draft trên list.

### List — panel **Phát hiện** (nhanh hơn)

Toolbar **Phát hiện** → tuyến + GPS + ảnh (hoặc snapshot camera) → **Chạy phát hiện**.

### Mode ảnh → Azure

| Mode | Storage | Azure nhận |
|------|---------|------------|
| **A (lab)** | Local PUT API | AiService GET localhost → `data:image/…;base64` |
| **B (cloud)** | R2 public/presign | Azure GET URL |

`Ai:ImageDelivery` = `Auto` (mặc định). Lab không cần R2.

---

## 6. Bảo mật

| Rule | Thực hiện |
|------|-----------|
| Key chỉ AiService | Không `Ai:ApiKey` trong RMMS.Api / BFF / MFE |
| Không commit | User Secrets / env / Key Vault — không `appsettings.json` |
| Không log key / full prompt | Serilog: status + token count, không dump `api-key` |
| Content filter | Giữ filter Azure mặc định |
| HITL | Candidate = Draft; Confirm mới tạo Asset |
| Budget | Alert + TPM cap trên deployment |

Rotate: Portal **Regenerate Key 1** → `user-secrets set` lại → restart `:5301`.

---

## 7. Troubleshooting

| Hiện tượng | Nguyên nhân | Xử lý |
|------------|-------------|--------|
| Draft class «ngẫu nhiên», overlay 85% sẵn | Fallback hash / form default | Set Endpoint+Key; `AllowDevFallback=false`; restart 5301 |
| AiService 500 *chưa cấu hình* | Secret chưa vào process | `user-secrets list` trong đúng csproj; restart |
| Azure 401 | Sai key | Keys and Endpoint → Key 1 |
| Azure 404 | Sai **deployment name** | Khớp Portal ↔ `Ai:DeploymentDefault` |
| Azure 429 | TPM / quota | Tăng capacity hoặc chờ |
| Azure 400 image | Model không vision / URL Azure không tải được | Dùng gpt-4o; lab = Mode A (base64) |
| Detect 422 *imageUrl* | Chưa upload | Chọn tệp trước |
| Toast thiếu tuyến / GPS | Form chưa đủ | SearchInput + lat/lng |
| RMMS không gọi 5301 | API cũ / `AiServiceBaseUrl` sai | Restart API; `http://localhost:5301` |
| Docker build TLS timeout | Kéo `sdk/manifests/8.0` fail | Lab: `dotnet run` AiService, không bắt buộc docker Azure |

---

## 8. Chi phí (tham chiếu)

Vision đắt hơn text: ảnh ≈ nhiều input token. Lab: vài chục frame/ngày thường << $10. Prod tuần đường: xem [`12-AI-COST-PHASES.md`](../../context/12-AI-COST-PHASES.md) (P1 alert ~$200/tháng).

Portal → resource → **Metrics**: `TokenTransaction`, GeneratedTokens. Bật budget alert trước khi share key cho team.
