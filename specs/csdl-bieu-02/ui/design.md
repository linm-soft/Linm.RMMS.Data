# Design — csdl-bieu-02 (Biểu 02 — Thống kê cầu)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_388b210f`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| columns | **48** (Excel Biểu 2 typed + legacy 64–69 hidden) |
| IdCode | prefix **`BR`** · `BR-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only · **cấm** merge form (**GAP-BIEU02-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_ba5815a6` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-02-control-hint.md` · `csdl-bieu-02-real-data.md` · contentHash `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` · headerFingerprint `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-02`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=bridges` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** CRUD qua `/bridges/{id}/passport` |
| catalogKind UI schema | **`bridges`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_388b210f` · po `task_ba5815a6` · analy `task_dd8553f8` |
| updatedAt | `2026-09-05T08:20:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge passport/Sổ 6 · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-02.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-02-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-02/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · **GAP-BIEU02-DMAP-01** slug |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** passport `/bridges/{id}` · ≠ Sổ 6 · ≠ hub generic 3 ô `detail*`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=bridges` | Alias **`/csdl-bieu-02`** + hub entry | GAP-BIEU02-ROUTE-01 |
| List cols | generic road/km/detail* | Typed tên cầu · dài · loại dầm · GPS summary | GAP-BIEU02-TYPED-01 |
| Form | 3 ô `detail*` | Typed **48 cột** Slideout 2col **sectioned** | GAP-BIEU02-TYPED-01 / GAP-CSDL-CUC-03 |
| GPS | — | **six_numbers** lat/lng×3 · **cấm** map canvas | GAP-BIEU02-GPS-01 · Q-GPS |
| Dầm | — | spanCount · spanScheme · beamLengthM · beamType | GAP-BIEU02-BEAM-01 |
| Phần dưới | — | mố/trụ TT · móng/thân | GAP-BIEU02-SUB-01 |
| Tải | — | designLoad / actualLoad **Text** | GAP-BIEU02-LOAD-01 · Q-LOAD |
| Gối/lan can | — | bearing* · railing* · drain* · PQ · crown | GAP-BIEU02-FURN-01 |
| Legacy | — | legacyCol64/69 **hidden** P1 | GAP-BIEU02-LEGACY-01 · Q-LEGACY |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT XLS Biểu 2 | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link only · **cấm** merge | GAP-BIEU02-PEER-01 |
| Sections | flat | **sectioned** 5 khối PO | Q-SECTION |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key `bridges` · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-GPS=`six_numbers` · Q-LOAD=`text` · Q-LEGACY=`keep_hidden` · Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-SECTION=`sectioned` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **sections** |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`bridges`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas (**GAP-BIEU02-MAP-01**) |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-02` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=bridges` |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ 6 / passport | deep-link only · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 sectioned | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `BR-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN · open resource |
| S-PEER-SO6 | — | — | deep-link Sổ 6 / passport only |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 02 — Thống kê cầu» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · tên cầu · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom | Từ Km | `Number` | filter QS |
| kmTo | Đến Km | `Number` | filter QS |
| beamType | Loại dầm | `Dropdown` | LOOKUP_STATIC · optional filter |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **cấm** chỉ 3 detail)

STT · □ · **Mã** · **Tên cầu** · **Đường** · **Tỉnh** · **Lý trình** · **Cdài** · **Loại dầm** · **GPS** (tóm tắt đầu/giữa/cuối) · **TT** · **ĐV QL** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · optional open-so6 / passport deep-link · kéo cột ON.

Empty: «Chưa có cầu» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — typed Biểu 2 (48 cột · **sectioned**)

