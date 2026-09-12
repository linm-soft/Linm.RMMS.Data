# Dev — Implement iOS — mobile-bff-file

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** |
| taskId | `task_9a7a4656` |
| updatedAt | `2026-09-12T15:56:47.000Z` |
| autoApprove | ON |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| P1 form | `incident-create` |
| mobile_img_kit | **create** dual (autoApprove) |

## Notes (edit_page · T-IOS-01..04)

- Kit `LinmImageUpload` slot-only in `Linm.Mobile.Kit.iOS` — **cấm** URLSession File host trong kit.
- Client: `purpose` param · `GET files/{id}/object` JWT preview (FILE-ATT-09) · **cấm** resign URL.
- P1 `#sc-inc-form` `#inc-photos` → upload purpose=`incident` → `#attachment-bind` → body `{ attachmentId }` · **không** multipart lần 2.
- Keep: `#sheet-checkin` `#ci-photos` PhotoRow · `ai-vision/uploads*` · Step 4b SKIP.
- BFF verify-only — GAP-MOB-BFF-FILE-01 CLOSED.

## Shipped

| Area | Path / note |
|------|-------------|
| Kit | `Linm.Mobile.Kit.iOS/.../LinmImageUpload.swift` |
| File client | `FileAttachmentRepositoryImpl` · purpose + `fetchObject` · `ApiClient.getRaw` |
| Use-case | `UploadFileAttachmentUseCase` purpose default `patrol-checkin` |
| Form P1 | `IncidentCreateView*` · `CreateIncidentBody.attachmentId` |
| Keep check-in | `PatrolCheckInViews` `#ci-photos` |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| BFF `dotnet build` | **PASS** (T-BE-01) |
| Fake attachmentId | **none** |

## Gaps closed

| Gap | Result |
|-----|--------|
| GAP-MOB-FILE-KIT-01 | dual kit |
| GAP-MOB-FILE-CLIENT-01 | purpose + incident bind |
| GAP-MOB-FILE-PREVIEW-01 | GET object JWT |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:56:47.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 rulesVersion=2026.08.25.2 versionGate=rechecked -->
