# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:50:00.000Z
taskId: task_e3fe4893
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
changeScope: edit_page
formPattern: Mobile full ≤430 · WORK-L + GV-F gate
formType: phone-list · WAIVE Kind B
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-giao-viec-ql-hat → /cong-viec
- runtimeUrl: `http://localhost:9301/web-rmms-giao-viec-ql-hat` · existing start:std · **cấm** kill worker
- be docker: D:/AI-QLBD/Linm.RMMS.WebService · api:5111 · bff:5201 · Mobile.Bff:5202 healthy
- T-QA-GV-01 PASS · S0/S1/QA-20 PNG distinct · yarn build PASS
- stock e2e-qa S1 DUP → `_capture_gv.mjs` SPA fulfill + dang-nhap login
- S0: WORK-L live 17 cards · cap=other · 0 assignCta
- S1: mode=assign deny toast QL_HAT · search filter cardCount=1
- QA-20: /dang-nhap LG-00
- DES-GRID/filter Kind B: WAIVE phone
- soft: GV-F TT41 headed needs HAT user · debt Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list.* | WORK-L | CardList | S0 live · unscoped |
| assignCta | Giao việc | Button gated | hidden cap=other |
| search | tìm | SearchInput | S1 filter |
| submitAssign | giao | Button | deny path S1 |
| hangMuc/dueAt | TT41 | Dropdown/DateTime | soft · no qlHat headed |
| login | dang-nhap | Form | QA-20 |

## Screens / zones (ids only)
- GV-00 · WORK-L · GV-W · GV-F(gate) · LG-00 · DES-MOB-TABBAR
- screens: specs/web-rmms-giao-viec-ql-hat/qa/screens/{S0,S1,QA-20}.png · manifest ok=true
- runtimeUrl=`http://localhost:9301/web-rmms-giao-viec-ql-hat`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- DES-GRID: N/A

## API / tasks (ids only)
- T-QA-GV-01 PASS · e2e runtime not static-only
- debt soft: stock DUP · WDS 404 fulfill · GV-F headed needs qlHat user

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/qa/scenarios.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/implement/web-rmms-giao-viec-ql-hat.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/handoff/dev-compact.md

## Handoff next
| Role | Do |
|------|----|
| review | findings · REVIEW-META · compact · **cấm** start từ task QA |

## Cấm
- ERP.* · phase=done · taskkill node/yarn rộng · start role khác · static-only PASS

<!-- compact schemaVersion=1 role=qa feature=web-rmms-giao-viec-ql-hat taskId=task_e3fe4893 -->
