# SA — Solution — asset-kcht-32

> Status: **blocked** · DoR FAIL · task `task_1367b215` · `/agent-sa` · autoApprove ON  
> **Cấm** confirm solution · **cấm** invent API / FormMode map khi thiếu real-data §B.

| | |
|--|--|
| Feature | `asset-kcht-32` |
| Title | Catalog 36 loại tài sản KCHT |
| Role | `sa` |
| solution_confirm | **blocked** (không approve) |
| updatedAt | `2026-08-29T13:15:00.000Z` |

## DoR gate (FAIL)

| Prerequisite | Expected path | Result |
|--------------|---------------|--------|
| control-hint | `specs/_data-analy/features/asset-kcht-32-control-hint.md` | **PASS** (read) |
| real-data §B | `specs/_data-analy/features/asset-kcht-32-real-data.md` | **FAIL — file missing** |
| design confirmed | `specs/asset-kcht-32/ui/design.md` | **FAIL — file missing** (chỉ `ui/prototype/`) |
| PO requirement | `specs/asset-kcht-32/po/requirement.md` | **FAIL — file missing** |
| skill `/agent-sa` + qldb-workflow | `.cursor/skills/.../SKILL.md` | **FAIL — skills not on disk** |

### changeScope rule

Thiếu `asset-kcht-32-real-data.md` → workflow **chỉ** data-analy.  
`roleOnly=sa` → **cấm** start data-analy trong task này (GAP-PKT-ROLE-01).  
→ SA **dừng** · không write FormMode↔API / entity / BFF map.

### Handoff claim vs disk

| Claim (run packet) | Disk |
|--------------------|------|
| data_analy done · real-data path | control-hint OK · **real-data absent** |
| design `confirmed` · `ui/design.md` | STATUS says confirmed · **design.md absent** |
| po `done` · `po/requirement.md` | **requirement.md absent** |

## Notes

- Đã đọc: `STATUS.md`, `asset-kcht-32-control-hint.md`, `docs/context/features/asset-kcht-32.md` (context only — **không** thay real-data §B).
- **Không** re-scan demo · **không** Write MFE/native · **không** yarn build/e2e/start:std · **không** Step 4b.
- Next: chạy `/agent-data-analy` tạo `asset-kcht-32-real-data.md` (§A–§F) · khôi phục/confirm `po/requirement.md` + `ui/design.md` · rồi re-queue `/agent-sa`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | unknown (skill file missing) |
| schemaVersion | 4 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-29T13:15:00.000Z |
| versionGate | blocked_dor |
| taskId | task_1367b215 |
