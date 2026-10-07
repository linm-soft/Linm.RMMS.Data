# Data-analy — real-data bind — web-rmms-cam-journal

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-journal` |
| title | Camera nhật ký tuần đường |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_e44f140b` |
| prefix API | `api/v1` · resource `patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile trên web-bff |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (alias) |
| mfeStdRoute | product `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| productRoute | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| domain | **Patrol** (+ FileService cite · Auth/profile cite · peer role-gate) |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| analyzedAt | `2026-09-30T18:01:42.000Z` |
| demo | **N/A** · **cấm** demo-json / fake GPS |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` |

## § Scope

| In | Out |
|----|-----|
| Edit JL-01/JL-02 role-gate + keep Live journal-lines | `new_page` · route mới · invent CamJournal* |
| Tuần đường POST/PUT line + capture | QL_HAT/TK/NT tạo dòng |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · SLA 24h · Mục IV tiền · Giao việc · review API (peer C) |

## § Delta Current vs New

| Bind / UX | Current | New |
|-----------|---------|-----|
| create/update line | mọi sessionId mở form | chỉ tuần đường · BE/FE role enforce |
| JL-02 CTA | theo ca | ẩn với QL_HAT / TK / NT |
| APIs | sessions · journal-lines GET/POST/PUT | **không đổi** paths/DTO |
| BFF | `mobileApiBase()` | giữ · cấm web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-cam-journal.md` | — | edit_page Delta |
| `plan-3-vai` | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` | — | role matrix HARD |
| `code` | `JournalFormPage.tsx` · `JournalListPage.tsx` | — | missing role gate |
| `api-session` | `GET patrol/sessions/{id}` | 404 → notFound | toast load fail |
| `api-list` | `GET …/sessions/{id}/journal-lines` | empty «Chưa ghi việc» | toast |
| `api-get-line` | `GET patrol/journal-lines/{id}` | — | toast load |
| `api-post-line` | `POST patrol/journal-lines` | — | toast · role deny |
| `api-put-line` | `PUT patrol/journal-lines/{id}` | — | toast · role deny |
| `files` | FileService via RouteCapture | — | upload error toast |
| `auth-role` | cite role-gate profile caps | missing caps → deny write | — |
| `domain-map` | Patrol · peer mobile-b | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → banner on Lưu | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | editNote |
|---------|-------------|-------------|-------------|-----|-------------|---------|----------|
| sessionId | ca | Hidden | — | route param | `sessionId` POST | B | — |
| at | Thời điểm | DateTimeLocal | — | dto.at | `at` | B | keep |
| userName / writer | Người ghi | Text RO | auth | profile / dto | `userName` | B | keep |
| kmText | Lý trình | TextInput | — | dto | `kmText?` | B | keep |
| direction | Chiều | Select | LOOKUP_STATIC | session note / dto | `direction` | B | keep |
| weather | Thời tiết | Select | LOOKUP_STATIC | dto | `weather` | B | keep |
| kind | Loại | Select | LOOKUP_STATIC | dto | `kind` | B | keep |
| narrative | Diễn biến | TextArea | — | dto | `narrative` required | B | keep |
| onSiteAction / Result | Xử lý tại chỗ | Checkbox+Text | — | dto | body | B | keep |
| reportedTo / At | Báo cáo tới | Select+DateTime | LOOKUP_STATIC | dto | optional | B | cờ TK · không tạo phiếu |
| violationFlag | Vi phạm | Checkbox | — | dto | bool | B | keep |
| status | Trạng thái dòng | Select | LOOKUP_STATIC | dto | `status` | B | keep |
| lat/lng/accuracyM | GPS | GPS | geo | device / dto | POST/PUT body | B | Pattern B |
| mediaIds | Ảnh | RouteCapture | files | files commit | `mediaIds` | B | tuần đường write |
| save | Lưu | Button | — | — | POST/PUT | B | role tuần đường |
| lineCards.* | dòng đã ghi | List RO | — | GET journal-lines | — | B | QL_HAT/TK/NT view |
| ctaCreate | CTA ghi | Button | — | — | nav JL-01 moi | B | **hide** non-tuần-đường |
| roleCaps | quyền vai | Hidden | auth | profile | gate UI | role-gate | **new edit** |

**POST/PUT body (Live):** `at` · `userName` · `lat` · `lng` · `accuracyM` · `kmText?` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult?` · `reportedTo?` · `reportedAt?` · `violationFlag` · `status` · (+ `sessionId` on create).  
**Cấm** ERP.* · fake GPS · invent cam-journal DTO · SLA hours field trên form này.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE JOURNAL_* / DIRECTION / WEATHER / KIND / STATUS / REPORTED_TO | mobile-b | hardcode VN nếu key có |
| journal-lines | Live patrol | Patrol | invent stub |
| sessions | Live patrol | Patrol | seed fake session |
| roleCaps / packageCode | auth profile · job-titles | role-gate · `QL_HAT` | suy từ MANAGER-RMMS |
| users | N/A JL write | — | N/A |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | none trên JL-01 (pin text + capture) |
| GPS | point required create · Pattern B |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.status | Live | tuần đường mở/kết ca peer | GET sessions | parent stamp |
| line.status | Live | tuần đường | POST/PUT journal-lines | Select + list badge |
| line row | Live | tuần đường create/update | GET list | JL-02 cards |
| validationAttempted | UI | first Lưu | — | banner |
| roleCaps | profile | login | cite role-gate | hide/show CTA |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | role matrix · edit_page · PLAN-3-VAI #3 |
| Design | keep zones · role visibility · 430 |
| SA | Live journal-lines · Mobile.Bff · DOMAIN-MAP slug |
| Dev | JournalFormPage + JournalListPage · caps · no new route |
| QA | write tuần đường · other roles no create · GPS Pattern B |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-JL-ROLE | Current screens thiếu roleCaps — **edit** theo PLAN-3-VAI #3 |
| GAP-DA-JL-DOMAIN-ROW | DOMAIN-MAP thiếu slug `web-rmms-cam-journal` — SA add/bind peer mobile-b |
| GAP-DA-JL-STD-ALIAS | mfeStdUrl alias ≠ product route — **cấm** invent product route |
| GAP-DA-JL-DEPS-ROLE-GATE | Cần caps từ `web-rmms-role-gate` |
| GAP-DA-JL-OUT | Giao việc · SLA 24h · Mục IV · native · web-bff · ERP.* · review API |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` · `rulesVersion=2026.09.27.1` · `analyzedAt=2026-09-30T18:01:42.000Z` · `changeScope=edit_page`
