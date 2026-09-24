# PO — Requirement — nghiem-thu (mobile list · Công tác nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (PO confirm · data-analy) |
| stack | `native_dual` |
| thisAction | **List** `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU` — live GET + search · row badge Status + ResultCode · row → sibling detail · CTA **Tạo** → sibling create · **cấm** gộp form / scores |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_44dce651` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` this role |
| prior | data_analy **done** · `handoff/data_analy-compact.md` · `specs/_data-analy/nghiem-thu-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| planCite | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` · `docs/context/features/nghiem-thu-mau.md` |
| keepPrior | web PO/Design/SA/TL/Dev/QA/Review **confirmed** (`task_8d642b15`…`task_1b121e02`) · mobile list ship (`task_da538308`…`task_600866a7`) · FileService · DOMAIN/API CLOSED · **delta = MAU-10 Label + ResultCode only** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-20T00:50:00.000Z` |
| taskId | `task_44dce651` |

**Cấm:** invent `api/v1/nghiem-thu` / `files-nt` / `NghiemThuController` trên Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · native alert · watermark «Gói N» / «gen realapp» · device label · AC tap-cycle tín hiệu · reimplement kit (`GAP-MOB-ACT-05`) · start sibling create/detail trước Approve (`GAP-MOB-ACT-06`) · enqueue search/GET (`GAP-MOB-ACT-07`) · demoItems SSOT · gộp WO / `rmms_patrol_sessions` / `csdl-so-08` / `kcht-cong-trinh` · label «Mẫu nghiệm thu NN» · invent TemplateType ngoài `mau-01`…`10` · edit `scores[]` trên list · re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · Step 4b / MIG ở role này · enqueue web Field.

## 1. Goal

Native dual **Công tác nghiệm thu** list: mở từ hub `#row-nghiem-thu` · search · badge Status + Kết quả · empty/fail chrome · CTA **Tạo** + row → siblings. Persona = **cán bộ nghiệm thu**. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `nghiem-thu` = list `#sc-nghiem-thu` only. Create/detail = **navigate only** · scores + MAU picker **owner sibling** · **cấm** gộp form (`GAP-MOB-ACT-01/02`).

**edit_page Delta (turn này):** overlay Label **MAU-10** + badge **ResultCode** trên list đã ship — **không** đổi web Kind B / Full-page · **không** đổi chrome search/back/Tạo.

## 2. changeScope `edit_page` — Current vs New

| ID | Current (ship) | New (DoD) | Surface |
|----|----------------|-----------|---------|
| GAP-MOB-NT-MAU-01 | Label interim «Mẫu nghiệm thu 0N» / demo «03 — Mặt đường» | Label = **MAU-10** TT 41 PL IV Mẫu 01 §1.2.1 · value `mau-01`…`10` **GIỮ** · **cấm** «Mẫu nghiệm thu NN» | list + init |
| GAP-MOB-NT-RESULT-01 | List chỉ badge Status | Badge **Kết quả** khi có: `pass`/`fail`/`deduct` → Đạt / Không đạt / Khấu trừ · null → **ẩn** (không «Chưa đánh giá» trên list) | list |
| GAP-MOB-NT-ROWSUB-01 | rowSub «Mẫu 03» / raw | `"{TemplateLabel MAU-10} · {Route} Km {KmFrom}"` · thiếu Km → bỏ · media Count>0 → optional «ảnh + video» | list |
| GAP-MOB-NT-INIT-01 | Statuses + TemplateTypes label interim | init-data: TemplateTypes[+`criteria[]`] · `ResultCodes[]` · **cấm** hardcode 100+ tiêu chí FE | catalog |
| GAP-MOB-NT-SCORE-01 | scores chưa trên list | `scores[]` · ResultNote · Work* **owner create/detail** · list **chỉ** hiện ResultCode | sibling |
| GAP-MOB-NT-SCHEMA-01 | Schema_NghiemThu live | SA pair `Schema_NghiemThuMau` · PO **SKIP** Step 4b | SA |
| GAP-MOB-NT-SLUG-01 | 1 slug=1 action | list labels only · **cấm** gộp create/detail | queue |
| GAP-MOB-NT-WEB-01 | Web Field `/nghiem-thu` done | Web Full-page **OUT** queue `qlbd-mobile` turn này | queue |

