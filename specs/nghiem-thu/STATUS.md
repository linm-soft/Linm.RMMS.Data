# STATUS — nghiem-thu

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| phase | `done` |
| status | `in_progress` |
| packKind | `list` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md` |
| plan | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` · `features/nghiem-thu-mau.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| mfeStdRoute | `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9304/nghiem-thu` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-26T03:20:46.281Z` |
| lastRole | `review` · `confirmed` · task `task_b7626142` · changeScope=edit_page · review_confirm=accept · P0=0 · Aligned · MAU-10+Result |
| contentHash | `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` |
| reviewHash | `sha256:ce24777c87b1c352e86b2db3ffb3fadd30dae294493d91133a6c87808021c128` |
| reviewUrl | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html` · `…/android/index.html` |
| peerStdUrl | `http://localhost:9304/patrol` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline (web)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/nghiem-thu-control-hint.md · nghiem-thu-real-data.md · nghiem-thu-filter-bar.md · handoff/data_analy-compact.md | **confirmed** (web keep · mobile MAU overlay 2026-09-20) |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** (web keep · mobile MAU overlay 2026-09-20) |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** (web keep · mobile MAU overlay 2026-09-20) |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** (web keep · mobile MAU overlay 2026-09-20) |
| 3 | team-lead | task/nghiem-thu.md · handoff/team_lead-compact.md | **confirmed** (web keep · `task_9bf1287f`) |
| 4 | dev | implement/nghiem-thu.md · handoff/dev-compact.md | **in_progress** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **in_progress** |
| 6 | review | review/findings.md · handoff/review-compact.md | **in_progress** |

