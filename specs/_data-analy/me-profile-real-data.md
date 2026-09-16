# Real-data bind — me-profile

| | |
|---|---|
| feature | `me-profile` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · Auth NuGet rewrite |
| taskId | `task_c7b0196a` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `me-profile.md` · OpenAPI GET/PUT `auth/profile` · POST `auth/change-password` | Disable Lưu nếu `fullName` trống · disable Đổi MK nếu thiếu current/new/confirm | Toast lỗi · **cấm** toast ok khi fail |
| `session` | Bearer + `lastUserName` fallback | Prefill tên từ lastWho nếu GET fail | Giữ form · không fake profile |
| `derived` | confirmPassword local match | — | Toast validation · **không** gửi Confirm |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| fullName | Họ và tên | TextField | — | GET `auth/profile` · PUT `auth/profile` | `FullName` | gap (web users) | yes |
| phoneNumber | Số điện thoại | TextField phone | — | GET/PUT `auth/profile` | `PhoneNumber` | gap | yes |
| email | Email | TextField | — | PUT `auth/profile` (GET optional) | `Email` | gap | yes |
| userName | Tên đăng nhập | Text display | — | GET `auth/profile` | — (readonly) | gap | yes |
| citizenId | CCCD/CMND | Text display | — | GET optional | — (**cấm** PUT) | gap | yes |
| btnSave | Lưu | PrimaryButton | — | PUT `auth/profile` | `MobileAuthProfileUpdateRequest` | gap | yes |
| currentPassword | Mật khẩu hiện tại | SecureField | — | POST `auth/change-password` | `CurrentPassword` | gap | yes |
| newPassword | Mật khẩu mới | SecureField | — | POST `auth/change-password` | `NewPassword` | gap | yes |
| confirmPassword | Xác nhận mật khẩu mới | SecureField | — | local only | — | — | yes |
| btnChangePwd | Đổi mật khẩu | SecondaryButton | — | POST `auth/change-password` | body 2 field | gap | yes |
| toastSaveOk | Đã cập nhật hồ sơ | Toast | — | after PUT 200 | — | — | yes |
| toastPwdOk | Đã đổi mật khẩu | Toast | — | after POST 200 | — | — | yes |

§B path **khớp** `me-profile-bff-endpoints.md` — **không** invent `me-profile` / `users/me` RMMS trên app.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| — | — | không CUC2 master cho profile self | Invent org/role lookup API |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-me-profile`. Entry từ `me`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Profile fields | Auth user | user Lưu | PUT `auth/profile` | toast «Đã cập nhật hồ sơ» · refresh hub tên |
| Password | Auth Identity | user Đổi MK | POST `auth/change-password` | toast «Đã đổi mật khẩu» · clear secure fields |
| Form dirty | local | user type | — | leave back — Design leave-confirm optional |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «Lưu = PUT thật · Đổi MK = POST thật» · GAP demo/email/org · ≠ admin users |
| Design | dual `#sc-me-profile` · control-map khớp §B · chrome back |
| SA | giữ Auth rewrite paths · **cấm** ERP.* |
| Dev iOS + Android | cùng §B · wire `row-profile` → push · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake PUT/POST 200)

| Field | Value |
|-------|-------|
| Title | Hồ sơ |
| Entry (hub) | live FullName · phụ ẩn nếu không field · `#i-person` |
| CTA save | Lưu |
| Toast save | Đã cập nhật hồ sơ |
| Section pwd | Đổi mật khẩu |
| CTA pwd | Đổi mật khẩu |
| Toast pwd | Đã đổi mật khẩu |
| Back | Tôi |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-MEPROF-NAV-01 | row-profile no-op | Nav + GET/PUT/POST Auth |
| GAP-MOB-MEPROF-DATA-01 | Hub GET tên only | Form bind FullName/Phone/Email + change-password |
| GAP-MOB-MEPROF-EMAIL-01 | — | PUT Email · GET có thể empty |
| GAP-MOB-MEPROF-ORG-01 | Demo subtitle mock | **không** invent org API |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success toast khi PUT/POST fail  
- Invent mobile-only path `me-profile` / RMMS `users/me`  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Enqueue Lưu / Đổi MK sibling → **GAP-MOB-ACT-07**  
- Gộp admin users / Cài đặt / Đăng xuất

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T18:03:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-real-data-20260830 |
| taskId | `task_c7b0196a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
