# Dev — Implement — mnt-log (Android)

| Field | Value |
|-------|-------|
| Feature | `mnt-log` |
| Title | [Mobile] [Công việc] -> Nhật ký xử lý |
| Role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `new_page` |
| packKind | **sheet** → surface **screen** `#sc-mnt-log` · **cấm** bottom-sheet |
| taskId | `task_5e1ef0bb` · T-AND-MNT-LOG |
| updatedAt | `2026-09-19T14:00:00.000Z` |

## Summary

Readonly **Nhật ký xử lý** Compose · dual parity iOS (back icon-only) · `mnt-log/{id}` · GetById + client derive · **cấm** invent logs · Step 4b **N/A**. Hash-refresh + A11Y log glyph `contentDescription`.

## Files

| Path | Change |
|------|--------|
| `presentation/feature/mntlog/MntLogScreen.kt` | Screen · zone ids `#wo-header` `#empty` `#wo-status-badge` |
| `presentation/feature/mntlog/MntLogViewModel.kt` | Hilt · Appear / GetWO / derive / toast |
| `presentation/feature/mntlog/MntLogUiState.kt` | Seed · state · intents |
| `domain/usecase/DeriveWorkOrderTimelineUseCase.kt` | same derive map as iOS |
| `presentation/feature/mntlist/MntListScreen.kt` | Log a11y · navigate |
| `presentation/copy/LinmCopy.kt` | `mnt.log.*` + `mnt.log.a11y` |
| `presentation/navigation/MainTabScreen.kt` | WorkStack `mnt-log/{id}` (prior) |

## API / behavior

Parity iOS: missing-id banner · GET fail toast+empty · derive newest-first · Back → mnt-list · readonly · tab **work**.

## VERIFY GATE

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

| Check | Result |
|-------|--------|
| assembleDebug | **PASS** (retry +Xmx6g after OOM) |
| BFF `dotnet build` | **PASS** |
| Step 4b | **N/A** |
| e2e | **SKIP** · queued `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| realDataHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| actionTreeHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| ctxContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| demoContentHash | sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0 |
| taskId | `task_5e1ef0bb` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
