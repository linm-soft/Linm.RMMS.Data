# PO — Requirement — mobile-bff-file

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| title | [Mobile] Mobile.Bff × FileService (upload kit) |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` · NEW AutocodeTask |
| packKind | **`sheet`** (upload kit · **không** screen `#sc-*` riêng) |
| stack | `native_dual` |
| thisAction | **File BFF + LinmImageUpload kit** · owner `mobile-bff-file` · bind PhotoRow trên host · **cấm** gộp full `incident-create` / `field-reflect` / `ai-vision` packs |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_873e65c9` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác |
| e2eQa | ON — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / build ở role PO |
| prior | data_analy **confirmed** · `handoff/data_analy-compact.md` · `specs/_data-analy/mobile-bff-file-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:mobile-bff-file-control-hint-20260912-delta` · real-data `sha256:mobile-bff-file-real-data-20260912` · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| skillBff | `/init-bff-file` · verify-only (GAP-MOB-BFF-FILE-01 **CLOSED**) |
| skillUi | `/integrate-file-upload-mobile` · Ask `mobile_img_kit` lúc Dev execute |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T15:40:00.000Z` |
| taskId | `task_873e65c9` |

**Cấm:** invent `api/v1/mobile-files` · local `FilesController` · kit gọi FileService `:5018` · resign URL làm image src · ERP.* · `mfeStdUrl` · thay `ai-vision/uploads*` P1 · 1-OS kit · fake attachmentId / fake 200 · enqueue full host packs · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) · Step 4b / migration ở PO.

## 1. Goal

