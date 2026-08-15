# SPEC — Login platform + tài khoản theo hợp đồng

> **Status:** **Approved** 2026-08-15 · `spec_approve=approve_internal_exempt`  
> **Chốt:** INTERNAL (Cục/Khu) miễn HĐ · CONTRACT (tổng Cty) 1 mã HĐ + job + tuyến ⊆ HĐ  
> **Context:** [`../../context/features/login.md`](../../context/features/login.md)  
> **Plan:** [`PLAN.md`](PLAN.md)  
> **Repos:** `Linm.Platform.Authentication` · `Linm.RMMS.WebService` · `Linm.Web.RMMS.Integration` · `Linm.Web.RMMS.Contract`

## 0. Hiện trạng (review code + docs)

| Lớp | Có | Thiếu / lệch |
|-----|----|----------------|
| Platform login | `POST api/v1/auth/login` · JWT `company_id` · refresh · `CompanyCode` bắt buộc | `AuthService.LoginAsync` **không** chặn `Status != Active` (chỉ Admin panel chặn) |
| Platform user | `ApplicationUser.Status` Active/Inactive · `POST …/activate` · `…/deactivate` + **revoke token** | Không biết HĐ / tuyến / km |
| RMMS user | `rmms_users` CRUD · `RoutesCsv` · đổi MK local | **PasswordHash riêng** · không `AuthUserId` · không `contractCode` |
| HĐ | `rmms_contracts` + `EffectiveFrom/To` + payments | `RouteSegment` 1 text · **0** bảng tuyến km · **0** bảng tài khoản |
| Tuyến master | `road-route` code/name/kind | Không kmFrom/kmTo trên catalog (km nằm trên HĐ) |
| Job | Auth có `bff-job` Admin | RMMS **chưa** job lifecycle |
| MFE | Users + Contract live | Login shell **chưa** scaffold · form HĐ chưa tab TK/tuyến |
| Docs | `users` GAP-F-USR-01 «Auth tách» · `16` đã chỉ BFF Auth | Chưa context login/HĐ lifecycle |

**Kết luận:** identity phải về Platform; RMMS giữ **profile + phạm vi HĐ/tuyến**; job gọi Auth activate/deactivate.

## 1. Mô hình nghiệp vụ (đề xuất)

```
Tổng công ty (partner-unit / companyCode)
  └── Hợp đồng (1 mã — nhiều user cùng HĐ)
        ├── Hiệu lực: EffectiveFrom → EffectiveTo + Status
        ├── Tuyến theo km: N dòng (QL.1 Km 12–48, …)
        └── Tài khoản: N user Platform
              └── Mỗi user: tập tuyến/km ⊆ tuyến của HĐ
```

| Rule | HARD |
|------|------|
| Login / mật khẩu / JWT | Chỉ `Linm.Platform.Authentication` (+ BFF NuGet) |
| 1 user | đúng **1** `contractCode` (HĐ tổng công ty) |
| Nhiều user | cùng 1 HĐ |
| Active/Inactive theo hạn HĐ | Job + event ngay khi sửa ngày/status |
| Tuyến user | ⊆ tuyến HĐ (route + đoạn km) |
| Dòng HĐ | bảng con — **cấm** `*Json` / CSV parent |
| User nội bộ Cục/Khu (`INTERNAL`) | **không** bắt buộc HĐ · job **bỏ qua** |
| User nhà thầu / tổng công ty (`CONTRACT`) | **bắt buộc** HĐ |

## 2. Phân tầng trách nhiệm

| Concern | Hệ thống | Ghi chú |
|---------|----------|---------|
| **Quyền tính năng** (package · permission · menu) | **Auth** | Chi tiết theo feature platform — **cấm** seed trong Job |
| Username · MK · JWT · Status · revoke | **Auth** | `ChangeUserStatusAsync` + `RevokeTokensAsync` |
| `companyCode` tenant | **Auth** claim + `X-Company-Id` | Không = mã HĐ |
| HĐ · ngày · tuyến km · gán user | **RMMS Contract** | SSOT entitlement |
| **Active / deactive / gia hạn** theo chi tiết HĐ | **`Linm.RMMS.Permission.Job`** | Chỉ HTTP Auth activate/deactivate |
| Org · role nghiệp vụ · profile | **RMMS Integration** (`AppUser`) | FK `AuthUserId` |
| Phạm vi dữ liệu (asset/patrol/map) | **RMMS query** | Filter `UserRoute` |

