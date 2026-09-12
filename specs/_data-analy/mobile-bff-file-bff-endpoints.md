# BFF endpoints — mobile-bff-file (Mobile.Bff × FileService)

| | |
|---|---|
| feature | `mobile-bff-file` |
| bff | `Linm.RMMS.Mobile.Bff` · NuGet `Linm.Platform.FileService.Bff` **1.1.0** |
| prefix | `mobile-bff/api/v1` |
| package route | `web-bff/api/v1/files/*` (rewrite) |
| downstream | `ServiceEndpoints:FileService` → `:5018` · `{FileService}/api/v1/files/*` |
| changeScope | `edit_page` · task `task_32aa90dd` |
| source | CTX `mobile-bff-file.md` · `docs/init-bff-file.md` · dual `FileAttachmentRepositoryImpl` |
| **cấm** | invent `api/v1/mobile-files` · local FilesController · ERP.* · DbContext trên BFF · app gọi `:5018` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| Host File BFF | **live** — PackageReference + `AddLinmFileServiceBff*` + rewrite + proxy skip | Giữ · verify curl · **GAP-MOB-BFF-FILE-01 CLOSED** |
| Client lifecycle | Dual init→PUT→commit · check-in only | + `GET files/{id}/object` preview · purpose theo host · 1 form P1 |
| Path | `files/init` · `files/{id}/object` · `files/commit` | **không** đổi · **cấm** invent |
| Step 4b | FileService DB ngoài Mobile.Bff | **SKIP** data_analy · không MIG |

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI / kit | iOS + Android · `LinmImageUpload` (Ask) | Có — `{BffPrefix}/files/*` qua VM/repo |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host `:5202` |
| File NuGet | `Linm.Platform.FileService.Bff` | **Không** — rewrite + controllers |
| Domain API | FileService `:5018` | **Không** |
| Catch-all RMMS | `MobileApiProxyController` | **skip** `files/**` |

## Table — `files/*` · FILE-ATT

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Init upload | POST | `files/init` | File NuGet + rewrite | FileService init | CTX · client DTO | **CLOSED** host |
| PUT bytes | PUT | `files/{uploadId}/object` | same | object store / FS | init uploadUrl fallback | **CLOSED** |
| PUT abs (presign) | PUT | absolute `uploadUrl` | — | storage | khi URL ngoài `/files/` | live client |
| Commit | POST | `files/commit` | same | commit → `attachmentId` | client DTO | **CLOSED** |
| Preview / download | GET | `files/{id}/object` | JWT forward | bytes | **FILE-ATT-09** | **GAP-MOB-FILE-PREVIEW-01** |
| Host form submit | POST | domain path (incident / check-ins / …) | proxy | RMMS | body mang `attachmentId` | form GAP |
| ai-vision upload | * | `ai-vision/uploads*` | RMMS proxy | RMMS | **giữ P1** | **OUT** |

## Init body (live client)

| Field | P1 |
|-------|-----|
| `purpose` | `patrol-checkin` (Current) · New: `incident` / `field-reflect` theo host |
| `product` | `rmms` |
| `fileName` | device name |
| `contentType` | `image/jpeg` / `image/png` |
| `sizeBytes` | byte length |

## Init response → commit

| Field | Use |
|-------|-----|
| `uploadId` | PUT path + commit |
| `objectKey` | commit body |
| `uploadUrl?` | presign abs PUT nếu ngoài `/files/` |
| `requiredHeaders?` | Content-Type map |
| commit → `attachmentId` | form body / check-in `photoLocalIds` |

## Có trên domain — **không** thuộc invent

| Method | Path | Ghi |
|--------|------|-----|
| * | `api/v1/mobile-files` | **cấm invent** |
| * | Web `web-bff/api/v1/files` | package internal sau rewrite |
| * | `ai-vision/uploads*` | peer AI · **không** thay P1 |

## Verify (Dev/QA — **cấm** data_analy chạy)

```bash
# 401/422 OK · 404 = route missing
curl -s -o /dev/null -w "%{http_code}\n" \
  -X POST http://localhost:5202/mobile-bff/api/v1/files/init \
  -H "Content-Type: application/json" \
  -d '{"purpose":"patrol-checkin","product":"rmms","fileName":"a.png","contentType":"image/png","sizeBytes":1}'
```

FileService `:5018` phải chạy.

## Step 4b

**SKIP** — FileService schema ngoài Mobile.Bff · không MIG ở role này · SA confirm attachment field names trên host form.

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
| contentHash | sha256:mobile-bff-file-bff-20260912-delta |
| bffContentHash | sha256:mobile-bff-file-bff-20260912-delta |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
