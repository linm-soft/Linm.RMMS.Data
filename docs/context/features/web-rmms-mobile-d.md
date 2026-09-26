# Feature context — web-rmms-mobile-d

> **Slug:** `web-rmms-mobile-d` · **Wave:** D (Kết ca / bàn giao / tạm dừng · giao việc BDTX · sổ kiến nghị)  
> **Status:** po done → design pending · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (field master-adjacent · **cấm** demo HTML / tọa độ mẫu SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ **Maintenance** WO Live · Auth · Files · peer A–C) · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-mobile-d` · **mfeStdUrl:** `http://localhost:9301/web-rmms-mobile-d`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-d` · **cấm** iOS/Android native

## 1. Mục tiêu

Khép kín đợt D: **TD-06 kết ca / bàn giao / tạm dừng** · **TK-03 nút giao việc BDTX** (+ phản hồi BDTX trên TK-05) · **TK-06 sổ kiến nghị**.  
`PUT patrol/sessions/{id}` **Live** đổi trạng thái ca. Cột **handover/pause**, entity **petition**, nối **workOrderId** = `Schema_*` riêng **trước** form. WO gọi `POST maintenance/work-orders` **Live**.

## 2. Màn đợt D (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| TD-06 | `/field/tuan-duong/ket-ca` | Một chọn: Kết ca (`Hoàn thành`) · Bàn giao · Tạm dừng · PUT session |
| TK-03 | `/field/tuan-kiem/phieu/moi` (+ after id) | Nút **Giao đơn vị BDTX** → POST WO · lưu `workOrderId` · status `da-giao` |
| TK-05 | `/field/tuan-kiem/phieu/:id` | **Phản hồi BDTX** POST `…/feedback` · status `cho-kiem-tra` (delta D trên màn C) |
| TK-06 | `/field/tuan-kiem/kien-nghi` · `/moi` | List + tạo kiến nghị · GET\|POST `patrol/petitions` · **không** `notification/inbox` |

**Peer delta (cùng wave D, không màn mới):** TD-05 — scope `bdtx` → POST WO + `workOrderId`; `vuot-bdtx` → cờ `kien-nghi-khu` (không WO).

**Ngoài scope D:** TK-07 kế hoạch (E) · track GPS liên tục · native app.

**Peer A–C:** sessions/check-ins · journal-lines · findings/recheck/review.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / API | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · WEB-RMMS-D · TD-06 · TK-03 assign · TK-05 feedback · TK-06 |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` · GAP-TK-04 · đợt D |
| WO Live cite | `docs/plan/web-rmms-mobile/SCREENS.md` · `CreateWorkOrderRequest` |
| Peer A/B/C CTX | `web-rmms-mobile-a.md` · `b` · `c` |
| DOMAIN-MAP | Patrol · Maintenance · slug row D (SA thêm nếu thiếu) |
| Live | `PUT patrol/sessions/{id}` · `POST maintenance/work-orders` |
| Mới (chưa Live) | handover/pause columns · `Schema_PatrolPetition` · finding.feedback · finding.workOrderId |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| Kết ca / status | `PUT api/v1/patrol/sessions/{id}` | **Live** (Status) |
| Handover / pause fields | cùng PUT hoặc cột Schema session | **Mới** cột — ghép `Note` tạm đến khi Schema chốt |
| Giao WO | `POST api/v1/maintenance/work-orders` | **Live** · `IncidentId` trống · `Title`=mã tồn tại |
| Feedback finding | `POST api/v1/patrol/findings/{id}/feedback` | **Mới** |
| Petitions list/create | `GET\|POST api/v1/patrol/petitions` | **Mới** |
| Parent finding/session | peer C/A | Live / Mới C |
| Profile / Files | `auth/profile` · `files/*` | Live |
| Mobile BFF | `mobile-bff/api/v1` · cùng `{resource}` | plan |

## 5. Trạng thái / enum UI (keys — label qua useFormOptions)

| Key group | Values |
|-----------|--------|
| TD-06 action | `ket-ca` · `ban-giao` · `tam-dung` |
| session.Status | `Đang tuần` · `Hoàn thành` (+ pause semantics SA) |
| pauseReason | `su-co-mat-an-toan` · `cuu-nan` · `thien-tai` · `chay-no` · `bat-kha-khang` |
| finding.status (D deltas) | `da-giao` (sau WO) · `cho-kiem-tra` (sau feedback) |
| feedback.quality | `dat` · `chua-dat` |
| petition.kind | `hu-hong` · `hanh-lang` · `atgt` · `tuan-duong` · `khac` |
| petition.status | `moi` · (đóng khi phiếu `xong` hoặc lý do tay) |
| journal.scope (TD-05 D) | `bdtx` · `vuot-bdtx` |

## 6. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn nút cần tọa độ · **cấm** tọa độ mẫu · TD-06 **không** GPS · TK-06 GPS nếu hiện trường (không mặt → lưu không tọa độ + ghi «không có mặt») |
| Schema trước form | handover/pause · petition · workOrderId · feedback = Schema_* **trước** wire form |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP Patrol/Maintenance |
| MFE | **chỉ** `Linm.Web.RMMS.Mobile` · phone 430 · **cấm** desktop Asset · **cấm** iOS/Android |
| Petition | **không** dùng `notification/inbox` làm sổ kiến nghị |
| WO | Live Maintenance · không invent WO trong Patrol domain |

## 7. DoD data-analy (wave D)

- [x] CTX slug D + control-hint + real-data  
- [x] Screens TD-06 · TK-03 assign · TK-05 feedback · TK-06 bound  
- [x] Live vs Mới tách rõ · Schema-before-form  
- [x] Handoff compact → PO

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T10:16:09.978Z` |
| mobile | — | — | — |
