# PO — Requirement — so-ts-culvert-x (Sổ TS — Cống thoát nước ngang)

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| title | Sổ TS — Cống thoát nước ngang |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `CULVERT_X` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `CULVERT_X` |
| cluster | `crossing` · ô KCHT `t07` |
| dump | **thiếu** (`GAP-CULVERT-X-01`) · CSV **0** · UI từ mẫu `22-cong-ngang-*` · **cấm** seed |
| gap | GAP-CULVERT-X-01 · GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-CN-NAME-01 · GAP-CN-SPEC-01 · GAP-CN-POINT-01 · GAP-CN-ROUTE-01 · GAP-CN-LEAVE-01 · GAP-CN-LOOKUP-01 · GAP-CN-PREFIX-01 · GAP-CN-KEY-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov gap · demo = UI tham chiếu · sourceKind=`synthetic` · **UI từ mẫu** |
| status | `confirmed` (autoApprove=ON · task `task_0bcb387a`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-culvert-x-control-hint.md` · `so-ts-culvert-x-real-data.md` · contentHash `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` · headerFingerprint `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` · analy `task_dbd8f71e` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-culvert-x` → Navigate live `/so-ts?type=CULVERT_X` (**GAP-CN-ROUTE-01**) |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` · live `http://localhost:9301/so-ts?type=CULVERT_X` |
| liveList | `/so-ts?type=CULVERT_X` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-real-data.md` |
| contentHash | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| headerFingerprint | `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · `import-gov-ssot` gap · `import-gov-asset-fields` (không § CULVERT_X) |
| peer | `so-ts-underpass` (crossing · Kind B) |
| taskId | `task_0bcb387a` · analy `task_dbd8f71e` |
| updatedAt | `2026-09-01T12:25:00.000Z` |
| versionGate | `ok` (stub draft → first fill · versions khớp analy) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy · invent API · ERP.* · demo-json / localStorage SSOT · seed giả (CSV 0) · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Cống thoát nước ngang (`CULVERT_X`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN `22-cong-ngang-*` — **không** fork page riêng · empty grid OK khi dump thiếu.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy + PO autopilot):**

1. Grid profile `CULVERT_X`: loại CT · 3 tầng tuyến · lý trình · hình dạng · tải · số ngăn · rộng/cao/dài · VL thân · **ẩn** `type` / `kmTo` / SL / ĐVT · **hide-empty** `width` / `material_body_id` · cột `name` **OFF** default.
2. Form S-ATTR editable đủ proposed keys mẫu (không chỉ `<dl>` dumpSpecs).
3. `name` optional trên form · **không** cột list default · **cấm** IsWeak→đoạn (**GAP-CN-NAME-01**).
4. Crossing point: **ẩn** `kmTo` trên form/grid khi `CULVERT_X`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** native.
6. Reuse S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork · **cấm** tab legacy (**GAP-SOTS-TAB-01**).
7. Lookup shape/VL/KC = **Dropdown LOOKUP_STATIC** (init-data hoặc distinct · mẫu Hộp/Bản) — **không** SearchInput seed (**GAP-CN-LOOKUP-01**).
8. Create IdCode prefix **`CN-`** (**GAP-CN-PREFIX-01**).
9. Dump keys: **giữ proposed** từ mẫu · SA remap khi có `tbl_*` · Dev **không** chờ dump (**GAP-CN-KEY-01** · **GAP-CULVERT-X-01**).
10. Alias `/so-ts-culvert-x` → Design **Navigate** live `?type=CULVERT_X` (**GAP-CN-ROUTE-01**).

**≠** reopen full CRUD parent · **≠** invent map canvas · **≠** seed row từ mẫu PNG/demo.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T19:12:09.599Z` · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack) |
|-------|--------------------------------|-----------------|
| Kind / shell | Kind B A–D + full-page form CRUD BFF | **keep** `/so-ts` · type `CULVERT_X` |
| Dump / import | CSV 0 · thiếu `tbl_*` | Empty OK · UI mẫu · **cấm** seed — **GAP-CULVERT-X-01** |
| Grid columns | schema chung | Profile `CULVERT_X` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly dumpSpecs dl | Editable Input/Select đủ mẫu — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl | Mount S-* shared — **GAP-SOTS-REUSE-01** |
| Name | — | optional form · list OFF — **GAP-CN-NAME-01** |
| Labels | thiếu | Label VN + controls — **GAP-CN-SPEC-01** |
| Point kmTo | hiện kmTo | **Ẩn** form/grid — **GAP-CN-POINT-01** |
| Route alias | thiếu Navigate | Navigate `/so-ts-culvert-x` → `?type=CULVERT_X` — **GAP-CN-ROUTE-01** |
| Leave / alert | native nếu còn | LeaveConfirmModal + useAlert — **GAP-CN-LEAVE-01** |
| Lookup | text mẫu | Dropdown LOOKUP_STATIC — **GAP-CN-LOOKUP-01** |
| Prefix Create | GIS `CN` | Align **`CN-`** — **GAP-CN-PREFIX-01** |
| Dump keys | proposed snake | Giữ · SA remap khi dump — **GAP-CN-KEY-01** |
| API docs | có thể ghi so-ts/* | Cite **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · CatalogFormShell · BFF/API road-assets · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · map canvas out of scope.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=CULVERT_X` + search (mã · loại CT · hình dạng · VL · tuyến · QR) — page=1 khi filter đổi · **empty OK**.
3. Zone A: title «Sổ TS — Cống thoát nước ngang» khi `type=CULVERT_X` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `CULVERT_X` / ẩn deep-link) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới · Refresh · Schema · History — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack (**filter-bar-layout-hard**).
5. Zone C: `LinCatalogDataGrid` kéo cột ON · profile CULVERT_X (type_work · 3 tầng tuyến · kmFrom · shape · weight · number · width/height/crossing_length · material_body · hide-empty width/material) · **ẩn** type/kmTo/quantity/unitCode · `name` OFF default · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50/100/200/500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets`.
8. Form full-page C/E/V/Copy: S-* mounted · View=`readOnly` · required: type · status · route · type_work_id · culvert_shape_id · leave dirty · name/kmFrom optional.
9. S-ATTR: đủ proposed keys editable (Dropdown/Number/Checkbox) — **không** chỉ `<dl>`.
10. Point: **ẩn** `kmTo` · **không mount** S-LOC-RANGE.
11. Lookups master = SearchInput · attr = Dropdown LOOKUP_STATIC.
12. Create IdCode prefix **`CN-`**.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`**.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid VN · toast — **cấm** mock seed · **cấm** demo/localStorage.
16. Alias route Navigate PASS trên `mfeStdUrl`.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-culvert-x.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent · crossing · t07 | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-ssot.md` | gap CSV 0 · thiếu bảng | P0 ✅ |
| CTX-04 | `docs/context/features/import-gov-asset-fields.md` | không § CULVERT_X | P1 |
| CTX-05 | `docs/context/features/asset-kcht-32.md` | Shape/Aperture/Length/Load | P1 |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only | P1 — **cấm** SSOT data |
| MAU-01 | `docs/img/gov-mau-tai-san/22-cong-ngang-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/22-cong-ngang-detail.png` | mẫu detail | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-culvert-x-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-culvert-x-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel · CSV 0** | — · **cấm** seed |

## 5. Control hints (copy analy · PO chốt)

### 5.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại · hình dạng · VL · tuyến · QR |
| type | Loại tài sản | SearchInput | **asset-type** | prefills `CULVERT_X` · ẩn deep-link |
| route | Cao tốc / QL | SearchInput | **road-route** | **cấm** free-text |
| kmFrom / kmTo | Lý trình | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | **org-unit** | QS `orgUnit` |

### 5.2 Grid columns (`type=CULVERT_X`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| type_work_id | Loại công trình | **ON** | «Cống thủy lợi» |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô |
| kmFrom | Lý trình | ON | |
| culvert_shape_id | Hình dạng | ON | Hộp / Bản · hide-empty OK |
| weight | Tải trọng | ON | |
| number | Số ngăn cống | ON | |
| width | Bề rộng lòng / ĐK trong (m) | ON · **hide-empty** | PO chốt |
| height | Chiều cao TB lòng cống (m) | ON | |
| crossing_length_culvert | Chiều dài thân cống (m) | ON | |
| material_body_id | Vật liệu thân cống | ON · **hide-empty** | PO chốt |
| name | Tên / mô tả | **OFF** | GAP-CN-NAME-01 |
| type / kmTo / quantity / unitCode | — | **OFF** | |

### 5.3 Form sections

**S-META:** code (readonly `CN-`) · type lock `CULVERT_X` · status/source Dropdown init-data.

**S-ROUTE:** route / routeNamed / routeSegment SearchInput cascade *required route*.

**S-LOC-POINT:** kmFrom Text · tinhthanhpho / xaphuong · **ẩn kmTo**.

**S-NAME:** name Text optional.

**S-ATTR (editable):**

| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | Dropdown | * LOOKUP_STATIC |
| weight | Tải trọng | Number | |
| number | Số ngăn cống | Number | |
| width | Bề rộng lòng / ĐK trong (m) | Number | |
| height | Chiều cao TB lòng cống (m) | Number | |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | |
| material_body_id | Vật liệu thân cống | Dropdown | LOOKUP_STATIC |
| has_upstream_head | Có đầu cống thượng lưu? | Checkbox | |
| upstream_head_structure_id | Kết cấu đầu thượng lưu | Dropdown | khi has |
| has_upstream_valve | Có van/phai thượng lưu? | Checkbox | |
| has_downstream_head | Có đầu cống hạ lưu? | Checkbox | |
| has_downstream_valve | Có van/phai hạ lưu? | Checkbox | |
| has_upstream_apron | Có sân thượng lưu? | Checkbox | |
| upstream_apron_structure_id | Kết cấu sân thượng lưu | Dropdown | |
| upstream_apron_area | DT sân thượng lưu (m²) | Number | |
| has_downstream_apron | Có sân hạ lưu? | Checkbox | |
| downstream_apron_structure_id | Kết cấu sân hạ lưu | Dropdown | |
| downstream_apron_area | DT sân hạ lưu (m²) | Number | |
| has_upstream_basin | Có hố tụ thượng lưu? | Checkbox | |
| has_downstream_basin | Có hố tụ hạ lưu? | Checkbox | |
| upstream_basin_width | Bề rộng hố tụ thượng (m) | Number | |
| downstream_basin_width | Bề rộng hố tụ hạ (m) | Number | |

**S-GPS:** lat/lng Number · qr / valueVnd / note.

## Grid list AC (REQUIRED · Kind B / list)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới (ui-schema Zone F) · kéo cột default ON |
| **Grid flow** | Sort · filter cột · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** (`filter-bar-layout-hard`) — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack |
| **Form pair** | Create/Edit/View/Copy → **Full page** (`CatalogFormShell` 5col · URL `/so-ts/tao-moi` · `/so-ts/sua?id=`) · **cấm** Modal/Slideout · **cấm** tab legacy |
| **Tree?** | Không (org filter trên bar) |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-grid-task-template` |

