# Dev — Implement Android — mobile-bff-file

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** |
| taskId | `task_9a7a4656` |
| updatedAt | `2026-09-12T15:56:47.000Z` |
| autoApprove | ON |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| P1 form | `incident-create` |
| mobile_img_kit | **create** dual (autoApprove · parity iOS) |

## Notes (edit_page · T-AND-01..04)

- Kit `LinmImageUpload` slot-only in `Linm.Mobile.Kit.Android` — **cấm** Retrofit File host trong kit.
- Client: `purpose` param · `GET files/{id}/object` JWT Streaming · **cấm** resign URL.
- P1 `#sc-inc-form` `#inc-photos` → purpose=`incident` → `#attachment-bind` → body `{ attachmentId }`.
- Keep: `#sheet-checkin` `#ci-photos` · `ai-vision/uploads*` · Step 4b SKIP.

## Shipped

| Area | Path / note |
|------|-------------|
| Kit | `Linm.Mobile.Kit.Android/.../LinmImageUpload.kt` |
| File client | `FileAttachmentRepositoryImpl` · purpose + `fetchObject` · `ApiService.getFileObject` |
| Use-case | `UploadFileAttachmentUseCase` purpose default `patrol-checkin` |
| Form P1 | `IncidentCreate*` · `CreateIncidentBody.attachmentId` |
| Keep check-in | `PatrolCheckInScreen` `ci-photos` |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (T-BE-01) |
| Fake attachmentId | **none** |
| 1-OS only | **no** · dual ship |

## Gaps closed

| Gap | Result |
|-----|--------|
| GAP-MOB-FILE-KIT-01 | dual kit |
| GAP-MOB-FILE-CLIENT-01 | purpose + incident bind |
| GAP-MOB-FILE-PREVIEW-01 | GET object JWT |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:56:47.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 rulesVersion=2026.08.25.2 versionGate=rechecked -->
