# SA — Solution — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [SA] [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `sa` · `/agent-sa-mobile` |
| status | **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` · `task_47202291`) |
| changeScope | `new_page` |
| packKind | **`sheet`** meta · surface Full `#sc-patrol-detail` (PO PACK-01) |
| stack | `native_dual` |
| Feature Kind | **Full screen** push `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` · **cấm** Kind A–G web / Lin* / Report / mfeStdUrl |
| domain | **Patrol** session GetById read · **cấm** invent `PatrolHistoryDetailController` / `api/v1/patrol-history-detail` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · `be_repo_confirm` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · dual `#sc-patrol-detail` · `handoff/design-compact.md` · `task_5777786c` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_74ed698b` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-history-detail-control-hint.md` · `…-bff-endpoints.md` · `…-real-data.md` · `…-action-tree.md` · contentHash `sha256:patrol-history-detail-control-hint-20260831` · bffContentHash `sha256:patrol-sessions-getbyid-passthrough` · realDataHash `sha256:patrol-history-detail-real-data-20260831` · compact `handoff/data_analy-compact.md` **missing** → full Read |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` only · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở role SA |
| versionGate | `rechecked` · skillVersion `2026.08.31.2` · schemaVersion `2` · workflowVersion `2026.08.31.2` · rulesVersion `2026.08.31.2` |
| taskId | `task_47202291` |
| confirmedBy | agent autoApprove · `task_47202291` |
| updatedAt | `2026-09-01T01:03:39.000Z` |
| thisAction | **Chi tiết ca** `#sc-patrol-detail` only · appear GET `{id}` · timeline demo SSOT · CTA map nav · END/Share toast · parent list rewire push |

**Cấm:** invent `GET patrol-history-detail` / `GET …/check-ins` P1 · PUT/DELETE session P1 · fork DTO · app `:5101` · DbContext trên BFF · ERP.* · `mfeStdUrl` · native alert · `localhost` / IP LAN trong solution production (`GAP-SA-STORE-01`) · Step 4b / migration · re-scan demo.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios `networking.md` · android `api-client.md` · offline-sync (detail = demo SSOT fallback · **cấm** fake 200).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController.GetById` · **không** RMMS detail controller mới |
| API downstream | `GET api/v1/patrol/sessions/{id}` · XCO `AllowedCompanyIds` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · **không** DbContext |
| App | iOS `PatrolRepository` GetById · Android `ApiService` `@GET("patrol/sessions/{id}")` · base `{BffBase}/mobile-bff/api/v1` |
| Detail bind | hero + info rows từ `PatrolSessionDto` · timeline **demo SSOT 3 rows** P1 |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | GET check-ins list · PUT end · POST check-ins · tracks · list/search · patrol-checkin save |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-history-detail` → Full `#sc-patrol-detail` · 1 surface |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET patrol/sessions/{id}` (Bearer) · nav `Id` |
| Downstream | `PatrolSessionsController.GetById` · 403 XCO · 404 NotFound |
| Timeline | **demo SSOT** · **GAP-MOB-PAT-HIST-DET-TIMELINE-01** P2 GET check-ins · **cấm invent P1** |
| Map / End / Share | local nav / toast · **không** API slug này P1 |
| Step 4b | **N/A** — GetById **DONE** · không BE align delta |
| Rationale | Live GetById + DTO đủ hero/info · timeline UI-only P1 đã PO/Design chốt |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** local DetailController |
| BE HTTP | `PatrolSessionsController` | live GetById · pack **chỉ GET {id}** |
| Response DTO | `ApiResponse<PatrolSessionDto>` | app decode `data` / root |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `StartedAt` · `CoveragePercent` · `Status` · `CheckInCount` · `OfflineQueued` | §B real-data · `Note`/`IsActive` **không** bind P1 |
| HTTP app | Repository / ApiService | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | reuse list session mapper + detail display rules | **không** fork DTO |
| Demo fallback | control-hint / real-data Demo rows SSOT | GET fail → toast + bind SSOT · **cấm** fake 200 |
| Kit | `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmTabBar` | Design `kit_missing` **N/A** |
| Entry | `patrol-history` list row | rewire toast → push + `Id` · **cấm** reimplement list |

---

## FormMode ↔ API

| FormMode / surface | Trigger | API | Notes |
|--------------------|---------|-----|-------|
| Appear detail | nav + `Id` | **API-01** GET `patrol/sessions/{id}` | same-slug · missing Id → toast + pop list |
| Timeline | appear | — | demo SSOT 3 rows · **OUT** GET check-ins |
| tlTapDone | tap done row | — | nav `checkin-detail` · owner `patrol-checkin` |
| btnMap | tap | — | nav `patrol-map` + session `Id` |
| btnEnd | tap | — | toast «Kết thúc ca — xác nhận sau» · **cấm** PUT |
| navShare | tap | — | toast Chia sẻ · **cấm** share sheet P1 |
| navBack | tap | — | pop `#sc-patrol-history` |
| 404 | GET | — | empty chrome · back list |
| 403 | GET | — | toast · back list |
| Network fail | GET | — | toast lỗi · demo SSOT fallback |

