# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:45:00.000Z
taskId: task_89061d65
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
autoApprove: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/tai-san/thu-thap
mfeStdRoute: /tai-san/thu-thap
nextRole: qa
e2eQa: queued

## Decisions
- changeScope: edit_page · delta SUBMIT-VALIDATE · cấm new_page typed CRUD
- Pattern B: Lưu always-on except saving · validationAttempted · errBanner string[] name/type/route/km/GPS/photos + inline + scroll
- route: SearchInput ROAD_ROUTE_LOOKUP_CONFIG · no seed · miss `--` · sessions prefill keep
- GPS: validate-on-submit · Lat/Lng RO · deny on click · cấm fake/type-in · cấm lock CTA trước
- photos: local capture keep · GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media
- DES-LEAVE: LeaveConfirmModal · cấm native confirm
- POST: road-assets Source=manual · toast Code · back Hub · mobileApiBase only
- Kind B / ui-schema / filter-bar: WAIVE phone form
- BE Step 4b: no API/entity/migration write · verify build PASS · cấm ERP.*
- Build: MFE yarn build PASS · BE WebService.sln PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub · DES-LEAVE |
| name/type/km/status | fields | Text/Select | required · Pattern B |
| route | tuyến | SearchInput | no seed · miss `--` |
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
- BFF: mobileApiBase only · no new WS/BFF write
- T-01…T-05 done · T-06 qa pending · T-07 review pending
- debt: UNCLEAR-MEDIA-01 · Kind B WAIVE

## UNCLEAR
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · local only · no invent

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile
- be: D:/AI-QLBD/Linm.RMMS.WebService
