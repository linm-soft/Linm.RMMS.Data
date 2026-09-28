# PO requirement — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — Pattern B submit/validate + capture (edit_page) |
| packKind | `list` · **confirmed** |
| changeScope | `edit_page` |
| lane | `web` · MFE Mobile phone |
| demo | **N/A** |
| status | `done` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| contentHashSource | CTX + `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · hash skip analy |
| writtenAt | `2026-09-27T08:10:00.000Z` |
| taskId | `task_1ea5ccc8` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B · **cấm** re-scan demo |
| priorWave | CRUD / Schema_PatrolFinding · review PASS — **giữ** AC L/F/R/K · **không** reopen schema |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/phat-hien` |
| mfeStdUrl | `http://localhost:9301/phat-hien` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B |
| deltaSSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · slug C |

> Reuse analy inventory + controlHint (hash skip) — **cấm** re-scan demo / crawl CTX.  
> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN mới trên form.  
> Toolbar/export: **override** — **không** Excel · **không** `new_page`.  
> Schema Live prior wave — task này = UX submit/validate/capture only.

## 1. Goal

Giữ CRUD đợt C (TK-02…05) đã PASS. Task **NEW** = chỉnh submit/validate **Pattern B** trên TK-03/04/05 + `capture="environment"` ảnh + GPS deny báo khi bấm (không khóa nút). Route `/phat-hien` · phone 430 · Mobile.Bff only · align-mobile-to-mfe · **cấm** tab/route/icon mới · **cấm** iOS/Android prototype.

## 2. Screens

| id | route (field) · MFE | surface | DoD (this task) |
|----|---------------------|---------|-----------------|
| TK-02 | `/field/tuan-kiem/ton-tai` · `/phat-hien/:sessionId` | List cards | **giữ** L-* · **không** đổi layout/export |
| TK-03 | `/field/tuan-kiem/phieu/moi` · `/phat-hien/:sessionId/moi` | Form tạo phiếu | Pattern B Lưu · capture · GPS on-submit · giữ field AC F-02…F-08 |
| TK-04 | `/field/tuan-kiem/doi-chieu` · `/phat-hien/:sessionId/review/:lineId` | Đối chiếu | Pattern B Lưu · lech note on click · giữ R-* |
| TK-05 | `/field/tuan-kiem/phieu/:id` · `/phat-hien/:sessionId/:id` | Detail + recheck (+ feedback nếu Live) | Pattern B confirm/feedback · capture · GPS on-submit · giữ K-02…K-03 |

**Out of C write-new:** TK-06/07 · invent WO/feedback API · expand CRUD đợt D.  
**Feedback Live:** nếu block đã có trên TK-05 → chỉ Pattern B nút — **không** mở rộng CRUD D (`UNCLEAR-FEEDBACK-SCOPE`).

## 3. List / Grid AC (packKind=list · phone) — **giữ**

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar / export | **N/A** — Field phone · SUBMIT-VALIDATE override no Excel | Design N/A |
| L-01 empty | EmptyState copy key · CTA → TK-03 | QA |
| L-02 data | Cards GET findings · code · route/km · kind · due · status | QA |
| L-03 filter | Chip/Select status + route · **không** ERP filter bar | QA |
| L-04 tap | Card → TK-05 | QA |
| L-05 create | Tạo phiếu → TK-03 | QA |
| L-06 parent | Không đợt hợp lệ → empty/redirect hub · toast · **cấm** `window.alert` | QA |
| L-07 no mock | **cấm** fake findings / demo seed / fake GPS | Dev/QA |

## 4. Form AC — **giữ** field rules + **Delta Pattern B**

### 4.1 Field rules (giữ — validate **on submit**, không gate nút)

