# Design — so-ts-count-station (Sổ TS — Trạm đếm)

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_0e1b860d`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `COUNT_STATION` |
| cluster | `station` · ô KCHT `t30` · icon `CAM` |
| dump | `mst_counting_station` |
| prefix | `THC-` (keep live · **cấm** invent FE) |
| prior · po | `confirmed` · `po/requirement.md` · task `task_ccfc7d69` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-count-station-control-hint.md` · `so-ts-count-station-real-data.md` · contentHash `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=COUNT_STATION` · alias board `/so-ts-count-station` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| peerStdUrl | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_0e1b860d` |
| updatedAt | `2026-09-01T07:00:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN (Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp) · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-count-station.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 COUNT_STATION | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-count-station-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-count-station-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `COUNT_STATION` · S-ATTR editable đủ dump §4 · `name` ← `name_vi` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC `agency_id` · coord parse → lat/lng · grid ON+hide-empty ĐVQL/tên EN/số làn/tốc độ · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (≥10 field — **cấm** Modal / Slideout) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `AssetFormPage` · routes `/so-ts/tao-moi` · `/so-ts/sua?id=` · Copy = create prefill — **cấm** Resource · **cấm** overlay `?form=` |
| Form grid | **`data-form-cols="5"`** · **cấm** `.fields { 1fr 1fr }` (**GAP-DES-FORM-SURFACE-01** / **GAP-P2-FORM-GRID-05**) |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` §0 · config=`fa-cog` |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`road-assets` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01/07**) |
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-COUNT-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-count-station` = board deep-link · **optional** redirect → `/so-ts?type=COUNT_STATION` (**GAP-COUNT-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột COUNT_STATION |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `COUNT_STATION` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `COUNT_STATION` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-count-station` → `/so-ts?type=COUNT_STATION` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên VI/EN · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `COUNT_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=COUNT_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=COUNT_STATION` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên (tiếng Việt) | link Text | **ON** | bind `name` = `name_vi` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| agency_id | Đơn vị quản lý | Dropdown label | **ON · hide-empty** | dumpSpecs |
| name_en | Tên (tiếng Anh) | Text | **ON · hide-empty** | dumpSpecs |
| kmFrom | Lý trình | Text chainage | ON | dump lý trình / parse |
| no_of_lane | Số làn đường | Number / Text | **ON · hide-empty** | dumpSpecs |
| speed | Tốc độ | Number / Text | **ON · hide-empty** | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL · seed unit `TRAM` ẩn |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `THC-` |
| type | Loại tài sản | `SearchInput` | * | lock `COUNT_STATION` từ tile `t30` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | `road-route` · `parentCode=route` · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | `road-route` · `parentCode=routeNamed\|route` · dump `name_of_route_asset` |

#### S-LOC-POINT

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | mẫu «Lý trình» · **không** required · **cấm** ép `"0"` |
| lat / lng | Vĩ độ / Kinh độ | `Number` | | ưu tiên parse `from_coordinate` → lat/lng (**GAP-COUNT-COORD-01**) |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `COUNT_STATION` (**GAP-COUNT-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / name_vi | Tên (tiếng Việt) | `Text` | * | SSOT dump `name_vi` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-COUNT-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name_en | Tên (tiếng Anh) | `Text` | | dump |
| agency_id | Đơn vị quản lý | `Dropdown` LOOKUP_STATIC | | **GAP-COUNT-LOOKUP-01** · P1 dump distinct / seed SA |
| no_of_lane | Số làn đường | `Number` | | dump |
| speed | Tốc độ | `Number` | | dump · đơn vị theo dump/mẫu |
| from_coordinate | Tọa độ đầu (dump) | derived / `Text` | | **GAP-COUNT-COORD-01** · ưu tiên map → lat/lng · dumpSpecs giữ |
| to_coordinate | Tọa độ cuối (dump) | derived / `Text` | | optional · **hide** nếu luôn trống |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select. Coord scalar trên S-LOC-POINT / S-GPS; dump keys giữ trong dumpSpecs cho round-trip.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit · tab Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Lịch sử legacy.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Trạm đếm» khi `type=COUNT_STATION` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách trạm đếm» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile COUNT_STATION · resize ON |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-count-station-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon CAM + «Sổ TS — Trạm đếm» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile COUNT_STATION (ẩn type/kmTo/SL/ĐVT · ON+hide-empty ĐVQL/tên EN/số làn/tốc độ)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR agency Dropdown · coord → lat/lng
```

Cite mẫu proto row: `THC-count_station_1001` · `name=Trạm đếm QL1 Hà Nam` · `name_en=Counting Station QL1` · `agency_id=Khu QLĐB II` · `no_of_lane=4` · `speed=80` · route=`QL.1` · routeNamed=`QL.1 - Hà Nam` · routeSegment=`Km 210 + 000 - Km 225 + 000` · `kmFrom=212.5` · lat/lng `20.54` / `105.92` · peer fill `THC-count_station_1002` · count cite import **377**.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột COUNT_STATION · ẩn type / kmTo / quantity / unitCode · ON+hide-empty ĐVQL / tên EN / số làn / tốc độ · 3 tầng tuyến tách |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC `agency_id` — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `COUNT_STATION` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `name_vi` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | Coord: parse `from_coordinate` → lat/lng ưu tiên · `to_coordinate` optional hide · dumpSpecs giữ |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT ô `t30` · drill `COUNT_STATION` · count cite **377** · label UI «Trạm đếm» (**GAP-COUNT-TILE-01** / **GAP-COUNT-LABEL-01**) |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=COUNT_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=COUNT_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-COUNT-LOOKUP-01 | `agency_id` = **Dropdown LOOKUP_STATIC** dump P1 / seed SA — **không** free-text |
| GAP-COUNT-NAME-01 | `name` ← `name_vi` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-COUNT-ROUTE-01 | Live = `/so-ts?type=COUNT_STATION` · alias board-only · **optional** Navigate redirect |
| GAP-COUNT-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key §4 COUNT |
| GAP-COUNT-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-COUNT-COORD-01 | Parse `from_coordinate`/`to_coordinate` → lat/lng ưu tiên · dumpSpecs giữ · `to_coordinate` optional hide |
| GAP-COUNT-GIS-01 | Prefix **giữ `THC-`** · GIS slug layer **DEFER SA** · **cấm** invent FE |
| GAP-COUNT-LABEL-01 | Label UI «Trạm đếm» · BE seed «Trạm đếm xe» giữ · lookups.ts thiếu COUNT_STATION → Dev |
| GAP-SOTS-COL-01 | ON+hide-empty: ĐVQL · tên EN · số làn · tốc độ · ẩn type/kmTo/SL/ĐVT · 3 tầng tuyến tách |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN (kể cả Lưu lượng xe) |
| GAP-COUNT-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-COUNT-TILE-01 | KCHT `t30` · count **377** · deep-link filter type OK |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN (Lưu lượng xe…)
- Kind F map canvas / invent GIS slug FE
- Flatten `dumpSpecs` → cột DB (SA migration)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- Invent prefix FE khác `THC-`
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `COUNT_STATION` · cluster `station` · ô `t30` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html` |
| prototype.artifact | `specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC agency_id · dumpSpecs P1 · hide-empty · coord→lat/lng |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `THC-` · GIS slug DEFER |
| Open SA | dumpSpecs vs flatten · agency LOOKUP seed · coord parse · dumpSpecLabels FE · GIS slug · DOMAIN-MAP Asset |
| Next | `/agent-sa` khi tới lượt · **cấm** start SA trong task Design này |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | 2026-09-01T07:00:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a |
| headerFingerprintPrior | sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_0e1b860d` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked contentHashPriorDataAnaly=sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a taskId=task_0e1b860d -->
