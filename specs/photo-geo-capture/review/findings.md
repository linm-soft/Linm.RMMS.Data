# Review — Findings — photo-geo-capture

> Status: **confirmed** · `review_confirm=done` · autoApprove=ON · task `task_c40102b9`  
> writtenAt: `2026-09-13T02:08:00.000Z` · skillVersion: `2026.09.05.03`

| | |
|--|--|
| Feature | `photo-geo-capture` |
| Title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| Role | `review` |
| Verdict | **PASS** · `done` |
| Pack | sheet · changeScope=`edit_page` · gap=`live_hud_fullscreen` |

## Scope

Sheet `DES-MOB-PGC` `#sheet-pgc` · host PhotoRow `openCapture('photo-geo')` · in-app camera viewfinder `#capture-preview` · live HUD crosshair & IMU `#hud-live` + fullscreen overlay `#pgc-fullscreen` · same `#btn-shutter` · **không** hub/tab/URL mới · **không** mfeStdUrl · **không** ERP.* · Step 4b **N/A**.

## Traceability (compact chain)

| Role | Status | Gate |
|------|--------|------|
| data_analy | confirmed | real-data §A/§B PASS · no photo-geo API |
| po | confirmed | AC: object ≠ EXIF · files purpose · GPS deny |
| design | confirmed | dual proto + design_confirm approve · Must zones |
| sa | confirmed | GAP-PGC-BE/DETECT **CLOSED P1** · solution_confirm approve |
| team_lead | confirmed | T-IOS/AND-PGC · route_a · T-BE/BFF n/a |
| dev | confirmed | task_b6a752b4 (edit_page): live HUD + `#pgc-fullscreen` in-app; xcodegen+assembleDebug+dotnet **PASS** |
| qa | confirmed | task_8c3429ad: e2e-qa-mobile ok:true · A3↔P6 Aligned Must 0 |

Inventory zones aligned across roles: `#sheet-pgc` · `#capture-preview` · `#btn-shutter` · `#hud-live` · `#pgc-fullscreen` · `#gim-pin` · `#row-photog` · `#map-confirm` · `#modal-gps` · hosts `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form`.

API contract stable: `files/init` → PUT object → commit · GET object · purpose=`photo-geo-capture` · optional detect object HITL · **cấm** invent `api/v1/photo-geo*`.

## QA evidence (no re-run e2e)

- `qa/store/photo-geo-capture/manifest.json` · **ok:true**
- Cases PASS: A10-BFF · A11-LAUNCH · A9-LOGIN · A3-CORE · P6-CORE · P6-CORE-2
- Visual: A3↔P6↔dual proto **Aligned** · Must **0** (QA compact task_8c3429ad)
- Camera & Live HUD in-app: AVCaptureSession (iOS) / CameraX (Android) within sheet; no external system camera dialogs
- Store PNG / Manifest verified: accept QA visual verdict (no re-e2e at review role)

## Gaps / debt

| Id | Severity | Disposition |
|----|----------|-------------|
| GAP-PGC-BE-01 | — | **CLOSED P1** (sidecar) |
| GAP-PGC-DETECT-01 | — | **CLOSED** |
| GAP-QA-PGC-AX-01 | Should | carry — non-block |
| GAP-QA-PGC-TAB-01 | Should | carry — non-block |
| A4-IPAD | — | DEFER Phase 1 |

**Blocking Must:** none.

## review_confirm

- decision: **done**
- autoApprove: ON → confirm gate without board wait
- next role: **none** (pipeline complete · roleOnly stop · GAP-PKT-ROLE-01)

## Notes

- Demo packet missing → Design dual proto PASS · cấm re-scan
- Review role: **cấm** implement · **cấm** yarn build/e2e/start:std · **cấm** Step 4b
