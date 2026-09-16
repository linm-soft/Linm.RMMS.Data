# Data-analy — field-reflect (controlHint)

| | |
|---|---|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`screen`** (STATUS/CTX · GAP-MOB-FIELD-PACK-01 **CLOSED**) · surface `#sc-field-reflect` |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` |
| status | **done** |
| taskId | `task_d6e72d87` |
| autoApprove | `ON` |
| demo | `specs/field-reflect/ui/prototype/{ios,android}/index.html` `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` |
| ctx | `docs/context/features/field-reflect.md` · peers `patrol-home` · `cam-patrol` · `incident` · `asset-kcht-32` |
| generatedAt | `2026-09-12T10:33:53.000Z` |
| prior | keep PO/Design/SA · prior analy `task_d7dd64c8` · re-review `task_f7b2133b` |

**Cấm:** watermark Gói · invent `api/v1/field-reflect` · gộp `cam-patrol` / `inc-form` · fake lat/lng · ERP.* · mfeStdUrl · **`itemsOrDemo` / `demoItems` ship** (`GAP-MOB-REAL-02`).

## Skill packet — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech + § Delta |
| [`field-reflect-bff-endpoints.md`](field-reflect-bff-endpoints.md) | 6 BFF |
| [`field-reflect-action-tree.md`](field-reflect-action-tree.md) | 7 tree |
| [`field-reflect-real-data.md`](field-reflect-real-data.md) | 6b real-data |

## § Delta Current vs New (`edit_page`)

| ID | Current (native 2026-09-12) | New (DoD) | Surface |
|----|-----------------------------|-----------|---------|
| **GAP-MOB-FIELD-SESS-01** | `FieldReflectViewModel` bootstrap: `(fetchSessions).itemsOrDemo` — GET fail → `PatrolHomeCopy.demoToday` (mẫu tuyến) | **Live-only** · `FetchPatrolSessionsOutcome` switch: `.loaded` → bind · `.loaded([])` / no active → empty `routeStamp` + toast · `.loadFailed` → empty + toast · **cấm** `itemsOrDemo` | locationRow / bootstrap |
| GAP-MOB-FIELD-PACK-01 | CLOSED screen | giữ | meta |
| GAP-MOB-FIELD-MEDIA-01 | Accept Signed deferred | giữ | media |
| GAP-MOB-FIELD-CHK-01 | local CHK by asset | giữ | checklist |
| Prior SCR/KIND/PHOTO/DET/CREATE/DRAFT/DATA | shipped dual | **không** đổi UI inventory | — |

**Không** đổi (OUT): controlHint pills/PhotoRow/checklist/CTA · BFF paths · pick→form · sibling `cam-patrol` / `inc-form`.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Vị trí đã chốt · deny → `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera | **yes** | PhotoRow · `openCapture('reflect')` |
| Offline | **yes** | «Lưu nháp mất sóng» → `patrol-offline` · **cấm** fake 200 |
| Map | n/a | |
| Sessions | **live-only** | GET `patrol/sessions` · fail/empty = empty+toast · peer cam-patrol/patrol-checkin |

## § Tab index

`tabs: none` — full form trong tab `field` · Shell Tab 5 giữ · entry `patrol-home`.

## § Demo dual

Cùng copy VN · `#i-camera` · kind Hư/Mất/Hỏng · card rows · CTA Create/Draft · checklist. Demo copy = **Design SSOT only** · **cấm** bind demo tuyến khi GET fail.

## controlHint — `#sc-field-reflect`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Ghi nhận hư hỏng | TopBar title | 17 | `LinmTopBar` | `DES-MOB-FIELD-REFLECT` |
| navBack | Tuần đường / pick | BackButton | 16 | chevron | pick hoặc hub |
| kindLabel | Loại phản ánh | SectionLabel | **13** | | |
| kindPills | Hư / Mất / Hỏng | PillSelect | 13–16 | pills | `DES-MOB-FIELD-KIND` |
| photoLabel | Ảnh hiện trường | SectionLabel | **13** | | |
| photos | Ảnh | PhotoRow | — | | |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | |
| detectRow | Nhận diện | ListRow | 13 / ≥16 | | detect DTO · empty OK |
| severityRow | Mức | ListRow+Badge | 13 / ≥16 | | |
| locationRow | Vị trí đã chốt | ListRow | 13 / ≥16 | | **live sessions + GPS** · empty nếu fail |
| chkLabel | Checklist theo loại TS | SectionLabel | **13** | | |
| checklist | items | CheckboxList | 13 / ≥16 | | by asset code |
| btnCreate | Tạo vấn đề | PrimaryButton | 16 | | POST incident |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | 16 | | offline |
| toastOk | Đã tạo vấn đề… | Toast | 13–16 | | |
| toastDraft | Đã lưu nháp… | Toast | 13–16 | | |
| toastSessionsFail | Không tải được ca tuần / Không có ca đang tuần | Toast | 13–16 | | **NEW** · GET fail/empty |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | | `DES-MOB-GPS-DENY` |

## UNCLEAR

**none**

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **screen** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| Delta | **GAP-MOB-FIELD-SESS-01** live-only sessions |
| Next | `/agent-po-mobile` · keep existing PO · § Delta AC |
| autoApprove | ON |

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
| contentHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
