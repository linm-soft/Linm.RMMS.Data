# PO requirement — web-rmms-asset-list

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| title | Danh sách và chi tiết tài sản |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T14:10:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile List+Detail / full · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** PUT trên detail |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-list` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| nativeRouteCite | SCREENS `/asset/list` + `/asset/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Asset** (`road-assets`) · cite **Gis** · **cấm ERP.*** |
| prior | data_analy `confirmed` · control-hint + real-data §A+§B PASS · hash skip |

> Nhãn UI: `useFormOptions()` / LinmCopy `assetList.*` — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone list vào MFE desktop Kind B · **cấm** sửa iOS/Android native · **cấm** demo-json SSOT.

## 1. Goal

Staff mở **Danh sách tài sản** trên Mobile MFE: tìm/xem danh sách road-assets (Live GET), mở **chi tiết RO**, và (nếu có tọa độ) điều hướng pin map sang peer Gis. Không tạo/sửa/xóa tài sản trên slug này.

## 2. Screens / zones

| id | surface | AC tóm tắt |
|----|---------|------------|
| AL-00 | phone frame ≤430 | Android icon/layout 1-1 · center trên desktop review |
| AL-01 | top bar back | → Hub `/asset` / `web-rmms-asset-hub` · copy `assetList.nav.back` |
| AL-02 | title | copy `assetList.title` · Text RO |
| AL-03 | search | server `search` · reload GET · copy `assetList.search` |
| AL-04 | list + pager | rows Code/Type/Route · `page`/`pageSize` · Live GET |
| AL-05 | empty / error | empty copy · toast retry · **cấm** `window.alert` |
| AL-06 | row tap | → detail `{id}` |
| AL-10 | detail shell | back → list · title `assetList.detail.title` / Code |
| AL-11 | detail fields RO | Code · Type · Route · KmFrom · KmTo · Lat · Lng · ẩn field null |
| AL-12 | pin map | nav `/gis?focus={id}` · **disable** nếu Lat/Lng null |
| AL-13 | detail empty/error | 404 / toast retry |

**Out (cấm gộp vào slug):** `/me*` · feedback · cam-view · PUT detail · collect/ai/adjust · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`).

## 3. List AC (packKind=list)

| AC-id | Given | When | Then |
|-------|-------|------|------|
| AC-L01 | Staff authenticated | mở `mfeStdUrl` | AL-00…04 hiện · GET `asset/road-assets?page&pageSize` Live |
| AC-L02 | List loaded | gõ search | GET `?search=` · list refresh · empty → AL-05 |
| AC-L03 | Nhiều trang | scroll/next page | `page`/`pageSize` · không mất search |
| AC-L04 | Có rows | tap row | AL-06 → detail · GET `asset/road-assets/{id}` |
| AC-L05 | API error | load fail | toast + retry · **cấm** alert |
| AC-L06 | Empty result | search/page không data | empty state `assetList.empty` |
| AC-L07 | Labels | mọi text form | copy keys / `useFormOptions` · **cấm** hardcode VN |
| AC-L08 | Filter bar desktop | — | **N/A** · **cấm** LinErpListFilterBar / DES-GRID Kind B trên phone list |
| AC-L09 | Optional type | URL có `?type=` từ KCHT | **passthrough** query vào GET nếu BE hỗ trợ · **không** invent type dropdown / API mới trên AL-03 |
| AC-L10 | Guest | chưa login | redirect login peer (shell) · không lộ list |

## 4. Detail AC

| AC-id | Given | When | Then |
|-------|-------|------|------|
| AC-D01 | Row id hợp lệ | mở detail | AL-10…11 bind RO từ GET `/{id}` |
| AC-D02 | Field null | KmTo / Lat / Lng null | **ẩn** field · không hiện "null" |
| AC-D03 | Có Lat+Lng | tap pin | AL-12 nav `/gis?focus={id}` |
| AC-D04 | Thiếu coords | detail | pin **disabled** · **không** gọi geolocation |
| AC-D05 | 404 / error | id sai / fail | AL-13 toast retry · back về list OK |
| AC-D06 | Write | mọi thao tác trên detail | **không** PUT/POST/PATCH/DELETE trên slug |

## 5. Leave / nav

| From | Action | To |
|------|--------|-----|
| AL-01 | back | Hub `web-rmms-asset-hub` / `/asset` |
| AL-06 | row tap | detail (Design chốt nested `/asset/:id` **hoặc** same-slug zone) |
| AL-10 | detail back | list (giữ search/page nếu khả thi) |
| AL-12 | pin | peer Gis `/gis?focus={id}` · không embed map trên list/detail |

Canonical MFE route: **`/web-rmms-asset-list`** (STATUS / mfeStdUrl). Native SCREENS `/asset/list` = cite alias — Design/Dev map alias, **không** đổi STATUS URL.

## 6. API / bind (cite real-data §B)

| uiField | GET | write |
|---------|-----|-------|
| search + list | `GET mobile-bff/api/v1/.../asset/road-assets?search&page&pageSize[&type]` | query only |
| detail.* | `GET .../asset/road-assets/{id}` | **none** |
| pin.map | — | nav Gis only |

- BFF base: **Mobile.Bff** `http://localhost:5202` · `mobile-bff/api/v1` — **cấm** Web BFF làm client base.
- Domain: **Asset** · cite **Gis** · **cấm ERP.***
- GPS: **display stored only** · **không** `navigator.geolocation` trên feature này.

## 7. PO decisions (UNCLEAR chốt)

| id | Decision | Owner tiếp |
|----|----------|------------|
| UNCLEAR-TYPE-FILTER | **P1 optional passthrough:** nếu deep-link/KCHT mang `?type=` thì forward vào GET; **không** UI filter type riêng trên list; **không invent** API. Default không có `type` = full list + search. | Dev wire · SA confirm query nếu DOMAIN-MAP ghi |
| UNCLEAR-STD-ROUTE | Canonical = STATUS `mfeStdRoute` `/web-rmms-asset-list` · SCREENS `/asset/list` = native cite / alias | Design/Dev |
| UNCLEAR-DETAIL-ROUTE | **Prefer** same feature list+detail zones; nested `/asset/:id` **hoặc** same-slug zone switch đều OK — **Design chốt** layout/route; AC: row → detail luôn | Design |
| UNCLEAR-DOMAIN-MAP-LIST | Cần row DOMAIN-MAP `web-rmms-asset-list` · domain Asset | **SA** |

## 8. DoD (role handoff)

- [x] packKind=`list` · changeScope=`new_page`
- [x] Screens AL-00…06 + AL-10…13 + Leave
- [x] List AC + Detail AC + no PUT
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip · **cấm** re-scan demo)
- [x] Labels copy-key · phone 430 · no ERP.* · no me*
- [x] Type filter chốt (passthrough only)
- [ ] Design: prototype + reviewUrl · chốt detail route
- [ ] SA: DOMAIN-MAP row · Mobile.Bff confirm

## 9. Handoff

| Role | Need |
|------|------|
| Design | Phone 430 · zones AL-* · Android 1-1 · prototype + reviewUrl · chốt UNCLEAR-DETAIL-ROUTE |
| SA | DOMAIN-MAP `web-rmms-asset-list` · Asset `road-assets` · cite Gis · Mobile.Bff only |
| TL/Dev | Wire list+detail Live · search/page · pin disable null · no write |
| QA (queued) | AC-L* · AC-D* · phone 430 · no alert · no PUT · pin disable |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T14:10:00.000Z`
