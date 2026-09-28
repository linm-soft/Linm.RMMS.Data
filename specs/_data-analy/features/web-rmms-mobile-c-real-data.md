# Data-analy — real-data bind — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — submit Pattern B + capture (edit_page) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_fce3705f` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` — **cấm** call trực tiếp từ MFE |
| prefix BFF mobile | `mobile-bff/api/v1` · `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/phat-hien` |
| mfeStdRoute | `/phat-hien` |
| domain | **Patrol** (+ Auth · Files · Integration peer · journal peer B) |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| contentHashSource | CTX + `SUBMIT-VALIDATE.md` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T08:00:00.000Z` |
| demo | **N/A** · **cấm** demo-json / mock list / fake GPS |

## § Scope đợt C (edit_page)

| In | Out |
|----|-----|
| Pattern B submit/validate trên TK-03/04/05 | typed CRUD `new_page` · Excel export |
| `capture="environment"` ảnh form | fork `LinImageUpload` package |
| GPS deny báo khi bấm (không disable) | fake lat/lng |
| align-mobile-to-mfe 430px · route `/phat-hien` | thêm tab/route/icon · iOS/Android prototype |
| Mobile.Bff only · users forward nếu thiếu | web-bff base · invent WebService API |
| giữ bind findings/recheck/review Live | schema migration mới (không Step 4b ở analy) |

## § Delta Current vs New — bind / UX

| uiField / CTA | Current bind behavior | New |
|---------------|----------------------|-----|
| `saveFinding` | gated `canSave` (GPS+requireds) | always enabled except pending · validate on click → banner |
| `reviewSave` | gated note if `lech` | same validate on click · button not gated by note |
| `submitFeedback` | gated `!feedbackQty` | qty required in banner on click |
| `confirmDone` / not-ok | gated `canConfirm`/`canMarkNotOk` (GPS) | GPS checked on click · button not pre-disabled |
| media upload | no capture | `capture="environment"` |
| API base | patrol via mobile services | keep `mobileApiBase()` · verify no web-bff |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-c.md` | — | — |
| `delta` | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug C | — | Pattern B SSOT |
| `plan` | `IMPLEMENT-SCREENS.md` TK-02…05 | — | layout giữ |
| `code` | `WebRmmsMobileC/FindingFormPage.tsx` · `JournalReviewPage.tsx` · `FindingDetailPage.tsx` | — | Current disable gates |
| `api-live` | findings · recheck · journal review · sessions | empty list OK | toast API · **cấm** banner API |
| `bff` | Mobile.Bff `…/mobile-bff/api/v1` | — | 404 → check forward · **cấm** web-bff |
| `integration` | `road-routes/search` Live BFF · `users` forward nếu thiếu | `--` nếu mã không có | **cấm** ROAD_ROUTE_SEED |
| `geo` | `navigator.geolocation` | deny → banner on submit | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |
| `domain-map` | Patrol | — | **cấm ERP.*** |

## §B — Bind field (HARD) — giữ + Delta CTA

| uiField | Label (key) | controlHint | catalogKind | GET/write | Delta |
|---------|-------------|-------------|-------------|-----------|-------|
| session.tk | đợt tuần kiểm | context | — | sessions Live | giữ |
| finding.list | danh mục | List cards | — | GET findings | giữ · no export |
| finding.byId | chi tiết | Detail | — | GET findings/{id} | giữ |
| source…thiCongFlags | form TK-03 | Dropdown/Text/… | LOOKUP_STATIC | POST findings | validate on submit Pattern B |
| lat/lng/accuracyM | GPS | GPS | geo | create/recheck | **không** gate button |
| mediaIds | ảnh | FileMulti | files | files/* | + capture |
| review/reviewNote | khớp/lệch | Radio+Text | LOOKUP_STATIC | PUT review | note if lech on submit |
| feedbackQty | KL hoàn thành | Text | — | POST feedback (Live) | Pattern B · CTA not gated |
| recheckResult… | kết luận | Radio+… | LOOKUP_STATIC | POST recheck | Pattern B |
| saveFinding / reviewSave / confirm* | CTA | Button | — | — | `disabled` chỉ pending |

**Cấm** ERP.* · **cấm** fake GPS · **cấm** mock findings · **cấm** seed tuyến khi sửa lookups chung.

## §C — Catalog

| catalogKind | search/list API | Cấm |
|-------------|-----------------|------|
| LOOKUP_STATIC | `useFormOptions` | hardcode label VN mới |
| files | files/init→object→commit | persist full URL |
| road-route | `GET …/integration/road-routes/search` | ROAD_ROUTE_SEED · filter QL.22 |
| users (peer) | `GET …/integration/users?search=` via Mobile.Bff | ERP `UserSearchInput` nguyên bản · invent API |
| sessions | `GET patrol/sessions` | invent ngoài Patrol |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** |
| GPS | point TK-03 + TK-05 · prefill TK-04 |
| align | `/align-mobile-to-mfe` · SSOT = page MFE hiện có · 430px · no new icon paths |

## §E — Progress / vòng đời

Giữ lifecycle finding Live (`phat-hien`…`xong`). Task **không** đổi state machine — chỉ UX submit/validate/capture.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | AC Pattern B · capture · mfeStdUrl `/phat-hien` · keep prior AC CRUD |
| Design | keep prototype · Delta banner/CTA note only |
| SA | no new schema · BFF users forward confirm |
| Dev | 3 pages + capture + BFF align · **cấm** yarn ở analy |
| QA | queued · submit-enabled + banner + GPS deny on click |

## Gaps

| id | Note |
|----|------|
| GAP-DA-MOB-C-SUBMIT-01 | Current `canSave`/`canConfirm`/`!feedbackQty` trái SUBMIT-VALIDATE Pattern B |
| GAP-DA-MOB-C-CAPTURE-01 | Thiếu `capture="environment"` trên upload TK-03/05 |
| GAP-DA-MOB-C-ALERT-01 | `alert.warning` thay banner required — phải đổi Pattern B |
| GAP-DA-MOB-C-BFF-USERS-01 | Mobile.Bff thiếu `integration/users` → forward (nếu Dev đụng picker; C forms chính = Pattern B) |
| GAP-DA-MOB-C-URL-01 | Old analy `mfeStdUrl=/web-rmms-mobile-c` lệch — SSOT `/phat-hien` |
| GAP-TK-* prior | resolved review PASS — không reopen |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T08:00:00.000Z` · `taskId=task_fce3705f`
