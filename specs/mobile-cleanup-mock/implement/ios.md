# Dev — Implement — mobile-cleanup-mock (iOS)

| Field | Value |
|-------|-------|
| Feature | `mobile-cleanup-mock` |
| Role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | `hub` (epic residual) |
| taskId | `task_a33dfede` |
| dest | **iPhone 17 Pro** · **BUILD SUCCEEDED** (`LinmRmms`) |
| updatedAt | `2026-09-01T10:10:00.000Z` |

## Summary

Epic residual cleanup: gỡ OfflineDemo / empty→demo trên `asset-detail` · `asset-adjust` · `incident-list`; estimate bỏ `demoFromIncident`; toast **cấm** «Đang dùng dữ liệu mẫu».

## Files (key)

| Path | Change |
|------|--------|
| `FetchRoadAssetByIdUseCase.swift` | `.loadFailed` / `.notFound` |
| `FetchAssetAdjustListUseCase.swift` | `.loadFailed` |
| `FetchIncidentsUseCase.swift` | `FetchIncidentsOutcome` live-only |
| `EstimateViewModel.swift` | no demo fallback rows |
| `LinmCopy.swift` | loadFail + empty keys |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| asset-adjust Search | debounce → GET · **work** |
| asset-adjust Edit | push detail · **work** |
| incident-list Search | client filter · **work** |
| incident-list Create FAB | onCreate → create form · **work** |
| asset-detail View | EmptyChrome 404/fail · **work** |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |
| Mobile.Bff `dotnet build` | **PASS** |
| e2e / mfeStdUrl | **cấm** Dev |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 taskId=task_a33dfede -->
