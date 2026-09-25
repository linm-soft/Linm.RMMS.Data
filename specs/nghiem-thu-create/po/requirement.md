# PO — Requirement — nghiem-thu-create (mobile sheet · Tạo nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`new_page`** |
| packKind | **`sheet`** (PO confirm · data-analy) |
| stack | `native_dual` |
| thisAction | **Create draft** `#sc-nghiem-thu-create` `DES-MOB-NGHIEM-THU-CREATE` — Mẫu · Vị trí+GPS · Đính kèm · **Lưu** = `POST` draft · **cấm** gộp list/detail |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_a31ee0a5` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` this role |
| prior | data_analy **done** · `handoff/data_analy-compact.md` · `specs/_data-analy/nghiem-thu-create-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-19T16:55:00.000Z` |
| taskId | `task_a31ee0a5` |

**Cấm:** invent `api/v1/nghiem-thu-create` / `nghiem-thu-files` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · native alert · watermark «Gói N» / «gen realapp» · device label · AC tap-cycle tín hiệu · reimplement kit (`GAP-MOB-ACT-05`) · start sibling detail pipeline (`GAP-MOB-ACT-06`) · enqueue Lưu/files/init-data (`GAP-MOB-ACT-07`) · demoItems / fake NT-* · gộp list/detail (`GAP-MOB-ACT-01/02`) · re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · Step 4b / MIG / e2e ở role này.

## 1. Goal

Native dual **Tạo nghiệm thu** sheet: entry từ list `nghiem-thu` nav **Tạo** · form Mẫu + Vị trí (GPS) + Đính kèm · trailing **Lưu** = `POST mobile-bff/api/v1/patrol/nghiem-thu` `Status=draft` · media = FileService guids. Persona = **cán bộ nghiệm thu**. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `nghiem-thu-create` = owner sheet `#sc-nghiem-thu-create` only. Parent list / sibling detail = **navigate only** · **cấm** gộp (`GAP-MOB-ACT-01/02`).

## 2. changeScope `new_page` — Current vs New

| Zone / behavior | Current | New (DoD) |
|-----------------|---------|-----------|
| Entry | List nav **Tạo** demo `go('nghiem-thu-create')` | Ship owner `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE` |
| Surface | Stub / missing native | Full sheet→screen «Tạo nghiệm thu» · 3 rows + TopBar |
| Mẫu | Demo «03 — Mặt đường» | `LOOKUP_STATIC` `mau-01`…`mau-10` via `GET init-data` · picker |
| Vị trí | Demo «Khu I · GPS» | Zone + device GPS → `ZoneOrgCode` · `Route` · `FieldInfo` · opt Km |
| Đính kèm | Demo toast FileService | Camera/picker · `POST files/*` · `MediaIds` guid[] max 10 · **cấm** URL |
| Lưu | Demo toast «Lưu nháp» | Trailing **Lưu** = `POST` create `Status=draft` · toast «Đã lưu nháp · NT-*» · **cấm** enqueue |
| Hủy | demo `go('nghiem-thu')` | Back → list · leave-dirty confirm nếu dirty |
| Hidden required | Demo 3 rows only | `AssigneeCode` (auth) · `InspectedAt` (device now) · `Status=draft` — Design surface |
| BFF | CTX gap note | Catch-all `patrol/nghiem-thu*` + live `files/*` · **cấm** invent |

**OUT:** `#sc-nghiem-thu` list · `nghiem-thu-detail` Xem/Sửa · hub `patrol-home` · web Full form · Step 4b / MIG (schema live).

## 3. DoD (đo được)

