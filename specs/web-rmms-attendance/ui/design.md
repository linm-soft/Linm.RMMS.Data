# Design — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_4768c43c`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field hub** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile hub + RO report/day/log · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** — report = client aggregate GET list (không BE report grid) |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| mfeStdRoute | `/web-rmms-attendance` |
| productRoute | `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| reviewUrl GPS deny | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html?deny=1` |
| reviewUrl empty | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html?empty=1` |
| reviewUrl checked | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html?checked=1` |
| reviewUrl offline | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html?offline=1` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-attendance` · `DES-MOB-ATT` / hero / 7d rows · **bỏ** Me tabs · **cấm** demoDays |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol `attendance-logs` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff client |
| controlHint | `specs/_data-analy/features/web-rmms-attendance-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-attendance-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T01:36:00.000Z` |
| taskId | `task_4768c43c` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual edits · Kind B DES-GRID · `LinErpListFilterBar` · invent `/attendance/*` path · fake GPS · demoDays / demo SSOT · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp supervise/zone/Face-NFC · desktop Field.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-attendance.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/attendance*` | Attendance chain |
| CTX-03 | `docs/context/features/attendance.md` | peer DES-MOB-ATT |
| DEM | — | **N/A** · hash skip · **cấm** demoDays |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-attendance-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | GPS · API reuse · Leave Face/NFC |
| Peer proto | `specs/attendance/ui/prototype/android/index.html` `#sc-attendance` | UI 1-1 zones (cite only) |
| tokens | primary `#0C84C0` · hero Android `#1B8A4A`→`#0F5C30` · phone 430 |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · label **13** · field **≥16** · control **≥44/48** |
| Shell | App topbar (back · title) · **không** ERP `LinPageLayout` catalog chrome |
| Surface | Hub ATT-01…03 + push RO ATT-04…06 — **không** Modal/Slideout form |
| Filter | **N/A** — **cấm** LinErpListFilterBar |
| Leave | Dirty none (POST atomic) · GPS deny = in-app modal · **cấm** `window.alert` |
| Tabs | **không** new tab · Entry Field hub only |
| Entry | Field hub → `/web-rmms-attendance` (STATUS) · product `/field/attendance*` |
| Out | Face/NFC · supervise · zone config · invent report/zones API · desktop Field · native edits |

### UNCLEAR-STD-ROUTE (Design chốt)

| | |
|--|--|
| Packet / STATUS | `mfeStdRoute=/web-rmms-attendance` · `mfeStdUrl=http://localhost:9301/web-rmms-attendance` |
| SCREENS | `/field/attendance*` native product paths |
| Wire | MFE mount STATUS route · in-app nav product routes · **follow STATUS** for std URL |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **ATT-00** | phone frame | Layout ≤430 | Android / DES-MOB-ATT 1-1 |
| **ATT-01** | `/web-rmms-attendance` · `/field/attendance` | Topbar + title | copy `attendance.title` |
| **ATT-02** | hero | Text RO + Buttons | status · GPS meta · Chấm vào · Báo cáo |
| **ATT-03** | history | ListRow + Badge | GET list aggregate 7d |
| **ATT-04** | `/field/attendance/report` | List | client group-by-day |
| **ATT-05** | `/field/attendance/day/:key` | List | filter CheckInAt dayKey |
| **ATT-06** | `/field/attendance/log/:id` | Detail RO | GET `…/{id}` |
| **ATT-07** | GPS | Action + Modal | `navigator.geolocation` · deny → no POST |
| **ATT-08** | empty/error | Empty / Toast | `[]` / hero «—» · **cấm** demoDays |
| **ATT-09** | entry | Nav | Field hub · **cấm** gộp supervise |
| **DES-MOB-ATT** | screen owner | Screen | peer `#sc-attendance` |
| **DES-MOB-GPS-DENY** | overlay | Modal | Mở Cài đặt / Để sau |

### IA

