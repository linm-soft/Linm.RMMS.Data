# Control hint — incident-detail (mobile · Chi tiết vấn đề)

| | |
|---|---|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| kind | `screen` (demo `#sc-incident-detail`) |
| packKind | **`sheet`** (STATUS / queue) · **demo surface** = full screen `#sc-incident-detail` |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-incident-detail` · `DES-MOB-INC-DETAIL` |
| ctx | `docs/context/features/incident-detail.md` · domain `incident.md` · peers `incident-list.md` · `incident-create.md` |
| map | `docs/html-to-native-map.md` · `_form-type-mobile/ACTION-TREE.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-29T02:38:26.000Z` |
| thisAction | **Chi tiết vấn đề** only · entry list card / create toast nav · **cấm** gộp list / create form / `#sheet-incident` / chat |
| taskId | `task_42bb4141` |
| autoApprove | `ON` |
| status | **confirmed** |

**Cấm:** watermark Gói · invent `api/v1/incident-detail` · gộp `#sc-incident-list` / `#sc-inc-form` / `#sheet-incident` · ERP.* · mfeStdUrl · system alert · fake lat/lng · sửa định vị đã lưu · xóa hẳn (OUT feature-guide).

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`incident-detail-bff-endpoints.md`](incident-detail-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`incident-detail-action-tree.md`](incident-detail-action-tree.md) | 7 tree + share/reuse |
| [`incident-detail-real-data.md`](incident-detail-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-INC-DETAIL-NAV-01 | List Chi tiết toast / stub | Nav push `#sc-incident-detail` · back → `incident-list` | incident-detail |
| GAP-MOB-INC-DETAIL-SCR-01 | Không màn chi tiết | Header mã · badge severity×status · rows loại/vị trí/định vị · CTA | screen |
| GAP-MOB-INC-DETAIL-DATA-01 | — | GET `incident/incidents/{id}` via Mobile.Bff · fail → demo SSOT | BFF |
| GAP-MOB-INC-DETAIL-CLOSE-01 | — | «Đóng sự cố» → POST `…/{id}/close` · toast · refresh | CTA |
| GAP-MOB-INC-DETAIL-ASSIGN-01 | — | «Giao việc xử lý» → `estimate` (nav) · **không** gọi assign API trên slug này | CTA |
| GAP-MOB-INC-DETAIL-MAP-01 | — | «Xem trên bản đồ» → `gis-map` | CTA |
| GAP-MOB-INC-DETAIL-GPS-01 | — | Demo «Định vị» lat,lng · **DTO không Lat/Lng** — bind Route/Km + `HasGps` · coords = GAP SA | row |
| GAP-MOB-INC-DETAIL-SRC-01 | — | Android row «Nguồn» · iOS thiếu — dual parity Design · bind `DetectionId` / reporter fallback | row |
| GAP-MOB-INC-DETAIL-PACK-01 | — | STATUS packKind=`sheet` vs demo full screen — Design/PO chốt | meta |

**Không** đổi (OUT pack): list Kind F · `#sc-inc-form` · `#sheet-incident` · comment/chat · assign modal web · sửa định vị · DELETE hard.

**Reuse:** domain Incident · paths `api/v1/incident/incidents*` · CTA estimate · gis-map · close same-slug.

## UI control — `#sc-incident-detail`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back → Vấn đề | `LinmTopBar` leading `#i-chevron-left` | `go('incident-list')` |
| title | Chi tiết / Chi tiết sự cố | TopBar title | iOS «Chi tiết» · Android «Chi tiết sự cố» — Design parity |
| codeLabel | Mã | Caption **13** | fixed |
| codeValue | SC-* | Display **≥24 / 28** bold | DTO `Code` |
| badge | severity · status | `LinmBadge` red/warn | `Severity` · `Status` → VN |
| rowType | Loại | ListRow no-icon | `Title` (demo) / `IncidentType` fallback |
| rowLoc | Vị trí ghim tự động | ListRow | `RouteName` · `KmStart` |
| rowGps | Định vị | ListRow | `HasGps` + Route/Km · **cấm** fake lat/lng · GAP coords |
| rowSource | Nguồn | ListRow | Android demo · `DetectionId` / patrol cite · dual GAP |
| btnAssign | Giao việc xử lý | PrimaryButton | `go('estimate')` |
| btnMap | Xem trên bản đồ | SecondaryButton | `go('gis-map')` |
| btnClose | Đóng sự cố | SecondaryButton | POST close · toast |
| toastClose | Đã đóng sự cố | Toast | after Close 200 |
| empty404 | (không tìm thấy) | EmptyChrome | NotFound · back list |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | Vấn đề | BackButton | * | `go('incident-list')` | parent list · Android icon-only OK |
| title | Chi tiết | Text | * | demo | `DES-MOB-INC-DETAIL` |
| codeLabel | Mã | Text | * | demo | caption 13 |
| codeValue | SC-2401 | Text | * | GET by id `Code` | hero |
| badge | Nghiêm trọng · Đang mở | Badge | * | `Severity` · `Status` | map dưới |
| rowType | Loại | Text | * | `Title` ưu tiên · else `IncidentType` | demo = title card |
| rowLoc | Vị trí ghim tự động | Text | * | `RouteName` · `KmStart` | `"{Route} · Km {Km}"` |
| rowGps | Định vị | Text | | `HasGps` · **không** Lat/Lng DTO | demo coords = fallback only |
| rowSource | Nguồn | Text | | Android · `DetectionId` / reporter | dual parity |
| btnAssign | Giao việc xử lý | PrimaryButton | * | nav estimate | **không** POST assign P1 |
| btnMap | Xem trên bản đồ | SecondaryButton | * | nav gis-map | pass id/route nếu có |
| btnClose | Đóng sự cố | SecondaryButton | * | POST close | disable nếu already closed |

### Badge VN map (demo SSOT)

| API `Severity` | API `Status` | Badge demo | chrome |
|----------------|--------------|------------|--------|
| `Nghiêm trọng` / `critical` | open / `new` / `Đang mở` / not closed | Nghiêm trọng · Đang mở | red |
| `Cao` / `high` | `in_progress` / giám sát | Cao · Đang được giám sát | warn/orange |
| any | `closed` / `Đóng` | … · Đã đóng | gray |
| other | other | `{Severity} · {Status raw}` | info |

## § Tab index

`tabs: none` trên surface — demo `data-tab="incident"` (shell tab Vấn đề **giữ**). **Không** segment trên detail (`GAP-TAB-01`). Entry từ list / create — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-incident-detail` | Android `#sc-incident-detail` | `#i-*` |
|---|---------------------------|-------------------------------|--------|
| Back | text «Vấn đề» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Chi tiết | Chi tiết sự cố | — · Design parity |
| Code | SC-2401 · 28 bold | SC-2401 · 24 bold | — |
| Badge | Nghiêm trọng · Đang mở | **same** | badge red |
| Loại | Nứt mặt đường | **same** | — |
| Vị trí | QL.1 · Km 1556+080 | **same** | — |
| Định vị | 10.9620, 106.8518 · ±5 m | **same** | demo only · GAP DTO |
| Nguồn | **thiếu** | Tuần đường PAT-…0014 | dual GAP-MOB-INC-DETAIL-SRC-01 |
| CTA | Giao việc · Bản đồ · Đóng | **same** | — |
| Toast close | Đã đóng sự cố | **same** | — |

**Cấm** invent icon. Chrome top-bar diff (text vs icon-btn) = Design parity — không đổi field bind.

## Kit map

| Demo chrome | Map | Kit dual |
|-------------|-----|----------|
| `.nav-bar` / `.top-bar` | top bar | `LinmTopBar` |
| hero mã + badge | header | Text + `LinmBadge` |
| `.card-group` `.row` | detail rows | `LinmListRow` |
| `.btn-primary` | primary CTA | `LinmPrimaryButton` |
| `.btn-secondary` | secondary | `LinmSecondaryButton` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | Detail P1 | Note |
|--------|-----------|------|
| GPS | **read-only display** | **cấm** sửa định vị · **cấm** fake lat/lng · DTO thiếu Lat/Lng = GAP |
| camera | no | media/ảnh OUT P1 detail |
| offline | open với demo fallback | GET fail → SSOT SC-2401 · close cần online |
| map | no embed | CTA → `gis-map` |
| biometric | no | — |
| push | no | — |
| token | Keychain / Encrypted | Bearer BFF proxy |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Mở từ list card / Chi tiết | Nav push · load GET by `Id` |
| Sau create toast | `go('incident-detail')` · id từ Create response |
| Load OK | Bind code · badge · rows |
| Load 404 | Empty · back list |
| Load fail network | Demo SSOT · toast optional |
| Giao việc xử lý | `go('estimate')` · **không** invent assign form |
| Xem trên bản đồ | `go('gis-map')` |
| Đóng sự cố (open) | POST close · toast «Đã đóng sự cố» · refresh badge |
| Đóng khi đã closed | disable / toast «Đã đóng» · **không** DELETE |
| Sửa định vị / Xóa hẳn | **OUT** feature-guide |

## UNCLEAR

**none** — demo dual + CTX domain + live `IncidentsController` GetById/Close chốt · packKind sheet vs screen = GAP (không UNCLEAR UI) · Lat/Lng = GAP field (không invent).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `incident-detail` / **sheet** (surface screen — GAP-MOB-INC-DETAIL-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `incident-detail-bff-endpoints.md` |
| Action tree | `incident-detail-action-tree.md` |
| Real-data | `incident-detail-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON → chain PO (không chờ board) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T02:38:26.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| taskId | `task_42bb4141` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
