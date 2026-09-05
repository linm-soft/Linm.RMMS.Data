# handoff-compact — dev (qa-fix implement) → qa
schemaVersion: 1
feature: so-ts-rescue-station
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_8de8e1e0
qaFixPhase: implement
qaFailFrom: task_5d9e0c34
planTaskId: task_01b6dc2c
generatedAt: 2026-09-01T09:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RESCUE_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=RESCUE_STATION
alias: /so-ts-rescue-station → /so-ts?type=RESCUE_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
typeCode: RESCUE_STATION
prefix: CN-
build: yarn typecheck PASS · yarn build --parallelism=1 PASS · dotnet build PASS
featureDelta: none (verify+SSOT+peer capture only)
e2eQa: ON (queued /agent-qa* — not run)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/implement/so-ts-rescue-station.md
plan: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/implement/so-ts-rescue-station-qa-fix-plan.md
capture: specs/so-ts-rescue-station/qa/screens/_capture.mjs
liveAssert: specs/so-ts-rescue-station/qa/screens/_live-assert.mjs

## Gaps → QA
GAP-QA-E2E-01 · GAP-QA-E2E-DOCKER-01 (:5111 contract) · GAP-QA-E2E-PW-01 (channel=chrome)
R-QA-01 Dev plan/implement closed

## Debt
yarn build --parallelism=1 · Auth DEFER · flatten P2 · E2E QA only

## Next
role: qa · /agent-qa*
run: _capture.mjs + _live-assert.mjs · scenarios + PNG S0/S1/QA-20 · qa-compact
