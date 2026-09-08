# Handoff compact — data_analy

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T16:20:00.000Z
changeScope: edit_page
taskId: task_5eafb531

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design/SA/Dev artifacts
- Miss = GAP-ITS-MISS-01 reconcile (GPS có TS · frame trống) · **cấm** YOLO class «mất»
- Host infer: Linm.RMMS.Vision
- Upload: FileService `web-bff/api/v1/files/*` · persist file id · resign · **cấm** scaffold API mới
- formPattern: Kind D slideout · Kind F map
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- packKind STATUS: list · featureClass ai
- Demo packet `ai-kd/phat-hien-ts.html` **MISSING** → baseline `ai-vision/ai-asset-detect.html`
- open questions: GAP-DA-DEMO-01 · GAP-AAD-MISS-UI-01 · GAP-AAD-FILE-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | Zone B |
| routeId | Tuyến | SearchInput | road-route |
| assetClass | Loại TS | Dropdown | LOOKUP · no «mất» |
| status | TT | Dropdown | Draft/Confirmed/Dismissed |
| fromDate/toDate | Kỳ | Date | |
| missOnly | Chỉ mất | Checkbox | NEW |
| lat/lng | XY | Number | Point |
| imageFileId | Frame | FileUpload | FileService guid |
| expectedAssetId | TS kỳ vọng | SearchInput | miss flow NEW |
| assetTypeCode | Confirm type | SearchInput | asset-type |

## Screens / zones (ids only)
- Zone A toolbar · B filter · C grid · D pagination · Form slideout · Map overlay
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect

## API / tasks (ids only)
- GET/POST/PUT/DELETE `api/v1/ai-vision/asset-candidates`
- POST `…/detect-assets` · nearby · confirm · dismiss
- files `web-bff/api/v1/files/*` · miss→ `POST /api/v1/incident/incidents`
- real-data §A=yes · §B=yes · §D=map · §E=status lifecycle

## UNCLEAR
- GAP-DA-DEMO-01 demo path packet missing
- GAP-AAD-MISS-UI-01 miss UI surface
- GAP-AAD-FILE-01 ImageUrl→ImageFileId

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-real-data.md
- filter-bar: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-filter-bar.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-asset-detect.md
