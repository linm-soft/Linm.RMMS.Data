# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T19:25:00.000Z
taskId: task_a2f83080
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON · runtime PASS

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full · phone 430 · no master form · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-home · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 guest · S1 staff LoginSheet · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft port 5101/5201 → `_capture_home.mjs`
- fix: chrome.ts read/clear `auth_token` (GAP-QA-AUTH-TOKEN-KEY)
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestFaq/Privacy/Login | Static/Button | S0 PASS · → SH-02 |
| qaPatrolPoint/IncidentNew | Button/Nav | S1 PASS |
| grid×6 | Button/Nav | S1 PASS |
| walletAsset | Button/Nav | S1 PASS |
| notifyBadge | Number RO | S1 Live overview |
| profileName | Text RO | S1 Live profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06 · SH-02
- mfeStdUrl= http://localhost:9301/web-rmms-home
- screens= specs/web-rmms-home/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET auth/login · auth/profile · notification/overview = 200 (S1)
- T-QA-CRUD-01 · T-QA-HOME-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none

## Debt
- stock e2e port gate · compose web-bff restart · forms/init-data 404 soft
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
