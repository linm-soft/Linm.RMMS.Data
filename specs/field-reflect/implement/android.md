# Dev — Implement Android — field-reflect (edit)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/edit-mobile-feature` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_align_incident_create` |
| packKind | **`screen`** |
| taskId | `task_a6f9a7eb` |
| updatedAt | `2026-09-01T12:10:00.000Z` |
| autoApprove | ON |

## Delta this turn

| Area | Note |
|------|------|
| Pick gate | `#sc-field-pick` · KCHT-32 grid · `FetchAssetTypesUseCase` |
| Form | `#sc-field-reflect` · WalletCard · kind · chk by code · CameraX still · severity · desc · Create/Draft |
| Reuse | `IncidentCreateChecklist` · `IncidentCreateSeverity` · same BFF paths · **cấm** gộp slug |
| Entry | hub `field-reflect` giữ |
| DI | Hilt inject `FetchAssetTypesUseCase` |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Invent API | **none** |

## ACTION WORK

| Action | Pair | Work |
|--------|------|------|
| Pick asset | → form | **yes** |
| Create | POST incident | **yes** |
| Draft | offline | **yes** |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
