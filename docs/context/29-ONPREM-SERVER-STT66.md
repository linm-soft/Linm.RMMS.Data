# RMMS — Máy chủ on-prem STT 66 (API · DB · MQTT / SignalR)

> **Ngày:** 2026-09-08  
> **Phạm vi:** phần cứng **máy chủ** trong danh mục thẩm định 28/08/2026 — **không** GPU, không phòng, không tường hình, không switch/firewall.  
> **Nguồn BOM:** `docs/gioi-thieu-ung-dung/tai-lieu-ky-thuat/5. Danh mục phong may chu_03092026 v2.doc` (STT 66–67).  
> **Khớp:** `02-SYSTEM-ARCHITECTURE.md` §8 · `03-EVENT-ARCHITECTURE.md` · `07-TECHNICAL-IMPLEMENTATION.md` §0.1 · `13-AI-SERVER-BY-PHASE.md` Phase 0 · `features/camera-connect.md` (Linux64 SDK).

---

## 0. Kết luận

| Câu hỏi | Trả lời |
|---------|---------|
| STT 66 chạy **API + PostgreSQL + MQTT + SignalR**? | **Đủ** — quy mô Chi cục / P1, **vận hành dài** nếu RAID + backup |
| Đổi code sang Windows? | **Không** — stack prod đã Linux (Railway + `libhcnetsdk.so`) |
| Linux OSS trên BOM thiếu gì? | **Ghim distro LTS + gói runtime** — không đổi kiến trúc phần mềm |
| STT 67 (Win2025 đèn GT) | **Không** cài RMMS |

**Workload trong file này:** `Rmms.Api` (.NET 8) · PostgreSQL 16 + PostGIS (+ Timescale khi GPS) · Redis · Mosquitto (MQTT) · SignalR trên cùng process API.

---

## 1. Máy trong BOM

| STT | BOM | SKU | Dùng |
|-----|-----|-----|------|
| **66** | Máy chủ camera · **Linux mã nguồn mở không cần bản quyền** | Dell PowerEdge R760xs · 1× Xeon Silver **4510** 12C/24T · **32 GB** DDR5 · **1× 960 GB** SATA RI · Dual **800 W** · 1G + **10/25 GbE** · iDRAC9 · BH 36 tháng NBD | **Host RMMS** |
| 67 | Máy chủ đèn giao thông · Windows Server 2025 Standard 16CORE | Cùng phần cứng | ITS đèn — **cấm** trộn RMMS |

So sàn Phase 0 (`13`): Xeon + **16 GB+**, không GPU. STT 66 **mạnh hơn** DMS tham chiếu (`10`: 2× E5-2620, 16 GB, SSD 500 GB).

---

## 2. Vai trò từng process trên STT 66

```
STT 66 (Linux LTS)
 ├── Kestrel  Rmms.Api  (.NET 8)     API + SignalR hubs
 ├── PostgreSQL 16 + PostGIS         DB nghiệp vụ
 ├── TimescaleDB (tuỳ)               GPS / IoT time-series
 ├── Redis                           cache · rate-limit · SignalR backplane khi >1 replica
 └── Mosquitto (MQTT)                edge / xe / sensor → IoT ingestion
```

