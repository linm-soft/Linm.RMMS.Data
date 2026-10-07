# PO — Requirement — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `confirmed` |
| role | `po` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| writtenAt | `2026-10-01T02:15:00.000Z` |
| taskId | `task_8dca9e79` |
| autoApprove | `ON` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-finding.md` (PO created · accept PLAN+code) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (alias) |
| productRoute | `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| phoneFrame | `max-width: 430px` |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § List enqueue #5 · § Tuần kiểm đánh giá SLA |
| priorAnaly | confirmed · compact `handoff/data_analy-compact.md` · hash skip |
| formPattern | Mobile full · list + form + detail · **không** ERP Modal/Slideout Kind B |

> PO chốt AC từ control-hint + real-data + PLAN-3-VAI. **Cấm** re-scan demo. Design giữ L/F/D; edit role-gate + due TT41 + SLA badge + remove assign CTA.

## § Goal

Tuần kiểm lập phiếu phát hiện kèm ảnh (`RouteCaptureControl`), gợi ý hạn TT41 theo hạng mục, kiểm tra lại với **Xác nhận đạt** / **Ghi chưa đạt**, hiển thị nhãn **Trong hạn** / **Quá hạn**. Giao việc thuộc peer `web-rmms-giao-viec-ql-hat` — **cấm** CTA giao trên FIND-*.

## § Scope

| In | Out |
|----|-----|
| `edit_page` FindingList/Form/Detail | `new_page` · invent product route `/web-rmms-cam-finding` |
| Role-gate tuần kiểm write + FAB + recheck | tuần đường / NT / `QL_HAT` lập phiếu |
| dueAt suggest TT41 Phụ lục IV · editable | `SlaHours=24` làm SLA duy nhất |
| SLA badge Trong hạn / Quá hạn | Mục IV tiền · chấm điểm kỳ |
| REMOVE **Giao đơn vị BDTX** trên FIND-D | gọi `assign-work-order` từ UI slug |
| Pattern B GPS form + recheck | fake GPS · demo-json |
| Mobile.Bff · 430px | web-bff · ERP.* · iOS/Android · Excel toolbar |

## § Screens

| id | route | surface | AC focus |
|----|-------|---------|----------|
| FIND-L | `/phat-hien/:sessionId` | FindingListPage · cards · FAB | list session · FAB chỉ tuần kiểm |
| FIND-F | `…/moi` · `…/:id/sua` | FindingFormPage · RouteCapture · Huỷ/Lưu | write tuần kiểm · due suggest · Pattern B |
| FIND-D | `…/:findingId` | FindingDetailPage · RO + recheck | confirmPass/Fail · SLA badge · **no** assign |

**reviewUrl:** Design giữ prototype list/form/detail zones FIND-L/F/D · deep-link product `/phat-hien/:sessionId/moi`.

## § Role matrix (HARD)

| Vai | FIND-F write | FIND-L | FIND-D | Recheck | Giao việc trên FIND-* |
|-----|--------------|--------|--------|---------|------------------------|
| Tuần kiểm | POST + capture | list · FAB | xem + Xác nhận đạt / Ghi chưa đạt + SLA | yes | **no** |
| Tuần đường | no | xem RO (cùng tuyến) | xem RO | no | **no** |
| `QL_HAT` (`HAT-TRUONG`+`HAT-PHO`) | no | xem | xem · **no** giao | no | **no** (peer) |
| Nghiệm thu | no | xem RO phiếu đã đạt | xem RO | no | **no** |

- `QL_HAT` **cấm** suy từ `MANAGER-RMMS`.
- Tuần kiểm **không** đặt hạn thứ hai lúc recheck — dùng `dueAt` đã có.
- deps: `web-rmms-role-gate` · `caps.tuanKiem`.

## § dueAt TT41 (FIND-F) — Grid AC catalog

| hangMuc (catalog) | Gợi ý dueAt (từ ngày phát hiện) | editable |
|-------------------|----------------------------------|----------|
| Vá ổ gà (cấp I–II) | +3 ngày | yes |
| Vá ổ gà (cấp III–VI) | +5 ngày | yes |
| Nứt dọc/ngang/mai rùa | +7 ngày mưa · +14 ngày khô | yes |
| Lún lõm / sình lún | +10 ngày (không tính ngày mưa ẩm) | yes |
| Vệ sinh / chướng ngại nguy hiểm | +1 giờ · còn lại +7 ngày | yes |
| Nước đọng mặt đường | ≤ 24 giờ (hạn lịch · **≠** SlaHours form) | yes |
| Biển cấm / hiệu lệnh | +1 ngày · biển khác +3 | yes |
| Vạch sơn cục bộ | +28 ngày | yes |
| Tồn tại nghiệm thu | +5 ngày từ văn bản | yes |

**AC:** Chọn `hangMuc` → điền `dueAt` gợi ý · user sửa trước Lưu · required khi `scope=bdtx` · **cấm** default `SlaHours=24` · **cấm** công thức tiền Mục IV.

## § SLA labels (FIND-D) — Grid AC

