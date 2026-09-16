# STATUS — photo-geo-capture

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| phase | `done` |
| status | `done` |
| packKind | `sheet` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Demo/src/demo/ios/index.html (**missing** → Design dual proto **PASS**) |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/photo-geo-capture.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| changeScope | `edit_page` · gap=`review_tap_lens_range` · slash=`/edit-mobile-feature` · **cấm** full_pipeline |
| updatedAt | `2026-09-13T03:20:00.000Z` |
| lastRole | `dev` · `/edit-mobile-feature` · review sheet + 3D lens range |
| handoff | `handoff/review-compact.md` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/photo-geo-capture-control-hint.md · photo-geo-capture-bff-endpoints.md · photo-geo-capture-real-data.md · photo-geo-capture-action-tree.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/photo-geo-capture.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/photo-geo-capture/CAPTURE.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_fc7c8ad5 | photo-geo-capture | data_analy | — | **completed** | sheet · new_page · DoR PASS |
| task_b9a20f2f | photo-geo-capture | po | data_analy | **completed** | sheet · requirement + compact · DoR PASS |
| task_a487c57b | photo-geo-capture | design | po | **completed** | dual proto + reviewUrl · design_confirm approve · compact |
| task_c15db047 | photo-geo-capture | sa | design | **completed** | solution + GAP-PGC-BE/DETECT CLOSED P1 · compact · solution_confirm approve |
| task_e264f99e | photo-geo-capture | team_lead | sa | **completed** | T-IOS-PGC · T-AND-PGC · route_a · T-BE/T-BFF n/a · compact |
| task_90f0b367 | photo-geo-capture | dev | team_lead | **completed** | T-IOS/AND-PGC · VERIFY xcodegen+assembleDebug+dotnet **PASS** · compact |
| task_e6b5d0c0 | photo-geo-capture | qa | dev | **completed** | T-QA-PGC · e2e ok:true · A3↔P6 Aligned Must 0 · compact |
| task_772cce7c | photo-geo-capture | review | qa | **completed** | review_confirm done · Must 0 · compact |
| task_9c1bec7c | photo-geo-capture | dev | — | **completed** | edit_page · `/edit-mobile-feature` · in-app `#capture-preview` · skipPoDesignSa |
| task_b6a752b4 | photo-geo-capture | dev | — | **completed** | edit_page · `/edit-mobile-feature` · live HUD + `#pgc-fullscreen` · same `#btn-shutter` |
| task_8c3429ad | photo-geo-capture | qa | dev | **completed** | edit_page · `/agent-qa-mobile` · e2e-qa-mobile ok:true · dual Aligned · compact · DoR PASS |
| task_c40102b9 | photo-geo-capture | review | qa | **completed** | edit_page · `/agent-review-mobile` · review_confirm done · Must 0 · compact · DoR PASS |
| — | photo-geo-capture | dev | — | **completed** | edit_page · `/edit-mobile-feature` · look-down gravity + ẩn tab footer full-height |
| — | photo-geo-capture | dev | — | **completed** | edit_page · `/edit-mobile-feature` · gap=`in_app_capture_zoom_kit` · `LinmInAppCapture` dual · still hosts · VERIFY PASS |
| — | photo-geo-capture | dev | — | **completed** | edit_page · `/edit-mobile-feature` · gap=`review_tap_lens_range` · `#sheet-pgc-review` · `lensRangeM` 3D ray · tap still/thumb |

## Blockers / open questions

- GAP-PGC-BE-01 / GAP-PGC-DETECT-01 → **CLOSED P1** (sidecar · detect object Lat/Lng) · `POST ai-vision/detect` **hard-default 200** · Step 4b N/A
- Demo packet missing — Design dual proto PASS · **cấm** re-scan
- QA Should (carry): GAP-QA-PGC-AX-01 · GAP-QA-PGC-TAB-01 · A4-IPAD DEFER — **non-block**
- Review **PASS** · pipeline complete · **cấm** mfeStdUrl / yarn start:std

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html`
- qa: `specs/photo-geo-capture/qa/scenarios.md` · `qa/store/photo-geo-capture/`
- review: `specs/photo-geo-capture/review/findings.md` · `handoff/review-compact.md`
