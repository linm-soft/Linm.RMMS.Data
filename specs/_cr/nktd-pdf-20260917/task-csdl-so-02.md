# Team-lead — CR PDF · form tạo nhật ký tuần đường · `csdl-so-02`

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| this role | `team_lead` · `/agent-team-lead` |
| changeScope | **`edit_page`** · `editTask=1` |
| packKind | **`list`** Kind B + Kind D Slideout |
| formType | `list` |
| cite | [review.md](./review.md) · [workflow-run.md](./workflow-run.md) · SRC-NKTD-PDF |
| prior pack | `specs/csdl-so-02/task/csdl-so-02.md` (**giữ** · **cấm** overwrite) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/csdl-so-02` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records?resource=patrol-logs` |
| catalogKind | `patrol-logs` |
| IdCode | `SO-` · **cấm** Guid |
| `devSlash` | **`/agent-dev`** · `/dev-web-responsive` · `/dev-ui-review` · `/filter-bar-context` |
| `route_confirm` | **`route_a` giữ** `/csdl-so-02` |
| migration | **`Schema_CsdlSo02LocationText`** **chỉ nếu** thêm cột — CLI pair + Designer · Step 4b Dev |
| filter-bar | **thiếu** `docs/context/features/csdl-so-02-filter-bar.md` → Dev **phải** Write từ live (không copy `csdl-so-sach-filter-bar` nguyên) |
| **cấm** | ERP.* · invent `infra` / `api/v1/patrol-logs` / `api/v1/so-ts/*` · Guid IdCode · overwrite pack `new_page` · e2e ở TL · Wave B report |

**Wave A — làm trước report.** Form nguồn phải ghi đủ cột lưới Kind E.

---

## § Delta Current vs New (`edit_page` · CR PDF)

| Area | Current (live done) | New (CR) | Task |
|------|---------------------|----------|------|
| Route | `/csdl-so-02` + hub | **giữ** | — |
| API prefix | `api/v1/asset/csdl-records?resource=patrol-logs` | **giữ** | T-BE-CRUD-01 |
| Header bìa | bookNo · contractor · road · kmFrom/To · patrolStaff · period | **giữ** + label bìa PDF (Số quyển · Nhà thầu · NV tuần · Từ/Đến Km · Kỳ) | T-UI-FORM-01 · T-UI-FIELD-01 |
| Entry vị trí | `locationKm` number * only | thêm **`locationText`** nvarchar (Vị trí / SC-VP). Required: `eventAt` + (`locationKm` **hoặc** `locationText`) + `weatherEvent` | **T-BE-01** · **T-UI-FORM-01** · GAP-NKTD-LOC-01 |
| Thời tiết | `weatherEvent` Input 1 dòng | **Textarea** (T-SO-02) | T-UI-FIELD-01 |
| Sketch/media | text-id | FileRef/FileMulti **nếu** FileService READY; else giữ text-id + toast · **cấm** fake picker | T-UI-ENTRIES-01 · GAP-SO02-FILE-01 |
| status tot/tb/kem | LOOKUP shell | **không** in PDF · **giữ** filter list | T-OUT-01 |
| List grid | không cột vị trí chữ | thêm cột vị trí text nếu có | T-UI-LIST-01 |
| Report | — | **OUT Wave A** | T-OUT-RPT |

**Không đổi:** BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter V10 · SearchInput `road-route` · `LinCatalogUiSchemaEditorModal` · IdCode `SO-`.

---

## Screens

| id | Surface | Route | Pattern |
|----|---------|-------|---------|
| S-LIST | Kind B A–D+F+H | `/csdl-so-02` | list |
| S-FORM | Slideout C/E/V/Copy | footer Lưu/Hủy | `data-form-cols="2"` |
| S-ENTRIES | inline_grid | trong Slideout | typed rows |
| S-HUB | card Sổ 02 | `/so-ts/csdl-so-sach?resource=patrol-logs` | hub |

---

## FormType pack — task matrix (`list` · §2a · CR)

