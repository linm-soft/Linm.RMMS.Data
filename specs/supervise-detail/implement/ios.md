# Dev — Implement — supervise-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`screen`** |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| taskId | `task_1c63dead` |
| updatedAt | `2026-08-31T02:20:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-SUP-DETAIL | **done** | `#sc-supervise-detail` · GET by id · hero+rows+CTA · demo CC-20260810-001 · list toast → push |
| T-BE / T-BFF | **n/a · reuse** | `GET patrol/attendance-logs/{id}` live · proxy catch-all · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · push (không sheet)
- **Entry:** list rich-card `TapItem` → push + `Id` · **supersede** toast-only
- **API:** `GET patrol/attendance-logs/{id}` · `FetchAttendanceLogByIdUseCase` · `SuperviseRepository.fetchById`
- **DTO:** extend `AttendanceLogItemDto` + `code`/`lat`/`lng`/`inZone` · mapper `detail` · Status VN map · org Note fallback
- **Bind:** UserName 28 · Mã · Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng · CTA **Xem trên bản đồ**
- **404** → EmptyChrome · **403** → toast + back · **GET fail** → demo SSOT + toast · screen vẫn mở · **cấm** fake 200
- **Thiếu Id** → toast + back list
- **Router:** nest `showSuperviseDetail` under both Home/Field Supervise · CTA map → gis-map (home/asset-hub path)
- **Copy:** title **Chi tiết check-in** · back **Giám sát** · e2e `btn-sup-detail-back` · `btn-sup-detail-map`

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/SuperviseDetail/*` | NEW screen · VM · UiState |
| `Domain/Entities/SuperviseDetailModels.swift` | NEW · demo SSOT |
| `Domain/UseCases/FetchAttendanceLogByIdUseCase.swift` | NEW |
| `Domain/Repositories/SuperviseRepository.swift` | +`fetchById` |
| `Data/Repositories/SuperviseRepositoryImpl.swift` | +GET by id |
| `Data/Dto/SuperviseDto.swift` | +code/lat/lng/inZone · detail mapper · Status VN |
| `Presentation/Features/Supervise/SuperviseViewModel.swift` | push wire |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `supervise.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| iosContentHash | sha256:supervise-detail-implement-ios-20260831 |
| taskId | `task_1c63dead` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
