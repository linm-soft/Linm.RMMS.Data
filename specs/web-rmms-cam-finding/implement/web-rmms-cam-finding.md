# Implement — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` · phone FIND-L/F/D · ≠ Kind B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` |
| productRoute | `/phat-hien/:sessionId*` KEEP |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · **cấm** web-bff |
| entity/migration | **none** · Step 4b **skip** (SA/TL) |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e ở Dev |
| updatedAt | `2026-10-01T00:50:00.000Z` |
| taskId | `task_8fda70d3` |
| skillId | `agent-dev` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |

## Done (T-*)

| Id | Result |
|----|--------|
| T-FIND-ROLE | `camFindingAccess` · FAB/save/recheck gated `roleCaps.tuanKiem` · roleGateBanner non-TK |
| T-FIND-DUE | `tt41FindingDue.ts` · hangMuc→dueAt suggest · editable · cấm SlaHours=24 |
| T-FIND-SLA | `deriveSlaBadge` client · Trong hạn/Quá hạn · list+detail |
| T-FIND-ASSIGN-RM | REMOVE CTA Giao đơn vị BDTX · API-07 unused UI |
| T-FIND-GPS | Pattern B · Lưu/recheck enabled trừ saving\|photoBusy · deny→BANNER |
| T-FIND-LEAVE | LeaveConfirmModal dirty FIND-F · cấm native confirm |

## Files touched

- `src/pages/WebRmmsMobileC/FindingListPage.tsx`
- `src/pages/WebRmmsMobileC/FindingFormPage.tsx`
- `src/pages/WebRmmsMobileC/FindingDetailPage.tsx`
- `src/pages/WebRmmsMobileC/camFindingAccess.ts` (new)
- `src/pages/WebRmmsMobileC/tt41FindingDue.ts` (new)
- `src/pages/WebRmmsMobileC/aliasRedirects.tsx` (new)
- `src/pages/WebRmmsMobileC/lookupStatic.ts`
- `src/index.tsx` · alias `/web-rmms-cam-finding`
- `src/dev/devRoutes.ts`

## APIs (Live KEEP)

| Mode | API |
|------|-----|
| list | GET findings?sessionId |
| create | POST findings · files · profile |
| detail | GET{id} · recheck · feedback |
| assign | API-07 keep · UI out |
| session | GET sessions/{id} |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (warnings size only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0/0 |
| Step 4b | **skip** · DOMAIN-MAP row exists |

## Debt / handoff QA

- Edit form PUT full fields vẫn Live-narrow (`UpdatePatrolFindingRequest.violationAction`) — create path persist dueAt
- E2E: role gate · due suggest · slaBadge · no assign CTA · Pattern B · leave dirty
- next: `/agent-qa` · scenarios.md

**dev_confirm:** approve · autoApprove=ON · `task_8fda70d3`
