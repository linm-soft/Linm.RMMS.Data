# SA — Solution — field-reflect (Ghi nhận hư hỏng)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng · live-only sessions |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_a2fe10c3`) |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| packKind | **`screen`** |
| stack | `native_dual` |
| Feature Kind | **screen** · `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND` · GPS deny `DES-MOB-GPS-DENY` |
| thisAction | **Ghi nhận hư hỏng** only · **cấm** gộp sibling (`GAP-MOB-ACT-01/02`) |
| domain | Patrol sessions read + AiVision detect/uploads + Incident create + Integration asset-types · device GPS/camera · local checklist · **cấm** invent `api/v1/field-reflect` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · `be_repo_confirm` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `handoff/design-compact.md` · `task_91131e02` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_72e56250` |
| prior · data_analy | **confirmed** · `_data-analy/field-reflect-*.md` · `handoff/data_analy-compact.md` · `task_d6e72d87` · bffHash `sha256:field-reflect-mobile-bff-20260912` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở SA |
| versionGate | `rechecked` |
| taskId | `task_a2fe10c3` |
| confirmedBy | agent autoApprove · `task_a2fe10c3` |
| updatedAt | `2026-09-12T11:05:00.000Z` |

**Cấm:** invent API / fork DTO · parent JSON · ERP.* · Step 4b / migration / e2e ở SA · Write MFE/native · `itemsOrDemo` / `demoToday` fallback · invent `toast` path · localhost/LAN (`GAP-SA-STORE-01`) · re-scan demo.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | RMMS.WebService · **reuse** existing controllers |
| BFF | Mobile.Bff proxy catch-all · **không** FieldReflectController |
| App base | `{BffBase}/mobile-bff/api/v1` |
| Prefill | `GET patrol/sessions` · **live-only** client outcome (**GAP-MOB-FIELD-SESS-01**) |
| Detect / Create / asset-types / uploads | **unchanged** paths · keep prior bind |
| GPS / camera / kind / checklist / draft | device / local · **không** invent API |
| Persist BE mới | **none this edit** · MEDIA Accept · Step 4b **N/A** |
| Sibling | entry `patrol-home` · queue `patrol-offline` · **cấm** re-own |

### Route decision

| | Choice |
|--|--------|
| Slug | `field-reflect` → screen owner |
| P1 read | `GET patrol/sessions` · optional `GET integration/asset-types` |
| P1 detect | `POST ai-vision/detect` |
| P1 media | `POST ai-vision/uploads` · optional · MEDIA Accept |
| P1 write | `POST incident/incidents` |
| Step 4b | **N/A this edit** — client sessions behavior only |
| Rationale | BFF table live · delta = remove demo fallback on sessions |

---

## Delta Current vs New (edit_page · HARD)

| | Current (shipped) | New DoD (this SA) |
|--|-------------------|-------------------|
| Sessions bind | `(fetchSessions).itemsOrDemo` / `demoToday` khi GET fail | **live-only** · `.loaded` bind real items |
| GET OK + active | bind routeStamp / Route·Km | **keep** |
| GET OK + empty / no «Đang tuần» | (varies / demo risk) | empty `locationRow` + toast «Không có ca đang tuần» |
| GET fail / network / 4xx | demo tuyến via `itemsOrDemo` | empty `locationRow` + `toastSessionsFail` «Không tải được ca tuần» · **cấm** demo |
| Other APIs / UI | detect · create · draft · GPS · kind · CHK · PhotoRow | **keep** · no path change |

---

## FormMode ↔ API (REQUIRED)

| FormMode / surface | Method | App path (`mobile-bff/api/v1/…`) | Downstream | Notes |
|--------------------|--------|----------------------------------|------------|-------|
| Prefill / locationRow | GET | `patrol/sessions` | `PatrolSessionsController.GetList` | **GAP-MOB-FIELD-SESS-01** live-only · query `page=1` · `pageSize=50` · client filter `Status=Đang tuần` |
| toastSessionsFail | — | — | — | local toast on fail/empty · **không** API |
| Catalog loại TS | GET | `integration/asset-types` | `AssetTypesController` | optional keep |
| Detect after photo | POST | `ai-vision/detect` | `AiVisionOpsController.Detect` | keep · stub OK |
| Media optional | POST/PUT | `ai-vision/uploads` (+ object) | uploads | MEDIA Accept · Create **chưa** media[] |
| Create | POST | `incident/incidents` | `IncidentsController.Create` | keep bind |
| Draft / offline | — | local `OfflineQueueKind.incident` | → `patrol-offline` | keep |
| GPS / camera / kind / checklist | — | device / local | — | keep |

**Cấm** invent `api/v1/field-reflect` · **cấm** mobile-only API khi Web đã live.

### Client outcome — sessions (HARD)

| Outcome | UI |
|---------|-----|
| GET OK + active session | bind `routeStamp` / Route·Km trên `locationRow` |
| GET OK + empty / no active | empty location (`—`) · toast «Không có ca đang tuần» · Draft vẫn OK · GPS vẫn chạy |
| GET fail / network / 4xx | empty location · `toastSessionsFail` · **cấm** `itemsOrDemo` / `demoToday` |

---

## API catalog (reuse · 1 block / endpoint)

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Prefill ca / tuyến đang tuần cho locationRow |
| Permission | `patrol.sessions.read` (reuse · BE TODO debt P1) |
| Tenant | X-Company-Id · companyCode |
| Request | query: `search` · `status` · `route` · `page` · `pageSize` · P1 client filter «Đang tuần» |
| Response | session list DTO (Route / Km / Status / …) |
| Errors | 4xx/network → empty + toastSessionsFail · **không** demo |
| Form surfaces | `#sc-field-reflect` locationRow |
| Field map | sessions → `RouteName` / `KmStart` stamp · GPS → `HasGps` |
| Context | `docs/context/features/field-reflect.md` |
| Demo | prototype `?empty=1` · `?fail=1` (Design) · **không** runtime demo data |
| data-import | N/A |
| Migration | **none** this edit |

