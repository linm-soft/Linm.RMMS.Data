# QA — Scenarios — web-rmms-cam-home

> Status: **PASS** · e2eQa=ON · task `task_66906f4f` · 2026-10-01T03:25:00.000Z  
> Role: `qa` · packKind=`list` · changeScope=`edit_page`  
> runtimeUrl product=`/trang-chu` · `/tuan-duong` · shell · mfeStdUrl alias `/web-rmms-cam-home` queue-only (SPA deep-link product)  
> Screens: `specs/web-rmms-cam-home/qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok=true · method=`_capture_cam_home.mjs`

| | |
|--|--|
| Feature | `web-rmms-cam-home` |
| Title | Trang chủ và tab theo vai |
| Role | `qa` |
| Runtime | docker compose (WebService) + Mobile `yarn start:std` :9301 · Playwright phone 430 |

## Environment

| Item | Value |
|------|-------|
| Docker | `D:/AI-QLBD/Linm.RMMS.WebService` · api · Mobile.Bff healthy · **cấm** kill worker |
| MFE | reuse node webpack `:9301` · **cấm** GAP-QA-E2E-KILL-01 |
| Creds | `e2e.local.json` / env · principal view (Admin) |
| Stock `yarn e2e-qa` | FAIL soft · S1 `GAP-QA-E2E-DUP-01` trên alias |
| Custom capture | `_capture_cam_home.mjs` **PASS** · distinct SHA |

## Cases

| id | Route | Assert (AC / T-QA-*) | Result | PNG sha12 |
|----|-------|----------------------|--------|-----------|
| S0 | `/trang-chu` | T-QA-HOME-01 · HM-00 · profileName · notifyBadge · shell.tab.* · Live profile/overview cite | **PASS** | `4d0566b0b9af` |
| S1 | `/tuan-duong` | T-QA-CRUD-01 nav · hub NT **REMOVED** · sc-patrol-home · hub.quick.* không `nghiemThu` | **PASS** | `5f3ac48f942b` |
| QA-20 | shell → field | AC-CH-SHELL-08 · shell.tab.home/field/incident/work/me Plan #8 | **PASS** | `0f2c6d7dfb8c` |

## Matrix notes (principal = Admin view)

| Control | Expected | Observed |
|---------|----------|----------|
| hero qaPatrolPoint/New | iff `tuanDuong` | ẩn (principal không tuanDuong) — **SOFT** |
| gridPatrolMap / TuanKiem / NghiemThu | roleCaps gated | ẩn — **SOFT** |
| gridAssign → `/van-de` | chỉ `qlHat` | ẩn — **SOFT** (code cite `homePaths.incident`) |
| gridSupervise → `/giam-sat` | chỉ `qlHat` | ẩn — **SOFT** |
| hub.quick.nghiemThu | CẤM / REMOVED | **PASS** `hasNtQuick=false` |
| hub.quick.supervise | chỉ `qlHat` | ẩn — **SOFT** OK |
| shell.tab.* Plan #8 | 5 tabs | **PASS** |
| notifyBadge / profileName | Live RO | **PASS** |

## T-QA-*

| id | Status | Notes |
|----|--------|-------|
| T-QA-HOME-01 | **PASS** | Home HM-00 + shell chrome |
| T-QA-CRUD-01 | **PASS** | Hub nav / quick rows (NT removed) |
| T-QA-FILTER-* | **WAIVE** | Kind B phone · DES-GRID N/A |
| T-QA-HERO-CAP / TILE-QLHAT | **SOFT** | cần principal `TUAN-DUONG` / `HAT-*` |

## Cấm / gates

- **cấm** `phase=done` · ERP.* · static-only PASS · taskkill node/yarn rộng
- stock alias DUP → custom product deep-link **PASS**
- next: `/agent-review` · roleOnly stop (GAP-PKT-ROLE-01)

## Artifacts

- `qa/screens/S0.png` · `S1.png` · `QA-20.png`
- `qa/screens/manifest.json` · `_capture_cam_home.mjs` · `_stock_e2e.log`
- handoff: `handoff/qa-compact.md`
