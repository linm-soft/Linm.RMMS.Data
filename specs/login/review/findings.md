# Review — Findings — login (mobile)

| Field | Value |
|-------|-------|
| feature | `login` |
| title | [Mobile] Đăng nhập |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_67ecabfa` · autoApprove=ON) |
| prior · qa | **confirmed** · `qa/scenarios.md` · `qa/store/login/CAPTURE.md` · `task_4d1e2f3a` |
| packKind | **`shell`** |
| stack | `native_dual` |
| changeScope | `new_page` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | prior QA **PASS** · Maestro iOS+Android · Pixel_2 1080×1920 · A4 **DEFER** |
| taskId | `task_67ecabfa` |
| updatedAt | `2026-08-19T01:43:18.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| QA | `qa/scenarios.md` sha256:`48e2ab3c…` · store A11/A3/A9 1320×2868 · P6 1080×1920 |
| Dev | `implement/ios.md` · `android.md` · `bff.md` |
| skillVersion | `2026.08.19.10` (`agent-review-mobile`) |
| workflowVersion | `2026.08.19.19` (orchestrator recheck) |
| gap P0 | **none** |

## Live re-audit (security + DTO + store)

| Check | Result |
|-------|--------|
| Keychain JWT (iOS) · **cấm** UserDefaults token | **PASS** · `KeychainTokenStore` access+refresh |
| EncryptedSharedPreferences JWT (Android) | **PASS** · `TokenStore` AES256 |
| `X-Company-Id` từ JWT claims · company **không** JWT | **PASS** · iOS `ApiClient` · Android `AuthInterceptor` · `CompanyContextStore` |
| App `authUserId` = `user.id` sau login · **cấm** query user khác (SA XCO) | **PASS** app |
| IDOR BE `session-window?authUserId=` không bind JWT `sub` | **P1 Accept** · live API · backlog BE (không invent path login pack) |
| Location/camera Info.plist / Manifest | **PASS** · login **N/A** · Manifest chỉ INTERNET + NETWORK_STATE |
| DTO iOS = Android = Auth package | **PASS** · `{ id, password }` · `{ token, refreshToken, expiresAt, user.id }` · session-window `{ allowed, reason }` · `auth/refresh-token` |
| **Cấm** `auth/refresh` · **cấm** ERP.* · **cấm** fork AuthController | **PASS** |
| Toast only · **cấm** UIAlert / AlertDialog | **PASS** · `LinmToast` dual |
| Kit `LinmSecureTextField` · **cấm** raw | **PASS** |
| Offline no-queue login | **PASS** · `AuthFailure.offline` |
| Contract window forceLogout copy | **PASS** · BFF MW + app clear token |
| Store px A11/A3/A9 / P6 | **PASS** · live Maestro · no alpha |
| A4 listing · family `1` | **DEFER** · **cấm** upload A4 (`GAP-SUBMIT-IMG-08` n/a listing) |
| `PrivacyInfo.xcprivacy` | **GAP-SUBMIT** · thiếu file — **cấm** READY_TO_SUBMIT |
| Play Data safety / landing HTTPS privacy+support | **GAP-SUBMIT** · thiếu URL — khớp QA |
| Signup → xóa TK | **N/A** · shell login · không signup |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-LOGIN-01 | Token | — | Keychain / Encrypted store access+refresh · clear on logout/window | **OK** |
| R-LOGIN-02 | Header | — | `Authorization` Bearer + `X-Company-Id` + `X-Timezone` | **OK** |
| R-LOGIN-03 | IDOR | P1 | API `GET session-window` không so khớp JWT `sub` ↔ `authUserId` | **Accept** backlog BE · app đúng `user.id` |
| R-LOGIN-04 | DTO | — | Login/refresh/session-window dual parity · root Auth scalars | **OK** |
| R-LOGIN-05 | UI | — | Toast · kit secure field · signal NWPath/NetworkCapabilities | **OK** |
| R-LOGIN-06 | BFF | — | `ContractWindowDefenseMiddleware` skip `/auth/` + session-window · copy Web | **OK** |
| R-LOGIN-07 | Path | — | `auth/refresh-token` only · **cấm** `auth/refresh` | **OK** |
| R-LOGIN-08 | Store | P2 | Thiếu `PrivacyInfo.xcprivacy` + landing HTTPS | **Accept** · **cấm** READY_TO_SUBMIT |
| R-LOGIN-09 | Sibling | — | `login-forgot` UI đã có trong tree · board `pending_confirm` | **Accept** · out of pack AC |
| R-LOGIN-10 | Keychain | P2 | `KeychainTokenStore` chưa set `kSecAttrAccessible` | **Accept** harden backlog |
| R-LOGIN-11 | QA/E2E | — | Maestro iOS+Android PASS · A4 DEFER Phase 1 | **OK** |
| R-LOGIN-12 | Build | — | xcodegen + xcodebuild · assembleDebug · dotnet build | **OK** |

## Task gate (TL)

| Task | Result |
|------|--------|
| T-IOS-LOGIN | **PASS** |
| T-AND-LOGIN | **PASS** |
| T-BE-MW | **PASS** |
| T-BE-API / T-BE-MIG | **n/a** |
| QA store + E2E | **PASS** (prior `task_4d1e2f3a`) |

## VERIFY GATE (`task_67ecabfa`)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` | **PASS** |
| iOS `xcodebuild` dest **iPhone 17 Pro Max** | **PASS** (`BUILD SUCCEEDED`) |
| Android `./gradlew :app:assembleDebug` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** 0 warning / 0 error |
| E2E (prior QA) | **PASS** · **cấm** yarn start:std / mfeStdUrl |

## Verdict

Shell auth `#sc-login` dual + BFF Auth/session-window khớp QA. **Không P0.** Store submit gaps P2 không block feature close. **Approve** (autopilot).

## Handoff

Pipeline **complete** · không role sau Review · STATUS `completed` · **cấm** READY_TO_SUBMIT (privacy URL + PrivacyInfo).

Open (không block): `login-forgot` board · `login-logout` backlog · R-LOGIN-03 BE bind JWT · R-LOGIN-08/10 harden.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-19T01:43:18.000Z |
| versionGate | rechecked (`recheck_new` · STATUS prior `2026.08.19.10` → orchestrator `2026.08.19.19`) |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.19.17 |
| taskId | `task_67ecabfa` |
| contentHashPriorQa | `task_4d1e2f3a` · scenarios sha256:`48e2ab3c7b2651becf983759a7167cce6b57d9dbe7d75ad713eaedec0c57d4bb` |
| dataAnalySkillVersion | 2026.08.19.17 |
| poSkillVersion | 2026.08.19.15 |
| designSkillVersion | 2026.08.19.07 |
| saSkillVersion | 2026.08.19.10 |
| teamLeadSkillVersion | 2026.08.19.15 |
| devSkillVersion | ios 2026.08.19.13 · android 2026.08.19.12 |
| qaSkillVersion | 2026.08.19.19 |
