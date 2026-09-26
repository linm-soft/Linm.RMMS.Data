# Data-analy — controlHint — web-rmms-asset-kcht

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-kcht` |
| title | Hạng mục tài sản — lưới loại KCHT |
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
| analyzedAt | `2026-09-25T13:31:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-kcht-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** (`asset-type`) · cite **Asset** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| mfeStdRoute | `/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` |
| taskId | `task_a9822a3b` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Hub-grid / full · **không** ERP Modal/Slideout Kind B · **không** form master CRUD · **không** POST/PUT trên màn |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone KCHT vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-kcht.md` | new · written this run |
| Peer CTX | `docs/context/features/asset-kcht-32.md` | catalog 36 canonical codes |
| Hub CTX | `docs/context/features/web-rmms-asset-hub.md` | tile → `/asset/kcht` |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset/kcht` · GPS: không · no create |
| PLAN | `docs/plan/web-rmms-mobile/PLAN.md` | `AssetKchtDashboardView` |
| DOMAIN-MAP | Integration `asset-type` + cite Asset | **GAP** slug `web-rmms-asset-kcht` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens KCHT (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AK-00 | phone | frame ≤430 · Android 1-1 |
| AK-01 | top bar | back → Hub `/asset` / `web-rmms-asset-hub` |
| AK-02 | title | copy `assetKcht.title` |
| AK-03 | search | optional client filter · copy `assetKcht.search` |
| AK-04 | type grid | tiles from `GET integration/asset-types` |
| AK-05 | empty/error | empty state · toast retry |
| AK-06 | type tap | nav peer by `code` · UNCLEAR-KCHT-TAP |

**Out:** `/me*` · feedback · cam-view · invent CRUD loại · sibling list/collect/ai/adjust surfaces · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`).

## ControlHint inventory (KCHT)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AK-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AK-01 | Button/Nav | → Hub · copy `assetKcht.nav.back` |
| pageTitle | AK-02 | Text RO | copy key `assetKcht.title` |
| search | AK-03 | Text/Search | client filter · optional P1 · `assetKcht.search` |
| typeTile | AK-04 | HubTile/ListRow | icon + name · bind `code`/`name`/`icon` từ API |
| typeCode | AK-04 | Text RO | `code` · display secondary optional |
| emptyState | AK-05 | Empty | copy `assetKcht.empty` · ẩn grid |
| errorRetry | AK-05 | Button | reload GET · **cấm** alert |
| typeTap | AK-06 | Button/Nav | → peer list/passport · **không invent** API |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone type-grid · **không** Kind B desktop grid |
| Type grid | icon tiles / rows · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| AK-00…06 KCHT | **không** bắt GPS |
| Deep (collect / detect…) | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-KCHT | DOMAIN-MAP chưa có row `web-rmms-asset-kcht` | SA thêm · domain Integration · cite Asset |
| UNCLEAR-KCHT-TAP | Tap loại → `/asset/list?type=` vs passport/dashboard | PO chốt · **không invent** route/API |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/kcht` vs mfeStdRoute `/web-rmms-asset-kcht` | Design/Dev: STATUS URL · alias native nếu shell cần |
| UNCLEAR-SEARCH-P1 | Search bar bắt buộc P1? | Default optional client filter · PO có thể bỏ |

## Handoff

| Role | Dùng |
|------|------|
| PO | Type-grid browse · Live asset-types · DoD · no me · no CRUD loại · chốt TAP |
| Design | Phone 430 · zones AK-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent `asset/kcht` |
| TL/Dev | Wire Mobile MFE KCHT only · deep = peer |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T13:31:00.000Z`
