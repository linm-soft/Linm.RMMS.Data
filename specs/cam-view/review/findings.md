# Review — Findings — cam-view (Camera xem)

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_ce731e67` · autoApprove=ON) |
| packKind | **`screen`** · `#sc-cam-view` · `DES-MOB-CAM-VIEW` |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · align Must **0** · `task_94be0538` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · `task_47ef238f` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **Skip** · cameras* live |
| prior · design | `ui/design.md` · `ui/review/demo-parity.md` · `ui/review/align-ux.md` · Must **0** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy catch-all · **không** `CamViewController` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA `task_94be0538` · **cấm** e2e ở role review) |
| updatedAt | `2026-08-29T18:23:17.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `CamViewView*` · `CameraRepositoryImpl` · `FetchCamerasUseCase` · `CameraDto*` · Me entry · Keychain |
| Android | `camview/*` · `CameraRepositoryImpl` · `CameraUseCases` · `CameraDtoMapper` · Me navigate · EncryptedSharedPreferences |
| BFF | catch-all proxy · **không** invent `api/v1/cam-view` / `CamViewController` |
| API | **chỉ** `GET cameras` · `POST cameras/{id}/snapshot` · `GET cameras/events` |
| QA store | `qa/store/cam-view/` A11/A9/A3/P6/P6-2 live PNG · 1320×2868 · 1080×1920 RGB |
| contentHash | `sha256:cam-view-control-hint-20260829` |
| realDataHash | `sha256:cam-view-real-data-20260829` |
| skillVersion | agent-review-mobile **2026.08.29.1** |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor`) |
| Device camera Info.plist / Manifest for this pack | **N/A** — JPEG domain only · **không** AVCapture / CameraX trên CamView |
| System `UIAlertController` / `AlertDialog` | **PASS** — toast / EmptyState only |
| Fake Base64 / SpeedKmh / Plate | **PASS** — empty Online → EmptyState · fail → toast |
| Invent `api/v1/cam-view` / credentials `connect/snapshot` | **PASS** — không ship |
| IDOR `{id}` | **PASS** — snapshot id từ first Online∧IsActive list · không free-form id entry |
| Plaintext JWT | **PASS** — Keychain / Encrypted only |
| RTSP/WebRTC P1 | **PASS** — OUT P2 · không ship |

## DTO parity (iOS = Android = BFF)

| Field | Disposition |
|-------|-------------|
| `GET cameras` page=1 pageSize=20 → first `online && isActive` | **OK** dual |
| `POST cameras/{id}/snapshot` → `Ok` · `Base64` · `CapturedAt` · `ModelCode` caption | **OK** dual |
| `GET cameras/events?limit=20` ± `host=` → speed + plate + lane | **OK** dual (`GAP-MOB-CAMVIEW-DUAL-01` shipped) |
| Copy `cam.view.*` VN SSOT | **OK** dual parity |
| No new BFF DTO / Step 4b | **N/A** · SA Skip · schema Camera DONE |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE `#sc-cam-view` EmptyState · title **Camera xem** · **Làm mới** · back Tôi · tab **me** | **PASS** (Read store 1320×2868) |
| P6-CORE / P6-CORE-2 EmptyState · title · refresh · chevron back · tab **me** | **PASS** (Read store 1080×1920) |
| Watermark / process / device label | **PASS** none |
| Must align / demo-parity / COLOR / COMP Must / bugs OPEN | **0** |
| Android empty glyph `#i-video` | **Should** only · GAP-MOB-UX-COMP-03 (non-block) |
| JPEG + events filled | **DEFER env** · `GET cameras` totalCount=0 |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A3 1320×2868 · P6/P6-2 1080×1920 RGB · manifest ok:true | **PASS** |
| `PrivacyInfo.xcprivacy` | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** family `1` · Phase 1 iPhone only |
| Camera privacy A5/A7 / P8 | **PASS** — no device cam on this pack |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · X-Company-Id · no plaintext JWT | **OK** |
| R-02 | API | — | Chỉ cameras* · Step 4b Skip · **cấm ERP.*** · không invent cam-view path | **OK** |
| R-03 | Media | — | Domain JPEG only · **cấm** AVCapture / CameraX / fake Base64 | **OK** |
| R-04 | Pick | — | First Online∧IsActive · EmptyState khi none · **cấm** fake TCM403 | **OK** |
| R-05 | Dual | — | Speed + plate + lane rows dual · GAP-MOB-CAMVIEW-DUAL-01 | **OK** |
| R-06 | Align | — | A3 + P6 + P6-2 vs empty demo · Must **0** | **OK** |
| R-07 | DTO | — | `cam.view.*` + CameraDto dual parity | **OK** |
| R-08 | QA | — | e2eQa ON · Maestro · store live prior QA | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-10 | UX | Should | Android empty thiếu glyph `#i-video` vs demo/iOS | **Accept** (non-block) |
| R-11 | Env | DEFER | JPEG+events filled khi seed Online cam | **DEFER** |
| R-12 | Step 4b | — | T-BE **n/a** · T-BFF reuse | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-CAM-VIEW | PASS (prior Dev) |
| T-AND-CAM-VIEW | PASS (prior Dev) |
| T-BE-API / T-BE-MIG | **n/a** |
| T-BFF-01 | **reuse** · no CamViewController |
| T-QA-CAM-VIEW | PASS (prior `task_94be0538`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_ce731e67` · roleOnly=review)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + STATUS review | **PASS** |
| yarn build / e2e / start:std | **SKIP** (cấm role review · cite prior Dev/QA) |
| Prior iOS xcodegen + xcodebuild | **PASS** (Dev `task_47ef238f`) |
| Prior Android `assembleDebug` | **PASS** (Dev) |
| Prior Mobile.Bff `dotnet build` | **PASS** (Dev verify) |
| Prior `yarn e2e-qa-mobile` | **PASS** · ok:true · store PNG live |
| Step 4b BE align | **N/A** — reuse cameras* · Skip |
| Must align / demo-parity / bugs OPEN | **0** |

## Verdict

Camera xem dual-native: security + DTO + UI align Must **0** · EmptyState CORE valid · JPEG path DEFER seed · Android empty glyph Should Accept · Step 4b N/A. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| next | — (roleOnly=review · mark queue completed) |
| queue | `yarn queue -- --queue qlbd-mobile --yes status --id task_ce731e67 --status completed` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked contentHash=sha256:cam-view-control-hint-20260829 realDataHash=sha256:cam-view-real-data-20260829 taskId=task_ce731e67 -->
