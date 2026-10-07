# Implement — web-rmms-cam-home

> Status: **done** · skillVersion `2026.09.05.03` · task `task_a3101738` · writtenAt `2026-10-01T04:15:00.000Z`  
> contentHash: `sha256:4bca94712257e93fa88e3cec4f6bb851b3aa00d7a28508932d46aef12b73441a`  
> PackKind: **list** · changeScope: **edit_page** · autoApprove: **ON** · e2eQa: **queued QA**

| | |
|--|--|
| Feature | `web-rmms-cam-home` |
| Role | `dev` · `/agent-dev` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification · **cấm ERP.*** |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` |
| productRoute | `/trang-chu` · `/tuan-duong` · shell tabs |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-home` (alias only) |
| Step 4b | **skip** — API/entity/migration none · Live KEEP profile+overview+sessions |

## Summary

Edit Home/Hub/Shell theo `roleCaps` (cite `web-rmms-role-gate`). Hero `qaPatrolPoint`/`qaIncidentNew` chỉ `tuanDuong`. `gridSupervise` + `hub.quick.supervise` chỉ `qlHat`. `gridAssign` → `/van-de` (cấm `/cong-viec` · cấm role-gate). Hub **REMOVE** `hub.quick.nghiemThu`. Shell Plan #8: khi `tuanKiem`, `/tuan-kiem`+|`/phat-hien` không thắp tab Field. Không invent CamHome* · không migration.

## Files changed

| File | Change |
|------|--------|
| `src/pages/WebRmmsHome/HomePage.tsx` | hero gate tuanDuong · supervise/assign qlHat · assign→`/van-de` |
| `src/pages/WebRmmsMobileA/PatrolHubPage.tsx` | remove NT quick · supervise qlHat via `useRoleGateProfile` |
| `src/pages/WebRmmsShell/WebRmmsShellLayout.tsx` | FIELD_ROOTS role-aware Plan #8 · `data-field=shell.tab.*` |

## AC map

| AC | Result |
|----|--------|
| AC-CH-HERO-* | PASS — hero iff `tuanDuong` |
| AC-CH-TILE-* | PASS — tiles gated · Assign→`/van-de` |
| AC-CH-SUP-* | PASS — supervise home+hub chỉ `qlHat` |
| AC-CH-HUB-NT | PASS — NT quick absent |
| AC-CH-SHELL-08 | PASS — TK paths không thắp Field khi `tuanKiem` |
| AC-CH-API | PASS — Live profile · notification/overview · sessions cite · no CamHome* |
| Kind B LIST/FILTER/CFG | N/A·WAIVE phone |

## FormMode ↔ API (Live KEEP)

| API | Path | Used |
|-----|------|------|
| GET | `auth/profile` (+roleCaps) | profileName · caps · shell |
| GET | `notification/overview` | notifyBadge |
| GET | `patrol/sessions` | hero ca đang chạy |
| GET | `patrol/check-ins?day=&page=` | hub Hôm nay · một request · load more |
| — | CamHome* | **cấm** · none |

## Build VERIFY

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (exit 0 · size warnings only) |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** (exit 0 · 0 errors) |
| Step 4b migration / new endpoint | **skip** (SA/TL) |
| E2E / start:std | **cấm** ở Dev · queued `/agent-qa*` |

## T-* Dev board

| ID | Status |
|----|--------|
| T-BE-PROF-01 · T-BE-API-01 · T-PERM-01 | **done** |
| T-UI-HERO/TILE/HUB/SHELL/FIELD/PROD/UX/RESP/ALIGN | **done** |
| T-UI-LIST/FILTER/CFG/HIST/FORM/LEAVE/LKP | N/A·WAIVE |
| T-QA-HOME-01 · T-QA-CRUD-01 | pending QA |

## QA handoff notes

1. Scenes `?role=td|tk|nt|qlhat` · hero/tiles/supervise · hub NT absent · shell TK path Field inactive.
2. Deep-link product `/trang-chu` · `/tuan-duong` · alias mfeStdUrl queue-only.
3. Live: profile+notify · cấm invent CamHome assert · phone 430.
4. DEP-CH-ROLE: caps from Live profile (RoleCapsResolver) — verified cite.

## Debt

- (none code) · e2e deferred QA · GAP-CH-HUB-NT/SHELL/HERO closed
- 2026-10-05: `/tuan-duong` mục Hôm nay chỉ ca đúng ngày. Điểm tuần lấy một `searchCheckIns({ day })`, không GET check-ins từng ca. Ca mở/thu. Nút Tải thêm khi còn trang.
