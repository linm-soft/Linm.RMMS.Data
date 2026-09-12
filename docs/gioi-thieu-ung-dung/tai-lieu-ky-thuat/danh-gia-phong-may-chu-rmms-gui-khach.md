# ĐÁNH GIÁ PHÙ HỢP THIẾT BỊ PHÒNG MÁY CHỦ CHO HỆ THỐNG RMMS

**Đối tượng:** Đơn vị chủ đầu tư / Ban QLDA / Chi cục  
**Ngày:** 08/09/2026  
**Nguồn danh mục:** *Danh mục đề nghị thẩm định giá* kèm giấy yêu cầu ngày 28/08/2026 — file `5. Danh mục phong may chu_03092026 v2.doc`  
**Phần mềm:** RMMS (Quản lý bảo trì đường bộ) — vận hành **API**, **cơ sở dữ liệu**, **MQTT** (thiết bị hiện trường) và **SignalR** (cập nhật realtime trên web/app)

---

## 1. Phạm vi đánh giá

Tài liệu này **đối chiếu từng mục / model** trong danh mục với nhu cầu **chạy máy chủ RMMS**, gồm:

| Thành phần | Việc hệ thống làm | Ghi chú cho đơn vị |
|-----------|-------------------|-------------------|
| **API** | Tiếp nhận, xử lý nghiệp vụ (tài sản, tuần đường, sự cố, camera sự kiện…) | Phần mềm .NET trên Linux |
| **Cơ sở dữ liệu** | Lưu sổ sách, GIS, lịch sử thao tác | PostgreSQL + bản đồ số (PostGIS) |
| **MQTT** | Thiết bị / xe / cảm biến gửi tin về trung tâm | Broker trên cùng máy chủ |
| **SignalR** | Cán bộ xem dữ liệu cập nhật tức thì trên web/app | Không phải MQTT |

**Không** đánh giá trong bản này: máy chủ GPU / AI nhận diện ảnh tại trung tâm; tường hình video nhiều camera; lưu video 24/7.

**Cách đọc cột kết luận**

| Ký hiệu | Ý nghĩa |
|---------|---------|
| **Phù hợp — chạy RMMS** | Dùng trực tiếp để cài API + CSDL + MQTT + SignalR |
| **Phù hợp — hạ tầng** | Cần để máy chủ chạy ổn (điện, tủ, mạng) nhưng không phải máy chạy phần mềm |
| **Không dùng cho RMMS** | Đúng thiết bị, sai vai trò (đèn giao thông, camera an ninh phòng…) |
| **Lưu ý / chỉnh** | Giữ được, cần cấu hình hoặc bổ sung nhỏ trước vận hành dài |

---

## 2. Kết luận gửi đơn vị

1. **Đủ để vận hành RMMS** (API + CSDL + MQTT + SignalR) trên **một máy chủ Linux** — mục **STT 66**, model **Dell PowerEdge R760** (Xeon Silver 4510, 12 nhân, 32 GB RAM, SSD 960 GB).
2. **Không cần đổi hệ thống sang Windows.** Phần mềm RMMS đã chạy trên Linux. Mục STT 66 ghi *Linux mã nguồn mở* là **đúng hướng**. Chỉ cần **chốt bản Linux dài hạn** (khuyến nghị Ubuntu 22.04 LTS) và cài các gói: cơ sở dữ liệu, Redis, MQTT, phần mềm API.
3. Máy **STT 67** (cùng model R760, **Windows Server 2025**) để **đèn giao thông** — **không cài RMMS** lên máy này.
4. Vận hành **dài hạn (24/7, nhiều năm)** ở quy mô Chi cục: **đủ về CPU, RAM, mạng trên máy**. Việc **bắt buộc trước khi dùng chính thức:** cấu hình **RAID** (thêm 1 ổ SSD cùng loại), **sao lưu CSDL ra ngoài máy**, tắt chế độ tiết kiệm điện BIOS.
5. Các mục tủ rack, UPS, PDU, tường lửa, switch là **hạ tầng hỗ trợ** — không thay thế máy chủ RMMS.

