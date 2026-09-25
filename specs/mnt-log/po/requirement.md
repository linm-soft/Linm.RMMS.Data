# PO — Requirement — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` (shipped · this turn = **hash refresh** sau data_analy · Must **0**) |
| packKind | **`sheet`** (PO confirmed · surface **full screen** `#sc-mnt-log` · **không** bottom-sheet chrome · **không** toast-only) |
| stack | `native_dual` |
| thisAction | **Nhật ký xử lý** `#sc-mnt-log` only · owner `DES-MOB-MNT-LOG` · entry mnt-list `#i-list` (status=`done`) · **cấm** gộp `mnt-chat` / `mnt-progress` / `estimate` / web Kind B |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_5751a874` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` ở role PO |
| prior | data-analy **confirmed** · `specs/_data-analy/mnt-log-control-hint.md` · `mnt-log-bff-endpoints.md` · `mnt-log-action-tree.md` · `mnt-log-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3` · demoContentHash `sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0` · bffContentHash `sha256:maintenance-work-orders-getbyid-proxy-passthrough` · actionTreeHash = contentHash · ctxContentHash = contentHash · parentCtxHash `sha256:99b41731e67d7c0b661a0a053349f2975f22e7e2d67c417d640905e57006f0d2` · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) · UNCLEAR **none** |
| priorWeb | — (mobile-first) · domain Maintenance web Kind B **OUT** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-19T13:42:01.000Z` |
| taskId | `task_5751a874` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-log` / `…/logs` / `…/progress-history` · invent LogController · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · native alert · watermark Gói · «Có mạng» · device label «iPhone» · badge P1/P2 · AC tap-cycle · AC reimplement kit (`GAP-MOB-ACT-05`) · enqueue sibling (`GAP-MOB-ACT-06/07`) · fake timeline khi GET fail · composer / POST progress · re-scan demo (`GAP-PO-DEMO-RESCAN-01`) · e2e / start:std / Step 4b ở role PO.

## 1. Goal

Màn **Nhật ký xử lý** native dual (iOS SwiftUI + Android Compose): từ danh sách công việc (card **Đã hoàn thành**) → header WO readonly · timeline dọc mốc xử lý (tạo · hạn · mô tả · tiến độ · ghi chú · hoàn thành) — **readonly**. Persona: Tuần đường · Hạt · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug `mnt-log` = `#sc-mnt-log` `DES-MOB-MNT-LOG`. Header / timeline / empty / banner / back / toast = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`). **Không** child sheet · **không** Primary write CTA.

Entry: `mnt-list` `#i-list` trên card status=`done` → **push** `#sc-mnt-log` (**GAP-MOB-MNT-LOG-NAV-01** / **ENTRY-01** · shipped).

## 2. changeScope `new_page` · § Delta (hash refresh)

| ID | Current | New / status | Surface |
|----|---------|--------------|---------|
| GAP-MOB-MNT-LOG-NAV-01 | Entry `#i-list` → `#sc-mnt-log` | **shipped** | mnt-list · mnt-log |
| GAP-MOB-MNT-LOG-SCR-01 | Dual demo `#sc-mnt-log` | **CLOSED** (demo live) | screen |
| GAP-MOB-MNT-LOG-HDR-01 | Header WO title · code · status | shipped readonly | `#wo-header` |
| GAP-MOB-MNT-LOG-TL-01 | Timeline dọc | shipped · client derive | `#timeline` |
| GAP-MOB-MNT-LOG-EMPTY-01 | Empty «Chưa có nhật ký» | shipped | `#empty` |
| GAP-MOB-MNT-LOG-DATA-01 | BFF `GET maintenance/work-orders/{id}` | **confirmed** | BFF |
| GAP-MOB-MNT-LOG-HIST-01 | History API | **CLOSED P1** · derive GetById · DEFER history | GAP |
| GAP-MOB-MNT-LOG-PACK-01 | packKind=`sheet` · surface screen | **PO confirmed** | meta |
| GAP-MOB-MNT-LOG-ENTRY-01 | Entry done card `#i-list` | **confirmed** demo = done | entry |
| GAP-MOB-MNT-LOG-CMT-01 | Comments = `mnt-chat` | **cấm** composer | scope |
| GAP-MOB-MNT-LOG-SORT-01 | newest-first | **confirmed** | meta |
| GAP-MOB-A11Y-01 | iOS log glyph a11y | **Should OPEN** · Must **0** · optional `/edit-mobile-feature` | iOS |

