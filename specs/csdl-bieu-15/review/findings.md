# Review — Findings — csdl-bieu-15

| | |
|--|--|
| Feature | `csdl-bieu-15` |
| Title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `ops-facilities` |
| formNo | `15` |
| IdCode | `OF-` |
| taskId | `task_0c28671f` |
| priorQa | `task_cb969365` · verdict **PASS** |
| priorDev | `task_e6ad9bf7` · yarn/dotnet **PASS** |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| hashGate | **SKIP** (unchanged vs data_analy → qa) |
| review_confirm | **approve** (autoApprove ON) |
| verdict | **PASS** |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T16:05:00.000Z` |

## Scope checked

| Layer | Evidence |
|-------|----------|
| Compact chain | data_analy → po → design → sa → team_lead → dev → qa (all confirmed) |
| FE | `CsdlBieu15Page.tsx` · `CsdlBieu15FormSlideout.tsx` · route `/csdl-bieu-15` · hub redirect |
| BE | `CsdlBieu15Entity` · `CsdlBieu15Dtos` · `CsdlCatalogService` ops-facilities · migration `Schema_CsdlBieu15` |
| DOMAIN-MAP | `csdl-bieu-15` → Asset |
| QA | S0/S1/QA-20 PASS · manifest `ok=true` · typecheck PASS |

## Hash gate

- contentHash / headerFingerprint **match** prior compact chain → **không** re-scan demo / data-analy.
- 20 cột header ổn định: `code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

---

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | List filter: search / province / status / facilityKind / roadCode / kmFrom–kmTo · BE `facilityKind` normalize keep_5 + typed join `CsdlBieu15` | **PASS** |
| Q-02 | — | CRUD qua `api/v1/asset/csdl-records?resource=ops-facilities` · BFF proxy only · **không** invent infra / ERP.* | **PASS** |
| Q-03 | — | IdCode prefix `OF` · shell catalog + typed child 1:1 · **không** Guid làm IdCode | **PASS** |
| Q-04 | — | Soft-delete reuse catalog · list không surface deleted | **PASS** (reuse path) |
| Q-05 | — | LKP road-routes/search · SearchInput P1 | **PASS** |
| Q-06 | info | Auth `RequirePermission` wire **DEFER** (đã ghi debt Dev/QA) | **ACCEPT** debt |

**QUERY summary:** 0 blocker · 0 major.

---

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Domain Asset only · DOMAIN-MAP slug có · **cấm** ERP.* (FE page + Asset controller path sạch) | **PASS** |
| S-02 | — | Tenant share_tenant · xco_get_only · tz_na (SA gates) — không mở write cross-org mới | **PASS** |
| S-03 | — | Validation server: facilityKind keep_5 · qty/area ≥0 · yearBuilt range · status enum | **PASS** |
| S-04 | info | Permission reuse `asset.csdl-records.*` · wire DEFER — cùng pattern peer Biểu | **ACCEPT** debt |
| S-05 | — | **Không** merge so-ts-toll/rest/station/road-assets · peer cite only | **PASS** |

**SEC summary:** 0 blocker · 0 major.

---

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Kind B list A–D+F · FilterBar · `buildDynamicGridColumns` · subset list cols | **PASS** |
| U-02 | — | Kind D Slideout 2col · Z2 cơ sở/công trình · Z3 TB+QL · footer_actions_only · LeaveConfirm | **PASS** |
| U-03 | — | Typed 20 cột · **không** form 3 ô detail* | **PASS** |
| U-04 | — | route_a `/csdl-bieu-15` + hub `?resource=ops-facilities` redirect (QA S1) | **PASS** |
| U-05 | — | facilityKind keep_5 · equipmentKind free_text · empty copy TMC/thu phí/hạt/kho | **PASS** |
| U-06 | — | Map none · peer toolbar none_p1 · XLS OUT | **PASS** (by design) |
| U-07 | P3 | GAP-QA-ROAD-TESTID — road SearchInput testid trùng field (QA debt) | **ACCEPT** P3 |

**UI-FN summary:** 0 blocker · 0 major · 1 P3 debt.

---

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | `CsdlBieu15Entity` / `rmms_csdl_bieu15` · Facility*/Area*/Equipment* flat · **không** parent *Json | **PASS** |
| B-02 | — | Migration `20260905160000_Schema_CsdlBieu15` present · Apply runtime Step 4b (đã Dev) | **PASS** artifact |
| B-03 | — | DTO typed join catalog · UiSchema catalogKind `ops-facilities` seed list subset | **PASS** |
| B-04 | — | RequireOpsFacilitiesTyped trên Create/Update · normalize VN aliases | **PASS** |
| B-05 | — | status sync shell Status khi typed | **PASS** |
| B-06 | — | **Không** 2 entity song song · shell + 1:1 child | **PASS** |

**BE-FN summary:** 0 blocker · 0 major.

---

## QA evidence (cite)

| Case | Result | sha16 | Note |
|------|--------|-------|------|
| S0 | PASS | `bb3b71a3587cc57e` | list + filter-bar |
| S1 | PASS | `bb3b71a3587cc57e` | hub → `/csdl-bieu-15` |
| QA-20 | PASS | `1dd3e77a73d1388f` | Create Slideout Z2/Z3 · OF- |

- yarnTypecheck **PASS** · e2eQa **PASS** (chrome fallback · GAP-QA-E2E-PW-01 P2)
- **Cấm** re-run e2e / start:std @ Review

---

## Debt carry-forward (không block)

| ID | Pri | Note |
|----|-----|------|
| Auth wire | DEFER | RequirePermission |
| GAP-CSDL-ORG-01 | P2 | manageUnit → org SearchInput |
| GAP-CSDL-XLS-01 | OUT | Import sheet Biểu 15 |
| GAP-QA-E2E-PW-01 | P2 | yarn e2e-qa hang → chrome fallback |
| GAP-QA-ROAD-TESTID | P3 | duplicate road testid |
| Peer/map | none_p1 | by PO/SA |

## review_confirm

- autoApprove=ON → **approve**
- fix_gaps: **none**
- phase: review **confirmed** · pipeline feature **done** (Review last role)

## Verdict

**PASS** — QUERY/SEC/UI-FN/BE-FN sạch blocker; QA + Dev builds PASS; hash unchanged; known debt deferred.
