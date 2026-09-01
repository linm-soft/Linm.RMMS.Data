# Dev — Implement iOS — field-reflect (edit)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/edit-mobile-feature` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_align_incident_create` |
| packKind | **`screen`** |
| taskId | `task_a6f9a7eb` |
| updatedAt | `2026-09-01T12:10:00.000Z` |
| autoApprove | ON |

## Delta this turn

| Area | Note |
|------|------|
| Pick gate | `#sc-field-pick` · KCHT-32 grid · `FetchAssetTypesUseCase` (+ catalog fallback) |
| Form | `#sc-field-reflect` · asset card · kind · checklist by asset code · PhotoRow · detect/loc · severity select · mô tả · Create/Draft |
| Reuse | `IncidentCreateChecklist` · `IncidentCreateSeverity` · `CreateIncidentUseCase` · **cấm** invent path · **cấm** gộp slug incident-create |
| Entry | hub `field-reflect` giữ |
| DI | `AppRouter` + `fetchAssetTypesUseCase` |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Invent `field-reflect` API | **none** |
| Step 4b | **n/a** · reuse existing endpoints |

## ACTION WORK

| Action | Pair | Work |
|--------|------|------|
| Pick asset | → form | **yes** |
| Create | POST incident | **yes** · GPS gate |
| Draft | offline queue | **yes** |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
