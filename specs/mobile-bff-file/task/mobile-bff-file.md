# Tasks — mobile-bff-file

| | |
|---|---|
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| changeScope | `edit_page` |
| lane | `mobile` · native_dual |
| taskId | `task_9bde04c1` |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:48:10.000Z` |
| prior | `handoff/sa-compact.md` · `be/solution-discovery.md` |
| P1 form | `incident-create` · body `{ attachmentId }` · **không** chọn field-reflect |
| Step 4b | **SKIP** |
| e2eQa | ON — queued `/agent-qa*` only |

## Skills (Dev execute)

| Phase | Slash | Notes |
|-------|-------|-------|
| 4a BFF | `/init-bff-file` | **verify-only** · GAP-MOB-BFF-FILE-01 **CLOSED** · **cấm** re-clone FilesController · **cấm** invent `api/v1/mobile-files` |
| 4b UI | `/integrate-file-upload-mobile` | **sau** T-BE PASS · HARD AskQuestion `mobile_img_kit` · **cấm** 1 OS · **cấm** File host URLSession/Retrofit trong kit |

## route_confirm

| Route | Action | Note |
|-------|--------|------|
| `{BffBase}/mobile-bff/api/v1/files/init` | **keep** | POST |
| `{BffBase}/mobile-bff/api/v1/files/{id}/object` | **keep** | PUT upload · GET preview JWT |
| `{BffBase}/mobile-bff/api/v1/files/commit` | **keep** | POST |
| `#sc-*` mới | **none** | edit_page kit/host only |
| ERP.* / local FilesController | **cấm** | — |

**route_confirm:** no new public URL · existing files/* verified by T-BE.

## Work packages → tasks

| WP (SA) | Tasks | Owner |
|---------|-------|-------|
| WP-BFF-VERIFY | T-BE-01 | Dev BFF |
| WP-KIT | T-IOS-01 · T-AND-01 | Dev UI (Ask kit trước) |
| WP-PREVIEW | T-IOS-02 · T-AND-02 | Dev UI |
| WP-FORM | T-IOS-03 · T-AND-03 | Dev UI |
| WP-KEEP | T-IOS-04 · T-AND-04 | Dev UI (regression) |
| QA (queued) | T-QA-01 | `/agent-qa*` only |

---

### T-BE — Mobile.Bff verify

| id | Việc | DoD | deps |
|----|------|-----|------|
| **T-BE-01** | Verify `/init-bff-file` wire: NuGet File Bff **1.1.0** · rewrite `mobile-bff/api/v1/files` → `web-bff/api/v1/files` · proxy skip `files/**` · `ServiceEndpoints:FileService` `:5018` · docs `Mobile.Bff/docs/init-bff-file.md` | FileService up · curl `POST .../files/init` **401** (no JWT) / **422** (bad body) · **không** catch-all nuốt `files` · **cấm** ProjectReference · **cấm** clone controller | — |

---

### T-IOS — Linm.RMMS.Mobile.iOS

| id | Việc | DoD | deps |
|----|------|-----|------|
| **T-IOS-01** | Dual kit `LinmImageUpload` slot-only (`#kit-linm-image-upload` · `#photo-slot` · `#btn-add` · `#btn-remove` · `#photo-progress` · `#toast-file-fail`) sau Ask `mobile_img_kit` | GAP-MOB-FILE-KIT-01 · **cấm** URLSession File host trong kit · **cấm** skip_kit mark done | T-BE-01 |
| **T-IOS-02** | Client flow init → PUT object → commit → preview `GET /files/{id}/object` + JWT (`#photo-thumb`) · purpose host param | GAP-MOB-FILE-CLIENT-01 · GAP-MOB-FILE-PREVIEW-01 · FILE-ATT-09 · **cấm** resign URL | T-IOS-01 |
| **T-IOS-03** | P1 form `#sc-inc-form` `#inc-photos` · bind `#attachment-bind` → body `{ attachmentId }` · **không** multipart lần 2 | AC form bind · incident-create only | T-IOS-02 |
| **T-IOS-04** | Keep: `#sheet-checkin` `#ci-photos` PhotoRow · `ai-vision/uploads*` RMMS P1 | regression · không phá check-in / AI vision | T-IOS-03 |

---

### T-AND — Linm.RMMS.Mobile.Android

| id | Việc | DoD | deps |
|----|------|-----|------|
| **T-AND-01** | Same kit dual `LinmImageUpload` (parity iOS zones) sau cùng Ask `mobile_img_kit` | GAP-MOB-FILE-KIT-01 · **cấm** Retrofit File host trong kit · **cấm** 1-OS | T-BE-01 |
| **T-AND-02** | Same client + JWT preview GET object | CLIENT-01 · PREVIEW-01 · FILE-ATT-09 | T-AND-01 |
| **T-AND-03** | Same P1 `incident-create` `attachmentId` bind | parity iOS | T-AND-02 |
| **T-AND-04** | Keep check-in PhotoRow · `ai-vision/uploads*` | regression | T-AND-03 |

---

### T-QA — queued (không chạy ở TL / Dev roleOnly)

| id | Việc | DoD | deps |
|----|------|-----|------|
| **T-QA-01** | curl files + form e2e dual OS · scenarios + store | AC-FILE-01..09 · AC-CAM-01 · AC-TAB-01 · AC-TYPO-01 | T-IOS-04 · T-AND-04 |

## Order (HARD)

1. **T-BE-01** PASS  
2. AskQuestion **`mobile_img_kit`** (execute UI)  
3. **T-IOS-01..04** ∥ **T-AND-01..04** (dual OS bắt buộc)  
4. **T-QA-01** chỉ `/agent-qa*`

## Zones (ids)

- Kit: `#kit-linm-image-upload` · `#photo-slot` · `#photo-thumb` · `#photo-progress` · `#btn-add` · `#btn-remove` · `#toast-file-fail` · `#attachment-bind`
- Host keep: `#sheet-checkin` `#ci-photos`
- Host P1: `#sc-inc-form` `#inc-photos`
- Alt not in scope: `#sc-field-reflect` (TL **không** chọn)

## Cấm (mọi Dev task)

- ERP.* · invent `api/v1/mobile-files` · local FilesController · clone File controllers vào Mobile.Bff  
- App gọi thẳng `:5018` · resign URL image preview  
- Mark kit done nếu `skip_kit` · ship 1 OS only · VM/API File trong kit  
- Step 4b migration · yarn e2e/start:std ngoài QA role

## Handoff Dev

- compact: `handoff/team_lead-compact.md`
- solution: `be/solution-discovery.md`
- design: `ui/design.md` · `ui/html-to-native-map.md`
- bff analy: `specs/_data-analy/mobile-bff-file-bff-endpoints.md`
- next: `/agent-dev-ios` + `/agent-dev-android` (BFF verify trước UI)
