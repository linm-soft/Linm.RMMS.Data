# Design — web-rmms-asset-list

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| title | Danh sách và chi tiết tài sản |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_f4202e27`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone List+Detail** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **List+Detail / full** · **không** ERP Modal/Slideout Kind B · **không** PUT trên detail · master = no demo |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| mfeStdRoute | `/web-rmms-asset-list` |
| nativeRouteCite | SCREENS `/asset/list` + `/asset/:id` · alias nếu shell cần |
| detailRoute | **same-slug zones** · list AL-00…06 · detail AL-10…13 via `?id={id}` trên `/web-rmms-asset-list` · Dev có thể nested child cùng page component · **không** slug STATUS mới |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset (`road-assets`) · cite Gis · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-list-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-list-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T14:20:00.000Z` |
| taskId | `task_f4202e27` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent PUT/POST trên slug · invent `me*` / feedback / cam-view · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp sibling Field/journal b–e vào slug list.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-list.md` | feature List+Detail |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/list` + `/asset/:id` · GPS display-only |
| CTX-03 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub |
| CTX-04 | `docs/context/features/web-rmms-asset-kcht.md` | optional `?type=` passthrough |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-list-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-L* · AC-D* · TYPE/STD resolved |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| List owns | **AL-00…06** · search · paging · rows Code/Type/Route · empty/error toast |
| Detail owns | **AL-10…13** · RO fields · pin map nav · 404/retry |
| Peer owns | Hub `/asset` · Gis `/gis?focus=` · KCHT type source · Field a…e · shell TabBar |
| DES-LEAVE | **N/A** — không form dirty / không PUT |
| Out | `/me*` · feedback · cam-view · PUT detail · collect/ai/adjust · Field 2-door · journal/kết ca/tồn tại/tần suất (b–e) |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AL-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AL-01** | top bar | Header | navBack → Hub (`web-rmms-asset-hub` / `/asset`) |
| **AL-02** | title | Text RO | copy `assetList.title` |
| **AL-03** | search | Text/Search | server `search` · reload GET · `assetList.search` · optional `?type=` passthrough (no type UI) |
| **AL-04** | list | ListRow | Code/Type/Route · `page`/`pageSize` · infinite or next |
| **AL-05** | empty/error | Empty/Button | empty · toast retry · **cấm** alert |
| **AL-06** | row tap | Button/Nav | → detail same-slug `?id={id}` (zones AL-10…) |
| **AL-10** | detail shell | Header | detailBack → list (clear `id`) · title `assetList.detail.title` / Code |
| **AL-11** | detail fields | Text RO | Code/Type/Route/KmFrom/KmTo/Lat/Lng · hide null KmTo/Lat/Lng |
| **AL-12** | pin map | Button/Nav | → `/gis?focus={id}` · **disable** nếu Lat/Lng null |
| **AL-13** | detail empty/error | Empty/Button | 404 / toast retry |

### IA

```
(auth staff) → AL-00 + AL-01 back Hub + AL-02 title + AL-03 search
  + AL-04 rows (Live GET road-assets?search&page&pageSize[&type])
  + AL-05 empty/error toast
  + AL-06 row → ?id={id} → AL-10…13 detail RO
  + AL-12 pin → /gis?focus={id} (disable no coords)
(guest) → shell login gate
optional entry from KCHT: ?type={code} passthrough only · no type picker UI
```

### DETAIL-ROUTE (RESOLVED)