1. Dual `#sc-nghiem-thu-create` `DES-MOB-NGHIEM-THU-CREATE`: TopBar title **Tạo nghiệm thu** · leading **Hủy** (iOS text / Android `#i-chevron-left`) · trailing **Lưu** · 3 ListRows Mẫu / Vị trí / Đính kèm. Frame proto iOS 390×844 · Android 412×915.
2. Entry: list `nghiem-thu` nav **Tạo** → push create · **cấm** form trên list slug.
3. Appear: `GET mobile-bff/api/v1/patrol/nghiem-thu/init-data` → TemplateTypes · Statuses. Fail catalog → fallback CLOSED `mau-01`…`10` labels.
4. Mẫu tap → Select/LOOKUP · bind `TemplateType` = `mau-01`…`mau-10` only · display Label từ init-data (GAP-MOB-NTC-COPY-01 = Design surface subtitle OK · **cấm** invent mau name API).
5. Vị trí: OS location dialog **trước** GPS read (**MOB-PERM-OS-01**) · device GPS + zone → bind `ZoneOrgCode` · `Route` · `FieldInfo` (± `KmFrom`). GPS deny → reuse modal `DES-MOB-GPS-DENY` primary **Mở Cài đặt** · **Để sau** · **cấm** Sao chép hướng dẫn / fake GPS · chặn Lưu nếu chưa chốt vị trí P1.
6. Đính kèm: camera/picker · `POST/PUT mobile-bff/api/v1/files/*` · persist **guid** vào `MediaIds` max 10 · **cấm** persist FileService URL · empty attach OK.
7. **Lưu** (same slug): validate mẫu + vị trí + assignee → `POST patrol/nghiem-thu` body `CreateNghiemThuRequest` (`Status=draft` · `InspectedAt`=UTC now · `AssigneeCode`=auth) · 200 → `LinmToast` «Đã lưu nháp · NT-*» · optional `go('nghiem-thu-detail')` + `Id` **hoặc** back list refresh · **cấm** enqueue · **cấm** fake NT-*.
8. Fail / offline POST hoặc upload → `LinmToast` fail · **cấm** native alert · **cấm** fake 200.
9. **Hủy** / back → `nghiem-thu` · nếu form dirty → leave-dirty modal (confirm discard) · **cấm** system alert.
10. Kit **reuse map**: `LinmTopBar` · `LinmListRow` · Select/LOOKUP · PhotoRow/files · `LinmToast` · `DES-MOB-GPS-DENY` · `#i-chevron-left`. **Cấm** reimplement (`GAP-MOB-ACT-05`).
11. Typography: label **13** · field/value ≥**16** · title 17 · dual copy/`#i-*` parity · `tabs: none` trên create · shell Tab 5 `field` active khi entry từ list · **không** segment (`GAP-TAB-01`).
12. App chỉ `{BffPrefix}` · token Keychain/Encrypted · **cấm** `:5101` / ERP.*.
13. Dev (sau): dual build PASS · Mobile.Bff build PASS — **cấm** `yarn start:std` / Step 4b ở PO.
14. QA (sau): Maestro `nghiem-thu-create` · `yarn e2e-qa-mobile` · store PNG — **cấm** e2e ở role này.
15. Step 4b **N/A** — path live · catch-all + FileService · **cấm** invent API / MIG.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/nghiem-thu-create.md` | feature P0 |
| CTX-02 | `docs/context/features/nghiem-thu.md` | parent list |
| CTX-03 | `docs/context/features/nghiem-thu-detail.md` | sibling peer |
| CTX-04 | `docs/context/features/patrol-home.md` · `mobile-bff-file` | hub / files peer |
| DEM-01 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu-create` | zone ids · **cấm** re-scan |
| DEM-02 | parent `#sc-nghiem-thu` · entry nav **Tạo** | entry |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/nghiem-thu-create-control-hint.md` | controlHint + § Delta |
| DA-02 | `specs/_data-analy/nghiem-thu-create-real-data.md` | §A+§B PASS |
| DA-03 | `specs/_data-analy/nghiem-thu-create-bff-endpoints.md` | BFF |
| DA-04 | `specs/_data-analy/nghiem-thu-create-action-tree.md` | action-tree |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | catch-all + files |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |

## 5. controlHint (PO chốt — cite DA-01)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navCancel | Hủy | BackButton / TextButton | 16 | iOS text · Android `#i-chevron-left` | → `nghiem-thu` · leave-dirty |
| title | Tạo nghiệm thu | TopBar title | 17 | `LinmTopBar` | fixed |
| navSave | Lưu | TextButton | 16 | trailing | POST draft · cùng slug · **cấm** enqueue |
| templateRow | Mẫu | ListRow → Select / LOOKUP_STATIC | label **13** / value **≥16** | `LinmListRow` | `mau-01`…`10` · init-data |
| locationRow | Vị trí | ListRow + GPS | label **13** / value **≥16** | | Zone·Route·FieldInfo · GPS |
| attachRow | Đính kèm | ListRow / PhotoRow | label **13** / value **≥16** | File picker | Ảnh+video · max 10 · guids |
| assignee | (ẩn P1) | derived | — | auth | `AssigneeCode` required |
| inspectedAt | (ẩn P1) | DateTime derived | — | device UTC | now on save |
| status | (ẩn P1) | enum | — | | Lưu → `draft` |
| toastOk | Đã lưu nháp · NT-* | Toast | 13–16 | `LinmToast` | POST 200 |
| toastFail | (fail) | Toast | 13–16 | | 4xx/offline · **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse · **cấm** fake |

UNCLEAR = **none** (GAP-MOB-NTC-REQ-01 / COPY-01 → Design surface · không block).

### Create body rules (CLOSED · cite DA-02 §B)

| Field | Rule |
|-------|------|
| `TemplateType` | `mau-01`…`mau-10` only |
| `Status` | P1 Lưu = `draft` |
| `Route` · `FieldInfo` | from location/GPS · required |
| `AssigneeCode` | current user · required |
| `InspectedAt` | UTC now on submit |
| `MediaIds` | FileService guids · max 10 · **cấm** URL |

