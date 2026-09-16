# Handoff compact — review

schemaVersion: 1
feature: incident-list
packKind: list
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T04:30:00.000Z
taskId: task_8fd8993f
slash: /agent-review-mobile
review_confirm: done
post_review: skip
autoApprove: ON

## Decisions
- changeScope: new_page · recheck post edit-mobile-feature task_3a718e5d
- formPattern: list + FAB create · card actions toast/nav sibling
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=done
- edit gaps: GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01 **closed**
- store: PrivacyInfo.xcprivacy Accept P2 → post_review
- open questions: siblings pending_confirm · A4-IPAD DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-incident-list | Danh sách sự cố | TopBar+Segment+Search | tab `.incident` |
| inc-list-search | Tìm kiếm | LinmSearchField | client filter |
| fab-inc-create | Tạo sự cố | LinmFab | → incident-create |
| card-inc-* | Card sự cố | LinmCard | status text bar + 4 actions flex:1 |
| row-inc-banner-vis | Banner VIS | LinmListRow | → vis-capture toast |

## Screens / zones (ids only)
- DES-MOB-INC-LIST / #sc-incident-list
- reviewUrlIos=file://…/prototype/ios/index.html#sc-incident-list
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-incident-list
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/incident/incidents?page=1&pageSize=50`
- T-IOS/AND-INC-LIST PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN/EDIT PASS
- debt: GAP-MOB-COPY-SEARCH-01 · GAP-MOB-A11Y-FAB-01 Should · thumb DEFER

## VERIFY
- prior Dev iOS/Android/BFF PASS (edit-mobile-feature task_3a718e5d)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_f70a425c post edit)
- Review: no re-run build/e2e · review_confirm=done · phase done

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 2 · P2 Accept: 2
- review_confirm: done · post_review: skip

## UNCLEAR
- none
