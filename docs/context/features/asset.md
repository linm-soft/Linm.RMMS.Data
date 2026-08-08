# Quản lý tài sản đường bộ — Feature Context

> **Slug:** `asset` · **Module:** `Asset` · **Phase:** P1  
> **Status:** Aligned (list pack `task_c30a9a02` · 2026-08-08)  
> **Feature Kind:** **B** — Catalog list + form (erp-form-context); demo HTML vẫn Kind F map+list  
> **Sources:** guide Tài sản / Tài sản KCHT · `RMMS` §1 · `07` §1 · `09` · **`11-CSDL-SO-SACH`** · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/features/asset-demo.html` → `../asset/asset.html`  
> **MFE:** `Linm.Web.RMMS.Asset` · `/asset` · `AssetListPage` / `AssetFormPage`  
> **Specs:** `Linm.RMMS.Data/specs/asset/`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Quản lý toàn bộ TS (mặt đường, cầu, hầm, cống, taluy, hộ lan, biển báo, đèn, camera ITS, cột Km/H, sơn kẻ, lan can, hàng rào, cây xanh) + GPS/QR/ảnh/hồ sơ/tuổi thọ/giá trị/lịch sử SC |
| Persona | Tuần đường · Ban QLDA · Sở GTVT |
| App hiện có | Mobile **Tài sản** (thu thập/cập nhật/bản đồ) · Web **Tài sản KCHT** (QL TS · import · tuyến · đoạn · lý trình · địa bàn · loại) · **Giám sát tài sản** — giữ UX |
| DoD ngắn | API CRUD + nearby/bbox + media presign + QR + import + soft delete + tenant |
| List pack DoD | Kind B shell · search work · row menu · View readonly · Create/Edit/Copy · BE `rmms/road-assets` |

## 2. Design / UI

| Screen | Pattern | Zones | Map guide |
|--------|---------|-------|-----------|
| **Danh mục TS (MFE list)** | **Catalog list (Kind B)** | LinPageLayout · toolbar · search/type · row menu · form full | — |
| Thu thập / cập nhật Mobile | Full (giữ) | Loại TS · form · ảnh · GPS | Mobile a–b |
| Bản đồ TS Mobile | Full | Tuyến · loại · pin | Mobile c |
| QL tài sản KCHT (demo) | Full / Kind F | List · map · import wizard | Web a |
| QL tuyến / đoạn / lý trình / địa bàn / loại | Full | CRUD master | Web b–f |
| Giám sát tài sản Web | Full | Map · filter tuyến | Web Giám sát TS |
| Chi tiết + media + QR | Full page form | Create/Edit/View/Copy | RMMS §1 |

**Mock data:** 5 tài sản (mặt đường, cầu, biển báo, hộ lan, cột Km).

## 3. API

**P1 list (implemented):** Base `api/v1/rmms/road-assets` · BFF `web-bff/api/v1/rmms/road-assets`  
⚠️ **Không** dùng Finance `api/v1/assets` (TSCĐ FixedAsset).

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/rmms/road-assets?search=&type=&page=&pageSize=` | List + search |
| GET | `/rmms/road-assets/{id}` | Chi tiết |
| POST | `/rmms/road-assets` | Tạo |
| PUT | `/rmms/road-assets/{id}` | Sửa |
| DELETE | `/rmms/road-assets/{id}` | Soft delete (`IsActive=false`) |

