# Handoff compact — review

schemaVersion: 1
feature: patrol-home
packKind: hub
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T15:29:34.000Z
taskId: task_8c4882de
slash: /agent-review-mobile
review_confirm: approve
post_review: skip
autoApprove: ON
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page (SESSION-01/02 · HERO-01)
- formPattern: hub · FormMode=none
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=approve
- live-only: GET → emptyActive · POST open · PUT end detail · **cấm** demo bind hub
- Step 4b: N/A — POST/PUT Live
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | live · empty=— |
| emptyActive | Chưa có ca | LinmHeroCard | no active |
| btn-open-session | Mở ca | LinmPrimaryButton | POST |
| btnEndSession | Kết ca | detail CTA | PUT |
| todayRows | Hôm nay | LinmListRow | GET |
| kpiStrip | KPI 3 | LinmKpiStrip | empty=— |

## Screens / zones (ids only)
- DES-MOB-PAT-HOME / #sc-patrol-home
- reviewUrlIos=specs/patrol-home/ui/prototype/ios/index.html#sc-patrol-home
- reviewUrlAndroid=specs/patrol-home/ui/prototype/android/index.html#sc-patrol-home
- peerStdUrl=—

## API / tasks (ids only)
- FormMode↔API: none↔GET/POST/PUT `patrol/sessions`
- T-IOS/AND-PAT-HOME-SESSION PASS · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN PASS
- debt: sibling pending_confirm · GAP-QA-A11Y-TAB-FIELD-01 DEFER · Play Data safety P2

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 2 · P2 Accept: 2
- review_confirm: approve · post_review: skip

## VERIFY
- prior Dev `task_523eaa0e` build PASS
- prior QA `task_56abf022` e2e ok:true · Aligned Must 0
- Review: no re-run build/e2e · PrivacyInfo present · phase done

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/patrol-home/review/findings.md
- REVIEW-META: specs/patrol-home/review/REVIEW-META.json
- qa-compact: specs/patrol-home/handoff/qa-compact.md
- STATUS: specs/patrol-home/STATUS.md
