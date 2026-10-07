# Handoff compact — review

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T04:00:00.000Z
taskId: task_9a0b766f
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
changeScope: edit_page
formPattern: Mobile full ≤430 · WORK-L + GV-F gate
formType: phone-list · WAIVE Kind B
review_confirm: done
autoApprove: ON
e2eQa: ON
hashGate: skip

## Decisions
- changeScope: edit_page · cấm giao-viec invent · cấm ERP.* · cấm web-bff
- verdict: **PASS** · review_confirm=done · soft debt only
- QUERY: list unscoped · no creator filter · S0 live 17 cards
- SEC: roleCaps.qlHat gate · non-qlHat deny S1 · cấm MANAGER suy giao
- UI-FN: TT41 hangMuc+dueAt code PASS · headed qlHat soft debt
- BE-FN: POST work-orders dueAt absolute · omit SlaHours · Maintenance Mobile.Bff
- hash skip: contentHash unchanged vs STATUS/priors
- soft: SOFT-RV-01 headed GV-F needs HAT user · SOFT-RV-02 stock e2e DUP `_capture_gv.mjs`
- open questions: none blocking
- next: none (roleOnly stop · GAP-PKT-ROLE-01) · chain review complete

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| assignCta | Button gated | PASS qlHat |
| assignee/team | SearchInput | PASS required |
| hangMuc | Dropdown TT41 | PASS code · soft headed |
| dueAt | DateTime | PASS · no SlaHours |
| submitAssign | Button | PASS POST WO |
| list.* | CardList | PASS unscoped |
| leave | LeaveConfirmModal | PASS soft (QA WAIVE smoke) |

## Screens / zones (ids only)
- GV-00 · WORK-L · GV-W · GV-F(gate) · LG-00 · DES-LEAVE · TOAST
- qa screens: S0/S1/QA-20 PASS
- runtimeUrl=`http://localhost:9301/web-rmms-giao-viec-ql-hat`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- DES-GRID: N/A WAIVE

## API / tasks (ids only)
- FormMode↔API: GET incidents · patrol · POST work-orders · opt assign · users · auth/profile
- T-GV-01..05 · T-QA-GV-01 PASS · review PASS
- debt soft: SOFT-RV-01 · SOFT-RV-02

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/handoff/qa-compact.md

## Handoff next
| Role | Do |
|------|----|
| — | pipeline review done · **cấm** start role khác từ task này |

## Cấm
- ERP.* · implement · e2e/start:std ở review · phase rewrite data_analy..qa · start role khác

<!-- compact schemaVersion=1 role=review feature=web-rmms-giao-viec-ql-hat taskId=task_9a0b766f -->
