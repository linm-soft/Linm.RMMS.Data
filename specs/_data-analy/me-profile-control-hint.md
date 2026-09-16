# Data-analy — me-profile (controlHint · mobile Hồ sơ)

| | |
|---|---|
| feature | `me-profile` |
| title | [Mobile] [Tôi] -> Hồ sơ |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` · ACTION-TREE) · surface = full screen `#sc-me-profile` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_c7b0196a` |
| autoApprove | `ON` |
| demo | Entry SSOT `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row person · **chưa** `#sc-me-profile` → Design dual · pack `specs/me-profile/ui/prototype/{ios,android}/index.html` |
| ctx | `docs/context/features/me-profile.md` · peer `me.md` · `users.md` § Hồ sơ · Mobile.Bff Auth OpenAPI |
| generatedAt | `2026-08-30T18:03:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/me-profile` · invent org/role API · gộp `me-settings` / `login-logout` / web `users` admin · ERP.* · mfeStdUrl · fake toast success · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`me-profile-bff-endpoints.md`](me-profile-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`me-profile-action-tree.md`](me-profile-action-tree.md) | 7 tree + share/reuse |
| [`me-profile-real-data.md`](me-profile-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + Auth live + entry) | Surface |
|----|------------------|-------------------------------|---------|
| GAP-MOB-MEPROF-NAV-01 | `row-profile` no-op (iOS `break` · Android `Unit`) | Push `#sc-me-profile` «Hồ sơ» · back → Me | me · me-profile |
| GAP-MOB-MEPROF-SCR-01 | Không màn Hồ sơ | Full `#sc-me-profile` · `DES-MOB-ME-PROFILE` · form + đổi MK | screen |
| GAP-MOB-MEPROF-LOAD-01 | Hub chỉ GET tên | GET `auth/profile` bind form fields | BFF |
| GAP-MOB-MEPROF-SAVE-01 | — | Primary «Lưu» → PUT `auth/profile` · toast «Đã cập nhật hồ sơ» | CTA |
| GAP-MOB-MEPROF-PWD-01 | — | Section Đổi mật khẩu → POST `auth/change-password` · toast «Đã đổi mật khẩu» | CTA |
| GAP-MOB-MEPROF-DEMO-01 | Chỉ entry row trên `#sc-me` | Design dual `#sc-me-profile` + reviewUrl | meta |
| GAP-MOB-MEPROF-EMAIL-01 | — | PUT có `Email` · GET overlay có thể thiếu | field |
| GAP-MOB-MEPROF-ORG-01 | Demo subtitle mock hub | Live **ẩn** phụ nếu không field | hub entry |

**Không** đổi (OUT): hub rows Góp ý / Camera / Thông báo / Cài đặt / Đăng xuất · web admin `users` · invent CCCD/DOB PUT.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | |
| Camera | n/a | **không** avatar upload P1 |
| Offline | yes | GET fail → fallback last name + toast · PUT/POST fail → toast lỗi · **cấm** fake 200 |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên Auth calls |

## § Tab index

`tabs: none` trên surface — **không** segment (`GAP-TAB-01`). Shell Tab 5: tab **`me`** (Tôi) giữ khi đứng `#sc-me-profile`. Entry từ hub `me` `row-profile`.

## § Demo dual

**Entry (đã có):** cùng person circle · cùng mock «Nguyễn Văn A» / phụ trên demo hub · iOS `.chev` · Android **không** chevron (peer GAP-MOB-UX-04b).  
**Screen `#sc-me-profile`:** **GAP-MOB-MEPROF-DEMO-01** — Design tạo dual cùng copy VN · cùng `#i-person` / `#i-chevron-left` · **cấm** invent icon. iOS back label «Tôi» · Android icon-btn.

## controlHint — `#sc-me-profile` (`DES-MOB-ME-PROFILE`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tôi | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('me')` |
| title | Hồ sơ | TopBar title | 17 | `LinmTopBar` | fixed |
| avatar | (person) | Avatar display | 44/40 | circle `#i-person` | **không** upload |
| fullName | Họ và tên | TextField | label **13** / field **≥16** | `LinmTextField` | required · GET/PUT `FullName` |
| phoneNumber | Số điện thoại | TextField phone | 13 / ≥16 | `LinmTextField` | GET/PUT `PhoneNumber` |
| email | Email | TextField | 13 / ≥16 | `LinmTextField` | PUT `Email` · GET thiếu → empty (**GAP-MOB-MEPROF-EMAIL-01**) |
| userName | Tên đăng nhập | Text display | 13 / ≥16 | | readonly · GET `UserName` / Id |
| citizenId | CCCD/CMND | Text display | 13 / ≥16 | | **chỉ nếu** GET có · **không** PUT |
| btnSave | Lưu | PrimaryButton | 16 | `LinmPrimaryButton` | PUT · toast ok |
| sectionPwd | Đổi mật khẩu | SectionLabel | **13** | `LinmSectionLabel` | |
| currentPassword | Mật khẩu hiện tại | SecureField | 13 / ≥16 | `LinmSecureField` | required khi đổi |
| newPassword | Mật khẩu mới | SecureField | 13 / ≥16 | `LinmSecureField` | required khi đổi |
| confirmPassword | Xác nhận mật khẩu mới | SecureField | 13 / ≥16 | `LinmSecureField` | local match · **không** wire |
| btnChangePwd | Đổi mật khẩu | SecondaryButton | 16 | `LinmSecondaryButton` | POST change-password |
| toastSaveOk | Đã cập nhật hồ sơ | Toast | 13–16 | `LinmToast` | sau PUT 200 |
| toastPwdOk | Đã đổi mật khẩu | Toast | 13–16 | `LinmToast` | sau POST 200 |
| toastErr | (lỗi mạng / 422) | Toast | 13–16 | `LinmToast` | **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowProfile | (live FullName) | ListRow nav | `LinmListRow` person circle · iOS chevron | `me` · `go('me-profile')` · `testTag`/`accessibilityId` `row-profile` |
| rowProfileSub | (live hoặc ẩn) | ListRow sub | | **không** invent org |

## UNCLEAR

**none** trên field Auth live. Open Q = Design dual HTML (**GAP-MOB-MEPROF-DEMO-01**) · Email GET (**GAP-MOB-MEPROF-EMAIL-01**) — PO/Design chốt · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `me-profile` / **sheet** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| controlHint / UNCLEAR | file này · UNCLEAR **none** |
| Action tree | `me-profile-action-tree.md` |
| BFF | `me-profile-bff-endpoints.md` · GET/PUT `auth/profile` · POST `auth/change-password` |
| real-data | `me-profile-real-data.md` |
| Next | `/agent-po-mobile` · AC đúng 1 sheet `#sc-me-profile` + wire entry |
| autoApprove | ON · full_pipeline `task_c7b0196a` |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T18:03:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-control-hint-20260830 |
| ctxHash | sha256:me-profile-ctx-20260830 |
| demoHash | sha256:mobile-p1-sc-me-row-profile-20260830 |
| taskId | `task_c7b0196a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
