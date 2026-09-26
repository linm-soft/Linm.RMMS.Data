# Data-analy — controlHint — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| title | Bớt hoặc sửa tài sản |
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
| analyzedAt | `2026-09-25T16:20:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-adjust-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** (`road-assets`) · cite list peer · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| mfeStdRoute | `/web-rmms-asset-adjust` |
| nativeRouteCite | SCREENS `/asset/adjust` |
| taskId | `task_03996285` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile list + confirm · **không** ERP Modal/Slideout Kind B · **không** PUT form P1 · master = no demo · load `/erp-form-context` catalog labels |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone list vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-adjust.md` | new · written this run |
| Hub CTX | `docs/context/features/web-rmms-asset-hub.md` | tile → adjust |
| List CTX | `docs/context/features/web-rmms-asset-list.md` | Sửa → detail peer |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset/adjust` · soft DELETE · no PUT P1 |
| DOMAIN-MAP | Asset `road-assets` | **GAP** slug `web-rmms-asset-adjust` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base · **cấm** Route mobile-bff trên web-bff |

## Screens Adjust (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AA-00 | phone | frame ≤430 · Android 1-1 |
| AA-01 | top bar | back → Hub `/asset` / `web-rmms-asset-hub` |
| AA-02 | title | copy `assetAdjust.title` |
| AA-03 | search | `search` query · reload GET |
| AA-04 | list | active rows · page/pageSize · Code/Type/Route · **không** Lat/Lng |
| AA-05 | empty/error | empty · toast retry |
| AA-06 | bớt | confirm → `DELETE asset/road-assets/{id}` |
| AA-07 | sửa | nav `/asset/:id` · **cấm** PUT form P1 |
| AA-08 | confirm | soft-delete dialog · copy keys |

**Out:** `/me*` · feedback · cam-view · PUT edit · collect/AI · GIS deep · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · invent AdjustController · GPS capture.

## ControlHint inventory (Adjust)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AA-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AA-01 | Button/Nav | → Hub · copy `assetAdjust.nav.back` |
| pageTitle | AA-02 | Text RO | copy `assetAdjust.title` |
| search | AA-03 | Text/Search | server `search` · `assetAdjust.search` |
| listRow | AA-04 | ListRow | Code/Type/Route · active only · no Lat/Lng |
| page | AA-04 | Pager | `page`/`pageSize` |
| emptyState | AA-05 | Empty | copy `assetAdjust.empty` |
| errorRetry | AA-05 | Button | reload GET · **cấm** alert |
| action.remove | AA-06 | Button | confirm → soft `DELETE` · `assetAdjust.action.remove` |
| action.edit | AA-07 | Button/Nav | → peer detail · `assetAdjust.action.edit` |
| confirmDelete | AA-08 | Dialog | copy confirm/cancel · **cấm** silent delete |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Search | single search box · **cấm** ERP list filter bar multi-field |

## GPS

| Màn | Rule |
|-----|------|
| AA-00…08 Adjust | **không** lấy GPS mới · Lat/Lng **không** hiện row P1 |
| Peer (collect / detect…) | `navigator.geolocation` · deny → disable nút cần tọa độ · **cấm** fake — **out** slug này |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-ADJUST | DOMAIN-MAP chưa có row `web-rmms-asset-adjust` | SA thêm · domain **Asset** · cite list peer |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/adjust` vs mfeStdRoute `/web-rmms-asset-adjust` | Design/Dev: STATUS URL · alias native |
| UNCLEAR-EDIT-SURFACE | Sửa = nav detail list peer vs in-slug detail | Prefer peer `web-rmms-asset-list` · **không** PUT P1 |
| UNCLEAR-SOFT-DELETE-UX | Confirm copy / toast after DELETE | PO/Design chốt copy keys · reload list |

## Handoff

| Role | Dùng |
|------|------|
| PO | List active · search · soft DELETE · Sửa→detail · DoD · no me · no PUT · no GPS capture |
| Design | Phone 430 · zones AA-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · Asset `road-assets` DELETE |
| TL/Dev | Wire Mobile MFE adjust only · edit = peer list |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T16:20:00.000Z`
