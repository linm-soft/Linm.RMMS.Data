# Data-analy â€” controlHint â€” web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| title | Cháº¥m cÃ´ng â€” hub GPS + lá»‹ch sá»­ + bÃ¡o cÃ¡o ngÃ y/log |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| contentHashPrev | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-27T16:35:00.000Z` |
| demo | **N/A** Â· master Â· **cáº¥m** demo SSOT |
| realData | `specs/_data-analy/features/web-rmms-attendance-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· Patrol `attendance-logs` Â· **cáº¥m ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| mfeStdRoute | `/cham-cong` |
| taskId | `task_0da20514` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile hub + RO detail chain Â· Pattern B validate Â· **khÃ´ng** ERP Modal/Slideout Â· master = no demo Â· `/erp-form-context` labels |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` Â· slug `web-rmms-attendance` |
| keepArtifacts | PO/Design/SA/TL/implement/qa/review **giá»¯** Â· **cáº¥m** typed CRUD `new_page` |

> Data-analy **Ä‘á» xuáº¥t** controlHint. Design **chá»‘t** control-map (giá»¯ prototype). SA **giá»¯** DOMAIN-MAP + Mobile.Bff.  
> NhÃ£n UI: `useFormOptions()` / copy key â€” **cáº¥m** hardcode tiáº¿ng Viá»‡t trÃªn form.  
> **Cáº¥m** nhÃ©t phone Attendance vÃ o MFE desktop Â· **cáº¥m** sá»­a iOS/Android Â· **cáº¥m** Excel toolbar/export.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-attendance.md` | `edit_page` Â· this run |
| SUBMIT-VALIDATE | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B Â· `AttendanceHubPage` row |
| Peer | `docs/context/features/attendance.md` | API + DoD |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/attendance*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | Attendance*View |
| Code current | `src/pages/WebRmmsAttendance/AttendanceHubPage.tsx` | `disabled={!canCheckIn}` |
| paths | `paths.ts` Â· `/cham-cong` | **khÃ´ng** `/web-rmms-attendance` |
| DOMAIN-MAP | Patrol Â· `attendance` | keep Â· **cáº¥m ERP.*** |
| BFF | Mobile.Bff `:5202` Â· `mobile-bff/api/v1` | **cáº¥m** web-bff base |

## Â§ Delta Current vs New (edit_page HARD)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| changeScope | `new_page` pipeline done Â· Review PASS | `edit_page` Â· NEW `task_0da20514` Â· **cáº¥m** typed CRUD new_page |
| mfeStdRoute | code/STATUS `/cham-cong` Â· prior analy `/web-rmms-attendance` | **`/cham-cong`** Â· `http://localhost:9301/cham-cong` Â· paths.ts SSOT |
| Submit CTA | `canCheckIn = authed && gpsOk && online && !saving && !loading` Â· `disabled={!canCheckIn}` | Pattern B: **Cháº¥m vÃ o luÃ´n báº­t** khi form sáºµn sÃ ng Â· chá»‰ `disabled` khi `saving` Â· cite `erp-form-context` 3-validation + SUBMIT-VALIDATE |
| Validate | toast sá»›m offline/GPS/route Â· GPS modal khi deny trong click | Láº§n báº¥m Ä‘áº§u â†’ bÃ¡o thiáº¿u auth/GPS/máº¡ng/route (banner `string[]` vÃ /hoáº·c modal GPS Ä‘ang cÃ³) Â· **cáº¥m** khÃ³a nÃºt trÆ°á»›c Â· API 4xx/5xx = toast |
| GPS | deny gÃ³p pháº§n `!gpsOk` â†’ disable CTA | deny â†’ **báº¥m má»›i bÃ¡o** Â· **cáº¥m** fake Â· giá»¯ `navigator.geolocation` |
| Auth / offline | guest early-return khÃ´ng cÃ³ CTA; offline gÃ³p disable | thiáº¿u Ä‘Äƒng nháº­p / máº¡ng â†’ **báº¥m Cháº¥m vÃ o má»›i bÃ¡o** (toast/banner/login CTA) Â· **cáº¥m** `disabled={!canCheckIn}` |
| Route field | RO tá»« ca Field (`routeHint`) Â· toast náº¿u thiáº¿u | **giá»¯** RO tá»« ca Â· thiáº¿u tuyáº¿n â†’ bÃ¡o khi báº¥m Â· **khÃ´ng** báº¯t buá»™c SearchInput trÃªn hub P1 |
| Toolbar/export | N/A phone | **cáº¥m** Excel / toolbar export (SUBMIT override) |
| PO/Design | artifacts done | **giá»¯** Â· PO ghi Â§ Current vs New Â· Design giá»¯ prototype+reviewUrl |
| Align cuá»‘i | â€” | `/align-mobile-to-mfe` Â· demo_ref=no_demo Â· khung 430 Â· **khÃ´ng** tab/route/icon má»›i Â· má»i call `mobileApiBase()` |
| BFF users | â€” | forward `GET integration/users` **náº¿u** thiáº¿u (peer); hub attendance **khÃ´ng** gáº¯n User SearchInput P1 |
| Out of scope | â€” | Face/NFC Â· invent report API Â· supervise gá»™p Â· iOS/Android Â· ERP.* Â· desktop Field |