**Không** đổi (OUT): `mnt-list` cards · `estimate` · `mnt-chat` · `mnt-progress` write · web Kind B/form WO · Kind E summary · map embed.

SSOT visual = dual `#sc-mnt-log` · frame iOS 390×844 · Android 412×915 · parity copy trừ chrome back (iOS text «Công việc» · Android icon-only OK).

## 3. DoD (đo được)

1. Dual native cùng zone `#sc-mnt-log` `DES-MOB-MNT-LOG`: back → `mnt-list` · title **Nhật ký xử lý** · `#wo-header` · `#section-log` · `#timeline` · `#empty` · `#banner-missing` · toast. Tab shell 5 **giữ** · tab `work` · surface `tabs: none` (`GAP-TAB-01`). **Cấm** badge P1/P2 · Primary write.
2. Prefill: nav args và/hoặc `GET maintenance/work-orders/{id}` · thiếu `id` → `#banner-missing` / empty · **không** fake rows. Demo SSOT «Nạo cống» chỉ Design gate khi API fail.
3. Timeline **client derive** từ `WorkOrderDto` (created · due · description · progress · note · done) · **newest-first**.
4. Empty **Chưa có nhật ký** khi thiếu id / 0 derive · GET fail → toast + empty · **cấm** fake.
5. **Không** history API P1 — **cấm** invent `…/logs` (**HIST-01 CLOSED P1** · DEFER).
6. **Không** composer — comments = `mnt-chat`.
7. Status VN map = mnt-list SSOT.
8. Entry reuse parent `#i-list` **done only** → push `#sc-mnt-log`.
9. Kit: `LinmTopBar` · `LinmListRow` · `LinmList`/Timeline · EmptyChrome · `LinmIconButton` · `LinmToast` · **cấm** invent kit.
10. Typography: label **13** · field **≥16** · title **17**.
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted.
12. Dev (sau): iOS `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` PASS — **cấm** yarn web.
13. QA (sau): Maestro `mnt-log` · e2e-qa-mobile · store PNG — **cấm** yarn e2e web.
14. BE: reuse live `WorkOrdersController.GetById` · Step 4b **N/A** · **cấm** ERP.* · **cấm** LogController BFF.
15. Must open bugs **0** · A11Y Should optional edit — **không** block DoD P1.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/mnt-log.md` | feature |
| CTX-02 | `docs/context/features/mnt-list.md` | parent entry · status VN |
| CTX-03 | `docs/context/features/maintenance.md` | WorkOrder DTO |
| DEM-01 | `specs/mnt-log/ui/prototype/ios/index.html` `#sc-mnt-log` | iOS dual · **live** |
| DEM-02 | `specs/mnt-log/ui/prototype/android/index.html` `#sc-mnt-log` | Android dual · **live** |
| DEM-03 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#i-list` | entry parent (cite only · **cấm** re-crawl) |
| DES | `DES-MOB-MNT-LOG` | IA dưới Công việc |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / List / Empty / Toast / IconButton |
| DI-01 | — | **no Excel** |
| DA-01..04 | `specs/_data-analy/mnt-log-{control-hint,bff-endpoints,action-tree,real-data}.md` | analy SSOT |
| IOS / AND / BFF / BE | Mobile.iOS · Mobile.Android · Mobile.Bff · WebService | abs roots packet |
| KIT | `Linm.Mobile.Kit.{iOS,Android}` | reuse |

**Cấm** `mfeStdUrl`. **Cấm** re-scan demo — copy từ DA-* (hash skip).

