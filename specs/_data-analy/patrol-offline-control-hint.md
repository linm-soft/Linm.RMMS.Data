# Control hint — patrol-offline (mobile list · Hàng đợi mất sóng)

| | |
|---|---|
| feature | `patrol-offline` |
| kind | `list` |
| packKind | `list` (offline queue · local-first + batch sync) |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| ctx | `docs/context/features/patrol-offline.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T14:00:00.000Z` |
| thisAction | **List Dữ liệu lưu trữ** only · entry Home tile Lưu trữ + Me row + patrol nav · **cấm** invent GET queue API |
| taskId | `task_6e4103ce` |

## UI control — `#sc-patrol-offline`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navBack | Back «Trang Chủ» | `LinmTopBar` chevron | `go('home')` |
| title | Dữ liệu lưu trữ | TopBar title | fixed |
| syncBtn | Text action | TopBar trailing text | POST offline-batch |
| segCheckIn | Segment tab | `LinmSegment` | filter `checkIn` |
| segIncident | Segment tab | `LinmSegment` | filter `incident` |
| offlineBanner | Banner warn | `LinmBanner` warning | weak signal copy |
| cardTitle | Text display | rich card | queue item title |
| cardLocation | Text display | rich card line | route · km |
| cardStatus | Badge warn | status pill | «Chờ gửi» |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | Trang Chủ | BackButton | * | local nav | parent `home` |
| title | Dữ liệu lưu trữ | Text | * | demo | DES-MOB-PAT-OFFLINE |
| syncBtn | Đồng bộ | TextButton | * | tap | POST sync |
| items[].title | Điểm tuần · Km … | Text | * | local store | demo SSOT |
| items[].location | QL.1 · … | Text | * | local | |
| items[].status | Chờ gửi | Badge | * | pending | |

## Tech factors

| Factor | List `patrol-offline` | Note |
|--------|----------------------|------|
| GPS | no | — |
| camera | no | — |
| offline | **yes** owner | local queue · sync when online |
| map | no | — |
| token | Keychain / Encrypted | Bearer BFF proxy |

## Hành vi

| Case | UI |
|------|-----|
| Mở từ Home tile / Me row | Nav push `#sc-patrol-offline` |
| Appear | Load local queue · empty → demo 2 rows SSOT |
| Tap Đồng bộ | POST `integration/sync/offline-batch` · toast «Đã đồng bộ N bản ghi» · clear pending |
| Segment Sự cố | Filter incident rows · empty → toast info |
| Back | pop → Home / Me |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| generatedAt | 2026-08-19T14:00:00.000Z |
| contentHash | sha256:patrol-offline-mobile-list-20260819 |
