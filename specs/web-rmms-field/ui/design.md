# Design — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| title | Hub Field — chrome native và hai lối |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_05d87650`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Field hub** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Field hub / full** · **không** ERP Modal/Slideout Kind B · **không** master form |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field hub · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-field` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| mfeStdRoute | `/web-rmms-field` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · deep cite peers · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-field-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-field-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T02:10:00.000Z` |
| taskId | `task_05d87650` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent Field hub CRUD / POST-PUT sessions · fake GPS trên hub · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · duplicate deep CRUD peer A.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-field.md` | Field hub chrome |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab Field |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` | `/field` PatrolHomeView · W3 |
| CTX-04 | `docs/context/features/web-rmms-mobile-a.md` | deep doors owner |
| CTX-05 | `docs/context/features/web-rmms-shell.md` | SH-04 Field tab mount |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-field-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | FL-00…03 · hub mount · :9301 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · content Field hub · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) |
| Field owns | **FL-00…03** hub chrome only — 2 cửa · sync · tiles×7 · optional session hint |
| Peer A owns | deep Tuần đường / Tuần kiểm CRUD (TD-* / TK-*) |
| Shell owns | TabBar Field tab mount (peer `web-rmms-shell` SH-04) |
| DES-LEAVE | **N/A** — hub không form dirty |
| Out | mở ca · check-in · journal · findings · kết ca · frequency · attendance/NT/cam/reflect/offline/supervise/map **CRUD** (peer) |

### Ownership (PO resolve UNCLEAR-HUB-VS-A)

| Surface | Owner |
|---------|-------|
| FL-01 doors mount on Field hub page | **this feature** (`web-rmms-field`) |
| Deep after door tap (`/field/tuan-duong*`, `/field/tuan-kiem*`) | **peer A** (`web-rmms-mobile-a`) |
| Tile targets | peer features (attendance · history · NT · cam · reflect · supervise · map · offline) |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **FL-00** | `/web-rmms-field` · cite `/field` | Frame + Full | phone ≤430 · topbar Field · optional `activeSessionHint` Text RO |
| **FL-01** | doors | Full (hub body) | `doorPatrol` · `doorInspect` Button/Nav · badge from GET sessions |
| **FL-02** | sync | Topbar CTA | `syncBtn` → `/field/offline` · `syncBadge` Number RO (0=ẩn) |
| **FL-03** | tiles | Full (hub body) | 7 tiles Button/Nav peer Field children |

### IA

```
(auth) → shell tab Field → FL-00 hub
  FL-01 doorPatrol  → /field/tuan-duong     (peer A)
  FL-01 doorInspect → /field/tuan-kiem      (peer A)
  FL-02 syncBtn     → /field/offline        (peer offline)
  FL-03 tiles:
    attendance → /field/attendance
    history    → /field/history
    nghiemThu  → /field/nghiem-thu
    cam        → /field/cam
    reflect    → /field/reflect
    supervise  → /field/supervise
    map        → /field/map
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | FL-00 | Layout | * | max-width 430 · center desktop review |
| activeSessionHint | FL-00 | Text RO | — | optional · `GET patrol/sessions` · no master form |
| doorPatrol | FL-01 | Button/Nav | * | → `/field/tuan-duong` · peer A · badge `Đang tuần`+`Tuần đường` |
| doorInspect | FL-01 | Button/Nav | * | → `/field/tuan-kiem` · peer A · badge `Tuần kiểm` |
| syncBtn | FL-02 | Button/Nav | * | → `/field/offline` · peer offline |
| syncBadge | FL-02 | Number RO | — | local queue count · **0 = ẩn** |
| tileAttendance | FL-03 | Button/Nav | * | → `/field/attendance` |
| tileHistory | FL-03 | Button/Nav | * | → `/field/history` |
| tileNghiemThu | FL-03 | Button/Nav | * | → `/field/nghiem-thu` |
| tileCam | FL-03 | Button/Nav | * | → `/field/cam` |
| tileReflect | FL-03 | Button/Nav | * | → `/field/reflect` |
| tileSupervise | FL-03 | Button/Nav | * | → `/field/supervise` |
| tileMap | FL-03 | Button/Nav | * | → `/field/map` |

**Labels:** `useFormOptions()` / copy keys (`tab.field` · door/tile) — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** hub FL-* **không** capture · deep = peer · deny → peer block coords · **cấm** fake.  
**Live API only:** `GET patrol/sessions` badge/hint · **cấm** POST/PUT từ hub.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | FL-00 · FL-01 · FL-02 · FL-03 |
| Form | **none** master · nav-only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-field` |
| **real_view_parity** | `v1` |

### Wire

```
FL-00: phoneFrame 430 · topbar title Field · optional sessionHint
FL-01: 2 doors Tuần đường / Tuần kiểm (+ badge when active)
FL-02: sync icon · badge queue (0=ẩn) · tap → offline note
FL-03: 7 tiles peer nav (2–3 cols)
Board: Default | Badge active | Sync queue | Empty sessions | Error toast
TabBar ghost: peer shell — không thuộc Field hub DoR
Deep CRUD: note only — peer A / peer features
```

### Query modes (prototype)

| Query | Effect |
|-------|--------|
| (default) | doors no badge · sync badge ẩn · hint ẩn |
| `?badge=1` | doorPatrol badge Đang tuần · sessionHint |
| `?sync=3` | syncBadge = 3 |
| `?empty=1` | sessions empty · no badges |
| `?error=1` | toast sessions error · **cấm** `window.alert` |

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Session badge / hint | `GET mobile-bff/api/v1/patrol/sessions?pageSize=50` |
| Door / tile / sync | **nav only** · peer owners |
| Hub write | **cấm** POST/PUT sessions · **cấm** invent FieldController |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty sessions → doors không badge · error → toast in-app · **cấm** `window.alert`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones FL-00…03 | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no hub form) |
| DES-GRID / DES-RPT | **N/A** phone Field hub |
| real_view_parity | **v1** |
| Ownership hub vs A | **PASS** (PO resolve UNCLEAR-HUB-VS-A) |
| STD port | **PASS** (PO resolve `:9301`) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-FIELD | SA thêm DOMAIN-MAP row `web-rmms-field` · Patrol · MFE `/web-rmms-field` |
| UNCLEAR-HUB-VS-A | **resolved PO** · hub mount doors; deep=A |
| UNCLEAR-STD-PORT | **resolved PO** · follow STATUS `:9301` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff GET sessions confirm · **cấm** invent FieldController |
| TL | Tasks Field hub scaffold + door/tile/sync routes |
| Dev | `/agent-dev` · MFE Mobile hub only · deep = peer |
| QA | Door nav · tile nav · badge empty/error · sync 0=ẩn · phone 430 · no GPS hub · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T02:10:00.000Z` · `design_confirm=approve` · `taskId=task_05d87650`
