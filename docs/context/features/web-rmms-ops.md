# Feature context — web-rmms-ops

> **Slug:** `web-rmms-ops` · **Wave:** W2 Home stack — Thông báo inbox (`/ops`)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (mobile inbox · **cấm** demo HTML / mock SSOT · **≠** legacy desktop `ops.md` Kind B)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera/Ops  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · DOMAIN-MAP **Notification** · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-ops` · **mfeStdUrl:** `http://localhost:9301/web-rmms-ops`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-ops` · **cấm** sửa iOS/Android

## 1. Mục tiêu

Màn **Thông báo inbox** 1-1 Android `OpsView`: danh sách notify, đánh dấu đã đọc, đồng bộ badge Home. Không form master compose chỉ đạo (desktop `/chi-dao`). Tab Cá nhân / `me*` **bỏ**. Hai lối Field + nhật ký / kết ca / tồn tại / tần suất = peer shell / `web-rmms-mobile-a`…`e`.

## 2. Màn ops (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| OP-00 | phone frame | ≤430px · Android layout 1-1 |
| OP-01 | `/ops` list | Inbox paged · `GET notification/inbox?page=1&pageSize=50` |
| OP-02 | row | Title · time · unread/read · priority/type RO |
| OP-03 | mark-read | Tap unread → `POST notification/inbox/{id}/mark-read` |
| OP-04 | empty | Empty copy key khi 0 item |
| OP-05 | chrome | Back stack · title copy · refresh reload inbox |
| OP-06 | badge peer | Overview unread — owner Home/shell cite · `GET notification/overview` |

**Out:** `/me*` · feedback · cam-view · Field 2-door deep · journal/findings/close/frequency (b–e) · desktop Kind B grid/KPI/compose CRUD · petitions sổ kiến nghị · DES-GRID desktop.

### Query (API sẵn · P1 **không** bắt filter UI)

`search` · `status` · `priority` · `type` · `unreadOnly` — Design/PO có thể stub sau; P1 = list + mark-read.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/ops` Thông báo |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` · Tab home · `/ops` · `OpsView` · slug `ops` |
| Tasks | `docs/plan/web-rmms-mobile/TASKS.md` · T-W2-01 |
| Peer Home | `docs/context/features/web-rmms-home.md` · badge → `/ops` |
| Peer Shell | `docs/context/features/web-rmms-shell.md` |
| Legacy desktop (cite only) | `docs/context/features/ops.md` · **không** SSOT mobile P1 |
| DOMAIN-MAP | Notification · slug `ops` (+ add `web-rmms-ops` row SA) |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` |

## 4. API Live (prefix) — ops inbox only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Inbox list | `GET notification/inbox` · `page` · `pageSize` |
| Mark read | `POST notification/inbox/{id}/mark-read` |
| Overview | `GET notification/overview` (badge peer) |
| Web BFF | **cite only** — **cấm** base client |

GPS trên `/ops`: **không** capture. SCREENS: list only · chấm công GPS = chỉ xem/điều hướng peer. Deep screens peer: `navigator.geolocation` · deny → chặn nút cần tọa độ.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | Inbox read + mark-read · **cấm** invent compose CRUD trên mobile P1 |
| Peer | Field 2 cửa · journal/kết ca/tồn tại/tần suất → a…e / shell |
| ≠ desktop | Legacy `ops` Kind B `/chi-dao` + demo = **out** |

## 6. Persona

| Zone | Ai |
|------|-----|
| OP-01…05 staff | Nhân viên hiện trường / cán bộ QLĐB sau login · đọc notify |
| Guest | Không inbox — redirect login (shell) |

## 7. DoD (data_analy → PO)

- [ ] Phone 430 · Android parity inbox list
- [ ] Live BFF inbox + mark-read · overview cite Home
- [ ] Labels via copy keys · no me · no desktop compose
- [ ] DOMAIN-MAP Notification · Mobile MFE only

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T12:57:46.191Z` |
| mobile | — | — | — |
