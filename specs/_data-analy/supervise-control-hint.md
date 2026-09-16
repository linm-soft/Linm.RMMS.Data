# Control hint — supervise (mobile list · Giám sát)

| | |
|---|---|
| feature | `supervise` |
| kind | `list` |
| packKind | `list` (push screen · rich-card rows · **≠** hub) |
| changeScope | `edit_page` |
| mode | `feature_context` |
| demo | `specs/supervise/ui/prototype/{ios,android}/index.html` `#sc-supervise` · `DES-MOB-SUPERVISE` |
| ctx | `docs/context/features/supervise.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-09-12T09:20:00.000Z` |
| thisAction | **edit** `#sc-supervise` — live filter tuyến/ngày · map → sibling `patrol-map` · **cấm** toast giả lập filter/map |
| taskId | `task_82b70c41` |
| priorTask | `task_ae0b11d0` (cleanup_mock review approve) |

## § Delta Current vs New (edit_page HARD)

| Zone / hành vi | Current (ship) | New (GAP code review 2026-09-12) |
|----------------|----------------|----------------------------------|
| `navFilter` / `btn-sup-filter` | toast «Lọc tuyến · ngày» | **Filter sheet live** — tuyến + ngày · Apply → re-bind list · **cấm** toast giả lập |
| Filter · tuyến | không wire | query GET `route=` (BE live) · clear = bỏ param |
| Filter · ngày | không wire | **client filter** `CheckInAt` theo ngày chọn (BE **không** `fromDate`/`toDate`) · clear = all days in page |
| `segMap` idx 1 | toast «Bản đồ» + reset idx 0 | **push sibling** `PatrolMapView` / `#sc-patrol-map` · reset seg → 0 · **cấm** toast map |
| List / cards / back / detail | live GET · EmptyChrome · tap → detail | **giữ** (no change) |
| Demo HTML filter/map | `onclick` toast | Design update prototype sheet + map CTA (PO/Design keep prior · delta) |

**Keep:** PO/Design/SA prior artifacts · packKind `list` · GET `patrol/attendance-logs` · EmptyChrome live-only.

## UI control — `#sc-supervise`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back Trang Chủ | `LinmTopBar` leading text+icon | pop home stack |
| navTitle | Giám sát tuần đường | `LinmTopBar` title | fixed |
| navFilter | Lọc | `LinmTopBar` trailing text | **open filter sheet** · a11y `btn-sup-filter` |
| filterSheet | Sheet Lọc | Modal / bottom sheet | route field + date picker + Apply / Clear |
| filterRoute | Tuyến | TextField / picker | bind → query `route` |
| filterDate | Ngày | DatePicker | bind → client day filter |
| filterApply | Áp dụng | Primary button | dismiss · reload list |
| filterClear | Xóa lọc | Ghost / text | clear route+date · reload |
| segList | Danh sách check in | `LinmSegment` index **0** | this screen |
| segMap | Bản đồ | `LinmSegment` index **1** | **navigate** sibling `patrol-map` |
| cards | Rich check-in rows | `LinmRichCheckinCard` (feature) | GET attendance-logs ± filters |
| cardTitle | Tên NV | Text display | `UserName` |
| cardOrg | Tổ / đơn vị | Text + building icon | `Note` / org fallback |
| cardLoc | Tuyến · km · địa danh | Text + mappin icon | `Route` + `KmPoint` |
| cardTime | Timestamp | Text muted | `CheckInAt` |
| cardStatus | Trạng thái footer | status strip ok/warn | `Status` mapped |
| cardThumb | Ảnh thumbnail | placeholder gradient | P2 media |
| empty | EmptyChrome | empty title+hint | 0 items after filter / empty tenant |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Giám sát tuần đường | Text | * | demo | nav title |
| segList | Danh sách check in | Segment | * | demo | idx 0 owner |
| segMap | Bản đồ | Segment | * | demo | idx 1 → sibling push |
| filterBtn | Lọc | Text button | * | demo | **sheet** · cấm toast |
| filterRoute | Tuyến | TextField | | user | → `route` query |
| filterDate | Ngày | DatePicker | | user | client `CheckInAt` day |
| items[].userName | Nguyễn Văn A | Text | * | GET logs | card title |
| items[].orgUnit | Tổ tuần đường · VP-IV.1 | Text | | Note / fallback | GAP-MOB-SUP-03 |
| items[].location | QL.1 Km 1556+000 · Xuân Hải | Text | * | Route+KmPoint | |
| items[].time | 2026-08-10 08:40:12 | Text | * | CheckInAt | format local |
| items[].status | Đã ghi điểm tuần | Status strip | * | Status mapped | ok tone |

## Tab index (GAP-TAB-01)

| Index | Label | Route |
|-------|-------|-------|
| **0** | Danh sách check in | `#sc-supervise` (owner) |
| **1** | Bản đồ | sibling `#sc-patrol-map` · **push** (screen đã có native) |

## Tech factors

| Factor | List `supervise` | Note |
|--------|------------------|------|
| GPS | no | map = sibling live screen |
| camera | no | thumb placeholder P1 |
| offline | list mở · EmptyChrome / toast fail | **cấm** demoItems ship |
| map | sibling only | **cấm** embed map on list |
| token | Keychain / Encrypted | Bearer BFF |
| filter | route server + date client | BE date query = **P2** optional |

## Hành vi

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map cards · EmptyChrome nếu 0 |
| Tap back | pop to `#sc-home` / field |
| Tap filter | **open sheet** · prefill current route/date |
| Apply filter | dismiss · GET (±`route`) · client filter date · refresh cards |
| Clear filter | clear state · GET unfiltered page |
| Segment 1 | **push** `patrol-map` · reset idx **0** · **cấm** toast |
| Tap card | push supervise-detail (đã wire) |
| Home tile / patrol quick | push `#sc-supervise` |

## Gaps (this edit)

| ID | Default | Status |
|----|---------|--------|
| GAP-MOB-SUP-01 | Filter sheet live tuyến/ngày | **Must** this task · closes toast fake |
| GAP-MOB-SUP-02 | Map segment → sibling push | **Must** · PatrolMap native exists |
| GAP-MOB-SUP-04 | BE `fromDate`/`toDate` | **P2** — client day filter đủ DoD P1 |
| GAP-MOB-SUP-03 | Org unit on card | keep prior |

## UNCLEAR

**none** — `route` query confirmed `AttendanceLogsController.GetList` · date = client (attendance-day pattern) · `PatrolMapView` wired in AppRouter.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **list** |
| phase_from / phase_to | `data_analy` **done** → `po` (edit delta · keep prior PO base) |
| BFF | `supervise-bff-endpoints.md` |
| Action tree | `supervise-action-tree.md` |
| Real-data | `supervise-real-data.md` |
| Next | `/agent-po-mobile` · changeScope=`edit_page` · DoD filter live + map sibling |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.26 |
| generatedAt | 2026-09-12T09:20:00.000Z |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |
| priorHash | sha256:supervise-mobile-list-20260819 |
