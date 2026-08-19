# Control hint — patrol-home (mobile hub · Tuần đường)

| | |
|---|---|
| feature | `patrol-home` |
| kind | `hub` |
| packKind | `hub` (tab Tuần đường · field tab · **≠** list) |
| changeScope | `new_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` · `DES-MOB-PAT-HOME` |
| ctx | `docs/context/features/patrol-home.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T14:30:00.000Z` |
| thisAction | **Hub Tuần đường** `#sc-patrol-home` only · entry tab field + home quick/tile · **cấm** gộp check-in form / map live |
| taskId | `task_26954659` |

## UI control — `#sc-patrol-home`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| navSync | Icon sync | `LinmTopBar` leading icon | push `patrol-offline` |
| navNotify | Icon bell + badge | `LinmTopBar` trailing icon | toast |
| title | Tuần đường | `LinmLargeTitle` | fixed |
| segPatrol | Segment tab | `LinmSegment` index **0** | this screen |
| segAttendance | Segment tab | `LinmSegment` index **1** | sibling `attendance` toast |
| heroActive | Hero ca | `LinmHeroCard` · `LinmProgress` | GET sessions · demo fallback |
| pinHere | Primary CTA | `LinmPrimaryButton` | toast P1 · GPS P2 |
| kpiStrip | KPI 3 ô | `LinmKpiStrip` | active session fields |
| sectionToday | Section label | `LinmSectionLabel` | — |
| todayRows | List rows | `LinmListRow` + badge | GET `patrol/sessions` |
| sectionQuick | Section label | `LinmSectionLabel` | — |
| quickRows | List rows | `LinmListRow` | sibling toast |
| rowOffline | Lưu trữ + badge | `LinmListRow` | push `patrol-offline` · local count |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Tuần đường | Text | * | demo | large title |
| heroEyebrow | Ca đang chạy · {signal} | Text + signal | * | active session | `LinmNetSignalMark` |
| heroTitle | QL.1 · Km 1556+000 | Text | * | session.route | |
| heroMeta | PAT-* · user · điểm/coverage | Text | * | session | |
| kpiChecked | Đã ghi điểm tuần | KPI value | * | checkInCount | |
| kpiRemaining | Còn lại | KPI value | * | computed/demo | |
| kpiCoverage | Độ phủ | KPI value | * | coveragePercent | |
| today[].code | PAT-* | Text | * | GET sessions | |
| today[].status | Đang tuần / Xong | Badge | * | status | |
| offlineBadge | N | Badge | | local queue count | ẩn khi 0 |

## Tab index (GAP-TAB-01)

| Index | Label | Route |
|-------|-------|-------|
| **0** | Tuần đường | `#sc-patrol-home` (owner) |
| **1** | Chấm công | sibling `attendance` toast |

## Tech factors

| Factor | Hub `patrol-home` | Note |
|--------|-------------------|------|
| GPS | **yes** (P2) | Pin here = toast P1 |
| camera | no | sibling rows |
| offline | hub mở | GET fail → demo SSOT · **cấm** block tab |
| map | no | sibling `patrol-map` |
| token | Keychain / Encrypted | Bearer BFF |

## Hành vi

| Case | UI |
|------|-----|
| Appear | GET `patrol/sessions` · map active «Đang tuần» · fallback demo |
| Tap sync nav | push `#sc-patrol-offline` |
| Tap bell | toast Thông báo · **cấm** alert |
| Segment 1 | toast Chấm công |
| Hero CTA / quick rows | toast tên sibling |
| Row Lưu trữ | push patrol-offline · badge = offline count |
| Home quick/tile Tuần đường | switch tab field |

## UNCLEAR

**none** — API live `patrol/sessions` confirmed CTX `patrol.md`.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **hub** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `patrol-home-bff-endpoints.md` |
| Action tree | `patrol-home-action-tree.md` |
| Next | `/agent-po-mobile` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| generatedAt | 2026-08-19T14:30:00.000Z |
| contentHash | sha256:patrol-home-mobile-hub-20260819 |
| bffContentHash | sha256:patrol-home-mobile-bff-20260819 |
