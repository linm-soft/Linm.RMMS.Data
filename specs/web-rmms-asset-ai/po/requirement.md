# PO requirement — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` (**confirm**) |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |
| writtenAt | `2026-09-27T10:05:00.000Z` |
| taskId | `task_48d759a3` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/tai-san/ai` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · domain **AiVision** (+cite Asset/Integration/Patrol) · **cấm ERP.*** |
| formPattern | Mobile full (phone max-width 430) · detect + HITL · Pattern B validate · SearchInput route · **không** ERP Modal/Slideout · master no demo · labels `useFormOptions()` / copy keys |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · AssetAiDetectPage |
| prior | data_analy `confirmed` · control-hint + real-data §A+§B PASS · hash skip · **cấm** re-scan demo |

## 1. Goal

**edit_page** trên page đã ship: patch UX detect (Pattern B + SearchInput route) — **không** typed CRUD `new_page` · **không** thêm tab/route/icon. Hai surface phone 1-1 Android giữ nguyên: (1) **Camera AI** — photo · GPS · tuyến · `POST detect-assets` → Draft; (2) **HITL** — confirm / dismiss. Entry Hub tile «Camera AI». **Cấm** auto-confirm. Tab `me*` / feedback / cam-view / collect / adjust **REMOVED**.

## 2. Personas

| Persona | Zones | Note |
|---------|-------|------|
| NV tuần đường (BDTX) | AA-00…14 | Prefill tuyến từ ca Đang tuần |
| NV tuần kiểm (Khu/VP) | AA-00…14 | Chọn tuyến SearchInput nếu không có ca |

## 3. Screens / zones

| Id | Zone | AC summary |
|----|------|------------|
| AA-00 | phone frame | ≤430px · Android 1-1 · center desktop review |
| AA-01 | top bar | Back → Hub `/asset` |
| AA-02 | title | Camera AI · `assetAi.title` |
| AA-03 | photo | required · uploads init+PUT · capture=environment · **cấm** `mock://` |
| AA-04 | gpsPin | RO Lat/Lng/Acc · geolocation · Acc≤30 validate **on detect click** · deny **không** khóa CTA trước |
| AA-05 | route | required **SearchInput** · `RouteId` · `road-routes/search` · **cấm** seed · miss → `--` |
| AA-06 | patrolTrip | optional `PatrolTripId` · sessions |
| AA-07 | nearbyWarn | optional nearby warn |
| AA-08 | detect CTA | Pattern B · chỉ `disabled` lúc `detecting` · banner thiếu field/GPS khi bấm · nav HITL |
| AA-09 | cancel | → `/asset` |
| AA-10 | HITL shell | `/asset/ai/hitl/{id}` Draft |
| AA-11 | HITL fields | class · route · km · score (Design chốt %) |
| AA-12 | HITL pin | drag local · no new API |
| AA-13 | confirm | `POST …/confirm` · busy-only · toast · Hub |
| AA-14 | dismiss | `POST …/dismiss` · busy-only · toast · Hub |

## 4. Acceptance criteria

### 4.1 Detect — Delta Current→New (AA-00…09)

| ID | AC |
|----|----|
| AC-DET-01 | Photo required; upload Live init+PUT → `ImageUrl` thật · **cấm** `mock://` |
| AC-DET-02 | GPS `navigator.geolocation`; Acc > 30 / deny → **báo khi bấm** AA-08 (banner) · **cấm** khóa CTA trước · **cấm** fake / type-in / 0,0 |
| AC-DET-03 | `RouteId` required via **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · live `GET integration/road-routes/search` · **cấm** ROAD_ROUTE_SEED · mã thiếu → `--` |
| AC-DET-04 | `PatrolTripId` optional từ `GET patrol/sessions` |
| AC-DET-05 | Optional nearby `GET ai-vision/asset-candidates/nearby` warn dedupe |
| AC-DET-06 | Detect CTA `POST ai-vision/detect-assets` · success → Draft + nav HITL |
| AC-DET-07 | **Pattern B:** AA-08 luôn bật khi form sẵn sàng · chỉ `disabled` lúc `detecting` · drop `disabled={!canDetect}` · `validationAttempted` · banner `string[]` + inline + scroll first · **cấm** một `alert.warning` / `window.alert` |
| AC-DET-08 | **Cấm** auto-confirm / auto vào sổ trên detect |
| AC-DET-09 | Cancel / Back → Hub `/asset` |
| AC-DET-10 | Labels `useFormOptions()` / `assetAi.*` — **cấm** hardcode VN |
| AC-DET-11 | Client **chỉ** `mobileApiBase()` Mobile.Bff `:5202` — **cấm** Web BFF base |
| AC-DET-12 | **Cấm** Excel / toolbar export · **cấm** thêm tab/route/icon · align cuối `/align-mobile-to-mfe` |

