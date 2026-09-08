# Design — iot

| Field | Value |
|-------|-------|
| feature | `iot` |
| title | Danh sách IoT |
| this role | `design` · `/agent-design` |
| changeScope | **`new_page`** |
| packKind | **`list`** |
| Feature Kind | **B** CatalogListShell A–D + **D** Full-page form |
| formPattern | **Full page** (`CatalogFormShell`) · `data-form-cols="5"` |
| status | **`confirmed`** (autoApprove=ON · `design_confirm` = approve) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| peerStdUrl | `http://localhost:9309/iot` |
| liveList | `/iot` |
| liveForm | `/iot/tao-moi` · `/iot/:id` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Iot** · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/iot-control-hint.md` |
| realData | `specs/_data-analy/features/iot-real-data.md` |
| contentHash | `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Iot`) |
| shared_grid_example | **`v1`** |
| real_view_parity | **`v1`** |
| taskId | `task_6ee25171` |
| updatedAt | `2026-09-05T04:15:00.000Z` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.05.2` |
| versionGate | `ok` |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` · `iot-list.html` · `iot-form.html` |
| List zones | **A–D** + C1 filter · C2a · C3 · F · H · Leave · **grid standard** |
| Form zones | Full page · `data-form-cols="5"` · header chrome Quay lại/Hủy/Lưu · **cấm** footer Lưu |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` · `filter-bar-layout-hard` · `form-full-page-prototype` · `design-real-view-parity` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/iot/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9309/iot` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Danh sách IoT» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa | **[+ Thêm mới]**
[C1] LinErpListFilterBar mock · search · status · type · routeCode · 🔍 cụm phải
[C] card: list title · row-menu help · grid STT·code·name·type·status·routeCode·km
[D] pageSize 50/100/200/500 · Tổng · pager
[F] config · [H] history · LeaveConfirmModal · delete Modal
[Z] → Full page form (không Modal 2 cột)
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu/Tạo mới] Title · 5 cột data-form-cols=5 · cấm footer Lưu
Dirty → LeaveConfirmModal (**cấm** native alert/confirm)
```

## Screens

| id | Route | Surface | Notes |
|----|-------|---------|-------|
| S-LIST | `/iot` | CatalogListShell Kind B | DES-GRID-A…D |
| S-FORM-CREATE | `/iot/tao-moi` | Full page Kind D | DES-GRID-Z |
| S-FORM-EDIT | `/iot/:id` | Full page | mode edit |
| S-FORM-VIEW | `/iot/:id` | Full page readOnly | **không** disabled xám |

**devSlash:** `/agent-dev`

## Control map (chốt từ controlHint)

| id | Label | Control | Surface | Notes |
|----|-------|---------|---------|-------|
| search | Tìm kiếm | `SearchTextInput` | filter C1 | mã · tên · **cấm** nút Tìm riêng |
| status | Trạng thái | `Dropdown` | filter + form | `online` \| `offline` |
| type | Loại cảm biến | `Dropdown` | filter + form | `sensor` \| `logger` (Q-IOT-TYPE-01) |
| routeCode | Tuyến | `SearchInput` | filter + form | catalogKind **road-route** |
| code | Mã thiết bị | `Text` / IdCode | form | prefix `IOT-` (Q-IOT-CODE-01 · SA) |
| name | Tên thiết bị | `Text` | form | required |
| km | Lý trình | `Number` | form | optional |

## Grid columns

| Column | Notes |
|--------|-------|
| STT | client · **cấm** header `TT` |
| code | link → form |
| name | |
| type | chip |
| status | chip online/offline |
| routeCode | |
| km | |
| actions | row menu Xem/Sửa/Sao chép/Lịch sử/Xóa |

## Grid AC → Design

| Area | Pass |
|------|------|
| Shell A–D | ✅ prototype |
| Toolbar FULL | ✅ Refresh · History · config · View/Edit/Delete · + Thêm mới |
| Grid menu / help | ✅ |
| Config F | ✅ kéo cột ON |
| Filter C1 | ✅ `LinErpListFilterBar` mock · 1 hàng · input cụm phải |
| Form pair | ✅ Full page 5 cột · **không** Modal Z |
| Leave | ✅ LeaveConfirmModal |

## Open / handoff SA

- GAP-IOT-02 devices CRUD · GAP-IOT-01 MFE wire · GAP-IOT-03 ADMIN menu
- Q-IOT-CODE-01 SA pattern IdCode
- **cấm** map health → grid rows

## Confirmed by

ai-autocode-autopilot · task_6ee25171 · roleOnly=`design` · `design_confirm=approve` (autoApprove)

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.09.01.02 · rulesVersion=2026.09.05.2 · contentHash=sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3 · versionGate=ok · status=confirmed · shared_grid_example=v1 · real_view_parity=v1 -->
