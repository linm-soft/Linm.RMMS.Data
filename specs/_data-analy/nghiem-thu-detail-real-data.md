# Real-data bind — nghiem-thu-detail (mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-detail` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol `NghiemThu` + FileService |
| changeScope | `edit_page` |
| packKind | `sheet` |
| taskId | `task_edea0c3a` |
| generatedAt | `2026-09-19T18:55:00.000Z` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| Open | Demo row `toast('NT-*')` | `GET patrol/nghiem-thu/{id}` · id từ list · **cấm** Code toast làm id |
| Mẫu | demo «Mẫu 03» | `TemplateType` `mau-01`…`10` + `TemplateLabel` MAU-10 |
| Kết quả | không có | `ResultCode` + `ResultNote` + `Scores` từ GET · catalog init-data |
| Media | không có | FileService guids ↔ `MediaIds` · resign · **cấm** URL |
| Save | không có | `PUT` `UpdateNghiemThuRequest` |
| Schema | `Schema_NghiemThuMau` live | **không** MIG ở role này |
| sameMfe | web GET/PUT **yes** | same resource · mobile prefix |
| Mobile.Bff | CTX gap note | catch-all covers `patrol/nghiem-thu*` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `NghiemThuController` GetById/Update · CTX `nghiem-thu-detail.md` · `NghiemThuDto` | 404 → toast «không tồn tại» · back list | Toast fail · **cấm** alert · **cấm** fake NT-* |
| `catalog` | `GET …/init-data` TemplateTypes.criteria · ResultCodes · Statuses | criteria rỗng → ẩn checklist · **cấm** hardcode Phụ lục | fallback CLOSED labels MAU-10 |
| `geo` | Device GPS (Edit) | Modal `DES-MOB-GPS-DENY` | Deny modal · **cấm** fake GPS |
| `files` | FileService `mobile-bff/api/v1/files/*` · peer `mobile-bff-file` | gallery empty OK | Toast upload fail · **cấm** persist URL |
| `entity` | `NghiemThuEntity` / `rmms_nghiem_thu` · `NghiemThuScoreEntity` · `NghiemThuMediaEntity` | Scores null trên list · detail trả list | soft `IsActive` |
| `derived` | auth → `AssigneeCode` · GET → `Code`/`TemplateLabel` | — | |
| `demo` | `#sc-nghiem-thu` zone ids only · **không** detail screen | GAP-MOB-NT-DETAIL-01 | **cấm** demo-json SSOT |
| `anti-source` | invent `nghiem-thu-detail` path · `files-nt` · list/create slug · ERP.* | — | **cấm** |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| title | NT-* | TopBar | — | `GET patrol/nghiem-thu/{id}` | `Code` read | yes | yes |
| templateRow | Mẫu | ListRow / Select | LOOKUP_STATIC | GET + `GET …/init-data` | `TemplateType` · display `TemplateLabel` | yes | yes |
| resultRow | Kết quả | Select | LOOKUP_STATIC | GET + init-data ResultCodes | `ResultCode` | yes | yes |
| resultNote | Ghi chú kết quả | Text | — | GET | `ResultNote` | yes | yes |
| scoreList | Tiêu chí | Checklist | LOOKUP_STATIC | GET `Scores` + criteria | `Scores[]` | yes | yes |
| routeRow | Tuyến | ListRow | — | GET | `Route` | yes | yes |
| kmRow | Km | ListRow | — | GET | `KmFrom` · `KmTo` | yes | yes |
| fieldRow | Hiện trường | ListRow + GPS | — | GET + device GPS | `FieldInfo` · `ZoneOrgCode` | yes | yes |
| statusRow | Trạng thái | Select | LOOKUP_STATIC | GET + init-data Statuses | `Status` | yes | yes |
| workTime | Thời gian việc | DateTime | — | GET | `WorkStartedAt` · `WorkEndedAt` | yes | yes |
| note | Ghi chú | Text | — | GET | `Note` | yes | yes |
| attachRow | Đính kèm | PhotoRow | files | `files/*` rồi PUT | `MediaIds` | yes | yes |
| navSave | Lưu | TextButton | — | `PUT patrol/nghiem-thu/{id}` | `UpdateNghiemThuRequest` | yes | yes |
| navClose | Đóng | BackButton | — | nav `nghiem-thu` | — | n/a | yes |
| assignee | (ẩn) | derived | — | GET / auth | `AssigneeCode` | yes | yes |
| inspectedAt | (ẩn) | DateTime | — | GET | `InspectedAt` | yes | yes |

