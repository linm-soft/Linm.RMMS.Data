# Data-analy — nghiem-thu-create (controlHint · mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS · CTX) · demo surface = full screen `#sc-nghiem-thu-create` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_eb0e541f` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE` · entry list nav **Tạo** |
| ctx | `docs/context/features/nghiem-thu-create.md` · peers `nghiem-thu` · `nghiem-thu-detail` · `patrol-home` · `mobile-bff-file` |
| be | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu` (+ `files/*`) |
| generatedAt | `2026-09-19T16:50:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/nghiem-thu-create` / `nghiem-thu-files` · gộp list/detail vào slug create · ERP.* · `mfeStdUrl` · system alert · ship form từ `demoItems` · persist FileService URL.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`nghiem-thu-create-bff-endpoints.md`](nghiem-thu-create-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`nghiem-thu-create-action-tree.md`](nghiem-thu-create-action-tree.md) | 7 tree + share/reuse |
| [`nghiem-thu-create-real-data.md`](nghiem-thu-create-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT demo + CTX) | Surface |
|----|------------------|------------------------|---------|
| GAP-MOB-NTC-ENTRY-01 | List nav **Tạo** demo `go('nghiem-thu-create')` | Ship sheet owner `#sc-nghiem-thu-create` · entry from `nghiem-thu` | entry |
| GAP-MOB-NTC-SCR-01 | Stub / missing native | Full «Tạo nghiệm thu» · `DES-MOB-NGHIEM-THU-CREATE` | sheet→screen |
| GAP-MOB-NTC-MAU-01 | Demo row «03 — Mặt đường» | `LOOKUP_STATIC` `mau-01`…`mau-10` via `GET init-data` · tap → picker | ListRow / Select |
| GAP-MOB-NTC-LOC-01 | Demo «Khu I · GPS hiện trường» | Zone + device GPS · bind `ZoneOrgCode` · `Route` · `FieldInfo` · optional Km | ListRow + GPS |
| GAP-MOB-NTC-MEDIA-01 | Demo toast FileService | Camera/picker · `POST files/*` · persist `mediaIds` guid[] max 10 · **cấm** URL | ListRow / PhotoRow |
| GAP-MOB-NTC-SAVE-01 | Demo toast «Lưu nháp» | Trailing **Lưu** = `POST patrol/nghiem-thu` `Status=draft` · **cùng slug** · **cấm** enqueue | TextButton |
| GAP-MOB-NTC-CANCEL-01 | demo `go('nghiem-thu')` | Hủy / back → list · discard unsaved | BackButton |
| GAP-MOB-NTC-REQ-01 | Demo 3 rows only | API required: `AssigneeCode` · `InspectedAt` · `Route` · `FieldInfo` · `TemplateType` · `Status` — Design surface / bind auth+device | form |
| GAP-MOB-NTC-COPY-01 | Demo «03 — Mặt đường» | init-data Label = `Mẫu nghiệm thu 03` — Design chốt display (subtitle OK) · **không** invent mau name | meta |
| GAP-MOB-NTC-BFF-01 | CTX Mobile.Bff gap | Catch-all proxy covers path · FileService live `files/*` · verify | BFF |

**Không** đổi (OUT): `#sc-nghiem-thu` list · `nghiem-thu-detail` Xem/Sửa · hub `patrol-home` · web Full form · Step 4b / MIG (schema live).

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Vị trí hiện trường · deny → reuse `DES-MOB-GPS-DENY` · **cấm** fake |
| Camera | **yes** | Ảnh + video · FileService · max 10 |
| Offline | **yes** | fail POST → toast · optional local draft queue · **cấm** fake 200 / fake NT-* |
| Map | n/a | `map: none` — không embed map |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface create — demo `data-tab="field"`. Shell Tab 5 **giữ** (tab field active khi entry từ list). **Không** segment trên sheet (`GAP-TAB-01`).

## § Demo dual

Cùng copy VN · cùng `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE` · 3 rows Mẫu / Vị trí / Đính kèm · title «Tạo nghiệm thu» · trailing **Lưu**. iOS: nav-btn text **Hủy**. Android: icon-btn chevron `#i-chevron-left` + **Lưu** text. **Cấm** invent icon ngoài sprite.

## controlHint — `#sc-nghiem-thu-create` (`DES-MOB-NGHIEM-THU-CREATE`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navCancel | Hủy | BackButton / TextButton | 16 | iOS text · Android `#i-chevron-left` | `go('nghiem-thu')` · discard |
| title | Tạo nghiệm thu | TopBar title | 17 | `LinmTopBar` | fixed |
| navSave | Lưu | TextButton | 16 | trailing | submit draft · POST cùng slug · **cấm** enqueue |
| templateRow | Mẫu | ListRow → Select / LOOKUP_STATIC | label **13** / value **≥16** | `LinmListRow` | `mau-01`…`10` · demo «03 — Mặt đường» |
| locationRow | Vị trí | ListRow + GPS | label **13** / value **≥16** | | Khu + GPS · `ZoneOrgCode` · `Route` · `FieldInfo` |
| attachRow | Đính kèm | ListRow / PhotoRow | label **13** / value **≥16** | File picker | Ảnh + video · FileService · max 10 |
| assignee | (ẩn P1) | derived | — | auth profile | `AssigneeCode` required API · **cấm** invent field path |
| inspectedAt | (ẩn P1) | DateTime derived | — | device UTC | `InspectedAt` = now on save |
| status | (ẩn P1) | enum | — | | Lưu nháp → `draft` |
| toastOk | Đã lưu nháp · NT-* | Toast | 13–16 | `LinmToast` | sau POST 200 · optional nav detail |
| toastFail | (fail) | Toast | 13–16 | | 4xx/offline · **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse |

## UNCLEAR

**none** — CTX + demo dual + live `NghiemThuController` / `CreateNghiemThuRequest` chốt. GAP-MOB-NTC-REQ-01 / COPY-01 = Design surface (không block handoff).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `nghiem-thu-create` / **sheet** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `nghiem-thu-create-bff-endpoints.md` |
| Action tree | `nghiem-thu-create-action-tree.md` |
| Real-data | `nghiem-thu-create-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |
| note | **cấm** gộp list/detail · **cấm** invent create path |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T16:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| ctxHash | sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f |
| demoHash | sha256:mobile-p1-sc-nghiem-thu-create-zones |
| taskId | `task_eb0e541f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
