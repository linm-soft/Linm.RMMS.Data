# PO — Requirement — nghiem-thu (mobile list · Công tác nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (PO confirm · data-analy) |
| stack | `native_dual` |
| thisAction | **List** `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU` — live GET + search · row → sibling detail · CTA **Tạo** → sibling create · **cấm** gộp form |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_da538308` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` this role |
| prior | data_analy **done** · `handoff/data_analy-compact.md` · `specs/_data-analy/nghiem-thu-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| keepPrior | web PO/Design/SA/TL/Dev/QA/Review **confirmed** (`task_8d642b15`…`task_1b121e02`) · Full-page form · FileService · TMPL/STATUS/DOMAIN/API CLOSED · **delta = mobile list only** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-19T15:45:00.000Z` |
| taskId | `task_da538308` |

**Cấm:** invent `api/v1/nghiem-thu` / `files-nt` / `NghiemThuController` trên Bff · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · native alert · watermark «Gói N» / «gen realapp» · device label · AC tap-cycle tín hiệu · reimplement kit (`GAP-MOB-ACT-05`) · start sibling create/detail trước Approve (`GAP-MOB-ACT-06`) · enqueue search/GET (`GAP-MOB-ACT-07`) · demoItems SSOT · gộp WO / `rmms_patrol_sessions` · re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · Step 4b / MIG ở role này.

## 1. Goal

Native dual **Công tác nghiệm thu** list: mở từ hub `#row-nghiem-thu` · search · badge status · empty/fail chrome · CTA **Tạo** + row → siblings. Persona = **cán bộ nghiệm thu**. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `nghiem-thu` = list `#sc-nghiem-thu` only. Create/detail = **navigate only** · **cấm** gộp form (`GAP-MOB-ACT-01/02`).

**edit_page Delta:** ship native list bind live BFF — **không** đổi web Kind B / Full-page artifacts.

## 2. changeScope `edit_page` — Current vs New

| Zone / behavior | Current | New (DoD) |
|-----------------|---------|-----------|
| List surface | Web Kind B done · native demo 2 rows + toast | Native `#sc-nghiem-thu` · `GET patrol/nghiem-thu` · EmptyChrome · **cấm** demoItems |
| Row tap | demo `toast(NT-*)` | push sibling `nghiem-thu-detail` + `Id` |
| Nav **Tạo** | demo `go('nghiem-thu-create')` | push sibling `nghiem-thu-create` · **cấm** form trên list |
| Search | placeholder demo | `LinmSearchField` · query `?search=` |
| Badge | demo «Nháp»/«Xong» | map init-data · ship **Hoàn thành** (không «Xong») |
| BFF | CTX «chưa proxy» | catch-all covers `patrol/nghiem-thu*` · **cấm** invent controller |
| Filter status/route/template | demo none | **P1 optional** sheet · **Must** search; optional filters = P1 sheet OK |

**Keep:** web Full form · FileService · 10 mẫu `mau-01`…`10` · status enum CLOSED · DOMAIN Patrol · siblings create/detail `pending_confirm`.

## 3. DoD (đo được)

1. Dual `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU`: TopBar back **Tuần đường** · title **Công tác nghiệm thu** · trailing **Tạo** · SearchField · list rows. Frame proto iOS 390×844 · Android 412×915.
2. Hub `#row-nghiem-thu` (patrol-home) → push list · copy «Công tác nghiệm thu» · sub «10 mẫu · ảnh / video hiện trường» · `#i-check` · **cấm** invent icon.
3. Appear: `GET mobile-bff/api/v1/patrol/nghiem-thu` (+ optional `?search=`) · map rows. 0 Items + OK → **EmptyChrome** · **cấm** inject demo rows.
4. Fail / offline GET → empty + `LinmToast` · **cấm** native alert · **cấm** fake NT-*.
5. Row bind §B:

   | uiField | Source |
   |---------|--------|
   | rowCode | `Code` |
   | rowSub | `TemplateType` · `Route` · `KmFrom` (± media hint) |
   | rowStatus | `Status` → Nháp / Đang NT / Hoàn thành / Hủy |
   | rowIcon / chevron | `#i-check` · `#i-chevron-right` |

6. Row tap → push `nghiem-thu-detail` + `Id` · **cấm** toast code dead-end.
7. **Tạo** → push `nghiem-thu-create` · **cấm** implement form trong slug list · **cấm** start sibling pipeline trước Approve.
8. `GET …/init-data` map Statuses + TemplateTypes · fallback CLOSED labels nếu fail catalog.
9. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` · `LinmListRow` · StatusBadge · `LinmToast` · EmptyChrome · `#i-search` · `#i-chevron-left/right` · `#i-check`. **Cấm** reimplement (`GAP-MOB-ACT-05`).
10. Typography: label/badge **13** · field/search ≥**16** · dual copy/`#i-*` parity · tab shell `field` active · `tabs: none` trên list.
11. Device AC list: GPS **n/a** · Camera **n/a** · Leave dirty **n/a** (no CRUD form) · Offline = toast+empty · **cấm** alert.
12. App chỉ `{BffPrefix}` · token Keychain/Encrypted · **cấm** `:5101` / ERP.*.
13. Dev (sau): dual build PASS · Mobile.Bff build PASS — **cấm** `yarn start:std` / Step 4b ở PO.
14. QA (sau): Maestro `nghiem-thu` · `yarn e2e-qa-mobile` · store PNG — **cấm** e2e ở role này.
15. Step 4b **N/A** — path live · catch-all proxy · **cấm** invent API / MIG.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/nghiem-thu.md` | feature P0 |
| CTX-02 | `docs/context/features/patrol.md` | domain peer |
| CTX-03 | `docs/context/features/patrol-home.md` | hub entry |
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
| rowIcon | (check) | Icon | — | `#i-check` | status color |
| rowCode | NT-* | Text title | ≥16 | `LinmListRow` | `Code` |
| rowSub | Mẫu · tuyến · Km | Text subtitle | 13 | | Template · Route · Km |
| rowStatus | Nháp/Đang NT/Hoàn thành/Hủy | Badge | 13 | StatusBadge | init-data |
| rowChevron | (chev) | Chevron | — | `#i-chevron-right` | detail |
| empty | (trống) | EmptyChrome | 13–16 | | 0 items |
| toastFail | (fail) | Toast | 13–16 | `LinmToast` | 4xx/offline |

