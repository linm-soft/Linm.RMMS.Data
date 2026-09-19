# STATUS — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfeStdRoute | `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9304/nghiem-thu` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-19T16:31:17.000Z` |
| lastRole | `review` · `done` · task `task_600866a7` · review_confirm=accept · P0=0 · Aligned |
| contentHash | `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` |
| reviewHash | `sha256:eba0d0dff9aa50f3b0202a5d6a1b7dabd8d36943f75828b988431a3bc4be0b67` |
| reviewUrl | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html` · `…/android/index.html` |
| peerStdUrl | `http://localhost:9304/patrol` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline (web)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/nghiem-thu-control-hint.md · nghiem-thu-real-data.md · nghiem-thu-filter-bar.md · handoff/data_analy-compact.md | **confirmed** (web) |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** (web keep · mobile overlay 2026-09-19) |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** (web keep · mobile dual overlay 2026-09-19) |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** (web keep · mobile BFF reuse 2026-09-19) |
| 3 | team-lead | task/nghiem-thu.md · handoff/team_lead-compact.md | **confirmed** (web keep · mobile overlay 2026-09-19) |
| 4 | dev | implement/nghiem-thu.md · handoff/dev-compact.md | **confirmed** (web keep · mobile dual 2026-09-19) |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** (web keep · mobile e2e 2026-09-19) |
| 6 | review | review/findings.md · handoff/review-compact.md | **confirmed** (web keep · mobile accept 2026-09-19) |

## Pipeline (mobile)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/nghiem-thu-control-hint.md · nghiem-thu-bff-endpoints.md · nghiem-thu-real-data.md · nghiem-thu-action-tree.md · handoff/data_analy-compact.md | **done** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **done** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · handoff/design-compact.md | **done** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **done** |
| 3 | team-lead | task/nghiem-thu.md · handoff/team_lead-compact.md | **done** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **done** |
| 5 | qa | qa/scenarios.md · qa/store/nghiem-thu/CAPTURE.md · handoff/qa-compact.md | **done** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_01b899ee | nghiem-thu | data_analy | — | **completed** | changeScope=new_page · packKind=list |
| task_8d642b15 | nghiem-thu | po | data_analy | **completed** | Grid+Leave+Screens · TMPL/STATUS CLOSED · DOMAIN/API → SA |
| task_16791ccc | nghiem-thu | design | po | **completed** | A–D + Full×5 · reviewUrl · design_confirm=approve · hash skip |
| task_25cd95bb | nghiem-thu | sa | design | **completed** | Patrol path · Schema_NghiemThu · TZ/XCO/SHARE · solution_confirm=approve |
| task_9bf1287f | nghiem-thu | team_lead | sa | **completed** | form-type pack §2a · route_confirm=/nghiem-thu · T-* + filter/leave/grid |
| task_dda12f30 | nghiem-thu | dev | team_lead | **completed** | FE+BE build PASS · list+form · Schema_NghiemThu · BFF |
| task_7d0037b7 | nghiem-thu | qa | dev | **completed** | e2eQa PASS · S0/S1/QA-20 · T-QA-* · mfeStdUrl :9304 |
| task_1b121e02 | nghiem-thu | review | qa | **completed** | findings PASS · review_confirm=accept · P0=0 · debt P2/P3 KEEP |
| task_1bd5874a | nghiem-thu | data_analy | — | **completed** | changeScope=edit_page · mobile list · § Delta · BFF+real-data+tree · compact |
| task_da538308 | nghiem-thu | po | data_analy | **completed** | mobile list · Screens+Device AC · keep web · compact · autoApprove |
| task_059c4327 | nghiem-thu | design | po | **completed** | dual ios/android · ux-analy · demo-parity Must=0 · design_confirm=approve · hash skip |
| task_ca050f3a | nghiem-thu | sa | design | **completed** | mobile list · Mobile.Bff proxy keep · migration=no · solution_confirm=approve · compact |
| task_b4b91c07 | nghiem-thu | team_lead | sa | **completed** | mobile list · route_a · T-IOS/T-AND · T-BE=n/a · compact · autoApprove |
| task_00546351 | nghiem-thu | dev | team_lead | **completed** | dual iOS+Android list · xcodegen+assembleDebug+BFF PASS · compact · Step4b SKIP |

| task_61e48f31 | nghiem-thu | qa | dev | **completed** | e2e-qa-mobile PASS · Pro Max+Pixel_2 · Must 0 · Aligned · compact |
| task_600866a7 | nghiem-thu | review | qa | **completed** | mobile review_confirm=accept · P0=0 · Aligned · compact · **cấm** e2e |

## Blockers / open questions

