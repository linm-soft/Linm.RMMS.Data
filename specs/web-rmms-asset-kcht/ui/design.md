# Design — web-rmms-asset-kcht

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-kcht` |
| title | Hạng mục tài sản — lưới loại KCHT |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_f515cfe1`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone type-grid** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **type-grid / full** · **không** ERP Modal/Slideout Kind B · **không** master CRUD · **không** POST/PUT trên màn |
| DES-GRID / LinErpListFilterBar | **N/A** — phone type-grid · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| mfeStdRoute | `/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` (alias only) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration (`asset-type`) · cite Asset · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-kcht-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-kcht-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T13:45:00.000Z` |
| taskId | `task_f515cfe1` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `asset/kcht` CRUD/API · invent `me*` / feedback / cam-view · fake GPS · hardcode label VN / count 32/36 SSOT · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp sibling list/collect/ai/adjust vào slug KCHT.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-kcht.md` | feature KCHT |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/kcht` · GPS: không · no create |
| CTX-03 | `docs/context/features/asset-kcht-32.md` | catalog codes (cite · **cấm** hardcode count SSOT) |
| CTX-04 | `docs/context/features/web-rmms-asset-hub.md` | back target Hub |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-kcht-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | TAP `?type=` · SEARCH optional P1 · STD route |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| KCHT owns | **AK-00…06** · back Hub · title · optional search · Live type tiles · empty/error · tap peer list |
| Peer owns | List `?type={code}` · Hub `/asset` · collect/ai/adjust/gis · Field a…e · shell TabBar |
| DES-LEAVE | **N/A** — không form dirty |
| Out | `/me*` · feedback · cam-view · invent CRUD loại · sibling deep CRUD · Field 2-door · journal/kết ca/tồn tại/tần suất (b–e) · invent `asset/kcht` controller |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AK-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AK-01** | top bar | Header | navBack → Hub (`web-rmms-asset-hub` / `/asset`) |
| **AK-02** | title | Text RO | copy `assetKcht.title` |
| **AK-03** | search | Text/Search | optional P1 client filter · `assetKcht.search` · may cut |
| **AK-04** | type grid | HubTile 2-col | Live `GET integration/asset-types` · pict GIS + name · code secondary |
| **AK-05** | empty/error | Empty + retry | empty copy · toast retry · **cấm** alert |
| **AK-06** | type tap | Nav peer | → peer list `?type={code}` · **không invent** API |

### IA

```
(auth staff) → AK-00 + AK-01 back Hub + AK-02 title
  + AK-03 optional search (client filter)
  + AK-04 type tiles from GET asset-types
  + AK-05 empty | error toast + retry
  + AK-06 tap tile → /asset/list?type={code} (peer)
(guest) → shell login gate · không silent empty KCHT
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AK-00 | Layout | * | max-width 430 · center review |
| navBack | AK-01 | Button/Nav | * | → Hub · `assetKcht.nav.back` |
| pageTitle | AK-02 | Text RO | * | `assetKcht.title` |
| search | AK-03 | Text/Search | P1 opt | client filter name/code · `assetKcht.search` |
| typeTile | AK-04 | HubTile/ListRow | * | `code`/`name`/`icon` · Live GET |
| typeCode | AK-04 | Text RO | opt | secondary · `assetKcht.type.code` |
| typeName | AK-04 | Text RO | * | `assetKcht.type.name` |
| typeIcon | AK-04 | Icon/Image | * | `assetIconBareHtml(iconCode)` from local `src/shared/map/mapAssetIcons.ts` (copy of GIS) · `iconCode` = `assetCodeForType(code)` |
| emptyState | AK-05 | Empty | empty | `assetKcht.empty` · ẩn grid |
| errorRetry | AK-05 | Button | error | reload GET · toast · **cấm** alert |
| typeTap | AK-06 | Button/Nav | * | peer list `?type={code}` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** KCHT **không** capture · deep = peer · deny → disable coords · **cấm** fake.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06 |
| Form | **none** master · tiles nav only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-kcht` |
| **real_view_parity** | `v1` |

### Wire

```
AK-00: phoneFrame 430
AK-01: [‹ back] → Hub
AK-02: title Hạng mục tài sản
AK-03: [search] optional client filter
AK-04: 2-col HubTiles · pict assetIconBareHtml(iconCode) · name · code secondary
AK-05: empty | error toast + [retry]
AK-06: tap → /asset/list?type={code}
Board: Staff loaded | Empty | Error toast | Search filter
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Type grid | `GET mobile-bff/api/v1/integration/asset-types` |
| Search | client filter only · no API |
| Tap type | nav peer list `?type={code}` · **không** load road-assets trên KCHT |
| Back | nav Hub only |
| Write | **none** · **cấm** POST/PUT |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty list → AK-05 empty · error/503 → toast + retry · **cấm** `window.alert`.  
**Cấm** invent `asset/kcht` domain CRUD.

## 5b. Icon SSOT (edit 2026-09-25)

Tile AK-04 dùng cùng pict với Asset / map GIS. Bản copy nằm ở Mobile `src/shared/map/mapAssetIcons.ts` (dev server không resolve alias `@linm/rmms-map-asset-icons`).

| DB `type` | `iconCode` | Note |
|-----------|------------|------|
| mapped in `TYPE_ASSET_CODE` | `assetCodeForType` | vd. `PAVEMENT`→`KC` · `BRIDGE`→`CAU` · `TUNNEL`→`HAM` · `CULVERT_X`→`CN` · `TRAFFIC_SIGN`→`BB` · `KM_POST`→`KM` · `MEDIAN`→`GPC` |
| `ANTI_GLARE` · `TRAFFIC_ISLAND` | `GPC` | closest median · không có mã 1:1 |
| `CRASH_CUSHION` | `HL` | closest hộ lan |
| `TRAFFIC_SIGNAL` | `CS` | closest chiếu sáng |
| `GREEN` | `NL` | closest nền / lề |
| còn lại (`EMS_POST` · `RESCUE_*` · unknown) | `TS` | fallback SSOT · khớp BE |

**Cấm** slice 2 ký tự từ `code` · **cấm** copy SVG vào Mobile.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AK-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no form) |
| DES-GRID / DES-RPT | **N/A** phone type-grid |
| real_view_parity | **v1** |
| Android 1-1 / no me | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-KCHT | SA thêm DOMAIN-MAP row `web-rmms-asset-kcht` · Integration · cite Asset |
| UNCLEAR-KCHT-TAP | **PO chốt** peer list `?type={code}` |
| UNCLEAR-STD-ROUTE | **PO chốt** `mfeStdRoute=/web-rmms-asset-kcht` · alias `/asset/kcht` nếu shell cần |
| UNCLEAR-SEARCH-P1 | **PO chốt** optional P1 · Design giữ search · TL/Dev may cut |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff `integration/asset-types` · **cấm** invent kcht CRUD |
| TL | Tasks KCHT page + tile bind + nav `?type=` |
| Dev | `/agent-dev` · MFE Mobile KCHT only · deep = peer |
| QA | Grid load · empty/error · search filter · phone 430 · no me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T13:45:00.000Z` · `design_confirm=approve` · `taskId=task_f515cfe1`
