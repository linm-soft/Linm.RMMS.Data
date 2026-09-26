# PO requirement — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
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
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| writtenAt | `2026-09-25T07:55:00.000Z` |
| prior | data_analy `confirmed` · compact + control-hint + real-data §A+§B |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · **không** ERP Modal/Slideout Kind B |

> Reuse analy inventory + controlHint (hash skip) — **cấm** re-scan demo.  
> Labels: `useFormOptions()` / copy key — **cấm** hardcode VN trên form.  
> Schema + entity `PatrolJournalLine` / `Schema_PatrolJournalLine` **trước** wire form.

## 1. Goal

Trong ca tuần đường đang mở (peer A Live): **TD-04 sổ nhật ký** + **TD-05 tạo/sửa dòng**. List = data thật `journal-lines` (API Mới). Check-in **không** nằm trong sổ. GPS deny trên TD-05 **chặn Lưu**.

## 2. Screens

| id | route | surface | DoD |
|----|-------|---------|-----|
| TD-04 | `/field/tuan-duong/nhat-ky` | List cards sổ theo ca | Card thật từ GET journal-lines · empty «Chưa ghi việc» (copy key) · tap → TD-05 · Thêm → `/moi` · **không** check-in |
| TD-05 | `/field/tuan-duong/nhat-ky/moi` · `…/:lineId` | Form tạo/sửa | GPS HARD · narrative required · POST/PUT journal-lines · cancel → TD-04 |

**Out of B:** TD-06 · TK-02…07 · WO / scope BDTX write (đợt D) · findings (C). UI ẩn/disabled `scope` · `workOrderId`.

**Nav peer A:** TD-01 «Sổ / Ghi nhật ký» → TD-04/05.

## 3. List / Grid AC (packKind=list · phone)

| AC | Rule | Pass |
|----|------|------|
| DES-GRID / LinErpListFilterBar | **N/A** — Field phone · **cấm** clone ERP Kind B filter bar / desktop grid | Design note N/A |
| L-01 empty | Không dòng → EmptyState copy key · CTA Thêm → TD-05 `/moi` | QA |
| L-02 data | Cards bind GET `sessions/{id}/journal-lines` · fields: at · kmText · kind · status | QA |
| L-03 no check-in | List **không** gồm dòng check-in (TD-03) | QA |
| L-04 tap | Card → TD-05 `:lineId` | QA |
| L-05 parent | Không ca đang mở → empty/redirect hub A · toast · **cấm** `window.alert` | QA |
| L-06 no mock | Schema chưa Live → empty + gap · **cấm** fake list / demo seed | Dev/QA |
| F-01 GPS | TD-05: deny geolocation → disable Lưu · hiện accuracy · **cấm** fake coords | QA |
| F-02 narrative | Thiếu narrative → chặn Lưu | QA |
| F-03 save | POST tạo · PUT sửa · body đủ field §B | QA |
| F-04 labels | useFormOptions keys (weather·kind·status·direction·reportedTo) | QA |
| F-05 report TK | Nút báo tuần kiểm → `reportedTo=tuan-kiem` + `reportedAt` · **không** tạo TK-03 | QA |
| F-06 violation | `kind=hanh-lang` → flag đề nghị BB · **không** mở sổ 07 | QA |
| F-07 out D | scope / workOrderId ẩn hoặc disabled | QA |

## 4. Field inventory (from analy · Design chốt control-map)

| uiField | screen | controlHint | notes |
|---------|--------|-------------|-------|
| journalList | TD-04 | List cards | GET sessions/{id}/journal-lines |
| card.at / kmText / kind / status | TD-04 | Text / Chip | tap → edit |
| addLine / emptyHint | TD-04 | Button / EmptyState | copy key |
| at | TD-05 | DateTime | default now |
| userName | TD-05 | Text RO | auth/profile |
| lat / lng / accuracyM · getGps | TD-05 | GPS | HARD deny→block · nút «Ghim vị trí hiện tại» · text OK = `[lat, lng]` |
| kmText | TD-05 | Text | tay · GAP-TD-LRS-01 |
| direction | TD-05 | Dropdown | default ca Note `chieu=` |
| weather | TD-05 | Dropdown | 6 keys |
| kind | TD-05 | Radio/Dropdown | 9 keys |
| narrative | TD-05 | TextArea | **required** |
| mediaIds | TD-05 | FileMulti | files/* guid |
| onSiteAction / onSiteResult | TD-05 | Toggle + Text | |
| reportedTo / reportedAt | TD-05 | Button + DateTime | no TK-03 |
| violationFlag | TD-05 | Button/flag | if hanh-lang |
| status | TD-05 | Dropdown | 4 keys |
| save / cancel | TD-05 | Button | POST/PUT · về TD-04 |

## 5. API / data (cite real-data §A+§B)

| Method | Path | Live |
|--------|------|------|
| GET | `patrol/sessions/{id}` | parent Live |
| GET | `patrol/sessions/{id}/journal-lines` | **Mới** |
| GET | `patrol/journal-lines/{id}` | **Mới** (SA confirm) |
| POST | `patrol/journal-lines` (hoặc nested — SA) | **Mới** |
| PUT | `patrol/journal-lines/{id}` | **Mới** |
| GET | `auth/profile` | Live |
| files | init → object → commit | Live |

**Body đề xuất:** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

**HARD:** pair entity + `Schema_PatrolJournalLine` trước form · **cấm** stub fake · **cấm ERP.***.

## 6. Leave (navigation / exit)

| From | Action | To |
|------|--------|-----|
| TD-04 | Back | TD-01 hub (peer A) |
| TD-04 | Thêm / empty CTA | TD-05 `/moi` |
| TD-04 | Card tap | TD-05 `:lineId` |
| TD-05 | Cancel / Back | TD-04 · không ghi |
| TD-05 | Save OK | TD-04 (refresh list) |
| TD-05 | Auth fail | redirect login |

## 7. Non-goals (B)

- TD-06 kết ca · TK phiếu · findings  
- `POST maintenance/work-orders` · write `scope` / `vuot-bdtx`  
- Desktop Asset MFE · iOS/Android native · ERP.*  
- Demo HTML / fake GPS / mock journal SSOT  

## 8. Open questions (carry → SA / Design)

| id | Owner | Note |
|----|-------|------|
| UNCLEAR-JL-PATH | SA | POST nested vs top-level |
| UNCLEAR-JL-SCHEMA | SA | Schema_PatrolJournalLine chưa Live — pair trước form |
| UNCLEAR-LRS | Design | giữ Text `kmText` tay |
| UNCLEAR-WEATHER | SA | 6 keys IMPLEMENT · confirm |

## 9. DoD PO → Design

- [x] packKind=`list` confirmed · changeScope=`edit_page`  
- [x] Screens TD-04/05 + Leave  
- [x] List AC (phone) + Form AC GPS/narrative  
- [x] Inventory + controlHint reuse analy (hash skip)  
- [x] real-data §A+§B cited · schema-before-form HARD  
- [x] Out-of-B explicit · DES-GRID N/A documented  
- [x] Open questions listed · **không** block Design start  

## 10. Handoff Design

| Input | Path / note |
|-------|-------------|
| requirement | this file |
| compact | `handoff/po-compact.md` |
| control-hint | `specs/_data-analy/features/web-rmms-mobile-b-control-hint.md` |
| real-data | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` |
| zones | TD-04 · TD-05 · phone 430 · no desktop grid |
| reviewUrl | Design tạo prototype + reviewUrl |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-b` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T07:55:00.000Z`