- CLOSED (SA): GAP-DA-NT-DOMAIN-01 · GAP-DA-NT-API-01 — DOMAIN-MAP `nghiem-thu`→Patrol · `api/v1/patrol/nghiem-thu`
- CLOSED (PO): GAP-DA-NT-TMPL-01 · GAP-DA-NT-STATUS-01 · GAP-DA-NT-FORM-01 · missing_demo_context=continue_no_demo
- CLOSED (Design): zones A–D · Full page 5 cols · LeaveConfirmModal · filter-bar wrap · FileMulti upload
- CLOSED (TL): GAP-TL-FORMTYPE-01 · GAP-TL-GRID-MAP-01 · GAP-TL-FILTER-01 · GAP-TL-LEAVE-01 · route_confirm=approve `/nghiem-thu`
- CLOSED (Dev): yarn build PASS · dotnet Api+Bff PASS · Kind B list + Full form · Leave · ui-schema
- CLOSED (QA): e2eQa PASS · docker+start:std+screens · CRUD real NT-* · mfeStdUrl chốt `:9304`
- CLOSED (Review): review_confirm=accept · QUERY/SEC/UI/BE PASS · P0=0
- HARD: FileService reuse · cấm maintenance WO · cấm ERP.* · cấm sessions reuse · **cấm** ingest Pipeline (web) lên lane mobile
- MOBILE 2026-09-19: `/scan-mobile-feature` `run_selected` · slugs `nghiem-thu` · `nghiem-thu-create` · `nghiem-thu-detail` · queue `qlbd-mobile` · siblings create/detail **pending_confirm** · **cấm** start trước Approve
- MOBILE data_analy `task_1bd5874a` **PASS** · GAP-MOB-NT-LIST/DATA/ROW/CREATE/BFF/FILTER
- MOBILE po `task_da538308` **PASS** · edit_page list · Device AC · hash skip · handoff Design · **cấm** e2e/start:std
- MOBILE design `task_059c4327` **PASS** · DES-MOB-NGHIEM-THU dual · ux-analy §1–§9 · demo-parity Must=0 · design_confirm=approve · **cấm** re-scan / e2e / start:std
- MOBILE sa `task_ca050f3a` **PASS** · solution_confirm=approve · Mobile.Bff catch-all · List→API-01 · init→API-00 · migration=no · Step 4b SKIP · **cấm** invent API / e2e / start:std
- MOBILE team_lead `task_b4b91c07` **PASS** · route_confirm=route_a · T-IOS-NGHIEM-THU · T-AND-NGHIEM-THU · T-BE/T-BFF/T-KIT=n/a · siblings pending_confirm · **cấm** e2e/start:std/build · handoff Dev dual
- MOBILE qa `task_61e48f31` **PASS** · e2e-qa-mobile · guest→login→hub scroll→`#sc-nghiem-thu` · Must 0 Aligned · **cấm** start:std
- MOBILE dev `task_00546351` **PASS** · T-IOS/T-AND · build iOS+Android+BFF PASS · create/detail toast pending · Step4b SKIP · handoff QA · **cấm** e2e/start:std
- MOBILE review `task_600866a7` **PASS** · review_confirm=accept · P0=0 · SEC/DTO/REAL/ALIGN PASS · debt P2/P3 KEEP · **cấm** e2e/start:std
- Gates: TZ=required · XCO=required · SHARE=tenant_keep
- Debt KEEP: Auth RequirePermission stub · migrate apply env · e2e npx flake P2 · Leave visual P3 · siblings create/detail pending_confirm

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9304/nghiem-thu`
- mfeStdRoute: `/nghiem-thu`
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html`
- handoff: `specs/nghiem-thu/handoff/review-compact.md`
- prior: `specs/nghiem-thu/handoff/qa-compact.md`
- prior tl compact: `specs/nghiem-thu/handoff/team_lead-compact.md`
- prior sa compact: `specs/nghiem-thu/handoff/sa-compact.md`
- prior design compact: `specs/nghiem-thu/handoff/design-compact.md`
- prior po compact: `specs/nghiem-thu/handoff/po-compact.md`
- prior analy compact: `specs/nghiem-thu/handoff/data_analy-compact.md`
- findings: `specs/nghiem-thu/review/findings.md`
- peerStdUrl: `http://localhost:9304/patrol`
- implement: `specs/nghiem-thu/implement/nghiem-thu.md`
- scenarios: `specs/nghiem-thu/qa/scenarios.md`
- task: `specs/nghiem-thu/task/nghiem-thu.md`
- solution: `specs/nghiem-thu/be/solution-discovery.md`
- mobile analy: `specs/_data-analy/nghiem-thu-{control-hint,bff-endpoints,real-data,action-tree}.md`
- mobile requirement: `specs/nghiem-thu/po/requirement.md`
