# Implement — web-rmms-estimate

> Status: **PASS** · role `dev` · task `task_035b7d8e` · writtenAt `2026-09-26T03:30:00.000Z`  
> packKind: `list` · changeScope: `new_page` · skillVersion: `2026.09.05.03`  
> contentHash: `sha256:e1c8b123ebcdfe00a047c54870cd6811ade05101504bd5480c8302ce7834373a`  
> Prior: team_lead confirmed · autoApprove=ON · **cấm** e2e / start:std (queued QA)

| | |
|--|--|
| Feature | `web-rmms-estimate` |
| Title | Ước lượng sự cố |
| mfeStdRoute | `/web-rmms-estimate` |
| mfeStdUrl | `http://localhost:9301/web-rmms-estimate` |
| productRoute | `/incident/estimate/:id` |
| peerRoute | `/work/estimate` · `/work/estimate/:id` |
| BE | Live cite AiVision estimates · Incident GET · Maintenance WO · **no** Step 4b |
| BFF | Mobile.Bff catch-all `:5202` · `mobile-bff/api/v1/ai-vision/estimates/**` |
| WO-GATE | YES · confirm lock · cấm auto WO |
| Build | MFE `yarn build` **PASS** · WebService `dotnet build` **PASS** |

## T-* DoD

| id | status | notes |
|----|--------|-------|
| T-FE-01 | **PASS** | `/web-rmms-estimate` · EST-EMPTY khi thiếu id · phone ≤430 |
| T-FE-02 | **PASS** | `/work/estimate` → STD `?entry=work` · same form |
| T-FE-03 | **PASS** | GET `incident/incidents/{id}` live header · cấm HostIncidentsStub FE |
| T-FE-04 | **PASS** | POST `ai-vision/estimates/from-incident/{id}` · EST-OPEN |
| T-FE-05 | **PASS** | Qty/UnitPrice edit · PUT Lines[] · totalAmount RO |
| T-FE-06 | **PASS** | draft · confirm · EST-LOCK lines RO |
| T-FE-07 | **PASS** | WO disable until confirm · POST `maintenance/work-orders` · TOAST |
| T-FE-08 | **PASS** | LeaveConfirmModal · useFormOptions · no GPS · no alert |
| T-FE-09 | **PASS** | GET init-data · status/source/defect/severity options |
| T-BE-01 | **PASS** | Cite Live only · DOMAIN-MAP row AiVision · Mobile catch-all · no migration |

## Files (MFE)

- `src/pages/WebRmmsEstimate/*` — layout · form · paths · lookup · styles · alias
- `src/services/estimate/*` — endpoint + types (Mobile.Bff relative)
- `src/index.tsx` — STD + product + work peer routes
- `src/pages/WebRmmsIncident/paths.ts` · `IncidentDetailPage.tsx` — peer → estimate
- `src/pages/WebRmmsWork/WorkPeerPages.tsx` — estimate shell removed (redirect)
- `src/dev/devRoutes.ts` — Estimate board entries

## APIs (Live)

| Action | Path |
|--------|------|
| Header | GET `incident/incidents/{id}` |
| Lookups | GET `ai-vision/estimates/init-data` |
| Open | POST `ai-vision/estimates/from-incident/{incidentId}` |
| Load | GET `ai-vision/estimates/{id}` |
| Save | PUT `ai-vision/estimates/{id}` |
| Draft | POST `ai-vision/estimates/{id}/draft` |
| Confirm | POST `ai-vision/estimates/{id}/confirm` |
| WO | POST `maintenance/work-orders` (after confirm only) |

## Debt / OUT

- from-defects · UnitPriceCatalog UI · Me* · GPS · invent `ai-estimate/*` · Kind B list · e2e (QA)
- Mobile.Bff private NuGet restore fail local (pre-existing) — catch-all code path cite OK

## Next

- `/agent-qa*` · T-QA-01 scenarios + E2E · roleOnly stop
