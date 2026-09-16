# HTML → native map — asset-adjust

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-asset-adjust` · `#md-asset-remove`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title **Cập nhật / bớt** dual same · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('asset-hub')` · iOS text «Tài sản» + chevron · Android icon-only · **cấm** reimplement hub |
| `.search` `#i-search` | `LinmSearchField` | placeholder **Tìm mã TS cần sửa hoặc bớt…** dual · debounce GET `?search=` |
| `.card-group` `.row` title | `LinmListRow` | `Code · typeLabel(Type)` · ≥**16** |
| `.row-sub` | ListRow subtitle | `Route · Km {KmFrom}` · **13** |
| `.btn-secondary` / text Sửa | SecondaryButton / TextButton | `go('asset-detail')` + Id · **cấm** PUT · thiếu Id → toast |
| `.btn-danger` / text Bớt | DangerButton / TextButton error | open `#md-asset-remove` · **cấm** system alert |
| `#md-asset-remove` modal | Modal / Dialog kit | title · body · Bớt khỏi sổ · Giữ lại |
| mdConfirm danger | Primary danger | DELETE `asset/road-assets/{id}` soft |
| mdCancel | Secondary | close modal |
| toast | `LinmToast` | ok Code / err · **cấm** `window.alert` |
| empty | EmptyState | GET empty list |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Trang Chủ** · label **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| search | query `search` → GET `asset/road-assets?search=` |
| rowAsset | `Code` · `typeLabel(Type)` · unknown → raw `Type` · **không** lookup API P1 |
| rowSub | `Route` · `Km {KmFrom}` · optional `KmTo` · **cấm** fake |
| btnEdit | nav · pass `Id` · **cấm** enqueue PUT |
| btnRemove | open modal · cache `Id` + `Code` |
| mdConfirm | DELETE `{id}` soft `IsActive=false` |
| toastOk | after DELETE 200 · display cached `Code` |
| toastErr | GET/DELETE network/5xx/403/404 · **cấm** fake 200 |
| empty | GET empty list |
| nav key | `Id` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/asset-adjust` · Finance `api/v1/assets` · bottom-sheet chrome · PUT edit UI P1 · hard delete · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T23:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-control-hint-20260830 |
| taskId | `task_6476a9ab` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
