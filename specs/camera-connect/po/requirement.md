# PO — camera-connect

> **Feature:** `camera-connect` · **MFE:** `Linm.Web.RMMS.Camera` · **Phase:** P1 Demo  
> **BE:** deferred (user 4-C)

## Goal

User cấu hình kết nối camera ITS (model **iDS-TCM403-GIR**), xem live mock, nhận event tốc độ/detect từ camera — không cần BE ở P1.

## Personas

- Kỹ thuật Chi cục / ITS admin

## CTX / DEM / DI

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/camera-connect.md` | SSOT |
| CTX-02 | `docs/context/camera-model.md` | Catalog + TCM403 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` | Config · live · events |
| DI-01 | — | N/A P1 |

## Acceptance (P1)

1. Nhập IP · PORT · User · Pass · model · tuyến/Km  
2. Chọn RTSP / ONVIF / ISAPI / SDK  
3. Test kết nối mock → Online  
4. Live mock + mô phỏng event (biển · tốc độ · loại · hướng)  
5. Lưu localStorage  

## Out of scope P1

- BE CRUD · ISAPI listener thật · RTSP→HLS gateway · HITL quá tải (`its-anpr-overload`)

## Handoff → Design

- Kind C full page · zones Z1–Z4 (context §2)  
- reviewUrl = demo DEM-01  

---

Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · versionGate=ok
