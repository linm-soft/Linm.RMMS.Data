# Real-data bind — nghiem-thu (mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol `NghiemThu` |
| changeScope | `edit_page` |
| taskId | `task_b82ebc4c` |
| plan cite | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` · `docs/context/features/nghiem-thu-mau.md` |
| generatedAt | `2026-09-20T00:39:00.000Z` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| Template label | interim «Mẫu nghiệm thu 0N» | init-data Label = **MAU-10** · value giữ |
| rowSub | «Mẫu 03 · QL…» | `{TemplateLabel} · {Route} Km {KmFrom}` · MAU-10 |
| Result | không bind | `ResultCode` badge · null → ẩn |
| init-data | Statuses + TemplateTypes | + `criteria[]` / mẫu · `ResultCodes[]` |
| Scores | n/a list | create/detail `scores[]` · list **không** edit |
| Schema | Schema_NghiemThu | SA `Schema_NghiemThuMau` · **SKIP** Step 4b data_analy |
| sameMfe | web Field list yes | same resource · mobile prefix · web form **OUT** queue |
| Files | FileService guid | **giữ** · **cấm** files-nt · **OUT** list upload |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `NghiemThuController` · `nghiem-thu.md` · plan SCHEMA | EmptyChrome · giữ shell + Tạo | Toast fail · **cấm** fake NT-* |
| `catalog` | `GET …/init-data` Statuses · TemplateTypes(+criteria) · ResultCodes | — | fallback MAU-10 CLOSED labels only |
| `files` | FileService `mobile-bff/api/v1/files/*` | — | **OUT** list |
| `entity` | `rmms_nghiem_thu` + (SA) `rmms_nghiem_thu_score` | — | soft `IsActive` |
| `demo` | `#sc-nghiem-thu` zone ids | — | **cấm** demo-json SSOT |
| `anti-source` | WO · sessions · `csdl-so-08` · `kcht-cong-trinh` · ERP.* | — | **cấm** gộp |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| items | Danh sách NT | ListRow list | — | `GET patrol/nghiem-thu` | — | yes | yes |
| rowCode | Mã NT-* | Text | — | `Code` | — | yes | yes |
| rowSub | Label MAU-10 · tuyến · Km | Text | LOOKUP_STATIC | `TemplateType`→Label · `Route` · `KmFrom` | — | yes | yes |
| rowStatus | Trạng thái | Badge | enum | `Status` | — | yes | yes |
| rowResult | Kết quả | Badge | LOOKUP_STATIC | `ResultCode` | — | yes* | yes |
| search | Tìm mẫu nghiệm thu… | SearchField | — | `?search=` | — | yes | yes |
| filterStatus | Trạng thái | SearchInput (opt) | enum | `?status=` | — | yes | yes |
| filterRoute | Tuyến | SearchInput (opt) | road-route | `?route=` | — | yes | yes |
| filterTemplate | Mẫu | SearchInput (opt) | LOOKUP_STATIC | `?templateType=` | — | yes | yes |
| navCreate | Tạo | TextButton | — | nav create | — | n/a | yes |
| rowTap | Chi tiết | ListRow | — | nav detail + `Id` | — | n/a | yes |
| initStatuses | (map badge) | — | enum | `GET …/init-data` | — | yes | yes |
| initTemplates | (map mẫu + criteria) | — | LOOKUP_STATIC | `GET …/init-data` | — | yes | yes |
| initResultCodes | (map kết quả) | — | LOOKUP_STATIC | `GET …/init-data` | — | yes | yes |

\*web list may lag Result badge — mobile P1 **yes**.

§B path **khớp** `nghiem-thu-bff-endpoints.md` — **không** invent root `nghiem-thu`.

### Row line rules

| Line | Rule |
|------|------|
| code | `Code` (NT-yyyyMMdd-nnn) |
| sub | `"{TemplateLabel MAU-10} · {Route} Km {KmFrom}"` · thiếu Km → bỏ · media Count>0 → optional «ảnh + video» |
| status | map Status init-data |
| result | map ResultCode · null/draft → **không** hiện badge Kết quả |
| empty | 0 Items + API OK → EmptyChrome · **cấm** inject demo |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC status | `GET …/init-data` → Statuses | live | hardcode ngoài allow-list |
| LOOKUP_STATIC templateType | same → TemplateTypes | **MAU-10.md** · value giữ | «Mẫu nghiệm thu NN» · invent value |
| LOOKUP_STATIC criteria | TemplateTypes[].criteria[] | **CHI-SO.md** | hardcode 100+ dòng PL trên FE |
| LOOKUP_STATIC resultCode | ResultCodes[] | CHI-SO | invent ngoài pass/fail/deduct |
| road-route | Integration search (opt) | shared-catalog | — |
| files | `mobile-bff/api/v1/files/*` | FileService | persist URL · invent files-nt · **OUT** list |

## §D — Map / vẽ

`map: none` — list pack.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `Status` | entity | create/detail | GET list refresh | badge Status |
| `ResultCode` | entity (Schema_NghiemThuMau) | create/detail khi đánh giá | GET list | badge Kết quả |
| `Scores[]` | child / DTO | create/detail | GET/{id} | **OUT** list |
| `IsActive` | soft-delete | DELETE | list excludes | — |
| Offline / 4xx | — | network | — | toast + empty · **cấm** fake |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD Label MAU-10 · Result badge · keep list Screens · scores AC → siblings |
| Design | dual list · rowResult zone · hub copy BDTX |
| SA | Schema_NghiemThuMau · init-data expand · catch-all giữ · migration pair CLI |
| Dev iOS + Android | §B ResultCode + TemplateLabel · **cấm** demoItems · **cấm** invent path |

## Demo rows (prototype only · **không** ship fallback)

| Code | Sub (ship map) | Status | Result |
|------|----------------|--------|--------|
| NT-20260906-0001 | Vệ sinh / vá ổ gà mặt đường · QL.1 Km 12+100 | Nháp | — |
| NT-20260905-0012 | Hót sụt · ảnh + video hiện trường | Hoàn thành | Đạt |

## § Cấm

| ❌ | ✅ |
|----|-----|
| In-app `demoItems` SSOT | GET BFF |
| Label «Mẫu nghiệm thu NN» | MAU-10 Label |
| Invent path / ERP.* / files-nt | `patrol/nghiem-thu` · FileService |
| Gộp csdl-so-08 / kcht / WO | entity NT riêng |
| Edit scores trên list | sibling create/detail |
| Step 4b ở data_analy | SA Schema_NghiemThuMau |

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
