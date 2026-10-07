# Team lead — Task — web-rmms-cam-nghiem-thu

> Status: **confirmed** · writtenAt `2026-10-01T02:35:00.000Z` · task `task_5d5e31fb`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · changeScope: **`edit_page`**  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std · Step 4b **skip**.

| | |
|--|--|
| Feature | `web-rmms-cam-nghiem-thu` |
| Title | Camera phiếu nghiệm thu — role-gate + RO links (edit_page) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile list + full create/detail ≤430 · Pattern B · role-gate NT · N/A ERP Modal/Slideout |
| domain | **Patrol** (`patrol`) · DOMAIN-MAP bind peer `nghiem-thu` / `web-rmms-nghiem-thu` · **cấm** slug mới · **cấm** CamNghiemThu* |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | product `/nghiem-thu*` · alias queue `/web-rmms-cam-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm ERP.*** · **cấm** web-bff |
| demo | **N/A** |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **keep** (edit_page · product route đã có · **cấm** invent slug) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #6 · § Công tác nghiệm thu · Plan #7 |
| cite code | `NghiemThuFormPage.tsx` · `NghiemThuListPage.tsx` |
| deps peer | `web-rmms-role-gate` · `roleCaps.nghiemThu` · seed `NGHIEM-THU` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |
| team_lead_confirm | **approve** (autoApprove) |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md` **exists** · §A+§B PASS |
| changeScope | `edit_page` · **cấm** typed CRUD `new_page` · **cấm** invent product route / CamNghiemThu* |
| DES-GRID / LinErpListFilterBar / Kind B | **N/A** phone ≤430 · WAIVE T-UI-LIST/FILTER/CFG/HIST Kind B · **GAP-TL-FORMTYPE-01 PASS** |
| FILTER P1 | search only · keep peer · no LinErp bar |
| DELETE | **OUT P1** |
| Step 4b / migration / API Mới / entity | **skip** · reuse `patrol/nghiem-thu` · `NghiemThuController` · `rmms_nghiem_thu` |
| ERP.* / web-bff | **cấm** |
| Pattern B GPS | CTA always-on except `saving`/`photoBusy` · banner `string[]` · **cấm** fake GPS · **cấm** `disabled={!canSave}` |
| Role write | `roleCaps.nghiemThu` only · QL_HAT = HAT-TRUONG + HAT-PHO · **cấm** suy MANAGER-RMMS |
| LIST-VIS | NT full+Tạo · tuần đường **ẩn** list · TK/QL_HAT **RO** tối thiểu · **không** Tạo |
| RO links | `/tuan-duong` + `/phat-hien`(+filter đạt) · GET sessions/findings RO · **cấm** recheck/assign từ NT |
| OUT CTAs | **Giao việc** · **Xác nhận SC / Xác nhận đạt** · Mục IV · SlaHours=24 · Excel · iOS/Android |

## 1. Scope (DoD) — edit_page Delta

| In (Delta *) | Out / Leave |
|--------------|-------------|
| Role-gate `roleCaps.nghiemThu`* write + capture + Tạo | write khi non-NT · invent CamNghiemThu* |
| Hide `btnCreate`* non-NT · LIST-VIS* tuần đường ẩn / TK·QL_HAT RO | Tạo cho non-NT |
| NT-RO-LINK* deep-link ca + finding đạt | recheck / assign / Pass-Fail từ NT |
| Keep Pattern B GPS + leaveConfirm dirty NT-F | fake GPS · `disabled={!canSave}` · native confirm |
| Keep peer CRUD/files/lookups Live | invent API/entity · DELETE · web-bff · ERP.* |
| roleGateBanner* when no write | hardcode VN role map |

## 2. Screens / zones

