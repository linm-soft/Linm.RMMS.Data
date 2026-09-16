# Real-data bind — supervise

| | |
|---|---|
| feature | `supervise` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol `AttendanceLogsController.GetList` |
| changeScope | `edit_page` |
| taskId | `task_82b70c41` |
| gapCite | code review 2026-09-12 · filter/map toast → live |

Skill: `example/data-analy-real-data.md` · **GAP-MOB-REAL-01**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| List cards | GET page/pageSize only | GET + optional `route` · client day filter on `CheckInAt` |
| Filter UI | toast copy only · **no bind** | sheet → `filterRoute` / `filterDate` → re-fetch / filter |
| Map segment | toast · no nav | navigate sibling `patrol-map` (existing native) |
| Detail tap | push supervise-detail | **giữ** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `supervise.md` · `AttendanceLogsController.GetList` · `AttendanceLogDto` | 0 items → EmptyChrome | toast loadFail · **cấm** demoItems ship |
| `query` | `route` · `page` · `pageSize` (50) · optional `search`/`status`/`onlyOutZone` | clear route → omit | invalid ignored by BE |
| `derived` | client filter ngày trên `CheckInAt` (local calendar day) | 0 after date → EmptyChrome | — |
| `nav` | segment map → sibling `patrol-map` · card → `supervise-detail` | — | — |
| `demo` | prototype `#sc-supervise` UI-only | Design parity | **không** SSOT runtime |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|---------|------------|---------|
| navTitle | Giám sát tuần đường | Text | — | static | — | — | yes |
| filterBtn | Lọc | Text button | — | open sheet | — | — | yes |
| filterRoute | Tuyến | TextField | route codes | GET query | `route` | gap | yes |
| filterDate | Ngày | DatePicker | — | derived filter | `CheckInAt` day | — | yes |
| filterApply | Áp dụng | Button | — | trigger reload | — | — | yes |
| filterClear | Xóa lọc | Button | — | clear + reload | — | — | yes |
| segList | Danh sách check in | Segment | — | local idx 0 | — | — | yes |
| segMap | Bản đồ | Segment | — | nav sibling | — | — | yes |
| cardTitle | Tên NV | Text | — | GET | `UserName` | yes | yes |
| cardOrg | Tổ / đơn vị | Text | — | GET / fallback | `Note` | yes | yes |
| cardLoc | Tuyến · km | Text | — | GET | `Route` + `KmPoint` | yes | yes |
| cardTime | Timestamp | Text | — | GET | `CheckInAt` | yes | yes |
| cardStatus | Trạng thái | Status strip | status map | GET | `Status` | yes | yes |
| cardThumb | Ảnh | placeholder | — | P2 | media | gap | gap |
| emptyList | Không có check-in | EmptyChrome | — | derived | count=0 | — | yes |
| toastErr | (lỗi tải) | Toast | — | GET fail | — | — | yes |

§B path **khớp** `supervise-bff-endpoints.md` — **không** invent `api/v1/supervise` · **cấm** toast giả lập filter.

### Display / filter rules

| Line | Rule |
|------|------|
| Appear | GET `patrol/attendance-logs?page=1&pageSize=50` |
| Apply route | GET `…&route={trim}` · empty route → omit param |
| Apply date | after GET · keep items where local `CheckInAt` date == selected · null date → no client day filter |
| Clear | reset route+date · GET bare page |
| Map seg | push `#sc-patrol-map` · **không** gọi attendance-logs map API |
| Status strip | map Status → ok/warn (prior mapper) |
| Org | `Note` if present · else prior fallback label · GAP-MOB-SUP-03 |
| Empty | title/hint EmptyChrome · **cấm** fake cards |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| route filter | GET `route=` exact match BE | road routes DB · free-text OK P1 | invent route-picker API P1 |
| status display | client map | control-hint prior | invent status catalog |
| date | client calendar day | — | invent BE `fromDate` P1 (→ **P2** GAP-MOB-SUP-04) |
| — | — | `rmms_attendance_logs` | demoItems khi BFF OK |

## §D — Map / vẽ

`map: sibling` — segment Bản đồ **navigate** `patrol-map` (`PatrolMapView` / `#sc-patrol-map`). **Không** embed map trên list. Sibling STATUS may be blocked QA — screen native **đã có** → wire nav đủ DoD.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| List load | AttendanceLog[] | appear / Apply / Clear | GET list ± route | cards / EmptyChrome |
| filterRoute | sheet field | user | query `route` | sheet + list |
| filterDate | sheet field | user | client filter | sheet + list |
| Segment map | idx 1 | user | — | push patrol-map · idx→0 |
| Tap card | id | user | — | push supervise-detail |
| GET fail | — | network | error | toast · empty · **cấm** mock list |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «filter sheet live tuyến/ngày · map = sibling push · **cấm** toast filter/map» · edit_page delta · keep prior list DoD |
| Design | update dual prototype: sheet Lọc + map CTA ≠ toast · zone ids `btn-sup-filter` · `sup-segment` · DES-MOB-SUPERVISE |
| SA | giữ GetList proxy · query `route` · date client · Step 4b N/A · optional P2 fromDate |
| Dev iOS + Android | wire toast→sheet · query route · client date · setOpenMap from supervise · dual parity |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.26 |
| generatedAt | 2026-09-12T09:20:00.000Z |
| contentHash | sha256:supervise-mobile-real-filter-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |
