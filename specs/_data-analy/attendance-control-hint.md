# Control hint — attendance (mobile · Chấm công)

| | |
|---|---|
| feature | `attendance` |
| kind | `hub` (DES-MOB-ATT · hero check-in + 7-day rows) |
| packKind | `list` (packet) · UI = **hub** `#sc-attendance` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-attendance` · `DES-MOB-ATT` · `specs/attendance/ui/prototype/` |
| ctx | `docs/context/features/attendance.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T20:25:00.000Z` |
| thisAction | **Chấm công** `#sc-attendance` only · entry patrol-home segment · **cấm** gộp supervise list / map live / zone config |
| taskId | `task_9035ee40` |

## § Delta Current vs New (edit_page)

| Area | Current (shipped) | New (this task) |
|------|-------------------|-----------------|
| Surface | Web MFE Kind B list `/patrol/attendance` · native **toast stub** on patrol-home seg idx 1 | Native dual `#sc-attendance` DES-MOB-ATT |
| Entry | MFE route · mobile toast «Chấm công» | Segment **Chấm công** → push `#sc-attendance` |
| Primary CTA | Web Tạo mới Slideout | Hero **Chấm vào** → GPS + `POST patrol/attendance-logs` |
| History | Web catalog grid | Section **7 ngày gần đây** `LinmListRow` |
| Báo cáo | Web Kind E P2 | Toast P1 · API report **MISSING** |
| API | CRUD attendance-logs **DONE** | Reuse GET+POST · Step 4b **N/A** |
| Supervise | Reads same GET for monitor list | **Separate** feature · **cấm** gộp |

## UI control — `#sc-attendance`

| Field / zone | controlHint | Kit (iOS + Android) | Native |
|--------------|-------------|---------------------|--------|
| largeTitle | Chấm công | `LinmLargeTitle` | fixed |
| segPatrol | Tuần đường | `LinmSegment` index **0** | pop → `#sc-patrol-home` |
| segAtt | Chấm công | `LinmSegment` index **1** | this screen owner |
| hero | Chấm công theo định vị | `LinmHeroCard` green | status + GPS meta |
| btnCheckIn | Chấm vào | `LinmHeroAction` white | POST + GPS |
| btnReport | Báo cáo | `LinmHeroAction` ghost | toast P1 |
| section7d | 7 ngày gần đây | `LinmSectionLabel` | |
| dayRows | CN/T7… · time · badge | `LinmListRow` + badge | GET logs → day aggregate · demo fallback |

## Fields

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| title | Chấm công | Text | * | demo | large title |
| heroEyebrow | Chấm công theo định vị | Text | * | demo | |
| heroTitle | Chưa chấm vào / Đã chấm vào | Text | * | state | after POST → Đã chấm |
| heroMeta | Vị trí · Ca · ngày | Text | * | GPS / demo | ± accuracy |
| checkIn | Chấm vào | Button | * | demo | GPS gate |
| report | Báo cáo | Button | * | demo | toast |
| days[].title | CN 10/08 | Text | * | aggregate | weekday + date |
| days[].sub | 07:05 – 16:40 / — | Text | | logs | |
| days[].badge | Đủ công / Nghỉ | Badge | * | status map | green / gray |

## Tab index (GAP-TAB-01)

| Index | Label | Route |
|-------|-------|-------|
| **0** | Tuần đường | sibling pop `#sc-patrol-home` |
| **1** | Chấm công | `#sc-attendance` (owner) |

## Tech factors

| Factor | attendance | Note |
|--------|------------|------|
| GPS | **yes** | Chấm vào · deny → toast settings |
| camera | no | |
| offline | list vẫn mở | GET fail → demo SSOT |
| map | no | |
| biometric | no | |
| token | Keychain / Encrypted | Bearer BFF |

## Hành vi

| Case | UI |
|------|-----|
| Patrol seg idx 1 | push `#sc-attendance` · **cấm** toast-only |
| Appear | GET `patrol/attendance-logs` · build 7-day · fallback demo |
| Tap Chấm vào | GPS → POST body · success toast · refresh hero |
| GPS deny | toast locDeny · **không** POST |
| Tap Báo cáo | toast «Báo cáo công» P1 |
| Segment 0 | pop patrol-home |
| Tap day row | toast «Chi tiết ngày công» P1 |

## UNCLEAR

**none** — API live `patrol/attendance-logs` · mock DES-MOB-ATT confirmed.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `attendance` / **list** (UI hub DES-MOB-ATT) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `attendance-bff-endpoints.md` |
| Action tree | `attendance-action-tree.md` |
| Real-data | `attendance-real-data.md` |
| Next | `/agent-po-mobile` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| generatedAt | 2026-08-19T20:25:00.000Z |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |
