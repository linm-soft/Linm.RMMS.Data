# Handoff compact — review

schemaVersion: 1
feature: mnt-list
packKind: list
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T05:30:00.000Z
taskId: task_fdf1f59c
slash: /agent-review-mobile
review_confirm: done
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page (recheck post cleanup_mock dev + re-QA)
- formPattern: list · hub row + rich cards · sibling CTAs nav/toast
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=done
- live-only: FetchWorkOrdersUseCase · **cấm** MntListCopy.demoItems · GAP-MOB-REAL-02 closed
- edit gaps: GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01 **closed**
- store: PrivacyInfo.xcprivacy Accept P2 → post_review
- open questions: siblings pending_confirm · A4-IPAD DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-mnt-list | Danh sách công việc | TopBar+Search | tab `.work` |
| mnt-search | Tìm kiếm | LinmSearchField | client filter |
| row-mnt-hub | Giao việc xử lý | LinmListRow | → estimate hub |
| card-mnt-* | Card công việc | LinmCard | status text bar + actions flex:1 |

## Screens / zones (ids only)
- DES-MOB-MNT-LIST / #sc-mnt-list
- reviewUrlIos=file://…/prototype/ios/index.html#sc-mnt-list
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-mnt-list
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/maintenance/work-orders?page=1&pageSize=50`
- T-IOS/AND-MNT-LIST PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN/REAL PASS
- debt: GAP-MOB-COPY-SEARCH-01 Should · siblings pending_confirm

## VERIFY
- prior Dev iOS/Android/BFF PASS (edit-mobile-feature task_53934dab)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_c9ac27ea post cleanup_mock)
- Review: no re-run build/e2e · review_confirm=done · phase done

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 1 · P2 Accept: 2
- review_confirm: done · post_review: skip

## UNCLEAR
- none
