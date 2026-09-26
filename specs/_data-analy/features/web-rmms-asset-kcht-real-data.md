# Data-analy — real-data bind — web-rmms-asset-kcht

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-kcht` |
| title | Hạng mục tài sản — lưới loại KCHT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a9822a3b` |
| prefix API | Integration (`asset-types`) · cite Asset |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-kcht` |
| domain | **Integration** (`asset-type`) · cite **Asset** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T13:31:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT · **cấm** hardcode count «32»/«36» |

## § Scope KCHT

| In | Out |
|----|-----|
| AK-00…06 · title · optional search · type grid Live · empty/error · tap nav peer | `me*` · invent CRUD loại · sibling list/collect/ai/adjust deep surfaces · Field 2-door · journal-lines · findings · session close · frequency (b–e) |
| API **Live** `GET integration/asset-types` | API **Mới** / invent `asset/kcht*` controller |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-kcht.md` | — | — |
| `peer-ctx` | `docs/context/features/asset-kcht-32.md` · `web-rmms-asset-hub.md` | — | catalog 36 · hub entry |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/kcht` | — | BFF + no GPS + no create |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · `AssetKchtDashboardView` | — | native map |
| `api` | `integration/asset-types` | empty state | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Integration `asset-type` + cite Asset | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | asset-type Live · labels via `useFormOptions` / copy keys | — | **cấm** hardcode VN |
| `auth` | session required (staff) | guest → login peer | Hub/shell |
| `geo` | không trên KCHT | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — KCHT

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetKcht.nav.back | Button/Nav | — | — | nav Hub | hub | n/a |
| page.title | assetKcht.title | Text RO | LOOKUP_STATIC | — | — | SCREENS | Android title |
| search | assetKcht.search | Text/Search | — | — | client filter | optional | n/a |
| type.code | assetKcht.type.code | Text RO | asset-type | `GET integration/asset-types` | — | Integration | n/a |
| type.name | assetKcht.type.name | Text RO | asset-type | same | — | Integration | n/a |
| type.icon | assetKcht.type.icon | Icon/Image | asset-type | same · fallback copy icon | — | Integration | Android icon |
| type.tile | assetKcht.type.tile | HubTile/ListRow | asset-type | same | tap → peer | Integration | n/a |
| empty | assetKcht.empty | Empty | LOOKUP_STATIC | — | — | SCREENS | n/a |
| error.retry | assetKcht.error.retry | Button | — | reload GET | — | Integration | n/a |

**Cấm** invent `asset/kcht` domain CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** hardcode 32/36 làm SSOT · **cấm** gộp sibling vào slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetKcht.*` | SCREENS `/asset/kcht` · CTX | hardcode label VN |
| asset-type | `GET integration/asset-types` | DOMAIN-MAP Integration · peer `asset-kcht-32` (36) | invent kcht controller · mock count |
| road-asset list | peer nav only | DOMAIN-MAP Asset | load road-assets trên surface KCHT |
| gis | peer nav only | DOMAIN-MAP Gis | load geojson trên KCHT |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên KCHT surface |
| GPS | không capture trên KCHT · deep = peer |
| Tap deep | AK-06 → peer (UNCLEAR-KCHT-TAP) |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff KCHT only |
| AssetTypeList | integration | load KCHT | asset-types | AK-04 grid |
| ClientFilter | FE search | user type | — | filter tiles |
| NavPeerType | tap tile | user | — | peer route + `code` |

`progress: KCHT type-grid browse` — không road-asset / WO lifecycle trên màn này.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: Live type grid · back Hub · optional search · no me · no CRUD · chốt TAP |
| Design | AK zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-asset-kcht` · confirm Mobile.Bff `integration/asset-types` |
| TL | Tasks KCHT page + tile bind |
| Dev | Implement Mobile MFE KCHT only |
| QA | Grid load · empty/error · phone 430 · no me · no invent POST |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T13:31:00.000Z`
