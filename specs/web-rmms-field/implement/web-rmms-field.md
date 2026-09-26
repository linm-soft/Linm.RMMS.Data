# Implement — web-rmms-field

> Status: **done** · writtenAt `2026-09-26T02:40:00.000Z` · task `task_e0a60198`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> mfeStdUrl: `http://localhost:9301/web-rmms-field`  
> contentHash: `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e`

| | |
|--|--|
| Feature | `web-rmms-field` |
| Title | Hub Field — chrome native · 2 cửa · sync · tiles×7 · session badge |
| Role | `dev` · `/agent-dev` |
| changeScope | `new_page` |
| formPattern | Mobile Field hub / full · phone ≤430 · N/A Modal · DES-GRID N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field` |
| productAlias | `/field` · `/field/tuan-duong` · `/field/tuan-kiem` · … |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **Step 4b skip** · reuse PatrolSessionsController |
| DOMAIN-MAP | `web-rmms-field` → Patrol |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |
| e2e | **queued QA** — **cấm** run at Dev |

## Done (T-*)

| id | Result |
|----|--------|
| T-BE-CRUD-01 | Live `GET mobile-bff/api/v1/patrol/sessions?pageSize=50` → sessionHint + door badges · **cấm** hub POST/PUT |
| T-BE-INIT-01 | Labels `field.*` / `tab.field` via `useFormOptions('web-rmms-field')` + LOOKUP_STATIC |
| T-PERM-01 | Guest gate · **cấm** sessions khi unauth · CTA → `/web-rmms-home` |
| T-UI-FL-01 | FL-00…03 phone 430 · doors + sync(+badge) + tiles×7 + sessionHint · empty/loading/error |
| T-UI-ACT-01 | All door/sync/tile → navigate peers · no dead buttons |
| T-UI-FIELD-01 | Text RO sessionHint · Number RO syncBadge · Button/Nav doors/tiles · GPS **none** |
| T-UI-PROD-01 | End-user copy only · no Dev/GAP notes on UI |
| T-UI-UX-01 | Spacing 4/8/12/16 · Lin* toast · empty/loading/error |
| T-UI-RESP-01 | max-width 430 · 768/1280 media · no blind shrink |
| T-UI-HIST-01 | sessions fail → `dispatchAppToast` + inline retry · **cấm** `alert()` |
| T-QA-* | pending · queued `/agent-qa*` |

## Files (MFE)

- `src/pages/WebRmmsField/*` — layout · FieldHubPage · paths · lookupStatic · styles · aliases · index
- `src/index.tsx` — route `/web-rmms-field` + product aliases
- `src/dev/devRoutes.ts` — Field hub group
- `mfe.routes.json` — `web-rmms-field`
- Peer FIELD_HUB pointers: Attendance · CamPatrol · Offline · Home

## APIs (Mobile.Bff)

- `GET /patrol/sessions?status=Đang tuần&page=1&pageSize=50` — badge + sessionHint only
- Sync badge = `offlineQueueStore.pendingCount()` (local) · nav `/web-rmms-offline`
- **API Mới / migration / entity:** none · Step 4b **skip**

## Peer nav map

| Control | Target |
|---------|--------|
| doorPatrol | `/web-rmms-mobile-a/tuan-duong` |
| doorInspect | `/web-rmms-mobile-a/tuan-kiem` |
| syncBtn | `/web-rmms-offline` |
| tileAttendance | `/web-rmms-attendance` |
| tileHistory | `/web-rmms-mobile-a/tuan-duong/lich-su` |
| tileNghiemThu | `/web-rmms-nghiem-thu` |
| tileCam | `/web-rmms-cam-patrol` |
| tileReflect | `/web-rmms-mobile-c` (closest until dedicated field-reflect) |
| tileSupervise | `/web-rmms-ops` |
| tileMap | `/web-rmms-gis` |

## Prototype modes (cite)

`?badge=1` · `?sync=3` · `?empty=1` · `?error=1` — Live-first; empty/error/sync query for UI verify.

## Debt

- Dedicated MFE `field-reflect` / `supervise` / `patrol-map` chưa có — tile nav closest peer STD
- Shell tab `SH-04` `/web-rmms-shell/field` vẫn FieldDoorsPage (tab chrome) · product `/field` = STD hub

## Next

`/agent-qa*` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued
