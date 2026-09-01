# Thu thập bằng camera (tuần đường) — Feature Context

> **Slug:** `cam-patrol` · **Module:** `Patrol` + `AiVision` + `Incident` · **Phase:** P1 mobile  
> **Status:** PO confirmed · **packKind:** `screen` (PO đóng GAP-MOB-CAM-PACK-01) · **demo surface:** full screen `#sc-cam-patrol`  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · finder `DES-MOB-CAM-FINDER`  
> **Workflow anim:** `specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/ai-vision/detect` · `api/v1/incident/incidents` · domain **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/*` proxy  
> **Peers:** `patrol-home.md` · `ai-vision.md` · `field-reflect.md` · design `specs/mobile-p1/ui/design.md` §5b bước 2

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trong ca tuần đường: camera finder + GPS chốt → AI nhận diện mặt đường theo tọa độ → user **xác nhận** tạo vấn đề hoặc **bỏ qua** |
| Persona | Tuần đường hiện trường |
| Entry | `patrol-home` row «Thu thập bằng camera» · `#i-video` · cũng từ `#sc-inc-form` secondary |
| DoD P1 | Finder live · stamp tuyến/Km/GPS · card phát hiện · Confirm → POST incident · Skip dismiss · **cấm** fake lat/lng · **cấm** mfeStdUrl |
| Design rule | Hệ thống detect (ảnh + tọa độ + video) · user xác nhận sau · **cấm** score chrome ship (demo có % — Design ẩn) |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full (tab `field`) | `DES-MOB-CAM-PATROL` | Title «Thu thập bằng camera» · back → patrol-home |
| Finder | Camera viewfinder + FOV box | `DES-MOB-CAM-FINDER` | Stamp route · Km · lat,lng · ±m · đã chốt |
| Detection card | 3 list rows | — | Phát hiện · Độ tin cậy · Hành động |
| Primary | Confirm | — | «Xác nhận · tạo vấn đề» → toast SC-* |
| Secondary | Skip | — | «Bỏ qua» → toast nhận nhầm |

**Không** gộp: `field-reflect` (phản ánh tay) · `cam-view` (Tôi xem cam) · `vis-capture` · `ai-asset-detect` · web `camera-connect`.

## 3. API (mobile BFF — cấm invent path riêng `cam-patrol`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/sessions` | Patrol sessions | **Live** — stamp tuyến / ca |
| POST | `ai-vision/detect` | `AiVisionOpsController.Detect` | **Live stub** — engine/note |
| GET | `ai-vision/detections` | detections CRUD | **Live** — optional list |
| POST | `incident/incidents` | `IncidentsController.Create` | **Live** — confirm tạo vấn đề |
| GPS / camera stream | — | Device | **không** API |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/cam-patrol`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `patrol-home` | Entry hub |
| `field-reflect` | Phản ánh tay (song song · không gộp) |
| `incident-list` / create | Sau confirm · xem vấn đề |
| `patrol-offline` | Queue khi mất sóng |
| `ai-vision` | Domain detect (web) · reuse path |
| `cam-view` | OUT — Me JPEG view |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Stamp | QL.1 · Km 1556+040 · 11.5308, 109.0082 · ±4 m · đã chốt |
| Phát hiện | Ổ gà · Mặt đường |
| Độ tin cậy | 91% (demo) |
| Hành động | Tạo vấn đề sau xác nhận |
| Toast ok | Đã tạo vấn đề SC-2409 · định vị đã chốt |
| Toast skip | Đã bỏ · nhận nhầm |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-CAM-PACK-01 | **CLOSED** PO · packKind=`screen` · demo full `#sc-cam-patrol` |
| GAP-MOB-CAM-SCORE-01 | Design **cấm** score chrome · demo hiện 91% — Design ẩn % |
| GAP-MOB-CAM-DETECT-01 | `DetectAiVisionRequest` stub (Engine/Note) — SA mở rộng body ảnh/GPS/video khi Signed |
| GAP-MOB-BFF-01 | Không — proxy catch-all đủ path domain đã có |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T06:19:06.751Z` |
