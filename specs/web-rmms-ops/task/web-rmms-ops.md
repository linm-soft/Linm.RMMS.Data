# Team lead — Task — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| title | Thông báo inbox — list + mark-read |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-ops`) |
| packKind | `list` (**phone inbox** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile inbox list/full · phone max-width **430** · N/A ERP Modal/Slideout · **no** master compose · DES-LEAVE **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ops` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification · Mobile.Bff `:5202` · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · cite peer · **cấm** đổi Live path · **cấm** invent Ops CRUD/compose |
| DOMAIN-MAP | `web-rmms-ops` → Notification/`notification` · CLOSED (SA) · alias `ops` kept |
| demo | **N/A** · Live-only · **REMOVED** me* / feedback / cam-view / Field deep / desktop Kind B |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T13:05:00.000Z` |
| taskId | `task_133133c0` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |
| cite | T-W2-01 (real-data inbox) |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor / filter UI P1 = **N/A** (PO·Design·SA).  
> Entity/migration / Step 4b = **none** · **cấm** invent Ops controller/CRUD.  
> Row unread tap = **mark-read only** · **no** detail page P1.  
> OP-06 notifyBadge = **peer Home** (overview) · **cấm** duplicate badge owner trên /ops.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-ops` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | `/ops` | rejected (deep nav alias only · mfeStdRoute giữ `/web-rmms-ops`) |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-ops]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone inbox)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-OPS-01** | DES-GRID N/A · phone inbox OP-* |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone inbox · no filter UI P1 · API query sẵn |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **WAIVE** | no master/Create compose on /ops |
| T-UI-LEAVE-01 | **WAIVE** | DES-LEAVE N/A · no dirty form |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates adapted inbox |
| T-UI-LKP-01 | **WAIVE** | no SearchInput catalog |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live inbox + mark-read · LOOKUP_STATIC |
| T-QA-CRUD-01 · T-QA-OPS-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone inbox + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| OP-00 | Ops root / stack | Full 430 | — | back · refresh | T-UI-OPS-01 | `/agent-dev` |
| OP-01 | Title chrome | Static | — | — | T-UI-OPS-01 · T-UI-FIELD-01 | `/agent-dev` |
| OP-02 | Inbox list | List | List | load page=1/50 | T-UI-OPS-01 | `/agent-dev` |
| OP-03 | Row title / sentAt | Text RO | — | — | T-UI-FIELD-01 | `/agent-dev` |
| OP-04 | Unread badge | Badge | — | — | T-UI-FIELD-01 | `/agent-dev` |
| OP-05 | Row unread tap / markRead | Action | — | POST mark-read | T-UI-ACT-01 | `/agent-dev` |
| OP-06 | Empty state | Static | — | — | T-UI-OPS-01 | `/agent-dev` |
| peer | notifyBadge Home | Number RO | — | GET overview | peer Home · cite | — |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN · me* · DES-GRID |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Notification inbox + mark-read Live · CommonLib `ApiResponse` | invent Ops entity/CRUD/controller · compose |
| GPS | **none** on /ops | `navigator.geolocation` on /ops |
| Copy | Android icon/layout 1-1 | sửa iOS/Android native |
| Peer | badge overview = Home · Field deep / journal… → shell / `web-rmms-mobile-a`…e | duplicate Home badge · peer flows |
| Ownership | Ops owns **OP-*** inbox only | implement TabBar / Home tiles here |

## implement.wire

| From | To | Note |
|------|----|------|
| inboxList | `GET mobile-bff/api/v1/notification/inbox?page=1&pageSize=50` | List · Live |
| markRead | `POST mobile-bff/api/v1/notification/inbox/{id}/mark-read` | unread row tap only |
| refresh | same GET inbox | chrome reload |
| back | navigate stack / Home | shell/nav cite |
| notifyBadge | peer Home `GET …/notification/overview` | **cấm** re-own on /ops |
| empty | empty state when items=[] | copy keys useFormOptions |

## implement.state

- Route Ops phone **430** · react-router under `/web-rmms-ops`
- P1: inbox GET + mark-read POST + empty + chrome · **no** detail page · **no** filter UI
- Unread row tap → mark-read → refresh unread UI · **cấm** navigate detail
- **REMOVED** me* / feedback / cam-view / Field deep / desktop Kind B compose
- Labels: `useFormOptions()` keys only · UTF-8 VN
- GPS **none** on /ops
- STD-PORT `:9301` · mfeStdUrl STATUS
- cite T-W2-01 real-data

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| ops.title / empty / chrome labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN string |
| inbox items | GET notification/inbox | fake list · mock · demo HTML |
| unread state | inbox item + mark-read response | local-only fake without API |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| title | Static | useFormOptions ops.* | — |
| back | Button/Nav | — | stack back |
| refresh | Button/Action | — | GET inbox |
| inboxList | List | notification/inbox | — |
| rowTitle | Text RO | inbox item | — |
| rowSentAt | Text RO | inbox item | — |
| rowUnread | Badge | inbox item | — |
| markRead | Button/Action | — | POST mark-read |
| empty | Static | useFormOptions empty.* | — |
| optPriority/Type | Text RO / Badge | inbox item optional | — |

---

## Tasks

### T-BE-CRUD-01 — Notification inbox + mark-read (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET notification/inbox` (p1/50) · `POST …/inbox/{id}/mark-read` · **migration none** · ApiResponse · **cấm ERP.*** · **cấm** invent Ops entity/CRUD/controller · cite T-W2-01
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Notification

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** title/empty/chrome/row labels từ `useFormOptions()` · **cấm** hardcode KIND_LABEL / VN string · **cấm** invent Ops init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Auth gate inbox
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → shell login / redirect cite · auth → Live inbox · UI hide/disable theo auth · **cấm** call inbox khi guest · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-OPS-01 — Phone inbox surfaces OP-00…06
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** OP-00…OP-06 · phone 430 · list + empty + chrome · loading/error · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar / filter UI / detail page / me* · Android layout 1-1 · GPS none
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** inbox · mark-read · refresh · back
- **implement.state:** route under `/web-rmms-ops`

### T-UI-ACT-01 — Action inventory (mark-read · refresh · back)
- **role:** Dev · **deps:** T-UI-OPS-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi CTA chrome + unread row → handler + API/nav · **cấm** dead button (**GAP-P2-ACT-***) · unread tap = mark-read only · **cấm** detail nav P1
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-OPS-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA · List · Text RO · Badge · Action · **cấm** GPS · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user Ops inbox
- **role:** Dev · **deps:** T-UI-OPS-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone inbox)
- **role:** Dev · **deps:** T-UI-OPS-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-OPS-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** inbox/mark-read network fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Ops Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-OPS-01 · **status:** pending
- **DoD:** scenarios GET inbox · POST mark-read · empty · guest no Live · **E2E chỉ** `/agent-qa*` · **cấm** team_lead/dev chạy e2e/start:std
- **skills:** `/agent-qa`

