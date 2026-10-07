# Review — Findings — web-rmms-role-gate

> Status: **done** · Mode: `review_only` · autoApprove=ON · task `task_79e8f3f2`  
> reviewHash: `sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216` · rulesVersion: `2026.09.05.03`  
> writtenAt: `2026-09-30T17:15:00.000Z` · review_confirm: **accept**

| | |
|--|--|
| Feature | `web-rmms-role-gate` |
| Title | Quyền QL_HAT và vai theo chức danh |
| Role | `review` |
| packKind | `list` (phone gate ≤430 · **≠** desktop Kind B) |
| changeScope | `edit_page` |
| Surfaces | profile gate · seed packageHint · home/hub/incident/finding peers |

## Scope

| Surface | Repo / path |
|---------|-------------|
| FE gate | `Linm.Web.RMMS.Mobile` · `src/pages/WebRmmsRoleGate/RoleGatePage.tsx` · `src/services/auth/roleGate.ts` |
| Peers | `MeTabPage` · `HomePage` · `IncidentListPage` · `FindingDetailPage` |
| BFF | `Linm.RMMS.Mobile.Bff` · `AuthProfileEnrichMiddleware` |
| BE | `Linm.RMMS.WebService` · `RoleCapsResolver` · Seed `Seed_JobTitleQlHatNghiemThu` |
| QA evidence | `qa/scenarios.md` · screens `{S0,S1,QA-20}.png` · manifest `ok=true` |
| Prototype | `ui/prototype/index.html` (path only) |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| — | — | — | — | **No P0–P2 gaps** | — |
| REV-UI-SOFT-01 | ui-fn | P3 | RG-00 profile chips | S0 capture: Họ tên / chức danh có thể `…` khi enrich chậm | Soft · loadRoleGate fallback users/me · không blank/crash · **không** block accept |

## Query (`/review-query`)

- Surface: phone gate + job-titles search (`page=1` · `pageSize=50`) — **không** list N+1/OOM Kind B.
- Field SSOT: `jobTitleCode` / `packageCode` / `roleCaps.*` từ BE derive · FE bind only.
- Lookup 422: N/A (không SearchInput catalog FK master trên gate).
- Verdict: **PASS** · không `QUERY-*` / `GAP-P2-QUERY-*`.

## Security

- Auth: `GET /auth/profile` BFF enrich forward `Authorization` + `X-Company-Id` → `integration/users/me`.
- Caps: **cấm** localStorage invent · `useRoleGateProfile` / `roleGate.ts` normalize từ API.
- qlHat: **chỉ** `packageCode=QL_HAT` (`RoleCapsResolver`) · **cấm** MANAGER-RMMS → Giao việc.
- IDOR / secrets: không endpoint `role-gate/*` mới · không secret trong MFE gate.
- Verdict: **PASS** · không `SEC-*` P0–P2.

## UI function

- Title VN «Hồ sơ vai trò» · UTF-8 (QA `T-QA-VI-ENC-01` PASS) · **không** `CREATE` / mojibake.
- Visibility: Giao việc iff `caps.qlHat` · Pass/Fail peer `tuanKiem` · Home tiles gated.
- Leave: `LeaveConfirmModal` + `useFormLeaveGuard` · **cấm** native alert/confirm.
- Kind B shell / filter / `data-form-cols=5` / ERP toolbar zones: **WAIVE** phone gate (DES-GRID N/A · TL WAIVE).
- E2E PNG: S0/S1/QA-20 distinct · non-blank dims 1440×900 · manifest ok · **không** live start:std ở role này.
- Soft: `REV-UI-SOFT-01` profile `…` (QA note) — P3.
- Verdict: **PASS** accept · không P0 chrome/layout gate fail.

## BE function

- Catalog: enhance profile + job-titles init-data/PUT + Seed · **cấm** invent `RoleGateController`.
- Seed HAT-*→`QL_HAT` · `NGHIEM-THU` applied Dev · no Schema columns.
- DOMAIN-MAP cite slug (SA) · **cấm** ERP.*.
- Verdict: **PASS** · không `BE-FN-*` P0–P2.

## Confirm

`review_confirm` = **accept** (autoApprove=ON · `task_79e8f3f2`) · **không** `fix_gaps`.

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none · P3 soft optional enrich UX |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.03 |
| reviewHash | sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216 |
| contentHash | sha256:cc33bfbc2361d40d732e6b018e209ccce2e8778cce33f39c7766119237ba4216 |
| generatedAt | 2026-09-30T17:15:00.000Z |
| versionGate | ok |
| review_confirm | accept |
