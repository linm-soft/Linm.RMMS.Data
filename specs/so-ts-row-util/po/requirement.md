# PO — Requirement — so-ts-row-util (Sổ TS — CT HTKT trong HL)

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `ROW_UTIL` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `ROW_UTIL` |
| cluster | `land` · ô KCHT `t08` |
| dump | `tbl_infrastructure_row` |
| prefix | **`HT-`** (**GAP-ROWUTIL-PREFIX-01** chốt · GIS short `HT` giữ) |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-ROWUTIL-NAME-01 · GAP-ROWUTIL-SPEC-01 · GAP-ROWUTIL-RANGE-01 · GAP-ROWUTIL-PREFIX-01 · GAP-ROWUTIL-ROUTE-01 · GAP-ROWUTIL-LEAVE-01 · GAP-ROWUTIL-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 · GAP-FILTER-BAR-01 · GAP-TYP-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_12fe884a`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-row-util-control-hint.md` · `so-ts-row-util-real-data.md` · contentHash `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` · headerFingerprint `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` · analy `task_f00fb2cf` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ROW_UTIL` · STATUS alias `/so-ts-row-util` = board deep-link only (**GAP-ROWUTIL-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=ROW_UTIL` · alias `http://localhost:9301/so-ts-row-util` |
| liveList | `/so-ts?type=ROW_UTIL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-row-util-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-row-util-real-data.md` |
| contentHash | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprint | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_12fe884a` · analy `task_f00fb2cf` |
| updatedAt | `2026-09-02T02:54:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Công trình HTKT trong HL (`ROW_UTIL`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy + PO chốt §9):**

