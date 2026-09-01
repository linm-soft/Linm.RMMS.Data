# Handoff compact — review

schemaVersion: 1
feature: mnt-progress
packKind: sheet
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T05:15:00.000Z
taskId: task_50b18ae5
slash: /agent-review-mobile
review_confirm: approve
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page (recheck post cleanup_mock dev + re-QA)
- formPattern: sheet→screen · progress form · entry mnt-list `#i-sync`
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=approve
- live-only: nav seed → GET enrich · fail = toast · **cấm** `MntProgressCopy.demo*` · GAP-MOB-EDIT-DEMO-01 **closed**
- GPS: device only · empty route → accuracy stamp · **cấm** fake route
- Step 4b: N/A — reuse GET/POST progress+complete
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-mnt-progress | Cập nhật trạng thái | TopBar+Form | tab `.work` |
| wo-title/code/status | Header readonly | LinmListRow | nav seed or GET |
| progress-pct | Tiến độ (%) | LinmTextField+Slider | 0–100 |
| note | Ghi chú | TextArea | + GPS embed |
| photo-row | Ảnh hiện trường | PhotoRow | MEDIA DEFER |
| location-row | Vị trí đã chốt | LinmListRow | device GPS |
| btn-update | Cập nhật | LinmPrimaryButton | POST progress/complete |

## Screens / zones (ids only)
- DES-MOB-MNT-PROGRESS / #sc-mnt-progress
- reviewUrlIos=file://…/prototype/ios/index.html#sc-mnt-progress
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-mnt-progress
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/maintenance/work-orders/{id}`
- POST `…/{id}/progress` body `{ progressPercent, note? }`
- POST `…/{id}/complete` when 100%
- T-IOS/AND-MNT-PROG PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN/REAL PASS
- debt: GAP-MOB-A11Y-01 Should · MEDIA-01 DEFER · siblings pending_confirm

## VERIFY
- prior Dev iOS/Android/BFF PASS (edit-mobile-feature task_e4368753)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_995ec06e post cleanup_mock)
- Review: no re-run build/e2e · review_confirm=approve · phase done

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 1 · P2 Accept: 2 · Defer: 1
- review_confirm: approve · post_review: skip

## UNCLEAR
- none