## Pipeline (mobile)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/nghiem-thu-control-hint.md · nghiem-thu-bff-endpoints.md · nghiem-thu-real-data.md · nghiem-thu-action-tree.md · handoff/data_analy-compact.md | **done** · `task_b82ebc4c` · § Delta MAU-10+Result |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** · `task_44dce651` · § Delta MAU-10+Result |
| 2.1 | design | ui/design.md · ui/ux-analy.md · html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · handoff/design-compact.md | **confirmed** · `task_5999afb9` · design_confirm=approve · Must=0 |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** · `task_1791e2ed` · Schema_NghiemThuMau · solution_confirm=approve |
| 3 | team-lead | task/nghiem-thu.md · handoff/team_lead-compact.md | **confirmed** · `task_e1131e78` · route_a keep · T-IOS/T-AND · T-BE-MIG+API · Step4b SKIP TL |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** · `task_cdb487a6` · MAU-10+Result · Schema_NghiemThuMau |
| 5 | qa | qa/scenarios.md · qa/store/nghiem-thu/CAPTURE.md · handoff/qa-compact.md | **confirmed** · `task_4b20206f` · e2e-qa-mobile PASS · Must 0 · Aligned |
| 6 | review | review/findings.md · handoff/review-compact.md | **confirmed** · `task_b7626142` · review_confirm=accept · P0=0 · Aligned |

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
| task_b82ebc4c | nghiem-thu | data_analy | — | **completed** | changeScope=edit_page · MAU-10 Label · ResultCode · Schema_NghiemThuMau cite · compact · handoff PO |
| task_44dce651 | nghiem-thu | po | data_analy | **completed** | changeScope=edit_page · MAU-10 Label · ResultCode badge · scores→siblings · hash skip · compact · autoApprove · handoff Design |
| task_5999afb9 | nghiem-thu | design | po | **completed** | changeScope=edit_page · dual overlay MAU-10+Result · ux-analy · Must=0 · design_confirm=approve · hash skip · compact · handoff SA |
| task_1791e2ed | nghiem-thu | sa | design | **completed** | changeScope=edit_page · Schema_NghiemThuMau child_table · Result+TemplateLabel · migration=yes · Step4b SKIP · solution_confirm=approve · compact · handoff TL |
| task_e1131e78 | nghiem-thu | team_lead | sa | **completed** | changeScope=edit_page · route_a keep · T-IOS/T-AND · T-BE-MIG+API pending Dev · Step4b SKIP TL · compact · autoApprove · handoff Dev |
| task_cdb487a6 | nghiem-thu | dev | team_lead | **completed** | changeScope=edit_page · MAU-10+Result · Schema_NghiemThuMau · xcodegen+assembleDebug+BFF+API PASS · compact · Step4b done |
| task_4b20206f | nghiem-thu | qa | dev | **completed** | changeScope=edit_page · e2e-qa-mobile PASS · Pro Max+emulator · Must 0 · Aligned · compact · autoApprove |
| task_b7626142 | nghiem-thu | review | qa | **completed** | changeScope=edit_page · review_confirm=accept · P0=0 · Aligned · MAU-10+Result · compact · autoApprove · **cấm** e2e |

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
- MOBILE data_analy `task_b82ebc4c` **PASS** · edit_page · cite nghiem-thu-mau · MAU-10 Label · ResultCode badge · init criteria/ResultCodes · Schema_NghiemThuMau → SA · FileService giữ · web Field OUT · handoff PO · **cấm** Step4b/e2e/start:std
- MOBILE po `task_44dce651` **PASS** · edit_page · MAU-10 Label · ResultCode · null ẩn · scores → siblings · Schema_NghiemThuMau → SA · hash skip · handoff Design · **cấm** e2e/start:std
- MOBILE design `task_5999afb9` **PASS** · edit_page · dual overlay MAU-10+Result · DES-MOB-NT-RESULT · ux-analy §1–§9 · demo-parity Must=0 · design_confirm=approve · hash skip · handoff SA · **cấm** re-scan / e2e / start:std / Step4b
- MOBILE sa `task_1791e2ed` **PASS** · edit_page · Schema_NghiemThuMau child_table · TemplateLabel+ResultCode list · init ResultCodes · migration=yes · Step4b SKIP · Mobile.Bff keep · solution_confirm=approve · compact · handoff TL · **cấm** e2e/start:std / Write native
- MOBILE team_lead `task_e1131e78` **PASS** · edit_page · route_a keep · T-IOS/T-AND overlay MAU-10+Result · T-BE-MIG+API pending Dev · T-BFF/T-KIT n/a · Step4b SKIP TL · compact · autoApprove · handoff Dev · **cấm** e2e/start:std / Write native / start sibling
- MOBILE dev `task_cdb487a6` **PASS** · edit_page · TemplateLabel MAU-10 · ResultCode badge null ẩn · Schema_NghiemThuMau `20260919180443` · iOS xcodegen+iPhone 17 Pro PASS · Android assembleDebug PASS · BFF+API dotnet PASS · compact · **cấm** e2e/start:std
- MOBILE qa `task_4b20206f` **PASS** · edit_page · e2e-qa-mobile · Pro Max 1320×2868 + emulator 1080×1920 · EmptyChrome live · Must 0 · Aligned · compact · handoff Review · **cấm** start:std / mfeStdUrl
- MOBILE review `task_b7626142` **PASS** · edit_page · review_confirm=accept · P0=0 · P2/P3 debt KEEP · vision A3/P6 Aligned · GAP-MOB-REAL-02/QA-REAL-01 closed · compact · **cấm** e2e/start:std / start sibling
- Gates: TZ=required · XCO=required · SHARE=tenant_keep
- Debt KEEP: Auth RequirePermission stub · migrate apply env · e2e npx flake P2 · Leave visual P3 · siblings create/detail · criteria other mẫu = 1 line (mau-02 CHI-SO full)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9304/nghiem-thu`
- mfeStdRoute: `/nghiem-thu`
- reviewUrlIos: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/ios/index.html`
- reviewUrlAndroid: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/android/index.html`
- handoff: `specs/nghiem-thu/handoff/review-compact.md`
- prior review compact: `specs/nghiem-thu/handoff/review-compact.md`
- prior qa compact: `specs/nghiem-thu/handoff/qa-compact.md`
- prior dev compact: `specs/nghiem-thu/handoff/dev-compact.md`
- prior team_lead compact: `specs/nghiem-thu/handoff/team_lead-compact.md`
- prior sa compact: `specs/nghiem-thu/handoff/sa-compact.md`
- prior design compact: `specs/nghiem-thu/handoff/design-compact.md`
- prior po compact: `specs/nghiem-thu/handoff/po-compact.md`
- prior data_analy compact: `specs/nghiem-thu/handoff/data_analy-compact.md`
- plan: `docs/plan/nghiem-thu-mau/README.md`
- findings: `specs/nghiem-thu/review/findings.md`
- peerStdUrl: `http://localhost:9304/patrol`
- implement: `specs/nghiem-thu/implement/nghiem-thu.md`
- scenarios: `specs/nghiem-thu/qa/scenarios.md`
- task: `specs/nghiem-thu/task/nghiem-thu.md`
- solution: `specs/nghiem-thu/be/solution-discovery.md`
- mobile analy: `specs/_data-analy/nghiem-thu-{control-hint,bff-endpoints,real-data,action-tree}.md`
- mobile requirement: `specs/nghiem-thu/po/requirement.md`
