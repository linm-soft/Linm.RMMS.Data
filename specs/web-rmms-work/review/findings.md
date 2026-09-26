# Review — Findings — web-rmms-work

> Status: **confirmed** · writtenAt `2026-09-26T05:25:00.000Z` · task `task_632e4943`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **roleOnly** `/agent-review` · **cấm** implement · **cấm** e2e / `yarn start:std`  
> contentHash: `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` · **hash skip** (unchanged vs Dev/QA)

| | |
|--|--|
| Feature | `web-rmms-work` |
| Title | Danh sách công việc (WORK-L) |
| Role | `review` |
| changeScope | `new_page` |
| review_confirm | **done** (autoApprove) |
| prior QA | `confirmed` · S0/S1/QA-20 PASS · handoff `handoff/qa-compact.md` |

## Verdict

**PASS** — WORK-L live list aligns PO/Design/SA/TL/Dev/QA. P0 = none. Soft debt carry only.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Live GET `maintenance/work-orders` | **PASS** | `maintenanceWorkOrdersEndpoint.getList` · qs search/status/workType · Mobile.Bff |
| Live GET `…/init-data` chips | **PASS** | `getInitData` → status/workType chips · fallback LOOKUP only |
| **cấm** invent WorkListController / ERP.* | **PASS** | reuse WO_BASE · no ERP.* in `WebRmmsWork/*` |
| List write on WORK-L | **N/A** | GET-only · CREATE-FROM estimate peer |
| Offline / fail | **PASS** | empty + toast · **cấm** itemsOrDemo |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| BFF surface | **PASS** | Mobile.Bff `:5202` · **cấm** web-bff client |
| Fake GPS / Me* | **PASS** | none on list · GAP GPS carry peer only |
| Guest list-open | **ACCEPT** (soft) | QA: API open · PO list-first OK · not P0 |
| Auth invent | **PASS** | no invented gate · QA-20 shell login PASS |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| AC-L / zones WORK-L · `#sc-mnt-list` | **PASS** | Layout + cards `data-des-id` · QA S0/S1 Aligned |
| FILTER-P1 chips live | **PASS** | init-data · S1 filter 7→3 |
| Search debounce | **PASS** | 320ms · GET `?search` |
| Card fields Title/Code/Assignee/Due/Route/Status/% | **PASS** | WorkListPage card · QA DOM |
| Hub estimate · **no FAB** | **PASS** | `hub.estimate` · hasFab=false S0/S1 |
| Peer actions nav-only | **PASS** | progress/log/chat/estimate → `/work/*` |
| DES-GRID / LinErpListFilterBar | **WAIVE** | phone list · Chip FILTER-P1 |
| Labels | **PASS** | `useFormOptions('web-rmms-work')` + LOOKUP_STATIC |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Domain Maintenance work-orders | **PASS** | SA DOMAIN-MAP row · Dev reuse · Step 4b **skip** |
| MSG-VS-COMMENT | **PASS** | Live **messages** cite peer · **cấm** invent comments |
| Entity / migration / API Mới | **N/A** | none at SA/TL/Dev |
| Yarn build / Api build (prior Dev) | **PASS** | cite implement · **cấm** re-run ở Review |

## QA cite

| Gate | Result |
|------|--------|
| S0 / S1 / QA-20 | **PASS** · PNG `qa/screens/*` |
| T-QA-CRUD/GRID/PEER | **PASS** · FILTER **WAIVE** |
| stock `yarn e2e-qa` port | **FAIL soft** · capture workaround OK |

## Gaps / debt (không block)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock expects `:5101/:5201` vs `:5111/:5202` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link fulfill |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction playwright |
| Dev nav chrome | soft | showDevNav in shots |
| GAP-MOB-MNT-PROG-GPS-01 | carry | peer progress Note GPS · OOS WORK-L |
| Peer WORK-P/G/C/E | debt | nav-only stubs · full CRUD later |

## review_confirm

- **decision:** `done`
- **autoApprove:** ON → no board wait
- **fix_gaps:** none P0

## Next

- Pipeline complete · phase=`done` · **cấm** start role khác trong task này (GAP-PKT-ROLE-01)
- E2E already ran under QA · no re-run
