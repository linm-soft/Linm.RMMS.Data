# Team lead — Task — web-rmms-cam-home

> Status: **confirmed** · writtenAt `2026-10-01T03:45:00.000Z` · task `task_0b8c6a40`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · changeScope: **`edit_page`**  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std · Step 4b **skip**.

| | |
|--|--|
| Feature | `web-rmms-cam-home` |
| Title | Trang chủ / hub / shell theo vai (edit_page) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile Home + Hub + Shell ≤430 · nav-gated tiles · N/A ERP Modal/Slideout · N/A master form |
| domain | **Notification** (`notification`) · DOMAIN-MAP bind peer `web-rmms-home` + `web-rmms-shell` · **cấm** invent CamHome* / slug mới |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | product `/trang-chu` · `/tuan-duong` · shell · alias queue `/web-rmms-cam-home` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs (đã ship) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm ERP.*** · **cấm** web-bff |
| demo | **N/A** |
| contentHash | `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **keep** (edit_page · product route đã ship · **cấm** invent slug) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-home/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #7 · Plan #2 #3 #8 |
| cite code | `HomePage` · `PatrolHubPage` · `WebRmmsShellLayout` |
| deps peer | `web-rmms-role-gate` · `roleCaps.*` · peer home/shell Live |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |
| team_lead_confirm | **approve** (autoApprove) |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-cam-home-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-cam-home-real-data.md` **exists** · §A+§B PASS |
| changeScope | `edit_page` · **cấm** typed `new_page` · **cấm** invent product route / CamHome* |
| DES-GRID / LinErpListFilterBar / Kind B | **N/A** phone ≤430 · WAIVE T-UI-LIST/FILTER/CFG/HIST Kind B · **GAP-TL-FORMTYPE-01 PASS** |
| FILTER / DELETE / Form leave | **N/A** P1 (hub/home nav · không dirty form) |
| Step 4b / migration / API Mới / entity | **skip** · Live KEEP profile + notification/overview · patrol sessions **cite** |
| ERP.* / web-bff | **cấm** |
| DOMAIN-MAP | `web-rmms-cam-home` → Notification · GAP-CH-DM-01 **CLOSED** |
| Role | QL_HAT = HAT-TRUONG+HAT-PHO · Giao việc **chỉ** qlHat · **cấm** MANAGER-RMMS suy |
| Assign target | `gridAssign` → `/van-de` · **cấm** role-gate · **cấm** `/cong-viec` entry |
| Supervise | `gridSupervise` + `hub.quick.supervise` **chỉ** QL_HAT → `/giam-sat` |
| Hub NT | `hub.quick.nghiemThu` **REMOVE** |
| Shell | Plan #8 `FIELD_ROOTS` · không thắp Field trên `/tuan-kiem`\|`/phat-hien` khi tuần kiểm |
| OUT | CamHome API · Excel · SLA 24h · Mục IV · native · tab thứ tư |

## 1. Scope (DoD) — edit_page Delta

| In (Delta *) | Out / Leave |
|--------------|-------------|
| Hero* gate `tuanDuong` (qaPatrolPoint/New) | hero luôn hiện / hardcode vai |
| Home tiles* visibility theo `roleCaps` | invent tile / route mới |
| `gridAssign*` → `/van-de` · chỉ QL_HAT | `/cong-viec` · MANAGER→Giao việc |
| `gridSupervise*` + hub supervise* chỉ QL_HAT → `/giam-sat` | supervise mọi vai |
| Hub* xóa `hub.quick.nghiemThu` | giữ NT trên hub |
| Shell* Plan #8 FIELD_ROOTS theo vai | tab thứ 4 · thắp Field sai path tuần kiểm |
| Keep Live profileName + notifyBadge | invent CamHome API · Excel |
| roleCaps.* cite role-gate | localStorage fake caps |

## 2. Screens / zones

