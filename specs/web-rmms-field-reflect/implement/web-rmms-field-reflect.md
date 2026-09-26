# Implement — web-rmms-field-reflect

> Status: **done** · writtenAt `2026-09-26T04:20:00.000Z` · task `task_5a08f380`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/web-rmms-field-reflect`

| | |
|--|--|
| Feature | `web-rmms-field-reflect` |
| Title | Phản ánh hiện trường |
| Role | `dev` · `/agent-dev` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field-reflect` |
| nativeAlias | `/field/reflect` |
| productRoute | `/field/reflect` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · **Step 4b skip** (SA none) |
| DES-GRID | N/A phone Field form |
| build | MFE `yarn build` **PASS** · Incident.Bff + AiVision.Bff `dotnet build` **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-BE-CRUD-01 | Live wire `fieldReflectEndpoint` · sessions · asset-types · uploads · detect · incidents · **cấm** invent Reflect path |
| T-BE-INIT-01 | `useFormOptions('web-rmms-field-reflect')` · LOOKUP_STATIC reflect.* · checklist local fold Description |
| T-PERM-01 | unauth → guest gate + login CTA · no Live calls |
| T-UI-FR-00 | LookupGrid asset-types · search · empty/loading/error · select → FR-01 |
| T-UI-FR-01 | Segment kind · checklist · PhotoRow · Detect · sessionStamp · gpsLock · severity · description · Create · draftOffline · GPS deny block |
| T-UI-FR-02 | Photo-geo overlay · capture + GPS gate · uploads commit → MediaIds max10 |
| T-UI-LKP-01 | Live GET integration/asset-types |
| T-UI-ACT-01 | detect · create · draft · photo · pick — no dead buttons |
| T-UI-FIELD-01 | DEC-MEDIA-01 MediaIds · HasGps · DetectionId opt · Description+checklist |
| T-UI-LEAVE-01 | LeaveConfirmModal dirty FR-01 |
| T-UI-PROD-01 | end-user copy only · no Dev/GAP notes on UI |
| T-UI-UX-01 | phone 430 · spacing · empty/loading/error |
| T-UI-RESP-01 | CSS 375/768/1280 frame |
| T-UI-HIST-01 | dispatchAppToast · **cấm** alert() |
| T-QA-* | **queued** `/agent-qa*` — **cấm** e2e Dev |

## Files (MFE)

- `src/pages/WebRmmsFieldReflect/*` — layout · FieldReflectPage · paths · lookupStatic · checklistLocal · styles · aliases
- `src/services/fieldReflect/{types,endpoint,index}.ts`
- `src/index.tsx` · `src/dev/devRoutes.ts`
- `src/pages/WebRmmsField/paths.ts` — `PEER.reflect` → `/web-rmms-field-reflect`

## APIs (Mobile.Bff)

- `GET patrol/sessions` (Đang tuần) · check-ins km stamp
- `GET integration/asset-types`
- `POST ai-vision/uploads/init|complete` (+ PUT object) → MediaIds
- `POST ai-vision/detect` · Engine=P1 · ImageBase64 · Lat/Lng/AccuracyM · GPS Acc≤30 · freshness≤30s
- `POST incident/incidents` · HasGps · MediaIds max10 · Description(+checklist) · DetectionId opt
- draft → `offlineQueueStore.enqueueIncident` · navigate `/web-rmms-offline`

## Gates

- Kind B grid / LinErpListFilterBar / ui-schema: **N/A** (phone Field)
- Step 4b / migration / Lat col: **skip** (GAP-PGC-BE-01 · DOMAIN-MAP row exists)
- Build HARD: **PASS**
- E2E: queued QA only

## Debt / notes

- Capture = `<input capture=environment>` (không getUserMedia stream)
- MediaIds từ `ai-vision/uploads` uploadId/fileId (SA allow uploads **hoặc** files/*)
- Prototype modes: `?form=1` · `?capture=1` · `?deny=1` · `?empty=1` · `?acc=1`

## nextSlash

`/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa ON