**Planned (context roadmap — not this pack):**

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/assets/nearby?lat=&lng=&radiusM=` | Gần vị trí |
| GET | `/assets/within-bbox?...` | Trong khung bản đồ |
| POST | `/assets/{id}/media` | Upload (presign) |
| POST | `/assets/{id}/qr` | Sinh QR |
| GET | `/assets/qr/{code}` | Lookup QR |
| POST | `/assets/import` | Import dữ liệu sẵn có |
| GET | `/assets/export` | Export |

Auth: JWT + tenant `companyCode` / `X-Company-Id`.

## 4. Database

| Entity | Key columns | Notes |
|--------|-------------|-------|
| RoadSection, Bridge, Tunnel, Culvert, Slope, Guardrail, TrafficSign, Lighting, KmPost | Id, Code, Name, Geom | PostGIS `GEOMETRY` |
| AssetMedia | AssetId, Url, Kind | MinIO |
| AssetHistory | AssetId, At, Note | Lịch sử sửa chữa |

Indexes: trigram/`code`+`name` · spatial GIST trên `Geom`.

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `asset.updated` | Asset | Gis (overlay) |
| `asset.candidate.detected` / Confirm | AiVision [`ai-asset-detect`](ai-asset-detect.md) | Asset CRUD · Gis pin «AI new» |

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-F-ASSET-01 | Một bảng polymorphic vs bảng theo type | Theo type (07) |
| GAP-F-ASSET-02 | Digital Twin 3D | OUT P1 → Gis P2 |

## 7. Demo checklist (chốt khách)

- [x] List + **search** + filter loại / lý trình / tree tuyến
- [x] Chi tiết có GPS / ảnh / mã QR · **Create / Edit / View / Copy** form work
- [x] **Leaflet live** · pin lat/lng seed · lớp nền OSM / sat / topo (cấm CSS gradient map)
- [x] Không yêu cầu nhập lại toàn bộ dữ liệu (import/API mock)
- [x] Đủ field + 11 action từ `demo-maps/asset-control-map.md` (24 · user · tiện ích · xóa ĐK · lấy DL · +/−/⇧ · GPS · lớp nền · lớp CĐ)
- [x] **AI support** (15-map Giám sát TS): badge · candidate «AI new» · Confirm/Dismiss · P1 read+confirm / P2 auto-create tuỳ

**Demo path:** `Linm.RMMS.Demo/src/demo/asset/asset.html` (+ `public/demo/asset/`) · sourceKind **legacy** · no BE

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> Auto map từ `tools/legacy-govone-capture` · vision: `_raw/legacy-govone/ai-analysis/`.
> Dùng làm **step context** cho `/qlbd-analy-demo` · `yarn scan-qlbd-demo`.

### Nguồn

- Raw feature: `docs/context/_raw/legacy-govone/features/asset.md`
- Vision packets: 5

### AI Vision summaries

- [`008-so-tai-san`](../_raw/legacy-govone/ai-analysis/008-so-tai-san.md) — SỔ TÀI SẢN
- [`012-so-tai-san`](../_raw/legacy-govone/ai-analysis/012-so-tai-san.md) — SỔ TÀI SẢN
- [`023-so-tai-san`](../_raw/legacy-govone/ai-analysis/023-so-tai-san.md) — SỔ TÀI SẢN
- [`024-so-tai-san-24`](../_raw/legacy-govone/ai-analysis/024-so-tai-san-24.md) — SỔ TÀI SẢN › 24
- [`025-so-tai-san-24`](../_raw/legacy-govone/ai-analysis/025-so-tai-san-24.md) — SỔ TÀI SẢN › 24 › +

### Capture inventory

> Auto-generated by `tools/legacy-govone-capture`. Input cho `/product-analy-demo` · `/qlbd-analy-demo`.
> Source: https://pmdb.govone.vn — **không** chứa password.

## Pages (5)

### SỔ TÀI SẢN

- **id:** `008-so-tai-san`
- **url:** https://pmdb.govone.vn/ketcauhatang.aspx
- **title:** Kết cấu hạ tầng - gServer Phiên bản 2.1

### SỔ TÀI SẢN

- **id:** `012-so-tai-san`
- **url:** https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan
- **title:** Kết cấu hạ tầng - gServer Phiên bản 2.1
- **headings:** Kết cấu hạ tầng

#### Labels / field captions

- Lý trình từ:
- Lý trình đến:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | textfield-1033-inputEl | Nhập và Enter để lọc dữ liệu |
| input | text | textfield-1079-inputEl | vd: km1+100 |
| input | text | textfield-1080-inputEl | vd: km5+100 |
| input | text | inputItem |  |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| 24 | nav | toolbar | a |  |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Tiện ích | nav | toolbar | a |  |
| Xóa điều kiện | destructive | grid | a |  |
| Lấy dữ liệu | nav | grid | a |  |
| + | create | grid | button |  |
| − | action | grid | button |  |
| ⇧ | action | grid | button |  |
| Vị trí của tôi | action | grid | button |  |
| Lớp nền | action | grid | button |  |
| Lớp chuyên đề | action | modal | button |  |

- **actionCount:** 11

### SỔ TÀI SẢN

- **id:** `023-so-tai-san`
- **capture:** `capture/asset/root/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan
- **title:** Kết cấu hạ tầng - gServer Phiên bản 2.1
- **headings:** Kết cấu hạ tầng

#### Labels / field captions

