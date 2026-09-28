# Data-analy — controlHint — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| title | Camera AI và HITL |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` |
| analyzedAt | `2026-09-27T09:45:09.284Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-ai-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **AiVision** · cite Asset/Integration/Patrol · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/tai-san/ai` |
| mfeStdRoute | `/tai-san/ai` |
| nativeRouteCite | SCREENS `/asset/ai` + `/asset/ai/hitl/{id}` |
| taskId | `task_38801b3b` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · detect + HITL · Pattern B validate · SearchInput route · **không** ERP Modal/Slideout · master = no demo · `/erp-form-context` labels |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-asset-ai` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone form vào MFE desktop · **cấm** iOS/Android native · **cấm** typed CRUD `new_page`.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-ai.md` | edit_page · hash `e223304b…` |
| Delta plan | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B + SearchInput · AssetAiDetectPage |
| Code Current | `src/pages/WebRmmsAssetAi/AssetAiDetectPage.tsx` · HitlPage | shipped AA-* |
| Peer CTX | `docs/context/features/asset-ai.md` | DES-MOB-ASSET-AI |
| Peer web | `docs/context/features/ai-asset-detect.md` | candidates confirm/dismiss |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/ai` + HITL |
| Parent | `docs/context/features/web-rmms-asset-hub.md` | tile → AI |
| DOMAIN-MAP | AiVision + cite Asset/Integration/Patrol | SA row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## § Delta — Current vs New (HARD)

| | Current (shipped) | New (edit_page · this task) |
|--|-------------------|-----------------------------|
| changeScope | prior analy `new_page` · page đã live | **`edit_page`** · **cấm** typed CRUD `new_page` |
| Route URL | STATUS `/tai-san/ai` · old analy `/web-rmms-asset-ai` | **SSOT** `mfeStdRoute=/tai-san/ai` · alias `/asset/ai` |
| AA-08 CTA | `disabled={!canDetect}` (photo+route+gpsOk+imageUrl) | **Pattern B:** luôn bật khi form sẵn sàng · chỉ `disabled` lúc `detecting` · thiếu field/GPS → bấm mới banner |
| Validate UX | `showErrors` set on submit path | `validationAttempted` · banner `string[]` + inline + scroll first · **cấm** một `alert.warning` |
| AA-04 GPS | Acc≤30 / deny **khóa** CTA trước | deny/poor **không** khóa nút · báo khi bấm detect |
| AA-05 route | `<input type=search>` + `<select>` options local | **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · live `road-routes/search` · **cấm** seed · mã thiếu → `--` |
| AA-03 photo | `capture="environment"` + showErrors | **giữ** |
| Export/toolbar | N/A phone | **cấm** Excel · override “toolbar/export theo pack” = không áp dụng |
| API / zones | AA-00…14 Live AiVision | **giữ** · **không** invent endpoint · **không** thêm tab/route |
| HITL AA-13/14 | `disabled={busy}` | **giữ** (pending only) |
| Align cuối | — | `/align-mobile-to-mfe` · SSOT page MFE · 430px · **cấm** icon mới · mọi call `mobileApiBase()` |

## Screens AI + HITL (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AA-00 | phone | frame ≤430 · Android 1-1 |
| AA-01 | top bar | back → Hub `/asset` |
| AA-02 | title/section | Camera AI copy |
| AA-03 | photo | upload init+PUT · capture=environment · **cấm** `mock://` |
| AA-04 | gpsPin | RO Lat/Lng * · Acc ≤30 · Pattern B gate on click |
| AA-05 | route | SearchInput * RouteId · no seed |
| AA-06 | patrolTrip | optional PatrolTripId |
| AA-07 | nearbyWarn | optional nearby GET |
| AA-08 | primary | Button detect-assets · Pattern B |
| AA-09 | cancel | Button/Nav → `/asset` |
| AA-10 | HITL shell | `/asset/ai/hitl/{id}` |
| AA-11 | HITL fields | class · route · km · score |
| AA-12 | HITL map pin | local drag · no new API |
| AA-13 | confirm | Button confirm · busy only |
| AA-14 | dismiss | Button dismiss · busy only |

**Out:** `/me*` · feedback · cam-view · collect · adjust · list/detail · Field 2-door deep · journal / kết ca / tồn tại / tần suất · invent AssetAiController · auto-confirm · Excel · `disabled={!canDetect}`.

## ControlHint inventory (AI + HITL)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AA-00 | Layout | `max-width: 430px` |
| navBack | AA-01 | Button/Nav | → Hub · `assetAi.nav.back` |
| title | AA-02 | Text RO | `assetAi.title` |
| photo | AA-03 | PhotoRow | required · capture · uploads · **cấm** `mock://` |
| gpsPin | AA-04 | Text RO | Lat/Lng/AccuracyM · geolocation · validate on detect click |
| route | AA-05 | SearchInput | required · RouteId · road-routes/search · no seed · miss → `--` |
| patrolTrip | AA-06 | Select | optional · PatrolTripId · sessions |
| nearbyWarn | AA-07 | Alert/List | optional · nearby · warn dedupe |
| submitDetect | AA-08 | Button | POST detect-assets · Pattern B · then nav HITL |
| cancel | AA-09 | Button/Nav | → `/asset` |
| hitlShell | AA-10 | Layout | Draft candidate detail |
| hitlFields | AA-11 | Text RO / Select | bind AssetCandidate · score Design chốt |
| hitlPin | AA-12 | MapPin | drag local · no endpoint |
| confirm | AA-13 | Button | POST …/confirm |
| dismiss | AA-14 | Button | POST …/dismiss |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone · **không** Kind B desktop grid |
| Form | full-page mobile · **cấm** ERP Modal/Slideout |
| Export | **N/A** · **cấm** Excel |

## GPS

| Màn | Rule |
|-----|------|
| AA-04 · AA-08 | geolocation · Acc > 30 / deny → **báo khi bấm** detect · **cấm** khóa CTA trước · **cấm** fake / type-in / 0,0 |
| AA-12 | pin drag local · **không** invent GPS API |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-AAI | DOMAIN-MAP row slug (SA) | SA thêm/confirm row AiVision |
| UNCLEAR-HITL-SPLIT | peer asset-ai split det-hitl | SCREENS+packet gộp HITL · PO/Design follow |
| UNCLEAR-SCORE-01 | Demo % vs ship hide | Design chốt |
| ~~UNCLEAR-STD-ROUTE~~ | resolved | mfeStdRoute=`/tai-san/ai` · STATUS + paths.ts |

## Handoff

| Role | Dùng |
|------|------|
| PO | § Delta Pattern B + SearchInput · keep AA-* DoD · no new_page · no Excel |
| Design | giữ prototype/reviewUrl · confirm zones AA-* + validate UX |
| SA | DOMAIN-MAP · Mobile.Bff paths · road-routes (đã có) |
| TL/Dev | Patch AssetAiDetectPage only (+ lookups shared) · align-mobile cuối |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T09:45:09.284Z`
