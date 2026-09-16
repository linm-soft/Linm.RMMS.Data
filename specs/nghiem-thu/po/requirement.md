# PO — nghiem-thu (Công tác nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| changeScope | `new_page` |
| packKind | `list` (**PO confirm**) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (clone patrol) |
| status | `confirmed` (autopilot · `task_8d642b15`) |
| requestSource | run packet · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only — **cấm** e2e/start:std ở role này) |
| prior | data-analy `confirmed` · hash `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` · compact `handoff/data_analy-compact.md` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| demo | **N/A** · `continue_no_demo` (autopilot) · peer clone `patrol` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route `/nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu` |
| peerStdUrl | `http://localhost:9304/patrol` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| taskId | `task_8d642b15` |
| updatedAt | `2026-09-12T09:05:00.000Z` |

## 1. Goal

Greenfield Field module **Công tác nghiệm thu**: Kind B list + Create/Edit/View/Copy **full-page** + **10 mẫu NT** + upload ảnh/video hiện trường + thông tin hiện trường. Persona = **cán bộ nghiệm thu** (≠ tuần đường / tuần kiểm). Clone UX shell từ `patrol` — **không** reuse entity `rmms_patrol_sessions` · **cấm** gộp `maintenance` WO / P2 stub.

## 2. DoD (đo được)

1. List `/nghiem-thu` mở Kind B A–D · filter `LinErpListFilterBar` · 🔍 mép phải · **lấp hàng rồi wrap** (**GAP-FILTER-WRAP-02**).
2. Toolbar FULL: Làm mới · Lịch sử · Config · View/Edit/Delete theo chọn · **+ Thêm mới** trên Zone B — **cấm** Thêm mới trên Header A.
3. Grid: sort · filter cột · row menu Xem/Sửa/Sao chép/Lịch sử/Xóa · kéo cột default ON · pagination 50/100/200/500.
4. Form full-page `/nghiem-thu/new` · `/nghiem-thu/:id` · Copy · View=`<dl>` · footer Lưu/Hủy · **LeaveConfirmModal** khi dirty.
5. Chọn **1/10 mẫu** (`templateType`) trước/khi tạo · LOOKUP_STATIC §6.
6. Upload `mediaIds[]` qua FileService `web-bff/api/v1/files/*` · persist **guid only** · resign mỗi xem · MIME: image jpeg/png/webp ≤10MB · video mp4/webm ≤50MB · max 10 file/record · fail → toast (**cấm** alert).
7. API proposed `api/v1/patrol/nghiem-thu` (+ BFF cùng resource) sau SA DOMAIN-MAP · empty/error per real-data · **cấm** mock-only SSOT.
8. Lane **web only** · mobile = enqueue_later · FE/BE build = Dev/QA gates (**cấm** yarn build ở PO).

## 3. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/nghiem-thu.md` | feature P0 · hash `41b14359…` |
| CTX-02 | `docs/context/features/patrol.md` | peer clone UX |
| DEM-01 | **N/A** (web) · mobile seed `#sc-nghiem-thu` only — **cấm** demo-json SSOT |
| DI-01 | `specs/_data-analy/features/nghiem-thu-control-hint.md` | controlHint |
| DI-02 | `specs/_data-analy/features/nghiem-thu-real-data.md` | real-data §A+§B |
| DI-03 | `specs/_data-analy/features/nghiem-thu-filter-bar.md` | filter-bar HARD |
| DI-04 | `specs/_form-type-mobile/MEETING-1-5.md` | họp 1 · 10 mẫu · mobile later |
| MFE | `Linm.Web.RMMS.Field` `/nghiem-thu` | UI |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP · FileService Bff | API |
| BFF files | `web-bff/api/v1/files/*` | upload/resign |

## 4. controlHint (PO chốt — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tuyến · mẫu · ghi chú — **không** nút Tìm riêng |
| status | Trạng thái | `SearchInput` | enum VN | §6 |
| route | Tuyến đường | `SearchInput` | **road-route** | persist **code** · **cấm** free-text |
| templateType | Mẫu NT | `SearchInput` | LOOKUP_STATIC | 10 mẫu §6 |
| fromDate / toDate | Từ / Đến | `Date` | | kỳ nghiệm thu |

