# Dev — Implement Android — nghiem-thu

> Status: **done** · task `task_00546351` · 2026-09-19T16:05:00.000Z  
> Agent: `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review`

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | [Mobile] [Tuần đường] → Công tác nghiệm thu |
| Role | `dev` · Android |
| changeScope | `edit_page` · list only |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |

## Delivered

| Zone | Kit / code | Bind |
|------|------------|------|
| Hub `#row-nghiem-thu` | PatrolHome quick `nghiem-thu` | `navigate("nghiem-thu")` |
| `#sc-nghiem-thu` TopBar | `LinmTopBar` + ArrowBack + **Tạo** | create → toast sibling pending |
| Search | `LinmSearchField` | `?search=` debounce 350ms |
| List rows | `LinmListRow` + `LinmStrokeKind.Check` | Code · sub · badge VN |
| Empty / fail | `EmptyChrome` / Snackbar toast | 0 / loadFail |
| API | `NghiemThuRepository` + Retrofit | `patrol/nghiem-thu` + `init-data` |

## Files

- `domain/model/NghiemThuModels.kt` · `repository/NghiemThuRepository.kt` · `usecase/NghiemThuUseCases.kt`
- `data/remote/NghiemThuDto.kt` · `mapper/NghiemThuDtoMapper.kt` · `repository/NghiemThuRepositoryImpl.kt`
- `presentation/feature/nghiemthu/{NghiemThuScreen,ViewModel,UiState}.kt`
- Wire: `ApiService` · `NetworkModule` · `PatrolHome*` · `MainTabScreen` · `LinmCopy`

## Build

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** (retry + heap after OOM) |
| BFF `dotnet build` | PASS · no invent controller |

## Debt / OUT

- create/detail **pending_confirm** → toast only
- Step 4b SKIP · **cấm** ERP.* · demoItems · e2e/start:std

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-19T16:05:00.000Z |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
