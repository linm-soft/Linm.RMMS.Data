# Review — Findings — so-ts-interchange

| | |
|--|--|
| Feature | `so-ts-interchange` |
| Title | Sổ TS — Nút giao |
| Role | `review` · `/agent-review` |
| Status | **confirmed** |
| Verdict | **PASS** |
| packKind | `list` |
| changeScope | `new_page` |
| taskId | `task_4ae29f99` |
| review_confirm | **approve** (autoApprove ON) |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| reviewedAt | `2026-09-01T06:50:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |

## Scope

- Live: `/so-ts?type=INTERCHANGE` · alias `/so-ts-interchange` → Navigate
- API: `api/v1/asset/road-assets` (+ BFF proxy) · domain Asset
- Prior: data_analy→po→design→sa→TL→dev→qa **confirmed** · QA e2e S0/S1/QA-20 PASS
- Gates: `tz_na` · `xco_get_only` · `share_tenant`
- **Cấm** yarn build/e2e/start:std ở role này · hash skip: contentHash unchanged vs STATUS

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| Path giữ `asset/road-assets` | **PASS** | FE `endpoint.ts` BASE `/asset/road-assets` · **0** invent `api/v1/so-ts/*` |
| **Cấm ERP.*** | **PASS** | Asset domain only · Standalone mock refs Finance = comment only |
| List filter `?type=INTERCHANGE` | **PASS** | AssetListPage typeFromUrl · create/list query |
| Init-data LOOKUP delta | **PASS** | `intersectionTypes` · `intersectWiths` · `intersectionShapes` FE+BE |
| summary-by-type tile t23 | **PASS** | kchtTileConfig `INTERCHANGE` · drill asset-type |

## SEC

| Check | Result | Evidence |
|-------|--------|----------|
| sa_tz_gate `tz_na` | **PASS** | compact SA/QA · no TZ write surface |
| sa_xco_gate `xco_get_only` | **PASS** | no XCO invent |
| sa_shared_table `share_tenant` | **PASS** | RoadAsset shared · migration none |
| Auth | **DEFER** | GAP-IX-AUTH-01 · stub keep (Dev debt) |
| Soft DELETE + useAlert | **PASS** | QA T-QA-CRUD · LeaveConfirm · 0 native dialog |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| INTERCHANGE grid profile | **PASS** | HIDE type/kmTo/qty/unit · ENSURE IX cols · live-assert headerIx |
| Filter-bar type-lock | **PASS** | typeFilterHidden · title «Sổ TS — Nút giao» / «Danh sách nút giao» |
| Form S-ATTR · cols=5 | **PASS** | live-assert cols5 · intersectionType/With/Shape · traffic/median |
| kmTo ẩn · name←name_intersection | **PASS** | kmToVisible=false · nameIx · merge dumpSpecs |
| LeaveConfirmModal | **PASS** | AssetFormPage LeaveConfirmModal · QA leave AC |
| Alias redirect | **PASS** | `index.tsx` Navigate · S1 PASS |
| DTM 1280/768/375 | **PASS** | live-assert overflowX=false |
| Screens S0/S1/QA-20 | **PASS** | manifest ok=true · PNG present |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Prefix `NG-` | **PASS** | `DefaultCodePrefix` INTERCHANGE → `NG-` |
| Validate INTERCHANGE | **PASS** | name/kmFrom optional · `intersection_type_id` required |
| Init LOOKUP dump∪seed | **PASS** | RoadAssetService GetInitDataAsync Intersection* |
| DumpSpecs persist · no flatten P1 | **PASS** | migration=none · GAP-IX-FLAT-01 DEFER |
| dumpSpecLabels §4 | **PASS** | `name_intersection` + IX keys labeled |
| RebuildGovVn name_intersection | **PASS** | Dev implement cite · GAP-IX-NAME-01 |

## Gap triage

| ID | Sev | Disposition |
|----|-----|-------------|
| GAP-IX-FLAT-01 | P2 | **DEFER** — Schema flatten P2 |
| GAP-IX-AUTH-01 | P2 | **DEFER** — perm stub |
| GAP-QA-E2E-PW-01 | info | **ACCEPT** — chrome channel fallback · e2e contract PASS |
| P0 / fix_gaps | — | **none** |

## review_confirm

- **approve** · autoApprove ON · no board wait
- Downstream: phase may advance; **cấm** mark product `phase=done` từ packet QA note — Review PASS closes review step only
- Next ops (outside this role): rebuild+reimport DB nếu cần dump attrs live

## Full paths

- findings: `specs/so-ts-interchange/review/findings.md`
- compact: `specs/so-ts-interchange/handoff/review-compact.md`
- prior qa: `handoff/qa-compact.md` · `qa/scenarios.md` · `qa/screens/`
