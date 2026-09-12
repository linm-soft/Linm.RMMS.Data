# Real-data bind — field-reflect

| | |
|---|---|
| feature | `field-reflect` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · Patrol + AiVision + Incident + Integration |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` |
| taskId | `task_d6e72d87` |
| status | **done** |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02** · **GAP-MOB-FIELD-SESS-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` sessions | CTX `field-reflect.md` · `PatrolSessionsController` · BFF `GET patrol/sessions` · iOS `FetchPatrolSessionsUseCase` · Android twin | empty `routeStamp` · toast «Không có ca đang tuần» · form vẫn mở (GPS/draft) | toast «Không tải được ca tuần» · **cấm** `itemsOrDemo` / `PatrolHomeCopy.demoToday` |
| `api` detect | `AiVisionOpsController.Detect` | empty detect/severity rows | toast detect fail · **cấm** fake Ổ gà |
| `api` create | `IncidentsController.Create` | — | toast lỗi · offline → draft |
| `catalog` | `asset-kcht-32` · `GET integration/asset-types` | local CHK by code | keep last |
| `geo` | Device GPS | `DES-MOB-GPS-DENY` | deny modal |
| `derived` | Detect DTO → rows | empty OK | **cấm** fake |

## §B — Bind field (HARD · khớp BFF)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| kindPills | Loại phản ánh | PillSelect | — | local → Create | `IncidentType` | gap | yes |
| photos | Ảnh hiện trường | PhotoRow | — | device · optional uploads | media/Note | gap | yes |
| detectRow | Nhận diện | ListRow | — | `POST ai-vision/detect` | `Title` · `AssetLabel` · `DetectionId` | gap | yes |
| severityRow | Mức | ListRow+Badge | — | detect `Severity` | `Severity` | gap | yes |
| locationRow | Vị trí đã chốt | ListRow | — | **live** `GET patrol/sessions` + GPS · **no demo fallback** | `RouteName` · `KmStart` · `HasGps` | gap | yes |
| checklist | Checklist | CheckboxList | `asset-type` | `GET integration/asset-types` + local CHK | `Description` | gap | yes |
| btnCreate | Tạo vấn đề | PrimaryButton | — | `POST incident/incidents` | CreateIncidentRequest | gap | yes |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | — | local · `patrol-offline` | — | n/a | yes |
| toastSessionsFail | (toast) | Toast | — | outcome `.loadFailed` / empty active | — | n/a | yes |

§B path **khớp** `field-reflect-bff-endpoints.md`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| `asset-type` | `GET integration/asset-types` | CTX asset-kcht-32 | Dropdown cứng demo-only |
| kind Hư/Mất/Hỏng | closed 3 | `DES-MOB-FIELD-KIND` | invent loại |
| checklist | local CHK by code | asset-kcht-32 · GAP-MOB-FIELD-CHK-01 | invent checklist API |
| sessions route | **live GET only** | — | **`itemsOrDemo` / demoToday** |

## §D — Map / vẽ

`map: none`

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Incident `Status` | `rmms_incidents` | user Create | POST | toast SC-* |
| Offline draft | local | user Draft | `patrol-offline` | toast nháp |
| Detection | AiVision | after photo | POST detect | rows |
| Session bind | `rmms_patrol_sessions` | bootstrap | GET sessions | locationRow · **live-only** |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD **GAP-MOB-FIELD-SESS-01** · live-only · fail/empty=empty+toast |
| Design | giữ control-map · toastSessionsFail copy |
| SA | giữ path · **không** Step 4b |
| Dev iOS+Android | bỏ `itemsOrDemo` trên FieldReflect · mirror peer cam-patrol/patrol-checkin |

## Demo rows (Design SSOT only — **cấm** ship fallback)

| Field | Value |
|-------|-------|
| Kind | Hư |
| Nhận diện | Ổ gà · Mặt đường |
| Mức | Cao |
| Vị trí | QL.1 · Km 1556+040 · ±4 m — **chỉ prototype** |
| Toast sessions fail | Không tải được ca tuần |
| Toast no active | Không có ca đang tuần |

## § Cấm

- `itemsOrDemo` / `demoItems` / `PatrolHomeCopy.demoToday` trên field-reflect (`GAP-MOB-REAL-02` · **GAP-MOB-FIELD-SESS-01`)
- Fake lat/lng · invent `field-reflect` path · mfeStdUrl · ERP.*
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T10:33:53.000Z |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-real-sess-20260912 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
