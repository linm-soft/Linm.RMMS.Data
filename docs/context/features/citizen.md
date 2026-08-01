# Cổng người dân — Feature Context

> **Slug:** `citizen` · **Module:** `Integration` + FE public · **Phase:** P3  
> **Status:** Demo  
> **Kind:** **G** (public host) + **D** (slideout form báo sự cố) — Confirmed by: ai-autocode-autopilot  
> **Sources:** `RMMS` §15 · `07` Hạng mục 15 · `06` rate-limit/PII · `09` · `15-SCREEN-AI-MAP.md`  
> **Demo HTML:** `Linm.RMMS.Demo/public/demo/integration/citizen.html`  
> **MFE (align):** `Linm.Web.RMMS.Integration` · **cấm** sửa MFE ở phase demo  
> **≠** Mobile **Góp ý** phần mềm (`feedback`)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Người dân báo sự cố · upload ảnh/video · theo dõi xử lý · phản ánh hiện trường |
| Persona | Công dân / khách anonymous (OTP tuỳ chọn) |
| App hiện có | Portal mới — không có màn GOVOne |
| DoD | POST public incident · GET by trackingCode · rate-limit IP · source=`citizen` |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| Host portal | Kind G | Landing CTAs · recent mock · track | Public shell |
| Báo sự cố | Kind D Slideout | Z1 toolbar · Z2 fields+map · Z3 footer | Leaflet pin |
| Theo dõi xử lý | Panel / filter | Tra cứu mã · timeline readonly | Không admin inbox |

**Kind D layout (erp-form-context):**

- **Z1** — Quay lại · Đóng · title «Báo sự cố» · hint · badge ≠ feedback  
- **Z2a** — Validation banner (họ tên · SĐT · mô tả)  
- **Z2b** — Mã · PII · loại · mô tả · vị trí · lat/lng · tuyến · lý trình · ảnh · video · OTP · TT · nguồn  
- **Z2c** — Leaflet map pin  
- **Z3** — Gửi báo cáo · Lưu nháp · Xóa nội dung · Hủy thay đổi  

**Mock:** nháp localStorage · IdCode `CIT-YYYYMMDD-NNNN` · toast gửi thành công (no BE) · track fake list.

**2d readonly:** rule_defaults · Confirmed by: ai-autocode-autopilot  
**2e IdCode:** `CIT-YYYYMMDD-NNNN`  
**2k:** voucher_default · leave-confirm khi dirty  

## 3. API

| Method | Path | Mô tả | BE status |
|--------|------|-------|-----------|
| POST | `/api/v1/public/incidents` | Báo sự cố (+ media meta) | **MISSING** (Step 4b khi Signed) |
| GET | `/api/v1/public/incidents/{trackingCode}` | Theo dõi xử lý | **MISSING** |
| POST | `/api/v1/citizen/incident` | Alias rate-limit doc | **MISSING** · đồng bộ schema khi align |
| POST | `/api/v1/upload/presign` | Presign ảnh/video | **MISSING** · demo file mock only |

> Phase demo: **cấm** gọi BE · fake / localStorage only. Align BE khi Status Signed + be_align ON.

## 4. Database

| Entity | Key columns |
|--------|-------------|
| CitizenIncident | Id, TrackingCode, ReporterName(enc), Phone(enc), Email(enc), Type, Description, Lat, Lng, Road, Chainage, Status, Source=`citizen`, ReportedAt |
| CitizenMedia | Id, IncidentId, Kind(photo/video), ObjectKey, Size |
| CitizenStatusEvent | Id, IncidentId, Status, Note, At |

## 5. Events / tích hợp

- Map → Incident `source=citizen` (adapter stub trên Incident — GAP-F-CIT-01)  
- SMS/notify khi đổi trạng thái — DEFER P3  
- Rate limit 5 req/min/IP · Citizen Temp Token 24h (localStorage mock)

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-CIT-01 | Adapter Incident source=`citizen` | OUT P1 · stub khi align |
| GAP-F-CIT-02 | BE public endpoints | MISSING · be_align khi Signed |
| GAP-F-CIT-03 | OTP bắt buộc? | Optional UX mock |
| GAP-F-CIT-04 | Phân biệt feedback | Luôn badge / copy ≠ Góp ý nội bộ |

## 7. Demo checklist (chốt khách)

