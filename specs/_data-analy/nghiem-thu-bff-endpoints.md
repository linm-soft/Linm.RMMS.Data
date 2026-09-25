# BFF endpoints — nghiem-thu (mobile list · Công tác nghiệm thu)

| | |
|---|---|
| feature | `nghiem-thu` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · `NghiemThuController` |
| changeScope | `edit_page` · task `task_b82ebc4c` |
| source | CTX `nghiem-thu.md` · plan `nghiem-thu-mau/SCHEMA.md` · demo `#sc-nghiem-thu` |
| **cấm** | invent `api/v1/nghiem-thu` · invent Mobile NghiemThuController · ERP.* · app `:5101` · DbContext trên BFF · invent `files-nt` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| Domain API | Live `api/v1/patrol/nghiem-thu` | **Giữ** path · DTO + init-data expand (Result* · Scores · MAU-10 Label) |
| Mobile.Bff | Catch-all `{**path}` | **Giữ** · **cấm** dedicated NT controller |
| init-data | Statuses + TemplateTypes interim | Label MAU-10 · `criteria[]` · `ResultCodes[]` |
| List DTO | Code · TemplateType · Status · … | + `ResultCode` (nullable) · TemplateLabel resolve client/init |
| Schema | Schema_NghiemThu | SA `Schema_NghiemThuMau` pair CLI · data_analy **SKIP** Step 4b |
| Files | `mobile-bff/api/v1/files/*` | **Giữ** · list **không** upload |
| Web BFF / Field form | live | **OUT** queue `qlbd-mobile` turn này |

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
| List NT | GET | `patrol/nghiem-thu` | proxy | `GetList` | + ResultCode | GAP-MOB-NT-RESULT-01 |
| Init lookups | GET | `patrol/nghiem-thu/init-data` | proxy | `GetInitData` | MAU-10 · criteria · ResultCodes | GAP-MOB-NT-MAU-01 · INIT-01 |
| Prefetch detail (opt) | GET | `patrol/nghiem-thu/{id}` | proxy | `GetById` | scores bind | **OUT** list UI · sibling |
| Nav create | — | — | — | local | `go('nghiem-thu-create')` | **không** API |
| Row → detail | — | — | — | local | detail + `Id` | **không** API list |
| Search / filter | — | query on GET | — | | `search`·`status`·`route`·`templateType`·dates | chrome |
| Upload media | — | — | — | | FileService | **OUT** list |

## Query (list) — passthrough

`search` · `status` · `route` · `templateType` · `fromDate` · `toDate` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50`. Optional later: `?resultCode=` — **không** bắt buộc P1.

## DTO bind (list)

| Field | List zone |
|-------|-----------|
| `Id` | nav → detail |
| `Code` | rowCode |
| `TemplateType` | resolve Label via init-data **MAU-10** |
| `Route` · `KmFrom` | rowSub |
| `Status` | rowStatus |
| `ResultCode` | rowResult · nullable |
| `ZoneOrgCode` | optional |
| `MediaIds` / Count | media hint |
| `Scores` | **OUT** list · detail/create |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug list P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| POST | `patrol/nghiem-thu` | create + Result*/Scores — owner create |
| PUT/DELETE | `patrol/nghiem-thu/{id}` | detail |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | web only · OUT mobile queue |
| Files | `mobile-bff/api/v1/files/*` | create/detail · **cấm** invent |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| Path | `[Route("api/v1/patrol/nghiem-thu")]` **giữ** |
| Mobile.Bff | catch-all · **không** NT-specific controller |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| Schema_NghiemThuMau | SA · pair Migrations + Api · **SKIP** data_analy Step 4b |
| `api/v1/nghiem-thu` root | **không** — **cấm invent** |
| files-nt | **không** — FileService giữ |

## Cấm

- App → RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent mobile-only NT path / DTO fork  
- Persist FileService full URL  
- Enqueue web Field trong pack này  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-20T00:39:00.000Z |
| versionGate | ok |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
