# PO — Requirement — iot

| Field | Value |
|-------|-------|
| feature | `iot` |
| title | Danh sách IoT |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (analy + CTX · MFE scaffold empty · greenfield list/form) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + Kind D full-page form) |
| Feature Kind | **B** — CatalogListShell A–D + **Full page** form (`CatalogFormShell`) |
| mode | `feature_context` · **no Excel** · CTX only · demo **N/A** |
| status | `confirmed` (autoApprove=ON · task `task_80e6c63f`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/iot-control-hint.md` · `iot-real-data.md` · contentHash `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` · headerFingerprint `sha256:7ce53f8ee10b3309e435879a0a14bbf3398a9220d2c049f9d61d3f48ea5cfe1c` · analy `task_2f176635` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| liveList | `/iot` |
| liveForm | `/iot/tao-moi` · `/iot/:id` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Iot** · prefix `api/v1/iot` · BFF `web-bff/api/v1/iot` · **cấm ERP.*** |
| domain | **Iot** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Iot`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/iot-real-data.md` |
| contentHash | `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| headerFingerprint | `sha256:7ce53f8ee10b3309e435879a0a14bbf3398a9220d2c049f9d61d3f48ea5cfe1c` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| taskId | `task_80e6c63f` · analy `task_2f176635` |
| updatedAt | `2026-09-05T04:00:00.000Z` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.05.2` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Iot `:9309` — **không** report pack · **không** Kind F map · **≠** `asset-kcht-dashboard` · **≠** `csdl-so-sach`.

**Cấm:** implement · re-scan DEM · invent ERP.* · map health → grid rows · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Danh sách thiết bị IoT** (cảm biến / logger): list Kind B + form Kind D full-page · CRUD khi BE `devices` sẵn sàng · menu P2 **ADMIN only**.

Persona: Kỹ thuật ATS · Admin platform (P2 extra).

**Delta pack này (SSOT lock từ analy + PO chốt):**

1. List CatalogListShell A–D · `LinErpListFilterBar` · filter search / status / type / routeCode.
2. Form full-page `/iot/tao-moi` · `/iot/:id` · CatalogFormShell · leave-confirm.
3. Type LOOKUP_STATIC closed-set **`sensor` | `logger`** (**Q-IOT-TYPE-01** chốt).
4. Status LOOKUP_STATIC **`online` | `offline`**.
5. IdCode prefix đề xuất **`IOT-`** — SA chốt auto/manual (**Q-IOT-CODE-01**).
6. routeCode = SearchInput **road-route** · **cấm** free-text.
7. BE: health live · devices CRUD **GAP-IOT-02** — SA ship Entity/Controller · **cấm** dùng health làm list payload.
8. Perm `rmms-iot:devices:read|write` · menu `rmms-iot-iot` **ADMIN only** (**GAP-IOT-03**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T03:51:05.144Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (analy 2026-09-05) | New (this pack) |
|-------|---------------------------|-----------------|
| Kind / shell | MFE scaffold empty-state list + form hint | CatalogListShell A–D + CatalogFormShell full-page |
| Filter | chưa wire | `LinErpListFilterBar` · search · status · type · routeCode |
| Grid | scaffold | STT · code · name · type · status · routeCode · km · row menu |
| Form | scaffold `/erp-form-context` hint | Full page fields §5c · leave-confirm |
| API list/CRUD | **không** live · chỉ health | Planned `…/iot/devices` — **GAP-IOT-02** SA |
| Type enum | UNCLEAR | **`sensor` · `logger`** — **Q-IOT-TYPE-01** chốt |
| IdCode | UNCLEAR | Prefix **`IOT-`** đề xuất — SA pattern — **Q-IOT-CODE-01** |
| Menu | ADMIN only CTX | Keep · **cấm** STAFF / ADMIN-RMMS — **GAP-IOT-03** |

**Không đổi:** DOMAIN-MAP prefix `api/v1/iot` · BFF `web-bff/api/v1/iot` · **cấm ERP.*** · health endpoint giữ riêng · demo **N/A**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List `/iot` + search (mã · tên) · filter status/type/routeCode · page=1 khi filter đổi.
3. Zone A: title «Danh sách IoT» — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** · SearchTextInput · Dropdown status · Dropdown type · SearchInput routeCode · toolbar: Tạo mới / Refresh / Delete / History / config — **cấm** nút Tìm riêng · **cấm** action trong filter (**GAP-FILTER-BAR-01/08**).
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · **cấm** header `TT` · row menu Xem/Sửa/Xóa · chip type/status.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Form full-page C/E/V: required code · name · type · status · routeCode · km optional · View=`readOnly` (**không** disabled xám).
8. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
9. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
10. Empty: «Chưa có thiết bị IoT» · fail toast — **cấm** fake rows từ health · **cấm** mock seed.
11. Devices API missing (GAP-IOT-02): keep empty scaffold · **không** fake CRUD · SA must ship trước Dev wire.
12. Perm: hide write khi thiếu `rmms-iot:devices:write` · menu ADMIN only.
13. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/iot.md` | feature | P0 ✅ |
| DEM-01 | — | **N/A** · skip | — |
| DI-01 | — | **no Excel cluster** | — |
| DA-HINT | `specs/_data-analy/features/iot-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/iot-real-data.md` | real-data §A+§B | P0 ✅ |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Iot · `api/v1/iot` | P0 ✅ |
| CAT-RR | `specs/_data-analy/shared-catalogs/road-route-seed.json` | road-route | P0 ✅ |
| MFE-LIST | `Linm.Web.RMMS.Iot/.../IotListPage.tsx` | scaffold | P0 |
| MFE-FORM | `Linm.Web.RMMS.Iot/.../IotFormPage.tsx` | scaffold | P0 |
| BE-HEALTH | `…/IotHealthController.cs` | live health | P0 |
| BE-BFF | `…/IotBffController.cs` | live BFF health | P0 |
| BE-DEV | devices Controller/Entity | **GAP-IOT-02** | P0 SA |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> Filter: `LinErpListFilterBar` + `data-lin-list-layout="erp-filter-bar"`.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | — | mã · tên thiết bị |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | `online` · `offline` |
| type | Loại cảm biến | `Dropdown` | LOOKUP_STATIC | **`sensor` · `logger`** (**Q-IOT-TYPE-01** chốt) |
| routeCode | Tuyến | `SearchInput` | **road-route** | **cấm** free-text khi seed READY |

### 5b. Grid columns

| Field key | Label | controlHint / col | Notes |
|-----------|-------|-------------------|-------|
| STT | STT | client | **cấm** header `TT` |
| code | Mã | Text / link | |
| name | Tên | Text | |
| type | Loại | chip/label | sensor / logger |
| status | Trạng thái | chip | online / offline |
| routeCode | Tuyến | Text | |
| km | Lý trình | Number | |
| actions | — | row menu | Xem · Sửa · Xóa |

### 5c. Form fields (Full page Kind D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã thiết bị | `Text` / IdCode | * | prefix **`IOT-`** · SA chốt auto/manual (**Q-IOT-CODE-01**) |
| name | Tên thiết bị | `Text` | * | |
| type | Loại cảm biến | `Dropdown` | * | LOOKUP_STATIC `sensor` \| `logger` |
| status | Trạng thái | `Dropdown` | * | `online` \| `offline` |
| routeCode | Tuyến | `SearchInput` | * | **road-route** |
| km | Lý trình | `Number` | | chainage |

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path | Live? |
|-----------|------|-------|
| Health | `GET /web-bff/api/v1/iot/health` → `GET /api/v1/iot/health` | **yes** |
| List | `GET …/iot/devices?search=&status=&type=&routeCode=&page=&pageSize=` | **no** · GAP-IOT-02 |
| Detail | `GET …/iot/devices/{id}` | **no** |
| Create | `POST …/iot/devices` | **no** |
| Update | `PUT …/iot/devices/{id}` | **no** |
| Delete | `DELETE …/iot/devices/{id}` | **no** · SA soft/hard |

**Cấm** ERP.* · **cấm** map health response → grid rows.  
`map: none` · `progress: connectivity status only` (không multi-step workflow).

### 5e. Tab index

`tabs: none` — 1 list surface + 1 full-page form (không tab strip).

## 6. Grid list AC (REQUIRED · Kind B / list)

> Paste `po-design-grid-standard.md` · filter HARD `filter-bar-layout-hard.md` — **GAP-PO-GRID-01**.

| Area | Acceptance (Design phải prototype / parity) |
|------|---------------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · Delete (multi) · **+ Tạo mới** — **cấm** Thêm mới trên Zone A |
| **Grid menu** | Row menu: Xem/Sửa/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới (ui-schema) · kéo cột default ON |
| **Grid flow** | Sort cột · filter cột · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — SearchText · status Dropdown · type Dropdown · routeCode SearchInput — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · filter đổi → page=1 |
| **Form pair** | Create/Edit/View → **Full page** (`/iot/tao-moi` · `/iot/:id`) · Design clone `form-surface-prototype` · **cấm** slideout trừ Design đổi có lý do |
| **Empty/fail** | empty VN · toast — **cấm** fake row từ health |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D | filter | `/iot` | search · status/type/route filter · Tạo mới · Refresh · config · History · Delete | `/agent-dev` |
| S-FORM-CREATE | **Full page** | create | `/iot/tao-moi` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/iot/:id` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/iot/:id` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | delete · SA soft/hard | `/agent-dev` |
| S-HIST | History modal | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |

**devSlash:** `/agent-dev` (list + full-page form · **không** oms-map / ai-detect / camera-connect).

**Cấm** Modal form hồ sơ · **cấm** Slideout mặc định · **cấm** map canvas · **cấm** merge `asset-kcht-dashboard` / `csdl-so-sach`.

**peerStdUrl gợi ý:** `http://localhost:9309/iot` (MFE Iot) · Design có thể peer Kind B list cùng formType Full page (vd. catalog list peer trên host khác) khi clone shell.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Esc / navigate away | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | `window.confirm` / native dialog |
| Xóa / thao tác nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / devices missing | toast · empty scaffold | alert blocking · fake health rows |
| Empty list | empty grid VN · totalCount=0 | invent-seed / mock rows |
| Validation 422 | toast business message | silent fail |
| Lookup no match (route) | SearchInput empty · save 422 | free-text substitute master |
| 403 perm | hide write · ADMIN menu only | show create khi thiếu write |

Thiếu → **GAP-PO-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| Q-IOT-TYPE-01 | P0 | Closed-set **`sensor`** (Cảm biến) · **`logger`** (Logger) — LOOKUP_STATIC init-data · Design **không** hardcode ngoài set này · SA seed |
| Q-IOT-CODE-01 | P0 | Prefix đề xuất **`IOT-`** · SA chốt IdCode auto vs nhập tay + uniqueness tenant |
| GAP-IOT-01 | P0 | MFE scaffold → Design/Dev wire CatalogListShell + field inventory |
| GAP-IOT-02 | P0 | SA ship Entity + `devices` CRUD + Schema pair + BFF proxy — **blocker Dev wire CRUD** · health ≠ list |
| GAP-IOT-03 | P0 | Menu `rmms-iot-iot` **ADMIN only** — **cấm** gán STAFF / ADMIN-RMMS |
| packKind | — | **Confirm `list`** |
| changeScope | — | **Confirm `new_page`** |
| demo | — | **N/A** · continue_no_demo (feature_context · hash skip) |

## 10. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `iot` / **`list`** (confirmed) |
| phase_from / phase_to | `po` → `design` |
| STATUS | confirmed (autoApprove) |
| Context / Demo / DI | CTX-01 · DEM **N/A** · DI none |
| controlHint / real-data | DA-HINT · DA-REAL §A+§B PASS |
| Screens / Pattern / devSlash | §7 · Full page · `/agent-dev` |
| Grid AC | §6 · `grid_standard` REQUIRED |
| Leave | §8 · LeaveConfirmModal |
| peerStdUrl / reviewUrl | peer=`http://localhost:9309/iot` · reviewUrl=**(Design)** |
| APIs / FormMode→API | health live · devices planned GAP-IOT-02 |
| Open questions | Q-IOT-* **chốt** · GAP-IOT-02 còn SA |
| Next AskQuestion | `design_confirm` (autoApprove khi Design DoR) |
| Next agent | `/agent-design` |

**DoR PO PASS:** changeScope · packKind · Screens · Grid AC · Leave · controlHint cite · hash skip · compact written.

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.09.01.02 · rulesVersion=2026.09.05.2 · contentHash=sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3 · versionGate=ok · status=confirmed · changeScope=new_page · packKind=list · taskId=task_80e6c63f -->
