# STATUS — patrol-map

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| phase | `dev` |
| status | `pending` |
| packKind | `map` (**PO confirm**) |
| changeScope | `new_page` |
| stack | `native_dual` |
| demo | `specs/patrol-map/ui/prototype/{ios,android}/index.html#sc-patrol-map` · `DES-MOB-PAT-MAP` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol-map.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/patrol-map-control-hint.md` · `patrol-map-bff-endpoints.md` · `patrol-map-action-tree.md` |
| po | `specs/patrol-map/po/requirement.md` |
| design | `specs/patrol-map/ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` |
| sa | `specs/patrol-map/be/solution-discovery.md` |
| taskId | `task_237ed22a` |
| contentHash | `sha256:patrol-map-control-hint-20260820` |
| bffContentHash | `sha256:patrol-map-mobile-bff-20260820` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** ✓ · Android `assembleDebug` **PASS** ✓ · OMS pin+tim đường `/edit-mobile-feature` `2026-08-21` |
| updatedAt | `2026-08-21T10:40:00.000Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-qa-mobile | qa | task_fec2a2a5 | 2026-08-20T07:07:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/patrol-map-control-hint.md · patrol-map-bff-endpoints.md · patrol-map-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype dual · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/patrol-map.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/e2e/*.yaml | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`map`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — map = feature composition · reuse chrome kit |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** |
| e2eQa | **ON** khi QA · `yarn e2e-qa-mobile` |
| Step 4b | **N/A** — reuse `GET patrol/sessions` · không endpoint mới |
| sibling_assign | check-in sheet · **pending_confirm** (**cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_eae07681 | patrol-map | full_pipeline | — | completed | prior VERIFY GATE PASS (scaffold) |
| task_58c8b2b2 | patrol-map | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `map` |
| task_4ba10fbc | patrol-map | design | po | **completed** | `/agent-design-mobile` · roleOnly · autoApprove=ON · design_confirm approve · dual toast P1 |
| task_d5dd35ef | patrol-map | sa | design | **completed** | `/agent-sa-mobile` · roleOnly · autoApprove=ON · solution_confirm approve · VERIFY GATE PASS |
| task_39458a9b | patrol-map | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly · autoApprove=ON · route_a · VERIFY GATE PASS |
| task_8f38a9c6 | patrol-map | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · bind nextTitle active Route · VERIFY GATE PASS |
| task_237ed22a | patrol-map | dev | task_fec2a2a5 | **pending** | qaFailFix=1 · qaFixPhase=plan · `patrol-map-qa-fix-plan.md` · from task_fec2a2a5 |

## Blockers / open questions

- Sibling check-in sheet — **pending_confirm** · P1 toast only trên map
- Kind E tracks/coverage — **P2** · overlay demo SSOT P1
- Step 4b — **N/A**
- **EDIT LOCK** pin-here = loc + **snap tim đường** + zoom + pin tip neo đáy · OSRM corridor/track · chips wrap · **cấm** revert polyline thẳng / pin raw (`GAP-MOB-EDIT-01` · `GAP-MAP-OSRM-ROUTE` · `GAP-MAP-OSRM-SNAP`)

## Links

- Parent: `patrol-home` · push hero/row map
- data-analy → po **confirmed** → design **confirmed** → sa **confirmed** → tl **confirmed** → dev **confirmed** → qa pending → review pending
- closeout Design: `task_4ba10fbc` · `/agent-design-mobile` · roleOnly=`design` · autoApprove=ON · `design_confirm=approve` · dual prototype + ux-analy §1–§9 + demo-parity Must đóng · VERIFY GATE PASS · at: `2026-08-20T02:05:00.000Z`
- closeout SA: `task_d5dd35ef` · `/agent-sa-mobile` · roleOnly=`sa` · autoApprove=ON · `solution_confirm=approve` · Step 4b N/A · VERIFY GATE PASS · at: `2026-08-19T19:03:00.000Z`
- closeout TL: `task_39458a9b` · `/agent-tl-mobile` · roleOnly=`team_lead` · autoApprove=ON · `route_confirm=route_a` · T-IOS-PAT-MAP + T-AND-PAT-MAP pending · VERIFY GATE PASS · at: `2026-08-19T19:10:00.000Z`
- closeout Dev: `task_8f38a9c6` · `/agent-dev-ios` + `/agent-dev-android` · roleOnly=`dev` · autoApprove=ON · T-IOS-PAT-MAP + T-AND-PAT-MAP delta bind nextTitle · Step 4b N/A · VERIFY GATE PASS · at: `2026-08-19T19:06:00.000Z`

## VERIFY GATE

| Check | Result |
|-------|--------|
| iOS xcodegen | **PASS** |
| iOS xcodebuild iPhone 17 Pro | **BUILD SUCCEEDED** (`task_8f38a9c6`) |
| Android assembleDebug | **BUILD SUCCESSFUL** (`task_8f38a9c6`) |
| Mobile.Bff dotnet build | **Build succeeded** (`task_8f38a9c6`) |
| Step 4b | **N/A** |
