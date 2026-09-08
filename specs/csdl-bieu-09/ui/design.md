# Design — csdl-bieu-09 (Biểu 09 — Mốc lộ giới / GPMB)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_0eed32b7`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `boundary-markers` |
| formNo | `09` · title VN **Mốc lộ giới / GPMB** · renumber 8→9 (**T-REN-01**) |
| columns | **17** · **2 section UX** theo `markerKind` (cùng schema) |
| IdCode | prefix **`MK`** · `MK-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | — (**≠** so-ts / road-assets · **GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_cee30b17` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-09-control-hint.md` · `csdl-bieu-09-real-data.md` · contentHash `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` · headerFingerprint `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-09`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=boundary-markers` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`boundary-markers`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_0eed32b7` · po `task_cee30b17` · analy `task_b7a89508` |
| updatedAt | `2026-09-05T17:55:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · 2 entity wide · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-09.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-09-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-09-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-09/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=boundary-markers` · label Biểu **8** | Alias **`/csdl-bieu-09`** + hub · label **Biểu 09** | GAP-BIEU09-ROUTE-01 · GAP-BIEU09-REN-01 |
| List cols | generic road/km/detail* | Shared + marker subset · filter `markerKind` | GAP-BIEU09-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` | Typed **17 cột** Slideout 2col · **2 section kind** | GAP-BIEU09-TYPED-01 / BLOCK-01 · GAP-CSDL-CUC-03 |
| markerKind | free detail* | LOOKUP RoadLimit/GPMB · code_en · UI label VN | GAP-BIEU09-KIND-01 |
| markerStructure | free detail* | LOOKUP_STATIC Excel seed | GAP-BIEU09-STRUCT-01 |
| Dim / Qty / Year | — | L/W/Area optional · Qty show_always default 1 · completedYear Number * | GAP-BIEU09-DIM/YEAR-01 · Q-DIM · Q-QTY |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT Biểu 9 · skip-bridge locked | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-KIND-LABEL=`code_en` · Q-STRUCT=`excel_seed` · Q-DIM=`full_dim` · Q-QTY=`show_always` · Q-LIST-COLS=`subset` · Q-REN-LABEL=`with_typed` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + marker subset |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **2 section kind** (cùng schema) |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`boundary-markers`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-09` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=boundary-markers` · card label **Biểu 09** |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · 2 section kind | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `MK-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN Biểu 09 · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas · **cấm** peer Sổ TS |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 09 — Mốc lộ giới / GPMB» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · kết cấu · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Point thường bằng |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| markerKind | Loại mốc | `Dropdown` | LOOKUP RoadLimit / GPMB · UI label VN |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 9 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **subset** · shared+marker)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Loại mốc** · **Kết cấu** · **SL** · **Năm HT** · **TT** · **ĐV QL** · ⋯

Schema-config có thể bổ sung: Dài · Rộng · DT · Ghi chú.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có mốc lộ giới / GPMB» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Định danh & tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `MK-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Point thường bằng |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both |
| 7 | markerKind | Loại mốc | Dropdown | * | view=ro | value `RoadLimit`/`GPMB` · label «Mốc lộ giới»/«Mốc GPMB» · **Q-KIND-LABEL** code_en |

### 3.2 Form Slideout — Z2 Chi tiết mốc (2 section kind · cùng field set)

Section title động theo `markerKind`:
- `RoadLimit` → **«Mốc lộ giới»**
- `GPMB` → **«Mốc GPMB»**

**Cấm** 2 entity wide · **cấm** mount 2 form riêng.

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 8 | markerStructure | Kết cấu | Dropdown | * | LOOKUP_STATIC Excel seed (bê tông / đá / khác…) · **Q-STRUCT** |
| 9 | markerLengthM | KC dài (m) | Number | | optional · **Q-DIM** full_dim |
| 10 | markerWidthM | KC rộng (m) | Number | | optional |
| 11 | markerAreaM2 | Diện tích (m²) | Number | | optional |
| 12 | markerQty | Số lượng | Number | | int ≥ 1 · default **1** · **Q-QTY** show_always |
| 13 | completedYear | Năm hoàn thành | Number | * | year · **GAP-BIEU09-YEAR-01** |

### 3.3 Form Slideout — Z3 Quản lý

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 14 | status | Tình trạng | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
| — | manageUnit | ĐV QL | Text | | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | trail · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.4 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | status | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| List B | side | Dropdown | LOOKUP_STATIC |
| List B | markerKind | Dropdown | LOOKUP_STATIC |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / side | Number / Dropdown | — |
| Form | markerKind | Dropdown | LOOKUP_STATIC |
| Form | markerStructure | Dropdown | LOOKUP_STATIC |
| Form | markerLengthM / Width / Area / Qty | Number | — |
| Form | completedYear | Number | — |
| Form | status | Dropdown | LOOKUP_STATIC |
| Form | manageUnit | Text (P1) | — · P2 org-unit |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/prototype/csdl-bieu-09-list-prototype.html` |
| README | `specs/csdl-bieu-09/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 2 section kind) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=boundary-markers` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=boundary-markers` + typed 17 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (17 typed · 2 section kind) | PASS |
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
| **SA** | Schema_CsdlBieu9 · typed DTO/UiSchema `boundary-markers` · renumber formNo 8→9 · Length/Width/Qty widen |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-09` · **cấm** đoán Text vs SearchInput |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprintPrior | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| generatedAt | 2026-09-05T17:55:00.000Z |
| versionGate | ok |
| taskId | task_0eed32b7 |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_0eed32b7 -->
