# Data-analy — controlHint — web-rmms-asset-hub

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| title | Hub tài sản — wallet · grid nav · AI pending |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-25T13:05:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-hub-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · cite AiVision/Gis/Integration · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| mfeStdRoute | `/web-rmms-asset-hub` |
| nativeRouteCite | SCREENS `/asset` |
| taskId | `task_64b589a6` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Hub / full · **không** ERP Modal/Slideout Kind B · **không** form master · **không** CRUD trên hub |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Hub vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-hub.md` | new · written this run |
| Peer CTX | `docs/context/features/asset-hub.md` | zones DES-MOB-* · wallet/AI |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset` Hub · GPS: không |
| Home entry | `docs/context/features/web-rmms-home.md` | grid/wallet → `/asset` |
| DOMAIN-MAP | Asset + cite peers | **GAP** slug `web-rmms-asset-hub` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Hub (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AH-00 | phone | frame ≤430 · Android 1-1 |
| AH-01 | top bar | back → Home |
| AH-02 | wallet | RO display · no nav |
| AH-03 | tile grid | kcht · list |
| AH-04 | thu thập | collect · ai |
| AH-05 | quản lý | adjust |
| AH-06 | bản đồ | → `/gis` |
| AH-07 | AI pending | Draft rows · empty ẩn |

**Out:** `/me*` · feedback · cam-view · sibling CRUD · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · invent hub CRUD.

## ControlHint inventory (Hub)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AH-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AH-01 | Button/Nav | → Home / `web-rmms-home` · copy `assetHub.nav.back` |
| walletEyebrow | AH-02 | Text RO | copy key `assetHub.wallet.eyebrow` |
| walletTitle | AH-02 | Text RO | route/org from `GET integration/road-routes/search` · GAP live org |
| walletSubtitle | AH-02 | Text RO | count `GET integration/asset-types` · copy key |
| tileKcht | AH-03 | Button/Nav | → `/asset/kcht` · `assetHub.tile.kcht` |
| tileList | AH-03 | Button/Nav | → `/asset/list` · `assetHub.tile.list` |
| tileCollect | AH-04 | Button/Nav | → `/asset/collect` · `assetHub.tile.collect` |
| tileAi | AH-04 | Button/Nav | → `/asset/ai` · `assetHub.tile.ai` |
| tileAdjust | AH-05 | Button/Nav | → `/asset/adjust` · `assetHub.tile.adjust` |
| rowGis | AH-06 | Button/Nav | → `/gis` · `assetHub.row.gis` |
| aiPendingRow | AH-07 | ListRow | `GET ai-vision/asset-candidates` Draft · tap HITL peer |
| aiPendingCta | AH-07 | Button/Nav | → HITL sibling · ẩn khi empty |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Hub · **không** Kind B desktop grid |
| Hub tiles | icon tiles nav · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| AH-00…07 Hub | **không** bắt GPS |
| Deep (collect / detect…) | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-AHUB | DOMAIN-MAP chưa có row `web-rmms-asset-hub` | SA thêm row · domain Asset · cite AiVision/Gis/Integration |
| UNCLEAR-WALLET-ORG | Wallet title live org/route | GAP-F-AHUB-01 · demo copy đến PO chốt · **không invent** API |
| UNCLEAR-STD-ROUTE | SCREENS `/asset` vs mfeStdRoute `/web-rmms-asset-hub` | Design/Dev: std URL packet · map alias `/asset` nếu shell cần |

## Handoff

| Role | Dùng |
|------|------|
| PO | Hub nav-only · wallet · tiles · AI pending · DoD · no me · no sibling CRUD |
| Design | Phone 430 · zones AH-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent hub CRUD |
| TL/Dev | Wire Mobile MFE Hub only · deep = peer routes |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T13:05:00.000Z`
