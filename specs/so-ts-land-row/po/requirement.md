# PO — Requirement — so-ts-land-row (Sổ TS — Đất thuộc TS HT)

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `LAND_ROW` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `LAND_ROW` |
| cluster | `land` · ô KCHT `t33` |
| dump | `tbl_land_btra` |
| prefix | **`DT-`** (**GAP-LAND-PREFIX-01** chốt · GIS short `HT` giữ) |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-LAND-NAME-01 · GAP-LAND-SPEC-01 · GAP-LAND-RANGE-01 · GAP-LAND-PREFIX-01 · GAP-LAND-ROUTE-01 · GAP-LAND-LEAVE-01 · GAP-LAND-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 · GAP-FILTER-BAR-01 · GAP-TYP-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_d3a42912`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-land-row-control-hint.md` · `so-ts-land-row-real-data.md` · contentHash `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` · headerFingerprint `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` · analy `task_76d3fd4a` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=LAND_ROW` · STATUS alias `/so-ts-land-row` = board deep-link only (**GAP-LAND-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=LAND_ROW` · alias `http://localhost:9301/so-ts-land-row` |
| liveList | `/so-ts?type=LAND_ROW` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-land-row-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-land-row-real-data.md` |
| contentHash | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprint | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_d3a42912` · analy `task_76d3fd4a` |
| updatedAt | `2026-09-01T08:25:30.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Đất thuộc TS hạ tầng (`LAND_ROW`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy + PO chốt §9):**

1. Grid profile `LAND_ROW`: CT trên đất · 3 tầng tuyến · lý trình · TT thửa · xã · tỉnh · CQ chủ quản · CQ khai thác · dài · rộng · DT · **ẩn** `type` khi `?type=` · **ẩn** SL/ĐVT · `kmTo` hide-empty / OFF (**GAP-SOTS-COL-01**).
2. Form S-ATTR editable đủ dump §4 LAND_ROW (không chỉ `<dl>` dumpSpecs) — **GAP-SOTS-FORM-01**.
3. `name` ← `construction` khi có · trống OK · **cấm** IsWeak → đoạn tuyến (**GAP-LAND-NAME-01**).
4. Cluster land: mount **S-LOC-RANGE** · mẫu 1 lý trình → `kmTo` **không** bắt buộc · **ẩn** khi fill 0 · **cấm** ép `"0"` (**GAP-LAND-RANGE-01**) · **không** mount `S-LOC-POINT`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm` (**GAP-LAND-LEAVE-01**).
6. Reuse section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS — **cấm** fork file form (**GAP-SOTS-REUSE-01**).
7. Lookup P1: `status_land_lot_id` / `exploited_id` / `pavement_type_access_road_id` / `location_id` / `access_road` = **Dropdown LOOKUP_STATIC** dump (**GAP-LAND-LOOKUP-01**).
8. IdCode create/import prefix **`DT-`** khớp gov-vn · GIS icon/short `HT` **giữ** (**GAP-LAND-PREFIX-01**).
9. Alias `/so-ts-land-row` = board deep-link · live = `/so-ts?type=LAND_ROW` · Design optional Navigate (**GAP-LAND-ROUTE-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T08:20:00.000Z` · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy + PO) |
|-------|-------------------------------------------|-----------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `LAND_ROW` |
| Grid columns | schema chung (+ peer type profiles) · **thiếu** profile LAND_ROW | Profile `LAND_ROW` — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (non editable types) | Editable Input/Select đủ dump LAND_ROW — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | thường = route khi thiếu Resolve | `name` ← `construction` · **cấm** IsWeak → đoạn — **GAP-LAND-NAME-01** |
| dumpSpecs labels | thiếu hầu hết key đất | Label VN khớp dump/mẫu — **GAP-LAND-SPEC-01** |
| Range kmTo | Form hiện `kmTo` generic | **Ẩn**/optional · hide-empty fill 0 · **cấm** ép `"0"` — **GAP-LAND-RANGE-01** |
| Prefix | `DefaultCodePrefix` → `TS-` · import `DT-` · GIS `HT` | create/import **`DT-`** · GIS `HT` giữ — **GAP-LAND-PREFIX-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-land-row` · index chưa Navigate | Live `/so-ts?type=LAND_ROW` · alias board-only — **GAP-LAND-ROUTE-01** |
| Leave / alert | native confirm nếu còn | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-LAND-LEAVE-01** |
| Lookup | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-LAND-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** (GIS `dat-hlat` optional deep-link).

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=LAND_ROW` + **search work** (mã · CT trên đất · CQ · tuyến · tỉnh · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Đất thuộc TS HT» khi `type=LAND_ROW` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `LAND_ROW` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01**).
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột LAND_ROW (name · route · routeNamed · routeSegment · kmFrom · status_land_lot_id · xaphuong · tinhthanhpho · under_managemen · under_operation · length · width · total_area) · **ẩn** type / quantity / unitCode · `kmTo` OFF/hide-empty · hide-empty length/width/xaphuong khi fill 0 · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · status_land_lot_id · leave-confirm dirty · **name không** bắt buộc (trống OK) · **kmFrom / kmTo không** required.
9. S-ATTR: đủ dump §4 LAND_ROW editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `construction` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Range: **không** bắt buộc `kmTo` · ẩn field form khi fill 0 · mount **S-LOC-RANGE** · **không** mount S-LOC-POINT · **cấm** ép `lytrinh`/`kmFrom`/`kmTo` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `status_land_lot_id` / `exploited_id` / `pavement_type_access_road_id` / `location_id` / `access_road` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Prefix IdCode create/import = **`DT-`** (không fallback `TS-` cho LAND_ROW) · GIS short `HT` không đổi.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-land-row.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `land` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 LAND_ROW | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t33` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/9-tbl_land_btra-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/9-tbl_land_btra-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-land-row-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-land-row-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_land_btra.2026.8.23.14.16.csv` · gov-vn **12** `LAND_ROW` · cite `land_btra_404989` / `DT-land_btra_404989` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |

## 5. Screens / FormMode ↔ API

| Screen id | Surface | FormMode | API |
|-----------|---------|----------|-----|
| S-LIST | Kind B A–D+F | — | `GET …/road-assets?type=LAND_ROW&…` |
| S-FORM-C | full-page create | C | `POST …/road-assets` (`type=LAND_ROW`) + init-data |
| S-FORM-E | full-page edit | E | `GET` + `PUT …/road-assets/{id}` |
| S-FORM-V | full-page view | V | `GET` · readOnly |
| S-FORM-Copy | full-page copy | Copy | `GET` → `POST` (new IdCode `DT-`) |
| S-ACT-DELETE | row/toolbar | — | soft `DELETE …/road-assets/{id}` · useAlert |
| S-HIST | history | — | existing asset history surface |
| S-ALIAS | board deep-link | — | optional Navigate `/so-ts-land-row` → `?type=LAND_ROW` |

**Init:** `GET …/road-assets/init-data` (statuses/sources/units).  
**Tile:** `GET …/road-assets/summary-by-type` · KCHT `t33`.  
**Cấm** invent path · **cấm ERP.***

## 6. Grid AC (list · REQUIRED)

| AC | Rule | Pass |
|----|------|------|
| G-01 | Kind B zones A–D + F schema editor | ✅ |
| G-02 | `LinErpListFilterBar` · search must work · **cấm** nút Tìm riêng | ✅ |
| G-03 | Profile cột LAND_ROW · ẩn type/quantity/unitCode · kmTo OFF/hide-empty | ✅ |
| G-04 | ON: name · 3 tầng tuyến · kmFrom · status_land_lot_id · xã/tỉnh · CQ · length/width/total_area | ✅ |
| G-05 | hide-empty length/width/xaphuong khi fill 0 · access_road / lengthiness hide-empty | ✅ |
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
| search | Tìm kiếm | SearchTextInput | mã · CT trên đất · CQ · tuyến · tỉnh · QR |
| type | Loại tài sản | SearchInput asset-type | prefill/ẩn `LAND_ROW` |
| route | Cao tốc / QL | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | filter range only |
| orgTree | Cây đơn vị | SearchInput org-unit | QS `orgUnit` |

### Grid default ON

name · route · routeNamed · routeSegment · kmFrom · status_land_lot_id · xaphuong (hide-empty) · tinhthanhpho · under_managemen · under_operation · length (hide-empty) · width (hide-empty) · total_area · status/gps optional.

### Form sections (reuse — **cấm** fork)

- **S-META:** code (`DT-` readonly) · type lock LAND_ROW · status* · source  
- **S-ROUTE:** route* · routeNamed · routeSegment (road-route)  
- **S-LOC-RANGE:** kmFrom · kmTo (ẩn/optional) · lat/lng đầu · province/ward · location_id — **không** S-LOC-POINT  
- **S-NAME:** name / construction «Công trình trên đất» · trống OK  
- **S-ATTR:** construction · status_land_lot_id* · under_managemen · under_operation · exploited_id · length · width · total_area · width_access_road · pavement_type_access_road_id · distance_road_center · access_road · location_id · lengthiness_access_road  
- **S-GPS:** lat · lng · qr · valueVnd · note · updatedAt ro  

## 9. Open questions — PO chốt (autoApprove)

| ID | Quyết định |
|----|------------|
| GAP-LAND-LOOKUP-01 | **Dropdown LOOKUP_STATIC** dump P1 cho status_land_lot_id · exploited_id · pavement_type_access_road_id · location_id · access_road (bool) — SA seed từ distinct dump; **không** SearchInput seed P1 |
| GAP-LAND-ROUTE-01 | Live = `/so-ts?type=LAND_ROW` · alias `/so-ts-land-row` **board-only** · Design optional Navigate (peer land / tile `t33`) |
| GAP-LAND-PREFIX-01 | Chốt **`DT-`** trên DefaultCodePrefix / create+import LAND_ROW · GIS short/icon **`HT`** giữ nguyên |
| GAP-LAND-RANGE-01 | Giữ parent **S-LOC-RANGE** · mẫu 1 lý trình → `kmTo` optional · **ẩn** fill 0 · **cấm** ép `"0"` · **không** đổi sang S-LOC-POINT |
| GAP-LAND-NAME-01 | Giữ analy: `name` ← `construction` · trống OK · **cấm** IsWeak→đoạn |

**UNCLEAR còn lại:** none (Design/SA nhận decision trên).

## 10. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp §8 + real-data §B |
| zones | DES-GRID-A/B/C/D + F · filter-bar HARD |
| form | Full-page CatalogFormShell 5col · sections S-* · **cấm** tab legacy |
| prototype + reviewUrl | shared-grid pattern peer so-ts |
| alias | optional redirect `/so-ts-land-row` |
| hide-empty | length/width/xaphuong · kmTo · access_road attrs · **không** hide status_land_lot_id / total_area default ON |

## 11. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| status | `confirmed` |
| writtenAt | `2026-09-01T08:25:30.000Z` |
| taskId | `task_d3a42912` |

## 12. Next roles (pending · **cấm** start trong task này)

1. **Design** — control-map · prototype · reviewUrl  
2. **SA** — giữ path · `DT-` prefix · lookup seed · dumpSpecs vs flat  
3. **TL / Dev** — profile LAND_ROW · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · **cấm** fork · **cấm ERP.***  
4. **QA** — e2e queued (`e2eQa=ON`) · scenarios live BFF  
