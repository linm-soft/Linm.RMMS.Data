# SA — Solution — patrol-checkin (Ghi điểm tuần · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_0bbb7f91`) |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **sheet** · `DES-MOB-PAT-CHECKIN-SHEET` + read `DES-MOB-CI-DETAIL` · **cấm** Kind A–G web / Grid / Report / invent tab |
| thisAction | **Ghi điểm tuần** only · entry reuse hub/map/pin · **cấm** gộp pin CTA / map host (`GAP-MOB-ACT-02`) |
| domain | **Patrol** sessions + Kind E `…/check-ins` (live) + Kind E `…/plan-points` (MISSING) + FileService `files/*` · **cấm** invent `api/v1/patrol-checkin` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_e4a48d29` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_07ab9a33` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-checkin-*.md` · contentHash `sha256:patrol-checkin-control-hint-20260912-edit` · bffContentHash `sha256:patrol-checkin-mobile-bff-20260912-edit` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_0bbb7f91` |
| confirmedBy | agent autoApprove · `task_0bbb7f91` |
| updatedAt | `2026-09-12T12:58:00.000Z` |

**Cấm:** invent `api/v1/patrol-checkin` · invent path ngoài BFF table · clone controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` · system alert · fake lat/lng · plan=GPS SSOT · fake HTTP 200 · Write MFE/native ở SA · Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play · mobile-bff-file.

---

## § Delta (`edit_page` · `task_0bbb7f91`)

| Gap | Prior P1 | SA chốt now |
|-----|----------|-------------|
| GAP-MOB-BFF-01 POST check-ins | MISSING → local queue | **closed/live** · wire `POST …/check-ins` · body photos = FileService ids |
| GAP-MOB-CI-PHOTO-UP-01 | local `photoLocalIds[]` UUID | PhotoRow → `files` init/PUT/commit → `attachmentId[]` · preview `GET files/{id}/object` JWT · **cấm** resign URL |
| GAP-MOB-CI-PLAN-BE-01 | plan = pin/demo coords | Match vs **BE** `GET …/plan-points` khi live · interim session label · **cấm** plan=GPS SSOT |
| GAP-MOB-CI-FAKE-GPS-01 | live GPS | **Giữ** · **cấm** fake |
| GAP-MOB-BFF-FILE-01 | n/a | Nếu NuGet File BFF thiếu → offline queue photo + stamp GAP · **cấm** fake 200 · TL `/init-bff-file` |
| UI / kit / dual | shipped prior | **Giữ** · delta bind only |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | `PatrolSessionsController` · Kind E `…/check-ins` **live** · Kind E `…/plan-points` **MISSING** |
| File | FileService `:5018` via Mobile.Bff File NuGet · `files/*` · **cấm** invent `api/v1/mobile-files` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` · File BFF NuGet khi init |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill | `GET patrol/sessions` · optional `GET …/{id}` |
| Plan match | Prefer nearest BE plan-point · haversine `MATCH_RADIUS_M=50` · interim: session Note/label only (no fake plan coords as SSOT) |
| GPS | Device CL / Fused · **cấm** fake |
| Camera / photo | Device capture → FileService lifecycle → attachment ids on POST |
| Submit | `POST …/check-ins` live · offline → `OfflineQueueKind.checkIn` · **cấm** fake 200 |
| Persist BE mới | T-BE Kind E **plan-points** + photo field = File attachment ids · Step 4b **pending TL/T-BE** |
| Sibling | entry hub/map/pin · queue `patrol-offline` · **cấm** re-own |
| Out of pack | pin CTA · map host · tracks/coverage/kpi · attendance · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-checkin` → **sheet** · owner `DES-MOB-PAT-CHECKIN-SHEET` (+ read `DES-MOB-CI-DETAIL`) |
| App prefix | `mobile-bff/api/v1` |
| Read | `GET patrol/sessions` · `GET patrol/sessions/{id}` |
| Plan (Kind E) | `GET patrol/sessions/{id}/plan-points` — **wire sẵn** · call khi live · else stamp GAP-MOB-CI-PLAN-BE-01 · interim label session |
| Write | `POST patrol/sessions/{id}/check-ins` — **live** · body `attachmentId[]` (map `photoLocalIds`→File guids **hoặc** BE rename `mediaIds`/`photoAttachmentIds` — **không** fork app-only) |
| Files | `POST files` · `PUT files/{id}/object` · `POST files/{id}/commit` · `GET files/{id}/object` |
| Downstream | `PatrolSessionsController` + FileService · **không** invent dedicated check-in controller |
| Match gate | Client haversine vs BE plan nearest · `matchOk = distanceToPlanM ≤ 50` |
| Step 4b | **Pending TL/T-BE** — (1) Kind E plan-points schema/controller · (2) confirm photo field = FileService ids · (3) `/init-bff-file` nếu NuGet thiếu · **cấm** SA chạy |
| Rationale | Prefill live · submit live · plan SSOT = BE · photos = FileService · offline-safe khi GAP |

---

## Kind E — `plan-points` (SA chốt)

| | |
|--|--|
| App path | `GET patrol/sessions/{id}/plan-points` |
| Downstream | Kind E action trên `PatrolSessionsController` · path CTX · **cấm** invent slug |
| Response (schema T-BE) | `ApiResponse` list items: `id` · `label` (planPointLabel) · `lat` · `lng` · optional `sequence` / `routeChainage` |
| Client bind | nearest point by haversine → `#ci-plan` · `#ci-dist` · `#ci-match-banner` · POST `planPointLabel` từ BE label |
| Khi MISSING | Stamp GAP-MOB-CI-PLAN-BE-01 · `#ci-plan` = session Note / Route label · **không** set plan lat/lng = GPS · match banner: interim “chưa có điểm KH BE” / disable primary theo PO AC-MATCH nếu không có plan coords |
| Persist | T-BE entity/table nếu cần · **cấm** nhét JSON vào `PatrolSession.Note` · SHARE `share_pending_tbe` |

---

## FileService photo (SA chốt)

| Step | Path | Note |
|------|------|------|
| init | `POST files` | metadata mime/size · company headers |
| upload | `PUT files/{id}/object` | bytes |
| commit | `POST files/{id}/commit` | SSOT file-attach |
| preview | `GET files/{id}/object` | Bearer JWT · detail `#sc-checkin-detail` |
| POST check-ins | body photos = committed file ids | map field SA: keep wire name aligned BFF table |
| GAP-MOB-BFF-FILE-01 | NuGet missing | queue local + stamp · TL `/init-bff-file` · **cấm** fake 200 |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | proxy catch-all + File NuGet | **cấm** local invent controller |
| BE HTTP | `PatrolSessionsController` | GET live · POST check-ins **live** · plan-points **MISSING** |
| Request body POST | BFF table / PO | `planPointLabel` · `route` · `lat`·`lng`·`accuracyM` · `distanceToPlanM`·`matchOk` · `content` · photo attachment ids |
| HTTP app | reuse Patrol use cases + File upload use case | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` | allow / deny / unavailable |
| Offline | `OfflineQueueKind.checkIn` (+ photo pending nếu File GAP) | sibling `patrol-offline` |
| Kit | BottomSheet · TextField · TextArea · Primary/Secondary · Toast · PhotoRow · TopBar | Design kit giữ |
| Modals | leave · GPS deny | **cấm** system alert |
| Tabs | shell Tab 5 giữ · `tabs: none` | **cấm** invent |

---

## BFF / API contract (audit 2026-09-12)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill list | `GET patrol/sessions` | proxy | Patrol | **PASS** |
| Prefill byId | `GET patrol/sessions/{id}` | proxy | Patrol | **PASS** |
| Plan-points | `GET patrol/sessions/{id}/plan-points` | proxy | Kind E đề xuất | **MISSING** · GAP-MOB-CI-PLAN-BE-01 |
| Submit | `POST patrol/sessions/{id}/check-ins` | proxy | Kind E | **live** · GAP-MOB-BFF-01 **closed** |
| File lifecycle | `files` / `files/{id}/object` / commit | File NuGet | FileService | **GAP-MOB-BFF-FILE-01** nếu thiếu NuGet |
| GPS / match | — | — | Device + BE plan | **N/A** API |

### Body (POST check-ins — live)

| Field | UI / source |
|-------|-------------|
| `planPointLabel` | BE plan nearest label · interim session |
| `route` | `Route` session |
| `lat` · `lng` · `accuracyM` | **Live GPS only** |
| `distanceToPlanM` · `matchOk` | haversine vs BE plan (khi có) |
| `content` | TextArea |
| photo attachment ids | Sau File commit — **không** UUID thiết bị thuần |

**Cấm** app fork DTO khác BFF table · **cấm** invent `api/v1/patrol-checkin`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list / byId / plan-points | reuse · plan-points T-BE khi live |
| Kind E check-ins write | POST `…/check-ins` | **live** |
| FileService | files/* | company + auth File SSOT |
| session CRUD / tracks / kpi | — | **OUT** |

---

## Implement gates (confirm)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **tz_na** | không form date edit |
| XCO | **xco_na** | company filter BE |
| SHARE | **share_pending_tbe** | plan-points entity/table T-BE · **cấm** parent JSON |
| Offline | **sheet mở + queue** | GET fail → demo prefill label · POST/File offline → queue · **cấm** fake 200 |
| GPS | **Live loc required** | deny modal · **cấm** fake |
| Camera / File | **FileService P1** | PhotoRow → files/* · GAP queue nếu NuGet thiếu |
| Push | **n/a** | — |
| Store | camera + location claimed | no new privacy delta · **cấm** localhost/LAN |
| Step 4b | **Pending TL/T-BE** | plan-points + photo field + init-bff-file · **không** chạy SA |

AskQuestion (autoApprove=ON): `be_repo_confirm`=WebService · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_pending_tbe` · `solution_confirm=approve` · `2026-09-12T12:58:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON inventory | **none** |
| Child tables | T-BE plan-points (nếu cần) · check-ins **đã live** · photo = FileService ids · **cấm** JSON vào `PatrolSession.Note` |
| Client store | form + OfflineQueue + local pending photo URIs |
| Migration | **không** chạy SA · TL/T-BE |
| T-BE-API | **yes** — `GET …/plan-points` Kind E · confirm photo field ids |
| T-BE-MIG | **pending** nếu cần bảng plan-points |

---

## Live vs delta (audit 2026-09-12)

| Surface | Live | SA chốt |
|---------|------|---------|
| `GET …/sessions` · `{id}` | live | **Giữ** |
| `POST …/check-ins` | **live** | Wire + File ids · offline queue |
| `GET …/plan-points` | **MISSING** | Wire + GAP · interim session label · T-BE |
| `files/*` | GAP NuGet? | File lifecycle · `/init-bff-file` nếu thiếu |
| Sheet / detail / kit | prior ship | **Giữ** · bind delta |
| Invent slug | không | **Cấm** |

---

## Form data analysis

| Screen | Fields | Source | Entity |
|--------|--------|--------|--------|
| `#sheet-checkin` | prefill + GPS + content + photos | GET + device + File + POST | session + check-in + File |
| `#ci-match-banner` | dist / matchOk | live GPS vs BE plan | — |
| `#sc-checkin-detail` | plan / dist / photos preview | last save + `GET files/{id}/object` | cùng slug |

### Field map (ui → dto)

| uiField | dtoField | Wire |
|---------|----------|------|
| planPoint `#ci-plan` | `planPointLabel` | BE plan-points · interim session |
| route `#ci-route` | `route` | GET sessions |
| gps `#ci-gps` | `lat`·`lng`·`accuracyM` | device live |
| dist `#ci-dist` | `distanceToPlanM` · `matchOk` | haversine |
| content `#ci-content` | `content` | POST |
| photos `#ci-photos` / `#ci-add-photo` | attachment ids | FileService |
| save `#ci-save-btn` | POST | disable `!matchOk` (khi có plan coords) |

---

## Navigation / action (this pack)

| Control | Behavior | Owner |
|---------|----------|-------|
| Hub/map/pin → sheet | entry reuse | owner |
| Lưu / Ghi nhận | matchOk → File commit → POST · else queue | owner |
| Camera | capture → File lifecycle | owner |
| Hủy dirty / GPS deny | leave / deny modals | owner |
| Detail preview | JWT object GET | owner |
| Pin/map host / Tab invent | **cấm** | siblings / shell |

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-BFF-01 | **closed** · POST check-ins live |
| GAP-MOB-CI-PLAN-BE-01 | Kind E `GET …/plan-points` · wire + T-BE · interim session label · **cấm** plan=GPS |
| GAP-MOB-CI-PHOTO-UP-01 | FileService files/* → attachment ids on POST · preview object JWT |
| GAP-MOB-BFF-FILE-01 | nếu NuGet thiếu → queue + TL `/init-bff-file` · **cấm** fake 200 |
| GAP-MOB-CI-FAKE-GPS-01 | live GPS only |
| GAP-MOB-CI-MATCH-01 | banner + gate · radius 50 m vs BE plan |
| GAP-MOB-ACT-02/06/07 · GAP-TAB-01 · GAP-SA-STORE-01 | giữ prior · không invent |
| Step 4b / T-BE-* | **Pending TL** — không chạy SA |

---

## Client architecture (TL/Dev)

| Layer | Choice |
|-------|--------|
| Feature UI | giữ `PatrolCheckIn/*` dual · delta bind File + plan-points |
| Use cases | sessions + location + submit + **FileUpload** · **FetchPlanPoints** |
| Repo | Patrol + File + offline enqueue |
| State | matchOk · gps · content · attachmentIds · planPoints · dirty · leave · gpsDeny |

### Delta Dev (role sau — không implement SA)

1. Bind plan-points GET khi live · interim label · **cấm** plan=GPS.
2. PhotoRow → File init/PUT/commit → POST attachment ids · preview object JWT.
3. Submit live POST · offline/File GAP → queue · **cấm** fake 200.
4. Dual parity giữ kit/copy · verify builds Dev only.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-PAT-CI-DELTA` | Dev iOS | File + plan-points bind · offline |
| `T-AND-PAT-CI-DELTA` | Dev Android | parity |
| `T-BE-PAT-PLAN-PTS` | T-BE | Kind E `GET …/plan-points` + schema |
| `T-BE-PAT-CI-PHOTO` | T-BE | confirm POST photo = File ids |
| `T-BFF-FILE-INIT` | TL | `/init-bff-file` nếu GAP-MOB-BFF-FILE-01 |
| `T-BE-PAT-CI-MIG` | T-BE | chỉ nếu cần bảng plan-points |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **`sheet`** |
| solution_confirm | **approve** |
| BFF | GET sessions live · POST check-ins **live** · GET plan-points **GAP** · files/* FileService |
| Tasks | `T-IOS/AND-PAT-CI-DELTA` · `T-BE-PAT-PLAN-PTS` · `T-BE-PAT-CI-PHOTO` · `T-BFF-FILE-INIT` · mig nếu cần |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · **cấm** e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T12:58:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