## 5. controlHint (PO chốt)

Nguồn DA-01 + real-data §A+§B. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| screenTitle | Nhật ký xử lý | TopBar title | * | `LinmTopBar` | `DES-MOB-MNT-LOG` · 17 |
| navBack | Công việc | BackButton | * | TopBar leading | `go('mnt-list')` · Android icon-only OK |
| woTitle | (tên CV) | Text readonly | * | `LinmListRow` | `#wo-title` · nav/GET |
| woCode | WO-* / CV-* | Text readonly | * | | `#wo-code` |
| woStatus | Tình trạng hiện tại | Badge readonly | * | | `#wo-status-badge` · VN map |
| sectionLog | Nhật ký | SectionLabel | * | | `#section-log` · **13** |
| timeline | (các mốc) | TimelineList | * | `LinmList` | `#timeline` · newest-first |
| logAt | (thời điểm) | Text caption | * | | **13** |
| logBody | (nội dung) | Text | * | | ≥16 |
| empty | Chưa có nhật ký | EmptyChrome | * | EmptyChrome | `#empty` |
| bannerMissing | Thiếu công việc… | Banner | * | | `#banner-missing` · thiếu nav id |
| toastErr | (lỗi mạng / 404) | Toast | * | `LinmToast` | **cấm** fake |
| actLog | Nhật ký xử lý | IconButton | * | `LinmIconButton` | `#i-list` · done · `go('mnt-log')` |

### Timeline templates (derive)

| kind | when | VN body | at |
|------|------|---------|-----|
| `created` | always | Tạo công việc | `CreatedAt` |
| `due` | `DueAt` set | Hạn: {fmt} | `DueAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `progress` | `%`>0 hoặc in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |

### Status VN map

| API | VN |
|-----|-----|
| `new` | Chờ xử lý |
| `in_progress` | Đang xử lý |
| `done` | Đã hoàn thành |
| `cancelled` | Đã hủy |

## 6. BFF (PO chốt · **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Load nhật ký + header | GET | `maintenance/work-orders/{id}` | **yes** primary · derive |
| Init status (opt) | GET | `maintenance/work-orders/init-data` | optional |
| Timeline UI | — | client derive `WorkOrderDto` | yes · HIST CLOSED P1 |
| History API | — | **không live** | **cấm invent** |
| Comments / progress write | — | — | **OUT** siblings |

### Bind §B

| UI | → |
|----|---|
| woTitle / woCode / woStatus | nav / GET detail |
| timeline[].at / body | derived Signed fields |
| empty / bannerMissing | local |
| toastErr | GET fail |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Decision |
|----|----------|
| PACK-01 | packKind=`sheet` · surface **screen** |
| SCR/NAV/ENTRY | dual live · push từ `#i-list` done-only · back `mnt-list` |
| HIST-01 | **CLOSED P1** · derive · DEFER history API |
| CMT-01 | **không** composer · `mnt-chat` |
| SORT-01 | newest-first |
| A11Y-01 | Should · Must **0** · optional edit |
| Tab | `tabs: none` · shell `work` |
| Tech | GPS/Camera N/A · Offline = toast/empty · **cấm** fake |
| Store signup | N/A |
| Step 4b | N/A · reuse GetById |
| Hash skip | **cấm** re-scan demo |
| UNCLEAR | **none** |
| Sibling enqueue | **none** |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions this `{feature}` | `devSlash` |
|---------|------|---------|----------|---------------------------|------------|
| Nhật ký xử lý | `#sc-mnt-log` `DES-MOB-MNT-LOG` · dual | **Screen** (meta sheet) | view readonly | GET · derive · empty · banner · toast · back | `/agent-dev-ios` + `/agent-dev-android` |

Zones: `#wo-header` · `#wo-title` · `#wo-code` · `#wo-status-badge` · `#section-log` · `#timeline` · `#empty` · `#banner-missing`.

**Không:** estimate / chat / progress · composer · map · write CTA · `#sheet-*`.

