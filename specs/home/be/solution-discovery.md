# SA — Solution — home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `home` |
| title | [Mobile] Trang Chủ |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_15a962de`) |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** tab Trang Chủ `#sc-home` · **cấm** Kind A–G web / Lin* list / web `dashboard` |
| domain | **Auth (Platform)** profile display only · **không** domain RMMS mới · **không** `Home` / wallet controller |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-home` · `task_41cb12f0` |
| prior · po | **confirmed** · `po/requirement.md` · `task_b088605a` |
| prior · data_analy | **confirmed** · `_data-analy/home-*.md` · contentHash `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` · bffContentHash `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_15a962de` |
| confirmedBy | agent autoApprove · `task_15a962de` |
| updatedAt | `2026-08-19T05:47:02.000Z` |
| thisAction | **Hub Trang Chủ** only · sibling route = backlog `pending_confirm` · reuse `me` / `ops` / `patrol-offline` |

**Cấm:** invent `api/v1/home` / wallet / org-unit · `HomeController` / `DashboardController` · clone Auth · fork DTO · app `:5001` / `:5101` · GET `notification/inbox` trên slug `home` · gộp sibling screens (`GAP-MOB-ACT-01/02`) · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (hub = **no queue**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Auth Platform profile · **không** RMMS `home` / wallet / org API |
| API host profile | **không** RMMS controller — `Linm.Platform.Authentication` qua BFF NuGet |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `AddLinmAuthenticationBff` 1.26.0 + `AuthPrefixRewriteMiddleware` |
| App | iOS `ApiClient` · Android Retrofit · base `{BffBase}/mobile-bff/api/v1` |
| Profile reuse | `FetchProfileUseCase` + `UserProfile` (đã ship `me` / login) — **cấm** fork DTO / second repository |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | mọi sibling màn · inbox badge live · wallet live · org role live |

### Route decision

| | Choice |
|--|--------|
| Slug | `home` → **hub** · 1 màn `#sc-home` |
| App prefix | `mobile-bff/api/v1` |
| Auth rewrite | `/mobile-bff/api/v1/auth` → `/web-bff/api/v1/auth` |
| Downstream Auth | BFF-only `ServiceEndpoints:AuthenticationService` · `users/me` |
| App path | **chỉ** `GET auth/profile` (Bearer) |
| Step 4b | **N/A** — không endpoint mới · không BE align delta |
| Rationale | Live Auth `GetProfile` đủ `.who` — **cấm** invent home/wallet/org |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Auth HTTP | `Linm.Platform.Authentication.Bff` **1.26.0** `GetProfile` | **cấm** `AuthController` / `HomeController` local |
| Auth DTO | `UserProfileResponseDto` → app `UserProfileDto` / `UserProfile` | same `me` · fields `id` · `fullName` · `phoneNumber` · optional wrap `data` |
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Kit | `LinmHeroTools` · `LinmProfileButton` · `LinmNotifyButton` · `LinmNotifyCountBadge` · `LinmStatusCapsule` · `LinmQuickActions` · `LinmQuickItem` · `LinmSectionLabel` · `LinmHomeGrid` · `LinmHomeTile` · `LinmWalletCard` · `LinmTabBar` · `LinmToast` | Design `kit_missing_confirm` **N/A** · **cấm** raw `LazyVGrid` / `LazyVerticalGrid` |
| Persist | no-parent-json-field | hub **không** ghi inventory JSON |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET profile — **không** DATE filter / form date | `/review-timezone-implement` | header `X-Timezone` giữ interceptor chung |
| XCO | **xco_na** | **không** GET/{id} View catalog | `/implement-view-cross-company` | current-user profile only |
| SHARE | **n/a** | **không** bảng RMMS | `/implement-shared-table` | identity = Auth DB |
| Offline | **no queue** · hub **vẫn mở** | GET fail → `lastUserName` + toast | offline-sync | **cấm** block tab · **cấm** enqueue «home» |
| GPS | **n/a** | — | — | sibling `patrol-home` |
| Camera | **n/a** | — | — | sibling `incident-create` |
| Push / inbox | **n/a** trên hub | badge **0 ẩn** | — | **cấm** GET `notification/inbox` (`GAP-F-HOME-02`) |
| Store | **N/A** signup | no account create/delete trên hub | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP trong solution listing · family `1` **cấm** claim iPad |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T05:47:02.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** |
| API shape | Auth scalars `id` / `fullName` / `phoneNumber` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/auth/profile` | Auth BFF 1.26.0 `GetProfile` + rewrite → `users/me` | **Giữ** · app path `auth/profile` · reuse `FetchProfileUseCase` |
| Role «Khu QLĐB IV» | **không** org field trên profile DTO | **Ẩn live** · **cấm** invent (`GAP-F-HOME-01`) |
| Wallet «QL.1 · Khu IV» | **không** home/wallet controller | **Static demo copy** 3 dòng HTML · sibling `asset-hub` |
| `GET notification/inbox` | proxy live (DOMAIN-MAP `ops`) | **Không gọi** turn `home` · badge 0 ẩn |
| `HomeController` / `api/v1/home` | **không** | **Cấm** tạo |
| Native `#sc-home` | Placeholder gallery + `btn-logout` | **DELTA UI** thay bằng hub kit · **gỡ** gallery / logout trên home |
| Tab 5 / `LinmTabBar` | shell shipped | **Giữ** · **cấm** reimplement |
| `#sc-me` | shipped | Tap Hồ sơ → tab **Tôi** · **cấm** reimplement `Me*` |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-home` hub | hero · signal · who · quick 2 · section · grid 6 · wallet | query Auth profile + static chrome | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| who | (tên) | `fullName` | GET `auth/profile` | trim · empty/fail → `lastUserName` · **cấm** hardcode production |
| — | — | `id` / `phoneNumber` | response | không bind UI hub |
| roleLine | Khu QLĐB IV | — | **không** | ẩn live |
| signal | Tín hiệu | — | OS path | `NWPathMonitor` / Connectivity · hạng Tốt/TB/Yếu · **cấm** «Có mạng» |
| notify badge | — | — | **không** | `notifyCount=0` ẩn |
| wallet | HỒ SƠ TÀI SẢN | — | static | title **QL.1 · Khu IV** · subtitle **32 loại KCHT · thông số + checklist sự cố** |
| quick / tiles | nhãn control | — | toast / tab | xem § navigation |
| foot | Phiên bản Gói… | — | **cấm ship** | `GAP-F-HOME-03` |

**Cấm** invent DTO org / wallet / home aggregate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hồ sơ | Chuyển tab **Tôi** `#sc-me` | `reuse=me` (shipped) |
| Thông báo | `LinmToast` **Thông báo** | `ops` pending |
| Điểm tuần | toast **Điểm tuần** | `patrol-home` pending |
| Ghi sự cố | toast **Ghi sự cố** | `incident-create` pending |
| Giám sát | toast **Giám sát** | `supervise` pending |
| Tuần đường | toast **Tuần đường** | `patrol-home` pending |
| Công việc | toast **Công việc** | `mnt-list` pending |
| Vấn đề | toast **Vấn đề** | `incident-list` pending |
| Tài sản + wallet | toast **Tài sản** | `asset-hub` pending |
| Lưu trữ | toast **Lưu trữ** | `reuse=patrol-offline` |
| Tín hiệu | toast **Đã làm mới** + refresh profile | `shared_kit` me-signal |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-HOME-01 | Role **ẩn** · wallet **static demo** · **cấm** invent API |
| GAP-F-HOME-02 | Badge 0 ẩn · **cấm** GET inbox trên `home` · owner `ops` |
| GAP-F-HOME-03 | **Cấm** ship foot Gói |
| GAP-MOB-ACT-01/02 | **none** — 1 hub · không child form |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw grid |
| GAP-MOB-ACT-06 | Sibling giữ `pending_confirm` |
| GAP-MOB-SIGNAL-01/02 | OS path · toast **Đã làm mới** · **cấm** cycle |
| GAP-SA-STORE-01 | **cấm** localhost/LAN trong listing · family `1` **cấm** iPad claim |
| GAP-MOB-BFF-01 | **không** hàng mới — Auth profile live đủ |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Replace | `PlaceholderHomeView` / `PlaceholderHomeViewModel` | `PlaceholderHomeScreen` / `PlaceholderHomeViewModel` |
| Feature | `Presentation/Features/Home/*` | `presentation/feature/home/*` |
| Use case | **reuse** `FetchProfileUseCase` | **reuse** `FetchProfileUseCase` |
| State | `who` · `notifyCount=0` · signal grade · toast message | same |
| DI | `AppContainer` wire Home VM | Hilt `HomeViewModel` |
| Shell | Tab Home → real hub · **gỡ** `LinmKitGallery` / `btn-logout` trên home | same |
| Offline | appear: try profile → fallback `auth.lastUserName()` · toast không block | same |

**Cấm** WebView HTML · watermark · hardcode «Nguyễn Văn A» production.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET auth/profile` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-HOME` · `T-AND-HOME` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | Hồ sơ → tab Tôi · còn lại toast nhãn |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:47:02.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.10 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
