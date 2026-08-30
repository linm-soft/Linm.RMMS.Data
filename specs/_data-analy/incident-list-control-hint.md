# Control hint — incident-list (mobile list · Vấn đề)

| | |
|---|---|
| feature | `incident-list` |
| title | [Mobile] Vấn đề |
| kind | `list` |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-incident-list` · `DES-MOB-INC-LIST` |
| ctx | `docs/context/features/incident-list.md` · domain `incident.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-29T01:30:00.000Z` |
| thisAction | **List Quản lý vấn đề** only · entry home tile + tab `incident` · **cấm** gộp create form / detail / map |
| taskId | `task_246a6ce0` |
| autoApprove | `ON` |
| status | **confirmed** |

**Cấm:** watermark Gói · invent `api/v1/incident-list` · gộp `#sc-inc-form` / `#sc-incident-detail` / `#sheet-incident` · ERP.* · mfeStdUrl · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`incident-list-bff-endpoints.md`](incident-list-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`incident-list-action-tree.md`](incident-list-action-tree.md) | 7 tree + share/reuse |
| [`incident-list-real-data.md`](incident-list-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-INC-LIST-NAV-01 | Home tile / tab Vấn đề → stub / toast | Nav push `#sc-incident-list` «Quản lý vấn đề» · back → Home | home · incident-list |
| GAP-MOB-INC-LIST-01 | Không màn list vấn đề | Rich cards title · type+code · loc · reporter · time · status · thumb · actions | incident-list |
| GAP-MOB-INC-LIST-SEG-01 | — | Segment **Danh sách** / **Bản đồ** → `gis-map` | incident-list · gis-map |
| GAP-MOB-INC-LIST-BANNER-01 | — | Banner **Nhận diện mặt đường** → `vis-capture` | incident-list · vis-capture |
| GAP-MOB-INC-LIST-FAB-01 | — | FAB `#i-plus` → `startIncidentPick()` · owner `incident-create` | incident-list · incident-create |
| GAP-MOB-INC-LIST-DATA-01 | — | GET `incident/incidents` via Mobile.Bff · fail → demo SSOT | incident-list · BFF |
| GAP-MOB-INC-LIST-FILTER-01 | — | Trailing **Lọc** toast «Lọc tuyến · loại · trạng thái» P1 | chrome |

**Không** đổi (OUT pack mobile P1): web Kind F full filter/KPI · assign/close modal web · `#sheet-incident` · `#sc-inc-form` implement · detail CRUD.

**Reuse:** domain Incident · paths `api/v1/incident/incidents*` · FAB create → `incident-create` · Giao việc → `mnt-list`.

## UI control — `#sc-incident-list`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back chevron | `LinmTopBar` leading `#i-chevron-left` | `go('home')` |
| title | Quản lý vấn đề | TopBar title | fixed · `DES-MOB-INC-LIST` |
| navFilter | Lọc | TextButton (iOS) / IconButton `#i-list` (Android) | toast «Lọc tuyến · loại · trạng thái» P1 |
| segList | Danh sách | Segment selected | stay list |
| segMap | Bản đồ | Segment | `go('gis-map')` |
| search | Tìm kiếm vấn đề… | `LinmSearchField` `#i-search` | client filter title/code/route |
| bannerVis | Nhận diện mặt đường | Banner / `LinmListRow` `#i-camera` | `go('vis-capture')` |
| cardTitle | (tên vấn đề) | Rich card title | DTO `Title` |
| cardTypeCode | loại · SC-* | Text subtitle `#i-warning` | `IncidentType` · `Code` |
| cardLoc | tuyến · km · nơi | Text subtitle `#i-mappin` | `RouteName` · `KmStart` · place fallback |
| cardPerson | người · tổ | Text subtitle `#i-person` | `ReporterName` · `AssigneeName` |
| cardTime | datetime | Text caption | `RequestedAt` |
| cardThumb | thumb | Image / placeholder | media **DEFER** · empty OK |
| cardStatus | Trạng thái: … | Status bar warn/ok | `Status` → VN |
| actChat | Trao đổi | IconButton `#i-chat` | toast P1 · sibling `incident-chat` |
| actAssign | Giao việc | IconButton `#i-briefcase` | `go('mnt-list')` |
| actDetail | Chi tiết | IconButton `#i-list` | `go('incident-detail')` |
| actMap | Bản đồ | IconButton `#i-mappin` | `go('gis-map')` |
| fabCreate | Ghi sự cố | FAB `#i-plus` | `startIncidentPick()` · `incident-create` |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | (chevron) | BackButton | * | `go('home')` | parent `home` |
| title | Quản lý vấn đề | Text | * | demo | DES-MOB-INC-LIST |
| navFilter | Lọc | Button | | demo | toast P1 |
| segList | Danh sách | Segment | * | demo | on |
| segMap | Bản đồ | Segment | * | `go('gis-map')` | sibling |
| search | Tìm kiếm vấn đề… | SearchField | | demo | client-side |
| bannerTitle | Nhận diện mặt đường | Text | * | demo | banner |
| bannerSub | Chụp + định vị → gắn sự cố | Text | * | demo | |
| items[].title | Nứt mặt đường / … | Text | * | GET list | |
| items[].typeCode | Sự cố nhanh · SC-2401 | Text | * | type · code | |
| items[].loc | QL.1 Km … · nơi | Text | * | route · km | |
| items[].person | … · tổ | Text | * | reporter | |
| items[].time | yyyy-MM-dd HH:mm:ss | Text | * | requestedAt | |
| items[].statusLabel | Trạng thái: … | Badge/Status | * | status map | |
| empty | (trống) | EmptyChrome | | 0 live + no demo | optional |
| fab | (plus) | FAB | * | create flow | |

### Status VN map (demo SSOT)

| API `Status` (live string) | VN (demo) | chrome |
|----------------------------|-----------|--------|
| `Đợi phân công giám sát` / `Mới` / `new` | Đợi phân công giám sát | warn |
| `Đang được giám sát` / `in_progress` | Đang được giám sát | ok |
| `Đóng` / `closed` | Đã đóng | gray |
| other | raw `Status` | info |

## § Tab index

Shell tab `incident` = entry (`TAB` → `incident-list`) · **segment** trên surface: Danh sách | Bản đồ (`GAP-TAB-01` = segment có · không invent tab thứ 6). `tabs: segment-2` trên list.

## § Demo dual

| # | iOS `#sc-incident-list` | Android `#sc-incident-list` | `#i-*` |
|---|-------------------------|-----------------------------|--------|
| Back | chevron-left | chevron-left | `#i-chevron-left` |
| Filter | text «Lọc» | icon list | `#i-list` (Android) |
| Seg | Danh sách / Bản đồ | **same** | — |
| Search | Tìm kiếm vấn đề… | **same** | `#i-search` |
| Banner | Nhận diện mặt đường · Chụp + định vị → gắn sự cố | **same** | `#i-camera` |
| Card 1 | Nứt mặt đường · SC-2401 · Đợi phân công giám sát | **same** | warning/mappin/person/chat/briefcase/list |
| Card 2 | Cống tắc · SC-2398 · Đang được giám sát | **same** | same actions |
| FAB | plus · `startIncidentPick()` | **same** | `#i-plus` |

## Kit map

| Demo chrome | Map | Kit dual |
|-------------|-----|----------|
| `.nav-bar` / `.top-bar` | top bar | `LinmTopBar` |
| `.seg` | segment | `LinmSegment` |
| `.search` | search | `LinmSearchField` |
| `.vn-banner` | banner CTA | `LinmListRow` / banner kit |
| `.rich-card` | list card | rich card / `LinmListRow` |
| `.rc-status.warn` / `.ok` | status | status bar / `LinmBadge` |
| `.rc-actions` buttons | icon actions | `LinmIconButton` |
| `.fab` | FAB | `LinmFAB` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | List `incident-list` | Note |
|--------|----------------------|------|
| GPS | no (list) | sibling create / vis-capture / map |
| camera | no (list) | banner → `vis-capture` · FAB → create |
| offline | list vẫn mở | GET fail → demo 2 cards SSOT |
| map | no (list surface) | segment/card → `gis-map` |
| biometric | no | — |
| push | no | — |
| token | Keychain / Encrypted | Bearer BFF proxy |

## Hành vi (không `alert`)

| Case | UI |
|------|-----|
| Mở từ Home tile / tab Vấn đề | Nav push `#sc-incident-list` |
| Load OK | Cards từ BFF |
| Load fail | Demo 2 cards · toast info optional |
| Tap banner | `go('vis-capture')` |
| Tap card / `#i-list` | `go('incident-detail')` |
| Tap `#i-briefcase` | `go('mnt-list')` |
| Tap `#i-mappin` / seg Bản đồ | `go('gis-map')` |
| Tap `#i-chat` | toast «Trao đổi sự cố» |
| Tap Lọc | toast «Lọc tuyến · loại · trạng thái» |
| Search | client filter |
| FAB | `startIncidentPick()` → `incident-create` |
| Back | pop → Home |

## UNCLEAR

| ID | Note |
|----|------|
| GAP-MOB-INC-LIST-PLACE-01 | Demo «Xuân Hải» — DTO **không** PlaceName · bind RouteName+KmStart · place = Description/AssetLabel fallback hoặc omit |
| GAP-MOB-INC-LIST-ORG-01 | Demo «Tổ tuần đường VP-IV.1» — DTO chỉ `ReporterName`/`AssigneeName` · org gắn trong ReporterName hoặc omit |
| GAP-MOB-INC-LIST-THUMB-01 | Thumb media — **DEFER** P1 · empty placeholder OK · SA media Signed nếu cần |

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `incident-list` / **list** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `incident-list-bff-endpoints.md` |
| Action tree | `incident-list-action-tree.md` |
| Real-data | `incident-list-real-data.md` |
| Next | `/agent-po-mobile` · **cấm** start trong task này |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| taskId | `task_246a6ce0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
