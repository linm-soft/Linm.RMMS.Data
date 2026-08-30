# Dev — Implement Android — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** |
| taskId | `task_6a5668cd` |
| updatedAt | `2026-08-28T21:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/campatrol/*` · `#sc-cam-patrol` · dual parity |
| Finder | CameraX `PreviewView` · FOV · stamps · back icon-only |
| Entry | `FieldStack` route `cam-patrol` · hub quick wire |
| Detect / Confirm / Skip | same BFF paths · GPS deny `GpsDenyDialog` · offline `Incident` |
| Privacy | Manifest `CAMERA` · CameraX deps |
| DI | Hilt `IncidentRepository` + AiVision `detect` |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Score chrome ship | **hidden** |
| Invent cam-patrol API | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T21:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
