# Review — Findings — asset-ai

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_7bebeca5` · autoApprove=ON) |
| align_confirm | **approve** (autoApprove=ON) |
| packKind | **`sheet`** · `#sc-asset-ai` · `DES-MOB-ASSET-AI` |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `new_page` |
| prior · qa | **confirmed** · e2e `ok:true` · visual **Aligned** Must **0** · `task_d1226fec` · `handoff/qa-compact.md` |
| prior · dev | **confirmed** · dual native VERIFY PASS · `task_5bdb7bcf` · `handoff/dev-compact.md` |
| prior · tl/sa/design/po/da | **confirmed** · compact exists · skillVersion `2026.08.25.01` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro/build |
| updatedAt | `2026-09-01T17:27:00.000Z` |
| taskId | `task_7bebeca5` |
| method | Token-opt B compact chain + CAPTURE/manifest · PNG host Read blocked → cite QA Aligned · **cấm** yarn e2e/build/start:std |
| skillVersion | `2026.08.25.01` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AssetAiView` · `AssetAiViewModel` · `DetHitlEnqueueView` · uploads+detect · Score% · GPS* |
| Android | `assetai/AssetAiScreen` · `AssetAiViewModel` · `DetHitlEnqueue` · dual parity |
| BFF | catch-all · **cấm** invent `AssetAiController` / `api/v1/asset-ai` |
| API | uploads init/object/complete · `POST ai-vision/detect-assets` · optional sessions/routes |
| QA store | `qa/store/asset-ai/` A11/A9/A3/P6/P6-2 · manifest **ok:true** · CAPTURE PASS |
| align | QA Read A3↔P6↔demo **Aligned** · Must **0** · SCORE empty pre-detect OK · HITL Confirm OUT |
| skillVersion | agent-review-mobile **2026.08.25.01** |
| contentHashPriorQa | `task_d1226fec` |
| contentHashPriorDev | `task_5bdb7bcf` |

## Security + permission

| Check | Result |
|-------|--------|
| Token Keychain / EncryptedSharedPreferences (shared Session) | **PASS** |
| Bearer + `X-Company-Id` / timezone via ApiClient | **PASS** |
| Camera + Location Info.plist + Manifest | **PASS** (`NSCamera` · `NSLocationWhenInUse`) |
| `PrivacyInfo.xcprivacy` app root | **PASS** (file present) |
| GPS deny modal · CTA off · **cấm** fake lat/lng | **PASS** (`hasGps` · `canSubmit`) |
| Camera deny toast · leave confirm kit | **PASS** |
| Invent `api/v1/asset-ai` · mock:// · fake-200 | **PASS** — live AiVision paths only |
| HITL Confirm/Dismiss trên slug | **PASS** — enqueue `det-hitl`+Id only |
| System `alert` / AlertDialog raw | **PASS** — GpsDeny + leave kit + toast |

## Real data

| Check | Result |
|-------|--------|
| Uploads → ImageUrl · detect-assets LIVE | **PASS** (Dev + SA · MEDIA CORE chrome empty DEFER) |
| A10-BFF :5202 | **PASS** (QA) |
| SCORE % từ API sau detect · empty `—` pre-detect | **PASS** (AC + QA) |
| Route prefill sessions | **Accept** P2 — iOS dùng `itemsOrDemo` helper shared · không fake detect payload |
| Soft iOS sim GPS banner | **Accept** — env · Android live GPS (QA soft) |

## DTO parity (iOS = Android = AiVision)

| Field | Disposition |
|-------|-------------|
| Upload init/object/complete → ImageUrl | **OK** dual |
| DetectAssets body · AssetClass · Score/percent · Code · Id | **OK** dual |
| Prefill sessions · road-routes/search | **OK** optional |
| Confirm API | **OUT** → sibling det-hitl |

## UI align (QA shots · PNG Read host blocked)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| TopBar · Photo · rows pos/class/score · CTA | `A3-CORE` | `P6-CORE` | **PASS** — Must 0 |
| Empty chrome CORE (MEDIA DEFER) | A3 | P6 | **PASS** — QA Aligned |
| Fold / back hub | A3 | P6-2 | **PASS** |
| Must align mở | — | — | **0** |

Evidence: `qa/store/asset-ai/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok:true` · qa-compact Aligned.

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain/Encrypted · Bearer · camera/GPS privacy · PrivacyInfo | **OK** |
| R-02 | API | — | uploads + detect-assets · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | DTO | — | Dual AssetAi / AiVision parity | **OK** |
| R-04 | Align | — | A3↔P6(+2) vs demo · Must **0** · Aligned | **OK** |
| R-05 | SCORE-01 | — | show% post-detect · `—` pre-detect | **OK** |
| R-06 | HITL-01 | — | Confirm OUT · enqueue det-hitl+Id | **OK** |
| R-07 | PACK-01 | — | sheet full · **cấm** bottom-sheet | **OK** |
| R-08 | QA | — | e2e-qa-mobile ok:true · `task_d1226fec` | **OK** |
| R-09 | GPS soft | Should | iOS sim GPS banner/toast env | **Accept** |
| R-10 | Prefill | P2 | `itemsOrDemo` sessions helper iOS | **Accept** |
| R-11 | MEDIA | — | Camera DEFER CORE chrome empty | **OK** (QA) |
| R-12 | Step 4b | — | N/A · Review skip re-run | **OK** |
| R-13 | Store | P2 | Play Data safety / READY_TO_SUBMIT | **Accept** → post_review |
| R-14 | A4-IPAD | — | DEFER Phase 1 | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ASSET-AI | PASS (prior Dev) |
| T-AND-ASSET-AI | PASS (prior Dev) |
| T-BE / T-BFF | **n/a** |
| T-QA-ASSET-AI | PASS (`ok:true` · Must 0) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_7bebeca5` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META · handoff/review-compact.md | **PASS** |
| prior Dev iOS/Android/BFF builds | **PASS** · **cấm** re-run |
| prior QA e2e-qa-mobile | **PASS** (`ok:true`) · **cấm** re-run |
| Step 4b / migration / e2e / start:std | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Sheet Camera AI dual-native: security · DTO · SCORE% · HITL enqueue · API live · UI align Must **0** · prior QA `ok:true`. Soft GPS sim + sessions `itemsOrDemo` Accept non-block. **review_confirm=approve**. Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | — · feature pipeline closed · **cấm** start role khác trong task này |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.01 |
| generatedAt | 2026-09-01T17:27:00.000Z |
| versionGate | rechecked |
| taskId | `task_7bebeca5` |
| contentHashPriorQa | `task_d1226fec` |
| contentHashPriorDev | `task_5bdb7bcf` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.25.01 schemaVersion=1 versionGate=rechecked -->