§B path **khớp** `nghiem-thu-detail-bff-endpoints.md` — **không** invent `nghiem-thu-detail`.

### PUT body rules

| Field | Rule |
|-------|------|
| `TemplateType` | `mau-01`…`mau-10` only · Label không gửi (server `TemplateLabel`) |
| `ResultCode` | `pass`/`fail`/`deduct` · required khi `Status=done` · null OK draft |
| `Scores` | non-null replace-set · `Verdict` `pass`/`fail`/`n_a` · `CriterionCode` ∈ catalog mẫu đang chọn · null giữ cũ |
| `Status` | `draft`/`in_progress`/`done`/`cancelled` |
| `Route` · `FieldInfo` · `AssigneeCode` · `InspectedAt` | required |
| `MediaIds` | FileService guids · max 10 · replace-set · **cấm** URL |
| Success | toast «Đã lưu · {Code}» · stay View hoặc back list refresh |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC templateType | `GET patrol/nghiem-thu/init-data` → TemplateTypes | `NghiemThuCatalog` · MAU-10 | «Mẫu nghiệm thu NN» · «Mẫu 03» làm value |
| LOOKUP_STATIC resultCode | same → ResultCodes | pass/fail/deduct | invent badge text |
| LOOKUP_STATIC status | same → Statuses | draft/in_progress/done/cancelled | invent status |
| criteria | TemplateTypes[].criteria | CHI-SO · catalog C# | hardcode 100+ dòng FE |
| files | `mobile-bff/api/v1/files/*` | FileService | persist URL · invent `files-nt` |

## §D — Map / vẽ

`map: none` — sheet detail · GPS label only.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `Status` | entity | user Edit | PUT | badge |
| `ResultCode` | entity | user Kết quả | PUT | Đạt / Không đạt / Khấu trừ · null = «Chưa đánh giá» |
| `Scores` | child table | user checklist | PUT replace-set | rows theo mẫu |
| `MediaIds` | media entity | user gallery | files + PUT | count · resign |
| Form dirty | local | edits | — | Hủy discard |
| Offline / 4xx | — | network | — | toast · **cấm** fake 200 |

`progress: none` (không % / bước multi-step P1). DELETE **OUT**.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «mở = GET · Lưu = PUT · mediaIds guid · Label MAU-10 · scores» |
| Design | gen `#sc-nghiem-thu-detail` dual · control-map §B · **cấm** copy «Mẫu 03» |
| SA | giữ path · Step 4b SKIP · confirm catch-all + files |
| Dev iOS + Android | cùng §B · prefix mobile-bff · **cấm** demo toast SSOT |

## Demo rows (prototype only · **không** ship fallback)

| Field | Value |
|-------|-------|
| Row | NT-20260906-0001 · sub «Mẫu 03 · QL.1…» → ship `TemplateLabel` MAU-10 |
| Tap | toast NT-* → ship `go` detail + GET id |
| Screen | **chưa có** — Design gen |

## § Cấm

- Watermark / «bản Gói N»
- Fake GPS / fake NT-*
- Invent `nghiem-thu-detail` / `files-nt`
- Bind `mfeStdUrl`
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**
- In-app mock SSOT → **GAP-MOB-REAL-02**
- Enqueue **Lưu** / upload / scores → **GAP-MOB-ACT-07**
- Gộp list / create · `csdl-so-08` / `kcht-cong-trinh`
- `new_page` typed CRUD

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
| taskId | `task_edea0c3a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
