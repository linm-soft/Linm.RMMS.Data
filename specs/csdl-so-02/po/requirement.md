# PO — Requirement — csdl-so-02 (Sổ 02 — Nhật ký tuần đường · CR PDF Wave A)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`list`** (Kind **B** catalog A–D + Kind **D** Slideout · typed T-SO-02) — PO confirm |
| Feature Kind | **B** list A–D · **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| gap | `edit_page` · CR PDF `SRC-NKTD-PDF` · GAP-NKTD-LOC-01 + weather Textarea + FILE debt |
| mode | `feature_context` · **no Excel** · control-hint + real-data · **giữ** pack new_page |
| status | `done` |
| requestSource | run packet `task_a2fc4833` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| cr | `nktd-pdf-20260917` · cite **`SRC-NKTD-PDF`** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`confirmed` · compact=`handoff/data_analy-compact.md` · full=`specs/_data-analy/features/csdl-so-02-control-hint.md` + `csdl-so-02-real-data.md` · contentHash `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` · headerFingerprint `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` · analy `task_2a2fd5c4` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| prior · po new_page | `task_0da1b0a3` · **giữ** DoD typed T-SO-02 · **không** wipe |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-02`** · hub **`/so-ts/csdl-so-sach?resource=patrol-logs`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=patrol-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/patrol-logs` · **cấm** invent `api/v1/infra/*` |
| domain | **Asset** |
| resource | `patrol-logs` (**giữ** key) |
| formNo | `02` · title VN **Nhật ký tuần đường** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-18T03:40:00.000Z` |
| taskId | `task_a2fc4833` · analy `task_2a2fd5c4` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

## 1. Goal

Chốt **edit_page** Wave A CR PDF (`SRC-NKTD-PDF`): bổ sung `entries.locationText` + OR-rule vị trí · đổi `weatherEvent` → Textarea · giữ FileRef text-id debt · **giữ** pack typed new_page đã PASS.

Persona: Khu QLĐB · Hạt trưởng · NV tuần đường · Nhà thầu BDTX.

**packKind confirm:** `list` (analy đề xuất · PO chốt). **Không** report pack Wave A · **không** Kind F map · Excel **OUT**.

**≠** Sổ TS `so-ts-*` · ≠ report `rpt-nhat-ky-tuan-duong` (park đến Review A PASS).

**Cấm ERP.*** · **cấm** invent `api/v1/patrol-logs` · **cấm** demo/LS SSOT · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · **cấm** overwrite `task/csdl-so-02.md` (new_page).

## 2. Current → New (`edit_page` · CR Wave A · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-18T03:29:00.290Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live post new_page) | New (PO chốt Wave A) |
|-------|------------------------------|----------------------|
| Entry API / route | `…/csdl-records?resource=patrol-logs` · `/csdl-so-02` | **Giữ** · **cấm** invent path |
| Header bìa | bookNo·contractor·road·km·NV·period OK | **Giữ** (**GAP-NKTD-HDR-01**) |
| `entries.locationKm` | Number * bắt buộc | Number **soft** · optional nếu có `locationText` |
| `entries.locationText` | **Thiếu** | **Text** «Vị trí / SC-VP» · soft · OR với Km (**GAP-NKTD-LOC-01**) |
| Entry required | eventAt · locationKm · weatherEvent | `eventAt` + (`locationKm` **OR** `locationText`) + `weatherEvent` |
| `weatherEvent` | Input 1 dòng | **Textarea** rows=3 · maxLength=2000 (**GAP-NKTD-WEATHER-01**) |
| List col vị trí | Chỉ Km | **Luôn** hiện cột «Vị trí» (`locationText`) + cột Km · empty OK |
| Sketch/media | text-id | **Giữ** text-id P1 · toast nếu FileService chưa READY · **cấm** invent file API (**GAP-SO02-FILE-01**) |
| `status` filter | tot/tb/kem/hong | **Giữ** filter list · **không** cột giấy / print (**GAP-NKTD-STATUS-01**) |
| Report | Kind E seed | **OUT Wave A** · **cấm** enqueue `rpt-nhat-ky-tuan-duong` (**GAP-NKTD-RPT-PARK**) |
| BE | `LocationKm` only | `LocationText` nvarchar · migration **`Schema_CsdlSo02LocationText`** CLI pair nếu cột mới (Dev Step 4b) |

**Không đổi:** API prefix · resource `patrol-logs` · IdCode `SO-` · Kind B/D · filter-bar HARD · IdCode · pagination · **cấm** ERP.* · prior GAP typed (SO02-TYPED/ROUTE/FORMNO/ROAD/…) đã PASS.

### GAP IDs (PO · Wave A)

| ID | New | P1 |
|----|-----|-----|
| **GAP-NKTD-LOC-01** | `locationText` Text + OR-rule Km\|Text · BE LocationText · Schema_CsdlSo02LocationText | **YES** |
| GAP-NKTD-WEATHER-01 | weatherEvent → Textarea | **YES** |
| **GAP-SO02-FILE-01** | Giữ text-id · không invent file API | **YES debt** (không fake picker) |
| GAP-NKTD-HDR-01 | Giữ header bìa | **YES** (no-op UI) |
| GAP-NKTD-STATUS-01 | status filter giữ · không cột giấy | **YES** |
| GAP-NKTD-RPT-PARK | Report OUT Wave A | **OUT** đến Review A PASS |

Prior GAP (new_page) **giữ** trạng thái PASS — không reopen trừ FILE debt.

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-LOC-REQ** | **OR-rule P1:** Create/Edit bắt `eventAt` + (`locationKm` có giá trị **OR** `locationText` không rỗng) + `weatherEvent`. View = readOnly · không bắt. Cả hai empty → validation toast · highlight **cả hai** field. |
| **Q-WEATHER** | Textarea **rows=3** · `maxLength=2000` · label «Thời tiết + diễn biến» · write field `weatherEvent` giữ. |
| **Q-FILE** | P1: **giữ text-id** sketchRef/mediaIds · toast nếu FileService chưa READY · **cấm** invent file API / fake picker (**GAP-SO02-FILE-01**). |
| **Q-LIST-COL** | List grid **luôn** hiện cột «Vị trí» (`locationText`) cạnh cột Km · cell rỗng OK · **cấm** ẩn theo data. |

## 4. DoD (đo được) — Delta Wave A + baseline giữ

**Baseline (đã PASS — giữ):** DoD §4 prior new_page (list A–D · Slideout C/E/V/Copy · typed header · leave-confirm · road SearchInput · IdCode · empty VN · typography GAP-TYP-01 · map none).

**Delta Wave A (mới):**

1. Entry row: control `locationText` Text cạnh `locationKm` Number · label «Vị trí / SC-VP».
2. Validation OR-rule Q-LOC-REQ trên Create/Edit · View không bắt.
3. `weatherEvent` = Textarea rows=3 max 2000 — **cấm** Input 1 dòng.
4. List Zone C: cột «Vị trí» luôn hiện (Q-LIST-COL).
5. GET/POST/PUT bind `locationText` 1:1 · migration Schema_CsdlSo02LocationText nếu cột mới (Dev).
6. Sketch/media giữ text-id · **cấm** invent file API.
7. **Cấm** enqueue report Wave B · **cấm** yarn build/e2e/start:std ở PO.

## 5. Grid AC (packKind=list · HARD)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/NV — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu (đủ OR vị trí) → row mới · list hiện `locationText` nếu có |
| G-08 | Soft-delete → row biến khỏi list active · toast OK |
| G-09 | 422 thiếu `resource` → toast · không blank page |
| G-10 | Empty copy VN «Chưa có nhật ký tuần đường» |
| **G-11** | Cột «Vị trí» (`locationText`) **luôn** trên grid · empty cell OK |
| **G-12** | Lưu entry thiếu **cả** Km và text → toast validation · **không** persist |

## 6. Screens

| Screen | Route / surface | Notes |
|--------|-----------------|-------|
| List | `/csdl-so-02` | Kind B A–D · + cột vị trí text |
| Hub entry | `/so-ts/csdl-so-sach?resource=patrol-logs` | Card Sổ 02 · **cấm** chỉ mở hub làm mfeStd |
| Form C/E/V/Copy | Kind D Slideout Z1–Z3 | entries: locationKm + locationText · weather Textarea |
| Schema | `LinCatalogUiSchemaEditorModal` | seed field `locationText` |
| History | `LinCatalogHistoryModal` | **cấm** invent History API |
| Sketch/media | text-id / FileRef khi READY | **GAP-SO02-FILE-01** |

## 7. Leave / dirty

| Case | UX |
|------|-----|
| Slideout dirty + Hủy / X / Esc / route change | `LeaveConfirmModal` · confirm → discard · cancel → stay |
| View mode | Không leave-confirm (readOnly) |
| Save success | Đóng slideout · refresh list · toast |
| Save validation fail (OR vị trí / weather) | Ở lại · toast · highlight field |
| Entry thiếu Km **và** text | Toast · highlight cả `locationKm` + `locationText` |

## 8. Control map (PO → Design chốt) — Delta entries

### Filter (Zone B) — **không đổi**

SearchText · province · status · road SearchInput · fromDate · toDate · actions · **cấm** nút Tìm · **cấm** wrap 2 hàng default desktop.

### Form header (Z2) — **không đổi** Wave A

### Entries[] inline grid — **Delta**

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| lineNo | STT | Integer ro | auto | YES |
| eventAt | Giờ / ngày kiểm tra | DateTime | * | YES |
| locationKm | Lý trình (Km) | Number | soft OR | YES |
| **locationText** | **Vị trí / SC-VP** | **Text** | soft OR | **YES · GAP-NKTD-LOC-01** |
| weatherEvent | Thời tiết + diễn biến | **Textarea** rows=3 · max 2000 | * | YES |
| onSiteAction | Xử lý tại chỗ | Textarea | | YES |
| remarkSign | Nhận xét + ký | Text | | YES |
| note | Ghi chú dòng | Text | | YES |
| sketchRef | Sketch | Text id / FileRef | opt | debt FILE-01 |
| mediaIds | Ảnh / video | Text id / FileMulti | opt | debt FILE-01 |

**HARD:** `eventAt` + (`locationKm` OR `locationText`) + `weatherEvent`.

## 9. API / bind (cite real-data · SA)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=patrol-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST …/csdl-records` body `resource=patrol-logs` + typed **incl. locationText** |
| Update | `PUT …/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |

FE: `CsdlSo02Page` · `CsdlSo02FormSlideout` · reuse BASE `/asset/csdl-records`. SA: DTO `LocationText` · migration `Schema_CsdlSo02LocationText` CLI pair nếu cột mới · catalog seed `locationText`.

**Cấm** invent `api/v1/patrol-logs` · **cấm** ERP.*.

## 10. CTX / inventory (hash skip — **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX | `docs/context/features/csdl-so-02.md` | context |
| CTRL | `specs/_data-analy/features/csdl-so-02-control-hint.md` | analy |
| REAL | `specs/_data-analy/features/csdl-so-02-real-data.md` | analy |
| EXTRACT | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | SRC-NKTD-PDF |
| CR review | `specs/_cr/nktd-pdf-20260917/review.md` | CR |
| CR task | `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` | TL pack · **không** overwrite new_page task |
| Prior task | `specs/csdl-so-02/task/csdl-so-02.md` | **giữ** |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset |

contentHash: `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6`  
headerFingerprint: `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471`

## 11. Out of scope / Cấm

- ERP.* / Domains/Master / invent `api/v1/patrol-logs` / infra / so-ts API
- Report Wave B `rpt-nhat-ky-tuan-duong` đến Review A PASS
- Invent file API / fake picker · wipe new_page pack · overwrite `task/csdl-so-02.md`
- Guid IdCode · map canvas · Excel wizard
- Demo/LS SSOT · re-scan demo ở PO
- yarn build / e2e / start:std ở role PO
- Step 4b / migration ở role PO (Dev only)

## 12. Handoff

| Next | Need |
|------|------|
| **Design** | control-map + prototype `locationText` cạnh Km · weather Textarea · reviewUrl · filter-bar HARD giữ |
| **SA** | DTO `LocationText` · Schema_CsdlSo02LocationText confirm · ui-schema seed |
| **TL** | T-* từ `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` · **cấm** overwrite new_page task |
| **Dev** | form + list col + validation OR · migration CLI nếu cột mới |
| **QA** | G-11/G-12 + form OR + Textarea · e2e queued |

## DoR PO

- [x] packKind=`list` confirm
- [x] changeScope=`edit_page` · Current→New CR · cite SRC-NKTD-PDF
- [x] Grid AC (+G-11/G-12) · Screens · Leave
- [x] Open Q resolved (autoApprove) · Q-LOC-REQ OR-rule
- [x] GAP P1/debt/OUT table · Wave B park
- [x] Control map delta + API cite real-data
- [x] **giữ** prior new_page · **cấm** wipe
- [x] handoff compact
- [x] **cấm** implement / e2e / demo re-scan / migration
