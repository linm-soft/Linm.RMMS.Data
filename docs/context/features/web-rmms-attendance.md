# Feature context — web-rmms-attendance

> **Slug:** `web-rmms-attendance` · **Wave:** W3 Field — Chấm công (hub + báo cáo → ngày → log)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT · cite native `#sc-attendance*` / DES-MOB-ATT only)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Field  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · DOMAIN-MAP **Patrol** · resource `attendance-logs` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-attendance` · **mfeStdUrl:** `http://localhost:9301/web-rmms-attendance`  
> **Native routes (SCREENS):** `/field/attendance` · `/field/attendance/report` · `/field/attendance/day/:key` · `/field/attendance/log/:id`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-attendance` · **cấm** sửa iOS/Android · **≠** gộp supervise / zone config / Face-NFC

## 1. Mục tiêu

Màn **Chấm công** 1-1 native DES-MOB-ATT / `AttendanceView` (+ chain report/day/log): hero Chấm vào (GPS + POST) · lịch sử · báo cáo nhóm theo ngày. Entry từ Field hub / segment. Persona = tuần đường / hạt trưởng. **Không** Face/NFC P1.

## 2. Màn ATT (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| ATT-00 | phone frame | ≤430px · Android / DES-MOB-ATT layout 1-1 |
| ATT-01 | `/field/attendance` hub | Title Chấm công · hero + lịch sử |
| ATT-02 | hero check-in | Status · GPS meta · **Chấm vào** → POST · **Báo cáo** → report |
| ATT-03 | history rows | Aggregate GET logs → day rows · tap → day/log |
| ATT-04 | `/field/attendance/report` | Group by day từ list · **không** invent report API |
| ATT-05 | `/field/attendance/day/:key` | Lần chấm trong ngày · lọc client |
| ATT-06 | `/field/attendance/log/:id` | RO detail · Lat/Lng/KmPoint/InZone · **không** form sửa |
| ATT-07 | GPS gate | `navigator.geolocation` bắt buộc trên Chấm vào · deny → disable + modal · **cấm** fake |
| ATT-08 | empty / error | GET empty → `[]` / hero «—» · fail → toast · **cấm** demoDays SSOT |
| ATT-09 | entry | Field hub / seg Chấm công · **không** tab mới · **cấm** gộp supervise |

**Out:** `#sc-supervise*` / monitor list · zone Kind D · Face/NFC · invent `/attendance/report|zones|validate` · desktop Field · ERP.* · edit iOS/Android.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/attendance*` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · Attendance*View |
| Peer legacy | `docs/context/features/attendance.md` · attendance-day · attendance-log · attendance-report |
| DOMAIN-MAP | Patrol · slug `attendance` (+ add `web-rmms-attendance` row SA) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` catch-all |

## 4. API Live (reuse — cấm invent)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| List | `GET patrol/attendance-logs` · query `route`/`search`/`status`/`page`/`pageSize` |
| GetById | `GET patrol/attendance-logs/{id}` |
| Create | `POST patrol/attendance-logs` · body: userName · route · checkInAt · kmPoint? · lat · lng · inZone · status · note |
| Report / Day | **client aggregate** cùng GET list · **cấm** invent report/summary/zones endpoints P1 |
| Web BFF | **cite only** — **cấm** base client |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Phone `max-width` 430 · 1-1 DES-MOB-ATT / AttendanceView |
| Entry | Field hub · **không** tab · **không** gộp supervise/zone |
| Labels | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| GPS | geolocation bắt buộc Chấm vào · deny = không POST · **cấm** fake |
| Empty | live only · empty/`[]` · **cấm** demoDays / demoHero |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android · **cấm** MFE desktop Field |
| Entity/path | **cấm** entity mới · **cấm** path attendance/* mới P1 |

## 6. Persona

| Zone | Ai |
|------|-----|
| ATT-01…06 staff | Tuần đường / hạt trưởng sau login |
| Guest | Redirect login (shell) |

## 7. Gaps

| ID | Default |
|----|---------|
| GAP-ATT-FACE | Face/NFC DEFER |
| GAP-ATT-REPORT-API | Report/summary/zones BE MISSING · client aggregate P1 |
| GAP-ATT-DOMAIN-ROW | SA thêm DOMAIN-MAP `web-rmms-attendance` |
| GAP-ATT-STD-ROUTE | SCREENS `/field/attendance*` vs mfeStdRoute `/web-rmms-attendance` · follow STATUS packet |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T18:59:26.788Z` |
| mobile | — | — | — |
