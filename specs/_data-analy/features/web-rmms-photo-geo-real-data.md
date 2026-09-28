# Data-analy — real-data bind — web-rmms-photo-geo

| Field | Value |
|-------|-------|
| feature | `web-rmms-photo-geo` |
| title | Overlay chụp ảnh có tọa độ |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_a4a7babf` |
| prefix API | `api/v1/files` · `api/v1/ai-vision` |
| prefix BFF web (cite) | `web-bff/api/v1/files` · `web-bff/api/v1/ai-vision` — **cấm** client MFE Mobile gọi |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` · host `:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| mfeStdRoute | `/anh-vi-tri` |
| domain | **File** (+ **AiVision** detect) · Incident/Patrol consumers cite |
| contentHash | `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T12:55:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta Current vs New (HARD — edit_page)

| Bind / UX | Current | New |
|-----------|---------|-----|
| CTA enable | `canShutter` / `canDetect` / `canUse` gate `disabled` | Pattern B: nút luôn bật khi UI sẵn sàng · chỉ `disabled` khi `uploading`/`detecting`/`pending` |
| GPS / cam thiếu | Pre-disable shutter/use/detect | Bấm → `validationAttempted` + banner/modal · **cấm** khóa trước |
| Client errors | Early return / disable | Banner `string[]` + inline · API 4xx/5xx = toast |
| Route SSOT | Artifact cũ `/web-rmms-photo-geo` | Live `/anh-vi-tri` |
| Export / seed | N/A | **Cấm** Excel · PGC không SearchInput user/route · **cấm** ROAD_ROUTE_SEED trên shared lookups (scope global SUBMIT-VALIDATE; PGC không seed) |
| BFF | files + detect | `mobileApiBase()` only · forward `integration/users` nếu BFF thiếu · road-routes/search đã có |
| Align | — | `/align-mobile-to-mfe` · page MFE 430px · no new tab/route/icon |

**Keep bind:** files init/PUT/commit/GET · detect object Lat · GPS sidecar · HITL · GAP-PGC-BE-01.

## § Scope

