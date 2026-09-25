# Data-analy — nghiem-thu (controlHint · mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`list`** (STATUS · CTX) |
| changeScope | `edit_page` · NEW AutocodeTask · keep PO/Design/SA/TL/Dev/QA/Review artifacts |
| status | **confirmed** |
| taskId | `task_b82ebc4c` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU` · hub `#row-nghiem-thu` |
| ctx | `docs/context/features/nghiem-thu.md` · peer catalog `nghiem-thu-mau.md` · siblings create/detail |
| plan cite | `docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md` |
| be | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu` (catch-all) |
| generatedAt | `2026-09-20T00:39:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/nghiem-thu` / `files-nt` · gộp create/detail vào slug list · gộp `csdl-so-08` / `kcht-cong-trinh` / WO / `rmms_patrol_sessions` · ERP.* · `mfeStdUrl` native · label «Mẫu nghiệm thu NN» · invent TemplateType value ngoài `mau-01`…`10` · Step 4b / MIG ở role này · enqueue web Field.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`nghiem-thu-bff-endpoints.md`](nghiem-thu-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`nghiem-thu-action-tree.md`](nghiem-thu-action-tree.md) | 7 tree + share/reuse |
| [`nghiem-thu-real-data.md`](nghiem-thu-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · cite `nghiem-thu-mau` · HARD)

| ID | Current (ship / interim) | New (DoD) | Surface |
|----|--------------------------|-----------|---------|
| GAP-MOB-NT-MAU-01 | init-data Label «Mẫu nghiệm thu 0N» / demo «03 — Mặt đường» | Label = **MAU-10** TT 41 PL IV Mẫu 01 §1.2.1 · value `mau-01`…`10` **GIỮ** · **cấm** «Mẫu nghiệm thu NN» | list + init |
| GAP-MOB-NT-RESULT-01 | List chỉ badge Status · không ResultCode | Row badge **Kết quả** khi có: `pass`/`fail`/`deduct` → Đạt / Không đạt / Khấu trừ · null draft → ẩn / «Chưa đánh giá» | list |
| GAP-MOB-NT-ROWSUB-01 | rowSub raw / «Mẫu 03» | rowSub = **`{TemplateLabel MAU-10} · {Route} Km {KmFrom}`** · media hint giữ | list |
| GAP-MOB-NT-INIT-01 | Statuses + TemplateTypes (label interim) | init-data: TemplateTypes[+`criteria[]`] · `ResultCodes[]` · **cấm** hardcode 100+ tiêu chí FE | catalog |
| GAP-MOB-NT-SCORE-01 | Entity chưa Result*/Scores (Schema_NghiemThu) | Schema_NghiemThuMau: ResultCode · ResultNote · Work* · child `scores[]` — **owner create/detail** · list chỉ hiển thị ResultCode | sibling + SA |
| GAP-MOB-NT-SCHEMA-01 | Schema_NghiemThu live | SA pair CLI `Schema_NghiemThuMau` · data_analy **SKIP** Step 4b | SA |
| GAP-MOB-NT-SLUG-01 | 1 slug=1 action | list labels only · create form · detail bind — **cấm** gộp | queue |
| GAP-MOB-NT-WEB-01 | Web Field `/nghiem-thu` done | Web Full-page **OUT** queue `qlbd-mobile` turn này | queue |

**Không** đổi (OUT / keep): FileService `mediaIds` · Mobile.Bff catch-all · DOMAIN Patrol · status enum `draft`/`in_progress`/`done`/`cancelled` · list chrome (search/back/Tạo) · siblings pending_confirm · PO/Design dual prototype paths · **cấm** invent files-nt.

**Giữ** closed mobile list GAPs: LIST/DATA/ROW/CREATE/BFF/FILTER (ship base) — delta này = MAU + Result overlay.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a list | create/detail |
| Camera | n/a list | FileMulti create · FileService |
| Offline | yes | fail GET → empty + toast · **cấm** fake NT-* |
| Map | n/a | `map: none` |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface list — shell Tab 5: tab **`field`** active (`data-tab="field"`).

## § Demo dual

Cùng copy VN · `#sc-nghiem-thu` · `#row-nghiem-thu` · `#i-check` · `#i-search` · `#i-chevron-left/right`. iOS back «Tuần đường» · Android icon-btn. Demo row copy «Mẫu 03» → ship map `mau-02` Label MAU-10 — **cấm** invent value.

