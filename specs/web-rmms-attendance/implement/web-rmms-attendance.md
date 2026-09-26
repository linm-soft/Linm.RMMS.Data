# Implement — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| taskId | `task_8abebdd3` |
| packKind | `list` |
| changeScope | `new_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol Live · **cấm ERP.*** |
| bff | Mobile.Bff `:5202` catch-all · `mobile-bff/api/v1/patrol/attendance-logs` |
| writtenAt | `2026-09-26T02:00:00.000Z` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |

## DoR

| Gate | Result |
|------|--------|
| T-BE-CRUD-01 Live GET/POST/GET{id} | **PASS** · `services/attendance/endpoint.ts` |
| T-BE-INIT-01 LOOKUP_STATIC | **PASS** · `lookupStatic.ts` + `useFormOptions('web-rmms-attendance')` |
| T-PERM-01 guest→login | **PASS** · hub guest gate |
| T-UI-ATT-01 hub ATT-00…05 empty | **PASS** · phone ≤430 · DES-MOB-ATT |
| T-UI-ATT-02 GPS + Chấm vào | **PASS** · deny=no POST · cấm fake |
| T-UI-ATT-03 report/day/log RO | **PASS** · client aggregate |
| T-UI-ACT/FIELD/PROD/UX/RESP/HIST | **PASS** · toast overlay · no alert · labels keys |
| Build MFE `yarn build` | **PASS** |
| Build BE `dotnet build` Api | **PASS** |
| Step 4b / API Mới | **N/A** · SA none · reuse Live · Mobile catch-all |
| E2E | **queued** `/agent-qa*` · **cấm** Dev e2e |

## Surfaces

| Route | Zones |
|-------|-------|
| `/web-rmms-attendance` | ATT-00…03 · ATT-07/08 |
| `/web-rmms-attendance/report` | ATT-04 |
| `/web-rmms-attendance/day/:key` | ATT-05 |
| `/web-rmms-attendance/log/:id` | ATT-06 |
| aliases `/field/attendance*` | ATT-09 entry |

## APIs

| Method | Path | Notes |
|--------|------|-------|
| GET | `patrol/attendance-logs` | list · pageSize 200 |
| POST | `patrol/attendance-logs` | GPS required · status `Đúng tuyến` · inZone true |
| GET | `patrol/attendance-logs/{id}` | log RO |
| GET | `auth/profile` | soft via `loadProfileLite` |
| — | report/day | **client** `aggregateByDay` · **cấm** invent |

## Files (MFE)

- `src/services/attendance/types.ts` · `endpoint.ts`
- `src/pages/WebRmmsAttendance/*` (layout · hub · report · day · log · lookup · styles · aliases)
- `src/index.tsx` · `src/dev/devRoutes.ts`
- Entry: `FieldDoorsPage` · `FieldHubPage` · shell lookup

## Debt / UNCLEAR

- UNCLEAR-EMPTY-COPY → QA live `[]`
- Face/NFC DEFER · report API invent DEFER
- Route POST requires active session / prior log route

## Next

`/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
