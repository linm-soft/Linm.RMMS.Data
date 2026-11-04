# Hướng dẫn chụp ảnh train — Feature Context

> **Slug:** `train-capture-guide` · **Module:** Incident  
> **Phase:** P1 phone web  
> **Status:** Implement · sheet trên luồng chụp sự cố · 2026-11-01  
> **appId:** `web-rmms-incident`  
> **MFE:** `Linm.Web.RMMS.Mobile` · `IncidentCaptureSheet` · không thêm tab  
> **Pattern:** slideout  
> **Peer:** [`lin-image-view-capture.md`](lin-image-view-capture.md) · [`web-rmms-incident.md`](web-rmms-incident.md) · [`ai-vision.md`](ai-vision.md) §8

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Người tuần đường thấy cách chụp một ảnh sự cố đủ chuẩn để đưa vào train: dấu góc, kích thước vùng hư, góc máy theo lớp |
| Persona | Tuần đường, lúc mở sheet chụp trên form tạo sự cố |
| App hiện có | `IncidentCaptureSheet` · `RouteCaptureControl` |
| DoD ngắn | Nút «Cách chụp» mở sheet. Chọn lớp, xem dấu góc và khung vùng hư, vuốt các góc, bấm «Chụp góc này» thì camera hiện khung mẫu |

## 2. Current vs New

| Hạng mục | Đã có | Mới | Gap |
|----------|-------|-----|-----|
| Screen | Sheet chụp `INC-CAP` trên `/van-de/moi` | Slideout `TRAIN-CAP` đè sheet chụp | Không route mới |
| Ảnh | JPEG gốc + ghim điểm | Khung mẫu trên live camera (HTML, không vẽ vào file) | Chưa khóa hộp Detect |
| Lớp | Checklist gộp trên phiếu | 15 lớp train, một lớp cho phiên hướng dẫn | Chưa ghi lớp vào từng ảnh |
| Nhãn | `useFormOptions('web-rmms-incident')` + `labelOf` | Key `train.guide.*` | — |

## 3. Screens

| id | Surface | Pattern | devSlash |
|----|---------|---------|----------|
| TRAIN-CAP | Slideout trên `IncidentCaptureSheet` | slideout · không FormMode CRUD | `/edit-web-mobile` |

Không thêm mục menu. Quyền viết ảnh sự cố giữ nguyên `camIncidentAccess === write`.

## 4. Fields

| Field | Control | Bắt buộc | Ghi chú |
|-------|---------|----------|---------|
| classId | Chip ngang | Có, mặc định `o-ga` | Key `train.guide.class.{id}` |
| angleId | Thẻ vuốt + nút trước/sau | Có | Theo lớp, key `train.guide.angle.{id}` |
| Khung giữa | Hình mẫu | — | Vùng hư phải nằm trong khung |
| Dấu góc | Ô góc phải dưới | — | Chữ `train.guide.mark`. Chỉ trên bản xem |
| armed | Banner trên sheet chụp | Không | Sau «Chụp góc này» |

Nhãn qua `labelOf`, không hardcode tiếng Việt trên JSX.

Kích thước chuẩn hiện trên sheet (chưa chặn lúc lưu):

| Mốc | Ngưỡng |
|------|--------|
| Ảnh | Một cảnh, cạnh ngắn từ 1080 px |
| Hộp | Cạnh ngắn từ 12% ảnh, diện tích từ 2%, tỷ lệ cạnh không quá 5 |
| Một ảnh | Một lớp |

## 5. Workflow

| Bước | Ai | Việc |
|------|----|------|
| 1 | Tuần đường | Mở «Cách chụp» |
| 2 | Tuần đường | Chọn lớp, xem góc |
| 3 | Tuần đường | «Chụp góc này» — đóng hướng dẫn, camera có khung mẫu và dấu góc |
| 4 | Hệ thống | File lưu vẫn là JPEG gốc. Dấu không đóng vào pixel train |

## 6. API

Không API mới. Ảnh vẫn `files` purpose `photo-geo-capture`, entity `incident`.

## 7. DB

Không cột mới. IdCode không áp dụng.

## 8. Perm + menu

| | |
|--|--|
| permissionCode | Giữ quyền chụp sự cố hiện có. Không leaf menu mới |
| package | Gói tuần đường đang mở được sheet chụp |
| L2 path | Không |

## 9. Góc theo lớp

| Lớp | Góc |
|-----|-----|
| Ổ gà, nứt mai rùa, bong bật, vá, hư mép | Vuông góc · nghiêng · dọc làn |
| Nứt dọc | Dọc làn · vuông góc · nghiêng |
| Nứt ngang | Vuông góc · nghiêng · dọc làn |
| Chảy nhựa | Vuông góc · nghiêng |
| Lún vệt bánh | Thấp ngang vệt · dọc làn |
| Sạt lở | Dọc làn · nghiêng |
| Biển đổ, mất | Chính diện · nghiêng · (đổ thêm cận) |
| Biển che, mờ | Chính diện · cận |
| Cột hỏng | Nghiêng · cận |

## 10. Gaps

| ID | Việc còn |
|----|----------|
| GAP-TRAIN-CAP-01 | Dấu chưa đóng trên bản xuất ra ngoài. File train vẫn là ảnh gốc |
| GAP-TRAIN-CAP-02 | Chưa từ chối ảnh khi hộp nhỏ hơn 12% / 2% / tỷ lệ 5 — chụp tay chưa có khung Detect |
| GAP-TRAIN-CAP-03 | Lớp trên sheet hướng dẫn chưa ghi vào phiếu theo từng ảnh |

## 11. Handoff

`/edit-web-mobile` khi sửa sheet. Khóa hộp và dấu file là slice sau, cùng `lin-image-view-capture`.
