# Review — Findings — asset-collect (mobile screen · Thu thập thủ công)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_9fd1b996` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-ASSET-COLLECT` · **cấm** sheet) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_3388dfba` · `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** |
| prior · dev | `task_ea1c812a` · `implement/{ios,android}.md` · **confirmed** · builds PASS · Step 4b **N/A** |
| prior · sa | `task_b5598b84` · `be/solution-discovery.md` · **confirmed** · MEDIA-01 DEFER · Create LIVE |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** · Must **0** |
| prior · data_analy | control-hint · real-data · bff · action-tree · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy `asset/*` · `integration/*` · `patrol/*` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Asset · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_3388dfba` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-30T23:25:00.000Z` |
| taskId | `task_9fd1b996` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AssetCollect/*` · `CreateRoadAssetUseCase` · `FetchRoadAssetInitDataUseCase` · `FetchAssetTypesUseCase.executeLiveOnly` · `CreateRoadAssetBody` · Keychain · GpsDeny / Leave in-app · hub `setOnOpenCollect` |
| Android | `presentation/feature/assetcollect/*` · same use cases · `ApiService` GET init + POST create · EncryptedSharedPreferences · GpsDenyDialog · CameraX still |
| BFF | `MobileApiProxyController` catch-all · **cấm** invent `AssetCollectController` |
| API | `GET integration/asset-types` · `GET asset/road-assets/init-data` · `POST asset/road-assets` · optional sessions/routes · Create sets `CompanyCode` from claim |
| QA store | `qa/store/asset-collect/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED (Should 2) |
| skillVersion | agent-review-mobile **2026.08.29.1** |
| contentHash | `sha256:asset-collect-review-findings-20260831` |
| priorControlHintHash | `sha256:asset-collect-control-hint-20260830` · unchanged |
| priorRealDataHash | `sha256:asset-collect-real-data-20260830` · unchanged |
| priorBffHash | `sha256:asset-collect-bff-20260830` · unchanged |
| priorDesignHash | `sha256:asset-collect-design-20260831` · unchanged |
| priorSaHash | `sha256:asset-collect-sa-solution-20260830` · unchanged |
| priorImplementIosHash | `sha256:asset-collect-implement-ios-20260831` |
| priorImplementAndroidHash | `sha256:asset-collect-implement-android-20260831` |
| priorQaHash | `sha256:asset-collect-qa-scenarios-20260831` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF forward) |
| IDOR / tenant Create | **PASS** — Create binds `CompanyCode` from claim · **không** client-supplied company · GetById XCO OUT pack |
| Location Info.plist `NSLocationWhenInUseUsageDescription` · Manifest `ACCESS_FINE_LOCATION` | **PASS** |
| Camera plist / Manifest `CAMERA` | **PASS** — local capture · upload **DEFER** (MEDIA-01) |
| Deny / leave in-app · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** |
| Fake lat/lng · gõ tay | **PASS** — live CL / Fused · deny modal · CTA off khi `!hasGps` |
| Invent `api/v1/asset-collect` / BFF controller | **PASS** — Kind path `asset/road-assets` only |
| Fake HTTP 200 / invent `Code` khi POST fail | **PASS** — toast fail · form giữ · Code từ envelope |
| Plaintext JWT / UserDefaults | **PASS** — Keychain / Encrypted only |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |
| `Source=ai` trên slug này | **PASS** — body omit Source → BE default `manual` |
| Hardcode catalog khi BFF live (`GAP-MOB-REAL-02`) | **PASS** — `executeLiveOnly` · empty → disable CTA |
| `GAP-QA-REAL-01` | **PASS** — QA chứng live type «Bảo vệ mái dốc» · GPS pin |

## DTO parity (iOS = Android = BE)

| Field | Disposition |
|-------|-------------|
| `name` · `type` · `route` · `kmFrom` · `status` · `lat` · `lng` | **OK** dual `CreateRoadAssetBody` = BE `CreateRoadAssetRequest` (camel JSON) |
| Prefill `Route`+`KmFrom` parse display | **OK** dual `RouteKmParser` · **cấm** invent `QL.1` |
| Init statuses `tot` / `theo_doi` / `can_bao_tri` | **OK** · default `tot` dual · fallback labels chỉ khi init fail |
| Toast `Code` | **OK** · server only · **cấm** invent |
| photos in body | **OK** · **không** wire P1 (MEDIA-01) |
| Tab invent | **OK** · surface `tabs: none` · shell Tab 5 · home active · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-asset-collect` | **PASS** — Title **Thu thập thủ công** · back **Tài sản** · type live · name · route empty placeholder · GPS acquiring · status **Tốt** · tab home · keyboard OS |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — same zones · Android icon-only back · `#i-camera` · CTA **Thêm tài sản** (fold2) · GPS coords live |
| Pict `#i-camera` · section **Ảnh** | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Route empty · **cấm** invent | **PASS** (ROUTE-01) |
| Watermark / device label | **PASS** none |
| Must align / demo-parity / COLOR / COMP / bugs OPEN Must | **0** |
| Should COPY-01 / FORM-SUBMIT-01 | **Accept** non-block (CLOSED bugs · Should 2) |

Evidence: Read CORE PNG `qa/screens/{A3-CORE,P6-CORE,P6-CORE-2}.png` · store px 1320×2868 / 1080×1920 · `align-ux.md` · `demo-parity.md` · `qa/bugs` CLOSED.

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 RGB | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` PreciseLocation + Photos/Videos | **PASS** (present) · Play Data safety **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Signup / delete account | **N/A** — form feature |

## E2E crawl / clickable (Step 5d)

| Check | Result |
|-------|--------|
| Re-run `yarn e2e-qa-mobile --crawl` | **SKIP** — roleOnly=`review` packet · e2e queued QA · prior `ok:true` |
| `CLICKABLES.md` | **N/A** this turn — prior QA store path · no crawl FAIL open |
| `GAP-MOB-ACT-03` enqueue | **PASS** — action-tree: hub entry filled · sibling enqueue **none** · same-slug ACT-07 |
| `GAP-MOB-ACT-06` | **PASS** — **cấm** start sibling |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · tenant Create | **OK** |
| R-02 | API | — | POST `…/road-assets` live · **cấm ERP.*** · no invent slug | **OK** |
| R-03 | GPS | — | Live fix · deny/leave in-app · CTA gated dual | **OK** |
| R-04 | DTO | — | Dual body = BE `CreateRoadAssetRequest` | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned | **OK** |
| R-06 | Photo | P2 | Local PhotoRow / CameraX · upload DEFER MEDIA-01 | **Accept** |
| R-07 | Copy | Should | `GAP-QA-ASSET-COLLECT-COPY-01` labels rút gọn | **Defer** non-block |
| R-08 | Form | Should | `GAP-QA-ASSET-COLLECT-FORM-SUBMIT-01` submit body DEFER seed | **Defer** non-block |
| R-09 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-10 | Store | P2 | Play Data safety / landing official | **Accept** |
| R-11 | Step 4b | — | T-BE **n/a** · Create reuse · review **skip** re-run | **OK** |
| R-12 | Real | — | `GAP-MOB-REAL-02` / `GAP-QA-REAL-01` closed | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ASSET-COLLECT | PASS (prior Dev) |
| T-AND-ASSET-COLLECT | PASS (prior Dev) |
| T-BE-* | **n/a** |
| T-BFF-* | **n/a** · catch-all |
| T-KIT-* | **n/a** · PhotoRow compose |
| T-QA | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_9fd1b996` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · prior Dev/SA N/A Create |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Screen Thu thập thủ công dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · POST road-assets live · MEDIA-01 / COPY / FORM-SUBMIT Should non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | COPY-01 · FORM-SUBMIT-01 seed · MEDIA upload P2 · Privacy/Data safety submit |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T23:25:00.000Z |
| versionGate | rechecked |
| taskId | `task_9fd1b996` |
| contentHash | sha256:asset-collect-review-findings-20260831 |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| priorBffHash | sha256:asset-collect-bff-20260830 |
| priorDesignHash | sha256:asset-collect-design-20260831 |
| priorSaHash | sha256:asset-collect-sa-solution-20260830 |
| priorQaHash | sha256:asset-collect-qa-scenarios-20260831 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS contentHash=sha256:asset-collect-review-findings-20260831 -->
