# Data-analy — real-data bind — web-rmms-asset-list

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-list` |
| title | Danh sách và chi tiết tài sản |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f522b338` |
| prefix API | Asset (`road-assets`) · cite Gis (focus) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-list` |
| domain | **Asset** · cite **Gis** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T14:03:21.192Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope List+Detail

| In | Out |
|----|-----|
| AL-00…06 · AL-10…13 · search · paging · detail RO · pin map nav | `me*` · PUT detail · invent write · sibling collect/ai/adjust · Field 2-door · journal-lines · findings · session close · frequency (b–e) |
| API **Live** `GET asset/road-assets` + `GET asset/road-assets/{id}` | API **Mới** invent PUT/POST trên slug · ERP.* |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-list.md` | — | — |
| `peer-ctx` | `web-rmms-asset-hub.md` · `web-rmms-asset-kcht.md` | — | hub entry · optional type |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/list` + `/asset/:id` | — | BFF + GPS display-only + no PUT |
| `api` | `asset/road-assets` | empty state | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Asset + cite Gis | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | labels via `useFormOptions` / copy keys | — | **cấm** hardcode VN |
| `auth` | session required (staff) | guest → login peer | Hub/shell |
| `geo` | display Lat/Lng stored only | hide null | **không** capture mới |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — List+Detail

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetList.nav.back | Button/Nav | — | — | nav Hub | hub | n/a |
| page.title | assetList.title | Text RO | LOOKUP_STATIC | — | — | SCREENS | Android title |
| search | assetList.search | Text/Search | — | `GET asset/road-assets?search` | query | Asset | n/a |
| list.row | assetList.row | ListRow | road-asset | same · page/pageSize | tap → detail | Asset | n/a |
| list.code | assetList.row.code | Text RO | road-asset | same | — | Asset | n/a |
| list.type | assetList.row.type | Text RO | road-asset | same | — | Asset | n/a |
| list.route | assetList.row.route | Text RO | road-asset | same | — | Asset | n/a |
| empty | assetList.empty | Empty | LOOKUP_STATIC | — | — | SCREENS | n/a |
| error.retry | assetList.error.retry | Button | — | reload GET | — | Asset | n/a |
| detail.back | assetList.detail.back | Button/Nav | — | — | nav list | SCREENS | n/a |
| detail.title | assetList.detail.title | Text RO | LOOKUP_STATIC | — | — | SCREENS | n/a |
| detail.code | assetList.detail.code | Text RO | road-asset | `GET asset/road-assets/{id}` | — | Asset | n/a |
| detail.type | assetList.detail.type | Text RO | road-asset | same | — | Asset | n/a |
| detail.route | assetList.detail.route | Text RO | road-asset | same | — | Asset | n/a |
| detail.kmFrom | assetList.detail.kmFrom | Text RO | road-asset | same | — | Asset | n/a |
| detail.kmTo | assetList.detail.kmTo | Text RO | road-asset | same · hide null | — | Asset | n/a |
| detail.lat | assetList.detail.lat | Text RO | road-asset | same · hide null | — | Asset | display only |
| detail.lng | assetList.detail.lng | Text RO | road-asset | same · hide null | — | Asset | display only |
| pin.map | assetList.detail.pinMap | Button/Nav | — | — | nav `/gis?focus={id}` | Gis peer | disable no coords |

**Cấm** invent PUT trên detail · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** gộp sibling write vào slug · **cấm** Web BFF base.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetList.*` | SCREENS `/asset/list` · CTX | hardcode label VN |
| road-asset | `GET asset/road-assets` · `GET asset/road-assets/{id}` | DOMAIN-MAP Asset | invent write trên list slug |
| asset-type | optional `?type=` from KCHT | Integration peer | load type-grid trên list surface |
| gis | nav focus only | DOMAIN-MAP Gis | load geojson trên list surface |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** embed trên list/detail · pin = nav peer `/gis` |
| GPS | display stored Lat/Lng only · **không** `navigator.geolocation` |
| Focus | AL-12 → `/gis?focus={id}` · center Lat/Lng |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff list only |
| AssetList | asset | load/search/page | road-assets | AL-04 |
| AssetDetail | asset | open row | road-assets/{id} | AL-11 |
| ClientSearch | FE | user type | query search | AL-03 |
| MapFocus | detail coords | user pin | — | nav Gis |

`progress: list browse + detail RO` — không create/update/delete lifecycle trên màn này.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: Live list+detail · search/paging · pin map · no me · no PUT · chốt type filter |
| Design | AL zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-asset-list` · confirm Mobile.Bff `asset/road-assets` |
| TL | Tasks list page + detail bind |
| Dev | Implement Mobile MFE list+detail only |
| QA | List load · search · detail · pin disable null · phone 430 · no me · no PUT |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T14:03:21.192Z`
