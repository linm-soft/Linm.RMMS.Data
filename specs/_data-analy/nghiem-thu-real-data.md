# Real-data bind — nghiem-thu (mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol `NghiemThu` |
| changeScope | `edit_page` |
| taskId | `task_1bd5874a` |
| generatedAt | `2026-09-19T15:29:13.000Z` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| List source | Demo 2 rows + toast | `GET patrol/nghiem-thu` Items · **cấm** in-app `demoItems` SSOT |
| Badge | demo «Nháp» / «Xong» | map `draft`/`done` → Nháp / Hoàn thành (init-data) |
| Row tap | toast code | nav detail + `Id` |
| sameMfe | web Field list **yes** (live) | same resource · mobile prefix |
| Mobile.Bff | CTX «chưa proxy» | catch-all covers path · verify |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `NghiemThuController` · `docs/context/features/nghiem-thu.md` | EmptyChrome · giữ shell + Tạo | Toast fail · **cấm** alert · **cấm** fake NT-* |
| `catalog` | `GET …/init-data` Statuses + TemplateTypes | — | fallback CLOSED labels |
| `files` | FileService `mobile-bff/api/v1/files/*` | — | **OUT** list (create/detail) |
| `entity` | `NghiemThuEntity` / `rmms_nghiem_thu` · Schema_NghiemThu | — | soft `IsActive` |
| `demo` | `#sc-nghiem-thu` zone ids only | — | **cấm** demo-json SSOT |
| `anti-source` | maintenance WO · `rmms_patrol_sessions` | — | **cấm** gộp |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| items | Danh sách NT | ListRow list | — | `GET patrol/nghiem-thu` | — | yes | yes |
| rowCode | Mã NT-* | Text | — | `Code` | — | yes | yes |
| rowSub | Mẫu · tuyến · Km | Text | — | `TemplateType` · `Route` · `KmFrom` | — | yes | yes |
| rowStatus | Trạng thái | Badge | enum init-data | `Status` | — | yes | yes |
| search | Tìm mẫu nghiệm thu… | SearchField | — | `?search=` | — | yes | yes |
| filterStatus | Trạng thái | SearchInput (opt P1) | enum | `?status=` | — | yes | yes |
| filterRoute | Tuyến | SearchInput (opt) | road-route | `?route=` | — | yes | yes |
| filterTemplate | Mẫu | SearchInput (opt) | LOOKUP_STATIC | `?templateType=` | — | yes | yes |
| navCreate | Tạo | TextButton | — | nav create | — | n/a | yes |
| rowTap | Chi tiết | ListRow | — | nav detail + `Id` | — | n/a | yes |
| initStatuses | (map badge) | — | enum | `GET …/init-data` | — | yes | yes |
| initTemplates | (map mẫu) | — | LOOKUP_STATIC | `GET …/init-data` | — | yes | yes |

§B path **khớp** `nghiem-thu-bff-endpoints.md` — **không** invent `nghiem-thu` root path.

### Row line rules

| Line | Rule |
|------|------|
| code | `Code` (NT-yyyyMMdd-nnn) |
| sub | `"{TemplateLabel} · {Route} Km {KmFrom}"` · thiếu Km → bỏ · có media → optional «ảnh + video» |
| status | map init-data Label · demo «Xong» → ship **Hoàn thành** |
| empty | 0 Items + API OK → EmptyChrome · **cấm** inject demo rows |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC status | `GET patrol/nghiem-thu/init-data` → Statuses | service labels live | hardcode ngoài allow-list |
| LOOKUP_STATIC templateType | same → TemplateTypes | `mau-01`…`10` | invent names ngoài interim |
| road-route | Integration search (filter opt) | shared-catalog | free-text route filter |
| files | `mobile-bff/api/v1/files/*` | FileService | persist URL · **OUT** list |

## §D — Map / vẽ

`map: none` — list pack.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `Status` | entity | create/detail/web | GET list refresh | badge |
| `IsActive` | soft-delete | DELETE | list excludes inactive | — |
| List items | GET | pull / open / after create | GET | rows |
| Offline / 4xx | — | network | — | toast + empty · **cấm** fake |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · § Delta mobile · keep web AC |
| Design | dual `#sc-nghiem-thu` · control-map §B · row→detail |
| SA | giữ path · confirm catch-all proxy · **không** MIG |
| Dev iOS + Android | cùng §B · prefix mobile-bff · **cấm** demoItems |

## Demo rows (prototype only · **không** ship fallback)

| Code | Sub | Status |
|------|-----|--------|
| NT-20260906-0001 | Mẫu 03 · QL.1 Km 12+100 · Khu I | Nháp |
| NT-20260905-0012 | Mẫu 07 · ảnh + video hiện trường | Hoàn thành |

## § Cấm

| ❌ | ✅ |
|----|-----|
| In-app `demoItems` làm SSOT | GET BFF · seed DB nếu cần |
| Invent path / ERP.* | `patrol/nghiem-thu` |
| Gộp WO / sessions | entity NT riêng |
| Persist FileService URL | guid only (create) |
| Skip §B ≠ BFF | **GAP-MOB-REAL-01** |

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

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
