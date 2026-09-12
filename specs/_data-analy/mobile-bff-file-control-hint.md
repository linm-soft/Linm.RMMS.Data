# Data-analy — mobile-bff-file (controlHint)

| | |
|---|---|
| feature | `mobile-bff-file` |
| title | [Mobile] Mobile.Bff × FileService |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS · upload kit) · **không** screen riêng |
| changeScope | `edit_page` · NEW AutocodeTask `task_32aa90dd` · keep empty PO/Design dirs · ghi § Delta |
| status | **confirmed** |
| taskId | `task_32aa90dd` |
| autoApprove | `ON` |
| demo | host PhotoRow: `patrol-checkin` `#sheet-checkin` (shipped) · P1 form `incident-create` `#sc-inc-form` photos · kit `LinmImageUpload` · prototype README `specs/mobile-bff-file/ui/prototype/README.md` |
| ctx | `docs/context/features/mobile-bff-file.md` · plan `docs/plan/mobile-bff-platform-integrate/PLAN.md` · peers `patrol-checkin` · `incident-create` · `field-reflect` · `ai-vision` |
| code | BFF `docs/init-bff-file.md` · iOS/Android `FileAttachmentRepositoryImpl` · `PatrolCheckIn*` |
| generatedAt | `2026-09-12T15:33:17.000Z` |

**Cấm:** invent `api/v1/mobile-files` · local `FilesController` · kit gọi `:5018` · resign URL làm image src · ERP.* · mfeStdUrl · thay `ai-vision/uploads*` P1 · 1-OS kit · fake 200 upload.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mobile-bff-file-bff-endpoints.md`](mobile-bff-file-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mobile-bff-file-action-tree.md`](mobile-bff-file-action-tree.md) | 7 tree + share/reuse |
| [`mobile-bff-file-real-data.md`](mobile-bff-file-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · scan 2026-09-12)

| ID | Current (native + BFF) | New (DoD) | Surface |
|----|------------------------|-----------|---------|
| GAP-MOB-BFF-FILE-01 | **CLOSED** — NuGet `Linm.Platform.FileService.Bff` 1.1.0 · `AddLinmFileServiceBff*` · rewrite `mobile-bff`→`web-bff` files · proxy skip `files/` · `ServiceEndpoints:FileService` `:5018` | Giữ · QA curl init/`GET /object` `:5202` · **cấm** re-clone controller · CTX/PLAN «thiếu» = stale | Mobile.Bff |
| GAP-MOB-FILE-CLIENT-01 | Dual `FileAttachmentRepositoryImpl` · init→PUT→commit · **patrol-checkin only** · `purpose=patrol-checkin` hardcode | Reuse use-case · `purpose` theo host slug · **1** P1 form (`incident-create` **hoặc** `field-reflect`) body `{ attachmentId }` | app |
| GAP-MOB-FILE-PREVIEW-01 | Preview = local bytes / id text · **không** `GET files/{id}/object` | Preview bytes qua BFF + JWT · **FILE-ATT-09** · **cấm** resign URL | kit + host |
| GAP-MOB-FILE-KIT-01 | Chưa `LinmImageUpload` shared kit · check-in PhotosPicker ad-hoc | Dual kit slot-only · Ask `mobile_img_kit` lúc `/integrate-file-upload-mobile` · **cấm** URLSession/Retrofit File host trong kit (**FILE-ATT-06**) | kit |
| GAP-MOB-FILE-CTX-01 | CTX/PLAN vẫn ghi Mobile.Bff File «thiếu» | Docs/STATUS align Current=shipped BFF · New=kit+preview+form | meta |

**Không** đổi (OUT): `ai-vision/uploads*` RMMS proxy · Map/Task BFF · invent path · Step 4b / MIG ở role này · ERP.* · PO/Design copy khi đã có (hiện **empty** → PO tạo mới).

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Host form tự xử lý |
| Camera | **yes** | Kit/host PhotoRow · picker / capture |
| Offline | yes | Upload fail → queue host · **cấm** fake attachmentId |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |
| JWT | **yes** | Mọi `files/*` · preview object bytes |

## § Tab index

`tabs: none` — **sheet/kit** · không screen riêng · host giữ tab hiện có (`field` / check-in sheet).

## § Demo dual

Cùng flow VN: chọn ảnh → upload → preview → `attachmentId` trên form submit. iOS/Android kit parity. Demo SSOT path packet `Linm.RMMS.Demo/src/demo/ios/index.html` **missing** → dùng host prototype `incident-create` / `patrol-checkin` zones · Design gate prototype+reviewUrl **pending**.

## controlHint — kit `LinmImageUpload` + host PhotoRow

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| photoLabel | Ảnh hiện trường / Ảnh | SectionLabel | **13** | host | reuse `#sc-inc-form` / `#sheet-checkin` |
| photoSlot | (empty slot) | ImageUploadSlot | — | `LinmImageUpload` | Ask kit · **cấm** File host trong kit |
| photoThumb | (preview) | ImageThumb | — | kit | bytes từ `GET files/{id}/object` + JWT **hoặc** local pending |
| btnAdd | Tải ảnh / camera | IconButton | — | `#i-camera` / picker | host openCapture / PhotosPicker |
| btnRemove | Xóa ảnh | IconButton | — | kit | clear local + attachmentId |
| progress | Đang tải… | ProgressInline | 13 | kit | init→PUT→commit |
| toastFail | Không tải được ảnh | Toast | 13–16 | `LinmToast` | **cấm** fake id |
| attachmentBind | (hidden) | HiddenField | — | VM | `attachmentId` / `attachmentId[]` → form body |
| purpose | (meta) | — | — | VM | `patrol-checkin` · `incident` · `field-reflect` |

## UNCLEAR

**none** — BFF File live trên host · client upload live check-in · form host P1 = **incident-create** (default task) · kit Ask deferred to Dev execute · Step 4b **skip**.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `mobile-bff-file` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `mobile-bff-file-real-data.md` |
| bff | **PASS** · `mobile-bff-file-bff-endpoints.md` |
| action-tree | **PASS** · `mobile-bff-file-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON · **PO/Design empty** → tạo requirement · § Delta giữ BFF closed |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | Dev: `/init-bff-file` verify-only · `/integrate-file-upload-mobile` kit+preview+1 form |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T15:33:17.000Z |
| versionGate | rechecked |
| contentHash | sha256:mobile-bff-file-control-hint-20260912-delta |
| ctxHash | sha256:118eafff4165ea8b |
| demoHash | sha256:mobile-bff-file-host-zones-checkin-inc-form |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
