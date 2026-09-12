# Review — Findings — patrol-pin (Ghim vị trí hiện tại · edit_page persist)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] → Ghim vị trí hiện tại |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_d184527a` · autoApprove=ON) |
| changeScope | `edit_page` · **GAP-MOB-PIN-PERSIST-01** closed |
| packKind | **`sheet`** (CTA hub+map · real `#sheet-handoff-checkin`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / yarn e2e (role này) |
| prior · qa | `qa-compact.md` · **confirmed** · e2eQa ON · A11/A10/A9/A3/P6/P6-2 **PASS** · align Must **0** · `task_9a00d2c5` |
| prior · dev | `dev-compact.md` · **confirmed** · real handoff dual · builds PASS · `task_f90e803b` |
| prior · sa | `sa-compact.md` · **confirmed** · FormMode none · GET sessions · POST check-ins sibling · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET `patrol/sessions` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA · queued only — **cấm** re-run e2e / crawl ở review) |
| contentHash | `sha256:patrol-pin-control-hint-20260912-persist` |
| bffContentHash | `sha256:patrol-pin-mobile-bff-20260912-persist` |
| updatedAt | `2026-09-12T12:35:08.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolHome*` · `PatrolMap*` · `PinHandoffSheet` · `PatrolPinHandoffPayload` · `openWithHandoff` · GPS · Keychain |
| Android | `PatrolHome*` · `PatrolMap*` · `PinHandoffSheet` · `OpenWithHandoff` · EncryptedSharedPreferences |
| BFF | catch-all proxy · **không** invent `api/v1/pins` |
| API | GET `patrol/sessions` (pack) · POST `…/check-ins` **sibling only** · pin **cấm** auto-POST |
| QA store | `qa/store/patrol-pin/` · capturedAt `2026-09-12T12:28:22.116Z` · ok=true |
| cleanup_mock | live-only · **cấm** `demoRoute` / `demoItems` on pin path |
| skillVersion | agent-review-mobile **2026.08.25.01** · pack `review/sheet@session` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** |
| GPS Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Deny → in-app modal · **cấm** system alert · **cấm** handoff | **PASS** |
| Fake lat/lng | **PASS** — live fix · timeout toast |
| Invent `/pins` / pin auto-POST | **PASS** — không ship |
| IDOR `{id}` | **N/A** — pin sheet CTA; check-in `{id}` = sibling |
| Plaintext JWT | **PASS** |
| `GAP-MOB-REAL-02` demoItems as nguồn màn | **PASS** — none on pin path |
| `GAP-QA-REAL-01` | **PASS** — QA BFF A10 + store live |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| GET `patrol/sessions` → active Route toast | **OK** dual live-only |
| `PatrolPinHandoffPayload` sessionId+LocationFix | **OK** dual |
| `#sheet-handoff-checkin` · **không** form fields | **OK** dual |
| POST check-ins | **sibling** `openWithHandoff` only · **không** từ pin |
| No new BFF DTO / Step 4b | **N/A** · SA confirmed |

## UI align (prior QA `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE hub `#btn-pin-here` · mappin · **Ghim vị trí hiện tại** | **PASS** |
| P6-CORE hub same CTA | **PASS** |
| P6-CORE-2 map CTA | **PASS** |
| demo-parity Must | **0** |
| bugs OPEN | **0** |
| Must align / COLOR / COMP / SCROLL / FORM | **0** |

## Store + crawl gate

| Check | Result |
|-------|--------|
| Store PNG A3 1320×2868 · P6/P6-2 1080×1920 · manifest ok=true | **PASS** |
| `PrivacyInfo.xcprivacy` / Play Data safety | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** phase1_iphone |
| E2E `--crawl` / `CLICKABLES.md` | **SKIP** — roleOnly=review · **cấm** yarn e2e · prior QA e2e PASS · **không** mở `GAP-MOB-ACT-03` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · X-Company-Id · GPS plist/manifest | **OK** |
| R-02 | API | — | GET sessions · POST check-ins sibling · **cấm** invent `/pins` · **cấm ERP.*** | **OK** |
| R-03 | GPS | — | Live fix · deny modal · timeout · offline queued · **cấm** fake coords | **OK** |
| R-04 | Persist | — | Real `#sheet-handoff-checkin` · Tiếp tục → sibling · pin **không** auto-POST | **OK** |
| R-05 | Align | — | A3+P6+P6-2 Must **0** · QA `task_9a00d2c5` | **OK** |
| R-06 | DTO | — | Handoff payload dual · no form on pack | **OK** |
| R-07 | QA | — | e2eQa ON · store live · A10-BFF PASS | **OK** |
| R-08 | Real | — | **cấm** demoItems · GAP-MOB-REAL-02 / GAP-QA-REAL-01 closed | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-10 | Persist GAP | — | GAP-MOB-PIN-PERSIST-01 closed (Dev+QA) | **OK** |
| R-11 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-PIN | PASS (`task_f90e803b`) |
| T-AND-PAT-PIN | PASS (`task_f90e803b`) |
| T-BE-PAT-PIN | **n/a** |
| T-QA | PASS (`task_9a00d2c5`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_d184527a` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + STATUS review | **PASS** (this write) |
| yarn build / e2e / start:std | **SKIP** — roleOnly=review · **cấm** |
| Step 4b / migration | **N/A** |
| Prior Dev VERIFY iOS/Android/BFF | **PASS** · `task_f90e803b` |
| Prior QA e2e `yarn e2e-qa-mobile` | **PASS** · ok=true · `task_9a00d2c5` |

## Verdict

edit_page persist: security + DTO dual handoff + UI align Must **0** · QA e2e PASS · pin **không** auto-POST · sibling check-ins only · Step 4b N/A · GAP-MOB-PIN-PERSIST-01 **closed**. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| next | — (roleOnly=review · mark queue completed) |
| queue | `yarn queue -- --queue qlbd-mobile --yes status --id task_d184527a --status completed` |
