# Review — Findings — csdl-so-07

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_c8e7adf8`  
> Role: `/agent-review` · packKind=`list` · changeScope=`new_page`

| | |
|--|--|
| Feature | `csdl-so-07` |
| Title | CSDL Sổ 07 — HL + GPTC + Dự án |
| Role | `review` |
| Verdict | **PASS** |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-06T05:01:20.000Z` |

## Gate summary

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | List via `asset/csdl-records?resource=row-violations` · filter search/province/status/road/UpdatedAt · typed So07 join |
| SEC | **PASS** | SoftDelete · perm keys `rmms-asset:csdl-records:*` · **cấm ERP.*** · share_tenant · no invent runtime `/row-violations` path |
| UI-FN | **PASS** | Kind B list + Kind D Slideout 2col · Tab A/B nested add/remove · route_a + hub redirect · LeaveConfirm · QA S0/S1/QA-20 PASS |
| BE-FN | **PASS** | `Schema_CsdlSo07` · `rmms_csdl_so07` + VP/GP children · replace-all arrays · ValidateRow* · DOMAIN-MAP Asset |
| Hash | **skip** | contentHash unchanged vs prior chain · no re-hash required |
| QA evidence | **PASS** | manifest `ok=true` · S0/S1/QA-20 · GAP-QA-E2E-PW-01 P2 only |

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| API prefix Asset catalog | PASS | FE `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` · BFF proxy |
| Resource key giữ | PASS | `row-violations` query param · **cấm** path `/row-violations` |
| Filter live | PASS | search · province · status draft\|active\|closed · road-route · from/to UpdatedAt TZ |
| Typed list join | PASS | `CsdlCatalogService` IsRowViolations · So07/VP/GP search join |
| IdCode SO- | PASS | ResourceMap SO · FE field code ro |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| Soft delete | PASS | `SoftDeleteAsync` · FE `csdlService.delete` |
| Permissions | PASS | `rmms-asset:csdl-records:read\|write` (wire DEFER ops OK) |
| No ERP.* | PASS | FE+BE+DOMAIN-MAP Asset only |
| Tenant | PASS | sa_shared_table=`share_tenant` · catalog shell |
| No invent legacy path | PASS | **cấm** runtime `/row-violations` · `/construction-permits` |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Route alias | PASS | `/csdl-so-07` · hub `TYPED_RESOURCE_ROUTES['row-violations']` |
| List FULL UiSchema | PASS | kind `row-violations` · dynamic grid |
| Form Kind D 2col | PASS | `CsdlSo07FormSlideout` · Z1–Z3 · footer actions |
| 2 tab nested | PASS | Tab A `violations[]` · Tab B `permits[]`+QLDA · add/remove · **cấm** flatten |
| Enums | PASS | sổ draft\|active\|closed · VP open\|processing\|resolved\|dismissed |
| Modes C/E/V/Copy/Delete | PASS | QA + implement |
| LeaveConfirm / History | PASS | QA T-QA-* · History reuse |
| E2E screens | PASS | S0 list · S1 hub redirect · QA-20 create form (PNG + manifest) · PNG Read blocked OS — rely QA sha |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Schema_CsdlSo07 | PASS | migration `20260906070000_Schema_CsdlSo07` |
| Entities | PASS | `CsdlSo07Entity` + Violation/Permit · FK CatalogRecordId |
| Upsert replace-all | PASS | BuildSo07Violations/Permits · RemoveRange |
| Validation | PASS | `ValidateRowViolationRows` / `ValidateRowPermitRows` |
| Stop book_entries write | PASS | implement + service IsRowViolations branch |
| DOMAIN-MAP | PASS | `csdl-so-07` → Asset |
| DTO nested | PASS | Violations/Permits on create/update/detail |

## Cross-role alignment

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed | typed T-SO-07 · 2 tab · GAP closed in impl |
| po | confirmed | requirement live-bind khớp |
| design | confirmed | Kind B+D · filter HARD · 2col |
| sa | confirmed | Schema_CsdlSo07 · gates tz/xco/share |
| team_lead | confirmed | route_a · T-* matrix covered |
| dev | confirmed | yarn+dotnet PASS · FE+BE shipped |
| qa | confirmed | e2e PASS · handoff Review |

## Findings (blocking)

- **none**

## Findings (non-blocking / debt)

| ID | Sev | Note |
|----|-----|------|
| DEBT-UISCHEMA-01 | P2 | CatalogUiSchemaSeed default `row-violations` DEFER |
| DEBT-MIGRATE-01 | P2 | Apply migration target DB — ops |
| DEBT-AUTH-01 | P2 | Auth permission wire DEFER |
| DEBT-ORG-01 | P2 | org SearchInput P2 DEFER |
| T-REN-01 | P3 | Hub card formNo 6 → 07 rename DEFER |
| GAP-QA-E2E-PW-01 | P2 | chrome channel fallback · documented |
| GAP-QA-ROAD-TESTID | P3 | road testid polish |
| XLS | OUT | per PO/design |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **done** |
| autoApprove | ON |
| fix_gaps | none |
| next | pipeline **complete** · no further role in this task |
| phase | `done` (Review owns phase=done) |

## Cấm (review)

ERP.* · invent API · implement code · e2e/start:std/yarn build @ Review · Step 4b · start role khác · flatten tabs · runtime row-violations path · merge report
