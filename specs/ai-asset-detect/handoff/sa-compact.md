# Handoff compact — sa

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T16:50:00.000Z
changeScope: edit_page
taskId: task_7381f42c
solution_confirm: approve

## Decisions
- changeScope: edit_page · reopen SA · GAP-AAD-FILE-01 + miss + filter keys
- formPattern: Kind D Slideout · Confirm/Dismiss/Miss Modal · Map Kind F
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- hostInfer: Linm.RMMS.Vision · stub detect · cấm YOLO «mất» · cấm invent missing-detect
- GAP-AAD-FILE-01 CLOSED · ImageFileId uuid + FileService resign · ImageUrl legacy only
- miss: API-12 POST /{id}/miss → peer POST /api/v1/incident/incidents · missOnly filter
- dedupe: P1 **25 m** · prod ITS **10 m** (PostGIS DEFER)
- Gates: TZ=tz_required · XCO=xco_get_only · SHARE=share_tenant
- BFF: proxy only ai-vision · files reuse web-bff/api/v1/files/*
- autoApprove: ON · solution_confirm=approve
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | API-01 |
| routeId | Tuyến | SearchInput | L-01 |
| assetClass | Loại TS | Dropdown | init-data · 8 |
| status | TT | Dropdown | init-data |
| fromDate/toDate | Kỳ | Date | TZ |
| missOnly | Chỉ mất | Checkbox | API-01 NEW |
| imageFileId | Frame | FileUpload | L-04 · persist ImageFileId |
| expectedAssetId | TS kỳ vọng | SearchInput | L-03 · miss |
| missWindowMin | N phút | Number | miss |
| assetTypeCode | Confirm type | SearchInput | L-02 |

## Screens / zones (ids only)
- S-LIST · S-FORM · S-MOD-CONFIRM/DISMISS/MISS · S-MAP · S-FEED · S-LEAVE
- filter=LinErpListFilterBar · query keys §2
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect
- peerStdUrl=http://localhost:9303/ai-vision
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: API-01…12 · L-01…05 · files · incidents peer
- Entity: AiVisionAssetCandidateEntity · mig ImageFileId+Miss* · share_tenant
- T-*: list+ai+map · T-UI-FILTER-01 · T-UI-MISS-01 · T-BE-MISS-01 · T-MIG-FILE-01 · T-UI-FILE-01 · T-BE-FILE-01 · T-MIG · T-SEED · T-BFF · T-PERM
- devSlash: /agent-dev · /agent-dev-ai-detect · /agent-dev-oms-map
- TZ/XCO/SHARE: tz_required · xco_get_only · share_tenant

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
