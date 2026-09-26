# PO — requirement — web-rmms-asset-kcht

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-kcht` |
| title | Hạng mục tài sản — lưới loại KCHT |
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
| writtenAt | `2026-09-25T13:40:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile type-grid / full · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** master CRUD · **không** POST/PUT |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-kcht` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| nativeRouteCite | SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Integration `asset-type` (+cite Asset) · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| autoApprove | ON |

## 1. Goal

Màn phone **Hạng mục tài sản** 1-1 Android: browse lưới loại KCHT từ Live `GET integration/asset-types`. Staff (Tuần đường / Hạt / VP Khu IV) vào từ Hub, lọc client (optional), tap loại → peer list theo `code`. **Không** CRUD loại · **không** tab `me*` · **không** GPS trên surface này.

## 2. Persona / auth

| Who | Access |
|-----|--------|
| Tuần đường · Hạt · Văn phòng Khu IV | Staff session · guest → login peer (shell) |

## 3. Screens / zones

| id | zone | AC |
|----|------|-----|
| AK-00 | phone frame ≤430 · center desktop review | Android icon/layout 1-1 · **cấm** nhét MFE desktop |
| AK-01 | top bar back | → Hub `/asset` / `web-rmms-asset-hub` · copy `assetKcht.nav.back` |
| AK-02 | title | copy `assetKcht.title` · RO |
| AK-03 | search (P1 optional) | client filter trên tiles đã load · copy `assetKcht.search` · **không** server search |
| AK-04 | type grid | tiles/rows từ Live asset-types · bind `code`/`name` · pict `assetIconBareHtml(iconCode)` |
| AK-05 | empty / error | empty ẩn grid · toast retry · **cấm** `window.alert` |
| AK-06 | type tap | → peer list `?type={code}` (chốt bên dưới) · **không invent** API |

**Out (Leave):** `/me*` · feedback · cam-view · invent CRUD loại · sibling list/collect/ai/adjust surfaces trên slug này · Field 2 cửa · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-a`…`e`) · DES-GRID / LinErpListFilterBar · invent `asset/kcht*` controller · hardcode VN / count 32|36 SSOT · sửa iOS/Android · ERP.* · Web BFF làm base client · fake GPS.

## 4. Grid AC (packKind=list · phone type-grid)

| AC-ID | Rule | Pass |
|-------|------|------|
| AC-G-01 | Load Live `GET integration/asset-types` qua Mobile.Bff `:5202` | Grid hiện tiles từ response · **cấm** demo/mock count |
| AC-G-02 | Tile bind `code` + `name` + pict GIS (`iconCode` ∈ `ASSET_CODE_META`) | `assetIconBareHtml` · không badge chữ · labels via `useFormOptions` / `assetKcht.*` |
| AC-G-03 | Empty API → empty state · ẩn grid | copy `assetKcht.empty` |
| AC-G-04 | Error → toast + retry reload GET | **cấm** alert |
| AC-G-05 | Optional search filter client theo name/code | Không gọi API mới khi gõ |
| AC-G-06 | Tap tile → peer list với `type={code}` | Route peer tồn tại · **không** invent endpoint |
| AC-G-07 | Back → Hub | AK-01 |
| AC-G-08 | Phone frame ≤430 · no DES-GRID filter bar | N/A Kind B desktop |
| AC-G-09 | Count hiển thị = length API (nếu UI show) | **cấm** hardcode 32/36 |
| AC-G-10 | Không POST/PUT/DELETE trên màn | Read-only browse |

**Report AC:** N/A (không phải report pack).

## 5. Decisions (UNCLEAR chốt)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-KCHT-TAP | **Chốt:** tap loại → peer **list** filtered `?type={code}` (cite SCREENS `/asset/list` / peer slug list). Passport/dashboard theo loại = **out** P1. **Cấm** invent route/API. | Design wire AK-06 · SA confirm peer path · Dev wire |
| UNCLEAR-STD-ROUTE | **Chốt:** MFE std = `/web-rmms-asset-kcht` (STATUS / mfeStdUrl). Native cite `/asset/kcht` = alias shell nếu cần — **không** đổi STATUS URL. | Design/Dev |
| UNCLEAR-SEARCH-P1 | **Chốt:** giữ search **optional P1** client filter (default analy). Có thể ship không search nếu Design cắt — không block DoD core. | Design |
| UNCLEAR-DOMAIN-MAP-KCHT | **Open → SA:** thêm DOMAIN-MAP row `web-rmms-asset-kcht` · domain Integration · cite Asset · Mobile.Bff `integration/asset-types`. | SA |

## 6. DoD (PO)

- [x] packKind=`list` · changeScope=`new_page` confirmed
- [x] Screens AK-00…06 + Leave documented
- [x] Grid AC AC-G-01…10 · Report AC N/A
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip · **không** re-scan demo)
- [x] TAP / STD-ROUTE / SEARCH chốt · DOMAIN-MAP để SA
- [x] Labels copy keys · Live API only · no me · no CRUD · no GPS KCHT
- [x] Handoff Design: zones + reviewUrl pending · phone 430 · Android 1-1

## 7. Handoff Design

| Need | Value |
|------|-------|
| zones | AK-00…06 |
| reviewUrl | (Design tạo prototype) |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| DES-GRID / LinErpListFilterBar | **N/A** phone type-grid |
| copy keys | `assetKcht.*` |
| tap target | peer list `?type={code}` |
| constraint | Android 1-1 · max-width 430 · no me chrome |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T13:40:00.000Z`
