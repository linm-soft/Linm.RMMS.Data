# Real-data bind — asset-collect

| | |
|---|---|
| feature | `asset-collect` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Asset Create + init-data + Integration types |
| taskId | `task_e9f0235f` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `asset-collect.md` · `RoadAssetsController.Create` · `GetInitData` · `CreateRoadAssetRequest` | catalog rỗng → empty select · block submit | Toast 422/mạng · **cấm** fake 200 |
| `api` | `AssetTypesController` · typeSelect | không loại → EmptyChrome / disable CTA | toast |
| `api` | optional `patrol/sessions` · `road-routes/search` | thiếu ca → GPS snap / manual route pick P2 | toast |
| `device` | GPS auto-pin · Camera | deny → `DES-MOB-GPS-DENY` · CTA off | — |
| `derived` | parse «QL.1 · Km …» → `Route`+`KmFrom` | thiếu phần → validation UI | — |
| `demo` | mobile-p1 `#sc-asset-collect` SSOT | UI-only preview | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| typeSelect | Loại tài sản * | Select | asset-type | GET `integration/asset-types` | `Type` (code) | yes (web Create) | yes |
| nameField | Tên / mô tả * | TextField | — | POST body | `Name` | yes | yes |
| routeKm | Tuyến / lý trình * | TextField readonly | road-route | GET sessions / routes + GPS | `Route` · `KmFrom` | yes | yes |
| gpsPin | Định vị ghim tự động * | TextField readonly | — | device → POST | `Lat` · `Lng` | yes | yes |
| statusField | Tình trạng | Select / Text | asset-status | GET `asset/road-assets/init-data` | `Status` | yes | yes · dual |
| photos | Ảnh | PhotoRow | — | local only P1 | — (MEDIA GAP) | gap | gap |
| btnAdd | Thêm tài sản | PrimaryButton | — | POST `asset/road-assets` | full Create body · `Source=manual` | yes | yes |
| toastOk | Đã thêm… | Toast | — | after POST 200 | display `Code` | yes | yes |
| toastErr | (lỗi) | Toast | — | after fail | — | — | yes |

§B path **khớp** `asset-collect-bff-endpoints.md` — **không** invent `asset-collect` / Finance `assets`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | GET `integration/asset-types` | DB `AssetTypes` · peer asset-kcht-32 | Hardcode 4–5 option demo làm SSOT khi API OK |
| asset-status | GET `asset/road-assets/init-data` → `Statuses` | service `tot`/`theo_doi`/`can_bao_tri` | Invent status enum ngoài init-data |
| road-route | GET `integration/road-routes/search` | DB `RoadRoutes` | Fake `QL.1` khi live reject |
| — | — | DB seed `rmms_road_assets` sau create | In-app `demoItems` làm nguồn màn khi BFF OK |

## §D — Map / vẽ

`map: none` embed trên `#sc-asset-collect`. Pin = GPS text field · **không** CTA gis-map P1.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Form open | nav hub | user tile | GET types + init-data | bind selects · start GPS |
| GPS fix | device | OS | — | gpsPin · enable CTA |
| GPS deny | OS | user | — | `DES-MOB-GPS-DENY` · CTA off |
| Photo local | camera | user | — | PhotoRow fill · upload **OUT** P1 |
| Submit | form | user CTA | POST create | loading · toast Code · stay/back hub |
| 422 validate | server | Type/Route/required | POST | toast message · giữ form |
| AI create | — | — | Source=`ai` | **OUT** — `asset-ai` / confirm |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «hub → form · GPS · POST thật · toast Code» · GAP dual/pack/media |
| Design | dual `#sc-asset-collect` · STATUS/TYPE parity · chrome back |
| SA | giữ Create + init-data · media GAP nếu Signed · **cấm** ERP.* · Step 4b N/A Create |
| Dev iOS + Android | cùng §B · wire hub toast → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake POST 200)

| Field | Value |
|-------|-------|
| Title | Thu thập thủ công |
| Loại (demo) | Cột km / … |
| Tên | Cột Km 1556 |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Định vị | 11.5300, 109.0040 · ±5 m |
| Tình trạng (iOS) | Tốt |
| CTA | Thêm tài sản |
| Toast | Đã thêm tài sản · TS-20260818-021 |
| Back | Tài sản → hub |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ASSET-COLLECT-NAV-01 | hub toast only | Nav + form |
| GAP-MOB-ASSET-COLLECT-CTA-01 | — | POST create + toast Code |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | — | catalog live |
| GAP-MOB-ASSET-COLLECT-GPS-01 | — | auto-pin · deny chrome |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | — | init-data · Android dual |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | — | local photo · no invent upload |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi POST fail  
- Invent mobile-only path `asset-collect`  
- Bind `mfeStdUrl` / ERP.* / Finance `api/v1/assets`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Gõ tay lat/lng · enqueue submit sibling → **GAP-MOB-ACT-07**  
- Gộp AI / adjust / list / detail  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T22:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-real-data-20260830 |
| taskId | `task_e9f0235f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
