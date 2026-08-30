# Real-data bind — field-reflect

| | |
|---|---|
| feature | `field-reflect` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol + AiVision + Incident + Integration |
| taskId | `task_d7dd64c8` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `field-reflect.md` · `IncidentsController` · `PatrolSessionsController` · `AiVisionOpsController` · `AssetTypesController` | Banner / toast «Không có ca đang tuần» · vẫn cho draft offline | Toast lỗi · **cấm** fake SC |
| `catalog` | `asset-kcht-32.md` · demo `asset-kcht-32.js` CHK · `integration/asset-types` | Checklist fallback PAVEMENT demo | Keep last catalog |
| `geo` | Device GPS | Modal `DES-MOB-GPS-DENY` · chặn create nếu chưa chốt | Deny modal |
| `derived` | Detect DTO → card rows | Giữ empty rows / toast detect fail | **cấm** fake Ổ gà |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| kindPills | Loại phản ánh | PillSelect | — | local → Create | `IncidentType` / Description | gap | yes |
| photos | Ảnh hiện trường | PhotoRow | — | device · optional `POST ai-vision/uploads` | media / Note | gap | yes |
| detectRow | Nhận diện | ListRow | — | `POST ai-vision/detect` | `Title` · `AssetLabel` · `DetectionId` | gap | yes |
| severityRow | Mức | ListRow+Badge | — | detect `Severity` | `Severity` | gap | yes |
| locationRow | Vị trí đã chốt | ListRow | — | GPS + `GET patrol/sessions` Route/Km | `RouteName` · `KmStart` · `HasGps` | gap | yes |
| checklist | Checklist theo loại TS | CheckboxList | `asset-type` | `GET integration/asset-types` + local CHK | `Description` (join) | gap | yes |
| btnCreate | Tạo vấn đề | PrimaryButton | — | `POST incident/incidents` | CreateIncidentRequest | gap | yes |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | — | local queue · `patrol-offline` | — | n/a | yes |

§B path **khớp** `field-reflect-bff-endpoints.md` — **không** invent `field-reflect`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| `asset-type` | `GET integration/asset-types` · Search | CTX `asset-kcht-32` · shared-catalog asset-type | Dropdown cứng chỉ demo không cite |
| kind Hư/Mất/Hỏng | closed set 3 (demo `DES-MOB-FIELD-KIND`) | design §5b | Invent thêm loại ngoài demo |
| checklist rows | local CHK by `code` (PAVEMENT…) | `asset-kcht-32.js` · **GAP-MOB-FIELD-CHK-01** | Invent `api/v1/.../checklist` |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-field-reflect`. Entry từ `patrol-home` (tab field).

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Incident `Status` | `rmms_incidents` | user Create | POST incidents | toast SC-* · tab Vấn đề |
| Offline draft | local store | user «Lưu nháp» | sync qua `patrol-offline` | toast nháp · Lưu trữ |
| Detection | AiVision | after photo | POST detect | card Nhận diện / Mức |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · GAP pack/media/checklist |
| Design | control-map khớp §B · dual parity |
| SA | giữ path đã cite · Step 4b media/detect nếu Signed |
| Dev iOS + Android | cùng §B · prefix mobile-bff |

## Demo rows SSOT (fallback)

| Field | Value |
|-------|-------|
| Kind | Hư |
| Nhận diện | Ổ gà · Mặt đường |
| Mức | Cao |
| Vị trí | QL.1 · Km 1556+040 · ±4 m |
| Checklist | PAVEMENT rows |
| Toast ok | Đã tạo vấn đề SC-2408 · gắn ca tuần |
| Toast draft | Đã lưu nháp · Lưu trữ |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake lat/lng  
- Invent mobile-only path `field-reflect`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Gộp «Tạo vấn đề» thành sibling queue → **GAP-MOB-ACT-07**  
- Gộp `cam-patrol` / `inc-form` / `cam-view`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T05:12:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-real-data-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
