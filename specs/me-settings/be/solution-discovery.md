# SA — Solution — me-settings (mobile · Cài đặt)

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| title | [Mobile] [Tôi] -> Cài đặt |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_7d695bcc`) |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design chốt · quyền/OS + about · surface **full screen** `#sc-me-settings` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **sheet→screen** · `DES-MOB-ME-SETTINGS` · **cấm** web Kind A–G / Lin* list / ERP.* |
| thisAction | **Cài đặt** only · entry reuse `me` `#row-settings` · **cấm** gộp `me-profile` / `login-logout` / `ops` / `feedback` / web `users` (`GAP-MOB-ACT-01/02`) |
| domain | **local / OS / Bundle** · **không** Auth/RMMS settings controller · **cấm** invent `api/v1/me-settings` / preferences · **cấm** ERP.* |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` **approve** (same API host · **không** Domain settings · Step 4b **Skip**) |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` **approve** |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` **approve** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · **P1 không gọi** settings resource |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_d7095795` · designContentHash `sha256:me-settings-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_27ff3357` · poContentHash `sha256:me-settings-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/me-settings-control-hint.md` · `me-settings-bff-endpoints.md` · `me-settings-action-tree.md` · `me-settings-real-data.md` · contentHash `sha256:me-settings-control-hint-20260830` · realDataHash `sha256:me-settings-real-data-20260830` · bffContentHash `sha256:me-settings-bff-local-only-20260830` · actionTreeHash `sha256:me-settings-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA (sau Dev) · **cấm** `yarn e2e*` / `yarn start:std` / `mfeStdUrl` / Step 4b / migration ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new`) |
| taskId | `task_7d695bcc` |
| confirmedBy | agent autoApprove · `task_7d695bcc` |
| updatedAt | `2026-08-30T20:35:00.000Z` |

**Cấm:** invent `api/v1/me-settings` · invent `preferences` / `device-settings` / push-token trên slug · invent `MeSettingsController` / `SettingsController` trên Mobile.Bff · invent RMMS Domain settings · fork DTO · assume bảng mới · app `:500x` / `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake toast «Đã lưu cài đặt» · invent HTTPS privacy URL · request GPS/Camera permission từ settings · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip` · `GAP-DES-DEMO-RESCAN-01`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`) · typography-web-mobile · tab-index-analy-review.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **không** invent RMMS settings |
| Domain | **none P1** — local OS permission + Bundle version + static privacy copy |
| API downstream | **không** — slug **không** gọi Auth/RMMS settings resource |
| Models / DTO | **không** settings DTO · **cấm** invent preference map |
| Persistence | **không** bảng RMMS/Auth settings · **cấm** `/database-migration` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · host sẵn · **không** dedicated MeSettings controller · **không** OpenAPI settings path |
| Web BFF (cite only) | **OUT** mobile app path |
| App | iOS SwiftUI + Android Compose · base `{BffBase}/mobile-bff/api/v1` khi gọi API **khác** · **slug này P1 = 0 HTTP settings** |
| Entry | Me `#row-settings` `#i-gear` → push `#sc-me-settings` (thay toast `me.row.settings`) |
| GPS | **status-only** — đọc OS authorization · **không** request từ settings (request = attendance/patrol) · tap → openAppSettings |
| Camera | **status-only** — đọc OS permission · **không** request · tap → openAppSettings |
| Offline | màn **vẫn mở** · row → `reuse=patrol-offline` (owner handle queue) |
| Push | OS Settings deep-link only · **≠** inbox `ops` · **cấm** invent push-token API |
| Sibling | entry `me` · offline `patrol-offline` · privacy copy `home.privacy.*` · **cấm** re-own hub / siblings |
| Out of pack | `me-profile` · `login-logout` · `ops` inbox · `feedback` · `cam-view` · preference sync server · biometric rows · Privacy HTTPS landing |

### Route decision

