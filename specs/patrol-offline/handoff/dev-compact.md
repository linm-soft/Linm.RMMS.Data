# handoff-compact · dev · patrol-offline
schemaVersion: 1
role: dev
feature: patrol-offline
taskId: task_93163b23
slash: /edit-mobile-feature
mode: fix_gaps · cleanup_mock
updatedAt: 2026-09-01T08:10:00.000Z
status: confirmed

## DoR
- changeScope: edit_page · packKind: list · live-only local queue
- mfeStdUrl: — (cấm)
- demo: **removed** demoItems + first-launch seed · purge demo-*
- empty: EmptyChrome · BE empty OK (real enqueue only)
- ACTION: Sync only · no search/CRUD form

## VERIFY GATE
| gate | result |
|------|--------|
| iOS xcodegen + xcodebuild iPhone 17 Pro | PASS |
| Android assembleDebug | PASS |
| BFF dotnet build | PASS (prior · unchanged) |

## Debt
- Sibling writers enqueue still P2 (GAP-MOB-ACT-PAT-OFFLINE-01)
- Parent epic `mobile-cleanup-mock` row patrol-offline → DONE

## Artifacts
- implement/ios.md · implement/android.md
