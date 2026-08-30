# Ghi sự cố — Feature Context (mobile)

> **Slug:** `incident-create` · **Module:** `Incident` + `Integration` (asset-types) + optional `AiVision` · **Phase:** P1 mobile  
> **Status:** dev confirmed · **packKind:** `screen` (PO chốt · đóng GAP-MOB-INC-CREATE-PACK-01) · **demo surface:** full screen `#sc-inc-form` (`DES-MOB-INC-FORM`) · `#sheet-incident` OUT  

> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-inc-form` · kind `DES-MOB-INC-KIND` · entry `startIncidentPick()`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/incident/incidents` · `api/v1/integration/asset-types` · domain **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/*` proxy  
> **Peers:** `incident.md` · `asset-kcht-32.md` · `home.md` · `cam-patrol.md` · `patrol-offline.md` · `estimate.md`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chọn loại tài sản (KCHT-32) → form **Ghi sự cố**: loại Hư/Mất/Hỏng · checklist theo loại · ảnh · (tuỳ) nhận diện · GPS chốt · mức · mô tả → **Tạo vấn đề** gắn tài sản · hoặc nháp offline |
| Persona | Tuần đường · hiện trường |
| Entry | Home quick «Ghi sự cố» `startIncidentPick()` · FAB `#sc-incident-list` · CTA «Ghi sự cố» trên `#sc-asset-type` |
| DoD P1 | Dual `#sc-inc-form` · pick asset → form · kind pills · checklist · PhotoRow · loc readonly · severity · mô tả · POST incident · offline draft · **cấm** fake GPS · **cấm** mfeStdUrl |
| Design rule | Form gắn **tài sản đã chọn** (khác `field-reflect` phản ánh tay không bắt buộc pick TS trước) · **cấm** gộp `#sheet-incident` |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Pick gate | Asset types grid (pick mode) | — | `startIncidentPick()` · banner «Chọn loại tài sản để ghi sự cố» · → `openIncidentForm(code)` |
| Screen | Full (tab `home` chrome) | `DES-MOB-INC-FORM` | Title «Ghi sự cố» · back → Thông tin tài sản / asset-type |
| Asset card | WalletCard | — | TÀI SẢN ĐÃ CHỌN · title/sub từ `AssetKcht32` |
| Kind | Pill 3 | `DES-MOB-INC-KIND` | Hư · Mất · Hỏng |
| Checklist | Checkbox rows | — | `fillIncidentForm` / `data-inc-chk` theo code TS |
| Photos | PhotoRow + camera | — | `openCapture('inc-form')` · `#i-camera` |
| AI row | ListRow | — | «Nhận diện từ ảnh» · empty «Chưa có ảnh — chụp để phân loại» |
| Location | Readonly field * | — | `data-inc-loc` · GPS chốt |
| Severity | Select | — | Nghiêm trọng · Cao (default) · Trung bình · Thấp |
| Description | Textarea | — | placeholder «Mô tả hiện trường…» |
| Primary | Submit | — | «Tạo vấn đề» → toast SC-* · `go('incident-detail')` |
| Secondary | Routes / offline | — | «Thu thập bằng camera» → `cam-patrol` · «Giao việc xử lý» → `estimate` · «Lưu nháp mất sóng» |

**Không** gộp: `#sheet-incident` (`DES-MOB-INC-CREATE-SHEET` «Tạo sự cố») · `field-reflect` · `incident-list` CRUD · web list Kind F.

## 3. API (mobile BFF — cấm invent path `incident-create`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `integration/asset-types` | `AssetTypesController` | **Live** — catalog pick / loại TS |
| GET | `patrol/sessions` | `PatrolSessionsController` | **Live** — optional gắn ca / Route-Km |
| POST | `ai-vision/detect` | `AiVisionOpsController.Detect` | **Live stub** — sau ảnh |
| POST | `ai-vision/uploads` | `AiVisionUploadsController` | **Live** — optional media |
| POST | `incident/incidents` | `IncidentsController.Create` | **Live** — Tạo vấn đề |
| GPS / camera | — | Device | **không** API |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/incident-create`.

Required Create body (live validate): `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `home` | Entry quick «Ghi sự cố» |
| `incident-list` | FAB entry · tab Vấn đề |
| `asset-hub` / asset-types | Pick gate trước form |
| `cam-patrol` | Secondary CTA · shared_action |
| `estimate` | Secondary «Giao việc xử lý» · sibling |
| `patrol-offline` | Nháp mất sóng |
| `field-reflect` | Form phản ánh tay — **OUT** |
| `#sheet-incident` | Sheet nhanh «Tạo sự cố» — **OUT** pack này |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Asset default | Cầu · BRIDGE · Kết cấu |
| Kind default | Hư |
| Loc | QL.1 · Km 1556+080 · định vị ±5 m |
| Severity | Cao |
| AI empty | Chưa có ảnh — chụp để phân loại |
| Toast ok | Đã tạo vấn đề SC-2418 · gắn tài sản đã chọn |
| Toast draft | Nháp mất sóng |
| Toast pick | Chọn loại tài sản để ghi sự cố |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-INC-CREATE-PACK-01 | **CLOSED** PO · packKind=`screen` full `#sc-inc-form` (pattern field-reflect) |
| GAP-MOB-INC-CREATE-MEDIA-01 | `CreateIncidentRequest` chưa media[] — P1 upload/detect optional · SA nếu Signed |
| GAP-MOB-INC-CREATE-CHK-01 | Checklist = `asset-kcht-32` demo/local — **không** invent checklist API |
| GAP-MOB-INC-CREATE-SHEET-01 | `#sheet-incident` OUT — không ship trong slug này |
| GAP-MOB-BFF-01 | Không — proxy catch-all đủ path domain đã có |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-29T01:23:01.571Z` |
