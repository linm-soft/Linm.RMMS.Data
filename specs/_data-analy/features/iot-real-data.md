# Real-data bind — iot (Kind B list + Kind D full-page form)

| | |
|---|---|
| feature | `iot` |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_2f176635` |
| prefix | API `api/v1/iot` · BFF `web-bff/api/v1/iot` |
| sourceTables | **GAP-IOT-02** — chưa có entity/table devices (health only) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` · `/iot` |
| map | `none` |
| progress | status online/offline (device connectivity) · **không** workflow multi-step |
| demo | **N/A** |
| schemaVersion | `2` |
| skillVersion | `2026.08.25.01` |
| rulesVersion | `2026.09.05.2` |
| contentHash | `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| analyzedAt | `2026-09-05T03:51:05.144Z` |
| status | `done` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/iot.md` | — | version gate |
| `domain-map` | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` row **Iot** | — | prefix SSOT |
| `api` · health | `IotHealthController.cs` `GET api/v1/iot/health` | — | 503 BFF wrap |
| `bff` · health | `IotBffController.cs` `GET web-bff/api/v1/iot/health` | — | 503 unavailable payload |
| `dto` · health | `IotHealthResponse.cs` | — | **cấm** map health → grid rows |
| `api` · devices | CTX §3 planned `GET/POST api/v1/iot/devices` · `GET/PUT/DEL …/devices/{id}` | empty grid «Chưa có thiết bị IoT» | **GAP-IOT-02** — **không** có Controller/Entity live |
| `mfe` · list | `IotListPage.tsx` · `iotSlice.fetchIotItems` | scaffold empty-state | catch → empty |
| `mfe` · form | `IotFormPage.tsx` | scaffold hint | — |
| `catalog` · road-route | `specs/_data-analy/shared-catalogs/road-route-seed.json` | no match | SearchInput empty |
| `perm` | CTX `rmms-iot:devices:read|write` · menu `rmms-iot-iot` ADMIN | 403 | hide create/write |

`sourceCite` = file/controller **có trong repo** hoặc path **đã ghi CTX**. **Cấm** demo-json / invent ERP.* (**GAP-DA-REAL-03**).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| search | Tìm | SearchTextInput | — | `GET …/devices?search=` (**planned**) | — | **gap** | n/a |
| status (filter) | Trạng thái | Dropdown | LOOKUP_STATIC | `?status=` | — | **gap** | n/a |
| type (filter) | Loại | Dropdown | LOOKUP_STATIC | `?type=` | — | **gap** | n/a |
| routeCode (filter) | Tuyến | SearchInput | road-route | `?routeCode=` | — | **gap** | n/a |
| code | Mã | Text / IdCode | — | list/detail `code` | `code` | **gap** | n/a |
| name | Tên | Text | — | detail | `name` | **gap** | n/a |
| type | Loại cảm biến | Dropdown | LOOKUP_STATIC | detail | `type` | **gap** | n/a |
| status | Trạng thái | Dropdown | LOOKUP_STATIC | detail | `status` | **gap** | n/a |
| routeCode | Tuyến | SearchInput | road-route | detail | `routeCode` | **gap** | n/a |
| km | Lý trình | Number | — | detail | `km` | **gap** | n/a |
| grid.code…km | cột lưới | CatalogListShell | — | list page | — | **gap** | n/a |

**Prefix map (CTX P2 contract · SA implement):**

| Operation | Path | Live? |
|-----------|------|-------|
| Health | `GET /web-bff/api/v1/iot/health` → `GET /api/v1/iot/health` | **yes** |
| List | `GET …/iot/devices` | **no** · GAP-IOT-02 |
| Detail | `GET …/iot/devices/{id}` | **no** |
| Create | `POST …/iot/devices` | **no** |
| Update | `PUT …/iot/devices/{id}` | **no** |
| Delete | `DELETE …/iot/devices/{id}` | **no** |

**Cấm** ERP.* · Finance · invent prefix ngoài DOMAIN-MAP `iot`.  
**Cấm** dùng health response làm list payload.

## §C — Catalog / write rules

| Action | Rule |
|--------|------|
| create | Required: `code`/`IdCode` · `name` · `type` · `status` · `routeCode` — sau khi BE devices sẵn sàng |
| update | PUT flat scalars · tenant-scoped (SA) |
| delete | soft/hard — SA chốt |
| routeCode | Validate Integration / road-route seed · **cấm** free-text |
| type/status | LOOKUP_STATIC init-data · PO chốt enum (**Q-IOT-TYPE-01**) |

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| road-route | Integration road-routes search (peer) | `road-route-seed.json` | free-text tuyến |
| LOOKUP_STATIC type/status | init-data **đề xuất** | CTX online/offline · type PO | Dropdown demo làm master riêng |

## §D — Map / vẽ

`map: none` — packKind=list · **không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `status` | device connectivity (planned entity) | user / ingest P2 | PUT devices | chip lưới · Dropdown form |

`progress: connectivity status only` — không multi-step workflow.

## §F — Empty / fail / handoff

| Case | Behavior |
|------|----------|
| list empty (sau CRUD live) | empty grid VN · totalCount=0 |
| list fail | toast · **cấm** alert · **cấm** fake rows từ health |
| devices API missing | keep scaffold empty · STATUS gap GAP-IOT-02 · SA must ship |
| detail 404 | toast · back `/iot` |
| 403 perm | hide write · ADMIN menu only |

| Role | Dùng packet |
|------|-------------|
| PO | DoD list/form + Ask Q-IOT-* · perm ADMIN |
| Design | CatalogListShell + Full form · filter bar HARD |
| SA | Entity + `devices` CRUD + Schema · **không** ERP.* |
| TL/Dev | Wire MFE khi BE ready · health ≠ CRUD |
| QA | queued — verify empty/health ≠ list |

## Confirmed by

ai-autocode-autopilot · task_2f176635 · roleOnly=`data_analy` · §A+§B PASS (cite + planned CTX · gaps explicit)

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=2 · workflowVersion=2026.09.01.02 · rulesVersion=2026.09.05.2 · contentHash=sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3 · versionGate=ok · status=done · realDataSchema=data-analy-real-data@2 -->