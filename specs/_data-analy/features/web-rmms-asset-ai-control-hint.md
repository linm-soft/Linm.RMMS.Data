# Data-analy — controlHint — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-25T15:55:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-ai-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **AiVision** · cite Asset/Integration/Patrol · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| mfeStdRoute | `/web-rmms-asset-ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| taskId | `task_fd6a0724` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · detect + HITL · **không** ERP Modal/Slideout Kind B · master = no demo · load `/erp-form-context` catalog labels |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone form vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-ai.md` | new · written this run |
| Peer CTX | `docs/context/features/asset-ai.md` | DES-MOB-ASSET-AI · detect gaps |
| Peer web | `docs/context/features/ai-asset-detect.md` | candidates confirm/dismiss |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset/ai` + HITL |
| Parent | `docs/context/features/web-rmms-asset-hub.md` | tile → AI |
| DOMAIN-MAP | AiVision + cite Asset/Integration/Patrol | **GAP** slug `web-rmms-asset-ai` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens AI + HITL (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AA-00 | phone | frame ≤430 · Android 1-1 |
| AA-01 | top bar | back → Hub `/asset` |
| AA-02 | title/section | Camera AI copy |
| AA-03 | photo | upload init+PUT → ImageUrl |
| AA-04 | gpsPin | RO Lat/Lng * · Acc ≤30 |
| AA-05 | route | Select/Search * RouteId |
| AA-06 | patrolTrip | optional PatrolTripId |
| AA-07 | nearbyWarn | optional nearby GET |
| AA-08 | primary | Button detect-assets |
| AA-09 | cancel | Button/Nav → `/asset` |
| AA-10 | HITL shell | `/asset/ai/hitl/{id}` |
| AA-11 | HITL fields | class · route · km · score |
| AA-12 | HITL map pin | local drag · no new API |
| AA-13 | confirm | Button confirm |
| AA-14 | dismiss | Button dismiss |

**Out:** `/me*` · feedback · cam-view · collect · adjust · list/detail · Field 2-door deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · invent AssetAiController · auto-confirm trên detect.

## ControlHint inventory (AI + HITL)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AA-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AA-01 | Button/Nav | → Hub · copy `assetAi.nav.back` |
| title | AA-02 | Text RO | copy `assetAi.title` |
| photo | AA-03 | PhotoRow | required · uploads init+PUT · **cấm** `mock://` |
| gpsPin | AA-04 | Text RO | `Lat`/`Lng`/`AccuracyM` · geolocation · deny/poor disables AA-08 |
| route | AA-05 | Select/Search | required · `RouteId` · road-routes/search + sessions |
| patrolTrip | AA-06 | Select | optional · `PatrolTripId` · sessions |
| nearbyWarn | AA-07 | Alert/List | optional · nearby · warn dedupe |
| submitDetect | AA-08 | Button | `POST ai-vision/detect-assets` · then nav HITL |
| cancel | AA-09 | Button/Nav | → `/asset` |
| hitlShell | AA-10 | Layout | Draft candidate detail |
| hitlFields | AA-11 | Text RO / Select | bind AssetCandidate · score Design chốt |
| hitlPin | AA-12 | MapPin | drag local · no endpoint |
| confirm | AA-13 | Button | `POST …/confirm` · vào sổ |
| dismiss | AA-14 | Button | `POST …/dismiss` · false positive |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone surfaces · **không** Kind B desktop grid |
| Form | full-page mobile · **cấm** ERP Modal/Slideout |

## GPS

| Màn | Rule |
|-----|------|
| AA-04 · AA-08 | `navigator.geolocation` · deny / Acc > 30 → **disable** detect · **cấm** fake · **cấm** gõ tay · server reject 0,0 |
| AA-12 | pin drag = object coords local · **không** invent GPS API |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-AAI | DOMAIN-MAP chưa có row `web-rmms-asset-ai` | SA thêm row · domain AiVision · cite Asset/Integration/Patrol |
| UNCLEAR-HITL-SPLIT | Peer `asset-ai` ghi confirm OUT → `det-hitl` | SCREENS + packet title gộp HITL vào slug này · PO/Design follow SCREENS |
| UNCLEAR-SCORE-01 | Demo % vs ship hide | GAP-MOB-ASSET-AI-SCORE-01 · Design chốt |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/ai` vs mfeStdRoute `/web-rmms-asset-ai` | Design/Dev: std URL packet · map alias nếu shell cần |

## Handoff

| Role | Dùng |
|------|------|
| PO | Detect + HITL DoD · GPS Acc≤30 · no auto-confirm · no me · no collect |
| Design | Phone 430 · zones AA-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff paths · uploads Live |
| TL/Dev | Wire Mobile MFE AI+HITL only · peer hub back |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T15:55:00.000Z`
