# PO — Requirement — nghiem-thu-detail (mobile sheet · Chi tiết / Sửa nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`sheet`** (PO confirm · data-analy) |
| stack | `native_dual` |
| thisAction | **Chi tiết / Sửa** `#sc-nghiem-thu-detail` `DES-MOB-NGHIEM-THU-DETAIL` — mở = `GET` · **Lưu** = `PUT` cùng slug · Label MAU-10 · scores · **cấm** gộp list/create |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_64a693da` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` this role |
| prior | data_analy **confirmed** · `handoff/data_analy-compact.md` · `specs/_data-analy/nghiem-thu-detail-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-19T19:15:00.000Z` |
| taskId | `task_64a693da` |

**Cấm:** invent `api/v1/nghiem-thu-detail` / `files-nt` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · native alert · watermark «Gói N» / «gen realapp» · device label · AC tap-cycle tín hiệu · reimplement kit (`GAP-MOB-ACT-05`) · start sibling list/create (`GAP-MOB-ACT-06`) · enqueue Lưu/files/init-data/scores (`GAP-MOB-ACT-07`) · demo toast / fake NT-* · label «Mẫu nghiệm thu NN» / «Mẫu 03» · DELETE P1 · re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · Step 4b / MIG / e2e ở role này.

## 1. Goal

Native dual **Chi tiết / Sửa nghiệm thu**: entry row tap list `nghiem-thu` → screen `DES-MOB-NGHIEM-THU-DETAIL`. View đọc `GET mobile-bff/api/v1/patrol/nghiem-thu/{id}` · Edit **Lưu** = `PUT` cùng slug `UpdateNghiemThuRequest`. Mẫu hiển thị `TemplateLabel` MAU-10 (value `mau-01`…`10` giữ). Kết quả + tiêu chí + tuyến/km/hiện trường + đính kèm FileService. Persona = **cán bộ nghiệm thu**. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `nghiem-thu-detail` = owner sheet `#sc-nghiem-thu-detail` only. Parent list / sibling create = **navigate only** · **cấm** gộp (`GAP-MOB-ACT-01/02`).

## 2. changeScope `edit_page` — Current vs New

| Zone / behavior | Current | New (DoD) |
|-----------------|---------|-----------|
| Entry | List row `#sc-nghiem-thu` `toast('NT-*')` | Ship `go` detail + `GET {id}` · **cấm** Code toast làm id |
| Surface | **Chưa** `#sc-nghiem-thu-detail` (GAP-MOB-NT-DETAIL-01) | Design gen dual screen · View + Edit · **cấm** Dev theo toast |
| Mẫu | Demo row-sub «Mẫu 03» | Display `TemplateLabel` MAU-10 · value API `mau-01`…`10` **giữ** · **cấm** «Mẫu nghiệm thu NN» |
| Kết quả / tiêu chí | Không có | `ResultCode` pass/fail/deduct + `ResultNote` + `scores[]` criteria init-data (`pass`/`fail`/`n_a`) |
| Tuyến · Km · Hiện trường | Không GET | `Route` · `KmFrom`/`KmTo` opt · `FieldInfo` · `ZoneOrgCode` · GPS Edit |
| Đính kèm | Không gallery | FileService `MediaIds` guid[] max 10 · resign GET · **cấm** URL · **cấm** `files-nt` |
| Lưu | Không PUT | Edit trailing **Lưu** = `PUT patrol/nghiem-thu/{id}` · toast «Đã lưu · {Code}» · **cấm** enqueue |
| Đóng / Hủy | — | View **Đóng** → list · Edit **Hủy** discard → View · leave-dirty nếu dirty |
| Xóa | DELETE live web | P1 mobile **OUT** · **cấm** enqueue |
| BFF | CTX gap note | Catch-all `patrol/nghiem-thu*` + live `files/*` · Step 4b **SKIP** · **cấm** controller NT mới |

**OUT:** `#sc-nghiem-thu` list owner · `#sc-nghiem-thu-create` · hub `patrol-home` · web `/nghiem-thu/:id` queue này · Step 4b / MIG · `csdl-so-08` / `kcht-cong-trinh`.

## 3. DoD (đo được)

