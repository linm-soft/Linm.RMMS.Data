# Team lead — Task — web-rmms-nghiem-thu

> Status: **confirmed** · autoApprove ON · task `task_ef3e5c98` · 2026-09-25T22:25:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-nghiem-thu` |
| Title | Nghiệm thu — list, tạo, chi tiết |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout · Android NghiemThu* 1-1 |
| domain | **Patrol** (`patrol`) · DOMAIN-MAP row `web-rmms-nghiem-thu` · alias `nghiem-thu` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| nativeRouteCite | SCREENS `/field/nghiem-thu` · `/new` · `/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/Design/SA · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |
| cite | `T-W3-08` |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| FILTER P1 | search only · status/route/date/templateType **OUT** |
| DELETE | **OUT P1** |
| Step 4b / migration / API Mới / entity | **skip** · none (SA) · reuse `patrol/nghiem-thu` · `rmms_nghiem_thu` · **cấm** invent NT controller |
| ERP.* | **cấm** |
| BFF | Mobile.Bff catch-all proxy Live · **cấm** NT BFF controller · **cấm** web-bff base |
| GPS fake / type-in | **cấm** · `navigator.geolocation` → FieldInfo/ZoneOrgCode · deny = no fake |
| labels | `useFormOptions()` / `nghiemThu.*` · **cấm** hardcode VN · mau-01…10 = MAU-10/init-data |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| List + search P1 · empty · row Status/ResultCode · Check success icon | status/route/date/templateType filters P1 |
| btnCreate → create · row → detail | DELETE live web / native |
| Create/detail phone 430 · Android NghiemThu* 1-1 | invent path / entity / migration |
| templateType MAU-10/init-data · route · FieldInfo/ZoneOrgCode · km · ResultCode · Scores[] | «Mẫu nghiệm thu NN» hardcode |
| GPS geolocation → FieldInfo/ZoneOrgCode · deny = no fake · list không bắt GPS | fake GPS / type-in coords |
| MediaIds ≤10 via `files/*` | invent media entity |
| POST create (Status draft on Lưu nháp) · PUT edit · GET list · GET/{id} · init-data | gộp tuần đường/tuần kiểm/mnt · new tab |
| Entry Field hub quick action · DES-LEAVE in-app | native `confirm` · desktop Field edit · iOS/Android edit |
| labels `nghiemThu.*` · dual route STATUS + SCREENS | web-bff client base · ERP.* |

## 2. Screens / zones

| Zone | Control | Bind / nav |
|------|---------|------------|
| NT-00 | page chrome | phone 430 · Android icon/layout 1-1 |
| NT-01 | list Search | GET list `?search=` · P1 only |
| NT-02 | list empty Static | empty state · no fake rows |
| NT-03 | list row Icon/Badge | Status · ResultCode · Check success |
| NT-04 | btnCreate Button/Nav | → create `/new` (native cite) |
| NT-05 | templateType Select | init-data TemplateTypes · MAU-10 |
| NT-06 | route / fieldInfo / km Text/Number | POST/PUT fields · GPS fills FieldInfo/ZoneOrgCode |
| NT-07 | resultCode Select · scores Checklist | pass/fail/deduct · Scores[] init-data |
| NT-08 | mediaIds PhotoRow | `files/*` · MediaIds ≤10 |
| NT-09 | gpsCapture Action | `navigator.geolocation` · deny = no fake |
| NT-10 | saveCreate / saveEdit CTA | POST · PUT · Status draft on Lưu nháp |
| NT-11 | detail GET/{id} | load + edit PUT · DES-LEAVE dirty |

## 3. Live API (HARD)

| Method | Client path | Bind |
|--------|-------------|------|
| GET | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-01…03 list · `?search=` |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/init-data` | NT-05 TemplateTypes · Scores options |
| POST | `mobile-bff/api/v1/patrol/nghiem-thu` | NT-10 create · Status draft on Lưu nháp |
| GET | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-11 detail |
| PUT | `mobile-bff/api/v1/patrol/nghiem-thu/{id}` | NT-10/11 edit |
| * | `mobile-bff/api/v1/.../files/*` (cite real-data) | NT-08 MediaIds ≤10 |

- Base: `http://localhost:5202` + `mobile-bff/api/v1`
- Fail 503/network → toast + retry · **cấm** `alert`
- Validation fail → inline/toast · **cấm** fake GPS when deny
- Success create/edit → toast · back list / stay detail per design
- Write API mới / NT BFF controller / DELETE / entity / migration: **none** · **cấm** invent
- **Cấm** web-bff client base · **cấm** ERP.*

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + list shell NT-00…04 · mfeStdRoute `/web-rmms-nghiem-thu` · alias SCREENS `/field/nghiem-thu*` · search P1 · empty · rows Status/ResultCode/Check · btnCreate · labels `nghiemThu.*` · Field hub entry | `/agent-dev` | — | PO list DoD · design NT-00…04 · SA §route · route_confirm · cite T-W3-08 | pending |
| T-02 | Create/detail form NT-05…07 · init-data mau-01…10 · route/fieldInfo/km · ResultCode · Scores[] · useFormOptions · **cấm** hardcode VN / «Mẫu nghiệm thu NN» | `/agent-dev` | T-01 | real-data §B · SA Lookups · PO Form · design fields | pending |
| T-03 | GPS NT-09 · `navigator.geolocation` → FieldInfo/ZoneOrgCode · deny = no fake · list không bắt GPS | `/agent-dev` | T-02 | PO GPS · design gpsCapture · SA GPS HARD | pending |
| T-04 | Media NT-08 `files/*` MediaIds≤10 · DES-LEAVE dirty discard in-app · **cấm** invent media entity · **cấm** native confirm | `/agent-dev` | T-01 | PO media · design DES-LEAVE · SA files/* | pending |
| T-05 | POST create (draft Lưu nháp) · PUT edit · GET/{id} detail NT-10/11 · list refresh · auth/session · Android 1-1 · quality gates · **cấm** DELETE | `/agent-dev` | T-02,T-03,T-04 | PO DoD write · SA Write · design CTA · list-form quality | pending |
| T-06 | QA scenarios + E2E queued · list/search · create · detail · GPS deny · media≤10 · leave · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent NT controller/path/entity · DELETE · e2e ở Dev (QA owns) · fake GPS · hardcode VN · web-bff base · Step 4b/migration · gộp tuần đường/tuần kiểm/mnt |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| native cite | `/field/nghiem-thu` · `/new` · `/:id` |
| decision | **approve** · PO/Design/SA · new_page · ghi STATUS |
| shell alias | `/field/nghiem-thu*` nếu shell map native SCREENS |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-DOMAIN-MAP-NT | **resolved** SA | DOMAIN-MAP row `web-rmms-nghiem-thu` · alias `nghiem-thu` |
| UNCLEAR-BFF-PROXY | **resolved** SA | Mobile.Bff catch-all · no NT BFF controller |
| UNCLEAR-FILTER-UI | **resolved** PO | search only P1 |
| UNCLEAR-DELETE | **resolved** PO | OUT P1 |
| UNCLEAR-STD-ROUTE | **resolved** PO/Design | STATUS `/web-rmms-nghiem-thu` + SCREENS `/field/nghiem-thu*` |

## 7. Handoff next

- Next role: `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01)
- compact: `specs/web-rmms-nghiem-thu/handoff/team_lead-compact.md`
- implement: `specs/web-rmms-nghiem-thu/implement/web-rmms-nghiem-thu.md` (Dev writes)
- e2eQa: ON · queued `/agent-qa*` only
