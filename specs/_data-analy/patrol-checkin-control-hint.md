# Data-analy — patrol-checkin (controlHint)

| | |
|---|---|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_7e0ff15b` |
| autoApprove | `ON` |
| demo | `specs/patrol-checkin/ui/prototype/{ios,android}/index.html` `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` |
| ctx | `docs/context/features/patrol-checkin.md` · `mobile-bff-file.md` · `patrol.md` §3 Kind E |
| prior | pipeline review PASS `task_370526d9` · GAP review 2026-09-12 photo + plan-points |
| generatedAt | `2026-09-12T12:38:16.000Z` |

**Cấm:** watermark Gói · invent `api/v1/patrol-checkin` · gộp `patrol-pin` CTA · **fake lat/lng** · ERP.* · mfeStdUrl · system alert · invent `api/v1/mobile-files`.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`patrol-checkin-bff-endpoints.md`](patrol-checkin-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`patrol-checkin-action-tree.md`](patrol-checkin-action-tree.md) | 7 tree + share/reuse |
| [`patrol-checkin-real-data.md`](patrol-checkin-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`edit_page` · `task_7e0ff15b`)

| ID | Current (native live) | New (DoD edit) | Surface |
|----|----------------------|----------------|---------|
| GAP-MOB-CI-PHOTO-UP-01 | PhotoRow chỉ `photoLocalIds` UUID local · **chưa** kho FileService | Upload `files/*` (init→PUT→commit) · body check-in = `attachmentId[]` (FileService) · preview `GET /files/{id}/object` JWT | PhotoRow + BFF file |
| GAP-MOB-CI-PLAN-BE-01 | `planLat/planLng` = GPS hiện tại → distance≈0 · banner luôn đúng điểm | Đối soát vs **plan-points từ BE khi có** · haversine nearest · `matchOk` thật · **cấm** gán plan=GPS làm SSOT | banner + Điểm KH |
| GAP-MOB-CI-FAKE-GPS-01 | Live GPS pin OK (cleanup_mock) | Giữ live GPS · **cấm** fake lat/lng / demo Phước Dinh | Định vị ghim |
| — keep | Sheet zones / kit / leave / detail | **Không** đổi controlHint VN/kit (PO/Design artifacts giữ) | sheet |

**OUT pack:** web Kind B CRUD · tracks/coverage/kpi · `attendance` · invent plan-points path khác DOMAIN-MAP (SA chốt Kind E).

## Tech factors

| Factor | P1 edit | Notes |
|--------|---------|-------|
| GPS | **yes** | Live fix · **cấm** fake · distance vs BE plan khi live |
| Camera | **yes** | capture → upload FileService trước/submit · không chỉ local id |
| File attach | **yes** | `mobile-bff/api/v1/files/*` · sibling `mobile-bff-file` · GAP-MOB-BFF-FILE-01 nếu NuGet thiếu |
| Offline | yes | queue local + sync file + check-in · sibling `patrol-offline` |
| Map | n/a sheet | |
| Biometric / Push | n/a | |

## § Tab index

`tabs: none` — sheet overlay · **không** segment (`GAP-TAB-01`).

## § Demo dual

Cùng copy VN · `#i-camera` · banner đúng/sai · toast. UI prototype **không** đổi zone id — edit = data/API bind.

## controlHint — `#sheet-checkin` (giữ · không redesign)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| sheetTitle | Ghi điểm tuần | SheetTitle | 17 | `LinmBottomSheet` | `DES-MOB-PAT-CHECKIN-SHEET` |
| navCancel | Hủy | TextButton | 16 | leading | `DES-MOB-LEAVE` |
| navSave | Lưu | TextButton | 16 | trailing bold | submit |
| matchBanner | Đúng/Sai điểm · {d} m · ±{a} m | Banner | 13 | ok/warn | `DES-MOB-LOC-MISMATCH` · vs **BE plan** khi có |
| planPoint | Điểm kế hoạch * | Text (readonly) | 13 / ≥16 | `LinmTextField` | label từ BE plan-points / session |
| routeChainage | Tuyến / lý trình * | Text (readonly) | 13 / ≥16 | `LinmTextField` | `Route` session |
| gpsPinned | Định vị ghim tự động * | Text (readonly) | 13 / ≥16 | `LinmTextField` | **live GPS only** |
| distPlan | Cách điểm KH * | Text (readonly) | 13 / ≥16 | `LinmTextField` | haversine vs plan BE |
| content | Nội dung | TextArea | 13 / ≥16 | `LinmTextArea` | |
| photos | Ảnh | PhotoRow | — | + `#i-camera` | upload → `attachmentId` |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | capture + file commit |
| btnSave | Ghi nhận điểm tuần | PrimaryButton | 16 | `LinmPrimaryButton` | chặn khi `matchOk=false` |
| btnCancelFooter | Hủy | SecondaryButton | 16 | | |
| leave* | Bỏ thay đổi? | Modal | | `DES-MOB-LEAVE` | |
| toastOk / toastBlock | … | Toast | 13–16 | `LinmToast` | |

## controlHint — `#sc-checkin-detail` (giữ)

| Field | VN | controlHint | Notes |
|-------|----|-------------|-------|
| detailTitle | Ghi điểm tuần | TopBar | `DES-MOB-CI-DETAIL` |
| savedBanner / planRow / distRow | … | ListRow / Banner | read cùng slug |
| photos | Ảnh đã lưu | PhotoRow | preview qua `GET files/{id}/object` khi có attachmentId |

## UNCLEAR

**none** — DoD edit chốt từ review GAP · plan-points path = GAP SA nếu BE chưa expose (không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **sheet** |
| changeScope | `edit_page` · **giữ** `po/requirement.md` · Design dual · analy § Delta only |
| phase_from / phase_to | `data_analy` **done** → `po` (delta confirm) |
| BFF / Real / Tree | 3 sibling files dưới `_data-analy/` |
| Next | `/agent-po-mobile` · autoApprove ON |
| DoD edit | FileService upload · BE plan-points khi có · cấm fake GPS |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T12:38:16.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
