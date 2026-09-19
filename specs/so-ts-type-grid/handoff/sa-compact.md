# Handoff compact — sa

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: sa
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T01:15:00.000Z
taskId: task_38fc194c
autoApprove: ON
e2eQa: ON
solution_confirm: approve
contentHashPrior: sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c
changeScope: edit_page

## Decisions
- formPattern: Full page CatalogFormShell 5col · cấm Modal/Slideout/tab
- typeCode: — (shell · ?type= · clusters CTX §3 · out route_master/pavement)
- API: giữ `api/v1/asset/road-assets` · BFF proxy only · cấm invent `api/v1/so-ts/*` · cấm ERP.*
- entity: RoadAssetEntity · rmms_road_assets · DumpSpecs text
- GAP-SOTS-FORM-01: dumpSpecs JSON P1 · Schema_* flatten DEFER P2 · no migration SA
- GAP-SOTS-DOMAIN-01: add so-ts-type-grid → Asset on DOMAIN-MAP
- GAP-SOTS-API-DOC: cite asset/road-assets · CTX so-ts = alias
- GAP-SOTS-COL-01: typeColumnProfiles shared · children override
- GAP-CULVERT-X-01: empty+toast · cấm seed
- gates: sa_tz_gate=tz_na · sa_xco_gate=xco_get_only · sa_shared_table=share_tenant
- be_repo: Linm.RMMS.WebService · ui_repo: Linm.Web.RMMS.Asset
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | ?search= |
| type | Loại TS | SearchInput | ?type= / body · ẩn/?type= |
| route* | 3 tầng | SearchInput | road-route |
| kmFrom/kmTo | Lý trình | Text | POINT ẩn kmTo |
| orgUnit | Đơn vị | SearchInput tree | ?orgUnit= |
| code/name/status/source | Định danh | Text/Dropdown | S-META scalars |
| dumpSpecs.* | ATTR | Select/SearchInput/Number/Text | DumpSpecs bag |
| lat/lng/qr/value/note | GPS/hồ sơ | Number/Money/TextArea | scalars |

## Screens / zones (ids only)
- DES-GRID-A/B/B-FILTER/C0/C2/C3/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts
- mfeStdUrl=http://localhost:9301/so-ts-type-grid
- alias=/so-ts-type-grid → /so-ts

## API / tasks (ids only)
- FormMode list/create/edit/view/copy/delete ↔ GET list · GET/{id} · POST · PUT · soft DELETE · init-data
- BFF=proxy · entity=rmms_road_assets · RoadAssetCatalogHandler
- T-PROF / T-SEC / T-FORM / T-FILTER / T-DOC / T-CHILD — TL chốt
- BE P1: no new API · no migration
- devSlash=/agent-dev

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-real-data.md
- prior design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
