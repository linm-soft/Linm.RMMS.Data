# PLAN — Mẫu nghiệm thu hiện trường (BDTX)

> **Slug pack:** `nghiem-thu` · `nghiem-thu-create` · `nghiem-thu-detail`  
> **CTX catalog:** [`../../context/features/nghiem-thu-mau.md`](../../context/features/nghiem-thu-mau.md)  
> **Lane P1:** Mobile + Mobile.Bff + `Linm.RMMS.WebService` Patrol  
> **Lane sau:** Web Field `/nghiem-thu` — `/agent-qldb-workflow` · **cấm** enqueue `qlbd` turn này  
> **Ngày:** 2026-09-20 · `/hey-linm` + `/add-task`

---

## Kết luận

App đang có **10 placeholder** `mau-01`…`mau-10` / «Mẫu nghiệm thu NN». Đó **không** phải tên dự án, **không** phải biên bản NĐ 06 QLDA.

**Chốt P1 (field):** chọn **1/10 công việc BDTX** (TT 41 Phụ lục IV Mẫu 01 §1.2.1) → vị trí/GPS → đính kèm ảnh/video → **chỉ số Đạt / Không đạt / Khấu trừ** (+ ghi chú kết quả).

**Cấm:** cây dự án → công trình (`kcht-cong-trinh`) · gộp sổ office `csdl-so-08` (Mẫu 02) · invent `api/v1/nghiem-thu` · ERP.* · persist FileService URL.

---

## Files

| File | Việc |
|------|------|
| [SOURCES.md](SOURCES.md) | Văn bản + extract |
| [MAU-10.md](MAU-10.md) | Map `mau-01`…`10` → tên pháp lý |
| [CHI-SO.md](CHI-SO.md) | Chỉ số đánh giá P1 vs chấm điểm tháng |
| [SCHEMA.md](SCHEMA.md) | Entity / init-data / BFF / mobile zones |
| [extract/](extract/) | TT 41 PL IV · TCVN 14182 §4.1 · CV 6553 (OUT) |

---

## Delta HARD (mobile `edit_page` + `--force`)

1. `GET …/init-data` Label = tên MAU-10 (không «Mẫu nghiệm thu NN»).
2. Create/Detail: row **Kết quả** `pass` / `fail` / `deduct` + `ResultNote` · checklist tiêu chí theo mẫu.
3. FileService `mediaIds` giữ · **cấm** API file mới.
4. Schema `Schema_NghiemThuMau` pair CLI — SA chốt JSON vs child table.
5. 1 slug = 1 action: list labels · create form · detail bind.
6. Web Full-page **OUT** queue này.

Slash sau confirm: `/add-task` `--queue=qlbd-mobile` `--features=nghiem-thu,nghiem-thu-create,nghiem-thu-detail` `--force` `--enqueue-only`.
