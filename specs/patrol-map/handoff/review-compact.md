# Handoff compact — review

schemaVersion: 1
feature: patrol-map
packKind: map
role: review
status: done
skillVersion: session
writtenAt: 2026-09-16T04:42:21.000Z
taskId: task_b2f08c4b
alias: patrol-map

## Decisions
- changeScope: edit_page · gap=ios_map_host_clip (closed)
- formPattern: N/A (map host)
- mfe / be: native · Step 4b N/A · BFF `patrol/sessions` · `gis/tiles/*`
- review_confirm: **approve** (autoApprove=ON)
- findings counts: Must open **0** · DEFER **1** (`GAP-MOB-AND-CHIP-01`) · P2 **1** (Kind E)
- open questions: sibling check-in sheet pending_confirm (out of scope)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-map | Bản đồ ca | GisClipMapView | CORE dual Aligned |
| mb-clip / mb-sat | Tiêu chuẩn / Vệ tinh | LinmChip | iOS OK · Android DEFER labels |
| map-pin CTA | Ghim vị trí | toast P1 | no sheet |

## Screens / zones (ids only)
- `#sc-patrol-map` · evidence `qa/store/patrol-map/A3-CORE.png` · `P6-CORE.png`
- peerStdUrl= —

## API / tasks (ids only)
- Security Keychain + X-Company-Id **PASS**
- T-QA-* prior PASS · review task_b2f08c4b

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/patrol-map/review/findings.md
- align: specs/patrol-map/ui/review/align-ux.md · demo-parity.md
- qa: specs/patrol-map/qa/store/patrol-map/ · qa/bugs/patrol-map.md
- STATUS: specs/patrol-map/STATUS.md
