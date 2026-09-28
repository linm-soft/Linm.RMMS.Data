# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-ui-align
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T07:22:00.000Z
taskId: task_0ff03f63
contentHash: sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b
autoApprove: ON
e2eQa: ON · runtime PASS

## Decisions
- changeScope: edit_page
- formPattern: Full/Overlay/Tab phone ≤430 · LeaveConfirm · N/A ERP Modal · DES-GRID N/A-chrome
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-ui-align · :9301
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- verdict: PASS · T-QA-01 PASS · visual Aligned S0/S1/QA-20
- e2e: stock yarn e2e-qa playwright resolve FAIL soft → `_capture_ui_align.mjs` + junction
- PNG: specs/web-rmms-ui-align/qa/screens/{S0,S1,QA-20}.png
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| tab.items | TabBar | S0 PASS · 5 stroke · Tôi |
| home.* | Static/Nav | S0 guest FAQ |
| me.* | Nav/RO/toast | S1 DES-MOB-ME |
| login.* | Text/Password | QA-20 LG-00 |

## Screens / zones (ids only)
- UA-00 · DES-MOB-TABBAR · HM-00/01/02 · DES-MOB-ME · LG-00
- mfeStdUrl= http://localhost:9301/web-rmms-ui-align
- screens= specs/web-rmms-ui-align/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live cite Auth/Notification/Patrol/Gis — no new API
- T-QA-01 · T-QA-CRUD-01 · T-QA-FORM-01 · T-QA-VI-ENC-01 = PASS · FILTER WAIVE
- entity/migration: none

## Debt
- stock e2e playwright resolve · feedback/cam peerPending · staff session soft
- UNCLEAR: none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md