| Zone | Control | Bind / Delta |
|------|---------|--------------|
| NT-L | list cards | GET `patrol/nghiem-thu` · LIST-VIS by roleCaps |
| NT-L · btnCreate* | Button/Nav | show iff `roleCaps.nghiemThu` · → `/nghiem-thu/moi` |
| NT-L · roleGateBanner* | Banner | non-NT RO message · no Tạo |
| NT-F | form keep | templateType · route · fieldInfo · assignee · resultCode · scores |
| NT-F · photos* | RouteCapture | write iff nghiemThu · RO view khác vai |
| NT-F · gps* | GPS+Banner | Pattern B · deny=no fake |
| NT-F · save* | Button | write iff nghiemThu · `disabled={saving\|\|photoBusy}` only |
| NT-RO-LINK* | Nav RO | `/tuan-duong` · `/phat-hien`(+đạt) · no write |
| NT-leave | LeaveConfirmModal | dirty NT-F · **cấm** alert/confirm |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-L cards |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | templateType · scores |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-F create · NT only |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-F detail |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-F edit · NT only |
| * | `mobile-bff/api/v1/.../files/*` | photos MediaIds |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | route SearchInput keep |
| GET | `mobile-bff/api/v1/integration/users?search=` | assignee SearchInput keep |
| GET | `mobile-bff/api/v1/auth/profile` (+roleCaps) | role-gate · cite `web-rmms-role-gate` |
| GET | `mobile-bff/api/v1/patrol/sessions` | NT-RO-LINK RO → `/tuan-duong` |
| GET | `mobile-bff/api/v1/patrol/findings` (đạt) | NT-RO-LINK RO → `/phat-hien` |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- API Mới / entity / migration: **none** · Step 4b **skip**
- **Cấm** invent NT path · **cấm** ERP.* · **cấm** web-bff · **cấm** assign/recheck từ NT

## 4. Task board (T-*) — form-type pack `list` · phone adapt

