# Dev — Implement iOS — field-reflect (GAP-MOB-FIELD-SESS-01)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| packKind | **`screen`** |
| taskId | `task_552af9c4` · `T-IOS-FIELD-SESS-LIVE` |
| updatedAt | `2026-09-12T11:00:00.000Z` |
| autoApprove | ON |
| prior ship | `T-IOS-FIELD-REF` **giữ** |

## Delta this turn

| Area | Note |
|------|------|
| Sessions | `FieldReflectViewModel.bootstrap` — live-only `FetchPatrolSessionsOutcome` · **cấm** `itemsOrDemo` / `demoToday` |
| Active | `.loaded` + active «Đang tuần» → bind `routeStamp` / `locationRow` |
| Empty | `.loaded` + no active → `routeStamp=""` · toast `field.banner.empty` «Không có ca đang tuần» · banner pick giữ |
| Fail | `.loadFailed` → empty · toast `field.toast.sessionsFail` «Không tải được ca tuần» |
| Keep | pick→form · kind · PhotoRow · detect · severity · CHK · Create/Draft · GPS deny |
| Copy | `LinmCopy` + `field.toast.sessionsFail` |
| API | reuse GET `patrol/sessions` · **cấm** invent · Step 4b **n/a** |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro Max (`518BFF77…` · OS 26.2) | **PASS** |
| Invent `field-reflect` API | **none** |
| Step 4b / BFF write | **n/a this edit** |

## Paths

- `Presentation/Features/FieldReflect/FieldReflectViewModel.swift`
- `Presentation/Shared/LinmCopy.swift`
- `Domain/UseCases/PatrolHomeUseCases.swift` (comment only)

## UI review (frame)

- Must: 0 · live-only sessions · toast kit (no `UIAlertController`) · zones `#sc-field-pick` / `#sc-field-reflect` giữ

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.09.05.03 schemaVersion=1 -->
