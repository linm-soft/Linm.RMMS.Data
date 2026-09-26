# Team lead — Task — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| title | Tab bar Home · Field · Incident · Work — shell chrome · login · notify |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-shell`) |
| packKind | `list` (**phone shell** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile shell / full / sheet · login overlay · phone max-width **430** · `LeaveConfirmModal` (login dirty) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-shell` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth + Notification + Contract (session-window) · cite Patrol/Incident/Maintenance peer · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · `:5202` · cite peer `web-bff` · **cấm** đổi Live path |
| DOMAIN-MAP | `web-rmms-shell` → Notification/`notification` · CLOSED |
| demo | **N/A** · Live-only shell chrome · **REMOVED** me / me-profile / me-settings / feedback / cam-view |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T11:40:00.000Z` |
| taskId | `task_fc43f334` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone shell).  
> Entity/migration = **none** · **cấm** invent shell CRUD / me*.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-shell` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | `/rmms-shell` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-shell]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone shell)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-SHELL-01** | DES-GRID N/A · tab chrome + Home CTAs |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone shell · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 · LEAVE · ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** (mobile surface) | list-form-quality-gates · login + chrome |
| T-UI-LKP-01 | **WAIVE** | shell không SearchInput catalog |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** (chrome APIs) | Auth+Notification Live · LOOKUP_STATIC labels |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** (phone flows) | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ theo surface phone shell + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| SH-00 | App shell / stack | Full 430 | — | stackBack · route outlet | T-UI-SHELL-01 | `/agent-dev` |
| SH-01 | Tab chrome | Tab bar | — | tabHome/Field/Incident/Work | T-UI-SHELL-01 | `/agent-dev` |
| SH-02 | Login | Overlay/Full | Create | login · cancel | T-UI-FORM-01 | `/agent-dev` |
| SH-03 | Home | Full 430 | — | homeQuick/Grid CTAs | T-UI-SHELL-01 | `/agent-dev` |
| SH-04 | Field doors | Full 430 | — | doorPatrol · doorInspect | T-UI-SHELL-01 | `/agent-dev` |
| SH-05 | Incident tab | Full 430 | — | nav peer / cite | T-UI-SHELL-01 | `/agent-dev` |
| SH-06 | Work tab | Full 430 | — | nav peer / cite | T-UI-SHELL-01 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels · me* tabs |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Auth Live · Notification overview · session-window · CommonLib `ApiResponse` | invent shell CRUD entity · parent `*Json` |
| GPS | deep peers only | shell chrome **no** geolocation capture |
| Copy | Android icon/tab/layout 1-1 | sửa iOS/Android native |
| Peer | Field doors → `web-rmms-mobile-a` · deep out B…E | duplicate peer flows in shell |

## implement.wire

| From | To | Note |
|------|----|------|
| Login | `POST mobile-bff/api/v1/auth/login` | Live · token store SSOT |
| Refresh | `POST …/auth/refresh-token` | session keep |
| Profile | `GET …/auth/profile` | profileName RO |
| Session gate | `GET …/contract-accounts/session-window` | gate chrome |
| Notify badge | `GET …/notification/overview` | badge Number RO |
| Field doors | navigate peer A (`/web-rmms-mobile-a` tuan-duong / tuan-kiem) | opt GET patrol/sessions cite |
| Incident/Work | navigate / cite peer incident·maintenance | **cấm** invent shell CRUD |

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-shell`
- Tabs **exactly 4**: Home · Field · Incident · Work · **cấm** me / me-profile / me-settings / feedback / cam-view
- Unauth → SH-02 login · auth → SH-03 Home default
- Dirty login → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only · UTF-8 VN
- STD-PORT `:9301` · mfeStdUrl STATUS

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| tab.* / form labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN string |
| profileName | GET auth/profile | invent name |
| notifyBadge | GET notification/overview | fake badge |
| sessionWindow | GET session-window | skip gate |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| loginUser | Text | — | auth/login username |
| loginPass | Password | — | auth/login password |
| profileName | Text RO | auth/profile | — |
| notifyBadge | Number RO | notification/overview | — |
| tabHome/Field/Incident/Work | Tab/Nav | useFormOptions tab.* | route |
| doorPatrol | Button/Nav | — | → peer A tuan-duong |
| doorInspect | Button/Nav | — | → peer A tuan-kiem |
| homeQuick/Grid | Button/Nav | SCREENS Home | peer deep out |
| stackBack | Button | — | shell stack |

