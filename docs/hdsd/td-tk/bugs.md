# User-doc bugs — patrol (`/td-tk`)

**Source:** live `http://localhost:9100/td-tk/tao-moi` · `/gen-doc-hdsd su-co` `gen_all` `@linm/rmms-field`  
**Status:** `verified=yes` **cấm** · 0 `open`  
**Cấm** tự sửa — Dev `/fix-bug-review @patrol`

| id | surface | action / field | expect | actual | gap | status | notes |
|----|---------|----------------|--------|--------|-----|--------|-------|
| T-UD-BUG-01 | form create full-page | Grid | `data-form-cols="5"` | thiếu attr · 2 cột | GAP-P2-FORM-GRID-05 · HDSD-P0-08 | closed | capture=08-td-tk-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-02 | form create | Footer Hủy/Lưu | 0 footer · mọi nút trên 1 toolbar | Footer ✕ Hủy · 💾 Lưu | PLAT-TB-06 · UD-P0-18 | closed | capture=08-td-tk-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-03 | form create | Toolbar zone | Quay lại trái · CRUD/Hủy/Lưu Line 2 phải | Quay lại tách · Hủy/Lưu chân trang | PLAT-TB-07 · UD-P0-10 | closed | capture=08-td-tk-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-04 | form create | Nút SSOT | CSS+icon+text+title · không emoji | ✕ 💾 trên nút | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | closed | capture=08-td-tk-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |

**Stamp:** 2026-08-29 · 3b headed Pages `1.2.0-dev.106` · 01–04 **closed**.
