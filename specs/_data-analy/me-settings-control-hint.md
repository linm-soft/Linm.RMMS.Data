# Data-analy — me-settings (controlHint · mobile Cài đặt)

| | |
|---|---|
| feature | `me-settings` |
| title | [Mobile] [Tôi] -> Cài đặt |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` · ACTION-TREE) · surface = full screen `#sc-me-settings` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_43c37168` |
| autoApprove | `ON` |
| demo | Entry SSOT `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row gear · **chưa** `#sc-me-settings` → Design dual · pack `specs/me-settings/ui/prototype/{ios,android}/index.html` |
| ctx | `docs/context/features/me-settings.md` · peer `me.md` · `me-profile.md` · deny GPS/Camera copy |
| generatedAt | `2026-08-30T20:11:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/me-settings` / preferences · gộp `me-profile` / `login-logout` / `ops` / web `users` · ERP.* · mfeStdUrl · fake toast «Đã lưu» · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`me-settings-bff-endpoints.md`](me-settings-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`me-settings-action-tree.md`](me-settings-action-tree.md) | 7 tree + share/reuse |
| [`me-settings-real-data.md`](me-settings-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + OS local + entry) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-MESET-NAV-01 | `row-settings` toast `me.row.settings` cả 2 OS | Push `#sc-me-settings` «Cài đặt» · back → Me | me · me-settings |
| GAP-MOB-MESET-SCR-01 | Không màn Cài đặt | Full `#sc-me-settings` · `DES-MOB-ME-SETTINGS` · quyền + about | screen |
| GAP-MOB-MESET-OS-01 | Deny modals copy «Mở Cài đặt → …» only | openAppSettings deep-link từ màn | CTA |
| GAP-MOB-MESET-VER-01 | — | Bundle version display | field |
| GAP-MOB-MESET-PRIVACY-01 | Privacy chỉ guest Home | Row reuse `home.privacy.*` | row |
| GAP-MOB-MESET-DEMO-01 | Chỉ entry toast trên `#sc-me` | Design dual `#sc-me-settings` + reviewUrl | meta |

**Không** đổi (OUT): hub rows Hồ sơ / Góp ý / Camera xem / Thông báo inbox / Đăng xuất · invent preference sync API.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | status-only | Đọc authorization OS · **không** request từ settings (request thuộc attendance/patrol) · mở OS settings |
| Camera | status-only | Đọc permission OS · mở OS settings |
| Offline | yes | Màn local vẫn mở · row offline → `patrol-offline` |
| Map | n/a | |
| Biometric | n/a | icon `#i-faceid` / `#i-finger` **không** bind P1 |
| Push | OS only | row «Thông báo hệ thống» ≠ inbox `ops` |
| token | n/a | **không** Auth call trên slug |

## § Tab index

`tabs: none` trên surface — **không** segment (`GAP-TAB-01`). Shell Tab 5: tab **`me`** (Tôi) giữ khi đứng `#sc-me-settings`. Entry từ hub `me` `row-settings`.

## § Demo dual

**Entry (đã có):** cùng `#i-gear` · copy «Cài đặt» · iOS `.chev` · Android **không** chevron (peer GAP-MOB-UX-04b) · hiện `toast('Cài đặt')` → wire `go('me-settings')`.  
**Screen `#sc-me-settings`:** **GAP-MOB-MESET-DEMO-01** — Design tạo dual cùng copy VN · icons `#i-mappin` / `#i-camera` / `#i-bell` / `#i-sync` / `#i-info` / `#i-chevron-left` · **cấm** invent icon. iOS back label «Tôi» · Android icon-btn.

## controlHint — `#sc-me-settings` (`DES-MOB-ME-SETTINGS`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tôi | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('me')` |
| title | Cài đặt | TopBar title | 17 | `LinmTopBar` | fixed |
| sectionPerm | Quyền ứng dụng | SectionLabel | **13** | `LinmSectionLabel` | |
| rowLocation | Vị trí | ListRow + status | 13 / ≥16 | `LinmListRow` `#i-mappin` | phụ OS status · tap → openAppSettings |
| rowCamera | Camera | ListRow + status | 13 / ≥16 | `LinmListRow` `#i-camera` | phụ OS status · tap → openAppSettings |
| rowNotifyOs | Thông báo hệ thống | ListRow | 13 / ≥16 | `LinmListRow` `#i-bell` | **≠** `ops` inbox · tap → openAppSettings |
| btnOpenOs | Mở Cài đặt hệ thống | SecondaryButton | 16 | `LinmSecondaryButton` | cùng deep-link · toast lỗi nếu OS từ chối |
| sectionSync | Đồng bộ | SectionLabel | **13** | `LinmSectionLabel` | |
| rowOffline | Hàng đợi mất sóng | ListRow nav | 13 / ≥16 | `LinmListRow` `#i-sync` | `reuse=patrol-offline` |
| sectionAbout | Thông tin | SectionLabel | **13** | `LinmSectionLabel` | |
| appVersion | Phiên bản | Text display | 13 / ≥16 | | Bundle · format `x.y.z (build)` |
| rowPrivacy | Chính sách quyền riêng tư | ListRow nav | 13 / ≥16 | `LinmListRow` `#i-info` | reuse `home.privacy.*` · **cấm** invent URL |
| toastOsFail | Không mở được Cài đặt hệ thống | Toast | 13–16 | `LinmToast` | **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowSettings | Cài đặt | ListRow nav | `LinmListRow` `#i-gear` · iOS chevron | `me` · `go('me-settings')` · `testTag`/`accessibilityId` `row-settings` |

## UNCLEAR

**none** trên field local/OS. Open Q = Design dual HTML (**GAP-MOB-MESET-DEMO-01**) · Privacy HTTPS URL (**GAP-MOB-MESET-PRIVACY-01**) — PO/Design chốt · **không** bịa path BFF.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `me-settings` / **sheet** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| controlHint / UNCLEAR | file này · UNCLEAR **none** |
| Action tree | `me-settings-action-tree.md` |
| BFF | `me-settings-bff-endpoints.md` · **local/OS only** · **cấm invent** |
| real-data | `me-settings-real-data.md` |
| Next | `/agent-po-mobile` · AC đúng 1 sheet `#sc-me-settings` + wire entry thay toast |
| autoApprove | ON · full_pipeline `task_43c37168` |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:11:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-control-hint-20260830 |
| ctxHash | sha256:me-settings-ctx-20260830 |
| demoHash | sha256:mobile-p1-sc-me-row-settings-20260830 |
| taskId | `task_43c37168` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
