# Dev — Implement — nghiem-thu-create (iOS)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `sheet` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_d5b0819a` |
| updatedAt | `2026-09-19T17:00:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-NGHIEM-THU-CREATE | **done** | Create sheet · init + GPS + files + POST draft · leave/GPS/toast |
| T-BE / T-BFF | **n/a · reuse** | live API + catch-all · **không** Write BFF/BE · Step 4b SKIP |
| Step 4b | **SKIP** | SA/TL |

## Ship summary

- **Screen** `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE` · push from list **Tạo**
- **Entry:** `NghiemThuViewModel.setOnCreate` → `showNghiemThuCreate` (toast stub removed)
- **API:** `GET patrol/nghiem-thu/init-data` · `POST patrol/nghiem-thu` Status=draft · `files/*` MediaIds max 10
- **Bind:** template Select `#sheet-mau` · location GPS+route · PhotoRow · AssigneeCode=auth · InspectedAt=UTC now
- **Toast OK:** `Đã lưu nháp · {Code}` · fail toast · **cấm** alert / enqueue / invent path
- **GPS deny / leave dirty:** in-app modals · PrivacyInfo location+photos already
- **Router / DI:** nest under list · `FetchNghiemThuInitDataUseCase` + `CreateNghiemThuUseCase`

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
| `Presentation/Features/NghiemThuCreate/*` | NEW screen + VM + state |
| `Domain/Entities/NghiemThuCreateModels.swift` | NEW body/photo |
| `Domain/UseCases/NghiemThuUseCases.swift` | +init + create |
| `Domain/Repositories/NghiemThuRepository.swift` | +create |
| `Data/Repositories/NghiemThuRepositoryImpl.swift` | POST create |
| `Data/Dto/NghiemThuDto.swift` | +created mapper |
| `Presentation/Features/NghiemThu/NghiemThuViewModel.swift` | wire create push |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `nghiemthu.create.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
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
- **Resume Settings:** keep deny modal · `scenePhase` / `ON_RESUME` granted → refresh GPS. Android still-askable → OS in-app dialog (Precise / While using); iOS after deny = Settings only.
- Build 2026-09-20: `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** **PASS**.

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 dorGate=PASS -->
