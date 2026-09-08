# Review — Findings — csdl-bieu-05

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_d12c1bda`  
> Verdict: **PASS** · hash skip (contentHash unchanged) · **cấm** implement / e2e / start:std

| | |
|--|--|
| Feature | `csdl-bieu-05` |
| Title | CSDL Biểu 05 — Rãnh các loại |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `ditches` · formNo `05` · columns `18` · IdCode `RN-` |
| peerSoTs | `so-ts-ditch` |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| prior QA | **confirmed** · verdict PASS · e2e S0/S1/QA-20 |
| yarnBuild / typecheck / dotnetBuild / e2eQa | **PASS** (STATUS · prior compact) |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| domain | **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T07:10:30.000Z` |

---

## Gate summary

| Layer | Verdict | Notes |
|-------|---------|-------|
| QUERY | **PASS** | Asset `csdl-records` · resource=`ditches` · typed `CsdlBieu5*` · **0** ERP.* · **0** invent infra |
| SEC | **PASS** (debt noted) | Auth `RequirePermission` stub DEFER (T-PERM-01) · soft DELETE · share_tenant · xco_get_only |
| UI-FN | **PASS** | Kind B list + Kind D Slideout 2col · 18 typed · ditchKind hở/kín · shape rect/trap/round · aperture/drain free_text · peer deep-link |
| BE-FN | **PASS** | shell + `Schema_CsdlBieu5` / `rmms_csdl_bieu5` · CRUD + ditchKind/shape normalize · road-route LKP |
| QA evidence | **PASS** | manifest `ok=true` · S0/S1/QA-20 · scenarios T-QA-* |
| Hash | **skip** | contentHash == all prior compact · không re-open data-analy |

**review_confirm:** `approve` → **done** (autoApprove ON) · **0** fix_gaps blocking

---

## QUERY

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| Q-01 | API SSOT `api/v1/asset/csdl-records` · BFF proxy | **PASS** | Controller + BFF · sa/dev compact |
| Q-02 | `resource=ditches` · formNo `05` | **PASS** | FE `RESOURCE`/`PAGE_ID` · STATUS · UiSchema kind |
| Q-03 | Typed 18 · **cấm** detail*-only / parent *Json | **PASS** | `CsdlBieu5Entity` + FormSlideout fields · Schema_CsdlBieu5 |
| Q-04 | IdCode `RN-` (không Guid raw) | **PASS** | form placeholder `(tự sinh RN-)` · SA/dev |
| Q-05 | **cấm ERP.*** FE/BE feature surface | **PASS** | Grep CsdlBieu05Page **0** ERP · domain Asset |
| Q-06 | Peer Sổ TS deep-link only · **cấm** merge | **PASS** | `PEER_PATH=/so-ts?type=DITCH` · GAP-BIEU05-PEER-01 |
| Q-07 | contentHash chain | **PASS** | `fd4e6899…` matches analy→qa compact |
| Q-08 | Filters ditchKind · kmFrom/kmTo · roadCode | **PASS** | list qs + `CsdlCatalogService` join filter |

---

## SEC

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| S-01 | Permission codes documented · wire DEFER | **PASS** (debt) | Controller TODO RequirePermission · FE `csdlListPermissions` · T-PERM-01 |
| S-02 | Soft DELETE · no hard wipe | **PASS** | `SoftDeleteAsync` · DELETE controller |
| S-03 | Gates tz_na · xco_get_only · share_tenant | **PASS** | sa-compact · team_lead |
| S-04 | **0** `window.confirm/alert` on Asset page | **PASS** | useAlert + LeaveConfirmModal |
| S-05 | Tenant share · no cross-tenant invent | **PASS** | sa_shared_table=share_tenant |

---

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | Route alias `/csdl-bieu-05` + hub entry | **PASS** | `index.tsx` Route · S0+S1 · route_a |
| U-02 | Kind B A–D+F · LinErpListFilterBar · **0** nút Tìm invent | **PASS** | CsdlBieu05Page · SearchTextInput in bar |
| U-03 | Kind D Slideout · footer_actions_only · C/E/V/Copy | **PASS** | QA-20 · FormSlideout modes |
| U-04 | Q-SHAPE Dropdown chữ nhật/thang/tròn | **PASS** | `DITCH_SHAPES` · BE `CsdlBieu5Shapes` |
| U-05 | Q-APERTURE / Q-DRAIN free_text · lengthM* | **PASS** | form Text fields · validate lengthM |
| U-06 | ditchKind hở/kín · kmFrom/kmTo filter+form | **PASS** | GAP-BIEU05-KIND/RANGE · list+form |
| U-07 | road SearchInput · manageUnit Text P2 | **PASS** | ROAD_ROUTE_LOOKUP · GAP-CSDL-ORG-01 DEFER |
| U-08 | LeaveConfirm · peer deep-link | **PASS** | useLeaveConfirm · PEER_PATH |
| U-09 | XLS OUT stub OK | **PASS** | GAP-CSDL-XLS-01 OUT · T-OUT-01 |

---

## BE-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| B-01 | `Schema_CsdlBieu5` · table `rmms_csdl_bieu5` 1:1 | **PASS** | Migration `20260905065854_Schema_CsdlBieu5` · Entity |
| B-02 | DTO join catalog + typed fields | **PASS** | CsdlCatalogService map · request/response widen |
| B-03 | ditchKind/shape normalize allowlist | **PASS** | `CsdlBieu5DitchKinds` · `CsdlBieu5Shapes` |
| B-04 | CRUD list/get/create/update/soft-delete | **PASS** | Controller + Service · QA CRUD |
| B-05 | list filter `ditchKind` + km range | **PASS** | Service Where join · BFF qs |
| B-06 | road-routes/search LKP · DOMAIN-MAP Asset | **PASS** | T-DM-01 · FE lookups |
| B-07 | Migrate apply = deploy/4b (not Review) | **N/A** | **cấm** Step 4b ở review |

---

## QA cross-check

| Case | Result | sha16 |
|------|--------|-------|
| S0 list | PASS | `a23703a704e66bd1` |
| S1 hub | PASS | `ea9bebf5a586b1e3` |
| QA-20 create | PASS | `b8607424dc589ce0` |

PNG: rely manifest `ok=true` + qa-compact (role **cấm** e2e/start:std).

---

## Debt (non-blocking)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang playwright install · chrome channel fallback · **cấm** kill |
| T-PERM-01 Auth | DEFER | RequirePermission stub until CommonLib |
| GAP-CSDL-ORG-01 | P2 | manageUnit SearchInput org-unit |
| GAP-CSDL-XLS-01 | OUT | Import/export Biểu 5 |
| migrate DB apply | deploy | Schema in code · apply at Dev/4b/deploy |

---

## Decisions

- `review_confirm` = **approve** (autoApprove ON)
- **0** fix_gaps blocking · pipeline review **confirmed**
- **không** reopen prior roles · open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-05/review/findings.md` |
| meta | `specs/csdl-bieu-05/review/REVIEW-META.json` |
| compact | `specs/csdl-bieu-05/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-05/STATUS.md` |

## Next

- roleOnly=review **done** · mark `task_d12c1bda` completed · **cấm** start role khác trong task này