### API-02: GET /api/v1/integration/asset-types

| | |
|--|--|
| Purpose | Optional host catalog · checklist rows vẫn local CHK |
| Permission | `integration.asset-types.read` |
| Tenant | X-Company-Id |
| Request / Response | existing AssetType list |
| Form surfaces | checklist host optional |
| Migration | none |

### API-03: POST /api/v1/ai-vision/detect

| | |
|--|--|
| Purpose | Nhận diện sau ảnh · bind detect/severity rows |
| Permission | ai-vision detect (reuse) |
| Request | `DetectAiVisionRequest` · `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` |
| Response | `AiVisionDetectionDto` |
| Errors | fail → toast · **cấm** fake «Ổ gà» |
| Form surfaces | detectRow · severityRow |
| Migration | none · service bind T-BE if Signed (prior GAP · not this edit) |

### API-04: POST /api/v1/ai-vision/uploads (+ PUT object)

| | |
|--|--|
| Purpose | Optional media init/object trước detect |
| Gap | **GAP-MOB-FIELD-MEDIA-01** Accept · Create chưa media[] |
| Migration | none this edit |

### API-05: POST /api/v1/incident/incidents

| | |
|--|--|
| Purpose | Tạo vấn đề từ kind + detect + GPS + checklist |
| Request | `CreateIncidentRequest` · IncidentType · Title/AssetLabel · Severity · RouteName/KmStart · DetectionId · HasGps · Description · RequestedAt |
| Response | `IncidentDto.Code` → toast SC-* |
| Errors | fail → queue / toast · **cấm** invent SC |
| Migration | none this edit |

---

## Implement gates (confirm)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **tz_na** | không form date edit |
| XCO | **xco_na** | company filter BE |
| SHARE | **share_na** | reuse AiVisionDetection + Incident + AssetType · **cấm** invent `field_reflect_*` · **cấm** parent JSON |
| Offline | **screen mở + queue** | GET fail → empty+toast (không demo) · Create fail/Draft → `OfflineQueueKind.incident` |
| GPS | **Live loc required** Create | deny → `DES-MOB-GPS-DENY` · Draft vẫn OK |
| Camera | **Live capture** PhotoRow | keep |
| Push | **n/a** | |
| Store | camera + location claim | **cấm** localhost/LAN · family `1` · **cấm** iPad listing |
| Step 4b | **N/A this edit** | sessions client only · **cấm** SA migration |