1. Grid profile `ROW_UTIL`: CT HTKT · loại CT · 3 tầng tuyến · lý trình đầu/cuối · chiều dài · số trụ · chủ sở hữu · **ẩn** `type` khi `?type=` · **ẩn** SL/ĐVT · hide-empty cột dump fill 0 (**GAP-SOTS-COL-01**).
2. Form S-ATTR editable đủ dump §4 ROW_UTIL (không chỉ `<dl>` dumpSpecs) — **GAP-SOTS-FORM-01**.
3. `name` ← `tencongtrinh_htk` khi có · trống OK · **cấm** IsWeak → đoạn tuyến (**GAP-ROWUTIL-NAME-01**).
4. Cluster land + dump có km cuối: mount **S-LOC-RANGE** · hiện **cả** `kmFrom`/`kmTo` · `kmTo` optional khi trống · **cấm** ép `"0"` (**GAP-ROWUTIL-RANGE-01**) · **không** mount `S-LOC-POINT`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm` (**GAP-ROWUTIL-LEAVE-01**).
6. Reuse section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS — **cấm** fork file form (**GAP-SOTS-REUSE-01**).
7. Lookup P1: `type_work_id` / `located_within_id` / `type_protection_structure_id` / `support_type_id` / `status_hiring_is_within_row` / `build_location` = **Dropdown LOOKUP_STATIC** dump (**GAP-ROWUTIL-LOOKUP-01**).
8. IdCode create/import prefix **`HT-`** khớp gov-vn · GIS icon/short `HT` **giữ** (**GAP-ROWUTIL-PREFIX-01**).
9. Alias `/so-ts-row-util` = board deep-link · live = `/so-ts?type=ROW_UTIL` · Design optional Navigate (**GAP-ROWUTIL-ROUTE-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-02T02:00:00.000Z` · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-02) | New (this pack · copy analy + PO) |
|-------|-------------------------------------------|-----------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `ROW_UTIL` |
| Grid columns | schema chung (+ peer type profiles) · **thiếu** profile ROW_UTIL | Profile `ROW_UTIL` — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (non editable types) | Editable Input/Select đủ dump ROW_UTIL — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | thường = route khi thiếu Resolve | `name` ← `tencongtrinh_htk` · **cấm** IsWeak → đoạn — **GAP-ROWUTIL-NAME-01** |
| dumpSpecs labels | thiếu hầu hết key HTKT | Label VN khớp dump/mẫu — **GAP-ROWUTIL-SPEC-01** |
| Range kmTo | Form `kmTo` generic | **Hiện** kmFrom/kmTo · optional khi trống · **cấm** ép `"0"` — **GAP-ROWUTIL-RANGE-01** |
| Prefix | `DefaultCodePrefix` → `TS-` · import `HT-` · GIS `HT` | create/import **`HT-`** · GIS `HT` giữ — **GAP-ROWUTIL-PREFIX-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-row-util` · index chưa Navigate | Live `/so-ts?type=ROW_UTIL` · alias board-only — **GAP-ROWUTIL-ROUTE-01** |
| Leave / alert | native confirm nếu còn | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-ROWUTIL-LEAVE-01** |
| Lookup | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-ROWUTIL-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** (GIS `htkt` optional deep-link).

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=ROW_UTIL` + **search work** (mã · CT HTKT · loại · tuyến · chủ · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — CT HTKT trong HL» khi `type=ROW_UTIL` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `ROW_UTIL` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01**).
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột ROW_UTIL (name/tencongtrinh_htk · type_work_id · route · routeNamed · routeSegment · kmFrom · kmTo · length · number_post · owner · located_within_id) · **ẩn** type / quantity / unitCode · hide-empty length/number_post/located_within_id khi fill 0 · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · type_work_id · leave-confirm dirty · **name không** bắt buộc (trống OK) · **kmFrom / kmTo không** required.
9. S-ATTR: đủ dump §4 ROW_UTIL editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `tencongtrinh_htk` khi có — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Range: **hiện** kmFrom + kmTo trên form · **không** bắt buộc khi trống · mount **S-LOC-RANGE** · **không** mount S-LOC-POINT · **cấm** ép `lytrinh`/`kmFrom`/`kmTo` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `type_work_id` / `located_within_id` / `type_protection_structure_id` / `support_type_id` / `status_hiring_is_within_row` / `build_location` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Prefix IdCode create/import = **`HT-`** (không fallback `TS-` cho ROW_UTIL) · GIS short `HT` không đổi.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-row-util.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `land` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 ROW_UTIL | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t08` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-row-util-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-row-util-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_infrastructure_row.2026.8.23.15.15.csv` · gov-vn **13102** `ROW_UTIL` · cite `COVERAGE-KCHT-40` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |

## 5. Screens / FormMode ↔ API

| Screen id | Surface | FormMode | API |
|-----------|---------|----------|-----|
| S-LIST | Kind B A–D+F | — | `GET …/road-assets?type=ROW_UTIL&…` |
| S-FORM-C | full-page create | C | `POST …/road-assets` (`type=ROW_UTIL`) + init-data |
| S-FORM-E | full-page edit | E | `GET` + `PUT …/road-assets/{id}` |
| S-FORM-V | full-page view | V | `GET` · readOnly |
| S-FORM-Copy | full-page copy | Copy | `GET` → `POST` (new IdCode `HT-`) |
| S-ACT-DELETE | row/toolbar | — | soft `DELETE …/road-assets/{id}` · useAlert |
| S-HIST | history | — | existing asset history surface |
| S-ALIAS | board deep-link | — | optional Navigate `/so-ts-row-util` → `?type=ROW_UTIL` |

**Init:** `GET …/road-assets/init-data` (statuses/sources/units).  
**Tile:** `GET …/road-assets/summary-by-type` · KCHT `t08`.  
**Cấm** invent path · **cấm ERP.***

## 6. Grid AC (list · REQUIRED)

