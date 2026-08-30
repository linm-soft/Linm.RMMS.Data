# Dev — Implement iOS — field-reflect

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
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
| Screen | `Presentation/Features/FieldReflect/*` · `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` |
| Kind pills | `LinmKindPills` Hư/Mất/Hỏng · `DES-MOB-FIELD-KIND` · default Hư |
| PhotoRow | still `UIImagePickerController` camera · `#i-camera` · **không** continuous finder |
| Card | Nhận diện / Mức / Vị trí đã chốt · `LinmListRow` + badge |
| Checklist | local PAVEMENT `asset-kcht-32` · filter by kind · **cấm** invent API |
| Entry | hub `field-reflect` → push (toast stub removed) · `AppRouter` + `PatrolHomeViewModel.setOpenFieldReflect` |
| Prefill | `GET patrol/sessions` · empty → banner «Không có ca đang tuần» · **cấm** fake ca |
| Detect | `DetectAiVisionUseCase` · `POST ai-vision/detect` · ImageBase64 + GPS khi có |
| Create | `CreateIncidentUseCase` · `POST incident/incidents` · GPS gate · offline `.incident` |
| Draft | `forceOffline=true` → queue · toast «Đã lưu nháp · Lưu trữ» |
| GPS deny | `GpsDenyModal` reuse · **cấm** UIAlert |
| Kit | TopBar / KindPills / ListRow / Primary / Secondary / Toast |
| DI | reuse `AppContainer` detect + createIncident + sessions + location |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Invent `field-reflect` API | **none** |
| Step 4b / media Signed | **n/a P1** · Detect LIVE · Create không media[] |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-29T05:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
