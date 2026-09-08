# RMMS — Mục lục tài liệu

> **Mục đích:** Demo kỹ thuật + spec outsource.  
> **App hiện có:** `docs/Hướng dẫn sử dụng phần mềm.docx`  
> **Nguồn nghiệp vụ:** `docs/RMMS_Giaiphap_tinhnang.docx`

## Liên kết nhanh

| File | Nội dung | Đối tượng |
|------|----------|-----------|
| [**route-vn-abbr-confirm.md**](route-vn-abbr-confirm.md) | **SSOT URL MFE viết tắt VN** — đã apply 13 MFE `src/index.tsx` | PM, Dev, AI |
| [**15-SCREEN-AI-MAP.md**](15-SCREEN-AI-MAP.md) | **SSOT màn hình Web/Mobile (guide) ↔ 18 phân hệ + AI** — `/analy-requirement` + `/gen-tinh-nang-demo` | PM, BA, Dev |
| [**11-CSDL-SO-SACH-DATABASE-API.md**](11-CSDL-SO-SACH-DATABASE-API.md) | **DB + API từ hồ sơ chuẩn hóa sổ sách** — 12 biểu CSDL · 8 mẫu sổ · endpoint | Dev, BA, outsource |
| [**plan/ai-vision-service/README.md**](../plan/ai-vision-service/README.md) | **Vision stack** BE→BFF→UI — `/implement-ai-vision-stack` · host `Linm.RMMS.Vision` `:5311` · P1 GPT / P2 ONNX | Architect, Dev, AI |
| [**plan/ai-asset-detect/azure-openai-register-use.md**](../plan/ai-asset-detect/azure-openai-register-use.md) | **Azure OpenAI** — đăng ký resource · deploy `gpt-4o` vision · User Secrets · curl · UI detect | Infra, Dev |
| [**plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md**](../plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md) | Checklist tick đăng ký → verify → 1 frame thật | Infra, Dev |
| [**features/login.md**](features/login.md) | **Login Platform.Authentication + TK theo HĐ + job Active/Inactive** | PM, BA, Dev, Security |
| [**plan/login-contract-lifecycle/**](../plan/login-contract-lifecycle/SPEC.md) | Spec + plan vòng đời tài khoản theo hạn HĐ · tuyến km | PM, Architect — **approved** 2026-08-15 |
| [**FEATURE-TRACKING.md**](FEATURE-TRACKING.md) | **SSOT theo dõi all feature** — demo + STATUS + implement + **release slice** (P2 trong repo ≠ conflict) | PM, Dev, AI |
| [**docs/data/SOURCE-TRACKING.md**](../data/SOURCE-TRACKING.md) | **SSOT tài liệu khách** — đã / chưa phân tích · **cấm** đọc lại binary khi `analyzed` | PM, BA, AI |
| [**features/README.md**](features/README.md) | **Feature backlog + context (design/API/DB)** — `/gen-tinh-nang-demo` | PM, Dev, khách chốt UI |
| [**features/map-service.md**](features/map-service.md) | MapService — `Linm.Platform.MapService` `:5021` · 34 tỉnh ingest · BFF/MFE GAP | Architect, GIS, Data |
| [**features/gis-osm-clip.md**](features/gis-osm-clip.md) | GIS prod: OSM clip + overlay MapService | GIS, FE, Mobile |
| [**features/legal-tech-corridor.md**](features/legal-tech-corridor.md) | Luật VN + Store (GPS / vẽ TS / guest) | Pháp chế, PM Store |
| [**features/directions.md**](features/directions.md) | Chỉ đường / HD điện tử guest | Product, Mobile |
| [**features/import-gov-ssot.md**](features/import-gov-ssot.md) | **SSOT data dự án** — set `gov-vn` (429 tuyến · 642k KCHT · 2.920 đoạn) · hub 40 ô vs live DRVN · recapture dump. `Mẫu import` / `RMMS CUC 2` = demo | PM, Dev, Data |
| [**implement-status.json**](implement-status.json) | **Pipeline implement theo feature+lane** (git) — scan/enqueue skip cùng status khi đổi máy | AutoCode scan · Dev |
| [**24-TUAN-DUONG-DUONG-BO.md**](24-TUAN-DUONG-DUONG-BO.md) | **SSOT đề cương Web-App tuần đường × đường bộ** — TT 04 · 4 nhóm · 3 trụ cột · map slug `patrol` / `road-route` | PM, BA, Dev |
| [**25-PLATFORM-TASK.md**](25-PLATFORM-TASK.md) | **SSOT Platform.TaskService** — extract Medical QLCV · SLA/SignalR · apply RMMS sau ca · [PLAN](../plan/platform-task/PLAN.md) · [RMMS tuần đường](../plan/platform-task/RMMS-TUAN-DUONG.md) | PM, Architect, Dev |
| [**26-MESSAGE-PARCEL.md**](26-MESSAGE-PARCEL.md) | **SSOT chat** — `@linm/message` parcels · send `fa-paper-plane` · expand TabSlideout + ↗ | PM, Architect, FE |
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
| [06-SECURITY-RATELIMIT.md](06-SECURITY-RATELIMIT.md) | Bảo mật · rate limit · **§0 ATTT cấp 1–2** (`/review-data-security-l1-l2`) ≠ Layer mạng/app | Security, Dev, pháp chế |
| [**14-P2-AI-VISION-STANDARD.md**](14-P2-AI-VISION-STANDARD.md) | **P2 chuẩn hóa** — stack P2-A/B · license · data · ONNX · DoD | PM, AI lead, Dev, legal |
| [**13-AI-SERVER-BY-PHASE.md**](13-AI-SERVER-BY-PHASE.md) | Phase → cloud / vật lý / Vast | Infra, PM |
| [**12-AI-COST-PHASES.md**](12-AI-COST-PHASES.md) | Chi phí AI theo giai đoạn | PM, CFO |
| [**10-YOLO-SERVER-REQUIREMENTS.md**](10-YOLO-SERVER-REQUIREMENTS.md) | Spec GPU worker (ONNX infer/train) | Infra |
| [**17-GPU-VNSO-COST-STANDARD.md**](17-GPU-VNSO-COST-STANDARD.md) | **SSOT SKU GPU + chi phí VNSO** — Train A100 PAYG · Infer V100/L4/A40 tháng · plan P2/P2.1 | Infra, PM, CFO |
| [**16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md**](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) | **System design ITS** — biển báo/cọc tiêu · edge AI · PostGIS 10 m · BFF/Auth · SignalR · OTA | Architect, BE, AI, Mobile |
| [**18-ITS-ANPR-OVERLOAD-SPEC.md**](18-ITS-ANPR-OVERLOAD-SPEC.md) | **P2 Spec** — Camera ANPR+WIM → Cục Đăng kiểm → HITL xác nhận lỗi tốc độ/quá tải | Architect, BE, PM, BA |
| [`features/ai-its/bb-ct.md`](features/ai-its/bb-ct.md) | Feature ITS — biển báo/cọc · **P2-A train** · cam IP · user/auto gim · sự cố mất (reconcile) · §8–§12 | PM, Dev, AI |
| [`features/ai-its/toc-do-qt.md`](features/ai-its/toc-do-qt.md) | Feature context ANPR overload · demo `/demo/p/ai-its/toc-do-qt` | PM, Dev |
| [`features/camera-connect.md`](features/camera-connect.md) | Kết nối camera ITS · model SDK-first TCM403 · `sdkPort`/`httpPort` · ISAPI · MFE `Linm.Web.RMMS.Camera` · **pilot wall+map** | PM, Dev, ITS |
| [**camera-ops-dashboard-demo.html**](../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) | **Pilot** wall kéo-thả nhiều cam + GIS 1-click đếm xe/event + slideout live | Stakeholder, Camera, GIS |
| [**21-CAMERA-HLS-WEBRTC-GATEWAY.md**](21-CAMERA-HLS-WEBRTC-GATEWAY.md) | **Plan P2** — RTSP → HLS/WebRTC gateway (MediaMTX · live session · MFE player) | Architect, BE, FE, Infra |
| [**22-CAMERA-TCM403-SDK-RESEARCH.md**](22-CAMERA-TCM403-SDK-RESEARCH.md) | SDK vs ISAPI · port 8000/8100 · **P1.5 BE** `CameraModelCatalog` + `HikvisionSdkClient` | Architect, BE |
| [**23-CAMERA-HOST-NOTIFY-CONFIG.md**](23-CAMERA-HOST-NOTIFY-CONFIG.md) | **Cấu hình cam → Host nhận event** · ví dụ `camera-event-api-rmms.vn` · đếm Events · skill `/agent-dev-camera-connect` | ITS ops, BE, Dev |
| [**camera-model.md**](camera-model.md) | Catalog model Hikvision (TCM403-GIR + DeepinView…) | Architect, Dev |
| [**27-CAMERA-SITE-INSTALL-BRIEF.md**](27-CAMERA-SITE-INSTALL-BRIEF.md) | **Gửi khách** — expect **xem live tại TTĐH** · tủ điện · quang/VPN · IP tĩnh + RTSP · gateway + tường hình | Khách, PM, ITS |
| [**28-CAMERA-SECURITY.md**](28-CAMERA-SECURITY.md) | **Camera security** — AEAD 2 chiều · tách `Linm.RMMS.Camera` · resign URL exp / grant dashboard unlimit | Architect, BE, Security |
| [**plan/camera-live/PLAN.md**](../plan/camera-live/PLAN.md) | **P2-G0/G1 live** — MediaMTX Hub+VPN · live/start · MFE HLS/WebRTC · fallback JPEG | Architect, Dev, ITS |
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
