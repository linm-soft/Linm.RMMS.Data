# Đánh giá máy chủ RMMS — nâng cấp và mở rộng

**Máy hiện có:** STT 66 · Dell PowerEdge R760 · Xeon Silver 4510 (12 nhân) · 32 GB RAM · 1 × SSD 960 GB · Linux  
**Vai trò hiện tại:** API + cơ sở dữ liệu + MQTT + SignalR  
**Quy mô người dùng:** **1.000 user**  
**Ngày:** 08/09/2026

---

## 1. Hiện trạng và hướng mở rộng


| Hạng mục              | Hiện trạng (STT 66)                                                                                     | Khi dữ liệu / tải tăng                            | Đề xuất khi lượng người dùng tăng                          |
| --------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| **Người dùng**        | Máy chủ đáp ứng **1.000 user**                                                                          | Tăng tải chủ yếu do **dữ liệu / GIS / ảnh**       | Giữ máy A; nâng RAM khi CSDL lớn                           |
| **RAM**               | 32 GB (1 thanh)                                                                                         | RAM chủ yếu là cache CSDL **dùng chung** (bảng 2) | **64 GB** khi CSDL/GIS lớn; **128 GB** trước khi tách CSDL |
| **CPU**               | 12 nhân / 24 luồng                                                                                      | Đủ API + CSDL + MQTT + SignalR cho **1.000 user** | Giữ máy; tăng thêm CPU khi có nhu cầu                      |
| **Ổ hệ thống / CSDL** | 1 × SSD 960 GB, chưa RAID                                                                               | Đủ CSDL nghiệp vụ                                 | Thêm 1 SSD 960 GBCSDL lớn: thêm ổ                         |
| **Ảnh / video**       | Chưa tách — dễ đầy SSD hệ thống                                                                         | Ảnh tuần đường, hồ sơ, clip tăng nhanh            | **Tách máy (hoặc NAS) lưu trữ**                            |
| **Sao lưu**           | Một máy, chưa có máy dự phòng - đề xuất trong tương lai ở giai đoạn go-live nhiều người dùng(toàn quốc) | Hỏng máy hoặc ổ = gián đoạn                       | **Máy backup** (bảng 3)                                    |
| **Mạng trên máy**     | 1 GbE + 10/25 GbE                                                                                       | Đủ API, MQTT, SignalR                             | Giữ; lưu trữ video dùng cổng 10G                           |


---

## 2. RAM với 1.000 user

Phần lớn 32 GB là cache PostgreSQL và process API — **dùng chung**, không chia đều cho từng người. Mỗi phiên làm việc (SignalR + truy vấn) chỉ thêm vài MB.


| Thành phần trên máy A               | RAM ước                | Ghi chú                                                                     |
| ----------------------------------- | ---------------------- | --------------------------------------------------------------------------- |
| Hệ điều hành                        | ~2 GB                  | Dùng chung                                                                  |
| PostgreSQL (cache CSDL)             | **12 – 16 GB**         | Dùng chung — RAM lớn thì CSDL nhanh hơn                                     |
| API .NET (cả process)               | **1 – 3 GB**           | Dùng chung                                                                  |
| Redis + MQTT                        | ~1,5 – 2,5 GB          | Dùng chung                                                                  |
| **1.000 user** (SignalR + truy vấn) | thêm khoảng **vài GB** | Không nhân 32 GB theo đầu người                                             |
| **Tổng**                            | Trong **32 GB**        | Đủ cho **1.000 user**. Nâng RAM khi **dữ liệu / GIS lớn**, không vì số user |


---

## 3. Tách lưu trữ và máy backup (lộ trình)


| Máy                                | Vai trò                                         | Giai đoạn                                                               | Ghi chú                                       |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| **Máy A — API + dữ liệu** (STT 66) | API, PostgreSQL, MQTT, SignalR · **1.000 user** | Ngay                                                                    | RAID + nâng RAM khi dữ liệu lớn               |
| **Máy B — lưu trữ ảnh / video**    | Ảnh tuần đường, hồ sơ, clip                     | Khi dung lượng ảnh vượt SSD hệ thống (hoặc ngay nếu đã ghi hình camera) | NAS hoặc máy chủ ổ lớn; API chỉ lưu đường dẫn |
| **Máy C — backup**                 | Sao lưu CSDL + cấu hình                         | Sau vận hành ổn / trước khi dữ liệu lớn                                 | Máy cùng họ, đồng bộ CSDL theo lịch           |


Thứ tự: **RAID trên máy A** → **tách ảnh/video (máy B hoặc NAS)** → **máy backup (máy C)** → nâng RAM khi CSDL/GIS lớn.