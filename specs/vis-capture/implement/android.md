# Dev — Implement Android — vis-capture

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
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
| Screen | `presentation/feature/viscapture/*` · `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` |
| Dual HARD | section **Ảnh hiện trường** + CTA **Bỏ qua** (**GAP-MOB-VIS-DUAL-01**) |
| PhotoRow | still CameraX capture Dialog · `#i-camera` · **không** continuous finder |
| Rows | Loc / Acc / Phân loại / Mức · `LinmListRow` + severity badge |
| CTAs | **Gắn sự cố** Primary · **Bỏ qua** Secondary · pop list |
| Entry | `IncidentListIntent.BannerVis` → `navController.navigate("vis-capture")` |
| Prefill Loc | live-only `FetchPatrolSessionsUseCase` active `.route` · empty/fail → `patrol.empty.active.route` + toast `cam.toast.sessionFail` · **cấm** DEMO_LOC / itemsOrDemo |
| GPS gate | AccuracyM ≤ 30 trước detect · deny → `GpsDenyDialog` |
| Detect / Attach | reuse `DetectAiVisionUseCase` · `CreateIncidentUseCase` · offline Incident |
| Nav | `IncidentStack` route `"vis-capture"` · `MainTab.Incident` |
| Copy | `vis.*` keys dual parity iOS |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| Invent `vis-capture` API | **none** |
| Step 4b Signed detect | **done** BE (shared) |
| BFF | proxy · `dotnet build` PASS |

## Notes (cleanup_mock · `task_4dc20e00`)

- Removed `VisCaptureCopy.DEMO_LOC` · dual parity iOS · live session route only.
- Attach `routeName` = live stamp / detect.routeLabel · **cấm** invent `QL.1`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T06:20:09.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
