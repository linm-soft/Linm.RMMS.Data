# Team lead — tasks — so-ts-land-row

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `LAND_ROW` |
| cluster | `land` · tile `t33` |
| dump | `tbl_land_btra` |
| prefix | **`DT-`** (GIS short **`HT`** giữ) |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-LAND-NAME/LOOKUP/PREFIX/RANGE/ROUTE · flatten DEFER P2 |
| solution_confirm | **approve** (`task_6047e0c0`) |
| design_confirm | **approve** (`task_0abc91dc`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts?type=LAND_ROW`** · alias board `/so-ts-land-row` optional redirect · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_0d0d2e8b` |
| saTaskId | `task_6047e0c0` |
| updatedAt | `2026-09-01T09:00:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · fork `AssetFormPage` · tab legacy · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=LAND_ROW` | **giữ** · alias `/so-ts-land-row` optional | **route_confirm=route_a** · **GAP-LAND-ROUTE-01** |
| Grid profile | generic / thiếu LAND_ROW | Hide `type`/`kmTo`/qty/unit · **ON**: CT/tuyến/lý trình/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · **hide-empty** length/width/xaphuong | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 · merge dumpSpecs · key `under_managemen` giữ typo | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Range `kmTo` | form hiện / bắt buộc risk | **S-LOC-RANGE** · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT | **T-UI-FORM-01** · **GAP-LAND-RANGE-01** |
| Name | IsWeak / đoạn tuyến risk | `name` ← `construction` · trống OK · **cấm** IsWeak→đoạn | **T-BE-CRUD-01** + form · **GAP-LAND-NAME-01** |
| Prefix | GIS `HT` / lệch | IdCode create/import **`DT-`** · GIS short **`HT`** giữ | **T-BE-CRUD-01** · **GAP-LAND-PREFIX-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `landLotStatuses[]` · `landExploitTypes[]` · `landAccessPavementTypes[]` · `landCrossSections[]` · bool `access_road` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-LAND-LOOKUP-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** |
| Filter context | thiếu file | `so-ts-land-row-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P2** (GAP-LAND-FLAT-01) | dumpSpecs P1 · migration **none** |
| dumpSpecLabels | thiếu attr keys | đủ dump §4 land keys + labels VN | **T-UI-FORM-01** |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route / org-unit · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=LAND_ROW`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts?type=LAND_ROW` |
| `mfeStdUrl` | `http://localhost:9301/so-ts?type=LAND_ROW` (Dev điền/verify) · alias `http://localhost:9301/so-ts-land-row` |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=LAND_ROW` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `LAND_ROW`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-land-row-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=LAND_ROW` | **SELECTED** — live MFE + Design/SA |
| B | `/so-ts-land-row` as primary list URL | rejected — board alias only · optional redirect → A |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Đất thuộc TS HT» khi `type=LAND_ROW` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-land-row-filter-bar.md` · **cấm** nút Tìm riêng |
| DES-GRID-C0 | listTitle «Danh sách đất thuộc TS HT» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · LAND_ROW column profile |
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
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=LAND_ROW` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · prefix **`DT-`** · kmTo ẩn fill 0 |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`landLotStatuses[]`** · **`landExploitTypes[]`** · **`landAccessPavementTypes[]`** · **`landCrossSections[]`** delta |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t33 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock LAND_ROW |
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
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent LandRowJson / Schema_* P1 |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-LAND-NAME/PREFIX** · import + rebuild · dumpSpecs P1 |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-LAND-LOOKUP-01** landLotStatuses + landExploitTypes + landAccessPavementTypes + landCrossSections |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **S-LOC-RANGE** · **GAP-SOTS-FORM/REUSE** · **GAP-LAND-RANGE** |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-LKP-* | `/agent-dev` | asset-type · road-route · org-unit SearchInput |
| T-UI-FIELD-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · dumpSpecs keys · `under_managemen` typo |
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

### SA T-LAND → pack map

| SA id | Pack task | Focus |
|-------|-----------|-------|
| T-LAND-01 | T-UI-LIST-01 | LAND_ROW grid profile · hide-empty |
| T-LAND-02 | T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels |
| T-LAND-03 | T-UI-FORM-01 | S-LOC-RANGE · kmTo ẩn fill 0 |
| T-LAND-04 | T-BE-CRUD-01 + form | name ← construction · cấm IsWeak |
| T-LAND-05 | T-BE-CRUD-01 | DefaultCodePrefix **`DT-`** · GIS HT giữ |
| T-LAND-06 | T-BE-INIT-01 | LOOKUP_STATIC land* arrays |
| T-LAND-07 | T-UI-LEAVE-01 | LeaveConfirmModal |
| T-LAND-08 | T-CTX-01 / route | alias board-only optional |
| T-LAND-09 | T-BE-CRUD-01 | DOMAIN-MAP Asset · cấm ERP.* |
| T-LAND-10 | this file | pack + gates |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-RANGE · LAYOUT-06 · leave Modal
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-LAND-NAME/LOOKUP/PREFIX/RANGE
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-land-row.md` + parent `so-ts-type-grid.md` · tạo `so-ts-land-row-filter-bar.md` · lane web → `dev` · **cấm** re-scan demo

---

### T-BE-CRUD-01 — Road-assets CRUD delta (LAND_ROW)

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**DoD:**
- API-01…05 verify · type filter `LAND_ROW`
- Persist scalars + **dumpSpecs P1** · **cấm** Schema_* / flatten P1
- `name` ← `construction` · trống OK · **cấm** IsWeak→đoạn (**GAP-LAND-NAME-01**)
- IdCode create/import prefix **`DT-`** · GIS short **`HT`** giữ (**GAP-LAND-PREFIX-01**)
- dump key **`under_managemen`** giữ typo (không rename)
- import `RoadAssetCatalogHandler` / GIS dat-hlat align
- **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`

---

### T-BE-INIT-01 — LOOKUP seed

**status:** pending (delta)  
**deps:** T-BE-CRUD-01  
**devSlash:** `/agent-dev`  
**DoD:** init-data trả `landLotStatuses[]` · `landExploitTypes[]` · `landAccessPavementTypes[]` · `landCrossSections[]` · FE Dropdown LOOKUP_STATIC · bool `access_road` (**GAP-LAND-LOOKUP-01**)

---

### T-BE-UISCHEMA-01 / T-BFF-01 / T-PERM-01

**status:** pending / verify  
**DoD:** catalogKind `road-assets` · BFF proxy only · perm codes stub · Auth DEFER

---

### T-UI-LIST-01 — Grid LAND_ROW

**status:** pending  
**deps:** T-BFF-01  
**devSlash:** `/agent-dev`  
**DoD (`tl-grid-task-template`):**
- Zones A–D+F+H · LAYOUT-06 shell height
- Column profile LAND_ROW: **ON** CT (`name`/construction) · tuyến · lý trình · TT thửa · xã · tỉnh · CQ chủ quản · dài · rộng · DT
- **Ẩn** type · kmTo · SL · ĐVT
- **hide-empty** length · width · xaphuong
- Header title khi `type=LAND_ROW`
- **cấm** Thêm mới trên Zone A

---

### T-UI-FILTER-01 — Filter bar

**status:** pending  
**deps:** T-BE-CRUD-01 · T-CTX-01  
**devSlash:** `/agent-dev`  
**DoD:** load `so-ts-land-row-filter-bar.md` trước Write · `LinErpListFilterBar` · fields: search · type (prefill/ẩn LAND_ROW) · route 3 tầng · kmFrom/kmTo filter · orgTree · **cấm** nút Tìm riêng · V1–V5

---

### T-UI-FORM-01 — Full-page form

**status:** pending (delta)  
**deps:** T-UI-LIST-01 · T-BE-INIT-01  
**devSlash:** `/agent-dev`  
**DoD:**
- `CatalogFormShell` · `data-form-cols="5"` · **cấm** tab legacy · **cấm** fork `AssetFormPage`
- Reuse **S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS**
- **S-LOC-RANGE:** ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT (**GAP-LAND-RANGE-01**)
- S-NAME: label «Công trình trên đất» · bind `construction`/`name` · trống OK
- S-ATTR editable: status_land_lot_id · under_managemen · under_operation · exploited_id · length · width · total_area · width_access_road · pavement_type_access_road_id · distance_road_center · access_road · location_id · lengthiness_access_road · dumpSpecLabels VN
- Dropdown LOOKUP_STATIC từ init · Number/Text đúng controlHint
- Header chrome only · **cấm** footer Lưu
- Prefix display **`DT-`**

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
| type | Loại TS | SearchInput asset-type | scalar lock LAND_ROW |
| route* | 3 tầng tuyến | SearchInput road-route | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · kmTo ẩn fill 0 (form) |
| orgTree | Đơn vị | SearchInput org-unit | filter |
| name | CT trên đất | Text | scalar ← construction |
| status_land_lot_id | TT thửa đất | Dropdown | dumpSpecs * |
| under_managemen | CQ chủ quản | Text | dumpSpecs (typo key) |
| under_operation | CQ khai thác | Text | dumpSpecs |
| exploited_id | HT khai thác | Dropdown | dumpSpecs |
| length / width / total_area | Kích thước / DT | Number | dumpSpecs · hide-empty L/W |
| width_access_road | Rộng ĐV | Number | dumpSpecs |
| pavement_type_access_road_id | KC mặt ĐV | Dropdown | dumpSpecs |
| distance_road_center | KC tim (km) | Number | dumpSpecs |
| access_road | Có đường vào | Dropdown bool | dumpSpecs · hide-empty |
| location_id | Mặt cắt | Dropdown | dumpSpecs L/R |
| lengthiness_access_road | Dài ĐV | Number | dumpSpecs · hide-empty |
| lat/lng | GPS | Number | scalar S-GPS |

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
| write | `specs/so-ts-land-row/implement/so-ts-land-row.md` |
| handoff compact | `specs/so-ts-land-row/handoff/team_lead-compact.md` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| primary URL | `http://localhost:9301/so-ts?type=LAND_ROW` |
| order | T-CTX-01 → T-BE-* → T-UI-LIST/FILTER → T-UI-FORM → leave/hist → QA queue |

---

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/task/so-ts-land-row.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/handoff/team_lead-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/STATUS.md`
- prior: `handoff/sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- solution: `be/solution-discovery.md`
- design: `ui/design.md`
- requirement: `po/requirement.md`