- Lý trình từ:
- Lý trình đến:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | textfield-1033-inputEl | Nhập và Enter để lọc dữ liệu |
| input | text | textfield-1079-inputEl | vd: km1+100 |
| input | text | textfield-1080-inputEl | vd: km5+100 |
| input | text | inputItem |  |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| 24 | nav | toolbar | a |  |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Tiện ích | nav | toolbar | a |  |
| Xóa điều kiện | destructive | grid | a |  |
| Lấy dữ liệu | nav | grid | a |  |
| + | create | grid | button |  |
| − | action | grid | button |  |
| ⇧ | action | grid | button |  |
| Vị trí của tôi | action | grid | button |  |
| Lớp nền | action | grid | button |  |
| Lớp chuyên đề | action | modal | button |  |

- **actionCount:** 11

### SỔ TÀI SẢN › 24

- **id:** `024-so-tai-san-24`
- **capture:** `capture/asset/24/view/` (master/page/action)
- **url:** https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan
- **title:** Kết cấu hạ tầng - gServer Phiên bản 2.1
- **headings:** Kết cấu hạ tầng

#### Labels / field captions

- Lý trình từ:
- Lý trình đến:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | textfield-1033-inputEl | Nhập và Enter để lọc dữ liệu |
| input | text | textfield-1079-inputEl | vd: km1+100 |
| input | text | textfield-1080-inputEl | vd: km5+100 |
| input | text | inputItem |  |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| 24 | nav | toolbar | a |  |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Tiện ích | nav | toolbar | a |  |
| Xóa điều kiện | destructive | grid | a |  |
| Lấy dữ liệu | nav | grid | a |  |
| + | create | grid | button |  |
| − | action | grid | button |  |
| ⇧ | action | grid | button |  |
| Vị trí của tôi | action | grid | button |  |
| Lớp nền | action | grid | button |  |
| Lớp chuyên đề | action | modal | button |  |

- **actionCount:** 11

### SỔ TÀI SẢN › 24 › +

- **id:** `025-so-tai-san-24`
- **capture:** `capture/asset/24/page/` (master/page/action)
- **url:** https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan
- **title:** Kết cấu hạ tầng - gServer Phiên bản 2.1
- **headings:** Kết cấu hạ tầng

#### Form sample (Create/Thêm)

- **trigger:** +
- Lý trình từ:
- Lý trình đến:

#### Labels / field captions

- Lý trình từ:
- Lý trình đến:

#### Inputs

| tag | type | name/id | placeholder |
|-----|------|---------|-------------|
| input | text | textfield-1033-inputEl | Nhập và Enter để lọc dữ liệu |
| input | text | textfield-1079-inputEl | vd: km1+100 |
| input | text | textfield-1080-inputEl | vd: km5+100 |
| input | text | inputItem |  |

#### Actions / buttons (full)

| label | kind | zone | tag | disabled |
|-------|------|------|-----|----------|
| 24 | nav | toolbar | a |  |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | a |  |
| Tiện ích | nav | toolbar | a |  |
| Xóa điều kiện | destructive | grid | a |  |
| Lấy dữ liệu | nav | grid | a |  |
| + | create | grid | button |  |
| − | action | grid | button |  |
| ⇧ | action | grid | button |  |
| Vị trí của tôi | action | grid | button |  |
| Lớp nền | action | grid | button |  |
| Lớp chuyên đề | action | modal | button |  |

- **actionCount:** 11

## Migration notes

- Map fields/actions → `npm run map:demo` (modern MFE control-map · erp-form-context).
- Demo: same fields · Linm shell — **cấm** clone skin GOVOne · **cấm** BE.

### Step context checklist

- [x] Design demo parity legacy zones (map+list+filter · skip chrome GOVOne)
- [x] Control-map fields từ Labels/Inputs/Vision + product form
- [ ] Status Demo → Signed → `/qlbd-align-mfe`
<!-- LEGACY-GOVONE-CAPTURE:END -->

<!-- DEMO-MFE-MODERN:START -->
## Demo MFE modern (erp-form-context)

> Same fields/actions từ GOVOne · UI chuẩn Linm — **không** clone skin legacy.

- Control-map: [`asset-control-map.md`](../_raw/legacy-govone/demo-maps/asset-control-map.md)
- Actions: [`asset-actions.md`](../_raw/legacy-govone/demo-maps/asset-actions.md)
- Fields mapped: 18 (filter+form) · Actions: 11 legacy chrome + Create/Edit/View/Copy/AI
- Kind hint: F/custom map + list — erp-custom-manage + GIS · erp-list-page-shell
- sourceKind: **legacy** · RECAPTURE P0 asset **closed** (demo filled 2026-08-02 · task_4b4da1e1)

Gen demo: `/qlbd-analy-demo @asset` — load control-map trên + `/erp-form-context` rules (2a-K · 2g · common controls).
<!-- DEMO-MFE-MODERN:END -->
