# Design — citizen (Cổng người dân)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`CitizenFormPage`) |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| design_confirm | `approve` (`task_5c19b559`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/citizen`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/citizen-incidents` |
| prior | PO `confirmed` · `po/requirement.md` · GAP-PO-CIT-01..10 · data-analy hash `aed65b28a0…` |
| autoApprove | **ON** (`task_5c19b559`) → agent confirm Design |
| updatedAt | `2026-08-14T17:30:00.000Z` |
| taskId | `task_5c19b559` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/citizen.md` | Kind G+D demo **không** clone chrome/map/OTP |
| DEM-01 | `Linm.RMMS.Demo/.../citizen-demo.html` → `integration/citizen.html` | Visual SSOT fields |
| DI-02 | `specs/_data-analy/features/citizen-control-hint.md` | controlHint SSOT |
| DI-03 | `road-route-seed.json` | **38** tuyến · `QL.1` |

Persona inbox: Điều phối Integration · Hạt trưởng. Public Kind G = **P2**. **≠** `feedback`.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `CitizenFormPage` C/E/V/Copy — **5 cột** `data-form-cols="5"` + header chrome · **cấm** Resource · **cấm** Slideout · **cấm** 2-cột/footer Lưu (GAP-PO-CIT-03 · GAP-P2-FORM-GRID-05) |
| Routes | List `/integration/citizen` · Create `/integration/citizen/new` · Edit/View `/integration/citizen/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **cùng fields locked** (`.viewDisabled`) — **cấm** `<dl>` riêng · **cấm** disabled xám |
| Badge | Luôn ≠ Góp ý nội bộ (`feedback`) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox sự cố công dân | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchInput ×3 (search · status · road) |
| Form sự cố | create/edit/view/copy | **Full page** `/integration/citizen/new` · `/:id` | 15 fields · **5 cột** + header chrome · **cấm** footer Lưu |

### Zone A — Header

