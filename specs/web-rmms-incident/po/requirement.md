# PO — requirement — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố — edit Pattern B (submit + banner + GPS on-click) |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` |
| writtenAt | `2026-09-27T12:22:30.000Z` |
| demo | **N/A** |
| formPattern | Mobile full · phone `max-width: 430px` · Android 1-1 · Pattern B · **không** ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/van-de/moi` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `IncidentCreatePage.tsx` |
| priorAnaly | `_data-analy/features/web-rmms-incident-control-hint.md` · `web-rmms-incident-real-data.md` · hash skip |
| keep | prior PO/Design/SA/implement L/N/D · **cấm** typed CRUD `new_page` |
| taskId | `task_7772751e` |
| priorPoTask | `task_063c2388` |

> Nhãn UI: `useFormOptions('web-rmms-incident')` / LOOKUP_STATIC — **cấm** hardcode VN mới nếu key đã có.  
> **Cấm** re-scan demo · **cấm** invent slug API · **cấm** fake GPS · **cấm** Excel/export · **cấm** tab/route/icon mới.

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | **edit_page:** INC-N Pattern B — nút Create luôn bật · banner validate asset/session/GPS · GPS deny báo lúc bấm · giữ INC-L/INC-D. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Field. |
| Entry | Tab Incident · FAB list · Home «Ghi sự cố». |
| DoD edit | Bỏ `disabled={!canCreate}` · `disabled` **chỉ** `creating` · `validationAttempted` · banner `string[]` + inline + scroll · GPS deny **không** khóa nút · photos `capture="environment"` giữ · Mobile.Bff only. |
| DoD keep | INC-L list filter+cards · INC-D close · live APIs · HasGps · useFormOptions · route std `/van-de*`. |
| Out | typed CRUD `new_page` · Excel/toolbar · Me* · journal B–E · invent path · web-bff · fake GPS · SearchInput users/routes trên form create (tuyến = session RO). |

## 2. Screens / zones

| id | productRoute | std | Surface / zones | Delta |
|----|--------------|-----|-----------------|-------|
| INC-L | `/incident` | `/van-de` | search · filter.status · filter.severity · CardList · FAB · banner.vis · empty · toast.fail | **Giữ** |
| INC-N | `/incident/new` | `/van-de/moi` | assetPick · kind · checklist · photos (sheet Hủy/Lưu) · sessionStamp · gpsLock · severity · description · **validate.banner** · create · draftOffline | **Pattern B** · capture 2026-09-28 |
| INC-D | `/incident/:id` | `/van-de/:id` | RO fields · close · nav.estimate/map | **Giữ** |
| INC-V/C/E* | peer | peer | nav-only | **Giữ** |

**reviewUrl** = `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` (keep · Design patch zones create/banner).  
**peerStdUrl** = `http://localhost:9301/van-de/moi`.  
**DES-GRID / LinErpListFilterBar / Excel** = **N/A** phone.

## 3. Grid AC (packKind=list · keep regression)

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | INC-L: Search + status/severity Chip · query `search`/`status`/`severity` · pageSize=50 | Live GET |
| AC-GRID-02 | CardList: Title · IncidentType · Code · RouteName · KmStart · requester · RequestedAt · Status · HasGps cờ · thumb `mediaIds` 72×72 (ảnh đầu, `+N`, rỗng «Chưa có ảnh») · **không** Lat/Lng · **không** pin | §B |
| AC-GRID-03 | EmptyState / toast fail · **cấm** `window.alert` · **cấm** itemsOrDemo | empty/error |
| AC-GRID-04 | FAB → `/van-de/moi` · row → `/van-de/{id}` · peer nav vis/chat/map | nav |
| AC-GRID-06 | Icon Giao việc → `/cong-viec?incidentId={id}` · chỉ task của sự cố · tạo mới nhận `incidentId` parent | nav |
| AC-GRID-05 | Phone chips — **không** Kind B desktop grid primary | N/A |

## 4. Form / Create AC (INC-N · Delta Pattern B)

