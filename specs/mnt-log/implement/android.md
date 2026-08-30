# Dev — Implement — mnt-log (Android)

| Field | Value |
|-------|-------|
| Feature | `mnt-log` |
| Title | [Mobile] [Công việc] -> Nhật ký xử lý |
| Role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `new_page` |
| packKind | **sheet** → surface **screen** `#sc-mnt-log` · **cấm** bottom-sheet |
| taskId | `task_3af3ded6` · T-AND-MNT-LOG |
| updatedAt | `2026-08-29T07:45:00.000Z` |

## Summary

Ship readonly **Nhật ký xử lý** Compose screen · dual parity iOS (back = icon-only). Entry mnt-list Log (**done** only) navigate `mnt-log/{id}` thay toast. Same GetById + client derive · **cấm** invent logs API · Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `presentation/feature/mntlog/MntLogScreen.kt` | **NEW** · TopBar · banner · ListRow×3 · SectionLabel · timeline · EmptyChrome |
| `presentation/feature/mntlog/MntLogViewModel.kt` | **NEW** · Hilt · Appear / GetWO / derive / toast |
| `presentation/feature/mntlog/MntLogUiState.kt` | **NEW** · Seed · state · intents |
| `domain/usecase/DeriveWorkOrderTimelineUseCase.kt` | **NEW** · same derive map as iOS |
| `data/remote/MntProgressDto.kt` | extend DTO/domain detail fields |
| `presentation/feature/mntlist/MntListViewModel.kt` | `Log` → `onOpenLog` |
| `presentation/feature/mntlist/MntListScreen.kt` | wire `onOpenLog` |
| `presentation/navigation/MainTabScreen.kt` | WorkStack route `mnt-log/{id}` |
| `presentation/copy/LinmCopy.kt` | VN keys `mnt.log.*` |

## API / behavior

Parity iOS: missing-id banner · GET fail toast+empty · derive newest-first · Back → mnt-list · readonly · shell tab **work**.

## VERIFY GATE

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

| Check | Result |
|-------|--------|
| assembleDebug | **PASS** |
| BFF `dotnet build` | **PASS** (Mobile.Bff · no code change · verify gate) |
| Step 4b | **N/A** |
| e2e | **SKIP** · queued `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-log-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-log-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-log-mobile-action-tree-20260829 |
| ctxContentHash | sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_3af3ded6` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
