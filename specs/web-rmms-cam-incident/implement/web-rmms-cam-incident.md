# Implement — web-rmms-cam-incident

> Status: **done** · skillVersion `2026.09.05.03` · task `task_a125a09f` · writtenAt `2026-10-01T03:10:00.000Z`  
> contentHash: `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**  
> MFE build: **PASS** (`yarn build`) · Step 4b / BE: **WAIVE** (Live KEEP · entity none)

| | |
|--|--|
| Feature | `web-rmms-cam-incident` |
| Role | `dev` · `/agent-dev` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Incident · **cấm ERP.*** · migration **none** |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (alias only) |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |

## Done summary

Role-gate + DEC-LIST/CLOSE + assign CTA trên Incident* peer — **không** invent CamIncident* / route / API.

| T-* | Result |
|-----|--------|
| T-01 INC-CAP | `camIncidentAccess` · CaptureSheet write-only tuần đường · LeaveConfirm dirty · lock=`busy` only |
| T-02 INC-N | Create gate non-tuanDuong → roleGateBanner · Pattern B GPS KEEP · leave dirty KEEP |
| T-03 INC-D | DEC-CLOSE-01 ẩn close QL_HAT/TK/NT · assignCta `paths.workFor` QL_HAT |
| T-04 INC-L | DEC-LIST-01 client filter reporter · fabCreate ẩn non-tuan · assignCta qlHat |
| T-PERM-01 | matrix cite roleCaps · **cấm** MANAGER→Giao việc |
| T-UI-LEAVE/UX/RESP/PROD | LeaveConfirmModal · LOOKUP_STATIC · ≤430 · `/van-de*` |
| Kind B LIST/FILTER/CFG/HIST | **WAIVE** phone |
| Step 4b / T-BE-* | **WAIVE** Live DTO KEEP |

## Files touched

| Path | Change |
|------|--------|
| `src/pages/WebRmmsIncident/camIncidentAccess.ts` | **new** · write/assign/close/list-scope helpers |
| `src/pages/WebRmmsIncident/IncidentCaptureSheet.tsx` | role-gate + leave dirty |
| `src/pages/WebRmmsIncident/IncidentCreatePage.tsx` | create deny non-tuan · leave gated |
| `src/pages/WebRmmsIncident/IncidentDetailPage.tsx` | close gate · assign CTA · banners |
| `src/pages/WebRmmsIncident/IncidentListPage.tsx` | DEC-LIST-01 · fabCreate · assignCta · banners |
| `src/pages/WebRmmsIncident/lookupStatic.ts` | role / assign copy |
| `src/pages/WebRmmsIncident/styles.module.css` | `.bannerInfo` |

## API (Live KEEP — no invent)

| API | Path | Notes |
|-----|------|-------|
| API-01 | GET `incident/incidents` | INC-L + client reporter filter |
| API-02 | POST `incident/incidents` | INC-N tuần đường |
| API-03 | GET `incident/incidents/{id}` | INC-D |
| API-04 | POST `…/close` | UI tuần đường only · BE KEEP |
| API-05..08 | sessions · asset-types · files · auth/profile | cite Live |

Prefix: `mobile-bff/api/v1/**` · Domain: Incident · DOMAIN-MAP slug CLOSED SA.

## Verify

- [x] `yarn build` MFE PASS (webpack warnings size only)
- [x] No new route / CamIncident* / ERP.* / web-bff
- [ ] E2E — **queued** `/agent-qa*` only (cấm run ở role này)

## Debt / handoff QA

- E2E: T-QA-ROLE-01 · T-QA-GPS-01 · T-QA-LEAVE-01 · T-QA-ROUTE-01
- next: `/agent-qa` (roleOnly stop GAP-PKT-ROLE-01)
