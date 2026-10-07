# Team lead — Task — web-rmms-giao-viec-ql-hat

> Status: **confirmed** · writtenAt `2026-10-01T03:40:00.000Z` · task `task_98c06ee2`  
> skillVersion: `2026.09.05.03` · packKind: `list` (phone edit · ≠ Kind B desktop) · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-giao-viec-ql-hat` |
| Title | Giao việc chỉ QL_HAT (HAT-TRUONG/HAT-PHO) |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile full ≤430 · DES-MOB-INC-DETAIL · GV-F assign sheet · LeaveConfirmModal · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-giao-viec-ql-hat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Maintenance + Incident + Patrol + Integration + Auth · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | **N/A phone** · WAIVE Kind B list pack |
| Step 4b / migration | **skip** · reuse `CreateWorkOrderRequest` · **no** new Schema / controller (SA-DEC-06) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html` |
| zones | GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #8 |
| dep | `web-rmms-role-gate` · `roleCaps.qlHat` (PO-DEC-05 · SA-DEC-05) |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |
| team_lead_confirm | **approve** (autoApprove) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · route đã có) |
| mfeStdRoute | `/web-rmms-giao-viec-ql-hat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| product paths | INC assign: `/cong-viec?incidentId=&mode=assign` · RPT list `/tuan-duong/lich-su` · RPT detail `/tuan-duong/:sessionId` · RPT assign `/cong-viec?reportId=&mode=assign` · submit leave → `/cong-viec` |
| note | **cấm** invent `/giao-viec/*` · **cấm** typed new_page · autoApprove=ON · autopilot skip AskQuestion |

## Decisions (rolled from prior)

- changeScope: **edit_page** · **cấm** new_page · **cấm** invent `giao-viec` controller / route
- CTA **Giao việc** chỉ `roleCaps.qlHat` (HAT-TRUONG/HAT-PHO) · **cấm** MANAGER-RMMS suy giao
- GV-F: assignee+team required · hangMuc client static TT41 PLAN (PO-DEC-01 · SA-DEC-04) · dueAt hint on hangMuc · editable · **DueAt absolute required** · **SlaHours omit/null** else derive · **cấm** default 24 (SA-DEC-01)
- List INC+RPT: unscoped QL_HAT · **cấm** filter creator
- RPT path chốt Design/SA (PO-DEC-03 · SA-DEC-03) · **cấm** invent
- Leave: dirty GV-F → **LeaveConfirmModal** · **cấm** `window.alert`/`confirm` (**GAP-TL-LEAVE-01**)
- FormType pack: phone edit · **WAIVE** T-UI-LIST/FILTER/CFG/HIST Kind B + T-QA-FILTER-* · **GAP-TL-FORMTYPE-01 PASS** (DES-GRID N/A)
- Gates còn: T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-PERM-01 · T-GV-* · T-QA-GV-*
- BFF: Mobile.Bff only · **cấm** web-bff · DOMAIN-MAP Maintenance (SA-DEC-02 · GAP-GV-DM-01 closed)
- OUT: Excel · Mục IV tiền · Hoàn thành hộ · invent API · demo-json · iOS/Android · ERP.*
- UNCLEAR: none open (GAP-GV-DM · SLA · RPT · hangMuc · ROLE closed)

## FormMode ↔ API

| Mode / zone | APIs | Note |
|-------------|------|------|
| GV-00 shell | Mobile.Bff only | **cấm** web-bff |
| GV-L-INC | GET incidents (history/list) | unscoped · no creator filter |
| GV-L-RPT | GET patrol history | `/tuan-duong/lich-su` |
| GV-D-INC | GET incident detail · optional assign cite | CTA iff qlHat |
| GV-D-RPT | GET patrol session detail | `/tuan-duong/:sessionId` |
| GV-F assign | POST `maintenance/work-orders` · opt incident assign · GET users · GET auth/profile | DueAt required · SlaHours null · hangMuc client |
| GV-W work | nav `/cong-viec` after submit | cite peer work list |
| DES-LEAVE | LeaveConfirmModal | dirty discard |
| TOAST | fail/success | no native alert |

## FormType pack (phone edit)

| Task id | Status | Note |
|---------|--------|------|
| T-UI-LIST-01 · T-UI-FILTER-01 · T-UI-CFG-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-HIST-01 | **WAIVE** | DES-GRID / LinErpListFilterBar N/A phone · ≠ Kind B CRUD |
| T-QA-FILTER-01 · T-QA-FILTER-02 · T-QA-CRUD-01 · T-QA-FORM-01 | **WAIVE** | no Kind B list/form CRUD surface |
| T-UI-LEAVE-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-PERM-01 | **REQUIRED** | leave + constitution + DTM + end-user |
| T-BE-CRUD-01 / T-BE-UISCHEMA-01 | **WAIVE** | reuse Live work-orders · no catalog ui-schema · Step 4b skip |
| Custom T-GV-* / T-QA-GV-* | **REQUIRED** | delta giao việc QL_HAT |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) | skills / slash |
|----|--------------|------|------|--------|------------|----------------|
| T-GV-01 | CTA gate assignCta · GV-D-INC/RPT · GV-L | FE | — | pending | show iff `roleCaps.qlHat` · **cấm** MANAGER→Giao · hide/deny other · AC-GV-01 | `/agent-dev` · dep role-gate |
| T-GV-02 | GV-F form · hangMuc→dueAt · POST WO | FE | T-GV-01 | pending | assignee+team required · hangMuc static TT41 · dueAt hint editable · DueAt write · SlaHours omit · POST `maintenance/work-orders` · opt assign · AC-GV-02..04 | `/agent-dev` |
| T-GV-03 | GV-L-INC · GV-L-RPT unscoped | FE | — | pending | load all incidents+patrol · **cấm** creator filter · empty/fail toast · AC-GV-05 | `/agent-dev` |
| T-GV-04 | Leave + nav RPT/INC paths | FE | T-GV-02 | pending | LeaveConfirmModal dirty · RPT lich-su/`/:sessionId`/`?reportId=mode=assign` · INC `?incidentId=mode=assign` · submit→`/cong-viec` · AC-GV-06 | `/agent-dev` · `/implement-show-leave-confirm` |
| T-GV-05 | DOMAIN-MAP + BFF wire verify | FE | T-GV-02 | pending | Maintenance kebab · Mobile.Bff `:5202` · **cấm** invent controller · **cấm** web-bff · **cấm** ERP.* · AC-GV-07 | `/agent-dev` |
| T-UI-LEAVE-01 | DES-LEAVE | FE | T-GV-04 | pending | LeaveConfirmModal · **cấm** native alert/confirm · GAP-TL-LEAVE-01 | `/agent-dev` |
| T-UI-UX-01 | UI-Ux constitution phone | FE | T-GV-* | pending | P1–7 · phone 430 · **cấm** ERP Modal chrome | `/agent-dev` · `dev-ui-ux-constitution` |
| T-UI-RESP-01 | D/T/M review | FE | T-UI-UX-01 | pending | verify 1280/768/375 · phone primary · **cấm** shrink-only | `/dev-web-responsive` · `/dev-ui-review` |
| T-UI-PROD-01 | end-user chrome | FE | T-UI-UX-01 | pending | **cấm** Dev note / GAP badge / stub · UTF-8 | `/agent-dev` · `demo-to-real-enduser` |
| T-UI-ALIGN-01 | align + prototype parity | FE | T-GV-01…04 | pending | `/align-mobile-to-mfe` · zones GV-* · **cấm** native · **cấm** new route | `/agent-dev` · `/align-mobile-to-mfe` |
| T-PERM-01 | JWT + qlHat gate | FE | T-GV-01 | pending | profile `roleCaps.qlHat` · deny non-qlHat · server cite | `/agent-dev` |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA-DEC-06) · DOMAIN-MAP Maintenance applied |
| T-QA-GV-01 | AC-GV · e2e slug | QA | T-GV-* · T-UI-* | pending | **chỉ** `/agent-qa*` · live mfeStdUrl · **cấm** e2e ở TL/Dev | `/agent-qa*` |

### Assignee

- Impl: **`devSlash=/agent-dev`** · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · BE `D:/AI-QLBD/Linm.RMMS.WebService` · BFF Mobile `:5202`
- QA E2E: queued **`/agent-qa*`** · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA
- **GAP-TL-DEV-ASSIGN-01**: PASS · surface assign/form/list = `/agent-dev` (no map/ai/camera)

### implement.wire (HOW slim)

1. FE: gate CTA by `roleCaps.qlHat` (cite role-gate profile) · open GV-F from INC/RPT deep-links.
2. FE: GV-F bind users/team · hangMuc static TT41 · dueAt hint · POST work-orders with DueAt · omit SlaHours.
3. FE: lists unscoped · LeaveConfirmModal · nav paths Design-closed · toast errors.
4. ssot.reuse: Maintenance work-orders · Incident · Patrol · Integration users · Auth profile · Common LeaveConfirmModal · **cấm** clone giao-viec controller · **cấm** ERP.*.

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-GV-01 CTA chỉ qlHat · cấm MANAGER | T-GV-01 · T-PERM-01 |
| AC-GV-02 assignee+team required · hangMuc TT41 | T-GV-02 |
| AC-GV-03 dueAt hint editable · cấm SlaHours=24 | T-GV-02 |
| AC-GV-04 POST work-orders · DueAt absolute | T-GV-02 · T-GV-05 |
| AC-GV-05 list unscoped · no creator filter | T-GV-03 |
| AC-GV-06 LeaveConfirmModal · RPT/INC paths · submit→/cong-viec | T-GV-04 · T-UI-LEAVE-01 |
| AC-GV-07 Mobile.Bff · Maintenance · no invent | T-GV-05 |
| AC-GV-08 phone ≤430 · prototype parity | T-UI-UX-01 · T-UI-ALIGN-01 · T-UI-RESP-01 |
| AC-GV-09 end-user · no stub/GAP chrome | T-UI-PROD-01 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| assignCta | Button gated | T-GV-01 · T-PERM-01 |
| assignee | SearchInput | T-GV-02 |
| team | SearchInput | T-GV-02 |
| hangMuc | Dropdown | T-GV-02 |
| dueAt | DateTime | T-GV-02 |
| note | TextArea | T-GV-02 |
| submitAssign | Button | T-GV-02 · T-GV-05 |
| list.* | CardList | T-GV-03 |
| leave | LeaveConfirmModal | T-GV-04 · T-UI-LEAVE-01 |

## Out of scope

- Typed new_page / invent `/giao-viec/*` / tab / icon
- Invent giao-viec controller · web-bff · ERP.*
- Kind B DES-GRID / LinErpListFilterBar / Excel / export / ui-schema
- New Schema / migration / Step 4b at TL
- SlaHours default 24 · tiền Mục IV · Hoàn thành hộ
- MANAGER-RMMS suy Giao việc · fake roleCaps / demo-json
- Native iOS/Android · filter creator on list

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-giao-viec-ql-hat-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · GAP-GV-DM-01 · UNCLEAR-GV-SLA-MAP · UNCLEAR-GV-RPT-ROUTE · UNCLEAR-GV-HANGMUC-CAT · DEP-GV-ROLE **resolved** (SA/Design/PO)
