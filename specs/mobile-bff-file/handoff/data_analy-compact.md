# handoff-compact — data_analy · mobile-bff-file

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| role | `data_analy` |
| slash | `/agent-data-analy-mobile` |
| mode | `feature_context` |
| packKind | `sheet` |
| changeScope | `edit_page` |
| taskId | `task_32aa90dd` |
| status | **PASS** |
| autoApprove | ON |
| generatedAt | `2026-09-12T15:33:17.000Z` |

## DoR

| Gate | Result |
|------|--------|
| control-hint | PASS · `specs/_data-analy/mobile-bff-file-control-hint.md` |
| real-data | PASS · `specs/_data-analy/mobile-bff-file-real-data.md` |
| bff | PASS · `specs/_data-analy/mobile-bff-file-bff-endpoints.md` |
| action-tree | PASS · `specs/_data-analy/mobile-bff-file-action-tree.md` |
| UNCLEAR | none |

## § Delta (edit_page)

| ID | Summary |
|----|---------|
| GAP-MOB-BFF-FILE-01 | **CLOSED** host — NuGet File 1.1.0 + rewrite + skip proxy · CTX/PLAN «thiếu» stale |
| GAP-MOB-FILE-CLIENT-01 | Upload live **patrol-checkin only** · New: purpose param + **1** P1 form `attachmentId` (default incident-create) |
| GAP-MOB-FILE-PREVIEW-01 | New: `GET files/{id}/object` + JWT · **FILE-ATT-09** · cấm resign URL |
| GAP-MOB-FILE-KIT-01 | New: dual `LinmImageUpload` · Ask `mobile_img_kit` lúc integrate · cấm File host trong kit |

## Keep

- BFF wire Current (không re-clone FilesController)
- `ai-vision/uploads*` RMMS P1
- paths `files/init` · `files/{id}/object` · `files/commit`
- Step 4b **SKIP**
- PO/Design dirs **empty** → PO tạo mới (không invent keep)

## Demo / CTX / Code

| | |
|---|---|
| ctx | `docs/context/features/mobile-bff-file.md` |
| bff doc | `Linm.RMMS.Mobile.Bff/docs/init-bff-file.md` |
| ios | `FileAttachmentRepositoryImpl` · `PatrolCheckInViewModel` |
| android | same · `ApiService` files/* |
| demo packet | `Demo/.../ios/index.html` **missing** · host zones check-in / inc-form |

## Next

| Field | Value |
|-------|-------|
| nextRole | `po` · `/agent-po-mobile` |
| note | requirement mới · § Delta · Design prototype+reviewUrl gate |
| e2eQa | queued QA · **cấm** e2e ở data_analy |
| Dev hint | verify `/init-bff-file` · `/integrate-file-upload-mobile` kit+preview+1 form |

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-data-analy-mobile | 2026.08.25.01 | 1 |
