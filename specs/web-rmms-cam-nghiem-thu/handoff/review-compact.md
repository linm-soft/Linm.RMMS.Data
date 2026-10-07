# Handoff compact — review

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:00:00.000Z
taskId: task_36107c82
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
changeScope: edit_page
formPattern: Mobile full ≤430 · NT-L/F · Pattern B
formType: phone-nghiem-thu
autoApprove: ON
e2eQa: ON
review_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page / CamNghiemThu* product slug
- QUERY/SEC/UI-FN/BE-FN: **PASS** · hash RUN (prior META draft) · contentHash unchanged chain
- Role: nghiemThu write+capture+Tạo · TK/QL_HAT view · tuanDuong-only hidden · camNghiemThuAccess
- Live API KEEP · DOMAIN bind nghiem-thu peer · entity/migration none · Step 4b skip
- QA prior: T-QA-FORM/CRUD PASS · S0/S1/QA-20 · write/hidden SOFT
- review_confirm=approve · autoApprove ON · **no** fix_gaps
- chain complete · **cấm** ERP.* · e2e/start:std ở review · **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| roleGateBanner | Banner | view AC · PASS |
| photos | RouteCapture | write iff nghiemThu |
| gps | GPS+Banner | Pattern B PASS |
| btnCreate | Button | hide non-NT |
| save | Button | disabled saving\|photoBusy |
| cards | List | LIST-VIS · Live |
| linkRo | Nav RO | /tuan-duong · /phat-hien?status=xong |
| assignCta/confirmSc | — | CẤM · PASS |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave · roleGateBanner
- qa: manifest ok · S0/S1/QA-20
- productRoute=/nghiem-thu · /moi · /:id
- alias=/web-rmms-cam-nghiem-thu → Navigate
- files= camNghiemThuAccess · NghiemThuListPage · NghiemThuFormPage · aliasRedirects · paths

## API / tasks (ids only)
- Live nghiem-thu CRUD+files+lookups KEEP · profile roleCaps · sessions/findings RO
- T-* Dev PASS · T-QA-FORM/CRUD PASS · WRITE/HIDDEN SOFT
- entity/migration: none

## UNCLEAR
- none
- soft: SOFT-E2E-WRITE · SOFT-E2E-STOCK · SOFT-BE-PERM (non-blocking)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/review/findings.md
- qa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/qa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md

## Handoff next
| Role | Do |
|------|----|
| — | chain complete · review PASS · last role · **cấm** phase=done |

## Cấm
- ERP.* · invent CamNghiemThu* · start role khác · e2e/start:std ở review · phase=done

<!-- compact schemaVersion=1 role=review feature=web-rmms-cam-nghiem-thu taskId=task_36107c82 -->
