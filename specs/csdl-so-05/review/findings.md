# Review — Findings — csdl-so-05

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_4ea0d1b3`  
> Hash skip: contentHash unchanged · demo/header fingerprint match priors

| | |
|--|--|
| Feature | `csdl-so-05` |
| Title | CSDL Sổ 05 — TNGT + điểm đen |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `accident-summaries` |
| formNo | `05` · IdCode `SO-` |
| Verdict | **PASS** · no P0/P1 blocker |
| review_confirm | **done** |
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-06T06:33:25.515Z` |

## Gates (QUERY / SEC / UI-FN / BE-FN)

| Gate | Result | Evidence |
|------|--------|----------|
| **QUERY** | **PASS** | FE `BASE=/asset/csdl-records` · `?resource=accident-summaries` · filters year/periodType/tableKind/road/province/status/search · BE list `AsNoTracking` + typed So05 joins · **cấm** `/api/v1/accident-summaries` · **cấm ERP.*** |
| **SEC** | **PASS** (debt P2) | SoftDelete API · tenant share_tenant · Auth `RequirePermission` stub **DEFER** T-PERM-01 (known) · no secrets in FE · no ERP.* |
| **UI-FN** | **PASS** | Kind B list + Kind D Slideout 2col · 3 tabs C1/C2/BS add-row · LeaveConfirm · route_a `/csdl-so-05` · hub redirect `accident-summaries`→`/csdl-so-05` · QA S0/S1/QA-20 PNG PASS · **cấm** 16 hạng / col1–3 |
| **BE-FN** | **PASS** | `Schema_CsdlSo05` · tables `rmms_csdl_so05` + `_c1`/`_c2`/`_bs` · typed DTO entriesC1/C2/BS · CRUD keep `api/v1/asset/csdl-records` · replace-all lines · soft unique advisory |

## Alignment (priors)

| Prior | Status | Check |
|-------|--------|-------|
| data_analy | confirmed | NEW resource · typed 3 grids · split so-04 · hash match |
| po | confirmed | Q-PERIOD/CAUSE/DAMAGE/BS/STATUS resolved · formPattern Kind D |
| design | confirmed | control-map · filter 1-row · design_confirm approve |
| sa | confirmed | Schema_CsdlSo05 · tz_none · xco_get_only · share_tenant |
| team_lead | confirmed | route_a · T-* matrix · team_lead_confirm approve |
| dev | confirmed | FE CsdlSo05Page · yarn+dotnet PASS · implement compact |
| qa | confirmed | e2e S0/S1/QA-20 PASS · verdict PASS · handoff Review |

## Findings

| ID | Sev | Gate | Finding | Disposition |
|----|-----|------|---------|-------------|
| — | — | — | No blocking findings | — |
| REV-DEBT-01 | P2 | SEC | Auth `RequirePermission` stub on CsdlCatalogRecordsController | Accept · T-PERM-01 DEFER (pipeline debt) |
| REV-DEBT-02 | P2 | QA | GAP-QA-E2E-PW-01 chrome-channel fallback | Accept · tracked QA |
| REV-DEBT-03 | P3 | UI | GAP-QA-ROAD-TESTID road SearchInput testid | Accept · P3 |
| REV-DEBT-04 | P2 | BE | Soft unique advisory · UiSchema seed DEFER · org/XLS OUT | Accept · known OUT/DEFER |

## Screens / zones (ids)

- S-LIST · S-FORM-C/E/V/Copy · S-TAB-C1 · S-TAB-C2 · S-TAB-BS · S-HUB-ENTRY · S-SKIP-MAP
- testid list `rmms-csdl-so-05-list` · form slideout · QA screens `specs/csdl-so-05/qa/screens/{S0,S1,QA-20}.png`

## Decision

- **review_confirm = done** (autoApprove ON)
- Hash **skip** — unchanged vs data_analy/po/…/qa
- **Không** fix_gaps · **không** re-open Dev/QA
- Feature pipeline **complete** · phase=`done`

## Cấm

ERP.* · invent API · runtime `/api/v1/accident-summaries` · Guid IdCode · 16 hạng · col1–3 SSOT · merge so-04/Sổ TS · CRUD rpt-tngt · yarn build/e2e/start:std @ Review · start role khác
