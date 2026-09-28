# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:19:21.667Z
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
taskId: task_b44df0c1
changeScope: edit_page
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · keep Live APIs · cấm new_page typed CRUD · cấm invent CollectController/media
- FormMode: Create only · phone ≤430 · Pattern B · N/A Modal/Slideout
- domain: Asset · cite Integration (types/routes) · Patrol (sessions prefill) · cấm ERP.* · cấm web-bff client base
- BFF: Mobile.Bff :5202 · mobileApiBase() · prefix mobile-bff/api/v1
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/thu-thap · route /tai-san/thu-thap
- codeCurrent: src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset (+Integration/Patrol) · no Step 4b / migration / entity mới
- Delta: remove disabled={!canSave} · banner name/type/route/km/GPS/photos · GPS deny on submit · SearchInput+ROAD_ROUTE_LOOKUP_CONFIG no seed · missing→-- · keep capture
- Body POST: Name·Type·Route·KmFrom·KmTo?·Status·Lat·Lng · Source=manual (server) · toast Code · back Hub
- REMOVED: me* / feedback / cam-view · AI/adjust/list · Excel
- open: UNCLEAR-MEDIA-01 (GAP accepted · no invent)
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

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
- BFF: mobileApiBase only · users forward shared (no field on collect)
- API mới / migration / entity: none
- real-data §A+§B: PASS
- T-*: (team_lead · edit tasks — Pattern B · SearchInput · GPS-on-submit)

## UNCLEAR
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/be/solution-discovery.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
