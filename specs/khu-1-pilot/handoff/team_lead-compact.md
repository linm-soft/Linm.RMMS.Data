# Handoff compact — team_lead

schemaVersion: 1
feature: khu-1-pilot
packKind: list
role: team_lead
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.06.01
rulesVersion: 2026.08.30.6
writtenAt: 2026-09-06T15:55:00.000Z
changeScope: new_page
taskId: task_1c181bf3
route_confirm: route_a
contentHash: sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056
headerFingerprint: sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3
autoApprove: ON
e2eQa: ON (queued /agent-qa*)
Kind: A/B list · no CRUD form
domain: Asset · api/v1/asset/khu-1-pilot
devSlash: /agent-dev
gates: tz_yes · xco_na · share_a

## Decisions
- changeScope=new_page · packKind=list · Kind A/B · **cấm** Thêm mới / form CRUD / mobile
- route_confirm **route_a** (autoApprove) · `/khu-1-pilot` · mfeStdUrl `http://localhost:9301/khu-1-pilot`
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · be: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- FilterBar `/rmms-filter-org` · zoneOrgCode=REG-I lock · đoạn=km_skip
- API-01 GET list · API-02 re-import · API-03 re-init · LKP Integration cite live
- Persist P1: no new table · Step 4b=/new-endpoint · scoped REG-I only
- GAP-K1-MOBILE-01 CLOSED OUT · GAP-TL-* formtype/filter/leave/dev-assign/grid closed

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| zoneOrgCode | Khu | locked chip | REG-I · cấm II…IV |
| vpOrgCode | Văn phòng | SearchInput | VP-I.* · cấm VP-II.* |
| assigneeCode | Đơn vị | SearchInput | cascade SU/partner |
| routeCode | Tuyến | SearchInput | ⊆ Khu I · cấm QL.1 default |
| search | Tìm | SearchTextInput | 🔍 · no nút Tìm |
| importSet | Bộ import | chips RO | gov-vn · t6-org-scope · drvn-org |
| reImport/reInit | ops | Button+confirm | API-02/03 scoped |
| catalog/countInScope/lastImportAt/status | grid | Text/Number/Badge | cấm mock |

## Screens / zones (ids only)
- SCR-K1-01 S-LIST DES-GRID-A · B · B-FILTER · C0 · C2 · D · DES-OPS
- S-ACT-REIMPORT · S-ACT-REINIT DES-ALERT (scope REG-I)
- SCR-K1-MAP peer consume only · T-OUT-01
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/khu-1-pilot`

## API / tasks (ids only)
- FormMode↔API: List API-01 · ops API-02/03 · LKP Integration cite
- T-*: T-DM-01(done) · T-CTX-01 · T-BE-01..04 · T-BFF-01 · T-PERM-01 · T-FE-01..04 · T-OUT-01 · T-QA-01
- deps: T-BE → T-BFF → T-FE → T-QA
- Next: **dev** · /agent-dev · e2e queued QA only

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/task/khu-1-pilot.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/be/solution-discovery.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/design.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/STATUS.md`
- prior: sa-compact · design-compact · po-compact · data_analy-compact

## Cấm (compact)
ERP.* · invent-seed · mock import · Thêm mới · mobile · yarn build/e2e/start:std · Step 4b TL · GAP-PKT-ROLE-01 · nationwide wipe
