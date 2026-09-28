# Feature context — web-rmms-attendance

> **Slug:** `web-rmms-attendance` · **Wave:** W3 Field — Chấm công (hub + báo cáo → ngày → log)  
> **Status:** data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT · cite native `#sc-attendance*` / DES-MOB-ATT only)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Field  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · DOMAIN-MAP **Patrol** · resource `attendance-logs` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/cham-cong` · **mfeStdUrl:** `http://localhost:9301/cham-cong`  
> **Native routes (SCREENS):** `/field/attendance` · `/field/attendance/report` · `/field/attendance/day/:key` · `/field/attendance/log/:id`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-attendance` · **cấm** sửa iOS/Android · **≠** gộp supervise / zone config / Face-NFC  
> **Delta cite:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-attendance` · Pattern B submit/validate

## 1. Mục tiêu

Màn **Chấm công** 1-1 native DES-MOB-ATT / `AttendanceView` (+ chain report/day/log): hero Chấm vào (GPS + POST) · lịch sử · báo cáo nhóm theo ngày. Entry từ Field hub / segment. Persona = tuần đường / hạt trưởng. **Không** Face/NFC P1.

**Edit (this task):** Pattern B — nút **Chấm vào** luôn bật khi form sẵn sàng; chỉ `disabled` khi `saving`; thiếu đăng nhập / GPS / mạng → **bấm mới báo** (banner/modal/toast theo rule). **Cấm** Excel toolbar/export. **Cấm** typed CRUD `new_page`.

## 2. Màn ATT (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| ATT-00 | phone frame | ≤430px · Android / DES-MOB-ATT layout 1-1 |
| ATT-01 | `/cham-cong` hub (native cite `/field/attendance`) | Title Chấm công · hero + lịch sử |
| ATT-02 | hero check-in | Status · GPS meta · **Chấm vào** → POST · **Báo cáo** → report · Pattern B CTA |
| ATT-03 | history rows | Aggregate GET logs → day rows · tap → day/log |
| ATT-04 | `/cham-cong/report` | Group by day từ list · **không** invent report API |
| ATT-05 | `/cham-cong/day/:key` | Lần chấm trong ngày · lọc client |
| ATT-06 | `/cham-cong/log/:id` | RO detail · Lat/Lng/KmPoint/InZone · **không** form sửa |
| ATT-07 | GPS gate | `navigator.geolocation` · deny → **bấm mới** modal/banner · **cấm** fake · **cấm** khóa nút trước |
| ATT-08 | empty / error | GET empty → `[]` / hero «—» · fail → toast · **cấm** demoDays SSOT |
| ATT-09 | entry | Field hub / seg Chấm công · **không** tab mới · **cấm** gộp supervise |

**Out:** `#sc-supervise*` / monitor list · zone Kind D · Face/NFC · invent `/attendance/report|zones|validate` · desktop Field · ERP.* · edit iOS/Android · Excel export.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/attendance*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · Attendance*View |
| SUBMIT-VALIDATE | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · slug row |
| Peer legacy | `docs/context/features/attendance.md` · attendance-day · attendance-log · attendance-report |
| DOMAIN-MAP | Patrol · slug `attendance` (+ `web-rmms-attendance` row SA) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` catch-all · `mobileApiBase()` |
| Code | `src/pages/WebRmmsAttendance/AttendanceHubPage.tsx` · paths `/cham-cong` |

## 4. API Live (reuse — cấm invent)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` · **cấm** web-bff base |
| List | `GET patrol/attendance-logs` · query `route`/`search`/`status`/`page`/`pageSize` |
| GetById | `GET patrol/attendance-logs/{id}` |
| Create | `POST patrol/attendance-logs` · body: userName · route · checkInAt · kmPoint? · lat · lng · inZone · status · note |
| Report / Day | **client aggregate** cùng GET list · **cấm** invent report/summary/zones endpoints P1 |
| Users (peer) | forward `GET integration/users` trên Mobile.Bff nếu thiếu · hub Chấm công **không** gắn User SearchInput P1 |
| Road-routes | cite `integration/road-routes/search` · hub lấy route từ ca Field RO · **cấm** seed |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Phone `max-width` 430 · 1-1 DES-MOB-ATT / AttendanceView |
| Entry | Field hub · **không** tab · **không** gộp supervise/zone |
| Labels | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| Submit | Pattern B · CTA luôn bật · chỉ `disabled` khi `saving` · cite SUBMIT-VALIDATE |
| GPS | geolocation trên Chấm vào · deny = bấm mới báo · **cấm** fake · **cấm** khóa nút trước |
| Empty | live only · empty/`[]` · **cấm** demoDays / demoHero |
| BFF | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL` / `mobileApiBase()` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android · **cấm** MFE desktop Field |
| Entity/path | **cấm** entity mới · **cấm** path attendance/* mới P1 |
| Export | **cấm** Excel / toolbar export |

## 6. Persona

| Zone | Ai |
|------|-----|
| ATT-01…06 staff | Tuần đường / hạt trưởng sau login |
| Guest | Click Chấm vào → báo / login CTA (Pattern B) · shell redirect OK |

## 7. Gaps

| ID | Default |
|----|---------|
| GAP-ATT-FACE | Face/NFC DEFER |
| GAP-ATT-REPORT-API | Report/summary/zones BE MISSING · client aggregate P1 |
| GAP-ATT-PATTERN-B | **CLOSED** · Pattern B · `disabled={saving}` · banner client on submit |
| GAP-ATT-STD-ROUTE | CLOSED · paths.ts `/cham-cong` · **không** `/web-rmms-attendance` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T17:08:51.871Z` |
| mobile | — | — | — |
