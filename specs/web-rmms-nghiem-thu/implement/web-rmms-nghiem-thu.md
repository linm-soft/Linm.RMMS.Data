# Implement — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + full create/detail ≤430 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-nghiem-thu` |
| mfeStdUrl | `http://localhost:9301/web-rmms-nghiem-thu` |
| nativeRouteCite | SCREENS `/field/nghiem-thu` · `/new` · `/:id` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T15:45:00.000Z` |
| taskId | `task_60b80237` |
| build | MFE `yarn build` **PASS** (chunk `web-rmms-nghiem-thu`) · Step 4b **skip** (reuse Live API) · BE no code change |

## Delivered

### BE (Step 4b)
- **skip** · API Mới / entity / migration / NT BFF controller: **none**
- Reuse Live `NghiemThuController` `api/v1/patrol/nghiem-thu` · Mobile.Bff catch-all proxy
- DOMAIN-MAP row `web-rmms-nghiem-thu` already present (SA)

### FE
| ID | Deliverable |
|----|-------------|
| T-01 | Route `/web-rmms-nghiem-thu` + alias `/field/nghiem-thu*` · list search P1 · empty · Check success row · btnCreate · Field hub door |
| T-02 | Form create/detail · init-data TemplateTypes (MAU-10 labels) · route/fieldInfo/km · ResultCode · Scores[] · `useFormOptions('web-rmms-nghiem-thu')` + LOOKUP_STATIC |
| T-03 | GPS `navigator.geolocation` → FieldInfo (pin) · ZoneOrgCode RO không fake · list không bắt GPS |
| T-04 | `LinImageUpload` files/* MediaIds≤10 · `useFormLeaveGuard` + LeaveConfirmModal (DES-LEAVE) |
| T-05 | POST create (Lưu nháp=`draft`) · PUT edit · GET/{id} · toast · **cấm** DELETE |

### Files
- `src/pages/WebRmmsNghiemThu/*` — Layout · List · Form · paths · lookupStatic · aliasRedirects
- `src/services/patrol/types.ts` · `endpoint.ts` — `patrolNghiemThuEndpoint`
- `src/pages/WebRmmsMobileA/FieldHubPage.tsx` — quick action NT
- `src/index.tsx` · `src/dev/devRoutes.ts`

## APIs wired

| Zone | Method | Path |
|------|--------|------|
| NT-01 list | GET | `patrol/nghiem-thu?search=` |
| NT-05 mau/scores | GET | `patrol/nghiem-thu/init-data` |
| NT-10 create | POST | `patrol/nghiem-thu` |
| NT-11 detail | GET/PUT | `patrol/nghiem-thu/{id}` |
| NT-08 media | * | `files/*` (LinImageUpload) |

Base client: Mobile BFF `…/mobile-bff/api/v1` · **cấm** web-bff base.

## WAIVE (phone)
Kind B DES-GRID · LinErpListFilterBar · LinCatalogUiSchemaEditorModal · DELETE — N/A P1

## Debt / GAP keep
- ZoneOrgCode: no reverse-geocode → GPS fills FieldInfo only · zone RO empty unless loaded
- e2e **queued QA** — cấm Dev
- OMS form-options catalog `web-rmms-nghiem-thu` — fallback LOOKUP_STATIC until seeded

## Verify
- `yarn build` PASS · chunk `web-rmms-nghiem-thu.*.js`
- Step 4b skip · no BE compile delta this role
