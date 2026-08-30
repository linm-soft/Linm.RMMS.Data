# QA — Scenarios — asset-kcht-32

> Status: **FAIL** · blocked DoR · task `task_a754ec67` · `/agent-qa` · e2eQa=ON · autoApprove ON  
> **Cấm** `phase=done` · **cấm** queue `completed` · board **`qa_fail_rollback`**.

| | |
|--|--|
| Feature | `asset-kcht-32` |
| Title | Catalog 36 loại tài sản KCHT |
| Role | `qa` |
| changeScope | `edit_page` + catalog 32 (`expand_36`) |
| packKind | `master` + mobile hub |
| lane | `web` |
| method | **blocked** — Dev handoff DoR FAIL · e2e runtime **not executed** (gate trước E2E) |
| verdict | **FAIL** |
| updatedAt | `2026-08-29T13:35:00.000Z` |

## DoR gate (FAIL)

| Prerequisite | Expected | Result |
|--------------|----------|--------|
| control-hint | `specs/_data-analy/features/asset-kcht-32-control-hint.md` | **PASS** (file exists) |
| real-data §B | `specs/_data-analy/features/asset-kcht-32-real-data.md` | **FAIL — missing** |
| PO requirement | `specs/asset-kcht-32/po/requirement.md` | **FAIL — missing** |
| design confirmed | `specs/asset-kcht-32/ui/design.md` | **FAIL — missing** (chỉ `ui/prototype/`) |
| SA solution confirmed | `be/solution-discovery.md` | **FAIL — status=blocked** (không FormMode↔API) |
| TL task pack T-* | `task/asset-kcht-32.md` | **FAIL — task_confirm=blocked** · không T-UI/T-BE/T-QA |
| Dev implement | `implement/asset-kcht-32.md` | **FAIL — Dev DoR blocked** · **0** MFE write |
| mfeStdUrl / route | STATUS + Master source `asset-kcht-32` | **FAIL** — packet URL `:9301` · `yarn start:std` = **:9318** · **0** match trong Master · HTTP **404** `http://localhost:9301/asset-kcht-32` |
| e2e screens | `qa/screens/{S0,S1,QA-20}.png` | **FAIL — not run** (DoR) |

### changeScope rule

`changeScope=edit_page` · thiếu `asset-kcht-32-real-data.md` → workflow **chỉ** data-analy (`edit-feature-full-pipeline`).  
`roleOnly=qa` → **cấm** start data-analy / po / design / sa / team_lead / dev (**GAP-PKT-ROLE-01**).  
→ QA **dừng** · không PASS · không invent scenarios PASS · không tự sửa MFE/BE.

### Handoff claim vs disk

| Claim (run packet) | Disk |
|--------------------|------|
| data_analy done · real-data | control-hint OK · **real-data absent** |
| po `done` · requirement.md | **absent** |
| design `confirmed` · design.md | **absent** |
| sa / TL / dev `confirmed` | files exist nhưng **blocked DoR** (SA/TL/Dev) |

## Planned cases (NOT executed — blocked)

| caseId | Intent (from Kind B catalog + formType pack) | Result | Evidence |
|--------|-----------------------------------------------|--------|----------|
| S0 | Route `mfeStdUrl` + page testid live | **FAIL** | HTTP 404 · no Master route · ![S0](screens/S0.png) *missing* |
| S1 | List 36 loại / seed asset-type parity | **FAIL** | blocked DoR · ![S1](screens/S1.png) *missing* |
| QA-20 | Create / form smoke | **FAIL** | blocked DoR · ![QA-20](screens/QA-20.png) *missing* |
| T-QA-FORM-01 | Full form fields + body map | **FAIL** | no design / no implement |
| T-QA-FILTER-01 | List filter V1–V5 | **FAIL** | no list live |
| T-QA-TAB-01 | Tab order | **FAIL** | no page |
| Chrome 5c–5h | Toolbar / grid5 / btn SSOT / leave / hist | **FAIL** | no page |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| **GAP-QA-DOR-01** | blocker | Prior roles DoR FAIL · handoff packet claim ≠ disk |
| **GAP-QA-STD-01** | blocker | Không có `mfeStdUrl` hợp lệ từ Dev · port packet `:9301` ≠ `start:std` `:9318` · 0 route `asset-kcht-32` trong Master |
| **GAP-QA-E2E-01** | blocker | e2eQa=ON nhưng **không** chạy `yarn e2e-qa` / **không** PNG (gate DoR trước runtime) |
| **GAP-QA-E2E-02** | blocker | Claimed URL HTTP 404 · không listen đúng std route |
| **GAP-AK32-REAL-01** | blocker | Thiếu `asset-kcht-32-real-data.md` (§B) — chỉ data-analy được resume |

## E2E runtime

| Step | Command / check | Result |
|------|-----------------|--------|
| Docker | `cd BE && docker compose up -d` | **SKIPPED** (DoR) |
| std | `yarn start:std` (Master · port **9318**) | **SKIPPED** (DoR) |
| e2e-qa | `yarn e2e-qa -- --url=…/asset-kcht-32 --cases=S0,S1,QA-20 …` | **SKIPPED** (DoR) |
| Preflight URL | `GET http://localhost:9301/asset-kcht-32` | **404** |

**method:** `blocked · DoR fail · e2e not started` — **cấm** ghi PASS / static-only pass.

## Verdict

**FAIL** · STATUS `blocked` · queue **`failed`** · **`qa_fail_rollback`**.  
**Cấm** completed · **cấm** phase=done · **cấm** chain Review.  
**Cấm** agent tự sửa prod / tự enqueue Dev.

### Unblock (ngoài task này)

1. `/agent-data-analy` → `asset-kcht-32-real-data.md` (§A–§F).  
2. Khôi phục/confirm `po/requirement.md` + `ui/design.md`.  
3. `/agent-sa` → `solution_confirm` · `/agent-team-lead` → FormType T-* (+ T-QA-*).  
4. `/agent-dev` implement + `mfeStdUrl` + build PASS + Step 4b BE.  
5. Re-queue `/agent-qa` e2eQa=ON (std + docker + PNG).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.23 |
| generatedAt | `2026-08-29T13:35:00.000Z` |
| versionGate | fail_dor |
| taskId | task_a754ec67 |
