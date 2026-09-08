# Design — csdl-bieu-16 (Biểu 16 — Nút giao)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_e0f9dbb6`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `interchanges` |
| formNo | `16` · title VN **Nút giao** (Q-TITLE nut_giao) |
| columns | **39** · header + child `branches[]` + ATGT · Excel flatten → runtime child |
| IdCode | prefix **`IX`** · `IX-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-interchange` · **cấm** merge · Q-PEER-LINK **none_p1** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_593d435f` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-16-control-hint.md` · `csdl-bieu-16-real-data.md` · contentHash `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` · headerFingerprint `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-16`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=interchanges` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`interchanges`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_e0f9dbb6` · po `task_593d435f` · analy `task_70fe1d76` |
| updatedAt | `2026-09-05T16:25:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · flatten-only 1 nhánh · Full-page form · invent map canvas · merge so-ts-interchange / road-assets · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-16.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-16-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-16-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-16/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · slug `csdl-bieu-16` add_now |
| PEER | so-ts-interchange | cite only · **cấm** merge |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ bind `road-assets?type=INTERCHANGE`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub 12 biểu · MISSING Biểu 16 | Alias **`/csdl-bieu-16`** + hub NEW card formNo 16 «Nút giao» | GAP-BIEU16-HUB-01 · GAP-BIEU16-ROUTE-01 |
| List cols | generic / N/A | Shared + name/interchangeType/kmMain/status subset | GAP-BIEU16-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` nếu bootstrap | Typed **39 cột** Slideout 2col · 5 section + child `branches[]` | GAP-BIEU16-TYPED-01 · GAP-CSDL-CUC-03 |
| Type / GT | — | interchangeType cite_excel LOOKUP · trafficOrg LOOKUP | GAP-BIEU16-TYPE-01 |
| Main geom | — | B nền/mặt/KC + số làn tuyến chính | GAP-BIEU16-MAIN-01 |
| Branches | — | Child grid `branches[]` **min_1** · add/remove | GAP-BIEU16-BRANCH-01 · GAP-CSDL-CUC-09 |
| ATGT | — | qty Number biển/vạch/đảo/đèn | GAP-BIEU16-ATGT-01 · Q-ATGT qty |
| Km | — | kmMain + kmAux **point_main** (≠ Line kmFrom–kmTo) | GAP-BIEU16-KM-01 |
| road | — | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | — | **in_39** Text P1 → org SearchInput P2 | GAP-CSDL-ORG-01 · Q-MANAGE in_39 |
| Peer | so-ts-interchange | **cấm** merge · none_p1 link | GAP-CSDL-CUC-11 |
| DOMAIN-MAP | thiếu slug | add_now `csdl-bieu-16` | GAP-BIEU16-DMAP-01 |
| Import/Export | stub | stub OUT Biểu 16 | GAP-CSDL-XLS-01 |
| DB | SSOT 1–12 only | Schema_CsdlBieu16 + Branch · SA | GAP-BIEU16-DB-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **16** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-TYPE-SET=`cite_excel` · Q-TRAFFIC-ORG=`lookup` · Q-ATGT=`qty` · Q-BRANCH-MIN=`min_1` · Q-KM=`point_main` · Q-MANAGE=`in_39` · Q-PREFIX=`IX` · Q-LIST-COLS=`subset` · Q-TITLE=`nut_giao` · Q-DMAP=`add_now` · Q-PEER-LINK=`none_p1` · Q-CHILD-API=`embed` · open Q = **none**.

**LOOKUP seed (cite_excel · Design chốt UI · SA confirm Excel):**

| Field | Options P1 |
|-------|------------|
| interchangeType | Đồng mức · Khác mức · Liên thông · Vòng xuyến · Khác |
| trafficOrg | Đèn tín hiệu · Biển báo · Đảo giao thông · Không điều khiển · Khác |
| status | tot / tb / kem / hong |
| side / branchSide | L / R / C |
| branchDirection | Tách · Nhập · Khác |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + name/interchangeType/kmMain/status |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · 5 section (Định danh · Đặc trưng nút · Nhánh child · ATGT · Quản lý) |
| Child | Editable grid `branches[]` · add/remove · **min_1** khi Lưu · **cấm** flatten-only |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`interchanges`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | **none_p1** · **cấm** toolbar merge so-ts-* |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-16` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=interchanges` · NEW card «Nút giao» · formNo **16** · **cấm** slug trên card |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave · branches min_1 |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `IX-` code · copy branches |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub NEW card «Nút giao» · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-PEER | — | — | **Cấm** merge / deep-link peer P1 |

