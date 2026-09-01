# Real-data bind — asset-adjust

| | |
|---|---|
| feature | `asset-adjust` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Asset GetList + SoftDelete (+ PUT domain) |
| taskId | `task_0fcd1c99` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `asset-adjust.md` · `RoadAssetsController.GetList` · `RoadAssetDto` | empty chrome · hint search | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `api` | `SoftDeleteAsync` DELETE `{id}` | 404 → toast · refresh list | Toast · giữ row |
| `nav` | hub tile · detail «Sửa» pass Id | thiếu Id → toast · stay | — |
| `derived` | `typeLabel(Type)` client mapper (reuse list/detail) | unknown → raw `Type` | — |
| `demo` | mobile-p1 `#sc-asset-adjust` SSOT | UI-only khi GET fail | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| search | Tìm mã TS… | SearchField | — | GET `asset/road-assets?search=` | query `search` | yes (web list) | yes |
| rowAsset | Code · Type | ListRow | — | GET list | `Code` · `Type` + typeLabel | yes | yes |
| rowSub | Route · Km | ListRow subtitle | — | GET list | `Route` · `KmFrom` | yes | yes |
| btnEdit | Sửa | SecondaryButton | — | nav `asset-detail` | Id | gap | yes |
| btnRemove | Bớt | DangerButton | — | open modal | Id · Code cache | — | yes |
| mdConfirm | Bớt khỏi sổ | PrimaryButton | — | DELETE `asset/road-assets/{id}` | — | yes (soft) | yes |
| toastOk | Đã bớt… | Toast | — | after DELETE 200 | display `Code` | yes | yes |
| toastErr | (lỗi) | Toast | — | after GET/DELETE fail | — | — | yes |

§B path **khớp** `asset-adjust-bff-endpoints.md` — **không** invent `asset-adjust` / Finance `assets`.

PUT `UpdateRoadAssetRequest` = domain owner pack · **không** bind UI P1 (EDIT-01).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| typeLabel | — (client static alias) | peer list `AssetDtoMapper` | Invent GET lookup trên adjust P1 |
| — | — | DB seed `rmms_road_assets` | In-app `demoItems` làm nguồn màn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-asset-adjust`. **Không** CTA gis P1.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| List load | RoadAsset active | appear / search | GET list | bind rows |
| Search | user | debounce | GET `?search=` | refresh |
| Sửa | local nav | user | — | `go('asset-detail')` |
| Bớt modal | local | user Bớt | — | `#md-asset-remove` |
| Soft delete | RoadAsset | confirm | DELETE `{id}` | toast · remove row |
| XCO deny | AllowedCompanyIds | server | 403 | toast |
| PUT edit | — | — | PUT | **OUT** P1 UI |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «hub → list · search · Sửa detail · Bớt soft» · GAP pack/search/edit |
| Design | dual `#sc-asset-adjust` · modal · chrome back · search placeholder |
| SA | giữ GetList + SoftDelete + XCO · **cấm** ERP.* · Step 4b N/A · PUT UI P2 |
| Dev iOS + Android | cùng §B · wire hub toast → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake GET/DELETE 200)

| Field | Value |
|-------|-------|
| Title | Cập nhật / bớt |
| Search iOS | Tìm mã TS cần sửa hoặc bớt… |
| Search Android | Tìm mã TS… |
| Row1 | TS-20260810-014 · Cống ngang · QL.1 · Km 1556+000 |
| Row2 (iOS) | TS-20260809-088 · Biển P.127 · HCM · Biển báo |
| Modal | Bớt tài sản khỏi sổ? |
| Toast | Đã bớt tài sản · TS-20260810-014 |
| Back | Tài sản → hub |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ASSET-ADJUST-NAV-01 | hub toast only | Nav + list |
| GAP-MOB-ASSET-ADJUST-LIST-01 | — | GET list + search bind |
| GAP-MOB-ASSET-ADJUST-DEL-01 | — | DELETE soft + toast Code |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | — | Sửa → detail · PUT UI OUT |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | — | dual placeholder |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET/DELETE fail  
- Invent mobile-only path `asset-adjust`  
- Bind `mfeStdUrl` / ERP.* / Finance `api/v1/assets`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue DELETE/PUT sibling → **GAP-MOB-ACT-07**  
- Hard delete · system confirm  
- Gộp collect / AI / list / detail form  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T23:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-real-data-20260830 |
| taskId | `task_0fcd1c99` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
