# Team lead — Task — web-rmms-home

| Field | Value |
|-------|-------|
| feature | `web-rmms-home` |
| title | Home — guest FAQ/privacy/login · staff quick + lưới 6 · wallet · badge · profile |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-home`) |
| packKind | `list` (**phone Home** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile Home / full · phone max-width **430** · N/A ERP Modal/Slideout · **no** master form · DES-LEAVE **N/A** (login dirty = shell) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-home` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-home` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification · Mobile.Bff `:5202` · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · cite peer · **cấm** đổi Live path · **cấm** invent Home CRUD |
| DOMAIN-MAP | `web-rmms-home` → Notification/`notification` · CLOSED (SA) |
| demo | **N/A** · Live-only · **REMOVED** me / me-profile / me-settings / feedback / cam-view |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T12:30:00.000Z` |
| taskId | `task_074ab0e0` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone Home tiles).  
> Entity/migration / Step 4b = **none** · **cấm** invent Home controller/CRUD.  
> Ownership: Home = **HM-*** · shell = TabBar + login overlay (**UNCLEAR-HOME-VS-SHELL** resolved).

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-home` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | `/rmms-home` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-home]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone Home)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-HOME-01** | DES-GRID N/A · phone Home tiles HM-* |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone Home · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **WAIVE** | no master/Create form on Home · login = shell `/login` CTA |
| T-UI-LEAVE-01 | **WAIVE** | DES-LEAVE N/A · dirty login owned by shell |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates adapted Home surface |
| T-UI-LKP-01 | **WAIVE** | Home không SearchInput catalog |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live profile + overview · LOOKUP_STATIC labels |
| T-QA-CRUD-01 · T-QA-HOME-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ theo surface phone Home + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| HM-00 | Home root / stack | Full 430 | — | guest\|staff branch | T-UI-HOME-01 | `/agent-dev` |
| HM-01 | Guest FAQ / privacy | Static | — | openFaq · openPrivacy | T-UI-HOME-01 | `/agent-dev` |
| HM-02 | Guest login CTA | Button/Nav | — | → `/login` (shell) | T-UI-HOME-01 · T-UI-ACT-01 | `/agent-dev` |
| HM-03 | Staff quick | Button/Nav | — | qaPatrolPoint · IncidentNew | T-UI-HOME-01 · T-UI-ACT-01 | `/agent-dev` |
| HM-04 | Staff grid×6 | Button/Nav | — | 6 SCREENS routes | T-UI-HOME-01 · T-UI-ACT-01 | `/agent-dev` |
| HM-05 | Wallet + notify badge | Button/Nav · Number RO | — | → `/asset` · → `/ops` | T-UI-HOME-01 | `/agent-dev` |
| HM-06 | Profile name | Text RO | — | GET auth/profile | T-UI-HOME-01 · T-UI-FIELD-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN · me* surfaces |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Auth profile Live · Notification overview · CommonLib `ApiResponse` | invent Home CRUD entity · parent `*Json` · Home controller |
| GPS | **none** on Home · peer deep only | `navigator.geolocation` on Home |
| Copy | Android icon/layout 1-1 | sửa iOS/Android native |
| Peer | shell TabBar+login · Field deep / journal… → shell / `web-rmms-mobile-a`…e | duplicate shell chrome / peer flows |
| Ownership | Home owns **HM-*** only | implement TabBar / login overlay here |

## implement.wire

| From | To | Note |
|------|----|------|
| profileName | `GET mobile-bff/api/v1/auth/profile` | Text RO · staff |
| notifyBadge | `GET mobile-bff/api/v1/notification/overview` | Number RO · staff → `/ops` |
| guestLogin | navigate `/login` | shell overlay · **no** POST on Home |
| qaPatrolPoint | navigate Field / peer A | Field door cite |
| IncidentNew | navigate `/incident/new` (cite) | nav-only |
| grid×6 | `/supervise` · `/patrol-map` · tab Work · tab Incident · `/asset` · `/offline` | SCREENS Home · nav-only |
| walletAsset | navigate `/asset` | nav-only |
| FAQ / privacy | static / sheet cite | guest · no invent CMS API |

## implement.state

- Route Home phone **430** · react-router under `/web-rmms-home`
- Guest: HM-01 + HM-02 · **no** grid/wallet/badge/profile Live calls until auth
- Staff: HM-03 · HM-04 · HM-05 · HM-06 · profile + overview Live
- **REMOVED** me / me-profile / me-settings / feedback / cam-view
- Labels: `useFormOptions()` keys only · UTF-8 VN
- GPS **none** on Home
- STD-PORT `:9301` · mfeStdUrl STATUS
- Shell owns TabBar + login · Home **không** duplicate SH-*

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| home.grid.* / guest.* / quick.* labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN string |
| profileName | GET auth/profile | invent name · demo |
| notifyBadge | GET notification/overview | fake badge · mock |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| guestFaq | Static | useFormOptions guest.* | — |
| guestPrivacy | Static | useFormOptions guest.* | — |
| guestLogin | Button/Nav | — | → `/login` |
| qaPatrolPoint | Button/Nav | — | Field / peer A |
| IncidentNew | Button/Nav | — | `/incident/new` |
| gridSupervise | Button/Nav | home.grid.* | `/supervise` |
| gridPatrolMap | Button/Nav | home.grid.* | `/patrol-map` |
| gridWork | Button/Nav | home.grid.* | tab Work |
| gridIncident | Button/Nav | home.grid.* | tab Incident |
| gridAsset | Button/Nav | home.grid.* | `/asset` |
| gridOffline | Button/Nav | home.grid.* | `/offline` |
| walletAsset | Button/Nav | — | `/asset` |
| notifyBadge | Number RO | notification/overview | → `/ops` |
| profileName | Text RO | auth/profile | — |

---

## Tasks

### T-BE-CRUD-01 — Auth profile + Notification overview (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET auth/profile` · `GET notification/overview` · **migration none** · ApiResponse · **cấm ERP.*** · **cấm** invent Home entity/CRUD/controller · tiles = nav-only
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Notification

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** guest/quick/grid/wallet labels từ `useFormOptions()` · **cấm** hardcode KIND_LABEL / VN string · **cấm** invent Home init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Guest vs staff gate
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → guest HM-01/02 · auth → staff HM-03…06 + Live profile/overview · UI hide/disable theo auth · **cấm** call profile/overview khi guest · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-HOME-01 — Phone Home guest + staff surfaces
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** HM-00…HM-06 · phone 430 · guest FAQ/privacy/login CTA · staff quick + grid×6 + wallet + badge + profile · empty/loading/error · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar / me* · **cấm** TabBar/login overlay · Android layout 1-1 · GPS none
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** profile · overview · nav tiles
- **implement.state:** route under `/web-rmms-home`

