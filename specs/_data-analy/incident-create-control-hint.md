# Data-analy — incident-create (controlHint)

| | |
|---|---|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` scan) · **demo surface** = full screen `#sc-inc-form` (không `#sheet-incident`) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_5f9013dd` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-inc-form` · `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` · entry `startIncidentPick()` · FAB incident-list · asset-type CTA |
| ctx | `docs/context/features/incident-create.md` · `incident.md` · `asset-kcht-32.md` · `home.md` |
| generatedAt | `2026-08-29T00:30:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/incident-create` · gộp `field-reflect` / `#sheet-incident` / web Kind F list · fake lat/lng · ERP.* · mfeStdUrl · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`incident-create-bff-endpoints.md`](incident-create-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`incident-create-action-tree.md`](incident-create-action-tree.md) | 7 tree + share/reuse |
| [`incident-create-real-data.md`](incident-create-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-INC-CREATE-ENTRY-01 | Home quick / FAB toast hoặc stub | `startIncidentPick()` → asset-types pick → `#sc-inc-form` | entry |
| GAP-MOB-INC-CREATE-SCR-01 | Stub / missing | Full `#sc-inc-form` «Ghi sự cố» · `DES-MOB-INC-FORM` | screen |
| GAP-MOB-INC-CREATE-ASSET-01 | — | WalletCard TÀI SẢN ĐÃ CHỌN (BRIDGE demo) | card |
| GAP-MOB-INC-CREATE-KIND-01 | — | Pill Hư / Mất / Hỏng · `DES-MOB-INC-KIND` | pills |
| GAP-MOB-INC-CREATE-CHK-01 | — | Checklist theo loại TS (`data-inc-chk`) | checkboxes |
| GAP-MOB-INC-CREATE-PHOTO-01 | — | PhotoRow + `#i-camera` · `openCapture('inc-form')` | camera |
| GAP-MOB-INC-CREATE-AI-01 | — | Row «Nhận diện từ ảnh» · empty copy SSOT | list row |
| GAP-MOB-INC-CREATE-LOC-01 | — | Readonly «Vị trí đã chốt *» · GPS | field |
| GAP-MOB-INC-CREATE-SEV-01 | — | Select Mức độ · default Cao | select |
| GAP-MOB-INC-CREATE-DESC-01 | — | Textarea mô tả · placeholder SSOT | textarea |
| GAP-MOB-INC-CREATE-CTA-01 | — | Primary «Tạo vấn đề» → POST incident | CTA |
| GAP-MOB-INC-CREATE-SEC-01 | — | Secondary cam-patrol / estimate / offline draft | CTA |
| GAP-MOB-INC-CREATE-PACK-01 | — | STATUS packKind=`sheet` vs demo full screen — Design/PO chốt | meta |

**Không** đổi (OUT pack): `#sheet-incident` · `field-reflect` · `incident-list` list/detail CRUD · web Sự cố Kind F · assign/close modal web.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Vị trí đã chốt * · deny → `DES-MOB-GPS-DENY` (reuse) · **cấm** fake |
| Camera | **yes** | Capture slot `inc-form` · PhotoRow |
| Offline | **yes** | «Lưu nháp mất sóng» → queue / `patrol-offline` · **cấm** fake 200 |
| Map | n/a | Không embed map trên form |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full · demo `data-tab="home"` · **không** segment trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ home quick / FAB Vấn đề / asset-type (không đổi IA tab).

## § Demo dual

Cùng copy VN · cùng `#i-camera` · cùng kind Hư/Mất/Hỏng · cùng wallet TÀI SẢN ĐÃ CHỌN · cùng loc QL.1 · Km 1556+080 · ±5 m · cùng severity options · cùng placeholder mô tả · cùng CTA «Tạo vấn đề» / secondary 3 nút · cùng toast SC-2418. **Cấm** invent icon. Android top-bar icon-btn vs iOS nav-btn text «Thông tin tài sản» — Design parity chrome (không đổi field).

## controlHint — `#sc-inc-form`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Ghi sự cố | TopBar title | 17 | `LinmTopBar` | `DES-MOB-INC-FORM` |
| navBack | Thông tin tài sản | BackButton | 16 | chevron / icon-btn | `go('asset-type')` · Android icon-only OK |
| assetCard | TÀI SẢN ĐÃ CHỌN | WalletCard | 13 / ≥16 | `LinmWalletCard` | bind code · title/sub |
| kindLabel | Loại ghi nhận | SectionLabel | **13** | | |
| kindPills | Hư / Mất / Hỏng | PillSelect (single) | 13–16 | `LinmSegment` / pills | `DES-MOB-INC-KIND` · default Hư |
| chkLabel | Checklist theo loại | SectionLabel | **13** | | |
| checklist | checklist items | CheckboxList | 13 / ≥16 | `data-inc-chk` | theo asset code |
| photoLabel | Ảnh hiện trường | SectionLabel | **13** | | |
| photos | Ảnh | PhotoRow | — | slots + filled | attach |
| addPhoto | (camera slot) | CameraButton | — | `LinmIconButton` `#i-camera` | `openCapture('inc-form')` |
| aiRow | Nhận diện từ ảnh | ListRow | 13 / ≥16 | | empty / detect bind |
| location | Vị trí đã chốt * | TextField readonly | label **13** / value **≥16** | | GPS chốt · required UI |
| severity | Mức độ | Select | label **13** / value **≥16** | `LinmSelect` | 4 options · default Cao |
| description | Mô tả | MultilineText | label **13** / **≥16** | `LinmTextArea` | placeholder SSOT |
| btnCreate | Tạo vấn đề | PrimaryButton | 16 | `LinmPrimaryButton` | submit · POST incident · cùng slug |
| btnCam | Thu thập bằng camera | SecondaryButton | 16 | | `go('cam-patrol')` · shared_action |
| btnAssign | Giao việc xử lý | SecondaryButton | 16 | | `go('estimate')` · sibling route |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | 16 | `LinmSecondaryButton` | offline · reuse `patrol-offline` |
| toastOk | Đã tạo vấn đề SC-… · gắn tài sản đã chọn | Toast | 13–16 | `LinmToast` | sau Create 200 |
| toastDraft | Nháp mất sóng | Toast | 13–16 | | sau draft |
| toastPick | Chọn loại tài sản để ghi sự cố | Toast | 13–16 | | entry pick |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse chrome |
| homeQuick | Ghi sự cố | QuickItem | 15 / 13 | `LinmQuickItem` | entry home |
| fabCreate | Ghi sự cố | FAB | — | | entry `#sc-incident-list` |

### Entry pick (cùng flow · không surface riêng slug)

| Step | VN | controlHint | Notes |
|------|----|-------------|-------|
| pickBanner | Chọn loại tài sản để ghi sự cố | Banner | `[data-ak32-pick]` |
| assetGrid | (32 loại) | Grid / chips | reuse asset-types · click → `openIncidentForm(code)` |

## UNCLEAR

**none** — demo dual + CTX `incident.md` + live `IncidentsController` chốt · packKind sheet vs screen = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `incident-create` / **sheet** (surface screen — GAP-MOB-INC-CREATE-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `incident-create-bff-endpoints.md` |
| Action tree | `incident-create-action-tree.md` |
| Real-data | `incident-create-real-data.md` |
| Next | `/agent-po-mobile` |
| autoApprove | ON → chain PO (không chờ board) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-create-control-hint-20260829 |
| taskId | `task_5f9013dd` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
