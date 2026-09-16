# Review — Findings — mnt-progress (mobile sheet → screen · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] → Cập nhật trạng thái |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_50b18ae5` · autoApprove=ON) |
| packKind | **`sheet`** (surface full screen `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` (cleanup_mock re-review) |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** · Must **0** · `task_995ec06e` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · live-only · builds PASS · `task_e4368753` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy `maintenance/*` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** (prior QA re-e2e · **cấm** re-run e2e ở role Review) |
| updatedAt | `2026-09-01T05:15:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `MntProgressView` · `MntProgressViewModel` · `MntProgressUiState` · `MntProgressDto` · `MaintenanceRepositoryImpl` · Keychain |
| Android | `MntProgressScreen` · `MntProgressViewModel` · `MntProgressUiState` · `MntProgressDto` · EncryptedSharedPreferences |
| BFF | catch-all → GET `{id}` · POST `…/progress` · POST `…/complete` |
| API | body `{ progressPercent, note? }` · GPS embed → Note · MediaUrl **DEFER** |
| QA store | `qa/store/mnt-progress/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| cleanup_mock | **PASS** — **cấm** `MntProgressCopy.demo*` · nav seed + GET enrich · fail = toast |
| skillVersion | agent-review-mobile **2026.08.20.01** |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (prior review · cite Dev+QA) |
| IDOR `{id}` | **PASS** — path `maintenance/work-orders/{id}` · tenant header + Bearer · missing id → toast + chặn submit |
| GPS Info.plist · Manifest FINE/COARSE | **PASS** (deny → `GpsDenyModal` · vẫn cho submit không GPS) |
| Camera Info.plist · Manifest CAMERA | **PASS** (deny → toast · no invent MediaUrl) |
| `alert` / `UIAlert` / `AlertDialog` trên mnt-progress | **PASS** — in-app leave + GPS deny modals · toast only |
| Invent `mnt-progress` API / `mfeStdUrl` / watermark | **PASS** — không ship |
| Plaintext token / UserDefaults JWT | **PASS** — Keychain / Encrypted only |
| Live-only (no demo/mock fallback) | **PASS** — Grep `demo|mock` trong `MntProgress*` = **0** |

## DTO parity (iOS = Android = Web)

| Field | Disposition |
|-------|-------------|
| POST `…/progress` `{ progressPercent, note? }` | **OK** dual · **không** MediaUrl / lat-lng |
| POST `…/complete` `{ note? }` @100% | **OK** dual |
| GET `…/{id}` → `WorkOrderDetail` | **OK** dual mapper |
| Status VN chrome = mnt-list map | **OK** |
| Type label 13 · field/btn 16 | **OK** · **không** GAP-TYP-01 |
| In-screen tabs | **none** · shell Tab 5 **work** · **không** GAP-TAB-01 |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#sc-mnt-progress` | **PASS** — title **Cập nhật trạng thái** · back **Công việc** · WO live · % + slider · Ghi chú filled · tab **work** |
| P6-CORE / P6-CORE-2 (1080×1920) vs demo | **PASS** — title · Ghi chú + GPS embed · **Ảnh hiện trường** · **Vị trí đã chốt** · CTA **Cập nhật** · tab **work** |
| IME fold (iOS keyboard / Android Gboard float) | **Accept** — OS chrome · không Must |
| Android TopBar `…` overflow | **Accept** — kit default · Observe (QA) |
| Demo code `CV-…` vs live `WO-DEMO-1` | **Accept** — demoItems SSOT |
| WO `.row-icon` | n/a (`no-icon`) · **không** GAP-MOB-UX-COMP-03 |
| Watermark / device label | **PASS** — none |
| Must align / demo-parity / COLOR / COMP / E2E-VIS | **0** open |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 RGB · P6/P6-2 1080×1920 RGB | **PASS** |
| `PrivacyInfo.xcprivacy` (location + photos) | **Accept** P2 → `/review-app-submit` |
| A4-IPAD | **DEFER** family `1` · `GAP-SUBMIT-IMG-08` N/A Phase 1 |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · GPS/camera copy | **OK** |
| R-02 | API | — | Reuse progress+complete · Step 4b N/A · **cấm ERP.*** · **cấm** invent MediaUrl | **OK** |
| R-03 | DTO | — | Dual parity `{ progressPercent, note? }` · complete @100 | **OK** |
| R-04 | IDOR | — | `{id}` + tenant · missingId gate | **OK** |
| R-05 | Align | — | A3 + P6 + P6-2 Read vs demo · Must **0** | **OK** |
| R-06 | Real-data | — | cleanup_mock live-only · nav seed → GET enrich · **cấm** demo fallback | **OK** · GAP-MOB-EDIT-DEMO-01 **closed** |
| R-07 | A11y | Should | GAP-MOB-A11Y-01 iOS sync a11y id (QA) | **Accept** · không block |
| R-08 | Media | — | MEDIA-01 DEFER · GPS→Note embed | **Defer** |
| R-09 | QA | — | e2eQa ON · Maestro re-e2e live IDs · store live · Aligned | **OK** |
| R-10 | Store | P2 | PrivacyInfo / Data safety submit | **Accept** |
| R-11 | Step 4b | — | T-BE **n/a** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-MNT-PROG | PASS (Dev cleanup_mock · cite prior) |
| T-AND-MNT-PROG | PASS (Dev cleanup_mock · cite prior) |
| T-BE-* | **n/a** |
| T-QA | PASS (`ok:true` · `task_995ec06e` post cleanup_mock) |
| T-REVIEW-SEC / DTO / ALIGN / REAL | PASS · Must align = **0** |

## VERIFY GATE (`task_50b18ae5` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + STATUS | **PASS** |
| iOS / Android / BFF build | **cite prior** Dev+QA **PASS** · **cấm** yarn build ở role Review |
| yarn e2e / start:std | **cấm** · prior QA re-e2e `ok:true` |
| Step 4b BE align | **N/A** — reuse progress+complete |
| Align vision CORE PNG Read | **PASS** · Must **0** |
| cleanup_mock code scan | **PASS** — no demo/mock in MntProgress sources |

## Verdict

mnt-progress dual-native sheet→screen post cleanup_mock: security + DTO + live-only + UI align Must **0** · VERIFY GATE artifact PASS · Step 4b N/A · Should A11Y Accept · MEDIA DEFER. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** |
| Next | store submit → `/review-app-submit` khi cần |
| Sibling | mnt-chat / mnt-log / estimate — **không** start (`GAP-MOB-ACT-06`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T05:15:00.000Z |
| versionGate | rechecked |
| taskId | `task_50b18ae5` |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
