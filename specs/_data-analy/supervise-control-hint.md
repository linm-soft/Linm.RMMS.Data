# Control hint — supervise (mobile list · Giám sát)

| | |
|---|---|
| feature | `supervise` |
| kind | `list` |
| packKind | `list` (push screen · rich-card rows · **≠** hub) |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-supervise` · `DES-MOB-SUPERVISE` |
| ctx | `docs/context/features/supervise.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T15:00:00.000Z` |
| thisAction | **Giám sát list** `#sc-supervise` only · entry home tile + patrol-home quick · **cấm** gộp map live / checkin detail |
| taskId | `task_e8ad42d2` |

## UI control — `#sc-supervise`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back Trang Chủ | `LinmTopBar` leading text+icon | pop home stack |
| navTitle | Giám sát tuần đường | `LinmTopBar` title | fixed |
| navFilter | Lọc | `LinmTopBar` trailing text | toast filter |
| segList | Danh sách check in | `LinmSegment` index **0** | this screen |
| segMap | Bản đồ | `LinmSegment` index **1** | sibling toast |
| cards | Rich check-in rows | `LinmRichCheckinCard` (feature) | GET attendance-logs |
| cardTitle | Tên NV | Text display | `UserName` |
| cardOrg | Tổ / đơn vị | Text + building icon | demo / `Note` |
| cardLoc | Tuyến · km · địa danh | Text + mappin icon | `Route` + `KmPoint` |
| cardTime | Timestamp | Text muted | `CheckInAt` |
| cardStatus | Trạng thái footer | status strip ok/warn | `Status` mapped |
| cardThumb | Ảnh thumbnail | placeholder gradient | P2 media |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Giám sát tuần đường | Text | * | demo | nav title |
| segList | Danh sách check in | Segment | * | demo | idx 0 owner |
| segMap | Bản đồ | Segment | * | demo | idx 1 toast |
| filterBtn | Lọc | Text button | * | demo | toast «Lọc tuyến · ngày» |
| items[].userName | Nguyễn Văn A | Text | * | GET logs | card title |
| items[].orgUnit | Tổ tuần đường · VP-IV.1 | Text | | demo fallback | GAP-MOB-SUP-03 |
| items[].location | QL.1 Km 1556+000 · Xuân Hải | Text | * | Route+KmPoint | |
| items[].time | 2026-08-10 08:40:12 | Text | * | CheckInAt | format local |
| items[].status | Đã ghi điểm tuần | Status strip | * | Status mapped | ok tone |

## Tab index (GAP-TAB-01)

| Index | Label | Route |
|-------|-------|-------|
| **0** | Danh sách check in | `#sc-supervise` (owner) |
| **1** | Bản đồ | sibling `patrol-map` toast |

## Tech factors

| Factor | List `supervise` | Note |
|--------|------------------|------|
| GPS | no | map = sibling P1 toast |
| camera | no | thumb placeholder P1 |
| offline | **list vẫn mở** | GET fail → demo SSOT |
| map | no | segment 1 toast |
| token | Keychain / Encrypted | Bearer BFF |

## Hành vi

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map cards · fallback demo |
| Tap back | pop to `#sc-home` |
| Tap filter | toast «Lọc tuyến · ngày» |
| Segment 1 | toast «Bản đồ» · reset idx **0** |
| Tap card | toast «Chi tiết check-in» P1 |
| Home tile / patrol quick | push `#sc-supervise` |

## UNCLEAR

**none** — API live `patrol/attendance-logs` confirmed CTX `supervise.md`.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **list** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `supervise-bff-endpoints.md` |
| Action tree | `supervise-action-tree.md` |
| Next | `/agent-po-mobile` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| generatedAt | 2026-08-19T15:00:00.000Z |
| contentHash | sha256:supervise-mobile-list-20260819 |
| bffContentHash | sha256:supervise-mobile-bff-20260819 |