### T-QA-OPS-01 — Inbox flows OP-* (queued)
- **role:** QA · **deps:** T-UI-ACT-01 · T-UI-FIELD-01 · **status:** pending
- **DoD:** list load · unread tap mark-read · empty · chrome back/refresh · no detail · no filter · phone 375 · AC-L-01…08 · queued `/agent-qa*`
- **skills:** `/agent-qa`

---

## Dev assign

| Task | Owner slash | Notes |
|------|-------------|-------|
| T-BE-* · T-PERM-01 · T-UI-* | `/agent-dev` | single MFE `Linm.Web.RMMS.Mobile` · Live inbox only |
| T-UI-RESP-01 | `/dev-web-responsive` then `/dev-ui-review` | after UX |
| T-QA-* | `/agent-qa*` | e2eQa=ON queued · **cấm** run ở team_lead/dev |

**tl-retry-ssot-rereview:** N/A (first pass · no retry).

## DoR team_lead — PASS

- [x] route_confirm approve `/web-rmms-ops`
- [x] FormType adapt + waive cite (GAP-TL-FORMTYPE-01)
- [x] T-* đủ inbox surface · Screens→tasks · wire/state/init/field
- [x] prior compact confirmed · contentHash match
- [x] compact handoff `handoff/team_lead-compact.md`
- [x] **cấm** product code / e2e / yarn build / start:std / Step 4b

## Next

`/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · autoApprove=ON · e2eQa queued QA
