# Feature context — web-rmms-offline

> **Slug:** `web-rmms-offline` · **Title:** Hàng đợi offline  
> **Status:** team_lead · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master-adjacent Field queue · **cấm** demo HTML SSOT)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét màn vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** (apply check-in) + **Integration** (receipt offline-batch) · **cấm ERP.*** / Domains/Master  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1` · base `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** gọi web-bff · **cấm** thêm Route `mobile-bff` lên controller web-bff  
> **mfeStdRoute:** `/web-rmms-offline` · **mfeStdUrl:** `http://localhost:9301/web-rmms-offline`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-offline` · **cấm** sửa iOS/Android native

## 1. Mục tiêu

Màn **Hàng đợi offline** trên web mobile: xem hàng cục bộ (IndexedDB / local store), đồng bộ replay check-in khi online, biên nhận SyncJob sau khi apply OK. UI **1-1 Android** `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` (icon · segment · card · banner). **Bỏ** tab Cá nhân: me · me-profile · me-settings · feedback · cam-view.

## 2. Màn / zone

| Id | Route | Việc |
|----|-------|------|
| OFF-00 | `/offline` · alias `/field/offline` · std `/web-rmms-offline` | List hàng đợi · segment Check-in / Sự cố · Đồng bộ |

**Entry:** Home tile Lưu trữ · Field hub syncBtn · peer Me row (nếu shell có — không làm tab Me trong feature này).

**Ngoài scope:** nhật ký / kết ca / tồn tại / tần suất → task `web-rmms-mobile-b…e`. Field doors Tuần đường (BDTX) / Tuần kiểm (Khu/VP) = peer A — không clone hub vào offline.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/offline` Hàng đợi |
| Implement | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · mất mạng xếp hàng |
| Peer CTX | `docs/context/features/patrol-offline.md` |
| Peer analy | `specs/_data-analy/patrol-offline-control-hint.md` · `patrol-offline-real-data.md` |
| Android UI 1-1 | `specs/patrol-offline/ui/prototype/android/index.html` `#sc-patrol-offline` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol · Integration |
| Strings | `docs/mobile-strings.json` keys `offline.*` · `useFormOptions()` |

## 4. API Live (prefix)

| Action | Path | Note |
|--------|------|------|
| Xem hàng | **local store** | **cấm** invent `GET …/queue` |
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` | primary apply DB |
| Replay incident | `POST mobile-bff/api/v1/incident/incidents` | P2 · giữ local P1 |
| Biên nhận | `POST mobile-bff/api/v1/integration/sync/offline-batch` | optional **sau** replay OK · `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note` |

Body check-in: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · photo File ids.

## 5. HARD rules

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS list | **không** lấy fix mới để bịa · dùng lat/lng đã lưu lúc enqueue |
| GPS enqueue peer | `navigator.geolocation` · deny → chặn nút cần tọa độ (check-in / incident create) |
| Sync | xóa local **chỉ khi** POST 2xx · partial fail giữ item lỗi · offline → toast · **cấm** clear-all |
| Incident P1 | filter UI · **cấm** xóa khi sync check-in |
| Native | **cấm** sửa iOS/Android · chỉ MFE Mobile |
| BFF | routes chỉ trong `Linm.RMMS.Mobile.Bff` |

## 6. Permissions

| Action | Permission |
|--------|------------|
| Replay check-in | `patrol.sessions.update` |
| Replay incident (P2) | `incident.incidents.create` |

## Version meta

`schemaVersion=1` · `analyzedAt=2026-09-25T17:45:00.000Z` · `changeScope=new_page` · `packKind=list`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T17:48:29.092Z` |
| mobile | — | — | — |
