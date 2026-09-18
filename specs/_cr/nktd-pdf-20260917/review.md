# Review — PDF Nhật ký tuần đường vs live web

| Field | Value |
|-------|-------|
| reviewedAt | 2026-09-17 |
| PDF | `docs/tinh-nang/Nhat Ky Tuan duong.pdf` · extract [nhat-ky-tuan-duong-pdf.md](../../../docs/data/analyzed/nhat-ky-tuan-duong-pdf.md) |
| Form live | `http://localhost:9301/csdl-so-02` · STATUS `csdl-so-02` **done** |
| Report live | `http://localhost:9311/bao-cao/nk-td` · STATUS `rpt-nhat-ky-tuan-duong` **done** (seed / check-in) |
| Verdict | **CR P1** — không mở CRUD trên report · sửa nguồn sổ + đổi query report |

## 1. Kết luận

Sổ giấy (bìa Công ty QL&XD ĐB Khánh Hòa · Quyển số · Từ Km–Km · NV tuần đường) = **Sổ 02 / TT 41 PL VIII**. Web **đã có** màn tạo data (`csdl-so-02`) và màn xem Kind E. Lệch chính: báo cáo **không đọc** dòng sổ vừa nhập.

## 2. Map bìa PDF → form `/csdl-so-02`

| PDF bìa | Live field | Gap |
|---------|------------|-----|
| Quyển số | `bookNo` * | OK |
| Công ty / nhà thầu | `contractor` * text | OK P1 · SearchInput partner **DEFER** GAP-CSDL-ORG-01 |
| QL / tuyến | `roadCode` SearchInput | OK |
| Từ Km – Km | `kmFrom` * · `kmTo` | OK |
| Nhân viên tuần đường | `patrolStaff` * text | OK P1 |
| Ngày / năm quyển | `periodStart` * · `periodEnd` | OK |
| — | `province` | **thừa** so bìa — giữ P1 filter list, không in sổ |
| — | `status` tot/tb/kem/hong | **thừa** so bìa — **không** map cột giấy |
| — | `code` `SO-` | hệ thống — giữ |

## 3. Map dòng sổ → entries + report

| Cột giấy (TT 41 / T-SO-02) | Form entry | Report grid live | Gap |
|----------------------------|------------|------------------|-----|
| Ngày giờ kiểm tra | `eventAt` * datetime | `day` / `checkedAt` | Form OK · report lấy **check-in** `PatrolCheckIns.CreatedAt` |
| Vị trí, lý trình SC/VP | `locationKm` * **number only** | `locationKm` + `locationText` | **GAP-NKTD-LOC-01** form thiếu text vị trí |
| Thời tiết + diễn biến | `weatherEvent` * Input 1 dòng | `weatherAndEvent` | Form nên Textarea (T-SO-02) |
| Xử lý tại chỗ | `onSiteAction` | `onSiteAction` | OK field · data không từ sổ |
| Nhận xét + ký | `remarkSign` | `supervisorNote` / status Đã ký | **GAP-NKTD-SIGN-01** report không bind `RemarkSign` |
| Ghi chú | `note` | — | report thiếu cột ghi chú dòng |
| Sketch / minh họa | `sketchRef` text-id | — | **GAP-SO02-SKETCH-01** FileRef UI nợ |
| Ảnh | `mediaIds` CSV text | — | cùng nợ picker |

## 4. Findings (severity)

| ID | Sev | Surface | Finding |
|----|-----|---------|---------|
| **GAP-NKTD-SRC-01** | **P0** | Report BE | `LoadPatrolLogAsync` đọc `PatrolSessions` type `"Tuần đường"` + check-in. Empty → seed in-memory 12 dòng. **Không** join `rmms_csdl_catalog_records` `resource=patrol-logs` / `CsdlSo02` / `CsdlBookEntry`. |
| **GAP-NKTD-DRILL-01** | P1 | Report FE | Drill `/so-ts/csdl-so-sach?kind=patrol-logs` — hub dùng `?resource=` + alias `/csdl-so-02`. `kind=` **sai query**. |
| **GAP-NKTD-LOC-01** | P1 | Form | Giấy = vị trí **chữ** + lý trình. Live bắt `locationKm` số · không `LocationText`. |
| **GAP-NKTD-SIGN-01** | P1 | Report | DTO có `SupervisorNote` nhưng live map `""`; status signed = `MatchOk` check-in. |
| **GAP-NKTD-PRINT-01** | P2 | Report | In/`window.print` + CSV — **không** layout bìa+bảng PDF. |
| **GAP-SO02-FILE-01** | P1 debt | Form | Sketch/media = ô text id (Review đã ACCEPT). |
| **GAP-NKTD-HDSD-01** | P2 | HDSD `/bao-cao/nk-td` | HDSD bảo **Tạo mới** trên trang báo cáo — **cấm** Kind E (T-UI-FORM OUT). |
| **GAP-PO-NKTD-07** | P2 closed→reopen | SA | Read-model EF sổ **đã đến hạn** vì form nguồn STATUS done. |

## 5. Không làm trong CR này

- Gộp `rpt-tuan-duong` (coverage phiên GPS) với nhật ký sổ.
- Invent `POST api/v1/patrol-logs/books` — giữ `api/v1/asset/csdl-records?resource=patrol-logs`.
- OCR trang 2–4 handwriting thành data mẫu.
- Import/export Excel sổ (`GAP-CSDL-XLS-01` OUT).

## 6. DoD CR

1. Tạo sổ + ≥1 dòng trên `/csdl-so-02` → **Xem** `/bao-cao/nk-td` ra **đúng dòng** (cùng kỳ/tuyến).
2. Không seed khi đã có row sổ (kể cả 0 check-in).
3. Drill mở form View sổ (`/csdl-so-02` hoặc hub `?resource=patrol-logs&id=`).
4. Form có ô vị trí chữ (optional nếu có Km) · report cột Vị trí lấy text.
5. `yarn build` Asset + Report · `dotnet build` WebService PASS.
6. HDSD report **bỏ** Tạo mới.
