# Implement — web-rmms-photo-geo

> Status: **done** · writtenAt `2026-09-27T13:45:00.000Z` · task `task_8103d989`  
> skillVersion: `2026.09.05.03` · packKind: `list` · role: `dev` · `/agent-dev`  
> contentHash: `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba`  
> changeScope: `edit_page` · Pattern B CTA Delta

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| mfeStdRoute | `/anh-vi-tri` |
| mfeStdUrl | `http://localhost:9301/anh-vi-tri` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Step 4b **N/A** (DEC-PGC-BE-01 sidecar · T-BE=N/A) |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · **cấm** web-bff |
| Build | MFE `yarn build` **PASS** (chunk `anh-vi-tri`) · BE `dotnet build` **PASS** (0 err) |

## Decisions

- changeScope=`edit_page` · Keep File+HITL+DEC-PGC-BE-01 · **Delta Pattern B only** on `PhotoGeoPage.tsx`
- Route SSOT keep `/anh-vi-tri` · **cấm** `/web-rmms-photo-geo`
- Pattern B: bỏ `disabled={!canShutter|!canDetect|!canUse}` · chỉ `disabled={uploading|detecting}` · shutter luôn bật khi live
- GPS deny: **không** auto-modal on mount · CTA/retry → `#modal-gps` DES-MOB-GPS-DENY
- Client fail: `validationAttempted` + `#validation-banner` `string[]` + dismiss · API fail = toast
- Confirm map: `disabled={uploading}` only · thiếu data → banner
- Align: `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** android/ios proto
- Step 4b / migration / PhotoGeoController / ERP.*: **none**

## Tasks

| id | status | notes |
|----|--------|-------|
| T-01 | **done** | Route keep `/anh-vi-tri` |
| T-02 | **done** | Shutter Pattern B · GPS on-click modal |
| T-03 | **keep** | gim 1 · meta RO |
| T-04 | **keep** | mapConfirm HITL |
| T-05 | **done** | btnUse Pattern B · uploading only |
| T-06 | **done** | detect Pattern B · `#validation-banner` · parity modes |
| T-BE | **N/A** | SA · no API/entity |
| T-QA | queued | **chỉ** `/agent-qa*` · **cấm** e2e ở Dev |

## Files (FE Delta)

- `src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx` — Pattern B CTA + banner
- `src/pages/WebRmmsPhotoGeo/styles.module.css` — `.bannerDanger` / list / dismiss

## APIs (client — unchanged)

| Method | Path | Note |
|--------|------|------|
| POST | `files/init` | purpose=`photo-geo-capture` |
| PUT | `files/{uploadId}/object` | JPEG JWT |
| POST | `files/commit` | → attachmentId |
| GET | `files/{id}/object` | preview |
| POST | `ai-vision/detect` | object Lat HITL |
| GET | `patrol/sessions` | optional stamp |

## Verify

```bash
cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile && yarn build   # PASS
cd D:/AI-QLBD/Linm.RMMS.WebService && dotnet build             # PASS · Step4b N/A
```

## Debt / QA handoff

- E2E modes: `?deny=1` · `?conf=45` · `?compass=1` · `?step=map` · `?fail=1`
- AC-PGC Pattern B: shutter/detect/use luôn bật · banner sau click · GPS modal on-click
- e2eQa queued — **cấm** e2e / `yarn start:std` ở Dev
- next: `/agent-qa*` · GAP-PKT-ROLE-01 stop
