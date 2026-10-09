# AI kiểm định mặt đường — Feature Context

> **Slug:** `ai-vision` · **Module:** `AiVision`  
> **Phase:** P1 = GPT-4o Vision online · **P2 = local ONNX detector + SAM (optional)**  
> **Status:** Demo  
> **sourceKind:** synthetic (product AI · không GOVOne leaf · suy luận docs)  
> **SSOT P2:** [`14-P2-AI-VISION-STANDARD.md`](../14-P2-AI-VISION-STANDARD.md)  
> **Sources:** `RMMS` §3 · `07` §3 · `08` · `09` · `10` · `13` · `14` · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo:** `Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html` · control-map `demo-maps/ai-vision-control-map.md`  
> **Host V1/P2:** [`ai-vision-service.md`](ai-vision-service.md) · plan [`../../plan/ai-vision-service/README.md`](../../plan/ai-vision-service/README.md) — **`Linm.RMMS.Vision`** `:5311` · **cấm** stub `mock://` · **cấm** `:5301`  
> **Gắn màn:** Mobile **Vấn đề** (chụp) · Web **Sự cố** · Giám sát bản đồ

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Thu thập camera AI / line scan / 360 / GPS / IMU → nhận diện ổ gà, nứt dọc/ngang/mai rùa, bong bật, lún vệt, chảy nhựa, vá, sụt lề, hư mép → PCI/IRI/SCI · mức ưu tiên |
| Persona | Tuần đường · BA · AI lead |
| App hiện có | — (mới; overlay lên Vấn đề/Incident — giữ UX ghi nhận) |
| DoD P1 | Adapter online Vision · lưu detection · cost trong alert ~$200/tháng |
| DoD P2 | Theo `14` §9 — model ONNX · worker GPU · GPT fallback |
| AI support | **P1** GPT-4o Vision · **P2** ONNX detector + SAM |

## 2. Design / UI

| Screen | Pattern | Zones | Gắn app |
|--------|---------|-------|---------|
| Upload / kết quả detect | Full feed | Ảnh · bbox · class · confidence · engine badge | Từ Vấn đề «Thêm» / Upload demo |
| List detections | Kind **B** CatalogList | Filter section/class/sev/date/engine · grid · row actions | Web Sự cố / AiVision |
| Detail detection | Kind **D** slideout | Fields + leave-confirm dirty · Confirm Vấn đề | Incident |
| Map pins | Kind **F** | Leaflet OSM/Esri · Draft / Critical / Incident pins | Giám sát bản đồ |
| PCI history | Modal | Chart/table theo sectionId | Báo cáo / Asset đoạn |
| Confirm → tạo Vấn đề | Modal | Preview Critical · mã VI-* | Incident |

**P1 UI:** badge `AI support` · `P1 online (GPT-4o Vision)` — không hiện train local · không hứa mAP.  
**P2 UI:** badge `P2 local` · `modelVersion` onnx · phân biệt online fallback.

**Kind ERP:** B + D + F · shell Linm modern (`/erp-form-context`) · skip GOVOne chrome.

### Control-map (demo)

| Zone | Controls |
|------|----------|
| Toolbar | Upload · batch · toggle P1/P2 · create · PCI · refresh · export · reset |
| Filter | q · section · class · severity · status · engine · from/to |
| List | DET id · class · score · sev · section · route · status · model · incident · actions |
| Map | pin + OSM/Esri/Fit |
| Form | class · conf · sev · lat/lng · section · route · PCI · bbox · note · incidentCode |
| Actions | View/Edit/Copy · Tạo Vấn đề · Dismiss · Lưu nháp · leave-confirm |

## 3. API (Signed — DOMAIN-MAP `api/v1/ai-vision`)

Client **qua BFF** `web-bff/api/v1/ai-vision/**`. Host SSOT **`Linm.RMMS.Vision`** — Azure/ONNX **không** trong WebService. Plan: [`../../plan/ai-vision-service/README.md`](../../plan/ai-vision-service/README.md).

| Method | Path | Mô tả |
|--------|------|-------|
| GET/POST/PUT/DELETE | `/api/v1/ai-vision/detections` | CRUD list/form — **đã có** |
| POST | `/api/v1/ai-vision/detect` | 1 frame `imageUrl` → Draft trên **Vision** · **hiện** WebService `DetectStubAsync` (`mock://`) — GAP-F-AIV-04 |
| GET | `/api/v1/ai-vision/pci-history/{sectionId}` | History stub — **đã có** |
| POST | `/api/v1/ai-vision/detect-assets` | Slug **`ai-asset-detect`** — không dùng trên màn kiểm định MD |

