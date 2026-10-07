# Feature context — web-rmms-cam-journal

> **Slug:** `web-rmms-cam-journal` · **Title:** Camera nhật ký tuần đường  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master field · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** Asset/desktop MFE  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ FileService cite · Auth/profile cite) · **cấm ERP.*** / Domains/Master  
> **BFF:** `Linm.RMMS.Mobile.Bff` `:5202` · `VITE_MOBILE_API_URL=…/mobile-bff/api/v1` · **cấm** web-bff  
> **Product routes (đã có):** `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` · **cấm** route mới  
> **mfeStdUrl (STATUS):** `http://localhost:9301/web-rmms-cam-journal` — alias queue; deep-link product = routes trên  
> **Queue:** `/agent-qldb-workflow` · task `task_e44f140b` · **cấm** iOS/Android native  
> **Delta cite:** `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #3

## 1. Mục tiêu

Edit form camera nhật ký đã ship: **tuần đường** ghi dòng nhật ký + ảnh trên `JournalFormPage` / xem list trên `JournalListPage`. Tài khoản sau login chỉ thấy nghiệp vụ vai trên đúng form này. **Vai khác không tạo dòng.**

| Vai | Quyền trên form này |
|-----|---------------------|
| Tuần đường | Tạo / sửa dòng · chụp ảnh · GPS · Lưu POST/PUT |
| `QL_HAT` (`HAT-TRUONG`, `HAT-PHO`) | **Chỉ xem** list + dòng · **không** tạo/sửa · **không** nút Giao việc (ngoài scope slug này) |
| Tuần kiểm | **Chỉ xem** (đối chiếu peer C) · **không** tạo dòng |
| Nghiệm thu | **Chỉ xem** · **không** tạo dòng |

## 2. Màn (SSOT code)

| Id | Route | File | Việc |
|----|-------|------|------|
| JL-01 | `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` | `JournalFormPage.tsx` | Form tạo/sửa · `RouteCaptureControl` · GPS Pattern B · POST/PUT journal-lines |
| JL-02 | `/nhat-ky/:sessionId` | `JournalListPage.tsx` | List dòng ca · CTA «Ghi» / thêm (role-gate) · thẻ → JL-01 |

**Out:** route mới · web-bff · ERP Modal · SLA 24h · công thức tiền Mục IV · sửa native · nút Giao việc · tạo dòng từ TK/NT/QL_HAT.

## 3. Nguồn SSOT

| Source | Path |
|--------|------|
| Delta 3 vai | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |
| Peer B | `docs/context/features/web-rmms-mobile-b.md` |
| Code | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileB/JournalFormPage.tsx` · `JournalListPage.tsx` |
| API client | `…/services/patrol/endpoint.ts` · `patrolJournalLinesEndpoint` · `getJournalLines` |
| DOMAIN-MAP | Patrol · peer `web-rmms-mobile-b` · **GAP:** chưa có row slug `web-rmms-cam-journal` |

## 4. API Live (prefix)

| Surface | Path |
|---------|------|
| API | `GET patrol/sessions/{id}/journal-lines` · `GET/POST patrol/journal-lines` · `PUT patrol/journal-lines/{id}` · `GET patrol/sessions/{id}` |
| Mobile BFF (HARD) | `mobile-bff/api/v1` · **cấm** FE web-bff |
| Files | `files/init` · `files/{id}/object` · `files/commit` (qua `RouteCaptureControl`) |
| Profile / role | cite `web-rmms-role-gate` · `packageCode` / `roleCaps` · `QL_HAT` |

## 5. HARD

| Rule | |
|------|--|
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| Nhãn | `useFormOptions('web-rmms-mobile-b')` / JOURNAL_*_LOOKUP_STATIC · **cấm** hardcode VN mới nếu key có |
| GPS | Pattern B · deny → banner khi Lưu · **cấm** fake lat/lng |
| Role | chỉ tuần đường tạo/sửa; QL_HAT/TK/NT không tạo dòng |
| Phone | max-width 430px · align-mobile |
| BE | ONLY RMMS.WebService + DOMAIN-MAP |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| writtenAt | `2026-09-30T18:01:42.000Z` |
| taskId | `task_e44f140b` |
| changeScope | `edit_page` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-30T18:33:58.653Z` |
| mobile | — | — | — |
