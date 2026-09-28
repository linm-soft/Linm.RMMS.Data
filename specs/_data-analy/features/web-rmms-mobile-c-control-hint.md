# Data-analy — controlHint — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — submit Pattern B + capture (edit_page) |
| packKind | `list` |
| changeScope | `edit_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| contentHashSource | CTX `web-rmms-mobile-c.md` + `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| analyzedAt | `2026-09-27T08:00:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-c-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/phat-hien` |
| mfeStdRoute | `/phat-hien` |
| taskId | `task_fce3705f` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | pipeline C CRUD **PASS** · NEW task = submit/validate Pattern B (cite SUBMIT-VALIDATE) |
| keepArtifacts | PO/Design/SA prior **giữ** · analy ghi § Delta · **cấm** typed CRUD `new_page` |

> Data-analy **đề xuất** controlHint Delta. Design **chốt** control-map trên prototype hiện có.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt mới trên form.  
> Toolbar/export: **override SUBMIT-VALIDATE** — **không** xuất Excel · **không** `new_page`.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** tọa độ mẫu.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-c.md` | wave C screens TK-02…05 |
| Delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · slug `web-rmms-mobile-c` |
| Screens C | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-02…05 (layout giữ) |
| Code Current | `Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileC/*` | FindingForm · JournalReview · FindingDetail |
| paths | `WebRmmsMobileC/paths.ts` | `BASE=/phat-hien` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Patrol | **cấm ERP.*** |
| Mobile.Bff | `VITE_MOBILE_API_URL` · `mobileApiBase()` | align cuối · forward users nếu thiếu |

## § Delta Current vs New (HARD — edit_page)

| Surface | Current (MFE Live) | New (task này) |
|---------|-------------------|----------------|
| `FindingFormPage.tsx` TK-03 | `disabled={!canSave}` · `canSave` = GPS ok + description + kmFrom/kmTo + due(bdtx) + journal(tuan-duong) · `alert.warning` thiếu field/GPS | Lưu **luôn bật** khi sẵn sàng UI · chỉ `disabled={saving\|\|hydrating}` · bấm → `validationAttempted` · banner `string[]` + inline · GPS deny **không** khóa nút — báo khi bấm · **cấm** `alert.warning` thay banner required |
| `JournalReviewPage.tsx` TK-04 | `disabled={!canSave}` · `lech` thiếu note → khóa Lưu · `alert.warning` | Lưu đối chiếu luôn bật trừ `saving/loading` · lệch thiếu note → banner+inline khi bấm |
| `FindingDetailPage.tsx` TK-05 | feedback: `disabled={saving \|\| !feedbackQty.trim()}` · recheck: `disabled={!canConfirm}` / `!canMarkNotOk` (GPS+result) · early `return` im khi thiếu | Gửi feedback / Xác nhận recheck luôn bật trừ `saving` · thiếu qty/GPS/media/note → banner khi bấm · **cấm** khóa theo `!feedbackQty` / `!canConfirm` |
| Ảnh TK-03/05 | `LinImageUpload` không `capture` | Input ảnh / capture camera: `capture="environment"` (prop forward hoặc input local) |
| List TK-02 | giữ cards/filter | **không** đổi layout · **không** toolbar export |
| Route / shell | `/phat-hien` · phone 430 | **giữ** · `/align-mobile-to-mfe` · **cấm** tab/route/icon mới · **cấm** mở prototype android/ios |
| API surface | findings/recheck/review Live | **không** invent endpoint · mọi call `mobileApiBase()` · **cấm** web-bff trực tiếp |
| Search users/tuyến | C forms không gắn UserSearch ERP | N/A picker người trên C · nếu peer cần users: BFF forward `GET integration/users` · road-routes/search đã có · **cấm** `ROAD_ROUTE_SEED` khi đụng lookups chung |

**Validation Pattern B** (cite `erp-form-context/spec/3-validation.md` + SUBMIT-VALIDATE):

1. Submit luôn bật khi form sẵn sàng · **cấm** disable vì thiếu required/GPS/ảnh/`canSave`.
2. Chỉ disable khi request đang chạy.
3. Lần bấm đầu set `validationAttempted` · trước đó **cấm** inline error.
4. Fail client: banner `string[]` + thu gọn/đóng + inline + scroll lỗi đầu · **cấm** một `alert.warning` thay banner.
5. Required trên label · message `useFormOptions()` / key có sẵn.
6. Lỗi API → toast · **cấm** banner API.
7. GPS deny: bấm submit mới báo.

## Screens đợt C (ids — giữ)

| id | route (field cite) · MFE | surface |
|----|--------------------------|---------|
| TK-02 | `/field/tuan-kiem/ton-tai` · `/phat-hien/:sessionId` | list cards |
| TK-03 | `/field/tuan-kiem/phieu/moi` · `/phat-hien/:sessionId/moi` | form tạo phiếu |
| TK-04 | `/field/tuan-kiem/doi-chieu` · `/phat-hien/:sessionId/review/:lineId` | đối chiếu |
| TK-05 | `/field/tuan-kiem/phieu/:id` · `/phat-hien/:sessionId/:id` | detail + recheck (+ feedback block nếu Live D-adjacent) |

**Out of C write-new:** TK-06/07 · invent WO/feedback API · **không** xóa block feedback nếu đã Live — chỉ Pattern B nút.

## ControlHint inventory (Delta-focus + baseline)

| uiField | screen | controlHint | Delta note |
|---------|--------|-------------|------------|
| findingList | TK-02 | List cards | giữ |
| filter.status / route | TK-02 | Chip/Select | phone · **không** LinErpListFilterBar |
| createFinding | TK-02 | Button | → TK-03 |
| source…dueAt / mediaIds | TK-03 | form fields | giữ catalog · **submit Pattern B** |
| getGps / lat lng | TK-03 | GPS | deny → báo khi Lưu · **không** disable Lưu |
| saveFinding | TK-03 | Button | `disabled` chỉ `saving\|hydrating` |
| mediaIds | TK-03 | FileMulti | + `capture="environment"` |
| review / reviewNote | TK-04 | Radio+TextArea | note required nếu lech **khi bấm** |
| reviewSave | TK-04 | Button | Pattern B |
| createFromLech | TK-04 | Button | giữ prefill GPS journal |
| feedbackQty | TK-05 | Text | required khi gửi · **không** disable nút trước bấm |
| submitFeedback | TK-05 | Button | Pattern B |
| recheckResult / note / media / gps | TK-05 | form | GPS/media/note validate on submit |
| confirmDone / markNotOk | TK-05 | Button | chỉ `disabled={saving}` (+ loading UI) |

## Filter / grid

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* / export Excel | **N/A** — phone Field · SUBMIT-VALIDATE override no export |
| TK-02 | Chip/select giữ |

## GPS

| Màn | Current | New |
|-----|---------|-----|
| TK-03 | deny → disable Lưu | deny → Lưu bật · banner/modal khi bấm |
| TK-04 | prefill journal | giữ |
| TK-05 | deny → disable confirm | deny → confirm bật · báo khi bấm |

## API (không invent — cite)

| Method | Path | Note |
|--------|------|------|
| GET/POST | `patrol/findings` | Live |
| GET | `patrol/findings/{id}` | Live |
| POST | `patrol/findings/{id}/recheck` | Live |
| PUT | `patrol/journal-lines/{id}/review` | Live |
| GET | `integration/road-routes/search` | BFF đã có |
| GET | `integration/users` | BFF forward nếu thiếu · **cấm** endpoint WebService mới |

Prefix runtime: `mobile-bff/api/v1` via `mobileApiBase()` / `VITE_MOBILE_API_URL`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-CAPTURE-PROP | `LinImageUpload` có forward `capture`? | Dev: prop nếu có · else input local `capture="environment"` · **cấm** fork package |
| UNCLEAR-FEEDBACK-SCOPE | feedback/assign trên TK-05 = đợt D cite CTX nhưng code Live | PO/Dev: Pattern B nút · **không** expand CRUD D trong task C |
| — | Schema/code/DOMAIN prior wave | **resolved** review PASS — không reopen trừ regression |

## Handoff

| Role | Dùng |
|------|------|
| PO | AC Pattern B L/F trên TK-03/04/05 · capture · GPS on-submit · giữ packKind=list · **cấm** new_page |
| Design | **giữ** prototype zones TK-02…05 · reviewUrl · chỉ annotate Delta nút/banner nếu cần · phone 430 |
| SA | **không** schema mới · confirm BFF users forward nếu thiếu · **cấm** ERP.* |
| TL/Dev | edit 3 pages + capture · align-mobile-to-mfe · mobileApiBase only |
| QA | submit bật thiếu GPS/required · banner · capture · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-27T08:00:00.000Z` · `taskId=task_fce3705f`
