# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `data_analy` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `shell` (mobile P1 · native dual · **cấm** mfeStdUrl) |
| stack | `native_dual` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` |
| context | `docs/context/features/login.md` |
| logo | `logo/mobile` AppIcon 1024 → `assets/app-logo.png` |
| mfe | — (native · **cấm** mfeStdUrl / yarn start:std) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · user mở Xcode Simulator · test thủ công |
| android | `Linm.RMMS.Mobile.Android` · user mở Android Studio / emulator · test thủ công |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/*` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` |
| backup | `specs/login/_backup/20260818T173515Z` |
| taskId | `task_3b190d5a` |
| skillVersion | `2026.08.19.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.01` |
| rulesVersion | `2026.08.19.01` |
| versionGate | `rechecked` |
| contentHash | `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| bffContentHash | `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| updatedAt | `2026-08-18T17:45:44.106Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **in_progress** |
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios+android | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/login.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/store/login/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_bf9355f7 | login | data_analy | — | completed | roleOnly · skill 2026.08.18.10 · autoApprove=OFF |
| task_3b190d5a | login | data_analy | — | **completed** | retry · `/agent-data-analy-mobile` · recheck `2026.08.19.01` · autoApprove=ON · roleOnly · **không** chain PO |

## Blockers / open questions

- `login-forgot` — **GAP-MOB-BFF-01** không path quên MK trong CTX §3 / Mobile.Bff / Auth BFF 1.26.0 · **cấm** invent · backlog
- **GAP-MOB-BFF-02** — CTX/`init-bff-auth.md` ghi `refresh` · package 1.26.0 = `POST auth/refresh-token` · app dùng path package
- Mobile.Bff chưa gắn `ContractWindowDefenseMiddleware` (Web BFF có) — GET `contract-accounts/session-window` **đã** proxy · SA chốt sau login
- Password/eye **không** trên `docs/html-to-native-map.md` — Design `kit_missing_confirm` (cấm Dev raw)
- **GAP-MOB-ACT-02** none — `#sc-login` không child form/sheet
- Native: user mở Xcode + Android Studio và test thủ công · **cấm** cite `mfeStdUrl` / localhost MFE · BFF `mobile-bff/api/v1`

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `login` / `shell` (đề xuất) |
| phase_from / phase_to | data_analy done → po |
| Context / Demo / DI | CTX + dual `#sc-login` · no Excel |
| controlHint / UNCLEAR | `_data-analy/login-control-hint.md` · none |
| Action tree / BFF | `_data-analy/login-action-tree.md` · `login-bff-endpoints.md` |
| Open questions | GAP-MOB-BFF-01 · GAP-MOB-BFF-02 |
| Kit | password/eye thiếu map → `kit_missing_confirm` khi Design/Dev |
| Next AskQuestion | autoApprove=ON — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| Next slash | `/agent-po-mobile` |
| e2eQa | ON khi QA · user mở Simulator / emulator · test thủ công (không yarn e2e-qa web) |

## Links

- scan → `specs/_form-type-mobile/ACTION-TREE.md`
- data-analy-mobile → po-mobile → design-mobile → sa-mobile
- BFF: `mobile-bff/api/v1/auth/login` · `auth/refresh-token` · `auth/logout`

## Retry

- from: `data_analy` · at: `2026-08-18T17:32:49.987Z` · board user Retry step
- recheck: `recheck_new` · skill `2026.08.19.01` · backup `specs/login/_backup/20260818T173515Z`
