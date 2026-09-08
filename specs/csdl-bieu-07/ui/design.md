# Design — csdl-bieu-07 (Biểu 07 — Lề / taluy / hàng rào)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_50b066b7`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** · renumber 10→7 (**T-REN-01**) |
| columns | **20** (Excel Biểu 7 typed) |
| IdCode | prefix **`LE`** · `LE-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `SHOULDER` — deep-link only · **cấm** merge form (**GAP-BIEU07-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_8566976f` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-07-control-hint.md` · `csdl-bieu-07-real-data.md` · contentHash `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` · headerFingerprint `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-07`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`shoulders-fences`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_50b066b7` · po `task_8566976f` · analy `task_480d8882` |
| updatedAt | `2026-09-05T09:50:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-07.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-07-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-07-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-07/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · peer `SHOULDER` |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS `SHOULDER` · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=shoulders-fences` · label Biểu **10** | Alias **`/csdl-bieu-07`** + hub · label **Biểu 07** | GAP-BIEU07-ROUTE-01 · GAP-BIEU07-REN-01 |
| List cols | generic road/km/detail* | Typed KC lề · dài/rộng/DT · taluy · fenceKind · số cột · dài km | GAP-BIEU07-TYPED-01 |
| Form | 3 ô `detail*` | Typed **20 cột** Slideout 2col · **3 section** lề / taluy / HR | GAP-BIEU07-TYPED-01 / GAP-CSDL-CUC-03 |
| Khối lề | detail* gộp | `side` · `shoulderStructure` · dài · rộng · DT | GAP-BIEU07-SHOULDER-01 |
| Khối taluy | `SlopeClearingM` 1 số | `slopeLengthM`↔SlopeClearingM · `slopeAreaM2` | GAP-BIEU07-SLOPE-01 |
| Khối HR | detail* | `fenceKind` · `fencePostCount` · `fenceLengthKm` | GAP-BIEU07-FENCE-01 |
| fenceLength | DB `FenceLengthM` | UI **km** · SA map m | GAP-BIEU07-FENCE-LEN-01 |
| fencePanelCount | DB optional | **omit_p1** | GAP-BIEU07-PANEL-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT Biểu 7 · skip-bridge locked | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link only · **cấm** merge | GAP-BIEU07-PEER-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-SIDE=`shared` · Q-SLOPE=`map_clearing` · Q-FENCE-LEN=`km` · Q-PANEL=`omit_p1` · Q-STRUCT=`lookup_seed` · Q-REN-LABEL=`with_typed` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **3 section** |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`shoulders-fences`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-07` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=shoulders-fences` · card label **Biểu 07** |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ TS | navigate `/so-ts?type=SHOULDER` (hoặc route sẵn) · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · 3 section | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `LE-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN Biểu 07 · open resource |
| S-PEER-SOTS | — | — | deep-link type `SHOULDER` |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 07 — Lề / taluy / hàng rào» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · loại HR · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line · ShoulderFence |
| side | Vị trí | `Dropdown` | LOOKUP L/R/Both · shared |
| fenceKind | Loại hàng rào | `Dropdown` | LOOKUP_STATIC · filter optional |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **cấm** chỉ 3 detail)

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **KC lề** · **Dài lề** · **Rộng** · **DT lề** · **Dài taluy** · **DT taluy** · **Loại HR** · **Số cột** · **Dài HR (km)** · **Năm** · **TT** · **ĐV QL** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có lề / taluy / hàng rào» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — typed Biểu 7 (20 cột · 3 section)

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `LE-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal Line |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/Both · **shared** 3 khối · **Q-SIDE** |
| 7 | shoulderStructure | KC lề | Dropdown | * | view=ro | cứng/mềm/khác · **lookup_seed** · **GAP-BIEU07-SHOULDER-01** |
| 8 | shoulderLengthM | Dài lề (m) | Number | * | view=ro | DB `ShoulderLengthM` |
| 9 | shoulderWidthM | Rộng lề (m) | Number | * | view=ro | DB `ShoulderWidthM` |
| 10 | shoulderAreaM2 | DT lề (m²) | Number | | view=ro | optional / derived |
| 11 | slopeLengthM | Dài taluy / phát quang (m) | Number | | view=ro | = `SlopeClearingM` · **Q-SLOPE** map_clearing |
| 12 | slopeAreaM2 | DT taluy (m²) | Number | | view=ro | |
| 13 | fenceKind | Quy cách hàng rào | Dropdown | | view=ro | lưới/tôn/bê tông/khác · **lookup_seed** |
| 14 | fencePostCount | Số cột HR | Number | | view=ro | integer ≥0 |
| 15 | fenceLengthKm | Dài HR (km) | Number | | view=ro | UI km · SA map `FenceLengthM` · **Q-FENCE-LEN** |
| 16 | builtYear | Năm XD/SD | Number | | view=ro | year |
| 17 | status | Tình trạng | Dropdown | * | view=ro | LOOKUP_STATIC |
| 18 | manageUnit | ĐV QL | Text | | view=ro | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| 19–20 | notes | Ghi chú | Textarea | | view=ro | full row · header 20 = code + shared + 3 khối |
| — | updatedAt | Cập nhật | DateTime ro | | readonly | audit |

