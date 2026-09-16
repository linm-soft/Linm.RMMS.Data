# STATUS — mnt-list

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| phase | `done` |
| status | `done` |
| taskId | `task_fdf1f59c` |
| packKind | `list` (**PO confirm**) |
| changeScope | `new_page` |
| stack | `native_dual` (**Design confirm**) |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mnt-list/ui/prototype/{ios,android}/index.html `#sc-mnt-list` · `DES-MOB-MNT-LIST` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/mnt-list.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP Maintenance — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/mnt-list-control-hint.md` · `mnt-list-bff-endpoints.md` · `mnt-list-action-tree.md` · `mnt-list-real-data.md` |
| po | `specs/mnt-list/po/requirement.md` |
| design | `specs/mnt-list/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `review/demo-parity.md` |
| sa | `specs/mnt-list/be/solution-discovery.md` |
| task | `specs/mnt-list/task/mnt-list.md` |
| implement | `specs/mnt-list/implement/ios.md` · `implement/android.md` |
| qa | `specs/mnt-list/qa/scenarios.md` · `qa/store/mnt-list/CAPTURE.md` · `ui/review/align-ux.md` |
| review | `specs/mnt-list/review/findings.md` · `REVIEW-META.json` |
| skillVersion | `2026.08.20.01` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:mnt-list-mobile-list-20260828` |
| bffContentHash | `sha256:mnt-list-mobile-bff-20260828` |
| updatedAt | `2026-09-01T05:01:31.087Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after review `task_fdf1f59c` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/mnt-list-control-hint.md · mnt-list-bff-endpoints.md · mnt-list-action-tree.md · mnt-list-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/mnt-list.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/mnt-list/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md · REVIEW-META.json · handoff/review-compact.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`list`** (PO confirm) |
| stack_confirm | `native_dual` (**Design confirm**) |
| be_repo_confirm | `Linm.RMMS.WebService` · Maintenance |
| ios_repo_confirm | `Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — reuse map list kit dual |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (TL autoApprove=ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `share_na` |
| autoApprove | **ON** |
| e2eQa | **ON** · `yarn e2e-qa-mobile` **PASS** · align **Aligned** Must 0 |
| review_confirm | **confirmed** (user Approve board) |
| align_confirm | **approve** (Must 0) |
| Step 4b | **N/A** — reuse `GET maintenance/work-orders` |
| sibling_assign | `estimate` · `mnt-chat` · `mnt-progress` · `mnt-log` · **pending_confirm** (**cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_659bf5c2 | mnt-list | data_analy | home | **completed** | `/agent-data-analy-mobile` · roleOnly · VERIFY GATE PASS · sibling_assign |
| task_18c2cf15 | mnt-list | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `list` · VERIFY GATE PASS · hash skip · **cấm** re-scan |
| task_9df501b1 | mnt-list | design | po | **completed** | `/agent-design-mobile` · roleOnly · dual proto · ux-analy · demo-parity · GAP-MOB-MNT-DEMO-01 closed · hash skip · **cấm** re-scan / e2e |
| task_bd81eda6 | mnt-list | sa | design | **completed** | `/agent-sa-mobile` · roleOnly · solution_confirm approve · Step 4b N/A · **cấm** build/e2e/native Write |
| task_1ca78155 | mnt-list | sa | design | **superseded** | replaced by `task_bd81eda6` |
| task_3e9686a0 | mnt-list | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly · task/mnt-list.md · route_a · T-IOS/T-AND · T-BE n/a · VERIFY GATE PASS · **cấm** e2e/build/native Write |
| task_tl_pending | mnt-list | team_lead | sa | **superseded** | replaced by `task_3e9686a0` |
| task_e238765c | mnt-list | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · T-IOS/T-AND PASS · xcodegen+xcodebuild iPhone 17 Pro · assembleDebug · BFF dotnet build · Step 4b N/A · **cấm** e2e |
| task_dev_pending | mnt-list | dev | team_lead | **superseded** | replaced by `task_e238765c` |
| task_c9ac27ea | mnt-list | qa | dev | **completed** | `/agent-qa-mobile` · e2eQa=ON · yarn e2e-qa-mobile ok:true · align Aligned Must 0 · store PNG · post cleanup_mock · VERIFY GATE PASS · **cấm** start:std |
| task_6eafecab | mnt-list | review | qa | **superseded** | replaced by `task_fdf1f59c` (post cleanup_mock re-QA) |
| task_fdf1f59c | mnt-list | review | qa | **completed** | `/agent-review-mobile` · roleOnly · review_confirm=done · live-only GAP-MOB-REAL-02 closed · Must align 0 · SECURITY+DTO PASS · **cấm** build/e2e · VERIFY GATE PASS |
| task_53934dab | mnt-list | dev | team_lead | **completed** | `/edit-mobile-feature` · cleanup_mock live-only · GAP-MOB-EDIT-STATUS/ACT · xcodegen+xcodebuild iPhone 17 Pro · assembleDebug · BFF dotnet build PASS · **cấm** e2e |
| task_b0b56370 | estimate | data_analy | mnt-list | pending_confirm | sibling_assign · DES-MOB-EST |
| task_36585641 | mnt-chat | data_analy | mnt-list | pending_confirm | sibling_assign |
| task_1867f892 | mnt-progress | data_analy | mnt-list | pending_confirm | sibling_assign |
| task_60cc0721 | mnt-log | data_analy | mnt-list | pending_confirm | sibling_assign |

## Blockers / open questions

- Sibling `estimate` · `mnt-chat` · `mnt-progress` · `mnt-log` — **pending_confirm** (**cấm** auto start)
- GAP-MOB-MNT-DEMO-01 — **closed** (Design dual 2 cards + mobile-p1 Android parity)
- GAP-F-MNT-MOB-01 — AssignerName thiếu trên DTO — bind TeamName+AssigneeName (PO/Design/SA/TL/Dev chốt)
- GAP-MOB-COPY-SEARCH-01 — Should · kit search **Tìm** vs demo **Tìm kiếm công việc…** (**non-block**)
- **cleanup_mock** — **closed** (`task_53934dab` · live-only · cấm `MntListCopy.demoItems`)

## VERIFY GATE (roleOnly=`qa`)

| Check | Result |
|-------|--------|
| iOS xcodegen | **PASS** |
| Android assembleDebug | **PASS** |
| BFF dotnet build | **PASS** |
| yarn e2e-qa-mobile | **PASS** · `ok:true` · `2026-09-01T04:59:30.073Z` |
| Maestro iOS + Android | **PASS** · live DB · status text bar |
| align A3/P6 vs demo | **PASS** · Must **0** · Aligned |
| store PNG | **PASS** · `qa/screens/` · `qa/store/mnt-list/` |
| Step 4b / migration | **SKIP** · N/A |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## VERIFY GATE (roleOnly=`review`)

| Check | Result |
|-------|--------|
| review/findings.md · REVIEW-META.json · review-compact.md | **PASS** · confirmed · review_confirm=done · `task_fdf1f59c` |
| Security Keychain/Encrypted · Bearer · X-Company-Id | **PASS** |
| DTO iOS=Android · no AssignerName · no forked API | **PASS** |
| Live-only · **cấm** demoItems · GAP-MOB-REAL-02 | **PASS** · closed |
| UI align Read CORE PNG vs demo · Must open | **PASS** · **0** · Aligned post cleanup_mock |
| prior QA e2e / Dev builds (evidence) | **PASS** · `task_c9ac27ea` · **cấm** re-run yarn build/e2e/start:std |
| Step 4b / migration | **SKIP** · N/A |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Links

- data-analy **confirmed** → po **confirmed** → design **confirmed** → sa **confirmed** → tl **confirmed** → dev **confirmed** → qa **confirmed** → review **confirmed** · phase=`done`
- Parent: `home` tile Công việc · tab `work`
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- closeout review: `task_fdf1f59c` · `/agent-review-mobile` · roleOnly=`review` · post cleanup_mock · at: `2026-09-01T05:30:00.000Z`
