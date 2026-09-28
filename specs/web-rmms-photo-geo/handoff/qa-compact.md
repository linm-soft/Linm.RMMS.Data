# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-photo-geo
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T13:25:00.000Z
taskId: task_5f941186
contentHash: sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba
changeScope: edit_page
autoApprove: ON
e2eQa: ON · runtime PASS
phase: review (cấm phase=done)

## Decisions
- changeScope: edit_page · Pattern B CTA verified · Keep File+HITL+DEC-PGC-BE-01
- Route SSOT: `/anh-vi-tri` · runtime `/m/anh-vi-tri` · **cấm** `/web-rmms-photo-geo`
- Pattern B: S1 shutter/use **enabled** · S1-PATTERN-B `#validation-banner` + DES-MOB-PGC-VALIDATION
- Login SSOT: Home `/` → `/m/trang-chu` · LG-00 `#f-user`/`#f-pass`/`#btn-login` (cấm old SH-02 ids)
- E2E: docker `:5111/:5201/:5202` · start:std `:9301` reuse · **cấm** kill worker
- stock yarn e2e-qa soft-FAIL (no login) · authoritative `_capture_pgc.mjs` corePass=true
- P0: none · next `/agent-review*` · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| btnShutter | Button | Pattern B · shutterDisabled=false |
| btnUse | Button | useDisabled=false · click→banner |
| validationBanner | Banner[] | #validation-banner PASS |
| gpsLock | GPS | deny on-click soft |
| files* | File | keep |

## Screens / zones
- mfeStdRoute=/anh-vi-tri · mfeStdUrl=http://localhost:9301/anh-vi-tri
- PNG: S0/S1/QA-20/S1-PATTERN-B + MODE-*
- zones: #sheet-pgc · #capture-preview · #gim-pin · #map-confirm · #btn-shutter · #btn-use · #validation-banner · LG-00
- DES-GRID: N/A · WAIVE filter

## API / tasks
- APIs: files/* · opt detect · opt patrol/sessions · Mobile.Bff only
- T-QA-* PASS/WAIVE · T-BE=N/A
- stock port soft · capture PASS

## UNCLEAR
- none

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-photo-geo/STATUS.md
- next: review
