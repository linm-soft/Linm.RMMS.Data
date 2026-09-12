# Ghi nhận hư hỏng (phản ánh hiện trường) — Feature Context

> **Slug:** `field-reflect` · **Module:** `Patrol` + `Incident` + `AiVision` (+ checklist `asset-kcht-32`) · **Phase:** P1 mobile  
> **Status:** sa confirmed · **packKind:** `screen` (PO+Design+SA chốt · đóng GAP-MOB-FIELD-PACK-01) · **demo surface:** full screen `#sc-field-reflect`  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/incident/incidents` · `api/v1/ai-vision/detect` · `api/v1/patrol/sessions` · domain **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/*` proxy  
> **Peers:** `patrol-home.md` · `cam-patrol.md` · `incident.md` · `asset-kcht-32.md` · design `specs/mobile-p1/ui/design.md` §5b bước 1

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Trong ca tuần đường: chọn loại phản ánh **Hư / Mất / Hỏng** · chụp ảnh hiện trường · GPS chốt · (tuỳ chọn) nhận diện AI · checklist theo loại TS · **Tạo vấn đề** gắn ca · hoặc **Lưu nháp mất sóng** |
| Persona | Tuần đường hiện trường |
| Entry | `patrol-home` row «Ghi nhận hư hỏng» · `#row-reflect` · `#i-camera` |
| DoD P1 | Dual · **pick KCHT-32** → form (kind · checklist by asset · PhotoRow · GPS · mức · mô tả · Create/Draft) · POST incident · offline · **cấm** fake lat/lng · **cấm** mfeStdUrl · **cấm** gộp slug `incident-create` |
| Design rule | Phản ánh **tay** (khác `cam-patrol` finder liên tục) · **cấm** badge P1/P2 trên header |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Pick | Full gate | — | `#sc-field-pick` · grid loại TS (KCHT-32 / `startIncidentPick` pattern) |
| Screen | Full form (tab `field`) | `DES-MOB-FIELD-REFLECT` | Title «Ghi nhận hư hỏng» · back → pick |
| Kind | Pill / segment 3 | `DES-MOB-FIELD-KIND` | Hư · Mất · Hỏng |
| Photos | PhotoRow + camera slot | — | `openCapture('reflect')` · `#i-camera` |
| Result card | 3 list rows | — | Nhận diện · Mức · Vị trí đã chốt |
| Checklist | Checkbox rows | — | `AssetKcht32.fillChecklist(…, 'PAVEMENT')` demo |
| Primary | Submit | — | «Tạo vấn đề» → toast SC-* · gắn ca |
| Secondary | Offline draft | — | «Lưu nháp mất sóng» → Lưu trữ / `patrol-offline` |

**Không** gộp: `cam-patrol` (finder AI) · `inc-form` / sheet-incident · `cam-view` · web `camera-connect`.

## 3. API (mobile BFF — cấm invent path riêng `field-reflect`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/sessions` | `PatrolSessionsController` | **Live** — ca / tuyến gắn vấn đề |
| POST | `ai-vision/detect` | `AiVisionOpsController.Detect` | **Live stub** — nhận diện sau ảnh |
| POST | `ai-vision/uploads` (init/object) | `AiVisionUploadsController` | **Live** — optional media trước detect |
| GET | `integration/asset-types` | `AssetTypesController` | **Live** — catalog loại TS |
| POST | `incident/incidents` | `IncidentsController.Create` | **Live** — Tạo vấn đề |
| GPS / camera | — | Device | **không** API |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/field-reflect`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `patrol-home` | Entry hub |
| `cam-patrol` | Thu thập camera (song song · không gộp) |
| `incident` / list | Sau tạo · xem vấn đề |
| `patrol-offline` | Queue khi mất sóng / nháp |
| `asset-kcht-32` | Checklist taxonomy theo loại TS |
| `inc-form` | Form sự cố tab Vấn đề — **OUT** pack này |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Kind default | Hư |
| Nhận diện | Ổ gà · Mặt đường |
| Mức | Cao |
| Vị trí | QL.1 · Km 1556+040 · ±4 m |
| Checklist | PAVEMENT (Ổ gà · Nứt · Lún · Bong tróc · Mờ vạch) |
| Toast ok | Đã tạo vấn đề SC-2408 · gắn ca tuần |
| Toast draft | Đã lưu nháp · Lưu trữ |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-FIELD-PACK-01 | **CLOSED** PO — packKind=`screen` full `#sc-field-reflect` (scan `sheet` = mislabel) |
| GAP-MOB-FIELD-MEDIA-01 | `CreateIncidentRequest` chưa có media[] — P1: upload/detect optional · Description/AssetLabel bind · SA mở rộng nếu Signed · **Accept** |
| GAP-MOB-FIELD-CHK-01 | Checklist taxonomy = demo `asset-kcht-32.js` / CTX — **không** invent endpoint checklist riêng |
| GAP-MOB-CAM-DETECT-01 | Reuse detect stub body (ảnh/GPS) — SA cùng path `ai-vision/detect` |
| GAP-MOB-BFF-01 | Không — proxy catch-all đủ path domain đã có |
| **GAP-MOB-FIELD-SESS-01** | **OPEN** (code review 2026-09-12) — GET `patrol/sessions` fail vẫn `itemsOrDemo` / demo tuyến · DoD: **live-only** · fail/empty = empty + toast · **cấm** `itemsOrDemo` (peer cam-patrol / patrol-checkin) |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T11:16:17.682Z` |

## Edit 2026-09-01

- gap=`field_reflect_align_incident_create` · pick asset → fill detail (align incident-create flow · keep slug `field-reflect`)
- APIs: `GET integration/asset-types` · reuse detect/incident/sessions · checklist local by asset code

## Edit 2026-09-12

- gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** · changeScope=`edit_page` · task `task_d6e72d87`
- DoD: bootstrap sessions live-only · fail/empty → empty locationRow + toast · **cấm** itemsOrDemo
