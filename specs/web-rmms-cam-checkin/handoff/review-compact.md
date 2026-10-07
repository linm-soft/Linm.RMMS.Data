# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-checkin
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T00:57:30.000Z
taskId: task_1c9a2927
contentHash: sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db
changeScope: edit_page
formPattern: Mobile full ≤430 · CI-01 sheet · CI-02 detail
formType: phone-checkin
autoApprove: ON
e2eQa: ON
review_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamCheckIn* route
- QUERY/SEC/UI-FN/BE-FN: **PASS** · hash unchanged skip
- Role: tuanDuong write · qlHat view · TK/NT block · cite camCheckInAccess+useRoleGateProfile
- Pattern B GPS · leave dirty CI-01 · disabled=saving only · CTA/endSession write-only
- Live API KEEP · DOMAIN-MAP Patrol CLOSED · entity/migration none
- QA prior: block S0/S1/QA-20 PASS · write/view SOFT debt
- review_confirm=approve · autoApprove ON
- **cấm** phase=done · ERP.* · e2e ở review

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | block danger · view info · PASS |
| photos | RouteCapture | write multiple · view RO |
| plan/gps/dist | Banner+Text RO | Pattern B PASS |
| chainageKm/Label | Input | write only |
| content | TextArea | write · view RO |
| save | Button | tuanDuong · saving lock |
| timeline | List RO | GET check-ins · QL_HAT OK |
| ctaCheckIn/endSession | Button | canWrite only |

## Screens / zones (ids only)
- CI-01 · CI-02 · DES-LEAVE · roleGateBanner
- qa screens: S0/S1/QA-20 PASS
- productRoute=/tuan-duong/:id/diem-tuan
- files= camCheckInAccess.ts · CheckInSheet.tsx · PatrolDetailPage.tsx

## API / tasks (ids only)
- API-01..08 Live KEEP · BASE=/patrol/sessions
- T-01/T-02 PASS · T-QA-CI-01 PASS · WRITE/VIEW SOFT
- entity/migration: none

## UNCLEAR
- none
- soft: SOFT-E2E-WRITE · SOFT-E2E-VIEW · SOFT-ALIAS (non-blocking)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/review/findings.md
- qa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/handoff/qa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/STATUS.md

## Handoff next
| Role | Do |
|------|----|
| — | chain complete · review PASS · **cấm** phase=done từ review |

## Cấm
- ERP.* · phase=done · start role khác · e2e/start:std ở review

<!-- compact schemaVersion=1 role=review feature=web-rmms-cam-checkin taskId=task_1c9a2927 -->
