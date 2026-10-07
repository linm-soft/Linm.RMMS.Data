# Team lead — Task — web-rmms-role-gate

> Status: **confirmed** · writtenAt `2026-09-30T16:40:00.000Z` · task `task_f2510be5`  
> skillVersion: `2026.09.05.03` · packKind: `list` (phone gate ≠ desktop Kind B) · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-role-gate` |
| Title | Quyền QL_HAT và vai theo chức danh |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile full phone ≤430 · profile RO + visibility · assign peer sheet · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-role-gate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Integration `job-titles` + Auth profile · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan · **cấm** fake roleCaps |
| DES-GRID / LinErpListFilterBar | **N/A phone gate** · WAIVE Kind B list pack |
| Step 4b / migration | **Dev** · Seed_JobTitleQlHatNghiemThu only · **no** new Schema columns |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html` |
| zones | RG-00 · RG-01 · RG-02 · RG-03a · RG-03b · RG-03c · RG-03d |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |
| team_lead_confirm | **approve** (autoApprove) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · route đã có) |
| mfeStdRoute | `/web-rmms-role-gate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-role-gate` |
| note | **cấm** invent route/tab/icon · **cấm** typed new_page · autoApprove=ON · autopilot skip AskQuestion |

## Decisions (rolled from prior)

- changeScope: **edit_page** · **cấm** new_page · **cấm** invent `RoleGateController` / `role-gate/*`
- Delta: HAT-TRUONG/HAT-PHO → `packageHint=QL_HAT` · seed `NGHIEM-THU` · profile `jobTitleCode`/`packageCode`/`roleCaps.*`
- CTA **Giao việc** chỉ `roleCaps.qlHat` ⇔ `packageCode=QL_HAT` · **cấm** suy từ `MANAGER-RMMS`
- `assign.dueAt` gợi ý TT41 Phụ lục IV · editable · **cấm** SLA default 24h · **cấm** tiền Mục IV
- Leave: RG-02 / RG-03c → **`LeaveConfirmModal`** · **cấm** `window.alert`/`confirm` (**GAP-TL-LEAVE-01**)
- FormType pack: phone gate · **WAIVE** T-UI-LIST/FILTER/CFG/HIST Kind B + T-QA-FILTER-* · **GAP-TL-FORMTYPE-01 PASS** (cite PO/Design DES-GRID N/A)
- Gates còn: T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-PERM-01 · T-BE-* · T-QA-RG-*
- Dropdown `seed.packageHint`: **chỉ** `init-data` BE · **cấm** hardcode KIND_LABEL (`tl-dropdown-from-backend`)
- BFF: Mobile.Bff only · **cấm** web-bff · DOMAIN-MAP slug Integration (SA resolved GAP-RG-DM-01)
- OUT: Excel · invent role-gate API · chấm 100 · iOS/Android · MANAGER→Giao việc · demo-json caps
- UNCLEAR: none open · GAP-RG-DM/PROF/SEED + UNCLEAR-RG-NT-CODE **resolved** (SA)

## FormMode ↔ API

| Mode / zone | APIs | Note |
|-------------|------|------|
| RG-00 shell | Mobile.Bff only | **cấm** web-bff |
| RG-01 profile | **GET** `auth/profile` (API-01 enhance) · cite GET `job-titles` | jobTitleCode · packageCode · roleCaps |
| RG-02 seed | GET `job-titles/init-data` (API-03 +QL_HAT) · PUT `job-titles/{id}` (API-05) | packageHint HAT-*→QL_HAT |
| RG-03a home | roleCaps from profile | peer home tiles gated |
| RG-03b hub/shell | roleCaps | peer patrol hub / shell |
| RG-03c assign | `roleCaps.qlHat` · peer Incident/WO assign | dueAt TT41 · TZ required |
| RG-03d findings | `roleCaps.tuanKiem` · peer Pass/Fail | |
| Seed | Seed_JobTitleQlHatNghiemThu (API-SEED) | Step 4b Dev · no Schema columns |

### roleCaps derive (SSOT — FE bind only)

