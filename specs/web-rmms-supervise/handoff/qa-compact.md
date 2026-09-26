# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-supervise
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:00:00.000Z
taskId: task_ee050f9b
contentHash: sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-supervise

## Decisions
- changeScope: new_page
- formPattern: Mobile list + RO detail · phone 430 · N/A Modal · no POST P1
- Kind B grid/filter: **WAIVE**
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 reuse (no kill) + docker + `_capture_sup.mjs` S0/S1/QA-20 · LoginSheet
- T-QA-01…03 · T-QA-CRUD-01 · T-QA-GPS-01 **PASS** · T-QA-FILTER **WAIVE**
- stock e2e soft FAIL DUP/new · capture distinct hashes
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| filterRoute/day | filter sheet | Select/Date | S1 live routes |
| segmentMap | segment | Nav | SUP-08 → /patrol-map |
| cardRows | list | ListRow+Badge | S0 day-empty · clear→cards |
| detail RO | /:id | Detail RO | QA-20 GET/{id} |
| btnMap | detail | Button/Nav | «Xem trên bản đồ» |
| empty | empty | Empty | SUP-07 live [] |

## Screens / zones (ids only)
- SUP-00 · SUP-01 · SUP-02 · SUP-03 · SUP-04 · SUP-05 · SUP-06 · SUP-07 · SUP-08
- PNG `qa/screens/{S0,S1,QA-20}.png`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-supervise
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- VERIFY: GET attendance-logs · GET/{id} **PASS** · hashes distinct · DOM Aligned
- T-QA-01…03 = done
- soft: stock DUP · empty-copy polish · default day filter

## UNCLEAR
- UNCLEAR-EMPTY-COPY: soft · live empty OK · copy polish Review

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-supervise/handoff/dev-compact.md
