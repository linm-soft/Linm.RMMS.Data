# Handoff compact — dev

schemaVersion: 1
feature: mnt-progress
packKind: sheet
role: dev
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T05:10:00.000Z
taskId: task_e4368753
slash: /edit-mobile-feature
gap: cleanup_mock · GAP-MOB-EDIT-DEMO-01

## Decisions
- changeScope: edit_page (cleanup_mock parent)
- formPattern: sheet→screen · progress form · entry mnt-list `#i-sync`
- mfeStdUrl: none (native_dual)
- data: live-only · nav seed prefill · GET enrich · fail = toast · **cấm** `MntProgressCopy.demo*`
- GPS: device only · empty route → accuracy stamp only · **cấm** fake route
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
- FormMode↔API: entry mnt-list seed → GET enrich → POST progress/complete
- T-BE: N/A (proxy passthrough)

## VERIFY GATE
- iOS: xcodegen + xcodebuild dest iPhone 17 Pro → **BUILD SUCCEEDED**
- Android: `./gradlew :app:assembleDebug` → **BUILD SUCCESSFUL**
- BFF: `dotnet build` Linm.RMMS.Mobile.Bff → **0 Error**

## Debt
- GAP-MOB-A11Y-01 iOS sync a11y id (Should · không block)
- MEDIA-01 DEFER — MediaUrl progress body
- Siblings pending_confirm: estimate · mnt-chat · mnt-log

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/mnt-progress/implement/ios.md · android.md
- STATUS: specs/mnt-progress/STATUS.md
- po: specs/mnt-progress/po/requirement.md
- design: specs/mnt-progress/ui/design.md · ux-analy.md · html-to-native-map.md
- task: specs/mnt-progress/task/mnt-progress.md
