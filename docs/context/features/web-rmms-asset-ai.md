# Feature context — web-rmms-asset-ai

> **Slug:** `web-rmms-asset-ai` · **Wave:** W2 Camera AI và HITL  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera/AiVision  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-ai` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-ai`  
> **Native route cite:** SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-ai.md` (mobile P1 detect) · parent hub `web-rmms-asset-hub` · peer web `ai-asset-detect.md`  
> **Delta:** plan T18 · Camera AI và HITL

## 1. Mục tiêu

Hai surface phone 1-1 Android: (1) **Camera AI** — chụp / upload frame · GPS · tuyến · POST `detect-assets` → ứng viên Draft; (2) **HITL** — xác nhận / bỏ ứng viên (`confirm` / `dismiss`) trước khi vào sổ. Entry từ Hub tile «Camera AI». **Cấm** auto-confirm vào sổ trên detect. Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường BDTX / Tuần kiểm Khu-VP) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — **out** slug này.

## 2. Màn AI + HITL (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AA-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AA-01 | top bar | Back → Hub `/asset` (`web-rmms-asset-hub`) |
| AA-02 | title/section | Camera AI · copy keys |
| AA-03 | photo | finder/camera · `POST ai-vision/uploads/init` → `PUT …/{id}/object` → `ImageUrl` |
| AA-04 | gpsPin | RO Lat/Lng * · `navigator.geolocation` · AccuracyM ≤ 30 · deny / poor → chặn detect |
| AA-05 | route | Select/search * · `RouteId` · sessions + `GET integration/road-routes/search` |
| AA-06 | patrolTrip | optional · `PatrolTripId` · `GET patrol/sessions` |
| AA-07 | nearbyWarn | optional · `GET ai-vision/asset-candidates/nearby` |
| AA-08 | primary | CTA Gửi nhận diện · `POST ai-vision/detect-assets` · body `DetectAssetsRequest` |
| AA-09 | cancel | về `/asset` |
| AA-10 | HITL shell | nav `/asset/ai/hitl/{id}` · Draft candidate |
| AA-11 | HITL fields | RO/bind đề xuất class · route · km · score (Design chốt ẩn %) |
| AA-12 | HITL map pin | kéo pin local · **không** endpoint mới |
| AA-13 | confirm | `POST ai-vision/asset-candidates/{id}/confirm` |
| AA-14 | dismiss | `POST ai-vision/asset-candidates/{id}/dismiss` |

**Out:** `/me*` · feedback · cam-view · collect manual · adjust · list/detail deep · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent `api/v1/asset-ai` · auto vào sổ · fake GPS / `mock://` ImageUrl · gõ tay lat/lng.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/ai` + HITL |
| Peer mobile CTX | `docs/context/features/asset-ai.md` |
| Peer web | `docs/context/features/ai-asset-detect.md` |
| Parent hub | `docs/context/features/web-rmms-asset-hub.md` · tile AI |
| DOMAIN-MAP | **AiVision** (+ cite Asset · Integration · Patrol) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |
| DTO | `DetectAssetsRequest` · `AssetCandidateDto` · uploads FileService |

## 4. API Live (prefix)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Upload | `POST ai-vision/uploads/init` · `PUT …/{id}/object` |
| Detect | `POST ai-vision/detect-assets` |
| Nearby | `GET ai-vision/asset-candidates/nearby` |
| Confirm | `POST ai-vision/asset-candidates/{id}/confirm` |
| Dismiss | `POST ai-vision/asset-candidates/{id}/dismiss` |
| Prefill ca | `GET patrol/sessions` · status Đang tuần (optional) |
| Routes | `GET integration/road-routes/search` |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `POST api/v1/asset-ai` / AssetAiController · **cấm** Route `mobile-bff` trên Web BFF controllers |

Required detect: `ImageUrl` thật · `Lat`/`Lng` (server từ chối 0,0) · `RouteId` · AccuracyM ≤ 30. HITL: confirm tạo Asset `source=ai` / ai-asset-detect · dismiss = false positive.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` · feedback · cam-view |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny / accuracy > 30 → disable CTA detect · **cấm** fake · **cấm** gõ tay |
| BFF | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp collect / adjust / list vào slug · **cấm** auto-confirm trên detect |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |

## 6. Persona

| Zone | Ai |
|------|-----|
| AA-00…09 Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AA-00…09 Tuần kiểm | Nhân viên tuần kiểm (Khu/VP) — chọn tuyến thủ công nếu không có ca |
| AA-10…14 HITL | Cùng persona · xác nhận trước khi vào sổ |

## 7. DoD data_analy

- [x] control-hint + real-data written  
- [x] CTX this file  
- [x] packKind=`list` · changeScope=`new_page` · demo=N/A  
- [ ] DOMAIN-MAP row `web-rmms-asset-ai` — SA  
- [ ] Design prototype + reviewUrl

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T16:16:37.961Z` |
| mobile | — | — | — |
