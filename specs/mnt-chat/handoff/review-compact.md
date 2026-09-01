# Handoff compact — review

schemaVersion: 1
feature: mnt-chat
packKind: sheet
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T09:45:00.000Z
taskId: task_ae161e19
slash: /agent-review-mobile
review_confirm: done
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page · qaFailFix chain closed
- formPattern: sheet → screen `#sc-mnt-chat`
- review_confirm: done · Must align 0 · post_review skip
- entry: `#i-chat` → navigate · **0** toast (GAP-MOB-EDIT-01)
- API: GET/POST maintenance/work-orders/{id}/messages · DTO parity PASS
- security: Keychain/EncryptedPrefs · Bearer · **cấm ERP.***
- align: QA A3↔P6↔demo Aligned · empty live Accept
- mfeStdUrl: none · **cấm** start:std / e2e ở role này
- open: GAP-MSG-HUB-01 DEFER (SignalR · Notification)
- phase_to: done · pipeline complete

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-mnt-chat | Trao đổi công việc | Chat screen | kit thread+composer |
| chat-wo-sub | WO title · code | Text | API/seed |
| composer | Nhập tin nhắn… | LinmChatComposer | send |
| btn-mnt-chat-{id} | Trao đổi | IconButton | entry navigate |

## Screens / zones (ids only)
- DES-MOB-MNT-CHAT / #sc-mnt-chat
- findings: review/findings.md · REVIEW-META.json
- shots: qa/store/mnt-chat/ · CAPTURE.md · scenarios PASS

## API / tasks (ids only)
- GET/POST maintenance/work-orders/{id}/messages
- T-IOS-01 · T-AND-01 · T-BE/BFF · T-QA · T-REVIEW-* PASS
- debt: GAP-MSG-HUB-01 P2 DEFER · non-block

## VERIFY
- prior Dev iOS/Android/BFF PASS (`task_e0e94a4c`)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (`task_d743848b`)
- Review: no re-run build/e2e · done · phase complete

## Findings counts
- P0: 0 · Must align: 0 · P2 DEFER: 1 (GAP-MSG-HUB-01)
- review_confirm: done · post_review: skip

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/mnt-chat/review/findings.md
- STATUS: specs/mnt-chat/STATUS.md
- qa: specs/mnt-chat/qa/scenarios.md · qa/store/mnt-chat/CAPTURE.md
