# Handoff compact — qa

schemaVersion: 1
feature: patrol-map
packKind: map
role: qa
status: done
skillVersion: session
writtenAt: 2026-09-16T04:39:00.000Z
taskId: task_92c6486b
alias: patrol-map

## Decisions
- changeScope: edit_page · gap=ios_map_host_clip (Dev closed) · QA e2eQa=ON
- formPattern: N/A (map)
- mfeStdUrl: — (native · **cấm** mfeStdUrl)
- verdict: **PASS** · Must blocking 0 · Android chip labels DEFER `GAP-MOB-AND-CHIP-01`
- open questions: none · sibling check-in sheet pending_confirm (out of scope)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-patrol-map | Bản đồ ca | GisClipMapView | Maestro assert PASS dual |
| mb-clip / mb-sat | Tiêu chuẩn / Vệ tinh | LinmChip | iOS OK · Android Đường/Phố DEFER |
| map-confirm | HITL pin | — | out of this AC path |

## Screens / zones (ids only)
- `#sc-patrol-map` · evidence `qa/screens/A3-CORE.png` · `P6-CORE.png`
- peerStdUrl= —

## API / tasks (ids only)
- A10-BFF PASS · Auth login id/password seed · GET patrol/sessions via app BFF
- T-QA-E2E · T-QA-STORE · T-QA-ALIGN

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: specs/patrol-map/qa/scenarios.md · qa/store/patrol-map/ · qa/bugs/patrol-map.md
- align: specs/patrol-map/ui/review/align-ux.md
- STATUS: specs/patrol-map/STATUS.md