### 4.2 HITL (AA-10…14) — keep

| ID | AC |
|----|----|
| AC-HITL-01 | Shell bind Draft candidate GetById |
| AC-HITL-02 | Fields RO/bind class · route · km · score (Design — UNCLEAR-SCORE-01) |
| AC-HITL-03 | Map pin drag local only — **không** invent GPS/map endpoint |
| AC-HITL-04 | Confirm → `POST …/confirm` · `disabled={busy}` only · toast · Hub |
| AC-HITL-05 | Dismiss → `POST …/dismiss` · `disabled={busy}` only · toast · Hub |
| AC-HITL-06 | HITL in-scope slug này — follow UNCLEAR-HITL-SPLIT = gộp |

### 4.3 Grid / filter (packKind=list)

| ID | AC |
|----|----|
| AC-GRID-01 | **N/A** — phone · **không** LinErpListFilterBar / DES-GRID Kind B |
| AC-GRID-02 | Form full-page mobile · **cấm** ERP Modal/Slideout |
| AC-GRID-03 | Export **N/A** · **cấm** Excel |

### 4.4 Leave / out-of-scope (HARD)

| Leave | Owner |
|-------|-------|
| `/me*` · feedback · cam-view · collect · adjust in slug | REMOVED / peer |
| Collect manual · adjust · list/detail deep | peer Asset |
| Field 2-door · journal / kết ca / tồn tại / tần suất | shell / mobile-a…e |
| invent AssetAiController · `mock://` · fake GPS · ERP.* · Web BFF base · ROAD_ROUTE_SEED · `disabled={!canDetect}` · typed CRUD `new_page` · auto-confirm · Excel | **cấm** |
| iOS/Android native code | **cấm** sửa |
| DOMAIN-MAP row slug | SA (UNCLEAR-DOMAIN-MAP-AAI) |
| Score % ship | Design (UNCLEAR-SCORE-01) |
| Re-scan demo / crawl CTX | **cấm** (hash skip · GAP-PO-DEMO-RESCAN-01) |

## 5. DoD PO

- [x] packKind=`list` confirm · changeScope=`edit_page`
- [x] Screens AA-00…14 + Leave
- [x] Delta AC: Pattern B · SearchInput route · GPS on-click · no auto-confirm · no Excel · no new_page
- [x] Grid AC = N/A phone
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip)
- [x] Handoff Design · compact written
- [x] mfeStdRoute=`/tai-san/ai` (UNCLEAR-STD-ROUTE resolved)

## 6. Open questions (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | SA thêm/confirm DOMAIN-MAP row AiVision |
| UNCLEAR-HITL-SPLIT | Follow SCREENS — HITL gộp slug này |
| UNCLEAR-SCORE-01 | Design chốt % score ship/hide |
| ~~UNCLEAR-STD-ROUTE~~ | **resolved** · `/tai-san/ai` |

## 7. Handoff Design

| Need | |
|------|--|
| Giữ prototype/reviewUrl · confirm zones AA-* + Pattern B validate UX |
| Chốt score visibility · control-map từ controlHint |
| **Cấm** re-scan demo · **cấm** invent desktop grid · **cấm** new tab/route |
| peerStdUrl `http://localhost:9301/tai-san/ai` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T10:05:00.000Z` · `taskId=task_48d759a3`
