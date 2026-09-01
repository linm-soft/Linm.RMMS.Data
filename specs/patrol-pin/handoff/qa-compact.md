# Handoff compact — qa

schemaVersion: 1
feature: patrol-pin
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T07:42:00.000Z
taskId: task_c5415843
slash: /agent-qa-mobile
gap: none

## Decisions
- changeScope: edit_page (pin CTA hub+map · GpsDeny modal)
- e2eQa: ON · yarn e2e-qa-mobile **PASS** · ok=true
- cases: A11-LAUNCH,A10-BFF,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2 **PASS**
- visual: Aligned · Must **0** · Read A3/P6/P6-2 vs demo
- align_confirm: approve (autoApprove=ON)
- flow fix: guest → btn-home-login → f-user (ios/android.yaml)
- mfeStdUrl: none · cấm start:std
- API listen: docker :5111 + host proxy :5101 (Linux compose)
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| DES-MOB-CI-PIN-HERE | Ghim vị trí | Primary+mappin | hub A3/P6 · map P6-2 |
| DES-MOB-GPS-DENY | GPS deny | Modal | code path |
| toast-pin-ok | Pin success | LinmToast | live route |

## Screens / zones (ids only)
- #sc-patrol-home · #sc-patrol-map · btn-pin-here · DES-MOB-CI-PIN-HERE
- store: qa/store/patrol-pin/ · screens: qa/screens/
- reviewUrlIos=file://…/prototype/ios/index.html
- reviewUrlAndroid=file://…/prototype/android/index.html

## API / tasks (ids only)
- GET mobile-bff/api/v1/patrol/sessions · A10-BFF PASS
- T-BE: N/A

## Debt / next
- Next: review pending (roleOnly=qa dừng đây)
- debt: none Must
- verify e2e: Maestro ON · px 1320×2868 · 1080×1920
