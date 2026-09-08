# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-so-10
packKind: map
role: team_lead
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T00:48:00.000Z
changeScope: new_page
taskId: task_6564a261
resource: route-strip-maps
formNo: 10
IdCode: SO-
MapGateSlash: /agent-dev-oms-map
route_confirm: route_a
mfeStdRoute: /csdl-so-10
formPattern: Kind B list + Kind D Slideout 2col footer_only + Kind F map host→bar
contentHash: sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a
headerFingerprint: sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope=new_page · packKind=map · secondary list · typed T-SO-10 · cấm detail*/col1–3
- route_confirm=route_a → `/csdl-so-10` + hub `?resource=route-strip-maps`
- mfe Asset · be RMMS.WebService Asset · api/v1/asset/csdl-records · cấm ERP.*
- geom jsonb P1 · PostGIS DEFER · File stripImageUrl fallback empty geom
- Gates: tz_list_and_form · xco_get_only · share_tenant
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter-bar |
| province/status | Tỉnh/TT | Dropdown | LOOKUP_STATIC |
| roadCode | Đường | SearchInput | road-route |
| bookNo/contractor | Số quyển/Thầu | Text | req |
| kmFrom/kmTo | Km | Number | * |
| periodStart/End | Kỳ | Date | TZ |
| geometry | Bình đồ | Map | OMS LineString |
| stripImageUrl | Ảnh BD | File | fallback |
| entries.* | Strip | Number/Dropdown/Text | T-SO-10 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A…H · S-FORM Z1–Z3 · S-ENTRIES · S-MAP · S-MAP-FALLBACK · S-HUB · LeaveConfirm
- mfeStdUrl=http://localhost:9301/csdl-so-10
- peerStdUrl=http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html
- filter-bar=`docs/context/features/csdl-so-10-filter-bar.md`

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy/list/map ↔ GET/POST/PUT/DELETE csdl-records?resource=route-strip-maps
- T-CTX-01 done · T-DM-01 · T-PERM-01 · T-BE-01..05 · T-BE-CRUD/UISCHEMA/INIT/GIS · T-MIG-01 · T-BFF-01
- T-UI-LIST/FILTER/CFG/FORM/ACT/LEAVE/HIST/LKP/FIELD/PROD/UX/RESP
- T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-FE-MAP-02 · T-FE-06 · T-OUT-01
- T-QA-CRUD/FORM/FILTER-01/02/MAP-01
- deps: BE→BFF→LIST/FILTER→FORM→MAP→QA
- devSlash: list/form=`/agent-dev` · map=`/agent-dev-oms-map`

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/task/csdl-so-10.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/STATUS.md
- prior compact: handoff/sa-compact.md · design · po · data_analy

## Next
| Role | Need |
|------|------|
| Dev | Schema_CsdlSo10 · seed · alias page · Slideout · Kind F OMS · filter-bar |
| QA | Grid+Map AC · e2e queued /agent-qa* |

## Cấm (compact)
ERP.* · invent GIS API · detail*/col1–3 only · Cesium · OSM.org · e2e/build/start:std @ TL · Step 4b @ TL · implement product code