1. Dual `#sc-nghiem-thu-detail` `DES-MOB-NGHIEM-THU-DETAIL`: TopBar title = `Code` từ GET (NT-*) · View leading **Đóng** (iOS text / Android `#i-chevron-left`) + trailing **Sửa** · Edit trailing **Lưu** + **Hủy**. **Cấm** invent icon ngoài sprite.
2. Entry: row tap `#sc-nghiem-thu` → push detail với `id` list · **cấm** form trên list slug · **cấm** toast làm id.
3. Open: `GET mobile-bff/api/v1/patrol/nghiem-thu/{id}` → `NghiemThuDto` (Scores detail-only). 404 → `LinmToast` «không tồn tại» · back list. Fail/offline → toast · **cấm** alert · **cấm** fake NT-*.
4. Catalog: `GET …/patrol/nghiem-thu/init-data` → TemplateTypes (criteria) · ResultCodes · Statuses. Criteria rỗng → ẩn checklist · **cấm** hardcode 100+ dòng. Fallback CLOSED labels MAU-10.
5. Mẫu: View ListRow · Edit Select `LOOKUP_STATIC`. Bind `TemplateType` `mau-01`…`mau-10` only · display `TemplateLabel` (server) · **cấm** gửi Label · **cấm** ship «Mẫu 03» / «03 — Mặt đường» (`mau-02` display = «Vệ sinh / vá ổ gà mặt đường» khi catalog nói vậy).
6. Kết quả: Select `pass` Đạt · `fail` Không đạt · `deduct` Khấu trừ · null draft = «Chưa đánh giá». `ResultNote` multiline. `Status=done` ⇒ `ResultCode` required · null OK khi draft.
7. Tiêu chí: checklist `scores[]` · verdict `pass`/`fail`/`n_a` · `CriterionCode` ∈ catalog mẫu đang chọn · PUT non-null = replace-set · null = giữ cũ.
8. Tuyến / Km / Hiện trường: ListRow · `Route` required · `KmFrom`/`KmTo` optional · `FieldInfo` + `ZoneOrgCode`. Edit GPS: OS location dialog **trước** GPS read (**MOB-PERM-OS-01**) · deny → reuse `DES-MOB-GPS-DENY` **Mở Cài đặt** / **Để sau** · **cấm** Sao chép hướng dẫn / fake GPS.
9. Trạng thái: Select `draft` / `in_progress` / `done` / `cancelled`. Thời gian việc optional `WorkStartedAt` / `WorkEndedAt`. Ghi chú optional `Note`.
10. Đính kèm: gallery + thêm ảnh/video · `files/*` rồi PUT `MediaIds` guid[] max 10 · resign object GET · empty OK · upload fail toast · **cấm** persist URL.
11. Ẩn P1 nhưng required PUT: `AssigneeCode` = auth (giữ GET nếu có) · `InspectedAt` = giữ GET hoặc device · **cấm** invent field visible.
12. **Lưu** (same slug, Edit): validate Route · FieldInfo · AssigneeCode · InspectedAt · ResultCode nếu `done` → `PUT patrol/nghiem-thu/{id}` `UpdateNghiemThuRequest` · 200 → `LinmToast` «Đã lưu · {Code}» · stay View **hoặc** back list refresh · **cấm** enqueue · **cấm** fake 200.
13. **Hủy** (Edit): discard local → View. Form dirty → leave-dirty modal confirm discard · **cấm** system alert. **Đóng** (View) → `go('nghiem-thu')`.
14. Kit **reuse**: `LinmTopBar` · `LinmListRow` · Select/LOOKUP · Checklist · PhotoRow/files · `LinmToast` · `DES-MOB-GPS-DENY` · `#i-chevron-left`. **Cấm** reimplement (`GAP-MOB-ACT-05`).
15. Typography: label **13** · field/value ≥**16** · title 17 · toast 13–16 · dual copy/`#i-*` parity · `tabs: none` trên detail · shell Tab 5 `field` active khi entry từ list · **không** segment (`GAP-TAB-01`).
16. App chỉ `{BffPrefix}` · token Keychain/Encrypted · **cấm** `:5101` / ERP.*.
17. Dev (sau): dual build PASS · Mobile.Bff build PASS — **cấm** `yarn start:std` / Step 4b ở PO.
18. QA (sau): Maestro `nghiem-thu-detail` · `yarn e2e-qa-mobile` · store PNG — **cấm** e2e ở role này.
19. Step 4b **SKIP** — `Schema_NghiemThuMau` + `rmms_nghiem_thu_score` live · catch-all + FileService · SA confirm only · **cấm** invent API / MIG.
20. DELETE **OUT** P1 · **cấm** nút Xóa trừ Design sau này chốt lại (không enqueue task này).

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/nghiem-thu-detail.md` | feature |
| CTX-02 | `docs/context/features/nghiem-thu.md` | parent list |
| CTX-03 | `docs/context/features/nghiem-thu-create.md` | sibling |
| CTX-04 | `docs/plan/nghiem-thu-mau/README.md` · `MAU-10.md` · `CHI-SO.md` · `SCHEMA.md` | label + schema |
| DEM-01 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` row toast | entry only · **cấm** re-scan · GAP-MOB-NT-DETAIL-01 |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/nghiem-thu-detail-control-hint.md` | controlHint + § Delta |
| DA-02 | `specs/_data-analy/nghiem-thu-detail-real-data.md` | §A+§B PASS |
| DA-03 | `specs/_data-analy/nghiem-thu-detail-bff-endpoints.md` | BFF |
| DA-04 | `specs/_data-analy/nghiem-thu-detail-action-tree.md` | action-tree |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | catch-all + files |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |

## 5. controlHint (PO chốt — cite DA-01)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navClose | Đóng | BackButton / TextButton | 16 | iOS text · Android `#i-chevron-left` | View → `go('nghiem-thu')` |
| title | NT-* | TopBar title | 17 | `LinmTopBar` | `Code` từ GET · **cấm** toast làm id |
| navEdit | Sửa | TextButton | 16 | trailing View | vào Edit · **cùng slug** |
| navSave | Lưu | TextButton | 16 | trailing Edit | PUT · **cấm** enqueue |
| navCancel | Hủy | TextButton | 16 | Edit | discard → View · leave-dirty |
| templateRow | Mẫu | ListRow View · Select Edit | label **13** / value **≥16** | `LinmListRow` | `TemplateLabel` · value `mau-01`…`10` |
| resultRow | Kết quả | Select LOOKUP_STATIC | label **13** / value **≥16** | | pass/fail/deduct · null = «Chưa đánh giá» |
| resultNote | Ghi chú kết quả | Text multiline | ≥16 | | `ResultNote` |
| scoreList | Tiêu chí | Checklist | 13–16 | | `scores[]` · `pass`/`fail`/`n_a` · init-data |
| routeRow | Tuyến | ListRow | label **13** / value **≥16** | | `Route` required |
| kmRow | Km | ListRow | label **13** / value **≥16** | | `KmFrom` / `KmTo` optional |
| fieldRow | Hiện trường | ListRow + GPS | label **13** / value **≥16** | | `FieldInfo` · `ZoneOrgCode` |
| statusRow | Trạng thái | Select LOOKUP_STATIC | label **13** / value **≥16** | | draft/in_progress/done/cancelled · done ⇒ ResultCode |
| workTime | Thời gian việc | DateTime optional | ≥16 | | `WorkStartedAt` / `WorkEndedAt` |
| note | Ghi chú | Text optional | ≥16 | | `Note` |
| attachRow | Đính kèm | PhotoRow / gallery | label **13** | FileService | `MediaIds` max 10 · resign · **cấm** URL |
| assignee | (ẩn P1) | derived | — | auth | `AssigneeCode` required PUT |
| inspectedAt | (ẩn P1) | DateTime | — | GET / device | required |
| toastOk | Đã lưu · NT-* | Toast | 13–16 | `LinmToast` | sau PUT 200 |
| toastFail | (fail) | Toast | 13–16 | | 4xx/404/offline · **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse · **cấm** fake |

