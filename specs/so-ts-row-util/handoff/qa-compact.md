# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-row-util
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_45252518
generatedAt: 2026-09-02T08:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=ROW_UTIL
mfeStdUrl: http://localhost:9301/so-ts?type=ROW_UTIL
alias: /so-ts-row-util → /so-ts?type=ROW_UTIL
typeCode: ROW_UTIL
dump: tbl_infrastructure_row
prefix: HT-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=cbbf7d91035c7729 · S1=cbbf7d91035c7729 · QA-20=d9872d306e8d3e92
liveAssert: DTM 1280/768/375 · 0 overflowX · S-LOC-RANGE kmTo form · S-ATTR row-util · cols owner/number_post

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data rowUtilWorkTypes/LocatedWithin/ProtectionTypes/SupportTypes/HiringStatuses/CrossSections
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa hang (:9100) → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-RANGE kmFrom+kmTo · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/SL/ĐVT · show type_work/length/number_post/owner · alias Navigate
- prefix HT- · name ← tencongtrinh_htk · LOOKUP rowUtil*

## QA fixes (minimal)
- AssetFormPage: kmTo hiện ROW_UTIL (GAP-ROWUTIL-RANGE-01)
- AssetListPage: column def number_post + owner (GAP-ROWUTIL-GRID-01)

## Debt
GAP-QA-E2E-PW-01 · GAP-ROWUTIL-ROUTE-01 alias only · flatten DEFER · hide-empty runtime DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-row-util/review/findings.md
