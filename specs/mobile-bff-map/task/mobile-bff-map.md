# Team lead — Task — mobile-bff-map (Wave 2 BFF tile + Wave 3 TileUrl)

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| title | [Mobile] [BFF Map] → Proxy MVT tiles + dual TileUrl |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`map`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **map** · **không** `#sc-*` mới · DES-MOB-TILEURL-NOTE `#zone-tileurl-note` · OMS **R2** TileUrl BFF · **cấm** Kind list CRUD / invent tab / Wave 4 UI |
| route_confirm | **route_reuse** (autoApprove=ON) — **không** deep link / tab mới · peer `gis-map` / `patrol-map` chỉ đổi TileUrl config · Tab 5 giữ · **cấm** mfeStdUrl |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **path** (repos đã có · **không** `scaffold_new`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **path** (repos đã có · **không** `scaffold_new`) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · queued `/agent-qa*` · curl tile + dual OS smoke · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở role TL |
| prior · data_analy | **confirmed** · `_data-analy/mobile-bff-map-{control-hint,bff-endpoints,real-data,action-tree}.md` · `handoff/data_analy-compact.md` · contentHash `sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_f45d7dcb` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual prototype `#zone-tileurl-note` · `handoff/design-compact.md` · `task_d741af34` · `design_confirm=approve` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_825b8a3d` |
| taskId | `task_1d5e2e5a` |
| updatedAt | `2026-09-12T06:54:11.000Z` |
| thisAction | **1 slug** Wave 2 Mobile.Bff MapService tile proxy + Wave 3 dual TileUrl · **cấm** gộp Wave 4 / draw / Twin / re-enqueue `gis-map`/`patrol-map` |

**Cấm:** gộp list/draw/heatmap/Twin (`GAP-MOB-ACT-01/02`) · invent `api/v1/map-service/*` · `AddLinmMapServiceBffControllers` · app gọi `:5021` · `ERP.*` · `mfeStdUrl` · OSM.org/Esri/Google tile release (`GAP-MAP-OSM-CDN-01`) · enqueue basemap chrome peer (`GAP-MOB-ACT-07`) · start sibling map slug (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` · `T-KIT-*` · e2e / `yarn start:std` ở TL · Step 4b / migration · Write native/BFF code (trừ task MD).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm=path` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm=path` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · `:5202` |
| be (RMMS overlay) | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · catch-all non-tile · **cấm ERP.*** |
| mapService | `:5021` · BFF-only hop · app **không** biết |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Bearer + `X-Company-Id` + `X-Timezone` · guest `basemap` · overlay JWT |
| kit | reuse peer map chrome · **không** `T-KIT-*` · TileUrl = config path only |
| scaffold | repos **đã có** · **không** `scaffold_new` |
| Step 4b | **N/A** — migration none · API-01 NEW trên **Mobile.Bff** (không WebService schema) |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_reuse** (chọn) | **Không** screen / tab / deep-link mới. Peer `#sc-gis-map` / patrol map **giữ** route đã ship · chỉ đổi `TileUrl` → `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf`. Tab 5 shell giữ. |
| route_a | — không dùng (không push screen mới) |
| route_b | — không dùng (`mfeStdUrl` / web) |
| route_c | — không dùng (không invent tab Bản đồ) |

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm=path` · `android_repo_confirm=path` · `route_confirm=route_reuse` · `version_mismatch_action=recheck_new` · `2026-09-12T06:54:11.000Z`.

---

## FormType pack (`map`) — mobile bind

Cite `form-type-task-pack.md` §2b · `agent-dev-assign.md` · OMS R1–R11 (R2 HARD).

| Canonical (web pack) | Mobile TL id | Role | `devSlash` |
|----------------------|--------------|------|------------|
| T-BE-GIS-01 | **T-BE-MAP-BFF** | Dev | `/implement-map-stack` (`wave2_host=mobile_bff`) |
| T-UI-MAP-01 (TileUrl only) | **T-IOS-MAP-TILE** | Dev | `/agent-dev-ios` + OMS R2 (`/agent-dev-oms-map`) |
| T-UI-MAP-01 (TileUrl only) | **T-AND-MAP-TILE** | Dev | `/agent-dev-android` + OMS R2 (`/agent-dev-oms-map`) |
| T-UI-MAP-FORM-01 | **n/a** | — | no attribute/draw form this slug |
| T-PERM-01 | **n/a** | — | reuse existing map perms · guest basemap |
| T-UI-UX-01 | cite in DoD | Dev | dual OS chrome peer · **GAP-DEV-UX-01** |
| T-QA-MAP-01 | **T-QA-MAP-01** | QA | `/agent-qa-mobile` (queued · **cấm** TL chạy) |

Analy aliases (cùng DoD · **không** enqueue riêng): `T-MAP-BFF-01..05` ⊂ **T-BE-MAP-BFF** · `T-MAP-APP-01` = **T-IOS-MAP-TILE** + **T-AND-MAP-TILE**.

---

## Tasks

### T-BE-MAP-BFF — Wave 2 Mobile.Bff tile proxy

| Field | Value |
|-------|-------|
| id | `T-BE-MAP-BFF` |
| layer | `be` · repo `Linm.RMMS.Mobile.Bff` |
| deps | none (Wave 2 first) |
| skills | `/implement-map-stack` · Ask `wave2_host=mobile_bff` **trước code** |
| ssot.zones | `#zone-tile-basemap` · `#zone-tile-overlay` · API-01 |
| FormMode↔API | MapTile/TileUrl → `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService · peer geo → API-02/03/04 **keep** RMMS |

**Checklist (analy T-MAP-BFF-01..05):**

1. `ServiceEndpoints:MapService` local `:5021` · Docker `host.docker.internal:5021` · compose env  
2. PackageReference `Linm.Platform.MapService.Bff` pin parity Web · `AddLinmMapServiceBff` — **cấm** ProjectReference · **cấm** `AddLinmMapServiceBffControllers`  
3. Proxy `GET mobile-bff/api/v1/gis/tiles/…` parity `GisBffController.GetTiles` · guest `basemap` · overlay JWT · catch-all **không** nuốt tiles → RMMS  
4. `gis/*` ≠ tiles (clusters/geojson/drawings) **giữ** `ApiBase` RMMS  
5. DoD **`dotnet build`** Mobile.Bff PASS · curl guest tile `:5202` 200 · overlay no JWT → 401  

Gaps closed: GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02.

### T-IOS-MAP-TILE — Wave 3 iOS TileUrl

| Field | Value |
|-------|-------|
| id | `T-IOS-MAP-TILE` |
| layer | `ios` · `{IosRoot}` |
| deps | **T-BE-MAP-BFF** PASS |
| skills | `/agent-dev-ios` · `/agent-dev-oms-map` (R2 HARD) |
| ssot.zones | DES-MOB-TILEURL-NOTE `#zone-tileurl-note` · `#zone-tile-url` · peer cite `#zone-peer-cite` |
| thisAction | Set `TileUrl` = BFF origin + path `gis/tiles/…` + JWT overlay · **reuse** `gis-map`/`patrol-map` hosts · **cấm** reimplement map UI · **cấm** OSM CDN |

**DoD:** `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS · TileUrl BFF only · 0 OSM.org/Esri/Google tile in release (`GAP-MAP-OSM-CDN-01`) · field parity Design note · offline blank ok.

### T-AND-MAP-TILE — Wave 3 Android TileUrl

| Field | Value |
|-------|-------|
| id | `T-AND-MAP-TILE` |
| layer | `android` · `{AndroidRoot}` |
| deps | **T-BE-MAP-BFF** PASS |
| skills | `/agent-dev-android` · `/agent-dev-oms-map` (R2 HARD) |
| ssot.zones | same DES-MOB-TILEURL-NOTE · dual parity iOS |
| thisAction | Same TileUrl BFF · **cùng turn** với iOS (T-MAP-APP-01) · **cấm** CDN · **cấm** start peer slug |

**DoD:** `gradlew` assemble PASS · TileUrl BFF + JWT · 0 CDN · parity iOS.

### T-QA-MAP-01 — QA (queued)

| Field | Value |
|-------|-------|
| id | `T-QA-MAP-01` |
| layer | `qa` |
| deps | T-BE-MAP-BFF · T-IOS-MAP-TILE · T-AND-MAP-TILE |
| skills | `/agent-qa-mobile` |
| scenarios | Guest basemap tile 200 · overlay 401 no JWT · dual OS no CDN · R2 smoke · MapService `:5021` up at verify |

**Cấm** chạy ở role TL / Dev e2e gate trừ QA.

---

## Dep graph

```
T-BE-MAP-BFF  ──►  T-IOS-MAP-TILE  ──┐
              └──►  T-AND-MAP-TILE  ──┴──►  T-QA-MAP-01
```

Wave 2 PASS rồi mới Wave 3. **Cấm** fake done.

---

## STATUS tasks[] (paste)

| id | layer | status | owner slash |
|----|-------|--------|-------------|
| T-BE-MAP-BFF | be | pending | `/implement-map-stack` |
| T-IOS-MAP-TILE | ios | pending | `/agent-dev-ios` |
| T-AND-MAP-TILE | android | pending | `/agent-dev-android` |
| T-QA-MAP-01 | qa | pending | `/agent-qa-mobile` |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:54:11.000Z |
| versionGate | ok |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_1d5e2e5a` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.09.05.03 schemaVersion=1 -->
