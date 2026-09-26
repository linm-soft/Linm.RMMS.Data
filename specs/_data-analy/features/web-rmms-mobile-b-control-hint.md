# Data-analy — controlHint — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
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
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| analyzedAt | `2026-09-25T07:44:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| taskId | `task_372668d4` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B desktop |
| priorWave | `web-rmms-mobile-a` (hub/ca/check-in Live) · wave B = **API Mới** journal-lines |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** `Schema_PatrolJournalLine` + routes.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native · **cấm** tọa độ mẫu.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mobile-b.md` | created this run · hash gate |
| Screens B | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-04 · TD-05 |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §2 dòng nhật ký · ≠ check-in |
| Peer A | `docs/context/features/web-rmms-mobile-a.md` · `_data-analy/...-a-*` | nav TD-01 → sổ/ghi |
| Peer CTX | `docs/context/features/patrol.md` | desktop · không clone shell |
| BE parent Live | `PatrolSessionsController` · sessions/{id} | ca đang mở |
| BE Mới | Entity `PatrolJournalLine` · `Schema_PatrolJournalLine` | **chưa** Live — pair trước form |
| DOMAIN-MAP | Patrol · `api/v1/patrol` | cite · **cấm ERP.*** |

## Screens đợt B (ids)

| id | route | surface |
|----|-------|---------|
| TD-04 | `/field/tuan-duong/nhat-ky` | list cards sổ trong ca |
| TD-05 | `/field/tuan-duong/nhat-ky/moi` · `/field/tuan-duong/nhat-ky/:lineId` | form tạo/sửa dòng |

**Out of B:** TD-06 · TK-02…07 · WO `POST maintenance/work-orders` · cờ `vuot-bdtx` write (đợt D) · findings (C).

## ControlHint inventory (đợt B)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| journalList | TD-04 | List cards | `GET …/sessions/{id}/journal-lines` · **không** gồm check-in |
| card.at | TD-04 | Text | giờ dòng |
| card.kmText | TD-04 | Text | lý trình |
| card.kind | TD-04 | Chip/Text | LOOKUP_STATIC kind key |
| card.status | TD-04 | Chip | `phat-hien` \| `dang-xu-ly` \| `cho-kiem-tra` \| `xong` |
| card.tap | TD-04 | Nav | → TD-05 `:lineId` |
| addLine | TD-04 | Button | → TD-05 `/moi` · empty CTA |
| emptyHint | TD-04 | EmptyState | copy key «Chưa ghi việc» · **không** hardcode VN string trong code |
| at | TD-05 | DateTime | default now · editable |
| userName | TD-05 | Text readonly | `GET auth/profile` |
| getGps | TD-05 | Button | `navigator.geolocation` · hiện accuracy |
| lat / lng / accuracyM | TD-05 | GPS read | deny → **disable Lưu** · **cấm** fake |
| kmText | TD-05 | Text | km tay · GAP-TD-LRS-01 |
| direction | TD-05 | Dropdown | LOOKUP_STATIC · default từ ca `Note` `chieu=` |
| weather | TD-05 | Dropdown | `nang` `mua` `mu` `lu` `bao` `khac` |
| kind | TD-05 | Radio/Dropdown | một chọn · 9 keys kind |
| narrative | TD-05 | TextArea | **bắt buộc** · chặn Lưu nếu thiếu |
| mediaIds | TD-05 | FileMulti | FileService guid |
| onSiteAction | TD-05 | Toggle/Checkbox | đã xử lý tại chỗ |
| onSiteResult | TD-05 | Text | để trống nếu chỉ phát hiện |
| reportedTo | TD-05 | Button+Text | «Báo tuần kiểm» → `reportedTo=tuan-kiem` · **không** tạo phiếu TK-03 |
| reportedAt | TD-05 | DateTime | khi đánh dấu báo cáo |
| violationFlag | TD-05 | Button/flag | nếu `kind=hanh-lang` → `de-nghi-bien-ban` · **không** mở sổ 07 |
| status | TD-05 | Dropdown | 4 status keys |
| scope / workOrderId | TD-05 | — | **OUT B** (đợt D) · UI ẩn hoặc disabled |
| save | TD-05 | Button | POST tạo · PUT sửa · thiếu GPS/narrative → chặn |
| cancel | TD-05 | Button | về TD-04 · không ghi |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field · **không** Kind B desktop grid |
| TD-04 | Card list theo ca · **cấm** clone ERP filter bar |

## GPS

| Màn | Rule |
|-----|------|
| TD-04 | không bắt GPS |
| TD-05 | **HARD** deny → chặn Lưu · hiện accuracy · **cấm** tọa độ mẫu |

## API Mới (SA pair trước form)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/sessions/{id}/journal-lines` | list sổ |
| POST | `patrol/journal-lines` | tạo (body có `sessionId`) — SA chốt exact path vs nested |
| PUT | `patrol/journal-lines/{id}` | sửa |

**Schema:** `Schema_PatrolJournalLine` + entity table (đề xuất `rmms_patrol_journal_lines`) **trước** wire form. Body đề xuất: `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status` (+ đợt D: `scope` · `workOrderId`).

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-JL-PATH | POST nested `…/sessions/{id}/journal-lines` vs top-level `patrol/journal-lines` | SA chốt 1 path · Dev follow |
| UNCLEAR-JL-SCHEMA | Chưa có `Schema_PatrolJournalLine` Live | SA entity+schema **trước** form · **cấm** stub fake list |
| UNCLEAR-LRS | Km tay đến khi có snap LRS (`GAP-TD-LRS-01`) | Design giữ Text `kmText` |
| UNCLEAR-WEATHER | `GAP-TD-WEATHER-01` enum weather | giữ 6 keys IMPLEMENT · SA confirm |

## Handoff

| Role | Dùng |
|------|------|
| PO | TD-04/05 DoD · GPS · schema-before-form · useFormOptions |
| Design | Phone 430 · zones TD-04/05 · no desktop grid · empty state |
| SA | Entity + Schema_PatrolJournalLine · routes Mới · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · pair schema trước UI submit |
| QA | empty list · GPS deny · no check-in in journal · no fake coords |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T07:44:00.000Z`