## Screens Attendance (ids) â€” giá»¯

| id | route / zone | surface |
|----|--------------|---------|
| ATT-00 | phone | frame â‰¤430 Â· Android / DES-MOB-ATT 1-1 |
| ATT-01 | `/cham-cong` | hub title + chrome |
| ATT-02 | hero | status Â· GPS meta Â· Cháº¥m vÃ o* Â· BÃ¡o cÃ¡o |
| ATT-03 | history | day rows tá»« GET list |
| ATT-04 | `/cham-cong/report` | group-by-day |
| ATT-05 | `/cham-cong/day/:key` | láº§n trong ngÃ y |
| ATT-06 | `/cham-cong/log/:id` | RO detail |
| ATT-07 | GPS | geolocation Â· Pattern B deny-on-submit |
| ATT-08 | empty/error | `[]` / toast Â· **cáº¥m** demo SSOT |
| ATT-09 | entry | Field hub Â· **cáº¥m** gá»™p supervise |

**Out:** supervise monitor Â· zone config Â· Face/NFC Â· invent report/zones API Â· desktop Field Â· ERP.* Â· Excel.

## ControlHint inventory â€” delta marks *

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | ATT-00 | Layout | `max-width: 430px` |
| pageTitle | ATT-01 | Text | copy `attendance.title` |
| heroEyebrow | ATT-02 | Text | copy key |
| heroStatus | ATT-02 | Text RO | ChÆ°a cháº¥m / ÄÃ£ cháº¥m Â· state |
| heroGpsMeta | ATT-02 | Text RO | lat/lng Â· accuracy Â· ca/ngÃ y |
| btnCheckIn * | ATT-02 | Button | POST + Pattern B Â· chá»‰ disable khi `saving` |
| btnReport | ATT-02 | Button/Nav | â†’ report |
| historySection | ATT-03 | SectionLabel | 7 ngÃ y / lá»‹ch sá»­ |
| dayRow | ATT-03 | ListRow + Badge | title Â· sub time Â· badge status |
| reportList | ATT-04 | List | client group by day |
| dayList | ATT-05 | List | filter CheckInAt dayKey |
| logDetail | ATT-06 | Detail RO | UserName Â· Route Â· KmPoint Â· CheckInAt Â· Lat Â· Lng Â· InZone Â· Status Â· Note |
| gpsCapture * | ATT-07 | Action | deny â†’ on-submit bÃ¡o Â· **cáº¥m** khÃ³a CTA trÆ°á»›c |
| emptyState | ATT-08 | Empty | GET empty â†’ `[]` / hero Â«â€”Â» |
| validationBanner * | ATT-02 | Banner | client errors `string[]` khi báº¥m (Pattern B) |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** â€” phone hub Â· **khÃ´ng** Kind B desktop grid |
| Excel / toolbar export | **N/A** Â· **cáº¥m** |
| Optional route filter | query `route` trÃªn GET Â· P1 minimal |

## GPS

| MÃ n | Rule |
|-----|------|
| ATT-02 Cháº¥m vÃ o | live fix Â· deny â†’ **báº¥m má»›i** modal/banner Â· **cáº¥m** fake Â· **cáº¥m** disable CTA vÃ¬ GPS |
| ATT-04â€¦06 | chá»‰ **Ä‘á»c** tá»a Ä‘á»™ Ä‘Ã£ lÆ°u Â· khÃ´ng capture má»›i |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-GUEST-SURFACE | guest early-return vs hub + click-to-login | PO: Æ°u tiÃªn Pattern B â€” CTA visible hoáº·c login CTA rÃµ Â· **cáº¥m** `disabled={!canCheckIn}` |
| UNCLEAR-BANNER-VS-TOAST | hub Ä‘ang toast route/offline | Dev: banner Pattern B cho client; API = toast Â· GPS modal giá»¯ OK |
| CLOSED-STD-ROUTE | `/cham-cong` paths.ts | follow STATUS Â· **khÃ´ng** `/web-rmms-attendance` |
| CLOSED-REPORT-API | BE report MISSING | P1 client aggregate Â· **cáº¥m** invent |

## Handoff

| Role | DÃ¹ng |
|------|------|
| PO | Â§ Delta Pattern B Â· keep prior DoD Â· no Face/NFC Â· no Excel |
| Design | Giá»¯ phone 430 Â· ATT-* Â· prototype+reviewUrl Â· **khÃ´ng** gen demo má»›i |
| SA | Giá»¯ DOMAIN-MAP / Mobile.Bff `patrol/attendance-logs` Â· users forward náº¿u thiáº¿u |
| TL/Dev | Wire Pattern B trÃªn `AttendanceHubPage` Â· reuse GET/POST Â· `mobileApiBase()` |

## Version meta

`skillVersion=2026.09.05.03` Â· `schemaVersion=1` Â· `contentHash=sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` Â· `rulesVersion=2026.09.25.2` Â· `analyzedAt=2026-09-27T16:35:00.000Z`
