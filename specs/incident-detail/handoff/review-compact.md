# Handoff compact — review

schemaVersion: 1
feature: incident-detail
packKind: screen
role: review
status: done
skillVersion: 2026.08.20.01
writtenAt: 2026-09-01T04:45:00.000Z
taskId: task_3774bc97
slash: /agent-review-mobile
review_confirm: done
post_review: skip
autoApprove: ON

## Decisions
- changeScope: edit_page (cleanup-mock live-only · post dev task_53a77d94 + qa task_f0f56b29)
- formPattern: Full (`#sc-incident-detail` · DES-MOB-INC-DETAIL) — push · route_a
- mfeStdUrl: none (native_dual)
- verdict: done · Must align 0 · review_confirm=done
- cleanup: live-only detail · GET OK=detail · 404=EmptyChrome · fail=toast+empty-load-fail · **cấm** demo SSOT/SC-2401 fallback · `useDemoGps: false` dual
- store: PrivacyInfo.xcprivacy Accept P2 → post_review
- open questions: siblings pending_confirm · A4-IPAD DEFER · Lat/Lng DEFER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Vấn đề | BackButton | iOS text+chevron · Android icon-only |
| title | Chi tiết sự cố | TopBar title | fixed |
| codeHero | SC-* | Text ≥24 | GET Code live |
| badgeSeverity | mức độ | Badge | VN map Severity×Status |
| rowType | loại | ListRow | Title ưu tiên · else IncidentType |
| rowLoc | vị trí | ListRow | RouteName · Km {KmStart} |
| rowGps | GPS | ListRow | HasGps only · useDemoGps false |
| rowSource | nguồn | ListRow | dual when data · empty omit |
| btnEstimate | Giao việc xử lý | PrimaryButton | estimate nav/toast P1 |
| btnMap | Xem trên bản đồ | SecondaryButton | gis-map |
| btnClose | Đóng sự cố | SecondaryButton | POST close online-only |

## Screens / zones (ids only)
- DES-MOB-INC-DETAIL `#sc-incident-detail` Full — owner
- reviewUrlIos=file://…/prototype/ios/index.html#sc-incident-detail
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-incident-detail
- peerStdUrl / mfeStdUrl: N/A

## API / tasks (ids only)
- GET `mobile-bff/api/v1/incident/incidents/{id}`
- POST `mobile-bff/api/v1/incident/incidents/{id}/close`
- T-IOS/AND-INC-DETAIL PASS (cleanup-mock) · T-BE n/a · T-REVIEW-SEC/DTO/ALIGN/CLEANUP PASS
- debt: Lat/Lng DEFER · GAP-MOB-A11Y-INC-DETAIL-01 Should · RequirePermission P2

## VERIFY
- prior Dev iOS/Android/BFF PASS (task_53a77d94 cleanup-mock)
- prior QA e2e-qa-mobile ok:true · Aligned Must 0 (task_f0f56b29 post cleanup-mock)
- Review: no re-run build/e2e · review_confirm=done · phase done

## Findings counts
- P0: 0 · Must align: 0 · Should Defer: 1 · P2 Accept: 3
- review_confirm: done · post_review: skip

## UNCLEAR
- none