UNCLEAR = **none**.

### Status map (CLOSED)

| API | Label VN |
|-----|----------|
| `draft` | Nháp |
| `in_progress` | Đang NT |
| `done` | Hoàn thành |
| `cancelled` | Hủy |

TemplateType: `mau-01`…`mau-10` · label `Mẫu nghiệm thu 01`…`10`.

## 6. BFF / API (PO chốt · **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| List | GET | `patrol/nghiem-thu` | **yes** · ±`search` · opt status/route/templateType |
| Init catalog | GET | `patrol/nghiem-thu/init-data` | **yes** |
| Create form | — | sibling `nghiem-thu-create` | **navigate only** |
| Detail | — | sibling `nghiem-thu-detail` + Id | **navigate only** |
| Files | — | `files/*` FileService | **OUT** list |

**Cấm** invent root `nghiem-thu` path · DbContext trên Mobile.Bff · Step 4b.

## 7. Screens / action-tree (1 action = 1 feature)

```
patrol-home
└── nghiem-thu (#sc-nghiem-thu · list · this turn)
    ├── back → patrol-home (reuse)
    ├── Tạo → nghiem-thu-create (pending_confirm · navigate)
    ├── row → nghiem-thu-detail (pending_confirm · navigate)
    └── search / GET / init-data (same-slug · không enqueue)
```

| feature | kind | enqueue |
|---------|------|---------|
| `nghiem-thu` | list | **this turn** |
| `nghiem-thu-create` | sheet | **pending_confirm** — **cấm** start |
| `nghiem-thu-detail` | sheet | **pending_confirm** — **cấm** start |

## 8. Device AC

| Factor | AC |
|--------|-----|
| GPS | **n/a** list |
| Camera / Files | **n/a** list (create/detail) |
| Offline | GET fail → EmptyChrome + toast · **cấm** fake rows |
| Leave dirty | **n/a** (no form on list) |
| Alert | **cấm** UIAlert / AlertDialog / window.alert |
| Typography | label/tab 13 · field ≥16 |
| Dual | cùng copy VN · cùng `#i-*` · iOS back text · Android icon-btn |
| Store signup | **N/A** (no signup on this surface) · GAP-PO-STORE-01 n/a |

## 9. Open questions — PO chốt

| ID | Decision |
|----|----------|
| packKind | **Confirm `list`** |
| changeScope | **`edit_page`** (re-confirm analy) |
| Grid / Report AC | **N/A** native · web Grid keep on web lane only |
| Leave | **N/A** list · fail = toast/empty (**GAP-PO-LEAVE-01** toast path) |
| Optional filters | status/route/templateType = **P1 optional** sheet · search = **Must** |
| Siblings | create/detail **pending_confirm** · navigate wire OK · **cấm** start pipeline |
| Hash skip | **cấm** re-scan demo |
| DOMAIN/API | **CLOSED** Patrol · `api/v1/patrol/nghiem-thu` |
| FileService | **OUT** list · keep create path |

UNCLEAR = **none**.

## 10. KPI / DoD summary

| KPI | Pass khi |
|-----|----------|
| Live list | màn mở = Items từ BFF · 0 = EmptyChrome |
| Search | `?search=` rebinds list |
| Nav | Tạo + row → đúng sibling slug |
| Dual parity | iOS + Android cùng zones/copy |
| No fake | **cấm** demoItems / toast-as-detail |

## 11. Handoff → Design (`/agent-design-mobile` khi tới lượt)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| packKind | `list` |
| changeScope | `edit_page` |
| zones | `DES-MOB-NGHIEM-THU` · `#sc-nghiem-thu` · hub `#row-nghiem-thu` |
| Pattern | List + SearchField · **không** Full-page form trên slug này |
| Grid AC | **N/A** |
| Leave | **N/A** list |
| controlHint | DA-01 cite |
| real-data §A+§B | DA-02 |
| dual proto | gen/update `ui/prototype/{ios,android}` sau PO · reviewUrl Design |
| peerStdUrl | web ref only `http://localhost:9304/patrol` — **cấm** mfeStdUrl native |
| siblings | create/detail pending_confirm · zone ids only |
| keep web | Design web Full page **giữ** |
| next | Design mobile → SA (proxy confirm · no MIG) → TL → Dev iOS+Android → QA mobile |
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
| generatedAt | 2026-09-19T15:45:00.000Z |
| versionGate | ok |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| priorRole | data_analy · done · task_1bd5874a |
| taskId | task_da538308 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
