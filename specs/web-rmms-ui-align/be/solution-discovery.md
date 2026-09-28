# SA — solution-discovery — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| this role | `sa` · `/agent-sa` |
| status | **confirmed** (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone chrome · ≠ Kind B desktop grid) |
| domain | Auth · Notification · GIS tiles · cite Patrol/Incident/Maintenance peers · DOMAIN-MAP |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-ui-align` · `mfeStdUrl=http://localhost:9301/web-rmms-ui-align` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_608f0a2c`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T07:00:00.000Z` |
| demo | **N/A** · **cấm** rescan / invent API |

> SA **chốt** FormMode↔API · BFF vs API · entity/migration **none** · gates.  
> **Cấm** invent route/API · **cấm** ERP.* · **cấm** Web BFF client · **cấm** MapService browser · **cấm** HOW (TL).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain primary | chrome align — **không** domain/entity mới |
| Cite domains | Auth · Notification · GIS (`GisTilesController`) · Patrol (sessions badge) · Incident · Maintenance · peer Me rows |
| API host | Live Auth · Notification · tiles · peer CRUD — **không** folder ui-align mới |
| Entity / table | **none** feature-owned · Live peers only |
| Migration | **none** |
| BFF mobile (UI bind) | `mobile-bff/api/v1/**` · host `http://localhost:5202` · **cấm** đổi path |
| BFF web | cite only · **cấm** base client browser |
| Map tiles | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · **cấm** MapService browser |
| MFE | `Linm.Web.RMMS.Mobile` · phone ≤430 · route `/web-rmms-ui-align` |
| Response | Linm.Platform.CommonLib `ApiResponse` |
| Auth | Linm.Platform.Authentication · JWT |
| Persist | **none** chrome · JWT client store · peer forms own persist |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | prefix `mobile-bff/api/v1` |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication | login · refresh · profile Live |
| Catalog | LOOKUP_STATIC tab/Home/Me keys | `useFormOptions` · **cấm** hardcode VN |
| Me peers | `/web-rmms-feedback` · `/web-rmms-cam-view` | alias khi peer mount · else toast `me.peerPending` · **cấm** invent |
| Persist | no ui-align entity | **cấm** invent chrome CRUD |

