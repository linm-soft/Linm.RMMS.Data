# QA bugs — user-doc (`incident`)

**Peer:** `{DocsRoot}/user-doc/incident/bugs.md` · re-review 2026-08-29 PASS

| id | surface | action / field | expect | actual | gap | status | notes |
|----|---------|----------------|--------|--------|-----|--------|-------|
| T-UD-BUG-01 | form header | Badge EN | Không CREATE | Thêm | UD-P0-08 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-02 | form header | Note nội bộ | Ẩn ≠ Cổng | hidden | UD-P0-08 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-03 | form slideout | Hủy/Lưu | Header ✕ · footer sticky | footer only | UD-P0-11 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-04 | row Đóng | Esc dismiss | Overlay đóng | dismissed | GAP-P2-ACT | closed | capture=05-su-co.png |
| T-UD-BUG-05 | `routeName` | Display | Mã 1 lần + tên | `QL.1 — Quốc lộ 1` | UD-P0-12 · GAP-P2-LKP-11 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-06 | `routeName` | Normalize | `normalizeSearchText` | `quoc lo` → QL.1 | UD-P0-12 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-07 | `routeName` view | Control | SearchInput RO | SearchInput | UD-P0-12 · GAP-P2-LKP-04 | closed | capture=13-su-co-form-view.png |
| T-UD-BUG-08 | `routeName` create | testid | `incident-field-routeName` | có · fill PASS | UD-P0-05 · GAP-QA-FORM-FIELD-01 | closed | capture=12-su-co-form-create.png |
| T-UD-BUG-09 | 375 | Input px | ≥16 | 16 | UD-P0-13/14 · GAP-TYP-01 | closed | capture=15-su-co-form-view-375.png |
| T-UD-BUG-10 | form create `/su-co/tao-moi` | chrome | chuẩn toolbar / 5 cột | data-form-cols=5 | HDSD-P0-08/11 | closed | capture=03-su-co-tao-moi.png · confirmed 2026-08-30 Pages field 1.2.0-dev.151 |

**Stamp:** confirmed 2026-08-29 · 01–09 **closed** · HDSD focus + 3b PASS · 0 `open`.
