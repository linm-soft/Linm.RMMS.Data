# Feature context — web-rmms-mobile-a

> **Slug:** `web-rmms-mobile-a` · **Wave:** A (Tuần đường / Tuần kiểm mobile web)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master-adjacent field hub · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** + Integration road-routes + FileService · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-mobile-a` · **mfeStdUrl:** `http://localhost:9301/web-rmms-mobile-a`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-a` · **cấm** iOS/Android native

## 1. Mục tiêu

Hub Field + mở ca tuần đường + check-in + lịch sử ca + hub / mở đợt tuần kiểm — **chỉ API Live** (sessions · check-ins · auth/profile · road-routes · files). Đợt A **không** làm API ghi Mới (journal-lines · findings · …).

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
| Mobile BFF (plan) | `mobile-bff/api/v1` · cùng resource |
| Catalog | `integration/road-routes/search` |
| Profile | `auth/profile` |
| Files | `files/init` · `files/{id}/object` · `files/commit` |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn nút cần tọa độ · **cấm** tọa độ mẫu |
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
| contentHashSource | `IMPLEMENT-SCREENS.md` + this file |
| writtenAt | `2026-09-25T06:34:00.000Z` |
| taskId | `task_7e2d0556` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T07:41:38.300Z` |
| mobile | — | — | — |
