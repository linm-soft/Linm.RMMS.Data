# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-e
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:45:00.000Z
taskId: task_b8b37095
contentHash: sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d
mfeStdRoute: /web-rmms-mobile-e
mfeStdUrl: http://localhost:9301/web-rmms-mobile-e
build: PASS

## Decisions
- changeScope: edit_page
- formPattern: Mobile full list RO TK-07 · phone 430 · no write · Leave N/A
- Schema order: RoadClass → FrequencyRule → GET frequency-plans — done
- counts/coverageStatus: server-only · IsPaused excluded · FE RO bind
- LOOKUP_STATIC: coverageStatus thieu|du · roadClass I–VI labels
- DES-GRID/FilterBar/ui-schema/write/leave/LKP/HIST: WAIVE phone
- GPS/edit rule/mock plans: none
- e2eQa: queued QA · cấm Dev e2e/start:std
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | wire |
|----|-------------|------|
| planList | List RO cards | GET frequency-plans |
| route/roadClass/ruleText | Text/Chip RO | response row |
| patrolDayCount/inspectWeekCount | Number RO | server |
| coverageStatus | Chip RO | LOOKUP_STATIC |
| emptyHint/refresh/backHub | Empty/Button | 404/empty · GET reload · TK-00 |

## Screens / zones (ids only)
- TK-07 · emptyHint · planList · refresh · backHub
- mfeStdUrl= http://localhost:9301/web-rmms-mobile-e
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html

## API / tasks (ids only)
- GET patrol/frequency-plans · RoadClass on road-routes · Schema_PatrolFrequencyRule
- T-BE-SCHEMA/CRUD/INIT/PERM · T-UI-LIST/FIELD/UX/RESP/PROD = done
- T-QA-LIST-01 · T-QA-EMPTY-01 = pending (queued)

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/implement/web-rmms-mobile-e.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/STATUS.md
