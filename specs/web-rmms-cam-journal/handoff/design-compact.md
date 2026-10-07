# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T01:15:00.000Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_cac06ccb
design_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- keep JL list/form peer mobile-b · § Delta role-gate only
- packKind: list · phone 430 · DES-GRID/LinErpListFilterBar: N/A WAIVE
- DES-RPT: N/A
- Role: tuần đường write+capture · QL_HAT/TK/NT view-only · ẩn CTA
- QL_HAT = HAT-TRUONG+HAT-PHO · cấm MANAGER-RMMS
- GPS Pattern B · cấm fake · Lưu chỉ lock saving|photoBusy
- Leave: DES-LEAVE dirty JL-01 write
- API: giữ Live journal-lines · cấm CamJournal* · cấm web-bff · cấm ERP.*
- Out: Giao việc · SLA 24h · Mục IV · Excel · native · review PUT
- autoApprove: ON → design_confirm approve
- demo: N/A · hash skip · cấm re-scan
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html
- peerStd deep-link: /nhat-ky/:sessionId/moi
- mfeStdUrl: alias only · cấm invent product route
- real_view_parity: v1

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | write tuần đường · view khác |
| gps | định vị | GPS+Banner | Pattern B |
| narrative | diễn biến | TextArea | required |
| at/km/dir/weather/kind | meta | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | flags | Checkbox+Select | reportedTo=cờ TK |
| save | Lưu | Button | role tuần đường |
| lineCards | dòng | List RO | GET journal-lines |
| ctaCreate | CTA ghi | Button | ẩn non-tuần-đường |
| roleCaps | quyền | Hidden | role-gate |
| roleGateBanner | hint RO | Banner | optional |

## Screens / zones (ids only)
- JL-02 · JL-02v · JL-02e · JL-01 · JL-01g · JL-01v · DES-LEAVE · banner
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html
- peerStd deep-link=/nhat-ky/:sessionId/moi
- DES-GRID / filter-bar: N/A phone

## API / tasks (ids only)
- GET sessions/{id} · journal-lines list/get · POST/PUT journal-lines · files cite
- T-*: edit JournalFormPage + JournalListPage role-gate
- AC: AC-JL-WRITE · CTA · NARR · GPS-B · PHOTO · LEAVE · LOOKUP · ROUTE · API

## UNCLEAR
- UNCLEAR-JL-DOMAIN-ROW → SA
- UNCLEAR-JL-ROLE-SOURCE → Dev + role-gate

## Full paths
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-real-data.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
