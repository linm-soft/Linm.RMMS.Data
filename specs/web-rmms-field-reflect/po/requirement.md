# PO requirement — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Phản ánh hiện trường |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full (phone max-width 430) · Android 1-1 · **N/A** ERP Modal/Slideout Kind B |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |
| writtenAt | `2026-09-26T03:05:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field-reflect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident + Patrol + Integration + AiVision (+ FileService cite) · Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm ERP.*** |
| prior | data_analy `confirmed` · control-hint + real-data · compact `handoff/data_analy-compact.md` |
| taskId | `task_9730d99f` |
| autoApprove | ON → Design |
| e2eQa | ON (queued `/agent-qa*` — **cấm** E2E ở PO) |

> Analy hash skip · **cấm** re-scan demo. Labels: `useFormOptions()` / copy key · **cấm** hardcode VN form.  
> **Cấm** nhét phone Field form vào MFE desktop · **cấm** iOS/Android native · **cấm** invent `field-reflect/*` API · **cấm** fake GPS / bịa ca · **cấm** web-bff client.

## 1. Goal / DoD

**Goal:** Màn **Phản ánh hiện trường** trong ca tuần (Field): pick loại TS · kind Hư/Mất/Hỏng · checklist local · ảnh (+ optional photo-geo) · GPS chốt · (tuỳ) nhận diện AI · **Tạo vấn đề** `POST incident/incidents` · nháp mất sóng → peer offline.

**DoD (PASS khi):**

1. FR-00 pick gate: LookupGrid `GET integration/asset-types` · chọn loại TS trước form (optional skip nếu Design stamp sẵn).
2. FR-01 form phone ≤430 · Android 1-1 `#sc-field-reflect` intent · kind · checklist · PhotoRow · Detect · sessionStamp · GPS · severity · description · Create / Draft.
3. FR-02 capture overlay: PhotoRow / peer photo-geo · GPS deny gate.
4. GPS HARD: deny → disable Create · Detect · capture geo · **cấm** fake coords.
5. Detect: cần ảnh + GPS accuracy ≤ 30 m · fail → toast · **cấm** fake class.
6. Sessions live-only: `GET patrol/sessions` Đang tuần · empty/fail → toast + chặn gắn Route · **cấm** itemsOrDemo / bịa ca (GAP-MOB-FIELD-SESS-01).
7. Create: `POST incident/incidents` body Live (`Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` + optional Severity/Description/AssetLabel/KmStart/MediaIds/DetectionId · `HasGps=true` khi có fix) · toast ok/fail · **cấm** `window.alert` · **cấm** silent ok.
8. Draft offline: queue peer `web-rmms-offline` · **cấm** fake success · **cấm** invent OfflineQueueController.
9. Labels `useFormOptions` / LinmCopy · **cấm** hardcode VN on form.
10. BFF Mobile only `:5202` · **cấm** web-bff base · **cấm** ERP.* · **cấm** Me* / journal / kết ca / tồn tại / tần suất.

## 2. changeScope / packKind

| | |
|--|--|
| `changeScope` | `new_page` |
| `packKind` | `list` (mobile Field form surface — **không** ERP Kind B desktop list) |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field form |
| Report AC | **N/A** |
| Form AC | **PASS required** — FR-00/01/02 inventory + GPS + Create |

## 3. Screens / zones

| Id | Zone | AC |
|----|------|----|
| FR-00 | `assetPick` LookupGrid | `GET integration/asset-types` · tap → FR-01 stamp AssetLabel/Title · empty → toast |
| FR-01 | Form full | kind Segment · checklist CheckboxGroup local · photos PhotoRow · detect Button · sessionStamp Text RO · gpsLock · severity Select · description Textarea · create primary · draftOffline secondary |
| FR-01 | `emptyNoSession` | no ca Đang tuần → toast · chặn Create gắn Route · **cấm** bịa |
| FR-02 | capture overlay | openCapture từ PhotoRow · GPS deny block geo · peer photo-geo files/* · purpose=`photo-geo-capture` |

**Out (Leave):** Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · cam-patrol finder · invent `field-reflect/*` · ERP.* · iOS/Android native.

## 4. Grid AC (list pack)

| Rule | Verdict |
|------|---------|
| DES-GRID-* / LinErpListFilterBar | **N/A** — không desktop grid |
| FR-00 pick | mobile LookupGrid asset-types · **cấm** ERP list filter bar |
| Empty | asset-types empty → toast; sessions empty → stamp empty + toast |
| Error | API fail → toast · **cấm** `window.alert` |

## 5. Form AC (mobile)

| Control | Rule |
|---------|------|
| kind | Segment 3 Hư/Mất/Hỏng → map `IncidentType` · DES-MOB-FIELD-KIND · LOOKUP_STATIC |
| checklist | local by asset · fold → `Description` · **cấm** invent checklist API (GAP-MOB-FIELD-CHK-01) |
| photos | PhotoRow → FR-02 · uploads `ai-vision/uploads` hoặc `files/init|object|commit` |
| detect | optional · POST `ai-vision/detect` · GPS ≤30 m |
| sessionStamp | Route·Km từ live sessions only |
| gpsLock | `navigator.geolocation` · chip đã chốt · deny → block Create/Detect/geo |
| severity | Select LOOKUP_STATIC |
| description | Textarea · copy placeholder key |
| create | POST `incident/incidents` · Requires GPS when HasGps path · MediaIds bind SA cite (GAP-MOB-FIELD-MEDIA-01) |
| draftOffline | secondary · peer offline queue |
| toasts | ok / fail / gpsDeny · copy keys |

## 6. Leave / boundary

| Leave | Owner |
|-------|-------|
| DOMAIN-MAP row `web-rmms-field-reflect` | SA (UNCLEAR-DOMAIN-MAP-REFLECT) |
| MediaIds / CreateIncidentRequest cite | SA (UNCLEAR-MEDIA-01) |
| Overlay photo-geo vs PhotoRow P1 | Design (UNCLEAR-PGC) · P1 PhotoRow OK |
| Entry TD vs TK hub | 1 route FR-01 · stamp PatrolType từ ca (UNCLEAR-ENTRY) · hub = `web-rmms-field` |
| Offline queue replay | `web-rmms-offline` |
| Journal / kết ca / tồn tại / tần suất | web-rmms-mobile-b…e |
| Native iOS/Android | **out of scope** |

## 7. API / data

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Đang tuần · Route/Km · live-only |
| GET | `integration/asset-types` | pick loại TS |
| POST | `ai-vision/uploads` (+ PUT) | ảnh optional |
| POST | `files/init` · PUT object · POST commit | photo-geo · purpose=`photo-geo-capture` |
| POST | `ai-vision/detect` | optional · Lat/Lng · ≤30 m |
| POST | `incident/incidents` | tạo vấn đề · HasGps khi có fix |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `field-reflect/*`. **Cấm** ERP.*. Demo **N/A**.

## 8. Personas

| Ai | Việc |
|----|------|
| NV tuần đường (BDTX) | Entry cửa Tuần đường → reflect trong ca |
| Cán bộ QLĐB (VP/Khu) | Entry cửa Tuần kiểm → cùng form · stamp `PatrolType` |

## 9. UNCLEAR — PO chốt / handoff

| id | Decision |
|----|----------|
| UNCLEAR-ENTRY | **Chốt:** 1 product route `/field/reflect` · std `/web-rmms-field-reflect` · entry từ hub 2 cửa · stamp PatrolType từ ca live · **cấm** 2 form riêng TD/TK. |
| UNCLEAR-CHK-01 | **Chốt:** checklist taxonomy local by asset (peer asset-kcht) · fold Description · **không** API mới. |
| UNCLEAR-SESS-01 | **Chốt DoD:** live-only sessions · empty+toast · **cấm** itemsOrDemo (Dev enforce). |
| UNCLEAR-PGC | **Handoff Design:** FR-02 peer photo-geo preferred · P1 PhotoRow still OK. |
| UNCLEAR-MEDIA-01 | **Handoff SA:** cite CreateIncidentRequest Live MediaIds/Description bind. |
| UNCLEAR-DOMAIN-MAP-REFLECT | **Handoff SA:** thêm DOMAIN-MAP row slug · Incident (+ Patrol/Integration/AiVision) · MFE `/web-rmms-field-reflect`. **Không** block PO DoR. |

## 10. AC checklist (QA-ready)

- [ ] Phone ≤430 · FR-00 pick · FR-01 form · FR-02 capture
- [ ] GPS deny → Create/Detect/geo disabled · no fake coords
- [ ] Detect accuracy >30 → no POST · toast
- [ ] No session → toast · no fake Route/ca
- [ ] Create Live POST · toast ok/fail · no alert
- [ ] Draft offline queue peer · no fake success
- [ ] Labels useFormOptions · no hardcode VN
- [ ] Mobile.Bff only · no web-bff · no ERP.* · no Me*
- [ ] No invent field-reflect path

## 11. Handoff

| Role | Packet |
|------|--------|
| Design | control-map FR-* · phone 430 · Android 1-1 · prototype + reviewUrl · UNCLEAR-PGC |
| SA | Live cite Incident/Patrol/Integration/AiVision/files · DOMAIN-MAP row · MediaIds · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE · BFF `:5202` · GPS + sessions live-only · T-W3-10 |
| QA | no session · GPS deny · accuracy>30 · offline draft · no fake · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-26T03:05:00.000Z` · `taskId=task_9730d99f`
