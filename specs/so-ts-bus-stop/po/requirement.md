# PO — Requirement — so-ts-bus-stop (Sổ TS — Điểm dừng xe buýt)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `BUS_STOP` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `BUS_STOP` |
| cluster | `stop` · ô KCHT `t13` |
| dump | `tbl_bus_stops` |
| prefix | **`DX-`** (**GAP-DD-PREFIX-01** chốt) |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-DD-NAME-01 · GAP-DD-SPEC-01 · GAP-DD-POINT-01 · GAP-DD-PREFIX-01 · GAP-DD-ROUTE-01 · GAP-DD-LEAVE-01 · GAP-DD-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 · GAP-FILTER-BAR-01 · GAP-TYP-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_1e861241`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-bus-stop-control-hint.md` · `so-ts-bus-stop-real-data.md` · contentHash `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` · headerFingerprint `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` · analy `task_7552f36d` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STOP` · STATUS alias `/so-ts-bus-stop` = board deep-link only (**GAP-DD-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=BUS_STOP` · alias `http://localhost:9301/so-ts-bus-stop` |
| liveList | `/so-ts?type=BUS_STOP` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-stop-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-stop-real-data.md` |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprint | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_1e861241` · analy `task_7552f36d` |
| updatedAt | `2026-09-01T07:40:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Điểm dừng xe buýt (`BUS_STOP`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy + PO chốt §9):**

1. Grid profile `BUS_STOP`: tên điểm · 3 tầng tuyến · lý trình · loại tài sản · ĐV QL · làn đậu · ghế chờ · nhà chờ · mặt cắt · **ẩn** `type` / `kmTo` / SL / ĐVT · **boolean bay/ghế/nhà chờ luôn ON** (Có/Không — **không** hide-empty) · hide-empty chỉ số length/width / vitri khi fill 0 (**GAP-SOTS-COL-01**).
2. Form S-ATTR editable đủ dump §4 BUS_STOP (không chỉ `<dl>` dumpSpecs).
3. `name` ← `station_name` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-DD-NAME-01**).
4. Stop point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=BUS_STOP` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"` (**GAP-DD-POINT-01**).
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm` (**GAP-DD-LEAVE-01**).
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form (**GAP-SOTS-REUSE-01**).
7. Lookup P1: `type_work_id` / `management_id` / `pavement_type_bus_stop_bay_id` / `structure_bus_shelter_id` / `vitri` / bool bay·ghế·nhà chờ = **Dropdown LOOKUP_STATIC** dump (**GAP-DD-LOOKUP-01**).
8. IdCode create/import prefix **`DX-`** khớp GIS/gov-vn (**GAP-DD-PREFIX-01**).
9. Alias `/so-ts-bus-stop` = board deep-link · live = `/so-ts?type=BUS_STOP` · Design optional Navigate (**GAP-DD-ROUTE-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T07:33:54.890Z` · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy + PO) |
|-------|-------------------------------------------|-----------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `BUS_STOP` |
| Grid columns | schema chung (+ peer type profiles) · **thiếu** profile BUS_STOP | Profile `BUS_STOP` — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (non editable types) | Editable Input/Select đủ dump BUS_STOP — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | thường = route/đoạn khi thiếu ResolveBusStop | `name` ← `station_name` · **cấm** IsWeak → đoạn — **GAP-DD-NAME-01** |
| dumpSpecs labels | có `station_name` (=«Tên trạm») · `type_work_id` · `vitri` — thiếu bay/shelter keys | Label VN «Tên điểm» · làn đậu · ghế · nhà chờ · đường lánh nạn… — **GAP-DD-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=BUS_STOP` — **GAP-DD-POINT-01** |
| Prefix | `DefaultCodePrefix` fallback `TS-` · import set `DX-` | create/import **`DX-`** — **GAP-DD-PREFIX-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-bus-stop` · index chưa Navigate | Live `/so-ts?type=BUS_STOP` · alias board-only — **GAP-DD-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-DD-LEAVE-01** |
| Lookup | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-DD-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=BUS_STOP` + **search work** (mã · tên điểm · loại · ĐV QL · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Điểm dừng xe buýt» khi `type=BUS_STOP` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `BUS_STOP` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01**).
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột BUS_STOP (name · route · routeNamed · routeSegment · kmFrom · type_work_id · management_id · stop_bay · seated_waiting_bus · bus_shelter · vitri · length/width bay optional) · **ẩn** type / kmTo / quantity / unitCode · boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width / vitri khi fill 0 · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · type_work_id · leave-confirm dirty · **name không** bắt buộc (trống OK) · **kmFrom không** required.
9. S-ATTR: đủ dump §4 BUS_STOP editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `station_name` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `BUS_STOP` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `type_work_id` / `management_id` / `pavement_type_bus_stop_bay_id` / `structure_bus_shelter_id` / `vitri` / bool = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Prefix IdCode create/import = **`DX-`** (không fallback `TS-` cho BUS_STOP).
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-bus-stop.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `stop` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 BUS_STOP | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t13` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/4-tbl_bus_stops-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/4-tbl_bus_stops-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-bus-stop-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-bus-stop-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_bus_stops.2026.8.23.14.8.csv` · gov-vn **5367** `BUS_STOP` · cite `DX-bus_stops_523796` / `bus_stops_523797` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |

## 5. Screens / FormMode ↔ API

| Screen id | Surface | FormMode | API |
|-----------|---------|----------|-----|
| S-LIST | Kind B A–D+F | — | `GET …/road-assets?type=BUS_STOP&…` |
| S-FORM-C | full-page create | C | `POST …/road-assets` (`type=BUS_STOP`) + init-data |
| S-FORM-E | full-page edit | E | `GET` + `PUT …/road-assets/{id}` |
| S-FORM-V | full-page view | V | `GET` · readOnly |
| S-FORM-Copy | full-page copy | Copy | `GET` → `POST` (new IdCode `DX-`) |
| S-ACT-DELETE | row/toolbar | — | soft `DELETE …/road-assets/{id}` · useAlert |
| S-HIST | history | — | existing asset history surface |
| S-ALIAS | board deep-link | — | optional Navigate `/so-ts-bus-stop` → `?type=BUS_STOP` |

**Init:** `GET …/road-assets/init-data` (statuses/sources/units).  
**Tile:** `GET …/road-assets/summary-by-type` · KCHT `t13`.  
**Cấm** invent path · **cấm ERP.***

## 6. Grid AC (list · REQUIRED)

| AC | Rule | Pass |
|----|------|------|
| G-01 | Kind B zones A–D + F schema editor | ✅ |
| G-02 | `LinErpListFilterBar` · search must work · **cấm** nút Tìm riêng | ✅ |
| G-03 | Profile cột BUS_STOP · ẩn type/kmTo/SL/ĐVT | ✅ |
| G-04 | Boolean bay/ghế/nhà chờ **default ON** (không hide-empty) | ✅ |
| G-05 | hide-empty length/width bay · vitri khi fill 0 | ✅ |
| G-06 | Pagination 50/100/200/500 · `LinCatalogDataGrid` kéo cột ON | ✅ |
| G-07 | Row menu Xem/Sửa/Copy/Lịch sử · STT | ✅ |
| G-08 | Empty/error toast · **cấm** mock seed | ✅ |

**reportAc:** N/A (không report pack).

## 7. Leave AC (REQUIRED)

| AC | Rule | Pass |
|----|------|------|
| L-01 | Dirty navigate/back → `LeaveConfirmModal` | ✅ |
| L-02 | Delete → `useAlert` / Modal stacked | ✅ |
| L-03 | **Cấm** `window.confirm` / native dialog | ✅ |

## 8. Control inventory (slim · từ analy)

### Filter (Zone B)

| key | label | controlHint | notes |
|-----|-------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | mã · tên điểm · loại · ĐV QL · tuyến · QR |
| type | Loại tài sản | SearchInput asset-type | prefill/ẩn `BUS_STOP` |
| route | Cao tốc / QL | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | filter range only |
| orgTree | Cây đơn vị | SearchInput org-unit | QS `orgUnit` |

### Grid default ON

name · route · routeNamed · routeSegment · kmFrom · type_work_id · management_id · stop_bay · seated_waiting_bus · bus_shelter · vitri (hide-empty) · length/width_bus_stop_bay (hide-empty) · status/gps optional.

### Form sections (reuse — **cấm** fork)

- **S-META:** code (`DX-` readonly) · type lock BUS_STOP · status* · source  
- **S-ROUTE:** route* · routeNamed · routeSegment (road-route)  
- **S-LOC-POINT:** kmFrom · lat/lng · province/ward · vitri — **không** S-LOC-RANGE / kmTo  
- **S-NAME:** name / station_name «Tên điểm» · trống OK  
- **S-ATTR:** type_work_id* · management_id · stop_bay · pavement_type_bus_stop_bay_id · length/width_bus_stop_bay · seated_waiting_bus · bus_shelter · structure_bus_shelter_id · material_road_refuge · length/width_road_refuge · max_slope · vitri · escape_route_*  
- **S-GPS:** lat · lng · qr · valueVnd · note · updatedAt ro  

## 9. Open questions — PO chốt (autoApprove)

| ID | Quyết định |
|----|------------|
| GAP-DD-LOOKUP-01 | **Dropdown LOOKUP_STATIC** dump P1 cho type_work / management / pavement / shelter / vitri / bool — SA seed từ distinct dump; **không** SearchInput seed P1 |
| GAP-DD-ROUTE-01 | Live = `/so-ts?type=BUS_STOP` · alias `/so-ts-bus-stop` **board-only** · Design optional Navigate (peer station/point) |
| GAP-DD-PREFIX-01 | Chốt **`DX-`** trên DefaultCodePrefix / create+import BUS_STOP |
| Boolean grid | bay / ghế / nhà chờ **luôn ON** default (False meaningful) — **không** hide-empty; SchemaConfig user có thể ẩn |
| GAP-DD-NAME-01 | Giữ analy: `name` ← `station_name` · trống OK · **cấm** IsWeak→đoạn |

**UNCLEAR còn lại:** none (Design/SA nhận decision trên).

## 10. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp §8 + real-data §B |
| zones | DES-GRID-A/B/C/D + F · filter-bar HARD |
| form | Full-page CatalogFormShell 5col · sections S-* · **cấm** tab legacy |
| prototype + reviewUrl | shared-grid pattern peer so-ts |
| alias | optional redirect `/so-ts-bus-stop` |
| hide-empty | length/width · vitri · **không** hide boolean |

## 11. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| status | `confirmed` |
| writtenAt | `2026-09-01T07:40:00.000Z` |
| taskId | `task_1e861241` |

## 12. Next roles (pending · **cấm** start trong task này)

1. **Design** — control-map · prototype · reviewUrl  
2. **SA** — giữ path · `DX-` prefix · lookup seed · dumpSpecs vs flat  
3. **TL / Dev** — profile BUS_STOP · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · **cấm** fork · **cấm ERP.***  
4. **QA** — e2e queued (`e2eQa=ON`) · scenarios live BFF  
