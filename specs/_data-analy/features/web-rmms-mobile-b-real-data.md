# Data-analy — real-data bind — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
| packKind | `list` |
| changeScope | `edit_page` |
| editTask | `1` |
| status | `done` |
| taskId | `task_c25cf1eb` |
| prefix API | `api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| prefix BFF web (cite only) | `web-bff/api/v1/patrol` · **cấm** FE gọi trực tiếp |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| domain | **Patrol** (+ Auth · Files · Integration peer) |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-09-27T06:55:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta Current vs New (edit_page)

| Area | Current | New |
|------|---------|-----|
| Journal save gate | FE `canSave` requires GPS ok + narrative → `disabled={!canSave}` | Pattern B: enable · validate on click · banner + inline · disable only `saving`/`hydrating` |
| Fail client UX | `alert.warning` GPS/narrative | banner `string[]` + inline + scroll · API error = toast |
| Media capture | LinImageUpload no capture | `capture="environment"` |
| Transport | mixed / web-bff risk | **only** Mobile.Bff via `mobileApiBase()` |
| Mobile.Bff users | peer may miss forward | Forward `GET api/v1/integration/users` if missing · road-routes/search **KEEP** |
| Road-route / user picker on B | N/A (parent session · profile RO) | **KEEP** N/A on TD-04/05 |
| Toolbar/export | n/a phone | **no Excel** (SUBMIT override) |
| Screens/routes | TD-04 · TD-05 | **KEEP** · no new tab/route · align 430px |
| Schema/API journal | Live | **KEEP** · **cấm** invent |

## § Scope đợt B

| In | Out |
|----|-----|
| TD-04 sổ · TD-05 tạo/sửa dòng | TD-06 · TK-02…07 · findings |
| Live journal-lines + Pattern B validate + capture | stub fake list / seed demo rows |
| Parent Live `GET sessions/{id}` · profile · files · mobileApiBase | `POST maintenance/work-orders` · scope bdtx write (D) |
| GPS HARD validate **on submit** | Check-in rows trong list TD-04 · pre-disable Lưu |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-b.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` TD-04/05 | — | SSOT màn B |
| `delta` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | — | Pattern B · capture · Mobile.Bff |
| `gap` | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` §2 | — | journal ≠ check-in |
| `peer-a` | `web-rmms-mobile-a` CTX + real-data delta | — | Pattern B peer · users forward |
| `api-parent` | `PatrolSessionsController` · `GET …/sessions/{id}` | no active ca → empty hub A | toast · **cấm** `window.alert` |
| `api-journal` | Live journal-lines controller | empty list TD-04 | toast |
| `entity` | `PatrolJournalLine` · `Schema_PatrolJournalLine` · `rmms_patrol_journal_lines` | — | tenant / soft-delete |
| `entity-parent` | `PatrolSessionEntity` · `rmms_patrol_sessions` | — | tenant / soft-delete |
| `dto` | journal line DTO Live | — | validate GPS + narrative **on submit** |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol | — | **cấm ERP.*** |
| `bff-mobile` | Mobile.Bff · `mobile-bff/api/v1/...` · road-routes **có** · users **forward nếu thiếu** | proxy 503 | retry |
| `bff-web` | web-bff patrol cite only | — | **cấm** FE call |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `object` · `commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → banner **on submit** | **cấm** fake lat/lng · **cấm** disable Lưu |
| `mfe` | `src/pages/WebRmmsMobileB/JournalFormPage.tsx` · list page | — | delta targets |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt B + delta

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| session.parent | ca đang mở | detail RO | — | `GET …/patrol/sessions/{id}` via **mobileApiBase** | `sessionId` FK | peer A | yes |
| journal.list | sổ dòng | List cards | — | `GET …/patrol/sessions/{id}/journal-lines` | — | yes | yes |
| journal.byId | chi tiết dòng | form | — | `GET …/patrol/journal-lines/{id}` | — | yes | yes |
| at | giờ | DateTime | — | detail | `at` | yes | yes |
| userName | người | Text RO | profile (+ users resolve peer) | `GET auth/profile` | display · audit BE | peer A | yes |
| lat | GPS lat | GPS | geo | device | `lat` | peer CI | yes |
| lng | GPS lng | GPS | geo | device | `lng` | peer CI | yes |
| accuracyM | GPS accuracy | GPS | geo | device | `accuracyM` | peer CI | yes |
| kmText | lý trình | Text | — | detail | `kmText` | gap LRS | yes |
| direction | chiều | Dropdown | LOOKUP_STATIC | default ca Note `chieu=` | `direction` | peer A Note | yes |
| weather | thời tiết | Dropdown | LOOKUP_STATIC | — | `weather` | yes | yes |
| kind | loại việc | Radio/Dropdown | LOOKUP_STATIC | — | `kind` | yes | yes |
| narrative | diễn biến | TextArea | — | — | `narrative` **required** · validate on submit | yes | yes |
| mediaIds | ảnh hiện trường | FileMulti + capture | files | detail | `mediaIds[]` guid · capture env | yes | yes |
| onSiteAction | xử lý tại chỗ | Toggle | — | — | `onSiteAction` | yes | yes |
| onSiteResult | kết quả tại chỗ | Text | — | — | `onSiteResult` | yes | yes |
| reportedTo | đã báo cáo | Button+enum | LOOKUP_STATIC | — | `reportedTo` (`tuan-kiem`) | yes | yes |
| reportedAt | lúc báo cáo | DateTime | — | — | `reportedAt` | yes | yes |
| violationFlag | đề nghị biên bản | Button/flag | — | — | `violationFlag` nếu `kind=hanh-lang` | yes | yes |
| status | trạng thái dòng | Dropdown | LOOKUP_STATIC | — | `status` | yes | yes |
| save | Lưu | Button | — | — | POST/PUT · disable only saving | delta | delta |
| scope | phạm vi BDTX | — | — | — | **OUT B** (đợt D) | — | — |
| workOrderId | phiếu BDTX | — | — | — | **OUT B** | — | — |