Platform **sheet/kit**: verify Mobile.Bff `files/*` → FileService `:5018` (đã ship) + dual-OS kit **`LinmImageUpload`** (slot-only) + preview bytes `GET files/{id}/object` + JWT (**FILE-ATT-09**) + bind **`attachmentId`** vào **1** P1 host form (**default `incident-create`** · alt `field-reflect` nếu TL chốt). Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/files/*`. **1 action = 1 feature** = `mobile-bff-file`. Host `patrol-checkin` PhotoRow **shipped** = `shared_action` reuse — **không** enqueue.

## 2. changeScope `edit_page`

| | |
|--|--|
| Current | BFF File NuGet live · check-in upload ad-hoc · preview local · chưa shared kit · form P1 chưa bind File attachment |
| New | Giữ BFF · kit dual · purpose param · preview object JWT · **1** form `{ attachmentId }` |
| OUT | Screen `#sc-*` mới · Step 4b · ai-vision path đổi · ERP.* |

SSOT visual = host zones `#sheet-checkin` / `#sc-inc-form` PhotoRow · packet `Demo/.../ios/index.html` **missing** → Design **bắt buộc** prototype + `reviewUrl` (gate).

## 3. DoD (đo được)

1. **BFF (verify-only):** `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · `GET files/{id}/object` trên Mobile.Bff `:5202` + JWT · FileService `:5018` upstream · **cấm** re-clone controller · **cấm** invent path.
2. **Kit dual:** `LinmImageUpload` iOS+Android cùng turn · Ask `mobile_img_kit` lúc `/integrate-file-upload-mobile` · slot-only · **cấm** URLSession/Retrofit File host trong kit (**FILE-ATT-06** · GAP-MOB-FILE-KIT-01).
3. **Upload lifecycle:** init→PUT→commit → `attachmentId` · `purpose` theo host (`patrol-checkin` · `incident` · `field-reflect`) · **cấm** fake id / skip commit.
4. **Preview:** committed → `GET files/{id}/object` bytes + JWT · pending → local bytes · **cấm** resign URL (**FILE-ATT-09** · GAP-MOB-FILE-PREVIEW-01).
5. **Host bind P1:** **1** form — default `incident-create` `#sc-inc-form` photos → body `{ attachmentId }` / array · alt `field-reflect` nếu TL chọn · **không** enqueue full form packs (GAP-MOB-FILE-CLIENT-01).
6. **Keep check-in:** `#sheet-checkin` PhotoRow tiếp tục dùng lifecycle/kit · `shared_action`.
7. **Keep ai-vision:** `ai-vision/uploads*` RMMS P1 — **không** route qua `files/*`.
8. **Offline / fail:** toastFail · host queue · **cấm** fake 200 / fake attachmentId.
9. **Tabs:** `tabs: none` — không surface/tab mới (**GAP-TAB-01**).
10. **Design gate:** prototype dual + `reviewUrl` (demo packet missing).
11. **Dev (sau):** `/init-bff-file` verify · `/integrate-file-upload-mobile` kit+preview+1 form · dual build — **cấm** `yarn start:std` ở PO.
12. **QA (sau):** curl files + form e2e Maestro — **cấm** chạy ở PO.

## 4. CTX / DEM / DI inventory (hash skip — copy analy)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/mobile-bff-file.md` | feature CTX |
| CTX-02 | `docs/plan/mobile-bff-platform-integrate/PLAN.md` | plan |
| CTX-03 | peers `patrol-checkin` · `incident-create` · `field-reflect` · `ai-vision` | consumers / peer |
| DEM-01 | host `#sheet-checkin` PhotoRow | check-in shipped |
| DEM-02 | host `#sc-inc-form` photos | P1 form default |
| DEM-03 | `Linm.RMMS.Demo/.../ios/index.html` | **missing** · Design prototype gate |
| DEM-04 | `specs/mobile-bff-file/ui/prototype/README.md` | prototype stub |
| CH-01 | `specs/_data-analy/mobile-bff-file-control-hint.md` | controlHint · tech factors |
| RD-01 | `specs/_data-analy/mobile-bff-file-real-data.md` | §A–§F |
| AT-01 | `specs/_data-analy/mobile-bff-file-action-tree.md` | 1 action |
| BFF-01 | `specs/_data-analy/mobile-bff-file-bff-endpoints.md` | BFF table |
| BFF-DOC | `Linm.RMMS.Mobile.Bff/docs/init-bff-file.md` | init skill |
| IOS | `Linm.RMMS.Mobile.iOS` · `FileAttachmentRepositoryImpl` · `PatrolCheckIn*` | native |
| AND | `Linm.RMMS.Mobile.Android` · same · `ApiService` files/* | native |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/files/*` | host |
| BE | FileService `:5018` · **cấm ERP.*** · **cấm** FilesController local | upstream |
| DI | — | **no Excel** |

**Cấm** re-scan demo / crawl CTX từ đầu.

## 5. controlHint (PO chốt — cite analy)

Nguồn CH-01. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| photoLabel | Ảnh hiện trường / Ảnh | SectionLabel | * | host | `#sc-inc-form` / `#sheet-checkin` · **13** |
| photoSlot | (empty slot) | ImageUploadSlot | * | `LinmImageUpload` | Ask kit · **cấm** File host trong kit |
| photoThumb | (preview) | ImageThumb | * | kit | GET `/object` JWT **hoặc** local pending |
| btnAdd | Tải ảnh / camera | IconButton | * | host `#i-camera` / picker | openCapture / PhotosPicker |
| btnRemove | Xóa ảnh | IconButton | * | kit | clear local + attachmentId |
| progress | Đang tải… | ProgressInline | * | kit | init→PUT→commit |
| toastFail | Không tải được ảnh | Toast | * | `LinmToast` | **cấm** fake id |
| attachmentBind | (hidden) | HiddenField | * | VM | `attachmentId` → form body |
| purpose | (meta) | — | * | VM | `patrol-checkin` · `incident` · `field-reflect` |

## 6. § Delta Current vs New

| ID | Current | New | Surface |
|----|---------|-----|---------|
| GAP-MOB-BFF-FILE-01 | **CLOSED** NuGet File 1.1.0 + rewrite + skip proxy | Giữ · QA curl verify · **cấm** rebuild controller | Mobile.Bff |
| GAP-MOB-FILE-CLIENT-01 | Upload live check-in only · purpose hardcode | purpose param + **1** P1 form `attachmentId` (default incident-create) | app |
| GAP-MOB-FILE-PREVIEW-01 | Preview local / id text | `GET files/{id}/object` + JWT · **cấm** resign | kit + host |
| GAP-MOB-FILE-KIT-01 | PhotosPicker ad-hoc · chưa shared kit | Dual `LinmImageUpload` · Ask `mobile_img_kit` | kit |
| GAP-MOB-FILE-CTX-01 | CTX/PLAN «thiếu» stale | Docs align Current=BFF shipped · New=kit+preview+form | meta |

**Keep:** BFF wire · `ai-vision/uploads*` · paths `files/init` · `files/{id}/object` · `files/commit` · Step 4b **SKIP**.

## 7. Tab index

`tabs: none` — sheet/kit · host giữ tab hiện có (`field` / check-in sheet). **Cấm** tab mới.

## 8. Screens + Pattern + action-tree

**Pattern:** N/A new screen · **sheet** kit + host PhotoRow edit.  
**formPattern:** N/A (owner không form riêng · bind host).  
**Grid AC / Report AC:** N/A.

### Action-tree (1 action = 1 feature)

```
platform
├── mobile-bff-file              ← owner · sheet · THIS FEATURE
│   ├── (BFF files/* wire)      ← CLOSED · verify · cấm enqueue
│   ├── (init→PUT→commit)       ← cùng slug
│   ├── (GET /object preview)   ← cùng slug · FILE-ATT-09
│   └── LinmImageUpload kit     ← Ask mobile_img_kit · dual · cấm OS-split enqueue
├── patrol-checkin              ← shared_action · PhotoRow shipped · không enqueue
├── incident-create             ← shared_action · P1 bind only · không enqueue pack
├── field-reflect               ← alt bind · không cả hai nếu TL chốt 1
└── ai-vision                   ← peer uploads* · không gộp / không thay
```

| Screen / surface | Zone ids | Role in slug |
|------------------|----------|--------------|
| **none** `#sc-*` mới | — | OUT |
| Host check-in sheet | `#sheet-checkin` PhotoRow | shared_action · shipped |
| Host incident form | `#sc-inc-form` photos | P1 bind default |
| Host field-reflect | `#sc-field-reflect` | alt bind · TL |
| Kit | `LinmImageUpload` slots | owner New |
| Mobile.Bff | `files/*` | verify-only |

**Enqueue sibling:** **none**.

## 9. Device AC

| ID | Scenario | Expected |
|----|----------|----------|
| AC-FILE-01 | init→PUT→commit happy path + JWT | `attachmentId` Guid · bind form · **cấm** fake id |
| AC-FILE-02 | Preview committed | ImageThumb từ `GET /object` bytes + JWT · **cấm** resign URL |
| AC-FILE-03 | Preview pending (pre-commit) | local bytes · sau commit chuyển AC-FILE-02 |
| AC-FILE-04 | Init/PUT/commit 401/422/fail | toastFail · **không** bind attachmentId · **không** fake 200 |
| AC-FILE-05 | Offline / FileService down | host queue / fail visible · **cấm** fake attachmentId |
| AC-FILE-06 | purpose theo host | `patrol-checkin` / `incident` / `field-reflect` đúng slug · **cấm** hardcode sai host |
| AC-FILE-07 | Kit parity dual | cùng slot UX iOS+Android · **cấm** 1-OS kit · **cấm** HTTP File host trong kit |
| AC-FILE-08 | P1 form bind | incident-create (default) submit body có `attachmentId` · alt field-reflect nếu TL |
| AC-FILE-09 | ai-vision peer | uploads* **không** đi `files/*` |
| AC-CAM-01 | Camera / picker deny | toast/in-app · **không** crash · **không** fake detection |
| AC-GPS-01 | GPS | **n/a** slug (host form tự xử lý) |
| AC-LEAVE-01 | Leave-dirty | **n/a** owner form · host LeaveConfirmModal · **cấm** native alert |
| AC-TAB-01 | Tab bar | `tabs: none` · không đổi IA Tab 5 |
| AC-TYPO-01 | Labels | SectionLabel **13** · toast 13–16 (cite typography) |

## 10. API (ids only — cite BFF-01)

| Method | Path | Notes |
|--------|------|-------|
| POST | `mobile-bff/api/v1/files/init` | purpose · fileName · contentType · sizeBytes |
| PUT | `mobile-bff/api/v1/files/{id}/object` | bytes / presign headers |
| POST | `mobile-bff/api/v1/files/commit` | → `attachmentId` |
| GET | `mobile-bff/api/v1/files/{id}/object` | preview bytes + JWT |

Host domain POST (incident / check-ins / …) **giữ** peer — chỉ thêm field attachment. **Cấm** invent `mobile-files`. Step 4b **SKIP**.

## 11. Open questions / blockers

- FileService `:5018` phải chạy khi verify/QA.
- Dev execute: **HARD** AskQuestion `mobile_img_kit` — **cấm** 1 OS · **cấm** VM/API trong kit.
- Demo packet missing → Design prototype + reviewUrl **required**.
- GAP-MOB-FILE-PREVIEW-01 · GAP-MOB-FILE-KIT-01 · GAP-MOB-FILE-CLIENT-01 **open** (Dev).
- TL chốt P1 form = `incident-create` (PO default) **hoặc** `field-reflect`.

## 12. Handoff → Design

| Field | Value |
|-------|-------|
| nextRole | `design` · `/agent-design-mobile` |
| write | `ui/*` · prototype dual · `reviewUrl` · `handoff/design-compact.md` |
| note | Map kit `LinmImageUpload` · zones PhotoRow host · **không** `#sc-*` mới · parity dual |
| autoApprove | ON |
| e2eQa | queued QA — **cấm** e2e ở Design |
| cấm | re-scan demo crawl · invent path · ERP.* |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T15:40:00.000Z |
| versionGate | aligned · prior analy 2026.08.25.01 |
| contentHashPrior | sha256:mobile-bff-file-control-hint-20260912-delta |
| taskId | task_873e65c9 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 -->
