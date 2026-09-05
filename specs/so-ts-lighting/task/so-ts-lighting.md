# Team lead — tasks — so-ts-lighting

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
| title | Sổ TS — Chiếu sáng đường |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `LIGHTING` |
| cluster | `ops` · tile `t18` |
| dump | `tbl_street_lighting` |
| prefix | **`CS-`** (GIS short **`CS`**) |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-LT-LOOKUP/NAME/PREFIX/POINT/ROUTE/SPEC · flatten DEFER P2 · GAP-AK32-07 out |
| solution_confirm | **approve** (`task_38f62562`) |
| design_confirm | **approve** (`task_9224ca23`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts?type=LIGHTING`** · alias board `/so-ts-lighting` optional redirect · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_6f81bafb` |
| saTaskId | `task_38f62562` |
| updatedAt | `2026-09-02T08:30:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · fork `AssetFormPage` · tab legacy · Solar*/LampWatt · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=LIGHTING` | **giữ** · alias `/so-ts-lighting` optional | **route_confirm=route_a** · **GAP-LT-ROUTE-01** |
| Grid profile | generic / thiếu LIGHTING | **ON**: ĐV QL · 3 tầng · kmFrom · số cột/đèn · MBA · tủ · vitri · **hide-empty** số khi 0/null · **ẩn** type/kmTo/SL/ĐVT · **cấm** Solar*/LampWatt | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 · merge dumpSpecs | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Point | risk ép `"0"` / kmTo hiện | **S-LOC-POINT** kmFrom only · optional · **ẩn** kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE | **T-UI-FORM-01** · **GAP-LT-POINT-01** |
| Name | IsWeak / route risk | `name` = mô tả hệ thống · trống OK · **cấm** IsWeak→route | **T-BE-CRUD-01** + form · **GAP-LT-NAME-01** |
| Prefix | generic `TS-` / lệch | IdCode create/import **`CS-`** · GIS short **`CS`** | **T-BE-CRUD-01** · **GAP-LT-PREFIX-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `lightingManagementUnits[]` · `bulbTypes[]` · `transformingStationTypes[]` · `controlMethods[]` · `vitriOptions` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-LT-LOOKUP-01** |
| dumpSpecLabels | thiếu attr keys chiếu sáng | đủ dump keys + labels VN (management · bulb · MBA · control · vitri) | **T-UI-FORM-01** · **GAP-LT-SPEC-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** |
| Filter context | thiếu file | `so-ts-lighting-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P2** (GAP-LT-FLAT-01) | dumpSpecs P1 · migration **none** |
| Alias board | live filter only | `/so-ts-lighting` board-only · optional Navigate | **T-LT-08** |
| Solar*/LampWatt | template AK32 có | **OUT of scope** dump §4 only | **GAP-AK32-07** · exclude form/grid |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT · import **4871** rows.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=LIGHTING`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts?type=LIGHTING` |
| `mfeStdUrl` | `http://localhost:9301/so-ts?type=LIGHTING` (Dev verify) · alias `http://localhost:9301/so-ts-lighting` |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=LIGHTING` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `LIGHTING`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-lighting-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=LIGHTING` | **SELECTED** — live MFE + Design/SA |
| B | `/so-ts-lighting` as primary list URL | rejected — board alias only · optional redirect → A |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Chiếu sáng đường» khi `type=LIGHTING` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-lighting-filter-bar.md` · **cấm** nút Tìm riêng |
| DES-GRID-C0 | listTitle «Danh sách hệ thống chiếu sáng» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · LIGHTING column profile |
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
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=LIGHTING` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · prefix **`CS-`** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`lightingManagementUnits[]`** · **`bulbTypes[]`** · **`transformingStationTypes[]`** · **`controlMethods[]`** · **`vitriOptions`** |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t18 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock LIGHTING |
| API-LKP-02 | GET | Integration `road-routes/search` | filter + form route |
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
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent LightingJson / Schema_* P1 |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-LT-NAME/PREFIX** · import + rebuild · dumpSpecs P1 |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-LT-LOOKUP-01** lighting* arrays |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 · T-CTX-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **S-LOC-POINT** · **GAP-SOTS-FORM/REUSE** · **GAP-LT-POINT/SPEC** |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-LKP-* | `/agent-dev` | asset-type · road-route SearchInput |
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

### SA T-LT → pack map

| SA id | Pack task | Focus |
|-------|-----------|-------|
| T-LT-01 | T-UI-LIST-01 | LIGHTING grid profile · hide-empty · primary route/ĐV QL |
| T-LT-02 | T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels · GAP-LT-SPEC-01 |
| T-LT-03 | T-UI-FORM-01 | S-LOC-POINT · kmFrom only · ẩn kmTo · cấm ép `"0"` |
| T-LT-04 | T-BE-CRUD-01 + form | name optional · cấm IsWeak→route |
| T-LT-05 | T-BE-CRUD-01 | DefaultCodePrefix **`CS-`** · GIS CS |
| T-LT-06 | T-BE-INIT-01 | LOOKUP_STATIC lighting* arrays |
| T-LT-07 | T-UI-LEAVE-01 | LeaveConfirmModal |
| T-LT-08 | T-CTX-01 / route | alias board-only optional |
| T-LT-09 | T-CTX-01 | optional DOMAIN-MAP row |
| T-LT-10 | this file | pack + gates · tile t18 · exclude Solar*/LampWatt |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-POINT · LAYOUT-06 · leave Modal
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-LT-LOOKUP/NAME/PREFIX/POINT/SPEC/ROUTE · GAP-AK32-07 exclude
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-lighting.md` + parent `so-ts-type-grid.md` · tạo `so-ts-lighting-filter-bar.md` · lane web → `dev` · **cấm** re-scan demo

---

### T-BE-CRUD-01 — Road-assets CRUD delta (LIGHTING)

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**DoD:**
- API-01…05 verify · type filter `LIGHTING`
- Persist scalars + **dumpSpecs P1** · **cấm** Schema_* / flatten P1
- `name` = mô tả hệ thống · trống OK · **cấm** IsWeak→route (**GAP-LT-NAME-01**)
- IdCode create/import prefix **`CS-`** · GIS short **`CS`** (**GAP-LT-PREFIX-01**)
- import `RoadAssetCatalogHandler` / GIS `chieu-sang` align
- **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`

---

### T-BE-INIT-01 — LOOKUP seed

**status:** pending (delta)  
**deps:** T-BE-CRUD-01  
**devSlash:** `/agent-dev`  
**DoD:** init-data trả `lightingManagementUnits[]` · `bulbTypes[]` · `transformingStationTypes[]` · `controlMethods[]` · `vitriOptions` · FE Dropdown LOOKUP_STATIC bind management_id / bulb_type_id / type_transforming_station_id / control_method_id / vitri (**GAP-LT-LOOKUP-01**)

---

### T-BE-UISCHEMA-01 / T-BFF-01 / T-PERM-01

**status:** pending / verify  
**DoD:** catalogKind `road-assets` · BFF proxy only · perm codes stub · Auth DEFER

---

### T-UI-LIST-01 — Grid LIGHTING

**status:** pending  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev`  
**DoD (`tl-grid-task-template`):**
- Zones A–D+F+H · LAYOUT-06 shell height
- Column profile LIGHTING: **ON** ĐV QL (`management_id`) · 3 tầng tuyến · kmFrom · số cột đèn · số đèn · loại MBA · công suất · tủ điều khiển · vitri
- **Ẩn** type · kmTo · SL · ĐVT · **cấm** Solar*/LampWatt
- **hide-empty** number_pole_light_bulb · number_light · capacity_transformer · number_control_box
- Header title khi `type=LIGHTING`
- **cấm** Thêm mới trên Zone A

---

### T-UI-FILTER-01 — Filter bar

**status:** pending  
**deps:** T-BE-CRUD-01 · T-CTX-01  
**devSlash:** `/agent-dev`  
**DoD:** load `so-ts-lighting-filter-bar.md` trước Write · `LinErpListFilterBar` · fields: search · type (prefill/ẩn LIGHTING) · route 3 tầng · kmFrom filter · **cấm** nút Tìm riêng · V1–V5

---

### T-UI-FORM-01 — Full-page form

**status:** pending (delta)  
**deps:** T-UI-LIST-01 · T-BE-INIT-01  
**devSlash:** `/agent-dev`  
**DoD:**
- `CatalogFormShell` · `data-form-cols="5"` · **cấm** tab legacy · **cấm** fork `AssetFormPage`
- Reuse **S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS**
- **S-LOC-POINT:** kmFrom only · optional · **ẩn** kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE (**GAP-LT-POINT-01**)
- S-NAME: `name` = mô tả hệ thống · trống OK · **cấm** IsWeak
- S-ATTR editable: `management_id` · `number_pole_light_bulb` · `number_light` · `bulb_type_id` · `type_transforming_station_id` · `capacity_transformer` · `number_control_box` · `control_method_id` · `vitri` · dumpSpecLabels VN
- Dropdown LOOKUP_STATIC lighting* · Number/Text đúng controlHint
- Header chrome only · **cấm** footer Lưu
- Prefix display **`CS-`**
- **cấm** Solar*/LampWatt fields (**GAP-AK32-07**)

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
| T-UI-LKP-01 | SearchInput asset-type / road-route |
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
| type | Loại TS | SearchInput asset-type | scalar lock LIGHTING |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT |
| name | Tên hệ thống | Text | scalar optional |
| management_id | ĐV QL sử dụng | Dropdown | dumpSpecs · LOOKUP_STATIC · grid ON |
| number_pole_light_bulb | Số cột đèn | Number | dumpSpecs · hide-empty · grid ON |
| number_light | Số đèn | Number | dumpSpecs · hide-empty · grid ON |
| bulb_type_id | Loại bóng đèn | Dropdown | dumpSpecs · LOOKUP_STATIC |
| type_transforming_station_id | Loại trạm biến áp | Dropdown | dumpSpecs · LOOKUP_STATIC |
| capacity_transformer | Công suất MBA (kVA) | Number/Text | dumpSpecs · hide-empty |
| number_control_box | Số tủ điều khiển | Number | dumpSpecs · hide-empty |
| control_method_id | Phương thức điều khiển | Dropdown | dumpSpecs · LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | dumpSpecs · L/R/C |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CS- |

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
| GAP-AK32-07 | Solar*/LampWatt **excluded** |
| ERP.* | **cấm** |

---

## Dev assign (`agent-dev-assign`)

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/so-ts-lighting/implement/so-ts-lighting.md` |
| handoff compact | `specs/so-ts-lighting/handoff/team_lead-compact.md` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| primary URL | `http://localhost:9301/so-ts?type=LIGHTING` |
| order | T-CTX-01 → T-BE-* → T-UI-LIST/FILTER → T-UI-FORM → leave/hist → QA queue |

---

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/task/so-ts-lighting.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/handoff/team_lead-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/STATUS.md`
- prior: `handoff/sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- solution: `be/solution-discovery.md`
- design: `ui/design.md`
- requirement: `po/requirement.md`
