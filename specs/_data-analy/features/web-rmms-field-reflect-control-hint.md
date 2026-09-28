# Data-analy â€” controlHint â€” web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| title | Pháº£n Ã¡nh hiá»‡n trÆ°á»ng |
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
| contentHash | `sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` |
| analyzedAt | `2026-09-27T11:42:48.849Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-field-reflect-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` Â· **Incident** + Patrol Â· Integration Â· AiVision Â· FileService cite Â· **cáº¥m ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/phan-anh` |
| mfeStdRoute | `/phan-anh` |
| productRoute | `/field/reflect` |
| taskId | `task_73173396` |
| priorTask | `task_f225c747`â€¦`task_b28df09c` (new_page pipeline PASS) |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full Â· Android 1-1 Â· **khÃ´ng** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` Â· `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` Â· **cáº¥m** web-bff |
| priorPeer | `field-reflect.md` Â· photo-geo Â· incident-create Â· web-rmms-field |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` Â· Pattern B Â· slug row `FieldReflectPage.tsx` |

> Data-analy **Ä‘á» xuáº¥t** controlHint. Design **chá»‘t** control-map + prototype reviewUrl (**giá»¯** artifact sáºµn). SA **cite** Live paths Â· **cáº¥m** invent `field-reflect` controller.  
> NhÃ£n UI: `useFormOptions()` / copy key â€” **cáº¥m** hardcode tiáº¿ng Viá»‡t trÃªn form.  
> **Cáº¥m** tab CÃ¡ nhÃ¢n Â· **cáº¥m** iOS/Android edit Â· **cáº¥m** fake GPS / bá»‹a ca.  
> **Cáº¥m** typed CRUD `new_page` Â· **cáº¥m** toolbar/export Excel (SUBMIT-VALIDATE override).

## Â§ Delta Current vs New (edit_page HARD)

| | Current (shipped MFE) | New (this task) |
|--|----------------------|-----------------|
| changeScope | `new_page` (full pipeline PASS) | `edit_page` Â· NEW AutocodeTask `task_73173396` |
| mfeStdRoute | notes cÅ© `/web-rmms-field-reflect` | **SSOT** `/phan-anh` Â· product `/field/reflect` Â· **cáº¥m** dÃ¹ng path slug task |
| Detect CTA | `disabled={!canDetect}` (authedÂ·onlineÂ·gpsOkÂ·freshÂ·photos) | Pattern B: nÃºt **luÃ´n báº­t** khi idle Â· chá»‰ `disabled={detecting}` Â· thiáº¿u GPS/áº£nh/offline â†’ báº¥m má»›i banner |
| Create CTA | `disabled={!canCreate}` (authedÂ·onlineÂ·gpsOkÂ·sessionÂ·asset) | Pattern B: luÃ´n báº­t khi idle Â· chá»‰ `disabled={creating}` Â· thiáº¿u phiÃªn/TS/GPS â†’ báº¥m má»›i banner |
| Validate UX | toast sá»›m / early return trong `onDetect`/`onCreate` Â· thiáº¿u `validationAttempted` | Láº§n báº¥m Ä‘áº§u set `validationAttempted` Â· banner `string[]` (phiÃªn Â· tÃ i sáº£n Â· GPS Â· áº£nh) + inline Â· **cáº¥m** má»™t `alert.warning` Â· API 4xx â†’ toast |
| GPS gate | KhÃ³a Detect/Create trÆ°á»›c khi Ä‘á»§ fix Â· deny modal sá»›m | Deny / poor: **khÃ´ng** khÃ³a nÃºt Â· báº¥m má»›i bÃ¡o (banner/modal quyá»n) Â· Acc>30 váº«n **khÃ´ng** POST detect trong handler |
| Photo | PhotoRow â†’ `openPhotoGeoCapture` (FR-02) Â· khÃ´ng `<input type="file">` local | Giá»¯ camera shutter peer Â· náº¿u thÃªm file input local â†’ `capture="environment"` |
| Search user/tuyáº¿n | N/A trÃªn reflect (session stamp RO) | Reflect **khÃ´ng** gáº¯n SearchInput users/routes Â· RO session Â· mÃ£ thiáº¿u catalog â†’ `--` (shared `lookups.ts` bá» seed â€” peer forms) |
| BFF | Mobile.Bff live sessions/asset-types/uploads/detect/incidents | Giá»¯ `mobileApiBase()` Â· road-routes/search Ä‘Ã£ cÃ³ Â· users thiáº¿u â†’ forward `GET integration/users` trÃªn Mobile.Bff (peer; reflect khÃ´ng picker) |
| Align cuá»‘i | â€” | `/align-mobile-to-mfe` Â· SSOT = `FieldReflectPage` Â· 430px Â· **cáº¥m** tab/route má»›i Â· **cáº¥m** icon path má»›i Â· **cáº¥m** má»Ÿ prototype android/ios |
| PO/Design/SA artifacts | requirement Â· design Â· prototype Â· solution PASS | **Giá»¯** Â· PO/Design ghi delta validate Â· **khÃ´ng** typed new_page |

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-field-reflect.md` | edit_page Â· hash gate |
| Submit-validate | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B Â· FieldReflectPage row |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/field/reflect` + overlay photo-geo |
| Code | `FieldReflectPage.tsx` Â· `paths.ts` `REFLECT_BASE=/phan-anh` | Current `canDetect`/`canCreate` disable |
| Peer | field-reflect Â· photo-geo Â· incident-create Â· web-rmms-field | DES Â· capture Â· body map Â· hub |
| DOMAIN-MAP | Incident Â· Patrol Â· Integration Â· AiVision | prior SA closed |
| Prototype | prior `ui/prototype/index.html` Â· **khÃ´ng** má»Ÿ android/ios ship | Design giá»¯ Â· align = MFE page |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| FR-00 | pick gate | Grid loáº¡i TS Â· optional trÆ°á»›c form |
| FR-01 | `/field/reflect` Â· std `/phan-anh` | Form pháº£n Ã¡nh Â· kind Â· checklist Â· photo Â· GPS Â· severity Â· desc Â· Create/Draft |
| FR-02 | capture overlay | Photo / photo-geo Â· GPS bÃ¡o khi báº¥m (Pattern B) |

**Out:** Me* Â· feedback Â· cam-view Â· journal/káº¿t ca/tá»“n táº¡i/táº§n suáº¥t (Bâ€“E) Â· invent field-reflect API Â· Excel export Â· new tab/route Â· web-bff client.

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | FR-01 | Text | copy key Â· useFormOptions |
| back | FR-01 | Button/Nav | â†’ pick FR-00 hoáº·c Field hub |
| assetPick | FR-00 | LookupGrid | `GET integration/asset-types` |
| assetCard | FR-01 | Text RO / Card | loáº¡i TS Ä‘Ã£ chá»n Â· thiáº¿u â†’ banner on Create |
| kind | FR-01 | Segment/Pill 3 | HÆ° Â· Máº¥t Â· Há»ng â†’ `IncidentType` |
| checklist | FR-01 | CheckboxGroup | local by asset Â· â†’ `Description` Â· **cáº¥m** invent API |
| photos | FR-01 | PhotoRow | openCapture Â· FR-02 Â· thiáº¿u â†’ banner on Detect |
| detect | FR-01 | Button | Pattern B Â· `disabled` chá»‰ `detecting` Â· POST `ai-vision/detect` |
| detectionHint | FR-01 | Text RO | class tá»« detect Â· optional |
| sessionStamp | FR-01 | Text RO | RouteÂ·Km tá»« `GET patrol/sessions` Â· empty â†’ banner on Create |
| gpsLock | FR-01 | GPS / Button | denyâ†’banner on click Â· **cáº¥m** fake Â· **cáº¥m** khÃ³a CTA trÆ°á»›c |
| severity | FR-01 | Select | LOOKUP_STATIC |
| description | FR-01 | Textarea | copy placeholder key |
| validationBanner | FR-01 | Banner | Pattern B `string[]` Â· phiÃªn Â· TS Â· GPS Â· áº£nh |
| create | FR-01 | Button primary | Pattern B Â· `disabled` chá»‰ `creating` Â· POST `incident/incidents` |
| draftOffline | FR-01 | Button secondary | queue peer offline Â· **cáº¥m** fake success |
| emptyNoSession | FR-01 | EmptyState/Toast | khÃ´ng ca Â· **cáº¥m** bá»‹a |
| toast.ok / fail / gpsDeny | FR-01 | Toast | API/network Â· **cáº¥m** `window.alert` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** â€” phone Field form |
| FR-00 pick | mobile grid asset-types Â· **cáº¥m** ERP list filter bar |
| toolbar/export | **N/A** â€” SUBMIT-VALIDATE override Â· **cáº¥m** Excel |

## GPS

| MÃ n | Rule |
|-----|------|
| FR-01 / FR-02 | Pattern B: deny **khÃ´ng** khÃ³a nÃºt Â· báº¥m má»›i bÃ¡o Â· **cáº¥m** fake |
| Detect | accuracy > 30 m â†’ khÃ´ng POST detect (handler) Â· nÃºt váº«n báº­t |

## API (cite Live â€” SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions` | ca Äang tuáº§n Â· Route/Km |
| GET | `integration/asset-types` | pick loáº¡i TS |
| POST | `ai-vision/uploads` (+ PUT) | áº£nh optional |
| POST | `files/init` Â· PUT object Â· POST commit | photo-geo Â· purpose=`photo-geo-capture` |
| POST | `ai-vision/detect` | optional nháº­n diá»‡n |
| POST | `incident/incidents` | táº¡o váº¥n Ä‘á» Â· map Ghi sá»± cá»‘ |
| GET | `integration/road-routes/search` | peer shared Â· Ä‘Ã£ cÃ³ Mobile.Bff |
| GET | `integration/users` | peer forward náº¿u thiáº¿u trÃªn Mobile.Bff Â· reflect khÃ´ng picker |

