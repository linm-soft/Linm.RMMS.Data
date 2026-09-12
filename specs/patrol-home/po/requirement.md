# PO — Requirement — patrol-home (mobile hub · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`hub`** (re-confirm) |
| stack | `native_dual` |
| thisAction | **Hub live session** — POST mở ca · PUT kết ca · hero **chỉ** field BE · **cấm** sample fallback |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d032b4d9` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` |
| prior | data_analy **confirmed** · `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a` · bffContentHash `sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0` · **hash skip** · **cấm** re-scan demo |
| keep | segment · pin-here · KPI strip · quick 6 · nav sync/notify · sibling toast · offline badge local · kit map dual |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T15:00:00.000Z` |
| taskId | `task_d032b4d9` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/patrol-home` / `PatrolHomeController` · Grid/Report AC web · ERP.* · `mfeStdUrl` · native alert · watermark Gói · «Có mạng» · device label · AC tap-cycle tín hiệu · reimplement kit (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · hero/demo leftover bind · re-scan demo (**GAP-PO-DEMO-RESCAN-01**).

## 1. Goal

Hub **Tuần đường** dual: tab field · hero ca live · KPI · hôm nay · thao tác nhanh. Persona: Tuần đường hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**edit_page Delta (DoD GAP 2026-09-12):** đóng GAP mở/kết ca live + purge sample hero — **không** redesign layout đã ship.

**1 action = 1 feature.** Slug = `#sc-patrol-home` `DES-MOB-PAT-HOME`. **Cấm** gộp attendance / map / check-in / history / supervise / ops.

## 2. changeScope `edit_page` — Current vs New

| Zone / behavior | Current (shipped) | New (DoD) |
|-----------------|-------------------|-----------|
| Mở ca | Không `POST` · hub chỉ GET | Không active → CTA **Mở ca** `btn-open-session` → `POST patrol/sessions` Status=`Đang tuần` · StartedAt=now · reload |
| Kết ca | Detail `endSession` toast-only | `PUT patrol/sessions/{id}` Status=`Hoàn thành` · toast **sau** PUT OK · reload hub |
| Hero `routeKm` | thiếu Km → hardcode `QL.1 · Km 468+200` | `session.route` raw · trống → `—` / emptyActive |
| Hero `userName` | trống → `Nguyễn Văn A` | `session.userName` · trống → `—` |
| Row subtitle route | trống → `QL.1` | trống → `—` |
| timeLabel | thiếu → `07:20` | trống → `—` |
| `demoActive` / `demoToday` | leftover Copy | Hub **cấm** bind · Dev purge mapper |
| BFF | GET live | **Reuse** POST/PUT Live BE · BFF proxy · Step 4b **N/A** |

**Giữ nguyên:** segment · pin · KPI layout · quick rows · nav sync/notify · sibling toast · offline badge local · kit dual.

## 3. DoD (đo được)

1. Dual zones `#sc-patrol-home` giữ prior layout (nav · title · segment · hero · pin · KPI · Hôm nay · Thao tác nhanh). Frame iOS 390×844 · Android 412×915.
2. **Appear:** `GET patrol/sessions` · map active «Đang tuần» · **không** demo/sample fallback.
3. **No active:** emptyActive + CTA **Mở ca** → `POST` body: UserName (auth) · Route (user/last · **cấm** invent QL.1) · PatrolType=`Tuần đường` · Status=`Đang tuần` · PlannedDate=today · StartedAt=now · CheckInCount=0 · CoveragePercent=0 · OfflineQueued=false → reload. Route trống → block CTA / picker P1 · **không** invent sample.
4. **Has active:** hero live fields · **ẩn** CTA mở ca.
5. **Kết ca (detail owner wire từ hub flow):** `PUT` echo GET + Status=`Hoàn thành` · toast success sau OK · pop/reload hub — **cấm** toast-only.
6. Hero/KPI/today: bind session fields only · empty → `—` · **cấm** QL.1 / Nguyễn Văn A / 07:20 / Km sample.
7. Nav sync → push `patrol-offline` (`reuse`) · bell → toast **Thông báo** · badge 0 ẩn.
8. Segment idx **0** Tuần đường · **1** Chấm công → toast sibling — **cấm** đổi thứ tự (`GAP-TAB-01`).
9. Pin / hero map/check-in / quick sibling: **giữ** P1 toast / Lưu trữ push offline — **cấm** sheet check-in trên hub.
10. Offline badge = local count · ẩn khi 0.
11. Kit reuse map: `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmTabBar` — **cấm** reimplement (`GAP-MOB-ACT-05`).
12. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** `:5101` / ERP.*.
13. Dev (sau): dual build PASS · BFF build PASS — **cấm** `yarn start:std` ở PO.
14. QA (sau): Maestro `patrol-home` · `yarn e2e-qa-mobile` — **cấm** e2e ở role này.
15. Step 4b **N/A** — POST/PUT đã Live · **cấm** invent hub controller.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-home.md` | hub (stale GET-only vs GAP) |
| CTX-02 | `docs/context/features/patrol.md` §3 | POST/PUT Live |
| CTX-03 | `docs/context/features/home.md` | entry |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse |
| DEM-01 | `specs/patrol-home/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` | SSOT visual · **không** re-scan |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-home-control-hint.md` | controlHint + Delta |
| DA-02 | `specs/_data-analy/patrol-home-real-data.md` | §A API + §B DTO |
| DA-03 | `specs/_data-analy/patrol-home-bff-endpoints.md` | BFF |
| DA-04 | `specs/_data-analy/patrol-home-action-tree.md` | action-tree |
| IOS / AND / BFF / BE | abs paths STATUS | native_dual · DOMAIN-MAP Patrol |

## 5. controlHint (PO chốt)

Nguồn DA-01 · UNCLEAR = **none**.

| Field / zone | VN | controlHint | Kit | Notes |
|--------------|----|-------------|-----|-------|
| navSync | Đồng bộ | Icon | `LinmTopBar` | push offline |
| navNotify | Thông báo | Icon | `LinmTopBar` | toast |
| title | Tuần đường | LargeTitle | `LinmLargeTitle` | fixed |
| segPatrol / segAttendance | tabs | Segment 0/1 | `LinmSegment` | GAP-TAB-01 |
| heroActive | Ca đang chạy | Hero | `LinmHeroCard` · `LinmProgress` | live only |
| btnOpenSession | Mở ca | Primary | `LinmPrimaryButton` | `POST` · id `btn-open-session` |
| pinHere | Ghim vị trí hiện tại | Primary | `LinmPrimaryButton` | toast P1 |
| kpiStrip | 3 KPI | KPI | `LinmKpiStrip` | session |
| todayRows | PAT-* | ListRow + badge | `LinmListRow` | GET · tap detail P2/keep |
| btnEndSession | Kết ca | Detail CTA | existing | `PUT` · **không** toast-only |
| quickRows | 6 | ListRow | `LinmListRow` | sibling toast · Lưu trữ push |
| offlineBadge | N | Badge | | local · ẩn 0 |

## 6. BFF / API (PO chốt)

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| List + active | GET | `patrol/sessions` | **yes** |
| Mở ca | POST | `patrol/sessions` | **yes** — wire |
| Kết ca | PUT | `patrol/sessions/{id}` | **yes** — detail wire từ hub DoD |
| Detail | GET | `patrol/sessions/{id}` | keep |
| DELETE | — | — | **out** P1 |

**Cấm** invent `patrol-home` path · Step 4b N/A.

## 7. Open questions — PO chốt

| ID | Decision |
|----|----------|
| packKind | **Confirm `hub`** |
| changeScope | **`edit_page`** (re-confirm analy) |
| Hero sample | **Purge** — empty → `—` · **cấm** demo bind |
| Route trống khi mở ca | Block CTA / picker · **cấm** invent QL.1 |
| Kết ca owner | Detail PUT · hub DoD reload — **cấm** toast-only |
| Design proto CTA | Design update **chỉ nếu** thiếu `btn-open-session` trên proto · keep layout |
| kit_missing | **N/A** — reuse map |
| Sibling pending_confirm | **Không** auto start |
| GAP-PO-STORE-01 | **N/A** — không signup |
| UNCLEAR | **none** |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions this `{feature}` | `devSlash` |
|---------|------|---------|----------|--------------------------|------------|
| Hub Tuần đường | `#sc-patrol-home` · dual | **Hub** | none | GET · POST mở ca · display live · taps §3 | `/agent-dev-ios` + `/agent-dev-android` |
| Detail kết ca (owner wire) | detail existing | Detail footer | none | PUT kết ca | same |

**Không** trên pack: attendance / map / check-in sheet / submit Lưu watermark.

Reuse: `#sc-patrol-offline` · Home entry tab switch.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline / GET fail | Hub **mở** · empty/`—` · toast · **cấm** demo bind · **cấm** full-screen block |
| AC-D-02 | GPS deny | Pin P1 toast · mở/kết ca **không** bắt GPS |
| AC-D-03 | Leave dirty | **N/A** |
| AC-D-04 | Native alert | **Cấm** — `LinmToast` only |
| AC-D-05 | Keyboard | **N/A** (trừ picker route nếu Design thêm) |
| AC-D-06 | Safe area | Không đè notch / tab |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | Tốt/TB/Yếu · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain/Encrypted · `{BffPrefix}` |
| AC-D-10 | Tab / segment | idx 0/1 lock · kit segment |
| AC-F-01 | Appear | GET live · no sample |
| AC-F-02 | Mở ca | POST → reload · route required |
| AC-F-03 | Kết ca | PUT → toast sau OK · reload |
| AC-F-04 | Hero/row empty | `—` · **cấm** QL.1 / Nguyễn Văn A / 07:20 |
| AC-F-05 | Sync / Lưu trữ | Push offline |
| AC-F-06 | Sibling | Toast · **cấm** sheet check-in |
| AC-F-07 | Dual parity | Cùng copy zones |

Typography: label/tab **13** · field **≥16** (`typography-analy-qa`).

## 10. Leave / alert

| Case | UI |
|------|-----|
| Dirty leave | N/A |
| API fail | Toast · empty/`—` · **cấm** native alert · **cấm** demo leftover |
| Mở/kết ca OK | Toast success (kết ca) · reload |
| Bell / sibling | Toast |

## 11. Out of scope

- Sibling screens + start `pending_confirm`
- Invent hub API / Step 4b / ERP.* / `mfeStdUrl`
- Live GPS pin P2 / map / camera trên hub
- Demo fallback hero/today
- Re-scan demo HTML
- E2E / yarn build ở role PO

## 12. KPI / DoD pack

Hub = entry ca live + điểm tuần + offline từ một tab. DoD edit = **POST/PUT session + hero server-only** trên dual — không omni map/check-in.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** |
| changeScope | `edit_page` |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-home/STATUS.md` |
| Delta | §2 — Design **chỉ** nếu proto thiếu CTA Mở ca / emptyActive; **giữ** layout |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / Leave | Hub · none form · §10 |
| Grid AC / Report AC | **N/A** |
| peerStdUrl / reviewUrl | **cấm** mfeStdUrl · dual `file://…/prototype/{ios,android}/index.html#sc-patrol-home` |
| Kit | reuse · kit_missing **N/A** |
| BFF | GET+POST+PUT `patrol/sessions` · Step 4b N/A |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| autoApprove | ON khi Design xong dual + ux-analy |
| e2eQa | queued QA only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T15:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |
| priorPoTask | task_9415067f |
| taskId | task_d032b4d9 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
