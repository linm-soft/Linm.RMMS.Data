# Handoff compact — team_lead

schemaVersion: 1
feature: ai-asset-detect
packKind: list
featureClass: ai
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-06T17:00:00.000Z
changeScope: edit_page
taskId: task_e89cb646
route_confirm: route_a
solution_confirm: approve
design_confirm: approve

## Decisions
- changeScope: edit_page · reopen TL — delta miss/file/filter/leave + full list+ai+map pack
- formPattern: Kind D Slideout · Confirm/Dismiss/Miss Modal · Map Kind F
- mfe: Linm.Web.RMMS.AiVision · be: Linm.RMMS.WebService (cấm ERP.*)
- route_confirm: route_a · `/ai-vision/ai-asset-detect` locked · autoApprove
- GAP-AAD-FILE-01 CLOSED · ImageFileId + FileService · API-12 miss · missOnly · dedupe 25 m
- Gates: tz_required · xco_get_only · share_tenant
- cấm: YOLO «mất» · AI badge header · scaffold files API · ERP.*
- autoApprove: ON · next Dev
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchInput | FilterBar |
| routeId | Tuyến | SearchInput | road-route |
| assetClass | Loại TS | Dropdown | init-data · 8 |
| status | TT | Dropdown | init-data |
| fromDate/toDate | Kỳ | Date | TZ |
| missOnly | Chỉ mất | Checkbox | NEW |
| imageFileId | Frame | FileUpload | L-04 |
| expectedAssetId | TS kỳ vọng | SearchInput | miss |
| missWindowMin | N phút | Number | miss |
| assetTypeCode | Confirm type | SearchInput | asset-type |

## Screens / zones (ids only)
- S-LIST · S-FORM · S-MOD-CONFIRM/DISMISS/MISS · S-MAP · S-FEED · S-LEAVE
- DES-GRID-A…H Z · DES-MAP-F · DES-MOD-MISS · DES-LEAVE · LinErpListFilterBar
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html
- mfeStdUrl=http://localhost:9303/ai-vision/ai-asset-detect
- peerStdUrl=http://localhost:9303/ai-vision

## API / tasks (ids only)
- FormMode↔API: API-01…12 · L-01…05 · files · incidents peer
- T-*: CTX(done) · PERM · MIG · MIG-FILE · SEED · BE-CRUD/INIT/UISCHEMA/AI/CONFIRM/MISS/FILE · BFF · UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP/HIST/FILE/MISS/AI/AI-FORM/MAP · QA-CRUD/FORM/FILTER×2/AI · UD-BUG-15/16
- deps: MIG(+FILE)→BE→BFF→UI-FILTER/LIST→LEAVE/FORM/FILE/MISS/ACT→AI/MAP→QA
- devSlash: list=/agent-dev · detect=/agent-dev-ai-detect · map=/agent-dev-oms-map · resp=/dev-web-responsive
- TZ/XCO/SHARE: tz_required · xco_get_only · share_tenant

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/task/ai-asset-detect.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/design.md
- filter-bar: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/ai-asset-detect-filter-bar.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/STATUS.md
