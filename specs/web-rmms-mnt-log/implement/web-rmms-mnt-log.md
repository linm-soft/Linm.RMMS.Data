# Dev — Implement — web-rmms-mnt-log

> Status: **done** · writtenAt `2026-09-26T06:30:00.000Z` · task `task_4d6046f4`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này.

| | |
|--|--|
| Feature | `web-rmms-mnt-log` |
| Title | Nhật ký công việc (WORK-G) |
| Role | `dev` |
| changeScope | `new_page` |
| formPattern | Mobile full/sheet WORK-G · phone ≤430 · `#sc-mnt-log` · N/A ERP Modal |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-log` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| productRoute | `/work/log?id=` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **cấm ERP.*** |
| Step 4b | **skip** · API Mới / entity / migration: **none** (SA) |
| build | MFE `yarn build` **PASS** · BE change **N/A** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e ở Dev |

## Decisions

- WORK-G RO timeline · entry peer WORK-L mọi status + `?id=`
- Prefill: `GET maintenance/work-orders/{id}` + `GET …/init-data` via `maintenanceWorkOrdersEndpoint` (Mobile.Bff)
- Timeline P1: `deriveTimelineRows` client from Signed DTO · newest-first · **cấm** invent `/logs`
- Labels: `useFormOptions('web-rmms-mnt-log')` + init-data · LOOKUP_STATIC fallback · GAP-LABEL-01 mapped
- **cấm** POST · write CTA · GPS capture/fake · web-bff · ERP.* · Me*
- Alias: `/work/log` → `/web-rmms-mnt-log` (parity WORK-P)

## Tasks

| id | status | notes |
|----|--------|-------|
| T-01 | **done** | Route + shell `#sc-mnt-log` · alias product |
| T-02 | **done** | Header RO · GET {id} · status/workType labels |
| T-03 | **done** | Derive 6-row map · omit empty · newest-first |
| T-04 | **done** | empty/fail · no write/GPS · BFF wire · prototype parity |
| T-BE | **N/A** | DOMAIN-MAP applied prior · no BE write |
| T-QA | pending | queued `/agent-qa*` |

## Files (MFE)

| Path | Role |
|------|------|
| `src/pages/WebRmmsMntLog/MntLogPage.tsx` | WORK-G page |
| `src/pages/WebRmmsMntLog/deriveTimeline.ts` | client derive |
| `src/pages/WebRmmsMntLog/WebRmmsMntLogLayout.tsx` | phone shell |
| `src/pages/WebRmmsMntLog/aliasRedirects.tsx` | `/work/log` → STD |
| `src/pages/WebRmmsMntLog/paths.ts` · `lookupStatic.ts` · `styles.module.css` | SSOT |
| `src/index.tsx` · `src/dev/devRoutes.ts` | route + catalog |

## APIs

| Mode | Endpoint |
|------|----------|
| Prefill | `GET /maintenance/work-orders/{id}` |
| Init | `GET /maintenance/work-orders/init-data` |
| Write | **N/A** |

## Derive row map

| Row id | Condition | Stamp |
|--------|-----------|-------|
| `created` | always (CreatedAt) | CreatedAt |
| `due` | DueAt set | DueAt |
| `description` | Description non-empty | CreatedAt |
| `progress` | pct>0 or in_progress/done | UpdatedAt |
| `note` | Note non-empty | UpdatedAt |
| `done` | status done | UpdatedAt |

## AC checklist

| AC | Result |
|----|--------|
| AC-TL-01..03 | PASS |
| AC-HDR-01 · AC-LBL-01 | PASS |
| AC-RO-01 · AC-BFF-01 · AC-GPS-01 | PASS |
| phone ≤430 · `#sc-mnt-log` | PASS |

## Debt / next

- T-QA e2e queued · review after QA
- Peer chat/estimate vẫn nav-only (out of scope)
