# Handoff compact — design

schemaVersion: 1
feature: khu-1-pilot
packKind: list
role: design
status: done
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.06.01
rulesVersion: 2026.08.30.6
writtenAt: 2026-09-06T15:40:00.000Z
changeScope: new_page
taskId: task_57fde78f
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHash: sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056
headerFingerprint: sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3
autoApprove: ON
e2eQa: ON (queued /agent-qa*)

## Decisions
- changeScope: new_page · Kind A/B list · **no** Thêm mới / form CRUD
- Control = controlHint · FilterBar `/rmms-filter-org` · zoneOrgCode=REG-I lock
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/khu-1-pilot`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · Asset page GAP + Integration lookups · **cấm ERP.***
- Ops: importSet chips · reImport · reInit(danger) scoped REG-I
- Grid: catalog · countInScope · lastImportAt · status
- Leave: confirm modals ops only · Report N/A · demo N/A hash skip
- design_confirm **approve** (autoApprove) · open Q: none blocking

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| zoneOrgCode | Khu | locked chip / SearchInput RO | REG-I lock · cấm II…IV |
| vpOrgCode | Văn phòng | SearchInput | VP-I.1…I.4 · cấm VP-II.* |
| assigneeCode | Đơn vị | SearchInput | cascade · SU/partner |
| routeCode | Tuyến | SearchInput | ⊆ Khu I · cấm QL.1 demo default |
| search | Tìm | SearchTextInput | 🔍 phải · no nút Tìm |
| importSet | Bộ import | chips RO | gov-vn · t6-org-scope · drvn-org |
| pilotScope | Phạm vi | locked chip | REG-I |
| reImport / reInit | ops | Button+confirm | scoped · GAP-K1-API-01 |
| catalog / countInScope / lastImportAt / status | grid | Text/Number/Badge | cấm mock live |

## Screens / zones (ids only)
- SCR-K1-01 S-LIST DES-GRID-A · B · B-FILTER · C0 · C2 · D · DES-OPS
- S-ACT-REIMPORT · S-ACT-REINIT DES-ALERT (scope chip REG-I)
- SCR-K1-MAP peer consume only
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html`
- mfeStdUrl=`http://localhost:9301/khu-1-pilot`
- prototype=`specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html`

## API / tasks (ids only)
- Lookups live: Integration org-units / road-routes / partner-units / org-route-scopes
- Page list/status + scoped ReImport/ReInit: **GAP** SA Asset
- real-data §A+§B: PASS · contentHash 721f9c65…
- Next: **SA** DOMAIN-MAP + solution-discovery · GAP-K1-DM-01 · GAP-K1-API-01 · GAP-K1-SCOPE-01
- GAP-K1-PAGE-01 / GAP-K1-ALIAS-01 → Dev after SA
- T-*: (TL after SA) · devSlash=/agent-dev

## UNCLEAR
- none (DM/API deferred SA)

## Full paths (Read only if needed)
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/design.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/khu-1-pilot-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/khu-1-pilot-real-data.md`
- prior po: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/handoff/po-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/STATUS.md`

## Cấm (compact)
Demo HTML paste · re-scan demo · ERP.* · invent page API live · native select · Thêm mới · yarn build/e2e/start:std · GAP-PKT-ROLE-01 · mobile
