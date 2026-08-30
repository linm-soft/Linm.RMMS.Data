# Công trình KCHT (Khu QLĐB IV) — Feature Context

> **Slug:** `kcht-cong-trinh` · **Module:** Contract × Master × Report  
> **Phase:** CR ngoài PL01 P1-900 (công văn KQLĐB IV 08/2026)  
> **Status:** Context · Wave 1 `done` · **wave PH2–PH4** edit_page · PH5 park · [wave SSOT](../../data/analyzed/kcht-wave-ph2-ph4.md)  
> **sourceKind:** **synthetic** — công văn khách, không màn GOVOne  
> **Sources:** [`docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md`](../../tinh-nang/Cung-cap-thong-tin-phan-mem.md) · `.doc` gốc cùng thư mục · **PH4/PH5 form nguồn** [`docs/data/analyzed/kcht-giai-ngan-03-sheet.md`](../../data/analyzed/kcht-giai-ngan-03-sheet.md) (SRC-KCT-GN03) · index [`docs/data/SOURCE-TRACKING.md`](../../data/SOURCE-TRACKING.md)  
> **Plan:** [`../../plan/kcht-cong-trinh/PLAN.md`](../../plan/kcht-cong-trinh/PLAN.md)  
> **≠** `asset` / `csdl-so-sach` (danh mục TS hiện trạng) · `maintenance` (WO BDTX) · `feedback` (góp ý PM)  
> **Reuse:** `contract` · `road-route` · `org-unit` · `partner-unit` · `users` · `dashboard` / `reports` · FileService  
> **API / route:** PH1 live `api/v1/kcht-ct/projects` · PH2–PH4 path = **GAP** đến SA · **cấm** invent runtime

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Phần mềm quản lý **công trình KCHT** Khu QLĐB IV: hồ sơ CT · nhiều HĐ/CT · đoạn tuyến + bảo hành · tiến độ tuần (RAG) · giải ngân / đối chiếu KBNN · báo cáo + dashboard + RBAC 111 user |
| Persona | Lãnh đạo Khu · Phòng QLBT / QL-TCGT / KHTC · VP IV.1–IV.4 · Ban QLDA miền Nam · Cục ĐBVN (xem) · Cán bộ CĐS (admin) |
| App hiện có | **Không** có phân hệ này trên GOVOne / demo P1. `contract` = HĐ bảo trì mỏng (1 HĐ ≈ 1 bản ghi), thiếu parent **Công trình** |
| Khách | Công văn Khu QLĐB IV gửi **Công ty Miền Trung** — số `/KQLĐBIV-QLBT` · 08/2026 |
| DoD wave 1 | CRUD công trình + quyết định + child HĐ (map `contract`) + list Kind B |
| DoD wave 2–3 | Đoạn tuyến / bảo hành + cảnh báo 90/60/30 · tiến độ tuần + đèn RAG + cảnh báo tự động |
| DoD wave 4–5 | Giải ngân + upload chứng từ FileService + đối chiếu KBNN · 4 loại BC + dashboard login |

## 2. Design / UI (đề xuất — Design chốt)

| Screen | Pattern đề xuất | Ghi chú |
|--------|-----------------|---------|
| Dashboard login toàn Khu | Kind E / hub KPI | 10 chỉ tiêu công văn § Dashboard |
| List công trình | Kind **B** A–D+F | Filter QL · tỉnh · loại · Ban QLDA · nhà thầu · người PT |
| Form hồ sơ CT | **Full-page** | Tab: Chung · Quyết định · Hợp đồng (1–n) · Hồ sơ file |
| Đoạn tuyến / bảo hành | Kind B + full-page | Trạng thái 6 giá trị · badge cảnh báo BH |
| Tiến độ tuần | Kind B list tuần + form | Header auto từ CT · body user nhập · đèn RAG |
| Giải ngân | Kind B + child thanh toán | 1 lần TT = 1 giao dịch · attach KBNN |
| Đối chiếu KBNN | Report / grid 3 cột | PM × KBNN × chênh lệch |
| Báo cáo 1–4 | Kind E `reportToolbar` | Excel / In / Config — cấm action trên filter |

**Cấm** Slideout form hồ sơ CT. **Cấm** hardcode label VN — `useFormOptions()`.  
**2e IdCode (đề xuất):** `CT-yyyyMMdd-nnnn` — SA + `IIdCodeService.GenerateAsync()`.

## 3. API — map sẵn có vs GAP

**Cấm invent runtime.** Cột READY = đã có trong repo. Cột GAP = SA phải chốt.

