# PO — Requirement — estimate (mobile sheet → screen · Giao việc xử lý)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO chốt · form giao việc từ mnt-list / incident CTA · **đóng** GAP-MOB-EST-PACK-01 ≠ web `list` Kind B+D) · surface demo = **full screen** `#sc-estimate` (`.screen` · **không** bottom-sheet chrome) |
| stack | `native_dual` |
| thisAction | **Giao việc xử lý** `#sc-estimate` only · owner `DES-MOB-EST` · entry mnt-list hub/card `#i-sum` · incident-create/detail CTA · **cấm** gộp web Kind B list / Kind D multi-line · `mnt-chat` / `mnt-progress` / `mnt-log` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_5338c2be` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/estimate` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/estimate-control-hint.md` · `estimate-bff-endpoints.md` · `estimate-action-tree.md` · `estimate-real-data.md` · contentHash `sha256:estimate-mobile-control-hint-20260829` · real-data `sha256:estimate-mobile-real-data-20260829` · action-tree `sha256:estimate-mobile-action-tree-20260829` · ctxContentHash `sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` · cluster `specs/estimate/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/estimate-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| priorWeb | **giữ** · `po/requirement-web.md` (+ `ui|be|task|implement|qa|review` web · `_data-analy/features/estimate-control-hint.md`) · Kind B list + Kind D multi-line — **OUT** mobile P1 |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T04:25:00.000Z` |
| taskId | `task_5338c2be` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/estimate` / `api/v1/ai-estimate` · invent `EstimateController` trên Mobile.Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Giao việc / Lưu nháp / fields (`GAP-MOB-ACT-07`) · fake toast CV-* khi POST fail · gộp web Kind B/D · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Giao việc xử lý** native dual (iOS SwiftUI + Android Compose): từ sự cố / danh sách công việc → prefill header SC · giao cho · khối lượng · đơn giá · thành tiền · SLA/hạn → **Giao việc** tạo WO (+ assign) · hoặc **Lưu nháp** estimate. Persona: Tuần đường · Hạt · điều phối hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**≠** Web AI ước lượng Kind B catalog + Kind D multi-line slideout — mobile P1 = **1** qty/price row giao việc.

**1 action = 1 feature.** Slug `estimate` = screen `#sc-estimate` `DES-MOB-EST`. **Cấm** gộp `mnt-list` list · `mnt-chat` / `mnt-progress` / `mnt-log` · web Kind B/D (`GAP-MOB-ACT-01`). Header / fields / Giao việc / Lưu nháp = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`). **Không** child sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**).

Entry: `mnt-list` hub **Giao việc xử lý** + card `#i-sum` · `incident-create` / `incident-detail` CTA «Giao việc xử lý» → push `#sc-estimate` (reuse parents · **không** enqueue sibling mới).

## 2. changeScope `edit_page`

Pack **edit** toast stub native → màn thật (data-analy `changeScope=edit_page`).

| ID | Current (native 2026-08-29) | New (SSOT mobile demo + CTX + live API) | Surface |
|----|-----------------------------|----------------------------------------|---------|
| GAP-MOB-EST-NAV-01 | mnt-list hub/card · incident CTA → **toast only** | Nav push `#sc-estimate` «Giao việc xử lý» · back → `mnt-list` (hoặc incident parent) | mnt-list · estimate |
| GAP-MOB-EST-SCR-01 | Không màn Giao việc | Full `#sc-estimate` · `DES-MOB-EST` · header SC + fields + CTA | screen |
| GAP-MOB-EST-HDR-01 | — | Card «Từ sự cố» + «Loại tài sản» readonly | card rows |
| GAP-MOB-EST-ASSIGN-01 | — | Field «Giao cho *» Text | text * |
| GAP-MOB-EST-QTY-01 | — | «Khối lượng» · decimal | number |
| GAP-MOB-EST-PRICE-01 | — | «Đơn giá» · decimal | money |
| GAP-MOB-EST-TOTAL-01 | — | «Thành tiền» readonly = qty × unitPrice | derived |
| GAP-MOB-EST-SLA-01 | — | «Thời hạn xử lý (giờ)» + «Hạn xử lý» readonly | derived SLA |
| GAP-MOB-EST-CTA-01 | — | Primary «Giao việc» → POST WO (+ assign) · toast CV-* | CTA |
| GAP-MOB-EST-DRAFT-01 | — | Secondary «Lưu nháp» → draft estimate | CTA |
| GAP-MOB-EST-DATA-01 | — | Mobile.Bff `ai-vision/estimates` · `maintenance/work-orders` · `incident/…/assign` | BFF |
| GAP-MOB-EST-PACK-01 | Web STATUS `packKind=list` · Kind B+D | Mobile packKind=`sheet` (form giao việc) · surface screen | meta |
| GAP-MOB-EST-SIMP-01 | Web multi-line Kind D grid | Mobile **1** qty/price row → map `Lines[0]` | meta |

