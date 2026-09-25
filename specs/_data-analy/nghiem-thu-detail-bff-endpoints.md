# BFF endpoints — nghiem-thu-detail (mobile sheet · Chi tiết nghiệm thu)

| | |
|---|---|
| feature | `nghiem-thu-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · `NghiemThuController` · FileService |
| changeScope | `edit_page` · task `task_edea0c3a` |
| source | CTX `nghiem-thu-detail.md` · `NghiemThuDtos` · `MAU-10.md` · `CHI-SO.md` · `SCHEMA.md` · demo `#sc-nghiem-thu` toast |
| **cấm** | invent `api/v1/nghiem-thu-detail` · invent `files-nt` · invent Mobile NghiemThuController · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

## § Delta Current vs New

| Item | Current | New |
|------|---------|-----|
| Domain GetById / Update | **Live** `GET/PUT api/v1/patrol/nghiem-thu/{id}` · `NghiemThuDto` + `Scores` | **Giữ** path · mobile qua Mobile.Bff |
| Result / scores | Columns + child `rmms_nghiem_thu_score` · migration `20260919180443_Schema_NghiemThuMau` | Bind GET · PUT replace-set `Scores` khi non-null |
| Init-data | **Live** `GET …/init-data` · TemplateTypes MAU-10 + criteria + ResultCodes | Label ship · **cấm** «Mẫu nghiệm thu NN» |
| Mobile.Bff | Catch-all `{**path}` **Live** | Verify `patrol/nghiem-thu/{id}` · **cấm** dedicated detail controller |
| Files | `mobile-bff/api/v1/files/*` **Live** (File NuGet · proxy **không** forward `files`) | Resign guid · persist `MediaIds` only |
| DELETE | **Live** web | P1 mobile **OUT** |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | **OUT** native queue |
| Step 4b / MIG | Schema_NghiemThuMau **đã** apply | **SKIP** data_analy |

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | Patrol · `NghiemThuController` | **Không** — proxy rewrite |
| Dedicated Mobile detail controller | **không** | **cấm invent** |

## Table — `#sc-nghiem-thu-detail` · `DES-MOB-NGHIEM-THU-DETAIL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Mở chi tiết | GET | `patrol/nghiem-thu/{id}` | proxy | `GetById` | `NghiemThuDto` + `Scores` | GAP-MOB-NT-BIND-01 |
| Init label + criteria + result | GET | `patrol/nghiem-thu/init-data` | proxy | `GetInitData` | MAU-10 · ResultCodes · criteria | GAP-MOB-NT-LABEL-01 |
| Lưu sửa | PUT | `patrol/nghiem-thu/{id}` | proxy | `Update` | `UpdateNghiemThuRequest` | GAP-MOB-NT-SAVE-01 |
| Gallery / thêm media | POST/PUT + GET object | `files/*` | FileService rewrite | FileService | `MediaIds` max 10 | GAP-MOB-NT-MEDIA-01 |
| GPS chốt (Edit) | — | — | — | Device CL / Fused | `FieldInfo` · `ZoneOrgCode` | **không** API |
| Đóng / Hủy | — | — | — | local | `go('nghiem-thu')` / discard | **không** API |
| List prefetch | — | — | — | | | **OUT** — owner list |
| Create | POST | `patrol/nghiem-thu` | proxy | | | **OUT** — owner create |
| Xóa | DELETE | `patrol/nghiem-thu/{id}` | proxy | `SoftDelete` | | **OUT** P1 |

## DTO bind (live `NghiemThuDto` / `UpdateNghiemThuRequest`)

| UI / derived | → body | Required |
|--------------|--------|----------|
| title | `Code` (read) · path `{id}` | id from list row |
| templateRow | `TemplateType` + display `TemplateLabel` | **yes** · `mau-01`…`10` |
| resultRow | `ResultCode` `pass`/`fail`/`deduct` | **yes** khi `Status=done` · null OK draft |
| resultNote | `ResultNote` | no |
| scoreList | `Scores[]` `{CriterionCode, Verdict, Note, SortOrder}` | Verdict `pass`/`fail`/`n_a` · code ∈ catalog đúng mẫu |
| routeRow / kmRow / fieldRow | `Route` · `KmFrom?`/`KmTo?` · `FieldInfo` · `ZoneOrgCode?` | Route · FieldInfo **yes** |
| statusRow | `Status` | **yes** |
| workTime | `WorkStartedAt?` · `WorkEndedAt?` | no |
| note | `Note?` | no |
| attachRow | `MediaIds` guid[] | no (max 10) · null/empty clears on PUT |
| auth | `AssigneeCode` | **yes** |
| inspectedAt | `InspectedAt` | **yes** |
| (opt) | `VpOrgCode?` | no |

**Validate live:** TemplateType allow-list 10 · ResultCode ∈ pass/fail/deduct khi `done` · Scores.CriterionCode ∈ catalog của đúng TemplateType · `Scores` non-null = replace-set · null = giữ cũ.

**Cấm** app fork DTO · **cấm** persist presigned URL · **cấm** JSON blob scores trên parent.

## Có trên domain — **không** thuộc slug detail P1

| Method | Path | Ghi |
|--------|------|-----|
| GET | `patrol/nghiem-thu` | list — owner `nghiem-thu` |
| POST | `patrol/nghiem-thu` | create — owner `nghiem-thu-create` |
| DELETE | `patrol/nghiem-thu/{id}` | **OUT** mobile P1 |
| Web BFF | `web-bff/api/v1/patrol/nghiem-thu` | web only |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `NghiemThuController` | `[Route("api/v1/patrol/nghiem-thu")]` GET `{id}` · PUT `{id}` · GET init-data |
| DTO | `NghiemThuDto` · `UpdateNghiemThuRequest` · `NghiemThuScoreDto` · `NghiemThuInitDataDto` |
| Entity | `rmms_nghiem_thu` Result* · Work* · child `rmms_nghiem_thu_score` · media `NghiemThuMediaEntity` |
| Migration | `20260919180443_Schema_NghiemThuMau` |
| Catalog | `NghiemThuCatalog` labels MAU-10 · ResultCodes · criteria |
| Mobile.Bff | catch-all proxy · **không** NT-detail controller · `files` không forward ApiBase |
| DOMAIN-MAP | Patrol · **cấm** ERP.* |
| `api/v1/nghiem-thu-detail` | **không** — **cấm invent** |
| Step 4b | **SKIP** — schema live |

## Cấm

- App biết RMMS `:5101` trực tiếp
- DbContext trên Mobile.Bff
- Invent mobile-only detail path / DTO fork / `files-nt`
- Persist FileService full URL
- Gộp `csdl-so-08` / `kcht-cong-trinh`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T18:55:00.000Z |
| versionGate | ok |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| bffContentHash | sha256:nghiem-thu-detail-mobile-bff-20260919 |
| taskId | `task_edea0c3a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