AskQuestion (autoApprove=ON): `be_repo_confirm`=RMMS.WebService · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-12T11:05:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON inventory | **none** |
| Child tables | **reuse** existing · **không** invent |
| Client store | screen state + OfflineQueueStore · **remove** demo session fallback |
| Migration | **none** this edit |
| T-BE-API / T-BE-MIG | **n/a this edit** · prior MEDIA/detect bind remain Accept/pending TL separately |

---

## Form data analysis

| Screen / FormMode | Fields | Source | Entity |
|-------------------|--------|--------|--------|
| `#sc-field-reflect` | kind · photos · detect · severity · location · checklist · Create/Draft · toastSessionsFail | GET sessions live-only + GPS/camera + POST detect/create / queue + local CHK | Patrol session + AiVisionDetection + Incident |
| GPS deny | modal | local | — |
| Empty / fail session | empty location + toast | GET empty/fail | — |

### Field map (delta highlight)

| uiField | controlHint | dto / wire | Notes |
|---------|-------------|------------|-------|
| locationRow | ListRow | sessions + GPS → RouteName/KmStart/HasGps | empty `—` on fail/empty |
| toastSessionsFail | Toast | — | NEW · fail/empty · kit toast **cấm** native alert |
| kindPills | PillSelect | IncidentType | keep |
| photos / detect / severity | PhotoRow / ListRow | detect DTO | keep |
| checklist | CheckboxList | Description join | keep local CHK |
| btnCreate / btnDraft | Primary/Secondary | POST / queue | keep |

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| **GAP-MOB-FIELD-SESS-01** | **OPEN → Dev dual** · remove `itemsOrDemo`/`demoToday` · live-only outcomes + toastSessionsFail |
| GAP-MOB-FIELD-MEDIA-01 | **Accept** · unchanged |
| GAP-MOB-FIELD-CHK-01 | local CHK · unchanged |
| GAP-MOB-CAM-DETECT-01 | path keep · unchanged this edit |
| GAP-MOB-BFF-01 | proxy đủ · **không** |
| GAP-QA-FIELD-GPS-TIMING-01 | **Defer** |
| GAP-MOB-ACT-01/02/07 | 1 slug · no sibling enqueue |
| GAP-SA-STORE-01 | claims keep · no localhost |
| Step 4b | **N/A this edit** |

---

## Client architecture (TL/Dev delta)

| Layer | Delta |
|-------|-------|
| ViewModel dual | `FieldReflectViewModel` · replace `itemsOrDemo` with live-only state machine: `.loaded` / empty / `.loadFailed` |
| UI | bind empty location · show `toastSessionsFail` · keep rest |
| Use case / repo | **reuse** `FetchPatrolSessionsUseCase` / `PatrolRepository*` · **no** new endpoint |
| iOS path | `Presentation/Features/FieldReflect/*` |
| Android path | `presentation/feature/fieldreflect/*` |

### Delta Dev (role sau — không implement turn SA)

1. iOS + Android: remove `itemsOrDemo` / `demoToday` on FieldReflect sessions prefill.
2. Wire outcomes: loaded / empty toast / fail toastSessionsFail · empty locationRow.
3. Keep detect/create/draft/GPS/kind/CHK unchanged.
4. Verify dual · **cấm** yarn e2e ở SA · QA queued.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-FIELD-SESS-LIVE` | Dev iOS | live-only sessions + toastSessionsFail |
| `T-AND-FIELD-SESS-LIVE` | Dev Android | parity dual |
| `T-BFF-*` / `T-BE-*` | — | **n/a this edit** |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **`screen`** |
| solution_confirm | **approve** |
| FormMode↔API | GET `patrol/sessions` live-only · POST detect · POST incident · GET asset-types · uploads optional |
| TZ/XCO/SHARE | tz_na · xco_na · share_na |
| entity/migration | **none** this edit · Step 4b **N/A** |
| Tasks | `T-IOS-FIELD-SESS-LIVE` · `T-AND-FIELD-SESS-LIVE` |
| Gap | **GAP-MOB-FIELD-SESS-01** Dev dual |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| compact | `handoff/sa-compact.md` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | `2026-09-12T11:05:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260912 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