`companyCode` ≠ `contractCode`. Tenant = đơn vị vận hành hệ thống. HĐ = gói quyền + hạn + tuyến.

## 3. Trạng thái tài khoản

| Nguồn | Giá trị | Ai set |
|-------|---------|--------|
| Auth `Status` | `Active` · `Inactive` · `Suspended` · `Deleted` | Admin tay **hoặc** job |
| `ContractAccount.ManualHold` | true = admin khóa tay | Job **không** tự Active lại |
| HĐ `Status` | draft / signed / active / expired / cancelled | Form HĐ |
| Cửa sổ thời gian | `now ∈ [EffectiveFrom, EffectiveTo]` (UTC, inclusive end-of-day TZ tenant) | Tính |

**Công thức job (user `CONTRACT`):**

```
windowOpen = HĐ.Status ∈ {signed, active}
          AND EffectiveFrom ≤ now ≤ EffectiveTo
wantActive = windowOpen AND NOT ManualHold AND NOT Auth.IsDeleted

wantActive && Status≠Active  → POST activate
!wantActive && Status=Active → POST deactivate + revoke
```

User `INTERNAL`: job skip. Admin vẫn deactivate tay.

**P0 Auth:** `LoginAsync` reject khi `Status != Active` (cùng message chung — không lộ lý do). Refresh token cũng reject.

**P1 RMMS defense:** BFF/API sau login đọc `ContractAccount` — hết hạn → 403 + force logout (kể cả job trễ).

## 4. Schema (RMMS — Schema_* CLI)

### 4.1 `rmms_contract_routes`

| Column | Type | Rule |
|--------|------|------|
| Id | uuid PK | |
| ContractId | uuid FK | |
| RouteCode | varchar(32) | ∈ `road-route` |
| KmFrom · KmTo | numeric(10,3) | KmFrom < KmTo · ≥ 0 |
| LengthKm | numeric(10,3) | = KmTo − KmFrom (computed hoặc validate) |
| Note | varchar(256) | optional |
| unique | (ContractId, RouteCode, KmFrom, KmTo) | không chồng đoạn cùng tuyến trên 1 HĐ |

Thay `Contract.RouteSegment` (text) — migrate 1 lần rồi drop cột (P2).

### 4.2 `rmms_contract_accounts`

| Column | Type | Rule |
|--------|------|------|
| Id | uuid PK | |
| ContractId | uuid FK | |
| AuthUserId | uuid | ApplicationUser.Id |
| RoleCode | varchar(64) | init-data |
| ManualHold | bool | default false |
| AssignedAt | timestamptz | |
| unique | AuthUserId | **1 user = 1 HĐ** |

### 4.3 `rmms_user_routes`

| Column | Type | Rule |
|--------|------|------|
| AuthUserId · ContractId · RouteCode · KmFrom · KmTo | | Đoạn ⊆ một `ContractRoute` cùng HĐ |

### 4.4 `rmms_users` (sửa)

- Thêm `AuthUserId` (unique, required sau cutover) · `ContractCode` · `AccountKind` (`INTERNAL`/`CONTRACT`)
- **Xóa** `PasswordHash` (Schema migration) — đổi MK → Auth
- `RoutesCsv` / `ManagedUserIdsCsv` → child table (P1.5) — **cấm** parent JSON

## 5. API (delta)

### Contract

| Method | Path | Body |
|--------|------|------|
| PUT | `/api/v1/contract/contracts/{id}/routes` | `{ routes: [{ routeCode, kmFrom, kmTo, note }] }` |
| GET | `/api/v1/contract/contracts/{id}/accounts` | list + Auth Status join |
| POST | `/api/v1/contract/contracts/{id}/accounts` | `{ authUserId }` hoặc `{ createUser: {…}, roleCode }` → tạo Auth rồi gán |
| DELETE | `/api/v1/contract/contracts/{id}/accounts/{authUserId}` | gỡ HĐ · **không** xóa Auth user |
| POST | `/api/v1/contract/contracts/{id}/accounts/{authUserId}/hold` | ManualHold on/off |

