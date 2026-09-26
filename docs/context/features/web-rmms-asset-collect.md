# Feature context — web-rmms-asset-collect

> **Slug:** `web-rmms-asset-collect` · **Wave:** W2 Thêm tài sản thủ công  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-collect` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-collect`  
> **Native route cite:** SCREENS `/asset/collect` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-collect.md` (mobile P1) · parent hub `web-rmms-asset-hub` · SCREENS `/asset/collect`  
> **Delta:** plan T17 · Thêm tài sản thủ công

## 1. Mục tiêu

Form **Thêm tài sản thủ công** 1-1 Android: loại · tên · tuyến/lý trình · GPS ghim · trạng thái · ảnh local · CTA POST create. Entry từ Hub tile «Thêm thủ công». Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường BDTX / Tuần kiểm Khu-VP) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — **out** slug này.

## 2. Màn Collect (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AC-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AC-01 | top bar | Back → Hub `/asset` (`web-rmms-asset-hub`) |
| AC-02 | name | Text * · `Name` |
| AC-03 | type | Select * · `Type` · `GET integration/asset-types` |
| AC-04 | route | Select/search * · `Route` · `GET integration/road-routes/search` · prefill `GET patrol/sessions` ca Đang tuần |
| AC-05 | km | KmFrom * · KmTo optional · parse lý trình / snap GPS |
| AC-06 | status | Select * · `Status` · `GET asset/road-assets/init-data` · default `tot` |
| AC-07 | gpsPin | Text RO * · `Lat`/`Lng` · `navigator.geolocation` · deny → chặn submit |
| AC-08 | photos | camera local · upload media **GAP** (chưa POST media) |
| AC-09 | primary | CTA Thêm · `POST asset/road-assets` · `Source` trống → server `manual` · **cấm** `ai` |
| AC-10 | cancel | về `/asset` |

**Out:** `/me*` · feedback · cam-view · AI detect/HITL · adjust · list/detail deep · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent path `asset-collect` controller · gõ tay lat/lng.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/collect` |
| Peer mobile CTX | `docs/context/features/asset-collect.md` |
| Parent hub | `docs/context/features/web-rmms-asset-hub.md` · tile collect |
| DOMAIN-MAP | **Asset** (+ cite Integration · Patrol prefill) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |
| DTO | `CreateRoadAssetRequest` · `RoadAssetDto` · entity `rmms_road_assets` |

## 4. API Live (prefix)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Init | `GET asset/road-assets/init-data` |
| Types | `GET integration/asset-types` |
| Routes | `GET integration/road-routes/search` |
| Prefill ca | `GET patrol/sessions` · status Đang tuần (optional) |
| Create | `POST asset/road-assets` |
| Media | planned · **MISSING** · GAP-MOB-ASSET-COLLECT-MEDIA-01 |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `POST api/v1/asset-collect` / CollectController |

Required body: `Name` · `Type` · `Route` · `KmFrom` · `Status`. `Code` server `TS-yyyyMMdd-nnn`. GPS UI bắt buộc → `Lat`/`Lng`.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` · feedback · cam-view |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → disable CTA cần tọa độ · **cấm** fake · **cấm** gõ tay |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp AI / adjust / list vào slug |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |

## 6. Persona

| Zone | Ai |
|------|-----|
| AC-* Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AC-* Tuần kiểm | Cán bộ QLĐB (VP / Khu) — cùng form · không lẫn session type |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `SCREENS.md` + `asset-collect.md` + this file |
| screensHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T14:33:05.000Z` |
| taskId | `task_a6862c38` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T15:10:04.033Z` |
| mobile | — | — | — |