**Handoff → Design:** clone **`shared-grid-example.html`** · giữ `data-des-id` — **cấm** gen list chỉ table giữa trang.  
**Report AC:** N/A (packKind=list).

## Screens (REQUIRED)

| Surface | Pattern | Route | FormMode | Actions | devSlash |
|---------|---------|-------|----------|---------|----------|
| S-LIST | Full page Kind B A–D+F | live `/so-ts?type=CULVERT_X` · alias `/so-ts-culvert-x` | — | filter · CRUD entry · schema · history | `/agent-dev` |
| S-FORM | **Full page** 5col | `/so-ts/tao-moi` · `/so-ts/sua?id=` | C / E / V / Copy | Save · Cancel · leave dirty | `/agent-dev` |
| S-ALIAS | Navigate redirect | `/so-ts-culvert-x` → `?type=CULVERT_X` | — | Design MUST | `/agent-dev` |
| Map | none | — | — | GIS `cong` deep-link optional | — |

**Pattern = Full page** (`ui-pattern-decision` · URL `/new`·`:id` style). **cấm** Modal/Slideout cho form pair.

## Leave / alert (REQUIRED)

| Event | Control | Cấm |
|-------|---------|-----|
| Dirty leave (Cancel / route change / browser back) | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | `window.confirm` / `beforeunload` native only |
| Delete / block confirm | **`useAlert` / `Modal`** | `alert` / `confirm` native |
| Validation / API error | toast | alert native |

