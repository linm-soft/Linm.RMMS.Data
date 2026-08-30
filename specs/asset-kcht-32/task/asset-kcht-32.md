# Team lead — Task — asset-kcht-32

> Status: **blocked** · DoR FAIL · task `task_c922a389` · `/agent-team-lead` · autoApprove ON  
> **Cấm** invent T-* / FormType pack · **cấm** implement code · **cấm** e2e / `yarn start:std` / build.

| | |
|--|--|
| Feature | `asset-kcht-32` |
| Title | Catalog 36 loại tài sản KCHT |
| Role | `team_lead` |
| changeScope | `edit_page` + catalog 32 (`expand_36`) |
| packKind | `master` + mobile hub |
| lane | `web` |
| task_confirm | **blocked** (không approve pack) |
| updatedAt | `2026-08-29T13:20:00.000Z` |

## DoR gate (FAIL)

| Prerequisite | Expected path | Result |
|--------------|---------------|--------|
| control-hint | `specs/_data-analy/features/asset-kcht-32-control-hint.md` | **PASS** (read · status=done) |
| real-data §B | `specs/_data-analy/features/asset-kcht-32-real-data.md` | **FAIL — file missing** |
| PO requirement | `specs/asset-kcht-32/po/requirement.md` | **FAIL — file missing** |
| design confirmed | `specs/asset-kcht-32/ui/design.md` | **FAIL — file missing** (chỉ `ui/prototype/`) |
| SA solution confirmed | `specs/asset-kcht-32/be/solution-discovery.md` | **FAIL — status=blocked** (không có FormMode↔API) |
| skill `/agent-team-lead` + `form-type-task-pack` + qldb-workflow | `.cursor/skills/.../SKILL.md` | **FAIL — skills not on disk** |

### changeScope rule

Thiếu `asset-kcht-32-real-data.md` → workflow **chỉ** data-analy.  
`roleOnly=team_lead` → **cấm** start data-analy / po / design / sa trong task này (**GAP-PKT-ROLE-01**).  
→ Team lead **dừng** · không write FormType T-* · không `route_confirm` mới · không chain Dev.

### Handoff claim vs disk

| Claim (run packet) | Disk |
|--------------------|------|
| data_analy done · real-data path | control-hint OK · **real-data absent** |
| po `done` · `po/requirement.md` | **requirement.md absent** |
| design `confirmed` · `ui/design.md` | **design.md absent** |
| sa `confirmed` · solution-discovery | file **exists** nhưng `solution_confirm=blocked` · DoR FAIL |

## Notes

- Đã đọc: `STATUS.md`, `asset-kcht-32-control-hint.md`, `docs/context/features/asset-kcht-32.md`, `be/solution-discovery.md`, draft `task/asset-kcht-32.md`.
- Peer refs (không substitute DoR): `specs/asset/task/asset.md` · `specs/asset-type/task/asset-type.md`.
- **Không** invent API / zone map / T-UI-* / T-BE-* từ context alone.
- **Không** Write MFE/native · **không** yarn build/e2e/start:std · **không** Step 4b.
- Next: `/agent-data-analy` → `asset-kcht-32-real-data.md` (§A–§F) · khôi phục/confirm `po/requirement.md` + `ui/design.md` · re-queue `/agent-sa` đến `solution_confirm` · rồi re-queue `/agent-team-lead`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | unknown (skill file missing) |
| schemaVersion | 2 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | `2026-08-29T13:20:00.000Z` |
| versionGate | blocked_dor |
| taskId | task_c922a389 |
