# Data-analy — controlHint — patrol (Kind B catalog list + form)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| packKind | `list` |
| mode | `cluster_import` feature-scoped (retry `roleOnly=data_analy` · **no Excel** in ProductRoot · demo + context + CUC2 catalogs) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.08.20` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.14.5` |
| rulesVersion | `2026.08.14.9` |
| versionGate | `rechecked` |
| contentHash | `sha256:1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5` |
| headerFingerprint | `sha256:bd9ce13d763c39d04a56a9a24eee73013c09d3679bf0da9fb74ff2d3588bef35` |
| analyzedAt | `2026-08-14T17:50:00.000Z` |
| cluster | — (không Excel header · synthetic + demo HTML) |
| taskId | `task_36ea7fa2` |
| autoApprove | `OFF` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm ERP.*** · domain **Patrol** · BE `D:/AI-QLBD/Linm.RMMS.WebService`.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/patrol.md` | `1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md` | `13c2049d3f90c5835109e0625c1f372521f4d2dbe44a785fdefb534b80e92e8a` |
| Actions | `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md` | `3d2557d2d8217c9d89746ced6f6369864a7c0b352e9301d13b4703aa785e86e3` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/patrol-demo.html` | `dead8bcee1871db1d10ba5d3a1304ff1ffcaf6398b4cff4ebd4065eaccf003d7` |
| Demo page | `Linm.RMMS.Demo/src/demo/patrol/patrol.html` | `bd9ce13d763c39d04a56a9a24eee73013c09d3679bf0da9fb74ff2d3588bef35` |
| Shared catalogs | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` · `road-route-seed.json` | APPROVED A · 38 tuyến |
| MFE live (read) | `Linm.Web.RMMS.Field` · `/patrol` · `PatrolListPage` + `PatrolFormPage` | list pack Kind B đã có CRUD |
| Prior design.md | `specs/patrol/ui/design.md` | **STALE** Slideout + View=`readOnly` vs live full-page `<dl>` |

## Kind / zones (handoff Design)

Pack **list** = Kind **B** catalog (MFE Field). Demo HTML = Kind **E** report + Kind **F** map — **không** clone chrome/topnav/user menu vào MFE.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Tuần đường / tuần kiểm» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput (mã/NV/tuyến) · status SearchInput · **đề xuất** SearchInput tuyến `road-route` · Tạo mới primary · Refresh · Delete · config · History stub · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | Kind B **full-page** (live MFE `PatrolFormPage`) | C/E/V/Copy · View=`<dl>` display (**cấm** Slideout · **cấm** View=`readOnly` Input) · footer Lưu/Hủy · leave-confirm dirty |
| Map / KPI / report (demo) | Kind E+F | Leaflet live · KPI coverage/offline/tuần đường·kiểm · staff split — **P2** trên MFE list pack |
| Check-in / tracks / coverage compute | Kind E | API `…/check-ins` · `…/tracks` · `…/coverage` · `…/kpi` — **P2** (context §3) |

**Skip chrome:** logo · hamburger · user Hồ sơ/Đăng xuất demo · Ban.TK skin · govone/youtube/facebook · đổi mật khẩu · theme/font-size.

## Control hint — list filters (Zone B · list pack)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · NV · tuyến · loại · status (live MFE) |
| status | Trạng thái | `SearchInput` | enum | Đang tuần · Hoàn thành · Bỏ sót · Offline queue · (trống = tất cả) — live MFE đã SearchInput |
| route | Tuyến đường | `SearchInput` | **road-route** | Master 38 · **cấm** free-text; live list **chưa** có filter riêng — GAP |
| userName | Nhân viên | `Text` | text | **P1** không master user CUC2 · demo `<select id="fCompany">` = org+NV mock |
| orgUnit | Công ty / Nhân viên | `SearchInput` | **org-unit** | demo `fCompany` TreePicker · **P2** list pack (không block CRUD session) |
| staffType | Loại nhân viên | `SearchInput` | enum | demo `fStaffType` · **P2** (không field DTO session) |
| fromDate / toDate | Từ / Đến | `Date` | | demo datetime-local · **P2** Kind E; list P1 lọc theo `plannedDate` nếu SA thêm query |
| includeNonCheckin | Xuất người không checkin | `Checkbox` | bool | demo export modal · **P2** export |
| checkAll | Chọn tất cả | `Checkbox` | bool | grid selection SSOT — không persist |

## Control hint — form fields (phiên tuần · list pack)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã phiên tuần | `Text` | auto | IdCode `TD-yyyyMMdd-nnn` readonly |
| userName | Nhân viên | `Text` | * | P1 free text · **UNCLEAR** P2 `SearchInput` `users` (Integration) — live = `Input` |
| route | Tuyến đường | `SearchInput` | * | `catalogKind=road-route` · **cấm** Input Text (MFE hiện `Input` — **GAP-DA-PAT-ROUTE**) |
| patrolType | Loại tuần | `SearchInput` | * | enum Tuần đường · Tuần kiểm — live OK |
| plannedDate | Ngày kế hoạch | `Date` | * | `type=date` · UTC store / local display |
| startedAt | Bắt đầu thực tế | `Date` | | datetime-local · ISO offset |
| checkInCount | Số điểm check-in | `Text` (number) | * | ≥0 · KPI ≥3/ngày = tenant config P2 |
| coveragePercent | Coverage % | `Text` (number) | | 0–100 decimal |
| status | Trạng thái | `SearchInput` | * | 4 enum trên — live OK |
| offlineQueued | Hàng đợi offline | `SearchInput` | | true/false · nhãn Offline queue / Online — live OK |
| note | Ghi chú | `Text` | | |
| updatedAt | Cập nhật | `Date` | | readonly display View |

## Control hint — demo monitor / report (Kind E+F · **out of list-pack P1** / P2)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| company | Công ty / NV | `SearchInput` | **org-unit** | demo `#fCompany` · TreePicker legacy |
| routeId | Đoạn đường | `SearchInput` | **road-route** | demo `#fRoute` |
| staffType | Loại NV | `SearchInput` | enum | demo `#fStaffType` |
| from / to | Kỳ | `Date` | | datetime-local |
| search | Tìm | `SearchTextInput` | text | demo `#fSearch` |
| basemap | Lớp nền | map switcher | | OSM/Esri/sat · **cấm** clone GOVOne chrome |
| kpi-* | KPI strip | metric cards | | coverage · offline · tuần đường/kiểm · tốc độ · điểm |