| AC | Rule | Pass |
|----|------|------|
| F-02 desc | Thiếu `description` → fail client (banner+inline) khi bấm Lưu | QA |
| F-03 source TD | `source=tuan-duong` → `journalLineId` required on submit | QA |
| F-04 scope due | `scope=bdtx` → `dueAt` required on submit | QA |
| F-05 thi-cong | `findingKind=thi-cong` → ≥1 checkbox on submit | QA |
| F-06 hanh-lang | `findingKind=hanh-lang` → `violationAction` on submit · **không** mở sổ 07 | QA |
| F-07 save | POST findings · status `phat-hien` → TK-05 | QA |
| F-08 labels | useFormOptions keys (status·source·findingKind·side·scope·hangMuc·review·recheck·violation) | QA |
| R-01 review | `lech` → `reviewNote` required **khi bấm** Lưu · PUT review | QA |
| R-02 prefill | Lập phiếu từ lệch → TK-03 prefill GPS/ảnh/km journal · không GPS mới trừ lấy lại | QA |
| R-03 no rewrite TD | TK-04 **không** sửa narrative tuần đường | QA |
| K-02 recheck dat | `dat` → media required on submit · POST recheck → `xong` | QA |
| K-03 recheck chua | `chua-dat` → note required · `newDueAt` hoặc giữ hạn | QA |
| K-04 out D expand | **không** invent WO/assign/Giao BDTX mới trong task C | QA |

### 4.2 Pattern B + capture + GPS (NEW — cite SUBMIT-VALIDATE)

| AC | Rule | Pass |
|----|------|------|
| PB-01 always-on | Lưu / Lưu đối chiếu / Gửi feedback / Xác nhận recheck **luôn bật** khi UI sẵn sàng · **cấm** `disabled` vì thiếu required/GPS/ảnh/`canSave`/`canConfirm`/`!feedbackQty` | QA |
| PB-02 pending-only | Chỉ `disabled` khi `saving` / `hydrating` / `loading` request | QA |
| PB-03 attempted | Lần bấm đầu set `validationAttempted` · trước đó **cấm** inline error | QA |
| PB-04 banner | Fail client: banner `string[]` + thu gọn/đóng + inline + scroll lỗi đầu · **cấm** một `alert.warning` thay banner | QA |
| PB-05 api-toast | Lỗi API → toast · **cấm** banner API | QA |
| PB-06 gps-create | TK-03: GPS deny **không** khóa Lưu · báo khi bấm (banner/modal quyền) · **cấm** fake coords · **thay** F-01 cũ | QA |
| PB-07 gps-recheck | TK-05: GPS deny **không** khóa confirm · báo khi bấm · **thay** K-01 cũ | QA |
| PB-08 capture | TK-03/05 ảnh: `capture="environment"` · prop forward nếu có · else input local · **cấm** fork `LinImageUpload` | QA |
| PB-09 feedback | Nếu feedback Live trên TK-05: Gửi **không** gate `!feedbackQty` · qty required trong banner khi bấm · **không** expand CRUD D | QA |
| PB-10 align | `/align-mobile-to-mfe` · 430px · mọi call `mobileApiBase()` · **cấm** web-bff trực tiếp · **cấm** route/tab/icon mới | Dev/QA |

**Superseded (không còn Pass nếu còn gate nút):** F-01 cũ (deny→disable Lưu) · K-01 cũ (deny→chặn confirm).

## 5. Field inventory (analy · Design chốt control-map)

| uiField | screen | controlHint | Delta |
|---------|--------|-------------|-------|
| findingList · filter.* · createFinding | TK-02 | List / Chip / Button | giữ |
| source…dueAt · violation · thiCong · fields | TK-03 | form | validate on submit Pattern B |
| getGps · lat/lng/accuracyM | TK-03 | GPS | deny → banner on submit · **không** disable Lưu |
| mediaIds | TK-03 | FileMulti | + `capture="environment"` |
| saveFinding | TK-03 | Button | `disabled` chỉ `saving\|\|hydrating` |
| review / reviewNote | TK-04 | Radio+TextArea | note if lech **on click** |
| reviewSave · createFromLech | TK-04 | Button | Pattern B · prefill giữ |
| detailRO | TK-05 | Detail | giữ |
| feedbackQty · submitFeedback | TK-05 | Text+Button | Pattern B nếu Live · no CRUD D |
| recheckResult… · media · gps | TK-05 | form | validate on submit |
| confirmDone / markNotOk | TK-05 | Button | chỉ `disabled={saving}` |

## 6. Enum keys (giữ · label via useFormOptions)

