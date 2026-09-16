# Dev — Implement — mnt-progress (iOS)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `T-IOS-MNT-PROG` |
| status | **done** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | `sheet` → full screen `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` |
| taskId | `task_e4368753` |
| updatedAt | `2026-09-01T05:10:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **cleanup_mock** (`task_e4368753`): live-only · nav seed prefill · GET enrich · fail = toast `mnt.progress.toast.loadFail` · **cấm** `MntProgressCopy.demo*`.
- **GAP-MOB-EDIT-DEMO-01:** removed `applyDemoIfNeeded` · `usedDemoFallback` → `loadFailed` · GPS empty route = accuracy only.

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/MntProgress/` — `MntProgressView` · `MntProgressViewModel` · `MntProgressUiState` · a11y `sc-mnt-progress` |
| Entry wire | `MntListViewModel` `.progress` **thay toast** → `setOnOpenProgress` · `AppRouter` work tab push |
| API / repo | expand `MaintenanceRepository` — `GET …/{id}` · `POST …/progress` · `POST …/complete` · DTOs `MntProgressDto.swift` |
| Use cases | `GetWorkOrderUseCase` · `ProgressWorkOrderUseCase` · `CompleteWorkOrderUseCase` · reuse `GetCurrentLocationUseCase` |
| DI | `AppContainer` + `AppRouter` `MntProgressViewModel` |
| Form | % field + slider · note TextEditor · PhotoRow + `FieldReflectCameraPicker` · GPS ListRow · leave / GPS deny modals |
| Bind | body `{ progressPercent, note? }` · GPS embed → Note · **không** MediaUrl / lat-lng DTO · @100 → complete + pop list |
| Copy | `mnt.progress.*` · status VN = mnt-list map · toast `Đã cập nhật tiến độ · {n}%` |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmTextField` · `LinmPrimaryButton` · `LinmToast` · `GpsDenyModal` |
| Shell | Tab 5 **giữ** · tab **work** · in-screen tabs **none** |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** (no BFF Write · catch-all reuse) |
| Step 4b / new-endpoint | **N/A** · progress+complete live |
| e2e / mfeStdUrl / start:std | **skipped** (role Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:42:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_e4368753` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 versionGate=rechecked -->
