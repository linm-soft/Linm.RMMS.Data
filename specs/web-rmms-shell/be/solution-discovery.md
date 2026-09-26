# SA — solution-discovery — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `new_page` |
| packKind | `list` (phone shell ≠ desktop Kind B grid) |
| domain | **Notification** (+ Auth · Contract · cite Patrol/Incident/Maintenance) · DOMAIN-MAP slug `web-rmms-shell` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-shell` · `mfeStdUrl=http://localhost:9301/web-rmms-shell` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_49940202`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T11:35:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json SSOT |
| wave | **Shell Live-only** · out: me* · feedback · cam-view · journal/findings/session/frequency (b–e) |

> SA **chốt** FormMode↔API · BFF vs API · DOMAIN-MAP · migration none · gates.  
> **Cấm** invent shell CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** HOW (TL).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain primary | Notification / `notification` · chrome badge |
| Cite domains | Auth (platform login/profile/refresh) · Contract (`contract-accounts/session-window`) · Patrol · Incident · Maintenance |
| API host | Live Auth · Notification · Contract · peer domains — **không** folder shell mới |
| Entity / table | **none** shell-owned · Live peers only |
| BFF web (cite) | `web-bff/api/v1/{auth\|notification\|contract\|patrol\|incident\|maintenance}/**` · **không** base client |
| BFF mobile (UI bind) | `mobile-bff/api/v1/**` · host `http://localhost:5202` · cùng `{resource}` Live · **cấm** đổi path |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · route `/web-rmms-shell` |
| Response | Linm.Platform.CommonLib `ApiResponse` |
| Auth perm | Linm.Platform.Authentication · JWT gate staff Home |
| Persist | **none** shell · JWT client store only · **cấm** invent me endpoints |
| Out of shell | me* · feedback · cam-view · deep Field (peer a–e) |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix `mobile-bff/api/v1` |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication | login · refresh · profile Live |
| Files | FileService BFF `files/*` | peer deep only · shell chrome **không** upload |
| Catalog | LOOKUP_STATIC tab/Home keys | `useFormOptions` · **cấm** hardcode VN |
| Persist | no shell entity | **cấm** invent shell domain CRUD |

## FormType pack (list · phone shell)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Mobile shell / full / sheet · login overlay · phone 430 · LeaveConfirmModal (login dirty) |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone shell · **không** desktop filter bar |
| Report AC | **N/A** |
| List query keys | N/A shell chrome · peer lists own keys |
| filterItems | **cấm** |
| Leave | login dirty → LeaveConfirmModal (DES-LEAVE) |
| Tabs | Home · Field · Incident · Work (**4 only** · REMOVED me*) |
| Map / GPS | none on shell chrome · deep = peer · deny → block coords (peer) |

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| SH-02 Login | `POST …/auth/login` | JWT · body user/pass |
| Session refresh | `POST …/auth/refresh-token` | renew JWT |
| Profile chrome | `GET …/auth/profile` | displayName RO |
| Session window gate | `GET …/contract-accounts/session-window?authUserId=` | 403 → thoát staff |
| Notify badge | `GET …/notification/overview` | unread Number RO · empty=0 |
| Field door badge (opt) | `GET …/patrol/sessions?status=Đang tuần` | badge cửa Tuần đường / Tuần kiểm · filter client |
| Incident root stub | cite peer `GET …/incident/incidents` | **owner peer** · shell nav only |
| Work root stub | cite peer `GET …/maintenance/work-orders` | **owner peer** · shell nav only |
| Tab / Home CTAs | — (nav only) | routes · LOOKUP_STATIC labels |
| Field doors | — (nav) | `/field/tuan-duong` · `/field/tuan-kiem` → peer A |

**Cấm** invent shell CRUD · **cấm** invent me endpoints · **cấm** ERP.*.

## controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| tab.items | TabBar | LOOKUP_STATIC | `useFormOptions` tab.* | route switch |
| login.user / login.pass | Text / Password | — | — | `POST auth/login` body |
| session | derived | — | login · refresh | JWT store |
| sessionWindow | gate | — | `GET contract-accounts/session-window` | — |
| profile.displayName | Text RO | — | `GET auth/profile` | — |
| notify.unread | Number RO | — | `GET notification/overview` | — |
| home.quickActions / home.grid | Button/Nav | — | SCREENS Home | nav only |
| field.doorPatrol / doorInspect | Button/Nav | — | optional sessions badge | nav peer A |
| incident.root / work.root | List stub | — | peer GET | cite peer |
| stackBack | Button | — | — | shell stack |

