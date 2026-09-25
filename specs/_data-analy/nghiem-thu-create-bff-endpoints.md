# BFF endpoints — nghiem-thu-create (mobile sheet · Tạo nghiệm thu)

| | |
|---|---|
| feature | `nghiem-thu-create` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · `NghiemThuController` · FileService |
| changeScope | `new_page` · task `task_eb0e541f` |
| source | CTX `nghiem-thu-create.md` · `NghiemThuController` · `NghiemThuDtos` · demo `#sc-nghiem-thu-create` |
| **cấm** | invent `api/v1/nghiem-thu-create` · invent `nghiem-thu-files` · invent Mobile NghiemThuController · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| Domain Create | **Live** `POST api/v1/patrol/nghiem-thu` | **Giữ** path · mobile qua Mobile.Bff |
| Init-data | **Live** `GET …/init-data` | Bind mẫu + status labels |
| Mobile.Bff | Catch-all `{**path}` | Verify `patrol/nghiem-thu*` · **cấm** dedicated create controller |
| Files | `mobile-bff/api/v1/files/*` **Live** | Upload trước POST · persist guid only |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | **OUT** native |
| Step 4b / MIG | Schema_NghiemThu **đã** apply | **SKIP** data_analy |

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Patrol · `NghiemThuController` | **Không** — proxy rewrite |
| Dedicated Mobile create controller | **không** | **cấm invent** |

## Table — `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Init mẫu + status | GET | `patrol/nghiem-thu/init-data` | proxy | `GetInitData` | TemplateTypes · Statuses | GAP-MOB-NTC-MAU-01 |
| Lưu nháp | POST | `patrol/nghiem-thu` | proxy | `Create` | `CreateNghiemThuRequest` | GAP-MOB-NTC-SAVE-01 |
| Upload media | POST/PUT | `files/*` | FileService rewrite | FileService | max 10 guids | GAP-MOB-NTC-MEDIA-01 |
| GPS chốt | — | — | — | Device CL / Fused | location | **không** API |
| Hủy / back | — | — | — | local | `go('nghiem-thu')` | **không** API |
| Prefetch list | — | — | — | | | **OUT** — owner list |
| GetById / Update | GET/PUT | `patrol/nghiem-thu/{id}` | proxy | | | **OUT** — owner detail |

## DTO bind (live `CreateNghiemThuRequest`)

| UI / derived | → Create body | Required |
|--------------|---------------|----------|
| templateRow | `TemplateType` (`mau-01`…`10`) | **yes** |
| locationRow · GPS | `ZoneOrgCode?` · `Route` · `FieldInfo` · `KmFrom?`/`KmTo?` | Route · FieldInfo **yes** |
| attachRow · FileService | `MediaIds` guid[] | no (max 10) |
| navSave «Lưu nháp» | `Status` = `draft` | **yes** |
| auth profile | `AssigneeCode` | **yes** (GAP-MOB-NTC-REQ-01) |
| device now | `InspectedAt` | **yes** |
| (opt) | `VpOrgCode?` · `Note?` | no |

**Validate live:** `Status` · `TemplateType` · `Route` · `AssigneeCode` · `FieldInfo` · `InspectedAt` · catalog route + mau + status.

**Cấm** app fork DTO khác BFF table · **cấm** persist presigned URL trong `MediaIds`.

## Có trên domain — **không** thuộc slug create P1

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/nghiem-thu` | list — owner `nghiem-thu` |
| GET/PUT/DELETE | `patrol/nghiem-thu/{id}` | detail — owner `nghiem-thu-detail` |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | web only |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `NghiemThuController` | `[Route("api/v1/patrol/nghiem-thu")]` GET init-data · POST Create |
| DTO | `CreateNghiemThuRequest` · `NghiemThuInitDataDto` |
| Entity | `NghiemThuEntity` / `rmms_nghiem_thu` · media `NghiemThuMediaEntity` |
| Mobile.Bff | catch-all proxy · **không** NT-create controller |
| Files | `mobile-bff/api/v1/files/*` live |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| `api/v1/nghiem-thu-create` | **không** — **cấm invent** |
| Step 4b | **SKIP** — schema live |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent mobile-only create path / DTO fork  
- Persist FileService full URL  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T16:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| bffContentHash | sha256:nghiem-thu-create-mobile-bff-20260919 |
| taskId | `task_eb0e541f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
