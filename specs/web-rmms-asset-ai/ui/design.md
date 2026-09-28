# Design — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_6344a6ae`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = **phone** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full** ≤430 · detect + HITL · Pattern B validate · SearchInput route · **không** ERP Modal/Slideout · master = no demo · `/erp-form-context` labels |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/tai-san/ai` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| mfeStdRoute | `/tai-san/ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision (+cite Asset/Integration/Patrol) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-ai-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-ai-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · data_analy `confirmed` · contentHash `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · AssetAiDetectPage |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T10:20:00.000Z` |
| taskId | `task_6344a6ae` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent AssetAiController · fake GPS / type-in LatLng / 0,0 · hardcode VN form labels (Dev wire `useFormOptions` / `assetAi.*`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · auto-confirm trên detect · `mock://` ImageUrl · gộp collect/adjust/list/me*/Field a…e · Web BFF base · `disabled={!canDetect}` · ROAD_ROUTE_SEED · Excel · typed CRUD `new_page`.

## 0. Context / Delta

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-ai.md` | edit_page · Camera AI + HITL |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/ai` + HITL |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B + SearchInput |
| CTX-04 | `docs/context/features/asset-ai.md` | peer DES · SCORE |
| CTX-05 | `docs/context/features/ai-asset-detect.md` | peer candidates |
| CTX-06 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub `/asset` |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-ai-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Pattern B · SearchInput · no Excel |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

### § Delta — Current → New (Design chốt)

| Zone / rule | Current (shipped) | New (edit_page) |
|-------------|-------------------|-----------------|
| changeScope | prior new_page live | **edit_page** · cấm typed CRUD new_page |
| AA-08 CTA | `disabled={!canDetect}` | **Pattern B:** luôn bật khi form sẵn sàng · chỉ `disabled` lúc `detecting` · thiếu field/GPS → bấm mới banner `string[]` + inline + scroll first |
| Validate UX | gate trước click | `validationAttempted` · **cấm** một `alert.warning` / `window.alert` |
| AA-04 GPS | deny/poor khóa CTA | deny/poor **không** khóa nút · báo khi bấm detect · Acc≤30 |
| AA-05 route | select/search local | **SearchInput** · `ROAD_ROUTE_LOOKUP_CONFIG` · live `road-routes/search` · **cấm** seed · mã thiếu → `--` |
| Route URL | old `/web-rmms-asset-ai` | **SSOT** `mfeStdRoute=/tai-san/ai` |
| HITL AA-13/14 | `disabled={busy}` | **giữ** |
| Export | — | **cấm** Excel |
| API / zones | AA-00…14 Live | **giữ** · không invent · không tab/route mới |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| AI owns | **AA-00…09** Detect · photo · GPS · SearchInput RouteId · Pattern B detect → Draft |
| HITL owns | **AA-10…14** · `/asset/ai/hitl/{id}` · confirm + dismiss · pin drag local · score SHOW % |
| Peer owns | Hub `/asset` · collect/list/adjust/kcht · GIS · Field a…e · shell TabBar · me* |
| DES-LEAVE | dirty detect form → in-app discard → Hub (**cấm** native `confirm`) |
| Align cuối | `/align-mobile-to-mfe` · SSOT page MFE · **cấm** icon mới · mọi call `mobileApiBase()` |
| Out | `/me*` · feedback · cam-view · collect · adjust · list/detail · Field 2-door · journal… · invent AssetAi* · auto-confirm · Excel · `disabled={!canDetect}` |

### Design chốt (UNCLEAR)

| id | Chốt |
|----|------|
| **UNCLEAR-SCORE-01** | **Ship SHOW** score RO `%` trên AA-11 (bind Draft.score) · **không** gate confirm/dismiss · Dev wire `assetAi.hitl.score` |
| ~~UNCLEAR-STD-ROUTE~~ | **resolved** · `mfeStdRoute=/tai-san/ai` · alias SCREENS `/asset/ai` + HITL |
| **UNCLEAR-HITL-SPLIT** | HITL **in-scope** slug này (SCREENS + packet) · peer `det-hitl` OUT |
| UNCLEAR-DOMAIN-MAP-AAI | **carry SA** · DOMAIN-MAP row AiVision |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AA-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AA-01** | top bar | Header | navBack → Hub `/asset` · title Camera AI |
| **AA-02** | title/section | Text RO | copy `assetAi.title` |
| **AA-03** | photo | PhotoRow * | uploads init+PUT → `ImageUrl` · capture=environment · **cấm** `mock://` |
| **AA-04** | gpsPin | Text RO * | Lat/Lng/AccuracyM · geolocation · Acc≤30 · Pattern B on click · **cấm** khóa CTA trước |
| **AA-05** | route | **SearchInput** * | `RouteId` · road-routes/search · no seed · miss=`--` |
| **AA-06** | patrolTrip | Select opt | `PatrolTripId` · sessions |
| **AA-07** | nearbyWarn | Alert/List | optional GET nearby · warn dedupe |
| **AA-08** | primary | Button | `POST detect-assets` · Pattern B · then nav HITL · **cấm** auto-confirm |
| **AA-09** | cancel | Button/Nav | → Hub `/asset` |
| **AA-10** | HITL shell | Layout | `/asset/ai/hitl/{id}` · Draft candidate |
| **AA-11** | HITL fields | Text RO / Select | class · route · km · **score % SHOW** |
| **AA-12** | HITL map pin | MapPin | drag local · no new API |
| **AA-13** | confirm | Button | `POST …/confirm` · busy only · toast · Hub |
| **AA-14** | dismiss | Button | `POST …/dismiss` · busy only · toast · Hub |

### IA

```
(auth staff) → AA-00 + AA-01 back Hub
  Detect: AA-02 + AA-03 photo* + AA-04 GPS* + AA-05 SearchInput Route*
        + AA-06 trip? + AA-07 nearby? + AA-08 Detect (Pattern B) + AA-09 Cancel
  AA-08 click thiếu → banner string[] + inline · đủ → Draft → AA-10 HITL
  HITL: AA-11 (score SHOW) + AA-12 pin drag + AA-13 Confirm | AA-14 Dismiss → Hub
(guest) → shell login
**cấm** auto-confirm · **cấm** disabled={!canDetect}
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AA-00 | Layout | * | max-width 430 |
| navBack | AA-01 | Button/Nav | * | → Hub · `assetAi.nav.back` |
| title | AA-02 | Text RO | * | `assetAi.title` |
| photo | AA-03 | PhotoRow | * | uploads · `ImageUrl` · Pattern B on detect click |
| gpsPin | AA-04 | Text RO | * | Lat/Lng/AccuracyM · Acc≤30 · **không** khóa CTA trước |
| route | AA-05 | SearchInput | * | `RouteId` · road-routes/search · no seed · miss=`--` |
| patrolTrip | AA-06 | Select | opt | `PatrolTripId` · sessions |
| nearbyWarn | AA-07 | Alert/List | opt | nearby GET |
| submitDetect | AA-08 | Button | * | Pattern B · chỉ disable khi `detecting` |
| cancel | AA-09 | Button/Nav | * | → Hub |
| hitlShell | AA-10 | Layout | * | Draft detail |
| hitlFields | AA-11 | Text/Select RO | * | class · route · km · **score %** |
| hitlPin | AA-12 | MapPin | * | drag local |
| confirm | AA-13 | Button | * | busy only · confirm |
| dismiss | AA-14 | Button | * | busy only · dismiss |

**Labels:** `useFormOptions()` / `assetAi.*` — prototype nhãn VN review; Dev wire key.  
**GPS:** deny / Acc > 30 → **báo khi bấm** AA-08 · **cấm** fake · **cấm** gõ tay · **cấm** khóa CTA trước.  
**Score:** SHOW RO `%` · không gate confirm.  
**REMOVED:** me* · feedback · cam-view · collect/adjust · Excel · `disabled={!canDetect}`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AA-00…14 |
| Form | Mobile full · Detect Pattern B + HITL · SearchInput AA-05 |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/tai-san/ai` |
| **real_view_parity** | `v1` |

### Wire

```
Detect AA-00…09:
  AA-01 [‹ back] Camera AI
  AA-03 Photo* · AA-04 GPS RO Acc≤30 (no pre-lock CTA)
  AA-05 SearchInput Route* (no seed · miss=--) · AA-06 trip?
  AA-07 nearby? · AA-08 Detect Pattern B · AA-09 Cancel
  AA-08 click missing/GPS → banner string[] + inline (CTA stays enabled until detecting)
HITL AA-10…14:
  AA-11 class/route/km/score% · AA-12 pin drag · AA-13 Confirm · AA-14 Dismiss
Board: Detect GPS OK | GPS deny on-click | Missing on-click | Nearby warn | HITL | Confirm | Dismiss
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Upload | `POST mobile-bff/api/v1/ai-vision/uploads/init` + PUT → `ImageUrl` |
| Nearby | `GET mobile-bff/api/v1/ai-vision/asset-candidates/nearby` |
| Detect | `POST mobile-bff/api/v1/ai-vision/detect-assets` → Draft · nav HITL |
| Candidate | GetById bind AA-11 |
| Confirm | `POST …/asset-candidates/{id}/confirm` |
| Dismiss | `POST …/asset-candidates/{id}/dismiss` |
| Routes | `GET mobile-bff/api/v1/integration/road-routes/search` · SearchInput · no seed |
| Sessions | `GET mobile-bff/api/v1/patrol/sessions` |
| GPS | `navigator.geolocation` · validate on detect click |
| Back / Cancel | nav Hub `/asset` |

**BFF:** Mobile.Bff `:5202` · `mobileApiBase()` · **cấm** Web BFF · **cấm ERP.***  
Empty required / GPS deny/poor → **banner on click** · CTA không khóa trước · error/503 → toast in-app · **cấm** `window.alert`.  
Detect OK → Draft → HITL · **cấm** auto-confirm · **cấm** `mock://` · **cấm** invent AssetAiController.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AA-00…14 | **PASS** |
| DES-B control = controlHint | **PASS** (SearchInput AA-05 · Pattern B AA-08) |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (in-app · no native) |
| DES-GRID / DES-RPT | **N/A** phone |
| real_view_parity | **v1** |
| Pattern B / no canDetect / GPS on-click / score SHOW / no Excel | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-AAI | SA thêm/confirm DOMAIN-MAP row `web-rmms-asset-ai` · AiVision |
| UNCLEAR-HITL-SPLIT | **Design chốt** HITL in-scope this slug |
| UNCLEAR-SCORE-01 | **Design chốt** ship SHOW score RO `%` · no gate |
| ~~UNCLEAR-STD-ROUTE~~ | resolved `/tai-san/ai` |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · BFF road-routes (đã) · **cấm** invent |
| TL | T-EDIT: patch detect validate Pattern B + SearchInput route · no seed |
| Dev | `AssetAiDetectPage` (+ lookups) · drop `!canDetect` · `mobileApiBase` only · align-mobile cuối |
| QA | Pattern B CTA enabled · banner missing · SearchInput no seed · GPS deny on click · phone 430 · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T10:20:00.000Z` · `design_confirm=approve` · `taskId=task_6344a6ae`
