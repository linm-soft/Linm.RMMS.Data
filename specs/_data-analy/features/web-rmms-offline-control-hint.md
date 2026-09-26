# Data-analy — controlHint — web-rmms-offline

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| title | Hàng đợi offline |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| analyzedAt | `2026-09-25T17:45:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-offline-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + **Integration** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| mfeStdRoute | `/web-rmms-offline` |
| taskId | `task_60b39e71` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full list · **không** ERP Modal/Slideout Kind B desktop |
| ui1to1 | Android `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** sửa iOS/Android native.  
> **Cấm** Route `mobile-bff` trên web-bff controllers — chỉ `Linm.RMMS.Mobile.Bff`.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-offline.md` | greenfield (created this run) |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/offline` | Live API map |
| Peer CTX | `docs/context/features/patrol-offline.md` | mobile native DoD replay |
| Peer analy | `specs/_data-analy/patrol-offline-*.md` | delta apply check-ins |
| Android proto | `specs/patrol-offline/ui/prototype/android/index.html` | UI 1-1 zones |
| DOMAIN-MAP | Patrol · Integration | cite · **cấm ERP.*** |
| Wave peers | `web-rmms-mobile-a…e` | Field doors / journal out of scope |

## Screens / zones

| id | route | surface |
|----|-------|---------|
| OFF-00 | `/web-rmms-offline` · `/offline` · `/field/offline` | list hàng đợi |

| zone / uiField | des-id | controlHint | notes |
|----------------|--------|-------------|-------|
| navBack | DES-MOB-PAT-OFFLINE-NAV | Button/Back | pop Home / Field hub |
| title | DES-MOB-PAT-OFFLINE-NAV | Text | copy key `offline.title` · Dữ liệu lưu trữ |
| syncBtn | DES-MOB-PAT-OFFLINE-NAV | Button | replay pending · online only |
| segCheckIn | DES-MOB-PAT-OFFLINE-SEG | Segment | filter `kind=checkIn` |
| segIncident | DES-MOB-PAT-OFFLINE-SEG | Segment | filter `kind=incident` · P1 no delete on sync |
| offlineBanner | DES-MOB-PAT-OFFLINE-BANNER | Banner | weak when pending>0 |
| queueCards | DES-MOB-PAT-OFFLINE-CARD | List cards | title · location · status «Chờ gửi» |
| empty | — | EmptyChrome | pendingCount=0 |
| toast | — | Toast | synced count = số apply 2xx |

**Out of feature:** tab Me / me-profile / me-settings / feedback / cam-view · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`).

## ControlHint inventory (list + hidden replay payload)

| uiField | controlHint | catalogKind / notes |
|---------|-------------|---------------------|
| items[].title | Text display | local enqueue |
| items[].location | Text display | route · km |
| items[].status | Badge | pending · copy key |
| items[].kind | Hidden/segment | `checkIn` \| `incident` |
| items[].sessionId | Hidden | **required** checkIn replay |
| items[].planPointLabel | Hidden | body |
| items[].route | Hidden | body |
| items[].lat / lng | Hidden | body · **đã lưu** lúc mất sóng |
| items[].accuracyM | Hidden | body |
| items[].distanceToPlanM | Hidden | body |
| items[].matchOk | Hidden | body · **cấm** ép true |
| items[].content | Hidden | optional |
| items[].photoLocalIds | Hidden | File guid |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list · **không** Kind B desktop grid |
| Segment | local filter only · **cấm** invent GET queue |

## GPS

| Màn | Rule |
|-----|------|
| OFF-00 list/sync | **không** gọi `geolocation` mới · replay dùng lat/lng local |
| Peer enqueue (A/C) | deny → chặn nút cần tọa độ · **cấm** tọa độ mẫu |

## Tech factors

| Factor | Value |
|--------|-------|
| offline | **yes** owner · local store |
| map | no |
| camera | no (photos từ enqueue) |
| BFF base | `http://localhost:5202/mobile-bff/api/v1` |
| token | Bearer mobile BFF |

## Hành vi

| Case | UI / logic |
|------|------------|
| Appear | Load local pending · EmptyChrome khi 0 |
| Tap Đồng bộ · online | For each pending `checkIn`: POST check-ins · remove OK · keep fail · toast N OK · optional offline-batch `RecordCount=N` |
| Tap Đồng bộ · offline | Toast fail · **cấm** clear |
| Partial fail | Giữ item lỗi · **cấm** clear-all |
| Segment Sự cố | Filter only · sync **không** xóa incident (P1) |
| Back | pop |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-INCIDENT-REPLAY | Incident apply P2 · API Live `POST incident/incidents` có; web enqueue wire chưa chốt đủ body | Design giữ segment · SA/Dev P1 filter-only · P2 bind |
| UNCLEAR-STORE-KEY | IndexedDB vs localStorage key naming web | Dev chọn một store · schema khớp peer Android payload |

## Handoff

| Role | Dùng |
|------|------|
| PO | DoD local-first · replay Live · UI 1-1 Android · no Me tabs |
| Design | Phone 430 · zones OFF-00 / DES-MOB-PAT-OFFLINE-* · no desktop grid |
| SA | Giữ Live paths · receipt optional · **cấm** invent queue GET · Mobile.Bff only |
| TL/Dev | Wire `Linm.Web.RMMS.Mobile` only · `VITE_MOBILE_API_URL` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T17:45:00.000Z`
