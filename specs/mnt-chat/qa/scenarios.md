# QA — Scenarios — mnt-chat (mobile sheet · Trao đổi công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-chat` |
| title | [Mobile] [Công việc] -> Trao đổi công việc |
| this role | `qa` · `/agent-qa-mobile` |
| changeScope | **UNCLEAR** — prior Dev/TL/SA/Design/PO **blocked** · analy stub |
| packKind | `sheet` |
| stack | `native_dual` |
| status | **`blocked`** · verdict **FAIL** · dorGate **FAIL** |
| requestSource | run packet `task_81d1652d` · `/agent-qldb-workflow-mobile` · roleOnly=`qa` |
| autoApprove | ON trên packet — **không** skip DoR / **không** claim e2e PASS khi thiếu implement |
| e2eQa | ON — **không** chạy `yarn e2e-qa-mobile` (DoR FAIL · **cấm** PASS static-only · **cấm** fake PNG / GenerateImage) |
| method | **blocked before runtime** · prior Dev **blocked** · **không** Maestro harvest |
| iosPhase | `phase1_iphone` (autoApprove) · **A4-IPAD DEFER** — **N/A** (e2e không chạy) |
| prior · data_analy | handoff claimed `confirmed` · **verify FAIL** — stubs `draft` ~309B · không controlHint / §A+§B / contentHash |
| prior · po | handoff claimed `confirmed` · **verify FAIL** — `po/requirement.md` status=`blocked` |
| prior · design | handoff claimed `confirmed` · **verify FAIL** — `ui/design.md` · `ux-analy.md` · proto stubs · **GAP-MOB-UX-01** |
| prior · sa | handoff claimed `confirmed` · **verify FAIL** — `be/solution-discovery.md` status=`blocked` |
| prior · team_lead | handoff claimed `confirmed` · **verify FAIL** — `task/mnt-chat.md` status=`blocked` · **không** `T-IOS-*` / `T-AND-*` |
| prior · dev | handoff claimed `confirmed` · **verify FAIL** — `implement/ios.md` + `implement/android.md` status=`blocked` · **không** Write SwiftUI/Compose |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| updatedAt | `2026-08-29T05:56:30.000Z` |
| taskId | `task_81d1652d` |

## DoR gate — FAIL (role này dừng)

| Check | Result |
|-------|--------|
| Skill Requires `/agent-qa-mobile` | **FAIL** — cần Dev implement PASS + Device AC từ Design/PO |
| Read Dev `implement/ios.md` · `implement/android.md` | **FAIL** — cả hai `blocked` · dorGate=FAIL · **không** feature screen |
| Disk iOS `*Chat*` Sources | **FAIL** — **không** màn `mnt-chat` / `#sc-mnt-chat` |
| Disk Android `app/src` `*Chat*` feature | **FAIL** — chỉ intent stub trên `mnt-list` · **không** sheet Compose |
| Read Design + proto dual | **FAIL** — blocked/stub · proto ios ~520B |
| Read SA BFF contract | **FAIL** — blocked · comments API **DEFER** / không endpoint pack |
| Read `specs/_data-analy/mnt-chat-control-hint.md` | **FAIL** — auto stub · `status: draft` · ~309B |
| Read `specs/_data-analy/mnt-chat-real-data.md` §B | **FAIL** — auto stub · không §A+§B |
| `mnt-chat-bff-endpoints.md` · `mnt-chat-action-tree.md` | **MISSING** |
| CTX `docs/context/features/mnt-chat.md` | **MISSING** |
| Hash skip | **REJECT** — **cấm** skip khi prior `draft`/`blocked` |
| `yarn e2e-qa-mobile` | **không** chạy — thiếu implement target · **cấm** CORE shot login-only / sibling |
| `/review-align-ux-ios-android` Read CORE PNG | **N/A** — không PNG · **cấm** GAP-MOB-E2E-VIS-01 bằng cách fake Aligned |
| Store pack PNG | **FAIL** · **GAP-QA-STORE-03** / **GAP-QA-E2E-MOB-01** (runtime blocked upstream) |
| Queue `completed` | **CẤM** |

## Device AC (slug `mnt-chat` only)

