# PLAN — Module Công trình KCHT (Khu QLĐB IV)

> **Slug:** `kcht-cong-trinh`  
> **Nguồn:** công văn [`Cung-cap-thong-tin-phan-mem.md`](../../tinh-nang/Cung-cap-thong-tin-phan-mem.md)  
> **Context:** [`../../context/features/kcht-cong-trinh.md`](../../context/features/kcht-cong-trinh.md)  
> **Tracking:** [`../../context/FEATURE-TRACKING.md`](../../context/FEATURE-TRACKING.md)  
> **Ngày:** 2026-08-27  
> **Slash implement:** `/agent-qldb-workflow` bắt đầu `/agent-data-analy` mode `feature_context`  
> **Cấm** `yarn run-implement` MAIN3 trước data-analy + board Approve.

---

## Kết luận

Công văn KQLĐB IV **không** mô tả tuần đường / tài sản hiện trạng. Đó là **QLDA công trình vốn** (hồ sơ CT → nhiều HĐ → bảo hành đoạn tuyến → tiến độ tuần → giải ngân KBNN → báo cáo lãnh đạo).

Hệ thống RMMS **đã có nền** (tuyến, tổ chức Khu IV, HĐ mỏng, user, FileService, dashboard khung) nhưng **thiếu parent Công trình** và 4 phân hệ vận hành. Không fork `contract` thành CT; **mở rộng** quanh `contract` + master.

Ngoài PL01 P1-900 (HĐ JNET). Release = **CR-Khu-IV** / báo giá riêng.

---

## Map sẵn có (chi tiết)

| Công văn | Slug sẵn | Dùng được | Thiếu |
|----------|----------|-----------|--------|
| Tuyến QL + Km | `road-route` | LRS, SearchInput tuyến | Nhiều đoạn rời trên 1 CT (vd. Km0–1 và Km2–2+345) |
| Đơn vị / phòng / VP IV.* | `org-unit` `REG-IV*` · `VP-IV.*` | Seed 60 node | Map 111 user → node |
| Ban QLDA miền Nam | `org-unit` `SU-BQLDA-S` | Có trong seed | Role cập nhật tiến độ/HĐ/NT |
| Cục ĐBVN xem | `org-unit` HQ / ADV | Có | Role export-only nhóm 6 |
| Nhà thầu | `partner-unit` | CRUD đối tác | TVGS / TVTK là HĐ-role, không phải partner kind |
| HĐ + thanh toán | `contract` READY | CRUD HĐ, payment lines, bảo hành tháng | Parent CT · loại HĐ 5 loại · phụ lục · gia hạn · ngày HT sau GH |
| WO / BDTX | `maintenance` | **Không** dùng làm CT | Domain khác (công việc sửa chữa thường xuyên) |
| TS / 12 biểu | `asset` · `csdl-so-sach` | Hạng mục cầu/cống **tham chiếu** | Không thay hồ sơ CT |
| KPI login | `dashboard` | Pattern thẻ | Số liệu tuần đường/SC — **không** KPI CT |
| BC Excel | `reports` + `rpt-*` | `reportToolbar` | 4 BC công văn **NEW** — form nguồn PH1–4 |
| User / JWT | `users` · `login` | 111 slot khả thi | 5 nhóm công văn (thiếu nhóm 4) |
| File hồ sơ | FileService | Presign · Hub 1TB | Bind `attachmentId` vào CT / giải ngân |
| Open API | `integration` | Sau khi CT ổn | Adapter KBNN = P2 |

---

## Quyết định plan (chốt tạm — SA/PO confirm)

| # | Quyết định | Lý do |
|---|------------|--------|
| D1 | Slug một hub `kcht-cong-trinh` — 5 phân hệ = screen trong pack, không 5 feature queue song song | 1 lock / feature |
| D2 | Entity `KchtProject` NEW · HĐ child map `contract` | Công văn: 1 CT : n HĐ |
| D3 | Host UI ứng viên `Linm.Web.RMMS.Contract` | Cùng domain HĐ; TL tick repo |
| D4 | BE `Linm.RMMS.WebService` domain mới / widen Contract | **cấm ERP.*** |
| D5 | PH5 báo cáo **sau** PH1–4 | `data-analy-report-source-form` |
| D6 | Đối chiếu KBNN P1 = nhập/Excel; API KBNN P2 | Không giả cổng kho bạc |
| D7 | FileService cho mọi chứng từ | Không byte trên DB CT |
| D8 | Pilot tenant Khu IV | Seed `REG-IV` — không CUC 2 |

