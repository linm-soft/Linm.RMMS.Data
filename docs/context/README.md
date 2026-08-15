# RMMS — Mục lục tài liệu

> **Mục đích:** Demo kỹ thuật + spec outsource.  
> **App hiện có:** `docs/Hướng dẫn sử dụng phần mềm.docx`  
> **Nguồn nghiệp vụ:** `docs/RMMS_Giaiphap_tinhnang.docx`

## Liên kết nhanh

| File | Nội dung | Đối tượng |
|------|----------|-----------|
| [**15-SCREEN-AI-MAP.md**](15-SCREEN-AI-MAP.md) | **SSOT màn hình Web/Mobile (guide) ↔ 18 phân hệ + AI** — `/analy-requirement` + `/gen-tinh-nang-demo` | PM, BA, Dev |
| [**11-CSDL-SO-SACH-DATABASE-API.md**](11-CSDL-SO-SACH-DATABASE-API.md) | **DB + API từ hồ sơ chuẩn hóa sổ sách** — 12 biểu CSDL · 8 mẫu sổ · endpoint | Dev, BA, outsource |
| [**plan/ai-asset-detect/azure-openai-register-use.md**](../plan/ai-asset-detect/azure-openai-register-use.md) | **Azure OpenAI** — đăng ký resource · deploy `gpt-4o` vision · User Secrets · curl · UI detect | Infra, Dev |
| [**plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md**](../plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md) | Checklist tick đăng ký → verify → 1 frame thật | Infra, Dev |
| [**features/login.md**](features/login.md) | **Login Platform.Authentication + TK theo HĐ + job Active/Inactive** | PM, BA, Dev, Security |
| [**plan/login-contract-lifecycle/**](../plan/login-contract-lifecycle/SPEC.md) | Spec + plan vòng đời tài khoản theo hạn HĐ · tuyến km | PM, Architect — **approved** 2026-08-15 |
| [**features/README.md**](features/README.md) | **Feature backlog + context (design/API/DB)** — `/gen-tinh-nang-demo` | PM, Dev, khách chốt UI |
| [**20-ORG-STRUCTURE-DRVN.md**](20-ORG-STRUCTURE-DRVN.md) | **SSOT cơ cấu tổ chức Cục ĐB** — Master catalog `org-unit` · SearchInput | Admin, BA, Dev |
| [**seed/org-unit-seed.json**](seed/org-unit-seed.json) | **Seed tree 60 nodes** (code/parent/kind) — AI Design/SA ref | Design, SA, Dev |
| [**features/master.md**](features/master.md) | Hub Master MFE — org-unit · road-route · asset-type · partner-unit (**no demo**) | PM, Dev |
| [**src/demo (std)**](../Linm.RMMS.Demo/src/demo/index.html) | **Hub demo chạy standalone** — `npm run start:std` · form + map JS | Dev, BA |
| [**gis-draw-live.html**](../Linm.RMMS.Demo/src/demo/features/gis-draw-live.html) | **Bản đồ live** Leaflet — vẽ Point/Line/Polygon (cần mạng) | Dev, BA |
| [**gis-3d-twin.html**](../Linm.RMMS.Demo/public/demo/gis/gis-3d-twin.html) | **Digital Twin 3D CesiumJS** — Cột Km thật QL.1 · Chi cục II.1 | Stakeholder, GIS, outsource |
| [**pavement-section-list.html**](../Linm.RMMS.Demo/src/demo/features/pavement-section-list.html) | **ERP form demo** Biểu 1 mặt đường (Kind B list+form) | Dev, BA |
| [**gis-draw-google-demo.html**](../Linm.RMMS.Demo/src/demo/features/gis-draw-google-demo.html) | **Vẽ tài sản trên Google Map** (parity GOVOne / `1-ban-do.png`) | Stakeholder, GIS |
| [index.html](../Linm.RMMS.Demo/docs/index.html) | Pitch demo outsource (VI/EN) | PM, stakeholder |
| [hang-muc-trien-khai.html](../Linm.RMMS.Demo/docs/hang-muc-trien-khai.html) | **Catalog 18 hạng mục** — lọc P1–P3, chi tiết API/tasks/đội SV | PM, Dev, outsource |
| [workflow-demo.html](../Linm.RMMS.Demo/docs/workflow-demo.html) | Demo kỹ thuật 5 tab | Dev, architect |
| [**07-TECHNICAL-IMPLEMENTATION.md**](07-TECHNICAL-IMPLEMENTATION.md) | **SSOT kỹ thuật theo 18 hạng mục + tech stack cho team code** | **Dev team** |
| [01-PLATFORM-OVERVIEW.md](01-PLATFORM-OVERVIEW.md) | Tổng quan nền tảng | C-level, PM |
| [02-SYSTEM-ARCHITECTURE.md](02-SYSTEM-ARCHITECTURE.md) | Mono + 14 phân hệ | Architect |
| [03-EVENT-ARCHITECTURE.md](03-EVENT-ARCHITECTURE.md) | Event, realtime, offline | Backend |
| [04-PROGRAMS.md](04-PROGRAMS.md) | Nhóm phân hệ / server AI (tham khảo) | PM |
| [05-DASHBOARD.md](05-DASHBOARD.md) | Dashboard & KPI | Product |
| [06-SECURITY-RATELIMIT.md](06-SECURITY-RATELIMIT.md) | Bảo mật · rate limit | Security, Dev |
| [**14-P2-AI-VISION-STANDARD.md**](14-P2-AI-VISION-STANDARD.md) | **P2 chuẩn hóa** — stack P2-A/B · license · data · ONNX · DoD | PM, AI lead, Dev, legal |
| [**13-AI-SERVER-BY-PHASE.md**](13-AI-SERVER-BY-PHASE.md) | Phase → cloud / vật lý / Vast | Infra, PM |
| [**12-AI-COST-PHASES.md**](12-AI-COST-PHASES.md) | Chi phí AI theo giai đoạn | PM, CFO |
| [**10-YOLO-SERVER-REQUIREMENTS.md**](10-YOLO-SERVER-REQUIREMENTS.md) | Spec GPU worker (ONNX infer/train) | Infra |
| [**17-GPU-VNSO-COST-STANDARD.md**](17-GPU-VNSO-COST-STANDARD.md) | **SSOT SKU GPU + chi phí VNSO** — Train A100 PAYG · Infer V100/L4/A40 tháng · plan P2/P2.1 | Infra, PM, CFO |
| [**16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md**](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) | **System design ITS** — biển báo/cọc tiêu · edge AI · PostGIS 10 m · BFF/Auth · SignalR · OTA | Architect, BE, AI, Mobile |
| [**18-ITS-ANPR-OVERLOAD-SPEC.md**](18-ITS-ANPR-OVERLOAD-SPEC.md) | **P2 Spec** — Camera ANPR+WIM → Cục Đăng kiểm → HITL xác nhận lỗi tốc độ/quá tải | Architect, BE, PM, BA |
| [`features/its-traffic-detect.md`](features/its-traffic-detect.md) | Feature context ITS (map demo `ai-asset-detect`) | PM, Dev |
| [`features/its-anpr-overload.md`](features/its-anpr-overload.md) | Feature context ANPR overload · demo `/demo/p/its-anpr-overload` | PM, Dev |
| [`features/camera-connect.md`](features/camera-connect.md) | Kết nối camera ITS · model SDK-first TCM403 · `sdkPort`/`httpPort` · ISAPI · MFE `Linm.Web.RMMS.Camera` | PM, Dev, ITS |
| [**21-CAMERA-HLS-WEBRTC-GATEWAY.md**](21-CAMERA-HLS-WEBRTC-GATEWAY.md) | **Plan P2** — RTSP → HLS/WebRTC gateway (MediaMTX · live session · MFE player) | Architect, BE, FE, Infra |
| [**22-CAMERA-TCM403-SDK-RESEARCH.md**](22-CAMERA-TCM403-SDK-RESEARCH.md) | SDK vs ISAPI · port 8000/8100 · **P1.5 BE** `CameraModelCatalog` + `HikvisionSdkClient` | Architect, BE |
| [**23-CAMERA-HOST-NOTIFY-CONFIG.md**](23-CAMERA-HOST-NOTIFY-CONFIG.md) | **Cấu hình cam → Host nhận event** · ví dụ `camera-event-api-rmms.vn` · đếm Events · skill `/agent-dev-camera-connect` | ITS ops, BE, Dev |
| [**camera-model.md**](camera-model.md) | Catalog model Hikvision (TCM403-GIR + DeepinView…) | Architect, Dev |
| [**19-IP-REGISTRATION-MATRIX.md**](19-IP-REGISTRATION-MATRIX.md) | **Ma trận SHTT VN** — thành phần có thể đăng ký (QTG · NH · GPHI · BMKD) · gói G0–G6 | PM, legal, C-level |

## Demo standalone (std mode)

```bash
cd Linm.RMMS.Demo/src/demo
npm run start:std
# → http://localhost:5180
```

Hoặc từ root package:

```bash
cd Linm.RMMS.Demo
npm run start:std
```
