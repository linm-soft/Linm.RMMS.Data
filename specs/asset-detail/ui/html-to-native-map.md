# HTML → native map — asset-detail

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-asset-detail`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | iOS title **Chi tiết** · Android **Chi tiết tài sản** · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('asset-list')` · iOS text «Tài sản» + chevron · Android icon-only · **cấm** reimplement list |
| `.code-label` Mã TS | Caption Text **13** | fixed |
| `.code-value` TS-* | Display Text bold | iOS **28** · Android **24** · DTO `Code` |
| `.card-group` `.row` Loại | `LinmListRow` | `typeLabel(Type)` · unknown → raw `Type` |
| `.row` Tuyến · lý trình | `LinmListRow` | `"{Route} · Km {KmFrom}"` · optional `KmTo` · thiếu Route → «—» · **cấm** fake |
| `.row` Tọa độ | `LinmListRow` | `Lat`,`Lng` · format `"lat, lng"` · ẩn nếu null · **parity dual** · demo coords **chỉ** offline |
| `.btn-primary` Ghim trên bản đồ | `LinmPrimaryButton` | `go('gis-map')` · pass Id/Lat/Lng · toast P1 nếu chưa ship |
| toast | `LinmToast` | GET fail · sibling toast · **cấm** `window.alert` |
| empty 404 | `LinmEmptyChrome` | NotFound · back list |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Trang Chủ** · label **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| code | `Code` raw (TS-*) |
| type | `typeLabel(Type)` client · unknown → raw `Type` · **không** lookup API P1 |
| routeKm | `"{Route} · Km {KmFrom}"` · nếu có `KmTo` append · thiếu Route → «—» · **cấm** fake |
| gps | nếu `Lat`/`Lng` có → `"lat, lng"` · else **ẩn** row · **cấm** invent coords khi live OK · demo coords **chỉ** fallback offline |
| pinMap | nav · pass `Id` + Lat/Lng nếu có |
| empty404 | GET 404 |
| toastErr | GET network/5xx/403 · **cấm** fake 200 |
| nav key | `Id` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/asset-detail` · Finance `api/v1/assets` · bottom-sheet chrome · PUT/DELETE · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T21:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| taskId | `task_039c59ba` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
