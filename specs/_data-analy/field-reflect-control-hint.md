# Data-analy — field-reflect (controlHint)

| | |
|---|---|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` scan) · **demo surface** = full screen `#sc-field-reflect` (không `#sheet-*`) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_d7dd64c8` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · checklist `#ak32-chk-reflect-{ios,and}` |
| ctx | `docs/context/features/field-reflect.md` · `patrol-home.md` · `cam-patrol.md` · `incident.md` · `asset-kcht-32.md` · design §5b bước 1 |
| generatedAt | `2026-08-29T05:12:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/field-reflect` · gộp `cam-patrol` / `inc-form` / sheet-incident · fake lat/lng · ERP.* · mfeStdUrl · system alert · badge P1/P2 header.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`field-reflect-bff-endpoints.md`](field-reflect-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`field-reflect-action-tree.md`](field-reflect-action-tree.md) | 7 tree + share/reuse |
| [`field-reflect-real-data.md`](field-reflect-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-FIELD-SCR-01 | Stub / toast / missing | Full `#sc-field-reflect` «Ghi nhận hư hỏng» · back Tuần đường | screen |
| GAP-MOB-FIELD-KIND-01 | — | Pill Hư / Mất / Hỏng · `DES-MOB-FIELD-KIND` | pills |
| GAP-MOB-FIELD-PHOTO-01 | — | PhotoRow + `#i-camera` · `openCapture('reflect')` | camera |
| GAP-MOB-FIELD-DET-01 | — | Card Nhận diện · Mức · Vị trí đã chốt | list rows |
| GAP-MOB-FIELD-CHK-01 | — | Checklist theo loại TS (PAVEMENT demo) | checkboxes |
| GAP-MOB-FIELD-CREATE-01 | — | Primary «Tạo vấn đề» → POST incident | CTA |
| GAP-MOB-FIELD-DRAFT-01 | — | Secondary «Lưu nháp mất sóng» → offline | CTA |
| GAP-MOB-FIELD-DATA-01 | — | sessions + detect + incident via Mobile.Bff | BFF |
| GAP-MOB-FIELD-PACK-01 | — | STATUS packKind=`sheet` vs demo full screen — Design/PO chốt | meta |

**Không** đổi (OUT pack): `cam-patrol` finder · `inc-form` / `#sheet-incident` · `cam-view` · web `camera-connect` · Twin/YOLO local.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Vị trí đã chốt · accuracy · deny → `DES-MOB-GPS-DENY` (reuse) · **cấm** fake |
| Camera | **yes** | Capture slot reflect · PhotoRow |
| Offline | **yes** | «Lưu nháp mất sóng» → queue / `patrol-offline` · **cấm** fake 200 |
| Map | n/a | Entry từ hub · không embed map trên màn này |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — màn full trong tab `field` shell · **không** segment riêng trên surface (`GAP-TAB-01`). Shell Tab 5 **giữ**. Entry từ hub `patrol-home` (tab field).

## § Demo dual

Cùng copy VN · cùng `#i-camera` · cùng kind pills Hư/Mất/Hỏng · cùng card «Ổ gà · Mặt đường» / «Cao» / «QL.1 · Km 1556+040 · ±4 m» · cùng CTA «Tạo vấn đề» / «Lưu nháp mất sóng» · checklist PAVEMENT. **Cấm** invent icon. Android top-bar icon-btn vs iOS nav-btn text — Design parity chrome (không đổi field).

## controlHint — `#sc-field-reflect`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| screenTitle | Ghi nhận hư hỏng | TopBar title | 17 | `LinmTopBar` | `DES-MOB-FIELD-REFLECT` |
| navBack | Tuần đường | BackButton | 16 | chevron | `go('patrol-home')` |
| kindLabel | Loại phản ánh | SectionLabel | **13** | | |
| kindPills | Hư / Mất / Hỏng | PillSelect (single) | 13–16 | `LinmSegment` / pills | `DES-MOB-FIELD-KIND` · default Hư |
| photoLabel | Ảnh hiện trường | SectionLabel | **13** | | |
| photos | Ảnh | PhotoRow | — | slots + filled | attach |
| addPhoto | (camera slot) | CameraButton | — | `LinmIconButton` `#i-camera` | `openCapture('reflect')` |
| detectRow | Nhận diện | ListRow (readonly) | 13 / ≥16 | | bind detect `DefectClass` · demo «Ổ gà · Mặt đường» |
| severityRow | Mức | ListRow + Badge | 13 / ≥16 | badge orange | bind detect `Severity` · demo «Cao» |
| locationRow | Vị trí đã chốt | ListRow (readonly) | 13 / ≥16 | | route · Km · ±m · GPS chốt |
| chkLabel | Checklist theo loại tài sản | SectionLabel | **13** | | |
| checklist | checklist items | CheckboxList | 13 / ≥16 | `chk-row` | PAVEMENT SSOT · filter by kind pill |
| btnCreate | Tạo vấn đề | PrimaryButton | 16 | `LinmPrimaryButton` | submit · POST incident · cùng slug |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | 16 | `LinmSecondaryButton` | offline queue · reuse `patrol-offline` |
| toastOk | Đã tạo vấn đề SC-… · gắn ca tuần | Toast | 13–16 | `LinmToast` | sau Create |
| toastDraft | Đã lưu nháp · Lưu trữ | Toast | 13–16 | `LinmToast` | sau draft |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse chrome |

## UNCLEAR

**none** — demo + design §5b + peers chốt · media/checklist = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **sheet** (surface screen — GAP-MOB-FIELD-PACK-01) |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `field-reflect-bff-endpoints.md` |
| Action tree | `field-reflect-action-tree.md` |
| Real-data | `field-reflect-real-data.md` |
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
| generatedAt | 2026-08-29T05:12:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-control-hint-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
