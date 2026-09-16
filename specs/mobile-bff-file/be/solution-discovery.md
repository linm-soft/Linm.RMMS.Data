# SA — Solution — mobile-bff-file

| | |
|--|--|
| Feature | `mobile-bff-file` |
| Title | [Mobile] Mobile.Bff FileService · kit + preview + 1 form bind |
| Role | `sa` · `/agent-sa-mobile` |
| packKind | `sheet` |
| changeScope | `edit_page` · NEW AutocodeTask (verify BFF + native kit/form) |
| status | **confirmed** (autoApprove ON) |
| taskId | `task_9da4e2a3` |
| lane | `mobile` · native_dual |
| solution_confirm | `approve` |
| generatedAt | `2026-09-12T16:00:00.000Z` |
| contentHashPrior | sha256:mobile-bff-file-control-hint-20260912-delta |
| bffContentHash | sha256:mobile-bff-file-bff-20260912-delta |

## 1. Decision summary

| Decision | Value |
|----------|-------|
| Host File BFF | **Keep + verify** — NuGet `Linm.Platform.FileService.Bff` **1.1.0** · rewrite · proxy skip `files/**` · **GAP-MOB-BFF-FILE-01 CLOSED** |
| Path surface | **Không đổi** — `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · `GET files/{id}/object` |
| Client New | Dual `LinmImageUpload` kit · purpose param theo host · preview JWT · **1** P1 form `attachmentId` (default `incident-create`) |
| Keep | Check-in PhotoRow shared_action · `ai-vision/uploads*` RMMS P1 |
| Step 4b / MIG | **SKIP** — FileService schema ngoài Mobile.Bff · **cấm** ERP.* · **cấm** local FilesController · **cấm** invent `api/v1/mobile-files` |
| Offline / GPS | Owner = host screen · SA **n/a** (AC-FILE không claim leave/GPS) |
| Design zones | DES-MOB-FILE-KIT · HOST-CHECKIN · HOST-INC · HOST-REFLECT (alt TL) — **none** `#sc-*` mới |

## 2. Architecture (same BFF)

```
App (iOS/Android)
  ApiClient.base = {BffBase}/mobile-bff/api/v1
       │
       ▼
Linm.RMMS.Mobile.Bff (:5202)
  AddLinmFileServiceBff* + rewrite web-bff→mobile-bff
  MobileApiProxyController skips files/**
       │
       ▼
FileService (:5018) · api/v1/files/*
```

| Tầng | Repo / package | App biết? | SA note |
|------|----------------|-----------|---------|
| UI kit | `LinmImageUpload` dual · Ask `mobile_img_kit` lúc Dev | Có | GAP-MOB-FILE-KIT-01 |
| Host forms | check-in · incident-create · field-reflect (alt) | Có | GAP-MOB-FILE-CLIENT-01 |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có | verify-only `/init-bff-file` |
| File NuGet | `Linm.Platform.FileService.Bff` 1.1.0 | Không | **cấm** clone controllers |
| Domain | FileService `:5018` | Không | runtime dep QA/Dev |

## 3. API contract (FILE-ATT · ids)

Prefix app: `{BffPrefix}` = `/mobile-bff/api/v1`.

| Action | Method | Path | Auth | Gap |
|--------|--------|------|------|-----|
| Init | POST | `files/init` | JWT | host **CLOSED** |
| PUT bytes | PUT | `files/{uploadId}/object` | JWT / requiredHeaders | **CLOSED** |
| Commit | POST | `files/commit` | JWT → `attachmentId` | **CLOSED** |
| Preview | GET | `files/{id}/object` | JWT forward · **FILE-ATT-09** · cấm resign URL | **GAP-MOB-FILE-PREVIEW-01** |
| Form submit | POST | domain (incident / check-ins / …) | JWT · body `attachmentId` | form bind |
| ai-vision | * | `ai-vision/uploads*` | RMMS | **OUT** P1 keep |

### Init body (P1)

| Field | Value |
|-------|-------|
| `purpose` | Current `patrol-checkin` · New host slug `incident` / `field-reflect` |
| `product` | `rmms` |
| `fileName` | device name |
| `contentType` | `image/jpeg` \| `image/png` |
| `sizeBytes` | byte length |

### Init → commit chain

`uploadId` + `objectKey` (+ optional abs `uploadUrl`) → commit → `attachmentId` → form HiddenField / check-in photo ids.

## 4. UI bind map (Design → Dev)

| Zone id | Control | Bind |
|---------|---------|------|
| `#kit-linm-image-upload` | LinmImageUpload | init→PUT→commit · progress · fail toast |
| `#sheet-checkin` `#ci-photos` | PhotoRow shared | purpose `patrol-checkin` · keep |
| `#sc-inc-form` `#inc-photos` | photos + `#attachment-bind` | default P1 · `attachmentId` |
| `#sc-field-reflect` | alt TL | same kit · purpose `field-reflect` |
| `#photo-slot` `#photo-thumb` `#photo-progress` `#btn-add` `#btn-remove` `#toast-file-fail` | kit states | GET `/object` JWT / local |

## 5. Work packages → Team Lead

| WP | Skill / scope | DoD |
|----|---------------|-----|
| WP-BFF-VERIFY | `/init-bff-file` | curl init 401/422 OK · **không** 404 · FileService `:5018` up |
| WP-KIT | `/integrate-file-upload-mobile` · Ask `mobile_img_kit` | dual OS kit · **cấm** 1 OS · **cấm** VM/API trong kit |
| WP-PREVIEW | client GET `files/{id}/object` JWT | AC-FILE-09 · cấm resign |
| WP-FORM | 1 P1 form default `incident-create` | body `attachmentId` · purpose param · toast fail **cấm** fake id |
| WP-KEEP | check-in PhotoRow · ai-vision | no regress |

**Out of SA / Dev this feature:** Step 4b MIG · ERP.* · new `#sc-*` · invent mobile-files path.

## 6. Gaps (open → Dev)

| ID | Owner | Note |
|----|-------|------|
| GAP-MOB-BFF-FILE-01 | — | **CLOSED** · verify only |
| GAP-MOB-FILE-CLIENT-01 | Dev | purpose + 1 form bind |
| GAP-MOB-FILE-PREVIEW-01 | Dev | GET object JWT |
| GAP-MOB-FILE-KIT-01 | Dev | dual LinmImageUpload · Ask kit |

## 7. Verify gate (SA)

| Gate | Result |
|------|--------|
| Design confirmed + compact | PASS |
| Analy BFF endpoints cited | PASS · no invent |
| solution_confirm | **approve** (autoApprove ON) |
| Artifacts | `be/solution-discovery.md` · `handoff/sa-compact.md` |
| **cấm** | yarn build/e2e/start:std · Step 4b · Write MFE/native · re-scan demo |

## 8. Next

| Field | Value |
|-------|-------|
| nextRole | `team_lead` · `/agent-team-lead-mobile` |
| write | `task/mobile-bff-file.md` · `handoff/team_lead-compact.md` |
| e2eQa | queued · chỉ `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T16:00:00.000Z |
| versionGate | aligned · prior design/po/analy 2026.08.25.01 |
| contentHash | sha256:mobile-bff-file-sa-20260912 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 rulesVersion=2026.08.25.2 -->
