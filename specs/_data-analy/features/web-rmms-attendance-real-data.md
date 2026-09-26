# Data-analy — real-data bind — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Chấm công — hub GPS + lịch sử + báo cáo ngày/log |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1b2783bf` |
| prefix API | Patrol `attendance-logs` |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| domain | **Patrol** · `attendance-logs` (+ cite Auth profile) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T01:30:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / demoDays |

## § Scope Attendance

| In | Out |
|----|-----|
| ATT-00…09 · hub Chấm vào · history · report/day/log RO | supervise list · zone config · Face/NFC · invent report/zones/validate API |
| API **Live** GET/POST/GET{id} `patrol/attendance-logs` | API **Mới** `/attendance/*` P1 · invent entity |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-attendance.md` | — | — |
| `peer` | `docs/context/features/attendance.md` | — | Face/NFC DEFER |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/attendance*` | — | BFF + GPS |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · Attendance*View | — | — |
| `api` | `GET/POST patrol/attendance-logs` · `GET …/{id}` | `[]` / hero «—» | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · proxy RMMS | 503 | retry |
| `domain-map` | Patrol · `attendance` | — | **GAP** slug web-rmms-attendance · **cấm ERP.*** |
| `auth` | `GET auth/profile` → `userName` POST | — | login CTA |
| `geo` | `navigator.geolocation` on check-in | deny | disable POST · **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| hero.status | attendance.hero.status | Text RO | — | derive today logs | — | SCREENS | DES-MOB-ATT |
| hero.gpsMeta | attendance.hero.gps | Text RO | — | geolocation | — | SCREENS | n/a |
| btn.checkIn | attendance.action.checkIn | Button | — | — | POST body | SCREENS | POST logs |
| btn.report | attendance.action.report | Button/Nav | — | — | nav report | SCREENS | peer report |
| history.dayTitle | attendance.day.title | Text | — | GET list aggregate | — | SCREENS | 7d rows |
| history.daySub | attendance.day.sub | Text | — | CheckInAt range | — | SCREENS | n/a |
| history.badge | attendance.day.badge | Badge | LOOKUP_STATIC status | Status / InZone | — | SCREENS | badge map |
| report.rows | attendance.report.row | ListRow | — | GET list group day | — | SCREENS | attendance-report |
| day.rows | attendance.day.row | ListRow | — | filter dayKey | — | SCREENS | attendance-day |
| log.userName | attendance.log.user | Text RO | — | GET/{id} | — | SCREENS | attendance-log |
| log.route | attendance.log.route | Text RO | — | GET/{id} | — | SCREENS | n/a |
| log.kmPoint | attendance.log.km | Number RO | — | GET/{id} | — | SCREENS | n/a |
| log.checkInAt | attendance.log.time | DateTime RO | — | GET/{id} | — | SCREENS | n/a |
| log.latLng | attendance.log.geo | Text RO | — | Lat · Lng | — | SCREENS | n/a |
| log.inZone | attendance.log.inZone | Badge RO | — | InZone | — | SCREENS | n/a |
| log.status | attendance.log.status | Badge RO | LOOKUP_STATIC | Status | — | SCREENS | n/a |
| log.note | attendance.log.note | Text RO | — | Note | — | SCREENS | n/a |
| post.userName | — | Hidden | — | profile | `userName` | Auth | n/a |
| post.route | attendance.form.route | Text/Select | road-route cite | — | `route` | Integration | n/a |
| post.checkInAt | — | Hidden | — | — | `checkInAt` UTC now | SCREENS | n/a |
| post.kmPoint | attendance.form.km | Number opt | — | — | `kmPoint` | SCREENS | n/a |
| post.lat | — | Hidden | — | geolocation | `lat` | SCREENS | n/a |
| post.lng | — | Hidden | — | geolocation | `lng` | SCREENS | n/a |
| post.inZone | — | Hidden | — | P1 default true | `inZone` | SCREENS | n/a |
| post.status | — | Hidden | — | P1 `Đúng tuyến` (copy key) | `status` | SCREENS | n/a |
| post.note | attendance.form.note | Text opt | — | — | `note` | SCREENS | n/a |

**Cấm** invent `/attendance/report|summary|zones|validate` · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** demoDays fallback.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `attendance.*` | SCREENS · CTX | hardcode label VN |
| road-route | cite Integration / peer | DOMAIN-MAP | invent route master trên màn này |
| attendance-logs | `GET/POST patrol/attendance-logs` | Patrol DOMAIN-MAP | invent path |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên hub · nav peer `/patrol-map` optional |
| GPS | capture only on Chấm vào · detail RO reads stored Lat/Lng |
| draw | **none** |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell | login | auth/* | guest → login |
| HeroCheckedIn | today logs / POST ok | user check-in | GET+POST logs | hero status |
| HistoryRows | list aggregate | refresh after POST | GET logs | day rows |
| GpsFix | geolocation | user grant | — | enable Chấm vào |
| Loading | appear GET · POST | FE | — | spinner / disable CTA |

`progress: attendance check-in session` — không WO/incident lifecycle.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: GPS check-in · history · report/day/log RO · Live BFF · no Face · no demo SSOT |
| Design | ATT zones · Android/DES-MOB-ATT parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-attendance` · confirm Mobile.Bff `patrol/attendance-logs` |
| TL | Tasks Attendance hub + report/day/log |
| Dev | Implement Mobile MFE only · reuse GET/POST |
| QA | GPS deny · empty · POST success · report chain · phone 430 · no ERP |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T01:30:00.000Z`
