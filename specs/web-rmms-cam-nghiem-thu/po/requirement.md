# PO — requirement — web-rmms-cam-nghiem-thu

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-nghiem-thu` |
| title | Camera phiếu nghiệm thu — role-gate + RO đối chiếu |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| contentHash | `sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` |
| writtenAt | `2026-10-01T02:25:00.000Z` |
| taskId | `task_131a0d3f` |
| demo | **N/A** · hash-skip analy · **cấm** re-scan demo |
| formPattern | Mobile list + full form · phone `max-width: 430px` · **không** ERP Modal/Slideout · Pattern B GPS · labels `useFormOptions('web-rmms-nghiem-thu')` / `nghiemThu.*` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | product `/nghiem-thu` · `/nghiem-thu/moi` · `/nghiem-thu/:id` · **cấm** invent slug |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-nghiem-thu` (queue alias) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · Patrol `nghiem-thu` · **cấm ERP.*** · **cấm** web-bff |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` · control-hint + real-data §A+§B · contentHash skip |
| citeDelta | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #6 · § Công tác nghiệm thu · Plan #7 |
| context | `docs/context/features/web-rmms-cam-nghiem-thu.md` (**created** PO) |
| peer | `web-rmms-nghiem-thu` Live NT · keep CRUD paths |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |

## 1. Goal

**Keep** NghiemThuListPage + NghiemThuFormPage (peer shipped). **Delta** `edit_page`: (1) chỉ vai **nghiệm thu** POST/PUT + RouteCapture; (2) ẩn CTA Tạo với non-NT; (3) zone RO đối chiếu ca tuần đường + finding đã **Xác nhận đạt**; (4) **giữ cấm** Giao việc · Xác nhận đạt / hoàn thành sự cố trên slug. **Không** `new_page` · **không** route mới · **không** Mục IV tiền · **không** invent CamNghiemThu*.

## 2. Persona / auth

| Who | Access |
|-----|--------|
| Nghiệm thu (`roleCaps.nghiemThu`) | NT-L full · CTA Tạo · NT-F write + capture |
| Tuần đường | **ẩn** NT-L (mặc định) · **không** write |
| Tuần kiểm | RO xem list tối thiểu (đối chiếu) · **không** write · **không** capture |
| `QL_HAT` = `HAT-TRUONG` + `HAT-PHO` only | RO xem · **không** write · **cấm** suy từ `MANAGER-RMMS` |
| Guest | Redirect login · **cấm** CRUD |

**HARD:** Nghiệm thu **không** mở ca tuần đường · **không** mở đợt tuần kiểm · **không** nút Giao việc trên NT-*.

## 3. Screens / zones

| id | zone | AC |
|----|------|-----|
| NT-00 | phone ≤430 | keep · `/align-mobile-to-mfe` · **cấm** desktop Field |
| NT-L | `/nghiem-thu` | List Live GET · search · cards · empty/error toast |
| NT-L-create | CTA Tạo | **chỉ** nghiệm thu · **ẩn** non-NT |
| NT-F-create | `/nghiem-thu/moi` | POST draft · role nghiệm thu · deny → toast/redirect |
| NT-F-edit | `/nghiem-thu/:id` | GET + PUT · write chỉ nghiệm thu · RO view nếu mở detail khác vai |
| NT-F-fields | form keep | templateType · route SearchInput · fieldInfo · assignee · resultCode · scores · inspectedAt · note · status |
| NT-F-gps | GPS | Pattern B · banner on Lưu · **cấm** fake · **cấm** pre-disable |
| NT-F-photos | RouteCapture | purpose patrol-nghiem-thu · write chỉ nghiệm thu · max PATROL_MEDIA_MAX |
| NT-RO-LINK | zone trên NT-F | Nav RO ca tuần đường cùng tuyến + finding đã đạt · **chỉ đọc** · no recheck/assign |
| NT-leave | Huỷ / Back | dirty → leaveConfirm · cancel → list |

**Leave / Out:** invent product route `/web-rmms-cam-nghiem-thu` · Giao việc · Xác nhận đạt / Hoàn thành SC · Excel · Mục IV tiền · SlaHours=24 · chấm kỳ 100 điểm trên form · invent CamNghiemThu* · `new_page` · web-bff · ERP.* · iOS/Android · DES-GRID / LinErpListFilterBar · demo SSOT · re-scan demo.

## 4. Grid AC (packKind=list · phone — DES-GRID N/A)

| AC-ID | Rule | Pass |
|-------|------|------|
| AC-G-01 | Load Live `GET patrol/nghiem-thu` via Mobile.Bff `:5202` | **cấm** demo/mock |
| AC-G-02 | Search P1 = query `search` only | keep peer |
| AC-G-03 | Empty → empty state | `nghiemThu.list.empty` |
| AC-G-04 | Error → toast + retry | **cấm** `window.alert` |
| AC-G-05 | Row: badge Status + ResultCheck · tap → `/:id` | keep |
| AC-G-06 | CTA **Tạo** visible **chỉ** nghiệm thu → `/nghiem-thu/moi` | hide non-NT |
| AC-G-07 | Non-NT (tuần đường): list **ẩn** · tuần kiểm/QL_HAT: RO list tối thiểu · **không** Tạo | UNCLEAR-NT-LIST-VIS resolved |
| AC-G-08 | Back → Field hub | keep |
| AC-G-09 | Phone ≤430 · no LinErpListFilterBar / DES-GRID-* | N/A |
| AC-G-10 | Labels `useFormOptions('web-rmms-nghiem-thu')` / `nghiemThu.*` · mau MAU-10/init | **cấm** hardcode VN |
| AC-G-11 | Deep-link product `/nghiem-thu*` · alias queue chỉ stdUrl | **cấm** invent route |

**Report AC:** N/A.

## 5. Form / field AC (+ Delta *)

| AC-ID | Rule |
|-------|------|
| AC-F-01 | `GET …/init-data` trước form · TemplateTypes + criteria + resultCodes |
| AC-F-02 | templateType Select · MAU-10 / init-data |
| AC-F-03 | route = SearchInput · `integration/road-routes/search` · miss=`--` |
| AC-F-04 | fieldInfo required · zoneOrgCode RO/opt GPS · kmFrom/kmTo optional |
| AC-F-05 | resultCode pass/fail/deduct · resultNote optional |
| AC-F-06 | scores Checklist · Đạt / Không đạt / Không áp dụng · replace-all write |
| AC-F-07 * | RouteCapture · mediaIds · write **chỉ** nghiệm thu · RO view khác vai |
| AC-F-08 | assignee = SearchInput · `integration/users` · required |
| AC-F-09 | inspectedAt required · note optional · status draft on Lưu nháp |
| AC-F-10 | **Pattern B:** CTA Lưu always-on trừ `saving`/`photoBusy` · **cấm** `disabled={!canSave}` |
| AC-F-11 | First Lưu → `validationAttempted` · banner `string[]` (mẫu/tuyến/hiện trường/assignee/inspectedAt/photo/GPS) · **cấm** `alert.warning` thay banner |
| AC-F-12 | GPS deny = no fake · banner on Lưu · **cấm** pre-lock CTA |
| AC-F-13 * | Write POST/PUT **chỉ** `roleCaps.nghiemThu` · thiếu caps → deny toast/redirect · deps `web-rmms-role-gate` |
| AC-F-14 * | NT-RO-LINK: link RO ca tuần đường + finding đã Xác nhận đạt · **no** write/recheck/assign |
| AC-F-15 * | **Cấm** CTA Giao việc · **cấm** Xác nhận đạt / Hoàn thành sự cố trên NT-F/L |
| AC-F-16 | cancel → list · list **không** bắt GPS mới |
| AC-F-17 | dirty leaveConfirm khi Huỷ/Back |

## 6. § Delta Current vs New (edit_page HARD)

| Surface | Current (peer shipped) | New (this PO) |
|---------|------------------------|---------------|
| changeScope | Live NT list/form | `edit_page` · **cấm** `new_page` · **cấm** route mới |
| NT-F write | mọi user mở moi có thể POST | chỉ nghiệm thu · FE+BE role enforce |
| NT-L create | Tạo hiện mọi user | **ẩn** non-nghiệm-thu |
| RouteCapture | form write | giữ · write chỉ nghiệm thu |
| RO đối chiếu | thiếu | NT-RO-LINK ca + finding đạt · RO only |
| Giao / hoàn thành SC | không có (đúng) | **giữ cấm** · không thêm |
| APIs | patrol/nghiem-thu CRUD + init | **không đổi** core paths · role gate |
| Mục IV / SLA / chấm kỳ | chưa | **cấm** trên form này |
| mfe / bff | Mobile · Mobile.Bff | giữ · **cấm** web-bff · **cấm** iOS/Android |
| Align | phone | `/align-mobile-to-mfe` · 430px · no new tab/route |

## 7. Decisions (UNCLEAR)

| id | Decision | Owner next |
|----|----------|------------|
| UNCLEAR-NT-CTX | **RESOLVED:** tạo CTX từ PLAN+code · accept SSOT | — |
| UNCLEAR-NT-LIST-VIS | **RESOLVED:** NT full+Tạo; tuần đường **ẩn** list; tuần kiểm/QL_HAT RO list tối thiểu · **không** Tạo | Design · Dev · QA |
| UNCLEAR-NT-DOMAIN-ROW | **OPEN → SA:** add DOMAIN-MAP row slug hoặc bind peer `web-rmms-nghiem-thu` | SA |
| UNCLEAR-NT-ROLE-SOURCE | **OPEN → deps:** `roleCaps.nghiemThu` từ `web-rmms-role-gate` | SA · Dev |
| UNCLEAR-NT-RO-LINKS | **OPEN → Design/Dev:** zone NT-RO-LINK deep-link paths tuần đường / phát hiện | Design · Dev |
| — | mfeStdUrl alias vs product `/nghiem-thu*` | **RESOLVED:** deep-link product · alias chỉ queue · **cấm** route mới |

## 8. API cite (Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `patrol/nghiem-thu` | NT-L |
| GET | `patrol/nghiem-thu/init-data` | mau + criteria |
| GET | `patrol/nghiem-thu/{id}` | NT-F |
| POST/PUT | `patrol/nghiem-thu` | nghiệm thu only |
| GET | `integration/road-routes/search` · `integration/users` | SearchInput |
| GET | `patrol/sessions` · `patrol/findings` (filter đạt) | RO cite only |
| files/* | FileService via RouteCapture | cite |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-nghiem-thu/*`.

## 9. Handoff Design

| Need | Detail |
|------|--------|
| Keep | NT-L / NT-F layout peer · 430px · Pattern B · RouteCapture |
| Edit | hide CTA Tạo non-NT · write lock form · NT-RO-LINK zone ids |
| Out | Giao việc · Xác nhận SC · Excel · Mục IV · DES-GRID · new route |
| reviewUrl | prototype keep list/form · deep-link `/nghiem-thu/moi` |
| packKind | `list` confirmed |

## 10. Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-10-01T02:25:00.000Z` · `changeScope=edit_page` · `packKind=list`
