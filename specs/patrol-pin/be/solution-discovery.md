# SA — Solution — patrol-pin (Ghim vị trí hiện tại · edit_page persist)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_44e11065`) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet/CTA** · `DES-MOB-CI-PIN-HERE` · **cấm** Kind A–G web / Grid / Report / full hub AC |
| thisAction | **Ghim vị trí hiện tại** only · hub + map · real handoff sheet · **cấm** gộp form check-in |
| gap | `GAP-MOB-PIN-PERSIST-01` |
| domain | **Patrol** sessions read · device GPS · handoff sibling POST · **cấm** `PatrolPinController` / invent `…/pins` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · dual proto · `#sheet-handoff-checkin` · `task_4e8a5d46` · compact PASS |
| prior · po | **confirmed** · § Delta persist · `task_cf3ce7eb` · compact PASS |
| prior · data_analy | **confirmed** · contentHash `sha256:patrol-pin-control-hint-20260912-persist` · bffContentHash `sha256:patrol-pin-mobile-bff-20260912-persist` · `task_48f136ed` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_44e11065` |
| confirmedBy | agent autoApprove · `task_44e11065` |
| updatedAt | `2026-09-12T12:01:30.000Z` |

**Cấm:** invent `api/v1/patrol-pin` · invent `POST …/pins` · auto-POST check-ins từ CTA pin · clone `PatrolSessionsController` trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · gộp form **Ghi điểm tuần** (`GAP-MOB-ACT-02`) · watermark Gói · device label.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## § Delta Current vs New (edit_page)

| | Current (prior P1) | New (GAP persist) |
|--|--------------------|-------------------|
| Read | `GET patrol/sessions` → toast Route | **giữ** |
| GPS + deny/timeout | device · in-app modal · toast | **giữ** |
| Write HTTP trên pack | **none** | **vẫn none** — pin **không** auto-POST |
| Persist DoD | toast-only | via **real handoff** → `patrol-checkin` + sibling `POST …/check-ins` (BE **Live**) |
| Handoff UI | stub/callback | **real** `#sheet-handoff-checkin` · payload `sessionId` + `LocationFix` |
| Invent `/pins` | cấm | **cấm** |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · **không** RMMS `patrol-pin` controller |
| API in-slug | `GET api/v1/patrol/sessions` → toast Route / active `Id` |
| API sibling (ref) | `POST api/v1/patrol/sessions/{id}/check-ins` · owner = `patrol-checkin` · **Live** |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS/Android `FetchPatrolSessionsUseCase` + `GetCurrentLocationUseCase` · base `{BffBase}/mobile-bff/api/v1` |
| Route / toast | Client filter «Đang tuần» · bind `Route` · empty/fail → demo `QL.1 · Km 1561+134` |
| GPS fix | CoreLocation / Fused · **không** API pin |
| Persist BE | **không** bảng mới · **không** migration · sibling owns POST body |
| Handoff | sheet `#sheet-handoff-checkin` · `DES-MOB-HANDOFF-CHECKIN` · payload only |
| Step 4b | **N/A** — GET + POST check-ins **Live** · **cấm** `/new-endpoint` |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-pin` → sheet/CTA · owner `DES-MOB-CI-PIN-HERE` hub+map |
| App path in-slug | **chỉ** `GET patrol/sessions` (Bearer) |
| Downstream list | `PatrolSessionsController.GetList` |
| GPS | Device · accuracyM → toast ±N m |
| Persist pin | handoff only · sibling POST · **cấm** auto-POST (thiếu PlanPointLabel/MatchOk trên CTA) |
| Step 4b | **N/A** |

---

## FormMode ↔ API (REQUIRED)

| FormMode / surface | HTTP | Path | Owner |
|--------------------|------|------|-------|
| none · CTA pin hub/map | **GET** | `mobile-bff/api/v1/patrol/sessions` | **this pack** |
| none · GPS | — | device | this pack |
| none · toast / deny | — | local UI | this pack |
| Sheet handoff payload | — | nav payload `sessionId`+`LocationFix` | this pack → sibling |
| Form check-in / write | **POST** | `…/patrol/sessions/{id}/check-ins` | **sibling** `patrol-checkin` only |

**FormMode:** `none` trên pack · **không** create/edit form entity.

---

## API catalog

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Active/list sessions → Route + `Id` cho toast + handoff payload |
| Permission | `patrol.sessions.read` (reuse · BE TODO debt OK) |
| Tenant | X-Company-Id · companyCode |
| Request | query: `search` · `status` · `route` · `page` · `pageSize` |
| Response | `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]` (`Id` · `Code` · `Route` · `Status` · …) |
| Errors | 401 · 403 · empty → demo route fallback |
| Form surfaces | CTA hub `#sc-patrol-home` · map `#sc-patrol-map` · toast |
| Field map | toast route ← `Route` · handoff `sessionId` ← `Id` |
| Context | `docs/context/features/patrol-pin.md` · `patrol.md` |
| Demo | `specs/patrol-pin/ui/prototype/{ios,android}/index.html` · `#btn-pin-here` |
| data-import | **n/a** |
| Migration | **none** |
| Live | **PASS** · BFF proxy |

