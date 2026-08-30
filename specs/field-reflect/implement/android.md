# Dev — Implement Android — field-reflect

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** |
| taskId | `task_fa7f3596` |
| updatedAt | `2026-08-29T05:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:field-reflect-control-hint-20260829 |
| realDataHash | sha256:field-reflect-real-data-20260829 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260829 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `presentation/feature/fieldreflect/*` · `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` |
| Kind pills | `LinmKindPills` Hư/Mất/Hỏng · default Hư |
| PhotoRow | CameraX `ImageCapture` still · `#i-camera` · **không** continuous finder |
| Card | Nhận diện / Mức / Vị trí · `LinmListRow` + badge Warning |
| Checklist | local PAVEMENT `asset-kcht-32` · filter by kind |
| Entry | hub `field-reflect` → navigate (toast stub removed) · `MainTabScreen` + `PatrolHomeViewModel.setOpenFieldReflect` |
| Prefill | `FetchPatrolSessionsUseCase` · empty banner · **cấm** fake ca |
| Detect | `DetectAiVisionUseCase` · ImageBase64 + GPS |
| Create / Draft | `CreateIncidentUseCase` · GPS gate Create · Draft `forceOffline` |
| GPS deny | `GpsDenyDialog` reuse · **cấm** system AlertDialog product |
| Copy | VN parity (`GAP-MOB-ALIGN-01`) · back icon-only |
| DI | Hilt · reuse CamPatrol use cases |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Invent `field-reflect` API | **none** |
| Step 4b / media Signed | **n/a P1** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-29T05:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
