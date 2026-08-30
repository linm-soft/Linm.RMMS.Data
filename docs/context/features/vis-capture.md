# Nhận diện mặt đường (chụp) — Feature Context

> **Slug:** `vis-capture` · **Module:** `AiVision` + `Incident` · **Phase:** P1 mobile  
> **Status:** sa confirmed · **packKind:** `screen` (PO chốt · đóng GAP-MOB-VIS-PACK-01) · **demo surface:** full screen `#sc-vis-capture`  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE`  
> **Entry:** `incident-list` banner `.vn-banner` `#i-camera` · also AI hub row  
> **BE:** `Linm.RMMS.WebService` · `api/v1/ai-vision/detect` · `api/v1/ai-vision/uploads/*` · `api/v1/incident/incidents` · domain **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/*` proxy  
> **Peers:** `ai-vision.md` · `incident-list.md` · `incident-create.md` · `cam-patrol.md` · `photo-capture` (guide) · design `specs/mobile-p1/ui/design.md` AI mặt đường

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Từ tab Vấn đề: chụp ảnh mặt đường + GPS chốt → server nhận diện (P1 GPT) → hiện phân loại/mức → user **Gắn sự cố** hoặc **Bỏ qua** |
| Persona | Tuần đường hiện trường |
| Entry | `incident-list` `.vn-banner` «Nhận diện mặt đường» · chip jump · row AI hub |
| DoD P1 | PhotoRow + GPS chốt · POST detect · rows phân loại/mức · Gắn sự cố → POST incident · Bỏ qua dismiss · **cấm** fake lat/lng · **cấm** nhận diện cục bộ · **cấm** mfeStdUrl |
| Design rule | Chạy nhận diện trên máy chủ · thiếu định vị hoặc sai số **> 30 m** → **không** gửi detect · UI chỉ «Vị trí đã chốt» / sai số — **không** tên thuật toán |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full (tab `incident`) | `DES-MOB-VIS-CAPTURE` | Title «Nhận diện mặt đường» · back → incident-list |
| Photos | PhotoRow + camera slot | — | `openCapture('vision')` · `#i-camera` |
| Result card | 4 list rows | — | Vị trí đã chốt · Sai số định vị · Phân loại · Mức (+ badge) |
| Primary | Gắn sự cố | — | toast «Đã gắn sự cố» → POST incident + DetectionId |
| Secondary | Bỏ qua | — | iOS demo · back list · **Android thiếu** → Design dual |

**Không** gộp: `cam-patrol` (finder tuần đường) · `det-hitl` (TS HITL) · `incident-create` form đầy đủ · `cam-view` · web `ai-vision` catalog · `ai-asset-detect`.

## 3. API (mobile BFF — cấm invent path riêng `vis-capture`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| POST | `ai-vision/uploads/init` | `AiVisionUploadsController` | **Live** — optional media |
| PUT | `ai-vision/uploads/{id}/object` | uploads Put | **Live** — optional |
| POST | `ai-vision/uploads/complete` | uploads Complete | **Live** — optional |
| POST | `ai-vision/detect` | `AiVisionOpsController.Detect` | **Live** — `DetectAiVisionRequest` (ImageBase64 · Lat · Lng · AccuracyM · Engine · Note) |
| GET | `ai-vision/detections/{id}` | detections GetById | **Live** — optional reload |
| GET | `patrol/sessions` | Patrol sessions | **Live** — optional stamp tuyến/Km |
| POST | `incident/incidents` | `IncidentsController.Create` | **Live** — Gắn sự cố |
| GPS / camera | — | Device | **không** API |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/vis-capture`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `incident-list` | Entry banner + back |
| `cam-patrol` | Finder tuần đường (song song · không gộp) |
| `incident-create` | Form ghi sự cố đầy đủ (song song) |
| `det-hitl` | HITL tài sản — OUT pack này |
| `ai-vision` | Domain web detect · reuse path |
| `patrol-offline` | Queue khi mất sóng |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Loc | QL.1 · Km 1556+050 |
| Accuracy | ±4 m |
| Phân loại | Nứt dọc |
| Mức | Cao (badge orange) |
| Toast ok | Đã gắn sự cố |
| Gate GPS | Không gửi nếu thiếu định vị hoặc sai số > 30 m |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-VIS-PACK-01 | **CLOSED** PO · packKind=`screen` · surface `#sc-vis-capture` · **cấm** sheet chrome |
| GAP-MOB-VIS-DUAL-01 | Android thiếu section «Ảnh hiện trường» + CTA «Bỏ qua» vs iOS — Design dual |
| GAP-MOB-VIS-DETECT-01 | **SA chốt** · path giữ `POST ai-vision/detect` · P1 stub + body live · Signed engine harden → T-BE pending TL · Step 4b **không** ở SA |
| GAP-MOB-VIS-GPS-01 | **CLOSED** · client gate AccuracyM ≤ 30 m trước POST detect |
| GAP-MOB-BFF-01 | Không — proxy catch-all đủ path domain đã có |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T10:33:13.226Z` |