### API-02: POST /api/v1/patrol/sessions/{id}/check-ins (sibling reference)

| | |
|--|--|
| Purpose | Persist check-in (PlanPointLabel · MatchOk · Lat/Lng…) — **không** gọi từ CTA pin |
| Permission | writer sibling · **không** ship trên pack này |
| Tenant | same |
| Request | `CreatePatrolCheckInRequest`: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content?` · `PhotoLocalIds?` |
| Response | `PatrolCheckInDto` |
| Errors | 422 thiếu PlanPointLabel/MatchOk≠true · 404 session |
| Form surfaces | sibling `patrol-checkin` sheet/form only |
| Field map | LocationFix lat/lng/accuracy từ pin handoff · PlanPointLabel/MatchOk do sibling |
| Context | `patrol-checkin.md` · BFF table § Delta |
| Demo | `#sheet-handoff-checkin` (payload UI only trên pin pack) |
| data-import | **n/a** |
| Migration | **none** · Live `CreateCheckIn` |
| Pack rule | pin = handoff only · **cấm** auto-POST · **cấm** invent `/pins` |

### Invent — cấm

| Path | Decision |
|------|----------|
| `POST …/pins` · `PatrolPinController` · `api/v1/patrol-pin` | **cấm invent** |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | catch-all proxy | **cấm** local PatrolPinController |
| BE HTTP | `PatrolSessionsController` | GET list + CreateCheckIn Live |
| DTO toast | `PatrolSessionDto` | filter «Đang tuần» |
| Location | `GetCurrentLocationUseCase` | allow / deny / timeout |
| Handoff | sheet real | `sessionId` + `LocationFix` · **cấm** form fields trên pin |
| Kit | LinmPrimaryButton · `#i-mappin` · LinmToast · GpsDeny* | Design kit reuse |
| Surfaces | PatrolHome* · PatrolMap* | owner slug `patrol-pin` |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | không form date | |
| XCO | **xco_na** | list current-user sessions | |
| SHARE | **share_na** | không bảng RMMS mới | |
| Entity / migration | **none** · **no Schema_*** | GET+POST Live | Step 4b **N/A** |
| Offline | ghim local OK · GET fail → demo route | offline-sync | **cấm** full-screen block · queue sibling POST = sibling |
| GPS | Live loc required | hub+map | **cấm** fake lat/lng |
| Camera | **n/a** | sibling | |
| Push | **n/a** | — | |
| Store | **n/a delta** | location already claimed | **cấm** localhost/LAN · family `1` · **cấm** iPad listing |
| Step 4b | **N/A** | không endpoint mới | |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-12T12:01:30.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — read sessions · GPS device · sibling owns check-in rows |
| Client | LocationFix in handoff payload · **không** invent pin aggregate DTO |
| Migration | **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| CTA hub `#sc-patrol-home` | pin · toast · deny | GET + GPS | **không** form entity |
| CTA map `#sc-patrol-map` | pin · toast · deny · `.here` | same | **không** form |
| Sheet `#sheet-handoff-checkin` | sessionId · LocationFix (payload) | derived handoff | **không** POST từ pack |
| Check-in form | PlanPointLabel · MatchOk · … | sibling POST | sibling owner |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| pinHere | Ghim vị trí hiện tại | — | loc · toast · handoff | `DES-MOB-CI-PIN-HERE` |
| pinToast | Đã ghim… · {route} · ±N m | `Route` | GET active / demo | trước handoff |
| locDeny* | Định vị bị tắt | — | modal | `DES-MOB-GPS-DENY` · no handoff |
| locTimeout | Chưa lấy được vị trí… | — | toast | **cấm** fake |
| mapHerePin | pin `.here` | lat/lng | MapKit / Compose | allow only |
| handoffCheckin | Ghi điểm tuần | sessionId · LocationFix | sheet open | `DES-MOB-HANDOFF-CHECKIN` · **cấm** auto-POST |