| AC | Expect | Result | Evidence |
|----|--------|--------|----------|
| Launch | App mở · 0 crash | **BLOCKED** | e2e không chạy · prior Dev blocked |
| BFF | Mobile.Bff `:5202` | **BLOCKED** | không compose — DoR FAIL trước Step 2e |
| Login demo | seed `linm-soft` | **BLOCKED** | — |
| Sheet `#sc-mnt-chat` iOS | Trao đổi công việc · entry `#i-chat` | **FAIL** | **không** screen implement |
| Sheet `#sc-mnt-chat` Android | Cùng zone · Pixel 1080×1920 | **FAIL** | **không** screen implement |
| Align live vs demo | Read A3-CORE + P6-CORE vs proto | **FAIL** | không PNG · proto stub |
| GAP-DEV-MOB-PLACEHOLDER-01 | **Cấm** watermark | **N/A** | không shot |

## Store Must × feature

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **BLOCKED** | — |
| A11-LAUNCH | A11 | **BLOCKED** | — |
| A9-LOGIN | A9 · P10 | **BLOCKED** | — |
| A3-CORE | A3 · A11 | **FAIL** | thiếu implement · **GAP-QA-STORE-01** |
| P6-CORE | P6 · P11 | **FAIL** | thiếu implement · **GAP-QA-STORE-03** |
| P6-CORE-2 | P6 | **FAIL** | thiếu implement |

## E2E screenshots

**Không** có `qa/screens/{caseId}.png` — **cấm** GenerateImage / HTML mock / copy sibling shot.

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A11-LAUNCH | A11 | **BLOCKED** | — |
| A10-BFF | A10 · P11 | **BLOCKED** | — |
| A9-LOGIN | A9 · P10 | **BLOCKED** | — |
| A3-CORE | A3 · A11 | **FAIL** | missing screen |
| P6-CORE | P6 · P11 | **FAIL** | missing screen |
| P6-CORE-2 | P6 | **FAIL** | missing screen |

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` dest iPhone 17 Pro | **không** chạy — không feature target từ pack · prior Dev blocked |
| Android `assembleDebug` | **không** chạy — không feature Compose target |
| BFF `dotnet build` | **không** chạy — SA/Dev **không** Write BFF cho `mnt-chat` |
| `yarn e2e-qa-mobile` · cases A11,A10,A9,A3,P6,P6-2 | **không** chạy · verdict **FAIL** |

## Gaps (log)

| ID | Issue | Next |
|----|-------|------|
| **GAP-QA-PRIOR-BLOCKED-01** | Handoff claimed analy→dev `confirmed` · disk **blocked**/stub | Re-open `/agent-data-analy-mobile` |
| **GAP-QA-NO-IMPLEMENT-01** | Không SwiftUI/Compose `mnt-chat` · Dev DoR FAIL | Sau analy→…→Dev PASS rồi re-QA |
| **GAP-QA-E2E-SKIP-UPSTREAM-01** | e2eQa=ON nhưng **cấm** runtime khi thiếu screen (tránh false CORE) | Fix upstream · rồi `yarn e2e-qa-mobile` |
| **GAP-QA-STORE-01** / **03** | Không A3/P6 live shot | Sau implement |
| **GAP-MOB-UX-01** | ux-analy / proto stub | Design sau analy+PO |
| **GAP-PKT-ROLE-01** | roleOnly=`qa` | **cấm** start data-analy/Dev trong task này |

Bugs detail: `qa/bugs/mnt-chat.md`

## Notes

- **Cấm** `yarn e2e-qa` / `mfeStdUrl` / `start:std` / GenerateImage.
- **Cấm** tự Dev fix trong role QA · `qa_fail_rollback` → board Approve → Dev plan (new taskId).
- **Cấm** `phase=review` / READY_TO_SUBMIT.
- Sibling `mnt-list` `#i-chat` toast P1 · comments API **DEFER** — cite only · **không** đủ DoR QA.

## Handoff (blocked)

| Field | Value |
|-------|-------|
| phase_from / phase_to | qa **blocked** → **data_analy** (re-open) rồi PO→Design→SA→TL→Dev→QA |
| STATUS | `specs/mnt-chat/STATUS.md` |
| Next slash | `/agent-data-analy-mobile` feature `mnt-chat` (task/queue **riêng**) |
| Chain this turn | **không** |
| Queue task | `task_81d1652d` · **`--status failed`** · **cấm** `completed` |
| Rollback | `qa_fail_rollback` (board) — **cấm** QA tự enqueue Dev |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T05:56:30.000Z` |
| versionGate | blocked — prior DoR FAIL |
| contentHash | — |
| dorGate | **FAIL** |
| verdict | **FAIL** |
