# Dev — Implement — patrol-home (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| task | `T-AND-PAT-HOME-SESSION` · `task_523eaa0e` |
| role | `/agent-dev-android` |
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
| SESSION-02 | detail end toast-only | PUT `patrol/sessions/{id}` · back |
| HERO-01 | mapper sample fallback | empty/`—` · dual parity iOS |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `patrolhome/*` · `patrolhistorydetail/PatrolHistoryDetailViewModel` |
| Domain | `CreatePatrolSessionUseCase` · `EndPatrolSessionUseCase` · `PatrolSessionBodies` |
| Data | `ApiService` POST/PUT · `PatrolRepositoryImpl` · `PatrolDtoMapper` |

## APIs

- GET/POST/PUT `patrol/sessions` (+ `{id}`) via BFF proxy · **cấm** PatrolHomeController

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

**PASS** · BFF `dotnet build` PASS · Step 4b N/A · mfeStdUrl —

## Debt

- Route picker on open (P2) — default `QL.1`
- Sibling `pending_confirm` — cấm auto start
