# Data-analy — controlHint — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
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
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| analyzedAt | `2026-09-27T09:10:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · cite Integration/Patrol · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdRoute | `/tai-san/thu-thap` |
| nativeRouteCite | SCREENS `/asset/collect` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| taskId | `task_ed5bbfb2` |
| priorTask | `task_a6862c38` · keep PO/Design artifacts |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full form · Pattern B validate · **không** ERP Modal/Slideout · master no demo · `/erp-form-context` labels |
| toolbarExport | **N/A** — phone form · SUBMIT override **cấm** Excel |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map (giữ prototype · delta review). SA **chốt** BFF/align.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** `new_page` typed CRUD · **cấm** iOS/Android native · **cấm** thêm tab/route/icon.

## Sources

| Source | Path | note |
|--------|------|------|
| Delta HARD | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | row AssetCollect · Pattern B · SearchInput |
| CTX | `docs/context/features/web-rmms-asset-collect.md` | edit_page · § Delta |
| Code | `AssetCollectPage.tsx` | Current: `disabled={!canSave}` · search+select route · capture OK |
| Peer CTX | `docs/context/features/asset-collect.md` | DES-MOB-ASSET-COLLECT |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/collect` |
| Parent | `docs/context/features/web-rmms-asset-hub.md` | tile → collect |
| DOMAIN-MAP | Asset + Integration/Patrol | row slug đã có (prior SA) |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## § Delta Current vs New

| Control / rule | Current | New |
|----------------|---------|-----|
| AC-09 submit | `disabled={!canSave}` (required+GPS) | Always enabled · only `saving` disables |
| Validate | `showErrors` + toast thiếu field | Pattern B banner `string[]` (tên·loại·tuyến·km·GPS·ảnh) + inline + scroll |
| AC-07 GPS | deny locks CTA | deny → báo lúc bấm submit · **cấm** khóa trước |
| AC-04 route | local search input + `<select>` · prefill inject mã lạ | `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · missing → `--` |
| AC-08 photos | `capture="environment"` | **Giữ** · banner nếu thiếu khi validate |
| Frame/route | `/tai-san/thu-thap` · AC-* | **Giữ** · align-mobile-to-mfe · no new tab/route/icon |
| BFF | Mobile paths | `mobileApiBase()` only · users forward shared (no picker on this form) |

## Screens Collect (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AC-00 | phone | frame ≤430 · Android 1-1 |
| AC-01 | top bar | back → Hub `/asset` |
| AC-02 | name | Text * |
| AC-03 | type | Select * catalog |
| AC-04 | route | **SearchInput** * · no seed · `--` if missing |
| AC-05 | km | KmFrom * · KmTo opt |
| AC-06 | status | Select * init-data |
| AC-07 | gpsPin | Text RO · geolocation · validate-on-submit |
| AC-08 | photos | local camera · capture · media GAP |
| AC-09 | primary | Button POST · Pattern B · Source→manual |
| AC-10 | cancel | Button/Nav → `/asset` |

**Out:** `/me*` · feedback · cam-view · AI/HITL · adjust · list/detail · Field 2-door deep · journal / kết ca / tồn tại / tần suất · invent CollectController · Excel toolbar.

## ControlHint inventory (Collect)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AC-00 | Layout | `max-width: 430px` · **giữ** |
| navBack | AC-01 | Button/Nav | → Hub · copy `assetCollect.nav.back` |
| name | AC-02 | Text | required · banner+inline Pattern B |
| type | AC-03 | Select | `GET integration/asset-types` |
| route | AC-04 | **SearchInput** | `ROAD_ROUTE_LOOKUP_CONFIG` · `GET …/road-routes/search` · no seed · `--` |
| kmFrom | AC-05 | Number/Text | required |
| kmTo | AC-05 | Number/Text | optional |
| status | AC-06 | Select | `GET asset/road-assets/init-data` · default `tot` |
| gpsPin | AC-07 | Text RO | geolocation · **không** disable AC-09 trước submit |
| photos | AC-08 | PhotoRow | `capture="environment"` · local · GAP media |
| submit | AC-09 | Button | always on · `disabled={saving}` only · POST road-assets |
| cancel | AC-10 | Button/Nav | → `/asset` |
| errBanner | form | Banner | `string[]` sau validationAttempted · **cấm** single alert.warning |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone form |
| toolbar/export Excel | **N/A** — SUBMIT override |
| Form | full-page mobile · **cấm** ERP Modal/Slideout |

## GPS

| Màn | Rule |
|-----|------|
| AC-07 · AC-09 | `navigator.geolocation` · deny / poor → **báo lúc submit** (banner) · **cấm** fake · **cấm** gõ tay · **cấm** disable CTA trước |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-MEDIA-01 | Photo upload path | GAP-MOB-ASSET-COLLECT-MEDIA-01 · **accepted** prior · no invent |
| — | DOMAIN-MAP / STD-ROUTE / STATUS-ANDROID | **resolved** prior pipeline |

## Handoff

| Role | Dùng |
|------|------|
| PO | Delta AC · Pattern B · SearchInput route · keep prior AC DoD POST+toast · no me/AI |
| Design | Giữ prototype AC-* · delta note submit/banner/SearchInput · reviewUrl reopen |
| SA | Confirm Mobile.Bff road-routes · no invent · align BFF base |
| TL/Dev | Edit `AssetCollectPage` + shared `lookups.ts` seed remove · no new route |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T09:10:00.000Z` · `taskId=task_ed5bbfb2`