**Keep (shipped · không làm lại):** live `GET patrol/nghiem-thu` · SearchField `?search=` · EmptyChrome · toast fail · back Tuần đường · Tạo → create · row → detail + Id · status enum `draft`/`in_progress`/`done`/`cancelled` · FileService `mediaIds` **OUT** list · Mobile.Bff catch-all · DOMAIN Patrol · optional filter status/route/template = P1 sheet · siblings `pending_confirm`.

Hub `#row-nghiem-thu` sub ship: **«10 công việc BDTX · ảnh / video hiện trường»** · **cấm** «10 mẫu placeholder».

## 3. DoD (đo được)

1. Dual `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU`: TopBar back **Tuần đường** · title **Công tác nghiệm thu** · trailing **Tạo** · SearchField · list rows. Frame proto iOS 390×844 · Android 412×915.
2. Hub `#row-nghiem-thu` (patrol-home) → push list · copy «Công tác nghiệm thu» · sub **«10 công việc BDTX · ảnh / video hiện trường»** · `#i-check` · **cấm** invent icon.
3. Appear: `GET mobile-bff/api/v1/patrol/nghiem-thu` (+ optional `?search=`) · map rows. 0 Items + OK → **EmptyChrome** · **cấm** inject demo rows.
4. Fail / offline GET → empty + `LinmToast` · **cấm** native alert · **cấm** fake NT-*.
5. Row bind §B:

   | uiField | Source |
   |---------|--------|
   | rowCode | `Code` (NT-yyyyMMdd-nnn) |
   | rowSub | `{TemplateLabel MAU-10} · {Route} Km {KmFrom}` · thiếu Km bỏ · media hint optional |
   | rowStatus | `Status` → Nháp / Đang NT / Hoàn thành / Hủy |
   | rowResult | `ResultCode` → Đạt / Không đạt / Khấu trừ · **ẩn** nếu null |
   | rowIcon / chevron | `#i-check` tint Status/Result · `#i-chevron-right` |

6. Row tap → push `nghiem-thu-detail` + `Id` · **cấm** toast code dead-end · **cấm** mở scores editor trên list.
7. **Tạo** → push `nghiem-thu-create` · **cấm** implement form / MAU picker / scores trong slug list · **cấm** start sibling pipeline trước Approve.
8. `GET …/init-data` map Statuses + TemplateTypes (Label MAU-10 + `criteria[]`) + ResultCodes · fallback CLOSED MAU-10 labels nếu fail catalog · **cấm** hardcode 100+ tiêu chí PL trên FE.
9. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` · `LinmListRow` · StatusBadge · ResultBadge · `LinmToast` · EmptyChrome · `#i-search` · `#i-chevron-left/right` · `#i-check`. **Cấm** reimplement (`GAP-MOB-ACT-05`).
10. Typography: label/badge **13** · field/search ≥**16** · dual copy/`#i-*` parity · tab shell `field` active · `tabs: none` trên list.
11. Device AC list: GPS **n/a** · Camera **n/a** · Leave dirty **n/a** (no CRUD form) · Offline = toast+empty · **cấm** alert.
12. App chỉ `{BffPrefix}` · token Keychain/Encrypted · **cấm** `:5101` / ERP.*.
13. Dev (sau): dual build PASS · Mobile.Bff build PASS — **cấm** `yarn start:std` / Step 4b ở PO.
14. QA (sau): Maestro `nghiem-thu` · `yarn e2e-qa-mobile` · store PNG — **cấm** e2e ở role này.
15. Step 4b **N/A** — Schema_NghiemThuMau = SA · path live · catch-all proxy · **cấm** invent API / MIG.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/nghiem-thu.md` | feature P0 |
| CTX-02 | `docs/context/features/patrol.md` | domain peer |
| CTX-03 | `docs/context/features/patrol-home.md` | hub entry |
| CTX-04 | `docs/context/features/nghiem-thu-mau.md` | MAU catalog peer |
| PLAN | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` | Label + ResultCode + schema cite |
| DEM-01 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` | zone ids · **cấm** re-scan |
| DEM-02 | hub `#row-nghiem-thu` | entry |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/nghiem-thu-control-hint.md` | controlHint + § Delta |
| DA-02 | `specs/_data-analy/nghiem-thu-real-data.md` | §A+§B PASS |
| DA-03 | `specs/_data-analy/nghiem-thu-bff-endpoints.md` | BFF |
| DA-04 | `specs/_data-analy/nghiem-thu-action-tree.md` | action-tree |
| WEB-KEEP | `specs/nghiem-thu/po` prior web · `ui/` · `be/` · `task/` · `implement/` · `qa/` · `review/` | keep confirmed |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | catch-all proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |

