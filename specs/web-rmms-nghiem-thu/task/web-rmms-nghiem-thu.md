# Team lead — Task — web-rmms-nghiem-thu

> Status: **confirmed** · autoApprove ON · task `task_728c6377` · 2026-09-27T15:25:00.000Z  
> **changeScope=`edit_page`** · citeDelta `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · keep list/create/detail shell · **Delta** Pattern B + SearchInput route/assignee + capture + STD-ROUTE `/nghiem-thu/moi`.  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-nghiem-thu` |
| Title | Nghiệm thu — submit Pattern B + SearchInput (edit_page) |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile list + full create/detail ≤430 · Pattern B validate · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 |
| domain | **Patrol** (`patrol`) · DOMAIN-MAP keep · alias `nghiem-thu` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| nativeRouteCite | SCREENS `/field/nghiem-thu*` alias → `/nghiem-thu*` · **cấm** sửa iOS/Android |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STD-ROUTE `/nghiem-thu/moi` · autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |
| cite | `T-W3-08` + `SUBMIT-VALIDATE.md` · `NghiemThuFormPage.tsx` |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` **exists** · §A+§B PASS |
| changeScope | `edit_page` · NEW AutocodeTask · **cấm** typed CRUD `new_page` · keep prior artifacts |
| DES-GRID / LinErpListFilterBar / Kind B grid pack | **N/A** phone list ≤430 · search P1 only |
| FILTER P1 | search only · status/route/date/templateType **OUT** |
| DELETE | **OUT P1** |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) · reuse `patrol/nghiem-thu` · `rmms_nghiem_thu` · **cấm** invent NT controller |
| ERP.* | **cấm** · **cấm** ERP `UserSearchInput` nguyên |
| BFF | Mobile.Bff · forward `integration/users` (SA resolved) · **cấm** web-bff base |
| Pattern B | CTA always-on except `saving` · banner `string[]` · **cấm** `disabled={!canSave}` · **cấm** `alert.warning` thay banner |
| SearchInput | route → `road-routes/search` · assignee → `integration/users?search=` · **cấm** ROAD_ROUTE_SEED / filterSeed / QL.22 |
| media | PhotoRow `capture=environment` · MediaIds ≤10 via `files/*` |
| GPS fake / type-in | **cấm** · deny = no fake |
| labels | `useFormOptions()` / `nghiemThu.*` · **cấm** hardcode VN |

## 1. Scope (DoD) — edit_page Delta

| In (Delta *) | Out / Leave |
|--------------|-------------|
| Pattern B always-on CTA · validationBanner `string[]` | `disabled={!canSave}` · `alert.warning` thay banner |
| SearchInput **route*** · live `road-routes/search` · remove seed | ROAD_ROUTE_SEED / filterSeed / QL.22 |
| SearchInput **assignee*** · `integration/users` · BFF forward 200 | ERP UserSearchInput nguyên |
| PhotoRow **mediaIds*** `capture=environment` | invent media entity |
| STD-ROUTE `/nghiem-thu/moi` + Field hub alias | legacy `/web-rmms-nghiem-thu` as primary |
| Keep: list/search P1 · mau MAU-10 · ResultCode/Scores · GPS no fake · draft Lưu nháp · DES-LEAVE in-app · Android 1-1 | DELETE · Excel · new_page · desktop Field · iOS/Android edit · gộp tuần đường/tuần kiểm/mnt |

## 2. Screens / zones

| Zone | Control | Bind / Delta |
|------|---------|--------------|
| NT-00 | page chrome | phone 430 · Android 1-1 · keep |
| NT-01 | list Search | GET list `?search=` · P1 only · keep |
| NT-02 | list empty Static | keep |
| NT-03 | list row Icon/Badge | Status · ResultCode · Check · keep |
| NT-04 | btnCreate Button/Nav | → `/moi` · keep |
| NT-05 | templateType Select | init-data TemplateTypes · MAU-10 · keep |
| NT-06 | route* SearchInput · fieldInfo/km | `road-routes/search` · **no seed** · GPS → FieldInfo/ZoneOrgCode |
| NT-06b | assignee* SearchInput | `integration/users?search=` · BFF forward |
| NT-07 | resultCode · scores | keep |
| NT-08 | mediaIds* PhotoRow | `files/*` ≤10 · **capture=environment** |
| NT-09 | gpsCapture | geolocation · deny=no fake · keep |
| NT-10 | saveCreate/saveEdit* CTA | POST/PUT · **always-on except saving** · Pattern B |
| NT-10b | validationBanner* Banner | `string[]` · Pattern B · **cấm** alert.warning |
| NT-11 | detail GET/{id} | load + PUT · DES-LEAVE dirty · keep |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-01…03 list · `?search=` |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | NT-05 · Scores |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-10 create · Status draft on Lưu nháp |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-11 |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-10/11 edit |
| * | `mobile-bff/api/v1/.../files/*` | NT-08 MediaIds ≤10 |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | NT-06 route* SearchInput · Live |
| GET | `mobile-bff/api/v1/integration/users?search=` | NT-06b assignee* · BFF forward (SA) |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry · **cấm** `alert`
- Validation fail → banner `string[]` · **cấm** fake GPS when deny
- API Mới / entity / migration / DELETE / NT BFF controller: **none** · Step 4b **skip**
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*) — form-type pack `list` · phone adapt

> Kind B `T-UI-LIST-01` / `T-UI-FILTER-01` LinErp / `T-UI-CFG-01` / `T-BE-UISCHEMA-01` / `T-QA-FILTER-*` = **N/A** phone list (DES-GRID N/A · search P1 only).  
> Pack quality gates LKP/FIELD/PROD/UX/LEAVE/FORM + BE reuse + QA form = **REQUIRED**.

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-UI-LKP-01 | SearchInput route* + assignee* · map field→API · **cấm** seed / ERP UserSearchInput nguyên · MFE SearchInput pkg | `/agent-dev` | — | list-form-quality §1 · design NT-06/06b · SA Delta API · UNCLEAR-ROUTE-SEED · UNCLEAR-SEARCHINPUT-PKG | pending |
| T-UI-FIELD-01 | Field map Delta * (route/assignee/banner/CTA/media capture) · DTO/API 1:1 · labels `nghiemThu.*` | `/agent-dev` | T-UI-LKP-01 | list-form-quality §2 · real-data §B · control-hint * | pending |
| T-UI-FORM-01 | Pattern B form NT-05…11 · CTA always-on except saving · banner `string[]` · **cấm** `disabled={!canSave}` · **cấm** `alert.warning` · mau MAU-10/init-data · ResultCode/Scores keep | `/agent-dev` | T-UI-FIELD-01 | SUBMIT-VALIDATE · design Pattern B · PO Delta UX · cite T-W3-08 | pending |
| T-UI-LEAVE-01 | Dirty leave DES-LEAVE in-app Modal · **cấm** `window.confirm`/`alert` · `/implement-show-leave-confirm` | `/agent-dev` | T-UI-FORM-01 | GAP-TL-LEAVE-01 · design DES-LEAVE | pending |
| T-UI-PROD-01 | End-user chrome · **cấm** Dev/GAP/SSOT notes on UI · UTF-8 labels | `/agent-dev` | T-UI-FORM-01 | list-form-quality §3 · demo N/A | pending |
| T-UI-UX-01 | Mobile phone form ≤430 · Android NghiemThu* 1-1 · constitution · **cấm** ERP Modal layout | `/agent-dev` | T-UI-FORM-01 | formPattern · design NT-00 | pending |
| T-UI-RESP-01 | Verify phone shell 430 · Field hub entry · dual route `/nghiem-thu*` + SCREENS alias · **cấm** new tab/icon | `/agent-dev` · `/dev-web-responsive` | T-UI-UX-01 | route_confirm · STATUS mfeStdRoute | pending |
| T-BE-INIT-01 | Keep init-data TemplateTypes/Scores · verify BFF forward `integration/users` 200 · road-routes/search Live · **cấm** invent NT controller/entity | `/agent-dev` | — | SA BFF users resolved · real-data Delta | pending |
| T-BE-CRUD-01 | Keep GET/POST/PUT patrol/nghiem-thu · files/* ≤10 · DELETE OUT · Step 4b skip · **cấm** ERP.* / web-bff | `/agent-dev` | T-BE-INIT-01 | SA FormMode↔API · DELETE OUT | pending |
| T-PERM-01 | Keep existing patrol nghiem-thu permission · no new codes unless SA gap | `/agent-dev` | T-BE-CRUD-01 | SA perm · tenant_keep | pending |
| T-UI-HIST-01 | **N/A** P1 (no History action on NT list) | — | — | design leave | N/A |
| T-QA-FORM-01 | E2E Pattern B: empty submit → banner string[] · CTA not disabled · body=UI · SearchInput route/assignee · capture · GPS deny | `/agent-qa` | T-UI-FORM-01…T-PERM-01 | e2eQa ON · form-field-e2e · cite T-W3-08 | pending |
| T-QA-CRUD-01 | E2E list/search · create · detail edit · media≤10 · leave Modal · phone 430 · mfeStdUrl `/nghiem-thu/moi` · **cấm** DELETE assert | `/agent-qa` | T-QA-FORM-01 | scenarios.md · screens S0/S1/QA-20 | pending |
| T-QA-FILTER-01/02 | **N/A** phone (no LinErpListFilterBar) | — | — | DES-GRID N/A | N/A |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| packKind | `list` |
| slash | `/agent-dev` (+ `/dev-web-responsive` · `/dev-ui-review` on T-UI-RESP-01) |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md` |
| BE align | skip until Dev · Step 4b none · verify BFF users forward |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `NghiemThuFormPage.tsx` |
| cấm | ERP.* · invent NT controller/path/entity · DELETE · e2e ở Dev (QA owns) · fake GPS · hardcode VN · web-bff base · Step 4b/migration · seed routes · `disabled={!canSave}` · `alert.warning` · typed `new_page` |

### implement.wire (HOW)

| Surface | State | Wire |
|---------|-------|------|
| Form Pattern B | `saving` · `errors: string[]` | CTA `disabled={saving}` only · banner from validate · submit always callable |
| route SearchInput | query debounce | GET `integration/road-routes/search` · select → route fields · **cấm** seed fallback |
| assignee SearchInput | query debounce | GET `integration/users?search=` via Mobile.Bff · select user id/name |
| media | MediaIds[] | `files/*` · input `capture=environment` |
| GPS | FieldInfo/ZoneOrgCode | `navigator.geolocation` · deny → empty + message · no fake |
| Leave | dirty flag | LeaveConfirmModal / useFormLeaveGuard · in-app |

### ssot.reuse

- Patrol `NghiemThuController` + entity `rmms_nghiem_thu` · Mobile.Bff catch-all + users forward
- MFE `NghiemThuFormPage` / list pages · `useFormOptions` · PhotoRow · SearchInput (MFE pkg)
- **Cấm** clone ERP grid/pager/UserSearchInput · **cấm** invent NT path

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| native cite | `/field/nghiem-thu*` alias → `/nghiem-thu*` |
| decision | **approve** · PO/Design/SA · edit_page STD-ROUTE · autoApprove ON · ghi STATUS |
| prior URL | legacy `/web-rmms-nghiem-thu` superseded |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-USERS-BFF | **resolved** SA | verify BFF GET integration/users 200 |
| UNCLEAR-ROUTE-SEED | open → Dev | remove ROAD_ROUTE_SEED/filterSeed/QL.22 (peer impact) |
| UNCLEAR-SEARCHINPUT-PKG | open → Dev | MFE SearchInput · cấm ERP UserSearchInput nguyên |
| RESOLVED keep | DOMAIN-MAP · BFF-PROXY · FILTER · DELETE · STD-ROUTE | — |

## 7. Handoff next

- Next role: `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01)
- compact: `specs/web-rmms-nghiem-thu/handoff/team_lead-compact.md`
- implement: `specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md` (Dev writes)
- e2eQa: ON · queued `/agent-qa*` only · **cấm** e2e ở team_lead/dev
