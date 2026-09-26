# Data-analy — real-data bind — web-rmms-asset-hub

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-hub` |
| title | Hub tài sản — wallet · grid nav · AI pending |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_64b589a6` |
| prefix API | Asset · Integration · AiVision · Gis (nav cite) |
| prefix BFF web (cite) | `web-bff/api/v1/*` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-hub` |
| domain | **Asset** (+ cite AiVision · Gis · Integration) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T13:05:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope Hub

| In | Out |
|----|-----|
| AH-00…07 · wallet RO · tiles/rows nav · AI pending Draft list | `me*` · sibling CRUD (list/collect/ai/adjust/kcht/gis deep) · Field 2-door · journal-lines · findings · session close · frequency (b–e) |
| API **Live** road-routes/search · asset-types · asset-candidates | API **Mới** / invent `asset/hub` wallet controller |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-asset-hub.md` | — | — |
| `peer-ctx` | `docs/context/features/asset-hub.md` | — | DES zones |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/asset` | — | BFF + GPS rules |
| `peer` | `web-rmms-home` · sibling asset-* · gis | n/a | deep owners |
| `api` | integration · ai-vision candidates | pending section ẩn | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · rewrite auth/files · proxy RMMS | 503 | retry |
| `domain-map` | Asset + cite AiVision/Gis/Integration | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | — (Hub không master form) | — | labels via `useFormOptions` |
| `auth` | session required (staff) | guest → login peer | Home/shell |
| `geo` | không trên Hub | — | peer deep only |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — Hub

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | assetHub.nav.back | Button/Nav | — | — | nav Home | home | n/a |
| wallet.eyebrow | assetHub.wallet.eyebrow | Text RO | LOOKUP_STATIC | — | — | SCREENS | Android wallet |
| wallet.title | assetHub.wallet.title | Text RO | road-route | `GET integration/road-routes/search` | — | Integration | n/a |
| wallet.subtitle | assetHub.wallet.subtitle | Text RO | asset-type | `GET integration/asset-types` | count only | Integration | n/a |
| tile.kcht | assetHub.tile.kcht | Button/Nav | — | — | `/asset/kcht` | peer | n/a |
| tile.list | assetHub.tile.list | Button/Nav | — | — | `/asset/list` | peer | n/a |
| tile.collect | assetHub.tile.collect | Button/Nav | — | — | `/asset/collect` | peer | n/a |
| tile.ai | assetHub.tile.ai | Button/Nav | — | — | `/asset/ai` | peer | n/a |
| tile.adjust | assetHub.tile.adjust | Button/Nav | — | — | `/asset/adjust` | peer | n/a |
| row.gis | assetHub.row.gis | Button/Nav | — | — | `/gis` | peer | n/a |
| ai.pending | assetHub.ai.pending | ListRow | — | `GET ai-vision/asset-candidates` | tap HITL | AiVision | n/a |
| ai.pendingCta | assetHub.ai.cta | Button/Nav | — | same | HITL peer | AiVision | n/a |

**Cấm** invent Hub domain CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels trên form · **cấm** gộp sibling vào slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `assetHub.*` | SCREENS `/asset` · CTX | hardcode label VN |
| road-route | `GET integration/road-routes/search` | DOMAIN-MAP Integration | invent hub wallet API |
| asset-type | `GET integration/asset-types` | DOMAIN-MAP Integration | hardcode «32» làm SSOT count |
| ai-candidates | `GET ai-vision/asset-candidates` | DOMAIN-MAP AiVision | invent confirm/dismiss trên Hub |
| gis | nav only `/gis` | DOMAIN-MAP Gis | load geojson trên Hub surface |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên Hub surface · row → `/gis` peer |
| GPS | không capture trên Hub · deep = peer |
| Map nav | AH-06 → `/gis` |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | shell/session | login peer | auth/* | staff Hub only |
| WalletRoute | integration | load Hub | road-routes/search | wallet title |
| AssetTypeCount | integration | load Hub | asset-types | wallet subtitle |
| AiPendingDraft | ai-vision | load / peer HITL | asset-candidates | AH-07 show/hide |

`progress: Hub nav chrome` — không road-asset / WO lifecycle trên Hub.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: wallet · 6 lối nav · AI pending · Live BFF · no me · no hub CRUD |
| Design | AH zones · Android parity · reviewUrl |
| SA | Add DOMAIN-MAP `web-rmms-asset-hub` · confirm Mobile.Bff paths |
| TL | Tasks Hub page + nav stubs |
| Dev | Implement Mobile MFE Hub only |
| QA | Tiles routes · wallet · pending empty/hide · phone 430 · no me |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T13:05:00.000Z`
