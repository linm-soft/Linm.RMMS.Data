# Data-analy — nghiem-thu-detail (controlHint · mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-detail` |
| title | [Mobile] [Công tác nghiệm thu] -> Chi tiết nghiệm thu |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS · CTX) · demo surface **chưa** có `#sc-nghiem-thu-detail` |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_edea0c3a` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` row `toast('NT-*')` · **GAP-MOB-NT-DETAIL-01** |
| ctx | `docs/context/features/nghiem-thu-detail.md` · peers `nghiem-thu` · `nghiem-thu-create` · `nghiem-thu-mau` |
| plan | `docs/plan/nghiem-thu-mau/README.md` · `MAU-10.md` · `CHI-SO.md` · `SCHEMA.md` · `features/nghiem-thu-mau.md` |
| be | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu/{id}` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu/{id}` (+ `files/*`) |
| generatedAt | `2026-09-19T18:55:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/nghiem-thu-detail` / `files-nt` · gộp list/create · gộp `csdl-so-08` / `kcht-cong-trinh` · ERP.* · `mfeStdUrl` · system alert · ship form từ demo toast · persist FileService URL · label «Mẫu nghiệm thu NN» / «Mẫu 03».

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`nghiem-thu-detail-bff-endpoints.md`](nghiem-thu-detail-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`nghiem-thu-detail-action-tree.md`](nghiem-thu-detail-action-tree.md) | 7 tree + share/reuse |
| [`nghiem-thu-detail-real-data.md`](nghiem-thu-detail-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page`)

Cite `docs/plan/nghiem-thu-mau/README.md` · value `mau-01`…`10` **giữ** · Label = TT 41 PL IV Mẫu 01 §1.2.1.

| ID | Current (native) | New (SSOT plan + live DTO) | Surface |
|----|------------------|----------------------------|---------|
| GAP-MOB-NT-DETAIL-01 | List row `toast('NT-*')` · **không** `#sc-nghiem-thu-detail` | Design gen dual screen · entry row list · **cấm** Dev theo toast | sheet→screen |
| GAP-MOB-NT-LABEL-01 | Demo row-sub «Mẫu 03» | Display `TemplateLabel` MAU-10 · value API `mau-01`…`10` **giữ** · **cấm** «Mẫu nghiệm thu NN» | ListRow |
| GAP-MOB-NT-SCORE-01 | Không có Kết quả / tiêu chí | `ResultCode` `pass`/`fail`/`deduct` + `ResultNote` + `scores[]` criteria init-data (`pass`/`fail`/`n_a`) | Select + checklist |
| GAP-MOB-NT-BIND-01 | Không GET | `GET patrol/nghiem-thu/{id}` → `NghiemThuDto` (Scores detail-only) | form |
| GAP-MOB-NT-SAVE-01 | Không PUT | Edit **Lưu** = `PUT patrol/nghiem-thu/{id}` `UpdateNghiemThuRequest` · **cùng slug** | TextButton |
| GAP-MOB-NT-MEDIA-01 | Không gallery | FileService `mediaIds` guid[] max 10 · resign GET object · **cấm** `files-nt` | PhotoRow |
| GAP-MOB-NT-MODE-01 | — | View **Đóng** → list · Edit **Lưu/Hủy** | nav |
| GAP-MOB-NT-DEL-01 | DELETE live web | P1 mobile **OUT** trừ Design chốt | — |
| GAP-MOB-NT-BFF-01 | CTX ghi BFF gap | Catch-all `MobileApiProxyController` đã proxy `{**path}` · **cấm** controller NT mới | BFF |
| GAP-MOB-NT-SCHEMA-01 | `Schema_NghiemThuMau` + `rmms_nghiem_thu_score` **đã** có | Step 4b **SKIP** · SA confirm only | schema |

**Không** đổi (OUT): `#sc-nghiem-thu` list owner · `#sc-nghiem-thu-create` · hub `patrol-home` · web `/nghiem-thu/:id` queue này · Step 4b / MIG.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Edit vị trí · deny → reuse `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera | **yes** | Gallery + thêm ảnh/video · FileService · max 10 |
| Offline | **yes** | fail GET/PUT → toast · **cấm** fake 200 / fake NT-* |
| Map | n/a | `map: none` |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface detail. Shell Tab 5 **giữ** (tab field active khi entry từ list). **Không** segment trên sheet (`GAP-TAB-01`).

## § Demo dual

HTML P1 **chưa** screen detail (GAP-MOB-NT-DETAIL-01). Design **phải** gen cùng copy VN · cùng zone ids · `#sc-nghiem-thu-detail` · `DES-MOB-NGHIEM-THU-DETAIL` · iOS + Android. Entry hiện: row tap `#sc-nghiem-thu` `toast('NT-20260906-0001')`. **Cấm** invent icon ngoài sprite. **Cấm** copy «Mẫu 03» / «03 — Mặt đường» làm label ship — display = MAU-10 (`mau-02` = «Vệ sinh / vá ổ gà mặt đường»).

## controlHint — `#sc-nghiem-thu-detail` (`DES-MOB-NGHIEM-THU-DETAIL`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navClose | Đóng | BackButton / TextButton | 16 | iOS text · Android `#i-chevron-left` | View → `go('nghiem-thu')` |
| title | NT-* | TopBar title | 17 | `LinmTopBar` | `Code` từ GET · **cấm** toast làm id |
| navEdit | Sửa | TextButton | 16 | trailing View | vào Edit · **cùng slug** |
| navSave | Lưu | TextButton | 16 | trailing Edit | PUT · **cấm** enqueue |
| navCancel | Hủy | TextButton | 16 | Edit | discard → View |
| templateRow | Mẫu | ListRow View · Select Edit | label **13** / value **≥16** | `LinmListRow` | `TemplateLabel` · value `mau-01`…`10` |
| resultRow | Kết quả | Select LOOKUP_STATIC | label **13** / value **≥16** | | `pass` Đạt · `fail` Không đạt · `deduct` Khấu trừ · null draft = «Chưa đánh giá» |
| resultNote | Ghi chú kết quả | Text multiline | ≥16 | | `ResultNote` · TT 41 §1.1 |
| scoreList | Tiêu chí | Checklist | 13–16 | | `scores[]` · verdict `pass`/`fail`/`n_a` · catalog init-data · **cấm** hardcode 100+ dòng |
| routeRow | Tuyến | ListRow | label **13** / value **≥16** | | `Route` |
| kmRow | Km | ListRow | label **13** / value **≥16** | | `KmFrom` / `KmTo` optional |
| fieldRow | Hiện trường | ListRow + GPS | label **13** / value **≥16** | | `FieldInfo` · `ZoneOrgCode` |
| statusRow | Trạng thái | Select LOOKUP_STATIC | label **13** / value **≥16** | | `draft`/`in_progress`/`done`/`cancelled` · `done` ⇒ ResultCode required |
| workTime | Thời gian việc | DateTime optional | ≥16 | | `WorkStartedAt` / `WorkEndedAt` |
| note | Ghi chú | Text optional | ≥16 | | `Note` |
| attachRow | Đính kèm | PhotoRow / gallery | label **13** | FileService | `MediaIds` max 10 · resign · **cấm** URL |
| assignee | (ẩn P1) | derived | — | auth | `AssigneeCode` required PUT |
| inspectedAt | (ẩn P1) | DateTime | — | GET | giữ hoặc device · required |
| toastOk | Đã lưu · NT-* | Toast | 13–16 | `LinmToast` | sau PUT 200 |
| toastFail | (fail) | Toast | 13–16 | | 4xx/404/offline · **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse |

## UNCLEAR

**none** — CTX + live `NghiemThuController` GetById/Update + MAU-10/CHI-SO/SCHEMA chốt. GAP-MOB-NT-DETAIL-01 = Design gen screen (không block handoff). DELETE = OUT P1.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `nghiem-thu-detail` / **sheet** |
| changeScope | `edit_page` |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `nghiem-thu-detail-bff-endpoints.md` |
| Action tree | `nghiem-thu-detail-action-tree.md` |
| Real-data | `nghiem-thu-detail-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | **cấm** gộp list/create · **cấm** invent detail path · **cấm** new_page typed CRUD |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T18:55:00.000Z |
| versionGate | ok |
| contentHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| ctxHash | sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380 |
| demoHash | sha256:mobile-p1-sc-nghiem-thu-row-toast-no-detail |
| taskId | `task_edea0c3a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
