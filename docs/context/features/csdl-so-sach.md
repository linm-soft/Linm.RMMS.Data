# CSDL sổ sách — Hub catalog (Kind G)

> **Slug:** `csdl-so-sach` · **Module:** Asset · Patrol · Maintenance  
> **Phase:** P1  
> **Status:** Hub shell **done** (2026-08-29) · typed Cục **open**  
> **sourceKind:** hub = live MFE · **delta Cục** = `data-import/Sổ sách, biểu mẫu trình LĐ Cục` (QĐ/BC 08/2026)  
> **Kind hub:** **G** only — card grid · KPI · tab · `open-resource`  
> **Typed form:** **không** gói trong slug này — **1 nút = 1 feature** `csdl-bieu-{nn}` / `csdl-so-{nn}` · epic [`csdl-cuc-2026.md`](csdl-cuc-2026.md)  
> **SSOT analy:** [`specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md`](../../../specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md)  
> **MFE:** `Linm.Web.RMMS.Asset` · `/so-ts/csdl-so-sach`  
> **API live:** `api/v1/asset/csdl-records` · **cấm** invent `api/v1/infra/*` · **cấm** ERP.*  
> **≠** `asset-kcht-dashboard` `/so-ts/hang-muc` · ≠ Sổ TS `so-ts-*`  
> **Hai lớp (2026-09-05):** hang-muc/Sổ TS = hồ sơ cái · hub này = biểu/sổ in Cục — LOOKUP chung · ROW riêng · [`csdl-cuc-2026.md`](csdl-cuc-2026.md) §1b

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu hub | Catalog **16 biểu + 10 sổ** (Cục 08/2026) · KPI từ API · card title VN · **cấm** Thêm mới trên title hub |
| Live hiện tại | Tab **12+8** · form generic 3 ô + `entries.col1–3` — **GAP-CSDL-CUC-01** |
| Persona | Khu QLĐB · Văn phòng · Nhà thầu BDTX · Hạt trưởng |
| DoD hub P1 | KPI 16/10 · `formNo` Cục · deep-link `?resource=` giữ key · **không** typed cột Excel |
| Typed / import | Child `csdl-bieu-*` · `csdl-so-*` · Wave 0 hub = `T-HUB-01` + `T-REN-01` |
| ≠ KCHT | 40 ô chỉ đếm → `/so-ts?type=` · **cấm** nhập biểu Cục trên hang-muc |

## 2. Design / UI (erp-form-context)

| Screen | Pattern | Kind | Zones |
|--------|---------|------|-------|
| Hub catalog | Card grid **16 biểu** + tab **10 sổ** | **G** | Title · KPI · tab · cards · deep-links |
| List resource | CatalogListShell | **B** | Toolbar · filter search · grid · pager |
| Form bản ghi / entry | Slideout | **D** | Z1 toolbar · Z2 fields (+ entries) · Z3 Lưu/Hủy |

**Layout hub**

- Tab **CSDL (16 biểu)** · **Sổ BDTX (10 mẫu)** — live còn 12+8 đến Wave 0  
- KPI: số biểu · số sổ · tổng bản ghi · đã có dữ liệu (API, **cấm** hardcode)  
- Card: số thứ tự · tên · entity · API resource · đếm bản ghi  
- Deep-link Biểu 1 → `pavement-section.html` · map → `gis-draw-live.html`

**Layout list**

- SearchText · Tỉnh · Tên đường · Trạng thái · Tìm · Xóa ĐK  
- Toolbar: Tạo mới · Import Excel · Export · Làm mới · Bản đồ  
- Grid cột chung: Mã · Đường · Tỉnh · Lý trình · TT · ĐV QL · actions  
- Row: Xem · Sửa · Copy · Xóa  

**Layout form Kind D**

- Header compact: Mã (IdCode) · Đường · Tỉnh · KmFrom–To  
- Chi tiết theo lớp: trường đặc thù entity (từ `11` §1.2 / §3)  
- Sổ: header sổ + `pattern_inline_grid` lines (entry)  
- Create / Edit / View / Copy — View: Sửa · Đóng (không disabled xám)

