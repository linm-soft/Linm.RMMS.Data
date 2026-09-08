# Handoff compact — sa

schemaVersion: 1
feature: traffic-sign-type
packKind: master
role: sa
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.05.8
writtenAt: 2026-09-06T02:50:00.000Z
taskId: task_f9f8d4ee
autoApprove: ON
e2eQa: ON (queued /agent-qa*)
solution_confirm: approve
changeScope: new_page
contentHash: sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb
formPattern: Slideout · data-form-cols=2 · footer_actions_only
domain: Integration · api/v1/integration/traffic-sign-types
bff: proxy only · web-bff/api/v1/integration/traffic-sign-types
entity: TrafficSignTypeEntity · rmms_traffic_sign_types
sa_tz_gate: tz_na
sa_xco_gate: xco_na
sa_shared_table: share_a

## Decisions
- changeScope=new_page · packKind=master · Kind B · Slideout (GAP-TST-FORM-01 closed)
- DOMAIN-MAP slug `traffic-sign-type` → Integration (**GAP-TST-DM-01 closed**)
- Keep live API/BFF/entity/MFE paths · **cấm** invent API · **cấm** ERP.*
- Migration đã ship · **cấm** Step 4b @ SA
- Icon NULL · **cấm** invent pict/mã (ICON/SEED chốt)
- code lock on edit · keep case · catalog size ≠ install
- Gates: tz_na · xco_na · share_a
- History DEFER stub · LeaveConfirmModal UI
- solution_confirm **approve** (autoApprove) · open Q: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | query |
| groupCode | Nhóm QCVN | Dropdown | init-data · group_code |
| code | Mã biển | Text code | create only · lock edit |
| name | Nội dung | Text | name |
| nameEn | Tên EN | Text | nameEn |
| shape | Hình dạng | Text | shape |
| width/height | Rộng/Dài | Text | width/height |
| icon | Icon | Text URL/path | icon NULL ok |
| isActive | Hiệu lực | Switch | isActive |
| trafficSignTypeCode | Consumer | SearchInput | GET /search |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/B-FILTER/C0–C3/D/F/H
- S-FORM-* DES-GRID-Z · DES-FORM-Z1–Z3 · LeaveConfirmModal
- S-HIST (defer) · S-CONSUMER
- mfeStdUrl=http://localhost:9318/mas/loai-bien-bao
- peerStdUrl=http://localhost:9318/mas/loai-tai-san
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: List API-01 · Search API-02 · init API-03 · by-code API-04 · GET API-05 · POST API-06 · PUT API-07 · soft DEL API-08
- T-* → TL: T-UI-LIST/FORM/ACT · T-BE-CRUD/INIT · T-PERM · T-BFF · T-QA-CRUD · T-CTX · T-SEED
- Next: **team-lead** · devSlash=/agent-dev · e2e queued QA only

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/traffic-sign-type-real-data.md
- prior compact: design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/STATUS.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
