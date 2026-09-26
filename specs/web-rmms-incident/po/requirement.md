# PO — requirement — web-rmms-incident

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident` |
| title | Sự cố — list / tạo / chi tiết (Mobile) |
| packKind | `list` |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` |
| writtenAt | `2026-09-26T04:00:00.000Z` |
| demo | **N/A** |
| formPattern | Mobile full · phone `max-width: 430px` · Android 1-1 · **không** ERP Modal/Slideout Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision (+ files; Maintenance peer) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| priorAnaly | `_data-analy/features/web-rmms-incident-control-hint.md` · `web-rmms-incident-real-data.md` · hash skip |
| taskId | `task_063c2388` |

> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** re-scan demo · **cấm** invent slug controller · **cấm** fake GPS · **cấm** itemsOrDemo.

## 1. Goal / persona / DoD

| | |
|--|--|
| Goal | Tab **Vấn đề / Sự cố**: list filter+cards → tạo (pick TS + form + GPS) → chi tiết + đóng — 1-1 Android phone frame. |
| Persona | Tuần đường (BDTX) · Tuần kiểm (Khu/VP) — Field; chung list/create/detail. |
| Entry | Tab Incident · Home «Ghi sự cố» / «Vấn đề» · FAB list. |
| DoD P1 | INC-L · INC-N · INC-D · GPS deny gate · live Mobile.Bff · empty/error toast · **không** Me* · **không** fake coords. |
| Out P1 | Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent `web-rmms-incident/*` path · web-bff client · primary WO CRUD trong slug này. |

## 2. Screens / zones

| id | productRoute | std | Surface / zones |
|----|--------------|-----|-----------------|
| INC-L | `/incident` | `/web-rmms-incident` | search · filter.status · filter.severity · CardList · FAB · banner.vis · nav.map · row.open · row.chat · empty · toast.fail |
| INC-N | `/incident/new` | `…/new` | assetPick · assetCard · kind · checklist · photos · detect · sessionStamp · gpsLock · severity · description · create · draftOffline · emptyNoSession |
| INC-D | `/incident/:id` | `…/:id` | header · routeKm · hasGps · note · close · nav.estimate · nav.map · toast.ok/fail |
| INC-V* | `/incident/vis` | peer | banner nav only — **không** DoD CRUD |
| INC-C* | `/incident/:id/chat` | peer | row.chat nav |
| INC-E* | `/incident/estimate/:id` | peer | detail nav estimate |

\* Peer: deep-link OK · **không** gộp CRUD WO primary vào pack này (UNCLEAR-PEER-VIS).

**reviewUrl** = Design chốt prototype.  
**peerStdUrl** = `http://localhost:9301/web-rmms-incident`.  
**DES-GRID / LinErpListFilterBar** = **N/A** phone chips (không Kind B desktop primary).

## 3. Grid AC (packKind=list)

| AC id | Rule | Pass |
|-------|------|------|
| AC-GRID-01 | INC-L: SearchInput + status/severity Chip/Select · query `search`/`status`/`severity` · pageSize=50 | Live GET list |
| AC-GRID-02 | CardList hiển thị Title · IncidentType · Code · RouteName · KmStart · requester · RequestedAt · Status · HasGps cờ · **không** Lat/Lng trên list DTO | bind §B |
| AC-GRID-03 | EmptyState khi list rỗng · toast fail khi load lỗi · **cấm** `window.alert` · **cấm** itemsOrDemo | empty/error |
| AC-GRID-04 | FAB → `/incident/new` · row.open → `/incident/{id}` · banner.vis / row.chat / nav.map = peer nav | nav |
| AC-GRID-05 | Phone list chips — **không** bắt buộc LinErpListFilterBar / DES-GRID-* Kind B | N/A desktop HARD |

## 4. Form / Create AC (INC-N)