**Mock:** fake multi-resource · localStorage `rmms-demo-csdl-list` · toast VI · **cấm BE**.

**Kind gate:** Confirmed by: ai-autocode-autopilot  
**2e IdCode:** prefix theo resource (`MD` Biểu1 · `BR` cầu · … · `SO` sổ) `XX-YYYYMMDD-NNNN`  
**2k:** leave-confirm khi dirty  
**Chrome:** skip logo/bell/user GOVOne — shell Linm modern

### AI support (map 15)

| | |
|--|--|
| Trực tiếp trên hub | **Không** engine detect riêng (≠ ai-vision / ai-asset-detect) |
| Liên kết AI | Pin «AI new» / QR media thuộc slug `asset` · PCI thuộc `gis` / `ai-vision` |
| Badge demo | Info «AI link» → asset candidates — **không** hứa auto-fill 12 biểu P1 |

## 3. API (P1 align — Asset domain · DOMAIN-MAP)

> **Chốt SA (2026-08-09):** `api/v1/so-ts/csdl-records` (+ query `resource=`) — **không** dùng `/api/v1/infra/*` ngoài DOMAIN-MAP. BFF `web-bff/api/v1/asset/csdl-records`. MFE `/so-ts/csdl-so-sach`.

### 3.1 Catalog CRUD (polymorphic)

```
GET         /api/v1/asset/csdl-records/catalog
GET/POST    /api/v1/asset/csdl-records?resource=
GET/PUT/DEL /api/v1/asset/csdl-records/{id}
```

| Resource | Biểu | Entity |
|----------|------|--------|
| `pavement-sections` | 1 | PavementSection |
| `bridges` | 2 | Bridge |
| `road-tunnels` | 3 | RoadTunnel |
| `culverts` | 4 | Culvert |
| `ditches` | 5 | Ditch |
| `underpasses` | 6 | Underpass |
| `traffic-safety` | 7 | TrafficSafetyAsset |
| `boundary-markers` | 8 | BoundaryMarker |
| `retaining-walls` | 9 | RetainingWall |
| `shoulders-fences` | 10 | ShoulderFence |
| `lighting-systems` | 11 | LightingSystem |
| `green-assets` | 12 | GreenAsset |

### 3.2 Sổ 8 mẫu

| Mẫu | Path group | Entity |
|-----|------------|--------|
| 1 | `/api/v1/patrol-logs/books` · `/entries` | PatrolLogBook |
| 2 | `/api/v1/duty-logs` | DutyLog |
| 3 | `/api/v1/checkpoint-duties` | CheckpointDutyLog |
| 4 | `/api/v1/traffic-counts` · accident-summaries | TrafficCountSummary |
| 5 | `/api/v1/bridges/{id}/passport` · inspections | BridgePassport / Inspection |
| 6 | `/api/v1/row-violations` · construction-permits | RowViolation · ConstructionPermit |
| 7 | `/api/v1/maintenance-work-logs` | MaintenanceWorkLog |
| 8 | `/api/v1/inspection-logs/books` · entries | InspectionLogBook |

**BE status (demo_scan):** toàn bộ group **MISSING** trên `Linm.Web.ERP.WebService` → **GAP-F-CSDL-01** · **be_align OFF** (skill `/qlbd-analy-demo` demo only).

```json
{
  "code": "BR-20260802-0001",
  "resource": "bridges",
  "roadName": "QL1A",
  "provinceName": "Nghệ An",
  "kmFrom": 12.5,
  "kmTo": 12.8,
  "status": "tot",
  "manageUnit": "Khu QLĐB II",
  "detail": { "bridgeName": "Cầu Sông Cấm", "lengthM": 85, "builtYear": 2008 }
}
```

## 4. Database

| Lớp | Entity mẫu | Notes |
|-----|------------|-------|
| A | 12 entity §1 `11-…` | PostGIS optional · soft-delete · tenant CompanyCode |
| B | 8 sổ + entry | Media MinIO · kỳ / book header |
| C | Report query | Export đúng cột Excel biểu |