| Kết quả recheck | So `dueAt` | Nhãn |
|-----------------|------------|------|
| Xác nhận đạt | ≤ hạn | Đạt · **Trong hạn** |
| Xác nhận đạt | > hạn | Đạt · **Quá hạn** |
| Ghi chưa đạt | còn hạn | Chưa đạt · giữ việc · hạn cũ |
| Ghi chưa đạt | quá hạn | Chưa đạt · **Quá hạn** |

Quá hạn = đánh giá SLA · **chưa** tính tiền.

## § Control inventory (copy analy)

| id | label | controlHint | AC |
|----|-------|-------------|-----|
| photos | ảnh | RouteCaptureControl | tuần kiểm write · detail view/recheck |
| gps | định vị | GPS + Banner | Pattern B · cấm fake |
| hangMuc | hạng mục | Select | trigger due TT41 |
| dueAt | hạn | Date | suggest+edit · bdtx required |
| slaBadge | Trong/Quá hạn | Badge | derive dueAt ± recheckAt |
| save | Lưu | Button | tuần kiểm · Pattern B |
| fabCreate | FAB | Button | ẩn non-tuan-kiem |
| cards | list | List | GET findings?sessionId |
| confirmPass | Xác nhận đạt | Button | tuần kiểm · status cho-kiem-tra |
| confirmFail | Ghi chưa đạt | Button | tuần kiểm |
| assignCta | Giao việc | — | **REMOVE** |
| roleCaps | quyền | Hidden | cite role-gate |
| feedback* | phản hồi BDTX | Form | giữ khi da-giao · không phải giao |

## § Filter / grid (desktop)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Field |
| toolbar Excel | **N/A** · **cấm** |

## § GPS

| Màn | Rule |
|-----|------|
| FIND-F | Pattern B · deny/pending → banner khi Lưu · **cấm** fake · **cấm** pre-disable |
| FIND-D recheck | Pattern B · banner khi Xác nhận / Ghi chưa đạt |
| FIND-D RO / FIND-L | không bắt GPS mới khi chỉ xem |

## § Leave

| Màn | Rule |
|-----|------|
| FIND-F dirty | leaveConfirm khi Huỷ / Back / navigate away |
| FIND-D / FIND-L | không leaveConfirm khi RO |

## § API (cite Live — SA confirm DTO)

| Method | Path | UI |
|--------|------|-----|
| GET | `patrol/findings?sessionId=` | FIND-L |
| POST | `patrol/findings` | FIND-F create · tuần kiểm |
| PUT | `patrol/findings/{id}` | FIND-F edit |
| GET | `patrol/findings/{id}` | FIND-D |
| POST | `…/{id}/recheck` | confirmPass/Fail |
| POST | `…/{id}/feedback` | BDTX · giữ |
| POST | `…/{id}/assign-work-order` | **không gọi từ UI slug** |
| GET | `patrol/sessions/{id}` | stamp RO |
| files/* | FileService | RouteCapture |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-finding/*` · **cấm** web-bff.

## § Acceptance criteria (DoR)

1. **packKind=list** · `changeScope=edit_page` · phone 430px · không route mới.
2. Chỉ **tuần kiểm** thấy FAB + Lưu POST + Xác nhận đạt / Ghi chưa đạt; vai khác RO / ẩn.
3. Chọn `hangMuc` → `dueAt` gợi ý TT41 · sửa được · cấm SlaHours=24.
4. FIND-D hiện **Trong hạn** / **Quá hạn** theo bảng SLA; không trừ tiền Mục IV.
5. FIND-D **không** có nút **Giao đơn vị BDTX** / không gọi assign từ UI.
6. GPS Pattern B trên Lưu và recheck · cấm fake.
7. FIND-F dirty → leaveConfirm.
8. Deep-link product `/phat-hien*` · mfeStdUrl chỉ alias queue.
9. BFF Mobile only · cấm ERP.* · cấm Excel · cấm native.
10. E2E queued `/agent-qa*` — không chạy e2e ở PO.

## § UNCLEAR → disposition

| id | Disposition |
|----|-------------|
| UNCLEAR-FIND-CTX | **RESOLVED** — PO tạo CTX · accept PLAN+code |
| UNCLEAR-FIND-DOMAIN-ROW | **handoff SA** — add DOMAIN-MAP slug hoặc bind `web-rmms-mobile-c` |
| UNCLEAR-FIND-ROLE-SOURCE | **deps** `web-rmms-role-gate` · Design/Dev cite caps |
| UNCLEAR-FIND-DUE-CATALOG | **handoff Design/Dev** — client catalog hoặc BE suggest · editable |
| UNCLEAR-FIND-SLA-FIELD | **handoff SA** — derive client từ dueAt+recheckAt hoặc add field |
| UNCLEAR-FIND-ASSIGN-API | **keep API** · UI out · peer giao |

## § Handoff Design

- Keep zones FIND-L / FIND-F / FIND-D · 430px · no Modal Kind B.
- Role visibility FAB/write/recheck · due suggest UX · SLA badge · **remove** assign CTA.
- reviewUrl prototype keep list/form/detail · deep-link `/phat-hien/:sessionId/moi`.
- DES-GRID / LinErpListFilterBar: N/A phone.

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` · `rulesVersion=2026.09.27.1` · `writtenAt=2026-10-01T02:15:00.000Z` · `changeScope=edit_page` · `status=confirmed`