> Kind B `T-UI-LIST-01` / `T-UI-FILTER-01` LinErp / `T-UI-CFG-01` / `T-BE-UISCHEMA-01` / `T-QA-FILTER-*` = **N/A·WAIVE** phone (DES-GRID N/A).  
> Pack quality: LKP/FIELD/FORM/LEAVE/PROD/UX/RESP + BE reuse + PERM + QA form/CRUD = **REQUIRED** (delta focus).

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-BE-PROF-01 | Cite/reuse GET auth/profile + `roleCaps.nghiemThu` · **cấm** fake caps · **cấm** invent RoleGate path | `/agent-dev` | peer role-gate | SA ROLE-SOURCE · AC role write | pending |
| T-BE-CRUD-01 | Keep GET/POST/PUT `patrol/nghiem-thu` + files + lookups · sessions/findings **RO only** · Step 4b skip · **cấm** invent controller/entity | `/agent-dev` | — | SA FormMode↔API · DOMAIN bind peer | pending |
| T-PERM-01 | Server+FE gate write POST/PUT/files iff `roleCaps.nghiemThu` · RO allowed TK/QL_HAT | `/agent-dev` | T-BE-PROF-01 · T-BE-CRUD-01 | PO LIST-VIS · SA perm | pending |
| T-UI-LKP-01 | Keep SearchInput route/assignee Live · map RO deep-link params phat-hien đạt · **cấm** ERP UserSearchInput | `/agent-dev` | — | control-hint · SA API-08/09 | pending |
| T-UI-FIELD-01 | Field map Delta * (roleCaps · btnCreate · RO links · photos write) · DTO 1:1 · labels `nghiemThu.*` | `/agent-dev` | T-UI-LKP-01 · T-BE-PROF-01 | list-form-quality §2 · real-data §B | pending |
| T-UI-VIS-01 | LIST-VIS + hide Tạo non-NT · tuần đường ẩn · TK/QL_HAT RO · roleGateBanner · **cấm** Giao việc / Xác nhận SC | `/agent-dev` | T-UI-FIELD-01 · T-PERM-01 | AC-G-01…11 · design NT-L | pending |
| T-UI-FORM-01 | NT-F write iff nghiemThu · Pattern B CTA · photos capture · GPS no fake · keep mau/scores/result · **cấm** assignCta/confirmSc | `/agent-dev` | T-UI-FIELD-01 · T-PERM-01 | AC-F-01…17 · design NT-F | pending |
| T-UI-RO-01 | NT-RO-LINK deep-link `/tuan-duong` + `/phat-hien`(+đạt) · RO only · **cấm** recheck/assign | `/agent-dev` | T-UI-LKP-01 · T-BE-CRUD-01 | UNCLEAR-NT-RO-LINKS resolved · design NT-RO-LINK | pending |
| T-UI-LEAVE-01 | Dirty leave NT-F LeaveConfirmModal · **cấm** `window.confirm`/`alert` | `/agent-dev` | T-UI-FORM-01 | GAP-TL-LEAVE-01 · design NT-leave | pending |
| T-UI-PROD-01 | End-user chrome · **cấm** Dev/GAP/SSOT notes · UTF-8 | `/agent-dev` | T-UI-FORM-01 | list-form-quality §3 | pending |
| T-UI-UX-01 | Phone ≤430 · constitution · **cấm** ERP Modal layout | `/agent-dev` | T-UI-FORM-01 | formPattern · design | pending |
| T-UI-RESP-01 | Verify phone shell · product `/nghiem-thu*` + alias queue · **cấm** new tab/icon/route | `/agent-dev` · `/dev-web-responsive` | T-UI-UX-01 | route_confirm keep · STATUS | pending |
| T-UI-ALIGN-01 | Align MFE ↔ prototype zones NT-L/F/RO · peer keep · **cấm** native edit | `/agent-dev` · `/align-mobile-to-mfe` | T-UI-VIS-01 · T-UI-RO-01 | real_view_parity v1 | pending |
| T-UI-HIST-01 | **N/A** P1 | — | — | design leave | N/A |
| T-QA-FORM-01 | E2E role write NT · hide Tạo non-NT · Pattern B · GPS deny · RO links · **cấm** assign/confirm SC | `/agent-qa*` | T-UI-* · T-PERM-01 | e2eQa ON · AC-F | pending |
| T-QA-CRUD-01 | E2E list VIS · create/edit NT · RO deep-link · leave Modal · phone 430 · mfeStdUrl alias | `/agent-qa*` | T-QA-FORM-01 | scenarios · AC-G | pending |
| T-QA-FILTER-01/02 | **N/A** phone | — | — | DES-GRID N/A | N/A |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| packKind | `list` |
| slash | `/agent-dev` (+ `/dev-web-responsive` · `/dev-ui-review` on T-UI-RESP-01 · `/align-mobile-to-mfe` on T-UI-ALIGN-01) |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-cam-nghiem-thu/implement/web-rmms-cam-nghiem-thu.md` |
| BE align | skip until Dev · Step 4b **none** · verify profile roleCaps + sessions/findings RO |
| citeDelta | `PLAN-3-VAI.md` #6 · `NghiemThuFormPage.tsx` · `NghiemThuListPage.tsx` |
| deps | `web-rmms-role-gate` (roleCaps.nghiemThu · seed NGHIEM-THU) · peer `web-rmms-nghiem-thu` Live CRUD |
| cấm | ERP.* · invent CamNghiemThu*/API/entity · Giao việc · Xác nhận SC · Mục IV · SlaHours=24 · fake GPS · hardcode VN · web-bff · Step 4b/migration · typed `new_page` · e2e ở Dev (QA owns) · `disabled={!canSave}` |

### implement.wire (HOW)

| Surface | State | Wire |
|---------|-------|------|
| roleCaps | from GET auth/profile | `canWriteNt = roleCaps.nghiemThu` · **cấm** localStorage fake |
| btnCreate / save / photos write | gated | render/enable iff canWriteNt · else RO + roleGateBanner |
| LIST-VIS | role | NT full · tuần đường hide list · TK/QL_HAT RO cards no Tạo |
| Pattern B | `saving` · `photoBusy` · `errors: string[]` | CTA `disabled={saving\|\|photoBusy}` only · banner validate |
| GPS | FieldInfo | geolocation · deny → banner · **cấm** fake |
| NT-RO-LINK | Nav | `/tuan-duong` · `/phat-hien?…đạt` · GET sessions/findings RO |
| Leave | dirty | LeaveConfirmModal / useFormLeaveGuard |

### ssot.reuse

- Patrol `NghiemThuController` + entity `rmms_nghiem_thu` · Mobile.Bff catch-all
- MFE `NghiemThuFormPage` / `NghiemThuListPage` · peer Pattern B / SearchInput / PhotoRow
- Profile `roleCaps` from `web-rmms-role-gate` · **cấm** clone RoleGateController
- Sessions/findings peers for RO deep-link only

## 5. route_confirm

| Item | Value |
|------|-------|
| action | **keep** |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| mfeStdRoute alias | `/web-rmms-cam-nghiem-thu` (queue only) |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` |
| decision | **approve keep** · PO/Design/SA · edit_page · autoApprove ON · **cấm** invent product slug |
| STATUS note | alias ≠ product · deep-link product `/nghiem-thu*` |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-NT-CTX | **RESOLVED** | CTX created |
| UNCLEAR-NT-LIST-VIS | **RESOLVED** | NT full; tuần đường ẩn; TK/QL_HAT RO |
| UNCLEAR-NT-DOMAIN-ROW | **RESOLVED** | bind peer nghiem-thu · no new slug |
| UNCLEAR-NT-ROLE-SOURCE | **RESOLVED** | deps role-gate · roleCaps.nghiemThu |
| UNCLEAR-NT-RO-LINKS | **RESOLVED** | `/tuan-duong` · `/phat-hien`(+đạt) |
| CARRY | open → Dev | verify role-gate peer shipped trước gate write; nếu profile thiếu caps → block + cite role-gate |

