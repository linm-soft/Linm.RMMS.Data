# BFF endpoints — nghiem-thu (mobile list · Công tác nghiệm thu)

| | |
|---|---|
| feature | `nghiem-thu` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · `NghiemThuController` |
| changeScope | `edit_page` · task `task_1bd5874a` |
| source | CTX `nghiem-thu.md` · `NghiemThuController` · `NghiemThuDtos` · demo `#sc-nghiem-thu` |
| **cấm** | invent `api/v1/nghiem-thu` · invent Mobile NghiemThuController · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| Domain API | **Live** `api/v1/patrol/nghiem-thu` (web done) | **Giữ** path · mobile app gọi qua Mobile.Bff |
| Mobile.Bff | Catch-all `{**path}` → `api/v1/{path}` | Verify `patrol/nghiem-thu*` · **cấm** dedicated NT controller |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | **OUT** native — dùng `mobile-bff` |
| Files | `mobile-bff/api/v1/files/*` (rewrite) | List **không** upload · create/detail reuse FileService |
| Step 4b / MIG | Schema_NghiemThu **đã** apply (web) | **SKIP** data_analy |

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Patrol · `NghiemThuController` | **Không** — proxy rewrite |
| Dedicated Mobile NT controller | **không** | **cấm invent** |

## Table — `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| List NT | GET | `patrol/nghiem-thu` | proxy | `NghiemThuController.GetList` | CTX · live | GAP-MOB-NT-DATA-01 |
| Init lookups | GET | `patrol/nghiem-thu/init-data` | proxy | `GetInitData` | status + templateType | filter/badge map |
| Prefetch detail (opt) | GET | `patrol/nghiem-thu/{id}` | proxy | `GetById` | sibling detail | **OUT** slug list UI |
| Nav create | — | — | — | local | `go('nghiem-thu-create')` | **không** API |
| Row → detail | — | — | — | local | `go('nghiem-thu-detail')` + `Id` | **không** API list |
| Search / filter UI | — | query on GET | — | | `search`·`status`·`route`·`templateType`·`fromDate`·`toDate` | chrome |
| Upload media | — | — | — | | FileService | **OUT** list · create |

## Query (list) — passthrough live

`search` · `status` · `route` · `templateType` · `fromDate` · `toDate` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50`.

## DTO bind (live `NghiemThuDto`)

| Field | List zone |
|-------|-----------|
| `Id` | nav key → detail |
| `Code` | rowCode NT-* |
| `TemplateType` | rowSub (label via init-data) |
| `Route` · `KmFrom` | rowSub tuyến · Km |
| `Status` | rowStatus badge VN |
| `ZoneOrgCode` | optional rowSub Khu |
| `MediaIds` | optional «ảnh + video» hint nếu Count>0 |
| `InspectedAt` · `UpdatedAt` | optional caption P2 |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug list P1

| Method | Path | Ghi |
|--------|------|-----|
| POST | `patrol/nghiem-thu` | create — owner `nghiem-thu-create` |
| PUT/DELETE | `patrol/nghiem-thu/{id}` | detail / web |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | web only |
| Files | `mobile-bff/api/v1/files/*` | create/detail |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `NghiemThuController` | `[Route("api/v1/patrol/nghiem-thu")]` GET list · init-data · CRUD |
| Entity | `NghiemThuEntity` / `rmms_nghiem_thu` · media `NghiemThuMediaEntity` |
| Mobile.Bff | catch-all proxy · **không** NT-specific controller |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| `api/v1/nghiem-thu` (root) | **không** — **cấm invent** |
| Step 4b | **SKIP** — schema live |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent mobile-only NT path / DTO fork  
- Persist FileService full URL  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-19T15:29:13.000Z |
| versionGate | ok |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| bffContentHash | sha256:nghiem-thu-mobile-bff-20260919 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