Index gợi ý: `(CompanyCode, Code)` · `(RoadName, KmFrom, KmTo)` · GIST(Geom) · `(BookId, CheckedAt)`.

Chi tiết cột: SSOT [`11-CSDL-SO-SACH-DATABASE-API.md`](../11-CSDL-SO-SACH-DATABASE-API.md).

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `infra.upserted` | Asset/infra | Gis overlay · Report |
| `patrol-log.entry.created` | Patrol | Incident / Ops |
| `gis.drawing.committed` | Gis | `POST /infra/{resource}` |

Platform events **DEFER** tới Signed + BE.

## 5b. Child features (Cục 08/2026 · 1 nút = 1 feature)

Hub **không** chứa typed Excel. Pipeline: `/agent-qldb-workflow` từng slug `csdl-bieu-01`…`16` · `csdl-so-01`…`10`. Catalog: [`csdl-cuc-2026.md`](csdl-cuc-2026.md).

## 6. Gaps / quyết định

| ID | Severity | Note |
|----|----------|------|
| GAP-CSDL-CUC-01 | P0 | Live 12+8 vs Cục **16+10** — Wave 0 hub |
| GAP-CSDL-CUC-02 | P0 | `formNo` biểu 7–10 và sổ 1–2 **đảo** vs QĐ |
| GAP-CSDL-CUC-11 | P1 | Hai lớp: **cấm** merge Sổ TS/hang-muc vào biểu — LOOKUP chung · ROW riêng · [`csdl-cuc-2026.md`](csdl-cuc-2026.md) §1b |
| GAP-F-CSDL-01 | P1 | Docs cũ `/api/v1/infra/*` — live **`api/v1/asset/csdl-records`** |
| GAP-F-CSDL-02 | Info | Biểu 7 multi-entity vs 1 row — default multi + facade (`GAP-CSDL-01` doc 11) |
| GAP-F-CSDL-03 | P2 | Import Excel full 12 sheet — demo toast/stub cột |
| GAP-P2-KIND-RMMS | Info | Hub Kind G+B+D adapted (không voucher KT) |
| GAP-P1-CC | P1 | Chưa wire common-components — visual parity only |
| GAP-P2-ACT | — | Action work gate: search + Create/Edit/View/Copy + **Delete toolbar/row** + deep-link `?resource=&form=` (FormType task_9106e8fa) |

**Synthetic:** **không** mở RECAPTURE-GAPS chỉ vì không có GOVOne.

## 7. Demo checklist (chốt khách)

- [x] Hub 12 biểu + 8 sổ (tab + cards)
- [x] List mỗi resource + **search/filter work**
- [x] **Create / Edit / View / Copy** form Kind D work
- [x] Fake data multi-resource · IdCode · localStorage
- [x] Import/Export / map deep-link mock
- [x] Sổ: header + entry lines `pattern_inline_grid`
- [x] Leave-confirm dirty · toast VI · **không BE**
- [x] `sourceKind=synthetic` catalog/hub · skip chrome GOVOne
- [x] Dev menu `/dev` qua `demoCatalog.ts`
- [x] Context §1–§7 + control-map

<!-- LEGACY-GOVONE-CAPTURE:START -->
## Legacy GOVOne (auto-capture)

> **sourceKind=synthetic** — suy luận từ product docs / hồ sơ chuẩn hóa.  
> **Không** màn GOVOne riêng «CSDL 12 biểu + 8 sổ».  
> **Không** password · **không** clone skin GOVOne · shell Linm modern.

### Nguồn

- SSOT API/DB: `docs/context/11-CSDL-SO-SACH-DATABASE-API.md`
- Hồ sơ: `local-script/hoso-extract/` (sheet-*.tsv · mau-so.txt)
- Liên quan: `features/pavement-section.md` · `asset.md` · `patrol.md` · `maintenance.md`

### Capture inventory

Vision packets: **0** (pure synthetic).  
Pages suy luận: hub · list ×20 resource · form ×20 · book entry grid.
<!-- LEGACY-GOVONE-CAPTURE:END -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-08-29T12:29:10.846Z` |
| mobile | — | — | — |
