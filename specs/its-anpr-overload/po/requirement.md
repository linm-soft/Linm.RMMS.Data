# PO — its-anpr-overload (ITS ANPR · Quá tải / tốc độ)

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` — Kind **B** catalog list + Kind **D** HITL slideout · S-LIST / S-DETECT · S-MAP **DEFER** |
| requestSource | scan/run packet `task_c7983aa7` · `/agent-qldb-workflow` · roleOnly=`po` · Autopilot ON · autoApprove **OFF** |
| status | `done` |
| controlHint | `specs/_data-analy/features/its-anpr-overload-control-hint.md` |
| contentHash (data-analy) | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| grid_standard | `po-design-grid-standard` |
| slideout_layout | `footer_actions_only` |
| leave_standard | `LeaveConfirmModal` · `/implement-show-leave-confirm` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** Zone F-only / `configHint` / `LinListTableConfigModal` |
| updatedAt | `2026-08-17T09:40:06.525Z` |

> **DOMAIN-MAP:** slug `its-anpr-overload` → **AiVision** · API **`api/v1/ai-vision/anpr/events`** (normalize legacy `/api/v1/its/anpr/*`). **Cấm ERP.***  
> **≠** `its-traffic-detect` (biển báo/cọc) · `ai-vision` (ổ gà) · `ai-asset-detect` (Asset) · `toc` (ùn tắc).  
> **Cấm** badge/tag `AI` trên header / `beforeToolbar` (`ai-chrome-skip`).

## 1. Goal

Align demo **ITS ANPR** (camera biển số + tốc độ + WIM → Cục Đăng kiểm → HITL Confirm/Dismiss lỗi) → MFE `Linm.Web.RMMS.AiVision` route `/its-anpr-overload` + BE `Linm.RMMS.WebService` domain **AiVision**.

Kind B catalog parity: 1× `LinPageLayout` · toolbar · search **work** · `LinCatalogDataGrid` · footer `LinCatalogListPagination` · row menu · View/Create/Edit/Copy/Delete. Kind D slideout HITL **footer actions only** · leave-confirm dirty. Detail panel S-DETECT: ① Camera · ② Registry · ③ Violations. P1: Confirm → Incident **stub/link** · registry mock · S-MAP **DEFER**.

## 2. Current → New (new_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind B feed + detail panel + Kind D Confirm · localStorage · mock registry | Giữ UX SSOT; **không** clone chrome GOVOne / demo checklist |
| MFE | `Linm.Web.RMMS.AiVision` · `/its-anpr-overload` | Kind B list + S-DETECT panel + Kind D HITL · list config **FULL** |
| API client | `api/v1/ai-vision/anpr/events` (canonical) | BFF proxy · local fallback P1 OK |
| BE | AiVision · `rmms_ai_vision_anpr_events` | DOMAIN-MAP slug · **cấm** ERP.* · **cấm** bare `/its/anpr` without AiVision prefix |
| Persist | Demo localStorage → API | registry snapshot JSON · violations JSON · `incident_id` sau Confirm |

## 3. Personas / DoD

- Persona: ITS ops · tuần đường · thanh tra tải trọng
- DoD P1 (đo được):
  1. List load + **search work** (biển số · `ANPR-*`)
  2. Filters Zone B: `cameraId` · `status` · SearchInput
  3. Toolbar: **Mô phỏng** · Tra cứu · Xác nhận · Refresh · History · config `fa-cog` (**FULL ui-schema**) · **+ Tạo** · **không** badge AI trên header
  4. Row menu: Xem · Sửa · Copy · Confirm · Dismiss · Lịch sử · Xóa
  5. View = `readOnly` (không disabled xám)
  6. Create/Edit validate + **leave-confirm** dirty (`LeaveConfirmModal`)
  7. Select row → S-DETECT: Camera + Registry lookup + Violations (SPEED / OVERLOAD_* / NO_REGISTRY)
  8. HITL Confirm / Dismiss · note · status Pending→Confirmed|Dismissed · Confirm → Incident stub/link
  9. KPI strip (optional): Total · Pending · Critical · Confirmed
  10. FE `yarn build` + typecheck PASS · BE `dotnet build` PASS · **cấm ERP.***

## 4. CTX / DEM inventory

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/its-anpr-overload.md` | feature P0 | Flow 3 bước · GAP-ANPR-* |
| CTX-02 | `docs/context/18-ITS-ANPR-OVERLOAD-SPEC.md` | P2 SSOT | Rule engine · API · schema |
| CTX-03 | `docs/context/09-PLAN-P1-V2.md` · V2-C2 | plan | |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html` | Signed demo | feed + panel + slideout |
| DEM-02 | `…/js/its-anpr-overload-data.js` | seed | ANPR-2401…2405 · CAM-* · REGISTRY |
| DEM-03 | `…/js/its-anpr-overload-app.js` | app | simulate · lookup · Confirm/Dismiss |
| DI | — | N/A | controlHint từ demo+context · không Excel |
| controlHint | `specs/_data-analy/features/its-anpr-overload-control-hint.md` | P0 | **copy bảng §7** · status=`done` · hash khớp |
| MFE | `Linm.Web.RMMS.AiVision` | board | uiRepo tick trước Dev |
| BE | `Linm.RMMS.WebService` · `api/v1/ai-vision/anpr/events` | board | beRepo tick trước Dev · **cấm ERP.*** |

### List columns (required)

STT · Mã (`ANPR-*`) · Biển số · Tốc độ · WIM · Camera · Lúc · TT · Mức lỗi · actions

### Seed DoD (demo → real)

- 5 Pending: ANPR-2401…2405 (SPEED / OVERLOAD_GVW / ok / SPEED+GVW / NO_REGISTRY)
- Cameras: CAM-QL1-286 · 312 · 340
- Registry mock 4 plates + 1 unknown `29C-888.00`
- IdCode `ANPR-*` (P2 gợi ý `ANPR-YYYYMMDD-NNNN`)
- Confirm HITL bắt buộc · Confirm → Incident stub P1

## 5. Screens

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | Feed sự kiện ANPR | Kind B full page · A–D · KPI | `/its-anpr-overload` | — | search, clear-filter, simulate, lookup, refresh, history, **config FULL**, +Tạo |
| S-DETECT | Chi tiết + đăng kiểm + lỗi | Panel (cùng page / split) | row select | — | lookup registry · show violations |
| S-FORM | Form sự kiện + HITL | Kind D Slideout | `?form=` / row | C/E/V | **footer only**: Hủy · Bỏ qua · Xác nhận lỗi · Đóng/Sửa (View) |
| S-MAP | Bản đồ camera | — | — | — | **DEFER** P2 — không pin map P1 |

**devSlash:**

| Surface | Slash | Notes |
|---------|-------|-------|
| S-LIST / CRUD | `/agent-dev` | Kind B list + form parity |
| S-DETECT / HITL Confirm·Dismiss | `/agent-dev-ai-detect` | `rmms-form-agent-map` · **cấm** badge AI |
| Camera nguồn (live) | `/agent-dev-camera-connect` | P1 = simulate OK · live DEFER P2 |
| Map | — | S-MAP DEFER · **không** `/agent-dev-oms-map` P1 |

**Cấm GAP-PO-SCREEN-01.** Design prototype **content-only** zones A–D + detail + slideout — skip note/sidebar/menu/chrome demo. **Cấm** text «Kind D» / «stub» / checklist khách trên UI end-user.

## 6. Grid list AC (REQUIRED · Kind B)

| Area | Acceptance |
|------|------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer · 1× `LinPageLayout` (**cấm** nested CatalogListShell) |
| **Toolbar FULL** | Mô phỏng · Tra cứu · Refresh · Lịch sử · Sửa config (`fa-cog`) · View/Edit · **+ Tạo** · **không** AI badge header |
| **Grid menu** | Xem / Sửa / Copy / Confirm / Dismiss / Lịch sử / Xóa · help đúp/Ctrl+chuột phải |
| **Config FULL** | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · List/width/filter/sort/Thêm cột · `useCatalogUiSchema` · `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` + Seed `{catalogKind}` · kéo cột default ON · **cấm** Zone F-only · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover `const columns` / `LinCatalogDataColumn` |
| **Grid flow** | Sort cột · filter cột panel · chọn dòng · flex+skeleton |
| **Filter Zone B** | SearchInput + Dropdown camera/status — **search must work** · **không** nút Tìm trùng toolbar · filter-bar-layout-hard (input cụm phải) |
| **Form pair** | Create/Edit/View/Copy → Slideout · Confirm/Dismiss → footer / Modal stacked nếu cần |
| **Pagination** | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar / raw table footer |
| **Tree?** | no |
| **SSOT** | `shared-grid-example` · `po-design-grid-standard` · `slideout-form-layout` · `tl-grid-full-flow` |

## 6b. Leave / alert (REQUIRED · GAP-PO-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | native `window.confirm` / `beforeunload` only |
| Xóa / chặn Confirm | **`useAlert` / `Modal`** | `window.alert` / `prompt` |
| Confirm / Dismiss trên Slideout | **Modal stacked** nếu cần (`dev-history-alert-overlay`) | native confirm |
| History | `LinCatalogHistoryModal` | custom history dialog ad-hoc |

## 7. Control hints (copy data-analy)

### 7.1 List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm biển số | `SearchInput` | text | plate · id (`ANPR-*`) |
| cameraId | Camera | `Dropdown` | enum | `all` + CAM-* seed |
| status | Trạng thái | `Dropdown` | enum | Tất cả · Pending · Confirmed · Dismissed |

### 7.2 List columns (schema seed)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã | `Text` | visible · sort · `ANPR-*` |
| plate | Biển số | `Text` | visible · sort |
| speedKmh | Tốc độ | `Text` (number) | visible · show vs limit |
| wimKg | WIM | `Text` (number) | visible · kg |
| cameraLabel | Camera | `Text` | visible · km |
| capturedAt | Lúc | `Date` | visible · sort |
| status | TT | `Dropdown` | visible · sort |
| severity | Mức lỗi | `Dropdown` | visible · ok/warn/critical |

### 7.3 Form / HITL fields (Kind D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã sự kiện | `Text` | auto | `ANPR-*` readonly |
| plate | Biển số | `Text` | * | |
| cameraId | Camera | `Dropdown` | * | |
| speedKmh | Tốc độ (km/h) | `Text` (number) | * | |
| wimKg | WIM (kg) | `Text` (number) | | optional |
| confidence | Confidence | `Text` (number) | | 0–1 · UI % |
| capturedAt | Thời điểm | `Date` | * | |
| status | Trạng thái | `Dropdown` | * | Pending/Confirmed/Dismissed |
| owner | Chủ xe | `Text` | | registry · readonly |
| vehicleType | Loại xe | `Text` | | registry |
| axleCount | Số trục | `Text` (number) | | registry |
| axleConfig | Cấu hình trục | `Text` | | registry |
| gvwMaxKg | GVW max | `Text` (number) | | registry |
| payloadMaxKg | Payload max | `Text` (number) | | registry |
| curbWeightKg | Tự trọng | `Text` (number) | | registry |
| inspectExpire | Hạn kiểm | `Date` | | registry |
| violationCodes | Mã lỗi | `Text` | | SPEED · OVERLOAD_* · NO_REGISTRY · readonly |
| note | Ghi chú HITL | `Text` | | multiline · dirty leave-confirm |
| incidentId | Mã Vấn đề | `Text` | | readonly sau Confirm |

## 8. APIs (đề xuất SA)

Domain **AiVision** · `api/v1/ai-vision/anpr/events` · BFF `web-bff/api/v1/ai-vision` · **cấm ERP.*** · Spec P2 `/its/anpr/*` → **normalize** dưới AiVision.

| Op | Method | Path |
|----|--------|------|
| list | GET | `/api/v1/ai-vision/anpr/events?cameraId=&status=&q=` |
| init-data | GET | `/api/v1/ai-vision/anpr/events/init-data` |
| get | GET | `/api/v1/ai-vision/anpr/events/{id}` |
| create / ingest | POST | `/api/v1/ai-vision/anpr/events` |
| update | PUT | `/api/v1/ai-vision/anpr/events/{id}` |
| soft-delete | DELETE | `/api/v1/ai-vision/anpr/events/{id}` |
| simulate | POST | `/api/v1/ai-vision/anpr/events/simulate` |
| lookup registry | POST | `/api/v1/ai-vision/anpr/events/{id}/lookup` |
| confirm → Incident | POST | `/api/v1/ai-vision/anpr/events/{id}/confirm` |
| dismiss | POST | `/api/v1/ai-vision/anpr/events/{id}/dismiss` |
| registry proxy | GET | `/api/v1/ai-vision/anpr/registry/vehicles/{plate}` |

Entity đề xuất: `rmms_ai_vision_anpr_events` · status Pending/Confirmed/Dismissed · registry snapshot JSON · violations JSON · `incident_id` sau Confirm.

**Rule codes (SSOT):** `SPEED` · `OVERLOAD_GVW` · `OVERLOAD_PAYLOAD` · `NO_REGISTRY` — ngưỡng **không** hardcode MFE (tenant/config P2).

## 9. Out of scope (this pack)

- S-MAP pin / OMS map realtime — **DEFER**
- Live camera/WIM ingest thật — P2 (P1 = simulate)
- Real Cục Đăng kiểm adapter (P1 mock OK)
- Confirm → Incident domain đầy đủ (P1 stub/link)
- Legacy path `/api/v1/its/anpr/*` không qua AiVision
- ERP.* / `Domains/Master` / `api/v1/rmms/*`
- Badge/tag `AI` trên header

## 10. Open questions / GAP list

| ID | Question | Default / Status |
|----|----------|------------------|
| GAP-ANPR-01 | BE MISSING → P2 | **IN SCOPE pack** — AiVision events API |
| GAP-ANPR-02 | Registry = mock | P1 mock · real adapter **DEFER P2** |
| GAP-ANPR-03 | Confirm → incident thật | P1 stub/link · full Incident **DEFER P2** |
| GAP-AI-HITL-01 | Slideout Confirm/Dismiss | **CLOSED in AC** — Kind D footer |
| GAP-AI-DETECT-CHROME | AI badge header | **CLOSED** — **không** AI badge |
| GAP-PO-LEAVE-01 | Leave/alert | **CLOSED** — §6b `LeaveConfirmModal` |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | List config | **CLOSED in AC** — Config FULL ui-schema |
| GAP-PO-SCREEN-01 | Screens | **CLOSED** — §5 S-LIST/S-DETECT/S-FORM · S-MAP DEFER |
| `mfeStdRoute` | — | `/its-anpr-overload` · `route_a` |
| `beRepo` / `uiRepo` | Board | **pending** tick (**không auto**) trước Dev |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| phase_from / phase_to | `po` → `design` |
| STATUS | PO **done** · Design **pending** · autoApprove=OFF → Design xong → `await_confirm` |
| controlHint | `_data-analy/features/its-anpr-overload-control-hint.md` · §7 |
| Screens | S-LIST · S-DETECT · S-FORM · S-MAP **DEFER** |
| Kind | B list A–D + D slideout footer-only · detail panel · **no AI badge** |
| grid_standard | `po-design-grid-standard` · Config **FULL** |
| Leave | `LeaveConfirmModal` · §6b |
| peerStdUrl gợi ý | `http://localhost:9303/ai-vision/ai-asset-detect` (cùng formType ai · Kind B+HITL) |
| packKind | `ai` |
| APIs | §8 — SA chốt |
| Next | `/agent-design` · user Approve board khi `design_confirm` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-17T09:40:06.525Z |
| versionGate | ok |
| contentHash | sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865 |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
