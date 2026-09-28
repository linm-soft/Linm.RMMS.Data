# Data-analy â€” real-data bind â€” web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Pháº£n Ã¡nh hiá»‡n trÆ°á»ng |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_73173396` |
| priorTask | `task_f225c747` (new_page Â· closed) |
| prefix API | `api/v1` Â· resources `incident` Â· `patrol` Â· `integration` Â· `ai-vision` Â· `files` |
| prefix BFF web (cite) | `web-bff/api/v1/{resource}` Â· **khÃ´ng** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` Â· `:5202` Â· cÃ¹ng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· **cáº¥m ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` Â· **cáº¥m** Route mobile-bff trÃªn web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| mfeStdRoute | `/phan-anh` |
| productRoute | `/field/reflect` |
| domain | **Incident** + **Patrol** + **Integration** + **AiVision** (+ FileService cite) |
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T11:42:48.849Z` |
| demo | **N/A** Â· **cáº¥m** demo-json / in-app mock SSOT / fake GPS |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` Â· Pattern B Â· `FieldReflectPage.tsx` |

## Â§ Delta Current vs New (edit_page HARD)

| | Current | New |
|--|---------|-----|
| changeScope | `new_page` Live wire PASS | `edit_page` Â· validate Pattern B only Â· **cáº¥m** typed new_page |
| CTA Detect/Create | `disabled={!canDetect}` / `disabled={!canCreate}` | Chá»‰ `disabled={detecting\|creating}` Â· thiáº¿u phiÃªn/TS/GPS/áº£nh â†’ banner on click |
| Client errors | toast / early return | banner `string[]` + inline + `validationAttempted` Â· API â†’ toast |
| GPS | khÃ³a nÃºt trÆ°á»›c | báº¥m má»›i bÃ¡o Â· váº«n cháº·n POST Acc>30 trong handler |
| Photo | PhotoRow â†’ photo-geo | giá»¯ Â· `capture="environment"` náº¿u file input local |
| Search | N/A reflect | users forward Mobile.Bff (peer) Â· road-routes/search cÃ³ Â· **cáº¥m** seed tuyáº¿n shared |
| BFF base | Mobile.Bff | giá»¯ `mobileApiBase()` / `VITE_MOBILE_API_URL` Â· **cáº¥m** web-bff |
| Align | â€” | `/align-mobile-to-mfe` Â· SSOT `FieldReflectPage` Â· 430px Â· cáº¥m tab/route/icon má»›i |
| API paths | sessions Â· asset-types Â· uploads Â· files Â· detect Â· incidents | **khÃ´ng** invent path Â· **khÃ´ng** ERP.* |

## Â§ Scope

| In | Out |
|----|-----|
| Edit FR-00/01/02 CTA + validate UX | Me tab Â· cam-view Â· feedback |
| Pattern B submit Â· banner thiáº¿u field | invent `field-reflect` controller/path |
| Live sessions Â· asset-types Â· uploads/files Â· detect Â· incidents POST | journal / káº¿t ca / tá»“n táº¡i / táº§n suáº¥t (Bâ€“E) |
| Mobile.Bff proxy only Â· users forward peer | web-bff client Â· ERP.* Â· iOS/Android Â· Excel |