App base: `{BffBase}/mobile-bff/api/v1`. **Cáº¥m** invent `field-reflect/*`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-VALIDATE-B | Current `disabled={!canDetect\|!canCreate}` lá»‡ch Pattern B | Dev bá» gate disable Â· banner on click |
| UNCLEAR-ALIGN-01 | End `/align-mobile-to-mfe` Â· SSOT MFE page | Dev/QA Â· 430px Â· cáº¥m tab/route/icon má»›i |
| (prior closed) | DOMAIN-MAP Â· MEDIA Â· PGC Â· ENTRY Â· SESS Â· CHK | giá»¯ closed Â· khÃ´ng reopen typed new_page |

## Handoff

| Role | DÃ¹ng |
|------|------|
| PO | Â§ Delta validate Â· giá»¯ FR-00/01/02 DoD Â· Pattern B Â· no Me Â· useFormOptions |
| Design | Giá»¯ phone 430 Â· zones FR-* Â· prototype reviewUrl Â· delta CTA/banner |
| SA | Giá»¯ Live cite Â· Mobile.Bff Â· **cáº¥m** ERP.* Â· users forward peer |
| TL/Dev | Edit `FieldReflectPage` gates only Â· BFF `:5202` Â· align cuá»‘i |
| QA | Pattern B: nÃºt báº­t Â· banner thiáº¿u field Â· GPS deny on click Â· no fake Â· no web-bff |

## Version meta

`skillVersion=2026.09.05.03` Â· `schemaVersion=1` Â· `contentHash=sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2` Â· `rulesVersion=2026.09.25.2` Â· `analyzedAt=2026-09-27T11:42:48.849Z` Â· `changeScope=edit_page` Â· `taskId=task_73173396`