| | Choice |
|--|--------|
| Slug | `me-settings` → **sheet→screen** · owner `DES-MOB-ME-SETTINGS` |
| App prefix | `mobile-bff/api/v1` (host only — **không** settings path P1) |
| App paths P1 | **none** — OS Settings URL / App details · Bundle · `LinmCopy` |
| Downstream | iOS `UIApplication.openSettingsURLString` · Android `Settings.ACTION_APPLICATION_DETAILS_SETTINGS` · OS permission APIs |
| Dedicated Mobile.Bff controller | **không** · **cấm invent** |
| Step 4b / migration | **Skip / n/a** — không schema · **cấm** SA chạy `/database-migration` |
| Rationale | DA BFF table + real-data §B = local/OS only · DOMAIN-MAP **không** slug settings · **cấm** invent preferences |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | — | **cấm** `MeSettingsController` / `SettingsController` local |
| OpenAPI | Mobile.Bff Auth-only overlay | settings / preferences **không** live · **cấm invent** |
| HTTP app | **không** ApiClient call trên slug | **cấm** URLSession/OkHttp trong View · **cấm** invent repository settings |
| Token | Keychain / EncryptedSharedPreferences | **n/a** Auth call trên slug · session vẫn giữ shell |
| Kit | `LinmTopBar` · `LinmSectionLabel` · `LinmListRow` · `LinmSecondaryButton` · `LinmToast` · Me `LinmListRow` `#i-gear` | `kit_missing_confirm` **N/A** |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`me`** active | **cấm** invent (`GAP-TAB-01`) |
| Store | permission status display + open OS settings · no new account/GPS claim API | **cấm** `localhost` / LAN IP · family `1` **cấm** iPad listing claim (`GAP-SA-STORE-01`) · PrivacyInfo / Play Data safety **không** claim preference sync mới |
| Privacy copy | reuse `home.privacy.title` / `home.privacy.body` (live `LinmCopy` + `HomePrivacyView`) | **cấm** invent HTTPS · GAP-MOB-MESET-PRIVACY-01 open tới khách |
| Offline row | `reuse=patrol-offline` | **cấm** reimplement queue · **cấm** enqueue |

---

## BFF / API contract (live audit 2026-08-30 · `task_7d695bcc`)

Nguồn: `_data-analy/me-settings-bff-endpoints.md` + real-data §B · Mobile.Bff OpenAPI (Auth only) · DOMAIN-MAP **không** slug settings · **hash skip** · **cấm** re-scan demo · **cấm** invent.

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Mở Cài đặt hệ thống | — | — | OS Settings URL / App details | **client** · Dev ship openAppSettings |
| Status Vị trí / Camera | — | — | OS permission APIs (read-only) | **client** · reuse patterns `CoreLocationReader` / `AVCaptureDevice.authorizationStatus` · **không** request |
| Thông báo hệ thống | — | — | openAppSettings | **client** · **≠** `ops` |
| Phiên bản | — | — | Bundle / BuildConfig | **client** · readonly |
| Chính sách | — | — | `LinmCopy` `home.privacy.*` | **PASS** copy live Home · reuse panel |
| Hàng đợi mất sóng | — | — | nav `patrol-offline` | **reuse** owner |
| Toast OS fail | — | — | local UI | **N/A** API |
| Invent `me-settings` / `preferences` | — | — | — | **cấm invent** |
| Dedicated BFF MeSettingsController | — | — | — | **không** · **cấm invent** |
| Auth `auth/profile` / logout / ops | — | — | siblings | **OUT** |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| OS location / camera / notifications | System Settings | **status + deep-link only** · **không** app permission string mới · **không** BFF `[RequirePermission]` |
| Authenticated Bearer | shell session | **không** HTTP trên slug |
| Admin / Integration settings | — | **OUT** |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới cho pack này.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | không form date | |
| XCO | **xco_na** | không catalog / XCO | |
| SHARE | **share_na** | **không** bảng RMMS mới · **cấm** invent `rmms_me_settings_*` | |
| Offline | **màn vẫn mở** · row nav owner | `reuse=patrol-offline` · **cấm** block screen | offline-sync |
| GPS | **status-only** · openAppSettings | **không** `requestWhenInUse` từ settings | |
| Camera | **status-only** · openAppSettings | **không** `requestAccess` từ settings | |
| Push | **OS deep-link only** | row «Thông báo hệ thống» · **≠** ops inbox · **cấm** invent register token | |
| Store | **no new data collection claim** | PrivacyInfo + Play Data safety — permission deep-link đã cover OS · **cấm** localhost/LAN · family `1` **cấm** iPad · **không** claim preference sync / xóa TK mới | `GAP-SA-STORE-01` |
| Step 4b | **Skip** | không schema | **cấm** SA chạy migration |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `ios_repo_confirm` approve · `android_repo_confirm` approve · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=N/A` · `solution_confirm=approve` · `2026-08-30T20:35:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **none** · **cấm** invent bảng settings |
| Client store | screen-local OS status refresh (`onAppear` / `onResume`) · Bundle version · privacy copy keys · **không** preference UserDefaults sync map làm nguồn ship (`GAP-MOB-REAL-02`) |
| Migration | **n/a** this pack |
| T-BE-API | **n/a** — **không** endpoint mới · **cấm invent** |
| T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-30 / `task_7d695bcc`)