Check-in điểm form (demo «+ Thêm check-in»): **P2** — không mở CRUD list pack.

## Lookup APIs (đề xuất SA — **chưa chốt** trừ CRUD đã DONE)

Domain **Patrol** · prefix `api/v1/patrol` · BFF `web-bff/api/v1/patrol` · repo `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** parent JSON.

| Lookup | API | controlHint consumer | BE |
|--------|-----|----------------------|-----|
| list | `GET /api/v1/patrol/sessions?search=&status=&page=&pageSize=` | Zone B + grid | **DONE** |
| by id | `GET /api/v1/patrol/sessions/{id}` | form View/Edit · XCO | **DONE** |
| create / update | `POST` / `PUT …/sessions` | form Create/Edit/Copy | **DONE** |
| soft delete | `DELETE …/sessions/{id}` | toolbar/row | **DONE** |
| list + route | `GET …/sessions?route=` | Zone B SearchInput tuyến | **MISSING** đề xuất SA (exact code) |
| road-route | Master `GET /api/v1/integration/road-routes/search` | SearchInput route | master pack |
| org-unit | Master org-unit search | filter Công ty P2 | master pack |
| users | Master Integration `users` | SearchInput userName P2 | **UNCLEAR** P1 Text |
| check-ins | `POST /api/v1/patrol/sessions/{id}/check-ins` | Kind E | **MISSING P2** |
| tracks | `POST …/{id}/tracks` | Kind F | **MISSING P2** |
| coverage | `GET …/{id}/coverage` | KPI | **MISSING P2** |
| kpi | `GET …/{id}/kpi` | KPI | **MISSING P2** |

Entity: `PatrolSession` · table `rmms_patrol_sessions` · TenantEntity · SHARE=tenant_keep.  
`Route` column hiện `varchar(64)` free text — SA nên validate ∈ 38 CUC2 khi LKP P1.  
Perms: `patrol.sessions.read|create|update|delete`.

## Seed / mock

- MFE store: `TD-20260808-001…` · Nguyễn Văn A / Trần Thị B · **`QL.1`** (khớp CUC2)
- Demo HTML: QL.1 · Chi cục QLĐB II.1 · sourceKind=real-seed
- Import Excel **out of scope**
- Check-in ≥3/ngày/tuyến = tenant config (DoD context · không field form P1)

## Actions (list pack P1 vs demo)

| id | label | list pack P1 | Notes |
|----|-------|--------------|-------|
| refresh | Tải lại | **IN** | toolbar |
| filter / search | Lọc / Tìm | **IN** | Zone B |
| create | Tạo mới | **IN** | toolbar primary → `/patrol/new` |
| view / edit / copy / delete | row + toolbar | **IN** | live MFE |
| history | Lịch sử | stub | |
| config | Cấu hình lưới | hint P1 | |
| export-excel | Xuất excel | **P2** | demo modal from/to · org · includeNonCheckin |
| sync-all | Sync offline | **P2** | demo queue |
| create-checkin | + Thêm check-in | **P2** | ≠ Create session |
| mode-staff/route/history/summary | Giám sát modes | **P2** | sidebar demo |
| split-toggle | Thu/mở panel | **P2** | map |
| map-* / basemap-* / zoom | Map | **P2** | skip chrome; `+`/`−` = zoom **≠** Create |
| nav-tuan-duong / tuan-kiem / cong-viec | Panels Kind E | **P2** | |
| user-profile / logout / change-pwd | User | **SKIP** chrome | |

## GAP (data-analy → PO/Design/SA/TL)

| ID | Gap | Severity | Hướng |
|----|-----|----------|-------|
| GAP-DA-PAT-ROUTE | Form MFE `route` = `Input` Text; SSOT = SearchInput `road-route` | P0 list | T-UI-LKP · T-UI-FIELD |
| GAP-DA-PAT-FILTER-ROUTE | List Zone B chưa SearchInput tuyến · API list chưa `?route=` | P1 | Design Zone B · SA query |
| GAP-DA-PAT-DESIGN-STALE | `ui/design.md` còn Slideout + View=`readOnly`; live = full-page `<dl>` | P0 docs | Design re-chốt Kind B form (list-form-quality) |
| GAP-DA-PAT-USER | userName Text; demo TreePicker NV không master | P2 | giữ Text P1 |
| GAP-DA-PAT-MAP | Kind E+F API check-ins/tracks/coverage/kpi MISSING | P2 | không block list CRUD |
| GAP-F-PAT-01 | Offline conflict merge | Open | context · không control P1 |
| GAP-REC-PAT | Capture shell | Closed | demo 2026-08-02 |

## Handoff

→ **PO:** Kind B list+form · inventory bảng trên · Q UNCLEAR user master P2 · **không** mở Excel · **không** Kind E map trong P1  
→ **Design:** A–D + controlHint · **không** Text cho `route` · **không** Slideout / View=`readOnly` · prototype content-only + reviewUrl · `autoApprove=OFF` → **await_confirm**  
→ **SA:** Patrol `sessions` (đã có) · Master road-route lookup + optional `?route=` · validate Route ∈ catalog · **cấm** `api/v1/rmms/*` ERP-style · **cấm parent JSON**  
→ **TL:** T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF (delta route query/validate)  
→ **Dev:** sau `confirms.beRepo && uiRepo` · MFE `Linm.Web.RMMS.Field` · `/patrol`

Chain: role này **done**. Roles sau = **pending**. `autoApprove=OFF` → Design/SA/Review dừng `await_confirm` khi tới lượt.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:50:00.000Z |
| versionGate | rechecked |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.08.20 · schemaVersion=1 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
