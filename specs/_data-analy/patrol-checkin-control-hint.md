# Data-analy — patrol-checkin (controlHint)

| | |
|---|---|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_4ef69f42` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` |
| ctx | `docs/context/features/patrol-checkin.md` · `patrol.md` §3 Kind E · `patrol-pin.md` handoff · `patrol-home.md` · `patrol-map.md` |
| generatedAt | `2026-08-28T19:52:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/patrol-checkin` · gộp `patrol-pin` CTA · fake lat/lng · ERP.* · mfeStdUrl · system alert.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`patrol-checkin-bff-endpoints.md`](patrol-checkin-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`patrol-checkin-action-tree.md`](patrol-checkin-action-tree.md) | 7 tree + share/reuse |
| [`patrol-checkin-real-data.md`](patrol-checkin-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-CI-SHEET-01 | Toast / stub hoặc gộp pin | Sheet `#sheet-checkin` **Ghi điểm tuần** dual | sheet |
| GAP-MOB-CI-MATCH-01 | — | Banner đúng/sai điểm · chặn Lưu khi sai | `DES-MOB-LOC-MISMATCH` |
| GAP-MOB-CI-GPS-01 | — | Prefill định vị ghim · accuracy · **cấm** fake | GPS + pin handoff |
| GAP-MOB-CI-PHOTO-01 | — | PhotoRow + capture `#i-camera` | camera |
| GAP-MOB-CI-DATA-01 | — | GET sessions prefill · POST check-ins (GAP nếu thiếu BE) | BFF |
| GAP-MOB-CI-DETAIL-01 | — | Read `#sc-checkin-detail` cùng slug | detail |

**Không** đổi (OUT pack): web Kind B session CRUD · Kind E tracks/coverage/kpi · chấm công `attendance` · form sự cố.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Prefill ghim · distance-to-plan · deny → modal `DES-MOB-GPS-DENY` (reuse) |
| Camera | **yes** | `openCapture('checkin')` · attach photo-row |
| Offline | yes | Sai mạng → queue local / sibling `patrol-offline` · sheet vẫn mở |
| Map | n/a sheet | Entry từ map · không embed map trên sheet |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — sheet overlay · **không** segment riêng (`GAP-TAB-01`). Shell Tab 5 **giữ** khi đứng hub/map dưới sheet.

## § Demo dual

Cùng copy VN · cùng `#i-camera` · cùng field labels · banner `Đúng điểm · 18 m · định vị ±4 m · ghim tự động` / `Sai điểm · 86 m…` · toast Lưu / Ghi nhận. **Cấm** invent icon. Android thiếu `section-label` Ảnh — Design parity → thêm label (iOS SSOT).

## controlHint — `#sheet-checkin`

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| sheetTitle | Ghi điểm tuần | SheetTitle | 17 | `LinmBottomSheet` nav | `DES-MOB-PAT-CHECKIN-SHEET` |
| navCancel | Hủy | TextButton | 16 | leading | → leave modal `DES-MOB-LEAVE` |
| navSave | Lưu | TextButton | 16 | trailing bold | submit · cùng slug |
| matchBanner | Đúng điểm · {d} m · định vị ±{a} m · ghim tự động | Banner | 13 | ok green / warn red | `DES-MOB-LOC-MISMATCH` · sai → disable primary |
| planPoint | Điểm kế hoạch * | Text (readonly) | label **13** / field **≥16** | `LinmTextField` | demo `Km 1561+134 · Phước Dinh` |
| routeChainage | Tuyến / lý trình * | Text (readonly) | 13 / ≥16 | `LinmTextField` | bind `Route` session |
| gpsPinned | Định vị ghim tự động * | Text (readonly) | 13 / ≥16 | `LinmTextField` | lat,lng · ±N m · **cấm** fake |
| distPlan | Cách điểm KH * | Text (readonly) | 13 / ≥16 | `LinmTextField` | `{m} m · Đúng điểm` / `Sai điểm` |
| content | Nội dung | TextArea | 13 / ≥16 | `LinmTextArea` | editable |
| photos | Ảnh | PhotoRow | — | slots + `#i-camera` | capture checkin |
| addPhoto | (camera slot) | CameraButton | — | `LinmIconButton` `#i-camera` | `openCapture('checkin')` |
| btnSave | Ghi nhận điểm tuần | PrimaryButton | 16 | `LinmPrimaryButton` | `saveCheckin()` · chặn khi sai điểm |
| btnCancelFooter | Hủy | SecondaryButton | 16 | `LinmSecondaryButton` | close sheet |
| leaveTitle | Bỏ thay đổi? | ModalTitle | 17 | in-app | `DES-MOB-LEAVE` |
| leaveBody | Nội dung chưa lưu sẽ mất. | ModalBody | 13 | in-app | |
| leaveConfirm | Bỏ thay đổi | PrimaryButton | 16 | | toast hủy |
| leaveKeep | Tiếp tục sửa | SecondaryButton | 16 | | |
| toastOk | Đã ghi điểm tuần · … | Toast | 13–16 | `LinmToast` | sau Lưu / Ghi nhận |
| toastBlock | Chặn — không đúng điểm kế hoạch | Toast | 13–16 | `LinmToast` | warning |

## controlHint — `#sc-checkin-detail` (cùng slug · read)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| detailTitle | Ghi điểm tuần | TopBar title | 17 | `LinmTopBar` | `DES-MOB-CI-DETAIL` |
| backCa | Ca | BackButton | 16 | chevron | `go('patrol-detail')` / hub |
| savedBanner | Đã lưu · {time} | Banner | 13 | ok | |
| planRow | Điểm KH | ListRow | 13 / ≥16 | | |
| distRow | Cách điểm | ListRow | 13 / ≥16 | | |

## UNCLEAR

**none** — demo sheet + CTX Kind E path chốt · BE check-ins controller = GAP (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **sheet** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| BFF | `patrol-checkin-bff-endpoints.md` |
| Action tree | `patrol-checkin-action-tree.md` |
| Real-data | `patrol-checkin-real-data.md` |
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
| generatedAt | 2026-08-28T19:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
