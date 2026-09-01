# Handoff compact — review

schemaVersion: 1
feature: patrol-offline
packKind: list
role: review
status: done
skillVersion: 2026.08.19.29
writtenAt: 2026-09-01T11:52:00.000Z
taskId: task_94929183
slash: /agent-review-mobile
gap: cleanup_mock_offline_storage re-review · live pendingCount · approve

## Decisions
- review_confirm: **approve** (autoApprove=ON)
- post_review: **skip**
- changeScope: edit_page · gap=cleanup_mock_offline_storage · packKind list
- mfeStdUrl: none · cấm e2e/build ở review
- alignMustOpen: 0 · chrome Aligned · EmptyChrome intentional
- data: live pendingCount · no hardcode «3 bản ghi» · no demo seed
- API: POST integration/sync/offline-batch only · Step 4b N/A
- security: Keychain / EncryptedPrefs PASS
- open: GAP-MOB-ACT-PAT-OFFLINE-01 Defer · PrivacyInfo/mappin/hint P2 Accept

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-offline | Dữ liệu lưu trữ | Screen | EmptyChrome |
| offline-empty | EmptyChrome | Empty | iOS title+hint · Android title |
| btn-sync | Đồng bộ | TopBar trailing | Sync-only |
| nav-back | Trang Chủ | TopBar leading | text kit |
| segment | Điểm tuần / Sự cố | LinmSegment | filter |
| row-offline | Me entry | ListRow | live count |

## Screens / zones (ids only)
- DES-MOB-PAT-OFFLINE / #sc-patrol-offline
- evidence: qa/store/patrol-offline/ · A3/P6 EmptyChrome · task_fcc96865
- full: specs/patrol-offline/review/findings.md
- next: phase done · cấm full pipeline re-run
