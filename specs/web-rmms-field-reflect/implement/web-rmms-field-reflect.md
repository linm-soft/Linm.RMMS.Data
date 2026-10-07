# Implement — web-rmms-field-reflect

> Status: **done** · writtenAt `2026-09-27T12:25:00.000Z` · task `task_a905fb59`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/phan-anh` · changeScope: `edit_page`

| | |
|--|--|
| Feature | `web-rmms-field-reflect` |
| Title | Phản ánh hiện trường — Pattern B CTA/banner |
| Role | `dev` · `/agent-dev` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phan-anh` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b skip** (SA none · no invent) |
| DES-GRID | N/A phone Field form |
| build | MFE `yarn build` **PASS** (chunk `phan-anh`) · Incident.Bff + AiVision.Bff `dotnet build` (no delta) |

## Done (T-*)

| id | Result |
|----|--------|
| T-UI-VAL-B-01 | Bỏ `canDetect`/`canCreate` · Detect/Create `disabled` chỉ `detecting`/`creating` · `#validationBanner` `string[]` on click · inline field · `?miss=1` |
| T-UI-ACC-01 | Acc>30 (`gps.poor` / `?acc=1`) **không** `POST ai-vision/detect` · CTA idle ON |
| T-UI-GPS-B-01 | GPS deny **không** khóa CTA · banner + modal **on click** · HasGps khi có fix · **cấm** fake |
| T-UI-ALIGN-01 | SSOT `FieldReflectPage` · layout `data-phone-frame=430` · **cấm** tab/route/icon mới · **cấm** android/ios proto |
| Prior T-BE-* / T-UI-FR-* / LKP/ACT/FIELD/LEAVE/PROD/UX/RESP/HIST | **KEEP PASS** |
| T-QA-VAL-B-01 | **queued** `/agent-qa*` — **cấm** e2e Dev |

## Files (MFE)

- `src/pages/WebRmmsFieldReflect/FieldReflectPage.tsx` — Pattern B gates + banner
- `src/pages/WebRmmsFieldReflect/styles.module.css` — bannerDanger / dismiss / fieldError
- `src/pages/WebRmmsFieldReflect/lookupStatic.ts` — `reflect.toast.noAsset` · `reflect.banner.dismiss`

## APIs (unchanged · Live)

- `GET patrol/sessions` · `GET integration/asset-types` · uploads/files · `POST ai-vision/detect` · `POST incident/incidents`
- **cấm** invent `field-reflect*` · **cấm** ERP.* · **cấm** web-bff

## Gates

- Kind B grid / `LinErpListFilterBar` / ui-schema: **N/A** (phone Field)
- Step 4b / migration: **skip** (SA · GAP-PGC-BE-01 HasGps only)
- Build HARD: MFE **PASS**
- E2E: queued QA only
- Align: `/align-mobile-to-mfe` — SSOT page giữ · 430px · no new chrome

## Debt / notes

- 2026-10-05: kind Hư/Mất/Hỏng (`Damage`/`Lost`/`Broken`) nằm trong `AllowedIncidentTypes` + init-data. Create gửi `status=new`. Verify: POST `/api/v1/incident/incidents` với `incidentType=Damage` không còn 422 danh mục.
- Capture = PGC overlay + input capture (prior)
- Prototype: `?form=1` · `?capture=1` · `?deny=1` · `?empty=1` · `?acc=1` · `?miss=1`
- UNCLEAR-VALIDATE-B / UNCLEAR-ALIGN-01 → closed Dev · QA AC queued

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa ON
