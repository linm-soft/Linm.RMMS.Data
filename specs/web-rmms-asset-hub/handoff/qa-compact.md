# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:30:00.000Z
taskId: task_a46a2b1b
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-asset-hub

## Decisions
- changeScope: new_page
- formPattern: Mobile Hub / full · phone 430 · Leave N/A · DES-GRID WAIVE
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 (no kill) + docker up + capture_ahub S0/S1/QA-20 · MFE /login
- T-QA-HUB-01 · T-QA-TILE-01 · T-QA-AI-EMPTY-01 **PASS** · FILTER/Leave **WAIVE**
- stock e2e soft-fail DUP S1=S0 · capture_ahub S1=Home `#walletAsset`
- Live wallet: KHAC — Khác · 45 loại · BFF GET 200
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| wallet.* | hồ sơ RO | Text RO | S0 Live GET |
| tile×5 | nav | Button/Nav | headed |
| rowGis | bản đồ | Button/Nav | AH-06 |
| aiPending | Draft | ListRow | hide empty AH-07 |
| walletAsset | Home entry | Button | S1/QA-20 |

## Screens / zones (ids only)
- AH-00…AH-06 · AH-07 absent empty · PNG `qa/screens/{S0,S1,QA-20}.png`
- S1 peer: `/web-rmms-home` `#walletAsset`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-hub

## API / tasks (ids only)
- VERIFY: road-routes + asset-types **200** · visual Aligned · 0 crash
- T-QA-HUB/TILE/AI-EMPTY = done
- soft: GAP-QA-E2E-STOCK-DUP · LOOKUP_HINT_KEYS · GAP-F-AHUB-01 accepted

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/handoff/dev-compact.md
