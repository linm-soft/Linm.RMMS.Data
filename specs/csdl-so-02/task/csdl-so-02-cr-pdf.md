# Team-lead — CR PDF Wave A · `csdl-so-02` · edit_page

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| taskId | `task_a6a264ff` |
| changeScope | **`edit_page`** · `editTask=1` |
| packKind | **`list`** Kind B + Kind D Slideout |
| formType | `list` |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| cite | [review](../../_cr/nktd-pdf-20260917/review.md) · [workflow-run](../../_cr/nktd-pdf-20260917/workflow-run.md) · CR seed [task-csdl-so-02](../../_cr/nktd-pdf-20260917/task-csdl-so-02.md) |
| prior pack | `specs/csdl-so-02/task/csdl-so-02.md` (**giữ** · **cấm** overwrite) |
| prior · data_analy | **confirmed** · `task_2a2fd5c4` · `handoff/data_analy-compact.md` |
| prior · po | **confirmed** · `task_a2fc4833` · `po/requirement.md` |
| prior · design | **confirmed** · `task_b40a0dad` · design_confirm **approve** |
| prior · sa | **confirmed** · `task_e5236699` · solution_confirm **approve** |
| team_lead_confirm | **approve** (autoApprove ON) |
| route_confirm | **`route_a` giữ** `/csdl-so-02` · hub `?resource=patrol-logs` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records?resource=patrol-logs` |
| catalogKind | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` · **cấm** Guid |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| `devSlash` | **`/agent-dev`** · `/dev-web-responsive` · `/dev-ui-review` · `/filter-bar-context` |
| migration | **`Schema_CsdlSo02LocationText`** — CLI pair + Designer · **chỉ Dev/4b** |
| filter-bar | thiếu `docs/context/features/csdl-so-02-filter-bar.md` → Dev **Write** từ live (**cấm** copy `csdl-so-sach-filter-bar` nguyên) |
| **cấm** | ERP.* · invent `api/v1/patrol-logs` / `api/v1/so-ts/*` · reuse Sổ01 `Location` · Guid IdCode · overwrite `task/csdl-so-02.md` · e2e/build/start:std @ TL · Wave B report · Step 4b @ TL |

**Wave A trước report.** Form nguồn ghi đủ cột lưới Kind E · Report `rpt-nhat-ky-tuan-duong` **OUT** đến Review A PASS.

---

## § Delta Current vs New (`edit_page` · CR PDF · locked priors)

| Area | Current (live) | New (CR Wave A) | Task |
|------|----------------|-----------------|------|
| Route | `/csdl-so-02` + hub | **giữ** | — |
| API | `api/v1/asset/csdl-records?resource=patrol-logs` | **giữ** · widen body | T-BE-CRUD-01 |
| Header bìa | bookNo · contractor · road · kmFrom/To · patrolStaff · period | **giữ** + label bìa PDF | T-UI-FORM-01 |
| Entry vị trí | `locationKm` * only | **`locationText`** nvarchar(512) · OR: eventAt + (Km **OR** text) + weather · View no-req | **T-BE-LOC-01** (=T-BE-01) · **T-FE-LOC-01** (=T-UI-FORM-01) · GAP-NKTD-LOC-01 |
| Thời tiết | Input 1 dòng | **Textarea** rows=3 · maxLength=2000 | **T-FE-LOC-02** (=T-UI-FIELD-01) · GAP-NKTD-WEATHER-01 |
| Sketch/media | text-id | giữ text-id P1 · **GAP-SO02-FILE-01** · **cấm** invent file API | T-UI-ENTRIES-01 |
| List grid | thiếu cột vị trí chữ | **luôn** cột «Vị trí» · prefer text else Km · G-11/G-12 | **T-FE-LOC-03** (=T-UI-LIST-01) |
| Report | — | **OUT Wave A** | T-OUT-RPT |

**Không đổi:** BFF proxy · soft-delete · pageSize 50/100/200/500 · LeaveConfirm · filter V10 · SearchInput `road-route` · `LinCatalogUiSchemaEditorModal` · IdCode `SO-` · new_page ownership.

---

## Screens

| id | Surface | Route | Pattern |
|----|---------|-------|---------|
| S-LIST | Kind B A–D+F+H | `/csdl-so-02` | list + cột «Vị trí» |
| S-FORM | Slideout C/E/V/Copy | footer Lưu/Hủy | `data-form-cols="2"` |
| S-ENTRIES | inline_grid | trong Slideout | `locationKm` + `locationText` cạnh nhau |
| S-HUB | card Sổ 02 | `/so-ts/csdl-so-sach?resource=patrol-logs` | hub |
| S-SKIP-MAP · S-SKIP-RPT | — | — | N/A Wave A |