| Cap | Rule |
|-----|------|
| `qlHat` | `packageCode == QL_HAT` |
| `tuanDuong` | jobTitle tuần đường SSOT seed / PLAN dual-cap |
| `tuanKiem` | `TUAN-KIEM` (+ alias) |
| `nghiemThu` | `NGHIEM-THU` |

## FormType pack (phone gate)

| Task id | Status | Note |
|---------|--------|------|
| T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-HIST-01 | **WAIVE** | DES-GRID / LinErpListFilterBar N/A phone · ≠ Kind B CRUD |
| T-QA-FILTER-01 · T-QA-FILTER-02 · T-QA-CRUD-01 · T-QA-FORM-01 | **WAIVE** | no Kind B list/form CRUD surface |
| T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-PERM-01 | **REQUIRED** | leave + constitution + DTM + end-user |
| T-BE-CRUD-01 / T-BE-UISCHEMA-01 | **WAIVE** | reuse Live job-titles · no catalog ui-schema |
| Custom T-BE-PROF / T-BE-SEED / T-UI-RG-* / T-QA-RG-* | **REQUIRED** | delta profile gate |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) | skills / slash |
|----|--------------|------|------|--------|------------|----------------|
| T-BE-PROF-01 | API-01 enhance GET auth/profile + roleCaps · BFF MobileAuthUser | FE+BE | — | pending | DTO + enrich `jobTitleCode`/`packageCode`/`roleCaps` · derive SSOT · **cấm** fake caps · **cấm** invent path | `/agent-dev` · Step 4b BE |
| T-BE-SEED-01 | Seed_JobTitleQlHatNghiemThu · API-03 init-data +QL_HAT | BE | — | pending | HAT-*→QL_HAT · NGHIEM-THU · PackageHints+AllowedPackages · **no** Schema columns · Step 4b | `/agent-dev` · Step 4b |
| T-BE-JT-01 | API-02..05 job-titles Live reuse | BE | T-BE-SEED-01 | pending | GET/PUT/search/init-data work · **cấm** RoleGateController | `/agent-dev` |
| T-UI-PROF-01 | RG-01 profile chips RO | FE | T-BE-PROF-01 | pending | bind profile DTO · **cấm** hardcode VN title map | `/agent-dev` · `dev-ui-ux-constitution` |
| T-UI-SEED-01 | RG-02 packageHint Dropdown | FE | T-BE-SEED-01 · T-BE-JT-01 | pending | options **chỉ** init-data · HAT-*→QL_HAT · dirty→LeaveConfirmModal | `/agent-dev` · `tl-dropdown-from-backend` |
| T-UI-VIS-01 | RG-03a/b/d home/hub/shell + finding Pass/Fail | FE | T-UI-PROF-01 | pending | gate theo roleCaps · tuanKiem Pass/Fail · nghiemThu RO link only · AC-RG | `/agent-dev` |
| T-UI-ASSIGN-01 | RG-03c Giao việc + dueAt | FE | T-UI-PROF-01 | pending | CTA iff qlHat · **cấm** MANAGER→Giao · dueAt TT41 editable · **cấm** SLA 24h default | `/agent-dev` |
| T-UI-LEAVE-01 | RG-02 · RG-03c dirty leave | FE | T-UI-SEED-01 · T-UI-ASSIGN-01 | pending | `LeaveConfirmModal` · **cấm** native alert/confirm · GAP-TL-LEAVE-01 | `/agent-dev` · `/implement-show-leave-confirm` |
| T-UI-UX-01 | UI-Ux constitution phone | FE | T-UI-* | pending | P1–7 · phone 430 · **cấm** ERP Modal chrome | `/agent-dev` · `dev-ui-ux-constitution` |
| T-UI-RESP-01 | D/T/M review | FE | T-UI-UX-01 | pending | verify 1280/768/375 · phone primary · **cấm** shrink-only | `/dev-web-responsive` · `/dev-ui-review` |
| T-UI-PROD-01 | end-user chrome | FE | T-UI-UX-01 | pending | **cấm** Dev note / GAP badge / stub text · UTF-8 | `/agent-dev` · `demo-to-real-enduser` |
| T-UI-ALIGN-01 | align + prototype parity | FE | T-UI-VIS-01 · T-UI-ASSIGN-01 | pending | `/align-mobile-to-mfe` · zones RG-* · **cấm** native · **cấm** new tab/route/icon | `/agent-dev` · `/align-mobile-to-mfe` |
| T-PERM-01 | JWT staff + package gate | FE+BE | T-BE-PROF-01 | pending | self profile · qlHat server-side on assign peers | `/agent-dev` |
| T-QA-RG-01 | AC-RG-01…10 · e2e slug | QA | T-UI-* · T-BE-* | pending | **chỉ** `/agent-qa*` · live mfeStdUrl · **cấm** e2e ở TL/Dev | `/agent-qa*` |