| AC id | Rule | Pass |
|-------|------|------|
| AC-CREATE-01 | LookupGrid asset-types → AssetLabel/Title · Segment kind Hư/Mất/Hỏng → IncidentType · severity LOOKUP_STATIC · Description textarea | useFormOptions |
| AC-CREATE-02 | Checklist CheckboxGroup **local** by asset → fold Description · **không** API checklist mới (UNCLEAR-CHK-01) | GAP-CHK |
| AC-CREATE-03 | PhotoRow uploads/files · Detect POST ai-vision/detect chỉ khi ảnh + GPS accuracy ≤ 30 m | Live |
| AC-CREATE-04 | sessionStamp từ GET patrol/sessions · empty session → toast · chặn Route bind · **cấm** bịa session | UNCLEAR-SESS |
| AC-CREATE-05 | GPS HARD: deny → disable Create + Detect + geo capture · **cấm** fake lat/lng | GPS |
| AC-CREATE-06 | POST create: Title · RouteName · IncidentType · Status=new · RequestedAt · optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · HasGps=true khi có fix · **không** cột Lat (UNCLEAR-PGC-BE-01) | Live body |
| AC-CREATE-07 | draftOffline = peer `web-rmms-offline` local queue · **không** invent OfflineQueueController | peer |

## 5. Detail AC (INC-D)

| AC id | Rule | Pass |
|-------|------|------|
| AC-DETAIL-01 | GET `{id}` RO: Code · Severity · Status · Title · RouteName · KmStart · HasGps · **cấm** invent Lat/Lng | Live |
| AC-DETAIL-02 | Close: POST `…/{id}/close` · Note optional (empty OK) · toast ok/fail · back list | Live |
| AC-DETAIL-03 | nav.estimate / nav.map = peer only | peer |

## 6. Leave / Out of scope

| Leave | Note |
|-------|------|
| Me* · feedback · cam-view | Out P1 |
| journal / kết ca / tồn tại / tần suất (B–E) | Out pack |
| invent controller/path theo slug `web-rmms-incident` | SA cite Live Incident\* |
| ERP.* / web-bff client base | HARD cấm |
| iOS/Android native edit | Web Mobile MFE only |
| Primary WO CRUD / estimate full | Peer INC-E · không gộp |
| Demo-json / fake GPS / itemsOrDemo | HARD cấm |
| Desktop Kind B grid primary | N/A phone |

## 7. FormMode ↔ API

| Mode | API | Notes |
|------|-----|-------|
| List | `GET incident/incidents` | filters · pageSize=50 |
| Create | `POST incident/incidents` | HasGps · no Lat column |
| Detail | `GET incident/incidents/{id}` | RO |
| Close | `POST incident/incidents/{id}/close` | Note optional |
| Session | `GET patrol/sessions` | create stamp |
| Asset | `GET integration/asset-types` | pick |
| Detect/Upload | `POST ai-vision/uploads` · detect · `files/*` | peer photo-geo |

App base: `{BffBase}/mobile-bff/api/v1`. SA confirm DTO Live · DOMAIN-MAP row (UNCLEAR-DOMAIN-MAP-INC).

## 8. UNCLEAR → handoff

| id | Owner | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-INC | SA | Thêm row `web-rmms-incident` → Incident (+ cite) · MFE `/web-rmms-incident` |
| UNCLEAR-CHK-01 | Design (+ Dev) | Taxonomy checklist local · không API mới |
| UNCLEAR-PGC-BE-01 | SA | Cite CreateIncidentRequest · HasGps only |
| UNCLEAR-PEER-VIS | Design | Peer nav OK · không gộp WO CRUD primary |
| UNCLEAR-STD-NEST | Design/Dev | Mount list + nested `/new` `/:id` trên Mobile MFE |
| UNCLEAR-SESS | Dev/QA | Empty sessions toast · cấm itemsOrDemo |

## 9. Handoff Design

| Packet | Value |
|--------|-------|
| zones | INC-L · INC-N · INC-D (+ peer V/C/E nav) |
| phone | max-width 430 · Android 1-1 `#sc-incident-list` / `#sc-inc-form` / detail |
| controlHint | Copy inventory từ analy control-hint |
| reviewUrl | Design chốt prototype |
| packKind | `list` confirmed |
| GPS | deny gate Create/Detect |
| labels | useFormOptions only |

## 10. Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:665f3697a399a948edb0ab14da5fc13716b477aa84b0b8e43f6ca33eb7216d2d` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T04:00:00.000Z` · `autoApprove=ON`
