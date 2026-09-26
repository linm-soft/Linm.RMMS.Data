# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:45:00.000Z
taskId: task_43cc2b00
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile full list OFF-00 · phone 430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol · cite Integration offline-batch · cấm ERP.* · cấm invent GET queue
- storeKey: `linm.offline.queue.v1` · S1 seed CARD OK
- FormMode↔API: list=local · sync=POST check-ins · receipt=offline-batch · clear only 2xx
- Incident: P1 filter-only · P2 deferred (UNCLEAR-INCIDENT-REPLAY)
- e2e: S0 guest · S1 staff+seed · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft → `_capture_offline.mjs` + playwright junction
- VERIFY: yarn build PASS · docker + :9301 reuse · **cấm** kill worker
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| queue.list | List local | S1 CARD PASS |
| title/location/status | Text/Badge | «Chờ gửi» |
| segCheckIn/Incident | Segment | S0/S1 PASS |
| syncBtn | Button | `#btn-sync` present |
| guestGate | Empty+CTA | S0 PASS |
| receipt | auto | wired · not forced this smoke |

## Screens / zones (ids only)
- OFF-00 · NAV · SEG · BANNER · CARD · empty · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-offline
- screens= specs/web-rmms-offline/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live sync path: POST patrol/sessions/{id}/check-ins · POST integration/sync/offline-batch
- T-QA-CRUD-01 · T-QA-OFFLINE-01 · T-QA-SEG-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port/playwright soft · UNCLEAR-INCIDENT-REPLAY P2
- UNCLEAR-STORE-KEY resolved

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
