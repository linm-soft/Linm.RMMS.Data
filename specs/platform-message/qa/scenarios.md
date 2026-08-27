# QA — Scenarios — platform-message

| Field | Value |
|-------|-------|
| feature | `platform-message` |
| role | `qa` · `/agent-qa` |
| taskId | `task_abf2c4eb` |
| status | **blocked** |
| verdict | **FAIL** |
| e2eQa | **ON** |
| method | `e2e runtime · yarn start:std + docker compose + yarn e2e-qa` — **runtime FAIL** |
| mfeStdUrl | `http://localhost:9301/platform-message` |
| docker | BFF `:5201` **healthy** · API host `:5111` (Linux) · **API `:5101` NOT listen** (Win64 camera) |
| MFE | `D:\MFE-CORE\Linm.Web.Message` |
| packKind | **`platform`** · `msg_kind=parcel_only` · Step 4b **N/A** |
| autoApprove | ON · **cấm** skip `qa_fail_rollback` |
| updatedAt | `2026-08-25T17:56:00.000Z` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `ok` |

**Cấm** `phase=done` · **cấm** PASS static-only khi e2eQa=ON · **cấm** tự sửa prod (GAP-QA-ROLLBACK-01).

---

## Runtime evidence (e2eQa ON)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| S0 | Route `mfeStdUrl` + page ready | **FAIL** | — (CLI abort trước capture) |
| S1 | Inbox / ChatSection peer shell | **FAIL** | — |
| QA-20 | Peer smoke create/surface | **FAIL** | — |

`yarn e2e-qa` result:

```json
{
  "ok": false,
  "url": "http://localhost:9301/platform-message",
  "outDir": "D:\\AI-QLBD\\Linm.RMMS.Data\\specs\\platform-message\\qa\\screens",
  "steps": [],
  "error": "Docker chưa listen API:5101 / BFF:5201"
}
```

Notes: tại lúc chạy BFF `:5201` đã healthy; waitPort **API `:5101`** fail (compose map Linux API → **`:5111`**; Win64 camera API `:5101` chưa start). **Đồng thời** MFE **không** có script `start:std` và **thiếu** `src/standalone/*` (webpack đã reference) → dù docker pass cũng **GAP-QA-E2E-02**.

PNG `qa/screens/{caseId}.png`: **0** (CLI abort) · `manifest.json` **không** ok.

---

## Static / DoD (code review — không đủ PASS khi e2eQa=ON)

| Id | Check | Result |
|----|-------|--------|
| AC-P-01 | 3 exports: MessageCenterParcel · MessagesInboxParcel · ChatSectionParcel | **PASS** (code · `src/message.tsx`) |
| AC-P-02 | Tabs 0 Trao đổi · 1 Bình luận · mode both\|chat\|comments | **PASS** (code · `ChatSectionParcel.tsx`) |
| AC-P-03 | routeMap / Chi tiết ↗ · ChatTab/CommentsTab wrap | **PASS** (code · resolveDetailRoute + detailBtn) |
| AC-P-04 | ChatPanel + CommentsTab + MessageEntityType `incident` | **PASS** (common) |
| AC-P-05 | **0** `signalRService.start()` trong Message MFE | **PASS** (rg · chỉ comment MSG-SVC-01) |
| AC-P-06 | LeaveConfirmModal · **0** `window.alert`/`confirm` | **PASS** (ChatSection + rg) |
| AC-P-07 | label 13 / `--ds-font-size-field-label` | **PASS** (ChatTab/CommentsTab CSS) |
| AC-P-08 | Empty thật · «Chọn một…» / «Chưa có…» · **0** fake demo row | **PASS** (Inbox page/list) |
| QA-STD-01 | STATUS `mfeStdUrl` claim `:9301/platform-message` | **recorded** |
| QA-E2E-01 | PNG `qa/screens/{caseId}.png` embed | **FAIL** |
| QA-E2E-02 | docker API+BFF + `yarn start:std` listen | **FAIL** |
| QA-BE-01 | parcel_only · **0** RMMS MessagesController · **0** ERP.* | **PASS** (cite Medical · SA) |
| QA-BUILD-01 | MFE `yarn build` | **PASS** (exit 0 · size warnings only) |

---

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| **GAP-QA-E2E-02** | (1) `package.json` **không** `start:std` · **thiếu** `src/standalone/StandaloneEntry.tsx` + `index.html` (webpack standalone entry). (2) e2e wait API **`:5101`** fail — Linux docker API **`:5111`** · Win64 camera API chưa listen. | **Yes** |
| **GAP-QA-E2E-01** | e2eQa ON · **0** PNG S0/S1/QA-20 · **cấm** PASS static-only | **Yes** |

Closed (Dev prior · static): GAP-MSG-PARCEL-01 · CAST · ROUTE · COMMENT · LEAVE · TYP — **không** override e2e fail.

---

## Build / VERIFY GATE

| Layer | Command | Result |
|-------|---------|--------|
| MFE | `yarn build` @ `Linm.Web.Message` | **PASS** exit 0 |
| BE Step 4b | RMMS chat delta | **N/A** (`parcel_only`) |
| Docker | `docker compose up -d` @ WebService | BFF `:5201` up · API `:5111` up · **`:5101` down** |
| `yarn start:std` | Message MFE | **FAIL** — script missing |
| `yarn e2e-qa` | cases S0,S1,QA-20 | **FAIL** · `ok:false` |

---

## T-QA-PARCEL-01

| Seed | Static | Runtime |
|------|--------|---------|
| 3 exports | PASS | blocked e2e |
| Tabs 0/1 | PASS | blocked e2e |
| Send / expand / routeMap | PASS (code) | blocked e2e |
| incident | PASS | blocked e2e |
| LeaveConfirmModal | PASS | blocked e2e |
| Typography 13 | PASS | blocked e2e |
| 0 signalR start | PASS | — |
| Empty / 0 fake | PASS | blocked e2e |
| e2e PNG | — | **FAIL** |

---

## Handoff → Dev (qa_fail_rollback)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| Next | board **`qa_fail_rollback`** → Dev **plan only** `implement/platform-message-qa-fix-plan.md` |
| Fix scope (plan) | Add `start:std` (port **9301**) + `src/standalone/*` peer `/platform-message` · ensure e2e docker API listen (`:5101` Win64 **hoặc** document/apiPort align) · re-run `yarn e2e-qa` → PNG S0,S1,QA-20 |
| **Cấm** | QA tự Write MFE · mark `completed` · `phase=done` · skip Review sau khi pass |
| review | **pending** đến khi QA PASS |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-25T17:56:00.000Z |
| versionGate | ok |
| taskId | `task_abf2c4eb` |
| contentHashPriorImplement | sha256:d0cbce57a4131006ffab87e075dc05160c8734389e1d9968e6aeadfe484b6cea |

---
<!-- Version meta: skillId=agent-qa skillVersion=2026.08.25.02 schemaVersion=4 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=ok -->
