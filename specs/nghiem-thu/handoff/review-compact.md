# Handoff compact — review

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T10:10:00.000Z
changeScope: new_page
taskId: task_1b121e02
contentHashPrior: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
reviewHash: sha256:4472b6cd5498ba5a206c9c21463c4adffe19c1c26299ccdfbc21757d190f8e1a
autoApprove: ON
review_confirm: accept
mfeStdUrl: http://localhost:9304/nghiem-thu

## Decisions
- changeScope: new_page · Kind B · Full `data-form-cols=5`
- mode: review_only · **cấm** start:std/e2e/build this role
- evidence: QA screens + static FE/BE · manifest ok · CRUD `NT-*`
- findings: P0=0 · P1=0 · P2=2 · P3=1 · **accept**
- debt KEEP: Auth stub · e2e npx flake · Leave visual P3
- **cấm** ERP.* / WO / sessions · Patrol `api/v1/patrol/nghiem-thu`
- next: chain done (roleOnly=review) · no further role this task

## Inventory (slim)
| id | class | sev | notes |
|----|-------|-----|-------|
| REV-S-01 | security | P2 | RequirePermission stub |
| REV-QA-01 | ui-fn | P2 | e2e-qa npx flake |
| REV-UI-02 | ui-fn | P3 | Leave dialog headed |

## Screens / zones (ids only)
- QA: S0/S1/QA-20/QA-CRUD/QA-VIEW/QA-LEAVE/QA-FILTER-{D,T,M}
- zones: DES-GRID-A…D · form Full · DES-LEAVE · DES-NT-UPLOAD
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html

## API / tasks (ids only)
- FormMode↔API: List→01 · V/E/Copy→02 · C→03 · E→04 · Del→05 · init→00 · Files→FILE **PASS**
- QUERY/SEC/UI/BE gates **PASS** (P2/P3 debt only)

## UNCLEAR
- none blocking

## Full paths (Read only if needed)
- findings: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/review/findings.md`
- META: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/review/REVIEW-META.json`
- prior qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/qa-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
