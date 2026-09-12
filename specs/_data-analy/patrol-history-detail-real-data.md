# Real-data bind — patrol-history-detail

| | |
|---|---|
| feature | `patrol-history-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol GetById + GetCheckIns |
| changeScope | `edit_page` |
| taskId | `task_dc906824` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | GET `patrol/sessions/{id}` · `PatrolSessionDto` | 404 EmptyChrome | toast · **cấm** fake 200 / OfflineDemo |
| `api` | GET `patrol/sessions/{id}/check-ins` · `PatrolCheckInDto[]` | `[]` → empty timeline OK | toast · timeline `[]` · **cấm** `timelineDemo` |
| `nav` | list/home pass session `Id` | thiếu Id → back + toast | — |
| `derived` | Status VN · date/time format · photo count · MatchOk label | unknown → raw | — |
| `demo` | prototype `#sc-patrol-detail` | **UI ref only** · **không** runtime timeline | — |

## §B — Bind field

| uiField | Label | controlHint | GET / write | write field | sameMobile |
|---------|-------|-------------|-------------|-------------|------------|
| codeHero | Mã phiên | Text | GET session | `Code` | yes |
| badgeStatus | (tt) | Badge | GET session | `Status` + `OfflineQueued` | yes |
| rowUser | Nhân viên | ListRow | GET session | `UserName` | yes |
| rowRoute | Tuyến | ListRow | GET session | `Route` | yes |
| rowType | Loại tuần | ListRow | GET session | `PatrolType` | yes |
| rowPlanDate | Ngày KH | ListRow | GET session | `PlannedDate` | yes |
| rowStarted | Bắt đầu | ListRow | GET session | `StartedAt` | yes |
| rowCoverage | Độ phủ | ListRow | GET session | `CoveragePercent` | yes |
| tlItem | Điểm tuần | TimelineRow | GET check-ins | map DTO → row | yes |
| tlEmpty | (empty) | Empty | GET check-ins `[]` | — | yes |
| btnMap | Mở bản đồ ca | Primary | nav | pass session `Id` | yes |
| btnEnd | Kết thúc ca | Secondary | toast P1 | — | yes |
| tlTap | Xem | tap | nav CI-DETAIL | pass check-in `Id` | yes |

§B **khớp** BFF table — **không** invent `patrol-history-detail` path.

### Display rules — timeline (NEW)

| Line | Rule |
|------|------|
| title | `PlanPointLabel` raw |
| subtitle route | `Route` raw |
| time | `CreatedAt` → `HH:mm` local |
| match | `MatchOk=true` → «định vị đạt» · else «định vị chưa đạt» |
| photo | `PhotoLocalIds.count` > 0 → «Ảnh ×{n}» |
| distance | optional `DistanceToPlanM` → `~{n} m` khi useful |
| canOpen | luôn true khi có `Id` (done check-in) |
| empty | không row · copy empty · **cấm** 3 demo rows |
| **cấm** | `PatrolHistoryDetailCopy.timelineDemo` / Android `timelineDemo` gán state |

### Session display (không đổi)

code · badge map · user · route · type · plan `dd/MM/yyyy` · started `HH:mm`+(UTC+7) · coverage `{n}%`.

## §C — Catalog

| catalogKind | Cấm |
|-------------|-----|
| status display | Invent status API |
| timeline | Invent DTO · hardcode demo khi live/empty |
| plan-points | Bind plan-points vào timeline P1 |

## §D — Map

`map: none` embed. CTA nav `patrol-map` + session id.

## §E — Progress

| stateField | Nguồn | API | UI |
|------------|-------|-----|-----|
| Detail load | PatrolSession | GET `…/{id}` | hero + info |
| Timeline load | PatrolCheckIn list | GET `…/{id}/check-ins` | rows / empty |
| Map nav | local | — | `patrol-map` |
| Tap done | local | — | checkin-detail |
| End | toast | — | **OUT** PUT |
| Create CI | — | POST | **OUT** |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD timeline live · empty OK · cấm timelineDemo · tap nav · end toast |
| Design | keep dual proto · Delta note runtime ≠ demo 3-row SSOT |
| SA | confirm GetCheckIns Live · Step 4b N/A · **cấm** ERP.* |
| Dev | dual strip timelineDemo · FetchCheckIns UC · wire tap/map |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| TIMELINE-01 | demo SSOT 3 · no GET | GET check-ins live · empty OK · **cấm** timelineDemo |
| TAP-01 | toast checkin | nav checkin-detail + Id |
| MAP-01 | onOpenMap / verify | nav patrol-map + Id · no toast |
| END-01 | toast | keep toast P1 |
| DATA-01 | GET session | **giữ** |

## § Cấm

- Fake success · invent path · ERP.* · mfeStdUrl  
- Ship hardcode timeline khi BFF live/empty → **GAP-MOB-REAL-02**  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Enqueue POST/PUT từ detail → **GAP-MOB-ACT-07**  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:26:27.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-real-data-20260912-timeline-live |
| taskId | `task_dc906824` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
