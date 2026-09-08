# Data-analy — controlHint — traffic-sign-type (Loại biển báo · QCVN 41)

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| packKind | `master` |
| mode | `feature_context` (queue `roleOnly=data_analy` · **DEM N/A** · CTX P0 + live Master MFE/BE) |
| changeScope | `new_page` (pipeline greenfield docs · live scaffold đã có — bind SSOT) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| versionGate | `rechecked` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| headerFingerprint | `sha256:csv:code,name,name_en,group_code,shape,width,height,sort_order` |
| analyzedAt | `2026-09-06T02:20:00.000Z` |
| cluster | — (master catalog · seed CSV `gov-vn` · **không** Excel raw scan) |
| taskId | `task_6a62b9b6` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/traffic-sign-type-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `ui_repo_confirm` locked Master |
| mfeStdUrl | `http://localhost:9318/mas/loai-bien-bao` |
| mfeStdRoute | `/mas/loai-bien-bao` |
| runMode | `full_pipeline` · Autopilot ON · e2eQa queued |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype/reviewUrl. SA **chốt** DOMAIN-MAP row (thiếu slug).  
> **DEM N/A** (`master-catalog-no-demo.md`) — **cấm** đòi DEM-* · **cấm** GOVOne chrome · **cấm** demo-json SSOT.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** seed / invent mã không có trong dump · **cấm** bịa pict icon.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/traffic-sign-type.md` | `e3aada6d…` (contentHash) |
| Import seed | `data-import/so-hieu-bien-bao/traffic_sign_types.csv` | ~380 dòng · header fingerprint |
| Excel SSOT | `data-import/so-hieu-bien-bao/Số hiệu biển báo.xlsx` | cùng seed `gov-vn` |
| Peer CTX | `so-ts-traffic-sign.md` · `master.md` · `import-gov-ssot.md` | consumer TRAFFIC_SIGN |
| MFE live | `Linm.Web.RMMS.Master` `/mas/loai-bien-bao` | Kind B · Slideout form |
| BE live | `…/Integration/Controllers/TrafficSignTypesController.cs` | `api/v1/integration/traffic-sign-types` |
| Entity | `TrafficSignTypeEntity` · table `rmms_traffic_sign_types` | Type A share_a |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | **thiếu** slug `traffic-sign-type` → GAP-TST-DM-01 |

Normalized header (catalog + consumer):

`code|name|nameEn|groupCode|shape|width|height|icon|isActive|search|groupFilter`

## § Delta Current vs New (`new_page` · `task_6a62b9b6`)

| ID | Current (live 2026-09-06) | New (this pack) | Surface |
|----|---------------------------|-----------------|---------|
| GAP-TST-HINT-01 | stub `traffic-sign-type-control-hint.md` | Full controlHint Kind B + consumer SearchInput | data-analy |
| GAP-TST-REAL-01 | stub `traffic-sign-type-real-data.md` | §A+§B bind Integration live + CSV seed | data-analy |
| GAP-TST-DM-01 | DOMAIN-MAP **0** row slug | SA thêm → Integration `traffic-sign-types` | SA |
| GAP-TST-FORM-01 | Live form = **Slideout** (file `*FormModal*`) | Design chốt Modal vs Slideout (&lt;10 fields · peer Modal) | Design |
| GAP-TST-ICON-01 | `icon` NULL · **cấm** seed pict | Form Text URL/path — user config | PO/Design |
| GAP-TST-SEED-01 | Excel + CSV `gov-vn` | EnsureFromImportedAssets **chỉ thêm** mã dump thiếu — **không** ghi đè tên official | import |

**Không** đổi: Kind B CatalogListShell · leave-confirm dirty · toast not alert · DEM skip · ADMIN menu `rmms-master-loai-bien-bao` · Integration prefix.

## Kind / zones (handoff Design)

Pack **master** = Kind **B** catalog trên MFE Master host `:9318`. **Không** demo HTML.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Loại biển báo» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | `SearchTextInput` mã/nội dung · `Dropdown` nhóm P/W/R/I/S · Tạo mới · Refresh · schema config |
| C | Grid | cột: mã · nội dung · rộng · dài · nhóm · hình dạng · icon · hiệu lực · row menu Xem/Sửa/Copy/Lịch sử |
| D | Pagination | flat list · pageSize 50/100/200/500 |
| Form | Slideout live (Design confirm) | C/E/V/Copy · footer Lưu/Hủy · leave-confirm · View readonly |

**Skip chrome:** GOVOne · Signed demo · hub nav skin demo.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã biển · nội dung CI |
| groupCode | Nhóm QCVN | `Dropdown` | LOOKUP_STATIC / init-data | P · W · R · I · S · KHAC |

## Control hint — form fields (P0)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã biển | `Text` code | * | = Excel **Mã biển báo** = dump `sign_code_number` · giữ case · lock khi edit |
| name | Nội dung biển báo | `Text` | * | Excel **Tên tiếng việt** SSOT = dump `road_sign_content` |
| nameEn | Tên tiếng Anh | `Text` | | Excel **Tên tiếng anh** — **cấm** dịch thêm |
| groupCode | Nhóm QCVN 41 | `Dropdown` | * | P/W/R/I/S · fallback prefix mã · init-data |
| shape | Hình dạng | `Text` | | Excel **Hình dạng** / dump `shape_sign_id` |
| width | Chiều rộng | `Text` / Number | | khổ chuẩn danh mục — **không** = kích thước lắp đặt asset |
| height | Chiều dài | `Text` / Number | | khổ chuẩn danh mục |
| icon | Icon | `Text` URL/path | | default `NULL` · user config · **cấm** seed pict |
| isActive | Hiệu lực | `Switch` | | |

## Control hint — consumer (Sổ TS / Asset TRAFFIC_SIGN · 2li)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| trafficSignTypeCode | Mã biển báo | `SearchInput` | **traffic-sign-type** | mã + nội dung · `createTrafficSignTypeSearchConfig` |
| roadSignContent | Nội dung | derived / readonly | — | từ catalog `name` khi chọn mã — **cấm** free-text khi đã có master |

## Gaps / open Q (handoff PO)

| ID | Severity | Note |
|----|----------|------|
| GAP-TST-DM-01 | P0 | DOMAIN-MAP thiếu slug `traffic-sign-type` dù controller live |
| GAP-TST-FORM-01 | P1 | Live Slideout vs peer Modal Kind B — Design chốt |
| GAP-TST-ICON-01 | P0 | Icon trống tới user config — **cấm** invent pict |
| GAP-TST-SEED-01 | P0 | Chỉ seed từ Excel/CSV/dump có thật — **cấm** bịa mã |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| analyzedAt | `2026-09-06T02:20:00.000Z` |
| taskId | `task_6a62b9b6` |
| status | `done` |
