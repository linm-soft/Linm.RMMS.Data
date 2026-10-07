# Context — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
| packKind | `list` |
| changeScope | `edit_page` |
| lane | `web` · phone 430px |
| mfe | `Linm.Web.RMMS.Mobile` |
| productRoute | `/phat-hien/:sessionId` · `/moi` · `/:findingId` · `/:findingId/sua` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (alias · **cấm** invent product route) |
| be | `Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| demo | N/A |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #5 · § Tuần kiểm đánh giá SLA |
| peer | `web-rmms-mobile-c` Live findings · giao = `web-rmms-giao-viec-ql-hat` |
| deps | `web-rmms-role-gate` (`tuanKiem` · `QL_HAT`) |
| createdBy | po · task_8dca9e79 · accept PLAN+code (UNCLEAR-FIND-CTX resolved) |

## Mục tiêu

Tuần kiểm lập phiếu phát hiện + ảnh hiện trường; **Xác nhận đạt** / **Ghi chưa đạt**; nhãn **Trong hạn** / **Quá hạn** so `dueAt`. **Không** nút giao việc trên FIND-*.

## Screens

| id | route | page |
|----|-------|------|
| FIND-L | `/phat-hien/:sessionId` | FindingListPage |
| FIND-F | `…/moi` · `…/:id/sua` | FindingFormPage |
| FIND-D | `…/:findingId` | FindingDetailPage |

## HARD

- `edit_page` · cấm `new_page` · cấm route mới
- Chỉ tuần kiểm: POST/capture · FAB · recheck
- REMOVE CTA **Giao đơn vị BDTX** trên FIND-D (peer giao)
- `dueAt` gợi ý TT41 Phụ lục IV theo `hangMuc` · editable · cấm `SlaHours=24`
- Pattern B GPS · cấm fake · cấm Mục IV tiền · cấm iOS/Android · cấm web-bff · cấm Excel

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-10-01T00:57:42.946Z` |
| mobile | — | — | — |
