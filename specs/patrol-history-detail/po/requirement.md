# PO — Requirement — patrol-history-detail

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`sheet`** · **surface = Full screen** `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` — PACK-01 giữ |
| formPattern | **Full** (không Modal / BottomSheet) |
| stack | `native_dual` |
| thisAction | **Chi tiết ca** `#sc-patrol-detail` only · GET session + **GET check-ins live** · tap done → checkin-detail · map nav · end toast P1 · **không** gộp list/filter · **không** gộp CI save · **không** PUT end |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_eef3894e` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON queued → `/agent-qa*` · **cấm** role PO chạy e2e / `yarn start:std` / `mfeStdUrl` |
| prior | data-analy **confirmed** · `task_dc906824` · compact `handoff/data_analy-compact.md` · control-hint + real-data · contentHash `sha256:patrol-history-detail-control-hint-20260912-timeline-live` · realDataHash `sha256:patrol-history-detail-real-data-20260912-timeline-live` · bffContentHash `sha256:patrol-sessions-getbyid-plus-checkins` · actionTreeHash `sha256:patrol-history-detail-action-tree-20260912-timeline-live` · **hash skip** · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| keep | Prior Design dual proto + kit map · **PO § Delta only** · không rewrite IA |
| parent | `patrol-history` · list `#sc-patrol-history` / today → push detail + `Id` (đã ship) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T13:45:00.000Z` |
| taskId | `task_eef3894e` |

**Cấm:** invent `api/v1/patrol-history-detail` · ERP.* · `mfeStdUrl` · Grid AC web / Report AC Lin* · WebView HTML · `UIAlert` / `AlertDialog` · watermark Gói · device label «iPhone»/«Android» · gộp list/filter/CI-save/end-PUT · start sibling Dev · fake GET 200 · ship `timelineDemo` · Step 4b / migration / e2e ở role PO.

## 1. Goal

Màn **Chi tiết ca** native dual (đã ship): sửa GAP review — timeline bind **live** check-ins, tap done → nav checkin-detail, verify map nav, giữ end toast P1. Persona: Tuần đường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-history-detail` = `#sc-patrol-detail` `DES-MOB-PAT-DETAIL`.

## 2. changeScope `edit_page` — § Delta Current vs New

| ID | Current (native ship) | New (DoD) | Surface |
|----|----------------------|-----------|---------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | `timelineDemo` hardcode 3 rows · **không** GET | GET `patrol/sessions/{id}/check-ins` live · empty `[]` OK · **cấm** `timelineDemo` | timeline |
| GAP-MOB-PAT-HIST-DET-TAP-01 | Tap điểm done → toast `patrol.detail.toast.checkin` | Tap done → nav `#sc-checkin-detail` (`patrol-checkin`) · pass check-in `Id` · **≠** toast | timeline |
| GAP-MOB-PAT-HIST-DET-MAP-01 | `onOpenMap(id)` wired | Keep nav `patrol-map` + session `Id` · **cấm** toast khi có Id | CTA |
| GAP-MOB-PAT-HIST-DET-END-01 | «Kết thúc ca» → toast | **Giữ** toast P1 · **cấm** PUT | CTA |
| — closed prior | NAV push · GET session · OfflineDemo strip | **không** re-open | — |

**OUT (không đổi):** list/search · POST check-ins · session PUT/DELETE · invent path · plan-points pending synth P1 · ERP.*.

**PACK-01 giữ:** sheet meta · Full screen surface · **cấm** sheet overlay.

## 3. Screens / action-tree

```
patrol-history (#sc-patrol-history) / today  — entry · reuse
└── patrol-history-detail (#sc-patrol-detail)  — OWNER
    ├── appear GET patrol/sessions/{id}
    ├── appear GET patrol/sessions/{id}/check-ins  — NEW live timeline
    ├── timeline tap done → patrol-checkin + Id     — NEW (was toast)
    ├── CTA Mở bản đồ ca → patrol-map + Id
    └── CTA Kết thúc ca / Chia sẻ → toast P1 · cấm PUT
```

| Screen | DES | Pattern | In scope |
|--------|-----|---------|----------|
| Chi tiết ca | `DES-MOB-PAT-DETAIL` | Full | **yes** — owner Delta |
| Lịch sử ca | `DES-MOB-PAT-LIST` | list | entry + back only |
| Bản đồ ca | `DES-MOB-PAT-MAP` | map | CTA nav only |
| Check-in detail | `DES-MOB-CI-DETAIL` | sheet/read | timeline tap nav · **cấm** save |
| Leave dirty | `DES-MOB-LEAVE` | modal | **N/A** readonly |

