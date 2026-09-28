# SA — Solution — web-rmms-asset-collect

> Status: **confirmed** · autoApprove ON · task `task_b44df0c1` · 2026-09-27T16:19:21.667Z  
> **Cấm** ERP.* · **cấm** invent CollectController / media POST · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** fake GPS · **cấm** re-scan demo.

| | |
|--|--|
| Feature | `web-rmms-asset-collect` |
| Title | Thêm tài sản thủ công |
| Role | `sa` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile full form ≤430 · Pattern B validate · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / `assetCollect.*` |
| domain | **Asset** (`asset`) · cite **Integration** (types/routes) · **Patrol** (session prefill) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| nativeRouteCite | SCREENS `/asset/collect` (alias · STATUS URL canonical) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · `mobileApiBase()` |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-asset-collect` → **Asset** / `asset` |
| Rationale | Create Live `POST road-assets` Source=`manual` thuộc Asset · lookups cite Integration · optional session prefill cite Patrol — **không** domain Collect mới |
| Cite peers | Hub back (`web-rmms-asset-hub`) · Integration `asset-types` / `road-routes/search` · Patrol `sessions` prefill · **không** GIS CTA P1 |
| API folder | **reuse** Asset `road-assets` (+ init-data) · Integration lookups · Patrol sessions · **no new** Collect controller |
| **Cấm** | invent `asset-collect/*` · invent media upload path · Source=`ai` · ERP.* · Web BFF base từ Mobile MFE · gộp sibling list/hub/ai/adjust |

**DOMAIN-MAP row (keep):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-asset-collect` | Asset | `asset` · Live create `road-assets` Source=manual · cite Integration/Patrol · MFE `Linm.Web.RMMS.Mobile` `/tai-san/thu-thap` · **cấm** invent CollectController/media |

UNCLEAR-DOMAIN-MAP-ACOLLECT = **resolved** (prior).

## 2. FormMode ↔ API

FormMode = **Create** only (full-page phone form · N/A Modal/Slideout). Session required.  
**edit_page delta:** Pattern B — CTA `disabled={saving}` only · validate on submit click · route = SearchInput (no seed).

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| AC-00 chrome | page shell | — | — | phone ≤430 |
| AC-01 navBack | Button/Nav | — | nav Hub `/asset` | peer hub · DES-LEAVE if dirty |
| AC-02 pageTitle | Text RO | — | — | `assetCollect.title` / useFormOptions |
| AC-03 name | Text* | — | `Name` | required · banner on attempt |
| AC-04 type | Select* | `GET integration/asset-types` | `Type` | catalog asset-type |
| AC-05 route | **SearchInput*** | `GET integration/road-routes/search` | `Route` | `ROAD_ROUTE_LOOKUP_CONFIG` · **no** `ROAD_ROUTE_SEED` · empty/error → [] · unknown → `--` |
| AC-05b prefill | Hidden | `GET patrol/sessions` | Route/KmFrom opt | cite Patrol · missing catalog → `--` |
| AC-06 km | Number* / opt | — | `KmFrom`* · `KmTo` | KmFrom required |
| AC-06b status | Select* | `GET asset/road-assets/init-data` | `Status` | resolved prior |
| AC-07 gps | Text RO* | `navigator.geolocation` | `Lat`/`Lng` | **validate-on-submit** · deny → banner · **cấm** fake/type-in · **cấm** lock CTA trước |
| AC-08 photos | PhotoRow | local only | — | **GAP-MOB-ASSET-COLLECT-MEDIA-01** · no POST media · banner if missing on attempt |
| AC-09 submit | Button* | `POST asset/road-assets` | CreateRoadAsset | Source server=`manual` · `disabled={saving}` only |
| AC-10 cancel | Button/Nav | — | `/asset` | DES-LEAVE discard confirm in-app |
| errBanner | Banner | — | string[] | after first submit attempt · name/type/route/km/GPS/photos |
| Auth gate | staff only | session / JWT (shell) | guest → login peer | shell/home owns login |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/asset/road-assets/init-data` | Asset | Status options → AC-06b | **Live** |
| GET | `mobile-bff/api/v1/integration/asset-types` | Integration | Type options → AC-04 | **Live** |
| GET | `mobile-bff/api/v1/integration/road-routes/search` | Integration | Route SearchInput → AC-05 | **Live** |
| GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | optional Route/KmFrom prefill | **Live** cite |
| POST | `mobile-bff/api/v1/asset/road-assets` | Asset | toast `Code` (`TS-yyyyMMdd-nnn`) · back Hub | **Live** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` via `mobileApiBase()` — **không** gọi `web-bff` từ Mobile MFE.
- Body write: `Name` · `Type` · `Route` · `KmFrom` · `KmTo?` · `Status` · `Lat` · `Lng` · Source=`manual` (server).
- **API Mới:** none · **migration:** none · **entity mới:** none · **media POST:** none (GAP).
- users forward: BFF shared only · **không** bind field trên collect.
- Labels: `useFormOptions()` / LinmCopy `assetCollect.*` · **cấm** hardcode VN.

## 3. BFF vs API

| Layer | Role for Collect |
|-------|------------------|
| Mobile.Bff `:5202` | sole FE entry · proxy asset/integration/patrol · auth rewrite |
| RMMS.Service.Api | Asset `road-assets` (+ init-data) · Integration lookups · Patrol sessions — **no new** Collect controller |
| web-bff | cite only · **not** Mobile client base |

Fail: 503/network → toast + retry · validation → banner + field errors — **cấm** mock SSOT · **cấm** `window.alert`.

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
| AC-00…10 · errBanner | Collect form owns · phone 430 · Android icon/layout 1-1 |
| Required | Name* Type* Route* KmFrom* Status* GPS* photos* (local) · KmTo opt |
| Submit enable | authed ∧ !saving ∧ !loading · **remove** `disabled={!canSave}` |
| Route control | SearchInput + shared `ROAD_ROUTE_LOOKUP_CONFIG` · remove seed + QL.22 filter |
| Photos | local preview only · **no** server bind until media GAP closed |
| REMOVED | `me*` · feedback · cam-view · AI/HITL/adjust/list-detail · Excel |
| DES-GRID / LinErpListFilterBar | **N/A** phone form |
| DES-LEAVE | in-app discard confirm · **cấm** native `confirm` |
| Route | `mfeStdRoute=/tai-san/thu-thap` · native cite `/asset/collect` |
| Shared edit | `lookups` seed remove · cite SUBMIT · TL scopes page + shared |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | **resolved** |
| UNCLEAR-STD-ROUTE | **resolved** — `/tai-san/thu-thap` |
| UNCLEAR-STATUS-ANDROID | **resolved** — Status from `GET …/init-data` |
| UNCLEAR-MEDIA-01 | **open GAP** — local photos only · **cấm** invent media path · TL note backlog |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | **Edit tasks only** — Pattern B · SearchInput · no seed · GPS-on-submit · banner · POST Live · photos local GAP · no invent Collect |
| devSlash | `/agent-dev` |
| qa | Banner fields · GPS deny on click · SearchInput no seed · POST Code toast · phone 430 · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `solution_confirm=approve` · `writtenAt=2026-09-27T16:19:21.667Z` · `taskId=task_b44df0c1` · `changeScope=edit_page`
