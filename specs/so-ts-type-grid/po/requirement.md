# PO — Requirement — so-ts-type-grid

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| title | Sổ TS — grid/form theo loại (shell Kind B + section S-*) |
| role | `po` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` (match data_analy skillVersion · contentHash) |
| contentHash | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| writtenAt | `2026-09-18T18:05:00.000Z` |
| taskId | `task_1f358c1f` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued → `/agent-qa*` only) |
| prior | data_analy=`confirmed` · control-hint + real-data §A+§B PASS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts` · std `/so-ts-type-grid` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| demo | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` (chrome only · **cấm** re-scan) |
| typeCode | — (shell · `?type=` · clusters CTX §3 · **out** `route_master` / `pavement`) |

## Goal

Formalize shell `/so-ts` (Kind B list + full-page form) theo SSOT: **type column profile** + **hide-empty fill%** + mountable **S-*** sections theo cluster · children `so-ts-{kebab(type)}` reuse · **không** fork `AssetFormPage` 32 file · **không** tab legacy DRVN.

## Decisions (PO chốt · autoApprove)

| ID | Decision | Rationale |
|----|----------|-----------|
| GAP-SOTS-COL-01 | **Module** `typeColumnProfiles` (shared) · children override per type | thay ad-hoc `*_HIDE_COLS` · SSOT cluster + dump fill% |
| GAP-SOTS-FORM-01 | Giữ `dumpSpecs` JSON làm value source · flatten → cột DB **chỉ** khi `/database-migration` Schema_* · **SA chốt** timing | tránh premature schema churn |
| GAP-SOTS-DOMAIN-01 | **Yes** — thêm slug `so-ts-type-grid` → domain **Asset** trên DOMAIN-MAP | align STATUS / queue |
| GAP-SOTS-API-DOC | Cite live **`api/v1/asset/road-assets`** · CTX `api/v1/so-ts/…` = **doc alias** · **cấm** invent path mới | match controller + BFF |
| GAP-CULVERT-X-01 | UI từ mẫu · CSV/import count 0 → empty grid + toast · **cấm** seed / enqueue form giả | gap-no-source HARD |
| GAP-SOTS-REUSE-01 | Extract mountable S-META · S-ROUTE · S-LOC-POINT\|RANGE · S-NAME · S-ATTR · S-GPS | children import · cấm fork page |
| GAP-SOTS-TAB-01 | **Cấm** port multi-tab DRVN (Chi tiết / Dữ liệu TS / Bảo trì / Tệp / Ghi chú / Lịch sử) | 1 body Thông tin chung |
| GAP-SOTS-HIDE-01 | Hide-empty từ fill profile dump/CSV · **không** ẩn cột đang có giá trị trên trang chỉ vì vài row «—» | list |
| GAP-SOTS-ROUTE-SPLIT | Tách cột `route` / `routeNamed` / `routeSegment` · **cấm** gộp 1 ô | list+form |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · SearchTextInput lead · search must work · **cấm** nút Tìm riêng | list B |
| GAP-SOTS-LEAVE-01 | LeaveConfirmModal · useAlert · **cấm** `window.confirm` | form |
| GAP-SOTS-OUT-01 | `route_master` / `PAVEMENT` **out** `/so-ts` → slug `road-route` · `pavement-section` | scope |

## PackKind confirm

- `packKind=list` · Kind B zones A–D + full-page form · **không** report pack AC.
- Map canvas **out of scope**.
- Demo = zone/field tham chiếu · **cấm** demo-json / localStorage SSOT data.

## Screens

### List — DES-GRID

| Zone | Pattern | AC |
|------|---------|-----|
| **A** Header | Title «Sổ tài sản» / theo type khi `?type=` | **cấm** Thêm mới trên A |
| **B** Toolbar + filter | `LinErpListFilterBar` | SearchTextInput · type SearchInput (**asset-type**, ẩn/lock khi `?type=`) · route SearchInput ×3 (**road-route** cascade) · kmFrom/kmTo Text · orgUnit SearchInput tree (**org-unit**) · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng · **cấm** invent ảnh cột |
| **C** Grid | `LinCatalogDataGrid` | kéo cột default ON · STT · row menu Xem/Sửa/Copy/Lịch sử · **profile cột theo `?type=` / cluster** · hide-empty fill% · point ẩn `kmTo` nếu dump không có · ẩn `type` khi `?type=` |
| **D** Pager | SSOT pagination | page/pageSize bind BFF |

### Form — Full page (Kind B)

| Item | AC |
|------|-----|
| Shell | `CatalogFormShell` · `data-form-cols="5"` · routes `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| Body | Chỉ **Thông tin chung** · mount S-* theo cluster · **không** mount section trống |
| S-META | code · type · status · source |
| S-ROUTE | SearchInput road-route ×3 (tách cột) |
| S-LOC-POINT | kmFrom · XY · tỉnh · side — cluster point/stop/ops/station/crossing-point · **cấm** bắt buộc kmTo |
| S-LOC-RANGE | kmFrom · kmTo · 4 XY — `linear_protect` · `land` · crossing có km cuối |
| S-NAME | name_* khi dump có · Text hoặc SearchInput (biển = traffic-sign-type) |
| S-ATTR | dumpSpecs.* editable = mẫu Thông tin chung · **cấm** bịa field · bỏ path `<dl>`-only |
| S-GPS | lat · lng · qr · value · note |
| Typography | label **13** · input D14 / M16 (**GAP-TYP-01**) |

