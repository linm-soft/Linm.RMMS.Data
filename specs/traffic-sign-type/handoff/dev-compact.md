# Handoff compact — dev

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: dev
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T02:45:00.000Z
taskId: task_299e42ce
autoApprove: ON
e2eQa: ON (queued /agent-qa*)
changeScope: new_page
route_confirm: route_a
contentHash: sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb
formPattern: Slideout · data-form-cols=2 · footer_actions_only
domain: Integration · api/v1/integration/traffic-sign-types
mfeStdUrl: http://localhost:9318/mas/loai-bien-bao
build: MFE yarn build PASS · BE API+BFF dotnet PASS

## Decisions
- changeScope=new_page · verify/align live Master+Integration · **cấm** invent API/ERP.*
- Step 4b / Schema: **N/A** (already shipped) · BFF proxy-only kept
- Filter: LinErpListFilterBar · groupCode ← init-data · leadField `flex:1 1 180px`
- Form Slideout 2 cột · LeaveConfirmModal · code lock edit · keep case
- History DEFER stub · icon NULL · seed gov-vn only
- e2e **not** run @ Dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter leading |
| groupCode | Nhóm QCVN | Dropdown | init-data |
| code | Mã biển | Text | create only |
| name/nameEn/shape/w/h/icon | … | Text | icon NULL ok |
| isActive | Hiệu lực | Switch* | *checkbox peer wire |
| trafficSignTypeCode | Consumer | SearchInput | API-02 |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/B-FILTER/C0–C3/D/F/H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- mfeStdUrl=http://localhost:9318/mas/loai-bien-bao
- peerStdUrl=http://localhost:9318/mas/loai-tai-san

## API / tasks (ids only)
- API-01…08 + ui-schema live · FE BASE `/integration/traffic-sign-types`
- T-CTX/BE/BFF/PERM/SEED/UI-* Dev **PASS** · T-QA-* → QA
- Next: **qa** · `/agent-qa*` · e2e ON

## UNCLEAR
- none

## Debt
- isActive checkbox vs Switch controlHint
- History stub DEFER
- catalogKind live `traffic-sign-types`

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/implement/traffic-sign-type.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/task/traffic-sign-type.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md
- prior: team_lead-compact.md · sa-compact.md · design-compact.md
