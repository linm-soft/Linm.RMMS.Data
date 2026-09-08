# Review — Findings — csdl-so-02

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_575d1ba6`  
> Verdict: **PASS** · contentHash unchanged → demo hash-skip

| | |
|--|--|
| Feature | `csdl-so-02` |
| Title | CSDL Sổ 02 — Nhật ký tuần đường |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `patrol-logs` |
| formNo | `02` · IdCode `SO-` |
| contentHash | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| prior QA | **PASS** · S0/S1/QA-20 · task_50462aa5 |
| prior Dev | **PASS** · yarn+dotnet · task_d4e4f9fe |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-06T00:47:09.122Z` |

## Gate summary

| Gate | Result | Note |
|------|--------|------|
| QUERY | **PASS** | EF `ILike` parameterized · no raw SQL · Asset `csdl-records` · **cấm ERP.*** |
| SEC | **PASS** | soft-delete · `csdlListPermissions` · media max 10 BE+FE · no secrets |
| UI-FN | **PASS** | Kind D Slideout 2col · filter-bar · LeaveConfirm · typed fields · route_a |
| BE-FN | **PASS** | `Schema_CsdlSo02` · `CsdlSo02Entity` · typed upsert · TZ UTC period · entries widen |
| Hash | **SKIP** | contentHash == prior pipeline · no demo re-scan |
| QA evidence | **PASS** | manifest `ok=true` · S0/S1/QA-20 PNG |
| DOMAIN-MAP | **PASS** | `csdl-so-02` → Asset |

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | List/search qua EF LINQ + `EF.Functions.ILike` (param) · join `CsdlSo02.PatrolStaff` | OK |
| Q-02 | — | API giữ `api/v1/asset/csdl-records` (+ BFF proxy) · FE `BASE=/asset/csdl-records` | OK |
| Q-03 | — | **Không** ERP.* / invent infra path | OK |
| Q-04 | — | Filter period `fromDate`/`toDate` + typed periodStart/End UTC | OK |

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Delete = `SoftDeleteAsync` (không hard wipe) | OK |
| S-02 | — | FE gate `csdlListPermissions()` · list/form actions | OK |
| S-03 | — | `entries[].mediaIds` max 10 validated FE + BE | OK |
| S-04 | — | Auth wire đầy đủ DEFER (debt · không blocker) | DEFER |
| S-05 | — | Không embed secret/credential trong page | OK |

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Route `/csdl-so-02` + hub redirect `patrol-logs` → alias (route_a) | OK |
| U-02 | — | Label «Sổ 02 — Nhật ký tuần đường» · testid `rmms-csdl-so-02-list` | OK |
| U-03 | — | Filter-bar: SearchText + province/status/road + dateRange · live apply | OK |
| U-04 | — | Slideout `data-form-cols=2` · Z2 header typed · entries `inline_grid` | OK |
| U-05 | — | LeaveConfirm dirty · C/E/V/Copy modes | OK |
| U-06 | P1 | FileRef/sketch/media = **text ids** (P1 debt · QA/Dev known) | ACCEPT debt |
| U-07 | — | Fallback `col1–3` chỉ read-compat legacy · write typed fields | OK |
| U-08 | — | QA PNG S0/S1/QA-20 khớp zones S-LIST / S-FORM-C / S-HUB-ENTRY | OK |

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | Entity `CsdlSo02Entity` · table `rmms_csdl_so02` · 1:1 CatalogRecord | OK |
| B-02 | — | Migration `Schema_CsdlSo02` · DbSet + FK | OK |
| B-03 | — | Create/Update RequirePatrolLogsHeader + Build/UpsertSo02 | OK |
| B-04 | — | Entry req: eventAt · locationKm · weatherEvent · media≤10 | OK |
| B-05 | — | IdCode prefix `SO` · resource key `patrol-logs` giữ | OK |
| B-06 | — | DOMAIN-MAP row `csdl-so-02` → Asset | OK |
| B-07 | — | **cấm** parent *Json dump · typed child + widen entries | OK |

## Cross-role consistency

| Check | Result |
|-------|--------|
| data_analy → po → design → sa → TL → dev → qa | versions + contentHash align |
| formPattern Kind D Slideout · entries inline_grid | consistent |
| API Asset domain · **cấm ERP.*** | consistent |
| open Q | **none** (all prior resolved) |
| UNCLEAR | **none** |

## Debt (non-blocking · carry)

| ID | Sev | Note |
|----|-----|------|
| FileRef UI text-ids | P1 | sketch/media input text · File picker later |
| GAP-QA-E2E-PW-01 | P2 | yarn e2e-qa hang → chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | road SearchInput testid polish |
| Auth wire | DEFER | T-PERM full |
| GAP-CSDL-ORG-01 | DEFER P2 | manageUnit/contractor SearchInput |
| GAP-CSDL-XLS-01 | OUT | import/export |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **`done`** |
| autoApprove | `ON` |
| blockers | **none** |
| fix_gaps | — |
| phase_next | `done` |

## Evidence refs

- FE: `Linm.Web.RMMS.Asset/src/pages/CsdlSo02Page/`
- BE: `CsdlSo02Entity` · `CsdlCatalogService` patrol-logs · `Schema_CsdlSo02`
- QA: `specs/csdl-so-02/qa/screens/manifest.json` · S0/S1/QA-20
- compact priors: data_analy…qa (all `done` / confirmed)
- STATUS: `specs/csdl-so-02/STATUS.md`