```
(auth) → Field hub
  → ATT-01 /field/attendance (mfeStd /web-rmms-attendance)
       GPS fix → Chấm vào POST patrol/attendance-logs
       Báo cáo → ATT-04 report (client aggregate)
         → ATT-05 day/:key → ATT-06 log/:id (RO)
  GPS deny → DES-MOB-GPS-DENY · disable POST
  empty GET → [] / hero —
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | ATT-00 | Layout | * | max-width 430 |
| pageTitle | ATT-01 | Text | — | key `attendance.title` |
| back | ATT-01 | Button/Nav | — | → Field hub |
| heroEyebrow | ATT-02 | Text | — | copy key · «Chấm công theo định vị» |
| heroStatus | ATT-02 | Text RO | * | Chưa chấm / Đã chấm · derive today logs |
| heroGpsMeta | ATT-02 | Text RO | — | lat/lng · accuracy · ca/ngày · empty «—» |
| btnCheckIn | ATT-02 | Button | * | POST + GPS gate |
| btnReport | ATT-02 | Button/Nav | — | → report |
| historySection | ATT-03 | SectionLabel | — | 7 ngày gần đây |
| dayRow | ATT-03 | ListRow + Badge | — | title · sub time · badge status |
| reportList | ATT-04 | List | — | GET list group by day |
| dayList | ATT-05 | List | — | filter dayKey |
| log.userName | ATT-06 | Text RO | — | GET/{id} |
| log.route | ATT-06 | Text RO | — | Route |
| log.kmPoint | ATT-06 | Number RO | — | KmPoint |
| log.checkInAt | ATT-06 | DateTime RO | — | CheckInAt |
| log.latLng | ATT-06 | Text RO | — | Lat · Lng stored |
| log.inZone | ATT-06 | Badge RO | — | InZone |
| log.status | ATT-06 | Badge RO | — | Status LOOKUP_STATIC |
| log.note | ATT-06 | Text RO | — | Note |
| gpsCapture | ATT-07 | Action | * (check-in) | deny → modal · no POST · **cấm** fake |
| emptyState | ATT-08 | Empty | — | GET empty → `[]` / hero «—» |
| post.userName | — | Hidden | * | auth profile |
| post.route | ATT-02 | Text/Select | — | `route` · road-route cite |
| post.checkInAt | — | Hidden | * | UTC now |
| post.kmPoint | — | Number opt | — | `kmPoint` |
| post.lat / lng | — | Hidden | * | geolocation |
| post.inZone | — | Hidden | — | P1 default true |
| post.status | — | Hidden | — | P1 copy key «Đúng tuyến» |
| post.note | — | Text opt | — | `note` |

**Labels:** `useFormOptions()` / `attendance.*` — prototype hiện nhãn VN để review; Dev wire key.

### Hành vi (Design chốt)

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map 7d · fail → toast · **cấm** demoDays fallback |
| Chấm vào | GPS usable → POST · toast success · hero Đã chấm · refresh list |
| GPS deny | Modal `DES-MOB-GPS-DENY` · disable Chấm vào · **không** POST · **cấm** fake coords |
| GPS timeout / invalid | toast locTimeout · no POST |
| Offline POST | toast offline · **cấm** fake success |
| POST 4xx/5xx | toast checkInFail |
| Báo cáo | push ATT-04 · client group-by-day · **cấm** invent report API |
| Tap day | push ATT-05 |
| Tap log | push ATT-06 · GET/{id} RO |
| Empty list | EmptyState / hero «—» · live only |
| Leave | no dirty form · discard none |

## 4. DES ↔ kit map

| Zone / DES | Kit / surface | Notes |
|------------|---------------|-------|
| Topbar | `LinmTopBar` | back · title |
| Hero | `LinmHeroCard` / green gradient | Android `#1B8A4A`→`#0F5C30` |
| Chấm vào | `LinmHeroAction` white | GPS gate |
| Báo cáo | `LinmHeroAction` ghost | nav report |
| Section | `LinmSectionLabel` | 7 ngày |
| Day / report / day rows | `LinmListRow` + Badge | status map |
| Log detail | Detail RO rows | no edit |
| GPS deny | feature Modal | **cấm** `window.alert` |
| Toast | `LinmToast` | success / fail / offline / gpsDeny |
| Empty | EmptyState | live `[]` |

### kit_missing_confirm

**N/A** — reuse existing Mobile kit (TopBar · Hero · ListRow · Toast · GPS deny modal). **Không** package mới P1.

## 5. API (Design note · SA cite DTO)

| Zone | Method · Path |
|------|----------------|
| History / report / day | `GET …/patrol/attendance-logs` · client aggregate |
| Check-in | `POST …/patrol/attendance-logs` · lat/lng/route/… |
| Log detail | `GET …/patrol/attendance-logs/{id}` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `/attendance/report|summary|zones|validate` · ERP.* · web-bff client.

UNCLEAR-DOMAIN-MAP-ATT → SA add DOMAIN-MAP row `web-rmms-attendance` (cite Patrol `attendance`).
UNCLEAR-REPORT-API → P1 client aggregate only.

## 6. Prototype review states

| State | URL query | Expect |
|-------|-----------|--------|
| Hub ready | (default) | hero + 7d rows · Chấm vào enabled |
| GPS deny | `?deny=1` | modal · Chấm vào disabled |
| Empty | `?empty=1` | hero «—» · empty history |
| Checked | `?checked=1` | hero Đã chấm |
| Offline | `?offline=1` | banner · Chấm vào disabled |
| Report / Day / Log | board nav | ATT-04…06 RO chain |

**Cấm** dùng `mfeStdUrl` / `yarn start:std` làm reviewUrl Design.

## 7. Out of pack

| Item | Owner |
|------|-------|
| Face / NFC | DEFER |
| DOMAIN-MAP row | SA |
| Report/zones BE | DEFER · client aggregate P1 |
| E2E | `/agent-qa*` queued |
| Native iOS/Android edits | **cấm** |
| Desktop Field | Out |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Mode | autoApprove=ON · không chờ board |
| Next | `/agent-sa` · **stop** this task (GAP-PKT-ROLE-01) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.02 |
| rulesVersion | 2026.09.25.2 |
| generatedAt | 2026-09-26T01:36:00.000Z |
| versionGate | ok |
| contentHash | sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.02 rulesVersion=2026.09.25.2 versionGate=ok -->