| AC id | Rule | Pass |
|-------|------|------|
| AC-CREATE-01 | LookupGrid asset-types · Segment kind · severity LOOKUP_STATIC · Description · pick identified/unidentified giữ | useFormOptions |
| AC-CREATE-02 | Checklist local by asset → Description · **không** API checklist mới | keep |
| AC-CREATE-03 | Ảnh: sheet pin + nhiều ảnh · nút chỉ **Hủy** / **Lưu** · Lưu ghi `MediaIds` và đóng về form tạo · nhận diện để sau · **không** khóa Create | 2026-09-28 |
| AC-CREATE-04 | sessionStamp `GET patrol/sessions` RO · **không** SearchInput tuyến | keep |
| AC-CREATE-05 | **GPS HARD (edit):** deny/pending **không** `disabled` Create · báo banner/modal **on submit** · **cấm** fake lat/lng | Pattern B |
| AC-CREATE-06 | POST body giữ Live: Title · RouteName · IncidentType · Status · RequestedAt · optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · HasGps=true khi fix · **không** Lat cột | Live |
| AC-CREATE-07 | draftOffline = peer local · **không** invent OfflineQueueController | peer |
| AC-PB-01 | Create **always enabled** khi form mount sẵn · `disabled` **chỉ** `creating` · **cấm** `disabled={!canCreate}` / khóa vì thiếu asset∧session∧gps∧online | SUBMIT-VALIDATE |
| AC-PB-02 | Lần bấm đầu: `validationAttempted=true` · trước đó **cấm** inline error | Pattern B |
| AC-PB-03 | Fail client: banner `string[]` (asset · session · GPS · offline nếu cần) + inline + scroll first · **cấm** một `alert.warning` thay banner · **cấm** banner cho API 4xx (toast) | Pattern B |
| AC-PB-04 | Banner copy keys (UNCLEAR-PB-BANNER-01 **resolved**): | useFormOptions |
| | · thiếu asset → `incident.pick.title` | |
| | · thiếu session → `incident.session.empty` (= `incident.toast.noSession`) | |
| | · GPS deny/pending → `incident.gps.deny` (banner) · modal giữ `incident.gps.deny.title` / `incident.gps.deny.body` | |
| | · offline → `incident.offline` / `incident.toast.offline` | |
| | · **cấm** hardcode VN mới nếu key trên đã có · Dev thêm key chỉ khi thiếu sau audit LOOKUP_STATIC | |

## 5. Detail AC (INC-D · keep)

| AC id | Rule | Pass |
|-------|------|------|
| AC-DETAIL-01 | GET `{id}` RO · HasGps · gallery `mediaIds` trước Peer · **cấm** invent Lat/Lng · **cấm** pin | Live |
| AC-DETAIL-02 | Close POST · Note optional · `disabled` chỉ `closing` | Live |
| AC-DETAIL-03 | nav.estimate / nav.map = peer only | peer |

## 6. Leave / Out of scope

| Leave | Note |
|-------|------|
| typed CRUD `new_page` · rewrite L/N/D DoD trừ Pattern B | Out edit |
| Excel / toolbar export / DES-GRID Kind B | HARD cấm |
| Me* · feedback · cam-view · journal B–E | Out |
| invent `web-rmms-incident/*` path · ERP.* · web-bff client | HARD |
| SearchInput users / road-routes trên INC-N | N/A · tuyến = session RO |
| fake GPS / demo-json / itemsOrDemo | HARD |
| iOS/Android native · tab/route/icon mới | HARD |
| Primary WO CRUD | Peer INC-E |

## 7. FormMode ↔ API

| Mode | API | Notes |
|------|-----|-------|
| List | `GET incident/incidents` | keep |
| Create | `POST incident/incidents` | HasGps · no Lat · Pattern B client only |
| Detail | `GET incident/incidents/{id}` | keep |
| Close | `POST …/{id}/close` | keep |
| Session | `GET patrol/sessions` | create stamp RO |
| Asset | `GET integration/asset-types` | pick |
| Detect/Upload | `ai-vision/*` · `files/*` | peer |

App base: `{BffBase}/mobile-bff/api/v1`. **no MIG** · SA cite Live.

## 8. UNCLEAR → handoff

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-PB-BANNER-01 | — | **resolved** · §4 AC-PB-04 key map |
| Prior UNCLEAR-* | — | **resolved** prior new_page pipeline · cite only |
| GAP-PB-INC-CREATE-01 | Design/Dev | Patch create button + banner zones · `IncidentCreatePage.tsx` |

## 9. Handoff Design

| Packet | Value |
|--------|-------|
| changeScope | `edit_page` · keep reviewUrl · patch INC-N create + validate.banner |
| zones | INC-L (keep) · INC-N Delta · INC-D (keep) |
| phone | max-width 430 · Android 1-1 |
| controlHint | Copy analy inventory + § Delta |
| packKind | `list` confirmed |
| GPS | deny → on-submit · **cấm** khóa Create |
| labels | useFormOptions · banner keys AC-PB-04 |
| Excel/DES-GRID | N/A |

## 10. Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:d753df685c7334cda81339c1c6daccaa3463c4e8c6350eaff5562a6e41584015` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T12:22:30.000Z` · `autoApprove=ON`
