# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T09:10:00.000Z
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
taskId: task_ed5bbfb2
changeScope: edit_page

## Decisions
- changeScope: edit_page · NEW task · cấm new_page typed CRUD · keep prior PO/Design artifacts
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · AssetCollectPage
- formPattern: Mobile 430 · Pattern B validate · master no demo · /erp-form-context labels
- toolbarExport: N/A (SUBMIT override · no Excel)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/thu-thap · route /tai-san/thu-thap
- codeCurrent: src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobileApiBase() · Asset(+Integration/Patrol) · cấm ERP.* · cấm web-bff
- demo: N/A
- Delta: remove disabled={!canSave} · banner name/type/route/km/GPS/photos · GPS deny on submit click · route→SearchInput+ROAD_ROUTE_LOOKUP_CONFIG no seed · missing→-- · keep capture
- REMOVED still: me* / feedback / cam-view · AI/adjust/list
- labels: useFormOptions() · cấm hardcode VN
- align-mobile-to-mfe: page đã có · no new tab/route/icon · no android/ios prototype
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
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-collect.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
