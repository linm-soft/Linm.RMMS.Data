# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:00:00.000Z
taskId: task_0327ea87
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4
solution_confirm: approve
autoApprove: ON
be_repo_confirm: approve
ui_repo_confirm: approve

## Decisions
- changeScope: edit_page
- formPattern: Full TK-02…05 · phone 430 · LeaveConfirm · N/A ERP Modal/Slideout · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-c
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- domain slug: web-rmms-mobile-c → Patrol (DOMAIN-MAP row added)
- entity Mới: PatrolFindingEntity · rmms_patrol_findings · Schema_PatrolFinding pair trước form
- review: migration C add Review · ReviewNote · FindingId trên journal-lines (Schema_B extend)
- code gen: TK-{yyyyMMdd}-{seq:D3} server-only on POST findings
- hangMuc: PO slugs nen/mat/cau/cong/ham/thoat-nuoc/atgt/ho-lan/bien/dai-phan-cach/thiet-bi/thi-cong
- BFF: mobile-bff proxy · API Patrol owns · web-bff cite
- GPS HARD TK-03+05 · cấm fake · TK-04 prefill journal GPS
- out C: TK-06/07 · WO · feedback (D)
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| findingList | danh mục | List cards | GET findings?sessionId&status&route |
| filter.status/route | lọc | Chip/Select | phone |
| source | nguồn | Dropdown | 5 keys · journal if tuan-duong |
| findingKind | loại | Dropdown | 7 keys |
| kmFrom/kmTo | km | Text | |
| side | vị trí | Dropdown | 5 keys |
| hangMuc | hạng mục | Dropdown | PO slugs |
| description | mô tả | TextArea | required |
| scope | phạm vi | Radio | bdtx/vuot-bdtx |
| lat/lng/accuracyM | GPS | GPS | TK-03/05 HARD |
| dueAt | hạn | Date | if bdtx |
| mediaIds | ảnh | FileMulti | files/* |
| review/reviewNote | khớp/lệch | Radio+Text | PUT review · lech note |
| createFromLech | lập phiếu | Button | → TK-03 prefill |
| recheckResult | kết luận | Radio | dat→xong · chua→da-giao |
| confirmDone | xác nhận | Button | only if dat |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET findings/{id} · POST …/recheck · PUT journal-lines/{id}/review · peer journal-lines · parent sessions
- entity: Schema_PatrolFinding + journal review cols · migration C (TL/Dev Step 4b)
- BFF: mobile-bff/api/v1/patrol/** proxy
- UNCLEAR: all CLOSED
- T-*: (team_lead)

## UNCLEAR
- (none — FIND-SCHEMA · FIND-CODE · REVIEW-COL · DOMAIN-SLUG · HANGMUC closed)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