**Không** đổi (OUT pack mobile P1): web list Kind B · slideout multi-line toolbar · Excel · Config schema editor · auto WO event `estimate.created` (web DEFER — mobile dùng **explicit** POST WO).

**Không** bảng Current vs New web admin. Prior web artifacts **giữ** · **OUT** mobile P1. SSOT visual = dual HTML `#sc-estimate` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Công việc» + chevron · Android icon-btn chevron only — **OK**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-estimate` `DES-MOB-EST`: nav back → `mnt-list` (entry từ incident → pop incident parent OK) · title **Giao việc xử lý** · card «Từ sự cố» + «Loại tài sản» · fields Giao cho / Khối lượng / Đơn giá / Thành tiền / SLA / Hạn · primary **Giao việc** · secondary **Lưu nháp** · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5 shell **giữ** · tab **`work`** khi entry từ mnt-list · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Prefill header SSOT / API: **Từ sự cố** = code · defect · route/Km (demo `SC-2401 · Ổ gà · QL.1 Km 1556+040`) · **Loại tài sản** (demo `Mặt đường`) · từ nav args và/hoặc `GET incident/incidents/{id}` · thiếu incidentId → banner · **chặn** Giao việc.
3. Open/seed: khi có `incidentId` → `POST ai-vision/estimates/from-incident/{id}` (hoặc resume `GET ai-vision/estimates/{id}`) · prefill qty/giá từ `Lines[0]` nếu có · fail seed → giữ form + demo fallback rows · **cấm** invent path.
4. Field **Giao cho *** required · free text P1 (demo `Nguyễn Văn A · Tổ tuần đường`) · empty → disable primary **hoặc** toast validation · **cấm** invent staff lookup API (`GAP-MOB-EST-ASSIGNEE-01`).
5. **Khối lượng** decimal · **Đơn giá** money VND · **Thành tiền** readonly = qty × unitPrice (demo `12.5` · `850.000` · `10.625.000`) · map write `Lines[0].Qty` / `Lines[0].UnitPrice` (`GAP-MOB-EST-SIMP-01`).
6. **Thời hạn xử lý (giờ)** readonly default **24** · **Hạn xử lý** = now + slaHours (demo `19/08/2026 08:00`) · bind `CreateWorkOrderRequest.SlaHours` / `DueAt` · **cấm** invent SLA policy API (`GAP-MOB-EST-SLA-01`).
7. Primary **Giao việc** → chain P1: optional draft/confirm estimate · **`POST maintenance/work-orders`** (explicit · **GAP-MOB-EST-WO-01**) · optional `POST incident/incidents/{id}/assign` · busy spinner · toast **Đã giao việc · {WorkOrderDto.Code} · thời hạn {SlaHours} giờ** (demo `CV-20260818-0003`) · back `mnt-list` · **cấm** native alert · **cấm** fake CV khi fail · **chặn** nếu thiếu assignee / incidentId.
8. Secondary **Lưu nháp** → `POST ai-vision/estimates/{id}/draft` (sau seed/update lines) · toast **Đã lưu nháp ước lượng** · **cấm** fake 200 · offline queue **DEFER** (không invent path).
9. Entry (reuse parents · **cấm** reimplement): mnt-list hub/card `#i-sum` · incident CTA → **push** `#sc-estimate` (thay toast-only · **GAP-MOB-EST-NAV-01**).
10. Kit reuse map: `LinmTopBar` · `LinmListRow` / card-group · `LinmTextField` (text/number/money/readonly) · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast`. **Cấm** invent tên kit · Design `kit_missing_confirm` nếu thiếu (`GAP-MOB-ACT-05`).
11. Typography: label **13** · field value **≥16** · title **17** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material.
12. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std` / `yarn build` web.
14. QA (role sau): Maestro slug `estimate` only · live sim 6.9" + emulator · store PNG `qa/store/estimate` · **cấm** `yarn e2e-qa` web · **cấm** test mnt-chat/progress/log / web Kind B as in-scope.
15. BE align: **không** invent path — reuse live `AiVisionEstimatesController` · `WorkOrdersController.Create` · `IncidentsController.Assign`. Step 4b **N/A** (schema Signed) · gaps assignee/WorkType/SLA = convention P1 · **cấm** PO chạy migration. **Cấm** dedicated EstimateController trên Mobile.Bff · **cấm** ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/estimate.md` | feature · domain AiVision · GAP-F-EST-* |
| CTX-02 | `docs/context/features/maintenance.md` | WorkOrder · CreateWorkOrderRequest |
| CTX-03 | `docs/context/features/incident.md` | assign · prefill SC |
| CTX-04 | `docs/context/features/mnt-list.md` | parent entry hub/card |
| CTX-05 | mobile-p1 `mobile/context.md` §estimate | mobile IA |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-estimate` | iOS 390×844 · `DES-MOB-EST` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-estimate` | Android 412×915 · **cùng** field/CTA/toast |
| DEM-03 | `specs/estimate/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` · `DES-MOB-EST` | IA dưới Công việc |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / TextField / Primary / Secondary / Toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/estimate-control-hint.md` | controlHint · tech factors · Delta |
| DA-02 | `specs/_data-analy/estimate-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/estimate-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/estimate-real-data.md` | §A–§F bind |
| WEB | `po/requirement-web.md` (+ ui/be/task/… · `_data-analy/features/estimate-control-hint.md`) | prior Kind B+D — **giữ** · OUT mobile |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · **không** re-crawl demo |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · toast stub |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | AiVision · Maintenance · Incident · **cấm ERP.*** · **cấm** invent `ai-estimate` / bare `estimate` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / TextField / Primary / Secondary / Toast **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-estimate` dual + real-data §A+§B. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| screenTitle | Giao việc xử lý | TopBar title | * | `LinmTopBar` | `DES-MOB-EST` · fixed 17 · **cấm** badge P1/P2 |
| navBack | Công việc | BackButton | * | `LinmTopBar` leading | `go('mnt-list')` · Android icon-only OK · incident entry → pop parent |
| fromIncident | Từ sự cố | ListRow readonly | * | `LinmListRow` | code · defect · route/Km · 13 / ≥16 |
| assetType | Loại tài sản | ListRow readonly | * | `LinmListRow` | e.g. Mặt đường |
| assignee | Giao cho * | TextField | * | `LinmTextField` | required · free text P1 |
| qty | Khối lượng | NumberField | * | `LinmTextField` | decimal `inputmode` |
| unitPrice | Đơn giá | MoneyField | * | `LinmTextField` | decimal · VND display |
| totalAmount | Thành tiền | TextField readonly | * | `LinmTextField` | qty × unitPrice |
| slaHours | Thời hạn xử lý (giờ) | TextField readonly | * | `LinmTextField` | default **24** P1 |
| dueAt | Hạn xử lý | TextField readonly | * | `LinmTextField` | datetime VN · now + slaHours |
| btnAssign | Giao việc | PrimaryButton | * | `LinmPrimaryButton` | POST WO (+ assign) · busy |
| btnDraft | Lưu nháp | SecondaryButton | * | `LinmSecondaryButton` | draft estimate |
| toastOk | Đã giao việc · CV-… · thời hạn … giờ | Toast | * | `LinmToast` | sau POST WO 200 |
| toastDraft | Đã lưu nháp ước lượng | Toast | * | `LinmToast` | sau draft 200 |
| toastErr | (lỗi mạng / validate) | Toast | * | `LinmToast` | **cấm** fake CV / fake ok |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `estimate`? |
|---------------|--------|------|---------------------|
| Prefill header SC | GET | `incident/incidents/{id}` | **yes** — optional nếu nav payload đủ |
| Seed / mở ước lượng | POST | `ai-vision/estimates/from-incident/{incidentId}` | **yes** |
| Init catalogs (opt) | GET | `ai-vision/estimates/init-data` | optional P1 |
| Get draft | GET | `ai-vision/estimates/{id}` | **yes** — resume |
| Update qty/giá | PUT | `ai-vision/estimates/{id}` | **yes** — `Lines[0]` |
| Lưu nháp | POST | `ai-vision/estimates/{id}/draft` | **yes** — secondary CTA |
| Confirm (opt chain) | POST | `ai-vision/estimates/{id}/confirm` | optional với Giao việc |
| Giao việc → tạo CV | POST | `maintenance/work-orders` | **yes** — **primary CTA** |
| Gán người trên SC | POST | `incident/incidents/{id}/assign` | **yes** — sync AssigneeName |
| WO init (WorkType) | GET | `maintenance/work-orders/init-data` | optional — default `sua-chua` nếu thiếu |
| Qty / giá / assignee / SLA UI | — | — | local derived · **không** API riêng |
| Nav back | — | — | local · `mnt-list` / parent |
| Toast ok / err | — | — | UI after POST |

**Cấm** `GET/POST estimate` · `ai-estimate/*` · `EstimateController` trên Mobile.Bff · DbContext trên BFF · app `:5101`.

### Bind (real-data §B)

| UI | → API |
|----|-------|
| fromIncident | GET incident / nav · display Code · Title · Route |
| assetType | incident / asset label |
| assignee | `AssigneeName` · opt `TeamName` (parse sau `·`) → WO + assign |
| qty | `Lines[0].Qty` |
| unitPrice | `Lines[0].UnitPrice` |
| totalAmount | derived / `TotalAmount` / `Lines[0].Amount` |
| slaHours | `CreateWorkOrderRequest.SlaHours` = 24 |
| dueAt | `CreateWorkOrderRequest.DueAt` |
| btnDraft | `UpdateEstimateRequest` via draft |
| btnAssign | `CreateWorkOrderRequest` (+ opt assign + confirm) |
| seed | `POST …/from-incident/{id}` → `EstimateDto` |

### CreateWorkOrderRequest (P1)

| Field | Required | Mobile P1 |
|-------|----------|-----------|
| `RouteName` | yes | từ SC / estimate `RouteSection` |
| `WorkType` | yes | P1 default `sua-chua` / init-data |
| `Status` | yes | `new` |
| `DueAt` | yes | field «Hạn xử lý» |
| `SlaHours` | opt | 24 |
| `AssigneeName` | opt | «Giao cho *» |
| `TeamName` | opt | parse sau `·` |
| `IncidentId` | opt | SC id/code |
| `Title` / `Description` / `Note` | opt | defect · qty/giá/total text |

Response `WorkOrderDto.Code` → toast giao việc.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-EST-PACK-01 | Web `list` Kind B+D vs mobile form | **Chốt packKind=`sheet`** · surface = **full screen** `#sc-estimate` · **≠** web list. Design STATUS packKind=`sheet`. **Cấm** bottom-sheet chrome / Kind B list trong pack này. |
| GAP-MOB-EST-SIMP-01 | 1 line mobile vs web multi-line | **Map `Lines[0]`** single synthetic line · seed from-incident / init. **Cấm** multi-line grid P1. |
| GAP-MOB-EST-ASSIGNEE-01 | Staff lookup API? | **Free text** → `AssigneeName` (+ opt TeamName). **Cấm** invent `api/v1/.../staff`. |
| GAP-MOB-EST-WO-01 | Web DEFER auto WO | Mobile **explicit** `POST maintenance/work-orders` trên CTA Giao việc. |
| GAP-MOB-EST-SLA-01 | SLA policy API? | **Local default 24h** + DueAt derived. **Cấm** invent SLA API P1. |
| GAP-MOB-EST-NAV-01 | Toast → screen | **Must** push `#sc-estimate` · thay toast stub. |
| GAP-F-EST-01 | Auto WO event | **DEFER** web P2 — **không** block mobile CTA. |
| WorkType default | Missing convention | P1 `sua-chua` hoặc init-data · SA stamp nếu Signed khác. |
| Sibling enqueue | Giao việc / Lưu nháp / fields / mnt-* | **none** — cùng slug hoặc siblings **không** start (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/estimate/specs/_data-analy/` | **N/A.** Dùng `_data-analy/estimate-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| Step 4b | New endpoint? | **N/A** — reuse live estimates + work-orders + assign. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm none** trên surface · shell tab `work` = entry (`GAP-TAB-01`). |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Giao việc xử lý | `#sc-estimate` `DES-MOB-EST` · iOS + Android | **Screen** (packKind meta `sheet` · **không** Modal/Sheet chrome) | edit (form · không CRUD list) | seed/from-incident · GET incident · PUT/draft estimate · POST work-orders · POST assign · derived total/SLA · toast · back | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: web Kind B list · Kind D multi-line toolbar · `mnt-chat` / `mnt-progress` / `mnt-log` · watermark Gói · invent path · bottom-sheet `#sheet-*`.

Reuse only: `mnt-list` (entry + back) · `incident-create` / `incident-detail` (CTA entry · shared_action) · AiVision/Maintenance/Incident live APIs (cite · không enqueue).

Frame: iOS 390×844 · Android 412×915 · safe area · form + CTA + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn **mở** · Giao việc fail → toast lỗi · Lưu nháp online P1 · offline queue **DEFER** · **cấm** fake CV · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | **N/A** — `#sc-estimate` không pin GPS |
| AC-D-03 | Leave dirty | Back với assignee/qty/giá đã sửa → confirm leave in-app (toast/modal kit) · **cấm** native alert · draft optional |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Number/money/assignee focus · keyboard không đè CTA Primary · dismiss không crash |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Công việc** giữ (entry mnt-list) · in-screen tabs **none** · **cấm** invent segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** trên estimate |
| AC-D-12 | Typography | label **13** · field ≥**16** · title **17** (`GAP-TYP-01`) |
| AC-F-01 | Appear / seed | from-incident / GET estimate · fail → demo SSOT rows · screen vẫn mở |
| AC-F-02 | Back | Pop `mnt-list` (hoặc incident parent) · **cấm** reimplement list |
| AC-F-03 | Prefill header | Từ sự cố + Loại TS bind · thiếu incidentId → banner · chặn Giao việc |
| AC-F-04 | Assignee | Required free text · **cấm** invent staff API |
| AC-F-05 | Qty / giá / total | Editable qty+price · total derived · write `Lines[0]` |
| AC-F-06 | SLA / Due | Default 24h · DueAt derived · bind WO |
| AC-F-07 | Giao việc | POST work-orders (+ opt assign) · toast CV-* · **cấm** fake code |
| AC-F-08 | Lưu nháp | POST draft · toast nháp · **cấm** fake 200 |
| AC-F-09 | Entry | mnt-list hub/`#i-sum` · incident CTA → **push** `#sc-estimate` (thay toast) |
| AC-F-10 | Dual parity | iOS + Android **cùng** fields + copy SSOT (`GAP-MOB-ALIGN-01`) trừ chrome back |
| AC-F-11 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-12 | 1 action | **Cấm** gộp chat/progress/log/web list (`GAP-MOB-ACT-01/02`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Missing assignee / incident | Banner/toast · **chặn** Giao việc |
| POST WO fail | Toast lỗi · **cấm** fake CV |
| Draft fail | Toast lỗi · **cấm** fake ok |
| Success Giao việc | Toast **Đã giao việc · {Code} · thời hạn {SlaHours} giờ** · back mnt-list |
| Success nháp | Toast **Đã lưu nháp ước lượng** |
| Offline | Toast lỗi / keep form · queue DEFER · **cấm** full-screen block |

## 11. Out of scope (this pack)

- Web Kind B list + Kind D multi-line / Excel / Config FULL
- Auto WO event `estimate.created` (web DEFER)
- `mnt-chat` / `mnt-progress` / `mnt-log` + API comments/progress
- Staff lookup / SLA policy / offline draft queue APIs
- Invent `api/v1/estimate` / `ai-estimate` / `EstimateController` Mobile.Bff
- Reimplement `#sc-mnt-list` / incident forms
- Watermark Gói / device label / proto-click tín hiệu
- Start siblings `pending_confirm`
- ERP.* · `mfeStdUrl` · Grid AC web / Report AC Lin*
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e / `yarn start:std` ở role PO

## 12. KPI (HĐ Gói 1 — màn này)

Giao việc hiện trường = **một** push `#sc-estimate` sau mnt-list/incident → điền giao cho + qty/giá → tạo CV thật (toast mã CV) hoặc lưu nháp estimate. DoD pack: dual screen + BFF bind §6 — **không** omni-implement web list / chat / progress trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `estimate` / **`sheet`** (confirmed · surface **screen**) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/estimate/STATUS.md` |
| Context / Demo / DI | CTX-01..05 · DEM dual `#sc-estimate` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-estimate` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-estimate` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** (verify dual) · TopBar / ListRow / TextField / Primary / Secondary / Toast |
| BFF | `estimate-bff-endpoints.md` · estimates + work-orders + assign |
| Real-data | `estimate-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **không** vẽ Kind B list / multi-line / bottom-sheet · **không** staff picker |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| priorWeb | `po/requirement-web.md` **giữ** |

Design: HIG + Material · IA lock Tab 5 · copy VN đúng iOS HTML (skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T04:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| realDataContentHash | sha256:estimate-mobile-real-data-20260829 |
| actionTreeContentHash | sha256:estimate-mobile-action-tree-20260829 |
| ctxContentHash | sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_5338c2be` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
