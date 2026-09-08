# Design — csdl-bieu-04 (Biểu 04 — Cống các loại)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_95985c62`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `culverts` |
| formNo | `04` · title VN **Cống các loại** |
| columns | **17** (Excel Biểu 4 typed) |
| IdCode | prefix **`CG`** · `CG-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-culvert-x` — deep-link only · **cấm** merge form (**GAP-BIEU04-PEER-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_ad060865` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-04-control-hint.md` · `csdl-bieu-04-real-data.md` · contentHash `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` · headerFingerprint `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-04`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=culverts` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| peerStdUrl / hub | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`culverts`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_95985c62` · po `task_ad060865` · analy `task_ea0d8d57` |
| updatedAt | `2026-09-05T13:05:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge Sổ TS form · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-04.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-04-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-04-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-04/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · peer `so-ts-culvert-x` |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS `so-ts-culvert-x` · ≠ hub generic 3 ô `detail*`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=culverts` | Alias **`/csdl-bieu-04`** + hub entry | GAP-BIEU04-ROUTE-01 |
| List cols | generic road/km/detail* | Typed km · khẩu độ · hình · dài · tải · năm · TT | GAP-BIEU04-TYPED-01 |
| Form | 3 ô `detail*` | Typed **17 cột** Slideout 2col | GAP-BIEU04-TYPED-01 / GAP-CSDL-CUC-03 |
| GPS | — | **4 Number** gpsCulvertX/Y · gpsRoadX/Y | GAP-BIEU04-GPS-01 · Q-GPS |
| shape | — | Dropdown hộp/tròn · thân + đầu TL/HL | GAP-BIEU04-SHAPE-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| loadClass | — | **Text** free P1 | Q-LOAD |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | stub OUT Biểu 4 · skip-bridge locked | GAP-CSDL-XLS-01 |
| Peer | deep-link | deep-link only · **cấm** merge | GAP-BIEU04-PEER-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-GPS=`four_xy` · Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-LOAD=`free_text` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`culverts`** — **cấm** `LinListTableConfigModal` |
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
| Alias list | `/csdl-bieu-04` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=culverts` |
| Form | overlay Slideout · **cấm** Full-page |
| Peer Sổ TS | navigate `/so-ts-culvert-x` only · **cấm** merge |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `CG-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card title VN · open resource |
| S-PEER-SOTS | — | — | deep-link `/so-ts-culvert-x` |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 04 — Cống các loại» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmPoint | Km điểm | `Number` | filter QS |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **cấm** chỉ 3 detail)

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km điểm** · **Khẩu độ** · **Hình** · **Cdài** · **Tải** · **Năm** · **TT** · **ĐV QL** · ⋯  
Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có cống» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — typed Biểu 4 (17 cột + common)

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `CG-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 |
| 4 | kmPoint | Km điểm | Number | * | view=ro | decimal · điểm đặt cống |
| 5–6 | gpsCulvertX / gpsCulvertY | GPS tim cống X/Y | Number | | view=ro | **Q-GPS** four_xy · SA CRS |
| 7–8 | gpsRoadX / gpsRoadY | GPS tim đường X/Y | Number | | view=ro | **Q-GPS** four_xy |
| 9 | apertureM | Khẩu độ (m) | Number | * | view=ro | |
| 10 | shape | Hình dạng | Dropdown | * | view=ro | hộp / tròn · **GAP-BIEU04-SHAPE-01** |
| 11 | bodyMaterial | Thân cống | Dropdown | | view=ro | BT / BTCT / thép / khác |
| 12 | inletUpstream | Đầu thượng lưu | Text | | view=ro | đầu T.Lưu |
| 13 | outletDownstream | Đầu hạ lưu | Text | | view=ro | đầu H.Lưu |
| 14 | lengthM | Chiều dài (m) | Number | * | view=ro | |
| 15 | loadClass | Tải trọng TK | Text | | view=ro | **Q-LOAD** free_text P1 |
| 16 | builtYear | Năm XD/SD | Number | | view=ro | year |
| 17 | status | Tình trạng | Dropdown | * | view=ro | LOOKUP_STATIC |
| — | side | Vị trí L/R | Dropdown | | view=ro | L/R/C/Both |
| — | manageUnit | ĐV QL | Text | | view=ro | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | view=ro | full row |
| — | updatedAt | Cập nhật | DateTime ro | | readonly | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.2 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province / status | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmPoint | Number | — |
| Form | roadCode/roadName | SearchInput | road-route |
| Form | province / status / side / shape / bodyMaterial | Dropdown | LOOKUP_STATIC |
| Form | gpsCulvertX/Y · gpsRoadX/Y | Number | — |
| Form | apertureM / lengthM / kmPoint / builtYear | Number | — |
| Form | loadClass / inletUpstream / outletDownstream | Text | — |
| Form | manageUnit | Text | org-unit P2 |
| Form | notes | Textarea | — |

## 4. Real-data bind (cite DA-REAL · **cấm** invent)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=culverts` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=culverts` + typed |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |

API mirror: `api/v1/asset/csdl-records`. FE reuse `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.  
Entity shell: `CsdlCatalogRecordEntity` · typed `Schema_CsdlBieu4` — **SA**.  
**Cấm** ERP.* · invent `api/v1/so-ts/*` · invent `api/v1/infra/*` · demo-json / LS SSOT.

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `shared_grid_example v1` + Slideout Z `data-form-cols="2"` |
| Artifact | `ui/prototype/csdl-bieu-04-list-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm phải · road SearchInput · kmPoint |
| Form | Slideout typed 17 cột · GPS four_xy · footer Hủy/Lưu · LeaveConfirmModal |
| SSOT | `shared_grid_example: v1` · `real_view_parity: v1` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/ui/prototype/csdl-bieu-04-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| **mfeStdUrl** | `http://localhost:9301/csdl-bieu-04` |

