# Dev — Implement iOS — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** |
| taskId | `task_e7e16bae` |
| updatedAt | `2026-09-12T13:15:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260912-edit |

## Notes (edit_page delta · T-IOS-PAT-CI-DELTA)

- Plan match vs BE `GET …/plan-points` · nearest + haversine `MatchRadiusM` from `GET patrol/check-in-policy` · **default allow sai điểm** (`RequirePlanPointMatch=false`) · interim session label · **cấm** plan=GPS SSOT.
- PhotoRow → PhotosPicker → FileService `files/init`→PUT→`commit` → `attachmentId[]` on POST · preview local bytes + detail ids · fail → offline queue (**cấm** fake 200).
- **2026-09-16** `/edit-mobile-feature`: GET `patrol/check-in-policy` · allow Lưu sai điểm unless BE `RequirePlanPointMatch`.
- **2026-09-16** `/edit-mobile-feature`: Cách điểm KH / banner / detail **> 1000 m → km** (`DistanceDisplay` · `checkin.dist.km`) · 264384 m → **264.4 km**.
- GPS live · deny modal · leave in-app.
- Zones giữ · kit_skip.

## Shipped

| Area | Path / note |
|------|-------------|
| Sheet + leave + detail | `Presentation/Features/PatrolCheckIn/*` |
| Plan points | `FetchPatrolPlanPointsUseCase` · `PatrolRepository.fetchPlanPoints` |
| File upload | `FileAttachmentRepositoryImpl` · `UploadFileAttachmentUseCase` |
| Submit | `SubmitPatrolCheckInUseCase` · attachment ids |
| DI | `AppContainer` · `AppRouter` |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** (2026-09-16 · dist km) |
| `xcodebuild` iPhone 17 Pro Max | **PASS** (2026-09-16 · dist km) |
| `xcodebuild` iPad Pro 13-inch (M5) | **PASS** (2026-09-16 · dest A4) |
| plan=GPS | **removed** |
| File fake 200 | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T13:15:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
