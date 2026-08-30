# Dev — Implement iOS — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
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
| Screen | `Presentation/Features/CamPatrol/*` · `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` |
| Finder | `CamPatrolFinderPreview` AVCapture · `DES-MOB-CAM-FINDER` · FOV `#5AC8FA` |
| Entry | hub `cam-patrol` → push (toast stub removed) · `AppRouter` + `PatrolHomeViewModel.setOpenCamPatrol` |
| Detect | `DetectAiVisionUseCase` · `POST ai-vision/detect` · card bind DefectClass · **score ẩn** |
| Confirm | `CreateIncidentUseCase` · `POST incident/incidents` · GPS gate · offline `.incident` |
| Skip | local clear + toast · re-detect |
| GPS deny | `GpsDenyModal` reuse · **cấm** UIAlert |
| Privacy | `NSCameraUsageDescription` · `PrivacyInfo.xcprivacy` camera/location |
| DI | `AppContainer` detect + createIncident |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Score chrome ship | **hidden** (GAP-MOB-CAM-SCORE-01) |
| Invent cam-patrol API | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T21:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
