# STATUS — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| phase | `done` |
| status | `done` |
| packKind | **`screen`** (PO + Design chốt · GAP-MOB-CAM-PACK-01 **closed**) |
| demo | `specs/cam-patrol/ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/cam-patrol.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-28T22:05:52.910Z` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** · task `task_e487ff4f` |
| autoApprove | `ON` |
| e2eQa | ON · prior QA `ok:true` · visual **Aligned** Must 0 · review **cấm** re-run e2e |
| changeScope | `new_page` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/cam-patrol-control-hint.md` · `cam-patrol-bff-endpoints.md` · `cam-patrol-real-data.md` · `cam-patrol-action-tree.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/cam-patrol.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/cam-patrol/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_21653e83 | cam-patrol | data_analy | — | **completed** | control-hint + real-data + bff + action-tree · handoff PO |
| task_078f6674 | cam-patrol | po | data_analy | **completed** | requirement · Screens · Device AC · handoff Design |
| task_0f0d1974 | cam-patrol | design | po | **completed** | dual prototype · ux-analy · demo-parity · design_confirm · handoff SA |
| task_4e92ee1d | cam-patrol | sa | design | **completed** | roleOnly · `/agent-sa-mobile` · solution_confirm approve · GAP-MOB-CAM-DETECT-01 · handoff TL |
| task_8f763f78 | cam-patrol | team_lead | sa | **completed** | `/agent-tl-mobile` · T-IOS-CAM-PAT · T-AND-CAM-PAT · T-BE-CAM-DETECT-API · T-BE-CAM-DETECT-MIG conditional · route_a · handoff Dev |
| task_6a5668cd | cam-patrol | dev | team_lead | **completed** | dual native + Step 4b detect expand · VERIFY GATE PASS · handoff QA |
| task_6ba51c44 | cam-patrol | qa | dev | **completed** | `/agent-qa-mobile` · e2e ok:true · visual Aligned · handoff Review |
| task_e487ff4f | cam-patrol | review | qa | **completed** | `/agent-review-mobile` · review_confirm=done · Must align 0 · phase done |

### Dev task pack (from TL)

| id | layer | status | notes |
|----|-------|--------|-------|
| T-IOS-CAM-PAT | ios | **completed** | screen + AVCapture finder + GPS + detect/confirm/offline + privacy |
| T-AND-CAM-PAT | android | **completed** | dual parity + CameraX + CAMERA permission |
| T-BE-CAM-DETECT-API | be | **completed** | expand `DetectAiVisionRequest` + DetectStubAsync bind · path giữ |
| T-BE-CAM-DETECT-MIG | be | **n/a** | Lat/Lng/ImageUrl already · AccuracyM/VideoRef request-only P1 |
| T-BFF-* / T-KIT-* | — | n/a | proxy catch-all · kit reuse + Finder app surface |

## Blockers / open questions

- GAP-MOB-CAM-PACK-01 — **CLOSED**
- GAP-MOB-CAM-SCORE-01 — ship ẩn % · **PASS**
- GAP-MOB-CAM-DETECT-01 — Step 4b expand request **CLOSED** · MIG n/a
- kit_missing CameraFinder — **approve** · app native surface shipped
- GAP-SA-STORE-01 — iOS camera plist + PrivacyInfo · Android CAMERA **declared**
- GAP-QA-CAM-GPS-TIMING-01 — Should · non-block (iOS GPS wait at harvest) · Review **Defer**

## Links

- data-analy → po → ui → be → task → implement → qa → review · **pipeline complete**
- native: e2eQa ON → prior `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- artifacts: `specs/cam-patrol/review/findings.md` · `qa/scenarios.md` · `qa/store/cam-patrol/` · `ui/review/align-ux.md`

## Handoff → done

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| lane | `mobile` |
| from | `review` · PASS · confirmed · task `task_e487ff4f` |
| phase | **done** |
| post_review | **skip** |
| Next | `/edit-mobile-feature` nếu follow-up · **cấm** re-run full pipeline |
| changeScope | `new_page` |
| packKind | **`screen`** |
| prior · review | `review/findings.md` · status=`confirmed` · Must align **0** |
| e2e | prior QA `ok:true` · Maestro iOS+Android · PNG store 6.9" + 1080×1920 |
| visual | **Aligned** · Must **0** |

## Retry

- from: `data_analy` · at: `2026-08-28T18:38:14.361Z` · board user Retry step
- completed data_analy · at: `2026-08-28T21:10:00.000Z` · task_21653e83
- completed po · at: `2026-08-28T21:05:00.000Z` · task_078f6674
- completed design · at: `2026-08-28T21:08:48.000Z` · task_0f0d1974
- completed sa · at: `2026-08-28T21:14:26.000Z` · task_4e92ee1d
- completed team_lead · at: `2026-08-28T21:19:30.000Z` · task_8f763f78
- completed dev · at: `2026-08-28T21:36:31.000Z` · task_6a5668cd
- completed qa · at: `2026-08-28T21:59:16.000Z` · task_6ba51c44
- completed review · at: `2026-08-28T22:03:40.000Z` · task_e487ff4f
