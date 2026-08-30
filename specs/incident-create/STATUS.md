# STATUS — incident-create

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| phase | `done` |
| status | `done` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-INC-CREATE-PACK-01 · demo surface = full `#sc-inc-form` · STATUS/scan meta `sheet` = mislabel) |
| mode | `feature_context` |
| runMode | `full_pipeline` |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | `specs/incident-create/ui/prototype/{ios,android}/index.html` `#sc-inc-form` · `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` · `startIncidentPick()` · cite mobile-p1 |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-create.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Incident · **cấm ERP.*** |
| domain | **Incident** (+ Integration asset-types · optional AiVision · optional Patrol) |
| taskId | `task_a2abb578` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** · confirmed · Must align 0 |
| autoApprove | `ON` |
| e2eQa | ON — prior QA **PASS** · Review **không** re-run |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-mobile-workflow-skill-v1` |
| workflowVersion | `2026.08.25.01` |
| updatedAt | `2026-08-29T01:23:01.570Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/incident-create-control-hint.md` · `incident-create-bff-endpoints.md` · `incident-create-real-data.md` · `incident-create-action-tree.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/incident-create.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/incident-create/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| `task_5f9013dd` | `incident-create` | `data_analy` | — | **completed** | controlHint + BFF + real-data + action-tree |
| `task_4dd8f7a1` | `incident-create` | `po` | data_analy | **completed** | requirement · Screens · Device AC · packKind=screen · handoff Design |
| `task_706e535d` | `incident-create` | `design` | po | **completed** | dual proto · ux-analy · demo-parity Must=0 · design_confirm |
| `task_497ffbf0` | `incident-create` | `sa` | design | **completed** | roleOnly · `/agent-sa-mobile` · solution_confirm approve · GAP media/chk · handoff TL |
| `task_ff5ed868` | `incident-create` | `team_lead` | sa | **completed** | roleOnly · `/agent-tl-mobile` · route_a · T-IOS/T-AND/T-BE pack · handoff Dev |
| `task_c05490fb` | `incident-create` | `dev` | team_lead | **completed** | dual native · VERIFY GATE PASS · Step 4b align (reuse LIVE · media Signed skip) |
| `task_2c51c707` | `incident-create` | `qa` | dev | **completed** | e2e-qa-mobile PASS · CORE vision Aligned Must 0 · store PNG |
| `task_a2abb578` | `incident-create` | `review` | qa | **completed** | findings · review_confirm=done · pipeline complete |

## Blockers / open questions

- GAP-MOB-INC-CREATE-PACK-01 — **CLOSED** PO · packKind=`screen`
- GAP-MOB-INC-CREATE-SHEET-01 — `#sheet-incident` **OUT** pack
- GAP-MOB-INC-CREATE-MEDIA-01 — optional Signed · P1 app **không** media[] · Dev **SKIP** T-BE-MEDIA · Review **Accept**
- GAP-MOB-INC-CREATE-CHK-01 — local CHK · **cấm** invent API
- GAP-MOB-CAM-DETECT-01 — Detect bind **LIVE** · `T-BE-INC-CREATE-DETECT-BIND` **n/a**
- GAP-QA-INC-GPS-TIMING-01 — Should · iOS harvest GPS chưa chốt · non-block · Review **Defer**

## Links

- data-analy → po → ui → be → task → implement → qa → review · **complete**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl · chỉ `/agent-qa*`
- CTX: `docs/context/features/incident-create.md`
- artifacts: `specs/_data-analy/incident-create-*.md` · `specs/incident-create/po/requirement.md` · `specs/incident-create/ui/*` · `specs/incident-create/be/solution-discovery.md` · `specs/incident-create/task/incident-create.md` · `implement/ios.md` · `implement/android.md` · `qa/scenarios.md` · `qa/store/incident-create/` · `ui/review/align-ux.md` · `review/findings.md`

## Handoff → done

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| lane | `mobile` |
| from | `review` · PASS · confirmed · task `task_a2abb578` |
| phase | `done` |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |

`/edit-mobile-feature` 2026-08-29: **GAP-MOB-INC-PICK-ALIGN-01** pick stretch + pict 36 — lock design/ux/map/task/implement.
| autoApprove | ON |
| changeScope | `new_page` |
| packKind | **`screen`** |
| review | `review/findings.md` · review_confirm=**done** · Must align **0** |
| post_review | **skip** |
| e2e | prior QA CLI **ok:true** · Review **không** re-run |
| Chain this turn | **không** (roleOnly=`review` · GAP-PKT-ROLE-01) |

## History

- completed review · at: `2026-08-29T01:20:25.000Z` · task_a2abb578 · review_confirm=done · Must align 0 · lock released
- started review · at: `2026-08-29T01:18:47.073Z` · task_a2abb578 · lock autocode-review · `/agent-review-mobile`
- completed qa · at: `2026-08-29T01:16:27.000Z` · task_2c51c707 · yarn e2e-qa-mobile ok · A11/A10/A9/A3/P6/P6-2 PASS · Read CORE Aligned Must 0 · lock released
- started qa · at: `2026-08-29T01:10:29.000Z` · task_2c51c707 · lock autocode-qa · `/agent-qa-mobile` · e2eQa ON
- completed dev · at: `2026-08-29T01:07:06.000Z` · task_c05490fb · T-IOS-INC-CREATE · T-AND-INC-CREATE · xcodegen+iPhone17Pro · assembleDebug · BFF · WebService PASS · media Signed skip
- started dev · at: `2026-08-29T00:51:22.000Z` · task_c05490fb · lock autocode-dev
- completed team_lead · at: `2026-08-29T00:45:30.000Z` · task_ff5ed868 · route_confirm=route_a
- completed sa · at: `2026-08-29T00:40:29.000Z` · task_497ffbf0 · solution_confirm=approve
