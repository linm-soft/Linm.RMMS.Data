# PO — Requirement — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| title | Camera tuần |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** Kind B desktop catalog) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · phone `max-width: 430px` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d475fea0` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · source `qldb_implement` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác (**GAP-PKT-ROLE-01**) |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/web-rmms-cam-patrol-{control-hint,real-data}.md` · contentHash `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` · skillVersion `2026.09.05.03` · rulesVersion `2026.09.25.2` · **hash skip** · demo **N/A** · **cấm** re-scan (**GAP-PO-DEMO-RESCAN-01**) |
| `devSlash` | `/agent-dev` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** + **AiVision** + **Incident** · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff client |
| context | `docs/context/features/web-rmms-cam-patrol.md` |
| controlHint | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` |
| screensPlan | `docs/plan/web-rmms-mobile/SCREENS.md` · `/field/cam` |
| peerCtx | `docs/context/features/cam-patrol.md` |
| updatedAt | `2026-09-25T18:20:00.000Z` |
| taskId | `task_d475fea0` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` |

**Cấm:** implement ở role PO · ERP.* · nhét màn vào MFE desktop Asset · iOS/Android native · invent `cam-patrol/*` path · fake GPS / class · hardcode label VN trên form · hiện % score ship · Me tab / cam-view / journal waves B–E · `window.alert` · re-scan demo · clone LinErpListFilterBar · `yarn start:std` / e2e ở PO.

## 1. Goal

Trong ca Field `Đang tuần`: **finder camera + GPS chốt** → `POST ai-vision/detect` (ImageBase64 + Lat/Lng/AccuracyM · Engine=P1) → card phát hiện → **Xác nhận** tạo sự cố (`POST incident/incidents` · DetectionId · HasGps) hoặc **Bỏ qua**. Entry từ hub Field (Tuần đường / Tuần kiểm) — **1 route** CP-01 · stamp `PatrolType` từ ca. Persona: nhân viên Field. **Cấm** gộp Me / feedback / journal / kết ca / tần suất (B–E).

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** (PO confirm) |
| Kind UI | **Phone Field camera full** — **≠** Kind B desktop catalog |
| Grid AC Kind B | **N/A** — `LinErpListFilterBar` / `DES-GRID-*` **cấm** clone |
| Report AC | **N/A** |
| formPattern | Mobile **Full page** CP-01 · copy 1-1 Android · **không** ERP Modal/Slideout |
| typography | label **13** · field ≥**16** · labels qua `useFormOptions()` / copy key |

## 3. changeScope `new_page`

MFE Mobile **chưa** ship `/field/cam` / std `/web-rmms-cam-patrol` — **không** bảng Current vs New. SSOT = CTX + SCREENS + data-analy (hash skip). Demo HTML = **N/A** (prototype cite Design only · **cấm** ship demo SSOT). Design gen prototype phone 430 · zones CP-01 · reviewUrl.

## 4. DoD (đo được)

