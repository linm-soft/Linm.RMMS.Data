# Design — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + nested Kind B (đoạn · tuần · sổ) + **full-page** form CT **4 tab** · **cấm** Slideout / Kind D Resource |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_92f4685f`) |
| changeScope | `edit_page` (PH2–PH4) · Wave 1 PH1 **giữ** |
| packKind | `list` |
| gap | `edit_page` · GAP-KCT-PH2-* · GAP-KCT-PH3-* · GAP-KCT-PH4-* · GAP-KCT-PH5-01 park |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `ui_repo_confirm` **locked** |
| mfeStdRoute | `/kcht-cong-trinh` |
| mfeStdUrl | `http://localhost:9312/kcht-cong-trinh` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** × **KchtProject** live × Segment/Weekly/Disburse **NEW GAP** · **cấm ERP.*** |
| prior · data_analy | `confirmed`/`done` · hash skip · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · contentHash `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` · headerFingerprint `sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_5e779467` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở role Design |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| updatedAt | `2026-08-29T04:30:00.000Z` |
| taskId | `task_92f4685f` · Wave 1 Design `task_64fb2fd7` **giữ** |

## 0. Context & Demo (from PO · hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/kcht-cong-trinh.md` | wave PH2–PH4 · PH1 live |
| CTX-02 | `docs/tinh-nang/Cung-cap-thong-tin-phan-mem.md` | công văn PH2–PH4 |
| WAVE-01 | `docs/data/analyzed/kcht-wave-ph2-ph4.md` | wave SSOT · headerFingerprint |
| FORM-01 | `docs/data/analyzed/kcht-giai-ngan-03-sheet.md` | SRC-KCT-GN03 · **cấm** xlsx |
| PLAN-01 | `docs/plan/kcht-cong-trinh/PLAN.md` | Wave 2–4 |
| DEM-01 | — | **N/A** — sourceKind=synthetic · **cấm** GOVOne chrome |
| DA-01 | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/kcht-cong-trinh-real-data.md` | real-data §A–§F |
| MFE live list | `…/KchtProjectListPage.tsx` | Kind B PH1 · peerStd |
| MFE live form | `…/KchtProjectFormPage.tsx` | full-page 4 tab PH1 · **chưa** PH2–PH4 |
| MFE endpoint | `src/services/kchtProject/endpoint.ts` | `BASE=/kcht-ct/projects` **live** |

Persona: Lãnh đạo Khu · Phòng QLBT/QL-TCGT/KHTC · VP IV.1–IV.4 · Ban QLDA miền Nam · Cục ĐBVN (xem) · Cán bộ CĐS (admin). Pilot **Khu IV**.

**≠** `asset` · `maintenance` · PH5 Kind E / dashboard KPI. **Cấm** Slideout hồ sơ CT · **cấm** invent nested API as DONE · **cấm ERP.***.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** |
| List pattern | **1×** `LinPageLayout` kind=catalog / surface — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · input cụm **phải** (`filter-bar-layout-hard`) — **cấm** `ErpListHeaderFilters` / stack |
| Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form CT (PH1 giữ) | **Full-page** 4 tab · **cấm** Slideout · View=`<dl>` · footer Lưu/Hủy |
| Form đoạn / tuần (PH2–PH3 **NEW**) | **Full-page** · `data-form-cols="5"` · header chrome — **cấm** `.fields { 1fr 1fr }` (**GAP-DES-FORM-SURFACE-01**) |
| Sổ GN (PH4) | Kind B sổ · layout SCĐK\|SCTX theo `projectType` · 1 URL |
| Zone F | `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` / `LinListTableConfigModal` cột |
| Typography | label **13px** · input D14/M16 (**GAP-TYP-01**) |
| Labels | **cấm** hardcode VN — `useFormOptions()` |
| Toolbar icons | `erp-control-icon-map` · config=`fa-cog` |
| Dirty leave | **`LeaveConfirmModal`** — **cấm** native `alert`/`confirm` (**GAP-DES-LEAVE-01**) |
| KPI strip / PH5 | **PARK** — **cấm** enqueue Kind E |
| Map | `map: none` — đoạn = LRS fields only |

### Routes (Design chốt · SA/TL confirm path live)

| Surface | Path |
|---------|------|
| List CT | `/kcht-cong-trinh` **giữ** |
| Form CT | `/kcht-cong-trinh/tao-moi` · `/:id` **giữ** |
| Đoạn + BH | `/kcht-cong-trinh/:id/doan-tuyen` · form `…/doan-tuyen/:segId` (hoặc nested full-page) |
| Tiến độ tuần | `/kcht-cong-trinh/:id/tien-do` · form `…/tien-do/:weekId` |
| Sổ GN | `/kcht-cong-trinh/:id/giai-ngan` — **1 URL** · layout SCĐK\|SCTX (**GAP-PO-SO-ROUTE-01**) |
| Handoff HĐ | `/hd-ns/:contractId?from=kcht&projectId=` **giữ** |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | PH1 **giữ** · SearchTextInput + 7 SearchInput · Tạo mới Zone B |
| S-FORM-CT | create/edit/view | Full-page 4 tab | Tab 0–3 **cấm** reorder · View `<dl>` · footer Lưu/Hủy |
| S-SEG-LIST | list | **DES-GRID-A…D · F** | PH2 · badge BH 90/60/30 · CTA Thêm đoạn |
| S-SEG-FORM | create/edit/view | Full-page **5 cột** | LRS + BH + status 6 · leave |
| S-WEEK-LIST | list | **DES-GRID-A…D** | PH3 · RAG chips · CTA Cập nhật tuần |
| S-WEEK-FORM | create/edit/view | Full-page **5 cột** | header readonly auto · body user · RAG |
| S-DISB-BOOK | list/edit | **DES-GRID-A…D** + header sổ | SCĐK\|SCTX · dòng GD · attach |
| S-KBN-COMPARE | edit grid | vùng trên S-DISB-BOOK | 3 cột PM × KBNN × chênh · nhập/Excel |
| S-SKIP-PH5 | — | — | **Cấm** enqueue |

### Nav từ form CT (Design chốt)

Trên form CT (edit/view): secondary links **Đoạn tuyến** · **Tiến độ tuần** · **Giải ngân** → nested routes (không thêm tab 4 tab PH1 — **cấm** reorder / **cấm** gộp PH2–PH4 vào tab index 0–3).

### Zone A — Header (mọi Kind B)

- Icon `fa-road` + title surface · **cấm** Thêm mới trên A

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

**List CT (PH1 giữ):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text |
| projectType | Loại công trình | `SearchInput` | kcht-project-type |
| roadRouteCode | Quốc lộ / tuyến | `SearchInput` | road-route |
| provinceCode | Tỉnh / TP | `SearchInput` | province · **UNCLEAR** P1 |
| orgUnitCode | Đơn vị quản lý | `SearchInput` | org-unit |
| bqlOrgUnitCode | Ban QLDA | `SearchInput` | org-unit |
| ownerUserId | Người phụ trách | `SearchInput` | users · P2 |
| contractorCode | Nhà thầu | `SearchInput` | partner-unit |
| status | Trạng thái CT | `SearchInput` | kcht-project-status |
| — | Làm mới / Lịch sử / Cấu hình / Xóa | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` | |
| — | **Tạo mới** | primary Zone B phải | `/tao-moi` |

