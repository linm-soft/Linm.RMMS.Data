# Dev — Implement — asset (Android)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List `#sc-asset-list` · QA-FIX Appear/fetch |
| Role | `dev` · `/agent-dev-android` · qaFixPhase=implement |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_fa241430` · from `task_7e0b31e2` · qaFailFrom=`task_4ec34586` |
| updatedAt | `2026-09-01T16:15:30.000Z` |

## Summary

QA-FIX GAP-MOB-ASSET-AND-FETCH-01 / GAP-QA-STORE-03: tách Appear khỏi unstable lambda keys. `SideEffect` set handlers · `LaunchedEffect(Unit) { Appear }` — **cấm** `LaunchedEffect(onBack, onOpenDetail)` cancel trước `load()`. Live-only giữ (EmptyChrome / toast · **cấm** demoRows). Dual wire claim: Android rows sau Appear once như peer IncidentList/Ops.

## Notes (qa fix)

| Before | After |
|--------|-------|
| `LaunchedEffect(onBack, onOpenDetail) { set*; Appear }` | `SideEffect { set* }` + `LaunchedEffect(Unit) { Appear }` |
| Emulator 0 GET `road-assets` · EmptyChrome false | Appear once → GET · `#row-asset-0` (re-QA) |
| live-only empty/fail | **unchanged** · EmptyChrome + loadFail toast |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetlist/AssetListScreen.kt` | SideEffect handlers · LaunchedEffect(Unit) Appear |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Search | debounce → GET `search=` · **work** (unchanged) |
| View (row) | navigate detail · **work** (unchanged) |
| Create / Edit / Copy | **N/A** — list P1 |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** |
| Mobile.Bff `dotnet build` | **PASS** |
| Step 4b / e2e / mfeStdUrl | **N/A** / **cấm** Dev · QA re-run |

## Gaps closed (Dev claim)

| ID | Result |
|----|--------|
| GAP-MOB-ASSET-AND-FETCH-01 | **fixed** wire · Appear once |
| GAP-QA-STORE-03 | **fixed** wire · re-QA Maestro |
| GAP-MOB-UX-DUAL-01 | **fixed** wire · dual after Android fetch |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T16:15:30.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-qa-fix-appear-20260901 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| taskId | task_fa241430 |
| qaFixPhase | implement |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
