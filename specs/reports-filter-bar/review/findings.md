# Review findings — reports-filter-bar

> Status: **done**  
> Mode: `review_only` (autopilot · autoApprove ON · không AskQuestion)  
> reviewHash: `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` · rulesVersion: `2026.08.30.6`

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| title | Báo cáo Web (hub) — filter bar (Tuyến · Khu · Đoạn) |
| this role | `review` · `/agent-review` |
| review_confirm | **approve** (autoApprove ON · `task_004a1fdd`) |
| packKind | `report` · Kind **E** hub · changeScope=`edit_page` |
| taskId | `task_004a1fdd` |
| prior QA | `task_0a95bf82` · `qa/scenarios.md` **PASS** · S0/S1/QA-20 |
| prior Dev | `task_f76f0fe2` · `implement/reports-filter-bar.md` **confirmed** |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| mfeStdRoute | `/bao-cao` (`route_confirm=route_a`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Report Xem + Integration Search |
| autoApprove | ON |
| e2eQa | ON (đã chạy ở QA · **cấm** e2e/start:std/yarn build ở role Review) |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| skillVersion | `2026.08.30.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.30.6` |
| versionGate | `rechecked` |
| updatedAt | `2026-08-30T16:36:26.991Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| Hub filter | `Linm.Web.RMMS.Report` · `ReportFilterBar.tsx` · `/bao-cao` |
| Hub page | `ReportListPage.tsx` · draft/viewed · cascade · `zoneOrgCode`/`segmentCode` QS |
| Lookups | `services/report/lookups.ts` · Tuyến exclude KM* · Khu REG · Đoạn scopes/dump |
| API Report | `ReportQueryController` · assets/incidents/checkins (+ export) `zoneOrgCode`/`segmentCode` |
| API Integration | `RoadRoutesController.Search` · `excludeRouteKinds` · OrgUnits / OrgRouteScopes cite |
| Service | `ReportService.ResolveHubRouteFilterAsync` · segment → mother · zone allow-list · 0 gán = no-op |
| BFF | Report + Integration · proxy QS (0 code this pack) |
| Prototype | `specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` |
| QA evidence | `qa/screens/{S0,S1,QA-20}.png` · manifest `ok:true` |

## Live / PNG re-audit (không start:std)

| Check | Evidence | Result |
|-------|----------|--------|
| Kind E shell · title «Báo cáo Web» · filter · empty before Xem | S0.png · SHA16 `64b4599c…` | **PASS** — **0** REV-UI-LAYOUT-06 |
| Khu SearchInput type `REG` · dropdown MÃ+TÊN REG-I…IV | S1.png · SHA16 `a0da3eb2…` | **PASS** — **0** REV-UI-LKP-01 |
| 🔍 Xem → grid assets · Tổng 12 · toolbar chart/print/config | QA-20.png · SHA16 `a3d4eaa8…` | **PASS** |
| Helper «Đoạn dump (Km…)» khi mode dump | S0 · QA-20 | **PASS** (FIL-04) |
| Toolbar Làm mới / In / Sửa config **ngoài** filter host | S0 · QA-20 | **PASS** (GAP-FILTER-BAR-08) |
| **0** CREATE/EDIT English · VN copy empty | S0 | **PASS** — **0** REV-UI-HDR-01 / VI-01 |
| PNG hashes match `qa/screens/manifest.json` | SHA256_16 distinct | **PASS** |

## Code SSOT re-audit

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` kind=`report` · `listLayoutVariant=erp-filter-bar` | **PASS** |
| `LinErpListFilterBar` + fragment `leading` · **0** `ErpListHeaderFilters` | **PASS** |
| Fields 1:1 CTX: family · kind · route · zone · segment · search · Kỳ · 🔍 Xem | **PASS** |
| Tuyến `excludeRouteKinds=NHANH,TRANH,GOM` | **PASS** (`ROAD_ROUTE_LOOKUP_CONFIG`) |
| Cascade: route → clear zone+segment · zone → clear segment | **PASS** (`handleRouteChange` / `handleZoneChange`) |
| FE QS `zoneOrgCode`/`segmentCode` · BASE `/report` | **PASS** (`endpoint.qs` · `requestModel`) |
| BE Search `excludeRouteKinds` comma CI | **PASS** (`RoadRouteService.SearchAsync`) |
| BE Xem `ResolveHubRouteFilterAsync` segment/zone semantics | **PASS** |
| **0** `ERP.*` · **0** `api/v1/rmms` · **0** invent-seed this pack | **PASS** (grep) |
| **0** `window.alert`/`confirm` · toast on fail | **PASS** |
| Migration Schema_* | **n/a** · **0** this pack |
| Form Full/Slideout | **OUT** Kind E hub — **n/a** FORM-GRID / SLIDE / TB-ZONES |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-Q-01 | query | — | Xem assets/incidents/checkins `zoneOrgCode`/`segmentCode` + route/period/search | `ReportQueryController` + `ResolveHubRouteFilterAsync` | **OK** |
| REV-Q-02 | query | — | Search road-routes `excludeRouteKinds` filter after load | `RoadRouteService.SearchAsync` | **OK** (catalog nhỏ) |
| REV-Q-03 | query | P1 | Zone 0 gán → no-op (không hẹp route) · overlap km chưa | SA/DEV semantics · GAP-RPT-FIL-03 | Accept · chờ data gán peer — **không P0** |
| REV-S-01 | security | P2 | `[RequirePermission]` TODO CommonLib ≥1.4.0 | `ReportQueryController` (peer debt) | Debt — **không P0** |
| REV-S-02 | security | — | BFF forward Auth + `X-Company-Id` · path Report/Integration only | BFF + FE BASE | **OK** |
| REV-S-03 | security | — | **0** secrets · **0** ERP.* / rmms | grep Report MFE + Domains/Report | **OK** |
| REV-UI-01 | ui-fn | — | Kind E A–D + filter V1–V5 · empty → Xem | `ReportListPage` + S0/QA-20 | **OK** |
| REV-UI-02 | ui-fn | — | Zone/segment SearchInput · FIL-04 helper dump | `ReportFilterBar` + S0/S1 | **OK** |
| REV-UI-03 | ui-fn | — | Toolbar ≠ filter · **0** export on bar | `reportToolbar` + QA | **OK** |
| REV-UI-LKP-01 | ui-fn | — | Khu dropdown MÃ+TÊN · config `getSingleDisplay=label` | S1 + `ZONE_ORG_LOOKUP_CONFIG` | **OK** (`showSecondaryInput=false` single) |
| REV-UI-LKP-DISPLAY-01 | ui-fn | info | Controlled `primaryDisplay={code}` khi value set (route/zone/segment) | `ReportFilterBar` | Single-mode + getDetail label — **không P0** (QA LKP PASS) |
| REV-BE-01 | be-fn | — | Domain Report + Integration Search extend · **0** Schema_* | Controller + Service | **OK** |
| REV-BFF-01 | be-fn | — | Proxy QS sẵn · **0** BFF code this pack | T-BFF-01 verify Dev | **OK** |
| REV-INFO-01 | ui-fn | info | CTX testId `rmms-reports-hub` · live `rmms-report-list` | GAP-QA-TESTID-01 | Alias parent hub — **không** reopen |
| REV-INFO-02 | process | info | Packet URL `:9301/reports-filter-bar` vs `route_a` `/bao-cao` :9311 | GAP-QA-PKT-URL-01 | STATUS SSOT wins |

**P0:** none.

## Query (`/review-query`)

- Field SSOT: `family`/`kind`/`routeId`/`zoneOrgCode`/`segmentCode`/`search`/`period`/`from`/`to`/`page`/`pageSize` — khớp DTO FE↔BE↔SA.
- Xem chỉ sau `viewed` (`applyAndView`) — OK.
- N+1: hub filter in-memory seed + zone scope Distinct — chấp nhận hub; warehouse EF OOS.
- Lookup: Tuyến exclude NHANH/TRANH/GOM · Khu REG · Đoạn managed|dump — OK.
- Zone 0 assignment = no-op (documented) — REV-Q-03 P1 info.

## Security

- Path Report + Integration only · **cấm** ERP.* / rmms — grep PASS.
- Permission attribute **debt** P2 (REV-S-01).
- Secrets: none in Report filter sources.
- IDOR: Kind E list query — không GetById CRUD this pack · xco_na.

## UI / BE function

- Zone B filter: family · kind · route · zone · segment · search · Kỳ · 🔍 Xem.
- Cascade clear + `viewed=false` khi đổi route/zone/family.
- Toolbar Làm mới / chart / print / config / Excel(checkins) — parent keep · OUT change wire.
- QA T-QA-RPT/FILTER/TYP PASS · Review **không** re-run e2e.

## Gates

| Gate | Result |
|------|--------|
| Version recheck | **PASS** — workflow **2026.08.30.01** · agent-review **2026.08.30.01** · rules **2026.08.30.6** · `rechecked` |
| Prior design/sa/tl/dev/qa | **confirmed** / **PASS** |
| SSOT Kind E shell + filter HARD | **PASS** (code + PNG) |
| FormType LKP/FILTER (hub) | **PASS** |
| Path guard Report/Integration · **0** ERP.* | **PASS** |
| Prototype + reviewUrl | **PASS** (prior design) |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| VERIFY yarn build/e2e/start:std | **SKIP** — roleOnly=review · dùng QA evidence |
| autoApprove `review_confirm` | **approve** |

## Verdict

**PASS** · **approve** · không P0. Debt P1–P2 (zone overlap data · RequirePermission · testId alias · packet URL) đã ghi — **không** `fix_gaps`.

Pipeline reports-filter-bar **complete** (data-analy → … → review).

## Confirm

`review_confirm` = **approve** (autoApprove ON · không AskQuestion).

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | không assign Dev |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.30.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| reviewHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T16:36:26.991Z |
| versionGate | rechecked |
| taskId | task_004a1fdd |

---
<!-- Version meta: skillId=agent-review skillVersion=2026.08.30.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked reviewHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_004a1fdd -->