| Task id | Role | Status | deps | `devSlash` | DoD CR |
|---------|------|--------|------|------------|--------|
| **T-CTX-CR-01** | data_analy | pending | — | `/agent-data-analy` | Cite extract PDF + GAP-NKTD-LOC-01 trên control-hint / real-data · § Current vs New · **cấm** re-scan demo HTML · **đổi** contentHash |
| **T-BE-01** | Dev | pending | T-CTX-CR-01 | `/agent-dev` | Widen `CsdlBookEntryEntity.LocationText` nvarchar. Map DTO + upsert. **Nếu** cột DB mới → `/database-migration` `Schema_CsdlSo02LocationText` **pair** `.cs`+`.Designer.cs` · `Up()` DDL thật · `dotnet ef migrations list`. Required: `eventAt` + (`locationKm` **hoặc** `locationText`) + `weatherEvent`. **Cấm** parent `*Json`. |
| **T-BE-CRUD-01** | Dev | reuse | T-BE-01 | `/agent-dev` | **Giữ** GET/POST/PUT/DELETE `csdl-records`. List filter kỳ = `periodStart/End` TZ UTC. Soft-delete. **Cấm** path mới. |
| **T-BE-UISCHEMA-01** | Dev | pending | T-BE-01 | `/agent-dev` | Seed/registry thêm field `locationText` catalogKind `patrol-logs` nếu grid config thiếu. |
| **T-BE-INIT-01** | — | n/a P1 | — | — | province/status LOOKUP_STATIC giữ |
| **T-BFF-01** | Dev | reuse | T-BE-01 | `/agent-dev` | Proxy only · path parity |
| **T-PERM-01** | Dev | reuse | — | `/agent-dev` | Giữ `asset.csdl-records.*` · không block P1 |
| **T-UI-LIST-01** | Dev | pending | T-BE-01 | `/agent-dev` | Grid thêm cột vị trí text. Empty «Chưa có nhật ký tuần đường». `LinCatalogUiSchemaEditorModal` giữ. **cấm** leftover `const columns` |
| **T-UI-FILTER-01** | Dev | pending | T-UI-LIST-01 | `/agent-dev` + `/filter-bar-context` | Write/load `csdl-so-02-filter-bar.md` · V10 🔍 mép phải · **lấp hàng rồi wrap** · **cấm** grep PASS · **cấm** nút Tìm riêng · **cấm** export trên bar |
| **T-UI-CFG-01** | Dev | reuse | T-BE-UISCHEMA-01 | `/agent-dev` | Config FULL cột · **cấm** `configHint` / Zone F-only |
| **T-UI-FORM-01** | Dev | pending | T-BE-01 | `/agent-dev` | Slideout 2col footer only. Thêm Input **Vị trí / sự cố-vi phạm** (`locationText`) cạnh Km. Label bìa PDF. **cấm** bắt `status` như cột giấy. **cấm** Full-page 5-cột. |
| **T-UI-LEAVE-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | `LeaveConfirmModal` dirty · **cấm** `window.alert`/`confirm` |
| **T-UI-ACT-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete pair giữ |
| **T-UI-HIST-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | `LinCatalogHistoryModal` · **cấm** invent History API |
| **T-UI-LKP-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | Tuyến = SearchInput `road-route` · **cấm** native select |
| **T-UI-FIELD-01** | Dev | pending | T-UI-FORM-01 | `/agent-dev` | `weatherEvent` → Textarea. `locationText` Text. `locationKm` Number optional-if-text. TZ datetime. |
| **T-UI-PROD-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | Label «Sổ 02» · **cấm** demo chrome / Resource/Slideout note |
| **T-UI-UX-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| **T-UI-RESP-01** | Dev | pending | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 · `/dev-ui-review` |
| **T-UI-ENTRIES-01** | Dev | pending | T-UI-FORM-01 | `/agent-dev` | FileRef/FileMulti **nếu** pack file READY (`/integrate-file-upload-web`) · **không** invent file API. Chưa READY: text-id + toast. |
| **T-QA-CRUD-01** | QA | pending | T-UI-* | `/agent-qa` | Tạo sổ + 2 dòng (1 có `locationText`) → list thấy · Edit/View/Copy/Delete. **Không** e2e report. |
| **T-QA-FORM-01** | QA | pending | T-UI-FORM-01 | `/agent-qa` | Từng field required: eventAt + (km **hoặc** text) + weatherEvent · body = UI value |
| **T-QA-FILTER-01** | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5+V10 live `mfeStdUrl` · 🔍 mép phải · fields 1:1 filter-bar.md |
| **T-QA-FILTER-02** | QA | pending | T-UI-FILTER-01 | `/agent-qa` | 1280+768+375 · fail lệch D hoặc leak M |
| **T-OUT-01** | — | OUT | — | — | Excel import · map canvas · `status` tot/tb/kem **không** in PDF · org SearchInput P2 |
| **T-OUT-RPT** | — | OUT | — | — | `rpt-nhat-ky-tuan-duong` · check-in `PatrolSession` |

