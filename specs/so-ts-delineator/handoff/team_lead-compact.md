# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-delineator
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_668f3e73
generatedAt: 2026-09-01T14:55:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=DELINEATOR
mfeStdUrl: http://localhost:9301/so-ts?type=DELINEATOR
alias: /so-ts-delineator → /so-ts?type=DELINEATOR (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: DELINEATOR
dump: tbl_guide_post
gis: coc-tieu
cluster: atgt_point · tile t14
formPattern: Full page CatalogFormShell 5col · S-ATTR 2 nhóm tiêu/H
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/task/so-ts-delineator.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-delineator-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9
po: specs/so-ts-delineator/po/requirement.md
design: specs/so-ts-delineator/ui/design.md · design_confirm=approve
sa: specs/so-ts-delineator/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: DELINEATOR grid · GAP-SOTS-COL-01 · LAYOUT-06 · show name/qty/h_post/installed/tiêu+H dump
- T-UI-FILTER-01: so-ts-delineator-filter-bar.md (create) · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable **2 nhóm** · kmTo ẩn · cấm ép "0" · name≠đoạn · qty←total_number
- T-BE-INIT-01: postTypes[] · guidePostMaterials[] · hGuidePostMaterials[] · GAP-DELIM-TYPE-01
- T-BE-CRUD-01: name/qty/spec import · dumpSpecs P1 · no flatten · GAP-DELIM-NAME/QTY/SPEC
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Attr dump
h_post_type_id · installed_location_id · guide_post_type_id · Dx/R/C/KC/SL · h_guide_post_type_id · h_* · quantity/total_number_* · lat/lng · code

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-delineator/implement/so-ts-delineator.md
