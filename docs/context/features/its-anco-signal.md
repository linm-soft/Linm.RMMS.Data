# Tích hợp nút đèn Anco — Camera + đếm xe — Feature Context

> **Slug:** `its-anco-signal` · **Module:** Camera × Integration × Traffic  
> **Status:** Context (2026-09-18 · `/hey-linm` Apply) · **chưa** STATUS / demo  
> **Kind:** **F** ops (list nút + pane live + pane đếm) — PO/Design lock; **cấm** Kind B CRUD đèn  
> **Nguồn:** [`Anco-6. Tài liệu tích hợp cho bên thứ 3.docx`](../../tai-lieu/Anco-6.%20Tài%20liệu%20tích%20hợp%20cho%20bên%20thứ%203.docx) · extract [`analyzed/anco-its-integrate.md`](../../data/analyzed/anco-its-integrate.md) · `SRC-ANCO-ITS`  
> **Peers:** [`camera-connect.md`](camera-connect.md) (live · events · counts) · [`camera-vehicle-type.md`](camera-vehicle-type.md) · [`gis-camera-map.md`](gis-camera-map.md) (wall) · [`rpt-dem-xe.md`](rpt-dem-xe.md) · [`csdl-so-04.md`](csdl-so-04.md)  
> **≠** `toc` (P3 VMS / AI ùn tắc) · **≠** gộp slug `camera-connect` / `gis-camera-map`  
> **MFE đề xuất:** `Linm.Web.RMMS.Camera` · route đề xuất **`/camera/nut-den`** · `mfeStdUrl` `http://localhost:9316/camera/nut-den` — **chưa** apply `route-vn-abbr-confirm`  
> **devSlash:** `/agent-qldb-workflow` `roleOnly=data_analy` · live cam `/agent-dev-camera-connect`  
> **Confirm user:** Wave 1 = Camera + Chi tiết đếm xe · **Bản đồ phân luồng DEFER** · Anco **chỉ đọc** (Login · Get_List · Get_Cycle_Now) · Config_Plan / Config_Now **DEFER**

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Nút đèn Anco là **neo**. Chọn nút → **hiển thị camera** (peer `camera-connect`) + **chi tiết đếm xe** (peer events/counts). Không điều khiển đèn Wave 1. |
| Persona | Điều hành viên TTĐH · ITS Chi cục |
| App hiện có | Camera CRUD `/camera` · wall `/gis/camera` · báo cáo `/bao-cao/dem-xe` — **chưa** màn nút đèn Anco |
| DoD Wave 1 | List nút từ Anco Get_List · chọn nút → cam gán + live/JPEG · bảng đếm theo loại (9 type hãng) + chu kỳ đèn Get_Cycle_Now |
| DoD Wave 2 | **DEFER** — Bản đồ phân luồng (confirm sau) |
| DoD OUT | Config_Plan / Config_Now · HMAC gửi lệnh · 16 hạng Sổ 04 · gộp `toc` |

Tài liệu Anco **không** có camera / đếm xe. Camera + đếm = RMMS `CameraDevice` / `CameraEvent` **gắn IMEI** nút.

## 2. Design / UI (Wave 1)

| Screen | Pattern | Zones |
|--------|---------|-------|
| Nút đèn `/camera/nut-den` | Kind F split | Z1 list nút · Z2 camera · Z3 chi tiết đếm · Z4 chu kỳ đèn |

| Zone | Nội dung |
|------|----------|
| **Z1 List nút** | Get_List: Name · Address · Phase · IMEI · Online (token Anco). Search tên/địa chỉ. **Cấm** CRUD Anco |
| **Z2 Camera** | Cam gán `AncoImei` · tile live HLS/JPEG peer `camera-connect` · Offline / «Chưa gán cam». **Cấm** `alert` |
| **Z3 Chi tiết đếm xe** | Hôm nay UTC+7 · `vehicleStats` + feed `GET /camera-events` filter cam của nút · nhãn [`camera-vehicle-type.md`](camera-vehicle-type.md) · **cấm** 16 ô Sổ 04 / 19 hạng TCVN |
| **Z4 Chu kỳ** | Get_Cycle_Now: `Time_Chuky` · hướng Red/Green · Yellow · Walk · Phase_change — **chỉ đọc** |

**Cấm** hardcode nhãn VN trên form ERP (`useFormOptions`). Kind F GIS/ops: chrome peer Camera.  
**Cấm** `window.alert` / `confirm`.

Map Wave 2: **không** vẽ phân luồng trên màn này. Pin nút (Lat/Lng) **không** = bản đồ phân luồng.

## 3. Current vs New

| Hạng mục | Đã có (cite) | Mới | Gap |
|----------|--------------|-----|-----|
| Anco HTTP | Không | Client Login + Get_List + Get_Cycle_Now | GAP-ANCO-BE-01 |
| Camera live | `/camera` · `/gis/camera` | Pane live theo nút | GAP-ANCO-JOIN-01 |
| Đếm xe | Events + `GET /cameras/{id}/counts` mock · `rpt-dem-xe` Kind E | Chi tiết theo nút (không report B.1/B.2) | GAP-ANCO-COUNT-01 |
| Bản đồ phân luồng | — | Wave 2 | GAP-ANCO-MAP-02 **DEFER** |
| Điều khiển đèn | Config_Plan / Config_Now trong doc | OUT Wave 1 | GAP-ANCO-CTRL-01 **DEFER** |

