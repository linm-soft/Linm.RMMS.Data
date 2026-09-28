# Data-analy â€” real-data bind â€” web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Cháº¥m cÃ´ng â€” hub GPS + lá»‹ch sá»­ + bÃ¡o cÃ¡o ngÃ y/log |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_0da20514` |
| prefix API | Patrol `attendance-logs` |
| prefix BFF web (cite) | `web-bff/api/v1/*` Â· **khÃ´ng** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` Â· host `http://localhost:5202` Â· `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· **cáº¥m ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| mfeStdRoute | `/cham-cong` |
| domain | **Patrol** Â· `attendance-logs` (+ cite Auth profile) |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| contentHashPrev | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T16:35:00.000Z` |
| demo | **N/A** Â· **cáº¥m** demo-json / in-app mock SSOT / demoDays |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` Â· slug `web-rmms-attendance` |

## Â§ Scope Attendance

| In | Out |
|----|-----|
| ATT-00â€¦09 Â· hub Cháº¥m vÃ o Pattern B Â· history Â· report/day/log RO | supervise Â· zone Â· Face/NFC Â· invent report/zones API Â· Excel |
| API **Live** GET/POST/GET{id} `patrol/attendance-logs` | API **Má»›i** `/attendance/*` P1 Â· invent entity Â· typed CRUD new_page |

## Â§ Delta Current vs New (edit_page HARD)

| Area | Current | New |
|------|---------|-----|
| CTA bind | `disabled={!canCheckIn}` Â· canCheckIn=authedâˆ§gpsOkâˆ§onlineâˆ§!savingâˆ§!loading | chá»‰ `disabled={saving}` Â· thiáº¿u auth/GPS/online/route â†’ onClick bÃ¡o |
| GPS write | deny trÆ°á»›c â†’ khÃ´ng báº¥m Ä‘Æ°á»£c | deny â†’ modal/banner khi báº¥m Â· POST chá»‰ khi gpsOk sau validate |
| Client errors | toast rá»i | Pattern B banner `string[]` (+ inline náº¿u cÃ³ field) Â· API lá»—i = toast |
| Route bind | RO `routeHint` tá»« ca active | **giá»¯** Â· thiáº¿u â†’ bÃ¡o khi báº¥m Â· **khÃ´ng** SearchInput báº¯t buá»™c trÃªn hub |
| BFF | Mobile.Bff catch-all | **giá»¯** Â· má»i call `mobileApiBase()` Â· users forward náº¿u thiáº¿u (peer) |
| Align | â€” | `/align-mobile-to-mfe` Â· 430px Â· no new tab/route/icon |

