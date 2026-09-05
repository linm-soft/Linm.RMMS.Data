# Team lead — tasks — so-ts-its-camera

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `ITS_CAMERA` |
| cluster | `ops` · tile `t19` |
| dump | `tbl_its` |
| prefix | **`IT-`** (GIS short **`CAM`**) |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-ITS-LOOKUP/NAME/PREFIX/POINT/ROUTE/DUMP-KEY/CAM · flatten DEFER P2 |
| solution_confirm | **approve** (`task_00134ed9`) |
| design_confirm | **approve** (`task_33ab0873`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts?type=ITS_CAMERA`** · alias board `/so-ts-its-camera` optional redirect · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_d4c9d606` |
| saTaskId | `task_00134ed9` |
| updatedAt | `2026-09-02T09:00:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · fork `AssetFormPage` · tab legacy · camera-connect merge · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=ITS_CAMERA` | **giữ** · alias `/so-ts-its-camera` optional | **route_confirm=route_a** · **GAP-ITS-ROUTE-01** |
| Grid profile | generic / thiếu ITS_CAMERA | **ON mẫu**: 3 tầng · kmFrom · TTĐH · vị trí phòng · VMS/màn hình/máy chủ/WIM · cống/cáp · trụ · **hide-empty** số khi 0/null · **ẩn** type/kmTo/SL/ĐVT · detail-only tn_* form only | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 + `tn_*` · merge dumpSpecs | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Point | risk ép `"0"` / kmTo hiện | **S-LOC-POINT** kmFrom only · optional · **ẩn** kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE | **T-UI-FORM-01** · **GAP-ITS-POINT-01** |
| Name | IsWeak / route risk | `name` = `location_name_its_ccroom` · trống OK · **cấm** IsWeak→route | **T-BE-CRUD-01** + form · **GAP-ITS-NAME-01** |
| Prefix | generic `TS-` / lệch | IdCode create/import **`IT-`** · GIS short **`CAM`** | **T-BE-CRUD-01** · **GAP-ITS-PREFIX-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `itsManagementCenterTypes[]` · `itsCentralControlLocations[]` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-ITS-LOOKUP-01** |
| dumpSpecLabels | thiếu attr keys ITS | đủ dump keys + labels VN (TTĐH · vị trí · tn_*) · cite header `moc_dbvn.tbl_its.2026.8.23.15.11.csv` | **T-UI-FORM-01** · **GAP-ITS-DUMP-KEY-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** |
| Filter context | thiếu file | `so-ts-its-camera-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P2** (GAP-ITS-FLAT-01) | dumpSpecs P1 · migration **none** |
| Alias board | live filter only | `/so-ts-its-camera` board-only · optional Navigate | **T-ITS-08** |
| camera-connect | peer feature IP/RTSP | **OUT of scope** · **cấm** merge IP/RTSP/ONVIF | **GAP-ITS-CAM-01** · exclude form/grid |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT · import **9** rows.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=ITS_CAMERA`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts?type=ITS_CAMERA` |
| `mfeStdUrl` | `http://localhost:9301/so-ts?type=ITS_CAMERA` (Dev verify) · alias `http://localhost:9301/so-ts-its-camera` |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `ITS_CAMERA`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-its-camera-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera-connect (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=ITS_CAMERA` | **SELECTED** — live MFE + Design/SA |
| B | `/so-ts-its-camera` as primary list URL | rejected — board alias only · optional redirect → A |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Hệ thống ITS» khi `type=ITS_CAMERA` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-its-camera-filter-bar.md` · **cấm** nút Tìm riêng |
| DES-GRID-C0 | listTitle «Danh sách hệ thống ITS» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · ITS_CAMERA column profile |
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
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=ITS_CAMERA` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · prefix **`IT-`** |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`itsManagementCenterTypes[]`** · **`itsCentralControlLocations[]`** |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t19 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock ITS_CAMERA |
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
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent ItsJson / Schema_* P1 |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-ITS-NAME/PREFIX** · import + rebuild · dumpSpecs P1 |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-ITS-LOOKUP-01** its* arrays |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 · T-CTX-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **S-LOC-POINT** · **GAP-SOTS-FORM/REUSE** · **GAP-ITS-POINT/DUMP-KEY** |
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

### SA T-ITS → pack map

| SA id | Pack task | Focus |
|-------|-----------|-------|
| T-ITS-01 | T-UI-LIST-01 | ITS_CAMERA grid profile · hide-empty · primary route/TTĐH/thiết bị |
| T-ITS-02 | T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels · GAP-ITS-DUMP-KEY-01 |
| T-ITS-03 | T-UI-FORM-01 | S-LOC-POINT · kmFrom only · ẩn kmTo · cấm ép `"0"` |
| T-ITS-04 | T-BE-CRUD-01 + form | name optional · cấm IsWeak→route |
| T-ITS-05 | T-BE-CRUD-01 | DefaultCodePrefix **`IT-`** · GIS CAM |
| T-ITS-06 | T-BE-INIT-01 | LOOKUP_STATIC its* arrays |
| T-ITS-07 | T-UI-LEAVE-01 | LeaveConfirmModal |
| T-ITS-08 | T-CTX-01 / route | alias board-only optional |
| T-ITS-09 | T-CTX-01 | optional DOMAIN-MAP row |
| T-ITS-10 | this file | pack + gates · tile t19 · **cấm** camera-connect merge |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-POINT · LAYOUT-06 · leave Modal
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-ITS-LOOKUP/NAME/PREFIX/POINT/ROUTE/DUMP-KEY/CAM · camera-connect exclude
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-its-camera.md` + parent `so-ts-type-grid.md` · tạo `so-ts-its-camera-filter-bar.md` · lane web → `dev` · **cấm** re-scan demo

---

### T-BE-CRUD-01 — Road-assets CRUD delta (ITS_CAMERA)

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**DoD:**
- API-01…05 verify · type filter `ITS_CAMERA`
- Persist scalars + **dumpSpecs P1** · **cấm** Schema_* / flatten P1
- `name` = `location_name_its_ccroom` · trống OK · **cấm** IsWeak→route (**GAP-ITS-NAME-01**)
- IdCode create/import prefix **`IT-`** · GIS short **`CAM`** (**GAP-ITS-PREFIX-01**)
- import `RoadAssetCatalogHandler` / GIS `camera` align
- **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`

---

### T-BE-INIT-01 — LOOKUP seed

**status:** pending (delta)  
**deps:** T-BE-CRUD-01  
**devSlash:** `/agent-dev`  
**DoD:** init-data trả `itsManagementCenterTypes[]` · `itsCentralControlLocations[]` · FE Dropdown LOOKUP_STATIC bind type_management_center_id / location_its_central_control_id (**GAP-ITS-LOOKUP-01**)

---

### T-BE-UISCHEMA-01 / T-BFF-01 / T-PERM-01

**status:** pending / verify  
**DoD:** catalogKind `road-assets` · BFF proxy only · perm codes stub · Auth DEFER

---

### T-UI-LIST-01 — Grid ITS_CAMERA

**status:** pending  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev`  
**DoD (`tl-grid-task-template`):**
- Zones A–D+F+H · LAYOUT-06 shell height
- Column profile ITS_CAMERA: **ON mẫu** 3 tầng tuyến · kmFrom · TTĐH · vị trí phòng · VMS · màn hình · máy chủ · WIM · cống/cáp · trụ
- **Ẩn** type · kmTo · SL · ĐVT · detail-only tn_* (CCTV/traffic/incident…) form only
- **hide-empty** number columns khi 0/null
- Header title khi `type=ITS_CAMERA`
- **cấm** Thêm mới trên Zone A

---

### T-UI-FILTER-01 — Filter bar

**status:** pending  
**deps:** T-BE-CRUD-01 · T-CTX-01  
**devSlash:** `/agent-dev`  
**DoD:** load `so-ts-its-camera-filter-bar.md` trước Write · `LinErpListFilterBar` · fields: search · type (prefill/ẩn ITS_CAMERA) · route 3 tầng · kmFrom filter · **cấm** nút Tìm riêng · V1–V5

---

### T-UI-FORM-01 — Full-page form

**status:** pending (delta)  
**deps:** T-UI-LIST-01 · T-BE-INIT-01  
**devSlash:** `/agent-dev`  
**DoD:**
- `CatalogFormShell` · `data-form-cols="5"` · **cấm** tab legacy · **cấm** fork `AssetFormPage`
- Reuse **S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS**
- **S-LOC-POINT:** kmFrom only · optional · **ẩn** kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE (**GAP-ITS-POINT-01**)
- S-NAME: `name` = `location_name_its_ccroom` · trống OK · **cấm** IsWeak
- S-ATTR editable: `type_management_center_id` · `location_its_central_control_id` · `tn_vms_interface` · `tn_screen_controller` · `tn_data_server` · `tn_wim_high_speed` · `tn_cable_duct_length` · `tn_fiber_optic_length` · `tn_its_pole` · detail-only tn_* · dumpSpecLabels VN
- Dropdown LOOKUP_STATIC its* · Number/Text đúng controlHint
- Header chrome only · **cấm** footer Lưu
- Prefix display **`IT-`**
- **cấm** camera-connect fields (**GAP-ITS-CAM-01**)

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
| type | Loại TS | SearchInput asset-type | scalar lock ITS_CAMERA |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT |
| name | Tên phòng ITS | Text | scalar optional · location_name_its_ccroom |
| type_management_center_id | Loại TTĐH | Dropdown | dumpSpecs · LOOKUP_STATIC · grid ON |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown | dumpSpecs · LOOKUP_STATIC · hide-empty OK |
| tn_vms_interface | VMS | Number | dumpSpecs · hide-empty · grid ON |
| tn_screen_controller | Bộ ĐK màn hình | Number | dumpSpecs · hide-empty · grid ON |
| tn_data_server | Máy chủ DL | Number | dumpSpecs · hide-empty · grid ON |
| tn_wim_high_speed | WIM tốc độ cao | Number | dumpSpecs · hide-empty · grid ON |
| tn_cable_duct_length | Cống cáp (km) | Number | dumpSpecs · hide-empty · grid ON |
| tn_fiber_optic_length | Cáp quang (km) | Number | dumpSpecs · hide-empty · grid ON |
| tn_its_pole | Trụ đỡ ITS | Number | dumpSpecs · hide-empty · grid ON |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail | Number | dumpSpecs · form S-ATTR only |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix IT- |

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
| GAP-ITS-CAM-01 | camera-connect **excluded** |
| ERP.* | **cấm** |

---

## Dev assign (`agent-dev-assign`)

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/so-ts-its-camera/implement/so-ts-its-camera.md` |
| handoff compact | `specs/so-ts-its-camera/handoff/team_lead-compact.md` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| primary URL | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| order | T-CTX-01 → T-BE-* → T-UI-LIST/FILTER → T-UI-FORM → leave/hist → QA queue |

---

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/task/so-ts-its-camera.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/handoff/team_lead-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/STATUS.md`
- prior: `handoff/sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- solution: `be/solution-discovery.md`
- design: `ui/design.md`
- requirement: `po/requirement.md`
