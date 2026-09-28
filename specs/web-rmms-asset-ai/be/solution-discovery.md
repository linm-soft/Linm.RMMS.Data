# SA — Solution — web-rmms-asset-ai

> Status: **confirmed** · autoApprove ON · task `task_a31635c7` · 2026-09-27T10:30:00.000Z  
> **Cấm** ERP.* · **cấm** invent AssetAiController · **cấm** auto-confirm · **cấm** fake GPS · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE · **cấm** ROAD_ROUTE_SEED · **cấm** `disabled={!canDetect}`.

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI và HITL |
| Role | `sa` |
| packKind | `list` |
| changeScope | **edit_page** |
| formPattern | Mobile full ≤430 · Pattern B detect · SearchInput route · HITL busy-only · N/A ERP Modal · useFormOptions / `assetAi.*` |
| domain | **AiVision** (`ai-vision`) · cite **Asset** (confirm) · **Integration** (routes) · **Patrol** (sessions) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/tai-san/ai` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-ai` → **AiVision** / `ai-vision` (**row exists** — DOMAIN-MAP.md) |
| Rationale | Detect + uploads + candidates + HITL confirm/dismiss = AiVision · confirm → Asset `source=ai` · route search = Integration · sessions = Patrol — **không** domain AssetAi mới |
| Cite peers | Hub `/asset` · peer `ai-asset-detect` · Integration `road-routes/search` · Patrol `sessions` |
| API folder | **reuse** Live AiVision / Integration / Patrol — **no new** controller |
| **Cấm** | invent `asset-ai/*` · AssetAiController · auto-confirm · ERP.* · Web BFF base · seed routes · `mock://` · fake GPS |

**DOMAIN-MAP row (confirmed):**

| Feature slug | Domain | kebab |
|--------------|--------|-------|
| `web-rmms-asset-ai` | AiVision | `ai-vision` · Live uploads+detect-assets+candidates nearby/confirm/dismiss · cite Asset/Integration/Patrol · MFE `/web-rmms-asset-ai` · **cấm** invent AssetAiController · **cấm** auto-confirm |

→ **UNCLEAR-DOMAIN-MAP-AAI** resolved (row present · no DOMAIN-MAP edit required this run).

## 2. FormMode ↔ API (edit_page Delta)

Surfaces (same slug · HITL in-scope Design): **Detect** (Draft) · **HITL** (Confirm|Dismiss). Session staff required.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AA-00 chrome | page shell | — | — | phone ≤430 |
| AA-01 navBack | Button/Nav | — | Hub `/asset` | DES-LEAVE if dirty |
| AA-02 title | Text RO | — | — | `assetAi.*` / useFormOptions |
| AA-03 photo | PhotoRow* | `POST ai-vision/uploads/init` + PUT | `ImageUrl` | Live · **cấm** mock:// |
| AA-04 gps | Text RO* | `navigator.geolocation` | Lat/Lng/AccuracyM | **Pattern B:** deny/poor **không** khóa CTA trước · validate Acc≤30 **on click** · **cấm** fake |
| AA-05 route | **SearchInput*** | `GET integration/road-routes/search` | `RouteId` | **cấm** ROAD_ROUTE_SEED · miss → `--` |
| AA-05b prefill | Hidden | `GET patrol/sessions` | RouteId opt | cite Patrol |
| AA-06 trip | Select opt | `GET patrol/sessions` | `PatrolTripId` | optional |
| AA-07 nearby | Alert | `GET ai-vision/asset-candidates/nearby` | — | optional |
| AA-08 detect | Button* | `POST ai-vision/detect-assets` | DetectAssetsRequest | **Pattern B:** disable chỉ `detecting`/`pending` · banner photo+route+GPS on click · **cấm** `!canDetect` · **cấm** auto-confirm → HITL |
| AA-09 cancel | Button/Nav | — | `/asset` | DES-LEAVE discard in-app |
| AA-10…11 hitl | Text/Select RO | candidate GetById | Draft bind | score SHOW RO `%` · no gate |
| AA-12 pin | MapPin | local drag | Lat/Lng | **no** new map API |
| AA-13 confirm | Button | `POST …/asset-candidates/{id}/confirm` | → Asset source=ai | busy-only |
| AA-14 dismiss | Button | `POST …/asset-candidates/{id}/dismiss` | false positive | busy-only |
| Auth | staff | session JWT | guest → login | shell |

