# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-row-util
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_06068f9c
generatedAt: 2026-09-02T04:01:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=ROW_UTIL
mfeStdUrl: http://localhost:9301/so-ts?type=ROW_UTIL
alias: /so-ts-row-util → /so-ts?type=ROW_UTIL (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: ROW_UTIL
dump: tbl_infrastructure_row
prefix: HT- (GIS HT)
cluster: land · t08
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/task/so-ts-row-util.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-row-util-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da
po: specs/so-ts-row-util/po/requirement.md
design: specs/so-ts-row-util/ui/design.md · design_confirm=approve
sa: specs/so-ts-row-util/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name←tencongtrinh_htk · trống OK · cấm IsWeak · protection_tructure typo giữ
- LOOKUP: rowUtilWorkTypes[] · rowUtilLocatedWithin[] · rowUtilProtectionTypes[] · rowUtilSupportTypes[] · rowUtilHiringStatuses[] · rowUtilCrossSections[]
- Range: S-LOC-RANGE · hiện kmFrom+kmTo · optional khi trống · cấm ép "0" · không S-LOC-POINT
- prefix HT- · GIS HT
- dumpSpecLabels đủ HTKT keys · GAP-ROWUTIL-SPEC-01
- peer ROW_UTIL only · land cluster packs riêng

## Dev focus (T-*)
- T-UI-LIST-01: ROW_UTIL profile · GAP-SOTS-COL-01 · hide-empty length/number_post/distance · LAYOUT-06
- T-UI-FILTER-01: so-ts-row-util-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · HT-
- T-BE-INIT-01: rowUtil* LOOKUP arrays · GAP-ROWUTIL-LOOKUP-01
- T-BE-CRUD-01: name←tencongtrinh_htk · HT- · dumpSpecs P1 · GAP-ROWUTIL-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-ROWUTIL-08: alias /so-ts-row-util optional
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-row-util/implement/so-ts-row-util.md
