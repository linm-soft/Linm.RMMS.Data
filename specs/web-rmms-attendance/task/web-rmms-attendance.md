# Team lead — Task — web-rmms-attendance

> Status: **confirmed** · writtenAt `2026-09-26T01:42:00.000Z` · task `task_ac1434fc`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · `route_confirm=approve`  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-attendance` |
| Title | Chấm công |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile hub + RO report/day/log · phone ≤430 · Android/DES-MOB-ATT 1-1 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| productRoute | `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| nativeRouteCite | Android `#sc-attendance*` · DES-MOB-ATT · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** · Live `attendance-logs` · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** demoDays / rescan |
| DES-GRID / LinErpListFilterBar | **N/A** phone hub |
| Step 4b / migration / API Mới | **none** (SA) · T-BE **N/A** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| zones | ATT-00…ATT-09 · DES-MOB-ATT · DES-MOB-GPS-DENY |
| cite | W3 Field attendance |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **approve** (autoApprove=ON · khớp STATUS) |
| mfeStdRoute | `/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| productRoute | `/field/attendance*` (shell alias · UNCLEAR-STD-ROUTE: follow STATUS mfeStdRoute) |
| note | new_page · 1 std route + nested report/day/log · **cấm** invent `/attendance/*` API path |

## FormType pack adapt (phone hub)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-ATT-01** | DES-GRID N/A · phone hub ATT-* |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone hub · **cấm** desktop filter bar |
| T-UI-CFG-01 / T-BE-UISCHEMA-01 | **WAIVE** | no catalog Kind B |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | → **T-UI-ATT-02** (check-in write) | no master Modal · POST body fields only |
| T-UI-LEAVE-01 | **WAIVE** | no dirty master form · check-in = one-shot POST |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates adapted hub |
| T-UI-LKP-01 | **WAIVE** | no SearchInput catalog |
| T-BE-CRUD-01 | → wire Live only | reuse Patrol attendance-logs · **no** new controller |
| T-BE-INIT-01 · T-PERM-01 | **KEEP** | LOOKUP_STATIC labels · auth gate |
| T-QA-CRUD-01 · T-QA-ATT-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone hub + waive có cite.  
**GAP-TL-FILTER-01 / GAP-TL-GRID-*-01:** N/A.

## Decisions (rolled from prior)

- Hub ATT-00…05: heroStatus · gpsMeta · Chấm vào · Báo cáo · dayRows 7d · empty
- Chain ATT-06…08: report → day/:key → log/:id **RO** · client aggregate GET list · **cấm** invent report API
- GPS: `navigator.geolocation` bắt buộc Chấm vào · deny = DES-MOB-GPS-DENY · **no POST** · **cấm** fake
- POST body: `userName`·`route`·`checkInAt`·`kmPoint?`·`lat`·`lng`·`inZone`·`status`·`note?`
- Labels: `useFormOptions()` / `attendance.*` · **cấm** hardcode VN
- Entry: Field hub · no new tab · no gộp supervise/zone/Face-NFC
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · DOMAIN-MAP `web-rmms-attendance` → Patrol (**resolved**)
- Copy: Android `#sc-attendance*` 1-1 · **cấm** sửa iOS/Android · **cấm** MFE desktop Field
- OUT: Face/NFC DEFER · report API invent · supervise/zone · native edits · desktop Field · demoDays

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| ATT-00 | Hub chrome | Full 430 | browse | shell | T-UI-ATT-01 | `/agent-dev` |
| ATT-01 | heroStatus | Text RO | browse | GET list → today | T-UI-ATT-01 · T-UI-FIELD-01 | `/agent-dev` |
| ATT-02 | gpsMeta | Text RO | GPS | geolocation | T-UI-ATT-02 · T-UI-FIELD-01 | `/agent-dev` |
| ATT-03 | btnCheckIn | Button | write | POST + GPS | T-UI-ATT-02 · T-UI-ACT-01 | `/agent-dev` |
| ATT-04 | btnReport | Button/Nav | browse | → report | T-UI-ATT-01 · T-UI-ACT-01 | `/agent-dev` |
| ATT-05 | dayRows | ListRow+Badge | browse | GET aggregate 7d | T-UI-ATT-01 | `/agent-dev` |
| ATT-06 | report | List RO | browse | client group day | T-UI-ATT-03 | `/agent-dev` |
| ATT-07 | day | List RO | browse | filter dayKey | T-UI-ATT-03 | `/agent-dev` |
| ATT-08 | log | Detail RO | browse | GET `/{id}` | T-UI-ATT-03 | `/agent-dev` |
| ATT-09 | empty | Empty | — | live `[]` / «—» | T-UI-ATT-01 · T-UI-ATT-03 | `/agent-dev` |

## FormMode ↔ API

| Mode / zone | API | Write |
|-------------|-----|-------|
| hero / dayRows / report / day | `GET mobile-bff/api/v1/patrol/attendance-logs` | — · client aggregate |
| check-in | `POST …/patrol/attendance-logs` | body §B · GPS required |
| log detail | `GET …/patrol/attendance-logs/{id}` | — |
| auth | `GET mobile-bff/api/v1/auth/profile` | `userName` → POST |
| report API invent | **cấm** | P1 client aggregate only |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN · demoDays |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* · web-bff |
| BE | Patrol attendance-logs Live · Auth profile | invent `/attendance/*` · entity/migration |
| GPS | `navigator.geolocation` only | fake coords · bypass deny |
| Copy | Android `#sc-attendance*` 1-1 | sửa iOS/Android · desktop Field |
| Peer | Field hub entry · peer `attendance` cite | gộp supervise/zone/Face-NFC |

## implement.wire

| From | To | Note |
|------|----|------|
| heroStatus | GET attendance-logs → today | Text RO · empty «—» |
| gpsMeta | geolocation | deny → DES-MOB-GPS-DENY · disable check-in |
| btnCheckIn | POST attendance-logs | GPS lat/lng required · refresh GET |
| dayRows | GET list → group 7d | ListRow+Badge |
| btnReport / report / day | GET list aggregate | nav chain · **no** invent report API |
| log | GET `/{id}` | Detail RO fields §B |
| userName | GET auth/profile | POST body · guest → login |

## implement.state

- Route under `/web-rmms-attendance` · nested `/report` · `/day/:key` · `/log/:id` · product `/field/attendance*`
- Phone **430** · DES-MOB-ATT · Android 1-1
- GPS deny → no POST · toast/inline · **cấm** `alert()`
- Empty live `[]` · **cấm** demoDays
- Labels `attendance.*` via `useFormOptions()`
- STD-PORT `:9301` · mfeStdUrl STATUS
- Mobile.Bff `:5202` only

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| attendance.* labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN |
| userName | GET auth/profile | invent name |
| status P1 | key «Đúng tuyến» via options | invent free text |
| inZone P1 | default true | fake GPS in-zone |

---

## Tasks

### T-BE-CRUD-01 — Live Patrol attendance-logs + auth profile
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire `GET/POST/GET{id}` `patrol/attendance-logs` + `GET auth/profile` via Mobile.Bff · ApiResponse · **migration none** · **cấm ERP.*** · **cấm** invent `/attendance/*` controller/path · report/day = client aggregate only
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `attendance.*` labels từ `useFormOptions()` · **cấm** hardcode VN · **cấm** invent init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC)

### T-PERM-01 — Auth gate
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → login · auth → hub + POST uses profile `userName` · **cấm** POST khi guest · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-ATT-01 — Hub shell ATT-00…05 · ATT-09 empty
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Route `/web-rmms-attendance` · phone 430 · heroStatus · btnReport · dayRows 7d · empty live · UTF-8 · **cấm** DES-GRID / filter bar · Android 1-1 DES-MOB-ATT · **cấm** demoDays
- **skills:** `/agent-dev` · `/dev-web-responsive` · prototype reviewUrl

### T-UI-ATT-02 — GPS + Chấm vào (check-in write)
- **role:** Dev · **deps:** T-UI-ATT-01 · T-PERM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** geolocation bắt buộc · deny = DES-MOB-GPS-DENY + disable POST · POST body §B · refresh hero · **cấm** fake GPS · fail toast
- **skills:** `/agent-dev`

### T-UI-ATT-03 — Report / day / log RO chain
- **role:** Dev · **deps:** T-UI-ATT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** ATT-06…08 · product `/report` · `/day/:key` · `/log/:id` · client aggregate GET list · GET `{id}` detail · **cấm** invent report/summary/zones API
- **skills:** `/agent-dev`

### T-UI-ACT-01 — Action inventory
- **role:** Dev · **deps:** T-UI-ATT-01 · T-UI-ATT-02 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** btnCheckIn · btnReport · dayRows nav · report/day/log CTAs → handler · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-ATT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** field→control→API khớp SA · Text RO hero/gps · Hidden lat/lng · POST fields · Detail RO log · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user surface
- **role:** Dev · **deps:** T-UI-ATT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution
- **role:** Dev · **deps:** T-UI-ATT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Toast / overlay
- **role:** Dev · **deps:** T-UI-ATT-02 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** POST/GET fail · GPS deny → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01**)
- **skills:** `/agent-dev`

### T-BE — API Mới / entity / migration
- **status:** **N/A** · SA: none · Step 4b skip

### T-QA-CRUD-01 — Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-ATT-01…T-UI-ATT-03 · **status:** pending
- **DoD:** GET/POST/GET{id} · GPS deny · empty · report aggregate · **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev
- **skills:** `/agent-qa*`

### T-QA-ATT-01 — Hub + chain Maestro/e2e (queued)
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** ATT-00…09 · DES-MOB-GPS-DENY · phone 430 · mfeStdUrl · **chỉ** `/agent-qa*` · **cấm** `yarn start:std` ở TL
- **skills:** `/agent-qa*`

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · e2eQa=ON · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| Hub hero + Chấm vào + GPS | T-UI-ATT-01 · T-UI-ATT-02 |
| GPS deny = no POST · DES-MOB-GPS-DENY | T-UI-ATT-02 · T-UI-HIST-01 |
| dayRows 7d aggregate | T-UI-ATT-01 · T-BE-CRUD-01 |
| report/day/log RO chain | T-UI-ATT-03 |
| Labels useFormOptions · no hardcode VN | T-BE-INIT-01 · T-UI-FIELD-01 |
| Live empty · cấm demoDays | T-UI-ATT-01 · T-QA-ATT-01 |
| Mobile.Bff only · no invent path · Step 4b skip | T-BE-CRUD-01 · T-BE N/A |
| Android 1-1 · cấm native change | T-UI-ATT-01 · T-UI-UX-01 |
| Auth gate userName | T-PERM-01 |

## Out of scope

- Face/NFC · supervise/zone gộp
- Invent `/attendance/*` · report/summary/zones/validate API
- New BE controller · migration · Step 4b
- ERP.* · web-bff client
- iOS/Android native edits · desktop Field
- demoDays / mock SSOT

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-attendance-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ATT | **resolved** (SA) |
| UNCLEAR-REPORT-API | **resolved P1** client aggregate |
| UNCLEAR-STD-ROUTE | **carry Dev** — follow STATUS `mfeStdRoute` · product `/field/attendance*` |
| UNCLEAR-EMPTY-COPY | **carry Dev/QA** — live `[]` / hero «—» · **cấm** demoDays |
