# Real-data bind — traffic-sign-type (Loại biển báo · QCVN 41)

| | |
|---|---|
| feature | `traffic-sign-type` |
| packKind | `master` |
| changeScope | `new_page` (pipeline docs · live Integration + Master đã scaffold) |
| status | `done` |
| taskId | `task_6a62b9b6` |
| prefix | **live** `web-bff/api/v1/integration` → API `api/v1/integration` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| mfeStdRoute | `/mas/loai-bien-bao` |
| map | `none` (catalog list/form · **cấm** invent map canvas) |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| headerFingerprint | `sha256:csv:code,name,name_en,group_code,shape,width,height,sort_order` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| analyzedAt | `2026-09-06T02:20:00.000Z` |

## § Delta Current vs New (`new_page` · `task_6a62b9b6`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | draft stubs | §A–§F filled · status **done** |
| API / entity | live Integration + `rmms_traffic_sign_types` | cite giữ path — **cấm** invent ERP |
| MFE | live `/mas/loai-bien-bao` Kind B + Slideout | bind controlHint · Design confirm form shell |
| DOMAIN-MAP | **0** slug | GAP-TST-DM-01 → SA |
| Seed | CSV ~380 + Excel QCVN · icon NULL | **cấm** invent mã / pict |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/traffic-sign-type.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-traffic-sign.md` | — | consumer TRAFFIC_SIGN |
| `context` | `docs/context/features/master.md` | — | hub peer |
| `import` | `data-import/so-hieu-bien-bao/traffic_sign_types.csv` | empty list | seed job `gov-vn` |
| `import` | `data-import/so-hieu-bien-bao/Số hiệu biển báo.xlsx` | — | official names SSOT |
| `import` | `TrafficSignTypeCatalogHandler` + `EnsureFromImportedAssetsAsync` | — | chỉ **thêm** mã dump thiếu |
| `api` | `TrafficSignTypesController` `api/v1/integration/traffic-sign-types` | empty grid | toast · **cấm** alert |
| `api` · BFF | `TrafficSignTypesBffController` | — | proxy-only |
| `entity` | `TrafficSignTypeEntity` · `rmms_traffic_sign_types` | — | Type A share_a |
| `mfe` | `src/services/trafficSignType/endpoint.ts` | — | BASE=`/integration/traffic-sign-types` |
| `mfe` | `src/pages/TrafficSignTypeListPage/*` | — | Kind B live |
| `domain` | `docs/DOMAIN-MAP.md` | **GAP-TST-DM-01** | thiếu slug |

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/traffic-sign-types?search=` | — | yes |
| groupCode (filter) | Nhóm | Dropdown | traffic-sign-group | `?groupCode=` · init-data | — | yes |
| code | Mã biển | Text code | — | detail / by-code | `code` (create only) | yes |
| name | Nội dung | Text | — | detail | `name` | yes |
| nameEn | Tên EN | Text | — | detail | `nameEn` | yes |
| groupCode | Nhóm QCVN | Dropdown | traffic-sign-group | init-data | `groupCode` | yes |
| shape | Hình dạng | Text | — | detail | `shape` | yes |
| width | Rộng | Text | — | detail | `width` | yes |
| height | Dài | Text | — | detail | `height` | yes |
| icon | Icon | Text URL/path | — | detail | `icon` | yes |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | yes |
| trafficSignTypeCode (consumer) | Mã biển | SearchInput | **traffic-sign-type** | `GET …/traffic-sign-types/search` | asset field | peer so-ts |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/integration/traffic-sign-types` |
| Search | `GET /web-bff/api/v1/integration/traffic-sign-types/search` |
| Init | `GET /web-bff/api/v1/integration/traffic-sign-types/init-data` |
| Detail | `GET /web-bff/api/v1/integration/traffic-sign-types/{id}` |
| By code | `GET /web-bff/api/v1/integration/traffic-sign-types/by-code/{code}` |
| Create | `POST /web-bff/api/v1/integration/traffic-sign-types` |
| Update | `PUT /web-bff/api/v1/integration/traffic-sign-types/{id}` |
| Delete | `DELETE /web-bff/api/v1/integration/traffic-sign-types/{id}` |

FE: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master/src/services/trafficSignType/endpoint.ts`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| **traffic-sign-type** | `GET …/traffic-sign-types/search` | CSV + Excel `so-hieu-bien-bao` · set `gov-vn` | Dropdown cứng demo · invent mã |
| traffic-sign-group | `GET …/init-data` → `groupCodes` | P/W/R/I/S/KHAC | invent nhóm ngoài QCVN |

## §D — Map

`map: none`

## §E — Progress

`progress: none` (catalog master · isActive only)

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data CSV/seed thật» · DEM skip · GAP icon/seed |
| Design | control-map khớp §B · prototype Kind B · chốt Slideout vs Modal · reviewUrl |
| SA | giữ path Integration · thêm DOMAIN-MAP · **cấm** ERP.* |
| Dev | wire SearchInput consumer · **cấm** đổi hint không AskQuestion |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| analyzedAt | `2026-09-06T02:20:00.000Z` |
| taskId | `task_6a62b9b6` |
| status | `done` |