- Icon `fa-users` + title **Cổng người dân** (22px)
- Badge copy **≠ Góp ý (feedback)**
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (PO DoD-2 · GAP-DA-CIT-FILTER-ROAD **IN P1**)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchInput` | text — mã · họ tên · SĐT · loại · tuyến · status |
| status | Trạng thái | `SearchInput` | enum 5: (trống=tất cả) · Nháp · Đã gửi · Đã tiếp nhận · Đang xử lý · Hoàn thành — **cấm** native `<select>` |
| road | Tuyến đường | `SearchInput` | **road-route** (38) — **cấm** free-text · display `code — name` |
| — | Làm mới | `fa-sync-alt` | clear filter + reload · page=1 |
| — | Lịch sử | `fa-history` | stub P1 (cần 1 dòng) |
| — | Sửa config | `fa-cog` | column config modal |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B**.

`incidentType` filter riêng **không bắt buộc P1** — gom trong search (PO §5).

Filter đổi → **page=1** (search must work).

### Zone C — Grid

- Card title: **Inbox sự cố công dân**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body (GAP-P2-LAYOUT-06)
- Columns (kéo cột ON): STT · □ · **Mã theo dõi** · **Họ tên** · **SĐT** · **Loại** · **Tuyến** · **Thời gian** · **Trạng thái** · **Nguồn** · **GPS** · ⋯
- Tuyến hiển thị `QL.1` (master 38)
- Row menu: **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1)
- Click mã → View **full-page** cùng fields locked

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| trackingCode | Mã theo dõi | `Text` readonly IdCode | auto | all readonly | `CIT-YYYYMMDD-NNNN` · copy = mã mới |
| reporterName | Họ tên | `Text` | * | view=locked | PII |
| phone | Số điện thoại | `Text` tel | * | view=locked | PII mask list |
| email | Email | `Text` email | | view=locked | PII |
| incidentType | Loại sự cố | `SearchInput` static 6 | * | view=locked | **cấm** native `<select>` · **không** asset-type |
| description | Mô tả / phản ánh hiện trường | `Text` multiline | * | view=locked | |
| address | Địa chỉ vị trí | `Text` | | view=locked | |
| lat | Vĩ độ | `Text` (number) | * | view=locked | GPS pair |
| lng | Kinh độ | `Text` (number) | * | view=locked | GPS pair |
| road | Tuyến đường | `SearchInput` | | view=locked | **road-route** 38 — **cấm** Input Text (GAP-PO-CIT-01) |
| chainage | Lý trình (Km) | `Text` | | view=locked | vd Km 12+350 |
| status | Trạng thái xử lý | `SearchInput` static 5 | * | view=locked | **cấm** native `<select>` |
| source | Nguồn | `Text` readonly | auto | all readonly | luôn `citizen` |
| reportedAt | Thời gian báo cáo | `Date` datetime-local | * | view=locked | ISO offset |
| mediaMeta | Ảnh/Video | `Text` filenames mock | | view=locked | P1 stub · presign P2 |
| otp | OTP | — | | **DEFER** | không field P1 list pack |

### Status values (label VN)

| value | Label |
|-------|--------|
| `draft` | Nháp |
| `sent` | Đã gửi |
| `received` | Đã tiếp nhận |
| `processing` | Đang xử lý |
| `done` | Hoàn thành |

### Incident types (static — **không** CUC2 asset-type)

| value | Label |
|-------|--------|
| `o-ga` | Ổ gà / mặt đường hư |
| `sat-lo` | Sạt lở / taluy |
| `bien-bao` | Biển báo / ATGT |
| `ngap` | Ngập / thoát nước |
| `vat-can` | Vật cản lòng đường |
| `khac` | Khác / phản ánh hiện trường |

### Seed tuyến

| Demo | Canonical `road-route.code` |
|------|------------------------------|
| QL.1 · Chi cục II.1 | **`QL.1`** — khớp 38 · **cấm** invent ngoài seed |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| SearchInput `road` filter + form — **cấm** Text | GAP-PO-CIT-01 · GAP-DA-CIT-ROAD |
| Zone B filter tuyến | GAP-PO-CIT-02 · GAP-DA-CIT-FILTER-ROAD |
| Full-page form · 5 cột · header chrome · View locked | GAP-PO-CIT-03 · GAP-P2-FORM-GRID-05 |
| Badge ≠ feedback | GAP-PO-CIT-10 · GAP-F-CIT-04 |
| AppLayout definite height · title không clip | GAP-P2-LAYOUT-06 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |

## 4. Form full-page wire

```
[← Quay lại]                         [Hủy] [Tạo mới / Lưu thay đổi]
Title «Báo sự cố mới» + hint
THÔNG TIN NGƯỜI BÁO
[Mã] [Trạng thái] [Họ tên] [SĐT] [Email]     ← 5 cột
SỰ CỐ
[Loại] [Thời gian] [Nguồn] [Ảnh] + [Mô tả span 5]
VỊ TRÍ
[Địa chỉ span 5] [Lat] [Lng] [Tuyến] [Lý trình]
View = cùng fields locked — cấm <dl> · cấm footer Lưu
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO
- Leaflet / OTP / Kind G public: **out of pack**

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/citizen-list-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **Full-page** · `formSurface=full` · `data-form-cols=5` · header chrome · View locked |
| Lookups | SearchInput combo mock road-route (`QL.1` …) · status · incidentType |
| SSOT | `list-shell-prototype.md` · **`form-surface-prototype.md`** · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/ui/prototype/citizen-list-prototype.html` |

### List wire

```
[A] fa-users + «Cổng người dân» + badge ≠ feedback
[B] SearchInput · status SearchInput · road SearchInput · Làm mới · Lịch sử · fa-cog | [+ Tạo mới]
[C] «Inbox sự cố công dân» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / public (out of pack)

- Kind G public host + tra cứu mã: demo only — **P2**
- Leaflet Kind F pin: **P2**
- Presign upload: **MISSING** · `mediaMeta` string P1
- OTP / SMS / PII enc-at-rest: **DEFER**
- Incident adapter `source=citizen`: **OUT P1**

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-CIT-01..10 giữ nguyên. SA map lookup `road-routes` + list query `?search=&status=&road=&page=&pageSize=`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*`.

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent self-confirm · chain SA **pending** enqueue.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form |
| Field inventory | §3 · SearchInput `road` / `incidentType` / `status` |
| Filters | search · status · **road** → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/integration/citizen-incidents` + BFF `web-bff/api/v1/integration/citizen-incidents` |
| Lookups (SA chốt) | Master `road-routes` · static enum type/status |
| Entity | `CitizenIncident` · `rmms_citizen_incidents` · SHARE=tenant_keep · **cấm** parent JSON |
| Seed | `QL.1` |
| Next | SA **pending** (chain · autoApprove ON) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.3 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.3 |
| rulesVersion | 2026.08.15.5 |
| generatedAt | 2026-08-15T08:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorPo | sha256:po-requirement-task_a77e191e |
| contentHashPriorDataAnaly | sha256:aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023 |
