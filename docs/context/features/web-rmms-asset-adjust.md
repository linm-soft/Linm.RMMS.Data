# Feature context — web-rmms-asset-adjust

> **Slug:** `web-rmms-asset-adjust` · **Wave:** W2 Bớt hoặc sửa tài sản  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-adjust` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-adjust`  
> **Native route cite:** SCREENS `/asset/adjust` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Parent hub:** `web-rmms-asset-hub` · tile Bớt/sửa · peer list `web-rmms-asset-list`  
> **Delta:** plan T19 · Bớt hoặc sửa tài sản

## 1. Mục tiêu

Màn **Bớt / sửa** 1-1 Android: sổ tài sản active + search · CTA **Bớt** (xóa mềm sau xác nhận) · CTA **Sửa** mở detail (nav list peer) — **không** PUT trên form P1. Entry từ Hub `/asset`. Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường BDTX / Tuần kiểm Khu-VP) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — **out** slug này.

## 2. Màn Adjust (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AA-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AA-01 | top bar | Back → Hub `/asset` (`web-rmms-asset-hub`) |
| AA-02 | title | copy `assetAdjust.title` |
| AA-03 | search | Text/Search · query `search` · reload GET |
| AA-04 | list | rows active only · `page`/`pageSize` · Code/Type/Route · **không** hiện Lat/Lng P1 |
| AA-05 | empty/error | empty · toast retry · **cấm** `window.alert` |
| AA-06 | row · Bớt | Button · confirm → `DELETE asset/road-assets/{id}` soft |
| AA-07 | row · Sửa | Button/Nav → detail `/asset/:id` (`web-rmms-asset-list`) · **cấm** PUT form P1 |
| AA-08 | confirm dialog | confirm soft-delete · copy keys |

**Out:** `/me*` · feedback · cam-view · PUT edit form · collect/AI/HITL · GIS deep · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent AdjustController · GPS capture mới · gõ tay lat/lng.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/adjust` |
| Parent hub | `docs/context/features/web-rmms-asset-hub.md` · tile adjust |
| Peer list/detail | `docs/context/features/web-rmms-asset-list.md` · Sửa → detail |
| DOMAIN-MAP | **Asset** (`road-assets`) · cite list peer |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |
| DTO | `RoadAssetDto` · entity `rmms_road_assets` · soft-delete |

## 4. API Live (prefix)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| List active | `GET asset/road-assets?search&page&pageSize` · filter active |
| Soft delete | `DELETE asset/road-assets/{id}` |
| Detail (peer) | nav `/asset/:id` · `GET asset/road-assets/{id}` trên list feature |
| PUT | **không** trên form P1 |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `api/v1/asset-adjust` / AdjustController |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` · feedback · cam-view |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | **không** lấy GPS mới · Lat/Lng **không** hiện trên row P1 |
| BFF | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL` · **cấm** web-bff base · **cấm** Route mobile-bff trên WebService web-bff |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp collect / AI / list shell vào slug · Sửa = nav peer |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |

## 6. Persona

| Zone | Ai |
|------|-----|
| AA-* Tuần đường | Nhân viên tuần đường (BDTX) — sổ active · bớt/sửa |
| AA-* Tuần kiểm | Nhân viên tuần kiểm (Khu/VP) — cùng surface · Field door = peer |

## 7. DoD (analy → PO)

- [ ] CTX + control-hint + real-data + compact
- [ ] Zones AA-00…08 · Soft DELETE + search + Sửa→detail (no PUT P1)
- [ ] Mobile.Bff only · DOMAIN-MAP Asset (GAP slug nếu thiếu)
- [ ] no me · no GPS capture · no invent path

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T16:45:32.465Z` |
| mobile | — | — | — |
