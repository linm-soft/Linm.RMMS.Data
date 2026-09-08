# Design — csdl-bieu-10 (Biểu 10 — Kè, tường chắn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_652820eb`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `retaining-walls` |
| formNo | `10` · title VN **Kè, tường chắn** · renumber 9→10 (**T-REN-01**) |
| columns | **21** · **2 section UX** tường chắn + rãnh đỉnh |
| IdCode | prefix **`KE`** · `KE-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-retaining` · toolbar deep-link · **≠** merge form (**GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_c6ef9738` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-10-control-hint.md` · `csdl-bieu-10-real-data.md` · contentHash `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` · headerFingerprint `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-10`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=retaining-walls` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls` |
| peerUrl | `http://localhost:9301/so-ts-retaining` (toolbar · **cấm** merge) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`retaining-walls`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_652820eb` · po `task_c6ef9738` · analy `task_6b4b8a1b` |
| updatedAt | `2026-09-05T18:30:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · 2 entity wide (CrestDitch child P1) · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-10.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-10-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-10/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` |
| PEER | `so-ts-retaining` | deep-link only |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS merge · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=retaining-walls` · label Biểu **9** | Alias **`/csdl-bieu-10`** + hub · label **Biểu 10** | GAP-BIEU10-ROUTE-01 · GAP-BIEU10-REN-01 |
| List cols | generic road/km/detail* | Shared + wall/dim/year subset · filter `wallKind` | GAP-BIEU10-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` | Typed **21 cột** Slideout 2col · **2 section** tường + rãnh đỉnh | GAP-BIEU10-TYPED/BLOCK-01 · GAP-CSDL-CUC-03 |
| wallKind | free detail* | LOOKUP label_vn · stable EN codes | GAP-BIEU10-KIND-01 |
| structure / material | free | LOOKUP_STATIC Excel seed / lookup | GAP-BIEU10-STRUCT/MAT-01 |
| Dim / crest / year | — | lengthM/heightM* · areaM2 optional · crest* optional_flat · inServiceYear* | GAP-BIEU10-DIM/CREST/YEAR-01 |
| heightM | — | UI `heightM` ↔ DB `WidthM` (**Q-HEIGHT** height_alias) | GAP-BIEU10-DIM-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Peer | CTX only | Toolbar deep-link `so-ts-retaining` | GAP-CSDL-CUC-11 · Q-PEER |
| Import/Export | stub | stub OUT Biểu 10 · skip-bridge locked | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-KIND=`label_vn` · Q-STRUCT=`excel_seed` · Q-MAT=`lookup` · Q-HEIGHT=`height_alias` · Q-CREST=`optional_flat` · Q-AREA=`optional` · Q-LIST-COLS=`subset` · Q-REN-LABEL=`with_typed` · Q-PEER=`toolbar` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + wall/dim/year subset |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **2 section** tường + rãnh đỉnh |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`retaining-walls`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | Toolbar link Sổ TS · **cấm** merge form |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-10` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=retaining-walls` · card label **Biểu 10** |
| Form | overlay Slideout · **cấm** Full-page |
| Peer | Navigate `so-ts-retaining` · deep-link only |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset · peer toolbar |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · 2 section | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `KE-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN Biểu 10 · open resource |
| S-PEER | — | toolbar | deep-link `so-ts-retaining` |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 10 — Kè, tường chắn» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · chủng · vật liệu · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line geom |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| wallKind | Loại kè/tường | `Dropdown` | LOOKUP_STATIC · label_vn |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub / **Sổ TS** | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 10 · peer deep-link | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **subset** · shared+wall)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Loại kè/tường** · **Kết cấu** · **Dài (m)** · **Cao (m)** · **Năm SD** · **TT** · **ĐV QL** · ⋯

Schema-config có thể bổ sung: Vật liệu · DT · crest* · Ghi chú.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có kè / tường chắn» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Định danh & tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `KE-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both |

### 3.2 Form Slideout — Z2 Tường chắn / kè

Section title cố định: **«Tường chắn / kè»**

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 7 | wallKind | Loại kè/tường | Dropdown | * | value EN · label VN: gravity→Trọng lực · gabion→Rọ đá · rcc→BTCT · retaining→Tường chắn · **Q-KIND** label_vn |
| 8 | structure | Kết cấu | Dropdown | * | LOOKUP_STATIC Excel seed · **Q-STRUCT** |
| 9 | material | Vật liệu | Dropdown | * | LOOKUP_STATIC · **Q-MAT** lookup |
| 10 | lengthM | Chiều dài (m) | Number | * | decimal |
| 11 | heightM | Chiều cao (m) | Number | * | decimal · DB `WidthM` · **Q-HEIGHT** height_alias |
| 12 | areaM2 | Diện tích (m²) | Number | | optional · **Q-AREA** |
| 17 | inServiceYear | Năm sử dụng | Number | * | year · **GAP-BIEU10-YEAR-01** |

### 3.3 Form Slideout — Z2b Rãnh đỉnh (cùng Slideout · optional_flat)

Section title: **«Rãnh đỉnh»** · optional · **cấm** 2 entity / child CrestDitch P1

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 13 | crestDitchKind | Loại | Dropdown | | LOOKUP_STATIC · **Q-CREST** optional_flat |
| 14 | crestDitchStructure | Kết cấu | Dropdown | | LOOKUP_STATIC |
| 15 | crestDitchShape | Hình dạng | Dropdown | | LOOKUP_STATIC |
| 16 | crestDitchLengthM | Chiều dài (m) | Number | | decimal |

### 3.4 Form Slideout — Z3 Quản lý

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 18 | status | Tình trạng | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
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
| List B | wallKind | Dropdown | LOOKUP_STATIC |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / side | Number / Dropdown | — |
| Form | wallKind / structure / material | Dropdown | LOOKUP_STATIC |
| Form | lengthM / heightM / areaM2 | Number | — · heightM↔WidthM |
| Form | crestDitch* (4) | Dropdown / Number | LOOKUP_STATIC · optional |
| Form | inServiceYear | Number | — |
| Form | status | Dropdown | LOOKUP_STATIC |
| Form | manageUnit | Text (P1) | — · P2 org-unit |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/prototype/csdl-bieu-10-list-prototype.html` |
| README | `specs/csdl-bieu-10/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 2 section tường+rãnh) · LeaveConfirm · Delete confirm · peer toolbar |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=retaining-walls` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=retaining-walls` + typed 21 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (21 typed · 2 section tường+rãnh) | PASS |
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
| **SA** | Schema_CsdlBieu10 · typed DTO/UiSchema `retaining-walls` · renumber formNo 9→10 · heightM↔WidthM · crest optional_flat |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-10` · peer toolbar · **cấm** đoán Text vs SearchInput |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprintPrior | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| generatedAt | 2026-09-05T18:30:00.000Z |
| versionGate | ok |
| taskId | task_652820eb |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_652820eb -->