## controlHint — `#sc-nghiem-thu` (`DES-MOB-NGHIEM-THU`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | BackButton | 16 | `LinmTopBar` `#i-chevron-left` | `go('patrol-home')` |
| title | Công tác nghiệm thu | TopBar title | 17 | `LinmTopBar` | fixed |
| navCreate | Tạo | TextButton | 16 | trailing | `go('nghiem-thu-create')` · sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ≥16 | `LinmSearchField` `#i-search` | query `search` |
| rowIcon | (check) | Icon | — | `#i-check` | tint per Status / Result |
| rowCode | NT-* | Text title | ≥16 | `LinmListRow` | DTO `Code` |
| rowSub | Label MAU-10 · tuyến · Km | Text subtitle | 13 | | init-data Label · **không** raw mau-0N |
| rowStatus | Nháp / Đang NT / Hoàn thành / Hủy | Badge | 13 | StatusBadge | map Status |
| rowResult | Đạt / Không đạt / Khấu trừ | Badge | 13 | ResultBadge | map `ResultCode` · ẩn nếu null |
| rowChevron | (chev) | Chevron | — | `#i-chevron-right` | → detail |
| empty | (trống) | EmptyChrome | 13–16 | | 0 items · **cấm** fake |
| toastFail | (fail) | Toast | 13–16 | `LinmToast` | 4xx/offline · **cấm** alert |

## Hub entry — `#row-nghiem-thu` (patrol-home)

| Field | VN | controlHint | Notes |
|-------|----|-------------|-------|
| rowTitle | Công tác nghiệm thu | ListRow | `go('nghiem-thu')` |
| rowSub | 10 công việc BDTX · ảnh / video hiện trường | Text 13 | cite MAU-10 · **không** «10 mẫu placeholder» |
| icon | check | `#i-check` green | **cấm** invent |

## Status VN (init-data · CLOSED)

| API | Label VN | Badge |
|-----|----------|-------|
| `draft` | Nháp | blue |
| `in_progress` | Đang NT | info |
| `done` | Hoàn thành | green |
| `cancelled` | Hủy | gray |

## ResultCode VN (CHI-SO · NEW)

| API | Label VN | Badge |
|-----|----------|-------|
| `pass` | Đạt | green |
| `fail` | Không đạt | red |
| `deduct` | Khấu trừ | orange |
| `(null)` | Chưa đánh giá | ẩn trên list |

## TemplateType (MAU-10 · HARD)

Value **giữ** `mau-01`…`mau-10`. Label ship = bảng MAU-10 (ví dụ `mau-02` → «Vệ sinh / vá ổ gà mặt đường»). **Cấm** «Mẫu nghiệm thu 02».

## UNCLEAR

**none** — plan README/MAU-10/CHI-SO/SCHEMA cite đủ · API path giữ · Schema_NghiemThuMau → SA.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `nghiem-thu-real-data.md` |
| bff | **PASS** · `nghiem-thu-bff-endpoints.md` |
| action-tree | **PASS** · `nghiem-thu-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON · keep prior mobile Screens · § Delta MAU/Result only |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | Design keep dual prototype · overlay Result badge + Label MAU-10 · create/detail scores = sibling |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-20T00:39:00.000Z |
| versionGate | ok |
| contentHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
| ctxHash | sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659 |
| planHash | sha256:80c355a23fd164185d5641a36ad4a5ffaee59b44e1967cc2adc6ba9ff503d764 |
| demoHash | sha256:mobile-p1-sc-nghiem-thu-zones |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