### T-UI-ACT-01 — Action inventory (all Home CTAs)
- **role:** Dev · **deps:** T-UI-HOME-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút guest/quick/grid/wallet/notify → handler + nav/API · **cấm** dead button (**GAP-P2-ACT-***) · grid6 routes đúng SCREENS
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-HOME-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA · Text RO profile · Number RO badge · Button/Nav tiles · **cấm** GPS trên Home · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user Home
- **role:** Dev · **deps:** T-UI-HOME-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone Home)
- **role:** Dev · **deps:** T-UI-HOME-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-HOME-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** profile/overview network fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Home Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-HOME-01 · **status:** pending
- **DoD:** scenarios GET auth/profile · GET notification/overview · guest no Live call · **E2E chỉ** `/agent-qa*` · **cấm** team_lead/dev chạy e2e/start:std
- **skills:** `/agent-qa`

### T-QA-HOME-01 — Guest + staff Home flows (queued)
- **role:** QA · **deps:** T-UI-ACT-01 · T-UI-FIELD-01 · **status:** pending
- **DoD:** guest FAQ/privacy/login CTA · staff quick+grid6+wallet+badge+profile · no me* · phone 375 · nav targets · queued `/agent-qa*`
- **skills:** `/agent-qa`

---

## Dev assign

| Task | Owner slash | Notes |
|------|-------------|-------|
| T-BE-* · T-PERM-01 · T-UI-* | `/agent-dev` | single MFE `Linm.Web.RMMS.Mobile` · Live Home only |
| T-UI-RESP-01 | `/dev-web-responsive` then `/dev-ui-review` | after UX |
| T-QA-* | `/agent-qa*` | e2eQa=ON queued · **cấm** run ở team_lead/dev |

**tl-retry-ssot-rereview:** N/A (first pass · no retry).

## DoR team_lead — PASS

- [x] route_confirm approve `/web-rmms-home`
- [x] FormType adapt + waive cite (GAP-TL-FORMTYPE-01)
- [x] T-* đủ Home surface · Screens→tasks · wire/state/init/field
- [x] prior compact confirmed · contentHash match
- [x] compact handoff `handoff/team_lead-compact.md`
- [x] **cấm** product code / e2e / yarn build / start:std / Step 4b

## Next

`/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · autoApprove=ON · e2eQa queued QA
