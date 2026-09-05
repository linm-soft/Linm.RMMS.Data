# handoff-compact — qa → review
schemaVersion: 1
feature: so-ts-rescue-station
role: qa
status: confirmed
packKind: list
changeScope: new_page
taskId: task_6c87f51d
qaFailFrom: task_5d9e0c34
qaFixClosed: task_8de8e1e0
generatedAt: 2026-09-01T09:17:00.000Z
verdict: PASS
e2eQa: ON
route_confirm: route_a
mfeStdRoute: /so-ts?type=RESCUE_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=RESCUE_STATION
alias: /so-ts-rescue-station → /so-ts?type=RESCUE_STATION
typeCode: RESCUE_STATION
prefix: CN-
API: api/v1/asset/road-assets
domain: Asset
runtime: docker :5111/:5201 + start:std :9301
method: _capture.mjs + _live-assert.mjs · channel=chrome · headless
cases: S0=PASS · S1=PASS · QA-20=PASS
liveAssert: PASS · DTM D/T/M no overflowX
screens: qa/screens/S0.png · S1.png · QA-20.png · filter-D/T/M.png
manifest: qa/screens/manifest.json
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/qa/scenarios.md
compact: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/handoff/qa-compact.md

## Gaps closed
GAP-QA-E2E-01 screens filled · GAP-QA-E2E-DOCKER-01 documented (:5111) · GAP-QA-E2E-PW-01 chrome capture
yarn e2e-qa headed hang — fallback capture used (no kill :9301 worker)

## Cấm
phase=done · ERP.* · kill worker node/yarn std

## Next
role: review · /agent-review
write: specs/so-ts-rescue-station/review/findings.md
