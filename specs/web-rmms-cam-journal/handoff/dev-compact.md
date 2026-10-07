# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:35:00.000Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_ec6b0dd0
autoApprove: ON
changeScope: edit_page
e2eQa: queued
mfeStdUrl: http://localhost:9301/web-rmms-cam-journal

## Decisions
- changeScope: edit_page · cấm new_page · cấm CamJournal* controller
- Role: tuanDuong write+capture · QL_HAT/TK/NT view · camJournalAccess · cấm MANAGER
- Pattern B GPS · leave dirty JL-01 write · lock=saving|photoBusy
- CTA ẩn non-tuần-đường · alias /web-rmms-cam-journal → /nhat-ky
- entity/migration: none · Step 4b skip · Live DTO KEEP · DOMAIN-MAP CLOSED
- Build: MFE yarn build PASS · BE dotnet build PASS
- next: /agent-qa · roleOnly stop · e2eQa queued

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | write tuanDuong · view mode else |
| gps | GPS+Banner | Pattern B |
| narrative | TextArea | required write |
| at/km/dir/weather/kind | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | Checkbox+Select | reportedTo=cờ TK |
| save | Button | ẩn view · lock saving\|photoBusy |
| lineCards | List RO | GET journal-lines |
| ctaCreate | Button | ẩn non-tuần-đường |
| roleCaps/roleGateBanner | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- JL-01 · JL-02 · DES-LEAVE · roleGateBanner · JL-01v · JL-02v
- productRoute=/nhat-ky/:sessionId/moi · mfeStdUrl alias
- files= JournalFormPage.tsx · JournalListPage.tsx · camJournalAccess.ts · aliasRedirects.tsx

## API / tasks (ids only)
- API-01..07 Live KEEP · sessions · journal-lines · files · profile caps
- T-01 done · T-02 done · T-03 QA e2e only
- debt: none blocking

## UNCLEAR
- none open

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/implement/web-rmms-cam-journal.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/task/web-rmms-cam-journal.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
