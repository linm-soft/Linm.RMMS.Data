# Feature context — web-rmms-asset-ai

> **Slug:** `web-rmms-asset-ai` · **Wave:** W2 Camera AI và HITL  
> **Status:** data_analy · **packKind:** `list` · **changeScope:** `edit_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera/AiVision  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/tai-san/ai` · **mfeStdUrl:** `http://localhost:9301/tai-san/ai`  
> **Native route cite:** SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-ai.md` (mobile P1 detect) · parent hub `web-rmms-asset-hub` · peer web `ai-asset-detect.md`  
> **Delta:** `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B + SearchInput tuyến · **cấm** `new_page`

## 1. Mục tiêu

Hai surface phone 1-1 Android: (1) **Camera AI** — chụp / upload frame · GPS · tuyến · POST `detect-assets` → ứng viên Draft; (2) **HITL** — xác nhận / bỏ ứng viên (`confirm` / `dismiss`) trước khi vào sổ. Entry từ Hub tile «Camera AI». **Cấm** auto-confirm vào sổ trên detect. Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường BDTX / Tuần kiểm Khu-VP) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — **out** slug này.

**Edit (NEW task):** giữ route/zones/API Live đã ship; chỉnh validate Pattern B + SearchInput tuyến theo SUBMIT-VALIDATE — **không** typed CRUD `new_page`, **không** Excel/export.

## 2. Màn AI + HITL (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AA-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AA-01 | top bar | Back → Hub `/asset` (`web-rmms-asset-hub`) |
| AA-02 | title/section | Camera AI · copy keys |
| AA-03 | photo | finder/camera · `capture="environment"` · `POST ai-vision/uploads/init` → `PUT …/{id}/object` → `ImageUrl` |
| AA-04 | gpsPin | RO Lat/Lng * · `navigator.geolocation` · AccuracyM ≤ 30 · deny/poor → báo khi bấm detect (Pattern B) · **cấm** khóa CTA trước |
| AA-05 | route | SearchInput * · `RouteId` · `GET integration/road-routes/search` · **cấm** seed · mã thiếu → `--` |
| AA-06 | patrolTrip | optional · `PatrolTripId` · `GET patrol/sessions` |
| AA-07 | nearbyWarn | optional · `GET ai-vision/asset-candidates/nearby` |
| AA-08 | primary | CTA Gửi nhận diện · luôn bật khi sẵn sàng · chỉ `disabled` lúc `detecting` · fail → banner `string[]` + inline |
| AA-09 | cancel | về `/asset` |
| AA-10 | HITL shell | nav `/asset/ai/hitl/{id}` · Draft candidate |
| AA-11 | HITL fields | RO/bind đề xuất class · route · km · score (Design chốt ẩn %) |
| AA-12 | HITL map pin | kéo pin local · **không** endpoint mới |
| AA-13 | confirm | `POST ai-vision/asset-candidates/{id}/confirm` · chỉ khóa lúc `busy` |
| AA-14 | dismiss | `POST ai-vision/asset-candidates/{id}/dismiss` · chỉ khóa lúc `busy` |

**Out:** `/me*` · feedback · cam-view · collect manual · adjust · list/detail deep · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent `api/v1/asset-ai` · auto vào sổ · fake GPS / `mock://` ImageUrl · gõ tay lat/lng · Excel/export · `disabled={!canDetect}` theo required/GPS.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/ai` + HITL |
| Submit/validate delta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-asset-ai` |
| Peer mobile CTX | `docs/context/features/asset-ai.md` |
| Peer web | `docs/context/features/ai-asset-detect.md` |
| Parent hub | `docs/context/features/web-rmms-asset-hub.md` · tile AI |
| DOMAIN-MAP | **AiVision** (+ cite Asset · Integration · Patrol) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` · `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| DTO | `DetectAssetsRequest` · `AssetCandidateDto` · uploads FileService |
| Code Current | `Linm.Web.RMMS.Mobile` · `AssetAiDetectPage.tsx` · `AssetAiHitlPage.tsx` |

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
| Routes | `GET integration/road-routes/search` · **cấm** ROAD_ROUTE_SEED |
| Users | `GET integration/users` — BFF forward nếu thiếu (peer forms; AI page N/A user picker) |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `POST api/v1/asset-ai` / AssetAiController · **cấm** Route `mobile-bff` trên Web BFF controllers |

Required detect (validate on submit): `ImageUrl` thật · `Lat`/`Lng` (server từ chối 0,0) · `RouteId` · AccuracyM ≤ 30. HITL: confirm tạo Asset `source=ai` / ai-asset-detect · dismiss = false positive.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` · feedback · cam-view |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| Validate | Pattern B · CTA detect luôn bật · chỉ khóa lúc pending · banner + inline · **cấm** `disabled={!canDetect}` |
| GPS | `navigator.geolocation` · deny / Acc > 30 → báo khi bấm · **cấm** fake · **cấm** gõ tay · **cấm** khóa nút trước |
| Route | SearchInput + live search · **cấm** seed · thiếu → `--` |
| BFF | ONLY Mobile.Bff `:5202` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp collect / adjust / list · **cấm** auto-confirm · **cấm** `new_page` · **cấm** Excel |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |
| Align | `/align-mobile-to-mfe` · SSOT = page MFE đã có · **cấm** thêm tab/route · **cấm** icon mới |

## 6. Persona

| Zone | Ai |
|------|-----|
| AA-00…09 Tuần đường | Nhân viên tuần đường (BDTX) — prefill tuyến từ ca Đang tuần |
| AA-00…09 Tuần kiểm | Nhân viên tuần kiểm (Khu/VP) — chọn tuyến thủ công nếu không có ca |
| AA-10…14 HITL | Cùng persona · xác nhận trước khi vào sổ |

## 7. DoD data_analy

- [x] control-hint + real-data written (edit_page · § Delta)  
- [x] CTX this file · changeScope=`edit_page` · packKind=`list` · demo=N/A  
- [x] mfeStdRoute=`/tai-san/ai` · mfeStdUrl real  
- [ ] DOMAIN-MAP row `web-rmms-asset-ai` — SA  
- [ ] Design prototype + reviewUrl (giữ artifact; PO/Design re-confirm Delta)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-27T10:27:53.713Z` |
| mobile | — | — | — |