| Surface | Live (native) | SA chốt P1 |
|---------|---------------|------------|
| Me `#row-settings` | iOS/Android toast `me.row.settings` | **Push** `#sc-me-settings` (thay toast) |
| Screen `#sc-me-settings` | **không** | **Ship** dual Design kit |
| openAppSettings | **chưa** helper chung trên Me | **Ship** iOS `openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` · fail → toast |
| Location / Camera status | dùng ở feature khác (request + check) | **Read-only** status trên settings · **cấm** request |
| Bundle version | Info.plist / versionName | **Display** `x.y.z (build)` · empty «—» |
| Privacy copy | `home.privacy.*` + `HomePrivacyView` | **Reuse** push/sheet · **cấm** invent URL |
| Offline row | `patrol-offline` owner | **Nav reuse** |
| BFF/BE settings | **không** | **Cấm invent** · Step 4b Skip |
| Tab 5 shell | dưới Me | **Giữ** · `tabs: none` pack · tab `me` active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-me-settings` | perm rows + CTA OS + version + privacy + offline | OS / Bundle / copy / nav | **không** RMMS entity |
| Privacy panel | title + body | `LinmCopy` | — |
| Me entry | list row | local nav | — |

### Field map (ui → dto → store) — khớp real-data §B + controlHint

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tôi | — | local | `go('me')` · Android icon-only OK |
| title | Cài đặt | — | local | `LinmTopBar` 17 · **cấm** badge P1/P2 |
| sectionPerm | Quyền ứng dụng | — | local | `LinmSectionLabel` **13** |
| rowLocation | Vị trí | — | OS location auth status · write=openAppSettings | `LinmListRow` `#i-mappin` · phụ «Đã cấp / Chưa cấp / Không xác định» |
| rowCamera | Camera | — | OS camera auth status · write=openAppSettings | `LinmListRow` `#i-camera` |
| rowNotifyOs | Thông báo hệ thống | — | openAppSettings | `LinmListRow` `#i-bell` · **≠** ops |
| btnOpenOs | Mở Cài đặt hệ thống | — | openAppSettings | `LinmSecondaryButton` · fail → toast |
| sectionSync | Đồng bộ | — | local | `LinmSectionLabel` **13** |
| rowOffline | Hàng đợi mất sóng | — | nav `patrol-offline` | `LinmListRow` `#i-sync` · reuse |
| sectionAbout | Thông tin | — | local | `LinmSectionLabel` **13** |
| appVersion | Phiên bản | — | Bundle / BuildConfig | Text display · `x.y.z (build)` · empty «—» |
| rowPrivacy | Chính sách quyền riêng tư | — | local copy `home.privacy.*` | `LinmListRow` `#i-info` |
| toastOsFail | Không mở được Cài đặt hệ thống | — | after OS open fail | `LinmToast` · **cấm** fake ok |
| rowSettings | Cài đặt (hub) | — | local nav | reuse Me · `#i-gear` · `row-settings` · iOS chevron · Android **không** chevron |

**Demo fallback SSOT** (không fake BFF / «Đã lưu»): Title/CTA/Toast/Back = real-data § Demo · Design dual.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Me **Cài đặt** `#row-settings` `#i-gear` | push `#sc-me-settings` (thay toast) | **owner** `me-settings` (entry reuse `me`) |
| Appear / onResume | refresh OS location + camera status | owner · **cấm** enqueue |
| rowLocation / rowCamera / rowNotifyOs / btnOpenOs | openAppSettings · fail toast | owner · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| appVersion | display Bundle | owner · **cấm** enqueue |
| rowPrivacy | push/sheet `home.privacy.*` | owner · **cấm** enqueue · **cấm** invent URL |
| rowOffline | nav `patrol-offline` | **reuse** · **cấm** enqueue |
| toastOsFail | feedback UI | owner |
| Back «Tôi» / chevron | `go('me')` | chrome |
| Tab 5 | shell giữ · `me` active | **cấm** invent |
| profile / logout / ops inbox / feedback | **không** ship | siblings / OUT |