---

## LOC alias map (STATUS · Dev)

| Alias | = Task id | DoD 1-liner |
|-------|-----------|-------------|
| **T-BE-LOC-01** | T-BE-01 | Entity `LocationText` nvarchar(512) · DTO · OR-rule BE · `Schema_CsdlSo02LocationText` CLI pair @ 4b |
| **T-BE-LOC-02** | T-BE-UISCHEMA-01 | Seed `locationText` catalogKind `patrol-logs` nếu thiếu |
| **T-FE-LOC-01** | T-UI-FORM-01 | Slideout + Input `locationText` cạnh Km · OR soft · label bìa PDF |
| **T-FE-LOC-02** | T-UI-FIELD-01 | weather Textarea · locationText Text · Km optional-if-text · TZ |
| **T-FE-LOC-03** | T-UI-LIST-01 | Grid cột «Vị trí» always · prefer text else Km |

---

## FormType pack — task matrix (`list` · CR Wave A)

| Task id | Role | Status | deps | `devSlash` | DoD CR |
|---------|------|--------|------|------------|--------|
| **T-CTX-CR-01** | data_analy | **done** (`task_2a2fd5c4`) | — | `/agent-data-analy` | control-hint + real-data + compact · contentHash Wave A · **cấm** re-scan demo |
| **T-BE-01** / **T-BE-LOC-01** | Dev | pending | T-CTX-CR-01 | `/agent-dev` | `CsdlBookEntryEntity.LocationText` nvarchar(512) · DTO upsert · OR: eventAt+(Km\|text)+weather · View no-req · **cấm** reuse `Location` · **cấm** parent `*Json`. Cột mới → `/database-migration` `Schema_CsdlSo02LocationText` **pair** · `Up()` DDL · `dotnet ef migrations list` |
| **T-BE-CRUD-01** | Dev | reuse | T-BE-01 | `/agent-dev` | **Giữ** GET/POST/PUT/DELETE `csdl-records` · period TZ UTC · soft-delete · **cấm** path mới |
| **T-BE-UISCHEMA-01** / **T-BE-LOC-02** | Dev | pending | T-BE-01 | `/agent-dev` | Seed field `locationText` · catalogKind `patrol-logs` |
| **T-BE-INIT-01** | — | n/a P1 | — | — | province/status LOOKUP_STATIC giữ |
| **T-BFF-01** | Dev | reuse | T-BE-01 | `/agent-dev` | Proxy only · path parity |
| **T-PERM-01** | Dev | reuse | — | `/agent-dev` | `asset.csdl-records.*` giữ |
| **T-UI-LIST-01** / **T-FE-LOC-03** | Dev | pending | T-BE-01 | `/agent-dev` | Cột «Vị trí» always · empty «Chưa có nhật ký tuần đường» · `LinCatalogUiSchemaEditorModal` · **cấm** leftover `const columns` |
| **T-UI-FILTER-01** | Dev | pending | T-UI-LIST-01 | `/agent-dev` + `/filter-bar-context` | Write/load `csdl-so-02-filter-bar.md` · V10 🔍 mép phải · lấp hàng rồi wrap · **cấm** nút Tìm riêng · **cấm** export trên bar |
| **T-UI-CFG-01** | Dev | reuse | T-BE-UISCHEMA-01 | `/agent-dev` | Config FULL cột · **cấm** `configHint` / Zone F-only |
| **T-UI-FORM-01** / **T-FE-LOC-01** | Dev | pending | T-BE-01 | `/agent-dev` | Slideout 2col footer only · `locationText` cạnh Km · OR soft · **cấm** bắt `status` giấy · **cấm** Full-page 5-cột |
| **T-UI-LEAVE-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | `LeaveConfirmModal` dirty · **cấm** `window.alert`/`confirm` |
| **T-UI-ACT-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | C/E/V/Copy/Delete pair giữ |
| **T-UI-HIST-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | `LinCatalogHistoryModal` · **cấm** invent History API |
| **T-UI-LKP-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | Tuyến SearchInput `road-route` |
| **T-UI-FIELD-01** / **T-FE-LOC-02** | Dev | pending | T-UI-FORM-01 | `/agent-dev` | weather Textarea rows=3 maxLength=2000 · locationText Text · Km Number optional-if-text · TZ · labels via `useFormOptions()` |
| **T-UI-PROD-01** | Dev | reuse | T-UI-LIST-01 | `/agent-dev` | Label «Sổ 02» · **cấm** demo chrome |
| **T-UI-UX-01** | Dev | reuse | T-UI-FORM-01 | `/agent-dev` | constitution · 2col · footer_only |
| **T-UI-RESP-01** | Dev | pending | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 · `/dev-ui-review` |
| **T-UI-ENTRIES-01** | Dev | pending | T-UI-FORM-01 | `/agent-dev` | FileRef **nếu** READY · else text-id + toast · **GAP-SO02-FILE-01** · **cấm** invent file API |
| **T-QA-CRUD-01** | QA | pending | T-UI-* | `/agent-qa` | Sổ + 2 dòng (1 Km-only · 1 `locationText`) → list «Vị trí» · Edit/View/Copy/Delete · **cấm** e2e report |
| **T-QA-FORM-01** | QA | pending | T-UI-FORM-01 | `/agent-qa` | Required OR: eventAt+(km\|text)+weather · body = UI |
| **T-QA-FILTER-01** | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5+V10 live `mfeStdUrl` |
| **T-QA-FILTER-02** | QA | pending | T-UI-FILTER-01 | `/agent-qa` | 1280+768+375 |
| **T-OUT-01** | — | OUT | — | — | Excel · map · status tot/tb/kem không in PDF · org P2 |
| **T-OUT-RPT** | — | OUT | — | — | `rpt-nhat-ky-tuan-duong` · Wave B park |

