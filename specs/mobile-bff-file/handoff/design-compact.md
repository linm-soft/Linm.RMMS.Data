# Handoff compact — design

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| role | `design` |
| slash | `/agent-design-mobile` |
| mode | `feature_context` |
| changeScope | `edit_page` |
| status | **PASS** |
| taskId | `task_f2581175` |
| autoApprove | ON |
| e2eQa | ON — queued QA |
| design_confirm | approve |
| hashSkip | yes |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:50:00.000Z` |

## Decisions
- edit_page · sheet/kit · **none** `#sc-*` mới · tabs none
- GAP-MOB-BFF-FILE-01 **CLOSED** · verify-only
- New: dual `LinmImageUpload` (Ask `mobile_img_kit`) · preview GET `/object` JWT · purpose param · **1** P1 form `attachmentId` (default `incident-create`)
- Keep: check-in PhotoRow · `ai-vision/uploads*` · Step 4b **SKIP**
- design_confirm **approve** (autoApprove ON)
- phase_to: sa

## Screens / zones (ids only)
- DES-MOB-FILE-KIT `#kit-linm-image-upload`
- DES-MOB-FILE-HOST-CHECKIN `#sheet-checkin` · `#ci-photos`
- DES-MOB-FILE-HOST-INC `#sc-inc-form` · `#inc-photos`
- DES-MOB-FILE-HOST-REFLECT `#sc-field-reflect` (alt TL)
- `#photo-slot` · `#photo-thumb` · `#photo-progress` · `#btn-add` · `#btn-remove` · `#toast-file-fail` · `#attachment-bind`
- **none** `#sc-*` mới · tabs: none

## reviewUrl (paths only)
- `ui/prototype/ios/index.html` (+ `?state=uploading|preview|fail` · `?host=checkin|inc-form`)
- `ui/prototype/android/index.html` (same query)
- full: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-file/ui/prototype/{ios,android}/index.html`

## API / bind (ids only)
- POST `files/init` · PUT `files/{id}/object` · POST `files/commit` · GET `files/{id}/object`
- Gaps Dev: GAP-MOB-FILE-CLIENT-01 · PREVIEW-01 · KIT-01
- skillUi: `/integrate-file-upload-mobile`
- full: `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md`

## VERIFY
- design + ux-analy + html-to-native-map + dual proto + compact + STATUS PASS
- roleOnly=design · cấm yarn build/e2e/start:std · cấm Step 4b · cấm re-scan demo
- next: `/agent-sa-mobile`

## UNCLEAR
- none

## Full paths
- design: `specs/mobile-bff-file/ui/design.md`
- ux-analy: `specs/mobile-bff-file/ui/ux-analy.md`
- html-to-native: `specs/mobile-bff-file/ui/html-to-native-map.md`
- prototype ios/android: `specs/mobile-bff-file/ui/prototype/{ios,android}/index.html`
- control-hint: `specs/_data-analy/mobile-bff-file-control-hint.md`
- real-data: `specs/_data-analy/mobile-bff-file-real-data.md`
- po: `specs/mobile-bff-file/po/requirement.md`
- prior: `specs/mobile-bff-file/handoff/po-compact.md`
- STATUS: `specs/mobile-bff-file/STATUS.md`
