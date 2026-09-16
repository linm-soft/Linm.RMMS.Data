# Review — Findings — mobile-bff-file

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| title | [Mobile] Mobile.Bff FileService |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_8da2ff6f` · autoApprove=ON) |
| align_confirm | **approve** · Must align **0** |
| post_review | **skip** |
| packKind | **`sheet`** (upload) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / yarn build / e2e ở role này |
| changeScope | `edit_page` · kit `LinmImageUpload` dual + P1 `incident-create` · **none** `#sc-*` mới |
| prior · qa | `task_14e574ba` · verdict **pass** · e2e `ok:true` · visual **Aligned** · Must **0** · compact exists |
| prior · dev | `task_9a7a4656` · T-BE/T-IOS/T-AND **PASS** · gaps CLIENT/PREVIEW/KIT **CLOSED** |
| prior · tl | `task_9bde04c1` · P1 lock `incident-create` · compact exists |
| prior · sa | `task_9da4e2a3` · `solution_confirm=approve` · Step 4b **SKIP** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/files/*` |
| backend | FileService `:5018` — **cấm ERP.*** · **cấm** FilesController local |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro / crawl |
| updatedAt | `2026-09-12T16:20:30.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `LinmImageUpload` kit · purpose host · GET `/object` JWT · incident-create `{ attachmentId }` · Keychain peer |
| Android | parity kit · EncryptedPrefs peer · same bind |
| BFF | `/init-bff-file` verify · NuGet File 1.1.0 · rewrite · proxy skip `files/**` · GAP-MOB-BFF-FILE-01 **CLOSED** |
| API | POST `files/init` · PUT/GET `files/{id}/object` · POST `files/commit` → FileService |
| skillVersion | agent-review-mobile **2026.08.25.01** |
| rulesVersion | **2026.08.25.2** |
| contentHash | `sha256:mobile-bff-file-review-20260912` |
| contentHashPrior | `sha256:mobile-bff-file-qa-20260912` |
| live re-audit | 2026-09-12 after QA `task_14e574ba` · store CORE + CAPTURE · visual prior Aligned |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · **cấm** UserDefaults JWT | **PASS** (peer app-wide · kit uses ApiClient) |
| Token store Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| File upload IDOR — app **không** gọi `:5018` trực tiếp · chỉ BFF JWT | **PASS** |
| Catch-all **không** steal `files/**` → wrong host | **PASS** (proxy skip + rewrite) |
| Camera / Photos Info.plist + Manifest | **PASS** (kit host · keep check-in) |
| Fake attachmentId / toast fail path | **PASS** (AC toast · cấm fake id — Dev/QA) |
| **cấm** ERP.* · invent `api/v1/mobile-files` · local FilesController | **PASS** |
| `ai-vision/uploads*` keep RMMS P1 | **PASS** |

## Real data

| Check | Result |
|-------|--------|
| **GAP-MOB-REAL-02** demoItems làm nguồn upload | **PASS** — live BFF files path · form bind real `attachmentId` |
| **GAP-QA-REAL-01** QA chứng BFF | **PASS** — A10-BFF `:5202` · API `:5101` · files live curl **DEBT** `:5018` DOWN (không = mock UI) |

## DTO / File API parity (iOS = Android = BFF)

| Field | iOS | Android | BFF | Disposition |
|-------|-----|---------|-----|-------------|
| init / object / commit | kit client | parity | File NuGet 1.1.0 | **OK** |
| purpose | `incident` (P1) · `patrol-checkin` keep | same | query/meta | **OK** |
| form bind | `{ attachmentId }` singular | same | body host | **OK** · multi-photo first-id **Accept** debt |
| preview GET `/object` JWT | PREVIEW-01 closed | closed | object route | **OK** |

## UI align (QA CORE + proto zones)

| Zone | iOS store | Android store | Result |
|------|-----------|---------------|--------|
| `#sc-inc-form` · `#inc-photos` · kit | A3-CORE | P6-CORE / P6-CORE-2 | **Aligned** (QA) |
| `#kit-linm-image-upload` · `#photo-slot` · `#btn-add` | present post-dev | parity | **PASS** |
| `#attachment-bind` | form bind | form bind | **PASS** |
| keep `#sheet-checkin` `#ci-photos` | keep | keep | **PASS** |
| **out** `#sc-field-reflect` | locked out TL | — | **PASS** |
| Must align mở | — | — | **0** |
| qa/bugs | — | — | **none** |

Evidence: `qa/store/mobile-bff-file/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE · scenarios verdict=pass · QA compact.

## Store gate (Review note — **không** READY_TO_SUBMIT)

| Check | Result | Disposition |
|-------|--------|-------------|
| Store capture A11/A9/A3/P6 | QA **PASS** | **OK** |
| A4-IPAD | **DEFER** Phase 1 | **OK** |
| Play Data safety / landing | deferred listing | **Accept** P2 |

## E2E crawl / clickables (Step 5d)

| Check | Result |
|-------|--------|
| `/run-mobile-e2e` / yarn e2e ở Review | **SKIP** — roleOnly HARD · VERIFY GATE |
| Prior QA Maestro dual | **PASS** — T-QA-01 · store PNG |
| **GAP-MOB-ACT-03** open | **none** |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain/EncryptedPrefs · BFF-only files · no ERP.* | **OK** |
| R-02 | API | — | files/* → FileService · NuGet 1.1.0 · GAP-MOB-BFF-FILE-01 closed | **OK** |
| R-03 | DTO/kit | — | dual LinmImageUpload · purpose · GET object JWT · gaps closed | **OK** |
| R-04 | Form | — | P1 incident-create `{ attachmentId }` · field-reflect out | **OK** |
| R-05 | Align | — | QA visual Aligned · Must = 0 | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · store CAPTURE | **OK** |
| R-07 | Real data | — | GAP-MOB-REAL-02 / GAP-QA-REAL-01 | **OK** |
| R-08 | Debt | P3 | FileService `:5018` DOWN · BFF files live HTTP 404 | **Accept** · không block UI kit |
| R-09 | Debt | P3 | Multi-photo form binds first `attachmentId` (singular P1) | **Accept** |
| R-10 | Keep | — | check-in PhotoRow · ai-vision uploads* | **OK** |
| R-11 | Step 4b | — | migration **SKIP** (SA/TL) | **OK** |
| R-12 | Store | P2 | Play Data safety / landing listing | **Accept** |

**Counts:** OK=10 · Accept debt=3 · open P0/Must=**0**

## Verdict

| Gate | Result |
|------|--------|
| review_confirm | **approve** / **done** |
| align_confirm | **approve** |
| Must open | **0** |
| Pipeline | data_analy→…→qa **confirmed** · review **done** |
| next | phase **done** · no role after review |

## Links

- compact: `handoff/review-compact.md`
- prior: `handoff/qa-compact.md` · `handoff/dev-compact.md`
- qa: `qa/scenarios.md` · `qa/store/mobile-bff-file/`
- STATUS: `STATUS.md`
