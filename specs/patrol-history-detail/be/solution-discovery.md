# SA — Solution — patrol-history-detail (mobile · Chi tiết ca · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [SA] [Mobile] [Lịch sử phiên] -> Chi tiết ca · timeline Live |
| this role | `sa` · `/agent-sa-mobile` |
| status | **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` · `task_9161b83a`) |
| changeScope | `edit_page` · GAP timeline GET check-ins live |
| packKind | **`sheet`** meta · surface Full `#sc-patrol-detail` (PO PACK-01) |
| stack | `native_dual` |
| Feature Kind | **Full screen** push `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` · **cấm** Kind A–G web / Lin* / Report / mfeStdUrl |
| domain | **Patrol** GetById + GetCheckIns · **cấm** invent `PatrolHistoryDetailController` / `api/v1/patrol-history-detail` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · `be_repo_confirm` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · dual `#sc-patrol-detail` · `handoff/design-compact.md` · `task_2b169a90` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_eef3894e` |
| prior · data_analy | **confirmed** · `_data-analy/*` · compact `handoff/data_analy-compact.md` · contentHash `sha256:patrol-history-detail-control-hint-20260912-timeline-live` · bffContentHash `sha256:patrol-sessions-getbyid-plus-checkins` · realDataHash `sha256:patrol-history-detail-real-data-20260912-timeline-live` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` only · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở role SA |
| versionGate | `rechecked` · skillVersion `2026.08.31.2` · schemaVersion `2` · workflowVersion `2026.08.31.2` · rulesVersion `2026.08.31.2` |
| taskId | `task_9161b83a` |
| confirmedBy | agent autoApprove · `task_9161b83a` |
| updatedAt | `2026-09-12T13:45:00.000Z` |
| thisAction | Keep GetById · **promote** GetCheckIns Live · strip `timelineDemo` · TAP/MAP/END Design-locked |

**Cấm:** invent slug · PUT/DELETE session P1 · fork DTO · app `:5101` · DbContext BFF · ERP.* · `mfeStdUrl` · `timelineDemo` khi Live/empty · fake 200 · Step 4b / migration · re-scan demo · Write MFE/native.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios `networking.md` · android `api-client.md` · offline-sync (**cấm** fake 200).

---

## § Delta (`edit_page` · vs prior SA `task_47202291`)

| ID | Prior P1 | New (this SA) |
|----|----------|---------------|
| TIMELINE-01 | demo SSOT · GET check-ins OUT | **API-02** GET check-ins **Live** · empty `[]` OK · **cấm** `timelineDemo` |
| TAP-01 | nav checkin-detail | **locked** · done row → `checkin-detail` + Id (**≠** toast) |
| MAP-01 | nav patrol-map + Id | **locked** · no toast khi có Id |
| END-01 / Share | toast · no PUT | **keep** toast P1 |
| API surface | API-01 only | API-01 + **API-02** |
| Fail CI | n/a | check-ins fail → TL empty + toast · **không** seed demo |
| Step 4b | N/A | **N/A** — GetById + GetCheckIns **DONE** on domain |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | `PatrolSessionsController.GetById` + `GetCheckIns` · **không** controller mới |
| API downstream | `GET api/v1/patrol/sessions/{id}` · `GET …/{id}/check-ins` · XCO |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` · **không** DbContext |
| App | iOS `PatrolRepository` GetById + GetCheckIns · Android `ApiService` cùng paths · base `{BffBase}/mobile-bff/api/v1` |
| Detail bind | hero+info ← `PatrolSessionDto` · timeline ← `PatrolCheckInDto[]` Live |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | POST check-ins · PUT end · tracks · plan-points synth · list/search |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-history-detail` → Full `#sc-patrol-detail` · 1 surface |
| App prefix | `mobile-bff/api/v1` |
| App paths | `GET patrol/sessions/{id}` · `GET patrol/sessions/{id}/check-ins` (Bearer) |
| Downstream | GetById · GetCheckIns · 403 XCO · 404 NotFound |
| Timeline | **Live** only · empty OK · **cấm** invent / demo seed |
| Map / End / Share | local nav / toast · **không** API write |
| Step 4b | **N/A** — endpoints Live DONE |
| Rationale | BFF/data_analy confirm GetCheckIns Live · Design/PO strip timelineDemo |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` | **cấm** local DetailController |
| BE HTTP | `PatrolSessionsController` | GetById + GetCheckIns Live |
| Session DTO | `ApiResponse<PatrolSessionDto>` | decode `data` / root |
| Check-in DTO | `ApiResponse<PatrolCheckInDto[]>` | timeline bind |
| HTTP app | Repository / ApiService | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | reuse session mapper + CI timeline map | **không** fork DTO |
| Demo fallback | session GET fail → EmptyChrome + toast | CI fail → empty TL + toast · **cấm** timelineDemo · **cấm** fake 200 |
| Kit | `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmTabBar` | kit_missing **N/A** |
| Entry | `patrol-history` / today | push + `Id` · **cấm** reimplement list |

---

## FormMode ↔ API

| FormMode / surface | Trigger | API | Notes |
|--------------------|---------|-----|-------|
| Appear detail | nav + `Id` | **API-01** GET `patrol/sessions/{id}` | missing Id → toast + pop |
| Timeline | appear (parallel) | **API-02** GET `…/check-ins` | bind Live · `[]` → TL-EMPTY |
| tlTapDone | tap done row | — | nav `checkin-detail` + CI `Id` |
| btnMap | tap | — | nav `patrol-map` + session `Id` |
| btnEnd | tap | — | toast «Kết thúc ca — xác nhận sau» · **cấm** PUT |
| navShare | tap | — | toast Chia sẻ · **cấm** share sheet |
| navBack | tap | — | pop list |
| 404 session | API-01 | — | empty chrome · back list |
| 403 | API-01/02 | — | toast · back (session) / empty TL (CI) |
| Network fail session | API-01 | — | EmptyChrome + toast · **cấm** fake 200 |
| Network fail CI | API-02 | — | empty TL + toast · **cấm** timelineDemo |

**Cấm** POST check-ins / PUT session / invent path (`GAP-MOB-ACT-02`).

---

## API catalog

### API-01: GET /mobile-bff/api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Load chi tiết ca theo `Id` |
| Permission | JWT · Patrol session read |
| Tenant | X-Company-Id · XCO `AllowedCompanyIds` |
| Request | path `id: Guid` |
| Response | `PatrolSessionDto`: `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `StartedAt` · `CoveragePercent` · `Status` · `CheckInCount` · `OfflineQueued` |
| Errors | 401 login · 403 toast+pop · 404 empty+pop · 5xx/network EmptyChrome+toast |
| Form surfaces | `#sc-patrol-detail` appear |
| Migration | **none** · Step 4b **N/A** |
| BFF | proxy · bffContentHash `sha256:patrol-sessions-getbyid-plus-checkins` |
| Downstream | `PatrolSessionsController.GetById` |

### API-02: GET /mobile-bff/api/v1/patrol/sessions/{id}/check-ins

| | |
|--|--|
| Purpose | Timeline «Điểm tuần» Live |
| Permission | JWT · same session read |
| Tenant | XCO same as session |
| Request | path `id: Guid` |
| Response | `PatrolCheckInDto[]`: `Id` · `SessionId` · `PlanPointLabel` · `Route` · `CreatedAt` · `MatchOk` · `DistanceToPlanM` · `PhotoLocalIds` · (`Lat`/`Lng`/`AccuracyM`/`Content` **không** bind P1 row) |
| Empty | `200` + `[]` → TL-EMPTY · **không** seed |
| Errors | 404 → treat session missing · 403/5xx/network → empty TL + toast · **cấm** timelineDemo |
| Form surfaces | DES-MOB-PAT-DETAIL-TL |
| Migration | **none** · Step 4b **N/A** |
| BFF | proxy passthrough |
| Downstream | `GetCheckIns` · `PatrolSessionService.GetCheckInsAsync` · **Live** |

**OUT pack:** POST `…/check-ins` · PUT/DELETE session · GET plan-points · tracks.

---

## Field map (controlHint → DTO)

| uiField | controlHint | GET / write | dtoField | Display |
|---------|-------------|-------------|----------|---------|
| codeHero | Text | API-01 | `Code` | PAT-* |
| badgeStatus | Badge | API-01 | `Status` + `OfflineQueued` | VN · OfflineQueued → «Mất sóng» |
| rowUser…Coverage | ListRow | API-01 | UserName/Route/PatrolType/PlannedDate/StartedAt/CoveragePercent | dd/MM/yyyy · HH:mm local |
| tlItem | TimelineRow | **API-02** | PlanPointLabel · Route · CreatedAt · MatchOk · DistanceToPlanM · PhotoLocalIds | time HH:mm · đạt/không · ~m · Ảnh ×n |
| tlEmpty | Empty | API-02 `[]` | — | empty OK |
| tlTap | tap | — | CI `Id` | → checkin-detail |
| btnMap | PrimaryButton | nav | session `Id` | patrol-map |
| btnEnd / navShare | Secondary / Icon | toast | — | no PUT / share sheet |

**no-parent-json:** N/A (read-only scalars / array rows).

---

## Gaps / tech factors

| ID | Topic | P1 decision |
|----|-------|-------------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | GET check-ins | **IN** Live · Dev strip `timelineDemo` |
| GAP-MOB-PAT-HIST-DET-TAP-01 | tap done | nav checkin-detail + Id |
| GAP-MOB-PAT-HIST-DET-MAP-01 | map CTA | nav patrol-map + Id · no toast khi có Id |
| GAP-MOB-PAT-HIST-DET-END-01 | End / Share | toast P1 · **cấm** PUT |
| Offline | GET fail | session EmptyChrome+toast · CI empty TL+toast · **cấm** fake 200 · **cấm** enqueue write |
| GPS | detail | display-only CI fields · **không** request location |
| Camera | detail | n/a · PhotoLocalIds count only |
| Map | CTA | nav only · **không** embed |
| TZ | dates | client local · wire UTC |
| XCO | both GETs | 403 handled per FormMode |
| SHARE | — | N/A P1 toast |
| Store privacy | network | existing Keychain/Encrypted · **cấm** localhost/LAN |
| GAP-MOB-BFF-01 | BFF | **none** — both paths Live proxy |
| Step 4b | BE align | **N/A** |

---

## Entity / migration

| Item | Decision |
|------|----------|
| New table | **none** |
| Schema_* / Seed_* | **none** |
| `/database-migration` | **cấm** · Step 4b **N/A** |
| New endpoint | **cấm** · reuse GetById + GetCheckIns |
| ERP.* | **cấm** |

---

## TZ / XCO / SHARE (SA → TL)

| Flag | Value |
|------|-------|
| TZ | `PlannedDate` dd/MM/yyyy · `StartedAt`/`CreatedAt` HH:mm local |
| XCO | domain enforces · app company header · 403 → toast (+ pop session) |
| SHARE | **N/A** P1 · trailing toast only |

---

## Screens / zones (ids)

- Owner: `DES-MOB-PAT-DETAIL` `#sc-patrol-detail` Full
- Zones: `DES-MOB-PAT-DETAIL-NAV` · `HERO` · `INFO` · `TL` · `TL-EMPTY` · `CTA`
- Tab: `DES-MOB-TABBAR` Tuần đường on
- Entry: `#sc-patrol-history` / today → push + `Id`
- Reuse: `patrol-map` · `checkin-detail` (≠ save)
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail`
- peerStdUrl: N/A · **cấm** mfeStdUrl
- Proto 3-row: **UI ref only** · runtime ≠ demo TL

---

## Dev slash / handoff next

| | |
|--|--|
| Next role | `team-lead` · task pack |
| Later Dev | `/agent-dev-ios` + `/agent-dev-android` |
| APIs for TL | **API-01** + **API-02** |
| DoD SA | solution confirmed · FormMode↔API · GetCheckIns Live · no invent · offline/GPS · TZ/XCO/SHARE · compact |

---

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-history-detail` · `sheet` |
| phase_from / phase_to | `sa` → `team-lead` |
| STATUS | solution **confirmed** (autoApprove) |
| APIs / FormMode↔API | appear → API-01 + API-02 parallel |
| Gaps → Dev | TIMELINE-01 strip demo · TAP-01 · MAP-01 · END-01 keep |
| entity / migration | none · Step 4b N/A |
| Open questions | none |
| Next AskQuestion | none (autoApprove ON) |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:45:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| realDataHash | sha256:patrol-history-detail-real-data-20260912-timeline-live |
| bffContentHash | sha256:patrol-sessions-getbyid-plus-checkins |
| actionTreeHash | sha256:patrol-history-detail-action-tree-20260912-timeline-live |
| taskId | `task_9161b83a` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
