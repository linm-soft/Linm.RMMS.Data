# Feature context — web-rmms-asset-kcht

> **Slug:** `web-rmms-asset-kcht` · **Wave:** W1 Hạng mục tài sản (lưới loại KCHT)  
> **Status:** po confirmed · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master catalog live · **cấm** demo HTML / mock SSOT count «32»)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-asset-kcht` · **mfeStdUrl:** `http://localhost:9301/web-rmms-asset-kcht`  
> **Native route cite:** SCREENS `/asset/kcht` · PLAN `AssetKchtDashboardView` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `asset-kcht-32.md` (catalog 36) · `web-rmms-asset-hub.md` (entry tile) · SCREENS `/asset/kcht`

## 1. Mục tiêu

Màn **Hạng mục tài sản** 1-1 Android: lưới loại KCHT từ catalog live `GET integration/asset-types`. **Không form create/update** trên màn này — chỉ browse + nav sâu theo loại. Tab Cá nhân / `me*` **bỏ**. Hai lối Field + nhật ký / kết ca / tồn tại / tần suất = peer shell / `web-rmms-mobile-a`…`e` — **out**.

## 2. Màn KCHT (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| AK-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| AK-01 | top bar | Back → Hub `/asset` / `web-rmms-asset-hub` |
| AK-02 | title | Copy key `assetKcht.title` · **cấm** hardcode VN |
| AK-03 | search (optional P1) | Filter client trên list loại đã load · copy `assetKcht.search` |
| AK-04 | type grid | Tile / row mỗi loại · icon + name từ API |
| AK-05 | empty / error | Empty ẩn grid · toast retry · **cấm** `window.alert` |
| AK-06 | type tap | Nav peer (list/passport by `code`) — **UNCLEAR-KCHT-TAP** |

**Out:** `/me*` · feedback · cam-view · invent POST/PUT loại · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop · invent `asset/kcht` controller · gộp sibling list/collect/ai/adjust.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/kcht` Hạng mục |
| PLAN native map | `docs/plan/web-rmms-mobile/PLAN.md` · `AssetKchtDashboardView` |
| Peer catalog | `docs/context/features/asset-kcht-32.md` · 36 mã canonical |
| Hub entry | `docs/context/features/web-rmms-asset-hub.md` · tile → `/asset/kcht` |
| DOMAIN-MAP | **Integration** `asset-type` (+ cite Asset) · slug row **GAP** |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |

## 4. API Live (prefix) — KCHT only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Catalog loại | `GET integration/asset-types` → downstream `api/v1/open-api/asset-types` |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `GET/POST asset/kcht` · **cấm** hardcode 32/36 làm SSOT count |

GPS trên KCHT: **không**. Sibling collect/AI: `navigator.geolocation` · deny → chặn nút cần tọa độ (peer).

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** CRUD loại / gộp sibling vào slug |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |
| Count | Hiển thị count từ API · **cấm** demo «32» làm SSOT |

## 6. Persona

| Zone | Ai |
|------|-----|
| AK-* | Tuần đường · Hạt · Văn phòng Khu IV (browse loại) |

## 7. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-F-KCHT-01 | Tap loại → list `?type=` hay passport/dashboard theo loại | **RESOLVED (PO):** peer list `?type={code}` · passport out P1 · **không invent** API |
| GAP-F-KCHT-02 | DOMAIN-MAP row `web-rmms-asset-kcht` | SA thêm · domain Integration cite Asset |
| GAP-F-KCHT-03 | SCREENS `/asset/kcht` vs mfeStdRoute `/web-rmms-asset-kcht` | **RESOLVED (PO):** STATUS `/web-rmms-asset-kcht` · native `/asset/kcht` alias |
| GAP-F-KCHT-04 | Search bar P1 bắt buộc? | **RESOLVED (PO):** optional P1 client filter |

<!-- context: web-rmms-asset-kcht mobile · data_analy 2026-09-25 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T14:01:30.522Z` |
| mobile | — | — | — |
