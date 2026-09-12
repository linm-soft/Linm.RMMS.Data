# Dev — Implement — patrol-home (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| task | `T-IOS-PAT-HOME-SESSION` · `task_523eaa0e` |
| role | `/agent-dev-ios` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | `hub` |
| route_confirm | **route_a** |
| updatedAt | `2026-09-12T15:20:00.000Z` |
| contentHash | `sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a` |
| bffContentHash | `sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0` |

## Delta (edit_page)

| Gap | Before | After |
|-----|--------|-------|
| SESSION-01 | no CTA / no POST | `btn-open-session` → POST `patrol/sessions` · refresh GET |
| SESSION-02 | detail end toast-only | PUT `patrol/sessions/{id}` Status=Hoàn thành · IsActive=false · back |
| HERO-01 | mapper fallback QL.1·Km468+200 / Nguyễn Văn A / 07:20 | empty/`—` · no demo sample |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `PatrolHome/*` · `PatrolHistoryDetailViewModel` |
| Domain | `CreatePatrolSessionUseCase` · `EndPatrolSessionUseCase` · `PatrolSessionBodies` |
| Data | `PatrolRepositoryImpl` POST/PUT · `PatrolDtoMapper.activeFromSession` |

## APIs

- GET `patrol/sessions` (keep)
- POST `patrol/sessions` (Create · UserName=auth · Route=QL.1 · Status=Đang tuần)
- PUT `patrol/sessions/{id}` (end · IsActive=false)

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
```

**PASS** · BFF `dotnet build` PASS · Step 4b N/A · mfeStdUrl —

## Debt

- Route picker on open (P2) — default `QL.1` catalog
- Sibling `pending_confirm` — cấm auto start