Reuse: `mnt-list` entry/back · live GetById (cite).

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · GET fail → toast + empty · **cấm** fake · **cấm** full-screen block tab |
| AC-D-02 | GPS | **N/A** |
| AC-D-03 | Leave dirty | **N/A** — readonly · back pop thẳng |
| AC-D-04 | Native alert | **Cấm** — `LinmToast` / EmptyChrome only |
| AC-D-05 | Keyboard | **N/A** |
| AC-D-06 | Safe area | TopBar + scroll + tab không đè notch/home |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** · **cấm** «Có mạng» / tap-cycle |
| AC-D-09 | Token | Bearer Keychain/Encrypted · `{BffPrefix}` only |
| AC-D-10 | Tab | shell `work` · in-screen **none** |
| AC-D-11 | Camera | **N/A** |
| AC-D-12 | Typography | label **13** · field ≥**16** · title **17** |
| AC-D-13 | Push | **N/A** |
| AC-F-01 | Appear | nav/GET · fail → empty/toast · thiếu id → banner/empty |
| AC-F-02 | Back | Pop `mnt-list` · **cấm** reimplement list |
| AC-F-03 | Header | title · code · status VN readonly |
| AC-F-04 | Timeline | §5 templates · newest-first · **cấm** invent history |
| AC-F-05 | Empty | «Chưa có nhật ký» |
| AC-F-06 | GET fail | Toast + empty · **cấm** fake |
| AC-F-07 | Entry | `#i-list` **done** → push `#sc-mnt-log` |
| AC-F-08 | Dual parity | cùng fields/copy trừ chrome back |
| AC-F-09 | Chrome | **Cấm** device label / watermark Gói |
| AC-F-10 | 1 action | **Cấm** gộp siblings |
| AC-F-11 | Readonly | **Cấm** write CTA / POST / composer |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Back | Pop `mnt-list` · không confirm |
| Missing WO id | `#banner-missing` / empty · **không** fake |
| GET fail / 404 | Toast · empty |
| 0 derive | Empty **Chưa có nhật ký** |
| Success | Header + timeline newest-first |
| Offline | Toast/empty · **cấm** full-screen block |
| Demo fallback | Chỉ API fail **và** Design gate · SSOT «Nạo cống» |

## 11. Out of scope

- `mnt-list` layout/filters · entry non-done
- `estimate` / `mnt-chat` / `mnt-progress`
- Web Kind B/E · map · GPS/Camera
- Invent logs/history API · LogController
- Offline queue · reimplement list
- Watermark / device label · ERP.* · mfeStdUrl
- Re-scan demo · Step 4b / migration / e2e / start:std ở PO
- A11Y Must (Should only · optional edit)

## 12. KPI

Một push `#sc-mnt-log` từ mnt-list `#i-list` (done) → header + timeline derive thật GetById (newest-first) · empty/toast khi fail. **Không** omni-implement list/estimate/chat/progress trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **`sheet`** (confirmed · surface screen) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/mnt-log/STATUS.md` |
| Context / Demo / DI | CTX-01..03 · DEM-01/02 live dual · no Excel |
| controlHint / UNCLEAR | §5 · **none** |
| Screens / Pattern / `devSlash` | Screen `#sc-mnt-log` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** |
| peerStdUrl / reviewUrl | **cấm** mfeStdUrl · Design dual `file://…/prototype/{ios,android}/index.html#sc-mnt-log` |
| Kit | TopBar / ListRow / List / Empty / Toast / IconButton |
| BFF / Real-data | GetById + derive · §A+§B |
| Open questions | §7 chốt · HIST CLOSED P1 · A11Y Should optional |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design tới lượt |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| generatedAt | `2026-09-19T13:42:01.000Z` |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| realDataContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| actionTreeContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| ctxContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| demoContentHash | sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0 |
| parentCtxHash | sha256:99b41731e67d7c0b661a0a053349f2975f22e7e2d67c417d640905e57006f0d2 |
| taskId | `task_5751a874` |
| dorGate | **PASS** |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new dorGate=PASS -->
