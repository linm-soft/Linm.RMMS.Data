# Real-data bind — nghiem-thu-create (mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-create` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol `NghiemThu` + FileService |
| changeScope | `new_page` |
| packKind | `sheet` |
| taskId | `task_eb0e541f` |
| generatedAt | `2026-09-19T16:50:00.000Z` |

Skill: `data-analy-real-data.md` · **GAP-MOB-REAL-01** · **GAP-MOB-REAL-02**

## § Delta Current vs New

| Bind | Current | New |
|------|---------|-----|
| Form source | Demo 3 static rows + toast | `GET init-data` + device GPS + `POST files/*` + `POST patrol/nghiem-thu` |
| Mẫu | hardcode «03 — Mặt đường» | `TemplateTypes` LOOKUP_STATIC |
| Media | toast only | FileService guids → `MediaIds` |
| Save | toast «Lưu nháp» | Create `Status=draft` · return `Code` |
| sameMfe | web create **yes** (live) | same resource · mobile prefix |
| Mobile.Bff | CTX gap note | catch-all covers · verify |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | `NghiemThuController` · CTX `nghiem-thu-create.md` · `CreateNghiemThuRequest` | Chặn Lưu nếu thiếu mẫu / vị trí / assignee | Toast fail · **cấm** alert · **cấm** fake NT-* |
| `catalog` | `GET …/init-data` TemplateTypes · Statuses | — | fallback CLOSED `mau-01`…`10` labels |
| `geo` | Device GPS | Modal `DES-MOB-GPS-DENY` · chặn save nếu chưa chốt P1 | Deny modal |
| `files` | FileService `mobile-bff/api/v1/files/*` · peer `mobile-bff-file` | attach empty OK | Toast upload fail · **cấm** persist URL |
| `entity` | `NghiemThuEntity` / `rmms_nghiem_thu` · `NghiemThuMediaEntity` · Schema_NghiemThu | — | soft `IsActive` |
| `derived` | auth → `AssigneeCode` · device → `InspectedAt` | — | GAP-MOB-NTC-REQ-01 surface |
| `demo` | `#sc-nghiem-thu-create` zone ids only | — | **cấm** demo-json SSOT |
| `anti-source` | invent `nghiem-thu-create` path · `nghiem-thu-files` · list/detail slug | — | **cấm** |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| templateRow | Mẫu | ListRow → Select | LOOKUP_STATIC | `GET patrol/nghiem-thu/init-data` | `TemplateType` | yes | yes |
| locationRow | Vị trí | ListRow + GPS | — | device GPS (+ opt route catalog) | `ZoneOrgCode` · `Route` · `FieldInfo` · `KmFrom?` | yes | yes |
| attachRow | Đính kèm | ListRow / PhotoRow | files | `POST/PUT files/*` rồi Create | `MediaIds` | yes | yes |
| navSave | Lưu | TextButton | — | `POST patrol/nghiem-thu` | `CreateNghiemThuRequest` (`Status=draft`) | yes | yes |
| navCancel | Hủy | BackButton | — | nav `nghiem-thu` | — | n/a | yes |
| assignee | (ẩn) | derived | — | auth profile | `AssigneeCode` | yes | yes |
| inspectedAt | (ẩn) | DateTime | — | device now | `InspectedAt` | yes | yes |
| status | (ẩn) | enum | init-data | local default | `Status=draft` | yes | yes |
| initTemplates | (map mẫu) | — | LOOKUP_STATIC | `GET …/init-data` | — | yes | yes |

§B path **khớp** `nghiem-thu-create-bff-endpoints.md` — **không** invent `nghiem-thu-create`.

### Create body rules

| Field | Rule |
|-------|------|
| `TemplateType` | `mau-01`…`mau-10` only · validate catalog |
| `Status` | Lưu nháp P1 = `draft` |
| `Route` · `FieldInfo` | from location/GPS · required |
| `AssigneeCode` | current user code · required |
| `InspectedAt` | UTC now on submit |
| `MediaIds` | FileService guids · max 10 · replace-set · **cấm** URL |
| Success | toast + optional `go('nghiem-thu-detail')` + `Id` **hoặc** back list refresh |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC templateType | `GET patrol/nghiem-thu/init-data` → TemplateTypes | service `mau-01`…`10` | hardcode ngoài allow-list · invent «Mặt đường» API value |
| LOOKUP_STATIC status | same → Statuses | draft/in_progress/done/cancelled | invent status |
| road-route (opt) | Integration search | shared-catalog | free-text nếu đã có master |
| files | `mobile-bff/api/v1/files/*` | FileService | persist URL · invent `nghiem-thu-files` |

## §D — Map / vẽ

`map: none` — sheet create · GPS label only.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| `Status` | entity | user Lưu → `draft` | POST create | toast · optional detail |
| `MediaIds` | media entity | user attach | files + Create | row «Ảnh + video» count |
| Form dirty | local | edits | — | Hủy confirm P2 optional |
| Offline / 4xx | — | network | — | toast · **cấm** fake 200 |

`progress: none` ngoài status draft create (không % / bước multi-step P1).

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «Lưu = POST thật · mediaIds guid» · GAP REQ/COPY |
| Design | control-map §B · dual parity · surface hidden required |
| SA | giữ path đã cite · **không** MIG · confirm catch-all + files |
| Dev iOS + Android | cùng §B · prefix mobile-bff · **cấm** demoItems |

## Demo rows (prototype only · **không** ship fallback)

| Field | Value |
|-------|-------|
| Mẫu | 03 — Mặt đường (display) → ship `mau-03` + init Label |
| Vị trí | Khu I · GPS hiện trường |
| Đính kèm | Ảnh + video |
| Toast save | Lưu nháp (demo) → ship «Đã lưu nháp · NT-*» |

## § Cấm

- Watermark / «bản Gói N»  
- Fake GPS / fake NT-*  
- Invent `nghiem-thu-create` / `nghiem-thu-files`  
- Bind `mfeStdUrl`  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- In-app mock SSOT → **GAP-MOB-REAL-02**  
- Enqueue **Lưu** / upload → **GAP-MOB-ACT-07**  
- Gộp list / detail slug  

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
| taskId | `task_eb0e541f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