## FormType pack (list · phone chrome)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full / Overlay / Tab (phone chrome · ≠ ERP Modal/Slideout) |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A-chrome** — peers keep own filter-bar |
| Report AC | **N/A** |
| List query keys | N/A chrome · peer lists own keys |
| filterItems | **cấm** |
| Leave | login dirty → LeaveConfirmModal · logout → useAlert · **cấm** native |
| Tabs | **5** — Trang Chủ · Tuần đường (`#i-mappin`) · Vấn đề · Công việc · Tôi |
| Map | tiles BFF only · deep GIS = peer |

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| LOGIN | `POST …/auth/login` | JWT · body user/pass |
| Session refresh | `POST …/auth/refresh-token` | renew JWT |
| Profile / Me header | `GET …/auth/profile` | displayName RO |
| Notify badge (opt) | `GET …/notification/overview` | unread Number RO · empty=0 |
| Field door badge (opt) | `GET …/patrol/sessions?status=Đang tuần` | badge · filter client |
| Map tiles | `GET …/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | vector tiles |
| Tab / Home / Field / Me nav | — (nav only) | routes · LOOKUP_STATIC · **cấm** invent |
| Me → feedback / cam | peer mount alias | else toast · **cấm** invent API |
| Peer lists (INC/MNT/…) | cite DOMAIN-MAP | owner peer · chrome nav only |

**Cấm** invent ui-align CRUD · **cấm** invent Me endpoints · **cấm** ERP.*.

## controlHint → API (cite real-data §B · compact)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| tab.items | TabBar | LOOKUP_STATIC | `useFormOptions` tab.* | route switch |
| login.user / login.pass | Text / Password | — | — | `POST auth/login` |
| home.* | Static / Nav / RO | LOOKUP_STATIC | profile · notify · nav | — |
| field.doors | Button / Nav | — | optional sessions badge | nav peer |
| me.* | Nav / RO / toast | LOOKUP_STATIC | profile · peer alias | logout local |
| map.tiles | Map | — | `GET gis/tiles/…` | — |
| peer lists | reuse peer | peer hint | DOMAIN-MAP | peer write |

## Persist gate

| Check | Result |
|-------|--------|
| Parent `*Json` blob | **N/A** — no write entity this feature |
| Child `lines[]` | **N/A** |
| GAP-SA-JSON | none |

## API catalog (reuse Live · cite only)

### API-01: POST /api/v1/auth/login

| | |
|--|--|
| Purpose | Đăng nhập JWT |
| Permission | anonymous → staff |
| Tenant | X-Company-Id sau login |
| Request | `{ userName, password }` |
| Response | tokens · profile summary |
| Form surfaces | LOGIN |
| Migration | none |
| Context | `docs/context/features/web-rmms-ui-align.md` · shell peer |
| Demo | **N/A** |
| data-import | **N/A** |

### API-02: POST /api/v1/auth/refresh-token

| | |
|--|--|
| Purpose | Gia hạn JWT |
| Form surfaces | session |
| Migration | none |
| Demo / DI | **N/A** |

### API-03: GET /api/v1/auth/profile

| | |
|--|--|
| Purpose | Profile RO chrome / Me |
| Form surfaces | HOME · ME |
| Migration | none |
| Demo / DI | **N/A** |

### API-04: GET /api/v1/notification/overview

| | |
|--|--|
| Purpose | Unread badge |
| Form surfaces | HOME / shell chrome |
| Migration | none |
| Demo / DI | **N/A** |

### API-05: GET /api/v1/patrol/sessions?status=Đang tuần (optional)

| | |
|--|--|
| Purpose | Field door badge |
| Form surfaces | FIELD |
| Migration | none |
| Demo / DI | **N/A** |

### API-06: GET /api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf

| | |
|--|--|
| Purpose | Map vector tiles via Mobile.Bff |
| Form surfaces | GIS / map peers |
| Migration | none |
| Demo / DI | **N/A** |
| Note | **cấm** MapService browser |

### API-PEER: Incident / Maintenance / … CRUD

| | |
|--|--|
| Purpose | Peer list/form Live — **owner peer** · chrome nav only |
| Cite | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` |
| Migration | none this feature |

## Entity / migration

| Item | Decision |
|------|----------|
| New entity | **none** |
| Schema_* / Seed_* | **none** |
| BFF vs API | UI → Mobile.Bff `:5202` → API `:5111` · **cấm** ERP.* / Web BFF client |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **n/a** | chrome surfaces · no date filter this pack | /review-timezone-implement | peers own TZ |
| XCO | **n/a** | no new GET/{id} View this pack | /implement-view-cross-company | peers own XCO |
| SHARE | **tenant_keep** | no new shared master entity | /implement-shared-table | chrome only |

AskQuestion (autoApprove=ON · self-confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · `2026-09-26T07:00:00.000Z`

## Quality gates (list pack · chrome)

| Gate | Status |
|------|--------|
| T-UI-LKP-01 | N/A chrome · peers own lookups |
| T-UI-FIELD-01 | chrome Text/Password/Nav only · map above |
| T-UI-PROD-01 | **cấm** Dev notes on UI · toast `me.peerPending` end-user |
| T-UI-FILTER-01 | **N/A-chrome** |
| Grid Kind B | **N/A-chrome** |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-ui-align` · `list` |
| phase_from / phase_to | sa → team-lead |
| STATUS | solution **confirmed** |
| FormMode↔API | LOGIN→API-01..03 · badge API-04/05 · tiles API-06 · peers DOMAIN-MAP |
| entity / migration | **none** |
| BFF vs API | Mobile.Bff `:5202` |
| TZ/XCO/SHARE | tz_na · xco_na · tenant_keep |
| APIs | API-01…06 + API-PEER cite |
| Open questions | none |
| Next | TL `task/web-rmms-ui-align.md` · `devSlash=/agent-dev` · **cấm** invent route/API |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
