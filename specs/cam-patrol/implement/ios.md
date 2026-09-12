# Dev — Implement iOS — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`cam_patrol_capture_frame` · **GAP-MOB-CAM-FRAME-01/02/03** |
| packKind | **`screen`** |
| taskId | `task_2122aa0b` · TL `task_9068a243` · T-IOS-CAM-FRAME |
| updatedAt | `2026-09-12T11:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |

## Delta this edit (FRAME)

| ID | Done |
|----|------|
| GAP-MOB-CAM-FRAME-01 | Finder `AVCapturePhoto` → JPEG → non-null `DetectAiVisionBody.imageBase64` |
| GAP-MOB-CAM-FRAME-02 | empty/fail capture → toast `cam.toast.detectFail` · `detection=nil` · **cấm** fake class · **không** POST null |
| GAP-MOB-CAM-FRAME-03 | body Engine·Note·ImageBase64·Lat/Lng/AccuracyM parity |

## Shipped paths

| Area | Path |
|------|------|
| Finder + capture | `Presentation/Features/CamPatrol/CamPatrolFinderPreview.swift` · `CamPatrolFrameCapture` |
| ViewModel | `CamPatrolViewModel.swift` · `runDetect` capture-before-POST |
| Keep | screen / GPS / Confirm / Skip / sessions · score ẩn · route_a |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest iPhone 17 Pro | **PASS** |
| Step 4b / invent API | **SKIP** / none |
| mfeStdUrl | — |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T11:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
