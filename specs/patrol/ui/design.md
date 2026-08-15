# Design — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`PatrolFormPage`) |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| design_confirm | `approve` (`task_5e7961be`) |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (`/patrol`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/sessions` |
| prior | PO `done` · `po/requirement.md` · GAP-PO-PAT-01..07 · data-analy hash `1d25897d8f…` |
| autoApprove | **ON** (`task_5e7961be`) → agent confirm Design |
| updatedAt | `2026-08-14T18:10:00.000Z` |
| taskId | `task_5e7961be` |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/patrol.md` | Kind B list + full-page; demo E+F **không** clone |
| DEM-01 | `Linm.RMMS.Demo/.../patrol-demo.html` → `patrol/patrol.html` | Visual SSOT — skip chrome/map/KPI |
| DI-02 | `specs/_data-analy/features/patrol-control-hint.md` | controlHint SSOT |
| DI-03 | `road-route-seed.json` | **38** tuyến · `QL.1` · **cấm** invent ngoài seed |

Persona: Tuần đường · Hạt trưởng giám sát. Pack **không** clone Kind E report / Kind F Leaflet.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Footer | `LinCatalogListPagination` — **cấm** footerPagination / pageSizeBar / raw table production |
| Form pattern | **Full-page** `PatrolFormPage` C/E/V/Copy — **cấm** Resource · **cấm** Slideout (GAP-PO-PAT-03) |
| Routes | List `/patrol` · Create `/patrol/new` · Edit/View `/patrol/:id` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | **`<dl>` / display** — **cấm** Input `readOnly` xám · **cấm** disabled xám toàn form |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Sổ phiên tuần tra | list | **A Header · B Toolbar+filter · C Grid · D Pagination** | SearchTextInput + SearchInput status + SearchInput route |
| Form phiên | create/edit/view/copy | **Full-page** header + body + footer | 13 fields P1 · footer-only Lưu/Hủy |

### Zone A — Header

- Icon `fa-route` + title **Tuần đường / tuần kiểm** (22px)
- **Cấm** nút Thêm mới / Tạo mới trên A

### Zone B — Toolbar + filter (PO DoD-2 · GAP-DA-PAT-FILTER-ROUTE **IN P1**)

**Trái (filter + icon):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text — mã · NV · tuyến · loại · status |
| status | Trạng thái | `SearchInput` | enum: (trống=tất cả) · Đang tuần · Hoàn thành · Bỏ sót · Offline queue — **cấm** native `<select>` production |
| route | Tuyến đường | `SearchInput` | **road-route** (38) — **cấm** free-text · display `code — name` |
| — | Làm mới | `fa-sync-alt` | clear filter + reload · page=1 |
| — | Lịch sử | `fa-history` | stub P1 (cần 1 dòng) |
| — | Sửa config | `fa-cog` | column config modal |
| — | Xóa | `fa-trash` | khi có selection |

**Phải:** **Tạo mới** primary (`fa-plus`) — **chỉ trên B** (**cấm** nhãn «Thêm mới» trên A).

**Cấm trên B (pack này):** Xuất Excel (P2) · Đề xuất / Chờ duyệt · orgUnit / staffType / date range (P2).

Filter đổi → **page=1** (search must work).

### Zone C — Grid

- Card title: **Sổ phiên tuần tra / check-in**
- Help: nhấn đúp / menu dòng — Xem · Sửa · Sao chép · Xóa · Lịch sử
- Flex + skeleton load — **cấm** blank body (GAP-P2-LAYOUT-06)
- Columns (kéo cột ON): STT · □ · **Mã phiên** · **Nhân viên** · **Tuyến** · **Loại tuần** · **Ngày KH** · **Check-in** · **Coverage %** · **Trạng thái** · **Offline** · ⋯
- Tuyến hiển thị `QL.1` (master 38)
- Row menu: **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1)
- Click mã → View **full-page** `<dl>`

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32.

## 3. Field inventory (form) — Design chốt controlHint

| uiField | Label VN | Control | Required | FormMode lock | Notes |
|---------|----------|---------|----------|---------------|-------|
| code | Mã phiên tuần | `Text` readonly IdCode | auto | all readonly | `TD-yyyyMMdd-nnn` · copy = mã mới |
| userName | Nhân viên | `Text` | * | view=`<dl>` | P1 **không** SearchInput users (GAP-PO-PAT-04) |
| route | Tuyến đường | `SearchInput` | * | view=`<dl>` | master **road-route** 38 — **cấm** Input Text (GAP-PO-PAT-01) |
| patrolType | Loại tuần | `SearchInput` | * | view=`<dl>` | enum Tuần đường · Tuần kiểm — **cấm** native `<select>` production |
| plannedDate | Ngày kế hoạch | `Date` (`type=date`) | * | view=`<dl>` | UTC store / local display |
| startedAt | Bắt đầu thực tế | `Date` (datetime-local) | | view=`<dl>` | ISO offset |
| checkInCount | Số điểm check-in | `Text` (number ≥0) | * | view=`<dl>` | |
| coveragePercent | Coverage % | `Text` (number 0–100) | | view=`<dl>` | |
| status | Trạng thái | `SearchInput` | * | view=`<dl>` | 4 enum |
| offlineQueued | Hàng đợi offline | `SearchInput` | | view=`<dl>` | Offline queue / Online |
| note | Ghi chú | `Text` | | view=`<dl>` | |
| updatedAt | Cập nhật | `Date` readonly | | all readonly | View display |

### Status values (label VN)

| value | Label |
|-------|--------|
| `in_progress` | Đang tuần |
| `done` | Hoàn thành |
| `missed` | Bỏ sót |
| `offline_queue` | Offline queue |

### Patrol type

| value | Label |
|-------|--------|
| `road` | Tuần đường |
| `inspect` | Tuần kiểm |

### Seed tuyến

| Demo / MFE | Canonical `road-route.code` |
|------------|------------------------------|
| QL.1 · Chi cục II.1 | **`QL.1`** — khớp 38 · **cấm** invent ngoài seed |

### CSS / layout gates

| Rule | Gap |
|------|-----|
| SearchInput `route` filter + form — **cấm** Text | GAP-PO-PAT-01 · GAP-DA-PAT-ROUTE |
| Zone B filter tuyến | GAP-PO-PAT-02 · GAP-DA-PAT-FILTER-ROUTE |
| Full-page form · View `<dl>` | GAP-PO-PAT-03 · GAP-DA-PAT-DESIGN-STALE |
| userName Text P1 | GAP-PO-PAT-04 |
| AppLayout definite height · title không clip | GAP-P2-LAYOUT-06 |
| Input pad 6×10 · min-height 32 · focus shadow | GAP-P2-CSS-* |
| Spacing 4/8/16 · **cấm** `filterMaxWidth` | T-UI-UX-01 |

## 4. Form full-page wire

```
[Header] [← Quay lại]  Title «Phiên tuần tra» · badge Tạo mới|Sửa|Xem|Sao chép
         [📋 Sao chép] [✏ Sửa] khi view/edit — không Lưu/Hủy trên header (footer-only)
