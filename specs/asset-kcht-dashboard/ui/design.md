# Design — asset-kcht-dashboard (Dashboard Hạng mục KCHT)

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| this role | `design` · `/agent-design` |
| Feature Kind | **E** — hub 4×10 count cards · read-only navigate |
| changeScope | `edit_page` (icon SSOT `/edit-web-feature`) |
| packKind | **`dashboard`** (≠ Report KPI slug `dashboard`) |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_ac761cee`) |
| autoApprove | **ON** (delta đã chốt user) · **cấm** AskQuestion `design_confirm` · **cấm** enqueue SA |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route `/so-ts/hang-muc` |
| mfeStdUrl | `http://localhost:9301/so-ts/hang-muc` |
| widgetKey | `@linm/rmms-asset-kcht-widget` · Asset :9201 |
| dashboardHost | `D:/MFE-CORE/Linm.Web.Dashboard` · `@linm/dashboard` · `/dashboard` · :8502 |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets/summary-by-type` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` · `asset-kcht-dashboard-real-data.md` |
| prior · po | `confirmed` · `po/requirement.md` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `keep_current` |
| taskId | `task_ac761cee` |
| updatedAt | `2026-08-23T21:55:00.000Z` |
| editSlash | `/edit-web-feature` · role **design** + **team-lead** only |
| iconSsot | `/gen-icon-img` · `{MapIconModule}` `assetIconBareHtml(iconCode)` · **cấm** fork SVG |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/asset-kcht-dashboard.md` | 40 ô inventory · widget contract · GAP-AKD-* |
| CTX-02 | `docs/context/features/asset.md` | parent list · drill `/so-ts?type=` |
| CTX-03 | `docs/context/features/asset-kcht-32.md` | catalog 36 loại |
| DEM-01 | — | **N/A** — screenshot GOVOne SSOT visual |
| DA-01 | `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/asset-kcht-dashboard-real-data.md` | real-data bind §A+§B |
| PO | `specs/asset-kcht-dashboard/po/requirement.md` | Kind E dashboard · gaps chốt |

Persona: Hạt · Khu QLĐB · lãnh đạo. Pack **không** clone chrome GOVOne / sidebar / menu demo.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **E** — hub tile count cards |
| Standalone | **1×** `LinPageLayout` kind=`catalog` — Zone A header + body grid |
| Widget embed | Body = cards only · **cấm** H1 trùng host `WIDGET_REGISTRY` title |
| Grid | 4-col responsive card grid · **cấm** `LinCatalogDataGrid` |
| Form / CRUD | **OUT** — read-only hub · navigate on click |
| Toolbar | **OUT** — không Zone B list toolbar |
| Footer | **OUT** — không pagination |
| Toast | GAP-AKD-01 click → toast «Hạng mục chưa có danh mục tương ứng trong hệ thống.» · **cấm** `window.alert`/`confirm` |
| Leave | `LeaveConfirmModal` nếu form sau drill dirty (downstream) |

## 2. Screens

| id | Surface | Pattern | Route / mount | Zones | Actions |
|----|---------|---------|---------------|-------|---------|
| S-STANDALONE | Hub KCHT full page | Kind E A + body | `/so-ts/hang-muc` | A · GRID | display counts · click drill |
| S-WIDGET | Dashboard widget slot | Kind E body only | `@linm/rmms-asset-kcht-widget` · `cols:3` | GRID | same drill · host title from registry |

**devSlash:** `/agent-dev` · peer list `asset` · **cấm** Kind B list parity gates.

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Artifact | [`ui/prototype/asset-kcht-dashboard-prototype.html`](./prototype/asset-kcht-dashboard-prototype.html) |
| Scope | **content-only** — skip GOVOne chrome / sidebar / menu / note demo |
| Variants | **Standalone** (H1 + grid) · **Widget** (grid only — simulates host header) |
| Zones | DES-TILE-A · DES-TILE-GRID · DES-TILE-CARD |
| SSOT | `list-shell-prototype` (zones A–D adapted Kind E) · `ai-chrome-skip` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-kcht-dashboard/ui/prototype/asset-kcht-dashboard-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/hang-muc` |

### Wire (standalone — zones A + GRID)

```
[A] fa-th-large + «Hạng Mục Kết Cấu Hạ Tầng»  (LinPageLayout header · 22px)
[GRID] 4-col responsive · 40 cards (cột 1→4, trên→dưới)
  [CARD] pict `/gen-icon-img` (SVG `iconCode`) trong vòng 40×40 · label · count vi-VN (đậm phải)
  hover: border primary · shadow nhẹ
  skeleton: loading state (10 hàng placeholder)
```

### Wire (widget — body only)

```
[HOST-SIM] dashed box «Hạng Mục Kết Cấu Hạ Tầng» (registry title — **không** implement trong widget)
[GRID] same 40 cards · **cấm** H1 trong widget body
```

