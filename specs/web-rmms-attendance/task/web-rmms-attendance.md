# Team lead — Task — web-rmms-attendance

> Status: **confirmed** · writtenAt `2026-09-27T17:20:00.000Z` · task `task_e63e7622`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · `team_lead_confirm=approve`  
> changeScope: **edit_page** · delta Pattern B · cite `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md`  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-attendance` |
| Title | Chấm công |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile hub Pattern B · phone ≤430 · RO report/day/log · N/A ERP Modal/Slideout/DES-GRID/Excel |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| productRoute | `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| nativeRouteCite | Android `#sc-attendance*` · DES-MOB-ATT · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** · Live `attendance-logs` · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** demoDays / rescan |
| DES-GRID / LinErpListFilterBar / Excel | **N/A** phone · **cấm** |
| Step 4b / migration / API Mới | **none** (SA) · T-BE **N/A** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| zones | ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · URL không mới · CLOSED-STD-ROUTE) |
| mfeStdRoute | `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| productRoute | `/field/attendance*` (shell alias) |
| note | **cấm** đổi route / invent `/attendance/*` API · nested report/day/log giữ nguyên |

## FormType pack adapt (phone hub)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B | → **T-UI-ATT-01** (done prior) | DES-GRID N/A · phone hub |
| T-UI-FILTER-01 | **WAIVE** | phone · **cấm** filter bar |
| T-UI-CFG-01 / T-BE-UISCHEMA-01 | **WAIVE** | no catalog Kind B |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | → **T-UI-ATT-02** + **T-DELTA-PB-01** | Pattern B validate on click |
| T-UI-LEAVE-01 | **WAIVE** | one-shot POST |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** (done prior · re-verify delta) | list-form-quality-gates |
| T-UI-LKP-01 | **WAIVE** | no SearchInput P1 |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** prior · Live reuse | **cấm** new controller |
| T-QA-CRUD-01 · T-QA-ATT-01 | **re-queue** after delta | `/agent-qa*` only |

**GAP-TL-FORMTYPE-01:** PASS — edit_page delta + waive cite.  
**GAP-TL-FILTER-01 / GAP-TL-GRID-*-01:** N/A.

## Decisions (rolled + delta)

- **Keep** hub ATT-00…05 · chain ATT-06…08 RO · client aggregate · Live GET/POST/GET{id} · labels `useFormOptions()` · Mobile.Bff only · **cấm ERP.***
- **Delta HARD** (SUBMIT-VALIDATE): (1) bỏ `disabled={!canCheckIn}` (2) thiếu auth/GPS/mạng/route → **bấm mới** banner (3) chỉ `disabled` khi `saving` (4) **cấm** Excel (5) `mobileApiBase` only
- Guest CLOSED Pattern B — CTA visible hoặc login CTA · **cấm** khóa trước
- GPS: deny **on submit** · modal DES-MOB-GPS-DENY · **cấm** fake · **cấm** khóa CTA trước click
- Banner vs toast OPEN→Dev: client banner `string[]` · API toast · GPS modal OK
- Entry: Field hub · no new tab/route/icon · Face/NFC DEFER
- OUT: invent `/attendance/*` · migration · Step 4b · native edits · desktop Field · demoDays · typed CRUD new_page

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | status |
|----|---------|---------|----------|---------|------|--------|
| ATT-00…05 · ATT-09 | Hub + empty | Full 430 | browse | shell · GET | T-UI-ATT-01 | **done** |
| ATT-02 · ATT-03 | gpsMeta · btnCheckIn | Pattern B | write | POST+GPS on submit | T-UI-ATT-02 · **T-DELTA-PB-01** | done · **pending** |
| ATT-04 | btnReport | Nav | browse | → report | T-UI-ATT-01 | **done** |
| ATT-06…08 | report/day/log | RO | browse | GET aggregate · GET{id} | T-UI-ATT-03 | **done** |
| validationBanner * | hero | Banner | write | client string[] on submit | **T-DELTA-PB-01** | **pending** |

## FormMode ↔ API

| Mode / zone | API | Write |
|-------------|-----|-------|
| hero / dayRows / report / day | `GET …/patrol/attendance-logs` | — · client aggregate |
| check-in (Pattern B) | `POST …/patrol/attendance-logs` | GPS+auth+route **on submit** · disabled=saving only |
| log detail | `GET …/patrol/attendance-logs/{id}` | — |
| auth | `GET …/auth/profile` | userName → POST · guest click login |
| report API invent | **cấm** | P1 client aggregate |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components + mobile kit · `useFormOptions()` | hardcode VN · Excel · DES-GRID |
| HTTP | apiClient · `mobileApiBase` / `mobile-bff` | invent axios · ERP.* · web-bff |
| BE | Patrol attendance-logs Live · Auth profile | invent `/attendance/*` · migration |
| GPS | `navigator.geolocation` on submit | fake · pre-lock CTA |
| Copy | Android `#sc-attendance*` 1-1 | sửa native · desktop Field |

## implement.wire (delta focus)

| From | To | Note |
|------|----|------|
| btnCheckIn * | POST attendance-logs | **Pattern B** · always enabled except saving · validate on click |
| validationBanner * | client string[] | auth/GPS/mạng/route thiếu → banner · **cấm** pre-disable |
| gpsCapture * | geolocation on submit | deny → modal · no POST · **cấm** fake |
| guest CTA | login / banner | CLOSED Pattern B · **cấm** early-return hide CTA |
| hero / dayRows / report | GET (keep) | no BE change |

## implement.state (delta)

- Route **keep** `/cham-cong` · nested report/day/log
- CTA **không** `disabled={!canCheckIn}` · chỉ `disabled={saving}`
- Click thiếu precondition → banner · **không** silent no-op
- GPS deny on submit · modal OK · **cấm** `alert()`
- Phone 430 · **cấm** Excel · Mobile.Bff only

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| attendance.* labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN |
| userName | GET auth/profile | invent name |
| status / inZone P1 | options / default | fake GPS |

---

## Tasks

### T-BE-CRUD-01 — Live Patrol attendance-logs + auth profile
- **role:** Dev · **deps:** — · **status:** **done** (prior)
- **DoD:** GET/POST/GET{id} Live · Mobile.Bff · **cấm** invent path · migration none
- **skills:** `/agent-dev`

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** — · **status:** **done** (prior)
- **DoD:** `attendance.*` via `useFormOptions()` · **cấm** hardcode VN
- **skills:** `tl-dropdown-from-backend`

### T-PERM-01 — Auth gate (delta Pattern B)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** **done** (prior) · **delta** via T-DELTA-PB-01
- **DoD:** guest CTA visible hoặc login CTA · click → login/banner · **cấm** khóa CTA trước · **cấm** POST khi guest
- **skills:** `/agent-dev`

### T-UI-ATT-01 — Hub shell ATT-00…05 · ATT-09 empty
- **role:** Dev · **deps:** T-BE-* · **status:** **done** (prior)
- **DoD:** `/cham-cong` · phone 430 · dayRows · empty live · **cấm** DES-GRID/Excel/demoDays
- **skills:** `/agent-dev`

### T-UI-ATT-02 — GPS + Chấm vào
- **role:** Dev · **deps:** T-UI-ATT-01 · T-PERM-01 · **status:** **done** (prior) · **delta** T-DELTA-PB-01
- **DoD:** prior GPS+POST · **override** Pattern B — validate on click · disabled=saving only
- **skills:** `/agent-dev`

### T-UI-ATT-03 — Report / day / log RO
- **role:** Dev · **deps:** T-UI-ATT-01 · **status:** **done** (prior)
- **DoD:** client aggregate · GET `{id}` · **cấm** invent report API
- **skills:** `/agent-dev`

### T-DELTA-PB-01 — Pattern B CTA (NEW · edit_page)
- **role:** Dev · **deps:** T-UI-ATT-02 · **devSlash:** `/agent-dev` · **status:** **pending**
- **DoD:**
  1. Bỏ `disabled={!canCheckIn}` (và mọi pre-lock auth/GPS/mạng/route trên CTA)
  2. Thiếu auth / GPS / mạng / route → **bấm mới** hiện `validationBanner` (client `string[]`)
  3. Chỉ `disabled` khi `saving` (in-flight POST)
  4. GPS: request **on submit** · deny → DES-MOB-GPS-DENY modal · **no POST** · **cấm** fake
  5. Guest: CTA visible hoặc login CTA · click → login/banner (CLOSED GUEST-SURFACE)
  6. **Cấm** Excel export · **cấm** web-bff · `mobileApiBase` only
  7. Cite `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md`
  8. AC map: AC-HUB-02 · 08 · 11 · 12 · 14
- **skills:** `/agent-dev` · deltaCite SUBMIT-VALIDATE
- **UNCLEAR carry:** BANNER-VS-TOAST — client banner · API toast · GPS modal OK

### T-UI-ACT-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01
- **status:** **done** (prior) · re-verify after T-DELTA-PB-01 (no dead CTA · no alert · banner SSOT)

### T-BE — API Mới / entity / migration
- **status:** **N/A** · SA none · Step 4b skip

### T-QA-CRUD-01 — Live API scenarios (re-queue)
- **role:** QA · **deps:** T-DELTA-PB-01 · **status:** **pending** (re-run after delta)
- **DoD:** Pattern B click paths · GPS deny on submit · guest click · saving disable · **chỉ** `/agent-qa*`
- **skills:** `/agent-qa*`

### T-QA-ATT-01 — Hub + chain e2e (re-queue)
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** **pending** (re-run after delta)
- **DoD:** ATT-* · DES-MOB-GPS-DENY · mfeStdUrl `/cham-cong` · **chỉ** `/agent-qa*` · **cấm** start:std ở TL
- **skills:** `/agent-qa*`

### T-REV-01 — QUERY/SEC/UI-FN/BE-FN
- **role:** Review · **deps:** T-QA-* · **status:** **pending** (re-run after delta)
- **skills:** `/agent-review`

### Assignee

- Impl: `/agent-dev` · MFE `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · **chỉ** T-DELTA-PB-01 (+ verify prior)
- QA E2E: queued `/agent-qa*` · e2eQa=ON · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (delta *)

| AC | Owner task |
|----|------------|
| AC-HUB-02 GPS deny on submit | T-DELTA-PB-01 · T-UI-ATT-02 |
| AC-HUB-08 guest CTA / login | T-DELTA-PB-01 · T-PERM-01 |
| AC-HUB-11 offline/route on click | T-DELTA-PB-01 |
| AC-HUB-12 saving-only disabled | T-DELTA-PB-01 |
| AC-HUB-14 no Excel | T-DELTA-PB-01 |
| Hub/report/day/log keep | T-UI-ATT-01…03 (done) |
| Live BFF · no invent · Step 4b skip | T-BE-CRUD-01 · T-BE N/A |

## Out of scope

- Face/NFC · supervise/zone gộp · typed CRUD new_page
- Invent `/attendance/*` · report API · migration · Step 4b
- ERP.* · web-bff · Excel · DES-GRID / filter bar
- Native iOS/Android edits · desktop Field · demoDays
- New tab / route / icon

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/…-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

| ID | Status |
|----|--------|
| UNCLEAR-GUEST-SURFACE | **CLOSED** Pattern B |
| UNCLEAR-STD-ROUTE | **CLOSED** `/cham-cong` |
| UNCLEAR-REPORT-API | **CLOSED** client aggregate |
| UNCLEAR-BANNER-VS-TOAST | **OPEN→Dev** · client banner · API toast · GPS modal OK |
| UNCLEAR-DOMAIN-MAP-ATT | **resolved** (SA) |
