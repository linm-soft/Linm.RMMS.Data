# Data-analy — patrol-home (real-data · mobile hub)

> Status: **done** · `task_62615c08` · changeScope=`edit_page` · `2026-09-12T14:53:44.000Z`

| | |
|--|--|
| Feature | `patrol-home` |
| Title | [Mobile] [Trang Chủ] -> Tuần đường |
| Role | `data_analy` |
| packKind | `hub` |
| stack | `native_dual` |
| BFF | `Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy catch-all |
| BE | `Linm.RMMS.WebService` · `PatrolSessionsController` · **cấm ERP.*** |

## Sources scanned

| Source | Path | Finding |
|--------|------|---------|
| CTX hub | `docs/context/features/patrol-home.md` | GET list/detail only (stale vs GAP) |
| CTX patrol | `docs/context/features/patrol.md` §3 | POST/PUT/DELETE sessions **Live** |
| BE | `api/.../PatrolSessionsController.cs` | GET/POST/PUT/DELETE + check-ins |
| DTO | `PatrolSessionDtos.cs` | Create/Update request fields |
| iOS repo | `PatrolRepository` · `PatrolDtoMapper.activeFromSession` | GET only · sample hero fallback |
| Android repo | same paths | same GAP dual |
| Detail | `PatrolHistoryDetailViewModel.endSession` | toast-only kết ca |
| Demo proto | `specs/patrol-home/ui/prototype/{ios,android}/index.html` `#sc-patrol-home` | no mở-ca CTA · sample hero copy |

## Live API (app → Mobile.Bff → RMMS.Service.Api)

| Method | `{BffPrefix}` path | Request | Response | App wire now | Target |
|--------|--------------------|---------|----------|--------------|--------|
| GET | `patrol/sessions` | page/pageSize/status? | `PatrolSessionPagedResult` | **Live** hub | keep |
| GET | `patrol/sessions/{id}` | — | `PatrolSessionDto` | **Live** detail | keep |
| POST | `patrol/sessions` | `CreatePatrolSessionRequest` | `PatrolSessionDto` | **Missing** | **mở ca** |
| PUT | `patrol/sessions/{id}` | `UpdatePatrolSessionRequest` | `PatrolSessionDto` | **Missing** | **kết ca** |
| DELETE | `patrol/sessions/{id}` | — | soft-delete | out of hub P1 | defer |

### Create body (mở ca) — mandatory

| Field | Example / rule |
|-------|----------------|
| UserName | session display name (auth) |
| Route | user/route stamp · **cấm** invent sample nếu trống → block CTA / picker |
| PatrolType | catalog e.g. `Tuần đường` |
| Status | `Đang tuần` |
| PlannedDate | today |
| StartedAt | now |
| CheckInCount | `0` |
| CoveragePercent | `0` |
| OfflineQueued | `false` |

### Update body (kết ca) — mandatory

| Field | Example / rule |
|-------|----------------|
| (echo current GET fields) | BE Update validates full required set |
| Status | `Hoàn thành` (badge Xong) |
| IsActive | optional · soft semantics BE |
| CoveragePercent / CheckInCount | keep from current |

## DTO map (hero — **cấm** leftover)

| UI | DTO field | Current bug | Fix |
|----|-----------|-------------|-----|
| hero title | `Route` | fallback `QL.1 · Km 468+200` nếu không có `"Km"` | raw Route · empty → `—` |
| hero user | `UserName` | fallback `Nguyễn Văn A` | raw · empty → `—` |
| row sub route | `Route` | empty → `QL.1` | empty → `—` |
| timeLabel | `StartedAt` | missing → `07:20` | missing → `—` |
| active filter | `Status` | `Đang tuần` | keep |
| code | `Code` | — | keep |

## Real-data samples (server — illustrative · **không** ship trong app)

| Code | Route | User | Status | Coverage |
|------|-------|------|--------|----------|
| PAT-… | (BE Route) | (BE UserName) | Đang tuần | n% |
| PAT-… | (BE Route) | (BE UserName) | Hoàn thành | 100% |

## Gaps closed by this edit

| ID | Gap | Disposition |
|----|-----|-------------|
| GAP-PAT-HOME-SESSION-01 | Không POST mở ca | **Open → Dev** wire dual |
| GAP-PAT-HOME-SESSION-02 | Kết ca toast-only | **Open → Dev** PUT dual |
| GAP-PAT-HOME-HERO-01 | Sample route/user/time | **Open → Dev** purge mapper |
| Step 4b | New BE endpoint? | **N/A** — POST/PUT already Live |

## Cấm

- Invent `api/v1/patrol-home` · `PatrolHomeController`
- App gọi `:5101` trực tiếp · ERP.WebService
- Hero/demo leftover bind trên hub
- yarn build/e2e ở role data_analy

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.29 |
| generatedAt | 2026-09-12T14:53:44.000Z |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |
| taskId | `task_62615c08` |
