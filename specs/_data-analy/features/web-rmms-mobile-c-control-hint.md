# Data-analy — controlHint — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — danh mục, phiếu, đối chiếu, kiểm tra lại |
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
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| analyzedAt | `2026-09-25T08:45:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-c-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| mfeStdRoute | `/web-rmms-mobile-c` |
| taskId | `task_2a2290a0` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | `web-rmms-mobile-a` (TK hub/mở đợt) · `web-rmms-mobile-b` (journal-lines) · wave C = **API Mới** findings/recheck/review |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** `Schema_PatrolFinding` + review journal + routes.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** tọa độ mẫu.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-c.md` | created this run · hash gate |
| Screens C | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-02 · TK-03 · TK-04 · TK-05 |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | GAP-TK-01 đối chiếu · GAP-TK-02/03 phiếu |
| Peer A/B | `_data-analy/...-a-*` · `...-b-*` · CTX A/B | đợt TK Live · journal-lines |
| Peer CTX | `docs/context/features/patrol.md` | desktop · không clone shell |
| BE parent Live | `PatrolSessionsController` · sessions | đợt TK + ca TD |
| BE peer B | journal-lines · `Schema_PatrolJournalLine` | list + review |
| BE Mới | Entity `PatrolFinding` · `Schema_PatrolFinding` · recheck | **chưa** Live — pair trước form |
| DOMAIN-MAP | Patrol · `api/v1/patrol` | cite · slug C SA thêm nếu thiếu · **cấm ERP.*** |

## Screens đợt C (ids)

| id | route | surface |
|----|-------|---------|
| TK-02 | `/field/tuan-kiem/ton-tai` | list cards tồn tại |
| TK-03 | `/field/tuan-kiem/phieu/moi` | form tạo phiếu |
| TK-04 | `/field/tuan-kiem/doi-chieu` | đối chiếu journal-lines |
| TK-05 | `/field/tuan-kiem/phieu/:id` | detail + recheck form |

**Out of C:** TK-06 · TK-07 · WO `POST maintenance/work-orders` · `POST …/feedback` (đợt D) · nút Giao BDTX trên TK-03 (D).

