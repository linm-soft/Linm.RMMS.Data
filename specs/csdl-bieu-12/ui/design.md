# Design — csdl-bieu-12 (Biểu 12 — Cây xanh, thảm cỏ)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_8d909c44`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `green-assets` |
| formNo | `12` · title VN **Biểu 12 — Cây xanh, thảm cỏ** (Q-TITLE keep_demo) |
| columns | **15** · **2 section UX** Khóm cây + Thảm cỏ |
| IdCode | prefix **`CX`** · `CX-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | — (không peer · **cấm** invent so-ts-green · **GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_65010473` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-12-control-hint.md` · `csdl-bieu-12-real-data.md` · contentHash `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` · headerFingerprint `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-12`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=green-assets` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`green-assets`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_8d909c44` · po `task_65010473` · analy `task_94fca237` |
| updatedAt | `2026-09-05T13:15:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · invent peer so-ts-green · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-12.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-12-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-12-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-12/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · slug `csdl-bieu-12` add_now |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ invent so-ts-green.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=green-assets` | Alias **`/csdl-bieu-12`** + hub | GAP-BIEU12-ROUTE-01 |
| List cols | generic road/km/detail* | Shared + 4 khóm + grassAreaM2 + status subset | GAP-BIEU12-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` | Typed **15 cột** Slideout 2col · **2 section** khóm + thảm cỏ | GAP-BIEU12-TYPED-01 · GAP-CSDL-CUC-03 |
| Khóm | free «loại cây» | `oleanderClumps` · `ngauClumps` · `palmClumps` · `otherClumps` Number · keep_other | GAP-BIEU12-CLUMP-01 |
| Thảm cỏ | mixed detailSpec | `grassAreaM2` Number m² · allow_either | GAP-BIEU12-GRASS-01 |
| side | free «taluy» | LOOKUP L/R/C/Both · side_only | GAP-BIEU12-SIDE-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Peer | none | **cấm** invent · không toolbar peer | GAP-CSDL-CUC-11 |
| DOMAIN-MAP | thiếu slug | add_now `csdl-bieu-12` | GAP-BIEU12-DMAP-01 |
| Import/Export | stub | stub OUT Biểu 12 | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **12** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-OTHER-CLUMP=`keep_other` · Q-GRASS-REQ=`allow_either` · Q-TALUY=`side_only` · Q-LIST-COLS=`subset` · Q-TITLE=`keep_demo` · Q-DMAP=`add_now` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + 4 khóm + grass + status |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **2 section** Khóm cây + Thảm cỏ |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`green-assets`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | **none** · **cấm** invent so-ts-green toolbar |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-12` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=green-assets` · card title VN Biểu 12 |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · 2 section | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `CX-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card «Cây xanh, thảm cỏ» · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-PEER | — | — | **Cấm** invent so-ts-green |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 12 — Cây xanh, thảm cỏ» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line/Polygon geom |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both · side_only |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 12 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng · **cấm** nút Sổ TS peer.

### Zone C — Grid columns (typed · **subset** · shared+khóm+cỏ)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Trúc đào** · **Ngâu** · **Cọ** · **Khác** · **Thảm cỏ m²** · **TT** · ⋯

Schema-config có thể bổ sung: manageUnit · notes.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có cây xanh, thảm cỏ» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Định danh & tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `CX-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line/Polygon |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both · **Q-TALUY** side_only |

### 3.2 Form Slideout — Z2 Khóm cây

Section title cố định: **«Khóm cây»**

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 7 | oleanderClumps | Khóm trúc đào (SL) | Number | | int ≥0 · **GAP-BIEU12-CLUMP-01** |
| 8 | ngauClumps | Khóm ngâu (SL) | Number | | int ≥0 |
| 9 | palmClumps | Khóm cọ (SL) | Number | | int ≥0 |
| 10 | otherClumps | Khóm khác (SL) | Number | | int ≥0 · **Q-OTHER-CLUMP** keep_other |

### 3.3 Form Slideout — Z2b Thảm cỏ (cùng Slideout · allow_either)

Section title: **«Thảm cỏ»** · **Q-GRASS-REQ** allow_either — cho phép chỉ khóm (cỏ=0) hoặc chỉ cỏ (khóm=0)

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 11 | grassAreaM2 | Thảm cỏ (m²) | Number | | decimal ≥0 · **GAP-BIEU12-GRASS-01** |

### 3.4 Form Slideout — Z3 Quản lý

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 12 | status | Tình trạng | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
| — | manageUnit | ĐV QL | Text | | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | trail · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.5 controlHint map (Design chốt)

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
| Form | oleanderClumps / ngauClumps / palmClumps / otherClumps | Number | — · keep_other |
| Form | grassAreaM2 | Number | — · allow_either |
| Form | status | Dropdown | LOOKUP_STATIC |
| Form | manageUnit | Text (P1) | — · P2 org-unit |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html` |
| README | `specs/csdl-bieu-12/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 2 section khóm+cỏ) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=green-assets` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=green-assets` + typed 15 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (15 typed · 2 section khóm+cỏ) | PASS |
| Kind B A–D+F · Kind D Slideout 2col · filter-bar hard | PASS |
| reviewUrl browser-openable prototype | PASS |
| Grid AC YES · Leave YES · Report N/A | PASS |
| design_confirm (autoApprove ON) | **approve** |
| ui_repo_confirm / be_repo_confirm | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlBieu12 · typed DTO/UiSchema `green-assets` · Oleander*/Ngau*/Palm*/Other*/GrassAreaM2 · DOMAIN-MAP slug · **cấm** infra |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-12` · **cấm** đoán Text vs SearchInput · **cấm** detail* · **cấm** invent peer |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| generatedAt | 2026-09-05T13:15:00.000Z |
| versionGate | ok |
| taskId | task_8d909c44 |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_8d909c44 -->
