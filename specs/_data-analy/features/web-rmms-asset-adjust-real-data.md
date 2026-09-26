# Data-analy — real-data bind — web-rmms-asset-adjust

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-adjust` |
| title | Bớt hoặc sửa tài sản |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_03996285` |
| prefix API | Asset (`road-assets`) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-adjust` |
| domain | **Asset** (+ cite list peer `web-rmms-asset-list`) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T16:20:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Adjust

| In | Out |
|----|-----|
| AA-00…08 · list active · search · soft DELETE · nav edit detail | `me*` · PUT form · collect/AI · GIS deep · Field 2-door deep · journal-lines · findings · session close · frequency (b–e) · GPS capture |
| API **Live** GET list · DELETE soft | invent `asset-adjust` · PUT trên form P1 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-adjust.md` | — | — |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset/adjust` | — | soft DELETE · no PUT P1 |
| `peer` | `web-rmms-asset-hub` · `web-rmms-asset-list` · shell / mobile-a…e | n/a | owners out |
| `api` | `GET/DELETE asset/road-assets` | empty list copy | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth · proxy RMMS | 503 | retry |
| `domain-map` | Asset · **GAP** slug | — | **cấm ERP.*** |
| `catalog` | `/erp-form-context` · `useFormOptions` | — | labels via copy keys |
| `auth` | session required (staff) | guest → login peer | Hub/shell |
| `geo` | — | N/A adjust | **cấm** capture / fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Adjust

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetAdjust.nav.back | Button/Nav | — | — | nav Hub `/asset` | hub | n/a |
| title | assetAdjust.title | Text RO | — | — | — | — | n/a |
| search | assetAdjust.search | Text/Search | — | `GET asset/road-assets?search&page&pageSize` | query `search` | Asset | List |
| list.row | assetAdjust.row | ListRow | — | same GET · active | — | Asset | List |
| list.code | assetAdjust.field.code | Text RO | — | DTO `Code` | — | Asset | n/a |
| list.type | assetAdjust.field.type | Text RO | asset-type cite | DTO `Type` | — | Asset | n/a |
| list.route | assetAdjust.field.route | Text RO | — | DTO `Route` | — | Asset | n/a |
| action.remove | assetAdjust.action.remove | Button | — | — | `DELETE asset/road-assets/{id}` | Asset | SoftDelete |
| action.edit | assetAdjust.action.edit | Button/Nav | — | peer detail | nav `/asset/:id` | list | n/a |
| confirm.delete | assetAdjust.confirm.delete | Dialog | — | — | confirm then DELETE | Asset | n/a |

**Cấm** invent AdjustController · **cấm** ERP.* · **cấm** PUT form P1 · **cấm** GPS capture · **cấm** hardcode VN labels · **cấm** hiện Lat/Lng row P1 · **cấm** gộp sibling vào slug · **cấm** web-bff base / Route mobile-bff trên web-bff controllers.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetAdjust.*` | SCREENS `/asset/adjust` · CTX | hardcode label VN |
| road-asset-list | `GET asset/road-assets?search&page&pageSize` | DOMAIN-MAP Asset · active only | invent adjust list path |
| soft-delete | `DELETE asset/road-assets/{id}` | DOMAIN-MAP Asset | hard delete invent · silent delete |
| edit-nav | peer `web-rmms-asset-list` detail | SCREENS Sửa | PUT form trên adjust P1 |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên adjust · GIS = peer |
| GPS | **không** capture · **không** hiện Lat/Lng row P1 |
| Map nav | **out** P1 |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff only |
| ListQuery | AA-03 | user search/page | `GET asset/road-assets` | AA-04 |
| SoftDelete | AA-06/08 | user confirm | `DELETE …/{id}` | reload list · toast |
| EditNav | AA-07 | user | nav peer detail | list feature |

`progress: Soft-remove road-asset` — active → soft-deleted · list reload.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: search · active list · soft DELETE confirm · Sửa→detail · no me · no PUT · no GPS |
| Design | AA zones · Android parity · reviewUrl · confirm dialog |
| SA | Add DOMAIN-MAP `web-rmms-asset-adjust` · confirm Mobile.Bff DELETE proxy |
| TL | Tasks adjust page + list/delete wire |
| Dev | Implement Mobile MFE adjust only · edit = peer |
| QA | Search · delete confirm · reload · phone 430 · no me · no invent path · no GPS capture |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T16:20:00.000Z`