---

## 3. Bảng map theo mục và model

*STT 48–52 không có trong file nguồn đã nhận — không đánh giá.*

| STT | Tên mục | Model / mã | SL | Kết luận | Lý do ngắn |
|-----|---------|------------|----|----------|------------|
| 42 | Tủ rack 42U | Schneider **AR3300** (NetShelter SX 42U, 600×1200 mm) | 01 | **Phù hợp — hạ tầng** | Đặt máy chủ 2U; 1 tủ đủ 2 máy R760 |
| 43 | Thanh phân phối nguồn 32A | Schneider **AP8853** (PDU 2G Metered ZeroU, 230 V, 36×C13 + 6×C19) | 02 | **Phù hợp — hạ tầng** | Cấp nguồn có đo; đủ cho 2 máy dual PSU |
| 44 | Bộ lưu điện 10 kVA | Schneider **SRV10KIL** (online 10 kVA/10 kW, 1 pha 230 V, dạng tower) | 02 | **Phù hợp — hạ tầng** | UPS chuyển đổi kép; ghép song song hoặc dự phòng |
| 45 | Bo mạch đồng bộ UPS | Schneider **SRVPK001** | 01 | **Phù hợp — hạ tầng** | Ghép 2 UPS 10 kVA |
| 46 | Tủ điện đầu ra tải | Hàng đặt — MCB 1P 50 A / bypass / 8×16 A | 01 | **Phù hợp — hạ tầng** | Phân nhánh 1 pha; đủ cho máy chủ + mạng |
| 47 | Ổn áp 20 kVA 1 pha | Lioa **SH-20000II** | 01 | **Phù hợp — hạ tầng** | Ổn lưới; máy chủ RMMS không cần điện 3 pha |
| 53 | Điều hòa 24.000 Btu | LG **IEC24M1** | 02 | **Phù hợp — hạ tầng** | Làm mát phòng; không phải thiết bị chạy phần mềm |
| 54 | Điều hòa 9.200 Btu | LG **IPC09M1** | 02 | **Phù hợp — hạ tầng** | Phòng phụ / trực; không CRAC chuyên dụng |
| 55 | Camera Dome 4 MP | TYCO **ISE-V04F283S-N** | 01 | **Không dùng cho RMMS** | Camera **an ninh phòng máy**, không phải camera tuyến |
| 56 | Đầu ghi 8 kênh | TYCO **HRN-08012S-P** (80 Mbps, 1×SATA) | 01 | **Không dùng cho RMMS** | NVR an ninh phòng, không phải CSDL RMMS |
| 57 | Ổ cứng 8 TB | WD **WD85PURZ** | 01 | **Không dùng cho RMMS** | Gắn NVR phòng; không thay SSD máy chủ |
| 58 | Router Dual-WAN | Peplink **BPL-580** | 01 | **Phù hợp — hạ tầng** | Internet dự phòng; MQTT/API đi Internet. VPN SpeedFusion 200 Mbps — đủ sự kiện, không dùng làm live video hàng loạt |
| 59 | Tường lửa | Sophos **XGS2300** (FW ≥ 8,5 Gbps; IPsec ≥ 5,5 Gbps) | 01 | **Phù hợp — hạ tầng** | Bảo vệ API, MQTT, VPN; 1 máy chưa có cặp dự phòng |
| 60 | Switch lõi 10G | Allied Telesis **AT-x950-52XSQ-B01** (48×10G SFP+ + 4×40/100G) | 01 | **Phù hợp — hạ tầng** | Kết nối máy chủ 10/25G; dư công suất so với 2 máy |
| 61 | Switch access 1G | Allied Telesis **AT-GS980MX/28-50** (24×1G + 4×10G) | 01 | **Phù hợp — hạ tầng** | Máy chủ, NVR, AP, máy trạm |
| 62 | Module quang | Tên mục: 1000LX SMF — model **AT-SPSX/I-90** (thực tế **1000BASE-SX** MMF, 550 m) | 04 | **Lưu ý / chỉnh** | **Lệch tên ↔ model.** SX chỉ LAN ngắn. Camera tuyến / Chi cục xa cần module **LX/ZX cáp đơn mode** |
| 63 | Access Point Wi-Fi 7 | Alcatel-Lucent **AP1501** | 01 | **Không dùng cho RMMS** (trực tiếp) | Wi-Fi phòng vận hành; API/CSDL không chạy trên AP |
| 64 | Sàn nâng kỹ thuật | ATFLOR **FS1000** | 12,21 m² | **Phù hợp — hạ tầng** | Phòng nhỏ, đủ 1 rack |
| 65 | Cách nhiệt nền sàn | SkyFoam (đi kèm sàn) | 12,21 m² | **Phù hợp — hạ tầng** | |
| **66** | **Máy chủ camera** | Dell **PowerEdge R760** · Xeon Silver **4510** 12C/24T · **32 GB** · SSD **960 GB** · PSU 800 W 1+1 · NIC 10/25 GbE · **Linux mã nguồn mở** | 01 | **Phù hợp — chạy RMMS** | Máy cài API + PostgreSQL + Redis + MQTT + SignalR |
| 67 | Máy chủ đèn giao thông | Dell **PowerEdge R760** (cùng SKU phần cứng) · **Windows Server 2025 Standard 16CORE** | 01 | **Không dùng cho RMMS** | Để hệ đèn GT; không trộn với CSDL/API RMMS |

