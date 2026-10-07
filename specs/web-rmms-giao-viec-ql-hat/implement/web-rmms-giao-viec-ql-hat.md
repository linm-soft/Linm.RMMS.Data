# Implement — web-rmms-giao-viec-ql-hat

> Status: **done** · writtenAt `2026-10-01T04:10:00.000Z` · task `task_d0cb541d`  
> skillVersion: `2026.09.05.03` · packKind: `list` (phone edit) · changeScope: `edit_page`  
> mfeStdUrl: `http://localhost:9301/web-rmms-giao-viec-ql-hat` · roleOnly `/agent-dev`

| | |
|--|--|
| Feature | `web-rmms-giao-viec-ql-hat` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` |
| Route | alias `/web-rmms-giao-viec-ql-hat` → `/cong-viec` · product assign `?mode=assign` |

## Decisions

- changeScope `edit_page` · **cấm** invent `giao-viec/*` controller/route · **cấm** ERP.* · **cấm** web-bff
- Step 4b / migration **skip** (SA-DEC-06) · reuse Live `CreateWorkOrderRequest`
- CTA `assignCta` iff `roleCaps.qlHat` · **cấm** MANAGER-RMMS suy giao
- GV-F: `/cong-viec?incidentId=|&reportId=|&mode=assign` · hangMuc TT41 static · dueAt hint editable · **omit SlaHours** (cấm 24h)
- List INC: unscoped when qlHat (`camIncidentListNeedsReporterScope`) · RPT history unscoped
- LeaveConfirmModal dirty GV-F · **cấm** native alert/confirm
- Kind B LIST/FILTER/CFG **WAIVE** (phone · GAP-TL-FORMTYPE-01)

## APIs

| Id | Method | Path | Note |
|----|--------|------|------|
| API-WO | POST | `mobile-bff/api/v1/maintenance/work-orders` | DueAt required · no SlaHours |
| API-WO-L | GET | `…/maintenance/work-orders` | WORK-L / GV-W |
| API-INC-A | POST | `…/incident/incidents/{id}/assign` | optional cite after WO |
| API-INC | GET | `…/incident/incidents*` | list/detail · unscoped qlHat |
| API-RPT | GET | `…/patrol/sessions*` | lich-su / detail |
| API-USR | GET | `…/integration/users` | assignee SearchInput |
| API-PROF | GET | `…/auth/profile` | roleCaps.qlHat |

## FE surfaces

| Zone | File / peer |
|------|-------------|
| GV-F | `WebRmmsWork/AssignFormPage.tsx` · `tt41HangMuc.ts` |
| GV-W | `WebRmmsWork/WorkListPage.tsx` hub qlHat · mode=assign switch |
| GV-D-INC | `IncidentDetailPage` / `IncidentListPage` · `paths.workFor` + `mode=assign` |
| GV-D-RPT | `PatrolDetailPage` assignCta → `?reportId=&mode=assign` |
| GV-L-INC | Incident list unscoped for qlHat |
| GV-L-RPT | `HistoryPage` `/tuan-duong/lich-su` (keep) |
| alias | `GiaoViecQlHatAliasRedirect` → `/cong-viec` |
| DES-LEAVE | LeaveConfirmModal on AssignFormPage |

## Build

| Layer | Command | Result |
|-------|---------|--------|
| MFE | `yarn build` (cwd Mobile) | **PASS** (size warnings only) |
| BE | `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0W 0E |
| Step 4b | — | **skip** · DOMAIN-MAP row Maintenance already present |
| Overlay / e2e | — | **cấm** Dev · queued QA |

## Notes — lý trình giao việc (2026-10-07)

- GV-F điền tuyến và cột KM / khoảng cách từ GET sự cố (`kmStart`, `kmEnd`) hoặc ca (`fromKm`, `toKm`). Không nhớ lý trình local. Không bắt nhập lại khi nguồn đã có số km.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.

## Debt / next

- E2E AC-GV-01…09 · **queued** `/agent-qa*` · live mfeStdUrl
- Team SearchInput = free-text required (no Mobile.Bff org-units forward) · debt soft
- Optional incident assign cite best-effort after WO create

## T-* status

| Id | Status |
|----|--------|
| T-GV-01 · T-PERM-01 | done |
| T-GV-02 · T-GV-05 | done |
| T-GV-03 | done |
| T-GV-04 · T-UI-LEAVE-01 | done |
| T-UI-UX-01 · T-UI-RESP-01 · T-UI-PROD-01 · T-UI-ALIGN-01 | done (phone ≤430) |
| T-BE | N/A (skip) |
| T-QA-GV-01 | pending QA |
