# STATUS — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| phase | `qa` |
| status | `await_confirm` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-ADJUST-PACK-01 · scan meta `sheet` = mislabel) |
| demo | `specs/asset-adjust/ui/prototype/{ios,android}/index.html` `#sc-asset-adjust` (SSOT cite mobile-p1 · hash skip) |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset-adjust.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| lastRole | `qa` · `/agent-qa-mobile` · visual **FAIL** · GAP-QA-REAL-01 OPEN |
| autoApprove | `ON` · **cấm** skip `qa_fail_rollback` / `qa_fix_plan` |
| e2eQa | ON · CLI PASS · visual **FAIL** · **cấm** start:std / mfeStdUrl |
| updatedAt | `2026-09-01T16:13:25.493Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/asset-adjust-control-hint.md` · `asset-adjust-bff-endpoints.md` · `asset-adjust-real-data.md` · `asset-adjust-action-tree.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · ui/review/demo-parity.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/asset-adjust.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · **`implement/asset-adjust-qa-fix-plan.md`** | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/asset-adjust/CAPTURE.md · qa/bugs/asset-adjust.md · ui/review/align-ux.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_0fcd1c99 | asset-adjust | data_analy | — | **completed** | control-hint + bff + real-data + action-tree · CTX created · changeScope=new_page |
| task_eb71b522 | asset-adjust | po | data_analy | **completed** | po/requirement.md confirmed · packKind=screen · GAP PACK/SEARCH/EDIT/ROW/MEDIA chốt · autoApprove=ON · hash skip · **cấm** e2e |
| task_6476a9ab | asset-adjust | design | po | **completed** | dual proto + design.md + ux-analy + html-to-native-map + demo-parity · design_confirm approve · packKind screen · search SSOT dài dual · hash skip · **cấm** e2e |
| task_39b7c7aa | asset-adjust | sa | design | **completed** | be/solution-discovery.md · solution_confirm approve · GET list + DELETE soft · Step 4b N/A · **cấm** invent path · **cấm** e2e / Write native |
| task_155edf48 | asset-adjust | team_lead | sa | **completed** | task/asset-adjust.md · T-IOS-ASSET-ADJUST · T-AND-ASSET-ADJUST · T-BE/T-KIT n/a · route_a · hub wire folded · SoftDelete client DELTA · **cấm** e2e / Step 4b · next `/agent-dev-ios` |
| task_9e935efd | asset-adjust | dev | team_lead | **completed** | implement/ios.md + android.md · SoftDelete client + dual screen · hub wire · VERIFY builds **PASS** · Step 4b N/A · **cấm** e2e / mfeStdUrl · next `/agent-qa*` |
| task_74581051 | asset-adjust | qa | dev | **failed** | `/agent-qa-mobile` · e2e CLI PASS · visual **FAIL** · GAP-QA-REAL-01 Android demo CORE · `qa_fail_rollback` · **cấm** completed |
| task_c02a17d5 | asset-adjust | dev | task_74581051 | **completed** | qaFailFix=1 · qaFixPhase=**plan** · plan Approved (autopilot chain → implement) · **cấm** skip plan |
| task_d8ada3bb | asset-adjust | dev | task_c02a17d5 | **completed** | qaFailFix=1 · qaFixPhase=implement · Plan §1–6 · tenant harden dual · VERIFY **PASS** · next `/agent-qa*` |
| task_385e599f | asset-adjust | qa | task_d8ada3bb | **failed** | `/agent-qa-mobile` · e2e CLI PASS · visual **FAIL** · GAP-QA-REAL-01 Android LoadFailed · `qa_fail_rollback` await_confirm · **cấm** completed |

## Blockers / open questions

- *(closed by PO)* GAP-MOB-ASSET-ADJUST-PACK-01 → **screen**
- *(closed by PO)* GAP-MOB-ASSET-ADJUST-EDIT-01 → Sửa = nav detail · PUT UI OUT P1
- *(closed by PO)* GAP-MOB-ASSET-ADJUST-SEARCH-01 → SSOT placeholder dài dual
- *(closed by PO)* GAP-MOB-ASSET-ADJUST-ROW-01 → live GET · demo rows = fallback
- *(closed by PO)* GAP-MOB-ASSET-ADJUST-MEDIA-01 → OUT P1
- *(closed by Design)* dual search placeholder dài · packKind screen · Must demo-parity closed · design_confirm approve
- *(closed by SA)* solution_confirm approve · GetList + SoftDelete reuse · Step 4b N/A · PUT UI OUT
- *(closed by TL)* route_confirm=route_a · ios/android repo reuse · T-IOS + T-AND packed · T-BE/T-KIT n/a · hub wire folded · next `/agent-dev-ios`
- *(closed by Dev)* T-IOS-ASSET-ADJUST + T-AND-ASSET-ADJUST · SoftDelete client DELTA · hub toast→push · VERIFY builds PASS · Step 4b N/A · next `/agent-qa*`
- *(closed epic cleanup `task_a33dfede`)* OfflineDemo → `.LoadFailed` · toast không «dữ liệu mẫu» · dual VERIFY PASS
- *(re-opened by QA `task_385e599f`)* GAP-QA-REAL-01 **OPEN** · OfflineDemo `TS-*` gone · Android P6 **LoadFailed** empty+toast · iOS A3 live `BB/HL/KM-QL1-NA-*` · await `qa_fail_rollback` + Dev `qa_fix_plan`
- *(DEFER kit)* GAP-MOB-SEARCH-PLACEHOLDER

## Links

- data-analy → po → ui → be → task → implement → **qa FAILED** → `qa_fail_rollback` → Dev plan
- native: e2eQa ON · CLI PASS · visual FAIL · **cấm** mfeStdUrl · **cấm** chain review
- bugs: `specs/asset-adjust/qa/bugs/asset-adjust.md` · align: `ui/review/align-ux.md` · compact: `handoff/qa-compact.md`
- QA fix plan: `specs/asset-adjust/implement/asset-adjust-qa-fix-plan.md` · re-open after rollback
- Next: board **`qa_fail_rollback`** → Dev `qa_fix_plan` · assert A3+P6 live · **cấm** LoadFailed CORE when BFF healthy
- closeout epic cleanup_mock: `task_a33dfede` · live-only dual · at: `2026-09-01T10:10:00.000Z`
