# Handoff compact — dev

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T01:45:00.000Z
taskId: task_14d5a6f8
autoApprove: ON
e2eQa: ON
route_confirm: route_a
contentHashPrior: sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c
changeScope: edit_page

## Decisions
- formPattern: Full page CatalogFormShell 5col · cấm Modal/Slideout/tab
- typeCode: — (shell · ?type= · clusters CTX §3 · out route_master/pavement)
- route_a: /so-ts-type-grid → /so-ts (PreserveSearchNavigate)
- API: reuse api/v1/asset/road-assets · BFF proxy · cấm invent so-ts/* · cấm ERP.*
- typeColumnProfiles shared module · hide-empty · children override
- LinErpListFilterBar · cấm nút Tìm · LeaveConfirmModal
- gap-no-source/CULVERT_X: empty+toast · disable create · cấm seed
- Step 4b / Schema_* : n/a P1 · DEFER P2
- yarnBuild PASS · Asset.Bff/Models PASS · full sln OOM host
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
- mfeStdUrl=http://localhost:9301/so-ts-type-grid
- peerStdUrl=http://localhost:9301/so-ts

## API / tasks (ids only)
- FormMode list/C/E/V/Copy/del ↔ road-assets CRUD + init-data
- T-ROUTE/PROF/FILTER/SEC/FORM/LEAVE/CHILD/DOC = done
- T-BE-VERIFY/MIG = n/a P1
- T-QA-01 pending · e2e queued QA only
- debt: Schema_* P2 · S-* file-split DEFER

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/implement/so-ts-type-grid.md
- prior team_lead compact: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/handoff/team_lead-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
