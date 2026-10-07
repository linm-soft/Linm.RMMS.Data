# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-incident
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:07:30.000Z
taskId: task_c4447acf
contentHash: sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1
changeScope: edit_page
formPattern: Mobile full ≤430 · INC-CAP/N/D/L · Pattern B
formType: phone-incident
autoApprove: ON
e2eQa: ON
review_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamIncident* route
- QUERY/SEC/UI-FN/BE-FN: **PASS** · hash RUN (prior META draft)
- Role: tuanDuong write+close · qlHat assign+unscoped list · TK/NT RO · cite camIncidentAccess
- DEC-LIST-01 client reporter · DEC-CLOSE-01 ẩn close non-tuan · workFor peer
- Live API KEEP · DOMAIN-MAP Incident CLOSED · entity/migration none
- QA prior: S0/S1/QA-20 PASS · write/assign SOFT debt
- review_confirm=approve · autoApprove ON
- chain complete · **cấm** ERP.* · e2e ở review

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | view deny · PASS |
| photos | RouteCapture | write · detail view |
| gps | GPS+Banner | Pattern B PASS |
| title/type/sev | Input+Select | LOOKUP_STATIC |
| create | Button | tuanDuong gated |
| fabCreate | FAB | canWrite only |
| cards | List | DEC-LIST-01 |
| assignCta | Button | qlHat · workFor |
| close | Button | tuanDuong only |

## Screens / zones (ids only)
- INC-CAP · INC-N · INC-D · INC-L · DES-LEAVE · roleGateBanner
- qa screens: S0/S1/QA-20 PASS
- productRoute=/van-de · /van-de/moi · /van-de/:id
- files= camIncidentAccess · IncidentCaptureSheet · IncidentCreatePage · IncidentDetailPage · IncidentListPage

## API / tasks (ids only)
- API-01..08 Live KEEP · Step 4b WAIVE
- T-01..T-04 · T-PERM PASS · T-QA-INC-01 PASS · WRITE/ASSIGN SOFT
- entity/migration: none

## UNCLEAR
- none
- soft: SOFT-E2E-WRITE · SOFT-E2E-STOCK-ALIAS (non-blocking)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/review/findings.md
- qa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/handoff/qa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/STATUS.md

## Handoff next
| Role | Do |
|------|----|
| — | chain complete · review PASS · last role |

## Cấm
- ERP.* · invent CamIncident* · start role khác · e2e/start:std ở review

<!-- compact schemaVersion=1 role=review feature=web-rmms-cam-incident taskId=task_c4447acf -->
