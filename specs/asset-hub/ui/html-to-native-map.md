# HTML → native map — asset-hub

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-asset-hub`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` · title **Tài sản** | `LinmTopBar` | Back «Trang Chủ» → `home` · tap 44 |
| `.wallet-card` · DES-MOB-ASSET-WALLET | `LinmWalletCard` | display only trên hub · **không** tap nav · iOS line 3 patrol demo |
| `.hub-grid` / `.hub-tile` | `LinmHubTile` | icon + `iconColor`/`background` hex · title + subtitle · hàng 2 cột **stretch cùng height** · subtitle **2 dòng** · iOS `HStack` + `maxHeight: .infinity` · Android `LinmHomeGrid` `IntrinsicSize.Min` + `fillMaxHeight` · **cấm** raw grid · **cấm** revert height-auto per tile (`GAP-MOB-AHUB-ALIGN-01`) |
| `.section-label` | `LinmSectionLabel` | Thu thập · Quản lý · Chờ xác nhận AI |
| `.card-group` / `.row` (map) | `LinmListRow` | Bản đồ tài sản · cùng slug `gis-map` |
| `.row` AI + `.btn-primary` | `LinmListRow` + `LinmPrimaryButton` compact | ẩn section khi 0 Draft |
| toast | `LinmToast` | sibling nhãn PO §3.7 · **cấm** `UIAlert` / `AlertDialog` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm** WebView HTML · invent `AssetHubController` · gộp sibling screens.
