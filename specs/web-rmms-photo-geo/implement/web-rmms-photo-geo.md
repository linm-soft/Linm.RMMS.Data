# Implement — web-rmms-photo-geo

> Status: **done** · writtenAt `2026-09-26T00:45:00.000Z` · task `task_3d8b771b`  
> skillVersion: `2026.09.05.03` · packKind: `list` · role: `dev` · `/agent-dev`  
> contentHash: `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4`

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| mfeStdRoute | `/web-rmms-photo-geo` |
| mfeStdUrl | `http://localhost:9301/web-rmms-photo-geo` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Step 4b **N/A** (DEC-PGC-BE-01 sidecar) |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff |
| Build | `yarn build` **PASS** (chunk `web-rmms-photo-geo`) |

## Decisions

- Sheet `#sheet-pgc` DES-MOB-PGC phone ≤430 · Android 1-1 · std deep-link + host `openCapture('photo-geo')` INC/VIS/FR
- WEB-CAM: `getUserMedia` primary · file input **không** primary
- Files Live: `POST files/init` → `PUT files/{uploadId}/object` → `POST files/commit` · purpose=`photo-geo-capture` · product=`rmms`
- Detect opt: Lat/Lng = **object HITL** · Acc≤30 · **cấm** photographer GPS
- Sidecar return → `sessionStorage` `rmms.photoGeo.result` · host MediaIds+HasGps · **no Lat**
- MAP-HITL: local pin clip panel (cite GIS clip · **cấm** invent tiles API)
- Step 4b / migration / PhotoGeoController: **none**

## Tasks

| id | status | notes |
|----|--------|-------|
| T-01 | **done** | Route + layout + devRoutes · openCapture INC/VIS/FR |
| T-02 | **done** | CameraStill getUserMedia · GPS deny modal · shutter gate |
| T-03 | **done** | gim 1 pin · meta RO photog/distance/object |
| T-04 | **done** | mapConfirm HITL pin drag · compass/conf banners |
| T-05 | **done** | files init/PUT/commit · btnUse sidecar |
| T-06 | **done** | detect Acc≤30 · sessions toast · ?deny/?conf/?compass/?step=map/?fail |
| T-BE | **N/A** | SA · DOMAIN-MAP row exists |
| T-QA | queued | **chỉ** `/agent-qa*` |

## Files (FE)

- `src/pages/WebRmmsPhotoGeo/*` — page/layout/styles/lookup/paths/geoMath
- `src/services/photoGeo/*` — endpoint + openCapture + sidecar types
- `src/index.tsx` · `src/dev/devRoutes.ts` — route register
- Consumers: `FieldReflectPage` · `IncidentCreatePage` · `VisCapturePage`

## APIs (client)

| Method | Path | Note |
|--------|------|------|
| POST | `files/init` | purpose=`photo-geo-capture` |
| PUT | `files/{uploadId}/object` | JPEG JWT |
| POST | `files/commit` | → attachmentId |
| GET | `files/{id}/object` | preview JWT (endpoint) |
| POST | `ai-vision/detect` | object Lat HITL |
| GET | `patrol/sessions` | optional stamp |

## Verify

```bash
cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile && yarn build   # PASS
# BE Step4b N/A — no api/entity change
```

## Debt / QA handoff

- E2E modes: `?deny=1` · `?conf=45` · `?compass=1` · `?step=map` · `?fail=1`
- MapLibre full clip embed optional polish (P1 local HITL pin OK)
- e2eQa queued — **cấm** e2e ở Dev
