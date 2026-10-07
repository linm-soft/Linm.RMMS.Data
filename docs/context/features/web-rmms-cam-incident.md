# Feature context — web-rmms-cam-incident

> **Slug:** `web-rmms-cam-incident` · **Title:** Camera sự cố theo vai  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master field · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** Asset/desktop MFE  
> **BE:** `Linm.RMMS.WebService` · domain **Incident** (+ Patrol · Integration · FileService · Auth cite · Maintenance peer) · **cấm ERP.*** / Domains/Master  
> **BFF:** `Linm.RMMS.Mobile.Bff` `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff  
> **Product routes (đã có):** `/van-de` · `/van-de/moi` · `/van-de/:id` · **cấm** route mới  
> **mfeStdUrl (STATUS):** `http://localhost:9301/web-rmms-cam-incident` — alias queue; deep-link product = routes trên  
> **Queue:** `/agent-qldb-workflow` · task `task_770ceabe` · **cấm** iOS/Android native  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #4

## 1. Mục tiêu

Edit form camera sự cố đã ship: **tuần đường** tạo sự cố + ảnh trên `IncidentCaptureSheet` / create flow; **QL_HAT** xem mọi sự cố và nút **Giao việc xử lý** trên `IncidentDetailPage`; tuần kiểm xem không giao; nghiệm thu chỉ xem. Tài khoản sau login chỉ thấy nghiệp vụ vai trên đúng form này.

| Vai | Quyền trên form này |
|-----|---------------------|
| Tuần đường | Tạo sự cố · chụp ảnh · GPS · POST create · xem sự cố mình |
| `QL_HAT` (`HAT-TRUONG`, `HAT-PHO`) | Xem **mọi** sự cố · nút **Giao việc xử lý** · **không** suy từ `MANAGER-RMMS` |
| Tuần kiểm | **Chỉ xem** · **không** nút Giao việc |
| Nghiệm thu | **Chỉ xem** · **không** Giao việc · **không** tạo |

## 2. Màn (SSOT code)

| Id | Route | File | Việc |
|----|-------|------|------|
| INC-CAP | sheet trên `/van-de/moi` | `IncidentCaptureSheet.tsx` | Sheet chụp + pin · `RouteCaptureControl` · Hủy/Lưu ảnh |
| INC-N | `/van-de/moi` | `IncidentCreatePage.tsx` | Form ghi sự cố · mở capture · POST incidents |
| INC-D | `/van-de/:id` | `IncidentDetailPage.tsx` | Chi tiết RO · ảnh view · **Giao việc xử lý** (QL_HAT) · peer chat/estimate |
| INC-L | `/van-de` | `IncidentListPage.tsx` | List filter · FAB tạo (tuần đường) · CTA giao (QL_HAT only) |

**Out:** route mới · web-bff · ERP Modal · SLA 24 giờ · công thức tiền Mục IV · sửa native · form giao đầy đủ (peer `web-rmms-giao-viec-ql-hat`) · Giao việc ngoài `QL_HAT`.

## 3. Nguồn SSOT

| Source | Path |
|--------|------|
| Delta 3 vai | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| Peer incident | `docs/context/features/web-rmms-incident.md` |
| Code | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsIncident/IncidentCaptureSheet.tsx` · `IncidentDetailPage.tsx` · `IncidentCreatePage.tsx` · `IncidentListPage.tsx` |
| API client | `…/services/incident` · `incidentEndpoint` |
| DOMAIN-MAP | Incident · peer `web-rmms-incident` · **GAP:** chưa có row slug `web-rmms-cam-incident` |

## 4. API Live (prefix)

| Surface | Path |
|---------|------|
| API | `GET/POST incident/incidents` · `GET incident/incidents/{id}` · `POST …/{id}/close` (keep peer) |
| Cite | `GET patrol/sessions` · `GET integration/asset-types` · files / ai-vision uploads (capture) |
| Assign peer | Maintenance `work-orders` via `paths.workFor` · **full form** = peer `web-rmms-giao-viec-ql-hat` |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · **cấm** FE web-bff |
| Profile / role | cite `web-rmms-role-gate` · `packageCode` / `roleCaps` · `QL_HAT` |

## 5. HARD

| Rule | |
|------|--|
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| Nhãn | `useFormOptions('web-rmms-incident')` / INCIDENT_LOOKUP_STATIC · **cấm** hardcode VN mới nếu key có |
| GPS | Pattern B · deny → banner khi Lưu/Create · **cấm** fake lat/lng |
| Role | tuần đường create; QL_HAT mọi list + Giao việc; TK/NT view-only |
| SLA | **cấm** mặc định 24 giờ · hạn gợi ý Thông tư 41 PL IV trên form giao (peer) |
| Tiền | **cấm** công thức Mục IV |
| Align | `/align-mobile-to-mfe` · 430px · no new tab/route/icon |

## 6. Hash inputs

| Input | Value |
|-------|-------|
| CTX path | `docs/context/features/web-rmms-cam-incident.md` |
| demo | N/A |
| deltaCite | PLAN-3-VAI § enqueue #4 |
| taskId | `task_770ceabe` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T19:08:21.952Z` |
| mobile | — | — | — |