## 4. Zone → Component map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-TILE-A | `LinPageLayout` / `LinPageHeader` · title + `fa-th-large` |
| GRID | DES-TILE-GRID | `KchtHangMucDashboard` root `.grid` · `role="list"` |
| CARD | DES-TILE-CARD | `<button>` card · icon wrap · label · count |
| Skeleton | DES-TILE-SKEL | `.skeleton` rows while loading |
| Widget | DES-TILE-EMBED | `KchtHangMucDashboard` `embedMode={true}` · **cấm** LinPageLayout |

## 5. Card spec

| Token | Value |
|-------|-------|
| Background | `#fff` |
| Border | `1px solid #e8e8e8` · hover `#1677ff` |
| Radius | `8px` |
| Min-height | `64px` |
| Icon wrap | `40×40` circle · bg `#e6f4ff` |
| Icon glyph | **SVG** `assetIconBareHtml(iconCode)` · màu native pict · **cấm** `fas fa-*` / recolor `#1677ff` |
| Label | `13px` · `font-weight: 500` · flex grow |
| Count | `16px` · `font-weight: 700` · `vi-VN` locale (vd. `22.045`) |
| Gap grid | `12px` |
| Responsive | 4-col desktop · 2-col ≤900px |

## 5b. Icon SSOT (`/gen-icon-img`) — HARD

Mọi pict **ô tile** (standalone + widget) = SVG map GIS. **Cấm** Font Awesome trên tile tài sản (**GAP-WEB-EDIT-04**). **Cấm** copy SVG vào Asset MFE (**GAP-WEB-EDIT-05**).

| Field | Value |
|-------|-------|
| `{MapIconModule}` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis/src/shared/map/mapAssetIcons.ts` |
| `{DemoIconModule}` | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/p/js/rmms-map-asset-icons.js` |
| API | `assetIconBareHtml(iconCode)` — SVG, không badge status |
| `iconCode` | ∈ `ASSET_CODE_META` (32 mã + fallback `TS`) |
| Tile không 1:1 | **closest** code · ghi cột Ghi · invent pict mới = `/gen-icon-img` (không làm ở dashboard) |
| Page chrome | H1 `fa-th-large` = layout chrome · **không** pict tài sản |

Render: `dangerouslySetInnerHTML` / prototype `innerHTML` từ cùng hàm. SVG scale trong vòng 40×40 (`svg` ~28×34).

## 6. 40 ô tile inventory (screenshot SSOT order)

Thứ tự **cột 1→4, trên→dưới**. Prototype + Dev dùng cùng order `KCHT_TILES` + **`iconCode`**.

| # | Label | iconCode | Closest? | Drill |
|---|-------|----------|----------|-------|
| 1 | Thông tin tuyến | `TD` | 1:1 | `road-route` |
| 2 | Thông tin đoạn tuyến | `DD` | 1:1 | `pavement-section` |
| 3 | Bến phà và phà | `CAU` | closest (không mã phà) | `FERRY` |
| 4 | Bến xe ô tô | `BX` | 1:1 | `BUS_STATION` |
| 5 | Cầu phao | `CAU` | closest GIS `cau` | `PONTOON` · count DB `/summary-by-type` |
| 6 | Cống chui dân sinh, hào kỹ thuật | `CC` | 1:1 | `UNDERPASS` |
| 7 | Cống thoát nước ngang | `CN` | 1:1 | `CULVERT_X` |
| 8 | Công trình HTKT trong phạm vi GPMB | `HT` | 1:1 | `ROW_UTIL` |
| 9 | Cột km | `KM` | 1:1 | `KM_POST` |
| 10 | Cống dọc, rãnh dọc, hào kỹ thuật dọc | `CD` | closest (`RDOC` rãnh) | `DITCH` |
| 11 | Dải phân cách giữa | `GPC` | 1:1 | `MEDIAN` |
| 12 | Bảo vệ mái dốc (gia cố mái ta luy) | `MD` | closest (`TL` tà luy) | `SLOPE_PROTECT` |
| 13 | Điểm dừng đỗ xe bus, xe khách | `BUS` | 1:1 | `BUS_STOP` |
| 14 | Cọc tiêu, cọc h | `CT` | closest (`CH` cọc H) | `DELINEATOR` |
| 15 | Điểm giao bằng với đường sắt | `NG` | closest (nút giao) | `RAIL_CROSS` |
| 16 | Đường tràn, cầu tràn, bến tràn, ngầm | `CN` | closest GIS `cong` | `SPILLWAY` · count DB |
| 17 | Hộ lan, tôn sóng, hàng rào | `HL` | 1:1 | `GUARDRAIL` |
| 18 | Hệ thống chiếu sáng đường | `CS` | 1:1 | `LIGHTING` |
| 19 | Hệ thống giao thông thông minh | `CAM` | closest (ITS cam) | GAP-AKD-01 |
| 20 | Kè, tường chắn | `KE` | closest (`TC` tường) | `RETAINING` |
| 21 | Kho bãi vật tư dự phòng | `NH` | closest (nhà hạt/kho) | GAP-AKD-01 |
| 22 | Nhà hạt QLĐB, trụ sở chi cục | `NH` | 1:1 | `STATION_HOUSE` |
| 23 | Nút giao đường bộ | `NG` | 1:1 | `INTERCHANGE` |
| 24 | Trạm phương tiện cứu hộ cứu nạn | `NH` | closest | `RESCUE_VEHICLE` · count DB |
| 25 | Rào chắn ồn | `HL` | closest (hàng rào) | GAP-AKD-01 |
| 26 | Trạm dừng nghỉ | `BX` | closest (bến/trạm) | `REST_AREA` |
| 27 | Trạm kiểm soát trọng tải xe | `NH` | closest | GAP-AKD-01 |
| 28 | Trạm thu phí | `NH` | closest | `TOLL` |
| 29 | Trạm trực cấp cứu | `NH` | closest | `EMS_POST` |
| 30 | Trạm đếm | `CAM` | closest | GAP-AKD-01 |
| 31 | Giá long môn, cột cần vượt, gương cầu | `BB` | closest (biển/gantry) | `GANTRY_SIGN` |
| 32 | Biển báo | `BB` | 1:1 | `TRAFFIC_SIGN` |
| 33 | Đất thuộc TS hạ tầng đường bộ | `NL` | closest (nền/lề) | `LAND_ROW` |
| 34 | Đường nhánh | `TD` | closest (hành lang) | GAP-AKD-01 |
| 35 | Đường tránh | `TD` | closest | GAP-AKD-01 |
| 36 | Đường gom song hành | `TD` | closest | GAP-AKD-01 |
| 37 | Bãi đỗ xe | `BX` | closest | GAP-AKD-02 |
| 38 | Thống kê tai nạn giao thông | `BB` | closest (cảnh báo) | `/bao-cao/tngt` |
| 39 | Điểm đen, điểm tiềm ẩn TNGT | `BB` | closest | `/bao-cao/tngt` |
| 40 | Biện pháp xử lý khắc phục | `HT` | closest | `/bao-cao/tngt` |

