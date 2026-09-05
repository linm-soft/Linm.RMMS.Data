# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-slope-protect
role: qa
status: confirmed
verdict: PASS
packKind: list
changeScope: new_page
taskId: task_de113e42
generatedAt: 2026-09-02T02:05:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=SLOPE_PROTECT
mfeStdUrl: http://localhost:9301/so-ts?type=SLOPE_PROTECT
alias: /so-ts-slope-protect → /so-ts?type=SLOPE_PROTECT
typeCode: SLOPE_PROTECT
dump: tbl_slope
prefix: MD-
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
e2eQa: ON · PASS
autoApprove: ON
contentHashPrior: sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/qa/scenarios.md
screens: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/qa/screens/
manifest: ok=true · S0/S1/QA-20 PASS · sha S0=d5d414a78ab08b87 · S1=d5d414a78ab08b87 · QA-20=bdbdab4060457d44
liveAssert: DTM 1280/768/375 · 0 overflowX · kmTo form hiện · S-ATTR slope-protect · Dropdown kiểu BV/phân loại/vị trí

## E2E
- docker compose up -d · api:5111 · bff:5201 healthy
- init-data protectionTypes/slopeClassifications/locationOptions
- yarn start:std :9301 · no kill worker (GAP-QA-E2E-KILL-01)
- yarn e2e-qa hang (:9100) → GAP-QA-E2E-PW-01 · channel=chrome contract fallback
- typecheck + yarn build PASS

## T-QA-*
- T-QA-CRUD-01 PASS · T-QA-FORM-01 PASS · T-QA-FILTER-01/02 PASS
- T-QA-TYP-01 / T-QA-TAB-01 PASS
- S-LOC-RANGE kmTo hiện · S-ATTR editable · LeaveConfirm · 0 native dialog Asset
- Grid: hide type/ảnh · show kiểu BV/phân loại/dài BV/cao TB · hide-empty vị trí/địa danh
- prefix MD- · name optional · alias Navigate

## Debt
GAP-QA-E2E-PW-01 · flatten DEFER · Auth DEFER · P0 none

## Cấm
ERP.* · invent api/v1/so-ts/* · phase=done · GAP-PKT-ROLE-01 · kill :9301

## Next
role: review · /agent-review
write: specs/so-ts-slope-protect/review/findings.md
