# Dev — Implement — nghiem-thu-create (Android)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `sheet` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_d5b0819a` |
| updatedAt | `2026-09-19T17:00:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-NGHIEM-THU-CREATE | **done** | dual Create sheet · same field/API · leave/GPS/toast |
| T-BE / T-BFF | **n/a · reuse** | live · catch-all · Step 4b SKIP |

## Ship summary

- **Screen** `#sc-nghiem-thu-create` · Material3 dual parity · route `nghiem-thu-create`
- **Entry:** list **Tạo** → `navigate("nghiem-thu-create")`
- **API:** same `GET init-data` · `POST patrol/nghiem-thu` draft · `files/*` max 10
- **Bind / gates:** template sheet · GPS · PhotoRow · AssigneeCode auth · leave Must · **cấm** enqueue
- **Play:** location + camera already declared (w3)

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/nghiemthucreate/*` | NEW Screen + VM + state |
| `domain/model/NghiemThuCreateModels.kt` | NEW body/photo |
| `domain/usecase/NghiemThuUseCases.kt` | +init + create |
| `domain/repository/NghiemThuRepository.kt` | +create |
| `data/repository/NghiemThuRepositoryImpl.kt` | POST |
| `data/remote/ApiService.kt` · `NghiemThuDto.kt` | create endpoint |
| `data/mapper/NghiemThuDtoMapper.kt` | +created |
| `presentation/feature/nghiemthu/*` | wire create |
| `presentation/navigation/MainTabScreen.kt` | route |
| `presentation/copy/LinmCopy.kt` | `nghiemthu.create.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| versionGate | rechecked |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| bffContentHash | sha256:nghiem-thu-create-mobile-bff-20260919 |
| taskId | `task_d5b0819a` |
| dorGate | PASS |


## Notes — MOB-PERM-OS-01 (2026-09-20)

- OS location/camera dialog **trước** GPS read / capture (`LaunchLocationPermissionOnStart` / `rememberAskLocationPermission` · iOS `requestWhenInUseAuthorization` / `requestAccess`).
- GPS deny modal primary **Mở Cài đặt** · secondary **Để sau** · **cấm** Sao chép hướng dẫn / clipboard.
- iOS already-denied camera → `AppSettingsOpener` (không re-prompt). Android camera Don't ask again → app Settings.
- **Resume Settings:** keep deny modal · `ON_RESUME` granted → `RefreshGps`. Still-askable → OS in-app dialog; Don't ask again → Settings.
- Build 2026-09-20: `:app:assembleW3Debug` **PASS**.

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 dorGate=PASS -->
