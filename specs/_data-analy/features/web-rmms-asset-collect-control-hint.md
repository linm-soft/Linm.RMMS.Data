# Data-analy — controlHint — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
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
| analyzedAt | `2026-09-25T14:33:05.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-asset-collect-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · cite Integration/Patrol · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| mfeStdRoute | `/web-rmms-asset-collect` |
| nativeRouteCite | SCREENS `/asset/collect` |
| taskId | `task_a6862c38` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full form · **không** ERP Modal/Slideout Kind B · master = no demo · load `/erp-form-context` catalog labels |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone form vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-asset-collect.md` | new · written this run |
| Peer CTX | `docs/context/features/asset-collect.md` | DES-MOB-ASSET-COLLECT · gaps media/GPS |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/asset/collect` |
| Parent | `docs/context/features/web-rmms-asset-hub.md` | tile → collect |
| DOMAIN-MAP | Asset + cite Integration/Patrol | **GAP** slug `web-rmms-asset-collect` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base |

## Screens Collect (ids)

| id | route / zone | surface |
|----|--------------|---------|
| AC-00 | phone | frame ≤430 · Android 1-1 |
| AC-01 | top bar | back → Hub `/asset` |
| AC-02 | name | Text * |
| AC-03 | type | Select * catalog |
| AC-04 | route | Search/Select * + session prefill |
| AC-05 | km | KmFrom * · KmTo opt |
| AC-06 | status | Select * init-data |
| AC-07 | gpsPin | RO Lat/Lng * · geolocation |
| AC-08 | photos | local camera · media GAP |
| AC-09 | primary | Button POST |
| AC-10 | cancel | Button/Nav → `/asset` |

**Out:** `/me*` · feedback · cam-view · AI/HITL · adjust · list/detail · Field 2-door deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · invent CollectController.

## ControlHint inventory (Collect)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | AC-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | AC-01 | Button/Nav | → Hub · copy `assetCollect.nav.back` |
| name | AC-02 | Text | required · `Name` · copy `assetCollect.field.name` |
| type | AC-03 | Select | required · `GET integration/asset-types` · `Type` |
| route | AC-04 | Select/Search | required · `GET integration/road-routes/search` · prefill sessions |
| kmFrom | AC-05 | Number/Text | required · `KmFrom` |
| kmTo | AC-05 | Number/Text | optional · `KmTo` |
| status | AC-06 | Select | required · `GET asset/road-assets/init-data` · default `tot` |
| gpsPin | AC-07 | Text RO | `Lat`/`Lng` · geolocation · deny disables AC-09 |
| photos | AC-08 | PhotoRow | local only P1 · **cấm** invent media path |
| submit | AC-09 | Button | `POST asset/road-assets` · Source→manual · toast Code |
| cancel | AC-10 | Button/Nav | → `/asset` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone form · **không** Kind B desktop grid |
| Form | full-page mobile · **cấm** ERP Modal/Slideout |

## GPS

| Màn | Rule |
|-----|------|
| AC-07 · AC-09 | `navigator.geolocation` · deny / poor → **disable** submit · **cấm** fake · **cấm** gõ tay lat/lng |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-ACOLLECT | DOMAIN-MAP chưa có row `web-rmms-asset-collect` | SA thêm row · domain Asset · cite Integration/Patrol |
| UNCLEAR-MEDIA-01 | Photo upload path | GAP-MOB-ASSET-COLLECT-MEDIA-01 · SA Signed upload nếu ship media |
| UNCLEAR-STD-ROUTE | SCREENS `/asset/collect` vs mfeStdRoute `/web-rmms-asset-collect` | Design/Dev: std URL packet · map alias nếu shell cần |
| UNCLEAR-STATUS-ANDROID | Peer Android thiếu Tình trạng | Prefer Select init-data · dual closed by catalog live |

## Handoff

| Role | Dùng |
|------|------|
| PO | Form fields · GPS gate · DoD POST + toast Code · no me · no AI/adjust |
| Design | Phone 430 · zones AC-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff paths · media GAP |
| TL/Dev | Wire Mobile MFE collect only · peer hub back |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T14:33:05.000Z`
