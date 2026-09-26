# Data-analy — controlHint — web-rmms-asset-list

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| title | Danh sách và chi tiết tài sản |
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
| analyzedAt | `2026-09-25T14:03:21.192Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-list-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** (`road-assets`) · cite **Gis** (focus) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| mfeStdRoute | `/web-rmms-asset-list` |
| nativeRouteCite | SCREENS `/asset/list` + `/asset/:id` |
| taskId | `task_f522b338` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile List+Detail / full · **không** ERP Modal/Slideout Kind B · **không** PUT trên detail · master = no demo |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone list vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-list.md` | new · written this run |
| Hub CTX | `docs/context/features/web-rmms-asset-hub.md` | tile → `/asset/list` |
| KCHT CTX | `docs/context/features/web-rmms-asset-kcht.md` | optional `?type=` peer |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset/list` + detail · GPS display-only |
| DOMAIN-MAP | Asset `road-assets` + cite Gis | **GAP** slug `web-rmms-asset-list` nếu thiếu row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens List+Detail (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AL-00 | phone | frame ≤430 · Android 1-1 |
| AL-01 | top bar | back → Hub `/asset` / `web-rmms-asset-hub` |
| AL-02 | title | copy `assetList.title` |
| AL-03 | search | `search` query · reload GET · copy `assetList.search` |
| AL-04 | list | rows · `page`/`pageSize` · Code/Type/Route |
| AL-05 | empty/error | empty state · toast retry |
| AL-06 | row tap | nav detail `/asset/:id` |
| AL-10 | detail shell | back → list · title copy `assetList.detail.title` |
| AL-11 | detail fields | RO Code/Type/Route/KmFrom/KmTo/Lat/Lng |
| AL-12 | pin map | nav `/gis?focus={id}` · disable nếu Lat/Lng null |
| AL-13 | detail empty/error | 404 / toast retry |

**Out:** `/me*` · feedback · cam-view · PUT detail · collect/ai/adjust surfaces · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`).

## ControlHint inventory (List+Detail)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AL-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AL-01 | Button/Nav | → Hub · copy `assetList.nav.back` |
| pageTitle | AL-02 | Text RO | copy key `assetList.title` |
| search | AL-03 | Text/Search | server `search` · `assetList.search` |
| listRow | AL-04 | ListRow | bind Code/Type/Route · tap → detail |
| page | AL-04 | Pager | `page`/`pageSize` · infinite or next |
| emptyState | AL-05 | Empty | copy `assetList.empty` |
| errorRetry | AL-05 | Button | reload GET · **cấm** alert |
| rowTap | AL-06 | Button/Nav | → detail `{id}` |
| detailBack | AL-10 | Button/Nav | → list |
| detailTitle | AL-10 | Text RO | `assetList.detail.title` / Code |
| field.code | AL-11 | Text RO | `Code` |
| field.type | AL-11 | Text RO | `Type` · catalog cite |
| field.route | AL-11 | Text RO | `Route` |
| field.kmFrom | AL-11 | Text RO | `KmFrom` |
| field.kmTo | AL-11 | Text RO | `KmTo` · ẩn nếu null |
| field.lat | AL-11 | Text RO | `Lat` · ẩn nếu null |
| field.lng | AL-11 | Text RO | `Lng` · ẩn nếu null |
| pinMap | AL-12 | Button/Nav | `/gis?focus={id}` · disable no coords |
| detailError | AL-13 | Empty/Button | toast retry |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Search | single search box · **cấm** ERP list filter bar multi-field |

## GPS

| Màn | Rule |
|-----|------|
| AL-00…06 List | **không** bắt GPS mới |
| AL-10…13 Detail | **chỉ hiển thị** Lat/Lng đã lưu · ẩn nếu null · **không** geolocation |
| Deep (collect / detect…) | peer · `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-LIST | DOMAIN-MAP chưa có / thiếu row `web-rmms-asset-list` | SA thêm · domain **Asset** |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/list` vs mfeStdRoute `/web-rmms-asset-list` | Design/Dev: STATUS URL · alias native |
| UNCLEAR-TYPE-FILTER | `?type=` từ KCHT P1? | Default optional · PO chốt · **không invent** API |
| UNCLEAR-DETAIL-ROUTE | Nested `/asset/:id` vs same-slug zones | Design chốt · STATUS feature 1 page list+detail |

## Handoff

| Role | Dùng |
|------|------|
| PO | List+detail Live · search/paging · pin map · DoD · no me · no PUT · chốt type filter |
| Design | Phone 430 · zones AL-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · Asset `road-assets` · cite Gis |
| TL/Dev | Wire Mobile MFE list+detail only · deep write = peer |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T14:03:21.192Z`
