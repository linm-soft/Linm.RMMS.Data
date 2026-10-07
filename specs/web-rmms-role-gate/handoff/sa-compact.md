# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-role-gate
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T16:30:00.000Z
contentHash: sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216
taskId: task_99b2984a
autoApprove: ON
changeScope: edit_page
solution_confirm: approve

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent RoleGateController / role-gate/*
- formPattern: Mobile full ≤430 · profile RO + visibility · assign peer · N/A ERP Modal · DES-GRID N/A
- domain: Integration job-titles + Auth profile cite · DOMAIN-MAP add web-rmms-role-gate · cấm ERP.* · cấm web-bff Mobile
- BFF: Mobile.Bff :5202 · enrich GET auth/profile từ rmms_users + job-title resolve
- FormMode↔API: GET auth/profile(+jobTitleCode/packageCode/roleCaps) · GET/PUT job-titles · init-data +QL_HAT · cite Incident assign / findings / home-shell
- entity/migration: **none new columns** · Seed_JobTitleQlHatNghiemThu (HAT-*→QL_HAT · NGHIEM-THU) · Dev Step 4b · SA skip run
- gates: TZ=required (dueAt) · XCO=n/a · SHARE=share_a (JobTitle) · AppUser tenant_keep
- Delta: qlHat⇔packageCode=QL_HAT · cấm MANAGER→Giao · cấm SLA 24h · cấm tiền Mục IV
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| profile.jobTitleCode | chức danh | Text/Chip RO | profile enhance |
| profile.packageCode | package | Chip RO | QL_HAT HAT-* |
| roleCaps.* | caps | Flag RO | derived BE |
| seed.packageHint | seed | Dropdown | init-data +QL_HAT |
| incident.btnAssign | Giao việc | Button gated | qlHat only |
| assign.dueAt | hạn | DateTime | TT41 · TZ |
| finding.btnPass/Fail | xác nhận | Button gated | tuanKiem |
| home/hub/shell | nav | gated | roleCaps |

## Screens / zones (ids only)
- RG-00 · RG-01 · RG-02 · RG-03a..d
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-role-gate
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: API-01 enhance profile · API-02..05 job-titles · API-06/07 peers · Seed_JobTitleQlHatNghiemThu
- entity/migration: Seed only · no Schema columns · Step 4b Dev
- TZ/XCO/SHARE: required / n/a / share_a
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- none open · GAP-RG-DM/PROF/SEED + UNCLEAR-RG-NT-CODE resolved

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-role-gate-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-role-gate/STATUS.md
