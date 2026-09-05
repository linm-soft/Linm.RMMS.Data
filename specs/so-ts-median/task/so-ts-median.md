# Team lead — tasks — so-ts-median

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| title | Sổ TS — Dải phân cách |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `MEDIAN` |
| cluster | `linear_protect` · tile `t11` |
| dump | `tbl_median_strip` |
| prefix | **`PC-`** (GIS short **`GPC`**) |
| unit | `ATGT` · CSV `6829` |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-MEDIAN-LOOKUP/NAME/BOOL/PREFIX/RANGE/ROUTE/SPEC · flatten DEFER P2 |
| solution_confirm | **approve** (`task_1094a2ca`) |
| design_confirm | **approve** (`task_e2599798`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts?type=MEDIAN`** · alias board `/so-ts-median` optional redirect · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_84bb5413` |
| saTaskId | `task_1094a2ca` |
| updatedAt | `2026-09-01T17:25:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · fork `AssetFormPage` · tab legacy · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=MEDIAN` | **giữ** · alias `/so-ts-median` optional | **route_confirm=route_a** · **GAP-MEDIAN-ROUTE-01** |
| Grid profile | generic / thiếu MEDIAN | **ON**: loại dải · 3 tầng · kmFrom · kmTo · dài · rộng · cỏ · cây · cao hàng rào · VL · **hide-empty** vị trí/địa danh · **ẩn** type/ảnh | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Select đủ dump · merge dumpSpecs | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Range | risk POINT / ép `"0"` | **S-LOC-RANGE** km* + **4 XY dumpSpecs** · **cấm** ép `"0"` · **không** S-LOC-POINT | **T-UI-FORM-01** · **GAP-MEDIAN-RANGE-01** |
| Name | IsWeak / đoạn risk | `name` **optional** · list primary = `type_median_strip_id` · **cấm** IsWeak→đoạn | **T-BE-CRUD-01** + form · **GAP-MEDIAN-NAME-01** |
| Prefix | lệch / thiếu | IdCode create/import **`PC-`** · GIS short **`GPC`** | **T-BE-CRUD-01** · **GAP-MEDIAN-PREFIX-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-MEDIAN-LOOKUP-01** |
| Bool cỏ/cây | Text dump risk | `planting_grass`/`planting_tree`=**Select bool** | **T-UI-FORM-01** · **GAP-MEDIAN-BOOL-01** |
| dumpSpecLabels | thiếu 10 key | đủ **10 key** MEDIAN + labels VN | **T-UI-FORM-01** · **GAP-MEDIAN-SPEC-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** |
| Filter context | thiếu file | `so-ts-median-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P2** (GAP-MEDIAN-FLAT-01) | dumpSpecs P1 · migration **none** |
| Peer scope | risk gộp linear_protect | page **MEDIAN only** · peer packs riêng | **GAP-MEDIAN-PEER** (SA) |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route / org-unit · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=MEDIAN`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts?type=MEDIAN` |
| `mfeStdUrl` | `http://localhost:9301/so-ts?type=MEDIAN` (Dev điền/verify) · alias `http://localhost:9301/so-ts-median` |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=MEDIAN` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `MEDIAN`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-median-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=MEDIAN` | **SELECTED** — live MFE + Design/SA |
| B | `/so-ts-median` as primary list URL | rejected — board alias only · optional redirect → A |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Dải phân cách» khi `type=MEDIAN` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-median-filter-bar.md` · **cấm** nút Tìm riêng |
| DES-GRID-C0 | listTitle «Danh sách dải phân cách» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · MEDIAN column profile |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | S-META · S-ROUTE · **S-LOC-RANGE** · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` |
| Tree | **n/a** — không left tree |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=MEDIAN` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · prefix **`PC-`** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`medianStripTypes[]`** · **`fenceMaterials[]`** · **`medianLocations[]`** |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t11 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock MEDIAN |
| API-LKP-02 | GET | Integration `road-routes/search` | filter + form route |
| API-LKP-03 | GET | Integration `org-units/search` | filter org tree |
| API-UISCHEMA | GET/PUT | Integration `catalogs/road-assets/ui-schema` | Zone F |

Permissions: `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` — Auth align **DEFER**.

Gates: `tz_na` · `xco_get_only` · `share_tenant`.

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | **gap** · DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent MedianJson / Schema_* P1 |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-MEDIAN-NAME/PREFIX** · import + rebuild · dumpSpecs P1 |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-MEDIAN-LOOKUP-01** medianStripTypes/fenceMaterials/medianLocations |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 · T-CTX-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **S-LOC-RANGE** · **GAP-SOTS-FORM/REUSE** · **GAP-MEDIAN-RANGE/BOOL/SPEC** |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-LKP-* | `/agent-dev` | asset-type · road-route · org-unit SearchInput |
| T-UI-FIELD-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · dumpSpecs keys |
| T-UI-PROD-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | cấm demo chrome |
| T-UI-UX-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | constitution · **5 cột** full-page |
| T-UI-RESP-01 | Dev | pending | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | History Modal · **cấm** invent API · cấm alert |
| T-UI-MAP-FORM | — | **n/a** | — | — | packKind=list · map=none |
| T-QA-CRUD-01 | QA | pending | T-UI-* | `/agent-qa` | C→E→V→D + leave Modal + config full |
| T-QA-FORM-01 | QA | pending | T-UI-FORM-01 | `/agent-qa` | field e2e · body = UI |
| T-QA-FILTER-01 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + filter-bar.md 1:1 |
| T-QA-FILTER-02 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | headed D+T+M |
| T-QA-TYP-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | label 13 · D14/M16 |
| T-QA-TAB-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | tab index |
| T-LIB-01 | — | **n/a** | — | — | Common đã export LeaveConfirmModal / grid |

### SA T-MD → pack map

| SA id | Pack task | Focus |
|-------|-----------|-------|
| T-MD-01 | T-UI-LIST-01 | MEDIAN grid profile · hide-empty · primary `type_median_strip_id` |
| T-MD-02 | T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels 10 key · Select bool |
| T-MD-03 | T-UI-FORM-01 | S-LOC-RANGE · 4 XY dumpSpecs · cấm ép `"0"` |
| T-MD-04 | T-BE-CRUD-01 + form | name optional · list primary loại dải · cấm IsWeak |
| T-MD-05 | T-BE-CRUD-01 | DefaultCodePrefix **`PC-`** · GIS GPC |
| T-MD-06 | T-BE-INIT-01 | LOOKUP_STATIC medianStripTypes/fenceMaterials/medianLocations |
| T-MD-07 | T-UI-LEAVE-01 | LeaveConfirmModal |
| T-MD-08 | T-CTX-01 / route | alias board-only optional |
| T-MD-09 | T-BE-CRUD-01 | DOMAIN-MAP Asset · cấm ERP.* |
| T-MD-10 | this file | pack + gates · tile t11 · unit ATGT |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-RANGE · LAYOUT-06 · leave Modal
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-MEDIAN-LOOKUP/NAME/BOOL/PREFIX/RANGE/SPEC
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-median.md` + parent `so-ts-type-grid.md` · tạo `so-ts-median-filter-bar.md` · lane web → `dev` · **cấm** re-scan demo

---

### T-BE-CRUD-01 — Road-assets CRUD delta (MEDIAN)

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**DoD:**
- API-01…05 verify · type filter `MEDIAN`
- Persist scalars + **dumpSpecs P1** · **cấm** Schema_* / flatten P1
- `name` optional · **cấm** IsWeak→đoạn (**GAP-MEDIAN-NAME-01**)
- IdCode create/import prefix **`PC-`** · GIS short **`GPC`** (**GAP-MEDIAN-PREFIX-01**)
- import `RoadAssetCatalogHandler` / GIS dai-phan-cach align
- **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`

---

### T-BE-INIT-01 — LOOKUP seed

**status:** pending (delta)  
**deps:** T-BE-CRUD-01  
**devSlash:** `/agent-dev`  
**DoD:** init-data trả `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` · FE Dropdown LOOKUP_STATIC bind `type_median_strip_id` / `material_type_fence_id` / `location_median_strip_id` (**GAP-MEDIAN-LOOKUP-01**)

---

### T-BE-UISCHEMA-01 / T-BFF-01 / T-PERM-01

**status:** pending / verify  
**DoD:** catalogKind `road-assets` · BFF proxy only · perm codes stub · Auth DEFER

---

### T-UI-LIST-01 — Grid MEDIAN

**status:** pending  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev`  
**DoD (`tl-grid-task-template`):**
- Zones A–D+F+H · LAYOUT-06 shell height
- Column profile MEDIAN: **ON** loại dải (`type_median_strip_id` primary) · 3 tầng tuyến · kmFrom · kmTo · `length_median_strip` · `width_median_strip` · `planting_grass` · `planting_tree` · `height_fence` · `material_type_fence_id`
- **Ẩn** type · ảnh
- **hide-empty** `location_median_strip_id` · địa danh province*/commune*
- Header title khi `type=MEDIAN`
- **cấm** Thêm mới trên Zone A

---

### T-UI-FILTER-01 — Filter bar

**status:** pending  
**deps:** T-BE-CRUD-01 · T-CTX-01  
**devSlash:** `/agent-dev`  
**DoD:** load `so-ts-median-filter-bar.md` trước Write · `LinErpListFilterBar` · fields: search · type (prefill/ẩn MEDIAN) · route 3 tầng · kmFrom/kmTo filter · orgTree · **cấm** nút Tìm riêng · V1–V5

---

### T-UI-FORM-01 — Full-page form

**status:** pending (delta)  
**deps:** T-UI-LIST-01 · T-BE-INIT-01  
**devSlash:** `/agent-dev`  
**DoD:**
- `CatalogFormShell` · `data-form-cols="5"` · **cấm** tab legacy · **cấm** fork `AssetFormPage`
- Reuse **S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS**
- **S-LOC-RANGE:** kmFrom/kmTo + **4 XY** (`lat*`/`lng*` đầu/cuối) dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (**GAP-MEDIAN-RANGE-01**)
- S-NAME: `name` optional · trống OK · **cấm** IsWeak
- S-ATTR editable: `type_median_strip_id` · `length_median_strip` · `width_median_strip` · `planting_grass` · `planting_grass_area` · `planting_tree` · `number_tree` · `height_fence` · `material_type_fence_id` · `location_median_strip_id` · dumpSpecLabels VN đủ **10 key** (**GAP-MEDIAN-SPEC-01**)
- Dropdown LOOKUP_STATIC medianStripTypes/fenceMaterials/medianLocations · Select bool cỏ/cây (**GAP-MEDIAN-BOOL-01**) · Number/Text đúng controlHint
- Header chrome only · **cấm** footer Lưu
- Prefix display **`PC-`**

---

### T-UI-LEAVE-01 / T-UI-HIST-01 / T-UI-ACT-01

| Task | DoD |
|------|-----|
| T-UI-LEAVE-01 | dirty leave → `LeaveConfirmModal` · **cấm** `window.confirm` |
| T-UI-HIST-01 | History Modal · useAlert · **cấm** invent history API |
| T-UI-ACT-01 | row menu: View · Edit · Copy · Delete soft · History · perms |

---

### T-UI-FIELD-01 / T-UI-LKP-01 / T-UI-CFG-01 / T-UI-PROD-01 / T-UI-UX-01 / T-UI-RESP-01

| Task | DoD |
|------|-----|
| T-UI-FIELD-01 | controlHint 1:1 compact inventory · dumpSpecs keys |
| T-UI-LKP-01 | SearchInput asset-type / road-route / org-unit |
| T-UI-CFG-01 | Zone F full column editor · type-profile |
| T-UI-PROD-01 | **cấm** demo chrome / localStorage SSOT |
| T-UI-UX-01 | constitution · 5 cột · label 13 |
| T-UI-RESP-01 | `/dev-web-responsive` 1280/768/375 |

---

### T-QA-* (queued — **chỉ** `/agent-qa*`)

| Task | Focus |
|------|-------|
| T-QA-CRUD-01 | C→E→V→D + leave + config |
| T-QA-FORM-01 | field e2e = UI body |
| T-QA-FILTER-01/02 | V1–V5 · headed D+T+M |
| T-QA-TYP-01 / TAB-01 | typography · tab index |

**Cấm** e2e / `start:std` ở TL · Dev.

---

## Inventory (controlHint · Dev 1:1)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | scalar lock MEDIAN |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | scalar |
| kmFrom / kmTo | Lý trình | Text | scalar · S-LOC-RANGE * |
| orgTree | Đơn vị | SearchInput org-unit | filter |
| type_median_strip_id | Loại dải | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid primary |
| length_median_strip | Chiều dài (m) | Number | dumpSpecs · grid ON |
| width_median_strip | Chiều rộng (m) | Number | dumpSpecs · grid ON |
| planting_grass | Trồng cỏ | Select bool | dumpSpecs |
| planting_grass_area | DT cỏ (m²) | Number | dumpSpecs · hide-empty |
| planting_tree | Trồng cây | Select bool | dumpSpecs |
| number_tree | Số cây | Number | dumpSpecs · hide-empty |
| height_fence | Cao hàng rào (m) | Number | dumpSpecs · grid ON |
| material_type_fence_id | VL hàng rào | Dropdown | dumpSpecs · LOOKUP_STATIC |
| location_median_strip_id | Vị trí dải | Dropdown | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix PC- |

---

## Quality gates (`list-form-quality-gates`)

| Gate | Result |
|------|--------|
| Kind B A–D+F+H | **PASS** (Design) |
| Grid AC | **PASS** (PO) |
| Leave AC | **PASS** (PO) · Modal |
| Filter-bar HARD | **PASS** plan · Dev T-UI-FILTER-01 |
| Form 5col reuse | **PASS** plan · cấm fork |
| route_confirm | **route_a** |
| SA gates | tz_na · xco_get_only · share_tenant |
| migration / Step 4b | **none** P1 |
| ERP.* | **cấm** |

---

## Dev assign (`agent-dev-assign`)

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/so-ts-median/implement/so-ts-median.md` |
| handoff compact | `specs/so-ts-median/handoff/team_lead-compact.md` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| primary URL | `http://localhost:9301/so-ts?type=MEDIAN` |
| order | T-CTX-01 → T-BE-* → T-UI-LIST/FILTER → T-UI-FORM → leave/hist → QA queue |

---

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/task/so-ts-median.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/handoff/team_lead-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/STATUS.md`
- prior: `handoff/sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- solution: `be/solution-discovery.md`
- design: `ui/design.md`
- requirement: `po/requirement.md`
