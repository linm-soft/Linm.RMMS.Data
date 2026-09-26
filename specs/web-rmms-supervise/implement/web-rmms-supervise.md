# Dev — Implement — web-rmms-supervise

> Status: **done** · task `task_dd38290f` · writtenAt `2026-09-26T03:10:00.000Z`  
> skillVersion: `2026.09.05.03` · contentHash: `sha256:bd4aedbcdb3686ca817a32c3f563270adc1d35b1f7bca526be023528a1840d2b`  
> autoApprove: ON · e2eQa: ON (queued `/agent-qa*` — **cấm** E2E ở Dev) · Step4b/migration: **skip**

| | |
|--|--|
| Feature | `web-rmms-supervise` |
| Title | Giám sát và chi tiết (Mobile list + RO detail) |
| Role | `dev` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile list + RO detail · phone ≤430 · N/A Modal/Slideout · no POST P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-supervise` |
| mfeStdUrl | `http://localhost:9301/web-rmms-supervise` |
| productRoutes | `/supervise` · `/supervise/:id` · `/field/supervise*` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` |
| demo | **N/A** · live GET only · **cấm** demo SSOT |

## Notes

- Reuse live `GET mobile-bff/api/v1/patrol/attendance-logs` + `GET/{id}` via existing `attendanceLogsEndpoint` · **cấm** invent `/supervise*` API · **cấm** invent `fromDate` · **cấm** POST P1.
- Day filter = client `CheckInAt` (`localDayKey`) · route Select options from live list · Org = Note/org fields fallback.
- GPS: RO stored Lat/Lng only · map CTA → `/patrol-map?lat&lng&attId` · **cấm** capture/fake/POST.
- Labels: `useFormOptions('web-rmms-supervise')` + `supervise.*` lookupStatic.
- Entry W2: Home + Field `paths.supervise` → `/web-rmms-supervise` (was ops).
- DES-GRID / LinErpListFilterBar / `LinCatalogUiSchemaEditorModal`: **N/A** phone list.
- Step4b / migration / new-endpoint: **skip** (SA reuse).

## Files (FE)

| Path | Role |
|------|------|
| `src/pages/WebRmmsSupervise/*` | Layout · List · Detail · paths · lookup · styles · aliases |
| `src/index.tsx` | STD + product aliases `/supervise*` `/field/supervise*` |
| `src/pages/WebRmmsHome/paths.ts` | `supervise` → STD |
| `src/pages/WebRmmsField/paths.ts` | `PEER.supervise` → STD |
| `src/dev/devRoutes.ts` | Dev nav Supervise |

## API map

| Mode | API | Notes |
|------|-----|-------|
| List | `GET …/patrol/attendance-logs` | live · client day+route |
| Detail RO | `GET …/patrol/attendance-logs/{id}` | RO · Lat/Lng pass-through |
| Write | — | no write P1 |

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-01 | **done** | routes/shell phone 430 · SUP-00…03 |
| T-02 | **done** | filter sheet route Select + day · cấm fromDate |
| T-03 | **done** | cards + badges · empty [] live |
| T-04 | **done** | detail RO + map CTA Lat/Lng |
| T-05 | **done** | segment → `/patrol-map` · Home/Field W2 |
| T-06 | **done** | useFormOptions · supervise.* · AC-LIST ready QA |

## VERIFY GATE

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (chunk `web-rmms-supervise`) |
| BE `dotnet build` | **PASS** (0 err · no code change) |
| E2E / `start:std` | **skipped** (queued QA) |

## Debt / carry QA

- UNCLEAR-EMPTY-COPY: live empty copy wired — QA verify copy tone
- GIS map may ignore `lat`/`lng` query until peer consumes — CTA still passes RO coords
- next: `/agent-qa` · roleOnly stop (GAP-PKT-ROLE-01)
