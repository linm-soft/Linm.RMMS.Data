# Control hint — patrol-home (mobile hub · Tuần đường)

| | |
|---|---|
| feature | `patrol-home` |
| kind | `hub` |
| packKind | `hub` (tab Tuần đường · field tab · **≠** list) |
| changeScope | `edit_page` |
| mode | `feature_context` |
| demo | `specs/patrol-home/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` · `DES-MOB-PAT-HOME` |
| ctx | `docs/context/features/patrol-home.md` · `docs/context/features/patrol.md` §3 |
| agent | `agent-data-analy-mobile` |
| at | `2026-09-12T14:53:44.000Z` |
| thisAction | **Hub live session** — mở ca POST · kết ca PUT · hero **chỉ** field BE · **cấm** sample fallback |
| taskId | `task_62615c08` |
| prior | pipeline complete `task_262a3fa6` · cleanup_mock live-only GET |

## § Delta Current vs New (edit_page HARD)

| Zone / behavior | Current (shipped) | New (DoD GAP 2026-09-12) |
|-----------------|-------------------|--------------------------|
| Mở ca | **Không** gọi `POST patrol/sessions` · hub chỉ GET list | CTA **Mở ca** khi không có active → `POST` body Status=`Đang tuần` · StartedAt=now · reload hub |
| Kết ca | Detail `endSession` → **toast only** (`patrol.detail.toast.end`) dual | `PUT patrol/sessions/{id}` Status=`Hoàn thành` (hoặc catalog Xong) · IsActive theo BE · reload · toast success **sau** PUT OK |
| Hero `routeKm` | `activeFromSession`: nếu `route` không chứa `"Km"` → **hardcode** `QL.1 · Km 468+200` | Hiển thị `session.route` raw · trống → `—` / emptyActive copy · **cấm** sample Km |
| Hero `userName` | trống → **hardcode** `Nguyễn Văn A` | `session.userName` · trống → `—` |
| Row subtitle route | `route.isEmpty ? "QL.1"` | trống → `—` · **cấm** QL.1 demo |
| timeLabel | thiếu `startedAt` → `"07:20"` | trống → `—` |
| `demoActive` / `demoToday` | còn trong Copy (siblings) · hub không bind | Hub **cấm** bind · Dev purge leftover path trên hub mapper |
| BFF table prior | GET only · Step 4b N/A | **Reuse** live POST/PUT BE · Mobile.Bff proxy catch-all · Step 4b **N/A** (không endpoint mới) |

**Giữ nguyên (không đụng):** segment · pin-here · KPI strip layout · quick 6 rows · nav sync/notify · sibling toast map/check-in · offline badge local.

## UI control — `#sc-patrol-home`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navSync | Icon sync | `LinmTopBar` leading | push `patrol-offline` |
| navNotify | Icon bell | `LinmTopBar` trailing | toast |
| title | Tuần đường | `LinmLargeTitle` | fixed |
| segPatrol | Segment tab | `LinmSegment` idx **0** | this screen |
| segAttendance | Segment tab | `LinmSegment` idx **1** | sibling `attendance` |
| heroActive | Hero ca | `LinmHeroCard` · `LinmProgress` | GET sessions · **live fields only** |
| btnOpenSession | Primary / hero empty CTA | `LinmPrimaryButton` | `POST patrol/sessions` · id `btn-open-session` |
| pinHere | Primary CTA | `LinmPrimaryButton` | GPS / handoff · id `btn-pin-here` |
| kpiStrip | KPI 3 ô | `LinmKpiStrip` | active session fields |
| sectionToday | Section label | `LinmSectionLabel` | — |
| todayRows | List rows | `LinmListRow` + badge | GET · tap → detail |
| btnEndSession | Detail footer | existing detail CTA | `PUT` · **không** toast-only · (owner wire từ hub flow) |
| sectionQuick | Section label | `LinmSectionLabel` | — |
| quickRows | List rows | `LinmListRow` | sibling · Lưu trữ → offline |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Tuần đường | Text | * | copy | large title |
| heroEyebrow | Ca đang chạy · {signal} | Text + signal | * | active + net | `LinmNetSignalMark` |
| heroTitle | route | Text | * | `session.route` | **cấm** sample Km |
| heroMeta | code · user · điểm/coverage | Text | * | session | user trống → `—` |
| kpiChecked | Đã ghi điểm tuần | KPI | * | checkInCount | |
| kpiRemaining | Còn lại | KPI | * | computed max(0,3−count) P1 | |
| kpiCoverage | Độ phủ | KPI | * | coveragePercent | |
| openBody.userName | Người tuần | hidden/session | * | auth display name | POST |
| openBody.route | Tuyến | text/default | * | last route / picker P1 minimal | POST · **cấm** invent QL.1 nếu user chưa chọn |
| openBody.patrolType | Loại NV | default | * | catalog «Tuần đường» | POST |
| openBody.status | Đang tuần | fixed | * | const | POST |
| openBody.plannedDate | Ngày | date | * | today | POST |
| openBody.startedAt | Bắt đầu | datetime | * | now UTC | POST |
| endBody.status | Hoàn thành | fixed | * | catalog | PUT |
| today[].code | PAT-* | Text | * | GET | |
| today[].status | Đang tuần / Xong | Badge | * | status | |
| offlineBadge | N | Badge | | local queue | ẩn khi 0 |

## Tab index (GAP-TAB-01)

| Index | Label | Route |
|-------|-------|-------|
| **0** | Tuần đường | `#sc-patrol-home` (owner) |
| **1** | Chấm công | sibling `attendance` |

## Tech factors

| Factor | Hub `patrol-home` | Note |
|--------|-------------------|------|
| GPS | yes (pin) | mở/kết ca **không** bắt buộc GPS |
| camera | no | sibling |
| offline | hub mở | GET/POST/PUT fail → toast · empty · **cấm** demo bind |
| map | no | sibling `patrol-map` |
| token | Keychain / Encrypted | Bearer BFF |
| session mutate | **yes** (edit) | POST create · PUT end |

## Hành vi

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions` · map active «Đang tuần» · **không** demo fallback |
| No active | Hero emptyActive + CTA **Mở ca** → POST → reload |
| Has active | Hero live fields · ẩn CTA mở ca |
| Kết ca (detail) | PUT → success toast · pop/reload hub |
| Tap sync | push `#sc-patrol-offline` |
| Tap bell | toast Thông báo |
| Segment 1 | attendance |
| Hero CTA map/check-in | sibling (giữ) |
| Row Lưu trữ | push offline |

## UNCLEAR

**none** — BE `PatrolSessionsController` POST/PUT **Live** · DTO `CreatePatrolSessionRequest` / `UpdatePatrolSessionRequest` · Mobile.Bff proxy catch-all.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **hub** |
| changeScope | `edit_page` |
| phase_from / phase_to | `data_analy` **done** → `po` |
| keep artifacts | PO/Design **giữ** · PO đọc § Delta · Design chỉ nếu CTA mở ca mới |
| BFF | `patrol-home-bff-endpoints.md` |
| Action tree | `patrol-home-action-tree.md` |
| real-data | `patrol-home-real-data.md` |
| Next | `/agent-po-mobile` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| generatedAt | 2026-09-12T14:53:44.000Z |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |
| priorContentHash | sha256:patrol-home-mobile-hub-20260819 |
