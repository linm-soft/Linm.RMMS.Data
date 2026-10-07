# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:06:48.355Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_f4d8107d

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list · confirmed · DES-GRID/LinErpListFilterBar: N/A phone
- deltaCite: PLAN-3-VAI § enqueue #3
- screens: JL-01 JournalFormPage · JL-02 JournalListPage
- productRoute: /nhat-ky/:sessionId · /moi · /:lineId
- mfeStdUrl: alias only · cấm invent product route
- Role: tuần đường write+capture · QL_HAT/TK/NT view-only · ẩn CTA
- QL_HAT = HAT-TRUONG+HAT-PHO · cấm MANAGER-RMMS
- GPS Pattern B · cấm fake · Lưu chỉ lock saving|photoBusy
- Leave: dirty confirm JL-01
- API: giữ Live journal-lines · cấm CamJournal* · cấm web-bff · cấm ERP.*
- Out: Giao việc · SLA 24h · Mục IV · Excel · native · review PUT
- autoApprove: ON → Design
- demo: N/A · hash skip · cấm re-scan

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | tuần đường write |
| gps | định vị | GPS+Banner | Pattern B |
| narrative | diễn biến | TextArea | required |
| at/km/dir/weather/kind | meta | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | flags | Checkbox+Select | reportedTo=cờ TK |
| save | Lưu | Button | role tuần đường |
| lineCards | dòng | List RO | GET journal-lines |
| ctaCreate | CTA ghi | Button | ẩn non-tuần-đường |
| roleCaps | quyền | Hidden | role-gate |

## Screens / zones (ids only)
- JL-01 · JL-02
- reviewUrl= (Design) keep list/form · 430px
- peerStd deep-link=/nhat-ky/:sessionId/moi
- DES-GRID / filter-bar: N/A phone

## API / tasks (ids only)
- GET sessions/{id} · journal-lines list/get · POST/PUT journal-lines · files cite
- T-*: edit JournalFormPage + JournalListPage role-gate
- real-data §A+§B: PASS (analy)

## AC (ids)
- AC-JL-WRITE · AC-JL-CTA · AC-JL-NARR · AC-JL-GPS-B · AC-JL-PHOTO · AC-JL-LEAVE · AC-JL-LOOKUP · AC-JL-ROUTE · AC-JL-API

## UNCLEAR
- UNCLEAR-JL-DOMAIN-ROW → SA
- UNCLEAR-JL-ROLE-SOURCE → Dev + role-gate

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-real-data.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