## 5. controlHint (PO chốt — cite DA-01)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | BackButton | 16 | `LinmTopBar` `#i-chevron-left` | `go('patrol-home')` |
| title | Công tác nghiệm thu | TopBar title | 17 | `LinmTopBar` | fixed |
| navCreate | Tạo | TextButton | 16 | trailing | → `nghiem-thu-create` |
| search | Tìm mẫu nghiệm thu… | SearchField | ≥16 | `LinmSearchField` `#i-search` | `?search=` |
| rowIcon | (check) | Icon | — | `#i-check` | tint Status / Result |
| rowCode | NT-* | Text title | ≥16 | `LinmListRow` | `Code` |
| rowSub | Label MAU-10 · tuyến · Km | Text subtitle | 13 | | init-data Label · **không** raw mau-0N |
| rowStatus | Nháp / Đang NT / Hoàn thành / Hủy | Badge | 13 | StatusBadge | map Status |
| rowResult | Đạt / Không đạt / Khấu trừ | Badge | 13 | ResultBadge | map `ResultCode` · ẩn nếu null |
| rowChevron | (chev) | Chevron | — | `#i-chevron-right` | detail |
| empty | (trống) | EmptyChrome | 13–16 | | 0 items · **cấm** fake |
| toastFail | (fail) | Toast | 13–16 | `LinmToast` | 4xx/offline · **cấm** alert |

Hub entry: rowTitle «Công tác nghiệm thu» · rowSub «10 công việc BDTX · ảnh / video hiện trường» · `#i-check`.

UNCLEAR = **none**.

### Status map (CLOSED)

| API | Label VN | Badge |
|-----|----------|-------|
| `draft` | Nháp | blue |
| `in_progress` | Đang NT | info |
| `done` | Hoàn thành | green |
| `cancelled` | Hủy | gray |

### ResultCode map (CHI-SO · NEW)

| API | Label VN | Badge | List |
|-----|----------|-------|------|
| `pass` | Đạt | green | hiện |
| `fail` | Không đạt | red | hiện |
| `deduct` | Khấu trừ | orange | hiện |
| `(null)` | Chưa đánh giá | — | **ẩn** |

### TemplateType (MAU-10 · HARD)

Value **giữ** `mau-01`…`mau-10`. Label ship = bảng MAU-10 (ví dụ `mau-02` → «Vệ sinh / vá ổ gà mặt đường»). **Cấm** «Mẫu nghiệm thu 02» / «Mẫu nghiệm thu NN». Demo «Mẫu 03» map `mau-02` Label MAU-10 — **cấm** invent value.

## 6. BFF / API (PO chốt · **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| List | GET | `patrol/nghiem-thu` | **yes** · ±`search` · opt status/route/templateType · DTO + `ResultCode` |
| Init catalog | GET | `patrol/nghiem-thu/init-data` | **yes** · Statuses · TemplateTypes(+criteria) · ResultCodes |
| Create form | — | sibling `nghiem-thu-create` | **navigate only** · scores owner |
| Detail | — | sibling `nghiem-thu-detail` + Id | **navigate only** · scores owner |
| Files | — | `files/*` FileService | **OUT** list |
| Schema | — | `Schema_NghiemThuMau` | **SA** · **cấm** Step 4b PO |

**Cấm** invent root `nghiem-thu` path · DbContext trên Mobile.Bff · Step 4b.

## 7. Screens / action-tree (1 action = 1 feature)

