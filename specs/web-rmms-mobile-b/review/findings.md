# Review — Findings — web-rmms-mobile-b

> Status: **confirmed** · `review_confirm=fix_gaps` · autoApprove=ON · task `task_9e45e6fd`  
> skillVersion: `2026.09.05.03` · schemaVersion: `1`  
> contentHash: `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e`  
> writtenAt: `2026-09-27T14:55:00.000Z`

| | |
|--|--|
| Feature | `web-rmms-mobile-b` |
| Title | Tuần đường đợt B — sổ và dòng nhật ký (delta Pattern B / capture / BFF / align) |
| Role | `review` · `/agent-review` |
| packKind | `list` (phone Field · Kind B **WAIVE**) |
| changeScope | `edit_page` · editTask=`1` |
| Verdict | **FAIL** · Must **2** · soft debt only besides Must |
| Prior | data_analy→po→design→sa→team_lead→dev = **confirmed** · qa = **failed** |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` → **404** |
| liveUrl | `http://localhost:9301/nhat-ky` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |

## Scope gate

- changeScope=`edit_page` · control-hint + real-data **present** → full pipeline OK.
- contentHash `fe3cc…` ≠ prior review `58be…` → **no hash skip** · rescan delta wave.
- Kind B grid/filter / DES-GRID / LinErpListFilterBar: **WAIVE** (phone cards).
- **cấm** ERP.* · BE = `Linm.RMMS.WebService` Patrol+Auth+Files.
- QA evidence: `qa/scenarios.md` · PNG `qa/screens/{S0,S1,QA-20,S0-std-url}.png` · **cấm** re-e2e / start:std ở role này.
- autoApprove → `review_confirm=fix_gaps` (Must ≥1 · **cấm** accept).

## QUERY

| Check | Result | Notes |
|-------|--------|-------|
| List query | **PASS** (live) | `GET sessions/{id}/journal-lines` · nested list only · S0 live |
| Kind B / filter bar | **WAIVE** | phone · filter-bar-layout-hard N/A |
| Check-in ≠ journal | **PASS** | journal-lines surface only |
| FormMode↔API | **PASS** | POST/GET/PUT `journal-lines` · SA PATH CLOSED |
| STATUS std URL as query entry | **FAIL** | `mfeStdUrl` 404 — see Must |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| Auth / JWT | **PASS** | MFE `/login` → Mobile.Bff (QA live) |
| RequirePermission | **SOFT** | TODO CommonLib ≥1.4.0 · T-PERM-01 documented |
| XCO | **PASS** | `xco_get_only` (prior SA/dev) |
| Tenant | **PASS** | `tenant_keep` |
| GPS fake | **PASS** | FE deny + BE ValidateWrite (prior) |
| ERP.* | **PASS** | none on wave B surface |

## UI-FN

| Check | Result | Notes |
|-------|--------|-------|
| TD-04 list live `/nhat-ky` | **PASS** | QA S0 Aligned · empty L-01 |
| TD-05 form Pattern B | **PASS** | QA-20 · Lưu not pre-disabled · GPS+narrative |
| STATUS `mfeStdUrl` | **FAIL** | **GAP-QA-STD-01** / **REV-UI-STD-01** · `/web-rmms-mobile-b` 404 · code `paths.BASE=/nhat-ky` · no alias |
| Peer hub A→B doors | **FAIL** | **GAP-QA-FEAT-01** / **REV-UI-HUB-01** · `/tuan-duong/:sessionId` thiếu CTA «Ghi nhật ký» / «Sổ trong ca» |
| Leave / phone 430 | **PASS** (prior Dev) | LeaveConfirmModal KEEP · `data-phone-frame=430` |
| Labels / capture | **PASS** (live UI) | `useFormOptions('web-rmms-mobile-b')` · capture=environment (Dev) |
| Date locale / Người ghi | **SOFT** | en-US · RO `—` |

## BE-FN

| Check | Result | Notes |
|-------|--------|-------|
| Schema / CRUD | **PASS** | prior Live · migration=none new |
| Validation | **PASS** | GPS · narrative · LOOKUP_STATIC |
| BFF | **PASS** | mobileApiBase · UsersMobileController · cấm web-bff |
| New API/DTO | **PASS** | none this delta |

## Must / Should / Soft

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| **GAP-QA-STD-01** / **REV-UI-STD-01** | ui-fn | **Must P0** | STATUS `mfeStdUrl` | open `/web-rmms-mobile-b` → 404 | alias Navigate → `/nhat-ky` **or** STATUS/context `mfeStdRoute=/nhat-ky` + route_confirm |
| **GAP-QA-FEAT-01** / **REV-UI-HUB-01** | ui-fn | **Must P0** | peer hub A | hub không CTA nhật ký | restore doors «Ghi nhật ký» / «Sổ trong ca» → `/nhat-ky/{sessionId}` |
| GAP-REV-PERM-TODO | security | Soft | BE | RequirePermission deferred | CommonLib ≥1.4.0 |
| GAP-QA-E2E-DUP-01 | soft | Soft | e2e stock | S0=S1 DUP | keep `_capture_b` until stock fixed |
| GAP-REV-DATETIME-LOCALE | ui-fn | Soft | TD-05 | en-US display | Should locale VN |
| GAP-REV-USER-RO | ui-fn | Soft | TD-05 | Người ghi `—` | auth/profile bind |

## review_confirm

- **decision:** `fix_gaps` (autoApprove=ON · Must 2 · **cấm** `done`)
- Assign: **Dev** — route SSOT alias/STATUS + hub CTA doors · rồi re-QA (`/agent-qa*`)
- **cấm** phase=`done` · next board `qa_fail_rollback` / Dev fix · GAP-PKT-ROLE-01 stop

## Version meta

| skillId | skillVersion | schemaVersion | contentHash |
|---------|--------------|---------------|-------------|
| agent-review | 2026.09.05.03 | 1 | sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e |