---

### T-BE-01 / T-BE-LOC-01 — LocationText + Schema pair

- Entity `CsdlBookEntryEntity.LocationText` nvarchar(512) nullable · **cấm** reuse Sổ01 `Location`.
- DTO list/get/upsert 1:1 · body `entries[].locationText`.
- Validation soft: `EventAt` * · `WeatherEvent` * · (`LocationKm` has value **OR** `LocationText` not empty) · View no-req.
- Cột mới: `dotnet ef migrations add Schema_CsdlSo02LocationText` (path WebService RMMS) → **pair** `.cs`+`.Designer.cs` · `Up()` `AddColumn` · **cấm** Write tay Schema · **cấm** Schema+Seed 1 file · **chỉ Dev/4b**.
- DoD: `dotnet ef migrations list` hiện id · `dotnet build` PASS @ Dev.

### T-UI-FORM-01 / T-FE-LOC-01 · T-UI-FIELD-01 / T-FE-LOC-02

- Labels VN via `useFormOptions()` — **cấm** hardcode.
- `locationText` cạnh `locationKm` trên hàng entry · weather Textarea.
- View: không disabled-grey.
- DoD: Create lưu text → GET trả text → Edit hiện text · list cột «Vị trí».

### T-UI-FILTER-01

- Thiếu `{feature}-filter-bar.md` = **GAP-TL-FILTER-01** nếu Dev skip Write.
- Giữ fields: search · province · status · roadCode · fromDate/toDate.
- DoD: V10 🔍 mép phải live (không grep).

### T-QA-CRUD-01

- Case: sổ A + dòng 1 Km-only + dòng 2 `locationText` «Km 12+150 SC taluy» → list cột vị trí.
- **Cấm** mở `/bao-cao/nk-td`.

---

## ssot.reuse

| Layer | Reuse |
|-------|--------|
| UI | `CsdlSo02Page` / `CsdlSo02FormSlideout` · Lin* · `ROAD_ROUTE_LOOKUP_CONFIG` |
| BE | `CsdlCatalogService` typed So02 · `CsdlBookEntryEntity` |
| File | text-id debt P1 · FileService existing nếu READY |
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

Widen body `entries[].locationText` only · **cấm** invent path.

## GAP / debt / OUT

| ID | P1 | Note |
|----|-----|------|
| **GAP-NKTD-LOC-01** | YES | LocationText + OR |
| GAP-NKTD-WEATHER-01 | YES | Textarea |
| **GAP-SO02-FILE-01** | YES debt | text-id · no invent file API |
| GAP-NKTD-RPT-PARK | OUT | Wave B |
| GAP-TL-FILTER-01 | if skip | filter-bar.md missing |

## Cấm (mọi role Wave A)

- ERP.* · invent API · Guid IdCode · parent `*Json` · `window.alert`
- reuse Sổ01 `Location` · CRUD trên report slug · enqueue Wave B
- overwrite `task/csdl-so-02.md` (pack `new_page`)
- dump Dev/QA e2e vào PO/Design · start role khác (**GAP-PKT-ROLE-01**)
- TL: implement product code · e2e · yarn build/start:std · Step 4b/migration

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.2 |
| packKind | list |
| changeScope | edit_page |
| cr | nktd-pdf-20260917 |
| writtenAt | 2026-09-18T04:00:00.000Z |
