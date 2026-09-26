# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:00:00.000Z
contentHash: sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd

## Decisions
- changeScope: new_page
- packKind: list confirm · surface phone timeline RO · DES-GRID/LinErpListFilterBar N/A
- formPattern: Mobile full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-log
- productRoute: /work/log
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobile-bff/api/v1 :5202 · cấm FE web-bff
- demo: N/A · cấm demo rescan
- Live RO: GET work-orders/{id} · init-data · client-derive timeline · cấm invent /logs · cấm POST
- GPS: không trên WORK-G · cấm fake
- labels: useFormOptions + init-data SSOT · cấm hardcode VN
- entry: mọi status khi có id (UNCLEAR-ENTRY CLOSED)
- sort: newest-first (UNCLEAR-SORT CLOSED)
- hist: P1 derive only (UNCLEAR-HIST-API → SA)
- persona: Tuần đường (BDTX) · Tuần kiểm (Khu/VP)
- out: progress/chat/estimate · Me* · feedback · cam-view · journal/kết ca (web-rmms-mobile-b…e)
- autoApprove: ON → Design next

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| timeline + rows | nhật ký | Timeline RO | derive DTO · no POST |
| emptyState | trống | Empty | thiếu id / GET fail |
| primaryWrite | — | N/A | cấm write CTA |

## Screens / zones (ids only)
- WORK-G · entry peer WORK-L (web-rmms-work)
- reviewUrl= (Design · #sc-mnt-log · DES-MOB-MNT-LOG)
- peerStdUrl= http://localhost:9301/web-rmms-work
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: prefill GET · derive client · init-data GET · no write
- AC: AC-TL-01..03 · AC-HDR-01 · AC-RO-01 · AC-BFF-01 · AC-GPS-01 · AC-LBL-01
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-ENTRY: CLOSED — mọi status + id
- UNCLEAR-SORT: CLOSED — newest-first
- UNCLEAR-LABEL-MAP: CLOSED — init-data + useFormOptions
- UNCLEAR-HIST-API: OPEN→SA — P1 derive · cấm invent /logs

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/handoff/data_analy-compact.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-log.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