UNCLEAR = **none** (GAP-MOB-NT-DETAIL-01 = Design gen screen · không block).

### PUT body rules (CLOSED · cite DA-02 §B)

| Field | Rule |
|-------|------|
| `TemplateType` | `mau-01`…`mau-10` only · Label không gửi (server `TemplateLabel`) |
| `ResultCode` | `pass`/`fail`/`deduct` · required khi `Status=done` · null OK draft |
| `Scores` | non-null replace-set · `Verdict` `pass`/`fail`/`n_a` · `CriterionCode` ∈ catalog mẫu · null giữ cũ |
| `Status` | `draft`/`in_progress`/`done`/`cancelled` |
| `Route` · `FieldInfo` · `AssigneeCode` · `InspectedAt` | required |
| `MediaIds` | FileService guids · max 10 · replace-set · **cấm** URL |
| Success | toast «Đã lưu · {Code}» · stay View hoặc back list refresh |

## 6. BFF / API (PO chốt · **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Open | GET | `patrol/nghiem-thu/{id}` | **yes** |
| Catalog | GET | `patrol/nghiem-thu/init-data` | **yes** |
| Save | PUT | `patrol/nghiem-thu/{id}` | **yes** · `UpdateNghiemThuRequest` |
| Files | * | `files/*` | **yes** · peer FileService · **cấm** invent `files-nt` |
| Parent list | — | sibling `nghiem-thu` | **navigate only** (Đóng) |
| Create | — | sibling `nghiem-thu-create` | **cấm** start |
| DELETE | — | web live | **OUT** P1 |

**Cấm** invent root `nghiem-thu-detail` path · DbContext trên Mobile.Bff · Step 4b · ERP.*.

