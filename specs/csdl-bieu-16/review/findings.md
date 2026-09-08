# Review — Findings — csdl-bieu-16

| | |
|--|--|
| Feature | `csdl-bieu-16` |
| Title | CSDL Biểu 16 — Nút giao |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT |
| IdCode | `IX-` |
| taskId | `task_628c95a5` |
| priorQa | `task_944da438` · verdict **PASS** |
| priorDev | `task_71eac21e` · yarn/dotnet **PASS** |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| hashGate | **SKIP** (unchanged vs data_analy → qa) |
| review_confirm | **approve** (autoApprove ON) |
| verdict | **PASS** |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T17:10:00.000Z` |

## Scope checked

| Layer | Evidence |
|-------|----------|
| Compact chain | data_analy → po → design → sa → team_lead → dev → qa (all confirmed) |
| FE | `CsdlBieu16Page.tsx` · `CsdlBieu16FormSlideout.tsx` · route `/csdl-bieu-16` · hub `TYPED_RESOURCE_ROUTES.interchanges` |
| BE | `CsdlBieu16Entity` + `CsdlBieu16BranchEntity` · DTO embed · `CsdlCatalogService` interchanges · migration `Schema_CsdlBieu16` |
| DOMAIN-MAP | `csdl-bieu-16` → Asset |
| QA | S0/S1/QA-20 PASS · manifest `ok=true` · typecheck PASS |

## Hash gate

- contentHash / headerFingerprint **match** prior compact chain → **không** re-scan demo / data-analy.
- 39 cột header ổn định (branch* flatten → child `branches[]`).

---

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | List filter: search / province / status / interchangeType / roadCode / kmMain · BE typed join `CsdlBieu16` | **PASS** |
| Q-02 | — | CRUD `api/v1/asset/csdl-records?resource=interchanges` · BFF proxy · embed `branches[]` · **không** invent infra / ERP.* | **PASS** |
| Q-03 | — | IdCode prefix `IX` · `NextCodeAsync` · shell + typed 1:1 + Branch 1–n · **không** Guid IdCode | **PASS** |
| Q-04 | — | Soft-delete catalog · list không surface deleted | **PASS** |
| Q-05 | — | LKP road-routes/search · SearchInput P1 | **PASS** |
| Q-06 | info | Auth `RequirePermission` wire **DEFER** (debt Dev/QA) | **ACCEPT** debt |

**QUERY summary:** 0 blocker · 0 major.

---

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Domain Asset · DOMAIN-MAP slug có · FE/BE **không** ERP.* | **PASS** |
| S-02 | — | Gates tz_na · xco_get_only · share_tenant — không mở write cross-org | **PASS** |
| S-03 | — | Server: interchangeType/status/side/trafficOrg normalize · `branches` Count ≥ 1 | **PASS** |
| S-04 | info | Permission reuse `asset.csdl-records.*` · wire DEFER | **ACCEPT** debt |
| S-05 | — | **Không** merge so-ts-interchange / road-assets · peer none_p1 | **PASS** |

**SEC summary:** 0 blocker · 0 major.

---

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Kind B list A–D+F · FilterBar · `buildDynamicGridColumns` · subset list cols | **PASS** |
| U-02 | — | Kind D Slideout 2col · 5 section + BRANCH · footer_actions_only · LeaveConfirm · min_1 UI | **PASS** |
| U-03 | — | Typed 39 · child grid · ATGT qty · **không** form 3 ô detail* · **không** flatten-only | **PASS** |
| U-04 | — | route_a `/csdl-bieu-16` + hub `?resource=interchanges` redirect (QA S1) | **PASS** |
| U-05 | — | interchangeType cite_excel · trafficOrg lookup · kmMain point_main · empty «Chưa có nút giao» | **PASS** |
| U-06 | — | Map none · peer toolbar none_p1 · XLS OUT | **PASS** (by design) |
| U-07 | P3 | GAP-QA-ROAD-TESTID · form-assert `hasRoad=false` (testid trùng) | **ACCEPT** P3 |

**UI-FN summary:** 0 blocker · 0 major · 1 P3 debt.

---

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | `CsdlBieu16Entity` / Branch · `rmms_csdl_bieu16` (+ `_branch`) · **không** parent *Json | **PASS** |
| B-02 | — | Migration `20260905230000_Schema_CsdlBieu16` present · Apply runtime Step 4b | **PASS** artifact |
| B-03 | — | DTO typed + `branches[]` embed · UiSchema `interchanges` · list `branchCount` | **PASS** |
| B-04 | — | `RequireInterchangesTyped` · min_1 branches · replace-all PUT | **PASS** |
| B-05 | — | status/side sync shell · Prefix `IX` in ResourceMap | **PASS** |
| B-06 | — | Shell + 1:1 + Branch 1–n · **không** 2 catalog entity · **không** nested branch API P1 | **PASS** |

**BE-FN summary:** 0 blocker · 0 major.

---

## Verdict

| | |
|--|--|
| Overall | **PASS** |
| review_confirm | **approve** |
| fix_gaps | **none** |
| Blockers | 0 |
| Majors | 0 |
| Accepted debt | Auth DEFER · org P2 · XLS OUT · GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 |

## Evidence cite (QA)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `df8d6375dd104010` |
| S1 | PASS | `df8d6375dd104010` |
| QA-20 | PASS | `750db6e448c043ba` |

## Next

- Pipeline **complete** · phase=`done` · **không** start role khác.
