# Design — asset-collect

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-COLLECT-PACK-01 · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| taskId | `task_c6bccf74` |
| priorPo | `po/requirement.md` **confirmed** · contentHash `sha256:asset-collect-po-requirement-20260830` |
| priorDa | `_data-analy/asset-collect-control-hint.md` + `asset-collect-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:asset-collect-control-hint-20260830` |
| realDataHash | `sha256:asset-collect-real-data-20260830` |
| demoContentHash | `sha256:mobile-p1-sc-asset-collect-20260830` |
| updatedAt | `2026-08-31T00:00:00.000Z` |

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-collect/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-collect/ui/prototype/ios/index.html?deny=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-collect/ui/prototype/android/index.html` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-collect/ui/prototype/android/index.html?deny=1` |
| Workflow (ref) | mobile-p1 `#sc-asset-collect` | cite only · hash skip · **cấm** re-crawl |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tài sản** | icon-btn chevron only (parity OK · HIG vs Material) |
| Title | inline **Thu thập thủ công** 17 | TopAppBar **Thu thập thủ công** ~20 |
| Shell | Tab 5 · tab **`home`** (Trang Chủ) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-asset-collect` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-ASSET-COLLECT` | Screen owner `#sc-asset-collect` | push từ hub tile Thủ công | same | `data-tab="home"` |
| typeSelect | Loại tài sản * | `LinmSelect` | same | GET `integration/asset-types` · code bind · demo options = preview only |
| nameField | Tên / mô tả * | `LinmTextField` | same | → `Name` · label 13 / value ≥16 |
| routeKm | Tuyến / lý trình * | TextField readonly | same | display · wire `Route`+`KmFrom` |
| gpsPin | Định vị ghim tự động * | TextField readonly | same | Lat,Lng · ±m · **cấm** gõ tay |
| statusField | Tình trạng | `LinmSelect` | same · **Design đóng GAP-STATUS-01** | init-data Statuses · default `tot` / «Tốt» |
| photoLabel | Ảnh | SectionLabel 13 | same · **Android thêm** | parity |
| PhotoRow | slots | PhotoRow pattern | same | local only P1 |
| Camera | `#i-camera` | CameraButton | same | `openCapture('asset')` |
| btnAdd | Thêm tài sản | `LinmPrimaryButton` | same | POST create · busy |
| Toast OK / Err | banner | `LinmToast` | same | Code từ response · **cấm** fake 200 |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog card | deny · CTA off |
| `DES-MOB-LEAVE` | dirty leave | in-app modal | same | **cấm** system alert |
| Entry tile | Thủ công `#i-plus` | reuse `asset-hub` | same | wire `go('asset-collect')` · **không** reimplement hub |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | body + circle r=3.5 | `camera` | `PhotoCamera` |
| `#i-plus` | `M12 5v14M5 12h14` | `plus` | `Add` · hub entry |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Thu thập thủ công** |
| Back (iOS) | **Tài sản** |
| Type label | **Loại tài sản *** |
| Type demo options (preview) | Cột km · Biển báo · Cống · Hộ lan · Cầu |
| Name label / value | **Tên / mô tả *** / **Cột Km 1556** |
| Route label / value | **Tuyến / lý trình *** / **QL.1 · Km 1556+000** |
| GPS label / value | **Định vị ghim tự động *** / **11.5300, 109.0040 · ±5 m** |
| Status label | **Tình trạng** |
| Status options | **Tốt** (default `tot`) · Theo dõi · Cần bảo trì |
| Photo label | **Ảnh** |
| Primary | **Thêm tài sản** |
| Toast OK | **Đã thêm tài sản · TS-20260818-021** (bind `{Code}`) |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Leave title / body | **Bỏ thay đổi?** / **Nội dung chưa lưu sẽ mất…** |
| Leave primary / secondary | **Bỏ thay đổi** / **Tiếp tục sửa** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake lat/lng · sheet pack chrome · hardcode demo options khi BFF live.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron · iOS back text «Tài sản» |
| `.field` select (type / status) | `LinmSelect` | label 13 · value ≥16 |
| `.field` input | `LinmTextField` | name editable · route/gps readonly |
| `.section-label` | SectionLabel Text 13 | **Ảnh** dual |
| `.photo-row` / `.photo-slot` | **PhotoRow** pattern | `kit_missing_confirm` **approve** |
| camera slot `#i-camera` | CameraButton / IconButton | `openCapture('asset')` |
| `.btn-primary` | `LinmPrimaryButton` | Create · `isBusy` |
| toast | `LinmToast` | OK / Err |
| `#modal-gps` | feature modal reuse `DES-MOB-GPS-DENY` | **cấm** `UIAlert` / `AlertDialog` |
| `#modal-leave` | feature modal reuse `DES-MOB-LEAVE` | dirty leave |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell · **home** active |
| Hub tile Thủ công | `LinmHubTile` `#i-plus` | entry · owner `asset-hub` |

### kit_missing_confirm (PhotoRow)

**approve** · autoApprove=ON · PhotoRow = horizontal media slots + camera `#i-camera` · **không** bắt buộc package `LinmPhotoRow` P1 nếu kit chưa ship — Dev compose từ Image / IconButton theo map · **cấm** invent tên kit lạ · **cấm** invent media upload API.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Create = POST `asset/road-assets` · Type/Name/Route/GPS/Status/Photo = cùng slug (`GAP-MOB-ACT-07`). Entry hub **không** enqueue.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Catalog loại TS | `GET integration/asset-types` |
| Init status | `GET asset/road-assets/init-data` |
| Prefill tuyến (optional) | `GET patrol/sessions` / `integration/road-routes/search` |
| Create | `POST asset/road-assets` · `Source=manual` |
| GPS / camera / toast / nav | device · local |
| Media upload | **OUT P1** · GAP MEDIA-01 · SA |

**Cấm** invent `api/v1/asset-collect` · ERP.* · `mfeStdUrl` · Finance `api/v1/assets`.

## Out of pack

| Item | Owner |
|------|-------|
| `#sc-asset-ai` / adjust / list / detail | sibling packs |
| Invent media upload path | SA · MEDIA-01 |
| Bottom-sheet chrome | **cấm** (packKind screen) |
| Fake lat/lng · Source=`ai` | **cấm** |
| Hub form / reimplement hub | reuse `asset-hub` only |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `design_confirm` | autoApprove=ON | **approve** |
| `kit_missing_confirm` PhotoRow | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · Status dual Android · photo label Android · packKind **screen** · hash skip · không re-scan demo · không sheet · không invent API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T00:00:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-design-20260831 |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| priorPoHash | sha256:asset-collect-po-requirement-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-collect-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
