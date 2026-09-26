# PO — Requirement — web-rmms-offline

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| title | Hàng đợi offline |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| writtenAt | `2026-09-26T00:22:32.051Z` |
| taskId | `task_403601e8` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full list · **không** ERP Modal/Slideout Kind B |
| ui1to1 | Android `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| analy | confirmed · compact `handoff/data_analy-compact.md` |
| autoApprove | ON → Design |

## 1. Goal / DoD

Màn **Hàng đợi offline** trên web mobile: list cục bộ (IndexedDB/local store), segment Check-in / Sự cố, nút Đồng bộ replay check-in Live khi online, biên nhận offline-batch optional sau 2xx. UI **1-1** Android `#sc-patrol-offline`. **DoD:** list = local · sync = Live apply · clear local **chỉ** khi POST 2xx · không invent GET queue · không Me tabs · không sửa native.

## 2. Screens / zones

| Id | Route | Surface |
|----|-------|---------|
| OFF-00 | `/web-rmms-offline` · `/offline` · `/field/offline` | list hàng đợi |

| zone | des-id | control | AC |
|------|--------|---------|-----|
| navBack | DES-MOB-PAT-OFFLINE-NAV | Button/Back | pop Home / Field hub |
| title | DES-MOB-PAT-OFFLINE-NAV | Text | copy `offline.title` |
| syncBtn | DES-MOB-PAT-OFFLINE-NAV | Button | online → replay; offline → toast fail · **cấm** clear |
| segCheckIn | DES-MOB-PAT-OFFLINE-SEG | Segment | filter `kind=checkIn` |
| segIncident | DES-MOB-PAT-OFFLINE-SEG | Segment | filter `kind=incident` · P1 no delete on sync |
| offlineBanner | DES-MOB-PAT-OFFLINE-BANNER | Banner | weak khi pending>0 |
| queueCards | DES-MOB-PAT-OFFLINE-CARD | List cards | title · location · status «Chờ gửi» (copy key) |
| empty | — | EmptyChrome | pendingCount=0 |
| toast | — | Toast | synced count = số apply 2xx · **cấm** `window.alert` |

**Entry:** Home tile Lưu trữ · Field hub syncBtn.

## 3. List / Grid AC (packKind=list)

| AC | Rule |
|----|------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **không** Kind B desktop grid |
| Segment | local filter only · **cấm** invent GET queue |
| Appear | Load local pending · EmptyChrome khi 0 |
| Card fields | title · location · status Badge pending (display) |
| Hidden replay payload | sessionId · planPointLabel · route · lat/lng · accuracyM · distanceToPlanM · matchOk · content · photoLocalIds |
| GPS list/sync | **cấm** `geolocation` mới · dùng lat/lng đã lưu |
| Labels | `useFormOptions()` / `offline.*` · **cấm** hardcode VN |

## 4. Sync / behavior AC

| Case | Expected |
|------|----------|
| Sync · online · checkIn | For each pending: `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` · remove OK · keep fail · toast N |
| Sync · offline | Toast fail · **cấm** clear |
| Partial fail | Giữ item lỗi · **cấm** clear-all |
| Incident P1 | Filter only · sync **không** xóa incident |
| Incident P2 | `POST …/incident/incidents` (SA/Dev sau khi body đủ) |
| Receipt optional | Sau OK: `POST …/integration/sync/offline-batch` · `RecordCount` = số 2xx |
| Permission | check-in: `patrol.sessions.update` · incident P2: `incident.incidents.create` |

**Body Live** (`CreatePatrolCheckInRequest`): PlanPointLabel · Route · Lat · Lng · AccuracyM · DistanceToPlanM · MatchOk · Content · PhotoLocalIds/AttachmentIds. **Cấm** ép MatchOk=true.

**Receipt body:** Partner · DeviceId · BatchId · RecordCount · Note.

## 5. Leave / out of scope

| Out | Note |
|-----|------|
| Me tabs | me / me-profile / me-settings / feedback / cam-view |
| journal / kết ca / tồn tại / tần suất | `web-rmms-mobile-b…e` |
| Field doors hub clone | peer A — không clone vào offline |
| Invent queue API / OfflineQueueController | **cấm** |
| ERP.* / Domains/Master / web-bff | **cấm** |
| iOS/Android native edits | **cấm** |
| Demo HTML SSOT / in-app mock | **cấm** · demo N/A |

## 6. Open questions (carry)

| id | PO decision | Next |
|----|-------------|------|
| UNCLEAR-INCIDENT-REPLAY | P1 filter-only · P2 bind Live incident | Design giữ segment · SA/Dev P2 |
| UNCLEAR-STORE-KEY | Một store web · schema khớp peer payload | Dev chọn IndexedDB key · SA cite |

## 7. Handoff Design

| Item | Value |
|------|-------|
| reviewUrl | (Design tạo) phone 430 · zones OFF-00 / DES-MOB-PAT-OFFLINE-* |
| peerStdUrl | `http://localhost:9301/web-rmms-offline` |
| control-map | khớp analy §B · no desktop grid |
| prototype | Android 1-1 `#sc-patrol-offline` · **cấm** dump HTML vào chat |
| next role | `/agent-design` · autoApprove ON |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T00:22:32.051Z` · `changeScope=new_page` · `packKind=list`