## Â§A â€” Nguá»“n

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-field-reflect.md` | â€” | edit_page delta |
| `submit-validate` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | â€” | Pattern B Â· FieldReflectPage |
| `code` | `FieldReflectPage.tsx` Â· `paths.ts` | â€” | current canDetect/canCreate |
| `peer-context` | `field-reflect.md` Â· `photo-geo-capture.md` Â· `incident-create.md` | â€” | DES + prior GAP closed |
| `plan` | `SCREENS.md` `/field/reflect` Â· overlay photo-geo | â€” | SSOT actions |
| `api-session` | `GET patrol/sessions` Â· Äang tuáº§n | no ca â†’ banner on Create | **cáº¥m** bá»‹a / itemsOrDemo |
| `api-asset-types` | `GET integration/asset-types` | empty pick | toast / banner |
| `api-upload` | `POST ai-vision/uploads` + PUT | â€” | toast fail |
| `api-files` | `files/init` Â· PUT object Â· commit | â€” | peer photo-geo |
| `api-detect` | `POST ai-vision/detect` | optional | fail toast Â· **cáº¥m** fake class |
| `api-incident` | `POST incident/incidents` | â€” | 4xx toast Â· **cáº¥m** silent ok |
| `api-users` | `GET integration/users` | peer forward | reflect khÃ´ng picker |
| `api-routes` | `GET integration/road-routes/search` | peer shared Â· no seed | reflect RO session |
| `domain-map` | Incident Â· Patrol Â· Integration Â· AiVision | â€” | **cáº¥m ERP.*** |
| `geo` | `navigator.geolocation` | deny â†’ banner on click | **cáº¥m** fake lat/lng |
| `offline` | peer `web-rmms-offline` | queue local | **cáº¥m** invent OfflineQueueController |
| `catalog` | useFormOptions + asset-types | â€” | **cáº¥m** hardcode VN form |
| `demo` | â€” | N/A | **cáº¥m** demo SSOT ship |

## Â§B â€” Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| asset.type | loáº¡i TS | LookupGrid/Card | asset-types | `GET â€¦/integration/asset-types` | `AssetLabel` Â· `Title` | peer create | field-reflect |
| kind | loáº¡i hÆ° | Segment 3 | LOOKUP_STATIC | â€” | map â†’ `IncidentType` | peer create | DES-MOB-FIELD-KIND |
| checklist.* | checklist | CheckboxGroup | LOOKUP_STATIC local | â€” | fold â†’ `Description` | GAP-CHK | asset-kcht-32 |
| photos | áº£nh | PhotoRow | files / ai-vision | uploads hoáº·c files/* | `MediaIds` / DetectionId | photo-geo | n/a |
| detect | nháº­n diá»‡n | Button Pattern B | â€” | â€” | POST `ai-vision/detect` | Live | n/a |
| session.route | tuyáº¿n | Text RO | â€” | `GET patrol/sessions` | `RouteName` Â· Km | peer A | n/a |
| session.km | lÃ½ trÃ¬nh | Text RO | â€” | session | `KmStart` display/bind | peer | n/a |
| lat/lng | GPS | GPS | geo | device | HasGps=true Â· detect Lat/Lng | SCREENS | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | gate â‰¤30 detect (handler) | SCREENS | n/a |
| severity | má»©c | Select | LOOKUP_STATIC | â€” | `Severity` | peer create | n/a |
| description | mÃ´ táº£ | Textarea | â€” | â€” | `Description` | Live | n/a |
| validationBanner | lá»—i client | Banner | â€” | â€” | Pattern B string[] | SUBMIT-VALIDATE | n/a |
| status | tráº¡ng thÃ¡i | Hidden/Select | LOOKUP_STATIC | â€” | `Status` = `new` | Live | **cáº¥m** Draft náº¿u BE reject |
| requestedAt | giá» | Hidden | â€” | UTC now | `RequestedAt` | Live | n/a |
| create | táº¡o váº¥n Ä‘á» | Button Pattern B | â€” | â€” | POST `incident/incidents` | Live | n/a |
| draftOffline | nhÃ¡p máº¥t sÃ³ng | Button | â€” | â€” | local queue peer offline | offline | n/a |

**Create body (cite Live / SCREENS):** `Title` Â· `RouteName` Â· `IncidentType` Â· `Status` Â· `RequestedAt` Â· optional `Severity` Â· `Description` Â· `AssetLabel` Â· `KmStart` Â· `MediaIds` Â· `DetectionId` Â· `HasGps=true` khi cÃ³ fix Â· **khÃ´ng** cá»™t Lat trÃªn CreateIncidentRequest (GAP-PGC-BE-01).

**Cáº¥m** ERP.* Â· **cáº¥m** fake GPS Â· **cáº¥m** itemsOrDemo sessions Â· **cáº¥m** invent field-reflect DTO/path Â· **cáº¥m** hardcode VN labels Â· **cáº¥m** khÃ³a CTA vÃ¬ thiáº¿u required.

## Â§C â€” Catalog

| catalogKind | search/list API | seed/import cite | Cáº¥m |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` | CTX + SCREENS + peer | hardcode label VN |
| asset-types | `GET integration/asset-types` | DOMAIN-MAP Integration | invent asset-type trong Incident |
| sessions | `GET patrol/sessions` | Patrol | invent session stub |
| checklist | local by asset code | peer asset-kcht-32 | invent checklist endpoint |
| files | `files/init|object|commit` | FileService via Mobile.Bff | persist full URL |
| road-routes | `GET integration/road-routes/search` | Mobile.Bff cÃ³ | ROAD_ROUTE_SEED / filterSeed |
| users | `GET integration/users` | forward Mobile.Bff náº¿u thiáº¿u | ERP UserSearchInput nguyÃªn báº£n |
| profile | `GET auth/profile` | Auth cite shell | invent user API trong Incident |