### Form fields

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã nghiệm thu | `Text` | auto | IdCode `NT-yyyyMMdd-nnn` · Create readOnly |
| templateType | Mẫu nghiệm thu | `SearchInput` | * | LOOKUP_STATIC 10 |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` |
| zoneOrgCode / zoneOrgName | Khu / Chi cục | `SearchInput` | | `org-unit` · RmmsOrgFormFields |
| vpOrgCode / vpOrgName | VP | `SearchInput` | | org-unit |
| assigneeCode / assigneeName | Cán bộ NT | `SearchInput` | * | persona NT |
| inspectedAt | Ngày nghiệm thu | `Date` | * | |
| kmFrom / kmTo | Km đầu / Km cuối | `Text` (number) | | chainage |
| fieldInfo | Thông tin hiện trường | `Text` | * | multiline |
| status | Trạng thái | `SearchInput` | * | enum VN §6 |
| note | Ghi chú | `Text` | | |
| mediaIds | Ảnh / video hiện trường | `FileMulti` | | FileService guid[] · **cấm** persist URL |
| updatedAt | Cập nhật | `Date` | | View readonly |

## 5. Open questions — PO chốt (autoApprove)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-DA-NT-TMPL-01 | Tên 10 mẫu? | **CLOSED** LOOKUP_STATIC code=`mau-01`…`mau-10` · label=`Mẫu nghiệm thu 01`…`10` (interim P0 — rename copy P2 không block Design/SA) |
| GAP-DA-NT-STATUS-01 | Enum trạng thái VN? | **CLOSED** `Nháp` · `Đang NT` · `Hoàn thành` · `Hủy` |
| GAP-DA-NT-FORM-01 | Form Pattern? | **CLOSED** **Full page** (clone patrol) · URL `/new`·`:id` — **cấm** Modal/Slideout P1 |
| GAP-DA-NT-DOMAIN-01 / API-01 | Domain + path? | **OPEN → SA** đề xuất Patrol sibling · `api/v1/patrol/nghiem-thu` · entity NT riêng · **cấm** sessions / WO / ERP.* / domain 16 |
| missing_demo_context | Demo N/A? | **CLOSED** `continue_no_demo` · peerStdUrl patrol · Design prototype-only |

## 6. LOOKUP_STATIC (PO)

### templateType (10)

| code | label |
|------|-------|
| mau-01 | Mẫu nghiệm thu 01 |
| mau-02 | Mẫu nghiệm thu 02 |
| mau-03 | Mẫu nghiệm thu 03 |
| mau-04 | Mẫu nghiệm thu 04 |
| mau-05 | Mẫu nghiệm thu 05 |
| mau-06 | Mẫu nghiệm thu 06 |
| mau-07 | Mẫu nghiệm thu 07 |
| mau-08 | Mẫu nghiệm thu 08 |
| mau-09 | Mẫu nghiệm thu 09 |
| mau-10 | Mẫu nghiệm thu 10 |

### status

| code | label |
|------|-------|
| draft | Nháp |
| in_progress | Đang NT |
| done | Hoàn thành |
| cancelled | Hủy |

## 7. Grid list AC (REQUIRED · Kind B / list)

| Area | Acceptance (Design phải prototype) |
|------|-------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · View/Edit/Delete theo chọn · **+ Thêm mới** |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử/Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | Sửa cấu hình lưới · kéo cột default ON |
| **Grid flow** | Sort cột · filter cột (panel) · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · field **lấp hàng rồi wrap** · 🔍 mép phải (`filter-bar-layout-hard` · **GAP-FILTER-WRAP-02**) — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack |
| **Form pair** | Create/Edit/View/Copy → **Full page** · Design clone `form-surface-prototype` + upload zone |
| **Tree?** | none |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |

**Handoff → Design:** clone `shared-grid-example.html` · giữ `data-des-id` DES-GRID-A…D — **cấm** gen list chỉ table giữa trang.

## 8. Screens / Pattern / devSlash

| Screen | Pattern | FormMode | Actions | Leave | devSlash |
|--------|---------|----------|---------|-------|----------|
| List `/nghiem-thu` | Kind B A–D | — | Toolbar + filter + grid | n/a | `/agent-dev` |
| Create `/nghiem-thu/new` | **Full page** | Create | footer Lưu/Hủy · upload · chọn mẫu | dirty → LeaveConfirmModal | `/agent-dev` |
| Edit `/nghiem-thu/:id` | **Full page** | Edit | Lưu/Hủy · upload | dirty → LeaveConfirmModal | `/agent-dev` |
| View `/nghiem-thu/:id` (view) | **Full page** | View | `<dl>` + gallery resign · Đóng | no dirty | `/agent-dev` |
| Copy | **Full page** | Copy | prefill · new code | dirty → LeaveConfirmModal | `/agent-dev` |

## 9. Leave / alert (REQUIRED)

| Case | Behavior |
|------|----------|
| Form dirty navigate/back | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) — **cấm** native `confirm` |
| Xóa row / chặn thao tác | **`useAlert` / `Modal`** — **cấm** `alert` |
| Upload/API fail | toast · **cấm** alert |
| Empty / filtered empty / API gap | copy per real-data §A · skeleton · **cấm** blank body |

## 10. Tab index

| Surface | tabs |
|---------|------|
| List + form | `tabs: none` (1 surface mỗi route) |

## 11. API / bind (proposed · SA confirm)

| Method | Path |
|--------|------|
| GET/POST | `api/v1/patrol/nghiem-thu` |
| GET/PUT/DELETE | `api/v1/patrol/nghiem-thu/{id}` |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` |
| Files | `web-bff/api/v1/files/*` · `/init-bff-file` nếu thiếu · `/integrate-file-upload-web` |

**Cấm:** ERP.* · invent `api/v1/nghiem-thu-files` · persist full URL · reuse `rmms_patrol_sessions` · gộp `api/v1/maintenance/work-orders/*/complete`.

## 12. Out of scope (this pack)

- Mobile native implement / queue `qlbd-mobile` (enqueue_later)
- Map / Kind E+F / Excel export P1
- Domain thứ 16 · ERP.WebService · Maintenance WO complete stub
- Re-scan demo HTML / crawl DemoRoot

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `nghiem-thu` · **list** (PO confirm) |
| phase_from / phase_to | po → design |
| STATUS | po **confirmed** · design **pending** |
| changeScope | `new_page` |
| Context / Demo / DI | CTX-01 · DEM **N/A** · DI-01/02/03 |
| controlHint | §4 · FileMulti `mediaIds` · road-route · 10 mẫu §6 |
| Screens / Pattern / devSlash | §8 · Full page · `/agent-dev` |
| Grid AC | §7 · `grid_standard` REQUIRED |
| Leave | §9 · LeaveConfirmModal |
| peerStdUrl | `http://localhost:9304/patrol` |
| reviewUrl | *(Design gen)* |
| APIs | proposed §11 · FileService HARD |
| Open questions | DOMAIN/API → SA only |
| Next AskQuestion | `design_confirm` (autoApprove ON → chain) |
| autoApprove | **ON** |

---
<!-- Version meta: skillId=agent-po · skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.12.2 · versionGate=ok · contentHashPriorDataAnaly=sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea · taskId=task_8d642b15 -->