---

## Navigation / action (this pack)

| Control | Behavior | Owner |
|---------|----------|-------|
| Hub/Map **Ghim** | loc → toast → open `#sheet-handoff-checkin` (payload) · deny/timeout stop | `patrol-pin` |
| Deny Sao chép / Để sau | clipboard / dismiss | owner |
| Sheet handoff confirm → sibling | navigate payload only | bridge → `patrol-checkin` |
| POST check-ins | **không** | sibling |
| Tab 5 shell | giữ | **cấm** invent tab |

**Cấm** GAP-MOB-ACT-06/07 start/enqueue sibling form trên deny/timeout.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-PIN-PERSIST-01 | Persist DoD = real handoff + sibling POST Live · pin không auto-POST |
| GAP-MOB-ACT-02 | **Cấm** ship form Ghi điểm tuần trên pack |
| GAP-MOB-BFF-01 | In-slug HTTP = **chỉ** GET sessions · POST = sibling cite |
| GAP-MOB-REAL-01 | Route live · GPS device · demo fallback |
| GAP-TAB-01 | pack `tabs: none` · shell giữ |
| GAP-MOB-ACT-05 | Kit reuse · **cấm** system alert |
| GAP-MOB-ALIGN-01 | iOS+Android copy / `#i-mappin` parity |
| GAP-SA-STORE-01 | no localhost/LAN · no new privacy delta |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | PatrolHome* · PatrolMap* · GpsDenyModal · handoff sheet wire | same feature packages |
| Use case | FetchPatrolSessions · GetCurrentLocation | same |
| Handoff | payload `sessionId`+`LocationFix` → sibling route/sheet | same |
| Repo HTTP in-slug | **GET** `patrol/sessions` only | same |
| POST check-ins | **không** trên pack | sibling repo |

### Delta Dev (role sau — không implement turn SA)

1. Keep GPS+toast+deny/timeout parity dual Design.
2. Replace stub handoff → real `#sheet-handoff-checkin` with `sessionId`+`LocationFix`.
3. **Cấm** auto-POST / invent `/pins` / form fields trên pin.
4. Offline: local pin+demo route OK · sibling owns offline POST queue.
5. Verify builds khi Dev: xcodegen + xcodebuild dest **iPhone 17 Pro Max** · `assembleDebug` · BFF `dotnet build`.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-pin` / **`sheet`** |
| changeScope | `edit_page` |
| solution_confirm | **approve** |
| FormMode↔API | none → **GET** sessions · POST check-ins = sibling only |
| TZ / XCO / SHARE | tz_na · xco_na · share_na |
| entity / migration | **none** · Step 4b **N/A** |
| BFF in-slug | **chỉ** `GET patrol/sessions` |
| Persist | handoff real · sibling POST Live |
| Tasks đề xuất | `T-IOS-PAT-PIN` · `T-AND-PAT-PIN` · `T-BE-*` **n/a** |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | `2026-09-12T12:01:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
