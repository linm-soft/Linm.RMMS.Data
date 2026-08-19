# Review — login-forgot (mobile)

| Field | Value |
|-------|-------|
| feature | `login-forgot` |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autoApprove=ON · `task_e3916a45`) |
| prior · qa | **confirmed** · `qa/scenarios.md` · e2e **ok:true** · `task_c019702a` |
| prior · dev | **confirmed** · `implement/ios.md` · `android.md` · `bff.md` · `task_41503568` |
| packKind | **`shell`** |
| stack | `native_dual` |
| changeScope | `new_page` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/forgot-password` · `auth/reset-password` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Auth platform live · **cấm ERP.*** |
| mfeStdUrl | — (**cấm**) |
| autoApprove | **ON** |
| e2eQa | **ON** · prior `yarn e2e-qa-mobile` **ok:true** |
| taskId | `task_e3916a45` |
| updatedAt | `2026-08-18T22:10:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `LoginForgotView` · `LoginForgotViewModel` · `PasswordRecoveryDto` · `AuthRepositoryImpl` attachAccessToken=false |
| Android | `LoginForgotScreen` · `LoginForgotViewModel` · `AuthDto` · `AuthInterceptor` skipBearer forgot/reset |
| BFF | `AuthPasswordRecoveryController` thin proxy · ServiceClient token · rewrite skip |
| Auth DTO | `phoneNumber` · `resetToken` · `newPassword` · response `message` / `temporaryPassword?` ignored |
| QA store | `qa/store/login-forgot/` A11/A9/A3/P6 · CAPTURE.md |
| skillVersion | `2026.08.19.10` (agent-review-mobile) |
| workflowVersion | `2026.08.19.19` |

## Security checklist

| Check | Result |
|-------|--------|
| Token store | **PASS** — iOS Keychain · Android EncryptedSharedPreferences · forgot/reset **không** ghi JWT |
| App Bearer on recovery | **PASS** — iOS `attachAccessToken: false` · Android interceptor skip `/auth/forgot-password` · `/auth/reset-password` |
| BFF downstream | **PASS** — ServiceClient `accessToken` only · **không** forward app Bearer |
| IDOR `{id}` | **N/A** — anonymous phone OTP · **không** resource id |
| `X-Company-Id` | **OK** — optional leftover company header harmless · Auth recovery không đọc tenant catalog |
| `temporaryPassword` | **PASS** — decode DTO only · **không** toast / persist / auto-login |
| System alert | **PASS** — `LinmToast` + `LinmLeaveConfirm` · **cấm** `UIAlert` / `AlertDialog` |
| Offline | **PASS** — toast **Không có mạng** · **cấm** queue |
| Forked API | **PASS** — paths `auth/forgot-password` · `auth/reset-password` · **cấm** invent `auth/forgot` · **cấm ERP.*** |
| Location / camera plist | **N/A** — slug không GPS/camera |
| Store PrivacyInfo / Play Data safety / HTTPS landing | **Accept** — pack store shell · QA **cấm** `READY_TO_SUBMIT` · A5/A6 URL = pack khác · A4-IPAD **DEFER** family `1` |

## DTO parity (iOS = Android = Auth swagger)

| Field | iOS | Android | Auth |
|-------|-----|---------|------|
| forgot body | `phoneNumber` | `phoneNumber` | `phoneNumber` |
| reset body | `phoneNumber` · `resetToken` · `newPassword` | same | same · minLength 6 |
| response | `message?` · `temporaryPassword?` | same | same · app ignore temp |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | BFF | info | Thin `AuthPasswordRecoveryController` gap-fill (NuGet 1.26.0 thiếu forgot/reset) | **Accept** · service token |
| R-02 | Path | — | `forgot-password` / `reset-password` · không invent `auth/forgot` | **OK** |
| R-03 | Token | — | Keychain / Encrypted · không Bearer · không auto-login | **OK** |
| R-04 | IDOR | — | Anonymous phone OTP · no `{id}` | **OK** |
| R-05 | Kit | — | Dual `LinmLeaveConfirm` · leave dirty step 2 | **OK** |
| R-06 | DTO | — | iOS = Android = Auth scalars | **OK** |
| R-07 | QA | — | e2e **ok:true** · store PNG A11/A9/A3/P6 | **OK** |
| R-08 | Store | P3 | PrivacyInfo.xcprivacy / Play Data safety / A5–A6 URL chưa READY_TO_SUBMIT | **Accept** · ngoài slug · **cấm** block closeout |
| R-09 | Alert | — | Không system alert trên flow | **OK** |

## Must / VERIFY GATE (`task_e3916a45`)

| Gate | Result |
|------|--------|
| iOS `xcodegen` | **PASS** |
| iOS `xcodebuild` scheme `LinmRmms` dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |
| Android `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** |
| BFF `dotnet build` `RMMS.Mobile.Bff.csproj` | **PASS** (0 warning · 0 error) |
| `mfeStdUrl` / `yarn start:std` | **không dùng** |
| P0 security open | **none** |
| `review_confirm` | **done** (autoApprove) |

## Verdict

Shell auth child `#sc-forgot` dual native + BFF thin proxy PASS security/DTO. Prior QA e2e **ok:true**. Không P0. **review_confirm=done**.

## Handoff

Pipeline **complete** · không role sau Review · STATUS `completed` · queue `task_e3916a45` → completed.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | `2026.08.19.10` |
| workflowVersion | `2026.08.19.19` |
| rulesVersion | `2026.08.19.22` |
| schemaVersion | `1` |
| reviewHash | `sha256:login-forgot-review-task_e3916a45-20260818` |
| contentHash (prior) | `sha256:ee325de3c873f7c4a035a7b8c7326005daf5f575b8dade62df4ba0a22547e69c` |
| bffContentHash (prior) | `sha256:31645a9e53e29f9a8d24a604a7e240f5459d94b0397ba744a867c930fbe75c29` |
