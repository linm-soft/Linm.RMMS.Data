# Design — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| title | Bớt hoặc sửa tài sản |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_17437bf8`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone list + confirm** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **list + confirm dialog** · **không** ERP Modal/Slideout Kind B · **không** PUT form P1 · master = no demo |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| nativeRouteCite | SCREENS `/asset/adjust` · alias native · **canonical = STATUS** |
| editNav | peer `web-rmms-asset-list` detail `/asset/:id` · **no PUT** trên adjust P1 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset (`road-assets`) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-adjust-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-adjust-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T16:30:00.000Z` |
| taskId | `task_17437bf8` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent PUT/AdjustController · invent `me*` / feedback / cam-view · GPS capture / LatLng row P1 · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · silent delete · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp sibling Field/journal b–e vào slug.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-adjust.md` | Bớt/sửa · soft DELETE · edit peer |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/adjust` · soft DELETE · no PUT P1 |
| CTX-03 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub |
| CTX-04 | `docs/context/features/web-rmms-asset-list.md` | Sửa → detail peer |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-adjust-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC L-01…10 · soft-delete UX · STD/edit resolved |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| Adjust owns | **AA-00…08** · search · paging · rows Code/Type/Route · soft DELETE confirm · edit nav peer |
| Peer owns | Hub `/asset` · list detail `/asset/:id` · Field a…e · shell TabBar |
| DES-LEAVE | **N/A** — không form dirty / không PUT trên slug |
| Out | `/me*` · feedback · cam-view · PUT edit · collect/AI · GIS deep · Field 2-door · journal/kết ca/tồn tại/tần suất (b–e) · GPS capture |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AA-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AA-01** | top bar | Header | navBack → Hub (`web-rmms-asset-hub` / `/asset`) |
| **AA-02** | title | Text RO | copy `assetAdjust.title` |
| **AA-03** | search | Text/Search | server `search` · reload GET · `assetAdjust.search` |
| **AA-04** | list | ListRow | Code/Type/Route · `page`/`pageSize` · **không** Lat/Lng |
| **AA-05** | empty/error | Empty/Button | empty · toast retry · **cấm** alert |
| **AA-06** | action.remove | Button | mở AA-08 · `assetAdjust.action.remove` |
| **AA-07** | action.edit | Button/Nav | → peer list detail `/asset/:id` · **cấm** PUT P1 |
| **AA-08** | confirmDelete | Dialog | soft-delete confirm · **cấm** silent delete |

### IA

```
(auth staff) → AA-00 + AA-01 back Hub + AA-02 title + AA-03 search
  + AA-04 rows (Live GET road-assets?search&page&pageSize · active)
  + AA-05 empty/error toast
  + AA-06 Bớt → AA-08 confirm → DELETE soft → reload + toast
  + AA-07 Sửa → peer web-rmms-asset-list /asset/:id
(guest) → shell login gate
```

### STD-ROUTE (RESOLVED — PO)

| | |
|--|--|
| Canonical | `mfeStdRoute=/web-rmms-asset-adjust` (STATUS) |
| Native cite | SCREENS `/asset/adjust` (alias) |
| Edit | peer slug list · **không** detail zones trên adjust |

### Soft-delete UX (Design chốt wording · keys PO)

| Key | Prototype VN (review) · Dev wire key |
|-----|--------------------------------------|
| `assetAdjust.confirm.delete` | «Xác nhận bớt tài sản» + body soft-remove `{code}` |
| `assetAdjust.confirm.cancel` | «Hủy» · đóng dialog · **không** DELETE |
| `assetAdjust.confirm.ok` | «Bớt» · confirm → DELETE soft |
| `assetAdjust.toast.deleteOk` | «Đã bớt tài sản» · reload list |
| `assetAdjust.toast.deleteFail` | fail toast · **giữ** row · retry |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AA-00 | Layout | * | max-width 430 · center review |
| navBack | AA-01 | Button/Nav | * | → Hub · `assetAdjust.nav.back` |
| pageTitle | AA-02 | Text RO | * | `assetAdjust.title` |
| search | AA-03 | Text/Search | * | `GET asset/road-assets?search` |
| listRow | AA-04 | ListRow | * | Code/Type/Route · active only |
| page | AA-04 | Pager | * | `page`/`pageSize` |
| emptyState | AA-05 | Empty | empty | `assetAdjust.empty` |
| errorRetry | AA-05 | Button | error | reload GET · **cấm** alert |
| action.remove | AA-06 | Button | * | → AA-08 · soft DELETE |
| action.edit | AA-07 | Button/Nav | * | peer `/asset/:id` · no PUT |
| confirmDelete | AA-08 | Dialog | * | confirm/cancel · **cấm** silent |

**Labels:** `useFormOptions()` / copy keys `assetAdjust.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** **không** capture · Lat/Lng **không** hiện row P1 · **cấm** fake.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 |
| Form | **none** write · list + confirm only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-adjust` |
| **real_view_parity** | `v1` |

### Wire

```
AA-00: phoneFrame 430
AA-01: [‹ back] → Hub
AA-02: title Bớt hoặc sửa tài sản
AA-03: [search…] server search
AA-04: rows Code · Type · Route (no Lat/Lng)
AA-05: empty / error toast + retry
AA-06: [Bớt] → AA-08
AA-07: [Sửa] → peer /asset/:id
AA-08: confirm dialog · cancel | ok → DELETE soft → reload + toast
Board: List loaded | Empty | Error | Search | Confirm delete | After delete | Edit → peer
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List | `GET mobile-bff/api/v1/asset/road-assets?search&page&pageSize` · active |
| Soft delete | `DELETE mobile-bff/api/v1/asset/road-assets/{id}` |
| Edit | nav peer list detail · GET trên list feature |
| Back Hub | nav Hub only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty → AA-05 · error/503 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent AdjustController / PUT trên adjust slug.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AA-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no write form; confirm only) |
| DES-GRID / DES-RPT | **N/A** phone list |
| real_view_parity | **v1** |
| Android 1-1 / no me / no PUT / soft-delete confirm | **PASS** |
| List AC L-01…10 map | **PASS** (cite PO) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ADJUST | SA thêm DOMAIN-MAP row `web-rmms-asset-adjust` · Asset · cite list peer |
| RESOLVED-STD-ROUTE | STATUS `/web-rmms-asset-adjust` canonical · SCREENS alias |
| RESOLVED-EDIT-SURFACE | Sửa → peer list detail · no PUT P1 |
| RESOLVED-SOFT-DELETE-UX | confirm + toast keys · reload |

## 8. Handoff

| Next | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff DELETE proxy confirm |
| TL | Tasks adjust page + list/delete wire + edit peer nav |
| Dev | Implement Mobile MFE adjust only · `/agent-dev` |
| QA | Search · confirm delete · reload · phone 430 · no me · no GPS · no invent path |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T16:30:00.000Z` · `design_confirm=approve` · `autoApprove=ON`