GAP-AKD-01 tiles: count **0** · click → info toast · **cấm** invent API. **Cấm** invent pict mới cho closest.  
GAP-WEB-EDIT-SEED: count **chỉ** BFF/DB · API lỗi → «—» · **cấm** demo/`withFallback`.

## 7. Drill navigation

| Tile kind | Navigate |
|-----------|----------|
| `road-route` | `/master/road-route` |
| `pavement-section` | `/so-ts/pl-mat-duong` |
| `asset-type` | `/so-ts?type={typeCode}` |
| `report` | `/bao-cao/tngt` (GAP-AKD-03) |
| `gap` | Toast only · **cấm** navigate |

## 8. Widget host contract (Design cite — Dev Dashboard repo)

```
WIDGET_REGISTRY entry:
{ id: 'rmms-kcht-hang-muc', title: 'Hạng Mục Kết Cấu Hạ Tầng', parcelName: '@linm/rmms-asset-kcht-widget', cols: 3 }

Export: { bootstrap, mount, unmount } — singleSpaReact
Import map: "@linm/rmms-asset-kcht-widget": "//localhost:9201/linm-rmms-asset-kcht-widget.js"
CSS: .widgetBody stretch when parcelName set (GAP-AKD-WIDGET-CSS)
```

## 9. Cấm

- `LinCatalogDataGrid` / list CRUD / Thêm mới / Zone F schema
- Copy 40 ô vào Report `/bao-cao/dashboard` KPI
- `ParcelComponent` / `ParcelLinkConfig` consumer path
- `window.alert` / `window.confirm`
- Chrome GOVOne (logo · Hồ sơ · Đổi MK)
- Invent `api/v1/dashboard/kcht` · ERP.* · bind API trên `@linm/dashboard`
- H1 trong widget body (trùng host header)
- `fas fa-*` / emoji trên **tile** pict tài sản (**GAP-WEB-EDIT-04**)
- Fork / paste SVG pict vào Asset MFE (**GAP-WEB-EDIT-05**)

## 10. Handoff → Team-lead (delta icon · **không** SA)

| Field | Value |
|-------|-------|
| Next slash | **`/agent-dev`** khi user mở Dev — **không** enqueue SA/Dev turn này (`/edit-web-feature` · role **design** + **team-lead** only) |
| API paths | Không đổi — `GET /asset/road-assets/summary-by-type` · **cấm** T-BE icon |
| Open Q | Icon SSOT chốt §5b + §6 · closest-code · **cấm** invent pict dashboard |
| Chain | Design delta **locked** (user scoped) · TL `T-UI-ICON-01` · `T-QA-ICON-01` **open** · **cấm** `design_confirm` AskQuestion lại |
| e2eQa | ON khi QA sau Dev icon |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-23T22:10:00.000Z |
| versionGate | keep_current |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=keep_current -->
