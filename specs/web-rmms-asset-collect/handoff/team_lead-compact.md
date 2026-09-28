# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:25:00.000Z
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
taskId: task_190676f8
changeScope: edit_page
route_confirm: keep
autoApprove: ON

## Decisions
- changeScope: edit_page · replan T-* · baseline new_page T-01…T-07 superseded · cấm new_page typed CRUD
- formPattern: Mobile ≤430 · Pattern B · N/A Modal/Slideout · Create only · Android 1-1
- domain: Asset · cite Integration/Patrol · cấm ERP.* · cấm web-bff
- BFF: Mobile.Bff :5202 · mobileApiBase() · prefix mobile-bff/api/v1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/thu-thap · route /tai-san/thu-thap
- codeCurrent: src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset (+Integration/Patrol) · no Step 4b / migration / entity
- Delta: remove disabled={!canSave} · banner name/type/route/km/GPS/photos · GPS deny on submit · SearchInput+ROAD_ROUTE_LOOKUP_CONFIG no seed · missing→-- · keep capture
- route_confirm: keep existing /tai-san/thu-thap · no new URL/tab/icon
- REMOVED: me* / feedback / cam-view · AI/adjust/list · Excel
- open: UNCLEAR-MEDIA-01 (GAP accepted · no invent)
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| name/type/km/status | fields | Text/Select | required · Pattern B |
| route | tuyến | SearchInput | no seed · -- if missing |
| gpsPin | Lat/Lng RO | Text RO | validate on submit |
| photos | local | PhotoRow | capture · media GAP |
| submit | CTA | Button | disabled={saving} only |
| errBanner | errors | Banner | string[] after attempt |

## Screens / zones (ids only)
- AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10 · errBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/tai-san/thu-thap
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets
- BFF: mobileApiBase only
- API mới / migration / entity: none
- T-01 Pattern B + errBanner + remove canSave
- T-02 SearchInput route no seed
- T-03 GPS-on-submit
- T-04 photos keep + DES-LEAVE
- T-05 POST keep + quality
- T-06 QA · T-07 Review
- devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/task/web-rmms-asset-collect.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/sa-compact.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