**Cấm** nhét POST check-ins / PUT session / list GET vào solution slug này (`GAP-MOB-ACT-02`).

---

## API catalog

### API-01: GET /mobile-bff/api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Load chi tiết ca tuần đường theo `Id` từ list |
| Permission | JWT authenticated · Patrol session read |
| Tenant | X-Company-Id · XCO `AllowedCompanyIds` trên domain |
| Request | path `id: Guid` · **không** query P1 |
| Response | `PatrolSessionDto`: `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `PlannedDate` · `StartedAt` · `CoveragePercent` · `Status` · `CheckInCount` · `OfflineQueued` · (`Note` unused P1) |
| Errors | 401 → login · 403 → toast + pop · 404 → empty + pop · 5xx/network → toast + demo SSOT |
| Form surfaces | `#sc-patrol-detail` appear only |
| Field map | xem § Field map dưới |
| Context docs | `docs/context/features/patrol-history-detail.md` · peer `patrol-history.md` · DOMAIN-MAP Patrol |
| Demo HTML | `specs/patrol-history-detail/ui/prototype/{ios,android}/index.html` · `#sc-patrol-detail` · zones DES-MOB-PAT-DETAIL-* |
| Demo mock/JSON | real-data Demo rows SSOT · timeline 3 rows inline |
| **data-import** | N/A — không Excel / seed file P1 |
| Sample row | `Code=PAT-20260810-0014` · `UserName=Nguyễn Văn A` · `Route=QL.1 · Km 1551+200–1561+134` · `Status`→«Đang tuần» · `CoveragePercent=67` |
| Migration | **none** · Step 4b **N/A** |
| BFF | proxy passthrough · bffContentHash `sha256:patrol-sessions-getbyid-passthrough` |
| Downstream | `PatrolSessionsController.GetById` · `api/v1/patrol/sessions/{id}` |

**Không** có API-02+ trong pack P1 (timeline/map/end/share = local).

---

## Field map (controlHint → DTO · khớp real-data §B)

| uiField | controlHint | GET / write | dtoField | Display |
|---------|-------------|-------------|----------|---------|
| codeHero | Text display | GET | `Code` | raw PAT-* |
| badgeStatus | Badge | GET | `Status` + `OfflineQueued` | VN map · OfflineQueued → «Mất sóng» |
| rowUser | ListRow | GET | `UserName` | raw |
| rowRoute | ListRow | GET | `Route` | raw · demo append Km khi offline thiếu |
| rowType | ListRow | GET | `PatrolType` | raw |
| rowPlanDate | ListRow | GET | `PlannedDate` | `dd/MM/yyyy` |
| rowStarted | ListRow | GET | `StartedAt` | `HH:mm` local + `(UTC+7)` label |
| rowCoverage | ListRow | GET | `CoveragePercent` | `{n}%` |
| tlItem | TimelineRow | demo | — | 3 SSOT rows P1 |
| btnMap | PrimaryButton | nav | — | pass `Id` |
| btnEnd | SecondaryButton | toast | — | no PUT |
| navShare | IconButton | toast | — | no share sheet |
| navBack / title | BackButton / TopBar | nav | — | fixed chrome |

