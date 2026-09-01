# Dev — Implement iOS — vis-capture

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` · cleanup_mock |
| packKind | **`screen`** |
| taskId | `task_4dc20e00` |
| updatedAt | `2026-09-01T06:20:09.000Z` |
| autoApprove | ON |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| realDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |

## Shipped

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/VisCapture/*` · `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` |
| PhotoRow | still `FieldReflectCameraPicker` · `#i-camera` · **không** continuous finder |
| Rows | Loc / Acc / Phân loại / Mức · `LinmListRow` + severity badge map |
| CTAs | **Gắn sự cố** Primary · **Bỏ qua** Secondary · pop list |
| Entry | `incident-list` `.bannerVis` → push (toast stub removed) · `setOnOpenVisCapture` |
| Prefill Loc | live-only `GET patrol/sessions` active `.route` · empty/fail → `patrol.empty.active.route` + toast `cam.toast.sessionFail` · **cấm** demoLoc / itemsOrDemo · Acc vẫn device |
| GPS gate | AccuracyM ≤ 30 trước `POST ai-vision/detect` · deny → `GpsDenyModal` |
| Detect | reuse `DetectAiVisionUseCase` · ImageBase64 + Lat/Lng/AccuracyM · Engine `P1` |
| Attach | reuse `CreateIncidentUseCase` · DetectionId + HasGps · offline `.incident` |
| Skip / Back | local dismiss · **không** API |
| Kit | TopBar / SectionLabel / PhotoRow / ListRow / Badge / Primary / Secondary / Toast |
| DI | `AppRouter` VisCaptureViewModel · reuse AppContainer use cases |
| Copy | `vis.*` keys · toast **Đã gắn sự cố** |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest iPhone 17 Pro | **PASS** |
| Invent `vis-capture` API | **none** |
| Step 4b Signed detect | **done** BE `DetectAsync` · SourceKind=`detect-signed` |
| BFF | proxy catch-all · **n/a** Write · `dotnet build` PASS |

## Notes (cleanup_mock · `task_4dc20e00`)

- Removed `VisCaptureCopy.demoLoc` · UiState default `""` · bootstrap uses live active `route` only.
- Attach `routeName` = live stamp / detect.routeLabel · **cấm** invent `QL.1`.
- HTML demo Loc `QL.1 · Km 1556+050` = prototype SSOT only · **không** seed app.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T06:20:09.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
