# Handoff compact — qa

schemaVersion: 1
feature: patrol-offline
packKind: list
role: qa
status: confirmed
skillVersion: 2026.08.19.29
writtenAt: 2026-09-12T14:48:06.000Z
taskId: task_53265cb6
slash: /agent-qa-mobile
mode: feature_context
changeScope: edit_page
gap: offline_sync_apply_checkins
autoApprove: ON
e2eQa: ON
contentHash: sha256:patrol-offline-delta-apply-checkins-20260912
bffContentHash: sha256:patrol-offline-bff-apply-checkins-20260912
mfeStdUrl: —

## Decisions
- edit_page delta QA · apply-checkins · e2e **ok:true**
- Sync = replay POST patrol/sessions/{id}/check-ins · remove only 2xx
- offline-batch = optional receipt · RecordCount=synced
- mfeStdUrl: none (native_dual) · cấm start:std
- align: chrome/kit Aligned · Must 0 · EmptyChrome vs demo 2-card = intentional
- data: live-only · BE empty OK · cấm hardcode «3 bản ghi»
- Android login: Back+scroll btn-login (fix Enter → GAP-QA-STORE-03)
- autoApprove: ON · phase_to: review (/agent-review-mobile)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-offline | Dữ liệu lưu trữ | Screen | A3+P6 |
| offline-empty | EmptyChrome | Empty | iOS title+hint · Android title |
| btn-sync | Đồng bộ | TopBar trailing | replay check-ins |
| nav-back | Trang Chủ | TopBar leading | text |
| segment | Điểm tuần / Sự cố | LinmSegment | filter |
| row-offline | Me entry | ListRow | nav |

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- DES-MOB-PAT-OFFLINE-NAV · #btn-sync
- DES-MOB-PAT-OFFLINE-SEG · BANNER · CARD
- reviewUrlIos=file://…/prototype/ios/index.html#sc-patrol-offline
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-patrol-offline
- store: qa/store/patrol-offline/ · screens A11/A9/A3/P6/P6-2 · ok:true

## API / tasks (ids only)
- A10-BFF `:5202` PASS
- POST patrol/sessions/{id}/check-ins (primary apply)
- POST integration/sync/offline-batch (optional receipt)
- T-QA-PAT-OFFLINE PASS

## Debt / next
- Next: `/agent-review-mobile` (không chạy trong task này)
- GAP-MOB-ACT-PAT-OFFLINE-01 Defer · Incident apply P2 · Android EmptyChrome hint optional P2

## UNCLEAR
- none
