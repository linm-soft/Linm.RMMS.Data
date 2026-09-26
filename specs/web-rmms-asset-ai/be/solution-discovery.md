# SA — Solution — web-rmms-asset-ai

> Status: **confirmed** · autoApprove ON · task `task_38806eff` · 2026-09-25T16:20:00.000Z  
> **Cấm** ERP.* · **cấm** invent AssetAiController · **cấm** auto-confirm trên detect · **cấm** fake GPS · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** Web BFF base từ Mobile MFE.

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI và HITL |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / `assetAi.*` |
| domain | **AiVision** (`ai-vision`) · cite **Asset** (confirm side-effect) · **Integration** (routes) · **Patrol** (sessions prefill) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-ai` → **AiVision** / `ai-vision` |
| Rationale | Detect + uploads + candidates + HITL confirm/dismiss thuộc AiVision · confirm side-effect tạo Asset `source=ai` · lookups cite Integration · optional session prefill cite Patrol — **không** domain AssetAi mới |
| Cite peers | Hub back (`web-rmms-asset-hub`) · peer web `ai-asset-detect` · Integration `road-routes/search` · Patrol `sessions` · Asset on confirm only |
| API folder | **reuse** AiVision `uploads` · `detect-assets` · `asset-candidates` · Integration · Patrol — **no new** AssetAi controller |
| **Cấm** | invent `asset-ai/*` · invent controller · auto-confirm trên detect · ERP.* · Web BFF base · gộp collect/adjust/list · `mock://` ImageUrl · fake GPS |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-ai` | AiVision | `ai-vision` · Live uploads+detect-assets+candidates nearby/confirm/dismiss · cite Asset/Integration/Patrol · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-ai` · **cấm** invent AssetAiController · **cấm** auto-confirm |

→ resolves **UNCLEAR-DOMAIN-MAP-AAI**.

## 2. FormMode ↔ API

Two surfaces (same slug · Design HITL in-scope): **Detect** (Create Draft) · **HITL** (Confirm|Dismiss). Session required. GPS Acc≤30 gates detect.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AA-00 chrome | page shell | — | — | phone ≤430 |
| AA-01 navBack | Button/Nav | — | nav Hub `/asset` | peer hub · DES-LEAVE if dirty |
| AA-02 title | Text RO | — | — | `assetAi.title` / useFormOptions |
| AA-03 photo | PhotoRow* | `POST ai-vision/uploads/init` + PUT | `ImageUrl` | Live FileService · **cấm** mock:// |
| AA-04 gps | Text RO* | `navigator.geolocation` | `Lat`/`Lng`/`AccuracyM` | Acc≤30 · deny/poor blocks detect · **cấm** fake/type-in/0,0 |
| AA-05 route | Select/Search* | `GET integration/road-routes/search` | `RouteId` | catalog road-route |
| AA-05b prefill | Hidden | `GET patrol/sessions` | RouteId opt | cite Patrol |
| AA-06 trip | Select opt | `GET patrol/sessions` | `PatrolTripId` | optional |
| AA-07 nearby | Alert | `GET ai-vision/asset-candidates/nearby` | — | optional warn |
| AA-08 detect | Button* | `POST ai-vision/detect-assets` | DetectAssetsRequest | → Draft · **cấm** auto-confirm · nav HITL |
| AA-09 cancel | Button/Nav | — | `/asset` | DES-LEAVE discard in-app |
| AA-10…11 hitl fields | Text/Select RO | candidate GetById | bind Draft | score SHOW RO `%` · no gate (Design) |
| AA-12 pin | MapPin | local drag | Lat/Lng object | **no** new map endpoint |
| AA-13 confirm | Button | `POST ai-vision/asset-candidates/{id}/confirm` | → Asset source=ai | toast · back Hub |
| AA-14 dismiss | Button | `POST ai-vision/asset-candidates/{id}/dismiss` | false positive | toast · back Hub |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell owns login |

### Live endpoints (HARD — from real-data §B + context)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| POST | `mobile-bff/api/v1/ai-vision/uploads/init` (+ PUT object) | AiVision / FileService | `ImageUrl` → AA-03 | **Live** |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | Route → AA-05 | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | prefill Route / trip AA-05b·06 | **Live** cite |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates/nearby` | AiVision | warn → AA-07 | **Live** opt |
| POST | `mobile-bff/api/v1/ai-vision/detect-assets` | AiVision | Draft candidates → HITL | **Live** |
| GET | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}` | AiVision | HITL bind AA-10…12 | **Live** cite |
| POST | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}/confirm` | AiVision→Asset | toast · Hub | **Live** |
| POST | `mobile-bff/api/v1/ai-vision/asset-candidates/{id}/dismiss` | AiVision | toast · Hub | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Detect body: `ImageUrl*` · `Lat*`/`Lng*` · `AccuracyM` · `RouteId*` · `PatrolTripId?` — server rejects 0,0.
- **API Mới:** none · **migration:** none · **entity mới:** none.
- Labels: `useFormOptions()` / LinmCopy `assetAi.*` · **cấm** hardcode VN.
- Score: SHOW RO `%` · **no** confirm gate (Design UNCLEAR-SCORE-01).

## 3. BFF vs API

| Layer | Role for Asset AI |
|-------|-------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy ai-vision / integration / patrol · auth + files rewrite |
| RMMS.Service.Api | AiVision uploads/detect/candidates · Integration routes · Patrol sessions — **no new** AssetAi controller |
| web-bff | cite only · **not** Mobile client base |
| Asset domain | side-effect on **confirm** only (`source=ai`) — **not** FE Asset CRUD on this slug |

Fail: 503/network → toast + retry · validation → field errors — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse AiVision candidates + Asset on confirm) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Upload | Live init+PUT via Mobile.Bff FileService — **cấm** invent media controller |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AA-00…09 | Detect page · phone 430 · Android 1-1 |
| AA-10…14 | HITL page · same slug · score SHOW RO `%` · pin local |
| Required detect | photo* · GPS Acc≤30 · RouteId* · trip opt · nearby opt |
| HITL | confirm + dismiss · **cấm** auto-confirm on detect |
| REMOVED | `me*` · feedback · cam-view · collect/adjust/list · Field a…e |
| DES-GRID / LinErpListFilterBar | **N/A** phone |
| DES-LEAVE | in-app discard · **cấm** native `confirm` |
| Route | `mfeStdRoute=/web-rmms-asset-ai` · native cite `/asset/ai` + `/asset/ai/hitl/{id}` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-HITL-SPLIT | **resolved Design** — HITL in-scope this slug |
| UNCLEAR-SCORE-01 | **resolved Design** — SHOW score RO `%` · no gate |
| UNCLEAR-STD-ROUTE | **resolved Design** — `/web-rmms-asset-ai` · alias `/asset/ai` (+ HITL) if shell |

## 7. Handoff

| Next | Need |
|------|------|
| team-lead | Tasks Detect page + HITL page wire · Live endpoints above · no invent |
| Dev | Mobile MFE only · `/agent-dev` · **cấm** native iOS/Android copy edit |
| QA | GPS deny/poor · upload · detect · confirm · dismiss · phone 430 · no me · no Web BFF · no auto-confirm |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T16:20:00.000Z`