| In | Out |
|----|-----|
| Edit PGC Pattern B CTA · files init/PUT/commit/GET · optional detect · GPS+gim+HITL · return attachmentId · BFF mobile only | Invent `api/v1/photo-geo*` · web-bff · Me* · journal/kết ca · native edit · fake GPS · Excel · new_page CRUD |
| Consumers: incident-create · vis · field-reflect | Persist object lat column (GAP-PGC-BE-01 → keep SA) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-photo-geo.md` | — | hash `525b8f61…` |
| `edit-ssot` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B |
| `code` | `src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx` | — | current disable gates |
| `peer-context` | `docs/context/features/photo-geo-capture.md` | — | native SSOT |
| `api` | FileService `files/*` · `ai-vision/detect` | empty preview | toast · **cấm** `window.alert` |
| `bff` | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/*` | 503 | retry · **cấm** web-bff client |
| `dto` | File init/commit · `DetectAiVisionRequest` Lat/Lng | — | accuracy ≤ 30 |
| `domain-map` | File · AiVision · Incident · slug prior SA | — | keep |
| `geo` | `navigator.geolocation` | deny → on-click modal | **cấm** fake |
| `map` | peer GIS clip HITL | — | **cấm** invent map API |
| `prototype` | `specs/web-rmms-photo-geo/ui/prototype/index.html` | — | **keep** Design |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET / device | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|--------------|-------------|---------|------------|
| capture.still | ảnh still | CameraStill | files | getUserMedia / kit | JPEG bytes → PUT object | live | peer |
| photographerLat | vị trí đã chốt | GPS RO | geo | device + EXIF | sidecar · **không** detect Lat | live | peer |
| photographerLng | — | GPS RO | geo | device | sidecar | live | peer |
| accuracyM | sai số | GPS RO | geo | device | sidecar · gate detect ≤30 | live | peer |
| headingDeg / pitchDeg | hướng / nghiêng | derived | device | IMU / orientation | sidecar on-device | live | peer |
| tapNx / tapNy | gim | MapPinTap | — | UI | sidecar | live | peer |
| distanceM | khoảng cách ước lượng | Number RO | derived | on-device / HITL haversine | sidecar | live | peer |
| lensRangeM | từ ống kính | Number RO | derived | on-device | sidecar | live | peer |
| objectLat / objectLng | tọa độ vật thể | Number RO | derived+HITL | map pin confirm | sidecar · detect Lat/Lng · **GAP-PGC-BE-01** | live | peer |
| uploadId | key tạm | Text RO | files | `POST files/init` | — | peer files | peer |
| attachmentId | key | Text RO | files | `POST files/commit` | return host · MediaIds | peer | peer |
| preview | xem ảnh | Img JWT | files | `GET files/{id}/object` | — · **cấm** resign URL persist | peer | peer |
| detect.optional | nhận diện | Button | ai-vision | `POST ai-vision/detect` | Lat/Lng=object · AccuracyM · disable chỉ lúc detecting | peer vis | peer |
| session.routeKm | tuyến / km | ListRow RO | patrol | `GET patrol/sessions` optional | toast only · **cấm** fake/seed | peer | peer |
| host.mediaIds | gắn consumer | — | incident | — | `MediaIds` guid · `HasGps=true` | peer INC/VIS/FR | peer |
| validationAttempted | — | flag | ux | local | Pattern B banner gate | new | — |

**Init body (Live):** `purpose=photo-geo-capture` · `product=rmms` · `fileName` · `contentType=image/jpeg` · `sizeBytes`.

**Detect body (Live):** Lat/Lng = **object HITL** · AccuracyM · media ref — **cấm** photographer GPS.

**Cấm** invent `photo-geo` path · **cấm** ERP.* · **cấm** fake GPS · **cấm** client `objectKey` · **cấm** Excel.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| files | `POST files/init` → `PUT …/object` → `POST files/commit` · GET object JWT | FileService Mobile.Bff | persist full URL · invent objectKey |
| ai-vision | `POST ai-vision/detect` | AiVision DOMAIN-MAP | detect khi accuracy > 30 · GPS người |
| LOOKUP_STATIC | FE `useFormOptions` copy keys | CTX + proto | hardcode VN trên form |
| patrol (optional) | `GET patrol/sessions` | Patrol | fake session/route |
| integration/users | `GET integration/users?search=` | BFF forward nếu thiếu | ERP UserSearchInput · PGC không gắn picker |
| road-routes | `GET integration/road-routes/search` | đã có BFF | ROAD_ROUTE_SEED · PGC read-only |
| map-host | peer GIS clip | `web-rmms-gis` | invent tiles API trong pack |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | HITL pin confirm only · reuse GIS clip · **không** draw CRUD |
| GPS | photographer + object derived · Pattern B on-click deny |
| gim | 1 tap trên still · không multi |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| captured | local | shutter | — | preview freeze |
| gimmed | local | tap pin | — | `#gim-pin` |
| uploaded | FileService | init→PUT→commit | files/* | `#row-key` |
| mapConfirmed | local HITL | kéo pin + confirm | — | CTAs ready (không pre-disable use) |
| validationAttempted | local | first CTA click fail | — | banner/inline |
| returned | host callback | Dùng ảnh | — | close sheet · MediaIds |
| detectOptional | AiVision | after HITL | `ai-vision/detect` | consumer VIS |

`progress: overlay capture lifecycle` + Pattern B validation. Không workflow entity riêng.

## §F — Handoff

| Role | Need |
|------|------|
| PO | Keep req · Delta Pattern B · route `/anh-vi-tri` |
| Design | Keep zones/reviewUrl · CTA enable delta if needed |
| SA | Keep File/AiVision · BFF users forward |
| Dev | PhotoGeoPage Pattern B · align-mobile · no web-bff |
| QA | Always-on CTA · deny-on-click · commit key · HITL |

## DoR real-data

| Check | |
|-------|--|
| §A sources | **PASS** |
| §B bind | **PASS** |
| § Delta | **PASS** |
| demo N/A | **PASS** |
| contentHash = CTX | **PASS** |
