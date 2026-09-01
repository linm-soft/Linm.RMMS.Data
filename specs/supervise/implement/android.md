# Dev — Implement — supervise (Android)

> Status: **done** · `/edit-mobile-feature` · cleanup_mock · `/agent-dev-android`  
> task `task_65931a17` · T-AND-SUPERVISE · parent `mobile-cleanup-mock`

| Feature | `supervise` |
| assembleDebug | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmToast` (via `LoginToastHub`) · `EmptyChrome` · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition |

## Layers

| Presentation | `presentation/feature/supervise/SuperviseScreen.kt` · `SuperviseViewModel.kt` · `SuperviseUiState.kt` · `MainTabScreen` `navigate("supervise")` |
| Domain | `FetchSuperviseCheckinsUseCase` → `FetchSuperviseCheckinsOutcome` · `SuperviseCopy.orgFallback` · `SuperviseCopy.loadFailToast` · **no** `demoItems` |
| Data | `SuperviseRepositoryImpl` · `SuperviseDtoMapper.checkin` · `ApiService.attendanceLogs` · `GET patrol/attendance-logs` |

## Behavior (live-only · **cấm** `SuperviseCopy.demoItems`)

Parity iOS · GET OK empty = EmptyChrome `sup-empty` · GET fail = empty + `supervise.toast.loadFail` · org fallback mapper · **cấm** `AlertDialog` · **cấm** invent kit `LinmRichCheckinCard`.  
E2E tags: `sc-supervise` · `btn-sup-back` · `btn-sup-filter` · `sup-segment` · `sup-empty` · `sup-card-*`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL**.

## Notes

`/edit-mobile-feature` 2026-09-01: **cleanup_mock** · remove demo fallback · dual EmptyChrome + loadFail toast. Step 4b / T-BE **N/A** — reuse attendance-logs · EmptyChrome OK khi tenant rỗng · **cấm** `mfeStdUrl`.

<!-- Version meta: skillId=edit-mobile-feature+agent-dev-android skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_65931a17 -->
