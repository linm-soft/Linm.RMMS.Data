# Data-analy — nghiem-thu (controlHint · mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| title | [Mobile] [Tuần đường] -> Công tác nghiệm thu |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`list`** (STATUS · CTX) |
| changeScope | `edit_page` · NEW AutocodeTask · keep web PO/Design confirmed |
| status | **confirmed** |
| taskId | `task_1bd5874a` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU` · hub `#row-nghiem-thu` |
| ctx | `docs/context/features/nghiem-thu.md` · peers `nghiem-thu-create` · `nghiem-thu-detail` · `patrol-home` |
| be | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu` (catch-all proxy) |
| generatedAt | `2026-09-19T15:29:13.000Z` |

**Cấm:** watermark Gói · invent `api/v1/nghiem-thu` / `files-nt` · gộp create/detail vào slug list · gộp maintenance WO · reuse `rmms_patrol_sessions` · ERP.* · `mfeStdUrl` trên native · system alert · ship list từ `demoItems`.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`nghiem-thu-bff-endpoints.md`](nghiem-thu-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`nghiem-thu-action-tree.md`](nghiem-thu-action-tree.md) | 7 tree + share/reuse |
| [`nghiem-thu-real-data.md`](nghiem-thu-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · mobile lane)

| ID | Current | New (DoD) | Surface |
|----|---------|-----------|---------|
| GAP-MOB-NT-LIST-01 | Web Kind B `/nghiem-thu` **done** · native list **chưa** ship | Native `#sc-nghiem-thu` «Công tác nghiệm thu» · back `patrol-home` | list |
| GAP-MOB-NT-DATA-01 | Demo 2 rows toast code · **không** BFF bind | `GET patrol/nghiem-thu` via Mobile.Bff · empty/error chrome · **cấm** demoItems SSOT | list |
| GAP-MOB-NT-ROW-01 | Row `onclick=toast(NT-*)` | Row tap → `nghiem-thu-detail` (sibling) · pass `Id` | list → detail |
| GAP-MOB-NT-CREATE-01 | Nav **Tạo** → `go('nghiem-thu-create')` (demo) | Giữ CTA · owner sibling create · **cấm** gộp form vào list | nav |
| GAP-MOB-NT-BFF-01 | CTX ghi «Mobile.Bff chưa proxy» | Catch-all `MobileApiProxyController` đã cover `patrol/nghiem-thu*` · **cấm** invent controller · verify live | BFF |
| GAP-MOB-NT-FILTER-01 | Demo search placeholder «Tìm mẫu nghiệm thu…» | `LinmSearchField` · query `search` (+ optional status/route/templateType P1 sheet) | filter |

**Không** đổi (OUT / keep): web PO/Design/SA/TL/Dev/QA/Review artifacts · web Full-page form · FileService path · 10 mẫu `mau-01`…`10` · status enum CLOSED · DOMAIN Patrol · **cấm** Step 4b / MIG ở role này.

**Giữ** web closed gaps: TMPL/STATUS/FORM/DOMAIN/API.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a list | create/detail field |
| Camera | n/a list | FileMulti trên create · FileService |
| Offline | yes | fail GET → empty + toast · queue sibling offline nếu có · **cấm** fake NT-* |
| Map | n/a | `map: none` |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface list — shell Tab 5: tab **`field`** active (`data-tab="field"`).

## § Demo dual

Cùng copy VN · cùng `#sc-nghiem-thu` · `#row-nghiem-thu` · `#i-check` · `#i-search` · `#i-chevron-left/right`. iOS back «Tuần đường» · Android icon-btn. **Cấm** invent icon ngoài demo sprite.

## controlHint — `#sc-nghiem-thu` (`DES-MOB-NGHIEM-THU`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | BackButton | 16 | `LinmTopBar` `#i-chevron-left` | `go('patrol-home')` |
| title | Công tác nghiệm thu | TopBar title | 17 | `LinmTopBar` | fixed |
| navCreate | Tạo | TextButton | 16 | trailing | `go('nghiem-thu-create')` · sibling |
| search | Tìm mẫu nghiệm thu… | SearchField | ≥16 | `LinmSearchField` `#i-search` | query `search` |
| rowIcon | (check) | Icon | — | `#i-check` | green/blue per status |
| rowCode | NT-* | Text title | ≥16 | `LinmListRow` | DTO `Code` |
| rowSub | Mẫu · tuyến · Km / media | Text subtitle | 13 | | `TemplateType` · `Route` · `KmFrom` |
| rowStatus | Nháp / Đang NT / Hoàn thành / Hủy | Badge | 13 | StatusBadge | map init-data |
| rowChevron | (chev) | Chevron | — | `#i-chevron-right` | detail |
| empty | (trống) | EmptyChrome | 13–16 | | 0 items · **cấm** fake |
| toastFail | (fail) | Toast | 13–16 | `LinmToast` | 4xx/offline · **cấm** alert |

## Hub entry — `#row-nghiem-thu` (patrol-home)

| Field | VN | controlHint | Notes |
|-------|----|-------------|-------|
| rowTitle | Công tác nghiệm thu | ListRow | `go('nghiem-thu')` |
| rowSub | 10 mẫu · ảnh / video hiện trường | Text 13 | copy demo |
| icon | check | `#i-check` green | **cấm** invent |

## Status VN (init-data live · CLOSED)

| API | Label VN | Badge demo |
|-----|----------|------------|
| `draft` | Nháp | blue |
| `in_progress` | Đang NT | info |
| `done` | Hoàn thành | green («Xong» demo → ship **Hoàn thành**) |
| `cancelled` | Hủy | gray |

## TemplateType (init-data · CLOSED interim)

`mau-01`…`mau-10` · label `Mẫu nghiệm thu 01`…`10` — list hiển thị label rút gọn OK · rename copy = P2.

## UNCLEAR

**none** — web gaps CLOSED · API live · Mobile catch-all proxy · siblings create/detail đã `pending_confirm`.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `nghiem-thu-real-data.md` |
| bff | **PASS** · `nghiem-thu-bff-endpoints.md` |
| action-tree | **PASS** · `nghiem-thu-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON · **keep** web requirement · § Delta mobile only |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | Design web **giữ** · Design mobile gen dual prototype sau PO |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-19T15:29:13.000Z |
| versionGate | ok |
| contentHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| ctxHash | sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859 |
| demoHash | sha256:mobile-p1-sc-nghiem-thu-zones |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
