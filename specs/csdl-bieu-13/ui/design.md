# Design — csdl-bieu-13 (Biểu 13 — Tường chống ồn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_ba6fcf2c`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `noise-barriers` |
| formNo | `13` · title VN **Biểu 13 — Tường chống ồn** (Q-TITLE ctx_tuong) |
| columns | **13** · section **Vị trí tuyến** + **Kích thước tường** |
| IdCode | prefix **`TC`** · `TC-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge · Q-PEER-LINK **none_p1** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_397af5bc` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-13-control-hint.md` · `csdl-bieu-13-real-data.md` · contentHash `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` · headerFingerprint `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-13`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=noise-barriers` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`noise-barriers`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_ba6fcf2c` · po `task_397af5bc` · analy `task_3cec1103` |
| updatedAt | `2026-09-05T14:10:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge so-ts-noise-barrier / road-assets · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-13.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-13-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-13-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-13/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · slug `csdl-bieu-13` add_now |
| PEER | `so-ts-noise-barrier` | cite only · **cấm** merge |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ bind `road-assets?type=NOISE_BARRIER`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub 12 biểu · MISSING Biểu 13 | Alias **`/csdl-bieu-13`** + hub NEW card formNo 13 | GAP-BIEU13-HUB-01 · GAP-BIEU13-ROUTE-01 |
| List cols | generic / N/A | Shared + lengthM/heightM/areaM2 + status subset | GAP-BIEU13-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` nếu bootstrap | Typed **13 cột** Slideout 2col · section kích thước | GAP-BIEU13-TYPED-01 · GAP-CSDL-CUC-03 |
| Dim | — | `lengthM` · `heightM` · `areaM2` Number · **manual** area | GAP-BIEU13-DIM-01 · Q-AREA-DERIVE |
| side | — | LOOKUP L/R/C/Both | GAP-BIEU13-SIDE-01 |
| barrier type | — | **không** thêm · no_type_keep_13 | Q-BARRIER-TYPE |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Peer | so-ts-noise-barrier | **cấm** merge · none_p1 link | GAP-CSDL-CUC-11 |
| DOMAIN-MAP | thiếu slug | add_now `csdl-bieu-13` | GAP-BIEU13-DMAP-01 |
| Import/Export | stub | stub OUT Biểu 13 | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **13** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-BARRIER-TYPE=`no_type_keep_13` · Q-AREA-DERIVE=`manual` · Q-PREFIX=`TC` · Q-LIST-COLS=`subset` · Q-TITLE=`ctx_tuong` · Q-DMAP=`add_now` · Q-PEER-LINK=`none_p1` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + lengthM/heightM/areaM2 + status |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · section Vị trí tuyến + Kích thước tường |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`noise-barriers`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | **none_p1** · **cấm** toolbar merge so-ts-noise-barrier |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-13` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=noise-barriers` · NEW card «Tường chống ồn» · formNo **13** · **cấm** slug trên card |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `TC-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub NEW card «Tường chống ồn» · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-PEER | — | — | **Cấm** merge / deep-link peer P1 |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 13 — Tường chống ồn» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line geom |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 13 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng · **cấm** nút Sổ TS peer.

### Zone C — Grid columns (typed · **subset** · shared+dim+status)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Dài (m)** · **Cao (m)** · **DT (m²)** · **TT** · ⋯

Schema-config có thể bổ sung: manageUnit · notes.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có tường chống ồn» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Vị trí tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `TC-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both · **GAP-BIEU13-SIDE-01** |

### 3.2 Form Slideout — Z2 Kích thước tường

Section title cố định: **«Kích thước tường»** · **cấm** gộp 1 text detail*

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 7 | lengthM | Chiều dài (m) | Number | * | decimal ≥0 · **GAP-BIEU13-DIM-01** |
| 8 | heightM | Chiều cao (m) | Number | | decimal ≥0 |
| 9 | areaM2 | Diện tích (m²) | Number | | decimal ≥0 · **Q-AREA-DERIVE** manual · **cấm** auto-derive P1 |

### 3.3 Form Slideout — Z3 Quản lý

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 10 | status | Tình trạng | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
| — | manageUnit | ĐV QL | Text | | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | trail · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** thêm `barrierType` / loại tường ngoài 13 (**Q-BARRIER-TYPE** no_type_keep_13).

### 3.4 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | status | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| List B | side | Dropdown | LOOKUP_STATIC |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / side | Number / Dropdown | — |
| Form | lengthM / heightM / areaM2 | Number | — · area manual |
| Form | status | Dropdown | LOOKUP_STATIC |
| Form | manageUnit | Text (P1) | — · P2 org-unit |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html` |
| README | `specs/csdl-bieu-13/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · section vị trí + kích thước) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=noise-barriers` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=noise-barriers` + typed 13 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*` · bind peer `road-assets`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (13 typed · section kích thước dài/cao/DT) | PASS |
| Kind B A–D+F · Kind D Slideout 2col · filter-bar hard · hub NEW card | PASS |
| reviewUrl browser-openable prototype | PASS |
| Grid AC YES · Leave YES · Report N/A | PASS |
| design_confirm (autoApprove ON) | **approve** |
| ui_repo_confirm / be_repo_confirm | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlBieu13 · typed DTO/UiSchema `noise-barriers` · LengthM/HeightM/AreaM2 · DOMAIN-MAP slug · **cấm** infra · **cấm** merge road-assets |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-13` · hub NEW card · **cấm** đoán Text vs SearchInput · **cấm** detail* · **cấm** merge so-ts-noise-barrier |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-05T14:10:00.000Z |
| versionGate | ok |
| taskId | task_ba6fcf2c |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_ba6fcf2c -->