**List đoạn:** search · status (kcht-segment-status) · roadRouteCode · warrantyAlert filter (optional) · Refresh · Config · Thêm đoạn primary.

**List tuần:** search weekOf · rag · Refresh · **Cập nhật tuần** primary.

**Sổ GN:** search · costGroup · partyCode · voucherKind · quý (SCTX) · Refresh · Config · **Thêm giao dịch** primary · tab/segment **Đối chiếu KBNN**.

Filter đổi → **page=1**.

### Zone C — Grid columns

| Surface | Columns |
|---------|---------|
| List CT | STT · □ · Mã CT · Tên · Loại · Tuyến · Tỉnh · ĐV QL · Ban QLDA · Nhà thầu · KH vốn · TT · ⋯ |
| Đoạn | STT · □ · QL · Km từ–đến · Dài (m) · Hạng mục · HĐ · NT · TT đoạn · Hết BH · Badge BH · ⋯ |
| Tuần | STT · □ · Tuần · %KH · %TT · Δ tuần · GT tuần · RAG · Alerts · ⋯ |
| Sổ dòng | STT · □ · Nhóm CP · Nội dung · GT HĐ (SCTX) · GT TT · Đã GN · Còn nợ · ĐV · Chứng từ · File · ⋯ |

Empty copy: «Chưa có công trình» / «Chưa có đoạn tuyến» / «Chưa cập nhật tuần» / «Chưa có giao dịch» — **cấm** fake row.

### Zone D / F / H

Pagination 50/100/200/500 · schema modal title «Cấu hình hiển thị danh mục» · history `LinCatalogHistoryModal`.

