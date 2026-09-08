# Handoff compact — design

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: design
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T02:45:00.000Z
changeScope: new_page
taskId: task_5c6a5cc1
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHash: sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page
- formPattern: Slideout `data-form-cols=2` footer_actions_only — GAP-TST-FORM-01 closed
- Control = controlHint · Kind B catalog · DEM N/A
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/loai-bien-bao`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Integration `traffic-sign-types` · **cấm ERP.***
- Leave: LeaveConfirmModal · Grid AC YES · Report N/A
- ICON/SEED no invent · GAP-TST-DM-01 → SA
- design_confirm **approve** (autoApprove) · open Q: none blocking

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | mã + nội dung · 🔍 phải |
| groupCode | Nhóm QCVN | Dropdown | P/W/R/I/S/KHAC · filter+form |
| code | Mã biển | Text code | lock edit · keep case |
| name | Nội dung | Text | VN SSOT |
| nameEn | Tên EN | Text | no translate |
| shape | Hình dạng | Text | |
| width/height | Rộng/Dài | Text | catalog ≠ install |
| icon | Icon | Text URL/path | NULL · no pict |
| isActive | Hiệu lực | Switch | |
| trafficSignTypeCode | Consumer | SearchInput | catalogKind=traffic-sign-type |

## Screens / zones (ids only)
- S-LIST DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HIST · S-CONSUMER
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html`
- mfeStdUrl=`http://localhost:9318/mas/loai-bien-bao`
- peerStdUrl=`http://localhost:9318/mas/loai-tai-san`
- prototype=`specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html`

## API / tasks (ids only)
- FormMode↔API: list/search/init/CRUD `web-bff/api/v1/integration/traffic-sign-types`
- real-data §A+§B: PASS · contentHash e3aada6d…
- T-*: (TL after SA) · devSlash=/agent-dev
- Next: **SA** DOMAIN-MAP slug · solution-discovery

## UNCLEAR
- none (DM-01 deferred SA)

## Full paths (Read only if needed)
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md`

## Cấm (compact)
Demo HTML paste · invent pict/mã · ERP.* · yarn build/e2e/start:std · re-scan demo · GAP-PKT-ROLE-01
