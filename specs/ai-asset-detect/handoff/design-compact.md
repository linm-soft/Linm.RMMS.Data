# Handoff compact — design

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T16:40:00.000Z
changeScope: edit_page
taskId: task_a5f2efac
design_confirm: approve
real_view_parity: v1

## Decisions
- changeScope: edit_page · Delta = miss UI + FileUpload + LinErpListFilterBar + LeaveConfirmModal
- formPattern: Kind D Slideout (2-col footer-only) · Confirm/Dismiss/Miss Modal · Map Kind F
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- hostInfer: Linm.RMMS.Vision · cấm YOLO class «mất»
- GAP-AAD-MISS-UI-01 CLOSED · missOnly + Reconcile mất + row Mất?
- GAP-AAD-FILE-01 → SA (ImageFileId)
- autoApprove: ON · design_confirm=approve
- open questions: GAP-AAD-FILE-01 · dedupe radius (SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B bar |
| routeId | Tuyến | SearchInput | road-route |
| assetClass | Loại TS | Dropdown | 8 · no «mất» |
| status | TT | Dropdown | Draft/Confirmed/Dismissed |
| fromDate/toDate | Kỳ | Date | |
| missOnly | Chỉ mất | Checkbox | NEW |
| imageFileId | Frame | FileUpload | FileService guid |
| expectedAssetId | TS kỳ vọng | SearchInput | miss |
| missWindowMin | N phút | Number | miss |
| assetTypeCode | Confirm type | SearchInput | asset-type |

## Screens / zones (ids only)
- S-LIST · S-FORM · S-MOD-CONFIRM/DISMISS/MISS · S-MAP · S-FEED · S-LEAVE
- DES-GRID-A B FILTER C0–C3 C2a D F H Z · DES-MAP-F · DES-MOD-MISS · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html
- peerStdUrl=http://localhost:9303/ai-vision
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect
- formPattern=Slideout · real_view_parity=v1 · shared_grid_example=v1
- Grid AC=yes · Leave=LeaveConfirmModal · filter=LinErpListFilterBar

## API / tasks (ids only)
- GET/POST/PUT/DELETE api/v1/ai-vision/asset-candidates
- POST …/detect-assets · nearby · confirm · dismiss
- files web-bff/api/v1/files/* · miss→ POST /api/v1/incident/incidents

## UNCLEAR
- GAP-AAD-FILE-01 ImageFileId (SA)
- dedupe 25 vs 10 m (SA)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
