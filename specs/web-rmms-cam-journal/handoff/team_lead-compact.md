# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:25:00.000Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_dd688639
autoApprove: ON
changeScope: edit_page
route_confirm: N/A
e2eQa: queued

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamJournal* / route mới
- packKind: list · forms JL-01 JournalFormPage · JL-02 JournalListPage · DES-LEAVE · ≤430 · DES-GRID N/A
- productRoute: /nhat-ky/:sessionId · /moi · /:lineId · mfeStdUrl alias only
- domain: Patrol · DOMAIN-MAP CLOSED · BFF mobile-bff/api/v1/patrol/** · cấm ERP.* · cấm web-bff
- Role: tuần đường write+capture · QL_HAT/TK/NT view-only · ẩn CTA · cite role-gate · cấm MANAGER-RMMS
- Pattern B GPS · leave dirty JL-01 · lock=saving|photoBusy
- entity/migration: none · Step 4b skip · Live DTO KEEP
- T-01 JournalFormPage · T-02 JournalListPage · T-03 QA notes (QA runs e2e)
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued /agent-qa*

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · others view |
| gps | GPS+Banner | Pattern B |
| narrative | TextArea | required |
| at/km/dir/weather/kind | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | Checkbox+Select | reportedTo=cờ TK |
| save | Button | POST/PUT journal-lines · tuần đường |
| lineCards | List RO | GET journal-lines |
| ctaCreate | Button | ẩn non-tuần-đường |
| roleCaps/roleGateBanner | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- JL-01 · JL-02 · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html
- productRoute= /nhat-ky/:sessionId/moi · mfeStdUrl alias only
- files= src/pages/WebRmmsMobileB/JournalFormPage.tsx · JournalListPage.tsx

## API / tasks (ids only)
- FormMode↔API: API-01..07 Live KEEP · sessions · journal-lines list/get/POST/PUT · files · profile caps
- T-01: JL-01 JournalFormPage role-gate + Pattern B + leave
- T-02: JL-02 JournalListPage CTA/lineCards gate
- T-03: QA handoff checklist (e2e only /agent-qa*)
- entity/migration: none

## UNCLEAR
- none open

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/task/web-rmms-cam-journal.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/sa-compact.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/be/solution-discovery.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