## Â§A â€” Nguá»“n

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-attendance.md` | â€” | â€” |
| `submit-validate` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | â€” | Pattern B |
| `peer` | `docs/context/features/attendance.md` | â€” | Face/NFC DEFER |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` Â· `/field/attendance*` | â€” | BFF + GPS |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` Â· Attendance*View | â€” | â€” |
| `code` | `AttendanceHubPage.tsx` Â· `paths.ts` `/cham-cong` | â€” | canCheckIn disable |
| `api` | `GET/POST patrol/attendance-logs` Â· `GET â€¦/{id}` | `[]` / hero Â«â€”Â» | toast API Â· **cáº¥m** `window.alert` |
| `bff` | Mobile.Bff `:5202` Â· proxy RMMS | 503 | retry |
| `domain-map` | Patrol Â· `attendance` | â€” | **cáº¥m ERP.*** |
| `auth` | `GET auth/profile` â†’ `userName` POST | â€” | click â†’ login bÃ¡o |
| `geo` | `navigator.geolocation` on check-in | deny | on-submit bÃ¡o Â· **cáº¥m** fake |
| `demo` | â€” | N/A | **cáº¥m** demo SSOT |

## Â§B â€” Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| hero.status | attendance.hero.status | Text RO | â€” | derive today logs | â€” | SCREENS | DES-MOB-ATT |
| hero.gpsMeta | attendance.hero.gps | Text RO | â€” | geolocation | â€” | SCREENS | n/a |
| btn.checkIn * | attendance.action.checkIn | Button | â€” | â€” | POST body | SCREENS | POST logs Â· Pattern B |
| btn.report | attendance.action.report | Button/Nav | â€” | â€” | nav report | SCREENS | peer report |
| history.dayTitle | attendance.day.title | Text | â€” | GET list aggregate | â€” | SCREENS | 7d rows |
| history.daySub | attendance.day.sub | Text | â€” | CheckInAt range | â€” | SCREENS | n/a |
| history.badge | attendance.day.badge | Badge | LOOKUP_STATIC status | Status / InZone | â€” | SCREENS | badge map |
| report.rows | attendance.report.row | ListRow | â€” | GET list group day | â€” | SCREENS | attendance-report |
| day.rows | attendance.day.row | ListRow | â€” | filter dayKey | â€” | SCREENS | attendance-day |
| log.userName | attendance.log.user | Text RO | â€” | GET/{id} | â€” | SCREENS | attendance-log |
| log.route | attendance.log.route | Text RO | â€” | GET/{id} | â€” | SCREENS | n/a |
| log.kmPoint | attendance.log.km | Number RO | â€” | GET/{id} | â€” | SCREENS | n/a |
| log.checkInAt | attendance.log.time | DateTime RO | â€” | GET/{id} | â€” | SCREENS | n/a |
| log.latLng | attendance.log.geo | Text RO | â€” | Lat Â· Lng | â€” | SCREENS | n/a |
| log.inZone | attendance.log.inZone | Badge RO | â€” | InZone | â€” | SCREENS | n/a |
| log.status | attendance.log.status | Badge RO | LOOKUP_STATIC | Status | â€” | SCREENS | n/a |
| log.note | attendance.log.note | Text RO | â€” | Note | â€” | SCREENS | n/a |
| post.userName | â€” | Hidden | â€” | profile | `userName` | Auth | n/a |
| post.route | attendance.form.route | Text RO / Hidden | ca Field | routeHint | `route` | sessions | n/a |
| post.checkInAt | â€” | Hidden | â€” | â€” | `checkInAt` UTC now | SCREENS | n/a |
| post.kmPoint | attendance.form.km | Number opt | â€” | â€” | `kmPoint` | SCREENS | n/a |
| post.lat | â€” | Hidden | â€” | geolocation | `lat` | SCREENS | n/a |
| post.lng | â€” | Hidden | â€” | geolocation | `lng` | SCREENS | n/a |
| post.inZone | â€” | Hidden | â€” | P1 default true | `inZone` | SCREENS | n/a |
| post.status | â€” | Hidden | â€” | P1 on-route copy key | `status` | SCREENS | n/a |
| post.note | attendance.form.note | Text opt | â€” | â€” | `note` | SCREENS | n/a |
| validationBanner * | attendance.validate.* | Banner | â€” | â€” | client errors | Pattern B | n/a |

**Cáº¥m** invent `/attendance/report|summary|zones|validate` Â· **cáº¥m** ERP.* Â· **cáº¥m** fake GPS Â· **cáº¥m** hardcode VN labels Â· **cáº¥m** demoDays Â· **cáº¥m** `disabled={!canCheckIn}`.

## Â§C â€” Catalog

| catalogKind | search/list API | seed/import cite | Cáº¥m |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `attendance.*` | SCREENS Â· CTX | hardcode label VN |
| road-route | cite Integration / ca Field RO | DOMAIN-MAP Â· BFF search peer | invent route master trÃªn hub Â· SEED |
| attendance-logs | `GET/POST patrol/attendance-logs` | Patrol DOMAIN-MAP | invent path |
| users | `GET integration/users` (BFF forward náº¿u thiáº¿u) | peer forms | User SearchInput trÃªn hub P1 |

## Â§D â€” Map / váº½

| Má»¥c | Ghi |
|-----|-----|
| map | **none** trÃªn hub Â· nav peer `/patrol-map` optional |
| GPS | capture on Cháº¥m vÃ o Â· Pattern B deny-on-submit Â· detail RO reads Lat/Lng |
| draw | **none** |

## Â§E â€” Progress / vÃ²ng Ä‘á»i

| stateField | Nguá»“n | Ai Ä‘á»•i | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell | login | auth/* | thiáº¿u â†’ bÃ¡o khi báº¥m / login CTA |
| HeroCheckedIn | today logs / POST ok | user check-in | GET+POST logs | hero status |
| HistoryRows | list aggregate | refresh after POST | GET logs | day rows |
| GpsFix | geolocation | user grant | â€” | meta Â· enable POST sau validate |
| Saving | POST in-flight | FE | POST | **chá»‰** lÃºc nÃ y disable CTA |
| ValidationAttempted | first click | FE | â€” | banner Pattern B |
| Loading | appear GET | FE | GET | spinner Â· **khÃ´ng** dÃ¹ng Ä‘á»ƒ disable Cháº¥m vÃ o theo canCheckIn |

`progress: attendance check-in session` â€” khÃ´ng WO/incident lifecycle.

## Â§F â€” Handoff

| Role | Need |
|------|------|
| PO | DoD delta: Pattern B CTA Â· GPS on-submit Â· keep hub/report/day/log Â· Live BFF Â· no Excel Â· no Face |
| Design | Giá»¯ ATT zones Â· Android/DES-MOB-ATT Â· reviewUrl |
| SA | Confirm Mobile.Bff `patrol/attendance-logs` Â· users forward náº¿u thiáº¿u |
| TL | Tasks enhance: Pattern B trÃªn hub Â· align-mobile |
| Dev | `AttendanceHubPage` only delta Â· reuse GET/POST Â· `mobileApiBase()` |
| QA | CTA always on Â· GPS deny click Â· empty Â· POST ok Â· report chain Â· phone 430 Â· no ERP |

## Version meta

`skillVersion=2026.09.05.03` Â· `schemaVersion=2` Â· `contentHash=sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` Â· `rulesVersion=2026.09.25.2` Â· `analyzedAt=2026-09-27T16:35:00.000Z`