---

## 4. Chi tiết máy chủ chạy RMMS (STT 66)

### 4.1. Thông số model

| Hạng mục | Thông số trên danh mục | Nhu cầu RMMS (API + CSDL + MQTT + SignalR) | Đánh giá |
|----------|------------------------|--------------------------------------------|----------|
| Model | Dell PowerEdge R760 (bo mạch R760xs) | Máy chủ rack 2U | Đúng chủng loại |
| CPU | Intel Xeon Silver 4510, 2,4 GHz, **12 nhân / 24 luồng** | Xeon, đủ cho API + CSDL trên một máy | **Đạt** |
| RAM | **32 GB** RDIMM DDR5 | Tối thiểu thực tế ~16 GB; ước dùng 20–24 GB | **Đạt** quy mô Chi cục; nâng 64 GB nếu nhiều người dùng + bản đồ nặng |
| Ổ đĩa | 1 × **960 GB** SSD SATA Read Intensive | Đủ hệ điều hành + CSDL (không lưu ảnh/video lớn) | **Đạt dung lượng** · **thiếu gương ổ** (chưa RAID) |
| RAID | Unconfigured · card PERC H755 | Nên RAID1 trước vận hành chính thức | **Lưu ý** |
| Nguồn | Dual 800 W, hot-plug 1+1 | Đủ, có dự phòng | **Đạt** |
| Mạng trên máy | 2 × 1 GbE + Broadcom 57414 **10/25 GbE** | Đủ API, MQTT, SignalR | **Đạt** |
| Hệ điều hành | Linux mã nguồn mở, không bản quyền | API và PostgreSQL chạy Linux | **Đúng** — không đổi sang Windows |
| Quản trị | iDRAC9 Enterprise · bảo hành 36 tháng NBD | Giám sát phần cứng từ xa | **Đạt** |
| BIOS | Power Saving | Nên chế độ hiệu năng khi chạy CSDL 24/7 | **Lưu ý cấu hình** |

Chassis còn **đến 8 ổ 3,5"** — có thể thêm ổ sau khi có nhiều ảnh hồ sơ; không bắt buộc để **chạy** API/CSDL ngày đầu.

