# Design — csdl-so-06 (Sổ 06 — QL cầu / phiếu KT · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · entries `pattern_inline_grid` **fixed-20** |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_8dc712d5`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO06-TYPED-01 · ROUTE-01 · FORMNO-01 · FIXED20-01 · MEDIA-01 · PEER-01 · APILEGACY-01 · DMAP-01 · GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 · RPT-SRC |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-06` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html` |
| prototype | `specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=bridge-inspections`** · **cấm ERP.*** |
| resource | `bridge-inspections` (**giữ** key) |
| formNo | `06` · title VN **Sổ 06 — QL cầu / phiếu KT** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` · headerFingerprint `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_bc56fa9c` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T03:35:00.000Z` |
| taskId | `task_8dc712d5` · analy `task_ff0beb8e` · po `task_bc56fa9c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · add/remove >20 · đổi `partCode` seed · invent map canvas · runtime `/api/v1/bridge-inspections` · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-06.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-06-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-06-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-06/po/requirement.md` | Grid AC · Screens · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-06 | typed 20 partCode |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · **GAP-SO06-DMAP-01** thiếu row |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | generic col1–3 → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · Hạt trưởng · Kiểm tra viên cầu.

**≠** Sổ TS `so-ts-*` · ≠ Biểu 2 `bridges` form (deep-link / SearchInput only) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub `?resource=bridge-inspections` only | Alias **`/csdl-so-06`** + hub entry | GAP-SO06-ROUTE-01 |
| Hub label | Live «Phiếu KT cầu» | mfeStd title **«Sổ 06 — QL cầu / phiếu KT»** · hub card giữ đến T-REN-01 | GAP-SO06-FORMNO-01 |
| Form | 3 ô `detail*` + Col1–3 | Typed T-SO-06 header + **20 fixed** lines + photoIds | GAP-SO06-TYPED-01 · FIXED20-01 · CUC-03 |
| `roadCode` | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| `bridgeId` | Text / generic | **SearchInput** `bridges` + bind name · passport deep-link | GAP-SO06-PEER-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| `manageUnit` | Text | **Text P1** · org SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| `status` | tot/tb/kem/hong | phiếu `draft\|done\|cancelled` | Q-STATUS |
| Entries | Col1–3 free | Seed 20 partCode · **cấm** add/remove | GAP-SO06-FIXED20-01 |
| Media | không | FileMulti photoIds / dòng · max 5 · optional | GAP-SO06-MEDIA-01 |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Report source | flat Col1–3 | Typed lines READY sau form | GAP-RPT-SRC-CSDL-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · resource key `bridge-inspections` · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Entries | `pattern_inline_grid` **fixed 20** — seed partCode/partName ro · **cấm** add/remove · **cấm** chỉ Col1–3 |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `bridge-inspections` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Media | FileService `photoIds[]` / dòng · integrate-file-upload-web · max **5**/dòng · optional |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report `rpt-kiem-tra-cau` riêng · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-06` |
| Hub entry | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| Form | overlay Slideout · QS `?form=` optional |
| Peer Biểu 2 | deep-link `bridges` / passport · **cấm** merge form |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | title live «Phiếu KT cầu» đến T-REN-01 · open-resource · **cấm** slug |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 | seed **20** entries · footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code · giữ 20 seed |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-ENTRIES | — | inline_grid fixed-20 trong Z2 | **cấm** add/remove |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 06 — QL cầu / phiếu KT»** · meta `resource=bridge-inspections`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar (trái/phải):** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `draft\|done\|cancelled` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| bridgeId | Tên cầu | `SearchInput` | **bridges** |
| fromDate | Từ ngày | `Date` | QS `fromDate` · inspectedAt |
| toDate | Đến ngày | `Date` | QS `toDate` |

Rules: search must work (mã · cầu · đường · người KT) · **cấm** nút Tìm riêng · filter đổi → `page=1`.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Tên cầu | `bridgeName` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmStation` | |
| Ngày KT | `inspectedAt` | |
| Người KT | `inspector` | |
| TT | `status` | Nháp / Đã KT / Hủy |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có phiếu kiểm tra cầu»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + entries fixed-20 inline grid |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint · PO Q)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bridgeId | Cầu | SearchInput `bridges` | * |
| bridgeName | Tên cầu | Text display (bind) | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmStation | Lý trình (Km) | Number | * |
| manageUnit | ĐV QL | Text (P1) | * |
| passportRef | Lý lịch / passport | Text + deep-link | |
| inspectedAt | Ngày kiểm tra | Date | * |
| inspector | Người kiểm tra | Text | * |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| adminArea | Địa phận | Text | |
| status | Tình trạng phiếu | Dropdown `draft\|done\|cancelled` | |
| notes | Ghi chú phiếu | Textarea | |

