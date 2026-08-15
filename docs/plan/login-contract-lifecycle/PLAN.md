# PLAN — Login platform + tài khoản theo hợp đồng

> **Approved** 2026-08-15 · `approve_internal_exempt`.  
> **Slash:** `/qldb-implement-permission-access` (cũ: `/qldb-implement-login`).  
> **Implemented (L0–L6)** 2026-08-15 — Auth Status · BFF · Schema · Job lifecycle · session-window · **catalog quyền mới chỉ trong `RMMS.Permission.Job`**.  
> Phase 1 UI tabs / `ContractRoute` / cutover PasswordHash = **chưa** (PLAN 1.2–1.6 · 3.x).

## Phase 0 — Auth gate (P0, 1–2 ngày)

| # | Task | Repo | DoD |
|---|------|------|-----|
| 0.1 | `LoginAsync` + refresh: reject `Status != Active` | Platform.Authentication | Test login Inactive → 401 generic |
| 0.2 | BFF host RMMS: `/init-bff-auth` NuGet — **cấm** clone AuthController | RMMS.WebService BFF | `web-bff/api/v1/auth/login` 200 |
| 0.3 | Shell MFE login page (Kind G) gọi BFF | Shell / Integration | Toast · không `alert` |

## Phase 1 — Schema + HĐ tuyến/TK (P1)

| # | Task | Repo | DoD |
|---|------|------|-----|
| 1.1 | Entity `ContractRoute` · `ContractAccount` · `UserRoute` | RMMS | CLI `Schema_ContractAccountLifecycle` + Designer pair |
| 1.2 | `AppUser`: `AuthUserId` · `ContractCode` · `AccountKind` · **drop PasswordHash** | RMMS | `Schema_AppUserAuthLink` riêng |
| 1.3 | API routes/accounts trên Contract | RMMS | PUT child · validate km · unique user |
| 1.4 | Tạo user từ HĐ → Auth `POST /admin/users` + gán | RMMS + Auth | User Inactive nếu HĐ chưa cửa sổ |
| 1.5 | `assign-routes` ⊆ HĐ | Integration | 422 nếu vượt km HĐ |
| 1.6 | Form HĐ 2 tab · form user `contractCode` | Contract + Integration MFE | LeaveConfirmModal · SearchInput · 2 cột slideout |

## Phase 2 — Job lifecycle (P1.5)

| # | Task | Repo | DoD |
|---|------|------|-----|
| 2.1 | Job context + handler `RmmsContractAccountLifecycle` | RMMS | `/gen-job-context` · tracking SummaryJson |
| 2.2 | Event enqueue khi đổi ngày/status/gán TK | RMMS | 1 run / contract, không N+1 storm |
| 2.3 | Gọi Auth activate/deactivate + revoke | RMMS → Auth | Idempotent · authFail trong summary |
| 2.4 | Defense BFF: hết hạn → 403 | BFF | Kể cả job trễ |

## Phase 3 — Cutover + scope dữ liệu (P1.5–P2)

| # | Task | DoD |
|---|------|-----|
| 3.1 | Seed map user demo → AuthUserId | Không login bằng hash RMMS |
| 3.2 | Filter query CONTRACT theo UserRoute | Asset/patrol/map — 1 helper SSOT |
| 3.3 | Drop `RouteSegment` · `RoutesCsv` | Schema riêng · không DEFER + Aligned |

## Thứ tự phụ thuộc

```
0.1 Auth Status check
  → 0.2 BFF login
    → 1.1–1.2 Schema
      → 1.3–1.5 API
        → 1.6 UI
          → 2.x Job
            → 3.x Cutover + data scope
```

**Cấm** làm UI HĐ tab TK trước Schema CLI. **Cấm** job ghi thẳng Auth DB (chỉ HTTP admin API).

## Verify gate

- `dotnet build` Auth + RMMS PASS  
- `yarn build` Contract + Integration PASS  
- `dotnet ef migrations list` có 2 id Schema  
- Manual: Inactive không login · hết hạn HĐ → deactivate · gia hạn → activate (trừ hold)
