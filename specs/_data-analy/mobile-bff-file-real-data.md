# Real-data bind — mobile-bff-file

| | |
|---|---|
| feature | `mobile-bff-file` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · File NuGet + JWT · **không** ApiBase cho `files/*` |
| changeScope | `edit_page` |
| taskId | `task_32aa90dd` |
| generatedAt | `2026-09-12T15:33:17.000Z` |

Skill: real-data bind · **GAP-MOB-REAL-01** · **FILE-ATT-09**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| Upload lifecycle | Dual check-in: init→PUT→commit → `attachmentId` | Giữ · purpose theo host · **cấm** fake id |
| Preview | Local `previewData` / id text | `GET files/{id}/object` bytes + JWT · **cấm** resign URL |
| Form body | check-in `photoLocalIds` = File guids | + P1 `incident-create` (default) field `{ attachmentId }` / array · alt `field-reflect` |
| purpose | hardcode `patrol-checkin` | param: `patrol-checkin` · `incident` · `field-reflect` |
| ai-vision | `ai-vision/uploads*` | **giữ** · **không** bind FileService |

## §A Source / Resource

| Resource | Entity | Key |
|----------|--------|-----|
| File upload session | FileService upload | `uploadId` Guid |
| Attachment | FileService attachment | `attachmentId` Guid |
| Object bytes | object store / FS | `objectKey` · GET `/object` |
| Host form | Incident / PatrolCheckIn / FieldReflect | domain id + attachment field |

CTX `mobile-bff-file.md` · BFF `mobile-bff-file-bff-endpoints.md` · host zones PhotoRow.

## §B Path = BFF table

| UI zone | Bind | Method · Path |
|---------|------|----------------|
| Add / capture | local bytes | Device · **không** API |
| Upload progress | init → PUT → commit | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` |
| Thumb preview (committed) | object bytes | `GET files/{id}/object` + JWT |
| Thumb preview (pending) | local bytes | device · trước commit |
| Hidden attachment | `attachmentId` | commit response |
| Host submit | form DTO + ids | domain POST (incident / check-ins / …) |
| Fail toast | local | HTTP/device fail · **cấm** fake |

§B path **khớp** BFF — **không** invent `mobile-files`.

## §C Map DTO → UI

| dtoField | UI |
|----------|-----|
| `purpose` · `product` | init request meta |
| `fileName` · `contentType` · `sizeBytes` | init từ file local |
| `uploadId` · `objectKey` | PUT + commit |
| `uploadUrl` · `requiredHeaders` | abs PUT khi presign |
| `attachmentId` | thumb bind · form hidden · submit body |
| GET `/object` bytes | ImageThumb (FILE-ATT-09) |

## §D Map overlay

N/A — không embed map.

## §E Progress

| Case | Behavior |
|------|----------|
| Init 401/422 | toastFail · **không** fake id |
| Init 404 | route missing · BFF verify fail |
| PUT fail | abort · toastFail · **không** commit |
| Commit fail | toastFail · **không** bind attachmentId |
| Preview GET fail | placeholder / toast · **cấm** resign URL |
| Offline | host queue · **cấm** fake 200 |
| FileService down | fail visible · blocker STATUS |
| ai-vision path | **không** route qua files/* |

## §F Cấm

- Invent `api/v1/mobile-files` · app → `:5018` · kit HTTP File host
- Resign URL làm `<img src>` / AsyncImage URL công khai
- Fake attachmentId / skip commit
- Thay `ai-vision/uploads*` P1
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**
- ERP.* · mfeStdUrl

## Demo rows SSOT (prototype only · **không** ship fallback)

| Field | Value |
|-------|-------|
| purpose | patrol-checkin / incident |
| fileName | a.png |
| contentType | image/png |
| Flow | init → PUT → commit → preview GET /object |
| Form | `{ attachmentId: "<guid>" }` |

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
| contentHash | sha256:mobile-bff-file-real-data-20260912 |
| ctxHash | sha256:118eafff4165ea8b |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
