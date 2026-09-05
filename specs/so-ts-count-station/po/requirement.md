# PO — Requirement — so-ts-count-station (Sổ TS — Trạm đếm)

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `COUNT_STATION` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `COUNT_STATION` |
| cluster | `station` · ô KCHT `t30` · icon `CAM` |
| dump | `mst_counting_station` |
| prefix | `THC-` (live GIS IdCode · **giữ**) |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-COUNT-NAME-01 · GAP-COUNT-SPEC-01 · GAP-COUNT-POINT-01 · GAP-COUNT-ROUTE-01 · GAP-COUNT-LEAVE-01 · GAP-COUNT-LOOKUP-01 · GAP-COUNT-COORD-01 · GAP-COUNT-GIS-01 · GAP-COUNT-TILE-01 · GAP-COUNT-LABEL-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_ccfc7d69`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-count-station-control-hint.md` · `so-ts-count-station-real-data.md` · contentHash `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` · headerFingerprint `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` · analy `task_2645c3b4` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=COUNT_STATION` · STATUS alias `/so-ts-count-station` = board deep-link only (**GAP-COUNT-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=COUNT_STATION` · alias `http://localhost:9301/so-ts-count-station` |
| liveList | `/so-ts?type=COUNT_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-count-station-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-count-station-real-data.md` |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| countCite | gov-vn **377** · IdCode `THC` · tile `t30` · unit seed `TRAM` |
| taskId | `task_ccfc7d69` · analy `task_2645c3b4` |
| updatedAt | `2026-09-01T06:50:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Trạm đếm (`COUNT_STATION`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `COUNT_STATION`: tên VI · 3 tầng tuyến · ĐVQL · tên EN · lý trình · số làn · tốc độ · **ẩn** `type` / `kmTo` / SL / ĐVT · **hide-empty** cột fill 0 · **cấm** gộp tuyến 1 ô DRVN.
2. Form S-ATTR editable đủ dump §4 COUNT (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_vi` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-COUNT-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=COUNT_STATION` · `kmFrom`/lý trình hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `agency_id` = **Dropdown LOOKUP_STATIC** dump distinct P1 (SA có thể nâng SearchInput org-unit sau) — **GAP-COUNT-LOOKUP-01**.
8. Coord: `from_coordinate` / `to_coordinate` → **ưu tiên parse → `lat`/`lng`** S-GPS khi parse được; giữ dumpSpecs; `to_coordinate` optional hide-empty — **GAP-COUNT-COORD-01**.
9. Label UI: **«Trạm đếm»** (tile `t30` · list title · lookups) · BE seed «Trạm đếm xe» giữ trên type master — **GAP-COUNT-LABEL-01**.
10. GIS slug layer: **DEFER** SA/GIS — **cấm** invent FE · list pack **không** map canvas — **GAP-COUNT-GIS-01**.
11. IdCode prefix: **giữ live `THC-`**.

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T06:40:24.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `COUNT_STATION` |
| Grid columns | schema chung (+ profile peer station) | Profile `COUNT_STATION` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Editable Input/Select đủ dump COUNT — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild có thể lệch dump | `name` ← `name_vi` · **cấm** IsWeak → đoạn — **GAP-COUNT-NAME-01** |
| dumpSpecs labels | FE có `name_vi` · thiếu agency_id/name_en/no_of_lane/speed/coords | Label VN khớp dump/mẫu · form Input/Select đủ cột — **GAP-COUNT-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=COUNT_STATION` — **GAP-COUNT-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-count-station` · index chưa Navigate | Live = `/so-ts?type=COUNT_STATION` · alias board-only — **GAP-COUNT-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-COUNT-LEAVE-01** |
| Lookup agency | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-COUNT-LOOKUP-01** |
| Coord | dump scalar `from_coordinate`/`to_coordinate` vs lat/lng | Parse → lat/lng ưu tiên · dumpSpecs giữ — **GAP-COUNT-COORD-01** |
| GIS slug | IdCode `THC` có · chưa slug layer ↔ type | **DEFER** SA/GIS — **GAP-COUNT-GIS-01** |
| Label type | `lookups.ts` thiếu `COUNT_STATION` | UI «Trạm đếm» · seed BE «Trạm đếm xe» giữ — **GAP-COUNT-LABEL-01** |
| KCHT tile | `t30` drill có · list chưa profile | Tile count = import **377** · deep-link OK — **GAP-COUNT-TILE-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=COUNT_STATION` + **search work** (mã · tên VI/EN · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Trạm đếm» khi `type=COUNT_STATION` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `COUNT_STATION` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01**).
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột COUNT (name · route · routeNamed · routeSegment · agency_id · name_en · kmFrom · no_of_lane · speed · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · **hide-empty** ĐVQL / tên EN / số làn / tốc độ khi fill 0 · row menu Xem/Sửa/Copy/Lịch sử · **cấm** gộp 3 tầng tuyến 1 ô.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 COUNT editable (`name_en` · `agency_id` · `no_of_lane` · `speed` · coords theo §9) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_vi` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `COUNT_STATION` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `agency_id` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Tile `t30` deep-link filter type OK · count cite import **377** (**GAP-COUNT-TILE-01**).
17. IdCode: BE/import **giữ prefix `THC-`** — **cấm** invent prefix FE.
18. Label FE: `lookups.ts` có `COUNT_STATION` = «Trạm đếm».
19. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-count-station.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 COUNT_STATION | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t30` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-detail.png` | mẫu detail · Thông tin chung | P0 ✅ |
| DI-01 | control-hint | `specs/_data-analy/features/so-ts-count-station-control-hint.md` | P0 ✅ |
| DI-02 | real-data | `specs/_data-analy/features/so-ts-count-station-real-data.md` | P0 ✅ |
| DI-03 | compact prior | `specs/so-ts-count-station/handoff/data_analy-compact.md` | P0 ✅ |

## 5. Screens

| ID | Screen | Route / trigger | Notes |
|----|--------|-----------------|-------|
| S-LIST | List Kind B A–D+F | `/so-ts?type=COUNT_STATION` | title «Sổ TS — Trạm đếm» |
| S-FORM-C | Form Create | `/so-ts/tao-moi` · type lock `COUNT_STATION` từ tile `t30` | CatalogFormShell 5 cols |
| S-FORM-E | Form Edit | `/so-ts/sua?id=` | same sections |
| S-FORM-V | Form View | same · `readOnly` | **không** disabled xám |
| S-FORM-Copy | Form Copy | copy row | type giữ `COUNT_STATION` |
| S-ACT-DELETE | Soft delete | row menu / toolbar | useAlert/Modal · **cấm** native |
| S-HIST | History | Schema/History toolbar | giữ shell parent |
| S-ALIAS | Board alias | `/so-ts-count-station` | Design optional Navigate → live filter (**GAP-COUNT-ROUTE-01**) |

**Out of scope screens:** tab Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Lịch sử legacy · map canvas GIS layer.

## 6. Grid AC (list · REQUIRED)

| AC | Rule | Status |
|----|------|--------|
| G-01 | Kind B zones A–D + F schema editor | **PASS** |
| G-02 | Filter bar HARD: `LinErpListFilterBar` · search must work · **cấm** nút Tìm riêng | **PASS** |
| G-03 | Profile COUNT: ON name · 3 tầng tuyến · agency_id · name_en · kmFrom · no_of_lane · speed · hide-empty ĐVQL/EN/làn/tốc độ | **PASS** |
| G-04 | OFF type · kmTo · quantity · unitCode | **PASS** |
| G-05 | Pagination 50/100/200/500 · `LinCatalogListPagination` | **PASS** |
| G-06 | Row menu Xem/Sửa/Copy/Lịch sử · kéo cột default ON · STT | **PASS** |
| G-07 | Empty/error toast · **cấm** mock seed | **PASS** |
| G-08 | Tile `t30` deep-link · count cite **377** | **PASS** |

## 7. Report AC

**N/A** — packKind=`list` (không report pack).

## 8. Leave AC

| AC | Rule | Status |
|----|------|--------|
| L-01 | Dirty navigate → `LeaveConfirmModal` | **PASS** |
| L-02 | Delete → `useAlert` / Modal stacked | **PASS** |
| L-03 | **Cấm** `window.confirm` / native dialog | **PASS** |

## 9. Open questions — PO chốt (autoApprove)

| # | Question | Decision |
|---|----------|----------|
| 1 | Lookup `agency_id` (ĐVQL)? | **Dropdown LOOKUP_STATIC** từ distinct dump / seed SA P1. SA có thể nâng SearchInput `org-unit` sau nếu seed READY — **cấm** hardcode FE không cite. |
| 2 | `from_coordinate` / `to_coordinate`? | **Ưu tiên parse → `lat`/`lng`** trên S-GPS khi parse được; giữ giá trị trong dumpSpecs; `to_coordinate` optional · hide nếu luôn trống; **cấm** ép `"0"`. Không bắt user nhập trùng Text dump nếu đã map Number lat/lng. |
| 3 | Alias `/so-ts-count-station`? | Live SSOT = `/so-ts?type=COUNT_STATION`. Alias = **board deep-link only** — Design **optional** Navigate redirect (**GAP-COUNT-ROUTE-01**). |
| 4 | GIS slug layer? | **DEFER** SA/GIS (vd. `tram-dem`) — list pack **không** map canvas · **cấm** invent FE (**GAP-COUNT-GIS-01**). Prefix IdCode **giữ `THC-`**. |
| 5 | Cột ĐVQL / tên EN / số làn / tốc độ? | **ON theo mẫu list** + **hide-empty** khi fill 0 (parent GAP-SOTS-COL-01). |
| 6 | Label «Trạm đếm» vs «Trạm đếm xe»? | UI copy (title · tile · lookups) = **«Trạm đếm»**. BE type seed «Trạm đếm xe» **giữ** — không đổi seed import. |

**open questions remaining:** none.

## 10. Control inventory (slim · handoff Design)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên VI/EN · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefill `COUNT_STATION` · ẩn khi deep-link cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · ≠ cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### Grid columns (`type=COUNT_STATION`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| name | Tên (tiếng Việt) | **ON** | `name` ← `name_vi` · link Text |
| route | Cao tốc / QL | ON | tầng 1 |
| routeNamed | Tuyến | ON | tầng 2 |
| routeSegment | Đoạn tuyến | ON | tầng 3 |
| agency_id | Đơn vị quản lý | ON · hide-empty | dumpSpecs |
| name_en | Tên (tiếng Anh) | ON · hide-empty | dumpSpecs |
| kmFrom | Lý trình | ON | |
| no_of_lane | Số làn đường | ON · hide-empty | |
| speed | Tốc độ | ON · hide-empty | |
| type | Loại TS | **OFF** | |
| kmTo | Lý trình KT | **OFF** | |
| quantity / unitCode | SL / ĐVT | **OFF** | unit seed `TRAM` ẩn grid |
| status | Tình trạng KT | optional | |
| gps | Tọa độ | optional | lat/lng derived |

### Form sections (reuse · **cấm** fork)

**S-META:** code (ro · `THC-`) · type SearchInput * · status Dropdown * · source Dropdown  
**S-ROUTE:** route * · routeNamed · routeSegment (road-route)  
**S-LOC-POINT:** kmFrom Text (không required) · lat/lng Number — **không** kmTo / S-LOC-RANGE  
**S-NAME:** name / name_vi Text *  
**S-ATTR:** name_en Text · agency_id Dropdown · no_of_lane Number · speed Number · coords per §9  
**S-GPS:** lat · lng · qr · valueVnd Money · note TextArea · updatedAt ro  

**Không mount:** kmTo bắt buộc · quantity/unit generic trên grid · tab Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Lịch sử legacy.

## 11. API / bind (cite live · **cấm** invent)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=COUNT_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=COUNT_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE …/{id}` soft |
| Init-data | `GET …/road-assets/init-data` |
| Summary (tile) | `GET …/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** `api/v1/so-ts/*`.

Dump → bind: `name_vi`→`name` · `name_en`/`agency_id`/`no_of_lane`/`speed`/coords→dumpSpecs (+ flat nếu SA) · `road_name`→`route` · `long_route_name`→`routeNamed` · `name_of_route_asset`→`routeSegment` · lý trình→`kmFrom`.

## 12. Non-goals / Cấm

- Fork `AssetFormPage` · tab legacy DRVN (kể cả Lưu lượng xe)
- Invent map canvas · invent GIS slug FE · invent API / ERP.*
- Demo / localStorage SSOT data · seed giả count
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)
- e2e / `yarn build` / `yarn start:std` ở role PO
- Gộp 3 tầng tuyến 1 ô · ép `kmFrom`=`"0"` · IsWeak name→đoạn

## 13. Handoff

| Role | Need |
|------|------|
| **Design** | control-map · prototype Kind B + form 5 cols · reviewUrl · hide-empty · alias optional Navigate · filter-bar HARD |
| **SA** | path giữ `api/v1/asset/road-assets` · dumpSpecs vs flatten · agency LOOKUP seed · coord parse · GIS slug DEFER doc |
| **TL/Dev** | type profile COUNT · dumpSpecLabels thiếu · lookups COUNT_STATION · S-ATTR editable · LeaveConfirmModal · **cấm** fork |
| **QA** | filter `?type=COUNT_STATION` · CRUD live · leave-confirm · count **377** · empty/toast |

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprintPrior | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| status | `confirmed` |
| writtenAt | `2026-09-01T06:50:00.000Z` |
| taskId | `task_ccfc7d69` |
