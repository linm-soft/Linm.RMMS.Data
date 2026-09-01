# Handoff compact — dev

schemaVersion: 1
feature: patrol-history-detail
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-01T01:20:57.000Z
taskId: task_69386cbc

## Decisions
- changeScope: new_page
- formPattern: Full (`#sc-patrol-detail` · DES-MOB-PAT-DETAIL) — sheet meta · surface screen
- route_a: list row → push + Id · back pop list
- API-01: GET `mobile-bff/api/v1/patrol/sessions/{id}` · reuse · Step 4b N/A
- TIMELINE: demo SSOT 3 · LinmListRow substitute (kit thiếu LinmTimelineRow · T-KIT n/a)
- END/Share: toast P1 · no PUT / share sheet
- Map CTA: nav patrol-map (+ Id nav only)
- Offline: GET fail → toast + demo SSOT · 404 EmptyChrome · 403 toast+back
- Parent: rewire toast → push + Id
- mfeStdUrl: N/A · cấm
- BE/BFF Write: none · verify-only build PASS
- e2eQa: queued `/agent-qa*` only · cấm Dev e2e
- autoApprove: ON
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Lịch sử | BackButton | iOS text · Android icon |
| title | Chi tiết ca | TopBar title | fixed |
| navShare | Chia sẻ | IconButton | toast |
| codeHero | PAT-* | Text ≥28 | GET Code |
| badgeStatus | trạng thái | Badge | VN + OfflineQueued |
| rowUser…Coverage | info | ListRow | GET §B |
| tlItem | Điểm tuần | ListRow≈Timeline | demo 3 |
| btnMap | Mở bản đồ ca | PrimaryButton | patrol-map |
| btnEnd | Kết thúc ca | SecondaryButton | toast |

## Screens / zones (ids only)
- DES-MOB-PAT-DETAIL `#sc-patrol-detail` Full — owner
- DES-MOB-PAT-DETAIL-NAV · HERO · INFO · TL · CTA
- entry `#sc-patrol-history` → push
- reviewUrl: dual prototype `#sc-patrol-detail`
- peerStdUrl / mfeStdUrl: N/A

## API / tasks (ids only)
- FormMode↔API: appear GET sessions/{id}
- API-01: GET mobile-bff/api/v1/patrol/sessions/{id}
- OUT: check-ins · session PUT · invent path
- T-IOS-PAT-DETAIL: done · build PASS
- T-AND-PAT-DETAIL: done · assembleDebug PASS
- T-BE-API / T-BE-MIG: n/a
- T-QA-*: pending · `/agent-qa-mobile`

## VERIFY
- iOS xcodegen + iPhone 17 Pro Max + iPad Pro 13 M5: PASS
- Android assembleDebug: PASS
- BFF dotnet build: PASS
- debt: TimelineRow kit · map Id consume · checkin-detail screen

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/patrol-history-detail/STATUS.md
