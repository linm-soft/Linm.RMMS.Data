# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:20:00.000Z
taskId: task_23e6bed5
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A
changeScope: edit_page

## Decisions
- changeScope: edit_page · keep AC-* zones · reopen prototype · cấm new_page typed CRUD
- formPattern: Mobile ≤430 · Pattern B · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetCollect.* · cấm hardcode VN
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/thu-thap · route /tai-san/thu-thap
- codeCurrent: src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset (+cite Integration/Patrol) · Mobile.Bff :5202 · cấm ERP.* · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta: remove disabled={!canSave} · banner name/type/route/km/GPS/photos · GPS deny on submit · SearchInput+ROAD_ROUTE_LOOKUP_CONFIG no seed · missing→-- · keep capture
- GPS: navigator.geolocation · validate-on-submit · cấm fake / type-in · cấm lock CTA trước
- DES-LEAVE: in-app discard confirm · cấm native confirm
- REMOVED: me* / feedback / cam-view · AI/HITL/adjust/list · Excel
- open: UNCLEAR-MEDIA-01 (GAP accepted · no invent)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets
- BFF: mobileApiBase only
- real-data §A+§B: PASS · T-*: (team_lead · edit) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
