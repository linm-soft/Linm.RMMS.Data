# handoff-compact · dev · patrol-offline
schemaVersion: 1
role: dev
feature: patrol-offline
taskId: task_4fae30f8
slash: /edit-mobile-feature
mode: fix_gaps · cleanup_mock_offline_storage
updatedAt: 2026-09-01T11:31:00.000Z
status: confirmed

## DoR
- changeScope: edit_page · packKind: list · live pendingCount only
- mfeStdUrl: — (cấm)
- gap: gỡ hardcode «3 bản ghi chờ đồng bộ» (`patrol.quick.offlineSub`)
- subtitle: count>0 → fmt `%d` · count=0 → empty copy / EmptyChrome
- Me row: same · badge ẩn khi 0
- ACTION: Sync only · no search/CRUD form · btn-sync → POST offline-batch **work**

## VERIFY GATE
| gate | result |
|------|--------|
| iOS xcodegen + xcodebuild iPhone 17 Pro | PASS |
| Android assembleDebug | PASS |
| BFF dotnet build | PASS (unchanged) |

## Debt
- Sibling writers enqueue still P2 (GAP-MOB-ACT-PAT-OFFLINE-01)
- Parent epic `mobile-cleanup-mock` residual Lưu trữ → DONE this task

## Artifacts
- implement/ios.md · implement/android.md
- SSOT docs/mobile-strings.json
