# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:50:00.000Z
taskId: task_c9f5526b
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page
- formPattern: Full (TK-02 list · TK-03 form · TK-04 review · TK-05 detail+recheck) · phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone · Chip/Select filter only
- Report AC: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-c
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- wave C: TK-02…05 · API Mới findings/recheck/review · schema-before-form
- labels: useFormOptions() · GPS deny blocks TK-03 save + TK-05 confirm · cấm fake coords
- TK-04 prefill GPS from journal · hangMuc PO keys · out: TK-06/07 · WO · feedback (D)
- open questions: UNCLEAR-FIND-SCHEMA · UNCLEAR-FIND-CODE · UNCLEAR-REVIEW-COL · UNCLEAR-DOMAIN-SLUG → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| findingList | danh mục | List cards | GET findings?sessionId&status&route |
| filter.status/route | lọc | Chip/Select | phone · no ERP filter bar |
| source | nguồn | Dropdown | 5 keys · link journal if tuan-duong |
| findingKind | loại phiếu | Dropdown | 7 keys |
| kmFrom/kmTo | km | Text | |
| side | vị trí | Dropdown | 5 keys |
| hangMuc | hạng mục | Dropdown | PO keys CTX §5 |
| description | mô tả | TextArea | required |
| scope | phạm vi | Radio | bdtx/vuot-bdtx |
| lat/lng/accuracyM | GPS | GPS | TK-03/05 HARD deny→block |
| dueAt | hạn | Date | if bdtx |
| mediaIds | ảnh | FileMulti | files/* |
| review/reviewNote | khớp/lệch | Radio+Text | TK-04 · lech required note |
| createFromLech | lập phiếu | Button | → TK-03 prefill |
| recheckResult | kết luận | Radio | dat/chua-dat |
| confirmDone | xác nhận | Button | only if dat |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- Leave: TK-02↔03/05 · TK-04→03 prefill · Back→hub A · Save TK-03→TK-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET findings/{id} · POST …/recheck · PUT journal-lines/{id}/review · peer GET journal-lines · parent sessions
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-FIND-SCHEMA: Schema_PatrolFinding chưa Live → SA
- UNCLEAR-FIND-CODE: format mã tồn tại → SA
- UNCLEAR-REVIEW-COL: review Schema_B vs C → SA
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row → SA

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
