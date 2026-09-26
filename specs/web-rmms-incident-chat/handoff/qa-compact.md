# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-incident-chat
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:00:00.000Z
taskId: task_5e2292ca
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON · runtime PASS
changeScope: new_page

## Decisions
- formPattern: Mobile chat INC-CHAT · phone 430 · LinmChatThread+Composer · N/A Modal · DES-GRID N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · T-QA-FILTER WAIVE
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-incident-chat · :9301 reuse
- be: Mobile.Bff :5202 · API :5111 · cấm ERP.*
- e2e: S0 Live chat GET{id}+messages · S1 missingId · QA-20 SH-02 · PNG screens/*.png
- stock yarn e2e-qa: FAIL soft DUP S0/S1 (no ?id=) → `_capture_incident_chat.mjs`
- Live: GET INC-DEMO-202609-002 · emptyThread · composer · hasGps=false · peer i-chat on incident
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01)
- **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| topBarBack/Title/Subtitle | Button/Static/Text RO | S0 Live PASS |
| threadItems / emptyThread | ChatThread/Empty | S0 emptyThread=true · bubbleCount=0 |
| composerInput/Send | TextArea/Button | S0 hasComposer=true |
| missingId / emptyBack | EmptyState | S1 PASS |
| entry.chatIcon | Button/Nav peer | i-chat / btn-inc-chat-{id} on incident |

## Screens / zones (ids only)
- CH-00 · CH-01 · CH-02 · CH-03 · SH-02 · #sc-incident-chat
- mfeStdUrl= http://localhost:9301/web-rmms-incident-chat
- screens= specs/web-rmms-incident-chat/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- Live: GET incident/incidents/{id} · GET/POST messages · init-data opt
- T-QA-CRUD-01 · T-QA-CHAT-01 · T-QA-PEER-01 · T-QA-EMPTY-01 = PASS · T-QA-FILTER = WAIVE
- entity/migration: none · Step 4b N/A · T-BE N/A

## Debt
- stock e2e DUP/port gate · WDS deep-link fulfill · playwright junction · showDevNav
- GAP-QA-UI-MISSING-BANNER soft (S1 retry+missingId duplicate)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/STATUS.md