#### Control-map — entries[] fixed-20 (DES-ENTRIES)

| key | Label | Control | req |
|-----|-------|---------|-----|
| lineNo | STT | Integer ro | auto 1–20 |
| partCode | Mã bộ phận | Text ro | * seed · **cấm** đổi |
| partName | Bộ phận | Text ro | * seed |
| damageDesc | Hư hỏng | Textarea | |
| proposedActionQty | KL kiến nghị | Text | |
| priority | Ưu tiên | Dropdown `quarter\|before-storm\|immediate` | * khi damageDesc ≠ empty |
| photoIds | Ảnh | FileMulti · max 5 | optional |
| notes | Ghi chú dòng | Text | |

**Seed 20 partCode (cố định):** Signage · Approach10m · Lighting · ExpansionJoint · DeckMarking · DeckDrainage · Railing · Abutment · AbutmentCone · RiverTraining · Pier · Bearing · DeckSlab · MainGirder · CrossGirder · LongitudinalBrace · Arch · RiverSignage · ClearanceEncroachment · AttachedDevices.

Required form DoD: bridgeId · roadCode · kmStation · manageUnit · inspectedAt · inspector · province · đúng 20 entries seed · priority khi có damageDesc.

## 3. Grid AC / Form AC (Design mirror PO)

| ID | Rule |
|----|------|
| G-01…G-10 | Kind B A–D · filter HARD · typed cols · pagination · empty VN · row menu · kéo cột ON |
| F-01…F-10 | Kind D Z1–Z3 · typed header · fixed-20 · LeaveConfirm · View readOnly · FileService · SearchInput road/bridge |

## 4. reviewUrl / prototype

| | |
|--|--|
| prototype | `specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-06/ui/prototype/csdl-so-06-list-prototype.html` |
| zones | DES-GRID-A · B · B-FILTER · C · D · Z · DES-FORM-Z1–Z3 · DES-ENTRIES · DES-LEAVE |
| synthetic | UI chrome only · **cấm** demo-json SSOT |

## 5. design_confirm

| | |
|--|--|
| design_confirm | **approve** |
| reason | autoApprove ON · control-map = controlHint · prototype + reviewUrl · filter HARD · fixed-20 · open Q none |
| open Q | **none** (PO resolved) |

## 6. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlSo06 · typed DTO/UiSchema · DOMAIN-MAP row · file bind · seed 20 BE · bridges catalog READY |
| TL/Dev | alias page + typed form · reuse BASE `/asset/csdl-records` |
| QA | Grid+form AC · e2e queued `/agent-qa*` only |

## DoR design

- [x] control-map chốt (= controlHint + PO Q)
- [x] prototype HTML + reviewUrl browser-openable
- [x] zones A–D · Z1–Z3 · fixed-20 · filter HARD
- [x] design_confirm approve (autoApprove)
- [x] handoff compact ≤5KB
- [x] STATUS updated · **cấm** yarn build/e2e/start:std · **cấm** re-scan demo
