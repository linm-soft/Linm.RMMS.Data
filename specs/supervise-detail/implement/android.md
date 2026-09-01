# Dev — Implement — supervise-detail (Android)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`screen`** |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| taskId | `task_1c63dead` |
| updatedAt | `2026-08-31T02:20:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-SUP-DETAIL | **done** | `#sc-supervise-detail` · GET by id · hero+rows+CTA · demo CC-20260810-001 · list toast → navigate |
| T-BE / T-BFF | **n/a · reuse** | `GET patrol/attendance-logs/{id}` live · proxy catch-all · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-supervise-detail` · `DES-MOB-SUP-DETAIL` · push (không sheet)
- **Entry:** list `TapItem` → `supervise-detail/{id}` · **supersede** toast-only
- **API:** Retrofit `@GET("patrol/attendance-logs/{id}")` · `FetchAttendanceLogByIdUseCase` · `SuperviseRepository.fetchById`
- **DTO:** extend `AttendanceLogItemDto` + `code`/`lat`/`lng`/`inZone` · mapper `detail` · Status VN · org Note fallback
- **Bind:** UserName **24** · Mã · Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng · CTA **Xem trên bản đồ**
- **404** → EmptyChrome · **403** → toast + back · **GET fail** → demo SSOT + toast · screen vẫn mở
- **Thiếu Id** → toast + back list
- **Router:** Home + Patrol NavHosts · Home CTA → `gis-map` · Patrol CTA → toast nhãn map (stack chưa có gis-map)
- **Copy:** title dual **Chi tiết check-in** · back icon-only · testTag `btn-sup-detail-back` · `btn-sup-detail-map`
- **DI:** Hilt `@HiltViewModel` · repo `@Binds` reuse

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/supervisedetail/*` | NEW Screen · VM · UiState |
| `domain/model/SuperviseModels.kt` | +`SuperviseDetail` · `SuperviseDetailCopy` |
| `domain/usecase/FetchAttendanceLogByIdUseCase.kt` | NEW |
| `domain/repository/SuperviseRepository.kt` | +`fetchById` |
| `data/repository/SuperviseRepositoryImpl.kt` | +GET by id |
| `data/remote/SuperviseDto.kt` · `ApiService.kt` | +fields · `@GET …/{id}` |
| `data/mapper/SuperviseDtoMapper.kt` | +detail · Status VN |
| `presentation/feature/supervise/*` | push wire |
| `presentation/navigation/MainTabScreen.kt` | routes Home+Patrol |
| `presentation/copy/LinmCopy.kt` | `supervise.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| androidContentHash | sha256:supervise-detail-implement-android-20260831 |
| taskId | `task_1c63dead` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
