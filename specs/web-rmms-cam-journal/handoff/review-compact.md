# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:31:18.000Z
taskId: task_648b8ba6
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
changeScope: edit_page
formPattern: Mobile full ≤430 · JL-01 form · JL-02 list
formType: phone-journal
autoApprove: ON
e2eQa: ON
review_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamJournal* route
- QUERY/SEC/UI-FN/BE-FN: **PASS** · hash unchanged skip
- Role: tuanDuong write · QL_HAT/TK/NT view · cite camJournalAccess+useRoleGateProfile
- Pattern B GPS · leave dirty JL-01 · lock=saving|photoBusy · CTA write-only
- Live API KEEP · DOMAIN-MAP Patrol CLOSED · entity/migration none
- QA prior: S0/S1/QA-20 PASS · write SOFT debt
- review_confirm=approve · autoApprove ON
- chain complete · **cấm** ERP.* · e2e ở review

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | view info · PASS |
| photos | RouteCapture | write multiple · view RO |
| gps | GPS+Banner | Pattern B PASS |
| narrative | TextArea | required write |
| at/km/dir/weather/kind | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | Checkbox+Select | reportedTo=cờ TK |
| save | Button | tuanDuong · saving\|photoBusy |
| lineCards | List RO | GET journal-lines |
| ctaCreate | Button | canWrite only |

## Screens / zones (ids only)
- JL-01 · JL-02 · DES-LEAVE · roleGateBanner · JL-01v · JL-02v
- qa screens: S0/S1/QA-20 PASS
- productRoute=/nhat-ky/:sessionId/moi · alias → /nhat-ky
- files= camJournalAccess.ts · JournalFormPage.tsx · JournalListPage.tsx · aliasRedirects.tsx

## API / tasks (ids only)
- API-01..07 Live KEEP · sessions · journal-lines · files · profile caps
- T-01/T-02 PASS · T-QA-JL-01 PASS · WRITE SOFT
- entity/migration: none

## UNCLEAR
- none
- soft: SOFT-E2E-WRITE · SOFT-E2E-STOCK-DUP · SOFT-BE-PERM (non-blocking)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/review/findings.md
- qa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/qa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md

## Handoff next
| Role | Do |
|------|----|
| — | chain complete · review PASS · last role |

## Cấm
- ERP.* · invent CamJournal* · start role khác · e2e/start:std ở review

<!-- compact schemaVersion=1 role=review feature=web-rmms-cam-journal taskId=task_648b8ba6 -->
