# Handoff compact — qa

schemaVersion: 1
feature: attendance
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.28
writtenAt: 2026-09-01T08:47:20.000Z
taskId: task_b96fb3d7
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · post cleanup_mock live-only
- e2e: yarn e2e-qa-mobile ok:true · cases A11,A10,A9,A3,P6,P6-2
- ios_test_phase: phase1_iphone · A4-IPAD DEFER
- store_qa: run_store · PNG live qa/screens + qa/store/attendance
- align: Read A3-CORE + P6-CORE-2 vs #sc-attendance · Must 0
- Maestro: guest→btn-home-login→login (fixed stale flow)
- API: docker :5111 · BFF :5202 · skip-start
- mfeStdUrl: none · cấm start:std

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-attendance | Chấm công hub | LargeTitle+Seg+Hero+List | Maestro PASS |
| att-segment | Tuần đường / Chấm công | Segment | idx1 active |
| att-hero | Chấm vào / Báo cáo | Hero | live status |
| att-day-* | day row | ListRow | iOS live · And empty OK |

## Screens / zones (ids only)
- DES-MOB-ATT / #sc-attendance
- evidence: qa/screens/{A11,A9,A3,P6,P6-2}.png
- store: qa/store/attendance/

## VERIFY
- yarn e2e-qa-mobile ok:true
- Maestro iOS+Android PASS
- Store PNG 1320×2868 / 1080×1920 RGB
- Visual Must 0
- Next: /agent-review-mobile (roleOnly gate — not this task)
