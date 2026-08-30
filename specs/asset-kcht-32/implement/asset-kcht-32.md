# Dev — Implement — asset-kcht-32

> Status: **blocked** · DoR FAIL · task `task_a70b1f0a` · `/agent-dev` · autoApprove ON  
> **Cấm** invent FE/BE · **cấm** e2e / `yarn start:std` · **cấm** mark completed khi DoR fail.

| | |
|--|--|
| Feature | `asset-kcht-32` |
| Title | Catalog 36 loại tài sản KCHT |
| Role | `dev` |
| changeScope | `edit_page` + catalog 32 (`expand_36`) |
| packKind | `master` + mobile hub |
| lane | `web` |
| MFE | `D:\AI-QLBD\MFE-Source\Linm.Web.RMMS.Master` |
| BE | `D:\AI-QLBD\Linm.RMMS.WebService` |
| updatedAt | `2026-08-29T13:25:00.000Z` |

## DoR gate (FAIL)

| Prerequisite | Expected path | Result |
|--------------|---------------|--------|
| control-hint | `specs/_data-analy/features/asset-kcht-32-control-hint.md` | **PASS** (read · status=done) |
| real-data §B | `specs/_data-analy/features/asset-kcht-32-real-data.md` | **FAIL — file missing** |
| PO requirement | `specs/asset-kcht-32/po/requirement.md` | **FAIL — file missing** |
| design confirmed | `specs/asset-kcht-32/ui/design.md` | **FAIL — file missing** (chỉ `ui/prototype/`) |
| SA solution confirmed | `specs/asset-kcht-32/be/solution-discovery.md` | **FAIL — status=blocked** (không FormMode↔API) |
| TL task pack T-* | `specs/asset-kcht-32/task/asset-kcht-32.md` | **FAIL — task_confirm=blocked** · **không** có FormType T-UI/T-BE |
| skill `/agent-dev` + qldb-workflow | `.cursor/skills/.../SKILL.md` | **FAIL — skills not on disk** |

### changeScope rule

Thiếu `asset-kcht-32-real-data.md` → workflow **chỉ** data-analy.  
`roleOnly=dev` → **cấm** start data-analy / po / design / sa / team_lead trong task này (**GAP-PKT-ROLE-01**).  
→ Dev **dừng** · không Write MFE/BE · không Step 4b · không invent controlHint / API.

### Handoff claim vs disk

| Claim (run packet) | Disk |
|--------------------|------|
| data_analy done · real-data path | control-hint OK · **real-data absent** |
| po `done` · `po/requirement.md` | **requirement.md absent** |
| design `confirmed` · `ui/design.md` | **design.md absent** |
| sa `confirmed` · solution-discovery | file **exists** nhưng `solution_confirm=blocked` |
| team_lead `confirmed` · task pack | file **exists** nhưng `task_confirm=blocked` · không T-* |

## Notes

- Đã đọc: `STATUS.md`, context `docs/context/features/asset-kcht-32.md`, control-hint, `be/solution-discovery.md`, `task/asset-kcht-32.md`, draft implement.
- **Không** đổi controlHint (cấm không AskQuestion / không có design chốt).
- **Không** yarn build / `yarn start:std` / e2e (E2E chỉ `/agent-qa*` · build không chạy khi không có scope implement).
- **Không** `yarn queue … completed` — DoR role này **FAIL**.
- Next (ngoài task này): `/agent-data-analy` → `asset-kcht-32-real-data.md` (§A–§F) · khôi phục/confirm `po/requirement.md` + `ui/design.md` · `/agent-sa` → `solution_confirm` · `/agent-team-lead` → FormType T-* · rồi re-queue `/agent-dev`.

## QA verdict (task_a754ec67 · 2026-08-29T13:35:00.000Z)

| | |
|--|--|
| Verdict | **FAIL** |
| Scenarios | `specs/asset-kcht-32/qa/scenarios.md` |
| Gaps | GAP-QA-DOR-01 · GAP-QA-STD-01 · GAP-QA-E2E-01/02 · GAP-AK32-REAL-01 |
| Queue | **`failed`** · **`qa_fail_rollback`** · **cấm** completed |
| Note | QA không sửa MFE/BE · Dev vẫn DoR blocked · e2e không chạy |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | unknown (skill file missing) |
| schemaVersion | 2 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | `2026-08-29T13:25:00.000Z` |
| versionGate | blocked_dor |
| taskId | task_a70b1f0a |
