# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:12:00.000Z
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
taskId: task_b0013a84
changeScope: edit_page
autoApprove: ON

## Decisions
- changeScope: edit_page · keep prior Design · cấm new_page typed CRUD
- packKind: list · surface=phone form · DES-GRID/Excel=N/A · Form AC=PASS · Grid/Report=N/A
- formPattern: Mobile ≤430 · Pattern B · no ERP Modal/Slideout · useFormOptions / assetCollect.* · cấm hardcode VN
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/thu-thap · route /tai-san/thu-thap
- codeCurrent: src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobileApiBase() · Asset(+Integration/Patrol) · cấm ERP.* · cấm web-bff
- demo: N/A · hash skip · cấm re-scan
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- Delta DoD: remove disabled={!canSave} · banner name/type/route/km/GPS/photos · GPS deny on submit · SearchInput+ROAD_ROUTE_LOOKUP_CONFIG no seed · missing→-- · keep capture
- DoD keep: POST road-assets Source→manual · toast Code · back Hub · photos local GAP
- REMOVED: me* / feedback / cam-view · AI/adjust/list · Excel
- align-mobile-to-mfe: page đã có · no new tab/route/icon · no android/ios
- open: UNCLEAR-MEDIA-01 (GAP accepted · no invent)

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
- AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html (keep · Design reopen)
- peerStdUrl= http://localhost:9301/tai-san/thu-thap
- DES-GRID / toolbar Excel: N/A

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets
- BFF: mobileApiBase only · users forward shared (no field on collect)
- real-data §A+§B: PASS
- T-*: (team_lead · edit tasks)

## UNCLEAR
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-collect.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
