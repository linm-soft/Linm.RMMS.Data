# Handoff compact — qa

schemaVersion: 1
feature: mnt-chat
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T09:40:00.000Z
taskId: task_d743848b
slash: /agent-qa-mobile

## Decisions
- changeScope: edit_page · qaFailFix re-QA
- formPattern: sheet → screen `#sc-mnt-chat`
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4 DEFER
- store_qa: run_store
- verdict: **pass** · visual **Aligned** · Must 0
- empty thread: live OK («Chưa có trao đổi») · demo bubbles = seed only · Accept
- entry: navigate `#i-chat` · **0** toast
- open questions: GAP-MSG-HUB-01 DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-mnt-chat | Trao đổi công việc | Chat screen | A3+P6 live |
| chat-wo-sub | Vá mặt đường · WO-DEMO-1 | Text | seed |
| composer | Nhập tin nhắn… | LinmChatComposer | send kit |
| btn-mnt-chat-{id} | Trao đổi | IconButton | entry |

## Screens / zones (ids only)
- DES-MOB-MNT-CHAT / #sc-mnt-chat
- PNG: qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- store: qa/store/mnt-chat/

## API / tasks (ids only)
- T-QA-E2E · A11,A10,A9,A3,P6,P6-2 **PASS**
- GET/POST maintenance/work-orders/{id}/messages
- A10-BFF :5202 · API :5111 (--skip-start)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/mnt-chat/qa/scenarios.md
- CAPTURE: specs/mnt-chat/qa/store/mnt-chat/CAPTURE.md
- bugs: specs/mnt-chat/qa/bugs/mnt-chat.md
- STATUS: specs/mnt-chat/STATUS.md