## Persist / entity / migration

| Entity | Table | Wave shell migration |
|--------|-------|----------------------|
| — | — | **none** — Live Auth/Notification/Contract/peer đủ |
| Schema D | — | **không** trong shell |

**parent_json:** **PASS** — không inventory shell `*Json` · không entity mới.

## DOMAIN-MAP (CLOSED)

| Feature slug | Domain Pascal | kebab | Note |
|--------------|---------------|-------|------|
| `web-rmms-shell` | Notification | `notification` | shell chrome Auth+Notification · cite Patrol/Incident/Maintenance/Contract · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-shell` · **cấm** invent shell CRUD |

**UNCLEAR-DOMAIN-MAP-SHELL → CLOSED** (row added `docs/DOMAIN-MAP.md`).  
**UNCLEAR-STD-PORT → CLOSED**: follow STATUS `mfeStdUrl` `:9301` (PLAN `:9330` note only).

## API catalog

### API-01: POST /api/v1/auth/login

| | |
|--|--|
| Purpose | Staff login · JWT |
| Permission | public login |
| Request | body: user · pass |
| Response | tokens + profile seed |
| Errors | 401 toast · **cấm** `window.alert` |
| Form surfaces | SH-02 |
| Migration | none |
| Demo | **N/A** |

### API-02: POST /api/v1/auth/refresh-token

| | |
|--|--|
| Purpose | Renew session |
| Form surfaces | shell session keep-alive |
| Migration | none |

### API-03: GET /api/v1/auth/profile

| | |
|--|--|
| Purpose | displayName RO chrome |
| Form surfaces | SH-01/03 staff Home |
| Migration | none |

### API-04: GET /api/v1/contract-accounts/session-window

| | |
|--|--|
| Purpose | HĐ cửa sổ · gate staff |
| Request | query `authUserId` |
| Errors | 403 → thoát |
| Form surfaces | shell gate |
| Migration | none |

### API-05: GET /api/v1/notification/overview

| | |
|--|--|
| Purpose | unread badge |
| Errors | empty → badge 0 |
| Form surfaces | Home/ops chrome |
| Domain | Notification |
| Migration | none |

### API-06 (optional): GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Field door badge `Đang tuần` · filter `PatrolType` client |
| Owner | peer Patrol / web-rmms-mobile-a |
| Form surfaces | SH-04 Field |
| Migration | none |

### API-07/08 (cite peer only)

| Id | Path | Owner |
|----|------|-------|
| API-07 | `GET …/incident/incidents` | peer Incident |
| API-08 | `GET …/maintenance/work-orders` | peer Maintenance |

## BFF vs API

| Concern | Decision |
|---------|----------|
| UI client base | **Mobile.Bff** `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| Path parity | cùng resource Live Auth/Notification/Contract/peer · **cấm** đổi path |
| web-bff | cite only · **không** bind Mobile shell |
| New BFF routes | **none** shell |
| Invent API | **cấm** |

## Gates

| Gate | Value |
|------|-------|
| TZ | N/A shell chrome (no datetime write) |
| XCO | N/A (no export) |
| SHARE | tenant_keep · JWT + X-Company-Id peer calls |
| GPS | shell chrome **no capture** · deep peer HARD deny→block |
| Labels | `useFormOptions()` · **cấm** hardcode VN |

## Handoff next

| Role | Need |
|------|------|
| team-lead | Tasks: shell scaffold · TabBar 4 · login gate · Home/Field doors · Live BFF bind · **cấm** me* |
| Dev | Implement Mobile MFE only · `/agent-dev` |
| QA | Tab switch · login · no me · phone 430 · E2E queued |
| Review | solution + design parity |

**next slash:** `/agent-team-lead` · **roleOnly stop** (GAP-PKT-ROLE-01).

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `updatedAt=2026-09-25T11:35:00.000Z` · `taskId=task_49940202`
