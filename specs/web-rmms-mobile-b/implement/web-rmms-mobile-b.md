# Implement — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field cards · Kind B **WAIVE**) |
| changeScope | `edit_page` · editTask=1 · § Delta Pattern B / capture / BFF / align |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| BFF | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm web-bff** |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| skillVersion | `2026.09.19.01` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T07:40:00.000Z` |
| taskId | `task_8b5d947e` |
| demo | **N/A** · wave B |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở Dev |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `nhat-ky` · size-limit WARN only pre-exist) |
| BE `dotnet build` RMMS.Service.Api | **PASS** (0 error · 1 pre-exist CS0105) |
| BE `dotnet build` RMMS.Mobile.Bff | **PASS** (UsersMobileController) |
| migration | **none new** (Schema_PatrolJournalLine prior) |

## Delta this run

| id | Change |
|----|--------|
| T-DELTA-PATTERN-B-01 | `JournalFormPage` — Lưu `disabled` chỉ `saving`/`hydrating`/`capturing` · `validationAttempted` · banner `string[]` + dismiss · inline GPS/narrative · **0** `alert.warning` client · **0** `disabled={!canSave}` |
| T-DELTA-CAPTURE-01 | Local `<input type="file" accept="image/*" capture="environment">` + upload qua `mediaApi` · LinImageUpload giữ gallery (no capture prop — UNCLEAR-CAPTURE-PROP → local input) |
| T-DELTA-BFF-01 | `bindMobileApiClient()` trên patrol endpoint · Mobile.Bff `UsersMobileController` forward `integration/users` |
| T-DELTA-ALIGN-01 | Phone shell `data-phone-frame="430"` · `--rmms-m-phone: 430px` · **0** new route/tab/icon |

## Screens wired

| id | Route | Notes |
|----|-------|-------|
| TD-04 | `/web-rmms-mobile-b` · `/web-rmms-mobile-b/:sessionId` | list cards KEEP |
| TD-05 | `…/:sessionId/moi` · `…/:sessionId/:lineId` | Pattern B + capture + banner |
| DES-LEAVE | TD-05 | `useFormLeaveGuard` · LeaveConfirmModal KEEP |

## APIs

| Method | Path | FE |
|--------|------|----|
| GET | `/patrol/sessions/{id}/journal-lines` | TD-04 |
| POST/PUT | `/patrol/journal-lines` · `/{id}` | TD-05 |
| GET | `/patrol/journal-lines/{id}` | hydrate |
| GET | `/patrol/sessions/{id}` | parent |
| GET | auth/profile · files/* | userName · mediaIds |
| GET | `/integration/users` | Mobile.Bff forward (SearchInput peers) |

## Tasks DoD

| id | status |
|----|--------|
| T-BE-* / T-UI-* (prior) | **done** |
| T-DELTA-PATTERN-B-01 | **done** |
| T-DELTA-CAPTURE-01 | **done** |
| T-DELTA-BFF-01 | **done** |
| T-DELTA-ALIGN-01 | **done** |
| T-QA-* | **failed** · see QA verdict |

## Debt

- RequirePermission TODO until CommonLib ≥1.4.0
- UNCLEAR-LRS kmText tay KEEP
- LinImageUpload gallery picker vẫn không có `capture` (package) — camera qua local input
- STATUS mfeStdRoute `/web-rmms-mobile-b` stale vs code `/nhat-ky` · hub CTA journal missing

## QA verdict

- **FAIL** · task `task_8be1a3ec` · `qa_fail_rollback`
- **GAP-QA-STD-01** Must: `mfeStdUrl=/web-rmms-mobile-b` → 404 · live `/nhat-ky`
- **GAP-QA-FEAT-01** Must: hub peer A thiếu CTA «Ghi nhật ký» / «Sổ trong ca»
- Live TD-04/TD-05 Pattern B UI **Aligned** at `/nhat-ky` · T-QA-FORM-01 pass smoke
- Evidence: `specs/web-rmms-mobile-b/qa/scenarios.md` · `handoff/qa-compact.md`

## Notes

- UNCLEAR-BANNER-KEYS → `JOURNAL_LOOKUP_STATIC` keys `error.gpsRequired` / `error.narrativeRequired`
- Labels via `lookupStatic` + `useFormOptions('web-rmms-mobile-b')` · **cấm** hardcode VN ngoài fallback