## 7. Screens / action-tree (1 action = 1 feature)

```
nghiem-thu
└── nghiem-thu-detail (#sc-nghiem-thu-detail · sheet · this turn · edit_page)
    ├── Đóng / back → nghiem-thu (reuse parent)
    ├── GET {id} · init-data · scores · GPS · files · Lưu PUT (same-slug · không enqueue)
    └── (không) start nghiem-thu-create
```

| feature | kind | enqueue |
|---------|------|---------|
| `nghiem-thu-detail` | sheet | **this turn** |
| `nghiem-thu` | list | **reuse** parent · Đóng |
| `nghiem-thu-create` | sheet | **không** start |
| Lưu / files / mẫu / scores / GPS | same-slug | **cấm** enqueue (`GAP-MOB-ACT-07`) |
| DELETE | — | **OUT** |

## 8. Device AC

| Factor | AC |
|--------|-----|
| GPS | **yes** Edit vị trí · deny → `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera / Files | **yes** · gallery + thêm ảnh/video · FileService · max 10 · toast upload fail |
| Offline | GET/PUT/upload fail → toast · **cấm** fake 200 / fake NT-* |
| Leave dirty | Edit dirty + Hủy/back → confirm discard modal → View · **cấm** system alert |
| Alert | **cấm** UIAlert / AlertDialog / window.alert |
| Map | **n/a** (`map: none`) |
| Typography | label/tab 13 · field ≥16 |
| Dual | cùng copy VN · cùng `#i-*` · iOS **Đóng** text · Android `#i-chevron-left` + **Lưu** |
| Tab | `tabs: none` detail · shell `field` active |
| Store signup | **N/A** · GAP-PO-STORE-01 n/a |

## 9. Open questions — PO chốt

| ID | Decision |
|----|----------|
| packKind | **Confirm `sheet`** |
| changeScope | **`edit_page`** (re-confirm analy · **cấm** new_page typed CRUD) |
| Pattern | sheet→screen · View/Edit · TopBar + ListRows / Select / Checklist / PhotoRow |
| Grid / Report AC | **N/A** |
| Leave | **Must** leave-dirty modal khi Edit dirty · fail path = toast (**GAP-PO-LEAVE-01**) |
| Label | value `mau-01`…`10` giữ · display MAU-10 `TemplateLabel` · **cấm** «Mẫu nghiệm thu NN» |
| Hidden required | AssigneeCode + InspectedAt = bind ẩn · **không** invent visible field |
| DELETE | **OUT** P1 |
| Hash skip | **cấm** re-scan demo |
| DOMAIN/API | **CLOSED** Patrol · `api/v1/patrol/nghiem-thu/{id}` + `files/*` · Step 4b SKIP |

UNCLEAR = **none**.

## 10. KPI / DoD summary

| KPI | Pass khi |
|-----|----------|
| Live open/save | Mở = GET `{id}` · Lưu = PUT thật · toast Code · **không** fake |
| Label + scores | TemplateLabel MAU-10 · ResultCode + scores catalog · **không** «Mẫu 03» |
| Media | MediaIds = guid[] · **không** URL |
| GPS | deny modal · **không** fake coords |
| Dual parity | iOS + Android cùng zones/copy/`#i-*` |
| Scope | **không** gộp list/create · **không** invent detail path · DELETE OUT |

## 11. Handoff → Design (`/agent-design-mobile` khi tới lượt)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-detail` |
| packKind | `sheet` |
| changeScope | `edit_page` |
| zones | `DES-MOB-NGHIEM-THU-DETAIL` · `#sc-nghiem-thu-detail` · parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create` |
| Pattern | sheet→screen · View (Đóng/Sửa) + Edit (Lưu/Hủy) · ListRow/Select/Checklist/PhotoRow/GPS |
| Grid AC | **N/A** |
| Report AC | **N/A** |
| Leave | leave-dirty modal · GPS deny reuse `DES-MOB-GPS-DENY` |
| controlHint | DA-01 abs · typography 13/16 · dual parity · **cấm** copy «Mẫu 03» |
| real-data | DA-02 §A+§B · PUT body rules |
| peerStdUrl | web `/nghiem-thu/:id` ref only · **cấm** `mfeStdUrl` native |
| reviewUrl | (Design mobile sau) |
| FormMode | View + Edit cùng slug · **cấm** Create trên slug này |
| APIs | GET `{id}` · GET init-data · PUT `{id}` · files/* |
| Open questions | none · GAP-MOB-NT-DETAIL-01 = Design gen screen |
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
| generatedAt | `2026-09-19T19:15:00.000Z` |
| versionGate | ok |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| priorContentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| taskId | `task_64a693da` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
