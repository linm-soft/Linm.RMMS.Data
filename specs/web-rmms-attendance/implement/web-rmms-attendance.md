# Implement — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| taskId | `task_714f7885` |
| packKind | `list` |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cham-cong` |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol Live · **cấm ERP.*** |
| bff | Mobile.Bff `:5202` · `mobile-bff/api/v1/patrol/attendance-logs` |
| writtenAt | `2026-09-27T16:50:00.000Z` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |
| skillVersion | `2026.09.05.03` |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## DoR

| Gate | Result |
|------|--------|
| T-DELTA-PB-01 Pattern B CTA | **PASS** · bỏ `disabled={!canCheckIn}` · `disabled={saving}` only |
| Client validate on submit | **PASS** · banner `string[]` · GPS on-submit + modal |
| API errors | **PASS** · toast only · cấm banner API |
| UNCLEAR-BANNER-VS-TOAST | **CLOSED** · client banner · API toast · GPS modal OK |
| Prior T-BE/UI/PERM | **keep** · Live reuse · Step 4b **N/A** |
| Build MFE `yarn build` | **PASS** |
| Build BE `dotnet build` Api | **PASS** · no BE delta |
| E2E | **queued** `/agent-qa*` · **cấm** Dev e2e |

## Delta files (MFE)

- `src/pages/WebRmmsAttendance/AttendanceHubPage.tsx` — Pattern B
- `src/pages/WebRmmsAttendance/styles.module.css` — validation banner
- `src/pages/WebRmmsAttendance/lookupStatic.ts` — `attendance.banner.dismiss`

## APIs (unchanged)

| Method | Path | Notes |
|--------|------|-------|
| GET | `patrol/attendance-logs` | list |
| POST | `patrol/attendance-logs` | GPS+route on submit |
| GET | `patrol/attendance-logs/{id}` | log RO |
| GET | `auth/profile` | soft |
| — | report/day | client `aggregateByDay` |

## Debt

- Face/NFC DEFER · report API invent DEFER
- Route POST requires active session / prior log route

## Next

`/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