**DEFER (chưa Signed — cấm invent trên MFE):** `POST …/batch` · `…/segment` · `…/calculate-pci` · `GET …/defects` (list = `detections`).

Adapter **trong Vision:** P1 GPT-4o · P2 `OnnxDetectorDiagnoser` (sau `14` gate) — **cùng** `/detect`.

**P2 stack suggest:** **P2-A** Apache (YOLOX/RTMDet/RT-DETR) **hoặc** **P2-B** Ultralytics Enterprise — xem `14` §2.

## 4. Database

| Entity / table | Notes |
|----------------|-------|
| `ai_vision.detections` | class, score, bbox, imageUrl, sectionId, modelVersion, severity, status |
| `ai_vision.pci_history` | sectionId, pci, at |

Object storage: MinIO raw images.

## 5. Events

`defect.detected` → Incident (nếu critical / Confirm user) · Gis · Asset section PCI.

**Liên quan (không gộp slug):** phát hiện **TS/thiết bị mới** từ camera tuần đường → [`ai-asset-detect.md`](ai-asset-detect.md) (tạo Asset, không tạo Vấn đề).

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-F-AIV-01 Dataset ≥20k + train P2 | OUT P1 · sau gate (`14`) |
| GAP-F-AIV-02 Token budget | Alert $200/tháng (`08`) |
| GAP-F-AIV-03 License P2-A vs P2-B | Chốt HĐ trước train (`14` §7) |
| GAP-F-AIV-04 Detect stub / `mock://` | V1: host `Linm.RMMS.Vision` — plan `ai-vision-service` |

## 7. Demo checklist

- [x] Flow ảnh → kết quả class rõ (demo interactive)
- [x] Badge P1 online vs P2 local (toggle + seed DET-904)
- [x] Link tạo Vấn đề từ detection critical
- [x] Không hứa mAP local trong P1
- [x] PCI history mock
- [x] Map live Leaflet pin
- [x] Phân biệt `ai-asset-detect`
- [x] Dev catalog `/demo/p/ai-vision` · domain `ai-vision`

**Sign-off UI:** localStorage `tn-demo:ai-vision:signed` trên demo page.

## 8. Train, convert, gộp model (edge Camera tuần)

Trang Camera tuần chạy ONNX trên máy người dùng. Train và xuất file nằm ngoài app. Bước gắn nhãn Roboflow: [`docs/tinh-nang/ai-vission/train-o-ga.md`](../../tinh-nang/ai-vission/train-o-ga.md). Xuất `.pt` → `.onnx`: skill `/install-py-onnx` · lệnh Windows [`install-py-onnx/example/windows-export.md`](../../../../AI-Rules/Linm.Development.Rules/common/skill/install-py-onnx/example/windows-export.md).

Mục 6 của `train-o-ga.md` còn nói parser bỏ đầu 1 lớp và file mặt đường đang chạy là `combined_traffic_model.onnx`. Phần dưới đây là trạng thái đang chạy.

### 8.1 File đang chạy

| Nhóm UI | File | Đầu ra | Việc trên trang |
|---------|------|--------|-----------------|
| Sự cố | `Linm.Web.RMMS.Mobile/public/ai-model/mat-duong-model.onnx` | YOLO11s · 1 lớp `pothole` · input `[1,3,640,640]` · output `[1,5,8400]` | `ROAD_MODEL_PATH` · ngưỡng 0.25 · lớp 0 → `POTHOLE` mức cao · nhãn «Ổ gà» |
| Biển báo | `public/ai-model/traffic-sign-yolo11s.onnx` | YOLO11s · 82 tên trong `signClassNames.ts` · output `[1,86,8400]` | `SIGN_MODEL_PATH` · ngưỡng 0.25 · mọi lớp là `TRAFFIC_SIGN` · hiện đúng tên biển |

Trang không gộp hai file thành một lần quét. Người dùng chọn Sự cố hoặc Biển báo. Parser chỉ vẽ hộp khi số lớp khớp 1, 5, 3, 82, hoặc COCO ≥ 80. Đầu lớp khác bị bỏ.

Deploy không đẩy `public/ai-model`. Copy tay vào gốc site. Không commit `.pt` / `.onnx`.

### 8.2 Convert

