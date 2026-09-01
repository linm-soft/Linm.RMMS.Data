# STATUS — asset-collect

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| phase | `done` |
| status | `done` |
| packKind | `screen` (PO+Design chốt · đóng GAP-MOB-ASSET-COLLECT-PACK-01) |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Demo/src/demo/ios/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset-collect.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-08-30T23:25:31.801Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/asset-collect-control-hint.md · asset-collect-bff-endpoints.md · asset-collect-real-data.md · asset-collect-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · ui/review/demo-parity.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/asset-collect.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/asset-collect/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_e9f0235f | asset-collect | data_analy | — | **completed** | control-hint + BFF + real-data + action-tree · handoff PO |
| task_96a9045a | asset-collect | po | data_analy | **completed** | requirement.md · packKind screen · GAP PACK/STATUS/TYPE/MEDIA/ROUTE/GPS chốt · handoff Design |
| task_c6bccf74 | asset-collect | design | po | **completed** | dual proto + ux-analy + html-to-native-map + demo-parity Must=0 · design_confirm approve · Status dual Android · hash skip · handoff SA |
| task_b5598b84 | asset-collect | sa | design | **completed** | solution-discovery · reuse Create+init-data+types · MEDIA-01 local DEFER · solution_confirm approve · handoff TL |
| task_88c9d912 | asset-collect | team_lead | sa | **completed** | task/asset-collect.md · T-IOS/T-AND · T-BE n/a · route_a · kit_skip · handoff Dev |
| task_ea1c812a | asset-collect | dev | team_lead | **completed** | dual native · xcodegen+assembleDebug+BFF PASS · Step 4b N/A · handoff QA |
| task_3388dfba | asset-collect | qa | dev | **completed** | e2e-qa-mobile ok · Read CORE · Aligned Must 0 · handoff Review |
| task_9fd1b996 | asset-collect | review | qa | **completed** | findings · review_confirm done · Must align 0 · pipeline complete |

### Dev task pack (from TL)

| id | layer | status | notes |
|----|-------|--------|-------|
| T-IOS-ASSET-COLLECT | ios | **done** | form + hub wire · build PASS |
| T-AND-ASSET-COLLECT | android | **done** | dual parity · assembleDebug PASS |
| T-BE-* | be | **n/a** | Create LIVE · media DEFER |
| T-BFF-* | bff | **n/a** | catch-all |
| T-KIT-* | kit | **n/a** | PhotoRow compose |
| T-QA-ASSET-COLLECT | qa | **done** | e2e-qa-mobile PASS · align Must 0 |
| T-REVIEW-SEC/DTO/ALIGN | review | **done** | Must align 0 · review_confirm done |

## Blockers / open questions

- GAP-MOB-ASSET-COLLECT-MEDIA-01 → **SA Signed** · P1 local photo only · DEFER Signed upload
- GAP-QA-ASSET-COLLECT-COPY-01 · FORM-SUBMIT-01 → **Should** (non-block) · see `qa/bugs/asset-collect.md`
- GAP PACK-01 · STATUS-01 · TYPE-01 · ROUTE-01 · GPS-01 → **PO+Design+SA+TL+Dev+QA+Review chốt**

## Links

- data-analy → po → ui → be → task → implement → qa → review · **pipeline complete**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- qa artifacts: `specs/asset-collect/qa/scenarios.md` · `qa/store/asset-collect/` · `ui/review/align-ux.md` · `qa/bugs/asset-collect.md`
- review: `specs/asset-collect/review/findings.md` · REVIEW-META · next `/edit-mobile-feature` (Should follow-ups)
