# Handoff compact — po → design
schemaVersion: 1
feature: patrol-home
role: po
taskId: task_d032b4d9
packKind: hub
changeScope: edit_page
stack: native_dual
status: PASS
generatedAt: 2026-09-12T15:00:00.000Z
skillVersion: 2026.08.19.23
contentHash: sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a
bffContentHash: sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0

## Decisions
- changeScope: edit_page
- formPattern: N/A (hub · no form)
- packKind: hub (re-confirm)
- Grid AC / Report AC: N/A
- Leave: N/A dirty · API fail → toast + empty/`—` · cấm native alert · cấm demo bind
- open questions: none
- kit_missing: N/A — reuse map dual
- Step 4b: N/A (POST/PUT Live)
- autoApprove: ON · chain this turn: no (roleOnly=po)
- e2eQa: ON queued QA only

## Delta (edit_page DoD)
- OPEN: POST patrol/sessions — CTA btn-open-session khi không active
- END: PUT patrol/sessions/{id} — detail endSession (không toast-only)
- HERO: cấm fallback QL.1·Km468+200 / Nguyễn Văn A / 07:20 / row QL.1 → empty=`—`
- keep: segment/pin/kpi/quick/nav · sibling toast · offline badge

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| heroActive | Ca đang chạy | LinmHeroCard | live fields only |
| btn-open-session | Mở ca | LinmPrimaryButton | POST |
| btnEndSession | Kết ca | detail CTA | PUT |
| todayRows | Hôm nay | LinmListRow | GET · empty route=`—` |
| kpiStrip | KPI 3 | LinmKpiStrip | session |
| segPatrol | Tuần đường | LinmSegment idx0 | owner |

## Screens / zones (ids only)
- `#sc-patrol-home` DES-MOB-PAT-HOME · Pattern=Hub · FormMode=none
- zones: heroActive · btn-open-session · pinHere · todayRows · quickRows · btnEndSession(detail)
- reviewUrl: file://…/prototype/{ios,android}/index.html#sc-patrol-home
- peerStdUrl: cấm mfeStdUrl
- Design: update proto chỉ nếu thiếu CTA Mở ca / emptyActive

## API / tasks
- GET/POST/PUT patrol/sessions (BFF proxy)
- DELETE out P1
- Device AC: offline empty · GPS N/A mở-ca · toast only · dual parity · typography 13/≥16
- Gaps → Dev: GAP-PAT-HOME-SESSION-01/02 · HERO-01
- Next: /agent-design-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: specs/patrol-home/po/requirement.md
- control-hint: specs/_data-analy/patrol-home-control-hint.md
- real-data: specs/_data-analy/patrol-home-real-data.md
- prior compact: specs/patrol-home/handoff/data_analy-compact.md
- STATUS: specs/patrol-home/STATUS.md