**Cấm** start sibling `me-profile` / `ops` / `login-logout` / `feedback` (`GAP-MOB-ACT-06`) · **cấm** enqueue openAppSettings / version / privacy / offline.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-MESET-NAV-01 | **CLOSED** · Me push `#sc-me-settings` (thay toast) |
| GAP-MOB-MESET-SCR-01 | **CLOSED** · ship screen dual Design |
| GAP-MOB-MESET-OS-01 | **CLOSED** · iOS `openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` · fail toast · **cấm** fake ok |
| GAP-MOB-MESET-STATUS-01 | **CLOSED** · OS read-only «Đã cấp / Chưa cấp / Không xác định» · **không** request · **không** BFF |
| GAP-MOB-MESET-VER-01 | **CLOSED** · Bundle `x.y.z (build)` · empty «—» |
| GAP-MOB-MESET-PRIVACY-01 | **OPEN** (P1 static `home.privacy.*` ship) · HTTPS URL khi khách giao · **cấm invent** |
| GAP-MOB-MESET-DEMO-01 | **CLOSED** (Design dual) · SA **cấm** re-scan |
| GAP-MOB-MESET-DATA-01 | **CLOSED** · §B bind OS/Bundle/copy/nav |
| GAP-MOB-MESET-API-01 | **CLOSED** · P1 skip server prefs · **cấm invent** |
| GAP-MOB-BFF-01 | **Không** — không thiếu controller bắt buộc · local/OS only |
| GAP-MOB-REAL-01 | §B = BFF local table · **không** path invent |
| GAP-MOB-REAL-02 | **cấm** demoItems / hardcode preference map làm nguồn ship |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp · kit mapped · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK · Android hub **không** chevron |
| GAP-DES-DEMO-RESCAN-01 | **CLOSED** · SA **cấm** re-scan |
| GAP-SA-STORE-01 | **cấm** localhost/LAN · family `1` **cấm** iPad claim |

---

## Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-BE-01 | api | **n/a** — **cấm invent** settings endpoint · Step 4b Skip |
| T-BE-02 | migration | **n/a** |
| T-BFF-01 | mobile-bff | **no-op** — **cấm** MeSettingsController · **cấm** preferences OpenAPI |
| T-IOS-MS-01 | ios | pending — screen `#sc-me-settings` · kit map · openAppSettings · OS status read · Bundle version · privacy reuse · wire `MeViewModel` `.settings` toast → push |
| T-AND-MS-01 | android | pending — cùng §B · parity copy · `ACTION_APPLICATION_DETAILS_SETTINGS` · `MeIntent.Settings` toast → push |
| T-IOS-ME-01 | ios | pending — entry `#row-settings` navigate only (không reimplement hub) |
| T-AND-ME-01 | android | pending — cùng |
| T-KIT-01 | kit | **reuse** TopBar/Section/ListRow/Secondary/Toast — **cấm** invent |
| T-QA-* | qa | pending — Maestro slug `me-settings` only · **cấm** web e2e / start:std |

---

## Confirm

`solution_confirm` = **approve** — `autoApprove=ON` · agent tự confirm · `task_7d695bcc`.

Roles sau = **pending** đến lượt. Chain **`/agent-tl-mobile`** (không start trong task SA này · GAP-PKT-ROLE-01).

**This SA role: no FE/BE/native source write · no Step 4b · no e2e · no yarn build/start:std.**

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ios_repo_confirm` / `android_repo_confirm` = approve (STATUS ticks).

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| lane | `mobile` |
| from | `sa` · PASS · `task_7d695bcc` |
| phase | `team-lead` |
| Next | `/agent-tl-mobile` · `task/me-settings.md` |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface screen) |
| solution | `be/solution-discovery.md` **confirmed** |
| BFF P1 | **local/OS only** · **cấm invent** preferences · Step 4b Skip |
| autoApprove | ON |
| e2eQa | ON — queued QA (sau Dev) |
| STATUS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/me-settings/STATUS.md` |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:35:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.31.2 |
| orchestratorWorkflowVersion | 2026.08.31.2 |
| orchestratorSchemaVersion | qldb-mobile-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.31.2 |
| poSkillVersion | 2026.08.25.01 |
| designSkillVersion | 2026.08.25.01 |
| contentHashPriorDataAnaly | sha256:me-settings-control-hint-20260830 |
| priorRealDataHash | sha256:me-settings-real-data-20260830 |
| priorBffHash | sha256:me-settings-bff-local-only-20260830 |
| priorActionTreeHash | sha256:me-settings-action-tree-20260830 |
| priorPoHash | sha256:me-settings-po-requirement-20260830 |
| priorDesignHash | sha256:me-settings-design-20260830 |
| contentHash | sha256:me-settings-sa-solution-20260830 |
| taskId | `task_7d695bcc` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
