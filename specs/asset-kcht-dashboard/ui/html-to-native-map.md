# HTML → native map — asset-kcht-dashboard

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-asset-kcht` · web `/so-ts/hang-muc`):

| Demo / web | Kit dual | Notes |
|------------|----------|-------|
| `LinPageLayout` H1 «Hạng Mục Kết Cấu Hạ Tầng» | `LinmTopBar` | Copy `asset.kcht.title` «Hạng mục KCHT» · leading back hub · `#sc-asset-kcht` |
| `.grid` 4-col · 40 `KCHT_TILES` | `LazyVStack` / `Column` 1 cột | Phone 1 cột · **cấm** 4-col desktop SSOT |
| Card pict GIS `iconCode` | `LinmAssetKchtPict(code:)` | Closest RMMS type code (PAVEMENT, BRIDGE, …) · **cấm** Font Awesome / emoji |
| Card label | `LinmCopy.t("asset.kcht.t01"…"t40")` | JSON `mobile-strings.json` · **cấm** VN literal |
| Card count `vi-VN` | `NumberFormatter` / `NumberFormat` `vi_VN` | Fail source → `asset.kcht.countUnknown` «—» |
| Card tap (web drill) | **OUT native** | Display-only · **cấm** `Button` / `clickable` / toast gap-soon on card |
| Loading skeleton | `LinmBusyOverlay` | **cấm** fake 0 while loading |
| Partial fail | `LinmToast` | `asset.kcht.toast.loadFail` only |
| Counts | BFF only | `GET asset/road-assets/summary-by-type` · `integration/road-routes` · `asset/pavement-sections` · **cấm** invent hub aggregate |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm** WebView HTML · invent `AssetHubController` · gộp sibling screens.