## 3. Form inventories (controlHint = Design chốt · khớp DA/PO)

### 3.1 S-FORM-CT — 4 tab PH1 **giữ** (GAP-TAB-01 · **cấm** reorder)

| Index | id | VN |
|-------|-----|-----|
| 0 | `general` | Thông tin chung |
| 1 | `decisions` | Quyết định |
| 2 | `contracts` | Hợp đồng |
| 3 | `files` | Hồ sơ file |

**Tab 0 delta PH2:** `routeSegmentSummary` → **readonly derived** từ child đoạn **hoặc** ẩn khi ≥1 đoạn — **cấm** nhập song song lệch SSOT.

**Tab 0 delta PH4:** `capitalPlanAmount` giữ P1 display; sổ dùng `KchtCapitalPlan` — **không** đủ 1 cột thay sổ.

Field inventory PH1 (giữ Wave 1): IdCode readonly · name · projectType · continuityKind · planYear · roadRouteCode · provinceCode · lengthM · capitalSourceKind · capitalPlanAmount · orgUnitCode · ownerUserId · bqlOrgUnitCode · status · note · decisions[] · contracts[] · attachments[] — Control = SearchInput/Text/Money/Date/Integer theo DA-01 § PH1.

### 3.2 S-SEG-FORM — đoạn tuyến / BH (**NEW** · 5 cột)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| roadRouteCode | Quốc lộ | `SearchInput` | * | road-route live |
| provinceCode | Tỉnh | `SearchInput` | * | **UNCLEAR** P1 |
| kmFrom | Lý trình đầu | `Number` | * | LRS |
| kmTo | Lý trình cuối | `Number` | * | |
| lengthM | Chiều dài (m) | `Number` | | |
| workItem | Hạng mục SC | `Text` | | |
| assetRef | Cầu/cống | `SearchInput` / Text | | tham chiếu — không tạo TS |
| contractId | Hợp đồng | `SearchInput` | | child contracts PH1 |
| contractorCode | Nhà thầu | `SearchInput` | | partner-unit |
| startAt | Ngày KC | `Date` | | UTC |
| finishAt | Ngày HT | `Date` | | |
| acceptAt | Ngày NT | `Date` | | |
| handoverAt | Ngày bàn giao | `Date` | | |
| warrantyMonths | BH (tháng) | `Integer` | | |
| warrantyStart | Bắt đầu BH | `Date` | | |
| warrantyEnd | Hết BH | `Date` | | |
| status | Trạng thái đoạn | `SearchInput` | * | kcht-segment-status 6 |
| warrantyAlert | Cảnh báo BH | derived badge | | 90 / 60 / 30 |

**Enum kcht-segment-status:** `chua-tc` · `dang-tc` · `ht` · `nt` · `dang-bh` · `het-bh`.

### 3.3 S-WEEK-FORM — tiến độ tuần (**NEW** · 5 cột)

**Header (readonly auto · section):**

| uiField | Control |
|---------|---------|
| projectCode · projectName | Text readonly |
| roadRouteCode · segmentLabel · provinceCode | Text/SearchInput readonly |
| totalInvestment · contractAmount · yearEstimate | Money readonly |
| contractor · supervisor · bqlOrgUnitCode | Text readonly |
| startAt · completionDate · completionAfterExtension | Date readonly |

**Body (user):**

| uiField | Label | Control | catalogKind |
|---------|-------|---------|-------------|
| weekOf | Tuần báo cáo | `Date` / week | — |
| planPctToWeek | % KH đến tuần | `Number` | — |
| actualPctToWeek | % TT đến tuần | `Number` | — |
| prevWeekPct | % tuần trước | `Number` readonly | derived |
| weekDeltaPct | % tăng trong tuần | `Number` readonly | derived |
| valueCum | GT thực hiện lũy kế | `Money` | — |
| valueWeek | GT trong tuần | `Money` | — |
| situation | Tình hình TC | `Text` textarea | — |
| nextWeekWork | CV tuần tới | `Text` | — |
| issues | Tồn tại / vướng mắc | `Text` | — |
| delayCause | Nguyên nhân chậm | `SearchInput` | kcht-delay-cause |
| solution | Giải pháp | `Text` | — |
| rag | Đèn RAG | `SearchInput` / derived | kcht-rag |
| alerts[] | Cảnh báo | derived chips | tiến độ · GN · BH |

Duplicate `weekOf` → toast validation — **cấm** silent overwrite.