Tạo user từ form HĐ: `POST api/v1/admin/users` (Auth) với `CompanyCode` = tenant tổng công ty · rồi insert `ContractAccount` · Status ban đầu = theo công thức §3 (HĐ draft → Inactive).

### Users (Integration)

| Delta | |
|-------|--|
| Field | `contractCode` SearchInput catalog `contract` · `accountKind` |
| `assign-routes` | body `{ routes: [{ routeCode, kmFrom, kmTo }] }` — validate ⊆ HĐ |
| Filter list | `?contractCode=` · `?route=` giữ |

### Auth (bắt buộc)

| Delta | |
|-------|--|
| `LoginAsync` + refresh | `Status == Active` |
| (optional claim) | `contract_code` **không** nhét Auth — RMMS đọc từ DB |

## 6. Job `RmmsContractAccountLifecycle`

| | |
|--|--|
| Loại | Platform job RMMS (leader pool) — **không** cron ẩn |
| Trigger | Schedule 05:00 Asia/Ho_Chi_Minh · event `contract.dates-changed` / `status-changed` / `account-assigned` |
| Work | N lane × M AuthUserId · gọi Auth activate/deactivate |
| Idempotent | So Status hiện tại — skip nếu khớp |
| Tracking | SummaryJson: scanned · activated · deactivated · skippedHold · authFail |
| Admin | Search run · Stop · Retry — `platform-job-tracking` |
| Secret | Service token Auth — **cấm** log token |

Gia hạn HĐ (`EffectiveTo` đẩy xa) → event → job Active lại user không hold.

## 7. UI

### 7.1 Login (shell / BFF)

Username hoặc SĐT + MK → `web-bff/api/v1/auth/login`. Toast lỗi platform. **Cấm** `alert`. Leave-confirm không áp dụng (không dirty form nghiệp vụ).

### 7.2 Form HĐ — 2 tab mới (cùng Slideout)

**Tab Tuyến theo km** — inline grid: SearchInput `road-route` · Km từ · Km đến · LengthKm RO · thêm/xóa dòng.

**Tab Tài khoản theo HĐ** — grid: mã/tên/username · role · Auth Status · ManualHold · gán user có sẵn (SearchInput Auth/users) · Tạo tài khoản (modal ít field → Auth) · Hold · Gỡ.

KPI list HĐ thêm: số TK · TK Active · sắp hết hạn (đã có).

### 7.3 Form user

`accountKind` · `contractCode` (bắt buộc nếu CONTRACT) · phân tuyến chỉ hiện tuyến của HĐ đó.

## 8. Phạm vi dữ liệu sau login

Mọi list/map (asset, patrol, incident, GIS) của user `CONTRACT`:

```
row.routeCode = UserRoute.RouteCode
AND row.km overlap [UserRoute.KmFrom, UserRoute.KmTo]
```

`INTERNAL` + role Cục: không filter HĐ (giữ filter org-unit hiện có).

## 9. Gaps chốt khi approve

| ID | P | Default |
|----|---|---------|
| GAP-LOGIN-02 | P0 | Patch `LoginAsync` + refresh |
| GAP-LOGIN-01 | P0 | Cắt password RMMS |
| GAP-LOGIN-03 | P1 | INTERNAL miễn HĐ |
| GAP-LOGIN-04 | P1 | 1 user 1 HĐ |
| GAP-LOGIN-05 | P1 | Child table tuyến |
| GAP-LOGIN-06 | P1 | Job + event |
| GAP-LOGIN-07 | P2 | Drop `RouteSegment` / `RoutesCsv` |
| GAP-LOGIN-08 | P2 | Claim JWT `contract_code` (không cần nếu RMMS join) |

## 10. Ngoài scope (DEFER)

- SSO social (`sso-social-login-plan.md` Auth)
- Citizen portal login
- 1 user nhiều HĐ / nhiều tenant
- Tự gia hạn HĐ
- Quota số TK theo gói HĐ (có thể P2)
