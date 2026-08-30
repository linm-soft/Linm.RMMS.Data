# Real-data bind — incident-create

| | |
|---|---|
| feature | `incident-create` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Incident + Integration + AiVision + Patrol |
| taskId | `task_5f9013dd` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `incident-create.md` · `IncidentsController` · `AssetTypesController` · `AiVisionOpsController` · `PatrolSessionsController` | Chặn Create nếu thiếu asset / GPS · toast | Toast lỗi · **cấm** fake SC |
| `catalog` | `asset-kcht-32.md` · demo `asset-kcht-32.js` · `integration/asset-types` | Pick grid empty → banner · checklist fallback theo code | Keep last catalog |
| `geo` | Device GPS | Modal `DES-MOB-GPS-DENY` · chặn create nếu chưa chốt | Deny modal |
| `derived` | Detect DTO → aiRow · severity optional | Giữ empty «Chưa có ảnh…» | **cấm** fake nhận diện |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| assetCard | TÀI SẢN ĐÃ CHỌN | WalletCard | `asset-type` | pick code + `GET integration/asset-types` | `AssetLabel` · `Title` | gap | yes |
| kindPills | Loại ghi nhận | PillSelect | — | local → Create | `IncidentType` / Description | gap | yes |
| checklist | Checklist theo loại | CheckboxList | `asset-type` | local CHK by code | `Description` (join) | gap | yes |
| photos | Ảnh hiện trường | PhotoRow | — | device · optional `POST ai-vision/uploads` | media / Note | gap | yes |
| aiRow | Nhận diện từ ảnh | ListRow | — | `POST ai-vision/detect` | `DetectionId` · Title/AssetLabel | gap | yes |
| location | Vị trí đã chốt * | TextField readonly | — | GPS + optional `GET patrol/sessions` | `RouteName` · `KmStart` · `HasGps` | gap | yes |
| severity | Mức độ | Select | severity | local options | `Severity` | gap | yes |
| description | Mô tả | MultilineText | — | form | `Description` | gap | yes |
| btnCreate | Tạo vấn đề | PrimaryButton | — | `POST incident/incidents` | CreateIncidentRequest | gap | yes |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | — | local queue · `patrol-offline` | — | n/a | yes |
| btnCam | Thu thập bằng camera | SecondaryButton | — | nav `cam-patrol` | — | n/a | yes |
| btnAssign | Giao việc xử lý | SecondaryButton | — | nav `estimate` | — | n/a | yes |

§B path **khớp** `incident-create-bff-endpoints.md` — **không** invent `incident-create`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| `asset-type` | `GET integration/asset-types` | CTX `asset-kcht-32` · shared-catalog | Dropdown cứng không cite |
| kind Hư/Mất/Hỏng | closed set 3 (`DES-MOB-INC-KIND`) | demo | Invent thêm loại ngoài demo |
| severity | closed set 4 | Nghiêm trọng · Cao · Trung bình · Thấp | Invent API severity |
| checklist rows | local CHK by asset `code` | `asset-kcht-32.js` · **GAP-MOB-INC-CREATE-CHK-01** | Invent `api/v1/.../checklist` |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-inc-form`. Loc = GPS + label Route/Km.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Incident `Status` | `rmms_incidents` | user Create | POST incidents | toast SC-* · nav detail |
| Offline draft | local store | user «Lưu nháp» | sync qua `patrol-offline` | toast nháp |
| Detection | AiVision | after photo | POST detect | aiRow |
| Pick mode | local `pickInc` | `startIncidentPick` | — | banner + asset-types |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · GAP pack/media/checklist/sheet-out |
| Design | control-map khớp §B · dual parity |
| SA | giữ path đã cite · Step 4b media nếu Signed |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Asset | Cầu · BRIDGE · Kết cấu |
| Kind | Hư |
| Loc | QL.1 · Km 1556+080 · định vị ±5 m |
| Severity | Cao |
| AI empty | Chưa có ảnh — chụp để phân loại |
| Toast ok | Đã tạo vấn đề SC-2418 · gắn tài sản đã chọn |
| Toast draft | Nháp mất sóng |
| Toast pick | Chọn loại tài sản để ghi sự cố |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng  
- Invent mobile-only path `incident-create`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp «Tạo vấn đề» thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp `field-reflect` / `#sheet-incident` / web list  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-create-real-data-20260829 |
| taskId | `task_5f9013dd` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