1. Train YOLOv11 Small, ảnh **640 × 640 Fit (black)**. Không RF-DETR, YOLO26, YOLO-NAS.
2. Tải trọng số `.pt`. Có sẵn `.onnx` thì dùng, không xuất lại.
3. Máy chưa có Python 3.12: `/install-py-onnx` cài `Python.Python.3.12`. Alias Store (exit 9009) không phải bản thật.
4. Xuất bằng `Scripts\yolo.exe export model={PtPath} format=onnx imgsz=640`. Không dùng `python -m ultralytics`.
5. Shape: 1 lớp → `[1,5,8400]`. N lớp → `[1,4+N,8400]`.
6. Đặt file dưới `public/ai-model/`. Đổi parser trước khi đổi số lớp, rồi mới trỏ `ROAD_MODEL_PATH` hoặc `SIGN_MODEL_PATH`.

### 8.3 Trạng thái đã chốt

| Nhóm | Trạng thái |
|------|------------|
| Sự cố — Ổ gà | **Đã train.** File đang chạy `mat-duong-model.onnx` |
| Sự cố — các loại còn lại | **Pending.** Chưa train |
| Biển báo | **Dùng model open** [YOLO11s 82 lớp Việt Nam](https://huggingface.co/star092304/traffic-sign-detection-vietnam-yolo). Không phải bộ train nội bộ. Chi tiết và kế hoạch retrain tách theo từng biển ở §8.5 |

Không gộp ổ gà với tên biển trong một file trọng số. Hai nhóm giữ hai file.

### 8.4 Sự cố

Taxonomy: [`14-P2-AI-VISION-STANDARD.md`](../14-P2-AI-VISION-STANDARD.md) §3. Id không đổi.

| id | class | Nhãn | Train |
|----|-------|------|-------|
| 0 | `pothole` | Ổ gà | Đã train |
| 1 | `longitudinal_crack` | Nứt dọc | Pending |
| 2 | `transverse_crack` | Nứt ngang | Pending |
| 3 | `alligator_crack` | Nứt mai rùa | Pending |
| 4 | `bleeding` | Chảy nhựa | Pending |
| 5 | `raveling` | Bong bật | Pending |
| 6 | `rutting` | Lún vệt bánh | Pending |
| 7 | `patching` | Vá đường | Pending |
| 8 | `edge_damage` | Hư mép | Pending |
| 9 | `landslide` | Sạt lở | Pending |

Pending: chưa có file ONNX riêng và chưa có đợt train. Khi train một loại, xuất ONNX `imgsz=640` theo §8.2 rồi mới gắn vào trang.

### 8.5 Biển báo — model open, retrain từng biển

Đang chạy một model open, 82 lớp, file `traffic-sign-yolo11s.onnx`. Trang hiện đúng tên trong `signClassNames.ts`. Đó là nhận tên biển, không phải sự cố.

Retrain không làm một đợt chung. Mỗi biển một dòng: giữ id, gắn nhãn lại bằng ảnh Việt Nam của đúng biển đó, rồi mới thay lớp đó trong file. Cho đến khi dòng chuyển «Đã train», lớp đó vẫn lấy từ model open.

| id | Biển | Đang dùng | Retrain |
|----|------|-----------|---------|
| 0 | Cấm vào | Model open | Pending |
| 1 | Chỉ được rẽ phải | Model open | Pending |
| 2 | Tốc độ tối đa 40 km/h | Model open | Pending |
| 3 | Cấm xe tải và xe buýt | Model open | Pending |
| 4 | Cấm xe tải | Model open | Pending |
| 5 | Hạn chế tĩnh không | Model open | Pending |
| 6 | Cấm xe ô tô | Model open | Pending |
| 7 | Nguy hiểm | Model open | Pending |
| 8 | Đi chậm | Model open | Pending |
| 9 | Nhiều chỗ ngoặt bên phải trước | Model open | Pending |
| 10 | Chướng ngại vật trên đường | Model open | Pending |
| 11 | Đường có camera giám sát | Model open | Pending |
| 12 | Tốc độ tối đa 60 km/h | Model open | Pending |
| 13 | Cấm xe máy | Model open | Pending |
| 14 | Phân làn | Model open | Pending |
| 15 | Hạn chế chiều cao | Model open | Pending |
| 16 | Cấm bóp còi | Model open | Pending |
| 17 | Cấm rẽ trái | Model open | Pending |
| 18 | Cấm rẽ phải | Model open | Pending |
| 19 | Cấm quay đầu | Model open | Pending |
| 20 | Cấm quay đầu và rẽ trái | Model open | Pending |
| 21 | Cấm quay đầu và rẽ phải | Model open | Pending |
| 22 | Có đèn tín hiệu phía trước | Model open | Pending |
| 23 | Cấm dừng và đỗ xe | Model open | Pending |
| 24 | Cấm đỗ xe | Model open | Pending |
| 25 | Cấm đi thẳng và rẽ phải | Model open | Pending |
| 26 | Cấm rẽ trái hoặc rẽ phải | Model open | Pending |
| 27 | Chỗ ngoặt nguy hiểm bên trái | Model open | Pending |
| 28 | Chỗ ngoặt nguy hiểm bên phải | Model open | Pending |
| 29 | Giao với đường không ưu tiên | Model open | Pending |
| 30 | Giao nhau cùng cấp | Model open | Pending |
| 31 | Cấm xe máy rẽ trái | Model open | Pending |
| 32 | Giao với đường ưu tiên | Model open | Pending |
| 33 | Đường người đi bộ | Model open | Pending |
| 34 | Đường hẹp bên trái | Model open | Pending |
| 35 | Đường hẹp bên phải | Model open | Pending |
| 36 | Đường hẹp hai bên | Model open | Pending |
| 37 | Cấm xe hai bánh và ba bánh | Model open | Pending |
| 38 | Gờ giảm tốc | Model open | Pending |
| 39 | Tốc độ tối đa 50 km/h | Model open | Pending |
| 40 | Tốc độ tối đa 70 km/h | Model open | Pending |
| 41 | Tốc độ tối đa 80 km/h | Model open | Pending |
| 42 | Giao đường sắt có rào chắn | Model open | Pending |
| 43 | Cấm ô tô quay đầu | Model open | Pending |
| 44 | Cấm xe buýt | Model open | Pending |
| 45 | Cấm vượt | Model open | Pending |
| 46 | Trẻ em | Model open | Pending |
| 47 | Người đi bộ cắt ngang | Model open | Pending |
| 48 | Hết mọi lệnh cấm | Model open | Pending |
| 49 | Đi vòng sang trái | Model open | Pending |
| 50 | Công trường | Model open | Pending |
| 51 | Đường một chiều | Model open | Pending |
| 52 | Rẽ trái | Model open | Pending |
| 53 | Rẽ phải | Model open | Pending |
| 54 | Đèn xanh | Model open | Pending |
| 55 | Đèn đỏ | Model open | Pending |
| 56 | Vòng xuyến | Model open | Pending |
| 57 | Tốc độ tối đa 10 km/h | Model open | Pending |
| 58 | Tốc độ tối đa 100 km/h | Model open | Pending |
| 59 | Tốc độ tối đa 110 km/h | Model open | Pending |
| 60 | Tốc độ tối đa 120 km/h | Model open | Pending |
| 61 | Tốc độ tối đa 20 km/h | Model open | Pending |
| 62 | Tốc độ tối đa 30 km/h | Model open | Pending |
| 63 | Tốc độ tối đa 90 km/h | Model open | Pending |
| 64 | Dừng lại | Model open | Pending |
| 65 | Chỗ quay xe | Model open | Pending |
| 66 | Cấm đỗ ngày lẻ | Model open | Pending |
| 67 | Cấm đỗ ngày chẵn | Model open | Pending |
| 68 | Nơi đỗ xe | Model open | Pending |
| 69 | Trạm xe buýt | Model open | Pending |
| 70 | Bệnh viện | Model open | Pending |
| 71 | Cấm ô tô quay đầu và rẽ trái | Model open | Pending |
| 72 | Khu vực tai nạn | Model open | Pending |
| 73 | Đường đôi | Model open | Pending |
| 74 | Cấm ô tô rẽ trái | Model open | Pending |
| 75 | Dốc lên | Model open | Pending |
| 76 | Cầu hẹp | Model open | Pending |
| 77 | Đường không bằng phẳng | Model open | Pending |
| 78 | Hết hạn chế tốc độ 50 km/h | Model open | Pending |
| 79 | Khu đông dân cư | Model open | Pending |
| 80 | Khu dân cư thưa | Model open | Pending |
| 81 | Đường trơn | Model open | Pending |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa (web) · done (mobile lane)` | `await_confirm (web QA) · in_progress (mobile)` | `2026-09-19T06:01:55.451Z` |
| mobile | `done` | `await_confirm` | `2026-09-19T06:04:35.052Z` |
