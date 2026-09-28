# Feature context — web-rmms-asset-collect

> **Slug:** `web-rmms-asset-collect` · **Wave:** W2 Thêm tài sản thủ công  
> **Status:** sa confirmed · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/tai-san/thu-thap` · **mfeStdUrl:** `http://localhost:9301/tai-san/thu-thap`  
> **Native route cite:** SCREENS `/asset/collect` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-collect.md` (mobile P1) · parent hub `web-rmms-asset-hub` · SCREENS `/asset/collect`  
> **Delta cite:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · row `web-rmms-asset-collect`  
> **Cấm** typed CRUD `new_page` · toolbar/export Excel **N/A** (override SUBMIT)

## 1. Mục tiêu

Form **Thêm tài sản thủ công** 1-1 Android: loại · tên · tuyến/lý trình · GPS ghim · trạng thái · ảnh local · CTA POST create. Entry từ Hub tile «Thêm thủ công». Tab Cá nhân / `me*` **bỏ**. Hai lối Field và nhật ký / kết ca / tồn tại / tần suất = peer — **out** slug này.

## 2. § Delta Current vs New (edit_page HARD)

| | Current (shipped MFE) | New (SUBMIT-VALIDATE) |
|--|----------------------|------------------------|
| Scope | Page `AssetCollectPage.tsx` · route `/tai-san/thu-thap` · zones AC-* | **Giữ** layout/route/icon · **cấm** tab/route mới · **cấm** vẽ icon mới |
| Submit | `disabled={!canSave}` · `canSave` = requiredOk + GPS ok | Submit **luôn bật** khi form sẵn sàng · chỉ `disabled` khi `saving` |
| Validate | `showErrors` + toast khi thiếu · GPS gate khóa nút | Pattern B: lần bấm đầu `validationAttempted` · banner `string[]` + inline · scroll lỗi đầu · **cấm** một `alert.warning` thay banner |
| GPS | deny → khóa CTA trước khi bấm | deny → **bấm submit mới báo** · **cấm** khóa nút trước |
| Photos | `capture="environment"` đã có · local GAP media | **Giữ** capture · banner thiếu ảnh nếu required UI · media POST vẫn GAP |
| Route | `<input type="search">` + `<select>` local list · prefill có thể inject mã lạ | `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` · **xóa seed** · mã không có → `--` · **cấm** gõ tay tuyến hợp lệ |
| BFF | Mobile.Bff paths | ONLY `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff · users forward = shared BFF (slug này **không** gắn user picker) |
| Out | — | Excel/toolbar pack · invent API · iOS/Android · `new_page` typed CRUD |

## 3. Màn Collect (ids) — giữ

| Id | Route / zone | Việc |
|----|--------------|------|
| AC-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AC-01 | top bar | Back → Hub `/asset` |
| AC-02 | name | Text * · `Name` |
| AC-03 | type | Select * · `Type` · `GET integration/asset-types` |
| AC-04 | route | **SearchInput** * · `Route` · `GET integration/road-routes/search` · prefill sessions · missing → `--` |
| AC-05 | km | KmFrom * · KmTo optional |
| AC-06 | status | Select * · `GET asset/road-assets/init-data` · default `tot` |
| AC-07 | gpsPin | Text RO * · `Lat`/`Lng` · geolocation · deny báo lúc submit |
| AC-08 | photos | camera local · `capture="environment"` · upload media **GAP** |
| AC-09 | primary | CTA · always enabled (except saving) · `POST asset/road-assets` · Source→`manual` |
| AC-10 | cancel | về `/asset` |

**Out:** `/me*` · feedback · cam-view · AI/HITL · adjust · list/detail · Field doors deep · journal / findings / close / frequency · DES-GRID · invent CollectController · gõ tay lat/lng · Excel export.

## 4. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Delta HARD | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/collect` |
| Peer mobile CTX | `docs/context/features/asset-collect.md` |
| Parent hub | `docs/context/features/web-rmms-asset-hub.md` |
| DOMAIN-MAP | **Asset** (+ Integration · Patrol prefill) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |
| Code Current | `Linm.Web.RMMS.Mobile` · `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| DTO | `CreateRoadAssetRequest` · `RoadAssetDto` · `rmms_road_assets` |

## 5. API Live (prefix)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` · via `mobileApiBase()` |
| Init | `GET asset/road-assets/init-data` |
| Types | `GET integration/asset-types` |
| Routes | `GET integration/road-routes/search` · **no seed** |
| Prefill ca | `GET patrol/sessions` · status Đang tuần (optional) |
| Create | `POST asset/road-assets` |
| Users | `GET integration/users` — BFF forward shared · **không** field trên collect |
| Media | planned · **MISSING** · GAP-MOB-ASSET-COLLECT-MEDIA-01 |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `POST api/v1/asset-collect` / CollectController |

Required body: `Name` · `Type` · `Route` · `KmFrom` · `Status`. GPS UI → `Lat`/`Lng`. Banner client: tên · loại · tuyến · km · GPS · ảnh.

## 6. HARD rules (product + delta)

| Rule | |
|------|--|
| Layout | Android 1-1 · phone `max-width` 430 · **cấm** thêm tab/route/icon |
| Submit | Pattern B · luôn bật · chỉ khóa lúc `saving` |
| Validate | banner `string[]` + inline sau attempt · API lỗi = toast |
| GPS | geolocation · deny báo lúc submit · **cấm** fake · **cấm** gõ tay |
| Route | SearchInput + shared lookup · no `ROAD_ROUTE_SEED` · missing → `--` |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android · align-mobile-to-mfe = page đã có |
| Scope | **cấm** gộp AI / adjust / list · **cấm** `new_page` |

## 7. Persona

| Zone | Ai |
|------|-----|
| AC-* Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AC-* Tuần kiểm | Cán bộ QLĐB (VP / Khu) — cùng form · không lẫn session type |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `SUBMIT-VALIDATE.md` + this file + `AssetCollectPage.tsx` |
| screensHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| writtenAt | `2026-09-27T09:10:00.000Z` |
| taskId | `task_ed5bbfb2` |
| priorTask | `task_a6862c38` (new_page baseline · keep PO/Design artifacts) |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T09:44:24.912Z` |
| mobile | — | — | — |