### 4.2. Phân bổ trên một máy (gợi ý)

Trên STT 66 cài cùng lúc:

- Phần mềm API RMMS (tiếp nhận nghiệp vụ + **SignalR**)
- PostgreSQL (CSDL)
- Redis (bộ nhớ đệm)
- Mosquitto (**MQTT** — thiết bị gửi về)

**SignalR** phục vụ cán bộ trên web/app. **MQTT** phục vụ thiết bị. Hai kênh **không thay thế nhau**.

### 4.3. Linux — đơn vị có cần đổi phần mềm không?

**Không.** Không chuyển RMMS sang Windows trên máy này.

Việc đơn vị cần làm khi nghiệm thu OS:

| Việc | Nội dung |
|-------|----------|
| Chốt bản Linux | **Ubuntu 22.04 LTS** (64-bit) hoặc tương đương RHEL 9 — một bản dài hạn, có cập nhật bảo mật |
| Cài gói | PostgreSQL 16 + PostGIS · Redis · Mosquitto · phần mềm API (Docker hoặc dịch vụ hệ thống) |
| Kết nối camera (nếu có) | Dùng thư viện Linux của hãng camera — **không** cài gói Windows |

Máy STT 67 giữ Windows cho đèn giao thông.

---

## 5. Vận hành dài hạn (24/7)

| Tiêu chí | 1–2 năm / chạy thử | 3–5 năm liên tục (Chi cục) |
|----------|---------------------|----------------------------|
| CPU 12 nhân | Đủ | Đủ |
| RAM 32 GB | Đủ | Đủ; xem xét 64 GB nếu tải tăng |
| 1 ổ SSD 960 GB, chưa RAID | Đủ CSDL | **Chưa đạt an toàn** — hỏng 1 ổ mất dữ liệu |
| MQTT + SignalR | Đủ quy mô Chi cục | Đủ; một máy chủ không cần cụm phức tạp |
| Sao lưu | Nên có | **Bắt buộc** bản sao CSDL ra ngoài máy STT 66 |
| Bảo hành máy | 36 tháng tại chỗ ngày làm việc tiếp theo | Theo hợp đồng bảo trì sau 36 tháng |

**Kết luận dài hạn:** máy **đủ công suất** để chạy API + CSDL + MQTT + SignalR. An toàn dữ liệu phụ thuộc **RAID + sao lưu**, không phải thiếu CPU.

---

## 6. Khuyến nghị trước khi đưa vào vận hành

1. **Chốt STT 66** là máy chủ RMMS (Linux). STT 67 chỉ đèn giao thông.
2. **Thêm 1 SSD 960 GB**, cấu hình RAID 1; tắt tiết kiệm điện BIOS.
3. Cài Ubuntu 22.04 LTS + PostgreSQL + Redis + Mosquitto + API.
4. Lịch sao lưu CSDL hàng ngày ra thiết bị/thư mục **không nằm trên cùng 1 ổ**.
5. Nếu kéo camera/tuyến bằng quang xa: **đổi module STT 62** đúng cáp đơn mode (LX/ZX), không dùng SX 550 m.
6. Ảnh hiện trường / hồ sơ lớn: bổ sung ổ trong máy hoặc kho lưu trữ riêng — **không** để đầy SSD hệ thống.

---

## 7. Tóm tắt một câu

> Danh mục **đủ máy chủ** để chạy RMMS (API, cơ sở dữ liệu, MQTT, SignalR) trên **Dell PowerEdge R760 — STT 66 — Linux**. Không đổi sang Windows. Các mục còn lại là điện, tủ, mạng, an ninh phòng hoặc đèn giao thông. Trước vận hành dài hạn: RAID, sao lưu, chốt bản Linux LTS.

---

*Tài liệu kỹ thuật nội bộ tương ứng: `docs/context/29-ONPREM-SERVER-STT66.md`.*