[Hint] leave-confirm dirty
[Body C/E/Copy] 2-col fields · SearchInput tuyến · SearchInput loại · SearchInput trạng thái · SearchInput offline
[Body View] <dl> display — không Input xám
[Footer] [Hủy] [Lưu] — ẩn khi view
```

- Copy → POST new · IdCode mới
- Dirty leave-confirm khi Hủy / Quay lại
- **Cấm** parent JSON string trên field/DTO
- Leaflet / KPI / check-ins / tracks: **out of pack** (P2)

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/patrol-list-prototype.html` |
| Zones | **A–D** content-only — skip note/sidebar/menu/chrome |
| Form | **Full-page** (không Slideout) · View = `<dl>` · footer-only Lưu/Hủy |
| Lookups | SearchInput combo mock road-route (`QL.1` …) · status · patrolType · offline |
| SSOT | `list-shell-prototype.md` · `erp-control-icon-map` · VatTu pager |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |

### List wire

```
[A] fa-route + «Tuần đường / tuần kiểm»
[B] SearchTextInput · status SearchInput · route SearchInput · Làm mới · Lịch sử · fa-cog · Xóa | [+ Tạo mới]
[C] «Sổ phiên tuần tra / check-in» · LinCatalogDataGrid mock · ⋯ menu
[D] Tổng · Hiển thị [50|100|200|500] · pager FA
```

## 5. Map / AI / report (out of pack)

- Leaflet Kind F + KPI strip + Kind E report: demo only — **P2** (GAP-PO-PAT-05)
- `POST …/check-ins` · `…/tracks` · `GET …/coverage` · `…/kpi`: **P2**
- orgUnit / staffType / date range / Excel export: **P2** (GAP-PO-PAT-06)
- Offline conflict merge: **out of pack** (GAP-F-PAT-01)

## 6. Open questions (PO closed — Design không re-open)

GAP-PO-PAT-01..07 giữ nguyên. SA map lookup `road-routes` + list query `?search=&status=&route=&page=&pageSize=` + validate Route ∈ 38. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent self-confirm · chain SA **pending** enqueue.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · catalog A–D + **full-page** form |
| Field inventory | §3 · SearchInput `route` / `patrolType` / `status` / `offlineQueued` · Text `userName` |
| Filters | search · status · **route** → page=1 |
| Prototype · reviewUrl | § Prototype |
| API prefer | `GET/POST/PUT/DELETE api/v1/patrol/sessions` + BFF `web-bff/api/v1/patrol/sessions` |
| Lookups (SA chốt) | Master `road-routes` · **không** users P1 · **+** `GET …/sessions?route=` |
| Entity | `PatrolSession` · `rmms_patrol_sessions` · SHARE=tenant_keep · **cấm** parent JSON |
| Seed | `QL.1` · IdCode `TD-yyyyMMdd-nnn` |
| Next | SA **pending** (chain · autoApprove ON) |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` |
| C | DES-GRID-C2 | `LinCatalogDataGrid` + resize ON |
| D | DES-GRID-D | `LinCatalogListPagination` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T18:10:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.09.02` · Design SSOT sibling citizen `2026.08.14.5`) |
| contentHashPriorPo | sha256:task_af761fcc |
| contentHashPriorDataAnaly | sha256:1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