| Zone | Control | Bind / Delta |
|------|---------|--------------|
| CH-00 | feature shell | mfeStd alias → product `/trang-chu` |
| CH-HM-00 / HERO* | qaPatrolPoint/New | Nav gated iff `tuanDuong` |
| CH-HM-GRID* | tiles | PatrolMap · TuanKiem · NghiemThu · Assign→`/van-de` · Supervise→`/giam-sat` · gated |
| CH-HM-WALLET | wallet/notify | keep peer · notifyBadge Live |
| CH-HUB-00 / QUICK* | hub quick | **REMOVE** nghiemThu · supervise chỉ QL_HAT · keep còn lại |
| CH-HUB todaySession | Card RO | GET patrol/sessions cite |
| CH-SH-TAB* | shell tabs | Plan #8 FIELD_ROOTS · highlight theo vai |
| profileName | Text RO | GET auth/profile |
| notifyBadge | Number RO | GET notification/overview |
| roleCaps.* | Flag RO | profile / role-gate cite |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/auth/profile` (+roleCaps) | profileName · role-gate · cite `web-rmms-role-gate` |
| GET | `mobile-bff/api/v1/notification/overview` | notifyBadge |
| GET | `mobile-bff/api/v1/patrol/sessions` | hub.todaySession cite · **cấm** invent CamHome path |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- API Mới / entity / migration: **none** · Step 4b **skip**
- **Cấm** invent CamHome* · **cấm** ERP.* · **cấm** web-bff

## 4. Task board (T-*) — form-type pack `list` · phone Home/Hub adapt

> Kind B `T-UI-LIST-01` / `T-UI-FILTER-01` LinErp / `T-UI-CFG-01` / `T-BE-UISCHEMA-01` / `T-QA-FILTER-*` = **N/A·WAIVE** phone (DES-GRID N/A).  
> `T-UI-FORM-01` / `T-UI-LEAVE-01` / `T-UI-LKP-01` = **N/A·WAIVE** (không master form dirty).  
> Pack quality: HOME/ACT/FIELD/VIS/SHELL + BE reuse + PERM + QA = **REQUIRED** (delta focus).

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-BE-PROF-01 | Cite/reuse GET auth/profile + `roleCaps.*` · **cấm** fake caps · **cấm** invent RoleGate/CamHome path | `/agent-dev` | peer role-gate | SA ROLE · DEP-CH-ROLE | pending |
| T-BE-API-01 | Keep GET notification/overview + patrol/sessions cite · Step 4b skip · **cấm** invent CamHome* controller/entity | `/agent-dev` | — | SA FormMode↔API · AC-CH-API | pending |
| T-PERM-01 | FE gate tiles/hub/shell theo `roleCaps` · QL_HAT only assign+supervise · **cấm** MANAGER suy | `/agent-dev` | T-BE-PROF-01 | PO QL_HAT · AC-CH-TILE/SUP | pending |
| T-UI-HERO-01 | Hero qaPatrolPoint/New hiện iff `tuanDuong` · **cấm** hardcode | `/agent-dev` | T-PERM-01 | AC-CH-HERO-* · GAP-CH-HERO | pending |
| T-UI-TILE-01 | Home grid tiles* visibility · Assign→`/van-de` · Supervise→`/giam-sat` · NT chỉ nghiemThu · **cấm** `/cong-viec` | `/agent-dev` | T-UI-HERO-01 · T-PERM-01 | AC-CH-TILE-* · AC-CH-SUP-* | pending |
| T-UI-HUB-01 | PatrolHub **REMOVE** `hub.quick.nghiemThu` · supervise quick chỉ QL_HAT · keep remaining quick | `/agent-dev` | T-PERM-01 | AC-CH-HUB-NT · GAP-CH-HUB-NT | pending |
| T-UI-SHELL-01 | Shell `FIELD_ROOTS` Plan #8 · không thắp Field trên `/tuan-kiem`\|`/phat-hien` khi tuần kiểm · **cấm** tab 4 | `/agent-dev` | T-PERM-01 | AC-CH-SHELL-08 · GAP-CH-SHELL-TAB | pending |
| T-UI-FIELD-01 | Field map Delta * (roleCaps · tiles · hub · shell · profile/notify) · labels keep peer · DTO 1:1 | `/agent-dev` | T-BE-PROF-01 · T-BE-API-01 | list-form-quality §2 · real-data §B | pending |
| T-UI-PROD-01 | End-user chrome · **cấm** Dev/GAP/SSOT notes · UTF-8 | `/agent-dev` | T-UI-TILE-01 · T-UI-HUB-01 | list-form-quality §3 | pending |
| T-UI-UX-01 | Phone ≤430 · constitution · **cấm** ERP Modal layout | `/agent-dev` | T-UI-FIELD-01 | formPattern · design | pending |
| T-UI-RESP-01 | Verify phone shell · product `/trang-chu` `/tuan-duong` + alias queue · **cấm** new route/tab | `/agent-dev` · `/dev-web-responsive` | T-UI-UX-01 · T-UI-SHELL-01 | route_confirm keep · STATUS | pending |
| T-UI-ALIGN-01 | Align MFE ↔ prototype CH-HM/HUB/SH · peer keep · **cấm** native edit | `/agent-dev` · `/align-mobile-to-mfe` | T-UI-TILE-01 · T-UI-HUB-01 · T-UI-SHELL-01 | real_view_parity v1 | pending |
| T-UI-LIST/FILTER/CFG/HIST/FORM/LEAVE/LKP | **N/A** phone hub | — | — | DES-GRID N/A · no dirty form | N/A |
| T-QA-HOME-01 | E2E role scenes td/tk/nt/qlhat · hero/tiles/supervise · hub NT absent · shell Plan #8 | `/agent-qa*` | T-UI-* · T-PERM-01 | e2eQa ON · AC-CH-* | pending |
| T-QA-CRUD-01 | E2E Live profile+notify · deep-link product · phone 430 · mfeStdUrl alias · **cấm** invent API assert | `/agent-qa*` | T-QA-HOME-01 · T-BE-API-01 | scenarios · AC-CH-API | pending |
| T-QA-FILTER-01/02 | **N/A** phone | — | — | DES-GRID N/A | N/A |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-home` |
| packKind | `list` |
| slash | `/agent-dev` (+ `/dev-web-responsive` · `/dev-ui-review` on T-UI-RESP-01 · `/align-mobile-to-mfe` on T-UI-ALIGN-01) |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-cam-home/implement/web-rmms-cam-home.md` |
| BE align | skip until Dev · Step 4b **none** · verify profile roleCaps + notification/overview + sessions cite |
| citeDelta | `PLAN-3-VAI.md` #7 · `HomePage` · `PatrolHubPage` · `WebRmmsShellLayout` |
| deps | `web-rmms-role-gate` (roleCaps) · peer `web-rmms-home` / `web-rmms-shell` Live |
| cấm | ERP.* · invent CamHome*/API/entity · MANAGER→Giao việc · hub NT · tab 4 · SLA/Mục IV/Excel/native · web-bff · Step 4b/migration · typed `new_page` · e2e ở Dev (QA owns) · `/cong-viec` assign |

### implement.wire (HOW)

| Surface | State | Wire |
|---------|-------|------|
| roleCaps | from GET auth/profile | `tuanDuong` · `nghiemThu` · `qlHat` · **cấm** localStorage fake |
| Hero | gated | show qaPatrolPoint/New iff `tuanDuong` |
| gridAssign | Nav | iff qlHat → `/van-de` · **cấm** `/cong-viec` |
| gridSupervise / hub.supervise | Nav | iff qlHat → `/giam-sat` |
| hub.quick.nghiemThu | — | **REMOVE** from UI |
| Shell tabs | FIELD_ROOTS | Plan #8 · no Field highlight on TK paths when tuần kiểm |
| profileName / notifyBadge | RO Live | profile · notification/overview |
| todaySession | RO cite | patrol/sessions |

### ssot.reuse

- Notification domain · Mobile.Bff catch-all · Auth profile + Notification overview
- MFE `HomePage` / `PatrolHubPage` / `WebRmmsShellLayout` · peer home/shell
- Profile `roleCaps` from `web-rmms-role-gate` · **cấm** clone RoleGateController
- Patrol sessions cite only · **cấm** invent CamHome API

## 5. route_confirm

| Item | Value |
|------|-------|
| action | **keep** |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs |
| mfeStdRoute alias | `/web-rmms-cam-home` (queue only) |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` |
| decision | **approve keep** · PO/Design/SA · edit_page · autoApprove ON · **cấm** invent product slug |
| STATUS note | alias ≠ product · deep-link product `/trang-chu` · `/tuan-duong` |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-CH-ASSIGN-TARGET | **RESOLVED** | gridAssign → `/van-de` |
| UNCLEAR-CH-SUPERVISE-VIS | **RESOLVED** | supervise chỉ QL_HAT |
| GAP-CH-DM-01 | **CLOSED** | DOMAIN-MAP Notification |
| GAP-CH-HUB-NT | open → Dev | remove hub NT quick |
| GAP-CH-SHELL-TAB | open → Dev | FIELD_ROOTS Plan #8 |
| GAP-CH-HERO | open → Dev | hero gate tuanDuong |
| DEP-CH-ROLE | open → Dev | verify role-gate peer trước write gate; thiếu caps → block + cite |

