# Data-analy — real-data bind — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| title | Camera phiếu nghiệm thu |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_85003423` |
| prefix API | `api/v1` · resource `patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (alias) |
| mfeStdRoute | product `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| productRoute | `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` |
| domain | **Patrol** (+ FileService · Auth · Integration cite · peer web-rmms-nghiem-thu) |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-10-01T02:20:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| Edit NT-L/F role-gate nghiệm thu + camera write | `new_page` · route mới · invent CamNghiemThu* |
| Nghiệm thu POST/PUT + RouteCapture | tuần đường / tuần kiểm / QL_HAT lập phiếu |
| RO link ca + finding đã đạt | Giao việc · Xác nhận đạt · Hoàn thành sự cố trên NT |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · SlaHours=24 · Mục IV tiền · chấm kỳ |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| NT-F write | mọi user mở form | chỉ nghiệm thu · BE/FE role enforce |
| NT-L create | mọi user thấy Tạo | **hide** non-nghiệm-thu |
| RouteCapture | đã có form | giữ · chỉ nghiệm thu write |
| RO đối chiếu | thiếu | link RO sessions / findings đã đạt |
| Giao / hoàn thành SC | không có | **giữ cấm** · không thêm |
| APIs | nghiem-thu CRUD + init | **không đổi** core paths · role gate |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-nghiem-thu.md` | **MISSING** | UNCLEAR-CTX · dùng PLAN |
| `plan-3-vai` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | role NT HARD · #6 #7 |
| `peer-domain` | DOMAIN-MAP `web-rmms-nghiem-thu` / `nghiem-thu` | — | Live NT |
| `peer-analy` | `web-rmms-nghiem-thu-*-hint/real-data` | — | Pattern B · fields |
| `code` | `NghiemThuFormPage.tsx` · `NghiemThuListPage.tsx` | — | thiếu role-gate |
| `api-list` | `GET patrol/nghiem-thu` | empty «Chưa có phiếu» | toast |
| `api-init` | `GET patrol/nghiem-thu/init-data` | — | toast |
| `api-get` | `GET patrol/nghiem-thu/{id}` | — | toast / notFound |
| `api-post` | `POST patrol/nghiem-thu` | — | toast · role deny |
| `api-put` | `PUT patrol/nghiem-thu/{id}` | — | toast · role deny |
| `api-routes` | `GET integration/road-routes/search` | miss → `--` | toast |
| `api-users` | `GET integration/users` | miss → `--` | toast |
| `api-findings-ro` | `GET patrol/findings` (filter đạt) | empty link zone | toast · **RO only** |
| `api-sessions-ro` | `GET patrol/sessions` | empty | toast · **RO only** |
| `files` | FileService via RouteCapture | — | upload error toast |
| `auth-role` | cite role-gate profile caps | missing caps → deny write | — |
| `domain-map` | Patrol · peer nghiem-thu | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on Lưu | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| templateType | Mẫu | Select | NT_TEMPLATE / init | dto/init | `templateType` | nghiem-thu | keep · MAU-10 |
| route | Tuyến | SearchInput | ROAD_ROUTE | dto | `route` | nghiem-thu | keep |
| fieldInfo | Hiện trường | Text | — | dto | required | nghiem-thu | keep |
| zoneOrgCode | Đơn vị vùng | Text RO | geo | dto | optional | nghiem-thu | GPS fill |
| kmFrom / kmTo | Km | Number | — | dto | optional | nghiem-thu | keep |
| resultCode | Kết quả | Select | NT_RESULT | dto | pass/fail/deduct | nghiem-thu | keep |
| resultNote | Ghi chú KQ | Text | — | dto | optional | nghiem-thu | keep |
| scores | Hạng mục | Checklist | criteria init | dto | Scores[] | nghiem-thu | pass/fail/na |
| assigneeCode | Người NT | SearchInput | USER | dto | required | nghiem-thu | keep |
| inspectedAt | Thời điểm | DateTime | — | dto | required | nghiem-thu | keep |
| note | Ghi chú | TextArea | — | dto | optional | nghiem-thu | keep |
| status | Trạng thái | Badge/Select | NT_STATUS | dto | draft… | nghiem-thu | keep |
| mediaIds | Ảnh hiện trường | RouteCapture | files | files | `mediaIds` | nghiem-thu | **NT write only** |
| gps | Định vị | GPS | geo | device | FieldInfo/zone | nghiem-thu | Pattern B |
| createSubmit | Lưu | Button | — | — | POST/PUT | nghiem-thu | role nghiệm thu |
| listCards | list | List | — | GET list | — | nghiem-thu | keep |
| btnCreate | Tạo | Button | — | — | nav moi | nghiem-thu | **hide** non-NT |
| linkPatrolRo | Ca tuần đường | Nav RO | sessions | GET RO | — | — | **new edit** · no write |
| linkFindingRo | Phiếu đã đạt | Nav RO | findings | GET RO | — | — | **new edit** · no recheck |
| assignCta | Giao việc | — | — | — | — | — | **cấm** |
| confirmSc | Xác nhận SC | — | — | — | — | — | **cấm** |
| moneyDeduct | Tiền Mục IV | — | — | — | — | — | **cấm** |
| roleCaps | quyền vai | Hidden | auth | profile | gate UI | role-gate | **new edit** |

**POST/PUT create (Live keep):** templateType · route · fieldInfo · zoneOrgCode · kmFrom/To · resultCode · resultNote · scores · assigneeCode · inspectedAt · note · status · mediaIds.  
**Cấm** ERP.* · fake GPS · invent cam-nghiem-thu DTO · `SlaHours=24` · Mục IV money · UI giao việc / recheck finding / hoàn thành sự cố trên slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| NT_TEMPLATE / criteria | init-data | MAU-10 · peer nghiem-thu | hardcode «Mẫu NN» |
| NT_RESULT / STATUS | init + LOOKUP_STATIC | nghiemThu.* | hardcode VN nếu key có |
| road-routes | Live integration | Master cite | invent stub routes |
| users | Live integration | Auth cite | invent users |
| findings / sessions RO | Live patrol | mobile-c / tuần đường | write/recheck từ NT |
| roleCaps / packageCode | auth profile · job-titles | role-gate · `nghiemThu` · `QL_HAT` | suy QL_HAT từ MANAGER-RMMS |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | N/A trên NT-F · GPS → FieldInfo/zone only |
| GPS | Pattern B trên form |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| nghiemThu.status | Live | create/update NT | POST/PUT | badge NT-L/F |
| resultCode | Live | NT | POST/PUT | pass/fail/deduct |
| scores | Live | NT | replace-all write | checklist |
| mediaIds | Live | NT capture | POST + files | gallery / capture |
| roleCaps | profile | login | cite role-gate | hide/show create/write |
| validationAttempted | UI | first Lưu | — | banner |
| RO links | cite | — | GET RO | NT-RO-LINK |
| assign / confirm SC | — | — | — | **absent** |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | role matrix · edit_page · PLAN-3-VAI #6 · no giao · no xác nhận SC · camera |
| Design | keep zones · capture · RO links · 430 · hide create non-NT |
| SA | Live nghiem-thu · Mobile.Bff · DOMAIN-MAP slug · role BE |
| Dev | NghiemThu* · caps · hide create · RO links · no new route |
| QA | NT lập+ảnh · non-NT deny · Pattern B · no giao/hoàn thành |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-NT-CTX | CTX feature file missing — PO create hoặc accept PLAN+code |
| GAP-DA-NT-ROLE | Form/list thiếu gate nghiệm thu write — **edit** PLAN #6 |
| GAP-DA-NT-DOMAIN | DOMAIN-MAP thiếu slug cam-nghiem-thu — SA bind peer |
| GAP-DA-NT-RO | Chưa có zone link RO ca / finding đạt — Design/Dev |
| GAP-DA-NT-HOME | Home/hub visibility = peer `web-rmms-cam-home` · không scope slug này |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T02:20:00.000Z` · `changeScope=edit_page`