## 4. API

### 4.1 Đối tác Anco (cite extract — không bịa path)

Base Url + Code + UserName + Password + HASH Key do Anco cấp. Lưu `{RulesRoot}/.env` qua **`/linm-setup-env`**. **Cấm** paste secret chat · **cấm** AutoCode `.env`.

| Method | Path | Dùng Wave 1 |
|--------|------|-------------|
| POST | `Account/Login` `{ iUsername, iPassword }` | Có — token |
| GET | `Points/Get_List` header `Authority` | Có — list nút |
| GET | `Points/Get_Cycle_Now?iIMEI=` | Có — chu kỳ |
| POST | `Points/Config_Plan` · `Points/Config_Now` | **DEFER** |

Envelope: `Code` 1/2/3 · `ErrMessage` · `Data`.

Get_List field: `IMEI` · `Name` · `Address` · `Phase` · `Directions[]` (`Id`,`Name`) · `Lng` · `Lat`.  
**GAP-ANCO-COORD-01:** doc gán Lng=vĩ độ / Lat=kinh độ — **đảo** so GIS. Chốt 1 nút thật trước plot.

### 4.2 RMMS đã có (peer — **cấm** invent path mới cho cam)

| Method | Path | Status |
|--------|------|--------|
| GET | `/api/v1/cameras` | DONE `camera-connect` |
| GET | `/api/v1/cameras/{id}` | DONE |
| POST | `/api/v1/cameras/{id}/live/start` · `stop` · `heartbeat` | P2-G2b |
| GET | `/api/v1/camera-events` · `/cameras/events` | DONE · `vehicleStats` |
| GET | `/api/v1/cameras/{id}/counts?from=&to=` | P1.6 mock |

### 4.3 RMMS wrapper Anco — **MISSING** (SA — **cấm** coi DONE)

BFF `web-bff/api/v1/…` · prefix `api/v1/` · **cấm ERP.*** · **cấm** MFE gọi Anco trực tiếp (CORS + secret).

Đường dẫn cụ thể = **SA** (`/agent-sa`) sau data-analy. Sketch chỉ: JWT RMMS → service login Anco server-side → list/cycle. **Không** lock path trong context này.

Join cam↔nút: field `AncoImei` trên `CameraDevice` = **Schema** khi persist → **`/database-migration` `Schema_*` pair**. P1 mock map client **OK** nếu chưa cột DB.

## 5. Database

| Entity | Wave 1 | Notes |
|--------|--------|-------|
| `CameraDevice` · `CameraEvent` | Reuse | Peer camera-connect |
| Cột `AncoImei` | Khi persist join | CLI pair · TenantEntity · UTC |
| Bảng Anco riêng | Không bắt buộc P1 | Cache list/cycle in-memory TTL OK |

IdCode: không tạo mã nút RMMS nếu IMEI Anco là khóa đối tác. Cam vẫn `IIdCodeService` peer Camera.

## 6. Events / bảo mật

Không publish platform event Wave 1.  
Anco token: cache server · Code=3 → login lại.  
HMAC Config_* không dùng Wave 1.

Perm đề xuất: `camera.anco.signal` (xem) + peer `camera.device.view`. Seed menu **`/gen-navigation-menu-import`** khi implement — chưa turn này.

## 7. Gaps

| ID | Default | OUT |
|----|---------|-----|
| GAP-ANCO-BE-01 | BFF+service proxy Anco · secret env | MFE gọi Anco |
| GAP-ANCO-JOIN-01 | Map IMEI ↔ `CameraDevice` (mock P1 / Schema khi persist) | Invent `api/v1/gis-camera-map` |
| GAP-ANCO-COUNT-01 | Events + counts peer · 9 type hãng | Bind Sổ 04 `class01`…`16` |
| GAP-ANCO-COORD-01 | Chốt Lng/Lat vs GIS | Plot mù |
| GAP-ANCO-CTRL-01 | Config_* DEFER | Điều khiển đèn Wave 1 |
| GAP-ANCO-MAP-02 | Bản đồ phân luồng DEFER (user confirm sau) | Làm map Wave 1 |
| GAP-ANCO-TOC-01 | Slug riêng · **cấm** nhét vào `toc` | — |

## 8. Demo checklist (sau Design)

- [ ] List nút Anco (mock hoặc lab Url)
- [ ] Chọn nút → camera live/JPEG hoặc empty VN
- [ ] Chi tiết đếm hôm nay + loại xe tiếng Việt
- [ ] Chu kỳ đèn đọc-only
- [ ] Không chrome GOVOne · không alert · không Config_*
- [ ] Không bản đồ phân luồng Wave 1

## 9. Handoff

| Slash | Khi |
|-------|-----|
| `/agent-qldb-workflow` `data_analy` | Start — context+demo controlHint |
| `/agent-dev-camera-connect` | Live JPEG/HLS |
| `/linm-setup-env` | Anco Url / User / Pass / HASH / Code |
| `/database-migration` | Khi thêm `AncoImei` / cache table |
| `/gen-navigation-menu-import` | Menu Auth |
| `/agent-dev-oms-map` · GIS | **Chỉ** Wave 2 phân luồng |

**Cấm** enqueue `toc`. **Cấm** MAIN3 `--features`. Next pipeline: data-analy — **chưa** enqueue turn này.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `data_analy` | `draft` | `2026-09-18` |
| mobile | — | — | — |
