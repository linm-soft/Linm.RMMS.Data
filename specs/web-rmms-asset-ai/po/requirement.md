# PO requirement — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` (**confirm**) |
| changeScope | `new_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T16:00:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · domain **AiVision** (+cite Asset/Integration/Patrol) · **cấm ERP.*** |
| formPattern | Mobile full (phone max-width 430) · detect + HITL · **không** ERP Modal/Slideout · master no demo · labels `useFormOptions()` / copy keys |
| prior | data_analy `confirmed` · control-hint + real-data §A+§B PASS · hash skip |

## 1. Goal

Hai surface phone 1-1 Android: (1) **Camera AI** — upload frame · GPS · tuyến · `POST detect-assets` → Draft; (2) **HITL** — `confirm` / `dismiss` trước khi vào sổ. Entry Hub tile «Camera AI». **Cấm** auto-confirm trên detect. Tab `me*` / feedback / cam-view **REMOVED**.

## 2. Personas

| Persona | Zones | Note |
|---------|-------|------|
| NV tuần đường (BDTX) | AA-00…14 | Prefill tuyến từ ca Đang tuần |
| NV tuần kiểm (Khu/VP) | AA-00…14 | Chọn tuyến thủ công nếu không có ca |

## 3. Screens / zones

| Id | Zone | AC summary |
|----|------|------------|
| AA-00 | phone frame | ≤430px · Android icon/layout 1-1 · center desktop review |
| AA-01 | top bar | Back → Hub `/asset` (`web-rmms-asset-hub`) |
| AA-02 | title | Camera AI · copy `assetAi.title` |
| AA-03 | photo | required · uploads init+PUT → `ImageUrl` · **cấm** `mock://` |
| AA-04 | gpsPin | RO Lat/Lng/Acc · geolocation · Acc≤30 |
| AA-05 | route | required Select/Search `RouteId` |
| AA-06 | patrolTrip | optional `PatrolTripId` |
| AA-07 | nearbyWarn | optional nearby warn |
| AA-08 | detect CTA | `POST ai-vision/detect-assets` → nav HITL |
| AA-09 | cancel | → `/asset` |
| AA-10 | HITL shell | `/asset/ai/hitl/{id}` Draft |
| AA-11 | HITL fields | class · route · km · score (Design chốt %) |
| AA-12 | HITL pin | drag local · no new API |
| AA-13 | confirm | `POST …/confirm` · vào sổ · toast · Hub |
| AA-14 | dismiss | `POST …/dismiss` · false positive · toast · Hub |

## 4. Acceptance criteria

### 4.1 Detect (AA-00…09)

| ID | AC |
|----|----|
| AC-DET-01 | Photo required; upload Live `POST ai-vision/uploads/init` + PUT object → `ImageUrl` thật |
| AC-DET-02 | GPS via `navigator.geolocation`; deny hoặc Acc > 30 → **disable** AA-08; **cấm** fake / type-in / 0,0 |
| AC-DET-03 | `RouteId` required (sessions prefill hoặc `GET integration/road-routes/search`) |
| AC-DET-04 | `PatrolTripId` optional từ `GET patrol/sessions` |
| AC-DET-05 | Optional nearby `GET ai-vision/asset-candidates/nearby` warn dedupe |
| AC-DET-06 | Detect CTA gọi `POST ai-vision/detect-assets` body `DetectAssetsRequest`; success → Draft + nav HITL |
| AC-DET-07 | **Cấm** auto-confirm / auto vào sổ trên detect |
| AC-DET-08 | Cancel / Back → Hub `/asset` |
| AC-DET-09 | Labels via `useFormOptions()` / `assetAi.*` — **cấm** hardcode VN |
| AC-DET-10 | Client **chỉ** Mobile.Bff `:5202` `mobile-bff/api/v1` — **cấm** Web BFF base |

### 4.2 HITL (AA-10…14)

| ID | AC |
|----|----|
| AC-HITL-01 | Shell bind Draft candidate GetById |
| AC-HITL-02 | Fields RO/bind class · route · km · score (visibility Design — UNCLEAR-SCORE-01) |
| AC-HITL-03 | Map pin drag local only — **không** invent GPS/map endpoint |
| AC-HITL-04 | Confirm → `POST ai-vision/asset-candidates/{id}/confirm` → Asset source=ai · toast · Hub |
| AC-HITL-05 | Dismiss → `POST …/dismiss` · toast · Hub |
| AC-HITL-06 | HITL in-scope slug này (SCREENS) — follow UNCLEAR-HITL-SPLIT resolve = gộp |

### 4.3 Grid / filter (packKind=list)

| ID | AC |
|----|----|
| AC-GRID-01 | **N/A** — phone surfaces · **không** LinErpListFilterBar / DES-GRID desktop Kind B |
| AC-GRID-02 | Form = full-page mobile · **cấm** ERP Modal/Slideout |

### 4.4 Leave / out-of-scope (HARD)

| Leave | Owner |
|-------|-------|
| `/me*` · me-profile · me-settings · feedback · cam-view | REMOVED / peer |
| Collect manual · adjust · list/detail deep | peer Asset |
| Field 2-door · journal / kết ca / tồn tại / tần suất | shell / `web-rmms-mobile-a`…`e` |
| invent `AssetAiController` / `api/v1/asset-ai` · `mock://` · fake GPS · ERP.* | **cấm** |
| iOS/Android native code | **cấm** sửa |
| DOMAIN-MAP row slug | SA (UNCLEAR-DOMAIN-MAP-AAI) |
| Score % ship | Design (UNCLEAR-SCORE-01) |
| std route alias `/asset/ai` ↔ `/web-rmms-asset-ai` | Design/Dev (UNCLEAR-STD-ROUTE) — ship `mfeStdUrl` |

## 5. DoD PO

- [x] packKind=`list` confirm · changeScope=`new_page`
- [x] Screens AA-00…14 + Leave
- [x] Detect + HITL AC · GPS Acc≤30 · no auto-confirm · no me · no collect
- [x] Grid AC = N/A phone
- [x] Inventory + controlHint + real-data §A+§B reused (hash skip · **cấm** re-scan demo)
- [x] Handoff Design · compact written

## 6. Open questions (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | SA thêm DOMAIN-MAP row `web-rmms-asset-ai` · AiVision |
| UNCLEAR-HITL-SPLIT | Follow SCREENS — HITL in-scope slug này |
| UNCLEAR-SCORE-01 | Design chốt % score ship/hide |
| UNCLEAR-STD-ROUTE | Design/Dev: packet `mfeStdUrl` · alias native cite nếu shell cần |

## 7. Handoff Design

| Need | |
|------|--|
| Prototype phone 430 · zones AA-* · Android 1-1 |
| reviewUrl |
| Chốt score visibility · control-map từ controlHint |
| **Cấm** re-scan demo / invent desktop grid |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T16:00:00.000Z`
