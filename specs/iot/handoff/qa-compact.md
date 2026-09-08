# Handoff compact — qa

schemaVersion: 1
feature: iot
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.08.19.04
writtenAt: 2026-09-05T04:50:00.000Z
taskId: task_b2f79652
autoApprove: ON
e2eQa: ON · PASS (chrome channel)
mfeStdUrl: http://localhost:9309/iot
changeScope: new_page
formPattern: Full page · data-form-cols=5
contentHashPrior: sha256:dev-done-iot-devices

## Decisions
- runtime: docker rebuild api/bff · start:std :9309 · **cấm** kill worker
- yarn e2e-qa CLI FAIL (playwright install) → capture channel=chrome PASS
- yarn build PASS · typecheck FAIL → GAP-QA-IOT-TSC-01 P2
- P0: none · next=review · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter PASS |
| status/type | … | Dropdown | init-data PASS |
| routeCode | Tuyến | SearchInput | list PASS · form field only |
| code/name/km | … | IdCode/Text/Number | form PASS |

## Screens / zones (ids only)
- S0/S1 `rmms-iot-list-page` · QA-20 `rmms-iot-form-page`
- PNG: specs/iot/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- sha S0=0c320a59070e30ae · QA-20=249cfdc6f6ec93aa
- liveAssert DTM 1280/768/375 · 0 overflowX · formCols=5

## API / tasks (ids only)
- API `api/v1/iot/devices` · BFF `web-bff/api/v1/iot` · **cấm ERP.***
- T-QA-CRUD-01 · T-QA-FORM-01 · T-QA-FILTER-01/02 · T-QA-TYP/TAB PASS
- debt: GAP-QA-E2E-02 · GAP-QA-IOT-TSC-01 · Auth stub · history BE

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/qa/screens/
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/handoff/dev-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/iot/STATUS.md
