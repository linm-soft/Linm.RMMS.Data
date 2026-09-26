# Data-analy — real-data bind — web-rmms-asset-collect

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-collect` |
| title | Thêm tài sản thủ công |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a6862c38` |
| prefix API | Asset · Integration · Patrol (prefill) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-collect` |
| domain | **Asset** (+ cite Integration · Patrol) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T14:33:05.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Collect

| In | Out |
|----|-----|
| AC-00…10 · form create · GPS pin · local photos | `me*` · AI detect/HITL · adjust · list/detail · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) |
| API **Live** init-data · asset-types · road-routes/search · sessions · POST road-assets | invent `asset-collect` · media POST · Source=`ai` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-collect.md` | — | — |
| `peer-ctx` | `docs/context/features/asset-collect.md` | — | DES · gaps |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/collect` | — | BFF + GPS |
| `peer` | `web-rmms-asset-hub` · shell / mobile-a…e | n/a | owners out |
| `api` | asset/road-assets · integration · patrol sessions | required fields block submit | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Asset + cite Integration/Patrol | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | `/erp-form-context` · `useFormOptions` | — | labels via copy keys |
| `auth` | session required (staff) | guest → login peer | Hub/shell |
| `geo` | `navigator.geolocation` | deny → disable submit | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Collect

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetCollect.nav.back | Button/Nav | — | — | nav Hub `/asset` | hub | n/a |
| field.name | assetCollect.field.name | Text | — | — | `Name` | Asset | CreateRoadAsset |
| field.type | assetCollect.field.type | Select | asset-type | `GET integration/asset-types` | `Type` | Integration | n/a |
| field.route | assetCollect.field.route | Select/Search | road-route | `GET integration/road-routes/search` | `Route` | Integration | n/a |
| field.routePrefill | assetCollect.field.routePrefill | Hidden/Prefill | patrol-session | `GET patrol/sessions` | Route/KmFrom opt | Patrol | n/a |
| field.kmFrom | assetCollect.field.kmFrom | Number/Text | — | — | `KmFrom` | Asset | n/a |
| field.kmTo | assetCollect.field.kmTo | Number/Text | — | — | `KmTo` | Asset | n/a |
| field.status | assetCollect.field.status | Select | asset-status | `GET asset/road-assets/init-data` | `Status` | Asset | n/a |
| field.gps | assetCollect.field.gps | Text RO | geo | geolocation | `Lat`/`Lng` | device | n/a |
| field.photos | assetCollect.field.photos | PhotoRow | — | local | — (GAP media) | local | n/a |
| action.submit | assetCollect.action.submit | Button | — | — | `POST asset/road-assets` | Asset | Create |
| action.cancel | assetCollect.action.cancel | Button/Nav | — | — | `/asset` | hub | n/a |

**Cấm** invent CollectController · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** Source=`ai` · **cấm** gộp sibling vào slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetCollect.*` | SCREENS `/asset/collect` · CTX | hardcode label VN |
| asset-type | `GET integration/asset-types` | DOMAIN-MAP Integration | hardcode option list |
| road-route | `GET integration/road-routes/search` | DOMAIN-MAP Integration | invent route free-text SSOT |
| asset-status | `GET asset/road-assets/init-data` | DOMAIN-MAP Asset | hardcode «Tốt» only |
| patrol-session | `GET patrol/sessions` | DOMAIN-MAP Patrol | invent session on collect |
| geo | `navigator.geolocation` | device | fake coords / type-in |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên collect surface · GIS = peer `/gis` |
| GPS | AC-07 capture · AC-09 gated · deny blocks |
| Map nav | **out** — không CTA GIS trên collect P1 |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff only |
| GpsFix | device | geolocation | — | AC-07 · gate AC-09 |
| FormDraft | local | user | — | AC-02…08 |
| CreateResult | Asset | submit | `POST asset/road-assets` | toast Code · back Hub |
| MediaPending | local | user | GAP media | AC-08 local only |

`progress: Create road-asset` — Source server `manual` · Code `TS-yyyyMMdd-nnn`.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: form required · GPS gate · POST Live · toast Code · no me · no AI |
| Design | AC zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-asset-collect` · confirm Mobile.Bff · media GAP |
| TL | Tasks collect page + form wire |
| Dev | Implement Mobile MFE collect only |
| QA | Required fields · GPS deny · POST · phone 430 · no me · no invent path |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T14:33:05.000Z`
