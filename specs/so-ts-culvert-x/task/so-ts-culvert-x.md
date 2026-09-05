# Team lead — tasks — so-ts-culvert-x

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| title | Sổ TS — Cống thoát nước ngang |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `CULVERT_X` |
| cluster | `crossing` · tile `t07` |
| dump | **missing** (GAP-CULVERT-X-01) · proposed keys giữ · remap khi `tbl_*` |
| prefix | **`CN-`** (GIS short **`CN`** · GIS `cong`) |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-CN-NAME/LOOKUP/PREFIX/POINT/ROUTE/KEY/FLAT · flatten DEFER P1 |
| solution_confirm | **approve** (`task_50a770e3`) |
| design_confirm | **approve** (`task_d82a3890`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — live **`/so-ts?type=CULVERT_X`** · **REQUIRED** Navigate alias `/so-ts-culvert-x` → live · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_28b2552d` |
| saTaskId | `task_50a770e3` |
| updatedAt | `2026-09-01T12:50:00.000Z` |
| contentHashPrior | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| headerFingerprintPrior | `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · fork `AssetFormPage` · tab legacy · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=CULVERT_X` | **giữ** · alias `/so-ts-culvert-x` **REQUIRED Navigate** | **route_confirm=route_a** · **GAP-CN-ROUTE-01** |
| Grid profile | generic / thiếu CULVERT_X | **ON**: loại CT · hình dạng · 3 tầng · lytrinh · tải · số ngăn · cao · dài · (width/VL hide-empty) · **ẩn** type/kmTo/SL/ĐVT · **list OFF** name | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Checkbox đủ attr thượng/hạ lưu · merge dumpSpecs · dumpSpecLabels | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Point | risk RANGE / ép `"0"` | **S-LOC-POINT** · ẩn kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE | **T-UI-FORM-01** · **GAP-CN-POINT-01** |
| Name | IsWeak / đoạn risk | `name` form optional · **list OFF** · trống OK · **cấm** IsWeak | **T-BE-CRUD-01** + form · **GAP-CN-NAME-01** |
| Prefix | lệch / thiếu | IdCode create/import **`CN-`** · GIS short **`CN`** · GIS `cong` | **T-BE-CRUD-01** · **GAP-CN-PREFIX-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `typeWork` · `culvertShapes` · `materialBody` · `structures` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-CN-LOOKUP-01** |
| Keys | dump CSV 0 | giữ **proposed** keys · remap khi `tbl_*` · empty OK · **cấm** seed | **T-BE-CRUD-01** · **GAP-CN-KEY-01** · **GAP-CULVERT-X-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** |
| Filter context | thiếu file | `so-ts-culvert-x-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P1** (GAP-CN-FLAT-01) | dumpSpecs P1 · migration **none** |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route / org-unit · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=CULVERT_X`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts-culvert-x` (**REQUIRED** Navigate → live) |
| `mfeStdUrl` | `http://localhost:9301/so-ts-culvert-x` (board entry · Dev verify Navigate) |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=CULVERT_X` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `CULVERT_X`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-culvert-x-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=CULVERT_X` + Navigate `/so-ts-culvert-x` → A | **SELECTED** — live MFE + Design/SA · **GAP-CN-ROUTE-01 REQUIRED** |
| B | `/so-ts-culvert-x` as primary list URL only | rejected — must Navigate to type query shell |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Cống thoát nước ngang» khi `type=CULVERT_X` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-culvert-x-filter-bar.md` · **cấm** nút Tìm riêng |
| DES-GRID-C0 | listTitle «Danh sách cống thoát nước ngang» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · CULVERT_X column profile |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | S-META · S-ROUTE · **S-LOC-POINT** · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` |
| Tree | **n/a** — không left tree |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=CULVERT_X` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · prefix **`CN-`** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`typeWork[]`** · **`culvertShapes[]`** · **`materialBody[]`** · **`structures[]`** |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t07 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock CULVERT_X |
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
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent CulvertXJson / Schema_* P1 |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid · **alias Navigate REQUIRED** |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-CN-NAME/PREFIX/KEY** · import + GIS · dumpSpecs P1 · empty OK · cấm seed |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-CN-LOOKUP-01** typeWork · culvertShapes · materialBody · structures |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty width/material_body_id |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 · T-CTX-01 | `/agent-dev` | load filter-bar.md **trước Write** · V1–V5 |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **S-LOC-POINT** · **GAP-SOTS-FORM/REUSE** · **GAP-CN-POINT/NAME** |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-LKP-* | `/agent-dev` | asset-type · road-route · org-unit SearchInput |
| T-UI-FIELD-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · proposed dumpSpecs keys |
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

### SA T-CN → pack map

| SA id | Pack task | Focus |
|-------|-----------|-------|
| T-CN-01 | T-UI-LIST-01 | CULVERT_X grid profile · hide-empty width/material_body_id · ẩn type/kmTo/SL/ĐVT · list OFF name |
| T-CN-02 | T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels · has_*/structure/area/basin |
| T-CN-03 | T-UI-FORM-01 | S-LOC-POINT · ẩn kmTo · cấm ép `"0"` · không S-LOC-RANGE |
| T-CN-04 | T-BE-CRUD-01 + form | name optional · list OFF · cấm IsWeak |
| T-CN-05 | T-BE-CRUD-01 | DefaultCodePrefix **`CN-`** · GIS CN · cong |
| T-CN-06 | T-BE-INIT-01 | LOOKUP_STATIC typeWork · culvertShapes · materialBody · structures |
| T-CN-07 | T-UI-LEAVE-01 | LeaveConfirmModal |
| T-CN-08 | T-CTX-01 / route | alias **REQUIRED** Navigate · route_a |
| T-CN-09 | T-BE-CRUD-01 | DOMAIN-MAP Asset · cấm ERP.* |
| T-CN-10 | this file | pack + gates |
| T-CN-11 | T-BE-CRUD-01 | proposed keys giữ · remap khi tbl_* · dump thiếu empty OK · cấm seed |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-POINT · LAYOUT-06 · leave Modal · alias Navigate
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-CN-NAME/LOOKUP/PREFIX/POINT/ROUTE/KEY · GAP-CULVERT-X-01
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-culvert-x.md` + parent `so-ts-type-grid.md` · tạo `so-ts-culvert-x-filter-bar.md` · wire **REQUIRED** Navigate `/so-ts-culvert-x` → `/so-ts?type=CULVERT_X` · lane web → `dev` · **cấm** re-scan demo

---

### T-BE-CRUD-01 — Road-assets CRUD delta (CULVERT_X)

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**DoD:**
- API-01…05 verify · type filter `CULVERT_X`
- Persist scalars + **dumpSpecs P1** · **cấm** Schema_* / flatten P1
- `name` form optional · list OFF · trống OK · **cấm** IsWeak→đoạn (**GAP-CN-NAME-01**)
- IdCode create/import prefix **`CN-`** · GIS short **`CN`** · GIS `cong` (**GAP-CN-PREFIX-01**)
- giữ **proposed** dumpSpecs keys · remap khi `tbl_*` (**GAP-CN-KEY-01**) · dump thiếu · empty OK · **cấm** seed (**GAP-CULVERT-X-01**)
- import `RoadAssetCatalogHandler` / GIS align
- **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`

---

### T-BE-INIT-01 — LOOKUP seed

**status:** pending (delta)  
**deps:** T-BE-CRUD-01  
**devSlash:** `/agent-dev`  
**DoD:** init-data trả `typeWork[]` · `culvertShapes[]` · `materialBody[]` · `structures[]` · FE Dropdown LOOKUP_STATIC bind `type_work_id` / `culvert_shape_id` / `material_body_id` / structure fields (**GAP-CN-LOOKUP-01**)

---

### T-BE-UISCHEMA-01 / T-BFF-01 / T-PERM-01

**status:** pending / verify  
**DoD:** catalogKind `road-assets` · BFF proxy only · perm codes stub · Auth DEFER

---

### T-UI-LIST-01 — Grid CULVERT_X

**status:** pending  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev`  
**DoD (`tl-grid-task-template`):**
- Zones A–D+F+H · LAYOUT-06 shell height
- Column profile CULVERT_X: **ON** `type_work_id` · 3 tầng tuyến · `kmFrom` · `culvert_shape_id` · `weight` · `number` · `height` · `crossing_length_culvert`
- **hide-empty:** `width` · `material_body_id`
- **list OFF:** `name`
- **Ẩn** type · kmTo · SL · ĐVT
- Header title khi `type=CULVERT_X`
- **cấm** Thêm mới trên Zone A · empty grid OK (dump thiếu)

---

### T-UI-FILTER-01 — Filter bar

**status:** pending  
**deps:** T-BE-CRUD-01 · T-CTX-01  
**devSlash:** `/agent-dev`  
**DoD:** load `so-ts-culvert-x-filter-bar.md` trước Write · `LinErpListFilterBar` · fields: search · type (prefill/ẩn CULVERT_X) · route 3 tầng · kmFrom filter± · orgTree · **cấm** nút Tìm riêng · V1–V5 (`filter-bar-layout-hard`)

---

### T-UI-FORM-01 — Full-page form

**status:** pending (delta)  
**deps:** T-UI-LIST-01 · T-BE-INIT-01  
**devSlash:** `/agent-dev`  
**DoD:**
- `CatalogFormShell` · `data-form-cols="5"` · **cấm** tab legacy · **cấm** fork `AssetFormPage`
- Reuse **S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS**
- **S-LOC-POINT:** kmFrom only · **ẩn kmTo** · **cấm** ép `"0"` · **không** S-LOC-RANGE (**GAP-CN-POINT-01**)
- S-NAME: `name` optional · trống OK · **cấm** IsWeak (**GAP-CN-NAME-01**)
- S-ATTR editable: `type_work_id` · `culvert_shape_id` · `weight` · `number` · `width` · `height` · `crossing_length_culvert` · `material_body_id` · `has_*` · `*_structure` · `*_area` · `*_basin_*` · dumpSpecLabels VN
- Dropdown LOOKUP_STATIC typeWork/culvertShapes/materialBody/structures · Number/Checkbox đúng controlHint
- Header chrome only · **cấm** footer Lưu
- Prefix display **`CN-`**

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
| T-UI-FIELD-01 | controlHint 1:1 compact inventory · proposed dumpSpecs keys |
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
| type | Loại TS | SearchInput asset-type | scalar lock CULVERT_X |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT · filter± · * |
| orgTree | Đơn vị | SearchInput org-unit | filter |
| type_work_id | Loại công trình | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid ON |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · Hộp/Bản · grid ON |
| weight / number | Tải / Số ngăn | Number | dumpSpecs · grid ON |
| width / height / crossing_length_culvert | Rộng/Cao/Dài (m) | Number | dumpSpecs · hide-empty width · height/dài ON |
| material_body_id | VL thân | Dropdown | dumpSpecs · hide-empty |
| has_* / *_structure / *_area / *_basin_* | Thượng/hạ lưu | Checkbox/Dropdown/Number | dumpSpecs · S-ATTR |
| name | Tên/mô tả | Text | scalar optional · list OFF · S-NAME |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CN- |

---

## Quality gates (`list-form-quality-gates`)

| Gate | Result |
|------|--------|
| Kind B A–D+F+H | **PASS** (Design) |
| Grid AC | **PASS** (PO) |
| Leave AC | **PASS** (PO) · Modal |
| Filter-bar HARD | **PASS** plan · Dev T-UI-FILTER-01 |
| Form 5col reuse | **PASS** plan · cấm fork · S-LOC-POINT |
| route_confirm | **route_a** · alias Navigate **REQUIRED** |
| SA gates | tz_na · xco_get_only · share_tenant |
| migration / Step 4b | **none** P1 |
| ERP.* | **cấm** |

---

## Dev assign (`agent-dev-assign`)

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/so-ts-culvert-x/implement/so-ts-culvert-x.md` |
| handoff compact | `specs/so-ts-culvert-x/handoff/team_lead-compact.md` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| primary URL | `http://localhost:9301/so-ts?type=CULVERT_X` |
| board URL | `http://localhost:9301/so-ts-culvert-x` → Navigate primary |
| order | T-CTX-01 → T-BE-* → T-UI-LIST/FILTER → T-UI-FORM → leave/hist → QA queue |

---

## DoR — team_lead PASS

| Check | Result |
|-------|--------|
| Prior data_analy/po/design/sa confirmed | **PASS** |
| changeScope=new_page · packKind=list | **PASS** |
| T-* matrix đủ form-type-task-pack | **PASS** |
| T-CN-01..11 → pack map | **PASS** |
| route_confirm=route_a (alias REQUIRED) | **PASS** |
| compact ≤5KB written | **PASS** |
| Cấm implement/e2e/Step4b ở TL | **PASS** |