---

## Wave thực hiện

### Wave 0 — Docs (xong turn này)

| # | Việc | DoD |
|---|------|-----|
| 0.1 | Extract công văn UTF-8 | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` |
| 0.2 | Feature context + GAP | `features/kcht-cong-trinh.md` |
| 0.3 | STATUS draft | `specs/kcht-cong-trinh/STATUS.md` |
| 0.4 | Tracking + backlog | FEATURE-TRACKING · features/README |

### Wave 1 — Hồ sơ công trình (PH1)

| # | Agent | Việc |
|---|-------|------|
| 1.0 | data-analy | control-hint + `{slug}-real-data.md` — **cấm** bịa cột |
| 1.1 | PO | AC PH1: CRUD CT · QĐ · 1–n HĐ · filter |
| 1.2 | Design | Kind B list + full-page 3 tab · reviewUrl · `peerStdUrl` |
| 1.3 | SA | Entity + FK contract · route `api/v1/…` · EF `Schema_KchtCongTrinh` |
| 1.4 | TL | Task pack list+form+perm · BE/UI checkbox |
| 1.5 | Dev | Implement + build PASS + migration pair |
| 1.6 | QA → Review | mfeStdUrl |

### Wave 2 — Đoạn tuyến + bảo hành (PH2)

Reuse `ContractRoute` hoặc bảng đoạn. 6 trạng thái. Job cảnh báo 90/60/30. Map hạng mục cầu/cống → `asset` **tham chiếu** (không bắt buộc tạo TS).

### Wave 3 — Tiến độ tuần (PH3)

Header auto từ CT/HĐ. Form tuần: % · giá trị · tình hình · tuần tới · tồn tại · nguyên nhân (lookup) · giải pháp · đèn RAG. Cảnh báo 3 nhóm (tiến độ / giải ngân / BH). Job “chưa cập nhật tuần này”.

### Wave 4 — Giải ngân (PH4)

KH vốn (đầu năm / bổ sung / ± / tiết kiệm). 1 lần TT = 1 giao dịch. Upload 6 loại chứng từ FileService. Lưới đối chiếu 3 cột. **Cấm** giả API KBNN.

### Wave 5 — Báo cáo + dashboard + RBAC (PH5)

4 BC + dashboard 10 KPI. Seed role 5 nhóm. 111 user = capacity, không bắt buộc seed đủ tài khoản.

---

## Queue / slash

```
/agent-qldb-workflow
  → /agent-data-analy   mode=feature_context  slug=kcht-cong-trinh
  → board Approve PO → Design → SA → TL → Dev → QA → Review
```

**Không** `/erp-feature` (đây là QLBD).  
**Không** queue `qlbd-mobile` wave 1 (công văn = web Khu / Cục).  
Báo cáo: `/erp-report-context` **sau** form nguồn.  
File: `/integrate-file-upload-web` wave 4.  
Schema: `/database-migration` cùng PR Dev.

---

## Rủi ro

| Rủi ro | Xử lý |
|--------|--------|
| Nhồi CT vào `contract` → vỡ 1–n HĐ | D1/D2 entity mới |
| Làm BC trước hồ sơ | D5 fail-closed |
| Demo CUC 2 / QL.1 làm seed Khu IV | D8 |
| Coi module này = `maintenance` | Tách domain |
| 1 TB trên API domain | FileService Hub · tư vấn dung lượng |

---

## Next

1. Board `/qldb-workflow` — enqueue `kcht-cong-trinh` `roleOnly=data_analy`  
2. PO confirm D1–D8 + GAP-KCT-01…09  
3. Báo giá CR-Khu-IV (ngoài 900tr) khi khách chốt wave
