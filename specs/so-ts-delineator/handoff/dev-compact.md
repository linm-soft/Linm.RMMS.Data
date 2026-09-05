# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-delineator
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_584278f1
generatedAt: 2026-09-01T15:20:00.000Z
mfeStdRoute: /so-ts?type=DELINEATOR
mfeStdUrl: http://localhost:9301/so-ts?type=DELINEATOR
alias: /so-ts-delineator → Navigate live
API: api/v1/asset/road-assets
domain: Asset
typeCode: DELINEATOR
dump: tbl_guide_post
gis: coc-tieu
cluster: atgt_point · tile t14
formPattern: Full page CatalogFormShell 5col · S-ATTR 2 nhóm tiêu/H
gates: tz_na · xco_get_only · share_tenant
migration: none
build: MFE yarn build PASS · BE dotnet build PASS
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/implement/so-ts-delineator.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-delineator-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html

## Delivered
- T-UI-LIST-01: DELINEATOR grid profile · name/qty/h_post/installed/tiêu+H
- T-UI-FILTER-01: filter-bar.md V1–V5
- T-UI-FORM-01: S-ATTR 2 nhóm editable · kmTo ẩn · qty←total_number
- T-BE-INIT-01: postTypes[] · guidePostMaterials[] · hGuidePostMaterials[] · installedLocations[]
- T-BE-CRUD-01: ResolveDelineatorName · dumpSpecs P1 · GAP-DELIM-NAME/QTY/SPEC
- T-UI-LEAVE-01 / T-UI-HIST-01: shell Modal
- GAP-DELIM-ROUTE-01: alias Navigate

## APIs
- GET/POST/PUT/DELETE /api/v1/asset/road-assets
- GET …/init-data (+ postTypes · guidePostMaterials · hGuidePostMaterials · installedLocations)
- soft DELETE · ui-schema catalogKind road-assets

## Debt
- GAP-DELIM-FLAT-01 DEFER · Auth DEFER · e2e QA only

## Cấm
ERP.* · invent api/v1/so-ts/* · e2e/start:std ở Dev · GAP-PKT-ROLE-01

## Next
role: qa · /agent-qa
write: specs/so-ts-delineator/qa/scenarios.md
