# Handoff compact — dev

schemaVersion: 1
feature: ops
packKind: list
role: dev
status: done
skillVersion: 2026.08.19.26
writtenAt: 2026-09-01T02:15:00.000Z
taskId: task_708dcc0b
slash: /edit-mobile-feature
gap: cleanup_mock

## Decisions
- changeScope: edit_page
- formPattern: N/A (list only · mark-read on row · **cấm** create form)
- mfeStdUrl: none (native)
- live-only: removed `OpsCopy.demoItems` iOS+Android
- empty: EmptyChrome `ops-empty`
- fail: empty + toast `ops.toast.loadFail` (**cấm** «Đang dùng dữ liệu mẫu»)
- seed: POST `notification/inbox` via BFF · EmptyChrome OK nếu tenant rỗng · Step 4b N/A
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-ops | Thông báo | ListRow+Badge | live GET inbox |
| ops-empty | Chưa có thông báo | EmptyChrome | GET OK empty |
| row-ops-* | inbox row | ListRow | tap unread → mark-read |

## Screens / zones (ids only)
- DES-MOB-OPS / #sc-ops
- reviewUrlIos=file://…/prototype/ios/index.html#sc-ops
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-ops
- peerStdUrl=—

## API / tasks (ids only)
- GET notification/inbox · POST …/{id}/mark-read · optional GET notification/overview
- FormMode↔API: N/A list
- T-BE: N/A Signed Notification

## Debt
- GAP-MOB-UX-COMP-OPS-01 Android TopBar trailing DEFER
- QA/Review scenarios still mention demo rows → patch next QA turn

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/ops/implement/ios.md · android.md
- STATUS: specs/ops/STATUS.md
- po: specs/ops/po/requirement-mobile.md
- design: specs/ops/ui/design-mobile.md · ux-analy.md
- parent: specs/mobile-cleanup-mock/STATUS.md