---

### T-CTX-CR-01 — Data-analy delta

- Append **Current vs New** vào `specs/_data-analy/features/csdl-so-02-control-hint.md` + `csdl-so-02-real-data.md`.
- Cite `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` · GAP-NKTD-LOC-01.
- Inventory thêm `entries.locationText` controlHint=`Text`.
- Write `specs/csdl-so-02/handoff/data_analy-compact.md`.
- **Cấm** re-scan demo · **cấm** wipe pack `new_page`.
- DoD: contentHash **đổi** · `changeScope=edit_page`.

### T-BE-01 — LocationText + Schema pair

- Entity `CsdlBookEntryEntity.LocationText` nvarchar nullable.
- DTO list/get/upsert 1:1.
- Validation: `EventAt` required · `WeatherEvent` required · (`LocationKm` has value **OR** `LocationText` not empty).
- Nếu cột mới: `dotnet ef migrations add Schema_CsdlSo02LocationText --project api/shared/ERP.Service.Migrations --startup-project api/src/ERP.Service.Api` (đúng path WebService RMMS) → **pair** · Designer `[Migration]` · `Up()` `AddColumn` · **cấm** Write tay Schema · **cấm** Schema+Seed 1 file.
- DoD: `dotnet ef migrations list` hiện id · `dotnet build` PASS.

### T-UI-FORM-01 / T-UI-FIELD-01

- Field label VN via `useFormOptions()` — **cấm** hardcode.
- Đặt `locationText` cạnh `locationKm` trên hàng entry.
- View: không disabled-grey.
- DoD: Create lưu text → GET trả text → Edit hiện text.

### T-UI-FILTER-01

- Thiếu `{feature}-filter-bar.md` = **GAP-TL-FILTER-01** nếu Dev skip Write.
- Live page đã có `LinErpListFilterBar` — **giữ** fields: search · province · status · roadCode · fromDate/toDate.
- DoD: V10 🔍 mép phải live (không grep).

### T-QA-CRUD-01

- Case CR: sổ A + dòng 1 Km-only + dòng 2 `locationText` «Km 12+150 SC taluy» → list cột vị trí.
- **Cấm** mở `/bao-cao/nk-td`.

---

## ssot.reuse

| Layer | Reuse |
|-------|--------|
| UI | `CsdlSo02Page` / `CsdlSo02FormSlideout` · Lin* · `ROAD_ROUTE_LOOKUP_CONFIG` |
| BE | `CsdlCatalogService` typed So02 · `CsdlBookEntryEntity` |
| File | FileService existing |
| Filter | live bar + Write `csdl-so-02-filter-bar.md` |

## API contract (giữ)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=patrol-logs` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

Widen body `entries[].locationText` only.

## Cấm (mọi role Wave A)

- ERP.* · invent API · Guid IdCode · parent `*Json` · `window.alert`
- CRUD trên report slug · enqueue Wave B
- overwrite `task/csdl-so-02.md` (pack `new_page`)
- dump Dev/QA e2e vào PO/Design (**GAP-PKT-ROLE-01**)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.2 |
| packKind | list |
| changeScope | edit_page |
| cr | nktd-pdf-20260917 |
| writtenAt | 2026-09-17T16:40:00.000Z |
