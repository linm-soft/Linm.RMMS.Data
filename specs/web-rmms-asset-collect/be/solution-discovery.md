# SA — Solution — web-rmms-asset-collect

> Status: **confirmed** · autoApprove ON · task `task_df837304` · 2026-09-25T14:50:00.000Z  
> **Cấm** ERP.* · **cấm** invent CollectController / media POST · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** fake GPS.

| | |
|--|--|
| Feature | `web-rmms-asset-collect` |
| Title | Thêm tài sản thủ công |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full form ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / `assetCollect.*` |
| domain | **Asset** (`asset`) · cite **Integration** (types/routes) · **Patrol** (session prefill) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| nativeRouteCite | SCREENS `/asset/collect` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-collect` → **Asset** / `asset` |
| Rationale | Create Live `POST road-assets` Source=`manual` thuộc Asset · lookups cite Integration · optional session prefill cite Patrol — **không** domain Collect mới |
| Cite peers | Hub back (`web-rmms-asset-hub`) · Integration `asset-types` / `road-routes/search` · Patrol `sessions` prefill · **không** GIS CTA P1 |
| API folder | **reuse** Asset `road-assets` (+ init-data) · Integration lookups · Patrol sessions · **no new** Collect controller |
| **Cấm** | invent `asset-collect/*` · invent media upload path · Source=`ai` · ERP.* · Web BFF base từ Mobile MFE · gộp sibling list/hub/ai/adjust |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-collect` | Asset | `asset` · Live create `road-assets` Source=manual · cite Integration/Patrol · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-asset-collect` · **cấm** invent CollectController/media |

→ resolves **UNCLEAR-DOMAIN-MAP-ACOLLECT**.

## 2. FormMode ↔ API

FormMode = **Create** only (full-page phone form · N/A Modal/Slideout). Session required.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AC-00 chrome | page shell | — | — | phone ≤430 |
| AC-01 navBack | Button/Nav | — | nav Hub `/asset` | peer `web-rmms-asset-hub` · DES-LEAVE if dirty |
| AC-02 pageTitle | Text RO | — | — | `assetCollect.title` / useFormOptions |
| AC-03 name | Text* | — | `Name` | required |
| AC-04 type | Select* | `GET integration/asset-types` | `Type` | catalog asset-type |
| AC-05 route | Select/Search* | `GET integration/road-routes/search` | `Route` | catalog road-route |
| AC-05b prefill | Hidden | `GET patrol/sessions` | Route/KmFrom opt | cite Patrol · không invent session |
| AC-06 km | Number* / opt | — | `KmFrom`* · `KmTo` | KmFrom required |
| AC-06b status | Select* | `GET asset/road-assets/init-data` | `Status` | resolves UNCLEAR-STATUS-ANDROID |
| AC-07 gps | Text RO* | `navigator.geolocation` | `Lat`/`Lng` | deny → disable submit · **cấm** fake/type-in |
| AC-08 photos | PhotoRow | local only | — | **GAP-MOB-ASSET-COLLECT-MEDIA-01** · no POST media |
| AC-09 submit | Button* | `POST asset/road-assets` | CreateRoadAsset | Source server=`manual` · gated GPS+required |
| AC-10 cancel | Button/Nav | — | `/asset` | DES-LEAVE discard confirm in-app |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell/home owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/asset/road-assets/init-data` | Asset | Status options → AC-06b | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | Type options → AC-04 | **Live** |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | Route options → AC-05 | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/KmFrom prefill | **Live** cite |
| POST | `mobile-bff/api/v1/asset/road-assets` | Asset | toast `Code` (`TS-yyyyMMdd-nnn`) · back Hub | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- Body write: `Name` · `Type` · `Route` · `KmFrom` · `KmTo?` · `Status` · `Lat` · `Lng` · Source=`manual` (server).
- **API Mới:** none · **migration:** none · **entity mới:** none · **media POST:** none (GAP).
- Labels: `useFormOptions()` / LinmCopy `assetCollect.*` · **cấm** hardcode VN.
- GPS: device only · deny blocks AC-09.

## 3. BFF vs API

| Layer | Role for Collect |
|-------|------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy asset/integration/patrol · auth rewrite |
| RMMS.Service.Api | Asset `road-assets` (+ init-data) · Integration lookups · Patrol sessions — **no new** Collect controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · validation → field errors — **cấm** mock SSOT · **cấm** `window.alert`.

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse road-assets) |
| EF migration | **skip** (no schema) |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Media | **GAP** — local PhotoRow only · no invent upload endpoint |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| AC-00…10 | Collect form owns · phone 430 · Android icon/layout 1-1 |
| Required | Name* Type* Route* KmFrom* Status* GPS* · KmTo opt |
| Photos | local preview only · **no** server bind until media GAP closed |
| REMOVED | `me*` · feedback · cam-view · AI/HITL/adjust/list-detail · Field a…e |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| DES-LEAVE | in-app discard confirm · **cấm** native `confirm` |
| Route | `mfeStdRoute=/web-rmms-asset-collect` · native cite `/asset/collect` (alias if shell) |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | **resolved** — DOMAIN-MAP row added |
| UNCLEAR-STD-ROUTE | **resolved Design** — `/web-rmms-asset-collect` · alias `/asset/collect` if shell |
| UNCLEAR-STATUS-ANDROID | **resolved** — Status from `GET …/init-data` Select |
| UNCLEAR-MEDIA-01 | **open GAP** — local photos only · **cấm** invent media path · TL note for backlog |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: collect page · form wire · GPS gate · POST create · init-data/status · types/routes · session prefill · photos local GAP · no me · no invent Collect |
| devSlash | `/agent-dev` |
| qa | Required · GPS deny · POST Code toast · phone 430 · no media invent · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `solution_confirm=approve` · `writtenAt=2026-09-25T14:50:00.000Z`