| | |
|--|--|
| Canonical | `mfeStdRoute=/web-rmms-asset-list` (STATUS) |
| List | zones AL-00…06 · no `id` query |
| Detail | **same-slug** · `?id={id}` · zones AL-10…13 · **không** feature slug mới |
| Native cite | SCREENS `/asset/list` + `/asset/:id` (alias) |
| Nested | Dev OK mount child route cùng page component · vẫn 1 STATUS feature |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AL-00 | Layout | * | max-width 430 · center review |
| navBack | AL-01 | Button/Nav | * | → Hub · `assetList.nav.back` |
| pageTitle | AL-02 | Text RO | * | `assetList.title` |
| search | AL-03 | Text/Search | * | `GET asset/road-assets?search` |
| listRow | AL-04 | ListRow | * | Code/Type/Route · tap → detail |
| page | AL-04 | Pager | * | `page`/`pageSize` |
| emptyState | AL-05 | Empty | empty | `assetList.empty` |
| errorRetry | AL-05 | Button | error | reload GET · **cấm** alert |
| rowTap | AL-06 | Button/Nav | * | → `?id={id}` |
| detailBack | AL-10 | Button/Nav | * | → list · clear id |
| detailTitle | AL-10 | Text RO | * | `assetList.detail.title` / Code |
| field.code | AL-11 | Text RO | * | `GET …/{id}` |
| field.type | AL-11 | Text RO | * | same |
| field.route | AL-11 | Text RO | * | same |
| field.kmFrom | AL-11 | Text RO | * | same |
| field.kmTo | AL-11 | Text RO | hide-null | same |
| field.lat | AL-11 | Text RO | hide-null | display stored only |
| field.lng | AL-11 | Text RO | hide-null | display stored only |
| pinMap | AL-12 | Button/Nav | * | `/gis?focus={id}` · disable no coords |
| detailError | AL-13 | Empty/Button | error | toast retry |

**Labels:** `useFormOptions()` / copy keys `assetList.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** List **không** capture · Detail **chỉ hiển thị** Lat/Lng đã lưu · hide null · pin disable no coords · **cấm** `navigator.geolocation` · **cấm** fake.  
**TYPE-FILTER:** optional `?type=` passthrough only · **không** type UI invent.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13 |
| Form | **none** write · List+Detail RO |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-list` |
| **real_view_parity** | `v1` |

### Wire

```
AL-00: phoneFrame 430
AL-01: [‹ back] → Hub
AL-02: title Danh sách tài sản
AL-03: [search…] server search
AL-04: rows Code · Type · Route
AL-05: empty / error toast + retry
AL-06: row tap → detail board
AL-10: [‹ back] detail title
AL-11: RO fields (hide null KmTo/Lat/Lng)
AL-12: [Pin map] → /gis?focus= · disabled board = no coords
AL-13: 404 / retry toast
Board: List loaded | Empty | Error | Search | Detail+coords | Detail no-coords (pin off) | Detail 404
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List | `GET mobile-bff/api/v1/asset/road-assets?search&page&pageSize[&type]` |
| Detail | `GET mobile-bff/api/v1/asset/road-assets/{id}` |
| Pin map | nav only → `/gis?focus={id}` · peer Gis |
| Back list | clear `id` · stay `/web-rmms-asset-list` |
| Back Hub | nav Hub only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty → AL-05 · error/503 → toast in-app · **cấm** `window.alert`.  
**Cấm** invent PUT/POST trên list/detail slug.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AL-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no write form) |
| DES-GRID / DES-RPT | **N/A** phone list |
| real_view_parity | **v1** |
| Android 1-1 / no me / no PUT | **PASS** |
| DETAIL-ROUTE chốt | **PASS** (same-slug `?id=`) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-LIST | SA thêm DOMAIN-MAP row `web-rmms-asset-list` · Asset · cite Gis |
| UNCLEAR-DETAIL-ROUTE | **RESOLVED** · same-slug zones `?id={id}` · native `/asset/:id` cite |
| UNCLEAR-STD-ROUTE | **PO resolved** · STATUS `/web-rmms-asset-list` |
| UNCLEAR-TYPE-FILTER | **PO resolved** · optional `?type=` passthrough only |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff `asset/road-assets` confirm · **cấm** invent write |
| TL | Tasks list page + detail zone + search/paging + pin disable |
| Dev | `/agent-dev` · MFE Mobile list+detail only · deep write = peer |
| QA | List load · search · detail · pin disable null · phone 430 · no me · no PUT · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T14:20:00.000Z` · `design_confirm=approve` · `taskId=task_f4202e27`
