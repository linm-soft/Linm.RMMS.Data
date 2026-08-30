# Dev — Implement — mnt-progress (Android)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `T-AND-MNT-PROG` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `sheet` → full screen `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` |
| taskId | `task_5ce628cf` |
| updatedAt | `2026-08-29T06:42:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/mntprogress/` — `MntProgressScreen` · `MntProgressViewModel` · `MntProgressUiState` · testTag `sc-mnt-progress` |
| Entry wire | `MntListViewModel.Progress` **thay toast** → `setOnOpenProgress` · `WorkStack` route `mnt-progress/{id}` |
| API / repo | `ApiService` GET by id + progress + complete · expand `MaintenanceRepository` (+ Impl) · `MntProgressDto.kt` |
| Use cases | `GetWorkOrderUseCase` · `ProgressWorkOrderUseCase` · `CompleteWorkOrderUseCase` · reuse `GetCurrentLocationUseCase` |
| Form | % TextField + Slider · note BasicTextField · PhotoRow + TakePicturePreview · GPS ListRow · leave / GpsDenyDialog |
| Bind | body `{ progressPercent, note? }` · GPS embed → Note · MediaUrl DEFER · @100 → complete + pop |
| Copy | `mnt.progress.*` parity iOS · status VN mnt-list map |
| Kit | `LinmTopBar` (icon-only back) · `LinmListRow` · `LinmTextField` · `LinmPrimaryButton` · Toast hub |
| Shell | Tab 5 **giữ** · tab **work** · in-screen tabs **none** |

## VERIFY GATE

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** (no BFF Write · catch-all reuse) |
| Step 4b / new-endpoint | **N/A** · progress+complete live |
| e2e / mfeStdUrl / start:std | **skipped** (role Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
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
| taskId | `task_5ce628cf` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 versionGate=rechecked -->