## 7. Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-CH-HERO-* | T-UI-HERO-01 · T-QA-HOME-01 |
| AC-CH-TILE-* · AC-CH-SUP-* | T-UI-TILE-01 · T-PERM-01 · T-QA-HOME-01 |
| AC-CH-HUB-NT | T-UI-HUB-01 · T-QA-HOME-01 |
| AC-CH-SHELL-08 | T-UI-SHELL-01 · T-UI-RESP-01 · T-QA-HOME-01 |
| AC-CH-API | T-BE-API-01 · T-QA-CRUD-01 |
| Report AC | **N/A** |

## 8. Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| roleCaps.* | Flag RO | T-BE-PROF-01 · T-PERM-01 |
| qaPatrolPoint/New | Nav gated | T-UI-HERO-01 |
| gridPatrolMap | Nav gated | T-UI-TILE-01 |
| gridTuanKiem | Nav gated | T-UI-TILE-01 |
| gridNghiemThu | Nav gated | T-UI-TILE-01 · T-PERM-01 |
| gridAssign | Nav gated | T-UI-TILE-01 · T-PERM-01 |
| gridSupervise | Nav gated | T-UI-TILE-01 · T-PERM-01 |
| hub.quick.nghiemThu | — | **CẤM** · T-UI-HUB-01 assert absent |
| hub.quick.supervise | Nav gated | T-UI-HUB-01 · T-PERM-01 |
| hub.todaySession | Card RO | T-BE-API-01 |
| shell.tab.* | Tab | T-UI-SHELL-01 |
| notifyBadge | Number RO | T-BE-API-01 · T-UI-FIELD-01 |
| profileName | Text RO | T-BE-PROF-01 · T-UI-FIELD-01 |

## 9. Handoff next

- nextSlash: `/agent-dev` · implement `specs/web-rmms-cam-home/implement/web-rmms-cam-home.md`
- e2eQa: ON · queued `/agent-qa*` only · **cấm** e2e/start:std ở team_lead/dev
- compact: `handoff/team_lead-compact.md`
- roleOnly stop · GAP-PKT-ROLE-01