`tabs: none` trên detail · shell Tab **Tuần đường** giữ.

## 4. DoD (đo được)

1. Dual native `#sc-patrol-detail` giữ: top bar **Chi tiết ca** · back → list · trailing Chia sẻ → toast P1 · **cấm** system share. Proto dual giữ (Design keep).
2. Appear: GET `patrol/sessions/{id}` · bind hero + info (§6). Fail/offline → EmptyChrome/toast · **cấm** fake 200 · **cấm** OfflineDemo. 404 → empty + back. Thiếu Id → toast + back.
3. **NEW** Appear: GET `patrol/sessions/{id}/check-ins` · bind timeline rows (§7 display). Empty `[]` → empty chrome OK. Fail → timeline empty + toast · **cấm** fallback `timelineDemo` / 3 demo rows.
4. Hero + Thông tin rows: giữ bind session (Code · Status VN · User · Route · Type · PlanDate · Started · Coverage) — **không** đổi layout.
5. Timeline tap done (`canOpen` khi có `Id`) → nav `patrol-checkin` / `#sc-checkin-detail` + check-in `Id` · **cấm** toast checkin · **cấm** gộp save/POST.
6. Primary **Mở bản đồ ca** → nav `patrol-map` + session `Id` · **cấm** toast khi có Id · **cấm** embed map.
7. Secondary **Kết thúc ca** → toast P1 · **cấm** PUT/DELETE.
8. Kit reuse giữ: `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · Primary/Secondary · Toast · EmptyChrome · **cấm** raw alert.
9. Device AC: GPS display-only từ DTO · **không** request location trên detail · Camera n/a (chỉ «Ảnh ×N») · Offline = empty/toast · Leave-dirty N/A.
10. App chỉ `{BffPrefix}` · token Keychain/Encrypted · Bearer + X-Company-Id trên **cả 2** GET · **cấm** ERP.* · Step 4b **N/A**.
11. Design (role sau): keep dual proto · note runtime timeline ≠ demo 3-row SSOT · Delta copy empty OK.
12. SA (role sau): confirm GetCheckIns **Live** · Step 4b N/A · **cấm** invent / ERP.*.
13. Dev (role sau): strip `PatrolHistoryDetailCopy.timelineDemo` / Android `timelineDemo` · FetchCheckIns UC · wire tap/map · dual iOS+Android PASS — **cấm** `yarn start:std` ở PO.
14. QA (role sau): Maestro slug · assert timeline live/empty · tap → CI-DETAIL · map nav · end toast · store PNG — **cấm** e2e ở PO.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-history-detail.md` | detail |
| DEM-feat | `specs/patrol-history-detail/ui/prototype/{ios,android}/index.html` `#sc-patrol-detail` | UI ref only · **không** runtime timeline |
| DA-01 | `specs/_data-analy/patrol-history-detail-control-hint.md` | `…-20260912-timeline-live` |
| DA-02 | `specs/_data-analy/patrol-history-detail-bff-endpoints.md` | GetById + GetCheckIns |
| DA-03 | `specs/_data-analy/patrol-history-detail-action-tree.md` | |
| DA-04 | `specs/_data-analy/patrol-history-detail-real-data.md` | §A+§B |
| SCAN | — | **hash skip** · **cấm** re-crawl |
| IOS / AND / BFF / BE | paths STATUS | native · **cấm ERP.*** |

## 6. controlHint (PO chốt — giữ + Delta timeline)

