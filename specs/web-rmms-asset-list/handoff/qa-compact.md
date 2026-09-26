# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:30:00.000Z
taskId: task_8a1c9f9f
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-asset-list

## Decisions
- changeScope: new_page
- formPattern: Mobile List+Detail / full · phone 430 · no PUT · Leave N/A
- Kind B grid/filter: **WAIVE**
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 reuse + docker up + capture_alist S0/S1/QA-20 · MFE /login · no kill worker
- T-QA-LIST/DETAIL/PIN/SEARCH **PASS** · T-QA-FILTER **WAIVE**
- stock e2e soft-fail :5101 vs :5111 · workaround capture
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| pageTitle | Danh sách tài sản | Text RO | S0 |
| search | Tìm mã/loại/tuyến | Search | AL-03 |
| listRow | rows Live | ListRow | S0 · 50 AL-06 |
| empty/error | empty/retry | Empty/Button | AL-05 absent (has data) |
| detail.* | Mã/Loại/Tuyến/Km/GPS | Text RO | QA-20 AL-11 |
| pinMap | Xem trên bản đồ | Button/Nav | AL-12 enabled |
| tileList | Hub entry | Tile | S1 |

## Screens / zones (ids only)
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-06 · AL-10 · AL-11 · AL-12
- PNG `qa/screens/{S0,S1,QA-20}.png` · hashes distinct
- S1 peer hub: `/web-rmms-asset-hub` `#tileList`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-list

## API / tasks (ids only)
- VERIFY: Live list 50 rows · detail `?id=` · pin AL-12 · 0 crash
- T-QA-LIST-01 · T-QA-DETAIL-01 · T-QA-PIN-01 = done
- soft: stock e2e port · playwright junction · Hub LOOKUP hints

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/handoff/dev-compact.md