## ControlHint inventory (đợt C)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| findingList | TK-02 | List cards | `GET patrol/findings?sessionId&status&route` |
| filter.sessionId | TK-02 | Hidden/Context | đợt đang mở |
| filter.status | TK-02 | Chip/Select | `phat-hien` `da-giao` `cho-kiem-tra` `xong` |
| filter.route | TK-02 | Dropdown | LOOKUP road-route / ca Route |
| card.code | TK-02 | Text | mã tồn tại |
| card.route / km / kind / due / status | TK-02 | Text/Chip | |
| card.tap | TK-02 | Nav | → TK-05 |
| createFinding | TK-02 | Button | → TK-03 |
| emptyHint | TK-02 | EmptyState | copy key «Chưa có tồn tại trong đợt» |
| source | TK-03 | Dropdown | LOOKUP_STATIC 5 keys |
| journalLineId / linkSessionId | TK-03 | Lookup/Text | **required** nếu `source=tuan-duong` |
| findingKind | TK-03 | Dropdown | 7 keys |
| kmFrom / kmTo | TK-03 | Text | tay |
| side | TK-03 | Dropdown | 5 keys vị trí |
| hangMuc | TK-03 | Dropdown | LOOKUP_STATIC hạng mục |
| description | TK-03 | TextArea | **required** |
| qtyEstimate | TK-03 | Text | optional + unit |
| scope | TK-03 | Radio | `bdtx` \| `vuot-bdtx` |
| mediaIds | TK-03 | FileMulti | FileService guid |
| getGps | TK-03 | Button | `navigator.geolocation` · accuracy |
| lat / lng / accuracyM | TK-03 | GPS read | deny → **disable Lưu** · **cấm** fake |
| dueAt | TK-03 | Date | **required** nếu `scope=bdtx` |
| violationAction | TK-03 | Radio | nếu `findingKind=hanh-lang` · **không** mở sổ 07 |
| thiCongChecks | TK-03 | Checkbox×3 | nếu `thi-cong` · ≥1 biển/rào/phân luồng |
| saveFinding | TK-03 | Button | POST · status `phat-hien` → TK-05 |
| assignWo | TK-03 | Button | **OUT C** (đợt D) · ẩn/disabled |
| cancel | TK-03 | Button | không ghi |
| tdSessionPick | TK-04 | Dropdown | `GET patrol/sessions` cùng tuyến · Hoàn thành/Đang tuần |
| journalList | TK-04 | List cards | peer B `GET …/journal-lines` |
| review | TK-04 | Radio | `khop` \| `lech` |
| reviewNote | TK-04 | TextArea | **required** nếu `lech` |
| createFromLech | TK-04 | Button | → TK-03 prefill nguồn `tuan-duong` · journal GPS/ảnh/km · **không** GPS mới trừ lấy lại |
| reviewSave | TK-04 | Button | `PUT …/journal-lines/{id}/review` · `findingId` khi đã lập phiếu |
| detailRO | TK-05 | Detail | GET finding · code/source/desc/km/due/scope/media/WO/status |
| feedbackBlock | TK-05 | — | **OUT C** (đợt D) |
| recheckResult | TK-05 | Radio | `dat` \| `chua-dat` |
| recheckNote | TK-05 | TextArea | **required** nếu chưa đạt |
| recheckMedia | TK-05 | FileMulti | **required** nếu đạt |
| recheckGps | TK-05 | GPS | deny → chặn xác nhận |
| newDueAt | TK-05 | Date | nếu chưa đạt · giữ hạn cũ hoặc hạn mới bắt buộc |
| confirmDone | TK-05 | Button | chỉ khi `dat` · POST recheck → `xong` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B desktop grid |
| TK-02 | Chip/select lọc status+route · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| TK-02 | không bắt GPS |
| TK-03 | **HARD** deny → chặn Lưu · hiện accuracy · **cấm** mẫu |
| TK-04 | prefill từ dòng · lấy lại GPS chỉ khi user bấm |
| TK-05 recheck | **HARD** deny → chặn xác nhận |

## API Mới (SA pair trước form)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/findings` | query sessionId/status/route |
| POST | `patrol/findings` | tạo · server `code` |
| GET | `patrol/findings/{id}` | detail |
| POST | `patrol/findings/{id}/recheck` | kết luận đạt/chưa đạt |
| PUT | `patrol/journal-lines/{id}/review` | `review` · `reviewNote` · `findingId` |

**Schema:** `Schema_PatrolFinding` + entity (đề xuất `rmms_patrol_findings`) **trước** wire form. Review fields trên `PatrolJournalLine` / Schema_B nếu chưa có. Body đề xuất finding: `sessionId` · `source` · `journalLineId?` · `findingKind` · `kmFrom` · `kmTo` · `side` · `hangMuc` · `description` · `qtyEstimate` · `scope` · `mediaIds` · `lat` · `lng` · `accuracyM` · `dueAt?` · `violationAction?` · `thiCongFlags?` · `status`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-FIND-SCHEMA | Chưa có `Schema_PatrolFinding` Live | SA entity+schema **trước** form · **cấm** stub fake list |
| UNCLEAR-FIND-CODE | Quy tắc sinh `code` mã tồn tại | SA chốt format |
| UNCLEAR-REVIEW-COL | Review trên journal-line vs bảng riêng | SA chốt cột trên Schema_B hoặc migration C |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP chưa chắc có row `web-rmms-mobile-c` | SA thêm slug → Patrol |
| UNCLEAR-HANGMUC | Enum hạng mục keys vs label | Design/PO · LOOKUP_STATIC keys |

## Handoff

| Role | Dùng |
|------|------|
| PO | TK-02…05 DoD · GPS · schema-before-form · useFormOptions · out D |
| Design | Phone 430 · zones TK-02…05 · no desktop grid · empty TK-02 |
| SA | Schema_PatrolFinding + recheck + review · routes Mới · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · pair schema trước UI submit |
| QA | empty list · GPS deny TK-03/05 · prefill TK-04 · no fake coords · no WO/feedback C |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T08:45:00.000Z`
