# PO — patrol (Tuần đường / tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`PatrolFormPage`) |
| status | `done` |
| requestSource | run packet `task_af761fcc` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **OFF** (Design gate → `await_confirm` khi tới lượt) |
| prior | data-analy `done` · controlHint `specs/_data-analy/features/patrol-control-hint.md` · hash `1d25897d8f…` · **no Excel cluster** (handoff path cluster `specs/patrol/specs/_data-analy/clusters/patrol.md` **không tồn tại** — SSOT = feature controlHint) |
| updatedAt | `2026-08-14T18:00:00.000Z` |
| taskId | `task_af761fcc` |

## 1. Goal

Chỉnh trang **Tuần đường / tuần kiểm** Kind B catalog list + form full-page: shell A–D · toolbar · search work · row menu · View = display (`<dl>`) · Create/Edit/Copy. Align demo → MFE `Linm.Web.RMMS.Field` `/patrol` · BE `Linm.RMMS.WebService` domain **Patrol** · `api/v1/patrol/sessions`. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

Persona: Tuần đường · Hạt trưởng giám sát.

Pack này **không** clone Kind E report / Kind F Leaflet / KPI / chrome demo. List CRUD sessions **đã live** — PO chốt **controlHint + GAP** sau data-analy (form `route` SearchInput · filter tuyến · Design stale Slideout).

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind E report + Leaflet + KPI (Signed) | Giữ visual SSOT demo; pack **không** clone chrome/map/KPI |
| MFE list | Kind B `/patrol` (prior pack) | 1× `LinPageLayout` · Zone A–D · `LinCatalogDataGrid` kéo cột default ON · footer `LinCatalogListPagination` — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| MFE form | Full-page `PatrolFormPage` · `route` = **Input Text** · prior Design.md **Slideout + View=`readOnly`** (stale) | **Giữ full-page** · `route` = **SearchInput** `road-route` (38) · View = **`<dl>` display** (**cấm** Slideout · **cấm** View=`readOnly` Input) · footer Lưu/Hủy · leave-confirm dirty |
| Filter | Search + status SearchInput | + SearchInput tuyến `road-route` · **cấm** free-text tuyến |
| Seed | MFE `TD-20260808-001…` · `QL.1` (khớp CUC2) | Giữ `QL.1` — **không** invent mã ngoài 38 |
| API | `api/v1/patrol/sessions` CRUD live | Giữ CRUD · BFF `web-bff/api/v1/patrol/sessions` · **+** `GET …/sessions?route=` · validate Route ∈ catalog · lookup Master `road-routes` |
| BE | `Linm.RMMS.WebService` · Patrol | `PatrolSession` · `rmms_patrol_sessions` · SHARE=`tenant_keep` · `Route` varchar(64) → validate ∈ 38 |

## 3. DoD (đo được)