### 3.4 S-DISB-BOOK — sổ giải ngân (**NEW** · SRC-KCT-GN03)

**Layout switch (Design chốt):** `projectType` ∈ {SCĐK / vốn định kỳ} → layout **SCĐK** (cây 8 nhóm) · else BDTX/SCTX → layout **SCTX** (quý + liên danh NT). **1 URL** `/giai-ngan`.

**Header sổ:**

| uiField | Control | Notes |
|---------|---------|-------|
| projectId · projectName | SearchInput/Text readonly | live KchtProject |
| totalInvestment | Money readonly | last QĐ |
| yearEstimate · yearEstimateFinal | Money | từ KchtCapitalPlan |
| savingDeducted · capitalPlan | Money | |

**Dòng GD (1 hàng = 1 lần TT):**

| uiField | Control | catalogKind | Notes |
|---------|---------|-------------|-------|
| costGroup | `SearchInput` | kcht-cost-group | TT 1–8 SCĐK |
| content | `Text` | — | cây TU / giai đoạn / quý |
| contractValue | `Money` | — | SCTX cột thêm |
| paymentValue | `Money` | — | |
| disbursedValue | `Money` | — | |
| outstandingValue | `Money` | — | computed/nhập |
| partyCode | `SearchInput` | partner-unit \| org-unit | |
| partyKind | `SearchInput` | kcht-party-kind | |
| voucherKind | `SearchInput` | kcht-voucher-kind | giay-rut · pg · unc |
| voucherNo | `Text` | — | |
| voucherDate | `Date` | — | UTC |
| attachments[] | file | FileService | 6 loại công văn · **cấm** stub-only |

**S-KBN-COMPARE:** grid 3 cột `pmValue` · `kbnValue` · `diff` · nhập/Excel — **cấm** giả API KBNN.

### Enums (Design chốt value · label via `useFormOptions`)

Giữ PH1: kcht-project-type · kcht-project-status · kcht-continuity-kind · kcht-decision-kind · kcht-contract-type.

**NEW:** kcht-segment-status (6) · kcht-delay-cause (mặt bằng · thời tiết · NT · VL · TK · ĐC DA · ĐC KT · giải ngân · thủ tục · khác) · kcht-rag (xanh · vàng · đỏ) · kcht-cost-group (8 nhóm SRC-KCT-GN03) · kcht-voucher-kind · kcht-party-kind.

## 4. Real-data bind (cite DA-02 · **cấm** invent DONE)

**PH1 live:**

| Op | Path |
|----|------|
| CRUD projects | `…/web-bff/api/v1/kcht-ct/projects` **live** |
| Contracts / Attachments | nested **live** |

**PH2–PH4 đề xuất (GAP → SA):**

| Op | Path |
|----|------|
| Segments | `…/kcht-ct/projects/{id}/segments` **GAP** |
| Weekly | `…/kcht-ct/projects/{id}/weekly-progress` **GAP** |
| Capital plans | `…/kcht-ct/projects/{id}/capital-plans` **GAP** |
| Disbursements | `…/kcht-ct/projects/{id}/disbursements` **GAP** |

Integration live: road-routes · org-units · partner-units search. FileService `/integrate-file-upload-web`. Schema CLI đề xuất `Schema_KchtCongTrinhDisburse*` · Schema ≠ Seed.

Entity Design handoff: **NEW** `KchtRouteSegment` (PO default) · `KchtWeeklyProgress` · `KchtCapitalPlan` · `KchtDisbursement` (+ optional FK Payment).

## Prototype (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` + `form-full-page-prototype.html` (5 cột NEW forms) |
| Artifact | `ui/prototype/kcht-cong-trinh-prototype.html` |
| Zones | **DES-GRID-A · B · C0–C3 · D · F · H · Z** · content-only · **skip** GOVOne chrome |
| Surfaces | List CT · Form CT 4 tab · Đoạn list+form 5col · Tuần list+form 5col · Sổ SCĐK/SCTX + KBN grid |
| Filter mock | `LinErpListFilterBar` 1 hàng wrap · input cụm · primary phải |
| Leave | LeaveConfirmModal overlay — **cấm** native dialog |
| SSOT | Kind B · `erp-control-icon-map` · `shared_grid_example: v1` · `real_view_parity: v1` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/kcht-cong-trinh/ui/prototype/kcht-cong-trinh-prototype.html` |
| **peerStdUrl** | `http://localhost:9312/kcht-cong-trinh` |

### Wire (multi-surface)