| Nhu cầu công văn | Slug / API sẵn | Status |
|------------------|----------------|--------|
| Tuyến QL + lý trình | `road-route` · LRS | READY master |
| Đơn vị QL / phòng / VP / Ban QLDA | `org-unit` seed `REG-IV*` · `SU-BQLDA-S` | READY master |
| Nhà thầu | `partner-unit` · `contract.contractorId` | READY một phần — thiếu TVGS / QLDA role trên HĐ |
| HĐ + dòng thanh toán | `api/v1/hd-ns/contracts` · `rmms_contract_payments` | READY mỏng — **1 HĐ ≠ 1 CT**; thiếu loại TVTK/TVGS/XL/QLDA |
| Ngân sách / đã giải ngân | `Budget` / `Disbursed` trên Contract | DEFER / field mỏng — **không** đủ KH vốn + đối chiếu KBNN |
| Bảo hành | `Warranty` trên Contract (tháng / ExpiresAt) | P2 field — **không** đủ đoạn tuyến + 6 trạng thái + 90/60/30 |
| User + phân quyền | `users` · `login` · JWT `company_id` | READY khung — thiếu 5 nhóm công văn |
| Hồ sơ PDF/Word/Excel/ảnh | FileService · `/integrate-file-upload-web` | Platform READY — **chưa** bind entity CT / TT |
| Dashboard KPI tuần đường / SC | `dashboard` · `reports` | READY **domain khác** — không có KPI công trình |
| Công trình parent | — | **GAP-KCT-01** |
| Tiến độ tuần + RAG + cảnh báo | — | **GAP-KCT-02** |
| Kế hoạch vốn + đối chiếu KBNN | — | **GAP-KCT-03** |
| Báo cáo 1–4 công văn | — | **GAP-KCT-04** — form nguồn = PH1–4 |

Prefix đề xuất (SA confirm): `api/v1/kcht-ct/…` · **cấm** `api/v1/rmms/*` · **cấm ERP.***

## 4. Database (đề xuất — SA + `/database-migration`)

| Entity đề xuất | Vai trò | Map sẵn |
|----------------|---------|---------|
| `KchtProject` (Công trình) | Parent hồ sơ | **NEW** |
| `KchtProjectDecision` | QĐ chủ trương / phê duyệt / điều chỉnh | **NEW** |
| `KchtProjectContract` | 1–n HĐ / CT | FK → `contract` **hoặc** widen Contract + `ProjectId` |
| `KchtRouteSegment` | Đoạn tuyến + bảo hành | Widen `ContractRoute` **hoặc** NEW |
| `KchtWeeklyProgress` | 1 dòng / CT / tuần | **NEW** |
| `KchtCapitalPlan` | KH vốn năm + điều chỉnh | Widen `Budget` **hoặc** NEW |
| `KchtDisbursement` | 1 giao dịch giải ngân | Widen `Payment` + chứng từ FileService |
| `KchtKbnCompare` | Đối chiếu PM × KBNN | **NEW** read-model |

Mọi entity tenant: `TenantEntity` + `ICompanyContext`. DateTime UTC. Schema pair CLI `Schema_KchtCongTrinh*` · Schema ≠ Seed.

## 5. Events / tích hợp

| Event (đề xuất) | Publisher | Consumer |
|-----------------|-----------|----------|
| `kcht.project.created` | PH1 | Dashboard · PH3 header |
| `contract.signed` | `contract` (đã DEFER) | PH2 trạng thái · PH3 cảnh báo HĐ |
| `kcht.weekly.submitted` | PH3 | RAG · cảnh báo chậm / chưa cập nhật |
| `kcht.disbursement.posted` | PH4 | Đối chiếu · BC giải ngân |
| `kcht.warranty.expiring` | job | Dashboard · PH2 badge |

File bytes: FileService Hub/Cloud — **không** lưu trên DB nghiệp vụ.

## 6. Gaps / quyết định

| ID | Câu hỏi | Default (chờ confirm) |
|----|---------|------------------------|
| GAP-KCT-01 | Công trình = entity mới hay nhồi vào `contract`? | **Entity mới** — 1 CT : n HĐ |
| GAP-KCT-02 | Host MFE | Ứng viên `Linm.Web.RMMS.Contract` (cùng HĐ) — SA/TL tick `ui_repo_confirm` |
| GAP-KCT-03 | Widen Payment vs bảng giải ngân mới | Bảng mới + optional link `contract` payment |
| GAP-KCT-04 | Import số liệu KBNN | P2 — đối chiếu tay + file Excel trước API KBNN |
| GAP-KCT-05 | Dung lượng 1 TB | Tư vấn FileService Hub volume — không hardcode 1TB trên app |
| GAP-KCT-06 | Nhóm 4 thiếu trong công văn | Bỏ qua — map 1/2/3/5/6 |
| GAP-KCT-07 | Phạm vi địa lý | Pilot **Khu IV** (`REG-IV` + VP IV.1–4 + `SU-BQLDA-S`) — không lock demo CUC 2 |
| GAP-KCT-08 | Trong / ngoài HĐ 37001 JNET | **Ngoài** PL01 900tr — CR / báo giá riêng |
| GAP-KCT-09 | Báo cáo trước form nguồn | Fail-closed `data-analy-report-source-form` — PH5 sau PH1–4 |

## 7. Demo checklist (chưa chốt khách)

- [ ] List CT đủ filter công văn
- [ ] Form 1 CT nhiều HĐ + file hồ sơ
- [ ] Bảo hành 6 trạng thái + badge 90/60/30
- [ ] Tiến độ tuần + đèn RAG + 3 nhóm cảnh báo
- [ ] 1 lần thanh toán = 1 giao dịch + upload KBNN
- [ ] Bảng đối chiếu 3 cột
- [ ] Dashboard 10 KPI khi login
- [ ] RBAC 5 nhóm · seed 111 slot (không bắt buộc đủ user thật)
- [ ] `sourceKind=synthetic` · không chrome GOVOne

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `await_confirm` | `2026-08-29T05:30:55.677Z` |
| mobile | — | — | — |
