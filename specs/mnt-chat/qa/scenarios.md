# QA — Scenarios — mnt-chat (mobile sheet · Trao đổi công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| title | [Mobile] [Công việc] -> Trao đổi công việc |
| this role | `qa` · `/agent-qa-mobile` |
| changeScope | `edit_page` · qaFailFix re-QA sau Dev implement |
| packKind | `sheet` |
| stack | `native_dual` |
| status | **`done`** · verdict **PASS** · dorGate **PASS** |
| requestSource | run packet `task_d743848b` · `/agent-qldb-workflow-mobile` · roleOnly=`qa` |
| autoApprove | ON |
| e2eQa | ON — `yarn e2e-qa-mobile` · Maestro dual · **cấm** start:std / mfeStdUrl |
| method | e2e runtime · sim 6.9" + emulator · store-px |
| iosPhase | `phase1_iphone` · **A4-IPAD DEFER** |
| prior · data_analy | **confirmed** · control-hint · real-data · bff-endpoints · action-tree |
| prior · po | **confirmed** |
| prior · design | **confirmed** · dual proto `#sc-mnt-chat` |
| prior · sa | **confirmed** |
| prior · team_lead | **confirmed** |
| prior · dev | **confirmed** · handoff/dev-compact.md · VERIFY GATE PASS |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · `:5202` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · API `:5111` · **cấm ERP.*** |
| updatedAt | `2026-09-01T09:40:00.000Z` |
| taskId | `task_d743848b` |

## DoR gate — PASS

| Check | Result |
|-------|--------|
| Prior Dev implement + VERIFY GATE | **PASS** · `#sc-mnt-chat` dual · entry navigate · **0** toast |
| Analy SSOT | **PASS** · control-hint · real-data · bff-endpoints · action-tree confirmed |
| Design + proto dual | **PASS** |
| `yarn e2e-qa-mobile` cases A11,A10,A9,A3,P6,P6-2 | **PASS** · CLI `ok:true` · exit 0 |
| Store PNG live | **PASS** · `qa/screens` + `qa/store/mnt-chat/` |
| Visual `/review-align-ux-ios-android` Read CORE vs demo | **Aligned** · Must **0** |
| Queue `completed` | **OK** khi DoR PASS |

## Device AC (slug `mnt-chat`)

| AC | Expect | Result | Evidence |
|----|--------|--------|----------|
| Launch | App mở · 0 crash | **PASS** | A11-LAUNCH |
| BFF | Mobile.Bff `:5202` | **PASS** | A10-BFF |
| Login demo | seed `linm-soft` | **PASS** | A9-LOGIN |
| Sheet `#sc-mnt-chat` iOS | Trao đổi công việc · entry `#i-chat` | **PASS** | A3-CORE · title + sub WO-DEMO-1 · composer |
| Sheet `#sc-mnt-chat` Android | Cùng zone · Pixel 1080×1920 | **PASS** | P6-CORE · P6-CORE-2 |
| Align live vs demo | Read A3 + P6 vs proto | **Aligned** | empty live OK · demo bubbles = seed only |
| GAP-DEV-MOB-PLACEHOLDER-01 | **Cấm** watermark | **PASS** | no watermark on CORE |

## Store Must × feature

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | health `:5202` |
| A11-LAUNCH | A11 | **PASS** | `A11-LAUNCH.png` |
| A9-LOGIN | A9 · P10 | **PASS** | `A9-LOGIN.png` |
| A3-CORE | A3 · A11 | **PASS** | `A3-CORE.png` · `#sc-mnt-chat` |
| P6-CORE | P6 · P11 | **PASS** | `P6-CORE.png` |
| P6-CORE-2 | P6 | **PASS** | `P6-CORE-2.png` |

## E2E screenshots

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A11-LAUNCH | A11 | **PASS** | screens + store |
| A10-BFF | A10 · P11 | **PASS** | — |
| A9-LOGIN | A9 · P10 | **PASS** | screens + store |
| A3-CORE | A3 · A11 | **PASS** | iPhone 17 Pro Max 1320×2868 |
| P6-CORE | P6 · P11 | **PASS** | Pixel 1080×1920 |
| P6-CORE-2 | P6 | **PASS** | Pixel 1080×1920 |

## Visual align (CORE vs demo)

| Zone | Demo | Live A3/P6 | Verdict |
|------|------|------------|---------|
| `#sc-mnt-chat` title | Trao đổi công việc | Trao đổi công việc | **Aligned** |
| subtitle | Vá mặt đường · WO-DEMO-1 | Vá mặt đường · WO-DEMO-1 | **Aligned** |
| thread | seed bubbles | empty «Chưa có trao đổi» | **Accept** · live API empty · **cấm** fake |
| composer | Nhập tin nhắn… + send | same | **Aligned** |
| app tab bar | n/a (HTML) | shell Công việc active | **Accept** · native chrome |

Must **0** · **GAP-MOB-E2E-VIS-01** N/A (Read done).

## VERIFY GATE (prior Dev · cite)

| Gate | Result |
|------|--------|
| iOS xcodegen + xcodebuild | **PASS** (Dev) |
| Android assembleDebug | **PASS** (Dev) |
| BFF dotnet build | **PASS** (Dev) |
| `yarn e2e-qa-mobile` | **PASS** `2026-09-01T09:37:54Z` |

## Gaps (log)

| ID | Issue | Next |
|----|-------|------|
| **R-QA-01** | prior FAIL | **CLOSED** · re-QA PASS |
| **GAP-QA-E2E-SKIP-UPSTREAM-01** | e2e chưa chạy | **CLOSED** |
| **GAP-QA-STORE-01** / **03** | thiếu A3/P6 | **CLOSED** |
| **GAP-QA-NO-IMPLEMENT-01** | thiếu screen | **CLOSED** (prior) |
| **GAP-MSG-HUB-01** | SignalR | **DEFER** · Notification |

Bugs: `qa/bugs/mnt-chat.md` — OPEN Must **0**.

## Notes

- Maestro: `qa/e2e/ios.yaml` · `android.yaml` · WO `11111111-1111-1111-1111-111111111101`
- API live `:5111` · BFF `:5202` · `--skip-start` (compose already up)
- **Cấm** `yarn e2e-qa` / mfeStdUrl / GenerateImage / kill worker

## Handoff

| Field | Value |
|-------|-------|
| phase_from / phase_to | qa **done** → review **pending** |
| STATUS | `specs/mnt-chat/STATUS.md` |
| compact | `handoff/qa-compact.md` |
| next | `/agent-review-mobile` (roleOnly separate task) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| contentHash | sha256:mnt-chat-qa-e2e-20260901 |
