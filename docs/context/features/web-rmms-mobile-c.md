# Feature context — web-rmms-mobile-c

> **Slug:** `web-rmms-mobile-c` · **Wave:** C (Tuần kiểm — danh mục tồn tại · phiếu · đối chiếu · kiểm tra lại)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (field master-adjacent · **cấm** demo HTML / tọa độ mẫu SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (+ Auth · Files · Integration peer · journal-lines peer B) · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-mobile-c` · **mfeStdUrl:** `http://localhost:9301/web-rmms-mobile-c`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-mobile-c` · **cấm** iOS/Android native

## 1. Mục tiêu

Trong đợt tuần kiểm đang mở: **danh mục tồn tại (TK-02)** · **tạo phiếu (TK-03)** · **đối chiếu nhật ký tuần đường (TK-04)** · **chi tiết + kiểm tra lại (TK-05)**. API ghi **Mới** `findings` / `recheck` / `review` — SA/Dev pair **entity + `Schema_PatrolFinding` (+ review trên journal-line) trước form**.

## 2. Màn đợt C (SSOT screens)

| Id | Route | Việc |
|----|-------|------|
| TK-02 | `/field/tuan-kiem/ton-tai` | List findings theo đợt · lọc status/route · thẻ → TK-05 · **Tạo phiếu** → TK-03 |
| TK-03 | `/field/tuan-kiem/phieu/moi` | Form tạo phiếu · GPS HARD · POST finding · status `phat-hien` → TK-05 |
| TK-04 | `/field/tuan-kiem/doi-chieu` | Chọn ca tuần đường · list journal-lines · `khop`/`lech` · lập phiếu từ lệch |
| TK-05 | `/field/tuan-kiem/phieu/:id` | Chi tiết RO · **Kiểm tra lại** POST recheck (C) |

**Ngoài scope C:** TK-06 sổ kiến nghị · TK-07 kế hoạch · nút **Giao đơn vị BDTX** / `POST maintenance/work-orders` (đợt D) · `POST …/feedback` phản hồi BDTX (đợt D).

**Peer A:** TK-00 hub · TK-01 mở đợt · TD sessions Live. **Peer B:** journal-lines (TD-04/05) — TK-04 đọc list + `PUT …/review`.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / API Mới | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · WEB-RMMS-C · TK-02…05 |
| Gap nghiệp vụ | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` · GAP-TK-01…03 · đợt C |
| Peer wave A/B | `docs/context/features/web-rmms-mobile-a.md` · `web-rmms-mobile-b.md` |
| Peer desktop CTX | `docs/context/features/patrol.md` · `docs/context/24-TUAN-DUONG-DUONG-BO.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol · slug row C (SA thêm nếu thiếu) |
| Live parent | `PatrolSession` · `GET patrol/sessions` (đợt TK + ca TD) |
| Peer B Mới | `PatrolJournalLine` · journal-lines + review |
| Mới (chưa Live) | Entity `PatrolFinding` · `Schema_PatrolFinding` · recheck · review |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| List findings | `GET api/v1/patrol/findings?sessionId&status&route` | **Mới** |
| Tạo phiếu | `POST api/v1/patrol/findings` · server sinh `code` | **Mới** |
| Chi tiết | `GET api/v1/patrol/findings/{id}` | **Mới** |
| Kiểm tra lại | `POST api/v1/patrol/findings/{id}/recheck` | **Mới** |
| Review dòng TD | `PUT api/v1/patrol/journal-lines/{id}/review` | **Mới** (peer B entity) |
| Journal list | `GET api/v1/patrol/sessions/{id}/journal-lines` | **Mới** peer B |
| Ca / đợt | `GET api/v1/patrol/sessions` · `{id}` | Live |
| Profile / Files | `auth/profile` · `files/*` | Live |
| Mobile BFF | `mobile-bff/api/v1` · cùng `{resource}` | plan |
| Web BFF cite | `web-bff/api/v1/patrol/...` | cite |

**Out C write:** `POST …/feedback` · `POST maintenance/work-orders` (D).

## 5. Trạng thái / enum UI (keys — label qua useFormOptions)

| Key group | Values |
|-----------|--------|
| finding.status | `phat-hien` · `da-giao` · `cho-kiem-tra` · `xong` |
| source | `tuan-duong` · `nha-thau` · `trung-tam` · `nguoi-dan` · `tai-cho` |
| findingKind | `hu-hong` · `tuan-duong` · `hanh-lang` · `atgt` · `thi-cong` · `tngt` · `kien-nghi` |
| side | `trai` · `phai` · `tim` · `hanh-lang` · `hai-ben` |
| scope | `bdtx` · `vuot-bdtx` |
| review | `khop` · `lech` |
| recheckResult | `dat` · `chua-dat` |
| hangMuc | nền · mặt · cầu · cống · hầm · thoát nước · ATGT · hộ lan · biển · dải phân cách · thiết bị · thi công (LOOKUP keys) |
| violationAction | `lap-bien-ban` · `de-nghi-vphc` (nếu `hanh-lang`) |

## 6. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn Lưu TK-03 / Xác nhận recheck TK-05 · **cấm** tọa độ mẫu |
| Schema trước form | Entity + `Schema_PatrolFinding` (+ review journal) pair **trước** wire form |
| Prefill TK-04→03 | dùng lat/lng dòng journal · **không** GPS mới trừ user bấm lấy lại |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP Patrol |
| Shell | Phone 430 · **cấm** desktop MFE · **cấm** iOS/Android |

## 7. Persona

| Màn | Ai |
|-----|-----|
| TK-02…05 | Cán bộ tuần kiểm trong đợt `Đang tuần` + `PatrolType=Tuần kiểm` |
| TK-04 | Đọc ca tuần đường cùng tuyến (Hoàn thành / Đang tuần) |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `IMPLEMENT-SCREENS.md` TK-02…05 + this file |
| writtenAt | `2026-09-25T08:45:00.000Z` |
| taskId | `task_2a2290a0` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T09:27:10.387Z` |
| mobile | — | — | — |