1. List load + **search work** (mã · NV · tuyến · loại · status) — page=1 khi filter đổi.
2. Zone B: SearchTextInput search · SearchInput status · SearchInput **tuyến** `road-route` · Tạo mới **primary trên B** (**cấm** Thêm mới trên A) · Làm mới · config `fa-cog` · History stub · Delete.
3. Zone C: grid STT · Mã · Nhân viên · Tuyến · Loại tuần · Ngày KH · Check-in · Coverage % · Trạng thái · Offline · actions; row menu **Xem · Sửa · Sao chép · Xóa · Lịch sử** (history stub P1).
4. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
5. Form full-page: validate + save · leave-confirm dirty · Copy → POST new · IdCode `TD-yyyyMMdd-nnn` readonly · footer-only Lưu/Hủy.
6. View = **display `<dl>`** (không Input `readOnly` xám; không disabled toàn form).
7. Lookup: `route` = SearchInput master 38 — **cấm** free-text. `userName` = Text P1.
8. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build.
9. Live shell: title + toolbar + grid/empty **không** blank/title-clip.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol.md` | feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md` | control-map |
| CTX-03 | `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md` | actions |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/patrol-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/patrol/patrol.html` | page |
| DI-01 | — | **no Excel cluster** (synthetic + demo + CUC2) |
| DI-02 | `specs/_data-analy/features/patrol-control-hint.md` | controlHint |
| DI-03 | `specs/_data-analy/shared-catalogs/road-route-seed.json` | 38 tuyến · có `QL.1` |
| MFE | `Linm.Web.RMMS.Field` `/patrol` · `/patrol/new` · `/patrol/:id` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol | API |

## 5. controlHint (PO chốt từ data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text (mã · NV · tuyến · loại · status) |
| status | Trạng thái | `SearchInput` | enum: Đang tuần · Hoàn thành · Bỏ sót · Offline queue · (trống = tất cả) |
| route | Tuyến đường | `SearchInput` | **road-route** (38) |
| userName | Nhân viên | `Text` | P1 không master user |
| orgUnit | Công ty / Nhân viên | `SearchInput` | **org-unit** — **P2** (không block CRUD session) |
| staffType | Loại nhân viên | `SearchInput` | enum — **P2** (không field DTO session) |
| fromDate / toDate | Từ / Đến | `Date` | **P2** Kind E; P1 không bắt buộc query plannedDate |
| includeNonCheckin | Xuất người không checkin | `Checkbox` | **P2** export |

### Form fields

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã phiên tuần | `Text` readonly IdCode | auto |
| userName | Nhân viên | `Text` | * |
| route | Tuyến đường | `SearchInput` `road-route` | * |
| patrolType | Loại tuần | `SearchInput` | * enum Tuần đường · Tuần kiểm |
| plannedDate | Ngày kế hoạch | `Date` (`type=date`) | * |
| startedAt | Bắt đầu thực tế | `Date` (datetime-local) | |
| checkInCount | Số điểm check-in | `Text` (number ≥0) | * |
| coveragePercent | Coverage % | `Text` (number 0–100) | |
| status | Trạng thái | `SearchInput` | * 4 enum |
| offlineQueued | Hàng đợi offline | `SearchInput` | true/false · Offline queue / Online |
| note | Ghi chú | `Text` | |
| updatedAt | Cập nhật | `Date` readonly | View display |

## 6. Open questions — PO chốt (UNCLEAR / GAP data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-PAT-01 · GAP-DA-PAT-ROUTE | Form `route` Text vs SearchInput | **SearchInput** `catalogKind=road-route` trên form. **Cấm** Input Text cho tuyến. |
| GAP-PO-PAT-02 · GAP-DA-PAT-FILTER-ROUTE | Zone B chưa filter tuyến · API chưa `?route=` | **IN P1:** Zone B SearchInput tuyến · SA thêm `GET …/sessions?route=` (exact code) · validate ∈ 38. |
| GAP-PO-PAT-03 · GAP-DA-PAT-DESIGN-STALE | Design.md Slideout + View=`readOnly` vs live full-page `<dl>` | **Full-page** `PatrolFormPage`. **Cấm** Slideout · **cấm** Resource · **cấm** View=`readOnly` Input. Design **regen** prototype A–D + form full-page. |
| GAP-PO-PAT-04 · GAP-DA-PAT-USER | userName Text vs SearchInput users | **Giữ Text P1.** Master `users` = P2 / UNCLEAR (không seed CUC2). Demo TreePicker NV = mock only. |
| GAP-PO-PAT-05 · GAP-DA-PAT-MAP | Kind E+F check-ins / tracks / coverage / kpi | **P2 / DEFER** — không block list CRUD sessions. |
| GAP-PO-PAT-06 | orgUnit / staffType / date range / export | **P2** — không block P1 list pack. Excel export **out of scope**. |
| GAP-PO-PAT-07 | parent JSON / ERP path | **Cấm** parent JSON string. **Cấm** `ERP.*` · `api/v1/rmms/*`. |
| GAP-F-PAT-01 | Offline conflict merge | **Out of pack** — flag only (context). |

## 7. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + status/route apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |

## 8. Out of scope (this pack)

- Full Leaflet / Kind E report / Kind F map / KPI strip (giữ demo)
- `POST …/check-ins` · `…/tracks` · `GET …/coverage` · `…/kpi`
- Timescale GPS · PostGIS coverage compute
- Offline-batch merge conflict (GAP-F-PAT-01)
- Excel export wizard · report trees Tuần đường / Tuần kiểm
- Master users SearchInput · org-unit TreePicker list filter
- Invent route code ngoài CUC2 38

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B catalog list A–D + **full-page** form |
| Prototype | content-only zones A–D · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=OFF` → **await_confirm** (user Approve board) |
| controlHint | bảng §5 — **không** Text cho `route` · **không** Slideout / View=`readOnly` Input |
| Demo visual | `patrol-demo.html` → `patrol/patrol.html` |
| BE | `api/v1/patrol/sessions` · lookup master `road-routes` · query `?route=` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T18:00:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.09.02` · PO SSOT sibling attendance/asset `2026.08.14.5`) |
| contentHashPriorDataAnaly | sha256:1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
