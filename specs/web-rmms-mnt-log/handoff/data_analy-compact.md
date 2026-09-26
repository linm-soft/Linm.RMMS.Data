# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mnt-log
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T22:54:54.759Z
contentHash: sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd

## Decisions
- changeScope: new_page
- formPattern: Mobile full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mnt-log
- productRoute: /work/log
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance WorkOrder · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · mobile-bff/api/v1 :5202 · cấm FE web-bff · cấm Route mobile-bff trên web-bff controllers
- demo: N/A
- Live: GET work-orders/{id} · init-data · **readonly** · client-derive timeline (CreatedAt/DueAt/Description/ProgressPercent/Note/UpdatedAt/Status)
- GPS: không trên WORK-G (SCREENS) · cấm fake
- write: cấm POST trên slug · progress/complete/chat = peers
- labels: useFormOptions() · cấm hardcode VN form
- out: list/progress/chat/estimate · Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (web-rmms-mobile-b…e)
- persona: Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Work tab dùng chung
- open questions: UNCLEAR-ENTRY · UNCLEAR-SORT · UNCLEAR-LABEL-MAP · UNCLEAR-HIST-API (PO/Design/SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| woCode/title/status/route/workType | header WO | Text/Badge RO | GET {id} |
| timeline + rows | nhật ký | Timeline RO | derive DTO · no POST |
| emptyState | trống | Empty | thiếu id / GET fail |
| primaryWrite | — | N/A | cấm write CTA |

## Screens / zones (ids only)
- WORK-G · entry peer WORK-L (web-rmms-work)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-work
- DES-GRID / LinErpListFilterBar: N/A phone screen

## API / tasks (ids only)
- FormMode↔API: prefill GET · derive client · init-data GET · no write
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-ENTRY: mọi status vs chỉ done
- UNCLEAR-SORT: newest-first default
- UNCLEAR-LABEL-MAP: init-data vs list chrome status VN
- UNCLEAR-HIST-API: P1 derive only · cấm invent /logs

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mnt-log-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mnt-log.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/STATUS.md
