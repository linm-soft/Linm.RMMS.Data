# Feature context — web-rmms-cam-checkin

> **Slug:** `web-rmms-cam-checkin` · **Title:** Camera check-in tuần đường  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master field · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** Asset/desktop MFE  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ FileService cite · Auth/profile cite) · **cấm ERP.*** / Domains/Master  
> **BFF:** `Linm.RMMS.Mobile.Bff` `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff  
> **Product routes (đã có):** `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` · **cấm** route mới  
> **mfeStdUrl (STATUS):** `http://localhost:9301/web-rmms-cam-checkin` — alias queue; deep-link product = routes trên  
> **Queue:** `/agent-qldb-workflow` · task `task_cdfedcf9` · **cấm** iOS/Android native  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #2

## 1. Mục tiêu

Edit form camera check-in đã ship: **tuần đường** chụp ảnh + ghi điểm tuần trên `CheckInSheet` / xem timeline trên `PatrolDetailPage`. Tài khoản sau login chỉ thấy nghiệp vụ vai trên đúng form này.

| Vai | Quyền trên form này |
|-----|---------------------|
| Tuần đường | Chụp · ghi điểm · (kết ca nếu đang mở) |
| `QL_HAT` (`HAT-TRUONG`, `HAT-PHO`) | **Chỉ xem** ca + điểm tuần · **không** POST check-in · **không** nút Giao việc (ngoài scope slug này) |
| Tuần kiểm | **Không mở ca** · không vào ghi điểm tuần |
| Nghiệm thu | **Không mở ca** · không ghi điểm |

## 2. Màn (SSOT code)

| Id | Route | File | Việc |
|----|-------|------|------|
| CI-01 | `/tuan-duong/:id/diem-tuan` | `CheckInSheet.tsx` | Sheet ghi điểm · `RouteCaptureControl` · GPS · plan match · POST check-ins |
| CI-02 | `/tuan-duong/:id` | `PatrolDetailPage.tsx` | Chi tiết ca · timeline check-ins RO/view · CTA ghi điểm (role-gate) |

**Out:** route mới · web-bff · ERP Modal · SLA 24h · công thức tiền Mục IV · sửa native · nút Giao việc · mở ca từ tuần kiểm/nghiệm thu.

## 3. Nguồn SSOT

| Source | Path |
|--------|------|
| Delta 3 vai | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| Peer A | `docs/context/features/web-rmms-mobile-a.md` |
| Code | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileA/CheckInSheet.tsx` · `PatrolDetailPage.tsx` |
| API client | `…/services/patrol/endpoint.ts` |
| DOMAIN-MAP | Patrol · peer `web-rmms-mobile-a` / `web-rmms-patrol-map` (check-ins Live) · **GAP:** chưa có row slug `web-rmms-cam-checkin` |

## 4. API Live (prefix)

| Surface | Path |
|---------|------|
| API | `api/v1/patrol/sessions/{id}` · `…/check-ins` · `…/plan-points` · `GET patrol/check-in-policy` |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · **cấm** FE web-bff |
| Files | `files/init` · `files/{id}/object` · `files/commit` (qua `RouteCaptureControl`) |
| Profile / role | cite `web-rmms-role-gate` · `packageCode` / `roleCaps` · `QL_HAT` |

## 5. HARD

| Rule | |
|------|--|
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| Nhãn | `useFormOptions('web-rmms-mobile-a')` / lookupStatic · **cấm** hardcode VN mới nếu key có |
| GPS | Pattern B · deny → banner khi Lưu · **cấm** fake lat/lng |
| Role | chỉ tuần đường ghi; QL_HAT xem; TK/NT không mở ca |
| Phone | max-width 430px · align-mobile |
| BE | ONLY RMMS.WebService + DOMAIN-MAP |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| writtenAt | `2026-09-30T17:18:26.000Z` |
| taskId | `task_cdfedcf9` |
| changeScope | `edit_page` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T18:00:06.951Z` |
| mobile | — | — | — |