Thiếu → **GAP-PO-LEAVE-01** / **GAP-CN-LEAVE-01**.

## PO decisions (autopilot · autoApprove=ON)

| ID | Decision |
|----|----------|
| changeScope | **`new_page`** |
| packKind | **`list`** |
| GAP-CN-LOOKUP-01 | **Dropdown LOOKUP_STATIC** (init-data / mẫu) · **không** SearchInput seed |
| GAP-CN-NAME-01 | form `name` **optional** · list cột **OFF** default |
| GAP-CN-ROUTE-01 | live `?type=CULVERT_X` · alias `/so-ts-culvert-x` **Navigate REQUIRED** |
| GAP-CN-KEY-01 | **giữ proposed keys** · SA remap khi `tbl_*` · Dev không block |
| GAP-CULVERT-X-01 | empty OK · UI mẫu · **cấm** seed |
| hide-empty | `width` · `material_body_id` = **hide-empty OK** (ON) |
| GAP-CN-PREFIX-01 | Create **`CN-`** |
| formPattern | **Full page** |
| Report AC | N/A |

## Open questions

**none** (autopilot chốt bảng trên · Design/SA không Ask lại trừ version lệch).

## API bind (cite real-data §B)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=CULVERT_X&…` |
| Detail | `GET …/asset/road-assets/{id}` |
| CRUD | `POST` / `PUT` / soft `DELETE` |
| Init | `GET …/asset/road-assets/init-data` |

FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`. Entity: `rmms_road_assets`. **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`.

## Handoff → Design

| Need | Value |
|------|-------|
| controlHint | cite DA-HINT + §5 this file |
| Screens | S-LIST · S-FORM Full · S-ALIAS Navigate |
| grid_standard | **YES** · Kind B A–D · FilterBar HARD |
| report_standard | N/A |
| formPattern | Full page CatalogFormShell 5col |
| peerStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` (peer crossing) · live self `…/so-ts?type=CULVERT_X` |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` |
| packKind | **list** confirmed |
| Leave | LeaveConfirmModal + useAlert |
| Dump | thiếu · empty OK · proposed keys |
| Next SA | path giữ · prefix CN- · lookup seed · remap keys khi dump |

**Assign Dev (sau TL):** `devSlash=/agent-dev` (list/form Kind B).

## Version meta

```
skillId=agent-po
skillVersion=2026.08.25.02
schemaVersion=1
workflowVersion=2026.09.01.02
rulesVersion=2026.09.01.1
versionGate=ok
contentHash=sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b
headerFingerprint=sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c
analyzedAt=2026-09-01T19:12:09.599Z
taskId=task_0bcb387a
writtenAt=2026-09-01T12:25:00.000Z
changeScope=new_page
packKind=list
status=confirmed
```
