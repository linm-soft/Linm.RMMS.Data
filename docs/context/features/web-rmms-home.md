# Feature context — web-rmms-home

> **Slug:** `web-rmms-home` · **Wave:** W1 Home (guest · quick · lưới 6 ô · wallet)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-home` · **mfeStdUrl:** `http://localhost:9301/web-rmms-home`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-home` · **cấm** sửa iOS/Android

## 1. Mục tiêu

Màn **Home** 1-1 Android: guest (FAQ + privacy + đăng nhập) · staff (quick actions + lưới 6 ô + wallet + badge thông báo). Không form master. Tab Cá nhân / `me*` **bỏ**. Hai lối Field (Tuần đường / Tuần kiểm) và nhật ký / kết ca / tồn tại / tần suất = peer `web-rmms-shell` / `web-rmms-mobile-a`…`e` — Home chỉ **nav**.

## 2. Màn Home (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| HM-00 | phone frame | ≤430px · Android layout 1-1 |
| HM-01 | `/` guest | FAQ + privacy (copy tĩnh) + CTA Đăng nhập → `/login` |
| HM-02 | `/` staff quick | Điểm tuần → tab Field · Ghi sự cố → `/incident/new` |
| HM-03 | `/` grid 6 | Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ |
| HM-04 | wallet | Hồ sơ tài sản → `/asset` |
| HM-05 | notify | Badge → `/ops` · `GET notification/overview` |
| HM-06 | profile | Tên RO · `GET auth/profile` (staff, lần đầu) |

**Out:** `/me*` · feedback · cam-view · Field doors deep · journal / findings / close / frequency (b–e) · DES-GRID desktop.

### Grid 6 → route

| Ô | Route |
|---|-------|
| Giám sát | `/supervise` |
| Tuần đường | `/patrol-map` |
| Công việc | tab Work |
| Vấn đề | tab Incident |
| Tài sản | `/asset` |
| Lưu trữ | `/offline` |

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · Tab Home `/` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · Tab `home` · HARD |
| Shell peer | `docs/context/features/web-rmms-shell.md` |
| DOMAIN-MAP | Auth · Notification · cite Patrol/Incident/Maintenance/Asset |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |

## 4. API Live (prefix) — Home only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Profile | `GET auth/profile` |
| Notify badge | `GET notification/overview` |
| Login (CTA) | nav → `/login` · owner overlay shell |
| Web BFF | **cite only** — **cấm** base client |

GPS trên Home: **không**. Deep screens peer: `navigator.geolocation` · deny → chặn nút cần tọa độ.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |

## 6. Persona

| Zone | Ai |
|------|-----|
| HM-01 guest | Chưa JWT · xem FAQ/privacy · đăng nhập |
| HM-02…06 staff | Nhân viên hiện trường / cán bộ QLĐB sau login |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | `SCREENS.md` + `PLAN.md` + this file |
| screensHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| planHash | `sha256:60d75d5b1739142fa6d4250ea2ef65ff427a11e4657661d843a860955493ca1b` |
| writtenAt | `2026-09-25T12:00:00.000Z` |
| taskId | `task_1a53bb82` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T12:27:26.949Z` |
| mobile | — | — | — |
