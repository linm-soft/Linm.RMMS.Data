# Review — Findings — mnt-chat

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| title | [Mobile] [Công việc] -> Trao đổi công việc |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_ae161e19` · autoApprove=ON) |
| post_review | **skip** |
| packKind | `sheet` → screen `#sc-mnt-chat` |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e ở role này |
| prior · qa | `task_d743848b` · e2e PASS · visual **Aligned** · Must **0** · **confirmed** |
| prior · dev | `task_e0e94a4c` · qaFixPhase=implement · VERIFY GATE **PASS** · **confirmed** |
| prior · team_lead / sa / design / po / data_analy | **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-09-01T09:45:00.000Z` |
| taskId | `task_ae161e19` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `MntChatView` · `MntChatViewModel` · `MaintenanceRepositoryImpl` messages |
| Android | `MntChatScreen` · `MntChatViewModel` · `ApiService` GET/POST messages |
| BFF | Mobile.Bff catch-all · Web `WorkOrdersBffController` forward |
| API | GET/POST `api/v1/maintenance/work-orders/{id}/messages` · **cấm** invent `mnt-chat` |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| live re-audit | 2026-09-01 after QA `task_d743848b` · Dev `task_e0e94a4c` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · **cấm** UserDefaults JWT | **PASS** (platform store) |
| Token store Android EncryptedSharedPreferences | **PASS** (platform store) |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` | **PASS** |
| IDOR `{id}` messages | **PASS** — WO Guid path · domain NotFound |
| Location / camera trên slug `mnt-chat` | **N/A** — chat text only |
| Entry toast-only / `mnt.list.toast.chat` as primary | **PASS** — `#i-chat` → `onOpenChat` navigate · **0** toast (GAP-MOB-EDIT-01) |
| Fork API / ERP.* | **PASS** — reuse WorkOrders messages · **cấm ERP.*** |
| Plaintext token | **PASS** |

## Real data

| Check | Result |
|-------|--------|
| Live GET messages | **PASS** — empty «Chưa có trao đổi» Accept (QA) |
| Demo seed bubbles | **Accept** — proto seed only · **cấm** fake live bubbles |
| POST body `{ content, type:"message" }` | **PASS** dual |
| Demo id local fallback | **PASS** — per PO/SA · no fake «Đã gửi» toast |

## DTO parity (iOS = Android = WorkOrders)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `items[]` list | `WorkOrderMessageListDto` | same | **OK** |
| `id` · `workOrderId` · `content` · `type` | `WorkOrderMessageDto` | same | **OK** |
| `senderUserId` · `senderName` · `createdAt` · `isMine` | same | same | **OK** |
| Create `content` + `type` | `CreateWorkOrderMessageBody` | same | **OK** |

## UI align (QA shots · cite only)

| Zone | Demo | Live A3/P6 | Result |
|------|------|------------|--------|
| `#sc-mnt-chat` title | Trao đổi công việc | same | **Aligned** |
| subtitle WO | Vá mặt đường · WO-DEMO-1 | same | **Aligned** |
| thread empty | seed bubbles (proto) | «Chưa có trao đổi» | **Accept** |
| composer | placeholder + send | same | **Aligned** |
| Must align mở | — | — | **0** |

Evidence: `qa/store/mnt-chat/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · scenarios verdict PASS · PNG Read permission N/A → cite CAPTURE.

## Store gate (Review note — **không** READY_TO_SUBMIT)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **present** (iOS app) | **OK** |
| Play Data safety / landing | deferred | **Accept** P2 |
| A4-IPAD | **DEFER** Phase 1 | **OK** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · headers | **OK** |
| R-02 | Entry | — | navigate `#sc-mnt-chat` · **cấm** toast revert | **OK** |
| R-03 | API | — | GET/POST WO messages · dual · **cấm** invent path | **OK** |
| R-04 | DTO | — | WorkOrderMessage* parity iOS=Android=API | **OK** |
| R-05 | Align | — | QA Aligned Must 0 · empty Accept | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · `task_d743848b` | **OK** |
| R-07 | Dev VERIFY | — | iOS xcodebuild · Android assemble · BFF build | **OK** |
| R-08 | SignalR | P2 | GAP-MSG-HUB-01 DEFER · Notification | **Accept** |
| R-09 | Step 4b | — | migration N/A (Signed / messages exist) | **OK** |
| R-10 | Analy SSOT | — | control-hint · real-data · bff · action-tree confirmed | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-KIT-CHAT | PASS |
| T-IOS-01 | PASS |
| T-AND-01 | PASS |
| T-BE-01 / T-BFF-01 | PASS (prior · Signed) |
| T-QA (e2e store) | PASS (`task_d743848b`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |
| T-REVIEW-ENTRY | PASS · GAP-MOB-EDIT-01 |

## VERIFY GATE (cite prior · **cấm** re-run build/e2e)

| Gate | Result |
|------|--------|
| iOS xcodegen + xcodebuild | **PASS** (Dev `task_e0e94a4c`) |
| Android assembleDebug | **PASS** (Dev) |
| BFF dotnet build | **PASS** (Dev) |
| `yarn e2e-qa-mobile` | **PASS** (QA `2026-09-01T09:37:54Z`) |

## Gaps

| ID | Status | Note |
|----|--------|------|
| R-QA-01 · GAP-QA-* · GAP-MOB-EDIT-01 · GAP-SA-* | **CLOSED** | prior pipeline |
| **GAP-MSG-HUB-01** | **DEFER** | SignalR · Notification owns hub · non-block |

## Handoff

| Field | Value |
|-------|-------|
| phase_from / phase_to | review **done** → pipeline **complete** |
| review_confirm | **done** |
| post_review | **skip** |
| compact | `handoff/review-compact.md` |
| STATUS | `specs/mnt-chat/STATUS.md` |
| Next | none (roleOnly=review · mark queue completed) |
