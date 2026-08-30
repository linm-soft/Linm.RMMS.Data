# User-doc bugs — maintenance (`/sc-bt`)

**Source:** live `http://localhost:9100/sc-bt/tao-moi` · `/gen-doc-hdsd su-co` `gen_all` `@linm/rmms-field`  
**Status:** `verified=yes` **cấm** · 0 `open`  
**Cấm** tự sửa — Dev `/fix-bug-review @maintenance`

| id | surface | action / field | expect | actual | gap | status | notes |
|----|---------|----------------|--------|--------|-----|--------|-------|
| T-UD-BUG-01 | form create full-page | Grid | `data-form-cols="5"` | thiếu attr · 2 cột | GAP-P2-FORM-GRID-05 · HDSD-P0-08 | closed | capture=09-sc-bt-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-02 | form create | Footer | 0 footer action | Hủy thay đổi · Lưu (Mới) · 💾 Lưu | PLAT-TB-06 · UD-P0-18 | closed | capture=09-sc-bt-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-03 | form create | Toolbar | 1 thanh · CRUD phải | Toolbar trên + footer dưới (2 cụm) | PLAT-TB-07 · UD-P0-10 | closed | capture=09-sc-bt-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |
| T-UD-BUG-04 | form create | Nút SSOT | không emoji | ✕ 💾 | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | closed | capture=09-sc-bt-tao-moi.png · confirmed 2026-08-29 3b Pages 1.2.0-dev.106 |

**Stamp:** 2026-08-29 · 3b headed Pages `1.2.0-dev.106` · 01–04 **closed**.
