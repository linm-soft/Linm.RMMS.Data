# HDSD 3b — bugs (không in)

`open` · `/fix-bug-review` Step 7 recapture đúng `capture=`.

| id | surface | action / field | expect | actual | gap | status |
|----|---------|----------------|--------|--------|-----|--------|
| T-UD-BUG-01 | form create `/ai-kd/tao-moi` | tiêu đề + badge | Tiếng Việt nghiệp vụ, không badge EN | «Tạo mới detection» · badge `create` | UD-P0-08 · UD-P0-09 · REV-UI-HDR-01 | open · fixed_pending_confirm |
| T-UD-BUG-02 | form create `/ai-kd/tao-moi` | nhãn field | Nhãn tiếng Việt đường bộ | Status · Class · Score · Severity · Engine · Section · Route · Lat · Lng · PCI · Incident · Model | UD-P0-09 · REV-UI-VI-01 | open · fixed_pending_confirm |
| T-UD-BUG-03 | form create `/ai-kd/tao-moi` | lưới form | `data-form-cols="5"` | `formCols` trống | HDSD-P0-08 · GAP-P2-FORM-GRID-05 | open · fixed_pending_confirm |
| T-UD-BUG-04 | form create `/ai-kd/tao-moi` | nút Quay lại / Lưu | CSS + icon + text + title | `title` trống | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-05 | list `/ai-kd` | cột / giá trị lưới | Tiếng Việt | Critical · Draft · Engine trên lưới | UD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-06 | list `/ai-kd` | thanh công cụ | 1 toolbar, không hàng action phụ | Hàng «Giả lập detect P1/P2» trên toolbar | PLAT-TB-04 · UD-P0-10 | open · fixed_pending_confirm |
| T-UD-BUG-07 | list `/ai-kd/du-bao-bt` | nút sắp xếp | Nhãn tiếng Việt, cùng action SSOT | «Sort score ↓» | UD-P0-09 · GAP-P2-BTN-SSOT-01 | open · fixed_pending_confirm |
| T-UD-BUG-08 | list `/ai-kd/du-bao-bt` | cột lưới / lọc | Tiếng Việt | Score · Model · «Score tối thiểu» | UD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-09 | list `/ai-its/bb-ct` | cột lưới | Tiếng Việt | Engine trên lưới | UD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-10 | form create `/ai-its/bb-ct` | nhãn Engine | Tiếng Việt | Engine * | UD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-11 | list `/its-anpr-overload` | nút tạo | Không emoji, title + icon SSOT | «+ Tạo» | GAP-P2-BTN-SSOT-01 · UD-P0-17 · HDSD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-12 | list `/its-anpr-overload` | KPI / cột | Tiếng Việt | Critical · WIM | UD-P0-09 | open · fixed_pending_confirm |
| T-UD-BUG-13 | form create `/its-anpr-overload` | chân form tạo | Hủy + Lưu sticky | Đóng + Lưu | UD-P0-11 · GAP-P2-SLIDE-TOP-ACT | open · fixed_pending_confirm |
| T-UD-BUG-14 | list `/ai-kd/uoc-luong-sc` | nút tạo | Tiếng Việt | «Tạo từ detections» | UD-P0-09 | open · fixed_pending_confirm |

Notes: `capture=08-ai-kd-tao-moi.png` (01–04) · `capture=02-ai-kd.png` (05–06) · `capture=05-ai-kd-du-bao-bt.png` (07–08) · `capture=06-ai-its-bb-ct.png` (09) · `capture=14-bb-ct-form-create.png` (10) · `capture=07-its-anpr-overload.png` (11–12) · `capture=16-anpr-form-create.png` (13) · `capture=04-ai-kd-uoc-luong-sc.png` (14). Dump: `captures/rereview-dump.json`.
