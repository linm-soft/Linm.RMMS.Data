# Handoff compact — team_lead

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: team_lead
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T01:20:00.000Z
taskId: task_809d8bd7
autoApprove: ON
e2eQa: ON
route_confirm: route_a
contentHashPrior: sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c
changeScope: edit_page

## Decisions
- formPattern: Full page CatalogFormShell 5col · cấm Modal/Slideout/tab
- typeCode: — (shell · ?type= · clusters CTX §3 · out route_master/pavement)
- route_a: /so-ts-type-grid → /so-ts
- API: reuse api/v1/asset/road-assets · BFF proxy · cấm invent so-ts/* · cấm ERP.*
- dumpSpecs JSON P1 · Schema_* DEFER P2 · Step 4b n/a
- typeColumnProfiles shared · children override · hide-empty
- LinErpListFilterBar · cấm nút Tìm · LeaveConfirmModal
- gap-no-source/CULVERT_X: empty+toast · cấm seed
- gates: tz_na · xco_get_only · share_tenant
- be_repo: Linm.RMMS.WebService · ui_repo: Linm.Web.RMMS.Asset
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter B |
| type | Loại TS | SearchInput | ẩn/?type= |
| route* | 3 tầng | SearchInput | road-route |
| kmFrom/kmTo | Lý trình | Text | POINT ẩn kmTo |
| orgUnit | Đơn vị | SearchInput tree | org-unit |
| code/name/status/source | Định danh | Text/Dropdown | S-META |
| dumpSpecs.* | ATTR | Select/SearchInput/Number/Text | S-ATTR |
| lat/lng/qr/value/note | GPS/hồ sơ | Number/Money/TextArea | S-GPS |

## Screens / zones (ids only)
- DES-GRID-A/B/B-FILTER/C0/C2/C3/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts
- mfeStdUrl=http://localhost:9301/so-ts-type-grid

## API / tasks (ids only)
- FormMode list/C/E/V/Copy/del ↔ road-assets CRUD + init-data
- T-ROUTE-01 · T-PROF-01 · T-FILTER-01 · T-SEC-01 · T-FORM-01 · T-LEAVE-01 · T-CHILD-01 · T-DOC-01
- T-BE-VERIFY/T-BE-MIG = n/a P1
- T-QA-01 pending · e2e queued QA only
- devSlash=/agent-dev

## UNCLEAR
- none

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/task/so-ts-type-grid.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/design.md
- prior sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/handoff/sa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