## 7. Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-G-01…11 Live list · hide Tạo · phone 430 · product route | T-UI-VIS-01 · T-UI-RESP-01 · T-QA-CRUD-01 |
| AC-F-01…17 form keep + role write + RO links + Pattern B + leave | T-UI-FORM-01 · T-UI-RO-01 · T-UI-LEAVE-01 · T-QA-FORM-01 |
| LIST-VIS non-NT | T-UI-VIS-01 · T-PERM-01 |
| Cấm Giao việc / Xác nhận SC | T-UI-VIS-01 · T-UI-FORM-01 · T-QA-FORM-01 |
| Report AC | **N/A** |

## 8. Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| photos | RouteCapture | T-UI-FORM-01 · T-PERM-01 |
| gps | GPS+Banner | T-UI-FORM-01 |
| templateType/route/assignee/scores | Select+Search+Checklist | T-UI-LKP-01 · T-UI-FIELD-01 |
| save | Button | T-UI-FORM-01 · T-PERM-01 |
| btnCreate | Button | T-UI-VIS-01 |
| cards | List | T-UI-VIS-01 · T-BE-CRUD-01 |
| linkRo | Nav RO | T-UI-RO-01 |
| roleCaps | Hidden | T-BE-PROF-01 · T-PERM-01 |
| assignCta/confirmSc | — | **CẤM** · T-UI-VIS-01 assert absent |

## 9. Handoff next

- Next role: `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01)
- compact: `specs/web-rmms-cam-nghiem-thu/handoff/team_lead-compact.md`
- implement: `specs/web-rmms-cam-nghiem-thu/implement/web-rmms-cam-nghiem-thu.md` (Dev writes)
- e2eQa: ON · queued `/agent-qa*` only · **cấm** e2e ở team_lead/dev