```
[Nav] List CT | Form CT | Đoạn | Tuần | Sổ GN
[S-LIST] DES-GRID-A…D · F · H — PH1 giữ
[S-FORM-CT] 4 tab · footer Lưu/Hủy · links → đoạn/tuần/sổ
[S-SEG] Kind B + Full-page data-form-cols=5 · badge BH
[S-WEEK] Kind B + Full-page 5col · header readonly · RAG
[S-DISB] Header sổ · grid dòng · layout SCĐK|SCTX · KBN 3 cột
[Leave] LeaveConfirmModal · toast mock
```

## 5. Leave / alert (from PO §8)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty đoạn/tuần/sổ/CT navigate away | `LeaveConfirmModal` | `window.confirm` |
| API 4xx/5xx | `useAppToast` | `window.alert` |
| detail/child 404 | toast · parent surface | silent fail |
| Delete đoạn/tuần/dòng GD/file | confirm modal | native `confirm` |
| Lookup no match | SearchInput empty | free text master |
| Upload fail | toast | silent |
| Duplicate weekOf | toast validation | silent overwrite |

## 6. Grid AC (Design confirm · PO §6)

AC-G-01…12 PASS trên mọi Kind B surface. Report AC **N/A** — PH5 PARK (**GAP-KCT-PH5-01**).

## 7. Open questions (PO closed — Design không re-open)

| ID | Decision |
|----|----------|
| GAP-KCT-SEG-ENT-01 | **NEW `KchtRouteSegment`** |
| GAP-PO-SO-ROUTE-01 | **1 URL** `/giai-ngan` · layout theo `projectType` |
| GAP-PO-PROVINCE-01 | province **UNCLEAR** — SA/FormsService |
| GAP-PO-OWNER-01 | owner P2 optional |
| GAP-PO-SLIDEOUT-01 | **Cấm** Slideout |
| GAP-PO-KBNN-01 | **Cấm** API KBNN P1 |
| GAP-KCT-PH5-01 | **PARK** Kind E |
| GAP-DES-DEMO-RESCAN-01 | **Cấm** re-scan · hash skip |
| GAP-KCT-DM-01 | DOMAIN-MAP slug · SA/TL debt |

## Confirm

`design_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_92f4685f`). Chain **SA** enqueue (roles sau = pending đến lượt). **Cấm** Dev/BE/e2e trong task này.

## Handoff → SA

| Field | Value |
|-------|-------|
| Kind / pattern | B · A–D+F · nested Kind B đoạn/tuần/sổ · full-page CT 4 tab · NEW forms **5 cột** |
| Tab index CT | **0–3** lock · PH2–PH4 = **routes** not tabs |
| Field inventory | §3 · Control khớp controlHint |
| Filters | LinErpListFilterBar · page=1 |
| Prototype · reviewUrl | § Prototype |
| API | live `kcht-ct/projects` · nested segments/weekly/capital-plans/disbursements **GAP** |
| Entity | KchtRouteSegment · KchtWeeklyProgress · KchtCapitalPlan · KchtDisbursement |
| Schema | `Schema_KchtCongTrinhDisburse*` |
| Lookups | Integration live · NEW enums · province UNCLEAR |
| File | FileService trên dòng GD — **cấm** stub-only · **cấm** byte DB |
| Next | SA **pending** đến lượt · chain ON |

## DES-GRID map → Lin\*

| Zone | DES-GRID | Component |
|------|----------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` + `LinErpListFilterBar` |
| C | DES-GRID-C0–C3 | `LinCatalogDataGrid` + row menu |
| D | DES-GRID-D | `LinCatalogListPagination` |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` |
| H | DES-GRID-H | `LinCatalogHistoryModal` |
| Z CT | DES-GRID-Z | full-page 4 tab |
| Z đoạn/tuần | DES-GRID-Z | full-page `data-form-cols="5"` |
| Sổ | DES-GRID + header | Kind B sổ SCĐK\|SCTX |
| Leave | — | `LeaveConfirmModal` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.29.01 |
| rulesVersion | 2026.08.29.17 |
| generatedAt | 2026-08-29T04:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorPo | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| contentHashPriorDataAnaly | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprintPrior | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| orchestratorSkillVersion | 2026.08.29.01 |
| orchestratorWorkflowVersion | 2026.08.29.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.21.01 |
| poSkillVersion | 2026.08.21.01 |
| taskId | `task_92f4685f` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.29.01 rulesVersion=2026.08.29.17 versionGate=rechecked contentHashPriorDataAnaly=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprintPrior=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_92f4685f -->
