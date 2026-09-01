# Handoff compact — review

schemaVersion: 1
feature: patrol-home
packKind: hub
role: review
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T05:30:00.000Z
taskId: task_262a3fa6
slash: /agent-review-mobile
review_confirm: approve
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page (recheck post cleanup_mock dev + re-QA)
- formPattern: hub · hero + today list + quick rows · sibling nav/toast
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=approve
- live-only: GET sessions → active filter · empty = EmptyChrome · fail = toast · **cấm** `demoToday`/`demoActive` on patrol-home · GAP-MOB-EDIT-DEMO **closed**
- activeSession: `PatrolHomeCopy.emptyActive` when no «Đang tuần»
- Step 4b: N/A — reuse GET `patrol/sessions`
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-home | Tuần đường | TopBar+Segment | tab field |
| patrol-hero | Ca đang chạy | LinmHeroCard | live or emptyActive |
| patrol-today-empty | Không có phiên hôm nay | EmptyChrome | GET ok empty |
| row-today-* | Today rows | LinmListRow | GET sessions |
| row-quick-* | Quick actions | LinmListRow | sibling nav/toast |

## Screens / zones (ids only)
- DES-MOB-PAT-HOME / #sc-patrol-home
- reviewUrlIos=specs/patrol-home/ui/prototype/ios/index.html#sc-patrol-home
- reviewUrlAndroid=specs/patrol-home/ui/prototype/android/index.html#sc-patrol-home
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/sessions?page=1&pageSize=50`
- T-IOS/AND-PAT-HOME PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN PASS
- debt: siblings `itemsOrDemo` · GAP-MOB-ACT-06 · GAP-QA-A11Y-TAB-FIELD-01 DEFER

## VERIFY
- prior Dev iOS/Android/BFF PASS (cleanup_mock task_22fa5cba)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_2fbe1ca6)
- Review: no re-run build/e2e · review_confirm=approve · phase done

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 1 · P2 Accept: 2 · Defer: 2
- review_confirm: approve · post_review: skip

## UNCLEAR
- none
