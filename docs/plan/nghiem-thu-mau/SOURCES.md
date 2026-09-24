# Nguồn pháp lý — nghiệm thu BDTX hiện trường

> Extract: [`extract/`](extract/). PDF Công báo TT 41 bị 302/403 lúc tải 2026-09-20 — SSOT nội bộ = extract UTF-8.

## IN — domain RMMS tuần đường / BDTX

| ID | Văn bản | Dùng cho |
|----|---------|----------|
| SRC-NT-TT41 | **TT 41/2024/TT-BGTVT** (HL 01/01/2025) Phụ lục IV **Mẫu số 01** | 10 công việc ghi chép §1.2.1 · tiêu chí kỹ thuật · giám sát/NT · chấm điểm/khấu trừ |
| SRC-NT-TT41-M2 | cùng PL IV **Mẫu số 02** | Sổ ghi kết quả BDTX — **office** = slug `csdl-so-08` · **cấm** gộp mobile NT |
| SRC-NT-TT48 | TT 48/2019/TT-BGTVT · hợp nhất **11/VBHN-BGTVT 2023** | Tiền thân tiêu chí — ưu tiên TT 41 |
| SRC-NT-TCVN | **TCVN 14182:2024** §4.1 | Danh mục công việc BDTX (vá ổ gà, rãnh, biển báo…) |

Công báo: https://congbao.chinhphu.vn/van-ban/thong-tu-so-41-2024-tt-bgtvt-43379/53135.htm

## OUT — không làm trên slug NT field

| ID | Văn bản | Lý do |
|----|---------|--------|
| SRC-NT-NĐ06 | NĐ 06/2021/NĐ-CP Điều 21 | Biên bản NT **xây dựng** (chữ ký CĐT/thầu) — office/QLDA |
| SRC-NT-CV6553 | CV **6553/BGTVT-CQLXD 2022** BM 01–04 | Hồ sơ NT thanh toán **dự án đầu tư** GTVT — xem `kcht-cong-trinh` |

## Peer slug

| Slug | Quan hệ |
|------|---------|
| `nghiem-thu*` | Phiếu hiện trường (lane này) |
| `csdl-so-08` | Sổ Mẫu 02 — web CSDL · **không** rewrite native NT |
| `kcht-cong-trinh` | QLDA công trình · **không** picker dự án trên mobile NT |
| `patrol` | Clone shell list/form · persona khác |