| Lớp | SSOT | Ghi chú on-prem |
|-----|------|-----------------|
| **API** | `api/v1/` · .NET 8 Kestrel | Docker hoặc systemd — **không** IIS |
| **Database** | PostgreSQL 16 + PostGIS · Timescale GPS | Native Linux; volume trên SSD (sau này thêm ổ 3.5") |
| **SignalR** | Notification / GIS / Task / ItsHub (`02` · `03` · `25` · `16`) | **1 replica** = không bắt buộc Redis backplane; Redis vẫn nên có cho cache |
| **MQTT** | Edge → broker → IoT Ingestion (`03` §3 · `06` rate 1.000 msg/s/device) | Mosquitto (hoặc EMQX) trên cùng máy P1 |

**Không** nhầm: RabbitMQ/MassTransit = bus nội bộ module (`03`) — P1 **in-process** được; MQTT = **thiết bị hiện trường**. SignalR = **trình duyệt / app** realtime.

---

## 3. Vận hành dài (nhiều năm) — đủ hay không

Ước RAM một máy 32 GB (P1 Chi cục, không GPU, không ghi video):

| Process | RAM gợi ý | Ghi chú |
|--------|-----------|---------|
| OS + iDRAC agent | ~2 GB | |
| PostgreSQL + PostGIS | 12–16 GB | `shared_buffers` ~8 GB |
| Rmms.Api + SignalR | 2–4 GB | Hàng trăm connection Chi cục |
| Redis | 1–2 GB | |
| Mosquitto | < 0,5 GB | |
| **Tổng** | **~20–24 GB** | **32 GB còn biên** |

| Hạng mục | Ngắn (UAT / 1–2 năm) | Dài (3–5 năm, 24/7) |
|----------|----------------------|----------------------|
| CPU 12C | Đủ API+PG+MQTT+SignalR | Đủ Chi cục; Cục / GIS nặng thì chật |
| RAM 32 GB | Đủ | Đủ Chi cục; **nâng 64 GB** nếu user + GIS toàn quốc |
| Disk 1× 960 GB | Đủ **DB + WAL** (không ảnh/video) | **Không an toàn** — 1 ổ, chưa RAID, RI 1 DWPD |
| PSU dual 800 W | Đủ | Đủ |
| NIC 10/25G | Đủ MQTT + SignalR + API | Đủ |
| HA | 1 máy = SPOF | Backup PG + RAID; replica khi lên Cục |
| BHN | ProSupport 36 tháng | Gia hạn hoặc kế hoạch thay ổ |

**Kết luận dài hạn:** phần **tính toán** (CPU/RAM/NIC) đủ chạy API+DB+MQTT+SignalR 24/7 quy mô Chi cục. Việc **bắt buộc trước prod dài:** RAID1 (thêm 1 SSD) · backup PG ra ngoài máy · tắt Power Saving BIOS · chính sách retention Timescale. Ảnh tuần đường / clip **không** để hết trên 960 GB.

---

## 4. Linux OSS — có cần đổi hệ thống không?

**Không đổi kiến trúc / không port Windows.** API image prod đã Linux (`02` Railway · camera Linux64 2026-09-05).

| Thành phần | Trên Linux OSS | Cần đổi app? |
|------------|----------------|--------------|
| **API .NET 8** | Kestrel + systemd hoặc Docker | Không. **Cấm** IIS trên STT 66 |
| **Hikvision SDK** | `libhcnetsdk.so` + `LD_LIBRARY_PATH` | **Không** copy `HCNetSDK.dll` (`GAP-CAM-SDK-OS`) |
| **PostgreSQL + PostGIS** | Apt/yum native | Không — Linux là OS đúng cho PG |
| **Redis** | `redis-server` | Không |
| **SignalR** | Trong process API | 1 replica OK; scale-out mới cần Redis backplane + sticky |
| **MQTT** | Mosquitto OSS | Không — broker Linux chuẩn; app chỉ MQTT client |
| **09 / 07 ghi «Windows Server»** | Plan cũ (IIS) | **Lệch** với STT 66 + Railway — on-prem **theo Linux** |

### 4.1 Ghim OS (BOM chỉ ghi «Linux OSS»)

BOM không ghi distro. **Chốt vận hành:** **Ubuntu 22.04 LTS** x64 (khớp Docker/camera lab) hoặc RHEL 9 tương đương — **một** LTS, ESM/cập nhật bảo mật.

Gói tối thiểu (không GPU):

```
ubuntu-22.04
dotnet-runtime-8.0          # hoặc chạy trong Docker image API
postgresql-16 postgresql-16-postgis-3
redis-server
mosquitto mosquitto-clients
nginx                       # TLS terminate → Kestrel (tuỳ)
```

Env camera (nếu cùng host API): `Camera__HikvisionSdk__NativePath=native/hikvision` · `LD_LIBRARY_PATH` như `features/camera-connect.md`.

### 4.2 Không làm

- Không cài RMMS trên STT 67 Windows.
- Không Mosquitto trên Windows «cho tiện».
- Không đổi SignalR → MQTT cho web client (MQTT = edge; SignalR = UI).

---

## 5. Checklist go-live trên STT 66

- [ ] Ubuntu 22.04 LTS (hoặc RHEL 9) — không distro tùy hứng
- [ ] RAID1 OS/DB (thêm SSD 960 GB) · BIOS Performance
- [ ] Docker Compose **hoặc** systemd: Api + PG + Redis + Mosquitto
- [ ] `pg_dump` / WAL archive ra đĩa/NAS khác máy
- [ ] Health: `/health` API · `sdkDllLoaded` nếu bật SDK · MQTT listener · SignalR 1 client
- [ ] RAM: giữ ~8 GB trống; monitor trước khi GIS nặng

---

## 6. Ngoài phạm vi file này

GPU · MediaMTX/live wall · NAS video · switch/firewall/Peplink · STT 42–65 phòng máy · máy đèn GT.

Peer: `13-AI-SERVER-BY-PHASE.md` · `10-YOLO-SERVER-REQUIREMENTS.md` · `03-EVENT-ARCHITECTURE.md`.  
**Bản gửi khách (map STT/model):** `docs/gioi-thieu-ung-dung/tai-lieu-ky-thuat/danh-gia-phong-may-chu-rmms-gui-khach.md` · Word `Danh-gia-thiet-bi-phong-may-chu-RMMS_08092026.docx`.  
**Mở rộng máy chủ (RAM · lưu trữ · backup):** `docs/gioi-thieu-ung-dung/tai-lieu-ky-thuat/danh-gia-may-chu-rmms-mo-rong.md`.
