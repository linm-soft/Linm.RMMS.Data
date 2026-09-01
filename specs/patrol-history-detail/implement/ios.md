# Dev — Implement — patrol-history-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`sheet`** meta · surface Full `#sc-patrol-detail` |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| taskId | `task_158bf625` · prior `task_69386cbc` |
| updatedAt | `2026-09-01T11:10:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-PAT-DETAIL | **done** | `#sc-patrol-detail` · GET by id · hero+info+timeline demo · CTA map/end/share · list toast → push |
| T-BE / T-BFF | **n/a · reuse** | `GET patrol/sessions/{id}` live · proxy catch-all · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` · push Full
- **Entry (edit `task_158bf625`):** `#sc-patrol-home` today row + `#sc-patrol-history` row → push + `Id` · **supersede** toast `patrol.toast.detail`
- **API:** `GET patrol/sessions/{id}` · live-only · **cấm** OfflineDemo
- **404** → EmptyChrome · **GET fail** → EmptyChrome + toast · **403** → toast + back
- **CTA:** map → `patrol-map` · end/share toast
- **Timeline:** demo SSOT 3 (ListRow substitute)

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** (OS 26.5) | **PASS** (`task_158bf625`) |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/PatrolHistoryDetail/*` | NEW screen · VM · UiState |
| `Domain/Entities/PatrolHistoryDetailModels.swift` | NEW · demo SSOT · Status VN |
| `Domain/UseCases/FetchPatrolSessionByIdUseCase.swift` | NEW |
| `Domain/Repositories/PatrolRepository.swift` | +`fetchSessionById` |
| `Data/Repositories/PatrolRepositoryImpl.swift` | +GET by id |
| `Data/Dto/PatrolDto.swift` | +`detail` mapper |
| `Presentation/Features/PatrolHistory/PatrolHistoryViewModel.swift` | push wire |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `patrol.detail.*` |

## Debt

- Kit thiếu `LinmTimelineRow` → dùng `LinmListRow` (Design map · T-KIT n/a)
- Map CTA pass Id (nav) · PatrolMap chưa consume session Id P1
- Timeline tap → toast sibling `checkin-detail` (chưa screen riêng)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260831 |
| realDataHash | sha256:patrol-history-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-sessions-getbyid-passthrough |
| actionTreeHash | sha256:patrol-history-detail-action-tree-20260831 |
| iosContentHash | sha256:patrol-history-detail-implement-ios-20260901 |
| taskId | `task_69386cbc` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
