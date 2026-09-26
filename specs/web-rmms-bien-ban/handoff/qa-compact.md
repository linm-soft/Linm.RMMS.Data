# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:00:57.087Z
taskId: task_a1b4753a
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile list + create TD/TK + detail · phone 430 · LeaveConfirmModal · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-bien-ban · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.* · petitions kind=hanh-lang
- e2e: S0 guestGate · S1 BB-01 Live empty · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_bien_ban.mjs`
- Live S1: list.search · btnCreateTd/Tk · list.empty · DES-MOB-BIEN-BAN
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestGate | Static/Button | S0 PASS |
| BB-ROOT / BB-00 | Layout | DES-MOB-BIEN-BAN |
| list.search / empty | Search/Empty | S1 PASS |
| btnCreateTd/Tk | Button/Nav | BB-07 PASS |
| loginUser/Pass/Submit | LoginSheet | QA-20 PASS |

## Screens / zones (ids only)
- BB-00 · BB-01 · BB-07 · DES-MOB-BIEN-BAN · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-bien-ban
- screens= specs/web-rmms-bien-ban/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET petitions kind=hanh-lang · guest no Live list
- T-QA-CRUD-01 · T-QA-FORM-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step4b N/A (reuse Live)

## Debt
- stock e2e port gate · WDS deep-link fulfill · playwright junction · S1 empty Live · SO07 disable+copy · create parent id
- UNCLEAR: none

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