**Sections (form):** Z1 Định danh & tuyến (code…side) · Z2 Lề / Taluy (shoulder* + slope*) · Z3 Hàng rào & QL (fence* + builtYear/status/manageUnit/notes).

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** `fencePanelCount` P1 (**Q-PANEL** omit_p1).

### 3.2 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status / side / fenceKind | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / side / shoulderStructure / fenceKind | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / shoulderLengthM / shoulderWidthM / shoulderAreaM2 / slopeLengthM / slopeAreaM2 / fencePostCount / fenceLengthKm / builtYear | Number | — |
| Form | manageUnit | Text | — (org P2) |
| Form | notes | Textarea | — |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=shoulders-fences` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=shoulders-fences` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu7` — **SA**.  
DB map (SA): `SlopeClearingM`↔`slopeLengthM` · `FenceLengthM`↔`fenceLengthKm` (km UI).  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · demo-json / LS SSOT · bind `road-assets`.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` |
| Artifact | `ui/prototype/csdl-bieu-07-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · kmFrom/kmTo · side · fenceKind |
| Form | Slideout typed 20 cột · **3 section** lề/taluy/HR · Q-SIDE shared · Q-SLOPE map_clearing · Q-FENCE-LEN km · Q-STRUCT lookup_seed · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/ui/prototype/csdl-bieu-07-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-07` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed 20 cột · 3 section · footer only
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] deep-link Sổ TS SHOULDER · map none
```

## 5. Leave / alert

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đóng slideout / back-hub | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail 404 | toast · đóng slideout | silent fail |
| Delete | Confirm modal | native `confirm` |
| History | `LinCatalogHistoryModal` | invent API path |
| Lookup road no match | SearchInput empty | free-text substitute |
| Empty list | VN «Chưa có lề / taluy / hàng rào» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-ROUTE | **alias_now** `/csdl-bieu-07` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-SIDE | **shared** L/R/Both · 1 field 3 khối |
| Q-SLOPE | **map_clearing** slopeLengthM↔SlopeClearingM · slopeAreaM2 riêng |
| Q-FENCE-LEN | **km** fenceLengthKm · SA map FenceLengthM |
| Q-PANEL | **omit_p1** |
| Q-STRUCT | **lookup_seed** shoulderStructure + fenceKind |
| Q-REN-LABEL | **with_typed** Biểu 10→07 cùng typed |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack · toolbar stub OK |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_50b066b7`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only · 3 section |
| Field inventory | §3 · Control khớp controlHint · typed 20 cột |
| Filters | LinErpListFilterBar · road SearchInput · kmFrom/kmTo · side · fenceKind · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · road-routes search |
| Entity | shell + **Schema_CsdlBieu7** · FenceLengthM↔km · SlopeClearingM↔slopeLengthM · renumber formNo |
| Lookups | road-route P1 · province static · side/shoulderStructure/fenceKind/status static · org DEFER P2 |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `shoulders-fences` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột · 3 section · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` · 3 section | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer deep-link | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput · kmFrom/kmTo · side · fenceKind | ✅ |
| Control-map = controlHint · typed 20 · **cấm** detail* only | ✅ |
| Q-ROUTE alias_now · Q-SIDE shared · Q-SLOPE map_clearing · Q-FENCE-LEN km · Q-PANEL omit · Q-STRUCT lookup_seed · Q-REN with_typed | ✅ |
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
| generatedAt | 2026-09-05T09:50:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 |
| headerFingerprintPrior | sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_50b066b7` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 -->
