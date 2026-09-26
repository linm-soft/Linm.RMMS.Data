# PO — requirement — web-rmms-ops

| Field | Value |
|-------|-------|
| feature | `web-rmms-ops` |
| title | Thông báo inbox (Mobile) |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T12:35:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile inbox list / full · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** master compose |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ops` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Notification** · **cấm ERP.*** |
| prior | data_analy **confirmed** · control-hint + real-data §A+§B · compact `handoff/data_analy-compact.md` |
| autoApprove | ON |

> Analy reuse (hash skip): **không** re-scan demo · inventory từ `_data-analy/features/web-rmms-ops-*`.  
> Labels: `useFormOptions()` / LinmCopy `ops.*` — **cấm** hardcode VN trên form.  
> **Cấm** iOS/Android native copy change · Android icon/layout 1-1.

## 1. Goal

Staff mobile xem **inbox thông báo** trên MFE Mobile route `/ops` (std `/web-rmms-ops`), đánh dấu đã đọc, quay Home. Badge unread thuộc peer Home/shell (overview) — không owner CRUD badge trên page này.

## 2. changeScope / packKind

| | |
|--|--|
| changeScope | **new_page** |
| packKind | **list** (phone inbox · **không** DES-GRID / LinErpListFilterBar) |
| P1 surface | OP-00…06 · list + mark-read + empty + chrome |
| Filter UI | P1 **không** — API query sẵn (`search`/`status`/`priority`/`type`/`unreadOnly`) deferred |

## 3. Screens / zones

| id | Zone | AC |
|----|------|----|
| OP-00 | Phone frame ≤430 · center desktop review | Layout Android 1-1 |
| OP-01 | Inbox list | `GET notification/inbox` page=1 pageSize=50 · Live BFF |
| OP-02 | Row | title · sentAt · unread badge · optional priority/type RO |
| OP-03 | Mark-read | Tap **unread** row → `POST …/mark-read` · row → read state |
| OP-04 | Empty | 0 items → copy `ops.inbox.empty` · **không** `window.alert` |
| OP-05 | Chrome | back → Home · title `ops.inbox.title` · refresh reload |
| OP-06 | Badge peer | cite `GET notification/overview` · owner = Home/shell |

**reviewUrl** = Design (prototype). **peerStdUrl** = `http://localhost:9301/web-rmms-ops`.

## 4. Grid / List AC (packKind=list)

| AC-id | Given | When | Then |
|-------|-------|------|------|
| AC-L-01 | JWT staff · BFF up | Open `/ops` | List bind Live `GET inbox` · phone ≤430 |
| AC-L-02 | Inbox has unread | Tap unread row | `POST mark-read` · unread → read · **không** navigate detail P1 |
| AC-L-03 | Inbox empty `[]` | Load / refresh | Empty state copy · no crash |
| AC-L-04 | List loaded | Tap refresh | Reload inbox · preserve chrome |
| AC-L-05 | On `/ops` | Tap back | Navigate Home (stack) |
| AC-L-06 | Guest / no JWT | Open `/ops` | Shell login gate · **không** silent empty as “ok” |
| AC-L-07 | BFF error / 503 | Load | Toast/error UX · **cấm** `window.alert` · retry via refresh |
| AC-L-08 | Filter query | P1 UI | **Không** filter bar · DES-GRID N/A |

## 5. Leave / Out of scope (HARD)

| Out | Reason |
|-----|--------|
| `/me` · me-profile · me-settings · feedback · cam-view | REMOVED analy |
| Field 2-door deep · journal / kết ca / tồn tại / tần suất | shell / `web-rmms-mobile-a…e` |
| Desktop Kind B compose / KPI / petitions | legacy `ops.md` · **≠** mobile P1 |
| Detail page `GET inbox/{id}` | P1 **không** — optional stub P2 |
| Filter / DES-GRID / LinErpListFilterBar | phone inbox N/A |
| GPS capture trên `/ops` | **không** xin quyền · peer deep only |
| Invent compose POST/PUT/DELETE · ERP.* · demo `ops.html` SSOT | **cấm** |
| Web BFF base as client | Mobile.Bff only |

## 6. PO decisions (close UNCLEAR)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-OPS-DESKTOP-SCOPE | **Closed** — mobile P1 = inbox + mark-read only · desktop Kind B **out** | — |
| UNCLEAR-OPS-DETAIL | **Closed** — row tap unread = mark-read only · **no** detail page P1 · P2 optional stub | Design (no detail wireframe P1) |
| UNCLEAR-STD-PORT | **Closed for PO** — follow STATUS `mfeStdUrl` `:9301/web-rmms-ops` (PLAN `:9330` cite only) | Design/Dev |
| UNCLEAR-DOMAIN-MAP-OPS | **Open → SA** — add DOMAIN-MAP row `web-rmms-ops` · Notification · Mobile MFE | SA |

## 7. DoD (PO → Design)

- [x] packKind=list · changeScope=new_page
- [x] Screens OP-00…06 + List AC-L-01…08
- [x] Leave table · no me · ≠ desktop compose · no GPS on ops
- [x] Analy inventory + real-data §A+§B reused (hash skip)
- [x] Labels via copy keys · Live Mobile.Bff paths
- [ ] Design: phone prototype + reviewUrl · Android 1-1 · zones OP-*
- [ ] SA: DOMAIN-MAP `web-rmms-ops` · confirm Mobile.Bff

## 8. Handoff Design

| Need | Value |
|------|-------|
| Zones | OP-00…06 ids |
| Frame | max-width 430 · Android OpsView 1-1 |
| Controls | List · Text RO · Badge · Button mark-read / back / refresh · empty Static |
| Filter/grid | N/A |
| Detail | **không** P1 |
| mfeStdUrl | `http://localhost:9301/web-rmms-ops` |
| Deliver | `ui/design.md` + prototype + **reviewUrl** |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T12:35:00.000Z`
