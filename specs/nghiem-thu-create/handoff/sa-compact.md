# Handoff compact — sa

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: sa
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.19.5
rulesVersion: 2026.09.19.7
writtenAt: 2026-09-19T17:20:00.000Z
taskId: task_22aa08eb
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: new_page
formPattern: sheet→screen
domain: Patrol · api/v1/patrol/nghiem-thu
bff: Mobile.Bff catch-all · mobile-bff/api/v1
entity: NghiemThuEntity · NghiemThuMediaEntity · migration=none
sa_tz_gate: tz_required
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f
bffContentHashPrior: sha256:nghiem-thu-create-mobile-bff-20260919

## Decisions
- changeScope=new_page · packKind=sheet · sheet→screen Create draft P1
- API giữ `patrol/nghiem-thu` · BFF proxy · files/* · **cấm** invent create/files path · **cấm ERP.***
- FormMode↔API: Create → GET init-data + files* + POST Status=draft
- Persist: scalars + MediaIds guid[] · no parent JSON · Step 4b **SKIP**
- Offline: **cấm** enqueue Lưu/files · GPS live · PrivacyInfo location+photos
- Gates: tz_required · xco_get_only · share_tenant · solution_confirm **approve**
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| templateRow | Mẫu | Select LOOKUP_STATIC | TemplateType · init-data |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| navSave | Lưu | TextButton | POST draft |
| navCancel | Hủy | BackButton | leave-dirty |
| assignee/inspectedAt | (ẩn) | derived | API required |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- DES-MOB-GPS-DENY · DES-MOB-LEAVE · `#sheet-mau`
- parent `#sc-nghiem-thu` · detail navigate only
- reviewUrlIos/Android=file:// prototype (Design)
- peerStdUrl=http://localhost:9304/patrol · **cấm** mfeStdUrl

## API / tasks (ids only)
- FormMode↔API: Create ↔ API-01 init · API-03 files · API-02 POST draft
- T-NTC-01..05 → TL (iOS·Android·Privacy·leave/GPS·DOMAIN-MAP)
- entity/migration=none · Step 4b SKIP

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/be/solution-discovery.md
- design compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/handoff/design-compact.md
- bff: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-bff-endpoints.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md

## Next
| Role | Need |
|------|------|
| TL | task/nghiem-thu-create.md · T-NTC-* · dual Dev |
| Dev | wire §B · prefix mobile-bff · **cấm** demoItems |
| QA | e2e queued /agent-qa* |

## Cấm (compact)
ERP.* · invent API · fork DTO · enqueue Lưu/files · Schema_*/Step 4b/e2e/build/start:std ở SA · Write MFE/native · localhost runtime