```
patrol-home
└── nghiem-thu (#sc-nghiem-thu · list · this turn)
    ├── back → patrol-home (reuse)
    ├── Tạo → nghiem-thu-create (pending_confirm · navigate · scores/MAU)
    ├── row → nghiem-thu-detail (pending_confirm · navigate · scores)
    └── search / GET / init-data (same-slug · không enqueue)
```

| feature | kind | enqueue |
|---------|------|---------|
| `nghiem-thu` | list | **this turn** · labels + Result badge |
| `nghiem-thu-create` | sheet | **pending_confirm** — **cấm** start |
| `nghiem-thu-detail` | sheet | **pending_confirm** — **cấm** start |

## 8. Device AC

| Factor | AC |
|--------|-----|
| GPS | **n/a** list |
| Camera / Files | **n/a** list (create/detail · FileService) |
| Offline | GET fail → EmptyChrome + toast · **cấm** fake rows |
| Leave dirty | **n/a** (no form on list) |
| Alert | **cấm** UIAlert / AlertDialog / window.alert |
| Typography | label/tab 13 · field ≥16 |
| Dual | cùng copy VN · cùng `#i-*` · iOS back text · Android icon-btn |
| Map | `map: none` |
| Store signup | **N/A** (no signup on this surface) · GAP-PO-STORE-01 n/a |

## 9. Open questions — PO chốt

| ID | Decision |
|----|----------|
| packKind | **Confirm `list`** |
| changeScope | **`edit_page`** (re-confirm analy `task_b82ebc4c`) |
| Grid / Report AC | **N/A** native · web Grid keep on web lane only |
| Leave | **N/A** list · fail = toast/empty (**GAP-PO-LEAVE-01** toast path) |
| Optional filters | status/route/templateType = **P1 optional** sheet · search = **Must** |
| MAU labels | **MAU-10** · value giữ · **cấm** «Mẫu nghiệm thu NN» |
| ResultCode | list badge only · null ẩn · scores → siblings |
| Schema_NghiemThuMau | **SA** · PO skip Step 4b |
| Siblings | create/detail **pending_confirm** · navigate wire OK · **cấm** start pipeline |
| Hash skip | **cấm** re-scan demo |
| DOMAIN/API | **CLOSED** Patrol · `api/v1/patrol/nghiem-thu` |
| FileService | **OUT** list · keep · **cấm** files-nt |
| Web Field | **OUT** queue turn này |

UNCLEAR = **none**.

## 10. KPI / DoD summary

| KPI | Pass khi |
|-----|----------|
| Live list | màn mở = Items từ BFF · 0 = EmptyChrome |
| Search | `?search=` rebinds list |
| Label | rowSub = MAU-10 Label · không «Mẫu nghiệm thu NN» |
| Result | badge Đạt/Không đạt/Khấu trừ khi có ResultCode · null ẩn |
| Nav | Tạo + row → đúng sibling slug · scores không trên list |
| Dual parity | iOS + Android cùng zones/copy |
| No fake | **cấm** demoItems / toast-as-detail |

## 11. Handoff → Design (`/agent-design-mobile` khi tới lượt)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| packKind | `list` |
| changeScope | `edit_page` |
| zones | `DES-MOB-NGHIEM-THU` · `#sc-nghiem-thu` · hub `#row-nghiem-thu` · overlay `rowResult` |
| Pattern | List + SearchField · **không** Full-page form trên slug này |
| Grid AC | **N/A** |
| Leave | **N/A** list |
| controlHint | DA-01 cite |
| real-data §A+§B | DA-02 |
| dual proto | overlay Result badge + Label MAU-10 + hub BDTX trên proto dual · reviewUrl Design · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| peerStdUrl | web ref only `http://localhost:9304/patrol` — **cấm** mfeStdUrl native |
| siblings | create/detail pending_confirm · scores/MAU picker · zone ids only |
| keep web | Design web Full page **giữ** · web **OUT** queue |
| next | Design mobile → SA (Schema_NghiemThuMau · proxy keep · no MIG ở PO) → TL → Dev iOS+Android → QA mobile |
| autoApprove | ON |
| e2eQa | queued QA only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-20T00:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
| priorRole | data_analy · done · task_b82ebc4c |
| taskId | task_44dce651 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
