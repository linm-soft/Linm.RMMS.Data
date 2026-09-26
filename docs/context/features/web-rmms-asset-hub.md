# Feature context — web-rmms-asset-hub

> **Slug:** `web-rmms-asset-hub` · **Wave:** W1 Hub tài sản (wallet · grid nav · AI pending)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-hub` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-hub`  
> **Native route cite:** SCREENS `/asset` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-hub.md` (mobile P1) · SCREENS `/asset`

## 1. Mục tiêu

Màn **Hub tài sản** 1-1 Android: ví hồ sơ + lưới lối vào sibling (hạng mục · list · thu thập · AI · adjust · bản đồ) + section chờ xác nhận AI. **Không form / không CRUD** trên hub — API nằm ở màn con. Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường BDTX / Tuần kiểm Khu-VP) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — hub chỉ **nav**.

## 2. Màn Hub (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AH-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AH-01 | top bar | Back → Home (`/` / `web-rmms-home`) |
| AH-02 | wallet | Hồ sơ tài sản RO · tap **không** nav (đã ở hub) |
| AH-03 | tile grid | Hạng mục → `/asset/kcht` · Danh sách → `/asset/list` |
| AH-04 | thu thập | Thêm thủ công → `/asset/collect` · Camera AI → `/asset/ai` |
| AH-05 | quản lý | Cập nhật / bớt → `/asset/adjust` |
| AH-06 | bản đồ row | Xem bản đồ → `/gis` |
| AH-07 | AI pending | Row Draft + CTA → sibling HITL · ẩn nếu empty |

**Out:** `/me*` · feedback · cam-view · sibling CRUD surfaces · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent `GET asset/hub`.

### Tile / row → route (SCREENS)

| Nút | Route |
|-----|-------|
| Hạng mục | `/asset/kcht` |
| Danh sách | `/asset/list` |
| Thêm thủ công | `/asset/collect` |
| Camera AI | `/asset/ai` |
| Cập nhật / bớt | `/asset/adjust` |
| Xem bản đồ | `/gis` |

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset` Hub tài sản |
| Peer mobile CTX | `docs/context/features/asset-hub.md` |
| Home entry | `docs/context/features/web-rmms-home.md` · grid/wallet → `/asset` |
| DOMAIN-MAP | **Asset** (+ cite AiVision · Gis · Integration) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |

## 4. API Live (prefix) — Hub only (read summary)

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Wallet tuyến | `GET integration/road-routes/search` |
| Wallet số loại | `GET integration/asset-types` (count) |
| AI pending | `GET ai-vision/asset-candidates` · status=Draft |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `GET asset/hub` / wallet controller |

GPS trên Hub: **không**. Sibling collect/AI: `navigator.geolocation` · deny → chặn nút cần tọa độ.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp sibling CRUD vào slug hub |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |

## 6. Persona

| Zone | Ai |
|------|-----|
| AH-* staff | Nhân viên hiện trường / cán bộ QLĐB sau login · vào từ Home grid/wallet |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `SCREENS.md` + `asset-hub.md` + this file |
| screensHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T13:05:00.000Z` |
| taskId | `task_64b589a6` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T13:29:22.968Z` |
| mobile | — | — | — |