### Assignee

- Impl: **`devSlash=/agent-dev`** · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · BE `D:/AI-QLBD/Linm.RMMS.WebService` · BFF Mobile `:5202`
- QA E2E: queued **`/agent-qa*`** · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA
- **GAP-TL-DEV-ASSIGN-01**: PASS · surface profile/visibility = `/agent-dev` (no map/ai/camera)

### implement.wire (HOW slim)

1. BE: enhance profile + seed QL_HAT/NGHIEM-THU → BFF enrich → MFE bind `roleCaps`/`packageCode`.
2. FE: profile RO · seed dropdown init-data · visibility peers (home/hub/assign/findings) · LeaveConfirmModal dirty.
3. State: profile load once after auth · **cấm** localStorage fake caps · **cấm** ERP.* clients.
4. ssot.reuse: `JobTitlesController` · Auth profile · peer Incident/findings/home-shell · Common LeaveConfirmModal · **cấm** clone RoleGate.

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-RG-01 profile jobTitle/package display | T-UI-PROF-01 · T-BE-PROF-01 |
| AC-RG-02 roleCaps derived BE | T-BE-PROF-01 · T-UI-VIS-01 |
| AC-RG-03 HAT-* → QL_HAT seed | T-BE-SEED-01 · T-UI-SEED-01 |
| AC-RG-04 Giao việc chỉ qlHat | T-UI-ASSIGN-01 · T-PERM-01 |
| AC-RG-05 cấm MANAGER→Giao | T-UI-ASSIGN-01 · T-QA-RG-01 |
| AC-RG-06 dueAt TT41 editable · cấm SLA 24h | T-UI-ASSIGN-01 |
| AC-RG-07 finding Pass/Fail tuanKiem | T-UI-VIS-01 |
| AC-RG-08 home/hub/shell gated | T-UI-VIS-01 |
| AC-RG-09 LeaveConfirmModal | T-UI-LEAVE-01 |
| AC-RG-10 Mobile.Bff only · cấm invent controller | T-BE-* · T-UI-ALIGN-01 |
| AC-GRID-01…03 phone visibility | T-UI-VIS-01 (Kind B N/A) |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| profile.jobTitleCode | Text/Chip RO | T-UI-PROF-01 |
| profile.packageCode | Chip RO | T-UI-PROF-01 |
| roleCaps.* | Flag RO | T-BE-PROF-01 · T-UI-VIS-01 |
| seed.packageHint | Dropdown | T-UI-SEED-01 · T-BE-SEED-01 |
| incident.btnAssign | Button gated | T-UI-ASSIGN-01 |
| assign.dueAt | DateTime | T-UI-ASSIGN-01 |
| finding.btnPass/Fail | Button gated | T-UI-VIS-01 |
| home/hub/shell | nav gated | T-UI-VIS-01 |

## Out of scope

- Typed new_page / new public route / tab / icon
- Invent `RoleGateController` · `role-gate/*` · web-bff
- Kind B DES-GRID / LinErpListFilterBar / Excel / export / ui-schema catalog
- New Schema columns · SLA 24h default · tiền Mục IV
- MANAGER-RMMS suy Giao việc · fake roleCaps / demo-json
- Native iOS/Android · ERP.* · Step 4b run tại TL

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-role-gate-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · all GAP-RG-* + UNCLEAR-RG-NT-CODE **resolved** (SA)
