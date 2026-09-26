# Feature context — web-rmms-asset-list

> **Slug:** `web-rmms-asset-list` · **Wave:** W1 Danh sách và chi tiết tài sản  
> **Status:** draft · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master live · **cấm** demo HTML / in-app mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-list` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-list`  
> **Native route cite:** SCREENS `/asset/list` + `/asset/:id` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `web-rmms-asset-hub.md` (entry) · `web-rmms-asset-kcht.md` (type filter peer) · SCREENS `/asset/list`

## 1. Mục tiêu

Màn **Danh sách + chi tiết tài sản** 1-1 Android: search/paging list Live `GET asset/road-assets`, mở detail `GET asset/road-assets/{id}`, ghim bản đồ nav `/gis?focus={id}`. **Không PUT** trên detail. Tab Cá nhân / `me*` **bỏ**. Collect / AI / Adjust / Field 2 cửa + nhật ký / kết ca / tồn tại / tần suất = peer — **out**.

## 2. Màn List + Detail (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AL-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AL-01 | top bar | Back → Hub `/asset` / `web-rmms-asset-hub` |
| AL-02 | title | Copy key `assetList.title` · **cấm** hardcode VN |
| AL-03 | search | Query `search` · reload list · copy `assetList.search` |
| AL-04 | list | Rows paginated · `page`/`pageSize` · bind Code/Type/Route |
| AL-05 | empty / error | Empty ẩn list · toast retry · **cấm** `window.alert` |
| AL-06 | row tap | Nav detail `/asset/:id` / `web-rmms-asset-list` detail zone |
| AL-10 | detail shell | Title + back → list |
| AL-11 | detail fields | RO: `Code` · `Type` · `Route` · `KmFrom`/`KmTo` · `Lat`/`Lng` (ẩn nếu null) |
| AL-12 | pin map | Nav `/gis?focus={id}` · center `Lat`/`Lng` · disable nếu null |
| AL-13 | detail empty/error | 404 / toast retry |

**Out:** `/me*` · feedback · cam-view · PUT detail · invent CRUD ngoài GET list/detail · collect/ai/adjust surfaces · Field doors deep · journal / findings / close / frequency (`web-rmms-mobile-b`…`e`) · DES-GRID desktop Kind B.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/list` + `/asset/:id` |
| Hub entry | `docs/context/features/web-rmms-asset-hub.md` · tile → `/asset/list` |
| KCHT peer | `docs/context/features/web-rmms-asset-kcht.md` · optional `?type=` |
| DOMAIN-MAP | **Asset** (`road-assets`) · slug row **GAP** nếu thiếu |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |
| Gis peer | DOMAIN-MAP **Gis** · focus từ detail only |

## 4. API Live (prefix) — List + Detail only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| List | `GET asset/road-assets?search&page&pageSize` (+ optional `type` nếu PO chốt) |
| Detail | `GET asset/road-assets/{id}` |
| Map focus | client nav `/gis?focus={id}` · center từ detail `Lat`/`Lng` |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** PUT/POST trên slug này · **cấm** ERP.* |

GPS trên List/Detail: **chỉ hiển thị** tọa độ đã lưu · **không** `navigator.geolocation` mới. Sibling collect/AI: deny → chặn nút cần tọa độ (peer).

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** PUT detail · **cấm** gộp collect/ai/adjust vào slug |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |
| Demo | **cấm** demo-json / mock list SSOT |

## 6. Persona

| Zone | Ai |
|------|-----|
| AL-* | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — browse sổ + xem chi tiết |

## 7. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-F-LIST-01 | DOMAIN-MAP row `web-rmms-asset-list` | SA thêm · domain **Asset** |
| GAP-F-LIST-02 | SCREENS `/asset/list` vs mfeStdRoute `/web-rmms-asset-list` | STATUS `/web-rmms-asset-list` · native `/asset/list` alias |
| GAP-F-LIST-03 | Filter `type` từ KCHT `?type=` P1? | Optional query · PO chốt · **không invent** API |
| GAP-F-LIST-04 | Detail route nested vs same slug zones | Design: list+detail trong feature · native `/asset/:id` |

<!-- context: web-rmms-asset-list mobile · data_analy 2026-09-25 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T14:32:16.972Z` |
| mobile | — | — | — |