### Wire

```
[S-LIST] DES-GRID-A…D · F · H — filter + toolbar FULL + typed grid
[S-FORM] DES-GRID-Z Slideout data-form-cols=2 · typed 17 cột · footer only
[Leave] LeaveConfirmModal · toast mock — cấm native dialog
[Peer] deep-link Sổ TS so-ts-culvert-x · map none
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
| Empty list | VN «Chưa có cống» + CTA Tạo mới | fake demo rows SSOT |

## 6. Grid AC (Design confirm · PO)

AC-G list Kind B **PASS**. Report AC **N/A** — packKind `list` · DES-RPT skip.

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| Q-GPS | **four_xy** · gpsCulvertX/Y · gpsRoadX/Y · SA CRS/storage |
| Q-ROUTE | **alias_now** `/csdl-bieu-04` + hub |
| Q-PROV | **keep_static** P1 · master P2 |
| Q-LOAD | **free_text** P1 · lookup DEFER |
| GAP-CSDL-ORG-01 | **DEFER P2** Text |
| GAP-CSDL-XLS-01 | **OUT** pack · toolbar stub OK |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_95985c62`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F + D Slideout `data-form-cols="2"` footer_only |
| Field inventory | §3 · Control khớp controlHint · typed 17 cột |
| Filters | LinErpListFilterBar · road SearchInput · kmPoint · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | **giữ** `api/v1/asset/csdl-records` · widen typed DTO/UiSchema · road-routes search |
| Entity | shell + **Schema_CsdlBieu4** · GPS four_xy CRS |
| Lookups | road-route P1 · province static · shape/bodyMaterial static · org DEFER P2 |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header + back hub |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` · `culverts` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z | DES-GRID-Z | Slideout 2 cột · footer Hủy/Lưu |
| Leave | — | `LeaveConfirmModal` |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Kind B+D + Form Slideout + `data-form-cols="2"` | ✅ |
| Screens list/C/E/V/Copy/delete/hist · hub entry · peer deep-link | ✅ |
| DES-GRID-A…D (+ C2a/C3/F/H/Z) | ✅ |
| Toolbar FULL · icons §0 | ✅ |
| Filter LinErpListFilterBar · input cụm phải · road SearchInput | ✅ |
| Control-map = controlHint · typed 17 · **cấm** detail* only | ✅ |
| Q-GPS four_xy · Q-LOAD free_text · Q-ROUTE alias_now | ✅ |
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
| generatedAt | 2026-09-05T13:05:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 |
| headerFingerprintPrior | sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024 |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_95985c62` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 -->
