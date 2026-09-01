# Handoff compact — dev

schemaVersion: 1
feature: incident-detail
packKind: screen
role: dev
status: done
skillVersion: 2026.08.20.03
writtenAt: 2026-09-01T04:40:00.000Z
taskId: task_53a77d94

## Decisions
- changeScope: edit_page (cleanup-mock parent `mobile-cleanup-mock`)
- formPattern: Full (`#sc-incident-detail` · DES-MOB-INC-DETAIL) — push screen · route_a
- route_a: list card / post-create → push + Id · back → incident-list
- API P1: GET `mobile-bff/api/v1/incident/incidents/{id}` · POST `…/{id}/close` · Step 4b N/A
- **live-only cleanup**: GET OK = detail · 404 = EmptyChrome · fail = toast + empty-load-fail · **cấm** demo SSOT / SC-2401 fallback
- Giao việc: nav estimate · toast P1 if sibling not ship
- Bản đồ: nav gis-map · no embed
- Close: POST online-only · toast **Đã đóng sự cố**
- GPS: HasGps + Route/Km · Lat/Lng Signed DEFER
- mfeStdUrl: N/A · cấm
- BE/BFF Write: none · reuse GetById + Close
- e2eQa: OFF this run · prior QA PASS
- autoApprove: ON

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | Vấn đề | BackButton | iOS text+chevron · Android icon-only |
| title | Chi tiết sự cố | TopBar title | fixed |
| codeHero | SC-* | Text ≥24 | GET Code |
| badgeSeverity | mức độ | Badge | VN map Severity×Status |
| rowType | loại | ListRow | Title ưu tiên · else IncidentType |
| rowLoc | vị trí | ListRow | RouteName · Km {KmStart} |
| rowGps | GPS | ListRow | HasGps only |
| rowSource | nguồn | ListRow | dual when data · empty omit |
| btnEstimate | Giao việc xử lý | PrimaryButton | estimate nav |
| btnMap | Xem trên bản đồ | SecondaryButton | gis-map |
| btnClose | Đóng sự cố | SecondaryButton | POST close |

## Screens / zones (ids only)
- DES-MOB-INC-DETAIL `#sc-incident-detail` Full — owner
- entry `#sc-incident-list` / post-create → push
- reviewUrl: dual prototype `#sc-incident-detail`
- peerStdUrl / mfeStdUrl: N/A

## API / tasks (ids only)
- API-01: GET mobile-bff/api/v1/incident/incidents/{id}
- API-02: POST mobile-bff/api/v1/incident/incidents/{id}/close
- T-IOS-INC-DETAIL: done · cleanup-mock · xcodegen + iPhone 17 Pro PASS
- T-AND-INC-DETAIL: done · cleanup-mock · assembleDebug PASS
- T-BE-API / T-BE-MIG: n/a

## VERIFY
- iOS xcodegen + iPhone 17 Pro: PASS (2026-09-01)
- Android assembleDebug: PASS (2026-09-01)
- BFF dotnet build: PASS (2026-09-01)
- debt: Lat/Lng Signed DEFER · estimate sibling toast P1 · RequirePermission TODO P2

## UNCLEAR
- none

## Full paths (Read only if needed)
- ios: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/implement/ios.md
- android: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/implement/android.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/STATUS.md
