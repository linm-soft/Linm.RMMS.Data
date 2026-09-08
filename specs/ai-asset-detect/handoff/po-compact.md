# Handoff compact — po

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T16:28:00.000Z
changeScope: edit_page
taskId: task_d1c291af

## Decisions
- changeScope: edit_page · Delta = miss reconcile + FileService + Vision host
- formPattern: Kind D Slideout · Confirm/Dismiss/Miss Modal · Map Kind F
- Grid AC: yes · LinErpListFilterBar · lấp hàng rồi wrap · 🔍 mép phải
- Leave: LeaveConfirmModal · cấm native alert/confirm
- packKind: list confirm
- GAP-DA-DEMO-01 CLOSED → demo baseline ai-vision/ai-asset-detect.html
- GAP-AAD-MISS-UI-01 CLOSED P1 → missOnly + toolbar Reconcile + row Mất?
- GAP-AAD-FILE-01 → SA (ImageFileId)
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- hostInfer: Linm.RMMS.Vision · cấm YOLO class «mất»
- autoApprove: ON · next Design
- open questions: GAP-AAD-FILE-01 (SA) · dedupe radius (SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B |
| routeId | Tuyến | SearchInput | road-route |
| assetClass | Loại TS | Dropdown | 8 · no «mất» |
| status | TT | Dropdown | Draft/Confirmed/Dismissed |
| fromDate/toDate | Kỳ | Date | |
| missOnly | Chỉ mất | Checkbox | NEW |
| imageFileId | Frame | FileUpload | FileService guid |
| expectedAssetId | TS kỳ vọng | SearchInput | miss NEW |
| missWindowMin | N phút | Number | miss NEW |
| assetTypeCode | Confirm type | SearchInput | asset-type |

## Screens / zones (ids only)
- S-LIST Full · S-FORM Slideout · S-MOD-CONFIRM/DISMISS/MISS Modal · S-MAP Kind F · S-FEED
- DES-GRID-A…D + filter LinErpListFilterBar · LeaveConfirmModal
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect
- peerStdUrl=http://localhost:9303/ai-vision
- devSlash: list=/agent-dev · detect=/agent-dev-ai-detect · map=/agent-dev-oms-map
- Grid AC=yes · Leave=yes · controlHint cite=yes

## API / tasks (ids only)
- GET/POST/PUT/DELETE api/v1/ai-vision/asset-candidates
- POST …/detect-assets · nearby · confirm · dismiss
- files web-bff/api/v1/files/* · miss→ POST /api/v1/incident/incidents
- real-data §A=yes · §B=yes

## UNCLEAR
- GAP-AAD-FILE-01 migration ImageFileId (SA)
- miss Zone B layout polish (Design)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/handoff/data_analy-compact.md
