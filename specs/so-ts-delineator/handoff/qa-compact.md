# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-delineator
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_e51817dc
generatedAt: 2026-09-01T15:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=DELINEATOR
mfeStdUrl: http://localhost:9301/so-ts?type=DELINEATOR
alias: /so-ts-delineator → /so-ts?type=DELINEATOR
typeCode: DELINEATOR
dump: tbl_guide_post
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form ẩn · 2 nhóm tiêu/H

## E2E
- docker compose up -d --build · api:5111 · bff:5201 healthy
- init-data postTypes=5 · guidePostMaterials=6 · hGuidePostMaterials=6 · installedLocations=6
- yarn start:std :9301 · no kill worker
- yarn e2e-qa headed hang → GAP-QA-E2E-PW-01 · channel=chrome contract
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-POINT kmTo ẩn · S-ATTR 2 nhóm · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/kmTo/unit · show h_post/installed/tiêu+H

## Debt
GAP-QA-E2E-PW-01 · GAP-QA-E2E-DOCKER-01 · GAP-DELIM-FLAT-01 DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-delineator/review/findings.md
