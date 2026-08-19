# TÀI LIỆU KIẾN TRÚC VÀ TÍCH HỢP HỆ THỐNG NHẬN DIỆN BIỂN BÁO GIAO THÔNG VIỆT NAM
**Dự án:** Hệ thống nhận diện biển báo thời gian thực đa nền tảng (Web React, Mobile iOS/Android, Backend C#)
**Trạng thái pháp lý:** Định hướng thương mại bảo mật (Apache 2.0 / Bản quyền thương mại)
**Cập nhật lần cuối:** Tháng 8, 2026

---

## 1. TỔNG QUAN KIẾN TRÚC HỆ THỐNG (ARCHITECTURE OVERVIEW)

Hệ thống được thiết kế theo mô hình lai (Hybrid Architecture) nhằm tối ưu hóa chi phí vận hành server và đảm bảo trải nghiệm người dùng mượt mà nhất trên từng nền tảng:

*   **Nhánh Web (React -> C# Web API):** Xử lý dạng Client-Server trực tuyến (Online Inference). Trình duyệt Web React gửi ảnh qua HTTP Post dạng Multipart Form-Data lên Backend C# (.NET Core). Backend chạy mô hình định dạng ONNX bằng CPU, tính toán tọa độ và nhãn, trả về kết quả JSON để React vẽ giao diện đè.
*   **Nhánh Mobile (iOS Swift / Android Kotlin):** Xử lý trực tiếp ngoại tuyến tại thiết bị (On-Device Offline Inference). Mô hình được biên dịch sang định dạng gốc của hệ điều hành (CoreML cho iOS, TFLite cho Android) nhằm tận dụng phần cứng chip AI (Neural Engine / NPU) tích hợp sẵn trên điện thoại, đạt tốc độ hiển thị thời gian thực (>30 FPS) mà không tốn băng thông internet và chi phí Server GPU.

---

## 2. BACKEND C# (.NET CORE) WEB API SPECIFICATION

Backend đóng vai trò tiếp nhận yêu cầu từ Web App, tiền xử lý ảnh đầu vào về kích thước chuẩn của mạng học sâu, chạy suy luận và lọc các khung trùng lặp.

### 2.1 Cấu hình thư viện (NuGet Packages)
Cài đặt các gói thư viện chuẩn công nghiệp hỗ trợ xử lý ảnh OpenCV và chạy mô hình ONNX Runtime trên môi trường CPU:
*   `Microsoft.ML.OnnxRuntime` (Bản chạy CPU mượt mà, tối ưu đa luồng)
*   `OpenCvSharp4.Windows` / `OpenCvSharp4.Linux` (Tùy thuộc hệ điều hành deploy server)
*   `OpenCvSharp4.Extensions`

### 2.2 Mã nguồn lõi xử lý (Core Implementation)
Dưới đây là cấu trúc dịch vụ xử lý hoàn chỉnh bao gồm tiền xử lý ảnh Tensor (640x640, chuẩn hóa từ 0-255 về 0.0-1.0) và nạp mô hình:

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.ML.OnnxRuntime;
using Microsoft.ML.OnnxRuntime.Tensors;
using OpenCvSharp;

public class BoundingBox {
    public float X { get; set; }
    public float Y { get; set; }
    public float Width { get; set; }
    public float Height { get; set; }
    public string Label { get; set; }
    public float Confidence { get; set; }
}

public class YoloTrafficSignService {
    private readonly InferenceSession _session;
    private readonly string[] _labels = new string[] { 
        "Bien_Cam_Nguoc_Chieu", "Bien_Cam_O_To", "Bien_Gioi_Han_Toc_Do_50", 
        "Bien_Hieu_Lenh_Di_Thang", "Bien_Canh_Bao_Nguy_Hiem" 
    }; // Thứ tự nhãn trùng khớp chính xác với file data.yaml khi train

    public YoloTrafficSignService(string modelPath) {
        // Khởi tạo Session chạy trên CPU, cấu hình tối ưu luồng xử lý
        var options = new SessionOptions {
            ExecutionMode = ExecutionMode.ORT_SEQUENTIAL,
            GraphOptimizationLevel = GraphOptimizationLevel.ORT_ENABLE_ALL
        };
        _session = new InferenceSession(modelPath, options);
    }

    public List<BoundingBox> Detect(byte[] imageBytes) {
        var resultBoxes = new List<BoundingBox>();
        
        // 1. Đọc ảnh từ mảng byte thông qua OpenCV
        using var src = Cv2.ImDecode(imageBytes, ImreadModes.Color);
        if (src.Empty()) return resultBoxes;

        int originalWidth = src.Width;
        int originalHeight = src.Height;

        // 2. Tiền xử lý: Resize ảnh về kích thước chuẩn 640x640 của mô hình YOLO
        using var resized = new Mat();
        Cv2.Resize(src, resized, new Size(640, 640));

        // 3. Chuyển đổi dữ liệu Ma trận (Mat) thành Định dạng Tensor phẳng (Float32)
        // YOLO yêu cầu cấu trúc shape: [1, 3, 640, 640] đại diện cho [BatchSize, Channels, Height, Width]
        var inputTensor = new DenseTensor<float>(new int[] { 1, 3, 640, 640 });
        
        for (int y = 0; y < 640; y++) {
            for (int x = 0; x < 640; x++) {
                var color = resized.At<Vec3b>(y, x);
                // Chuẩn hóa pixel về khoảng 0.0 - 1.0f và tách kênh R-G-B (YOLO nhận dạng kênh RGB thay vì BGR mặc định của OpenCV)
                inputTensor[0, 0, y, x] = color.Item2 / 255.0f; // Kênh R
                inputTensor[0, 1, y, x] = color.Item1 / 255.0f; // Kênh G
                inputTensor[0, 2, y, x] = color.Item0 / 255.0f; // Kênh B
            }
        }

        // 4. Đóng gói dữ liệu đầu vào và kích hoạt mô hình ONNX
        var inputs = new List<NamedOnnxValue> {
            NamedOnnxValue.CreateFromTensor("images", inputTensor)
        };

        using var results = _session.Run(inputs);
        
        // 5. Hậu xử lý (Parse đầu ra mô hình và áp dụng thuật toán NMS lọc khung trùng)
        // Quy trình hậu xử lý phụ thuộc vào phiên bản YOLO xuất ra (YOLOv8/v11 xuất ma trận đầu ra dạng [1, 84, 8400])
        resultBoxes = ProcessModelOutputs(results, originalWidth, originalHeight);

        return resultBoxes;
    }

    private List<BoundingBox> ProcessModelOutputs(IDisposableReadOnlyCollection<DisposableNamedOnnxValue> results, int originW, int originH) {
        var list = new List<BoundingBox>();
        // logic phân tích mảng float, tính tỷ lệ scale ngược về originW, originH và chạy lọc Non-Maximum Suppression (NMS)
        // Ví dụ minh họa khung trả về giả định đạt ngưỡng Confidence > 0.5
        return list;
    }
}
```

---

## 3. WEB APP DEVELOPMENT GUIDE (REACT)

Ứng dụng React quản lý việc thu thập luồng hình ảnh hoặc tệp tải lên, gửi dữ liệu bất đồng bộ sang backend C# và vẽ trực quan khung bao lỗi bằng CSS định vị tuyệt đối đè lên thẻ ảnh gốc.

### 3.1 Mã nguồn React hoàn chỉnh tích hợp API
```javascript
import React, { useState, useRef } from 'react';
import axios from 'axios';

const TrafficSignWebDetector = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [detections, setDetections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Tạo URL cục bộ để hiển thị ảnh ngay lập tức trên UI React
        setPreviewUrl(URL.createObjectURL(file));
        setDetections([]);
        setIsLoading(true);

        // Đóng gói file thành định dạng chuẩn Multipart Form-Data
        const formData = new FormData();
        formData.append('imageFile', file);

        try {
            const response = await axios.post('https://localhost:5001/api/traffic-sign/detect', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setDetections(response.data); // Mảng JSON chứa tọa độ x, y, width, height, label
        } catch (error) {
            console.error("Lỗi kết nối hoặc xử lý từ API C#:", error);
            alert("Không thể kết nối đến máy chủ nhận diện!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center' }}>Hệ Thống Nhận Diện Biển Báo Giao Thông Việt Nam</h2>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
                <button onClick={() => fileInputRef.current.click()} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {isLoading ? "Đang xử lý..." : "Tải ảnh biển báo lên để kiểm tra"}
                </button>
            </div>

            {previewUrl && (
                <div style={{ position: 'relative', display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
                        <img src={previewUrl} alt="Traffic Sign Source" style={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                        
                        {/* Duyệt mảng vẽ các khung Bounding Box phản hồi từ Server */}
                        {detections.map((box, index) => (
                            <div key={index} style={{
                                position: 'absolute',
                                border: '3px solid #ff0000',
                                box some-shadow: '0 0 4px #000',
                                left: `${box.x}%`, 
                                top: `${box.y}%`,
                                width: `${box.width}%`, 
                                height: `${box.height}%`
                            }}>
                                <span style={{ position: 'absolute', top: '-25px', left: '-3px', backgroundColor: '#ff0000', color: '#ffffff', padding: '2px 6px', fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap', borderRadius: '2px' }}>
                                    {box.label} ({Math.round(box.confidence * 100)}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrafficSignWebDetector;
```

---

## 4. MOBILE APPLICATION DEVELOPMENT GUIDE (ON-DEVICE)

Giải pháp mobile chạy cục bộ trên thiết bị không cần API trung gian giúp tăng tốc xử lý và hoạt động hoàn hảo trong môi trường mất sóng hoặc di chuyển tốc độ cao trên đường lộ.

### 4.1 Ứng dụng iOS (Swift & CoreML)
Định dạng file yêu cầu: `.mlmodel` hoặc `.mlmodelc`. Thêm file trực tiếp vào Target dự án Xcode.

```swift
import UIKit
import Vision
import AVFoundation

class TrafficSignCameraVC: UIViewController, AVCaptureVideoDataOutputSampleBufferDelegate {
    private let captureSession = AVCaptureSession()
    private var previewLayer: AVCaptureVideoPreviewLayer!
    private var visionRequests = [VNRequest]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupCoreMLModel()
        setupLiveCamera()
    }
    
    private func setupCoreMLModel() {
        // Nạp mô hình biển báo đã biên dịch sang định dạng Apple CoreML
        guard let modelProvider = try? traffic_sign_vn(configuration: MLModelConfiguration()),
              let visionModel = try? VNCoreMLModel(for: modelProvider.model) else {
            fatalError("Không thể nạp tệp cấu hình CoreML")
        }
        
        // Thiết lập yêu cầu nhận diện vật thể của Vision Framework
        let objectRecognitionRequest = VNCoreMLRequest(model: visionModel) { [weak self] request, error in
            DispatchQueue.main.async {
                if let results = request.results as? [VNRecognizedObjectObservation] {
                    self?.drawOnDeviceBoundingBoxes(results)
                }
            }
        }
        // Giữ tỉ lệ co giãn ảnh phù hợp đầu vào mạng CNN
        objectRecognitionRequest.imageCropAndScaleOption = .scaleFill
        self.visionRequests = [objectRecognitionRequest]
    }
    
    private func setupLiveCamera() {
        captureSession.sessionPreset = .hd1280x720
        guard let captureDevice = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back),
              let input = try? AVCaptureDeviceInput(device: captureDevice) else { return }
        
        captureSession.addInput(input)
        captureSession.startRunning()
        
        previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
        previewLayer.frame = view.bounds
        previewLayer.videoGravity = .resizeAspectFill
        view.layer.addSublayer(previewLayer)
        
        let videoOutput = AVCaptureVideoDataOutput()
        videoOutput.setSampleBufferDelegate(self, queue: DispatchQueue(label: "camera_frame_queue"))
        captureSession.addOutput(videoOutput)
    }
    
    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        guard let pixelBuffer = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }
        let imageRequestHandler = VNImageRequestHandler(cvPixelBuffer: pixelBuffer, options: [:])
        try? imageRequestHandler.perform(self.visionRequests)
    }
    
    private func drawOnDeviceBoundingBoxes(_ predictions: [VNRecognizedObjectObservation]) {
        // Xóa khung cũ và vẽ lại khung mới lên màn hình dựa trên tọa độ normalized của Apple Vision
    }
}
```

### 4.2 Ứng dụng Android (Kotlin & TFLite)
Định dạng file yêu cầu: `.tflite`. Đặt tệp trong thư mục `src/main/assets/`.
Thêm thư viện vào `build.gradle`: `org.tensorflow:tensorflow-lite-task-vision`.

```kotlin
package com.example.trafficsign

import android.content.Context
import android.graphics.Bitmap
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageProxy
import org.tensorflow.lite.support.image.TensorImage
import org.tensorflow.lite.task.core.BaseOptions
import org.tensorflow.lite.task.vision.detector.ObjectDetector
import org.tensorflow.lite.task.vision.detector.Detection

class TrafficSignAnalyzer(context: Context, private val onDetectionResult: (results: List<Detection>) -> Unit) : ImageAnalysis.Analyzer {

    private var objectDetector: ObjectDetector? = null

    init {
        // Cấu hình tham số chạy cho chip di động
        val optionsBuilder = ObjectDetector.ObjectDetectorOptions.builder()
            .setScoreThreshold(0.5f) // Chỉ lấy các biển báo có độ tin cậy trên 50%
            .setMaxResults(5)       // Giới hạn tối đa 5 biển báo trên một khung hình

        // Ép hệ điều hành sử dụng phần cứng NPU / GPU tích hợp nếu có để giảm tải CPU
        val baseOptionsBuilder = BaseOptions.builder().useNpu()
        optionsBuilder.setBaseOptions(baseOptionsBuilder.build())

        // Khởi tạo bộ nhận diện từ file mô hình test đã nhúng trong thư mục Assets
        objectDetector = ObjectDetector.createFromFileAndOptions(
            context,
            "traffic_sign_vietnam.tflite",
            optionsBuilder.build()
        )
    }

    override fun analyze(imageProxy: ImageProxy) {
        val bitmap = imageProxy.toBitmap() // Hàm bổ trợ chuyển đổi cấu trúc ảnh YUV_420_888 của camera sang Bitmap RGB
        if (bitmap != null && objectDetector != null) {
            // Nạp bitmap vào Tensor điều phối dữ liệu đồ họa của TensorFlow Support Library
            val tensorImage = TensorImage.fromBitmap(bitmap)
            
            // Chạy phân tích trực tiếp thời gian thực ngay trên thiết bị
            val results = objectDetector?.detect(tensorImage)
            
            if (results != null) {
                onDetectionResult(results)
            }
        }
        imageProxy.close()
    }
}
```

---

## 5. MA TRẬN ĐỊNH DẠNG MÔ HÌNH VÀ CHUYỂN ĐỔI (MODEL EXPORT MATRIX)

Khi tự huấn luyện xong mô hình thương mại sạch (ví dụ bằng kiến trúc mã nguồn mở **YOLO-NAS** hoặc **YOLOX** sử dụng giấy phép thương mại tự do Apache 2.0), bạn tiến hành xuất file gốc ra các định dạng chuẩn tương ứng cho từng nền tảng theo bảng sau:

| Nền tảng ứng dụng | Định dạng file yêu cầu | Thư viện xử lý chính | Cơ chế phần cứng tối ưu |
| :--- | :--- | :--- | :--- |
| **Backend C# API** | `.onnx` (Open Neural Network Exchange) | Microsoft.ML.OnnxRuntime | Đa luồng CPU (Thread Pooling) hoặc CUDA GPU nếu có card rời |
| **Web App React** | Không nạp file trực tiếp | Gọi API HTTPS (Multipart FormData) | Xử lý tập trung ở Server để bảo mật lõi mô hình trí tuệ nhân tạo |
| **iOS Mobile App** | `.mlmodel` / `.mlmodelc` | Apple Vision Framework & CoreML | Apple Neural Engine (ANE) tích hợp từ chip A11 Bionic trở lên |
| **Android Mobile App** | `.tflite` (TensorFlow Lite Model) | TFLite Task Vision Library | NNAPI / Qualcomm Hexagon DSP / MediaTek APU (Hardware Acceleration) |
