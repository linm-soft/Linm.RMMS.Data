# Data-analy — real-data bind — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_372668d4` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| domain | **Patrol** (+ Auth · Files · parent session Live) |
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T07:44:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope đợt B

| In | Out |
|----|-----|
| TD-04 sổ · TD-05 tạo/sửa dòng | TD-06 · TK-02…07 · findings |
| API **Mới** journal-lines (entity + Schema trước form) | stub fake list / seed demo rows |
| Parent Live `GET sessions/{id}` · profile · files | `POST maintenance/work-orders` · scope bdtx write (D) |
| GPS HARD trên TD-05 | Check-in rows trong list TD-04 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-b.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` TD-04/05 | — | SSOT màn B |
| `gap` | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` §2 | — | journal ≠ check-in |
| `peer-a` | `web-rmms-mobile-a` CTX + real-data | — | nav từ TD-01 |
| `api-parent` | `PatrolSessionsController` · `GET …/sessions/{id}` | no active ca → empty hub A | toast · **cấm** `window.alert` |
| `api-new` | **Mới** journal-lines controller (chưa có) | empty list TD-04 | 404 until schema · **cấm** mock SSOT |
| `entity-new` | `PatrolJournalLine` · `Schema_PatrolJournalLine` · đề xuất `rmms_patrol_journal_lines` | — | pair **trước** form |
| `entity-parent` | `PatrolSessionEntity` · `rmms_patrol_sessions` | — | tenant / soft-delete |
| `dto-new` | đề xuất body IMPLEMENT TD-05 | — | validate GPS + narrative |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol | — | **cấm ERP.*** |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `object` · `commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → block save | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt B

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| session.parent | ca đang mở | detail RO | — | `GET …/patrol/sessions/{id}` · hoặc list `status=Đang tuần` + filter `Tuần đường` | `sessionId` FK | peer A | n/a |
| journal.list | sổ dòng | List cards | — | `GET …/patrol/sessions/{id}/journal-lines` **Mới** | — | n/a | n/a (new) |
| journal.byId | chi tiết dòng | form | — | `GET …/patrol/journal-lines/{id}` (SA confirm) hoặc từ list | — | n/a | n/a |
| at | giờ | DateTime | — | detail | `at` | n/a | n/a |
| userName | người | Text RO | — | `GET auth/profile` | display only · audit BE | peer A | n/a |
| lat | GPS lat | GPS | geo | device | `lat` | peer CI | n/a |
| lng | GPS lng | GPS | geo | device | `lng` | peer CI | n/a |
| accuracyM | GPS accuracy | GPS | geo | device | `accuracyM` | peer CI | n/a |
| kmText | lý trình | Text | — | detail | `kmText` | gap LRS | n/a |
| direction | chiều | Dropdown | LOOKUP_STATIC | default ca Note `chieu=` | `direction` | peer A Note | n/a |
| weather | thời tiết | Dropdown | LOOKUP_STATIC | — | `weather` | gap | n/a |
| kind | loại việc | Radio/Dropdown | LOOKUP_STATIC | — | `kind` | gap | n/a |
| narrative | diễn biến | TextArea | — | — | `narrative` **required** | gap | n/a |
| mediaIds | ảnh hiện trường | FileMulti | files | detail | `mediaIds[]` guid | peer A | n/a |
| onSiteAction | xử lý tại chỗ | Toggle | — | — | `onSiteAction` | gap | n/a |
| onSiteResult | kết quả tại chỗ | Text | — | — | `onSiteResult` | gap | n/a |
| reportedTo | đã báo cáo | Button+enum | LOOKUP_STATIC | — | `reportedTo` (`tuan-kiem`) | gap | n/a |
| reportedAt | lúc báo cáo | DateTime | — | — | `reportedAt` | gap | n/a |
| violationFlag | đề nghị biên bản | Button/flag | — | — | `violationFlag` / `de-nghi-bien-ban` nếu `kind=hanh-lang` | gap | n/a |
| status | trạng thái dòng | Dropdown | LOOKUP_STATIC | — | `status` | gap | n/a |
| scope | phạm vi BDTX | — | — | — | **OUT B** (đợt D) | — | — |
| workOrderId | phiếu BDTX | — | — | — | **OUT B** · `POST maintenance/work-orders` đợt D | — | — |

**Create/Update journal body (đề xuất — SA chốt DTO):** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

**Cấm** gộp check-in DTO · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock journal list khi schema chưa có (empty + gap).

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` keys (weather · kind · status · direction · reportedTo) | CTX + IMPLEMENT | hardcode label VN trên form |
| files | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | FileService BFF | persist full URL |
| profile | `GET auth/profile` | Auth domain | invent user API trong Patrol |
| road-route | (peer A mở ca) | Integration | không bắt buộc trên TD-04/05 nếu ca đã có Route |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt B (list/form) |
| GPS | point capture only trên TD-05 · không draw layer |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| journal.status | `rmms_patrol_journal_lines` (Mới) | user TD-05 | POST/PUT journal-lines | chip TD-04 / dropdown TD-05 |
| phat-hien → … → xong | entity | user | PUT status | card chip |
| reportedTo | entity | nút «Báo tuần kiểm» | PUT | badge · **không** tạo TK-03 |
| session.Status | parent Live | (đợt A/D) | sessions | chỉ đọc trên B |

`progress: journal line lifecycle B` (`phat-hien` · `dang-xu-ly` · `cho-kiem-tra` · `xong`). WO / kiến nghị = đợt D.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «sổ = data thật journal-lines» · GPS deny · schema-before-form |
| Design | control-map khớp §B · phone 430 · zone TD-04/05 |
| SA | Schema_PatrolJournalLine + routes · chốt POST path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `mobile-bff` · **không** desktop Asset |
| QA | empty · GPS deny · no check-in in list · no fake coords |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-B-CTX-01 | CTX `web-rmms-mobile-b.md` thiếu lúc start → tạo từ IMPLEMENT + GAP §2 |
| GAP-DA-MOB-B-SCHEMA-01 | Chưa có entity/Schema_PatrolJournalLine Live — **HARD** pair trước form |
| GAP-DA-MOB-B-PATH-01 | POST path nested vs top-level — SA chốt |
| GAP-DA-MOB-B-LRS-01 | `kmText` tay · `GAP-TD-LRS-01` |
| GAP-DA-MOB-B-WEATHER-01 | `GAP-TD-WEATHER-01` · giữ 6 keys IMPLEMENT |
| GAP-DA-MOB-B-OUT-D | scope/workOrder · TD-06 = đợt D · **cấm** stub WO trong B |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T07:44:00.000Z`
