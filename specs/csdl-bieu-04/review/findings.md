# Review — Findings — csdl-bieu-04

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_140e0d17`  
> Verdict: **PASS** · hash skip (contentHash unchanged) · **cấm** implement / e2e / start:std

| | |
|--|--|
| Feature | `csdl-bieu-04` |
| Title | CSDL Biểu 04 — Cống các loại |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `culverts` · formNo `04` · columns `17` · IdCode `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| prior QA | **confirmed** · verdict PASS · e2e S0/S1/QA-20 |
| yarnBuild / typecheck / dotnetBuild / e2eQa | **PASS** (STATUS) |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| domain | **Asset** · `api/v1/asset/csdl-records` · **cấm ERP.*** |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T06:35:00.000Z` |

---

## Gate summary

| Layer | Verdict | Notes |
|-------|---------|-------|
| QUERY | **PASS** | Asset `csdl-records` · resource=`culverts` · typed `CsdlBieu4*` · **0** ERP.* · **0** invent infra |
| SEC | **PASS** (debt noted) | Auth `RequirePermission` stub DEFER (T-PERM-01) · soft DELETE · share_tenant · xco_get_only |
| UI-FN | **PASS** | Kind B list + Kind D Slideout 2col · 17 typed · four_xy · shape hộp/tròn · loadClass free_text · peer deep-link |
| BE-FN | **PASS** | shell + `Schema_CsdlBieu4` / `rmms_csdl_bieu4` · CRUD + shape normalize · road-route LKP |
| QA evidence | **PASS** | manifest `ok=true` · live-assert · scenarios T-QA-* |
| Hash | **skip** | contentHash == all prior compact · không re-open data-analy |

**review_confirm:** `approve` → **done** (autoApprove ON) · **0** fix_gaps blocking

---

## QUERY

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| Q-01 | API SSOT `api/v1/asset/csdl-records` · BFF proxy | **PASS** | Controller route · qa GET 200 · sa/dev compact |
| Q-02 | `resource=culverts` · formNo `04` | **PASS** | FE PAGE_ID · STATUS · live title |
| Q-03 | Typed 17 · **cấm** detail*-only / parent *Json | **PASS** | `CsdlBieu4Entity` + FormSlideout fields · **0** detailJson in page |
| Q-04 | IdCode `CG-` (không Guid raw) | **PASS** | form placeholder `(tự sinh CG-)` · SA/dev |
| Q-05 | **cấm ERP.*** FE/BE feature surface | **PASS** | Grep page **0** ERP · domain Asset |
| Q-06 | Peer Sổ TS deep-link only · **cấm** merge | **PASS** | testid peer-sots · QA-26 |
| Q-07 | contentHash chain | **PASS** | `7498ad66…` matches analy→qa compact |

---

## SEC

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| S-01 | Permission codes documented · wire DEFER | **PASS** (debt) | Controller TODO RequirePermission · T-PERM-01 |
| S-02 | Soft DELETE · no hard wipe | **PASS** | QA-24 · CsdlCatalogService pattern |
| S-03 | Gates tz_na · xco_get_only · share_tenant | **PASS** | STATUS · sa-compact |
| S-04 | **0** `window.confirm/alert` on Asset page | **PASS** | Grep page **0** · useAlert + LeaveConfirm |
| S-05 | Tenant share · no cross-tenant invent | **PASS** | sa_shared_table=share_tenant |

---

## UI-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| U-01 | Route alias `/csdl-bieu-04` + hub entry | **PASS** | `index.tsx` Route · S0+S1 |
| U-02 | Kind B A–D+F · LinErpListFilterBar · **0** nút Tìm invent | **PASS** | live-assert filters · QA-FB-* |
| U-03 | Kind D Slideout `data-form-cols=2` · footer_actions_only | **PASS** | QA-20 · QA-F-01 |
| U-04 | Q-GPS four_xy gpsCulvert*/gpsRoad* | **PASS** | FormSlideout fields · entity decimal(18,6) |
| U-05 | Q-SHAPE Dropdown hộp/tròn · Q-LOAD free_text | **PASS** | shapeOptions · loadClass Text · BE Allowed |
| U-06 | road SearchInput · manageUnit Text P2 | **PASS** | QA-F-03 · GAP-CSDL-ORG-01 DEFER |
| U-07 | LeaveConfirm · C/E/V/Copy | **PASS** | QA-21..25 code+runtime |
| U-08 | Chrome VN · **0** mode badge · **0** demo | **PASS** | live-assert noDemo/noModeBadge |
| U-09 | XLS OUT stub OK | **PASS** | GAP-CSDL-XLS-01 OUT |

---

## BE-FN

| ID | Check | Result | Evidence |
|----|-------|--------|----------|
| B-01 | `Schema_CsdlBieu4` · table `rmms_csdl_bieu4` 1:1 | **PASS** | Migration `20260905061652_Schema_CsdlBieu4` · Entity |
| B-02 | DTO join catalog + typed fields | **PASS** | `CsdlBieu4Dto` · CsdlCatalogService map |
| B-03 | Shape normalize/allowlist hộp\|tròn | **PASS** | `CsdlBieu4Shapes` |
| B-04 | CRUD list/get/create/update/soft-delete | **PASS** | Controller + Service · QA CRUD |
| B-05 | road-routes/search LKP | **PASS** | API-LKP-01 · form SearchInput |
| B-06 | DOMAIN-MAP Asset · **cấm** invent so-ts API | **PASS** | sa T-DM-01 · compact |
| B-07 | Migrate apply = deploy/4b (not Review) | **N/A** | noted debt · **cấm** Step 4b ở review |

---

## QA cross-check

| Case | Result | sha16 |
|------|--------|-------|
| S0 list | PASS | `d6e9f19589ae80d0` |
| S1 hub | PASS | `63c4bf383d9c23ad` |
| QA-20 create | PASS | `1640ba4607f56a43` |

PNG Read: permission denied (sandbox) — rely manifest + live-assert + scenarios (ok=true).

---

## Debt (non-blocking)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang playwright install · chrome channel fallback · **cấm** kill |
| T-PERM-01 Auth | DEFER | RequirePermission stub until CommonLib |
| GAP-CSDL-ORG-01 | P2 | manageUnit SearchInput org-unit |
| GAP-CSDL-XLS-01 | OUT | Import/export Biểu 4 |
| migrate DB apply | deploy | Schema present in code · apply at Dev/4b/deploy |

---

## Decisions

- `review_confirm` = **approve** (autoApprove ON)
- **0** fix_gaps blocking · pipeline review **confirmed**
- phase stays pipeline-complete for this feature lane · **không** reopen prior roles
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-04/review/findings.md` |
| meta | `specs/csdl-bieu-04/review/REVIEW-META.json` |
| compact | `specs/csdl-bieu-04/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-04/STATUS.md` |

## Next

- Chain complete for roleOnly=review · task mark **completed**
- E2E already PASS under QA · no further role in this packet
