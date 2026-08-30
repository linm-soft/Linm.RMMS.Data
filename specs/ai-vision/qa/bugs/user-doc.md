# HDSD 3b — bugs (không in)

`/fix-bug-review` Step 5 headed `1.2.0-dev.129` · 2026-08-29. Step 7 recapture đúng `capture=`.

| id | surface | action / field | expect | actual | gap | status |
|----|---------|----------------|--------|--------|-----|--------|
| T-UD-BUG-01 | form create `/ai-kd/tao-moi` | tiêu đề + badge | Tiếng Việt nghiệp vụ, không badge EN | Tạo mới phát hiện · badge Tạo mới | UD-P0-08 · UD-P0-09 · REV-UI-HDR-01 | closed · confirmed 2026-08-29 |
| T-UD-BUG-02 | form create `/ai-kd/tao-moi` | nhãn field | Nhãn tiếng Việt đường bộ | labels VN | UD-P0-09 · REV-UI-VI-01 | closed · confirmed 2026-08-29 |
| T-UD-BUG-03 | form create `/ai-kd/tao-moi` | lưới form | `data-form-cols="5"` | formCols=5 | HDSD-P0-08 · GAP-P2-FORM-GRID-05 | closed · confirmed 2026-08-29 |
| T-UD-BUG-04 | form create `/ai-kd/tao-moi` | nút Quay lại / Lưu | CSS + icon + text + title | title Quay lại · Lưu | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-05 | list `/ai-kd` | cột / giá trị lưới | Tiếng Việt | không Critical/Draft/Engine | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-06 | list `/ai-kd` | thanh công cụ | 1 toolbar, không hàng action phụ | toolbarCount=1 · Giả lập P1 trong toolbar | PLAT-TB-04 · UD-P0-10 | closed · confirmed 2026-08-29 |
| T-UD-BUG-07 | list `/ai-kd/du-bao-bt` | nút sắp xếp | Nhãn tiếng Việt, cùng action SSOT | Sắp xếp điểm ↓ | UD-P0-09 · GAP-P2-BTN-SSOT-01 | closed · confirmed 2026-08-29 |
| T-UD-BUG-08 | list `/ai-kd/du-bao-bt` | cột lưới / lọc | Tiếng Việt | Điểm · Mô hình · Điểm tối thiểu | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-09 | list `/ai-its/bb-ct` | cột lưới | Tiếng Việt | Nguồn nhận dạng | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-10 | form create `/ai-its/bb-ct` | nhãn Engine | Tiếng Việt | Nguồn nhận dạng | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-11 | list `/its-anpr-overload` | nút tạo | Không emoji, title + icon SSOT | Tạo · title=Tạo | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-12 | list `/its-anpr-overload` | KPI / cột | Tiếng Việt | KPI Nghiêm trọng · cột Tải trọng | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-13 | form create `/its-anpr-overload` | chân form tạo | Hủy + Lưu sticky | Hủy + Lưu | UD-P0-11 · GAP-P2-SLIDE-TOP-ACT | closed · confirmed 2026-08-29 |
| T-UD-BUG-14 | list `/ai-kd/uoc-luong-sc` | nút tạo | Tiếng Việt | Tạo từ phát hiện (+ Tạo từ sự cố) | UD-P0-09 | closed · confirmed 2026-08-29 |
| T-UD-BUG-15 | list `/ai-kd` · `/ai-kd/phat-hien-ts` | title + header | `LinPageHeader` **22px**/700 · không cắt chữ | 22px/700 · Danh sách phát hiện / ứng viên | UD-P0-21 · GAP-TYP-02 · REV-UI-TITLE-01 | closed · confirmed 2026-08-30 |
| T-UD-BUG-16 | list `/ai-kd` · `/ai-kd/phat-hien-ts` | filter bar | `LinErpListFilterBar` · baseline thẳng · 🔍 = height input | `LinErpListFilterBar` · không ErpListHeaderFilters | UD-P0-22 · GAP-FILTER-BAR-01/13 · REV-UI-FILTER-ALIGN-01 | closed · confirmed 2026-08-30 |
| T-UD-BUG-17 | list `/ai-kd` | placeholder tìm | Tiếng Việt đường bộ | «Mã, loại hư hỏng, đoạn, tuyến, sự cố…» | UD-P0-09 · REV-UI-VI-01 | closed · confirmed 2026-08-30 |
| T-UD-BUG-18 | list `/ai-kd/du-bao-bt` | filter bar | `LinErpListFilterBar` · nhãn VN | `LinErpListFilterBar` · Kỳ hạn (tháng) | UD-P0-09 · GAP-FILTER-BAR-01 · UD-P0-22 | closed · confirmed 2026-08-30 |

Notes: `capture=02-ai-kd.png` (15–17) · `capture=03-ai-kd-phat-hien-ts.png` (15–16) · `capture=05-ai-kd-du-bao-bt.png` (18). Dump 2026-08-30. Dev: `/fix-bug-review @ai-vision`.