### Live endpoints (HARD — real-data §B)

| Method | BFF path (client) | Downstream | Bind | Status |
|--------|-------------------|------------|------|--------|
| POST | `mobile-bff/api/v1/ai-vision/uploads/init` (+ PUT) | AiVision / FileService | ImageUrl AA-03 | **Live** |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | Route AA-05 SearchInput | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | prefill / trip | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates/nearby` | AiVision | AA-07 | **Live** opt |
| POST | `mobile-bff/api/v1/ai-vision/detect-assets` | AiVision | Draft → HITL | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}` | AiVision | HITL AA-10…12 | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}/confirm` | AiVision→Asset | toast · Hub | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}/dismiss` | AiVision | toast · Hub | **Live** |

- Client: `http://localhost:5202` + `mobile-bff/api/v1` — **không** `web-bff`.
- Detect body: `ImageUrl*` · `Lat*`/`Lng*` · `AccuracyM` · `RouteId*` · `PatrolTripId?` — server rejects 0,0.
- **API Mới:** none · **migration:** none · **entity mới:** none · **T-BE:** N/A.
- Labels: `useFormOptions()` / `assetAi.*` · **cấm** hardcode VN.

### Delta vs prior solution (new_page → edit_page)

| Bind | Prior SA | This SA |
|------|----------|---------|
| changeScope | new_page | **edit_page** · patch `AssetAiDetectPage` / Hitl |
| action.detect disable | Acc≤30 + required gate CTA | chỉ `detecting` · Pattern B on click |
| field.route | Select/Search + seed risk | **SearchInput** Live · no seed · miss `--` |
| field.gps | khóa CTA trước Acc≤30 | báo khi bấm · **cấm** khóa trước |
| mfeStdRoute | `/web-rmms-asset-ai` | **`/tai-san/ai`** (STATUS / Design) |
| BE work | Live already | **no** new API / Step 4b |

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy ai-vision / integration / patrol · auth + files |
| RMMS.Service.Api | AiVision + Integration + Patrol — **no** AssetAiController |
| web-bff | cite only · **not** Mobile client base |
| Asset | confirm side-effect only |

Fail: 503 → toast + retry · validation → banner/inline — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables / EF | **none** — reuse AiVision candidates + Asset on confirm |
| Step 4b | **skip** (SA + this feature — Live already) |
| Upload | Live init+PUT Mobile.Bff FileService |

## 5. FE surface (SA contract — Dev implements T-EDIT)

| Zone | Contract |
|------|----------|
| AA-00…09 | Detect · phone 430 · Pattern B + SearchInput |
| AA-10…14 | HITL · score SHOW RO `%` · pin local · busy-only CTA |
| REMOVED | `me*` · feedback · cam-view · collect/adjust · `disabled={!canDetect}` · ROAD_ROUTE_SEED |
| DES-GRID / filterBar | **N/A** phone |
| DES-LEAVE | in-app discard · **cấm** native confirm |
| Route | `mfeStdRoute=/tai-san/ai` · native `/asset/ai` + HITL |
| align | cuối `/align-mobile-to-mfe` · no new tab/route/icon |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | **resolved** — DOMAIN-MAP row AiVision present |
| UNCLEAR-HITL-SPLIT | **resolved Design** — HITL in-scope |
| UNCLEAR-SCORE-01 | **resolved Design** — SHOW score RO `%` · no gate |
| UNCLEAR-STD-ROUTE | **resolved** — `/tai-san/ai` |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | T-EDIT: Pattern B detect validate + SearchInput route · no seed · no BE |
| Dev | patch `AssetAiDetectPage` + lookups · Mobile.Bff only · **cấm** native copy |
| QA | Pattern B CTA enabled · banner missing · SearchInput no seed · GPS deny on click · phone 430 · no Web BFF · no auto-confirm · queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` · `solution_confirm=approve` · `writtenAt=2026-09-27T10:30:00.000Z` · `taskId=task_a31635c7`