**Create/Update journal body (Live):** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

**Cấm** gộp check-in DTO · **cấm** ERP.* · **cấm** fake GPS · **cấm** pre-disable Lưu vì thiếu GPS/narrative · **cấm** web-bff FE.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` keys (weather · kind · status · direction · reportedTo) | CTX + IMPLEMENT | hardcode label VN trên form |
| files | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | FileService BFF · capture | persist full URL |
| profile | `GET auth/profile` | Auth domain | invent user API trong Patrol |
| users | `GET integration/users` Mobile.Bff (peer/shared) | SUBMIT | ERP UserSearchInput · invent WS endpoint |
| road-route | peer A / shared configs | Integration search · **no seed** | seed trên B forms (N/A picker) |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt B (list/form) |
| GPS | point capture only trên TD-05 · không draw layer |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| journal.status | `rmms_patrol_journal_lines` | user TD-05 | POST/PUT journal-lines | chip TD-04 / dropdown TD-05 |
| phat-hien → … → xong | entity | user | PUT status | card chip |
| reportedTo | entity | nút «Báo tuần kiểm» | PUT | badge · **không** tạo TK-03 |
| session.Status | parent Live | (đợt A/D) | sessions | chỉ đọc trên B |

`progress: journal line lifecycle B` (`phat-hien` · `dang-xu-ly` · `cho-kiem-tra` · `xong`). WO / kiến nghị = đợt D.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD Pattern B · capture · mobileApiBase · keep Live journal |
| Design | control-map khớp §B · phone 430 · zone TD-05 submit/banner |
| SA | Bff users forward nếu thiếu · **cấm** invent journal API |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `JournalFormPage` delta · **không** desktop Asset |
| QA | submit enabled · GPS deny on-click · capture · no check-in in list |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-B-PATTERN-B-01 | `disabled={!canSave}` + `alert.warning` → Pattern B banner/inline · cite SUBMIT slug B |
| GAP-DA-MOB-B-CAPTURE-01 | LinImageUpload thiếu capture env |
| GAP-DA-MOB-B-BFF-01 | FE chỉ `mobileApiBase()` · users forward nếu thiếu · **cấm** web-bff |
| GAP-DA-MOB-B-LRS-01 | `kmText` tay · `GAP-TD-LRS-01` · **KEEP** |
| GAP-DA-MOB-B-OUT-D | scope/workOrder · TD-06 = đợt D · **cấm** stub WO trong B |
| GAP-DA-MOB-B-ALIGN-01 | `/align-mobile-to-mfe` · 430 · no new route/icon · no android/ios proto |

**Closed prior:** GAP-DA-MOB-B-CTX-01 · GAP-DA-MOB-B-SCHEMA-01 · GAP-DA-MOB-B-PATH-01 · GAP-DA-MOB-B-WEATHER-01.

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-27T06:55:00.000Z` · `taskId=task_c25cf1eb` · `changeScope=edit_page`
