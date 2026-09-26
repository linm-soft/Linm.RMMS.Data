# Design — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_d7c33eb0`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone form** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **full form** ≤430 · **không** ERP Modal/Slideout Kind B · master = no demo · `/erp-form-context` labels |
| DES-GRID / LinErpListFilterBar | **N/A** — phone form · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| mfeStdRoute | `/web-rmms-asset-collect` |
| nativeRouteCite | SCREENS `/asset/collect` · alias nếu shell cần (**UNCLEAR-STD-ROUTE** → std URL STATUS) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset (+cite Integration/Patrol) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-asset-collect-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T14:45:00.000Z` |
| taskId | `task_d7c33eb0` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent CollectController / media path · fake GPS / type-in LatLng · hardcode VN form labels (Dev wire `useFormOptions`) · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std · Source=`ai` · gộp sibling (me / AI / adjust / Field a…e) vào slug.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-asset-collect.md` | feature Collect |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/asset/collect` · GPS gate |
| CTX-03 | `docs/context/features/asset-collect.md` | peer DES-MOB-ASSET-COLLECT |
| CTX-04 | `docs/context/features/web-rmms-asset-hub.md` | back → Hub `/asset` |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-asset-collect-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Form AC · GPS · POST DoD |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android icon/layout **1-1** |
| Collect owns | **AC-00…10** · create form · GPS pin · local photos (GAP) · POST |
| Peer owns | Hub `/asset` · list/detail/ai/adjust/kcht · GIS · Field a…e · shell TabBar |
| DES-LEAVE | dirty form → confirm discard → Hub (**cấm** native `confirm`) |
| Out | `/me*` · feedback · cam-view · AI/HITL · adjust · list/detail · Field 2-door · journal/kết ca/tồn tại/tần suất (b–e) · invent media POST P1 |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **AC-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **AC-01** | top bar | Header | navBack → Hub `/asset` · title collect |
| **AC-02** | name | Text * | `Name` |
| **AC-03** | type | Select * | `GET integration/asset-types` |
| **AC-04** | route | Select/Search * | `GET integration/road-routes/search` · session prefill |
| **AC-05** | km | Number * / opt | KmFrom * · KmTo opt |
| **AC-06** | status | Select * | `GET asset/road-assets/init-data` · default `tot` |
| **AC-07** | gpsPin | Text RO * | geolocation Lat/Lng · deny → gate AC-09 |
| **AC-08** | photos | PhotoRow | local only · **GAP-MOB-ASSET-COLLECT-MEDIA-01** |
| **AC-09** | primary | Button | `POST asset/road-assets` · Source→manual · toast Code |
| **AC-10** | cancel | Button/Nav | → Hub `/asset` |

### IA

```
(auth staff) → AC-00 + AC-01 back Hub
  + AC-02 Name* + AC-03 Type* + AC-04 Route* (+ sessions prefill)
  + AC-05 KmFrom* · KmTo?
  + AC-06 Status* (init-data)
  + AC-07 GPS RO (geolocation) · deny disables AC-09
  + AC-08 photos local (no upload invent)
  + AC-09 Submit POST · AC-10 Cancel
(guest) → shell login · không silent empty form
success → toast Code TS-yyyyMMdd-nnn · nav Hub
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | AC-00 | Layout | * | max-width 430 · center review |
| navBack | AC-01 | Button/Nav | * | → Hub · `assetCollect.nav.back` |
| name | AC-02 | Text | * | `Name` · `assetCollect.field.name` |
| type | AC-03 | Select | * | `GET integration/asset-types` · `Type` |
| route | AC-04 | Select/Search | * | `GET integration/road-routes/search` · prefill sessions |
| kmFrom | AC-05 | Number/Text | * | `KmFrom` |
| kmTo | AC-05 | Number/Text | opt | `KmTo` |
| status | AC-06 | Select | * | `GET asset/road-assets/init-data` · default `tot` |
| gpsPin | AC-07 | Text RO | * | `Lat`/`Lng` · geolocation · deny disables AC-09 |
| photos | AC-08 | PhotoRow | opt P1 | local only · **cấm** invent media path |
| submit | AC-09 | Button | * | `POST asset/road-assets` · Source→manual · toast Code |
| cancel | AC-10 | Button/Nav | * | → Hub · `assetCollect.action.cancel` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** `navigator.geolocation` · deny / poor → **disable** AC-09 · **cấm** fake · **cấm** gõ tay.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10 |
| Form | Mobile full form · required Name/Type/Route/KmFrom/Status/GPS |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-asset-collect` |
| **real_view_parity** | `v1` |

### Wire

```
AC-00: phoneFrame 430
AC-01: [‹ back] title Thêm tài sản thủ công
AC-02: [Tên tài sản *]
AC-03: [Loại *] Select catalog
AC-04: [Tuyến *] Search/Select · prefill note
AC-05: [Km từ *] [Km đến]
AC-06: [Tình trạng *] Select init-data · default Tốt
AC-07: Lat/Lng RO · Refresh GPS · deny banner
AC-08: PhotoRow local + camera CTA (no upload path)
AC-09: [Lưu] POST gated
AC-10: [Hủy] → Hub
Board: GPS OK | GPS deny | Missing required | Success toast Code
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Status options | `GET mobile-bff/api/v1/asset/road-assets/init-data` |
| Asset types | `GET mobile-bff/api/v1/integration/asset-types` |
| Routes search | `GET mobile-bff/api/v1/integration/road-routes/search` |
| Session prefill | `GET mobile-bff/api/v1/patrol/sessions` |
| Create | `POST mobile-bff/api/v1/asset/road-assets` · Source=`manual` |
| GPS | `navigator.geolocation` · Lat/Lng write |
| Photos | local only · media GAP |
| Back / Cancel | nav Hub `/asset` only |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.***  
Empty required / GPS deny → disable submit · error/503 → toast in-app · **cấm** `window.alert`.  
Success → toast Code · back Hub.  
**Cấm** invent CollectController · **cấm** invent media POST P1.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones AC-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **PASS** (in-app confirm · no native) |
| DES-GRID / DES-RPT | **N/A** phone form |
| real_view_parity | **v1** |
| Android 1-1 / no me / GPS gate | **PASS** |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | SA thêm DOMAIN-MAP row `web-rmms-asset-collect` · Asset + cite Integration/Patrol |
| UNCLEAR-MEDIA-01 | GAP-MOB-ASSET-COLLECT-MEDIA-01 · local photos only · **không invent** media path |
| UNCLEAR-STD-ROUTE | **Design chốt** `mfeStdRoute=/web-rmms-asset-collect` (STATUS) · alias `/asset/collect` nếu shell cần |
| UNCLEAR-STATUS-ANDROID | Prefer Select init-data · dual closed by catalog live |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths · media GAP · **cấm** invent CollectController |
| TL | Tasks collect page + form wire · GPS gate · POST |
| Dev | `/agent-dev` · MFE Mobile collect only · Hub back · Source=manual |
| QA | Required · GPS deny · POST toast Code · phone 430 · no me · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T14:45:00.000Z` · `design_confirm=approve` · `taskId=task_d7c33eb0`