**devSlash:** `/agent-dev` (list + Slideout typed + child grid · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 16 — Nút giao» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · tên nút · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| interchangeType | Loại nút | `Dropdown` | LOOKUP_STATIC · cite_excel |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmMain | Km chính | `Number` | điểm nút · point_main |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 16 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng · **cấm** nút Sổ TS peer.

### Zone C — Grid columns (typed · **subset** · shared+name/type/kmMain/status)

**Default:** STT · □ · **Mã** · **Tên nút** · **Đường** · **Tỉnh** · **Km chính** · **Loại nút** · **TT** · **Số nhánh** · ⋯

Schema-config có thể bổ sung: kmAux · trafficOrg · main* · atgt* · yearBuilt · manageUnit · notes · lat/lng.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có nút giao» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Định danh / vị trí

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `IX-` · **cấm** Guid |
| 1 | name | Tên nút giao | Text | * | view=ro | |
| 2–3 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 4 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 5 | kmMain | Km chính | Number | * | view=ro | decimal · điểm · **Q-KM** point_main |
| 6 | kmAux | Km phụ | Number | | view=ro | decimal · optional |
| 7 | side | Vị trí L/R/C | Dropdown | | view=ro | LOOKUP_STATIC |

### 3.2 Form Slideout — Z2 Đặc trưng nút (tuyến chính)

Section title cố định: **«Đặc trưng nút»** · **cấm** gộp 1 text detail*

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 8 | interchangeType | Loại nút | Dropdown | * | cite_excel · **GAP-BIEU16-TYPE-01** |
| 9 | trafficOrg | Tổ chức GT | Dropdown | | LOOKUP · **Q-TRAFFIC-ORG** lookup |
| 10 | mainBedWidth | B nền tuyến chính (m) | Number | | ≥0 · **GAP-BIEU16-MAIN-01** |
| 11 | mainSurfaceWidth | B mặt tuyến chính (m) | Number | | ≥0 |
| 12 | mainMedianWidth | KC / dải PC (m) | Number | | ≥0 |
| 13 | mainLaneCount | Số làn tuyến chính | Number | | integer ≥0 |

### 3.3 Form Slideout — Child `branches[]` (**GAP-CSDL-CUC-09**)

Section **«Nhánh tách / nhập»** · editable grid · **min_1** khi Lưu · **cấm** flatten-only 1 row cố định

| Field key | Label | Control | Required | Notes |
|-----------|-------|---------|----------|-------|
| branchName | Tên nhánh | Text | * | tách / nhập |
| branchKmFrom / branchKmTo | Lý trình từ–đến | Number | * | decimal |
| branchSide | Vị trí | Dropdown | | L/R/C |
| branchDirection | Hướng | Dropdown | | Tách / Nhập / Khác |
| branchLength | Chiều dài (m) | Number | | ≥0 |
| branchBedWidth | B nền (m) | Number | | |
| branchSurfaceWidth | B mặt (m) | Number | | |
| branchMedianWidth | KC (m) | Number | | |
| branchRadius | Bán kính R (m) | Number | | |

Toolbar child: **Thêm nhánh** / **Xóa dòng** · `branchCount` = count derived readonly trên header.

### 3.4 Form Slideout — ATGT + Quản lý (Z3)

Section **«ATGT»** rồi **«Quản lý»**

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 14 | atgtSign | ATGT biển (SL) | Number | | qty · **Q-ATGT** · **GAP-BIEU16-ATGT-01** |
| 15 | atgtMarking | ATGT vạch (SL) | Number | | qty |
| 16 | atgtIsland | ATGT đảo (SL) | Number | | qty |
| 17 | atgtLight | ATGT đèn (SL) | Number | | qty |
| 18 | status | Tình trạng (TT) | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
| 19 | yearBuilt | Năm | Number | | year 1900–2100 |
| 20 | manageUnit | ĐV QL | Text | | **Q-MANAGE** in_39 · Text P1 → SearchInput org P2 · **GAP-CSDL-ORG-01** |
| 21 | notes | Ghi chú | Textarea | | full row |
| 22–23 | lat / lng | GPS | Number | | optional |
| — | branchCount | Số nhánh | Number ro | | derived |
| — | formNo | Số biểu | const | | `16` |
| — | updatedAt / updatedBy | Cập nhật | DateTime/Text ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** expand interchangeType ngoài cite_excel không confirm.  
**Cấm** allow_0 nhánh khi Lưu (Q-BRANCH-MIN min_1).

### 3.5 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | interchangeType | Dropdown | LOOKUP_STATIC |
| List B | status | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmMain | Number | — |
| Form | code | Text readonly | — |
| Form | name | Text | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province / interchangeType / trafficOrg / side / status | Dropdown | LOOKUP_STATIC |
| Form | kmMain / kmAux / main* / atgt* / yearBuilt / lat / lng | Number | — |
| Form | manageUnit | Text | — · org P2 |
| Form | notes | Textarea | — |
| Form child | branches[] | child grid | — |
| Form child | branchName | Text | — |
| Form child | branchKm* / branchLength / branch*Width / branchRadius | Number | — |
| Form child | branchSide / branchDirection | Dropdown | LOOKUP_STATIC |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html` |
| README | `specs/csdl-bieu-16/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 5 section + child branches) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=interchanges` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=interchanges` + typed fields + **`branches[]` embed** (Q-CHILD-API) |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*` · bind peer `road-assets`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (39 typed · 5 section · child branches min_1 · ATGT qty) | PASS |
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
| **SA** | Schema_CsdlBieu16 + InterchangeBranch · typed DTO/UiSchema `interchanges` · register resource · DOMAIN-MAP slug · embed `branches[]` · **cấm** invent infra API · **cấm** merge road-assets / so-ts-interchange |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-16` · hub NEW card · child grid min_1 · **cấm** đoán Text vs SearchInput · **cấm** detail* · **cấm** flatten-only · **cấm** merge so-ts-* |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-05T16:25:00.000Z |
| versionGate | ok |
| taskId | task_e0f9dbb6 |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_e0f9dbb6 -->
