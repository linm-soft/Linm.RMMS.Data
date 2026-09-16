# Handoff compact — po

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| role | `po` |
| slash | `/agent-po-mobile` |
| mode | `feature_context` |
| changeScope | `edit_page` |
| status | **PASS** |
| taskId | `task_873e65c9` |
| autoApprove | ON |
| e2eQa | ON — queued QA |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:40:00.000Z` |
| contentHashPrior | sha256:mobile-bff-file-control-hint-20260912-delta |

## Decisions
- edit_page · sheet/kit · **không** `#sc-*` mới
- GAP-MOB-BFF-FILE-01 **CLOSED** · verify-only `/init-bff-file`
- New: kit dual `LinmImageUpload` (Ask `mobile_img_kit`) · preview `GET /object` JWT · purpose param · **1** P1 form `attachmentId` (default `incident-create`)
- Keep: check-in PhotoRow shared_action · `ai-vision/uploads*` · Step 4b **SKIP**
- enqueue sibling: **none**
- Design: prototype + reviewUrl **required** (demo packet missing)
- phase_to: design

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photoLabel | Ảnh hiện trường | SectionLabel | host · 13 |
| photoSlot | empty slot | ImageUploadSlot | LinmImageUpload |
| photoThumb | preview | ImageThumb | GET /object JWT / local |
| btnAdd | camera/picker | IconButton | host |
| btnRemove | Xóa | IconButton | kit |
| progress | Đang tải… | ProgressInline | kit |
| toastFail | Không tải được ảnh | Toast | cấm fake id |
| attachmentBind | hidden | HiddenField | form body |
| purpose | meta | — | host slug |

controlHint cite: `specs/_data-analy/mobile-bff-file-control-hint.md`

## Screens / zones (ids only)
- **none** `#sc-*` mới · `tabs: none`
- `#sheet-checkin` PhotoRow · shared_action shipped
- `#sc-inc-form` photos · P1 bind default
- `#sc-field-reflect` · alt TL
- kit `LinmImageUpload`

## Device AC (ids)
- AC-FILE-01..09 · AC-CAM-01 · AC-TAB-01 · AC-TYPO-01
- GPS/Leave: n/a owner · host

## API (ids only)
- POST `files/init` · PUT `files/{id}/object` · POST `files/commit` · GET `files/{id}/object`
- Gaps open Dev: GAP-MOB-FILE-CLIENT-01 · PREVIEW-01 · KIT-01
- skillUi: `/integrate-file-upload-mobile`
- full: `po/requirement.md` · `_data-analy/mobile-bff-file-*.md`

## VERIFY
- requirement + compact + STATUS PASS · roleOnly=po
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm re-scan demo
- next: `/agent-design-mobile`

## UNCLEAR
- none

## Full paths
- requirement: `specs/mobile-bff-file/po/requirement.md`
- control-hint: `specs/_data-analy/mobile-bff-file-control-hint.md`
- real-data: `specs/_data-analy/mobile-bff-file-real-data.md`
- action-tree: `specs/_data-analy/mobile-bff-file-action-tree.md`
- prior: `specs/mobile-bff-file/handoff/data_analy-compact.md`
- STATUS: `specs/mobile-bff-file/STATUS.md`
