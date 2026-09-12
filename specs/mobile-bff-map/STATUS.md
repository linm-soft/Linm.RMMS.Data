# STATUS — mobile-bff-map

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| phase | `done` |
| status | `done` |
| taskId | `task_35db1343` |
| packKind | `map` |
| stack | `native_dual` |
| stackSkill | `/implement-map-stack` Wave 2 `mobile_bff` → Wave 3 `mobile` |
| context | `docs/context/features/mobile-bff-map.md` |
| plan | `docs/plan/mobile-bff-platform-integrate/PLAN.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| ios | `Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/gis/tiles` |
| backend | MapService `:5021` + RMMS Gis `{AssetDb}` — **cấm ERP.*** |
| updatedAt | `2026-09-12T09:45:27.541Z` |
| lastRole | `review` · **confirmed** · `task_35db1343` · `/agent-review-mobile` · autoApprove · `review_confirm=approve` · Must=0 |
| contentHash | `sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` |
| prototype.reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/ios/index.html#zone-tileurl-note` |
| prototype.reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/mobile-bff-map/ui/prototype/android/index.html#zone-tileurl-note` |
| prototype.artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Stack waves (mobile BFF)

| Wave | Name | Confirm | Status | at |
|------|------|---------|--------|-----|
| 1 | map_service | peer `map-service` | **không** trong slug này | — |
| 2 | bff_service | `wave2_host=mobile_bff` | **PASS** · T-BE-MAP-BFF | 2026-09-12T07:01:31.000Z |
| 3 | integrate_bff | `wave3_client=mobile` | **PASS** · T-IOS/T-AND-MAP-TILE | 2026-09-12T07:01:31.000Z |
| 4 | map_ui | peer `gis-osm-clip` / `gis-map` | **không** pack slug này | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy-mobile | `_data-analy/mobile-bff-map-{control-hint,bff-endpoints,real-data,action-tree}.md` · `handoff/data_analy-compact.md` | **PASS** |
| 1 | po | `po/requirement.md` · `handoff/po-compact.md` | **confirmed** |
| 1b | design | `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · `prototype/ios/index.html` · `prototype/android/index.html` · `handoff/design-compact.md` · `ui/review/demo-parity.md` | **confirmed** |
| 2 | sa | `be/solution-discovery.md` · `handoff/sa-compact.md` · `solution_confirm=approve` | **confirmed** |
| 3 | team-lead | `task/mobile-bff-map.md` · `handoff/team_lead-compact.md` | **confirmed** |
| 4 | dev | `implement/ios.md` · `implement/android.md` · `handoff/dev-compact.md` · BFF GisTiles | **confirmed** |
| 5 | qa | `qa/scenarios.md` · store CAPTURE · `handoff/qa-compact.md` · e2e dual | **confirmed** |
| 6 | review | `review/findings.md` · `handoff/review-compact.md` · `REVIEW-META.json` | **done** |
## tasks[]

| id | layer | status | owner slash | deps |
|----|-------|--------|-------------|------|
| T-BE-MAP-BFF | be | **PASS** | `/implement-map-stack` | — |
| T-IOS-MAP-TILE | ios | **PASS** | `/agent-dev-ios` + OMS R2 | T-BE-MAP-BFF |
| T-AND-MAP-TILE | android | **PASS** | `/agent-dev-android` + OMS R2 | T-BE-MAP-BFF |
| T-QA-MAP-01 | qa | **PASS** | `/agent-qa-mobile` | T-BE + T-IOS + T-AND |
| T-REVIEW-SEC | review | **PASS** | `/agent-review-mobile` | T-QA-MAP-01 |
| T-REVIEW-DTO | review | **PASS** | `/agent-review-mobile` | T-QA-MAP-01 |
| T-REVIEW-ALIGN | review | **PASS** | `/agent-review-mobile` | T-QA-MAP-01 |

## Blockers / open questions

- MapService `:5021` **DOWN** at QA — tile curl 404 · **debt** (clone `{ApiCore}/Linm.Platform.MapService`) · Review **Accept**.
- **Cấm** `AddLinmMapServiceBffControllers`.
- `gis-map` pipeline **done** = overlay RMMS — **không** = clip MapService.
- Gaps closed Wave 2–3: GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01 (TileUrl).
- Debt: MVT paint Wave 4 · osmdroid/MapKit decode · live MapService clip · overlay JWT hop.
- SA: TZ/XCO/SHARE = na · migration N/A · API-01 NEW tile proxy · API-02..04 keep.
- TL: `route_confirm=route_reuse` · repos path · **không** scaffold.
- QA: e2e `ok:true` · visual Must 0 · peer `#sc-gis-map` · Android IME Enter login.
- Review: `review_confirm=approve` · Must align 0 · P0=0 · crawl skip roleOnly · no GAP-MOB-ACT-03.

## Links

- Web pattern: `LINM.RMMS.Gis.Bff/Controllers/GisBffController.cs`
- Analy: `specs/_data-analy/mobile-bff-map-*.md`
- Compact: `handoff/data_analy-compact.md` · `handoff/po-compact.md` · `handoff/design-compact.md` · `handoff/sa-compact.md` · `handoff/team_lead-compact.md` · `handoff/dev-compact.md` · `handoff/qa-compact.md` · `handoff/review-compact.md`
- PO: `specs/mobile-bff-map/po/requirement.md`
- Design: `specs/mobile-bff-map/ui/design.md` · reviewUrl ios/android `#zone-tileurl-note`
- SA: `specs/mobile-bff-map/be/solution-discovery.md`
- Task: `specs/mobile-bff-map/task/mobile-bff-map.md`
- Implement: `implement/ios.md` · `implement/android.md`
- QA: `qa/scenarios.md` · `qa/store/mobile-bff-map/` · `qa/e2e/{ios,android}.yaml`
- Review: `review/findings.md` · `review/REVIEW-META.json`
- Next: **done** · pipeline complete