## Â§D â€” Map / váº½

| Má»¥c | Ghi |
|-----|-----|
| map | optional HITL pin trong peer photo-geo FR-02 Â· **khÃ´ng** draw GIS CRUD trÃªn FR-01 |
| GPS | point capture Â· Pattern B deny on click Â· detect Acc â‰¤ 30 m in handler |

## Â§E â€” Progress / vÃ²ng Ä‘á»i

| stateField | Nguá»“n | Ai Ä‘á»•i | API | UI |
|------------|-------|--------|-----|-----|
| session.Status | `rmms_patrol_sessions` Live | peer Field A | GET sessions | stamp RO Â· banner náº¿u khÃ´ng Äang tuáº§n |
| incident create | Incident Live | create button | POST incidents | toast ok Â· banner client fail |
| draftOffline | local queue | draft button | peer offline replay | toast draft |
| detection | AiVision Live | detect | POST detect | optional hint row |
| validationAttempted | FE local | first Detect/Create click | â€” | banner + inline |

`progress: reflect pick â†’ form â†’ create|draft` Â· khÃ´ng Ä‘á»•i session Status trÃªn FR-*.

## Â§F â€” Handoff

| Role | Packet |
|------|--------|
| PO | Â§ Delta Pattern B Â· giá»¯ DoD pick+form+create Â· no Me Â· BFF mobile |
| Design | giá»¯ control-map Â· phone 430 Â· reviewUrl Â· delta CTA/banner |
| SA | giá»¯ Live cite Â· users forward peer Â· **cáº¥m** invent path Â· **cáº¥m** ERP.* |
| Dev web mobile | `FieldReflectPage` gates Â· `VITE_MOBILE_API_URL` `:5202` Â· align cuá»‘i |
| QA | nÃºt báº­t Â· banner thiáº¿u field Â· GPS deny on click Â· Acc>30 no POST Â· no web-bff |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-VALIDATE-B-REFLECT | OPEN Â· bá» `disabled={!canDetect\|!canCreate}` Â· Pattern B banner |
| GAP-ALIGN-REFLECT-01 | OPEN Â· end `/align-mobile-to-mfe` Â· SSOT MFE Â· 430px |
| GAP-PGC-BE-01 | deferred Â· HasGps only Â· no MIG |
| GAP-MOB-FIELD-SESS-01 | closed prior Â· live-only sessions Â· giá»¯ |
| GAP-MOB-FIELD-CHK-01 | closed prior Â· checklist local |
| GAP-MOB-FIELD-MEDIA-01 | closed prior Â· MediaIds bind |

## Version meta

`skillVersion=2026.09.05.03` Â· `schemaVersion=2` Â· `contentHash=sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` Â· `rulesVersion=2026.09.25.2` Â· `analyzedAt=2026-09-27T11:42:48.849Z` Â· `changeScope=edit_page` Â· `taskId=task_73173396`