| # | uiField | Label VN | Control | Required | FormMode | Section | Notes |
|---|---------|----------|---------|----------|----------|---------|-------|
| — | code | Mã | Text readonly | auto | all ro | Z1 Định danh | IdCode `BR-` · **cấm** Guid |
| 1 | bridgeName | Tên cầu | Text | * | view=ro | Z1 | |
| 2–3 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | Z1 | catalogKind `road-route` |
| 4 | province | Địa danh | Dropdown | * | view=ro | Z1 | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | Number | * | view=ro | Z1 | decimal |
| 7 | side | Vị trí L/R | Dropdown | | view=ro | Z1 | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | Number | * | view=ro | **GPS** | **Q-GPS** six_numbers · đuôi mố / tim |
| 14 | spanCount | Số nhịp | Number | * | view=ro | **Dầm** | int |
| 15 | spanScheme | Sơ đồ nhịp | Text | | view=ro | Dầm | |
| 16 | beamLengthM | Dài dầm (m) | Number | | view=ro | Dầm | |
| 17 | beamType | Loại dầm | Dropdown | * | view=ro | Dầm | DUL/BTCT/dàn thép/I LH/vòm/khác |
| 18 | abutmentCondition | Mố TT | Dropdown | | view=ro | **Phần dưới** | tot/tb/kem/hong |
| 19–20 | abutmentFoundation / abutmentBody | Móng / thân mố | Text | | view=ro | Phần dưới | |
| 21 | pierCondition | Trụ TT | Dropdown | | view=ro | Phần dưới | tot/tb/kem/hong |
| 22–23 | pierFoundation / pierBody | Móng / thân trụ | Text | | view=ro | Phần dưới | |
| 24–25 | designLoad / actualLoad | Tải TK / TT | **Text** | | view=ro | **Tải+Gối** | **Q-LOAD** text · SA unit later |
| 26–27 | bearingCount / bearingType | Gối SL / loại | Number + Text | | view=ro | Tải+Gối | |
| 28–30 | railingLengthM / curbAreaM2 / handrailType | Lan can · DT gờ · tay vịn | Number/Text | | view=ro | **Lan can+thoát** | |
| 31–32 | drainPipeCount / drainPipeLengthM | Ống thoát SL / dài | Number | | view=ro | Lan can+thoát | |
| 33 | reflectiveArea10mM2 | DT phát quang 10m | Number | | view=ro | Lan can+thoát | |
| 34 | steelCompositeBeam | Dầm thép LH | Checkbox | | view=ro | Lan can+thoát | |
| 35 | pierAbutmentCrown | Đỉnh trụ/mố | Text | | view=ro | Lan can+thoát | |
| 36–37 | lengthM / carriageWidthM | Cdài cầu / B xe chạy | Number | * | view=ro | **Kích thước** | |
| 38 | builtYear | Năm XD | Number | | view=ro | Kích thước | year |
| 39 | status | Tình trạng | Dropdown | * | view=ro | Kích thước | LOOKUP_STATIC |
| 40 | manageUnit | ĐV QL | Text | | view=ro | Kích thước | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| 41 | updatedByName | Người cập nhật | Text | | view=ro | Kích thước | audit |
| 42 | notes | Ghi chú | Textarea | | view=ro | Kích thước | full row |
| 43–44 | waterClearanceM / approachType | Tĩnh không nước · đường dẫn | Number/Text | | view=ro | Kích thước | |
| 45 | navigationClass | Cấp thông thuyền | Text | | view=ro | Kích thước | |
| 46–47 | legacyCol64 / legacyCol69 | Legacy Excel | Text **hidden** | | hidden | — | **Q-LEGACY** keep_hidden P1 |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.2 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status / beamType | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / side / beamType / abutmentCondition / pierCondition | Dropdown | LOOKUP_STATIC |
| Form | gps* ×6 | Number | — |
| Form | designLoad / actualLoad | Text | — |
| Form | steelCompositeBeam | Checkbox | — |
| Form | manageUnit | Text | org-unit P2 |
| Form | notes | Textarea | — |
| Form | legacyCol64/69 | Text hidden | — |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=bridges` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=bridges` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu2` — **SA**.  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · CRUD passport `/bridges/{id}` · demo-json / LS SSOT.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` sectioned |
| Artifact | `ui/prototype/csdl-bieu-02-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · beamType optional |
| Form | Slideout typed 48 cột · sections GPS/dầm/phần dưới/tải+gối/lan can · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/ui/prototype/csdl-bieu-02-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-02` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · sectioned 48 cột · footer only
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] deep-link Sổ 6 / passport only · map none · GPS = Number×6
```

## 5. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| GPS thiếu bắt buộc | validation toast field | silent save |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |
| Empty list | VN «Chưa có cầu» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-GPS | **six_numbers** · UI 6 Number · **cấm** map canvas |
| Q-LOAD | **text** · SA unit later |
| Q-LEGACY | **keep_hidden** P1 |
| Q-ROUTE | **alias_now** `/csdl-bieu-02` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-SECTION | **sectioned** GPS/dầm/phần dưới/tải+gối/lan can+thoát |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack stub |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_388b210f`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only · sectioned |
| Field inventory | §3 · Control khớp controlHint · typed 48 cột |
| Filters | LinErpListFilterBar · road SearchInput · beamType optional · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · road-routes search |
| Entity | shell + **Schema_CsdlBieu2** · GPS six_numbers · LOAD text · LEGACY keep_hidden |
| Lookups | road-route P1 · province static · org DEFER P2 |
| DOMAIN-MAP | thêm slug `csdl-bieu-02` (**GAP-BIEU02-DMAP-01**) |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `bridges` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột sectioned · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer deep-link | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput | ✅ |
| Control-map = controlHint · typed 48 · **cấm** detail* only | ✅ |
| Q-GPS six_numbers · Q-SECTION sectioned · Q-LOAD text · Q-LEGACY keep_hidden | ✅ |
| Prototype + reviewUrl | ✅ |
| LeaveConfirmModal | ✅ |
| real_view_parity v1 + peerStdUrl + mfeStdUrl | ✅ |
| Hash skip analy · **cấm** re-scan | ✅ |
| Report DES-RPT N/A | ✅ |
| PO Grid AC | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T08:20:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 |
| headerFingerprintPrior | sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591 |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_388b210f` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 -->