## 6. BFF / API (PO chốt · **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Init catalog | GET | `patrol/nghiem-thu/init-data` | **yes** |
| Create draft | POST | `patrol/nghiem-thu` | **yes** · `CreateNghiemThuRequest` |
| Files upload | POST/PUT | `files/*` | **yes** · peer FileService · **cấm** invent `nghiem-thu-files` |
| Parent list | — | sibling `nghiem-thu` | **navigate only** (Hủy) |
| Detail after save | — | sibling `nghiem-thu-detail` + Id | **optional navigate** · **cấm** start pipeline |

**Cấm** invent root `nghiem-thu-create` path · DbContext trên Mobile.Bff · Step 4b · ERP.*.

## 7. Screens / action-tree (1 action = 1 feature)

```
nghiem-thu
└── nghiem-thu-create (#sc-nghiem-thu-create · sheet · this turn)
    ├── Hủy / back → nghiem-thu (reuse parent)
    ├── init-data / mẫu / GPS / files / Lưu POST (same-slug · không enqueue)
    └── optional after save → nghiem-thu-detail (sibling · navigate only · cấm start)
```

| feature | kind | enqueue |
|---------|------|---------|
| `nghiem-thu-create` | sheet | **this turn** |
| `nghiem-thu` | list | **reuse** parent |
| `nghiem-thu-detail` | sheet | **pending_confirm** — **cấm** start |
| Lưu / files / mẫu / GPS | same-slug | **cấm** enqueue (`GAP-MOB-ACT-07`) |

## 8. Device AC

| Factor | AC |
|--------|-----|
| GPS | **yes** · deny → `DES-MOB-GPS-DENY` · **cấm** fake · chặn save nếu chưa chốt P1 |
| Camera / Files | **yes** · ảnh+video · FileService · max 10 · toast upload fail |
| Offline | POST/upload fail → toast · optional local draft queue · **cấm** fake 200 / fake NT-* |
| Leave dirty | dirty form + Hủy/back → confirm discard modal · **cấm** system alert |
| Alert | **cấm** UIAlert / AlertDialog / window.alert |
| Map | **n/a** (`map: none`) |
| Typography | label/tab 13 · field ≥16 |
| Dual | cùng copy VN · cùng `#i-*` · iOS **Hủy** text · Android chevron + **Lưu** |
| Tab | `tabs: none` create · shell `field` active |
| Store signup | **N/A** · GAP-PO-STORE-01 n/a |

## 9. Open questions — PO chốt

| ID | Decision |
|----|----------|
| packKind | **Confirm `sheet`** |
| changeScope | **`new_page`** (re-confirm analy) |
| Grid / Report AC | **N/A** (sheet · không list/report) |
| Leave | **Must** leave-dirty modal khi dirty · fail path = toast (**GAP-PO-LEAVE-01**) |
| Hidden required | AssigneeCode + InspectedAt = Design surface bind · **không** invent visible field path |
| COPY mẫu display | init-data Label SSOT · Design subtitle OK · **cấm** invent «Mặt đường» API value |
| Sibling detail | optional post-create navigate · **cấm** start detail pipeline this feature |
| Hash skip | **cấm** re-scan demo |
| DOMAIN/API | **CLOSED** Patrol · `api/v1/patrol/nghiem-thu` + `files/*` |

UNCLEAR = **none**.

## 10. KPI / DoD summary

| KPI | Pass khi |
|-----|----------|
| Live save | Lưu = POST thật · toast Code NT-* · **không** fake |
| Media | MediaIds = guid[] · **không** URL |
| GPS | deny modal · **không** fake coords |
| Dual parity | iOS + Android cùng zones/copy/`#i-*` |
| Scope | **không** gộp list/detail · **không** invent create path |

## 11. Handoff → Design (`/agent-design-mobile` khi tới lượt)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| packKind | `sheet` |
| changeScope | `new_page` |
| zones | `DES-MOB-NGHIEM-THU-CREATE` · `#sc-nghiem-thu-create` · parent `#sc-nghiem-thu` |
| Pattern | sheet→screen · TopBar + 3 ListRows · Select/GPS/PhotoRow |
| Grid AC | **N/A** |
| Report AC | **N/A** |
| Leave | leave-dirty modal · GPS deny reuse |
| controlHint | DA-01 abs · typography 13/16 · dual parity |
| real-data | DA-02 §A+§B · Create body rules |
| peerStdUrl | web clone ref only `http://localhost:9304/patrol` · **cấm** `mfeStdUrl` native |
| reviewUrl | (Design mobile sau) |
| FormMode | Create draft only P1 |
| APIs | GET init-data · POST nghiem-thu · files/* |
| Open questions | none · GAP REQ/COPY = Design surface |
| Next | `/agent-design-mobile` · autoApprove ON |
| e2eQa | queued QA — **cấm** e2e Design |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T16:55:00.000Z |
| versionGate | ok |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| priorContentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| taskId | `task_a31ee0a5` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
