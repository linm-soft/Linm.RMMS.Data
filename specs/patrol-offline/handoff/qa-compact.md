# Handoff compact — qa

schemaVersion: 1
feature: patrol-offline
packKind: list
role: qa
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T08:27:11.000Z
taskId: task_883401d4
slash: /agent-qa-mobile
gap: cleanup_mock re-e2e · ok:true · EmptyChrome live-only

## Decisions
- changeScope: edit_page post cleanup_mock · packKind list
- mfeStdUrl: none (native_dual · cấm start:std)
- e2eQa: ON · yarn e2e-qa-mobile · ok:true · A11/A10/A9/A3/P6/P6-2 PASS
- align: chrome/kit Aligned · Must 0 · list EmptyChrome vs demo 2-card = intentional
- data: live-only · BE empty OK · cấm demo seed assert
- autoApprove: ON
- open: GAP-MOB-ACT-PAT-OFFLINE-01 Defer · Android EmptyChrome hint optional P2

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-offline | Dữ liệu lưu trữ | Screen | A3+P6 |
| offline-empty | EmptyChrome | Empty | title VN |
| btn-sync | Đồng bộ | TopBar trailing | Sync-only |
| nav-back | Trang Chủ | TopBar leading | text |
| segment | Điểm tuần / Sự cố | LinmSegment | filter |
| row-offline | Me entry | ListRow | nav |

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- reviewUrlIos=file://…/prototype/ios/index.html#sc-patrol-offline
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-patrol-offline
- peerStdUrl=—
- store: qa/store/patrol-offline/ · screens A11/A9/A3/P6/P6-2
- next: review pending (roleOnly=qa done)
