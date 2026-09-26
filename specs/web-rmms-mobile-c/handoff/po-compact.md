# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:55:00.000Z
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4

## Decisions
- changeScope: edit_page
- packKind: list · confirmed
- formPattern: Mobile full (phone max-width 430) · N/A ERP Modal/Slideout · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-c
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- demo: N/A · hash skip analy · no re-scan
- wave C: TK-02 list · TK-03 phiếu · TK-04 đối chiếu · TK-05 recheck · API Mới findings/recheck/review
- HARD: Schema_PatrolFinding + entity pair trước form · review journal-line
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny blocks TK-03 save + TK-05 recheck · cấm fake coords
- TK-04 prefill GPS from journal · no new GPS unless user retake
- hangMuc keys: PO closed (CTX §5 slug keys)
- out of C: TK-06/07 · WO assign · feedback (D)
- open: UNCLEAR-FIND-SCHEMA · UNCLEAR-FIND-CODE · UNCLEAR-REVIEW-COL · UNCLEAR-DOMAIN-SLUG → SA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| findingList | danh mục | List cards | GET findings?sessionId&status&route |
| filter.status/route | lọc | Chip/Select | phone · no ERP filter bar |
| source | nguồn | Dropdown | 5 keys · link journal if tuan-duong |
| findingKind | loại phiếu | Dropdown | 7 keys |
| kmFrom/kmTo | km | Text | |
| side | vị trí | Dropdown | 5 keys |
| hangMuc | hạng mục | Dropdown | LOOKUP · PO keys |
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
- TK-02 · TK-03 · TK-04 · TK-05
- Leave: TK-02↔03/05 · TK-04→03 prefill · Back→hub A
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c
- DES-GRID / LinErpListFilterBar: N/A phone

## List AC (ids)
- L-01 empty · L-02 data · L-03 filter · L-04 tap · L-05 create · L-06 parent · L-07 no mock
- F-01 GPS · F-02 desc · F-03 source TD · F-04 scope due · F-05 thi-cong · F-06 hanh-lang · F-07 save · F-08 labels
- R-01 review · R-02 prefill · R-03 no rewrite TD
- K-01 recheck GPS · K-02 dat · K-03 chua · K-04 out D

## API / tasks (ids only)
- FormMode↔API: GET/POST findings · GET findings/{id} · POST …/recheck · PUT journal-lines/{id}/review · peer GET journal-lines · parent sessions
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-FIND-SCHEMA: Schema_PatrolFinding chưa Live → SA
- UNCLEAR-FIND-CODE: format mã tồn tại → SA
- UNCLEAR-REVIEW-COL: review Schema_B vs C → SA
- UNCLEAR-DOMAIN-SLUG: DOMAIN-MAP row → SA
- UNCLEAR-HANGMUC: closed (PO keys)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-c-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
