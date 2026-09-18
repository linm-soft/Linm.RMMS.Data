# STATUS — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| phase | `done` |
| status | `done` |
| qaTaskId | `task_fae5cc8a` |
| packKind | `list` |
| changeScope | `edit_page` |
| epic | `csdl-export-print` · Wave 1 `T-XLS-S14` |
| demo | N/A (packet) · prior hub demo zone-only |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-bieu-14.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=its-systems` |
| resource | `its-systems` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-18T02:07:14.236Z` |
| taskId | `task_85081249` |
| dataAnalyDoneAt | `2026-09-18T01:32:46.463Z` (XLS · `task_b92db6a6`) |
| dataAnaly | `PASS` · edit_page T-XLS-S14 · control-hint + real-data + compact · `task_b92db6a6` |
| po | **PASS** (XLS) · `task_23c0d73d` · Q-XLS-* chốt · prior typed `task_475a3c19` **keep** |
| design | **PASS** (XLS) · `task_7d1a980f` · +Xuất Excel catalogToolbar · Import ẩn · prior typed `task_d302ab8a` **keep** |
| sa | **PASS** (XLS) · `task_5dc0c863` · BFF binary export · Schema_CsdlBieu14 keep · prior typed `task_c534e53a` **keep** |
| teamLead | **PASS** (XLS) · `task_bb5bd3be` · T-XLS-S14-* · prior typed `task_b21db737` **keep** |
| dev | **PASS** (XLS) · `task_5163dcca` · export FE+BE · yarn/dotnet PASS · prior typed `task_936065ca` **keep** |
| qa | **PASS** (XLS) · `task_fae5cc8a` · T-XLS-S14-QA-01 · e2e S0/S1/QA-20 · prior typed `task_e13a402d` **keep** |
| review | **PASS** (XLS) · `task_85081249` · findings + compact · prior typed `task_1b0469b6` **keep** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| design_confirm | **approve** (autoApprove ON · `task_7d1a980f`) · prior typed keep |
| solution_confirm | **approve** (autoApprove ON · `task_5dc0c863`) · prior typed `task_c534e53a` **keep** |
| route_confirm | `route_a` (keep · `/csdl-bieu-14` + hub) |
| team_lead_confirm | **approve** (autoApprove ON · `task_bb5bd3be`) · prior typed `task_b21db737` **keep** |
| review_confirm | **approve** (autoApprove ON · `task_85081249`) · prior typed `task_1b0469b6` **keep** |
| yarnBuild | **PASS** (XLS `task_5163dcca`) · prior typed keep |
| yarnTypecheck | **PASS** (XLS `task_fae5cc8a`) · prior typed keep |
| dotnetBuild | **PASS** (Api + Asset.Bff · `task_5163dcca`) · prior typed keep |
| e2eQa | **PASS** (XLS `task_fae5cc8a` · S0/S1/QA-20 + export) · prior typed keep |
| qa_verdict | **PASS** (XLS) · prior typed keep |
| review_verdict | **PASS** (XLS `task_85081249`) · prior typed keep |


## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_85081249 | 2026-09-18T09:05:00.000Z · **released** (DoR PASS · phase=done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/csdl-bieu-14-control-hint.md · csdl-bieu-14-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/csdl-bieu-14.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/csdl-bieu-14.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_db0e2ea1 | csdl-bieu-14 | data_analy | — | **done** | control-hint + real-data + compact · resource `its-systems` · 21 cột · new_page |
| task_475a3c19 | csdl-bieu-14 | po | data_analy | **done** | requirement + po-compact · Q* autoApprove · alias_now · prefix IT · **keep** |
| task_d302ab8a | csdl-bieu-14 | design | po | **done** | design.md + prototype + design-compact · design_confirm approve · **keep** |
| task_c534e53a | csdl-bieu-14 | sa | design | **done** | solution-discovery + sa-compact · Schema_CsdlBieu14 · **keep** |
| task_b21db737 | csdl-bieu-14 | team_lead | sa | **done** | task pack + team_lead-compact · route_a · **keep** |
| task_936065ca | csdl-bieu-14 | dev | team_lead | **done** | FE `/csdl-bieu-14` + BE Schema_CsdlBieu14 · yarn/dotnet build PASS · **keep** |
| task_e13a402d | csdl-bieu-14 | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 PASS · **keep** |
| task_1b0469b6 | csdl-bieu-14 | review | qa | **done** | findings + review-compact · review_confirm approve · **keep** |
| task_b92db6a6 | csdl-bieu-14 | data_analy | — | **done** | changeScope=edit_page · T-XLS-S14 · § Delta export · keep typed |
| task_23c0d73d | csdl-bieu-14 | po | data_analy | **done** | XLS requirement + po-compact · Q-XLS-* chốt · export_only_p0 · filtered |
| task_7d1a980f | csdl-bieu-14 | design | po | **done** | XLS design + prototype +Xuất · Import ẩn · design_confirm approve · compact |
| task_5dc0c863 | csdl-bieu-14 | sa | design | **done** | XLS solution + sa-compact · API-XLS-01 BFF binary · `.xls` · Schema keep |
| task_bb5bd3be | csdl-bieu-14 | team_lead | sa | **done** | XLS task pack T-XLS-S14-* · team_lead-compact · route_a keep · team_lead_confirm approve |
| task_5163dcca | csdl-bieu-14 | dev | team_lead | **done** | XLS FE toolbar + BE export 21 · yarn/dotnet PASS · Import DEFER |
| task_fae5cc8a | csdl-bieu-14 | qa | dev | **done** | XLS scenarios + e2e S0/S1/QA-20 + export `Bieu14_HeThongITS_*.xls` PASS |
| task_85081249 | csdl-bieu-14 | review | qa | **done** | XLS findings + review-compact · review_confirm approve · phase=done |

## Blockers / open questions

- Q-XLS-* **chốt** · design/solution/team_lead/review_confirm **approve** · Dev+QA+Review **PASS** · phase=`done`
- Typed CRUD **done** · XLS **done** · **cấm** reopen new_page · toast stub ≠ export done
- Golden = Cục 16-sheet · **cấm** hồ sơ 12+8 · **cấm** filter-bar export (GAP-FILTER-BAR-08)
- Peer `so-ts-its-camera` · **cấm** merge vào export
- Filename locked: `Bieu14_HeThongITS_{yyyyMMdd}.xls` · runtime verified
- Tasks: T-XLS-S14-BE-01 · BFF-01 · FE-01/02 · QA-01 · Review **done** · BE-02 **OUT** P1

## Links

- data-analy → po → design → sa → TL → Dev → QA → **Review PASS** · pipeline complete
- handoff: `specs/csdl-bieu-14/handoff/review-compact.md` (XLS) · prior typed artifacts **keep**
- mfeStdUrl: `http://localhost:9301/so-ts/csdl-so-sach`
- mfeStdRoute: `/so-ts/csdl-so-sach` · alias `/csdl-bieu-14`
- hub: `/so-ts/csdl-so-sach?resource=its-systems`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html`
- epic: `docs/context/features/csdl-export-print.md` · `T-XLS-S14`
- export: `GET api/v1/asset/csdl-records/export?resource=its-systems`
- implement: `specs/csdl-bieu-14/implement/csdl-bieu-14.md`
- task: `specs/csdl-bieu-14/task/csdl-bieu-14.md`
- findings: `specs/csdl-bieu-14/review/findings.md`