1. Route std `/web-rmms-cam-patrol` map product `/field/cam` · phone 430 · **cấm** desktop chrome.
2. **CP-01** full: finder + stamp Route/Km/`PatrolType` từ `GET patrol/sessions` ca Đang tuần · GPS chip · Detect · result card · Confirm / Skip.
3. **GPS HARD:** deny **hoặc** accuracy > 30 m → disable Detect + Confirm · toast · **cấm** fake lat/lng.
4. **Frame HARD:** Detect bắt buộc `ImageBase64` thật · fail = toast · **cấm** null heuristic / class giả (GAP-MOB-CAM-FRAME-01/02).
5. Detect: `POST ai-vision/detect` · `Engine=P1` · body ImageBase64 + Lat + Lng + AccuracyM (+ fields SA cite AiVisionOpsController).
6. Result card: kind / surface / actionHint · **cấm** hiện % score ship (GAP-MOB-CAM-SCORE-01).
7. Confirm: `POST incident/incidents` · `DetectionId` · `HasGps=true` · cần GPS OK · toast ok.
8. Skip: dismiss card only · toast skip · **không** POST incident.
9. Empty no session Đang tuần → EmptyState + chặn detect · **cấm** bịa ca.
10. Offline → banner/queue peer `web-rmms-offline` · **cấm** fake success.
11. Labels: `useFormOptions()` · **cấm** hardcode VN form.
12. BE ONLY `Linm.RMMS.WebService` Patrol+AiVision+Incident · BFF ONLY Mobile `:5202` · **cấm ERP.*** · **cấm** invent `cam-patrol` controller · **cấm** web-bff client.
13. Dev (sau): `yarn build` MFE Mobile PASS · **cấm** PO chạy build/e2e/start:std.
14. QA (sau): e2e queued · no session · GPS deny · accuracy>30 · frame fail · no fake coords · no Me routes · live `mfeStdUrl`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/web-rmms-cam-patrol.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` `/field/cam` | screens SSOT |
| CTX-03 | `docs/context/features/cam-patrol.md` | peer DES · GAP FRAME/SCORE |
| CTX-04 | `TASKS.md` T-W3-09 `CamPatrolView` | task cite |
| DEM | — | **N/A** · hash skip · **cấm** crawl DemoRoot |
| DI | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/web-rmms-cam-patrol-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/features/web-rmms-cam-patrol-real-data.md` | §A+§B PASS |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` | web phone |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | Patrol · AiVision · Incident · **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `:5202` | mobile-bff only |
| MAP | `docs/DOMAIN-MAP.md` | Patrol · AiVision · Incident |

## 6. Screens (REQUIRED)

| ID | Route | Pattern | FormMode | Actions | Notes |
|----|-------|---------|----------|---------|-------|
| CP-01 | `/field/cam` · std `/web-rmms-cam-patrol` | **Full page** | Create (detect/confirm) | back · getGps · detect · confirm · skip | Finder + stamp + GPS gate · Dirty detect card → Leave |

**Out:** `/me*` · feedback · `cam-view` · `field-reflect` · journal/kết ca/tần suất (B–E) · asset AI · web `camera-connect`.  
**tabs:** none · **cấm** invent Me tab.  
**`devSlash`:** `/agent-dev`.

## 7. controlHint (PO chốt — copy DA-01)

| uiField | screen | controlHint | Required | Notes |
|---------|--------|-------------|----------|-------|
| screenTitle | CP-01 | Text | * | copy key «Camera tuần» · useFormOptions |
| back | CP-01 | Button/Nav | * | → Field hub (TD / TK entry) |
| finder | CP-01 | CameraViewfinder | * | live stream · FOV DES-MOB-CAM-FINDER |
| stamp.route | CP-01 | Text RO | * | GET sessions Đang tuần · Route |
| stamp.km | CP-01 | Text RO | * | km / lý trình từ ca · **cấm** bịa |
| stamp.patrolType | CP-01 | Text RO / Chip | * | từ ca · entry hub TD vs TK (**DEC-ENTRY**) |
| stamp.gps | CP-01 | GPS | * | lat,lng · ±accuracyM · chip «đã chốt» |
| getGps / lockGps | CP-01 | Button | * | geolocation · deny → block detect/confirm |
| imageBase64 | CP-01 | CameraCapture | * | required detect · **cấm** null ship |
| detect | CP-01 | Button primary | * | POST ai-vision/detect · Engine=P1 |
| detection.kind | CP-01 | Text/Chip | — | class · **không** % score |
| detection.surface | CP-01 | Text | — | loại mặt / hạng mục DTO |
| detection.actionHint | CP-01 | Text | — | copy key sau xác nhận |
| confirm | CP-01 | Button | * | POST incident · DetectionId · HasGps · GPS OK |
| skip | CP-01 | Button secondary | — | dismiss · toast · no POST |
| offlineBanner | CP-01 | Banner | — | peer offline · **cấm** fake ok |
| emptyNoSession | CP-01 | EmptyState | — | no ca → chặn detect |
| toast.* | CP-01 | Toast | — | ok / fail / gpsDeny / skip · **cấm** alert |

## 8. Grid AC / Report AC

| AC | Status |
|----|--------|
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** Kind B |
| Report AC | **N/A** |
| Mobile Field AC | **PASS criteria** §4 DoD · GPS≤30 · frame · no score % · BFF mobile |

## 9. Leave / Dirty

| Screen | Dirty when | Leave |
|--------|------------|-------|
| CP-01 | Result card mở (sau detect, chưa confirm/skip) · hoặc GPS lock in-progress | Confirm Leave → discard card · **không** POST incident · back hub |

## 10. API FormMode ↔ bind (cite Live · SA confirm DTO)

| Action | Method | Path | Body / note |
|--------|--------|------|-------------|
| Load stamp | GET | `patrol/sessions` | filter Đang tuần · Route/Km/PatrolType |
| Detect | POST | `ai-vision/detect` | ImageBase64 · Lat · Lng · AccuracyM · Engine=P1 |
| Detection detail | GET | `ai-vision/detections/{id}` | optional |
| Confirm | POST | `incident/incidents` | DetectionId · HasGps=true |
| Profile | GET | `auth/profile` | optional stamp |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-patrol/*`. Field names exact → SA cite AiVisionOpsController (**DEC-DETECT-DTO**).

## 11. PO decisions (UNCLEAR · autoApprove)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-CAM-FRAME → **DEC-FRAME** | Ship DoD = frame thật (`ImageBase64` non-null) · fail toast · **cấm** fake class / null heuristic | Dev DoD · Design zone capture |
| UNCLEAR-CAM-SCORE → **DEC-SCORE** | **Ẩn** % tin cậy trên ship UI (demo 91% = cite only) | Design control-map |
| UNCLEAR-CAM-ENTRY → **DEC-ENTRY** | **1 route** CP-01 · entry hub TD hoặc TK · stamp `PatrolType` từ ca Đang tuần · **không** 2 màn cam | Design nav |
| UNCLEAR-CAM-DETECT-DTO → **DEC-DETECT-DTO** | PO bắt buộc fields: ImageBase64 · Lat · Lng · AccuracyM · Engine=P1 · DetectionId confirm · HasGps · **không** invent tên field khác — SA cite Live controller | SA |

## 12. Out of scope (HARD)

- Me tab · me-profile · me-settings · feedback · `cam-view`
- journal / kết ca / tồn tại / tần suất (waves B–E)
- invent OfflineQueueController · invent cam-patrol path
- ERP.* · web-bff client · desktop MFE · iOS/Android native
- score % chrome · fake GPS · demo JSON SSOT ship

## 13. Handoff Design

| Field | Value |
|-------|-------|
| next | `/agent-design` (khi tới lượt · autoApprove ON) |
| write | `ui/design.md` + prototype phone 430 + reviewUrl |
| zones | CP-01 · DES-MOB-CAM-FINDER · ẩn score |
| peerStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| compact | `handoff/po-compact.md` |
| cấm | re-scan demo · implement · e2e |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:cd46c9486c0a3fe71165c27906508a1608ba46cca1351fe9df832ab7b2efa68c` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T18:20:00.000Z` · `versionGate=ok`