- [ ] Form báo sự cố đủ field control-map (17)
- [ ] Upload ảnh/video mock + GPS/map pin
- [ ] Theo dõi xử lý bằng mã tracking
- [ ] Không nhầm Mobile **Góp ý** (`feedback`)
- [ ] Đủ 17 actions từ control-map
- [ ] Leave-confirm khi dirty
- [ ] Không gọi BE

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/citizen.md`
- Vision packets: 0

### Capture inventory

> **Không có màn GOVOne vision** — portal mới (P3).  
> Capture synthetized từ `RMMS` §15 · `07-TECHNICAL-IMPLEMENTATION` Hạng mục 15 · `06-SECURITY-RATELIMIT` · `01-PLATFORM-OVERVIEW`.  
> Source: product docs — **không** password · **không** clone skin GOVOne.  
> **≠** Mobile **Góp ý** nội bộ (`feedback`).

## Pages (2)

### 1) BÁO SỰ CỐ / PHẢN ÁNH HIỆN TRƯỜNG (form public)

- **id:** `citizen-report-form`
- **url:** (planned) `/citizen` · `/integration/citizen`
- **title:** Cổng người dân — Báo sự cố
- **headings:** Thông tin người báo · Vị trí hiện trường · Ảnh/Video · Gửi

#### Labels / field captions

- Mã theo dõi:
- Họ tên:
- Số điện thoại:
- Email:
- Loại sự cố:
- Mô tả / phản ánh hiện trường:
- Địa chỉ vị trí:
- Vĩ độ:
- Kinh độ:
- Tuyến đường:
- Lý trình (Km):
- Ảnh đính kèm:
- Video đính kèm:
- Thời gian báo cáo:
- OTP:
- Trạng thái xử lý:
- Nguồn:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | trackingCode | CIT-20260801-0001 |
| input | text | reporterName | Nguyễn Văn Dân |
| input | tel | phone | 09xxxxxxxx |
| input | email | email | email@example.com |
| select | select-one | incidentType | o-ga |
| textarea | text | description | Mô tả sự cố / phản ánh hiện trường… |
| input | text | address | Địa chỉ gần đúng |
| input | number | lat | 21.0285 |
| input | number | lng | 105.8542 |
| input | text | roadName | QL1A |
| input | text | chainage | Km 12+350 |
| input | file | photos | image/* |
| input | file | videos | video/* |
| input | datetime-local | reportedAt | 2026-08-01T18:00 |
| input | text | otp | 6 số |
| select | select-one | status | draft |
| input | text | source | citizen |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Báo sự cố | create | host | button | |
| Gửi báo cáo | create | footer | button | |
| Lưu nháp | action | footer | button | |
| Xóa nội dung | destructive | footer | button | |
| Chọn ảnh | action | content | button | |
| Xóa ảnh | destructive | content | button | |
| Chọn video | action | content | button | |
| Xóa video | destructive | content | button | |
| Lấy vị trí GPS | action | content | button | |
| Gửi OTP | action | content | button | |
| Xác thực OTP | action | content | button | |
| Đóng | close | header | button | |
| Quay lại | nav | header | button | |
| Hủy thay đổi | close | footer | button | |

- **actionCount:** 14
- **fieldCount:** 17

### 2) THEO DÕI XỬ LÝ (tra cứu mã)

- **id:** `citizen-track-status`
- **url:** (planned) `/citizen/track`
- **title:** Theo dõi xử lý sự cố
- **headings:** Tra cứu mã · Tiến độ xử lý

#### Labels / field captions

- Mã theo dõi:
- Trạng thái xử lý:
- Thời gian cập nhật:
- Ghi chú tiến độ:

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| Theo dõi xử lý | view | host | button | |
| Tra cứu mã | filter | track | button | |
| Làm mới tra cứu | filter | track | button | |

- **actionCount:** 3 (host+track; tổng portal = 17 khi gộp host)

### Step context checklist

- [ ] Design demo parity legacy zones
- [ ] Control-map fields từ Labels/Inputs/Vision
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ capture · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`citizen-control-map.md`](../_raw/legacy-govone/demo-maps/citizen-control-map.md)
- Actions: [`citizen-actions.md`](../_raw/legacy-govone/demo-maps/citizen-actions.md)
- Fields mapped: 17 · Actions: 17
- Kind hint: **G+D** — erp-form-context · leave-confirm · Leaflet pin

Gen demo: `/qlbd-analy-demo @citizen` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->

## 8. Tracking (autopilot)

| | |
|--|--|
| Task | `task_01a40d1c` |
| Skill | `/qlbd-analy-demo @citizen` |
| Files | `citizen.md` · `demo-maps/citizen-*.md` · `public/demo/integration/citizen.html` · `js/citizen-*.js` · `demoCatalog.ts` |
| BE align | OFF (demo) · GAP-F-CIT-02 documented |
| Confirmed by | ai-autocode-autopilot |
