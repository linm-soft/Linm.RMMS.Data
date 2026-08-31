# Loại biển báo (mã QCVN 41)

> **Slug:** `traffic-sign-type` · **Module:** Master × Asset  
> **Review:** 2026-08-31  
> **Cấm** seed / invent mã không có trong dump · **cấm** bịa pict icon

Bảng riêng `rmms_traffic_sign_types` (shared Type A) — **1 dòng / mã biển** (`I.414b`, `P.102`, …). Icon để trống: user config theo luật đường bộ VN.

| | |
|--|--|
| Key | `code` = Excel **Mã biển báo** = dump `sign_code_number` (giữ case) |
| Tên / Nội dung | Excel **Tên tiếng việt** (SSOT) = dump `road_sign_content` |
| Tên EN | Excel **Tên tiếng anh** — không dịch thêm |
| Nhóm | Excel **Nhóm biển báo** → P/W/R/I/S · fallback prefix mã |
| Shape | Excel **Hình dạng** / dump `shape_sign_id` |
| Width / Height | Excel **Chiều rộng / Chiều dài** — khổ chuẩn danh mục (khác kích thước lắp đặt trên asset) |
| Icon | `NULL` — form Master gắn URL/path sau |

Nguồn danh mục: `Linm.RMMS.Data/data-import/so-hieu-bien-bao/Số hiệu biển báo.xlsx` → set `so-hieu-bien-bao` (không nhét vào catalogs `gov-vn`). Mã dump không có trong Excel: `EnsureFromImportedAssetsAsync` **chỉ thêm**, không ghi đè tên official.

## Chứng từ

| Surface | Path |
|---------|------|
| Master list + form icon | `/mas/loai-bien-bao` |
| API | `api/v1/integration/traffic-sign-types` |
| Sổ TS form | `TRAFFIC_SIGN` → SearchInput mã biển / nội dung |
