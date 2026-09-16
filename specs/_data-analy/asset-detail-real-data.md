# Real-data bind — asset-detail

| | |
|---|---|
| feature | `asset-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Asset GetById |
| taskId | `task_f6ca06ad` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `asset-detail.md` · `RoadAssetsController.GetById` · `RoadAssetDto` | 404 → empty chrome · back list | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `nav` | parent list pass `Id` · adjust «Sửa» | thiếu Id → back list · toast | — |
| `derived` | `typeLabel(Type)` client mapper (reuse list) | unknown → raw `Type` | — |
| `demo` | mobile-p1 `#sc-asset-detail` SSOT | UI-only khi GET fail | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| codeValue | Mã TS | Text display | — | GET `asset/road-assets/{id}` | `Code` | yes (web View) | yes |
| rowType | Loại | ListRow | — | GET + `typeLabel` | `Type` | yes | yes |
| rowRouteKm | Tuyến · lý trình | ListRow | — | GET | `Route` · `KmFrom` · (`KmTo`) | yes | yes |
| rowGps | Tọa độ | ListRow | — | GET optional | `Lat` · `Lng` | yes | yes · dual |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | — | nav `gis-map` | — (pass Id/Lat/Lng) | gap | yes |
| toastErr | (lỗi) | Toast | — | after GET fail | — | — | yes |

§B path **khớp** `asset-detail-bff-endpoints.md` — **không** invent `asset-detail` / Finance `assets`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| typeLabel | — (client static alias) | peer list `AssetDtoMapper` | Invent GET lookup trên detail P1 |
| — | — | DB seed `rmms_road_assets` | In-app `demoItems` làm nguồn màn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-asset-detail`. CTA nav `gis-map` (sibling) · pass pin nếu có Lat/Lng.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Detail load | RoadAsset | appear / nav Id | GET `…/{id}` | bind hero + rows |
| XCO deny | AllowedCompanyIds | server | GET 403 | toast · back |
| Not found | — | server | GET 404 | empty · back |
| Pin map | local nav | user CTA | — | `go('gis-map')` |
| Edit / delete | — | — | PUT/DELETE | **OUT** — `asset-adjust` |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «row → push · GET thật · CTA map» · GAP title/GPS/pack |
| Design | dual `#sc-asset-detail` · control-map khớp §B · chrome back |
| SA | giữ GetById + XCO · **cấm** ERP.* · Step 4b N/A |
| Dev iOS + Android | cùng §B · wire list toast → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake GET 200)

| Field | Value |
|-------|-------|
| Title iOS | Chi tiết |
| Title Android | Chi tiết tài sản |
| Code | TS-20260810-014 |
| Loại | Cống |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Tọa độ (Android) | 11.5300, 109.0040 |
| CTA | Ghim trên bản đồ |
| Back | Tài sản |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ASSET-DET-NAV-01 | row toast only | Nav + GET by id |
| GAP-MOB-ASSET-DET-DATA-01 | — | Bind Code/Type/Route/Km/LatLng |
| GAP-MOB-ASSET-DET-GPS-01 | — | Android row · iOS dual |
| GAP-MOB-ASSET-DET-TYPE-01 | list mapper | reuse on detail |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET fail  
- Invent mobile-only path `asset-detail`  
- Bind `mfeStdUrl` / ERP.* / Finance `api/v1/assets`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue PUT/DELETE sibling từ detail → **GAP-MOB-ACT-07** (submit = adjust pack)  
- Gộp collect / adjust / AI / list  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T21:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-real-data-20260830 |
| taskId | `task_f6ca06ad` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
