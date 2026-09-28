# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:23:00.000Z
taskId: task_5a9c35f8
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
changeScope: edit_page
mfeStdRoute: /bien-ban
mfeStdUrl: http://localhost:9301/bien-ban
e2eQa: ON PASS · runtime capture
autoApprove: ON
qa_confirm: approve

## Decisions
- E2E S0/S1/QA-20 **PASS** · PNG distinct · 0 crash · route `/bien-ban`
- Auth: LoginPage `/dang-nhap` LG-00 `#f-user/#f-pass/#btn-login` (supersede SH-02 sheet)
- Capture `127.0.0.1:9301` · stock yarn e2e-qa FAIL soft API:5101 vs :5111
- T-QA-CRUD/FORM/VI-ENC PASS · T-QA-FILTER WAIVE · leave/LKP create soft (Dev code)
- **cấm** phase=done · **cấm** GAP-QA-E2E-KILL-01 · no kill worker
- next: /agent-review* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | expect | result |
|----|--------|--------|
| S0 guest BB-00 | guestGate · BB-ROOT · DES-MOB-BIEN-BAN | PASS |
| S1 staff BB-01 | search · btnCreateTd/Tk · list.empty Live | PASS |
| QA-20 login | LG-00 · f-user/f-pass/btn-login | PASS |
| T-QA-CRUD/FORM | petitions Live · surface AC | PASS |
| T-QA-FILTER | LinErpListFilterBar | WAIVE |

## Screens / zones
- BB-00 · BB-01 · BB-07 · LG-00 · DES-MOB-BIEN-BAN · DES-MOB-TABBAR
- screens: qa/screens/S0.png · S1.png · QA-20.png
- peerStdUrl= http://localhost:9301/bien-ban

## API / tasks
- docker `:5111`/`:5201` healthy · start:std reuse :9301
- FormMode↔API: GET petitions kind=hanh-lang · auth LoginPage · Live empty OK
- T-QA-* done · Review pending
- debt soft: stock-port · ipv6-localhost · SO07 · create parent id

## UNCLEAR
- none

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
- result: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/qa/screens/_capture_bien_ban.result.json
