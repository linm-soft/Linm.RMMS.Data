# Context — asset-ai (mobile · Camera AI · thu thập TS)

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| des | `DES-MOB-ASSET-AI` |
| demo | `#sc-asset-ai` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · STATUS demo `Linm.RMMS.Demo/src/demo/ios/index.html` |
| packKind | **`sheet`** (STATUS / scan) · surface = full screen `#sc-asset-ai` |
| changeScope | `new_page` |
| parent | `asset-hub` tile «Camera AI» / `#i-camera` · `go('asset-ai')` |
| domain | AiVision × Asset — peer web `ai-asset-detect.md` · **không** `ai-vision` (hư mặt đường → Incident) |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP AiVision — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/ai-vision/detect-assets` · `ai-vision/uploads*` · candidates |
| peers | `ai-asset-detect.md` · `asset-hub.md` · `asset-collect.md` · `det-hitl` (HITL confirm) · mobile P1 design |
| perm | `ai-vision.asset-candidates.create` · (HITL confirm = sibling) |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chụp **TS/thiết bị mới** trên tuyến → AI đề xuất loại + lý trình + GPS → tạo **ứng viên** (Draft) → người xác nhận trên `#sc-det-hitl` mới vào sổ |
| Persona | Tuần đường · Hạt QLĐB |
| Entry | Hub `#sc-asset-hub` tile Camera AI · chip jump «Camera AI» |
| DoD P1 | Dual `#sc-asset-ai` · GPS chốt · capture · upload frame · POST `detect-assets` · bind đề xuất · nav HITL · **cấm** auto vào sổ · **cấm** invent `api/v1/asset-ai` · **cấm** gộp collect / confirm |

## 2. Design / UI (`#sc-asset-ai` · `DES-MOB-ASSET-AI`)

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Nav back | TopBar | — | «Tài sản» → `asset-hub` · Android icon-only chevron |
| Title | TopBar | — | Camera AI |
| Section | SectionLabel | — | «Chụp tài sản / thiết bị mới» |
| Photo | PhotoRow + slot | — | `#i-camera` · `openCapture('asset-ai')` |
| Pos row | ListRow | — | «Vị trí đã chốt» · Route · Km |
| Class row | ListRow | — | «Loại đề xuất» · `AssetClass` |
| Score row | ListRow | — | «Độ tin cậy» · demo % · Design ship may hide |
| CTA primary | PrimaryButton | — | «Gửi nhận diện» → detect + `go('det-hitl')` |
| CTA secondary | SecondaryButton | — | «Hủy» → hub |

**Khác `cam-patrol`:** class = **thiết bị TS** (Cống, biển, hộ lan…) · tạo **Asset candidate** — không DefectClass / Incident.

## 3. API (mobile `{BffPrefix}`)

| Method | Path | Mô tả |
|--------|------|-------|
| POST | `ai-vision/uploads/init` (+ PUT object) | Upload frame → `ImageUrl` thật |
| POST | `ai-vision/detect-assets` | Frame + GPS + RouteId → list `AssetCandidateDto` (auto Create Draft) |
| GET | `patrol/sessions` | Prefill RouteId / label ca Đang tuần |
| GET | `integration/road-routes/search` | Resolve route code nếu cần |
| GET | `ai-vision/asset-candidates/nearby` | optional dedupe warn |
| POST/GET confirm | `ai-vision/asset-candidates/{id}/confirm` | **OUT** — owner `det-hitl` |

**Cấm** invent `api/v1/asset-ai` · Finance `api/v1/assets` · ERP.*.

## 4. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ASSET-AI-NAV-01 | Hub tile → push `#sc-asset-ai` (không toast-only) |
| GAP-MOB-ASSET-AI-MEDIA-01 | Cần `ImageUrl` thật (uploads) — **cấm** `mock://` |
| GAP-MOB-ASSET-AI-GPS-01 | Lat/Lng bắt buộc · deny → `DES-MOB-GPS-DENY` · chặn send |
| GAP-MOB-ASSET-AI-HITL-01 | Confirm/Dismiss = sibling `det-hitl` — enqueue sau detect |
| GAP-MOB-ASSET-AI-SCORE-01 | Demo 91% · Design chốt ẩn/hiện % ship |
| GAP-MOB-ASSET-AI-PACK-01 | STATUS `sheet` vs demo full screen — Design/PO chốt |

## 5. Cấm

- Gộp `#sc-asset-collect` · `#sc-det-hitl` implement · `#sc-cam-patrol` · `ai-vision` defect  
- Auto-confirm vào sổ trên slug này  
- Fake GPS / fake detect 200  
- `mfeStdUrl` · ERP.* · system alert  

<!-- context: asset-ai mobile Camera AI P1 · data_analy 2026-09-01 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-01T17:28:02.707Z` |
