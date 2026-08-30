# PO — asset-kcht-dashboard (Dashboard Hạng mục KCHT)

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`dashboard`** (Kind **E** tiles · count cards) — **không** Kind B catalog list/CRUD · **không** gộp slug `dashboard` (KPI Report) |
| Feature Kind | **E** · hub 4×10 count cards · read-only navigate |
| status | `done` |
| requestSource | run packet `task_bd941b19` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` · `asset-kcht-dashboard-real-data.md` · handoff path `specs/asset-kcht-dashboard/specs/_data-analy/clusters/asset-kcht-dashboard.md` **không tồn tại** — dùng artifact thật · **no Excel** |
| sourceFeature | `asset` (list **done** · T-UI-LIST-01) |
| sourceTables | `rmms_road_assets` · `rmms_road_routes` · `rmms_pavement_sections` · master `asset-types` |
| sourceFormReady | **yes** (`specs/asset/STATUS.md` T-UI-LIST-01 **done**) |
| demo | **N/A** — screenshot GOVOne SSOT visual · không Signed demo HTML |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `keep_current` (khớp data-analy + STATUS feature · SSOT file `qldb-workflow-skill-version.json` không trên disk — **không** regen; Autopilot không AskQuestion) |
| updatedAt | `2026-08-23T11:45:00.000Z` |
| taskId | `task_bd941b19` |

## 1. Goal

Hub **40 ô** count hạng mục Kết cấu hạ tầng (KCHT): standalone page `/so-ts/hang-muc` trên MFE Asset + widget `@linm/rmms-asset-kcht-widget` mount `WIDGET_REGISTRY` trên Dashboard `/dashboard`. Persona: Hạt · Khu QLĐB · lãnh đạo. Mỗi ô = loại hạng mục + **số lượng** format `vi-VN` · click → drill list/filter hoặc Report leaf.

**Khác** slug `dashboard` (KPI tuần đường / map sự cố trên Report `/bao-cao/dashboard`). **Cấm** copy 40 ô vào Report hoặc Dashboard KPI. **Cấm** `ParcelComponent` / `ParcelLinkConfig` (SearchInput create path).

Align:

- UI standalone: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route `/so-ts/hang-muc` · mfeStdUrl `http://localhost:9301/so-ts/hang-muc` · `yarn start:std` **:9301**.
- Widget: webpack entry `linm-rmms-asset-kcht-widget.js` · import map `@linm/rmms-asset-kcht-widget` · Asset dev **:9201**.
- Dashboard host: `D:/MFE-CORE/Linm.Web.Dashboard` · `@linm/dashboard` · `/dashboard` · **:8502** · Root shell **:9000**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets/summary-by-type`. **Cấm ERP.*** · **cấm** `api/v1/dashboard/kcht` · **cấm** `api/v1/rmms/*`.

## 2. Current → New (new_page)

| Layer | Current | New |
|-------|---------|-----|
| Web Sổ TS | List asset · **không** hub count KCHT | Page `/so-ts/hang-muc` · 40 card grid 4 cột |
| Dashboard | Placeholder widgets | Authen widget **Tổng quan tài sản** · parcel `@linm/rmms-asset-kcht-widget` · size `3` · + Lối tắt nhanh |
| API | RoadAssets list/CRUD only | + `GET …/road-assets/summary-by-type` aggregate group `Type` |
| GOVOne | Screenshot 40 ô (mock count) | P1 = screenshot order · thiếu `asset-type` = count 0 |

## 3. DoD (đo được)

1. **40 card** theo thứ tự screenshot GOVOne (cột 1→4, trên→dưới) · count format `vi-VN` (vd. `22.045`).
2. Standalone page: H1 «Hạng Mục Kết Cấu Hạ Tầng» · 4-col responsive grid.
3. Widget body: **cards only** · **cấm** H1 trùng host header registry.
4. Click loại TS (`RoadAsset.type`) → `/so-ts?type={code}`.
5. Click «Thông tin tuyến» → `/master/road-route` · «Thông tin đoạn tuyến» → `/so-ts/pl-mat-duong`.
6. 3 ô ops/report (GAP-AKD-03) → navigate Report leaf · count **0** P1.
7. `GET summary-by-type` aggregate tenant · **cấm** N+1 list pageSize lớn.
8. GAP-AKD-01: ô không có `asset-type` code → count **0** · toast «chưa có danh mục» · **cấm** invent API.
9. Widget mount: `System.import('@linm/rmms-asset-kcht-widget')` → `{ bootstrap, mount, unmount }` · thiếu importmap = host placeholder (không crash).
10. **Cấm** `window.alert`/`confirm` · **cấm** chrome GOVOne (logo/Hồ sơ/Đổi MK).
11. Dev: `yarn build` MFE PASS · `dotnet build` BE PASS khi đụng API.
12. **Cấm** `LinCatalogDataGrid` / list CRUD trên hub · **cấm** ERP.* · **cấm** bind API trên `@linm/dashboard`.
13. **Icon SSOT** (`/edit-web-feature` 2026-08-23): 40 ô tile dùng `iconCode` + GIS `assetIconBareHtml` — **cấm** Font Awesome / emoji / copy SVG trên pict tài sản. Closest-code khi không 1:1. H1 chrome FA OK.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset-kcht-dashboard.md` | feature Kind E · 40 ô inventory · widget contract |
| CTX-02 | `docs/context/features/asset.md` | parent list · drill `/so-ts?type=` |
| CTX-03 | `docs/context/features/asset-kcht-32.md` | catalog 36 loại |
| CTX-04 | `docs/context/features/road-route.md` | master tuyến count |
| CTX-05 | `docs/context/features/pavement-section.md` | master đoạn count |
| CTX-06 | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | CSDL nguồn |
| DEM-01 | — | **N/A** — screenshot GOVOne SSOT |
| PROT-01 | `specs/asset-kcht-dashboard/ui/prototype/asset-kcht-dashboard-prototype.html` | Design gen |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` | controlHint · **confirmed** |
| DA-02 | `specs/_data-analy/features/asset-kcht-dashboard-real-data.md` | real-data bind §A+§B |
| MFE | `Linm.Web.RMMS.Asset` `/so-ts/hang-muc` · `http://localhost:9301/so-ts/hang-muc` | UI standalone |
| HOST | `Linm.Web.Dashboard` `/dashboard` · `:8502` | widget consumer |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset` | API · BFF `web-bff/api/v1/asset` |

## 5. controlHint (PO chốt — từ data-analy)

Hub tile Kind E — **không** form fields · **không** LinCatalogDataGrid.

| Zone | Pattern | controlHint |
|------|---------|-------------|
| Standalone page | Full page + H1 | Title «Hạng Mục Kết Cấu Hạ Tầng» |
| Widget body | Cards only | **cấm** H1 trùng host header |
| Grid | 4-col responsive | Card: icon tròn xanh · label · count `vi-VN` |
| Card click — TS | Navigate | `type` → `/so-ts?type={code}` |
| Card click — tuyến | Navigate | `/master/road-route` |
| Card click — đoạn | Navigate | `/so-ts/pl-mat-duong` |
| Card click — ops | Navigate | Report leaf (`rpt-tngt` · GAP-AKD-03) |
| GAP-AKD-01 | No asset-type | count 0 · toast «chưa có danh mục» |

API bind (SA confirm path):

| UI | Method | Path | Notes |
|----|--------|------|-------|
| Count by type | GET | `/asset/road-assets/summary-by-type` | `{ type, count }[]` |
| Label/icon | GET | `/integration/asset-types` | `code` · `name` · icon |
| Tuyến count | GET | `/integration/road-routes?pageSize=1` | `totalCount` |
| Đoạn count | GET | `/asset/pavement-sections?pageSize=1` | `totalCount` |

Perm: `asset.road-assets.read` · JWT · `X-Company-Id`.

## 6. 40 ô inventory (screenshot SSOT — thứ tự PO chốt)

Thứ tự **cột 1→4, trên→dưới**. Catalog 36 **không** = 40 ô — Design **không** bịa ô thiếu; ẩn loại không có trên screenshot trừ khi PO `expand_tiles` (P2).

| # | Nhãn | Map P1 | Ghi |
|---|------|--------|-----|
| 1 | Thông tin tuyến | `road-route` count | Master |
| 2 | Thông tin đoạn tuyến | `pavement-section` count | |
| 3 | Bến phà và phà | `FERRY` | |
| 4 | Bến xe ô tô | `BUS_STATION` | |
| 5 | Cầu phao | `PONTOON` | count = `COUNT(*)` `Type=PONTOON` |
| 6 | Cống chui dân sinh, hào kỹ thuật | `UNDERPASS` | |
| 7 | Cống thoát nước ngang | `CULVERT_X` | |
| 8 | Công trình HTKT trong phạm vi GPMB | `ROW_UTIL` | |
| 9 | Cột km | `KM_POST` | |
| 10 | Cống dọc, rãnh dọc… | `DITCH` / `CULVERT_L` | |
| 11 | Dải phân cách giữa | `MEDIAN` | |
| 12 | Bảo vệ mái dốc | `SLOPE_PROTECT` | |
| 13 | Điểm dừng đỗ xe bus | `BUS_STOP` | |
| 14 | Cọc tiêu, cọc h | `DELINEATOR` | |
| 15 | Điểm giao bằng với đường sắt | `RAIL_CROSS` | |
| 16 | Đường tràn, cầu tràn, bến tràn, ngầm | `SPILLWAY` | count = `COUNT(*)` `Type=SPILLWAY` |
| 17 | Hộ lan, tôn sóng… | `GUARDRAIL` | |
| 18 | Hệ thống chiếu sáng đường | `LIGHTING` | |
| 19 | Hệ thống giao thông thông minh | GAP-AKD-01 | ITS |
| 20 | Kè, tường chắn | `RETAINING` | |
| 21 | Kho bãi vật tư dự phòng | GAP-AKD-01 | |
| 22 | Nhà hạt QLĐB, trụ sở chi cục | `STATION_HOUSE` | |
| 23 | Nút giao đường bộ | `INTERCHANGE` | |
| 24 | Trạm phương tiện cứu hộ cứu nạn | `RESCUE_VEHICLE` | count live DRVN = xe |
| 25 | Rào chắn ồn | GAP-AKD-01 | |
| 26 | Trạm dừng nghỉ | `REST_AREA` | |
| 27 | Trạm kiểm soát trọng tải xe | GAP-AKD-01 | |
| 28 | Trạm thu phí | `TOLL` | |
| 29 | Trạm trực cấp cứu… | `EMS_POST` | |
| 30 | Trạm đếm | GAP-AKD-01 | |
| 31 | Giá long môn, cột cần vượt… | `GANTRY_SIGN` | |
| 32 | Biển báo | `TRAFFIC_SIGN` | |
| 33 | Đất thuộc TS hạ tầng đường bộ… | `LAND_ROW` | |
| 34 | Đường nhánh | GAP-AKD-01 | |
| 35 | Đường tránh | GAP-AKD-01 | |
| 36 | Đường gom song hành | GAP-AKD-01 | |
| 37 | Bãi đỗ xe | GAP-AKD-02 | count 0 · tách `REST_AREA` |
| 38 | Thống kê tai nạn giao thông | `rpt-tngt` | ops · count 0 |
| 39 | Điểm đen, điểm tiềm ẩn TNGT | GAP-AKD-03 | ops/report |
| 40 | Biện pháp xử lý khắc phục | GAP-AKD-03 | ops/report |

## 7. Open questions — PO chốt (Autopilot)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-AKD-01 | Ô không có `asset-type` code | Hiện card count **0** · click → toast «chưa có danh mục» · **cấm** invent API/CRUD |
| GAP-AKD-02 | Bãi đỗ vs trạm dừng nghỉ | **2 ô riêng** · count từ type khi có mã · P1 count 0 cho Bãi đỗ |
| GAP-AKD-03 | 3 ô ops (TNGT · điểm đen · biện pháp) | count **0** P1 · navigate Report leaf · **không** bảng Asset |
| GAP-AKD-04 | 36 vs 40 vs seed 23 | Hub = **live DRVN 40 ô** · 2026-08-24: ô 5/16/24 bind `PONTOON`/`SPILLWAY`/`RESCUE_VEHICLE` · catalog `BRIDGE`/`TUNNEL` list only |
| GAP-AKD-SEED | API fail → demo store (số giả) | **cấm** `withFallback` demo · count chỉ BFF/DB · nguồn 5xx hiện «—» |
| GAP-AKD-WIDGET-MAP | Import map key widget | Dev thêm `@linm/rmms-asset-kcht-widget` → `//localhost:9201/linm-rmms-asset-kcht-widget.js` · **cấm** trỏ `@linm/rmms-asset` |
| GAP-AKD-WIDGET-CSS | `.widgetBody` center placeholder | Stretch `align-items: stretch` khi `parcelName` set · min-height đủ 10 hàng |
| GAP-AKD-WIDGET-BOOT | `parcelModule.bootstrap` | Named export `{ bootstrap, mount, unmount }` bắt buộc |
| packKind | run packet ghi `list` · context `dashboard` | PO **chốt `dashboard`** Kind E tiles · **cấm** Design/TL/Dev chuyển sang Kind B list |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Pattern | Zones | Actions |
|---------|---------|-------|---------|
| `/so-ts/hang-muc` standalone | Kind E hub · full page | Title H1 · 4-col card grid | Display counts · click drill |
| Widget `@linm/rmms-asset-kcht-widget` | Embed Dashboard slot `cols:3` | Body = cards only (no H1) | Same drill · host title from registry |

**Không** trên pack này: LinCatalogDataGrid · CRUD form · Thêm mới · Resource/Slideout · Report KPI grid clone.

Widget registry entry P1:

```
{ id: 'rmms-kcht-hang-muc', title: 'Hạng Mục Kết Cấu Hạ Tầng', parcelName: '@linm/rmms-asset-kcht-widget', cols: 3 }
```

## 9. Out of scope (this pack)

- Slug `dashboard` KPI Report (`/bao-cao/dashboard`)
- `ParcelComponent` / `/migrate-to-parcel` consumer path
- CRUD create/update/delete trên hub (read-only count + navigate)
- Invent `api/v1/dashboard/kcht` · ERP.* · Domains/Master fork
- Copy 40 ô vào Report MFE
- `expand_tiles` beyond screenshot 40 (P2)

## 10. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset-kcht-dashboard` / **`dashboard`** Kind E |
| phase_from / phase_to | po **confirmed** → design **pending** |
| STATUS | `specs/asset-kcht-dashboard/STATUS.md` |
| Context / DA | CTX-01 · DA-01 · DA-02 · no Excel |
| controlHint | §5 · hub tile · **cấm** LinCatalogDataGrid |
| Prototype | 4-col grid + widget body variant · `ui/prototype/asset-kcht-dashboard-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-kcht-dashboard/ui/prototype/asset-kcht-dashboard-prototype.html` |
| peerStdUrl | `http://localhost:9301/so-ts/hang-muc` |
| Grid AC / Form AC | **N/A** — không list/form Kind B |
| Next slash | `/agent-design` |
| Chain this turn | **không** (roleOnly=po) · autoApprove=ON → Design tự confirm khi tới lượt |
| e2eQa | ON khi QA · `yarn start:std` + docker + `yarn e2e-qa` |

Design: content-only prototype zones A–D (title + card grid) · **skip** GOVOne chrome/sidebar/menu · widget body variant không H1.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-23T11:45:00.000Z |
| versionGate | keep_current |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=keep_current -->