**no-parent-json:** N/A (read-only scalars · không inventory lines JSON).

---

## Gaps / tech factors

| ID | Topic | P1 decision |
|----|-------|-------------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | GET check-ins | **OUT** · demo SSOT · P2 |
| GAP-MOB-PAT-HIST-DET-END-01 | End session | toast only · **cấm** PUT |
| GAP-MOB-PAT-HIST-DET-NAV-01 / DEMO-01 | Parent row | Dev rewire toast → push + Id |
| Offline | GET fail | toast + demo SSOT · **cấm** fake 200 · **cấm** enqueue write (`GAP-MOB-ACT-07`) |
| GPS | detail | display-only trên timeline subtitle · **không** request location |
| Camera | detail | n/a · thumb P2 |
| Map | CTA | nav `patrol-map` · **không** embed / fake coords |
| Push / Biometric | — | n/a |
| TZ | StartedAt / PlannedDate | client format local · label UTC+7 demo |
| XCO | GetById | 403 toast + back · server-enforced |
| SHARE | — | N/A P1 (toast only · không share sheet) |
| Store privacy | GetById network | existing Keychain/Encrypted · **không** claim mới · **cấm** localhost/LAN (`GAP-SA-STORE-01`) · family `1` **không** claim iPad |
| GAP-MOB-BFF-01 | BFF | **none** — GetById live proxy |

---

## Entity / migration

| Item | Decision |
|------|----------|
| New table | **none** |
| Schema_* / Seed_* | **none** |
| `/database-migration` | **cấm** role này · Step 4b **N/A** |
| New endpoint | **cấm** · reuse GetById |
| ERP.* | **cấm** |

---

## TZ / XCO / SHARE (SA → TL mandatory)

| Flag | Value |
|------|-------|
| TZ | client format `PlannedDate`/`StartedAt` · store UTC on wire · demo label `(UTC+7)` |
| XCO | domain GetById enforces company · app pass company header · 403 → toast + pop |
| SHARE | **N/A** P1 · trailing = toast only |

---

## Screens / zones (ids)

- Owner: `DES-MOB-PAT-DETAIL` `#sc-patrol-detail` Full
- Zones: `DES-MOB-PAT-DETAIL-NAV` · `HERO` · `INFO` · `TL` · `CTA`
- Tab: shell `DES-MOB-TABBAR` Tuần đường on · `tabs: none` trên surface
- Entry: `#sc-patrol-history` row → push + `Id`
- Reuse nav: `patrol-map` · `checkin-detail` (≠ save)
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/ios/index.html#sc-patrol-detail`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/ui/prototype/android/index.html#sc-patrol-detail`
- peerStdUrl: N/A · **cấm** mfeStdUrl

---

## Dev slash / handoff next

| | |
|--|--|
| Next role | `team-lead` · task pack |
| Later Dev | `/agent-dev-ios` + `/agent-dev-android` |
| APIs for TL | **API-01** only |
| DoD SA | solution confirmed · FormMode↔API · no invent path · offline/GPS notes · TZ/XCO/SHARE · compact written |

---

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-history-detail` · `sheet` (Full surface) |
| phase_from / phase_to | `sa` → `team-lead` |
| STATUS | solution **confirmed** (autoApprove) |
| Context / Demo / DI | CTX `patrol-history-detail.md` · dual proto `#sc-patrol-detail` · DI N/A |
| controlHint / UNCLEAR | control-hint + real-data §B · UNCLEAR **none** |
| Screens / Pattern / devSlash | Full `#sc-patrol-detail` · `/agent-dev-ios` + `/agent-dev-android` |
| peerStdUrl / reviewUrl | N/A · dual file:// … `#sc-patrol-detail` |
| APIs / FormMode↔API | API-01 GET `{id}` · appear only |
| TZ / XCO / SHARE | format local · 403 back · SHARE N/A toast |
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
| generatedAt | `2026-09-01T01:03:39.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260831 |
| realDataHash | sha256:patrol-history-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-sessions-getbyid-passthrough |
| taskId | `task_47202291` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
