# Design — csdl-bieu-15 (Biểu 15 — TMC / thu phí / hạt / kho)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_dbeaf01a`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `ops-facilities` |
| formNo | `15` · title VN **Biểu 15 — TMC / thu phí / hạt / kho** (Q-TITLE ctx_tmc) |
| columns | **20** · section **Vị trí tuyến** + **Cơ sở / công trình** + **Thiết bị** + **Quản lý** |
| IdCode | prefix **`OF`** · `OF-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · Q-PEER-LINK **none_p1** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_a73f1c50` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-15-control-hint.md` · `csdl-bieu-15-real-data.md` · contentHash `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` · headerFingerprint `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-15`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=ops-facilities` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`ops-facilities`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_dbeaf01a` · po `task_a73f1c50` · analy `task_23453ac3` |
| updatedAt | `2026-09-05T15:23:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge so-ts-toll/rest-area/station-house / road-assets · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-15.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-15-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-15-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-15/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · slug `csdl-bieu-15` add_now |
| PEER | so-ts-toll / rest-area / station-house | cite only · **cấm** merge |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ bind `road-assets?type=TOLL|REST_AREA|…`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub 12 biểu · MISSING Biểu 15 | Alias **`/csdl-bieu-15`** + hub NEW card formNo 15 | GAP-BIEU15-HUB-01 · GAP-BIEU15-ROUTE-01 |
| List cols | generic / N/A | Shared + facilityKind/name/status/yearBuilt subset | GAP-BIEU15-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` nếu bootstrap | Typed **20 cột** Slideout 2col · 4 section | GAP-BIEU15-TYPED-01 · GAP-CSDL-CUC-03 |
| Facility | — | facilityKind LOOKUP 5 · facilityName · courtyard/building/otherStruct · status · yearBuilt | GAP-BIEU15-KIND-01 · GAP-BIEU15-AREA-01 · GAP-BIEU15-STATUS-01 |
| Equipment | — | equipmentKind Text · qty · equipmentStatus | GAP-BIEU15-EQ-01 · Q-EQ-SET free_text |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | — | **in_20** Text P1 → org SearchInput P2 | GAP-CSDL-ORG-01 · Q-MANAGE in_20 |
| Peer | so-ts-toll / rest / station | **cấm** merge · none_p1 link | GAP-CSDL-CUC-11 |
| DOMAIN-MAP | thiếu slug | add_now `csdl-bieu-15` | GAP-BIEU15-DMAP-01 |
| Import/Export | stub | stub OUT Biểu 15 | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **15** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-KIND-SET=`keep_5` · Q-EQ-SET=`free_text` · Q-AREA-UNIT=`number_m2` · Q-MANAGE=`in_20` · Q-PREFIX=`OF` · Q-LIST-COLS=`subset` · Q-TITLE=`ctx_tmc` · Q-DMAP=`add_now` · Q-PEER-LINK=`none_p1` · Q-KM=`range` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + facilityKind/facilityName/status/yearBuilt |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · 4 section (Vị trí · Cơ sở/công trình · Thiết bị · Quản lý) |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`ops-facilities`** — **cấm** `LinListTableConfigModal` |
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
| Alias list | `/csdl-bieu-15` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=ops-facilities` · NEW card «TMC / thu phí / hạt / kho» · formNo **15** · **cấm** slug trên card |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `OF-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub NEW card «TMC / thu phí / hạt / kho» · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-PEER | — | — | **Cấm** merge / deep-link peer P1 |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 15 — TMC / thu phí / hạt / kho» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · tên CS · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC |
| facilityKind | Loại CS | `Dropdown` | LOOKUP_STATIC · keep_5 |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line geom · Q-KM range |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 15 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng · **cấm** nút Sổ TS peer.

### Zone C — Grid columns (typed · **subset** · shared+facilityKind/name/status/yearBuilt)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Loại CS** · **Tên CS** · **TT** · **Năm** · ⋯

Schema-config có thể bổ sung: courtyardAreaM2 · buildingQty/Area · otherStructQty/Area · equipment* · manageUnit · notes.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có cơ sở TMC / thu phí / hạt / kho» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Vị trí tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `OF-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line · **Q-KM** range |

### 3.2 Form Slideout — Z2 Cơ sở / công trình

Section title cố định: **«Cơ sở / công trình»** · **cấm** gộp 1 text detail*

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 6 | facilityKind | Loại cơ sở | Dropdown | * | TMC / trạm thu phí / dừng chân / nhà hạt / kho · **Q-KIND-SET** keep_5 · **GAP-BIEU15-KIND-01** |
| 7 | facilityName | Tên cơ sở | Text | * | |
| 8 | courtyardAreaM2 | DT khuôn viên (m²) | Number | | ≥0 · **Q-AREA-UNIT** number_m2 · **GAP-BIEU15-AREA-01** |
| 9 | buildingQty | Nhà — số lượng | Number | | integer ≥0 |
| 10 | buildingAreaM2 | Nhà — diện tích (m²) | Number | | ≥0 |
| 11 | otherStructQty | KT khác — SL | Number | | integer ≥0 |
| 12 | otherStructAreaM2 | KT khác — DT (m²) | Number | | ≥0 |
| 13 | status | Tình trạng (TT) | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong · **GAP-BIEU15-STATUS-01** |
| 14 | yearBuilt | Năm | Number | | year 1900–2100 |

### 3.3 Form Slideout — Z3 Thiết bị + Quản lý

Section **«Thiết bị»** rồi **«Quản lý»** (4 section PO · Z3 gộp 2 sec title)

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 15 | equipmentKind | Thiết bị — chủng | Text | | **Q-EQ-SET** free_text · **GAP-BIEU15-EQ-01** |
| 16 | equipmentQty | Thiết bị — SL | Number | | integer ≥0 |
| 17 | equipmentStatus | Thiết bị — TT | Dropdown | | LOOKUP_STATIC align status |
| 18 | manageUnit | ĐV QL | Text | | **Q-MANAGE** in_20 · Text P1 → SearchInput org P2 · **GAP-CSDL-ORG-01** |
| 19 | notes | Ghi chú | Textarea | | trail trong 20 · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** expand facilityKind LOOKUP ngoài keep_5 không confirm.  
**Cấm** Text kèm đơn vị cho DT (number_m2 only).

### 3.4 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | status | Dropdown | LOOKUP_STATIC |
| List B | facilityKind | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province / facilityKind / status / equipmentStatus | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / courtyardAreaM2 / buildingQty / buildingAreaM2 / otherStructQty / otherStructAreaM2 / yearBuilt / equipmentQty | Number | — |
| Form | facilityName / equipmentKind / manageUnit | Text | — |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html` |
| README | `specs/csdl-bieu-15/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 4 section) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=ops-facilities` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=ops-facilities` + typed 20 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*` · bind peer `road-assets`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (20 typed · 4 section · facility + area + equipment) | PASS |
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
| **SA** | Schema_CsdlBieu15 · typed DTO/UiSchema `ops-facilities` · Facility*/Area*/Equipment* · DOMAIN-MAP slug · **cấm** invent infra API · **cấm** merge road-assets / so-ts-* |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-15` · hub NEW card · **cấm** đoán Text vs SearchInput · **cấm** detail* · **cấm** merge so-ts-* |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-05T15:23:00.000Z |
| versionGate | ok |
| taskId | task_dbeaf01a |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_dbeaf01a -->
