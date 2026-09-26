# PO requirement — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| title | Hub Field — chrome native và hai lối |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Field hub / full (phone max-width 430) · **N/A** ERP Modal/Slideout · no master form |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T19:03:20.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| prior | data_analy `confirmed` · control-hint + real-data · compact exists |
| taskId | `task_57560171` |

> Analy hash skip · **cấm** re-scan demo. Labels: `useFormOptions()` / copy key · **cấm** hardcode VN form.  
> **Cấm** nhét phone Field hub vào MFE desktop · **cấm** iOS/Android native · **cấm** invent FieldController / hub CRUD.

## 1. Goal / DoD

**Goal:** Tab Field hub (`PatrolHomeView` / `/field` cite) trên Mobile MFE — chrome 2 cửa + sync + tiles nav peer; Live badge từ `GET patrol/sessions` only.

**DoD (PASS khi):**

1. FL-00 phone frame ≤430 · mount dưới shell Field tab (SH-04).
2. FL-01: 2 cửa Tuần đường · Tuần kiểm → peer A routes; badge optional từ sessions.
3. FL-02: sync CTA → offline peer · badge queue local (0 = ẩn).
4. FL-03: 7 tiles nav peer (attendance · history · NT · cam · reflect · supervise · map).
5. Hub **không** mở ca / check-in / journal / findings / kết ca / CRUD peer.
6. API hub: **chỉ** `GET patrol/sessions` (badge/hint) · **cấm** POST/PUT sessions từ hub.
7. Labels qua `useFormOptions` / LinmCopy · **cấm** hardcode VN.
8. GPS: **không** capture trên FL-* · deep = peer.
9. Android/iOS Field home **parity copy/layout intent** · **cấm** sửa native.

## 2. changeScope / packKind

| | |
|--|--|
| `changeScope` | `new_page` |
| `packKind` | `list` (hub chrome / nav surface — **không** ERP Kind B desktop list) |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field hub |
| Report AC | **N/A** |

## 3. Screens / zones

| Id | Zone | AC |
|----|------|----|
| FL-00 | Hub shell · phone ≤430 · optional `session.hint` Text RO | mount route `/web-rmms-field` · cite `/field` · empty sessions → no badge, doors vẫn hiện |
| FL-01 | `door.patrol` · `door.inspect` Button/Nav | tap → `/field/tuan-duong` · `/field/tuan-kiem` (peer A) · badge `Đang tuần`+type nếu có |
| FL-02 | `sync.btn` Button/Nav · `sync.badge` Number RO | tap → `/field/offline` · badge = local queue · 0 ẩn |
| FL-03 | tiles×7 Button/Nav | attendance · history · nghiem-thu · cam · reflect · supervise · map → peer std routes |

**Out (Leave → peer):** mở ca · check-in sheet · journal · findings · kết ca · frequency · attendance/NT/cam/reflect/offline/supervise/map CRUD · patrol deep.

## 4. Grid AC (list pack)

| Rule | Verdict |
|------|---------|
| DES-GRID-* / LinErpListFilterBar | **N/A** — không desktop grid |
| Hub inventory | doors + sync + tiles per control-hint · **cấm** ERP list filter bar |
| Empty | sessions empty → doors/tiles vẫn; badge ẩn |
| Error | GET sessions fail → toast · **cấm** `window.alert` · doors/tiles vẫn dùng được |

## 5. Leave / boundary

| Leave | Owner |
|-------|-------|
| Deep TD/TK CRUD (open/close/check-in/…) | `web-rmms-mobile-a` |
| Offline queue replay | `web-rmms-offline` |
| Attendance / NT / cam / reflect / supervise / map | peer features cùng tên |
| DOMAIN-MAP row `web-rmms-field` | SA |
| Shell Field tab chrome | `web-rmms-shell` SH-04 |
| Native iOS/Android | **out of scope** |

## 6. API / data (hub)

| Surface | Rule |
|---------|------|
| Live | `GET mobile-bff/api/v1` → `patrol/sessions` (pageSize cite real-data) · badge/hint only |
| Write | **nav-only** · **cấm** POST/PUT/DELETE sessions từ hub |
| BFF | Mobile.Bff `:5202` · **cấm** Web BFF làm base client |
| BE | ONLY `Linm.RMMS.WebService` · domain Patrol · **cấm ERP.*** |
| Catalog | LOOKUP_STATIC copy keys · no master form bind |
| Demo | **N/A** · **cấm** demo-json SSOT |

## 7. Personas

| Ai | Việc trên hub |
|----|---------------|
| NV tuần đường (BDTX) | cửa Tuần đường + tiles peer |
| Cán bộ QLĐB (VP/Khu) | cửa Tuần kiểm + tiles peer |

## 8. UNCLEAR — PO chốt

| id | Decision |
|----|----------|
| UNCLEAR-HUB-VS-A | **Chốt:** Field hub **mount** 2 cửa (FL-01); deep CRUD/session lifecycle = peer A. **Cấm** duplicate CRUD trên hub. |
| UNCLEAR-STD-PORT | **Chốt:** follow STATUS/packet `mfeStdUrl` = `http://localhost:9301/web-rmms-field` (PLAN `:9330` cite only). |
| UNCLEAR-DOMAIN-MAP-FIELD | **Handoff SA:** thêm DOMAIN-MAP row slug `web-rmms-field` · Patrol · MFE `/web-rmms-field` · cite peer deep. **Không** block PO DoR. |

## 9. AC checklist (QA-ready)

- [ ] Phone frame ≤430 · center desktop review
- [ ] 2 cửa nav đúng peer A routes
- [ ] Sync nav + badge 0 ẩn
- [ ] 7 tiles nav peer
- [ ] GET sessions badge empty/error không chặn nav
- [ ] Không GPS prompt trên hub
- [ ] Không hardcode VN labels
- [ ] Không POST/PUT sessions từ hub
- [ ] Không deep CRUD surfaces trên feature này

## 10. Handoff Design

| Need | |
|------|--|
| Zones | FL-00…03 · control-map từ control-hint |
| Parity | Android/iOS Field home layout/copy intent |
| Deliverable | `ui/design.md` + prototype + `reviewUrl` |
| Grid | N/A phone hub |
| autoApprove | ON |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T19:03:20.000Z` · `taskId=task_57560171`
