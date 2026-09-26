# PO requirement — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — danh mục, phiếu, đối chiếu, kiểm tra lại |
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
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| writtenAt | `2026-09-25T08:55:00.000Z` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B · hash skip |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-c` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B |

> Reuse analy inventory + controlHint (hash skip) — **cấm** re-scan demo.  
> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> Schema + entity `PatrolFinding` / `Schema_PatrolFinding` (+ review journal) **trước** wire form.

## 1. Goal

Trong đợt tuần kiểm đang mở (peer A Live): **TK-02 danh mục tồn tại** · **TK-03 tạo phiếu** · **TK-04 đối chiếu journal-lines** · **TK-05 chi tiết + kiểm tra lại**. List = data thật `findings` (API Mới). GPS deny trên TK-03 / TK-05 recheck **chặn Lưu/Xác nhận**. Prefill TK-04→03 dùng GPS journal — **không** GPS mới trừ user lấy lại.

## 2. Screens

| id | route | surface | DoD |
|----|-------|---------|-----|
| TK-02 | `/field/tuan-kiem/ton-tai` | List cards tồn tại theo đợt | Cards từ GET findings · filter status/route · empty copy key · tap → TK-05 · Tạo phiếu → TK-03 |
| TK-03 | `/field/tuan-kiem/phieu/moi` | Form tạo phiếu | GPS HARD · POST findings · status `phat-hien` → TK-05 · **ẩn** Giao BDTX (D) |
| TK-04 | `/field/tuan-kiem/doi-chieu` | Đối chiếu journal | Chọn ca TD · list journal-lines · `khop`/`lech` · lập phiếu từ lệch → TK-03 prefill |
| TK-05 | `/field/tuan-kiem/phieu/:id` | Detail RO + recheck | GET finding · POST recheck · **ẩn** feedback (D) |

**Out of C:** TK-06 · TK-07 · `POST maintenance/work-orders` · `POST …/feedback` · nút Giao BDTX trên TK-03.

**Nav peer:** Hub A (đợt TK) · peer B journal-lines cho TK-04.

## 3. List / Grid AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — Field phone · **cấm** clone ERP Kind B filter bar / desktop grid | Design note N/A |
| L-01 empty | Không finding → EmptyState copy key «Chưa có tồn tại trong đợt» · CTA → TK-03 | QA |
| L-02 data | Cards bind GET `findings?sessionId&status&route` · code · route/km · kind · due · status | QA |
| L-03 filter | Chip/Select status + Dropdown route · phone · **không** ERP filter bar | QA |
| L-04 tap | Card → TK-05 `:id` | QA |
| L-05 create | Nút Tạo phiếu → TK-03 | QA |
| L-06 parent | Không đợt Đang tuần+Tuần kiểm → empty/redirect hub A · toast · **cấm** `window.alert` | QA |
| L-07 no mock | Schema chưa Live → empty + gap · **cấm** fake findings / demo seed | Dev/QA |
| F-01 GPS create | TK-03: deny geolocation → disable Lưu · hiện accuracy · **cấm** fake coords | QA |
| F-02 desc | Thiếu `description` → chặn Lưu | QA |
| F-03 source TD | `source=tuan-duong` → `journalLineId` required | QA |
| F-04 scope due | `scope=bdtx` → `dueAt` required | QA |
| F-05 thi-cong | `findingKind=thi-cong` → ≥1 checkbox biển/rào/phân luồng | QA |
| F-06 hanh-lang | `findingKind=hanh-lang` → `violationAction` · **không** mở sổ 07 | QA |
| F-07 save | POST findings · body §B · status `phat-hien` → TK-05 | QA |
| F-08 labels | useFormOptions keys (status·source·findingKind·side·scope·hangMuc·review·recheck·violation) | QA |
| R-01 review | TK-04: `lech` → `reviewNote` required · PUT `…/journal-lines/{id}/review` | QA |
| R-02 prefill | Lập phiếu từ lệch → TK-03 prefill GPS/ảnh/km từ journal · **không** GPS mới trừ lấy lại | QA |
| R-03 no rewrite TD | TK-04 **không** sửa narrative tuần đường | QA |
| K-01 recheck GPS | TK-05: deny GPS → chặn xác nhận | QA |
| K-02 recheck dat | `dat` → media required · confirmDone → POST recheck → `xong` | QA |
| K-03 recheck chua | `chua-dat` → note required · `newDueAt` hoặc giữ hạn cũ | QA |
| K-04 out D | WO assign / feedback / Giao BDTX ẩn hoặc disabled | QA |

## 4. Field inventory (from analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| findingList | TK-02 | List cards | GET findings?sessionId&status&route |
| filter.status / route | TK-02 | Chip/Select · Dropdown | phone |
| createFinding / emptyHint | TK-02 | Button / EmptyState | copy key |
| source | TK-03 | Dropdown | 5 keys · link journal if tuan-duong |
| journalLineId / linkSessionId | TK-03 | Lookup/Text | required if tuan-duong |
| findingKind | TK-03 | Dropdown | 7 keys |
| kmFrom / kmTo | TK-03 | Text | |
| side | TK-03 | Dropdown | 5 keys |
| hangMuc | TK-03 | Dropdown | LOOKUP_STATIC · PO chốt keys CTX §5 |
| description | TK-03 | TextArea | **required** |
| qtyEstimate | TK-03 | Text | optional |
| scope | TK-03 | Radio | bdtx / vuot-bdtx |
| mediaIds | TK-03 | FileMulti | files/* |
| getGps · lat/lng/accuracyM | TK-03 | GPS | HARD deny→block |
| dueAt | TK-03 | Date | if bdtx |
| violationAction | TK-03 | Radio | if hanh-lang |
| thiCongChecks | TK-03 | Checkbox×3 | if thi-cong ≥1 |
| saveFinding / cancel | TK-03 | Button | POST · không ghi |
| assignWo | TK-03 | Button | **OUT C** ẩn |
| tdSessionPick | TK-04 | Dropdown | sessions cùng tuyến |
| journalList | TK-04 | List cards | peer B journal-lines |
| review / reviewNote | TK-04 | Radio + TextArea | lech → note required |
| createFromLech / reviewSave | TK-04 | Button | → TK-03 · PUT review |
| detailRO | TK-05 | Detail | GET finding |
| feedbackBlock | TK-05 | — | **OUT C** |
| recheckResult / recheckNote | TK-05 | Radio + TextArea | chua-dat → note |
| recheckMedia / recheckGps | TK-05 | FileMulti + GPS | dat → media · HARD GPS |
| newDueAt / confirmDone | TK-05 | Date + Button | confirm chỉ khi dat |

## 5. Enum keys (PO chốt · label via useFormOptions)

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

**UNCLEAR-HANGMUC:** **closed** — keys trên · Design map label copy.

## 6. API / data (cite real-data §A+§B)

| Method | Path | Live |
|--------|------|------|
| GET | `patrol/findings?sessionId&status&route` | **Mới** |
| POST | `patrol/findings` | **Mới** · server `code` |
| GET | `patrol/findings/{id}` | **Mới** |
| POST | `patrol/findings/{id}/recheck` | **Mới** |
| PUT | `patrol/journal-lines/{id}/review` | **Mới** |
| GET | `patrol/sessions/{id}/journal-lines` | peer B |
| GET | `patrol/sessions` · `{id}` | parent Live |
| GET | `auth/profile` | Live |
| files | init → object → commit | Live |

**Create body:** `sessionId` · `source` · `journalLineId?` · `linkSessionId?` · `findingKind` · `kmFrom` · `kmTo` · `side` · `hangMuc` · `description` · `qtyEstimate?` · `scope` · `mediaIds` · `lat` · `lng` · `accuracyM` · `dueAt?` · `violationAction?` · `thiCongFlags?` · `status=phat-hien`.

**Recheck body:** `result` · `note?` · `mediaIds?` · `lat` · `lng` · `accuracyM` · `newDueAt?`.

**Review body:** `review` · `reviewNote?` · `findingId?`.

**HARD:** pair entity + `Schema_PatrolFinding` (+ review trên journal) trước form · **cấm** stub fake · **cấm ERP.***.

## 7. Leave (navigation / exit)

| From | Action | To |
|------|--------|-----|
| TK-02 | Back | Hub A (đợt TK) |
| TK-02 | Tạo / empty CTA | TK-03 |
| TK-02 | Card tap | TK-05 `:id` |
| TK-03 | Cancel / Back | TK-02 · không ghi |
| TK-03 | Save OK | TK-05 (finding mới) |
| TK-04 | Back | Hub A / TK-02 (Design) |
| TK-04 | createFromLech | TK-03 prefill |
| TK-05 | Back | TK-02 |
| TK-05 | confirmDone OK | TK-05 refresh / TK-02 |
| * | Auth fail | redirect login |

## 8. Non-goals (C)

- TK-06 sổ kiến nghị · TK-07 kế hoạch  
- `POST maintenance/work-orders` · `POST …/feedback` · Giao BDTX trên TK-03  
- Desktop Asset MFE · iOS/Android native · ERP.*  
- Demo HTML / fake GPS / mock findings SSOT  
- Re-scan demo / crawl CTX từ đầu (hash skip)

## 9. Open → SA / Design

| id | Issue | Owner |
|----|-------|-------|
| UNCLEAR-FIND-SCHEMA | `Schema_PatrolFinding` chưa Live | SA · pair trước form |
| UNCLEAR-FIND-CODE | Format `code` server-generated | SA |
| UNCLEAR-REVIEW-COL | Review trên Schema_B vs migration C | SA |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-c` | SA thêm → Patrol |
| (closed) UNCLEAR-HANGMUC | keys §5 | PO done · Design labels |

## 10. Handoff

| Role | Packet |
|------|--------|
| Design | Phone 430 · zones TK-02…05 · control-map · empty TK-02 · DES-GRID N/A · reviewUrl |
| SA | Schema_PatrolFinding + recheck + review · code gen · DOMAIN slug · **cấm ERP.*** |
| TL/Dev | Mobile MFE only · pair schema trước submit · no WO/feedback C |
| QA | L-* · F-* · R-* · K-* · no fake coords · no mock list |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T08:55:00.000Z` · `taskId=task_9b8aa107`
