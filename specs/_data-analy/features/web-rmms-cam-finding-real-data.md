# Data-analy — real-data bind — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_726d9b3a` |
| prefix API | `api/v1` · resource `patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (alias) |
| mfeStdRoute | product `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| productRoute | `/phat-hien/:sessionId` · `/phat-hien/:sessionId/moi` · `/phat-hien/:sessionId/:findingId` · `/phat-hien/:sessionId/:findingId/sua` |
| domain | **Patrol** (+ Maintenance cite · FileService · Auth · peer mobile-c) |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-10-01T02:10:00.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| Edit FIND-L/F/D role-gate tuần kiểm + due TT41 + SLA badge | `new_page` · route mới · invent CamFinding* |
| Tuần kiểm POST + capture + recheck | tuần đường/NT/QL_HAT lập phiếu |
| Nhãn Trong hạn / Quá hạn | Giao việc trên FIND-D · suy QL_HAT từ MANAGER-RMMS |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · SlaHours=24 · Mục IV tiền |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| FIND-F write | mọi user mở form | chỉ tuần kiểm · BE/FE role enforce |
| dueAt | date tay bdtx | gợi ý theo hangMuc TT41 · editable |
| FIND-D assign | `Giao đơn vị BDTX` + assign-work-order | **remove UI** · peer giao |
| FIND-D SLA | không badge | derive Trong hạn/Quá hạn vs dueAt |
| recheck | caps.tuanKiem | giữ · Pattern B GPS |
| APIs | findings CRUD/recheck/feedback/assign | **không đổi** core paths · UI không gọi assign |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-finding.md` | **MISSING** | UNCLEAR-CTX · dùng PLAN |
| `plan-3-vai` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | role + SLA HARD |
| `peer-domain` | DOMAIN-MAP `web-rmms-mobile-c` | — | Live findings |
| `code` | `FindingFormPage.tsx` · `FindingDetailPage.tsx` · `FindingListPage.tsx` | — | missing due catalog / SLA / still has assign |
| `api-list` | `GET patrol/findings?sessionId=` | empty «Chưa có phiếu» | toast |
| `api-post` | `POST patrol/findings` | — | toast · role deny |
| `api-put` | `PUT patrol/findings/{id}` | — | toast |
| `api-get` | `GET patrol/findings/{id}` | — | toast / notFound |
| `api-recheck` | `POST …/{id}/recheck` | — | toast · role tuần kiểm |
| `api-feedback` | `POST …/{id}/feedback` | — | toast |
| `api-assign` | `POST …/{id}/assign-work-order` | — | **UI out** · peer only |
| `api-session` | `GET patrol/sessions/{id}` | — | toast |
| `files` | FileService via RouteCapture | — | upload error toast |
| `auth-role` | cite role-gate profile caps | missing caps → deny write/recheck | — |
| `domain-map` | Patrol · peer mobile-c | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on Lưu/recheck | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| source | Nguồn | Select | FINDING_SOURCE | dto | `source` | mobile-c | keep |
| journalLineId | Journal line | TextInput | — | dto | `journalLineId` | mobile-c | required nếu tuan-duong |
| findingKind | Loại phiếu | Select | FINDING_KIND | dto | `findingKind` | mobile-c | keep |
| kmFrom / kmTo | Km từ/đến | TextInput | — | dto | required | mobile-c | keep |
| side | Vị trí | Select | FINDING_SIDE | dto | `side` | mobile-c | keep |
| hangMuc | Hạng mục | Select | FINDING_HANGMUC | dto | `hangMuc` | mobile-c | **trigger due suggest** |
| description | Mô tả | TextArea | — | dto | required | mobile-c | keep |
| scope | Phạm vi | Radio | FINDING_SCOPE | dto | `scope` | mobile-c | bdtx→due |
| dueAt | Hạn | Date | TT41 table | dto | `dueAt` | mobile-c | **suggest+edit** · cấm SlaHours=24 |
| lat/lng/accuracyM | Định vị | GPS | geo | device/dto | required on create | mobile-c | Pattern B |
| mediaIds | Ảnh hiện trường | RouteCapture | files | files | `mediaIds` | mobile-c | tuần kiểm write |
| createSubmit | Lưu | Button | — | — | POST/PUT | mobile-c | role tuần kiểm |
| listCards | list | List RO | — | GET list | — | mobile-c | session scoped |
| fabCreate | FAB | Button | — | — | nav moi | mobile-c | **hide** non-tuan-kiem |
| status | Trạng thái | Badge | FINDING_STATUS | dto | RO | mobile-c | keep |
| slaBadge | Trong hạn/Quá hạn | Badge | derive | dueAt+now/recheckAt | UI | mobile-c | **new edit** |
| recheckResult | Kết luận | Radio | FINDING_RECHECK | — | `result` | mobile-c | dat / chua-dat |
| recheckNote | Ghi chú | TextArea | — | — | `note` | mobile-c | optional |
| recheckMedia | Ảnh kiểm tra | RouteCapture | files | — | `mediaIds` | mobile-c | recheck |
| confirmPass/Fail | Xác nhận đạt / Ghi chưa đạt | Button | — | — | POST recheck | mobile-c | tuần kiểm only |
| feedbackQty/quality/note/media | Phản hồi BDTX | Form | FEEDBACK_* | — | POST feedback | mobile-c | giữ da-giao |
| assignCta | Giao đơn vị BDTX | — | — | — | — | — | **REMOVE** |
| roleCaps | quyền vai | Hidden | auth | profile | gate UI | role-gate | **new edit** |

**POST create (Live keep):** source · findingKind · kmFrom/To · side · hangMuc · description · scope · dueAt(bdtx) · lat/lng/accuracyM · mediaIds · sessionId · journalLineId optional.  
**Cấm** ERP.* · fake GPS · invent cam-finding DTO · `SlaHours=24` · Mục IV money fields · UI gọi assign trên slug.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| FINDING_* LOOKUP_STATIC | FE | mobile-c | hardcode VN nếu key có |
| findings | Live patrol | Patrol | invent stub |
| sessions | Live patrol | Patrol | seed fake session |
| TT41 due table | client/BE suggest | PLAN Phụ lục IV | SlaHours=24 only |
| roleCaps / packageCode | auth profile · job-titles | role-gate · `tuanKiem` · `QL_HAT` | suy QL_HAT từ MANAGER-RMMS |
| work-orders | Maintenance peer | giao-viec-ql-hat | invent assign UI trên slug |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | N/A trên FIND-* · GPS point only |
| GPS | Pattern B trên form + recheck |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| finding.status | Live | create · assign peer · feedback · recheck | GET/POST/PUT | badge FIND-L/D |
| dueAt | Live | create/edit · gợi ý hangMuc | POST/PUT | FIND-F · FIND-D RO |
| slaBadge | derive | recheck / clock | client (± BE) | Trong hạn / Quá hạn |
| recheckResult | Live | tuần kiểm | POST recheck | FIND-D |
| mediaIds | Live | tuần kiểm capture | POST + files | gallery / capture |
| assign CTA | UI | — | — | **removed** |
| validationAttempted | UI | first Lưu/recheck | — | banner |
| roleCaps | profile | login | cite role-gate | hide/show FAB/write/recheck |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | role matrix · edit_page · PLAN-3-VAI #5 · no giao · SLA · due TT41 |
| Design | keep zones · due suggest · SLA badge · 430 · no assign CTA |
| SA | Live findings · Mobile.Bff · DOMAIN-MAP slug · sla derive |
| Dev | Finding* · caps · remove assign · due catalog · SLA badge · no new route |
| QA | TK lập+recheck · Trong/Quá hạn · ẩn giao · non-TK deny · Pattern B |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-FIND-CTX | CTX feature file missing — PO create hoặc accept PLAN+code |
| GAP-DA-FIND-ROLE | Form/list thiếu gate tuần kiểm write — **edit** PLAN #5 |
| GAP-DA-FIND-ASSIGN-CTA | FIND-D còn **Giao đơn vị BDTX** — **remove** (peer giao) |
| GAP-DA-FIND-DUE-SUGGEST | Chưa catalog hạn TT41 theo hangMuc — add suggest editable |
| GAP-DA-FIND-SLA-BADGE | Thiếu nhãn Trong hạn / Quá hạn — add derive |
| GAP-DA-FIND-DOMAIN-ROW | DOMAIN-MAP thiếu slug `web-rmms-cam-finding` — SA add/bind mobile-c |
| GAP-DA-FIND-STD-ALIAS | mfeStdUrl alias ≠ product `/phat-hien*` — **cấm** invent product route |
| GAP-DA-FIND-DEPS-ROLE-GATE | Cần caps từ `web-rmms-role-gate` |
| GAP-DA-FIND-OUT | SLA 24h default · Mục IV · native · web-bff · ERP.* · Giao việc trên FIND-* |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-10-01T02:10:00.000Z` · `changeScope=edit_page`
