# Feature context — web-rmms-mobile-a

> **Slug:** `web-rmms-mobile-a` · **Wave:** A (Tuần đường / Tuần kiểm mobile web)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master-adjacent field hub · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** + Integration road-routes + FileService · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/tuan-duong/mo-ca` · **mfeStdUrl:** `http://localhost:9301/tuan-duong/mo-ca`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-a` · **cấm** iOS/Android native

## 1. Mục tiêu

Hub Field + mở ca tuần đường + check-in + lịch sử ca + hub / mở đợt tuần kiểm — **chỉ API Live** (sessions · check-ins · auth/profile · road-routes · users · files). Đợt A **không** làm API ghi Mới (journal-lines · findings · …).  
**Edit (`changeScope=edit_page`):** cite `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` — Pattern B submit · no road-route seed · users resolve · `mobileApiBase()` only.

## 2. Màn đợt A (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| TD-00 | `/field` | Hub Field · cửa Tuần đường / Tuần kiểm |
| TD-01 | `/field/tuan-duong` | Ca tuần đường đang mở / empty |
| TD-02 | `/field/tuan-duong/mo-ca` | Mở ca · `POST patrol/sessions` |
| TD-03 | `/field/tuan-duong/check-in` | Check-in sheet · `POST …/check-ins` |
| TD-07 | `/field/tuan-duong/lich-su` | Lịch sử ca tuần đường |
| TK-00 | `/field/tuan-kiem` | Hub tuần kiểm |
| TK-01 | `/field/tuan-kiem/mo-dot` | Mở đợt · `POST` · `PatrolType=Tuần kiểm` |

**Ngoài scope A:** TD-04/05/06 · TK-02…07 (đợt B–E).

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / API Live | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · WEB-RMMS-A |
| Gap nghiệp vụ | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` |
| Peer desktop CTX | `docs/context/features/patrol.md` · `docs/context/24-TUAN-DUONG-DUONG-BO.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol |
| API | `PatrolSessionsController` · `PatrolSessionsBffController` |
| DTO | `PatrolSessionDtos.cs` · `PatrolCheckInDtos.cs` |
| Entity | `PatrolSessionEntity` · `PatrolCheckInEntity` · `rmms_patrol_sessions` / `rmms_patrol_check_ins` |

## 4. API Live (prefix)

| Surface | Prefix |
|---------|--------|
| API | `api/v1/patrol/sessions` (+ `/{id}/check-ins` · `/{id}/plan-points`) |
| Web BFF (cite) | `web-bff/api/v1/patrol/sessions` |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** FE gọi web-bff |
| Catalog | `integration/road-routes/search` · **no seed** · miss → `--` |
| Người TD-02/TK-01 | `GET patrol/actors` · user/emp theo quyền tuần · default = nhân viên đang đăng nhập |
| Users (kết ca) | `integration/users?search=` · Mobile.Bff forward |
| Profile | `auth/profile` |
| Files | `files/init` · `files/{id}/object` · `files/commit` |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · Pattern B: deny → báo **khi bấm** submit · **cấm** khóa nút trước · **cấm** tọa độ mẫu |
| Ca đang mở | `GET patrol/sessions?status=Đang tuần` · lọc `PatrolType` client |
| Không mở ca trùng | cùng user + tuyến + loại đang `Đang tuần` → về hub ca |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP |

## 6. Persona

| Màn | Ai |
|-----|-----|
| TD-* | Nhân viên tuần đường (BDTX) |
| TK-* | Cán bộ QLĐB (VP / Khu) — không lẫn ca tuần đường |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `IMPLEMENT-SCREENS.md` + `SUBMIT-VALIDATE.md` + this file |
| writtenAt | `2026-09-27T06:39:33.767Z` |
| taskId | `task_0a76198d` |
| changeScope | `edit_page` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T14:54:24.188Z` |
| mobile | — | — | — |
