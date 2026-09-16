# handoff-compact — data_analy → po
schemaVersion: 1
feature: patrol-home
role: data_analy
taskId: task_62615c08
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T14:53:44.000Z
skillVersion: 2026.08.19.29
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## DoR
- control-hint: specs/_data-analy/patrol-home-control-hint.md
- real-data: specs/_data-analy/patrol-home-real-data.md
- bff: specs/_data-analy/patrol-home-bff-endpoints.md
- action-tree: specs/_data-analy/patrol-home-action-tree.md
- unclear: none

## Delta (edit_page)
- OPEN: POST patrol/sessions — hub CTA btn-open-session khi không active
- END: PUT patrol/sessions/{id} — detail endSession (was toast)
- HERO: cấm fallback QL.1·Km468+200 / Nguyễn Văn A / time 07:20 / row QL.1
- Step4b: N/A (BE POST/PUT Live · BFF proxy)
- keep: PO/Design artifacts · segment/pin/kpi/quick

## Zones
- #sc-patrol-home · heroActive · btn-open-session · todayRows · btnEndSession(detail)

## API
- GET patrol/sessions (live)
- POST patrol/sessions (wire)
- PUT patrol/sessions/{id} (wire)
- GET patrol/sessions/{id} (live)

## Next
phase_to: po
slash: /agent-po-mobile
note: read § Delta · keep design unless CTA mở ca needs proto
