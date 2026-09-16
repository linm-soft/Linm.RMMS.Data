# Dev — Implement Android — field-reflect (GAP-MOB-FIELD-SESS-01)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** |
| packKind | **`screen`** |
| taskId | `task_552af9c4` · `T-AND-FIELD-SESS-LIVE` |
| updatedAt | `2026-09-12T11:00:00.000Z` |
| autoApprove | ON |
| prior ship | `T-AND-FIELD-REF` **giữ** |

## Delta this turn

| Area | Note |
|------|------|
| Sessions | `FieldReflectViewModel.bootstrap` — live-only `FetchPatrolSessionsOutcome` · **cấm** `itemsOrDemo` / `demoToday` |
| Active | `Loaded` + active → bind `routeStamp` |
| Empty | `Loaded` + no active → empty · toast `field.banner.empty` |
| Fail | `LoadFailed` → empty · toast `field.toast.sessionsFail` |
| Keep | pick→form · kind · photos · detect · severity · CHK · Create/Draft · GPS deny |
| Copy | `LinmCopy` + `field.toast.sessionsFail` |
| API | reuse GET `patrol/sessions` · Step 4b **n/a** |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** |
| Invent API / BFF write | **none** |

## Paths

- `presentation/feature/fieldreflect/FieldReflectViewModel.kt`
- `presentation/copy/LinmCopy.kt`
- `domain/usecase/PatrolHomeUseCases.kt` (comment only)

## UI review (frame)

- Must: 0 · parity iOS · ToastHub · zones `sc-field-pick` / `sc-field-reflect` giữ

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.09.05.03 schemaVersion=1 -->
