# Review findings — traffic-sign-type

> Status: **done**  
> Mode: `review_only` · autoApprove=ON · `review_confirm`=**accept**  
> reviewHash: `sha256:e16f3e9aa16bdb9ce3fb6353447337a9b4dc158827a2ba86b487658fb967bb32` · rulesVersion: `2026.09.05.8`

| | |
|--|--|
| Feature | `traffic-sign-type` |
| Title | Loại biển báo (mã QCVN 41) |
| Role | `review` · `/agent-review` |
| TaskId | `task_d409caea` |
| packKind | `master` · demo **N/A** |
| changeScope | `new_page` |
| formPattern | Slideout · `data-form-cols=2` · footer_actions_only |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| BE | Integration · `api/v1/integration/traffic-sign-types` · **cấm ERP.*** |
| prior QA | **PASS** · S0/S1/QA-20 · channel=chrome |
| Verdict | **PASS** · P0/P1 **0** · P3 debt non-blocking |

## Scope

| Surface | Repo / path |
|---------|-------------|
| list + Slideout form | `Linm.Web.RMMS.Master` · `TrafficSignTypeListPage` · `TrafficSignTypeFormModal` |
| FE API | `services/trafficSignType` · BASE `/integration/traffic-sign-types` |
| BE | `TrafficSignTypeService` · DOMAIN-MAP Integration |
| QA evidence | `qa/screens/{S0,S1,QA-20}.png` · live/form-assert · **no** e2e rerun @ review |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-UI-DEBT-01 | ui-fn | P3 | form `isActive` | Checkbox live (QA-20) vs controlHint Switch | Align Switch when peer wire ready · non-blocking |
| REV-UI-DEBT-02 | ui-fn | P3 | History | Stub DEFER (QA/Dev) | Ship History later · N/A accept |
| — | query | — | — | **none P0–P2** | |
| — | security | — | — | **none P0–P2** | |
| — | be-fn | — | — | **none P0–P2** | |

## Query (`/review-query`)

- Field SSOT list/search/init/CRUD vs SA API-01…08: **aligned** · FE BASE Integration · **no ERP.***
- List filter: `search` + `groupCode` · pageSize allowlist 50/100/200/500
- Soft-delete + `IsActive` filter on list/get/search: OK
- Search Fold in-memory: catalog ~380 — acceptable · no N+1/OOM P0
- Lookup consumer SearchInput: API-02 `/search` present · not in S0–QA-20 (out of capture) · no QUERY gap

## Security

- Permission codes `master.traffic-sign-types.read|create|update|delete` · local-mode gate for standalone
- Tenant/XCO: `xco_na` · shared `share_a` (SA)
- IDOR: CRUD by Guid · soft-delete · unique code check
- No secrets in FE feature paths · icon URL render only when user-supplied (NULL default)
- Injection: parameterized EF · group allowlist P/W/R/I/S/KHAC

## UI function

- PNG S0: list shell title+toolbar+filter+grid+seed **visible** · **no** blank/clip → no REV-UI-LAYOUT-06
- PNG S1: `groupCode=P` → 60 rows Biển báo cấm · filter OK
- PNG QA-20: Slideout create · VN labels · header ✕ only · footer Hủy/Lưu · `formCols=2` assert
- live-assert: `noDemo` · `noModeBadge` · create **Tạo mới** (not CREATE) → no REV-UI-HDR-01 / VI-01 / DEMO-NOTE
- CRUD real: 380 seed rows · **not** empty-only → no REV-UI-CRUD-EMPTY-01
- LeaveConfirmModal wired · code lock edit · keep case
- Filter: LinErpListFilterBar · 🔍 search btn present (assert testids)

## BE function

- DOMAIN-MAP `traffic-sign-type` → Integration · resource `traffic-sign-types`
- Endpoints list/search/init-data/by-code/CRUD/soft-delete live (Dev+QA)
- Migration already shipped · Step 4b N/A @ review
- BFF proxy-only path kept

## Confirm

`review_confirm` = **accept** (autoApprove=ON) · **cấm** fix_gaps · pipeline complete after this role  
Next chain: none in roleOnly · task mark **completed** · **cấm** phase rewrite design

## Handoff → Dev (nếu fix)

| Gap | Task hint |
|-----|-----------|
| — | none blocking |

## Debt (accept)

- isActive checkbox vs Switch
- History stub DEFER
- catalogKind live `traffic-sign-types` (Dev note)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| contentHash | sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb |
| reviewHash | sha256:e16f3e9aa16bdb9ce3fb6353447337a9b4dc158827a2ba86b487658fb967bb32 |
| generatedAt | 2026-09-06T03:00:00.000Z |
| versionGate | ok |
| review_confirm | accept |