| AC | Rule | Pass |
|----|------|------|
| G-01 | Kind B zones A–D + F schema editor | ✅ |
| G-02 | `LinErpListFilterBar` · search must work · **cấm** nút Tìm riêng | ✅ |
| G-03 | Profile cột ROW_UTIL · ẩn type/quantity/unitCode | ✅ |
| G-04 | ON: name/CT HTKT · type_work_id · 3 tầng tuyến · kmFrom · kmTo · length · number_post · owner | ✅ |
| G-05 | hide-empty length/number_post/located_within_id/distance attrs khi fill 0 | ✅ |
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
| search | Tìm kiếm | SearchTextInput | mã · CT HTKT · loại · tuyến · chủ · QR |
| type | Loại tài sản | SearchInput asset-type | prefill/ẩn `ROW_UTIL` |
| route | Cao tốc / QL | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | filter range |
| orgTree | Cây đơn vị | SearchInput org-unit | QS `orgUnit` |

### Grid default ON

name/tencongtrinh_htk · type_work_id · route · routeNamed · routeSegment · kmFrom · kmTo · length (hide-empty) · number_post (hide-empty) · owner · located_within_id (hide-empty) · build_location optional · status/gps optional.

### Form sections (reuse — **cấm** fork)

- **S-META:** code (`HT-` readonly) · type lock ROW_UTIL · status* · source  
- **S-ROUTE:** route* · routeNamed · routeSegment (road-route)  
- **S-LOC-RANGE:** kmFrom · kmTo (optional) · lat/lng đầu/cuối · province/ward — **không** S-LOC-POINT  
- **S-NAME:** name / tencongtrinh_htk «Công trình HTKT» · trống OK  
- **S-ATTR:** tencongtrinh_htk · type_work_id* · length · number_post · owner · located_within_id · protection_tructure · type_protection_structure_id · support_type_id · distance_road_center · distance_between_supports · status_hiring_is_within_row · build_location  
- **S-GPS:** lat · lng · qr · valueVnd · note · updatedAt ro  

## 9. Open questions — PO chốt (autoApprove)

| ID | Quyết định |
|----|------------|
| GAP-ROWUTIL-LOOKUP-01 | **Dropdown LOOKUP_STATIC** dump P1 cho type_work_id · located_within_id · type_protection_structure_id · support_type_id · status_hiring_is_within_row · build_location — SA seed từ distinct dump; **không** SearchInput seed P1 |
| GAP-ROWUTIL-ROUTE-01 | Live = `/so-ts?type=ROW_UTIL` · alias `/so-ts-row-util` **board-only** · Design optional Navigate (peer land / tile `t08`) |
| GAP-ROWUTIL-PREFIX-01 | Chốt **`HT-`** trên DefaultCodePrefix / create+import ROW_UTIL · GIS short/icon **`HT`** giữ nguyên |
| GAP-ROWUTIL-RANGE-01 | Giữ parent **S-LOC-RANGE** · dump có km cuối → **hiện** kmFrom + kmTo · optional khi trống · **cấm** ép `"0"` · **không** đổi sang S-LOC-POINT (khác LAND_ROW ẩn kmTo) |
| GAP-ROWUTIL-NAME-01 | Giữ analy: `name` ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak→đoạn |

**UNCLEAR còn lại:** none (Design/SA nhận decision trên).

## 10. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp §8 + real-data §B |
| zones | DES-GRID-A/B/C/D + F · filter-bar HARD |
| form | Full-page CatalogFormShell 5col · sections S-* · **cấm** tab legacy |
| prototype + reviewUrl | shared-grid pattern peer so-ts |
| alias | optional redirect `/so-ts-row-util` |
| hide-empty | length/number_post/located_within_id · distance attrs · **không** hide type_work_id / kmFrom/kmTo default ON |

## 11. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| status | `confirmed` |
| writtenAt | `2026-09-02T02:54:00.000Z` |
| taskId | `task_12fe884a` |

## 12. Next roles (pending · **cấm** start trong task này)

1. **Design** — control-map · prototype · reviewUrl  
2. **SA** — giữ path · `HT-` prefix · lookup seed · dumpSpecs vs flat  
3. **TL / Dev** — profile ROW_UTIL · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · **cấm** fork · **cấm ERP.***  
4. **QA** — e2e queued (`e2eQa=ON`) · scenarios live BFF  
