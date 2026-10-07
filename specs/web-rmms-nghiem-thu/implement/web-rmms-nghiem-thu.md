# Implement — web-rmms-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-nghiem-thu` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| formPattern | Mobile list + full create/detail ≤430 · Pattern B validate · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/nghiem-thu/moi` |
| mfeStdUrl | `http://localhost:9301/nghiem-thu/moi` |
| nativeRouteCite | SCREENS `/field/nghiem-thu*` alias → `/nghiem-thu*` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| contentHash | `sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T15:30:00.000Z` |
| taskId | `task_72515633` |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `NghiemThuFormPage.tsx` |
| build | MFE `yarn build` **PASS** (chunk `nghiem-thu`) · Mobile.Bff `dotnet build` **PASS** · Step 4b **skip** |

## Delivered (edit_page Delta)

### BE (Step 4b)
- **skip** · API Mới / entity / migration / NT controller: **none**
- Reuse Live `NghiemThuController` `api/v1/patrol/nghiem-thu` · Mobile.Bff catch-all
- Verified `UsersMobileController` already forwards `GET mobile-bff/api/v1/integration/users` → `api/v1/integration/users` (no new code)
- `road-routes/search` already Live on Mobile.Bff
- DOMAIN-MAP keep · **cấm ERP.***

### FE — T-* Dev

| ID | Status | Deliverable |
|----|--------|-------------|
| T-UI-LKP-01 | **done** | SearchInput route → `ROAD_ROUTE_LOOKUP_CONFIG` (no seed) · assignee → `USER_LOOKUP_CONFIG` · **cấm** ERP UserSearchInput |
| T-UI-FIELD-01 | **done** | Delta * fields map DTO/API 1:1 · labels `nghiemThu.*` / LOOKUP_STATIC |
| T-UI-FORM-01 | **done** | Pattern B · CTA `disabled={saving}` only · banner `string[]` NT-10b · **0** `disabled={!canSave}` · **0** `alert.warning` |
| T-UI-LEAVE-01 | **done** | keep `useFormLeaveGuard` + `LeaveConfirmModal` · **0** `window.confirm` |
| T-UI-PROD-01 | **done** | end-user chrome · UTF-8 · no Dev/GAP notes on UI |
| T-UI-UX-01 | **done** | phone form ≤430 · keep Android 1-1 shell · no ERP Modal |
| T-UI-RESP-01 | **done** | STD-ROUTE `/nghiem-thu/moi` · Field hub alias keep · **cấm** new tab/icon |
| T-BE-INIT-01 | **done** | init-data keep · users BFF forward verified · road-routes Live |
| T-BE-CRUD-01 | **done** | GET/POST/PUT keep · files/* ≤10 · DELETE OUT · Step 4b skip |
| T-PERM-01 | **done** | keep existing patrol nghiem-thu perms · no new codes |

### Files touched
- `src/pages/WebRmmsNghiemThu/NghiemThuFormPage.tsx` — Pattern B + SearchInput route/assignee + banner
- `src/pages/WebRmmsNghiemThu/lookupStatic.ts` — error.* keys for banner/inline
- Lookups reuse: `src/services/patrol/lookups.ts` — `ROAD_ROUTE_LOOKUP_CONFIG` / `USER_LOOKUP_CONFIG` / `resolveCurrentUser` (no seed)

### Media / GPS
- NT-08 `RouteCaptureControl` — environment camera shutter (Photo geo) · MediaIds ≤10
- GPS deny → no fake FieldInfo/Zone · banner on submit if deny + empty FieldInfo

## APIs wired

| Zone | Method | Path |
|------|--------|------|
| NT-01 list | GET | `patrol/nghiem-thu?search=` |
| NT-05 mau/scores | GET | `patrol/nghiem-thu/init-data` |
| NT-06 route* | GET | `integration/road-routes/search` |
| NT-06b assignee* | GET | `integration/users?search=` |
| NT-10 create | POST | `patrol/nghiem-thu` |
| NT-11 detail | GET/PUT | `patrol/nghiem-thu/{id}` |
| NT-08 media | * | `files/*` via RouteCaptureControl |

Base client: Mobile BFF `…/mobile-bff/api/v1` · **cấm** web-bff base.

## WAIVE (phone)
Kind B DES-GRID · LinErpListFilterBar · LinCatalogUiSchemaEditorModal · T-UI-FILTER · T-UI-HIST · DELETE — N/A P1

## Notes — người NT theo tài khoản (2026-10-06)

Ô Người NT readonly. Tạo mới gắn `caller` của `GET patrol/actors` (mã nhân viên). Sửa/xem giữ mã đã lưu, không đổi. Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Debt / GAP keep
- ZoneOrgCode: no reverse-geocode → GPS fills FieldInfo only · zone RO empty unless loaded
- e2e **queued QA** — cấm Dev (`T-QA-FORM-01` · `T-QA-CRUD-01`)
- OMS form-options catalog `web-rmms-nghiem-thu` — fallback LOOKUP_STATIC until seeded

## Verify
- `yarn build` PASS · chunk `nghiem-thu.*.js`
- Mobile.Bff `dotnet build` PASS · Step 4b skip · no WS entity/migration delta
- Gate: **0** `disabled={!canSave}` · **0** `alert.warning` · **0** `ROAD_ROUTE_SEED` in NT form

## QA verdict (task_5ba3b008)

| Gate | Result |
|------|--------|
| e2e S0/S1/QA-20 | **PASS** · capture · PNG screens/ |
| T-QA-FORM-01 | **PASS** · Pattern B + SearchInput |
| T-QA-CRUD-01 | **WAIVE** smoke (no write in suite) |
| stock yarn e2e-qa | FAIL soft BLANK · workaround capture |
| P0 | **0** · handoff Review · **cấm** phase=done |
