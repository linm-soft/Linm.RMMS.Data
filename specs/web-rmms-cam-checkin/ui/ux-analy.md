# UX — web-rmms-cam-checkin

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-checkin` |
| zone | CI-01 `/tuan-duong/:id/diem-tuan` |
| updated | 2026-10-04 · `/edit-web-feature` |

## Zone CI-01 — Tuyến hiện tại

| Control | Copy | Hành vi |
|---------|------|---------|
| Section | Tuyến hiện tại | Thay ô «Lý trình (km)» và ô nhãn tự gõ |
| Tuyến | SearchInput | Default = tuyến đã có trên ca (`routeCode` / `route`) |
| Cột KM | Number | Chỉ điền khi đã có điểm check-in **cùng tuyến** |
| Khoảng cách (m) | Number | Tối đa **999**. Trường hợp khác: `--` / `nhập khoảng cách` |
| Stamp | `QL.n - Km X + Ym` | Chỉ khi mét &lt; 1000 |
| Tuyến dự kiến / Tuyến check-in thực tế | ẩn trên form | Trùng ô Tuyến hiện tại |
| Sau Lưu | Chi tiết đầy đủ | Cùng hàng với chi tiết giám sát: người, mã, tổ, hai tuyến, thời điểm, trạng thái, tọa độ, trong vùng, ảnh, xem bản đồ |

## GAP

| Id | Mô tả |
|----|--------|
| GAP-CI-ROUTE-01 | Tuyến tìm kiếm mặc định theo kế hoạch, user đổi được trước Lưu |
| GAP-CI-KM-01 | Có điểm trước cùng tuyến: khoảng cách GPS / 1000 → cột KM + mét (&lt; 1000). Cộng vào lý trình điểm trước nếu điểm đó đã có lý trình |
| GAP-CI-OPEN-01 | Ca chưa `Đang tuần`: bấm Lưu tự mở ca theo tuyến đang chọn, rồi ghi điểm |

Pattern B GPS, role-gate, LeaveConfirm giữ nguyên.