### Peer / std URLs

| | |
|--|--|
| peerStdUrl (live) | `http://localhost:9301/so-ts` |
| mfeStdUrl (STATUS) | `http://localhost:9301/so-ts-type-grid` |
| reviewUrl | (Design) |

## Grid AC (list pack)

1. Filter B: search + type + route cascade + km + orgUnit bind query BFF · empty → empty state · API error → toast (**cấm** alert).
2. Grid C: columns từ type column profile · hide-empty · route 3 cột tách · row actions Xem/Sửa/Copy/Lịch sử.
3. `?type=` lock/ẩn filter type · title theo loại.
4. gap-no-source (vd. `CULVERT_X`): grid 0 + toast · **cấm** seed · **cấm** mở form giả.
5. Tạo mới / Sửa → full-page form · CRUD BFF only.

## Form AC

1. Create/Update/soft Delete qua `api/v1/asset/road-assets` (+ init-data) · **cấm** invent API · **cấm** ERP.*.
2. Validation field + toast · 404 detail → list + toast.
3. Dirty leave → LeaveConfirmModal · **cấm** native dialog.
4. Children features bind S-ATTR keys — shell định nghĩa mount rules + shared scalars · **không** duplicate full ATTR catalog ở shell.

## Leave

| Case | UX |
|------|-----|
| Dirty navigate away | LeaveConfirmModal |
| Discard | discard + navigate |
| Stay | close modal |
| API error | toast · **cấm** alert |

## API / entity (cite · SA chốt chi tiết)

| | |
|--|--|
| List/Detail/CRUD/Init | `GET/POST/PUT/DELETE …/api/v1/asset/road-assets` · `…/init-data` · query `type,search,route,kmFrom,kmTo,orgUnit,page,pageSize` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| Entity | `RoadAssetEntity` · table `rmms_road_assets` · tenant `CompanyCode` |
| Import | `RoadAssetCatalogHandler` · dumpSpecs |
| Catalogs | asset-type · road-route · org-unit · Integration schema `road-assets` |

## Tasks đề xuất (ids · Team-Lead chốt)

| id | Việc |
|----|------|
| T-PROF | Module `typeColumnProfiles` · cluster defaults · hide-empty · replace ad-hoc HIDE |
| T-SEC | Extract S-META/S-ROUTE/S-LOC-*/S-NAME/S-ATTR/S-GPS · mount by cluster |
| T-FORM | ATTR editable đủ mẫu · bỏ `<dl>`-only |
| T-FILTER | Harden LinErpListFilterBar · search must work · cấm nút Tìm |
| T-DOC | DOMAIN-MAP slug + CTX API cite `asset/road-assets` |
| T-CHILD | Queue `so-ts-{kebab(type)}` reuse shell |

## Out of scope

- Map canvas · route_master / pavement trên `/so-ts` · Excel import pack · seed gap-no-source · multi-tab DRVN · invent columns ngoài dump/mẫu · ERP.*.

## Handoff → Design

- Zones A–D + form 5col · filter-bar HARD · controlHint từ analy (cấm Dev đoán Search vs SearchInput).
- **Cấm** invent ảnh cột · **cấm** re-scan demo (hash skip).
- reviewUrl + prototype path khi Design PASS.
- Compact: `specs/so-ts-type-grid/handoff/po-compact.md`.

## Sources (Read-only cite)

- `specs/_data-analy/features/so-ts-type-grid-control-hint.md`
- `specs/_data-analy/features/so-ts-type-grid-real-data.md`
- `specs/so-ts-type-grid/handoff/data_analy-compact.md`
- `docs/context/features/so-ts-type-grid.md`
