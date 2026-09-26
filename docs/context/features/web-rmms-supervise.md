# Feature context — web-rmms-supervise

> **Slug:** `web-rmms-supervise` · **Wave:** W2 Home — Giám sát list + chi tiết check-in  
> **Status:** dev done · next `/agent-qa` · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT · cite native `#sc-supervise*` / DES-MOB-SUPERVISE · `#sc-supervise-detail` only)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Field  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · DOMAIN-MAP **Patrol** · resource `attendance-logs` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-supervise` · **mfeStdUrl:** `http://localhost:9301/web-rmms-supervise`  
> **Native routes (SCREENS):** `/supervise` · `/supervise/:id` · (alias Field) `/field/supervise` · `/field/supervise/:id`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-supervise` · **cấm** sửa iOS/Android · **≠** gộp attendance hub / Face-NFC / invent supervise path

## 1. Mục tiêu

Màn **Giám sát** 1-1 native DES-MOB-SUPERVISE / `SuperviseView` (+ detail `SuperviseDetailView`): list check-in rich-card · filter tuyến/ngày · segment Danh sách/Bản đồ · drill RO detail. Persona = hạt trưởng giám sát / quản lý ca. **Không** POST chấm công trên màn này (owner = attendance / check-in sheet).

## 2. Màn SUP (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| SUP-00 | phone frame | ≤430px · Android / DES-MOB-SUPERVISE · DES-MOB-SUP-DETAIL 1-1 |
| SUP-01 | `/supervise` list | Title Giám sát · nav back · filter · segment · card list |
| SUP-02 | filter sheet | Tuyến (query `route`) · Ngày (client filter `CheckInAt`) · **live** · **cấm** toast giả |
| SUP-03 | segment | Danh sách (in-pack) · Bản đồ → nav `/patrol-map` (sibling · **cấm** toast) |
| SUP-04 | rich-card rows | `UserName` · `Route` · `KmPoint` · `CheckInAt` · `InZone` · `Status` · `Note` (org fallback) |
| SUP-05 | `/supervise/:id` detail | RO · UserName · Code · Tổ/Note · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng · CTA bản đồ |
| SUP-06 | GPS RO | Chỉ **đọc** Lat/Lng đã lưu · **không** capture · **không** POST |
| SUP-07 | empty / error | GET empty → `[]` · fail → toast · **cấm** demo SSOT / demoDays |
| SUP-08 | entry | Home / Field hub · **không** tab mới · **cấm** gộp attendance hub |

**Out:** POST/PUT/DELETE `attendance-logs` · Face/NFC · invent `supervise*` API path · zone config · desktop Field · ERP.* · edit iOS/Android · gộp `#sc-checkin-detail` (`patrol-checkin`).

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / filter / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/supervise` + `/:id` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · SuperviseView · SuperviseDetailView |
| Peer legacy | `docs/context/features/supervise.md` · `supervise-detail.md` · `attendance.md` |
| DOMAIN-MAP | Patrol · slug `supervise` (+ add `web-rmms-supervise` row SA) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` catch-all |

## 4. API Live (reuse — cấm invent)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| List | `GET patrol/attendance-logs` · query `route`/`search`/`status`/`page`/`pageSize` |
| GetById | `GET patrol/attendance-logs/{id}` |
| Day filter | **client** trên `CheckInAt` · BE `fromDate`/`toDate` = P2 (GAP) |
| Map | nav `/patrol-map` · **không** invent map API trên slug này |
| Web BFF | **cite only** — **cấm** base client |
| Write | **OUT** P1 — POST check-in = attendance / sessions check-ins |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Phone `max-width` 430 · 1-1 DES-MOB-SUPERVISE / Supervise*View |
| Entry | Home / Field · **không** tab · **không** gộp attendance hub |
| Labels | `useFormOptions()` / copy key · **cấm** hardcode VN form |
| Filter | Live route + day · **cấm** toast giả lập |
| GPS | RO stored Lat/Lng only · **cấm** fake · **cấm** capture trên Giám sát |
| Empty | live only · empty/`[]` · **cấm** demo SSOT |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android · **cấm** MFE desktop Field |
| Entity/path | **cấm** invent `api/v1/supervise*` · reuse `attendance-logs` |

## 6. Persona

| Zone | Ai |
|------|-----|
| SUP-01…05 | Hạt trưởng giám sát / quản lý ca sau login |
| Guest | Redirect login (shell) |

## 7. Gaps

| ID | Default |
|----|---------|
| GAP-SUP-DOMAIN-MAP | DOMAIN-MAP thiếu row `web-rmms-supervise` · SA thêm · cite Patrol |
| GAP-SUP-FROMDATE | BE fromDate/toDate P2 · P1 client day filter |
| GAP-SUP-ORG | DTO thiếu OrgUnit · bind `Note` / fallback copy |
| GAP-SUP-STD-ROUTE | SCREENS `/supervise*` vs mfeStdRoute `/web-rmms-supervise` — follow STATUS |
| GAP-SUP-MAP | Segment Bản đồ → sibling `/patrol-map` · cấm toast |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T19:54:43.456Z` |
| mobile | — | — | — |