Nguồn DA-01 + DA-04. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Lịch sử | BackButton | * | `LinmTopBar` | pop list |
| title | Chi tiết ca | TopBar title | * | `LinmTopBar` | fixed |
| navShare | (Chia sẻ) | IconButton | * | trailing | toast P1 |
| codeHero | PAT-* | Text display | * | — | GET `Code` ≥26 bold |
| badgeStatus | (trạng thái) | Badge | * | `LinmBadge` | Status VN map |
| sectionInfo | Thông tin | SectionLabel | * | `LinmSectionLabel` | fixed |
| rowUser…Coverage | info | ListRow | * | `LinmListRow` | GET session §B |
| sectionTimeline | Điểm tuần | SectionLabel | * | `LinmSectionLabel` | fixed |
| tlItem | (điểm) | TimelineRow | * | `LinmTimelineRow` | **GET check-ins** bind |
| tlEmpty | (chưa có điểm) | Empty inline | * | — | `[]` · **cấm** demo rows |
| tlTapDone | Xem | TimelineRow tap | * | nav | → checkin-detail + Id |
| btnMap | Mở bản đồ ca | PrimaryButton | * | `LinmPrimaryButton` | → patrol-map + Id |
| btnEnd | Kết thúc ca | SecondaryButton | * | `LinmSecondaryButton` | toast · **cấm** PUT |
| empty404 / toastErr | — | Empty / Toast | * | — | session fail |

### Status VN map (không đổi)

| API `Status` | UI |
|--------------|-----|
| active / in_progress / Đang tuần | Đang tuần |
| done / completed / Hoàn thành | Hoàn thành |
| missed / Bỏ sót | Bỏ sót |
| offline / OfflineQueued | Mất sóng |
| other | raw |

## 7. Timeline display (NEW — real-data)

| Line | Rule |
|------|------|
| title | `PlanPointLabel` raw |
| subtitle route | `Route` raw |
| time | `CreatedAt` → `HH:mm` local |
| match | `MatchOk=true` → «định vị đạt» · else «định vị chưa đạt» |
| photo | `PhotoLocalIds.count` > 0 → «Ảnh ×{n}» |
| distance | optional `DistanceToPlanM` → `~{n} m` |
| canOpen | true khi có `Id` |
| empty | no row · empty copy · **cấm** 3 demo rows |
| **cấm** | `timelineDemo` gán state |

Session display giữ: plan `dd/MM/yyyy` · started `HH:mm`+(UTC+7) · coverage `{n}%`.

## 8. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action | Method | Path | In slug? |
|--------|--------|------|----------|
| Load detail | GET | `patrol/sessions/{id}` | **yes** |
| Timeline | GET | `patrol/sessions/{id}/check-ins` | **yes** — Live |
| End session | PUT/DELETE | — | **OUT** |
| Check-in save | POST | — | **OUT** — `patrol-checkin` |
| Map embed | — | — | **OUT** — nav only |

## 9. Device AC

| Case | Expected |
|------|----------|
| Session GET fail | Toast · EmptyChrome · **cấm** fake 200 / OfflineDemo |
| Check-ins GET fail | Toast · timeline empty · **cấm** `timelineDemo` |
| Check-ins `[]` | Empty timeline OK |
| 404 session | Empty · back list |
| Missing Id | Toast · back |
| GPS | display DTO only · **không** request |
| Leave dirty | **N/A** |
| Native alert | **cấm** — `LinmToast` / empty |

## 10. KPI / Open questions

| KPI | Target |
|-----|--------|
| Timeline live / empty | 100% · 0 `timelineDemo` |
| Tap done → CI-DETAIL | 100% · 0 toast checkin |
| Map nav + Id | 100% · 0 toast khi có Id |
| End | toast only · 0 PUT |

| ID | Decision (autoApprove) |
|----|------------------------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | **chốt** GET check-ins live · empty OK · **cấm** timelineDemo |
| GAP-MOB-PAT-HIST-DET-TAP-01 | **chốt** nav checkin-detail + Id |
| GAP-MOB-PAT-HIST-DET-MAP-01 | **chốt** nav patrol-map + Id · verify |
| GAP-MOB-PAT-HIST-DET-END-01 | **giữ** toast P1 · **cấm** PUT |
| Open Q | **none** |

## 11. Handoff → Design

| Field | Value |
|-------|-------|
| write | keep `ui/*` · Delta note runtime ≠ demo 3-row · empty timeline copy |
| SSOT | dual proto `#sc-patrol-detail` · controlHint §6 · real-data §B |
| pack | Full screen · **không** sheet overlay |
| grid_standard | **N/A** |
| leave | **N/A** |
| next | `/agent-design-mobile` khi tới lượt · **cấm** start trong task PO |
| compact | `handoff/po-compact.md` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:45:00.000Z` |
| versionGate | rechecked |
| contentHashPrior | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| realDataHashPrior | sha256:patrol-history-detail-real-data-20260912-timeline-live |
| taskId | `task_eef3894e` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
