# Design — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_23e6bed5`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO · UI = **phone form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full form** ≤430 · Pattern B validate · **không** ERP Modal/Slideout · master = no demo · `/erp-form-context` labels |
| DES-GRID / LinErpListFilterBar | **N/A** — phone form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdUrl | `http://localhost:9301/tai-san/thu-thap` |
| mfeStdRoute | `/tai-san/thu-thap` |
| nativeRouteCite | SCREENS `/asset/collect` |
| codeCurrent | `src/pages/WebRmmsAssetCollect/AssetCollectPage.tsx` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset (+cite Integration/Patrol) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-collect-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` · §A+§B PASS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · AssetCollectPage |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T16:20:00.000Z` |
| taskId | `task_23e6bed5` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent CollectController / media path · fake GPS / type-in LatLng · hardcode VN form labels (Dev wire `useFormOptions`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Source=`ai` · `disabled={!canSave}` · seed `ROAD_ROUTE_SEED` · gộp sibling (me / AI / adjust / Field a…e) · `new_page` typed CRUD · thêm tab/route/icon.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-collect.md` | edit_page · § Delta |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/collect` |
| CTX-03 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · SearchInput · GPS-on-submit |
| CTX-04 | `docs/context/features/asset-collect.md` | peer DES-MOB-ASSET-COLLECT |
| CTX-05 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub `/asset` |
| DEM | — | **N/A** · hash skip · **cấm** re-scan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-collect-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Form AC · delta DoD |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| Collect owns | **AC-00…10** · create form · GPS pin · local photos (GAP) · POST · Pattern B banner |
| Peer owns | Hub `/asset` · list/detail/ai/adjust/kcht · GIS · Field a…e · shell TabBar |
| DES-LEAVE | dirty form → confirm discard → Hub (**cấm** native `confirm`) |
| align-mobile-to-mfe | page đã có · **cấm** new tab/route/icon · **cấm** android/ios prototype |
| Out | `/me*` · feedback · cam-view · AI/HITL · adjust · list/detail · Field 2-door · journal/kết ca/tồn tại/tần suất · invent media POST · Excel toolbar |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AC-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AC-01** | top bar | Header | navBack → Hub `/asset` · title collect |
| **AC-02** | name | Text * | `Name` · Pattern B inline |
| **AC-03** | type | Select * | `GET integration/asset-types` |
| **AC-04** | route | **SearchInput** * | `ROAD_ROUTE_LOOKUP_CONFIG` · `GET …/road-routes/search` · **no seed** · missing → `--` |
| **AC-05** | km | Number * / opt | KmFrom * · KmTo opt |
| **AC-06** | status | Select * | `GET asset/road-assets/init-data` · default `tot` |
| **AC-07** | gpsPin | Text RO * | geolocation Lat/Lng · **validate-on-submit** · **cấm** disable AC-09 trước |
| **AC-08** | photos | PhotoRow | `capture="environment"` · local · **GAP-MOB-ASSET-COLLECT-MEDIA-01** |
| **AC-09** | primary | Button | always on · `disabled={saving}` only · `POST asset/road-assets` · Source→manual · toast Code |
| **AC-10** | cancel | Button/Nav | → Hub `/asset` |
| **errBanner** | form | Banner | `string[]` sau validationAttempted · name·type·route·km·GPS·photos · **cấm** single alert |

### § Delta Current vs New (Design chốt)

| Control | Prior design / Current code | New (edit_page) |
|---------|----------------------------|-----------------|
| AC-09 submit | `disabled={!canSave}` / GPS gate CTA | Always enabled · only `saving` disables |
| Validate | toast + showErrors / disable | Pattern B banner `string[]` + inline + scroll top |
| AC-07 GPS | deny disables AC-09 | deny → báo lúc bấm submit · **cấm** khóa trước |
| AC-04 route | Select/Search · seed ok | **SearchInput** + `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · missing → `--` |
| AC-08 photos | local | **Giữ** `capture="environment"` · banner nếu thiếu khi validate |
| Frame/route | `/web-rmms-asset-collect` (prior) | **Giữ** `/tai-san/thu-thap` · align-mobile-to-mfe |

### IA

```
(auth staff) → AC-00 + AC-01 back Hub
  + errBanner (after submit attempt · Pattern B)
  + AC-02 Name* + AC-03 Type* + AC-04 SearchInput Route* (+ sessions prefill · missing → --)
  + AC-05 KmFrom* · KmTo?
  + AC-06 Status* (init-data)
  + AC-07 GPS RO · deny does NOT disable AC-09
  + AC-08 photos local capture
  + AC-09 Submit always on · validate on click · AC-10 Cancel
(guest) → shell login · không silent empty form
success → toast Code TS-yyyyMMdd-nnn · nav Hub
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AC-00 | Layout | * | max-width 430 · center review |
| navBack | AC-01 | Button/Nav | * | → Hub · `assetCollect.nav.back` |
| name | AC-02 | Text | * | `Name` · banner+inline Pattern B |
| type | AC-03 | Select | * | `GET integration/asset-types` · `Type` |
| route | AC-04 | **SearchInput** | * | `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · `--` if missing |
| kmFrom | AC-05 | Number/Text | * | `KmFrom` |
| kmTo | AC-05 | Number/Text | opt | `KmTo` |
| status | AC-06 | Select | * | `GET asset/road-assets/init-data` · default `tot` |
| gpsPin | AC-07 | Text RO | * | `Lat`/`Lng` · geolocation · **không** disable AC-09 trước submit |
| photos | AC-08 | PhotoRow | * (validate) | `capture="environment"` · local · **cấm** invent media path |
| submit | AC-09 | Button | * | `disabled={saving}` only · POST · Source→manual · toast Code |
| cancel | AC-10 | Button/Nav | * | → Hub · `assetCollect.action.cancel` |
| errBanner | form | Banner | — | `string[]` sau attempt · **cấm** single alert.warning |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** `navigator.geolocation` · deny / poor → **báo lúc submit** (banner) · **cấm** fake · **cấm** gõ tay · **cấm** disable CTA trước.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view · AI/adjust/list · Excel.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10 · errBanner |
| Form | Mobile full form · Pattern B · SearchInput route · GPS-on-submit |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/tai-san/thu-thap` |
| **real_view_parity** | `v1` |

### Wire

```
AC-00: phoneFrame 430
AC-01: [‹ back] title Thêm tài sản thủ công
errBanner: string[] name·type·route·km·GPS·photos (after attempt)
AC-02: [Tên tài sản *] + inline
AC-03: [Loại *] Select catalog
AC-04: [Tuyến *] SearchInput · ROAD_ROUTE_LOOKUP_CONFIG · no seed · -- if missing
AC-05: [Km từ *] [Km đến]
AC-06: [Tình trạng *] Select init-data · default Tốt
AC-07: Lat/Lng RO · Refresh GPS · deny does NOT lock CTA
AC-08: PhotoRow local + capture=environment (no upload path)
AC-09: [Lưu] always enabled · disabled={saving} only
AC-10: [Hủy] → Hub
Board: GPS OK | GPS deny→submit | Missing Pattern B | Route missing→-- | Success toast Code
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Status options | `GET mobile-bff/api/v1/asset/road-assets/init-data` |
| Asset types | `GET mobile-bff/api/v1/integration/asset-types` |
| Routes search | `GET mobile-bff/api/v1/integration/road-routes/search` · **no** `ROAD_ROUTE_SEED` |
| Session prefill | `GET mobile-bff/api/v1/patrol/sessions` · missing catalog → `--` |
| Create | `POST mobile-bff/api/v1/asset/road-assets` · Source=`manual` |
| GPS | `navigator.geolocation` · Lat/Lng write · validate on submit |
| Photos | local + capture · media GAP |
| Back / Cancel | nav Hub `/asset` only |

**BFF:** Mobile.Bff `:5202` · `mobileApiBase()` · **cấm** Web BFF base client · **cấm ERP.***  
Empty required / GPS deny → banner on submit click · **cấm** pre-disable CTA · error/503 → toast in-app · **cấm** `window.alert`.  
Success → toast Code · back Hub.  
**Cấm** invent CollectController · **cấm** invent media POST P1.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AC-* | **PASS** |
| DES-B control = controlHint | **PASS** · SearchInput · Banner · GPS-on-submit |
| DES-C prototype + reviewUrl | **PASS** · reopen edit_page |
| DES-D Leave dirty | **PASS** (in-app confirm · no native) |
| DES-GRID / DES-RPT | **N/A** phone form |
| real_view_parity | **v1** |
| Android 1-1 / no me / Pattern B | **PASS** |
| GAP-DES-DEMO-RESCAN-01 | **PASS** · hash skip · no crawl |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-MEDIA-01 | GAP-MOB-ASSET-COLLECT-MEDIA-01 · local photos only · **không invent** media path · **accepted** |
| UNCLEAR-DOMAIN-MAP-ACOLLECT | **resolved** prior |
| UNCLEAR-STD-ROUTE | **resolved** · `mfeStdRoute=/tai-san/thu-thap` |
| UNCLEAR-STATUS-ANDROID | **resolved** prior · Select init-data |

## 8. Handoff

| Role | Need |
|------|------|
| SA | Confirm Mobile.Bff road-routes · no invent · align `mobileApiBase` · media GAP |
| TL | Edit tasks only — `AssetCollectPage` + shared `lookups.ts` seed remove · Pattern B · SearchInput |
| Dev | `/agent-dev` · remove `disabled={!canSave}` · banner string[] · GPS-on-submit · SearchInput · no seed |
| QA | Banner fields · GPS deny on click · SearchInput no seed · POST · phone 430 · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T16:20:00.000Z` · `design_confirm=approve` · `taskId=task_23e6bed5` · `changeScope=edit_page`
