# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:20:00.000Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_cd103ade
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent CamJournal* / route mới
- formPattern: JL-01 Pattern B · JL-02 list · LeaveConfirm · ≤430 · DES-GRID N/A
- domain: Patrol · DOMAIN-MAP add `web-rmms-cam-journal` · bind peer mobile-b · cấm ERP.* · cấm web-bff
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1/patrol/** + files + auth/profile
- FormMode↔API: GET sessions/{id} · journal-lines list/get · POST/PUT journal-lines · files · profile caps
- entity/migration: **none** · Live DTO KEEP · Step 4b skip SA
- Role: tuần đường write+capture · QL_HAT/TK/NT view-only · cite role-gate packageCode/roleCaps
- Pattern B GPS · leave dirty JL-01 · lock=saving|photoBusy
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | tuần đường write · others view |
| gps | GPS+Banner | Pattern B |
| narrative | TextArea | required |
| at/km/dir/weather/kind | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | Checkbox+Select | reportedTo=cờ TK |
| save | Button | POST/PUT · tuần đường |
| lineCards | List RO | GET journal-lines |
| ctaCreate | Button | ẩn non-tuần-đường |
| roleCaps/roleGateBanner | Hidden/Banner | cite role-gate |

## Screens / zones (ids only)
- JL-01 · JL-02 · DES-LEAVE · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html
- productRoute= /nhat-ky/:sessionId · mfeStdUrl alias only
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01..07 Live KEEP · no path invent
- entity/migration: none
- DOMAIN-MAP: web-rmms-cam-journal → Patrol CLOSED
- T-*: (team_lead) edit JournalFormPage + JournalListPage role-gate · devSlash=/agent-dev

## UNCLEAR
- none open · UNCLEAR-JL-DOMAIN-ROW · UNCLEAR-JL-ROLE-SOURCE CLOSED

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