| Key group | Values |
|-----------|--------|
| finding.status | `phat-hien` · `da-giao` · `cho-kiem-tra` · `xong` |
| source | `tuan-duong` · `nha-thau` · `trung-tam` · `nguoi-dan` · `tai-cho` |
| findingKind | `hu-hong` · `tuan-duong` · `hanh-lang` · `atgt` · `thi-cong` · `tngt` · `kien-nghi` |
| side | `trai` · `phai` · `tim` · `hanh-lang` · `hai-ben` |
| scope | `bdtx` · `vuot-bdtx` |
| review | `khop` · `lech` |
| recheckResult | `dat` · `chua-dat` |
| hangMuc | `nen` · `mat` · `cau` · `cong` · `ham` · `thoat-nuoc` · `atgt` · `ho-lan` · `bien` · `dai-phan-cach` · `thiet-bi` · `thi-cong` |
| violationAction | `lap-bien-ban` · `de-nghi-vphc` |

## 7. API / data (cite real-data §A+§B — **Live** · không invent)

| Method | Path | Note |
|--------|------|------|
| GET/POST | `patrol/findings` | Live · create body giữ prior |
| GET | `patrol/findings/{id}` | Live |
| POST | `patrol/findings/{id}/recheck` | Live |
| PUT | `patrol/journal-lines/{id}/review` | Live |
| GET | `patrol/sessions` · journal-lines peer B | Live |
| GET | `integration/road-routes/search` | BFF Live · **cấm** `ROAD_ROUTE_SEED` khi đụng lookups chung |
| GET | `integration/users` | BFF forward nếu thiếu · **cấm** invent WebService · **cấm** ERP UserSearch nguyên bản |
| files | init → object → commit | Live |

Prefix runtime: `mobile-bff/api/v1` via `mobileApiBase()` / `VITE_MOBILE_API_URL`.  
**HARD:** **cấm ERP.*** · **cấm** fake GPS · **cấm** mock findings · **không** schema migration mới (không Step 4b ở PO).

## 8. Leave (navigation / exit) — giữ

| From | Action | To |
|------|--------|-----|
| TK-02 | Back | Hub A |
| TK-02 | Tạo / empty CTA | TK-03 |
| TK-02 | Card tap | TK-05 `:id` |
| TK-03 | Cancel / Back | TK-02 · không ghi |
| TK-03 | Save OK | TK-05 |
| TK-04 | Back | Hub A / TK-02 |
| TK-04 | createFromLech | TK-03 prefill |
| TK-05 | Back | TK-02 |
| TK-05 | confirmDone OK | TK-05 refresh / TK-02 |
| * | Auth fail | redirect login |

## 9. Non-goals (this task)

- typed CRUD `new_page` · Excel export · DES-GRID desktop  
- Invent WO/feedback API · mở rộng đợt D CRUD  
- Desktop Asset MFE · iOS/Android native · ERP.*  
- Demo HTML / fake GPS / mock list · re-scan demo (hash skip)  
- yarn build / e2e / start:std ở role PO  
- Schema reopen / Step 4b

## 10. Open (soft · không chặn DoR)

| id | Issue | Owner |
|----|-------|-------|
| UNCLEAR-CAPTURE-PROP | `LinImageUpload` forward `capture`? | Dev: prop nếu có · else input local · **cấm** fork package |
| UNCLEAR-FEEDBACK-SCOPE | feedback Live D-adjacent trên TK-05 | Dev: Pattern B nút only · **không** expand CRUD D |
| (resolved) schema/DOMAIN prior | review PASS | **không** reopen |

## 11. Handoff

| Role | Packet |
|------|--------|
| Design | **giữ** prototype zones TK-02…05 · reviewUrl · annotate Delta CTA/banner nếu cần · phone 430 · DES-GRID N/A |
| SA | **không** schema mới · confirm BFF users forward nếu thiếu · **cấm ERP.*** |
| TL/Dev | edit FindingForm · JournalReview · FindingDetail + capture · mobileApiBase · align-mobile-to-mfe |
| QA | PB-* + L-* + field rules · queued e2e · **cấm** fake coords |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-27T08:10:00.000Z` · `taskId=task_1ea5ccc8` · `packKind=list` · `changeScope=edit_page`
