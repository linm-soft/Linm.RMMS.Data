# Design — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c4a5e35d`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** ≤430 · detect + HITL · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| mfeStdRoute | `/web-rmms-asset-ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` · alias nếu shell cần (**UNCLEAR-STD-ROUTE** → **Design chốt** std URL STATUS) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision (+cite Asset/Integration/Patrol) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-ai-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-ai-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · data_analy `confirmed` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T16:10:00.000Z` |
| taskId | `task_c4a5e35d` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent AssetAiController · fake GPS / type-in LatLng / 0,0 · hardcode VN form labels (Dev wire `useFormOptions` / `assetAi.*`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · auto-confirm trên detect · `mock://` ImageUrl · gộp collect/adjust/list/me*/Field a…e vào slug · Web BFF base client.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-ai.md` | Camera AI + HITL |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/ai` + HITL · GPS Acc≤30 |
| CTX-03 | `docs/context/features/asset-ai.md` | peer DES-MOB-ASSET-AI · SCORE gap |
| CTX-04 | `docs/context/features/ai-asset-detect.md` | peer candidates confirm/dismiss |
| CTX-05 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub `/asset` |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-ai-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Detect + HITL AC · GPS · no auto-confirm |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| AI owns | **AA-00…09** Detect · photo upload · GPS Acc≤30 · RouteId · detect-assets → Draft |
| HITL owns | **AA-10…14** · `/asset/ai/hitl/{id}` · confirm + dismiss · pin drag local |
| Peer owns | Hub `/asset` · collect/list/adjust/kcht · GIS · Field a…e · shell TabBar · me* |
| DES-LEAVE | dirty detect form → in-app discard → Hub (**cấm** native `confirm`) |
| Out | `/me*` · feedback · cam-view · collect · adjust · list/detail · Field 2-door · journal/kết ca/tồn tại/tần suất (b–e) · invent AssetAi* · auto-confirm |

### Design chốt (UNCLEAR)

| id | Chốt |
|----|------|
| **UNCLEAR-SCORE-01** | **Ship SHOW** score RO `%` trên AA-11 (bind Draft.score) · **không** gate confirm/dismiss · Dev wire `assetAi.hitl.score` |
| **UNCLEAR-STD-ROUTE** | **Ship** `mfeStdRoute=/web-rmms-asset-ai` · `mfeStdUrl` STATUS · alias SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` nếu shell cần |
| **UNCLEAR-HITL-SPLIT** | HITL **in-scope** slug này (SCREENS + packet) · peer `det-hitl` OUT |
| UNCLEAR-DOMAIN-MAP-AAI | **carry SA** · thêm DOMAIN-MAP row AiVision |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AA-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AA-01** | top bar | Header | navBack → Hub `/asset` · title Camera AI |
| **AA-02** | title/section | Text RO | copy `assetAi.title` |
| **AA-03** | photo | PhotoRow * | uploads init+PUT → `ImageUrl` · **cấm** `mock://` |
| **AA-04** | gpsPin | Text RO * | Lat/Lng/AccuracyM · geolocation · Acc≤30 · deny/poor disables AA-08 |
| **AA-05** | route | Select/Search * | `RouteId` · road-routes/search + sessions prefill |
| **AA-06** | patrolTrip | Select opt | `PatrolTripId` · sessions |
| **AA-07** | nearbyWarn | Alert/List | optional GET nearby · warn dedupe |
| **AA-08** | primary | Button | `POST ai-vision/detect-assets` · then nav HITL · **cấm** auto-confirm |
| **AA-09** | cancel | Button/Nav | → Hub `/asset` |
| **AA-10** | HITL shell | Layout | `/asset/ai/hitl/{id}` · Draft candidate |
| **AA-11** | HITL fields | Text RO / Select | class · route · km · **score % SHOW** |
| **AA-12** | HITL map pin | MapPin | drag local · no new API |
| **AA-13** | confirm | Button | `POST …/confirm` · vào sổ · toast · Hub |
| **AA-14** | dismiss | Button | `POST …/dismiss` · false positive · toast · Hub |

### IA

```
(auth staff) → AA-00 + AA-01 back Hub
  Detect: AA-02 title + AA-03 photo* + AA-04 GPS* (Acc≤30) + AA-05 Route*
        + AA-06 trip? + AA-07 nearby? + AA-08 Detect + AA-09 Cancel
  AA-08 OK → Draft candidate → AA-10 HITL
  HITL: AA-11 fields (score SHOW) + AA-12 pin drag local
        + AA-13 Confirm | AA-14 Dismiss → toast → Hub
(guest) → shell login · không silent empty
**cấm** auto-confirm trên detect
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AA-00 | Layout | * | max-width 430 · center review |
| navBack | AA-01 | Button/Nav | * | → Hub · `assetAi.nav.back` |
| title | AA-02 | Text RO | * | `assetAi.title` |
| photo | AA-03 | PhotoRow | * | uploads init+PUT · `ImageUrl` |
| gpsPin | AA-04 | Text RO | * | Lat/Lng/AccuracyM · Acc≤30 · deny disables AA-08 |
| route | AA-05 | Select/Search | * | `RouteId` · road-routes/search |
| patrolTrip | AA-06 | Select | opt | `PatrolTripId` · sessions |
| nearbyWarn | AA-07 | Alert/List | opt | nearby GET · warn |
| submitDetect | AA-08 | Button | * | `POST detect-assets` · nav HITL |
| cancel | AA-09 | Button/Nav | * | → Hub |
| hitlShell | AA-10 | Layout | * | Draft detail |
| hitlFields | AA-11 | Text/Select RO | * | class · route · km · **score %** |
| hitlPin | AA-12 | MapPin | * | drag local · object Lat/Lng |
| confirm | AA-13 | Button | * | `POST …/confirm` |
| dismiss | AA-14 | Button | * | `POST …/dismiss` |

**Labels:** `useFormOptions()` / `assetAi.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** `navigator.geolocation` · deny / Acc > 30 → **disable** AA-08 · **cấm** fake · **cấm** gõ tay · server reject 0,0.  
**Score:** SHOW RO `%` · không disable confirm.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14 |
| Form | Mobile full · Detect + HITL boards |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-ai` |
| **real_view_parity** | `v1` |

### Wire

```
Detect AA-00…09:
  AA-01 [‹ back] Camera AI
  AA-03 Photo* upload · AA-04 GPS RO Acc≤30 · AA-05 Route* · AA-06 trip?
  AA-07 nearby warn · AA-08 Detect · AA-09 Cancel
HITL AA-10…14:
  AA-11 class/route/km/score% · AA-12 pin drag · AA-13 Confirm · AA-14 Dismiss
Board: Detect GPS OK | GPS deny/poor | Missing required | Nearby warn | HITL draft | Confirm toast | Dismiss toast
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Upload | `POST mobile-bff/api/v1/ai-vision/uploads/init` + PUT object → `ImageUrl` |
| Nearby | `GET mobile-bff/api/v1/ai-vision/asset-candidates/nearby` |
| Detect | `POST mobile-bff/api/v1/ai-vision/detect-assets` → Draft · nav HITL |
| Candidate | GetById bind AA-11 |
| Confirm | `POST …/asset-candidates/{id}/confirm` |
| Dismiss | `POST …/asset-candidates/{id}/dismiss` |
| Routes | `GET mobile-bff/api/v1/integration/road-routes/search` |
| Sessions | `GET mobile-bff/api/v1/patrol/sessions` |
| GPS | `navigator.geolocation` · Lat/Lng/AccuracyM |
| Back / Cancel | nav Hub `/asset` only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base · **cấm ERP.***  
Empty required / GPS deny/poor → disable detect · error/503 → toast in-app · **cấm** `window.alert`.  
Detect success → Draft → HITL · **cấm** auto-confirm.  
Confirm/Dismiss → toast · Hub.  
**Cấm** invent AssetAiController · **cấm** `mock://`.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AA-00…14 | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (in-app confirm · no native) |
| DES-GRID / DES-RPT | **N/A** phone |
| real_view_parity | **v1** |
| Android 1-1 / no me / GPS Acc≤30 / no auto-confirm / score SHOW | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | SA thêm DOMAIN-MAP row `web-rmms-asset-ai` · AiVision + cite Asset/Integration/Patrol |
| UNCLEAR-HITL-SPLIT | **Design chốt** HITL in-scope this slug |
| UNCLEAR-SCORE-01 | **Design chốt** ship SHOW score RO `%` · no gate |
| UNCLEAR-STD-ROUTE | **Design chốt** `mfeStdRoute=/web-rmms-asset-ai` · alias `/asset/ai` + HITL nếu shell |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths · uploads Live · **cấm** invent AssetAiController |
| TL | Tasks detect page + HITL page wire · GPS Acc≤30 · score SHOW |
| Dev | `/agent-dev` · MFE Mobile AI+HITL only · Hub back · no auto-confirm |
| QA | GPS deny/poor · upload · detect · confirm · dismiss · phone 430 · score visible · no me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T16:10:00.000Z` · `design_confirm=approve` · `taskId=task_c4a5e35d`
