# Data-analy — patrol-history-detail (controlHint · mobile Chi tiết ca)

| | |
|---|---|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS) · surface Full `#sc-patrol-detail` · `DES-MOB-PAT-DETAIL` |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_dc906824` |
| priorTask | `task_b2fb1a98` (new_page) · review `task_96251956` |
| autoApprove | `ON` |
| demo | `specs/patrol-history-detail/ui/prototype/{ios,android}/index.html` · `#sc-patrol-detail` |
| ctx | `docs/context/features/patrol-history-detail.md` |
| generatedAt | `2026-09-12T13:26:27.000Z` |

**Cấm:** watermark Gói · invent `api/v1/patrol-history-detail` · gộp list/filter · gộp CI-DETAIL save · ERP.* · mfeStdUrl · `timelineDemo` ship · PUT end P1 · fake GET 200.

## Skill packet — 4 file

| File | Step |
|------|------|
| **file này** | controlHint + § Delta |
| [`patrol-history-detail-bff-endpoints.md`](patrol-history-detail-bff-endpoints.md) | BFF |
| [`patrol-history-detail-action-tree.md`](patrol-history-detail-action-tree.md) | action-tree |
| [`patrol-history-detail-real-data.md`](patrol-history-detail-real-data.md) | real-data |

## § Delta Current vs New (`edit_page` · GAP review 2026-09-12)

| ID | Current (native ship) | New (DoD) | Surface |
|----|----------------------|-----------|---------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | `PatrolHistoryDetailCopy.timelineDemo` hardcode 3 rows · **không** GET | GET `patrol/sessions/{id}/check-ins` live · empty `[]` OK · **cấm** `timelineDemo` | timeline |
| GAP-MOB-PAT-HIST-DET-TAP-01 | Tap điểm done → toast `patrol.detail.toast.checkin` | Tap done → nav `#sc-checkin-detail` (`patrol-checkin`) · pass check-in `Id` · **≠** toast | timeline |
| GAP-MOB-PAT-HIST-DET-MAP-01 | `onOpenMap(id)` wired · verify push `patrol-map` | Keep nav `patrol-map` + session `Id` · **cấm** toast khi có Id | CTA |
| GAP-MOB-PAT-HIST-DET-END-01 | «Kết thúc ca» → toast | **Giữ** toast P1 · **cấm** PUT | CTA |
| — closed prior | NAV push · GET session by id · OfflineDemo strip | **không** re-open | — |

**Không** đổi (OUT): list/search · POST check-ins · session PUT/DELETE · invent path · plan-points pending synth P1 · ERP.*.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | display | Readonly từ check-in DTO · **không** request location trên detail |
| Camera | n/a | `PhotoLocalIds.count` → «Ảnh ×N» · **không** capture |
| Offline | yes | Session GET fail → EmptyChrome+toast · check-ins fail → timeline empty + toast · **cấm** fallback `timelineDemo` |
| Map | nav | CTA → `patrol-map` · pass session id |
| token | Keychain / Encrypted | Bearer + X-Company-Id trên cả 2 GET |

## § Tab index

`tabs: none` trên detail · Tab shell Tuần đường giữ. Entry list/home — không đổi IA.

## § Demo dual (prototype SSOT — UI reference only)

| Zone | iOS / Android `#sc-patrol-detail` |
|------|-----------------------------------|
| Hero / info | unchanged · bind GET session |
| Timeline | Prototype 3 rows = **design ref only** · runtime = live check-ins / empty |
| btnMap / btnEnd | Mở bản đồ ca · Kết thúc ca (toast) |

## controlHint — `#sc-patrol-detail`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Lịch sử | BackButton | 16 | `LinmTopBar` | pop list |
| title | Chi tiết ca | TopBar title | 17 | `LinmTopBar` | fixed |
| navShare | (Chia sẻ) | IconButton | 16 | trailing | toast P1 |
| codeHero | PAT-* | Text display | ≥26 bold | | GET session `Code` |
| badgeStatus | (trạng thái) | Badge | 13 | `LinmBadge` | GET `Status` VN map |
| sectionInfo | Thông tin | SectionLabel | 13 | | fixed |
| rowUser…Coverage | (info) | ListRow | 13 / ≥16 | `LinmListRow` | GET session fields |
| sectionTimeline | Điểm tuần | SectionLabel | 13 | | fixed |
| tlItem | (điểm) | TimelineRow / ListRow | ≥16 / 13 | | GET check-ins bind · empty chrome OK |
| tlEmpty | (chưa có điểm) | Empty inline | 13–16 | | `[]` · **không** demo rows |
| tlTapDone | Xem | TimelineRow tap | — | nav | → checkin-detail · `canOpen` khi có Id |
| btnMap | Mở bản đồ ca | PrimaryButton | 16 | | nav `patrol-map` |
| btnEnd | Kết thúc ca | SecondaryButton | 16 | | toast P1 |
| empty404 | (không tìm thấy) | EmptyChrome | | | session 404 |
| toastErr | (lỗi) | Toast | | | GET fail |

### Status VN map (không đổi)

| API `Status` | UI |
|--------------|-----|
| active / in_progress / Đang tuần | Đang tuần |
| done / completed / Hoàn thành | Hoàn thành |
| missed / Bỏ sót | Bỏ sót |
| offline / OfflineQueued | Mất sóng |
| other | raw |

## UNCLEAR

**none** — BE `GET …/check-ins` **Live** (`PatrolSessionsController.GetCheckIns` · `PatrolCheckInDto`). Mobile.Bff proxy catch-all. **Cấm** invent path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Timeline = GET check-ins live · empty OK · **cấm** timelineDemo · tap done → checkin-detail · map nav · end toast P1 |
| Gaps | TIMELINE-01 · TAP-01 · MAP-01 verify · END-01 keep toast |
| OUT | invent path · ERP.* · PUT end · POST CI · timelineDemo |
| Keep | existing PO/Design artifacts · PO ghi § Delta only |
| Next | PO `po/requirement.md` Delta · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:26:27.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| ctxContentHash | sha256:patrol-history-detail-ctx-20260912-timeline-live |
| demoContentHash | sha256:patrol-history-detail-proto-sc-patrol-detail-20260901 |
| priorContentHash | sha256:patrol-history-detail-control-hint-20260831 |
| taskId | `task_dc906824` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
