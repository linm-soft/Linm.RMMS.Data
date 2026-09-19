# Real-data bind — so-ts-type-grid (Kind B shell · list + form theo loại)

| | |
|---|---|
| feature | `so-ts-type-grid` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_7f826b0d` |
| typeCode | — (shell · filter `?type=`) |
| dump | per-type gov-vn · parent SSOT |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts` · `?type=` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-type-grid` · live `…/so-ts` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| headerFingerprint | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-18T17:55:00.000Z` |

## § Delta Current vs New (`edit_page` · `task_7f826b0d`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | CTX `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | ad-hoc `*_HIDE_COLS` + base schema | Type column profile registry + hide-empty fill% |
| Form sections | inline ATTR blocks trong 1 file | Mountable S-* · children reuse |
| Tab legacy | 1 body | **cấm** port multi-tab DRVN |
| gap-no-source | CULVERT_X CSV 0 | empty grid + toast · **cấm** seed |
| Out of scope | route_master / PAVEMENT trên `/so-ts` | slug `road-route` · `pavement-section` |
| DOMAIN-MAP | thiếu slug shell | add `so-ts-type-grid` → Asset |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-type-grid.md` | — | version mismatch → gate |
| `context` | `docs/context/features/import-gov-asset-fields.md` | — | dump columns per type |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | set `gov-vn` · per dump CTX §5 | count 0 OK | **cấm** seed giả · gap-no-source toast |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units · vitriOptions | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · type seeds + dumpSpecs | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · profile ad-hoc |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput ×3 |
| `derived` | type column profile + hide-empty | — | dump fill% SSOT |
| `derived` | section mount by cluster | — | CTX §3 |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (CTX §4–§6): mọi `/so-ts?type=` luôn có tên official (link) · 3 tầng tuyến tách cột · lý trình theo cluster · ẩn cột fill 0% / `type` khi filter · form = đủ field mẫu Thông tin chung.

## §B — Bind field (HARD · live shell)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · cascade | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · cascade | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình từ/đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình đến/cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes · hide point |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên | Text / SearchInput | traffic-sign-type khi biển | detail / list | `name` | yes |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| quantity | Số lượng | Number | — | list/detail | `quantity` | yes · hide-empty |
| unitCode | ĐVT | Text | — | list/detail | `unitCode` | yes · hide-empty |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes · S-ATTR source |
| side | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC | detail | dumpSpecs / scalar | yes · POINT |
| lat / lng | GPS | Number | — | detail | `lat`/`lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| value | Giá trị | MoneyInput | — | detail | `value` | yes |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| dumpSpecs.* | ATTR per type | Select/SearchInput/Number/Text/date | LOOKUP / master | parse dumpSpecs | dumpSpecs / flat | children · **GAP-SOTS-FORM-01** |

Children features bind S-ATTR keys — **không** duplicate full ATTR ở shell; shell chỉ định nghĩa mount rules + shared scalars.

## §C — Empty / error / leave

| Case | UX |
|------|-----|
| List empty (filter / type 0 / gap-no-source) | empty state copy · toast nếu gap-no-source · **cấm** alert · **cấm** seed |
| API error | toast · **cấm** alert |
| 404 detail | navigate list + toast |
| Dirty leave | LeaveConfirmModal · **cấm** `window.confirm` |
| Validation | field error + toast |

## §E — Tasks đề xuất (ids · TL chốt)

| id | Việc |
|----|------|
| T-PROF | Module `typeColumnProfiles` · cluster defaults · hide-empty fill% · replace ad-hoc sets |
| T-SEC | Extract S-META/S-ROUTE/S-LOC-*/S-NAME/S-ATTR/S-GPS · mount by cluster |
| T-FORM | ATTR editable đủ mẫu Thông tin chung · bỏ `<dl>`-only path |
| T-FILTER | Harden LinErpListFilterBar · search must work · cấm nút Tìm |
| T-DOC | DOMAIN-MAP + CTX API path cite `asset/road-assets` |
| T-CHILD | Queue `so-ts-{kebab(type)}` reuse shell · ảnh mẫu |

## Handoff

→ **PO** requirement từ delta + §B.  
→ **SA** API giữ road-assets · optional Schema_* flatten.  
→ **Design** zones + profile columns · **cấm** invent.  
**real-data §A+§B: PASS** · cả control-hint **và** real-data có → handoff PO.