---

## Tasks

### T-BE-CRUD-01 — Auth + Notification chrome (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `POST auth/login` · `POST auth/refresh-token` · `GET auth/profile` · `GET contract-accounts/session-window` · `GET notification/overview` · **migration none** · ApiResponse · **cấm ERP.*** · **cấm** invent shell entity CRUD / me* APIs
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Notification

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** tab + login labels từ `useFormOptions()` · **cấm** hardcode KIND_LABEL / VN string · **cấm** invent shell init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission / session gate
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** Keep peer Auth permission · session-window gate chrome · UI hide/disable theo auth state · **cấm** bypass login
- **skills:** `/agent-dev`

### T-UI-SHELL-01 — Phone shell chrome + tabs + Home/Field/Incident/Work
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** SH-00 · SH-01 · SH-03 · SH-04 · SH-05 · SH-06 · phone 430 · 4 tabs only · Field doors → peer A · Home CTAs per SCREENS · profileName + notifyBadge · stackBack · empty/loading/error · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar / me* surfaces · Android layout 1-1
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** profile · overview · session-window · peer navigate
- **implement.state:** route children under `/web-rmms-shell`

### T-UI-FORM-01 — Login overlay
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** SH-02 Create login · field map 1:1 control-hint · success → Home · error toast/inline · **cấm** footer Lưu desktop 5-col · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST auth/login · refresh · profile
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-SHELL-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút tab/door/Home CTA/login/back → handler + FormMode/API/nav · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` trên login dirty · **cấm** `window.confirm`/`alert`/`prompt` · **/implement-show-leave-confirm**
- **skills:** `/implement-show-leave-confirm`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→DTO/API khớp SA · Text/Password login · Number badge · **cấm** GPS trên shell chrome · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-SHELL-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-SHELL-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary shell 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** login error / session gate deny / network fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Chrome API scenarios (queued)
- **role:** QA · **deps:** T-UI-SHELL-01 · T-UI-FORM-01 · **status:** pending
- **DoD:** scenarios auth login/refresh/profile · overview badge · session-window · **E2E chỉ** `/agent-qa*` · **cấm** team_lead/dev chạy e2e/start:std
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Login + leave + tabs (queued)
- **role:** QA · **deps:** T-UI-LEAVE-01 · T-UI-ACT-01 · **status:** pending
- **DoD:** SH-02 dirty leave · 4-tab nav · Field doors peer · no me* · phone 375 · queued `/agent-qa*`
- **skills:** `/agent-qa`

---

## Dev assign

| Task | Owner slash | Notes |
|------|-------------|-------|
| T-BE-* · T-PERM-01 · T-UI-* | `/agent-dev` | single MFE `Linm.Web.RMMS.Mobile` · Live chrome only |
| T-UI-RESP-01 | `/dev-web-responsive` then `/dev-ui-review` | after UX |
| T-QA-* | `/agent-qa*` | e2eQa=ON queued · **cấm** run ở team_lead/dev |

**tl-retry-ssot-rereview:** N/A (first pass · no retry).

## DoR team_lead — PASS

- [x] route_confirm approve `/web-rmms-shell`
- [x] FormType adapt + waive cite (GAP-TL-FORMTYPE-01)
- [x] T-* đủ shell surface · Screens→tasks · wire/state/init/field
- [x] prior compact confirmed · contentHash match
- [x] compact handoff `handoff/team_lead-compact.md`
- [x] **cấm** product code / e2e / yarn build / start:std / Step 4b

## Next

`/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · autoApprove=ON · e2eQa queued QA
