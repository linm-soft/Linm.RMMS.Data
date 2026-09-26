# Feature context — web-rmms-mobile-b

> **Slug:** `web-rmms-mobile-b` · **Wave:** B (Tuần đường — sổ + dòng nhật ký)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (field master-adjacent · **cấm** demo HTML / tọa độ mẫu SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ Auth · Files · Integration peer) · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-mobile-b` · **mfeStdUrl:** `http://localhost:9301/web-rmms-mobile-b`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-b` · **cấm** iOS/Android native

## 1. Mục tiêu

Trong ca tuần đường đang mở: **sổ nhật ký (TD-04)** + **tạo/sửa dòng nhật ký (TD-05)**. API ghi **Mới** `journal-lines` — SA/Dev pair **entity + `Schema_PatrolJournalLine` trước form**. Check-in (TD-03) **không** hiện trong list sổ.

## 2. Màn đợt B (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| TD-04 | `/field/tuan-duong/nhat-ky` | List dòng của ca · empty «Chưa ghi việc» · thẻ → TD-05 · thêm → TD-05 tạo |
| TD-05 | `/field/tuan-duong/nhat-ky/moi` · `/field/tuan-duong/nhat-ky/:lineId` | Form tạo/sửa dòng · GPS HARD · Lưu POST/PUT |

**Ngoài scope B:** TD-06 kết ca · TK-02…07 · giao WO `POST maintenance/work-orders` / cờ vượt BDTX (đợt D) · findings tuần kiểm (đợt C).

**Peer A (đã có):** TD-00…03 · TD-07 · TK-00/01 — nav từ TD-01 «Sổ / Ghi nhật ký» mở TD-04/05.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / API Mới | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · WEB-RMMS-B · TD-04/05 |
| Gap nghiệp vụ | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` · §2 dòng nhật ký tuần đường |
| Peer wave A | `docs/context/features/web-rmms-mobile-a.md` · control-hint/real-data A |
| Peer desktop CTX | `docs/context/features/patrol.md` · `docs/context/24-TUAN-DUONG-DUONG-BO.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol |
| Live parent | `PatrolSession` · `GET patrol/sessions/{id}` (ca đang mở) |
| Mới (chưa Live) | Entity `PatrolJournalLine` · `Schema_PatrolJournalLine` · routes journal-lines |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| List dòng | `GET api/v1/patrol/sessions/{id}/journal-lines` | **Mới** |
| Tạo / sửa | `POST` · `PUT api/v1/patrol/journal-lines/{id}` | **Mới** |
| Ca parent | `GET api/v1/patrol/sessions/{id}` · list `status=Đang tuần` | Live |
| Profile | `GET auth/profile` | Live |
| Files | `files/init` → `object` → `commit` | Live |
| Mobile BFF | `mobile-bff/api/v1` · cùng `{resource}` | plan |
| Web BFF cite | `web-bff/api/v1/patrol/...` | cite |

## 5. Trạng thái dòng / enum UI (keys — label qua useFormOptions)

| Key group | Values |
|-----------|--------|
| status | `phat-hien` · `dang-xu-ly` · `cho-kiem-tra` · `xong` |
| weather | `nang` · `mua` · `mu` · `lu` · `bao` · `khac` |
| kind | `kcht` · `hanh-lang` · `tngt` · `un-tac` · `xe-hong` · `chuong-ngai` · `chay` · `thoi-tiet` · `atgt` |
| direction | `chieu-di` · `chieu-ve` · `hai-chieu` (default từ ca / Note `chieu=`) |
| reportedTo | `tuan-kiem` (nút đánh dấu — **chưa** tạo phiếu TK-03) |
| scope (đợt D) | `bdtx` · `vuot-bdtx` — **out of B write** |

## 6. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn Lưu TD-05 · **cấm** tọa độ mẫu |
| Schema trước form | Entity + `Schema_PatrolJournalLine` pair **trước** wire form |
| Check-in ≠ journal | List TD-04 **không** gồm check-in |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP Patrol |
| Shell | Phone 430 · **cấm** desktop MFE · **cấm** iOS/Android |

## 7. Persona

| Màn | Ai |
|-----|-----|
| TD-04 / TD-05 | Nhân viên tuần đường (BDTX) trong ca `Đang tuần` + `PatrolType=Tuần đường` |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `IMPLEMENT-SCREENS.md` TD-04/05 + this file |
| writtenAt | `2026-09-25T07:50:00.000Z` |
| taskId | `task_372668d4` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T08:36:15.959Z` |
| mobile | — | — | — |
