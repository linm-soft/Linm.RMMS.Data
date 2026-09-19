# Dev — Implement iOS — nghiem-thu

> Status: **done** · task `task_00546351` · 2026-09-19T16:05:00.000Z  
> Agent: `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review`

| | |
|--|--|
| Feature | `nghiem-thu` |
| Title | [Mobile] [Tuần đường] → Công tác nghiệm thu |
| Role | `dev` · iOS |
| changeScope | `edit_page` · list only |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |

## Delivered

| Zone | Kit / code | Bind |
|------|------------|------|
| Hub `#row-nghiem-thu` | PatrolHome quick `nghiem-thu` | push list |
| `#sc-nghiem-thu` TopBar | `LinmTopBar` title + Back «Tuần đường» + **Tạo** | create → toast sibling pending |
| `DES-MOB-NT-SEARCH` | `LinmSearchField` | `?search=` debounce 350ms |
| List rows | `LinmListRow` + check icon + badge | Code · Template·Route·Km · status VN |
| Empty / fail | `EmptyChrome` / toast | 0 Items / loadFail |
| API | `NghiemThuRepository` | `GET patrol/nghiem-thu` + `init-data` |

## Files

- `Domain/Entities/NghiemThuModels.swift`
- `Domain/Repositories/NghiemThuRepository.swift`
- `Domain/UseCases/NghiemThuUseCases.swift`
- `Data/Dto/NghiemThuDto.swift`
- `Data/Repositories/NghiemThuRepositoryImpl.swift`
- `Presentation/Features/NghiemThu/{NghiemThuView,NghiemThuViewModel}.swift`
- Wire: `AppContainer` · `AppRouter` · `PatrolHome*` · `LinmCopy`

## Build

| Gate | Result |
|------|--------|
| `xcodegen generate` | PASS |
| `xcodebuild` dest **iPhone 17 Pro** (`BEAC907F-…` OS 26.2) | **BUILD SUCCEEDED** |
| BFF `dotnet build` | PASS (no BFF code change · catch-all keep) |

## Debt / OUT

- create/detail siblings **pending_confirm** → toast only · **cấm** implement this turn
- Step 4b / MIG / T-BE: **n/a** (SA approve · Schema_NghiemThu live)
- **cấm** demoItems · ERP.* · mfeStdUrl / start:std

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-19T16:05:00.000Z |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
