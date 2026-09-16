# PO — Requirement — attendance-log (mobile · Chi tiết chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance-log` |
| title | [Mobile] [Chấm công] -> Chi tiết chấm công |
| packKind | **`screen`** |
| stack | `native_dual` |
| thisAction | **Chi tiết chấm công** `#sc-attendance-log` · entry `#sc-attendance-day` log row · GET by id |
| status | `confirmed` · `/edit-mobile-feature` 2026-09-16 |
| updatedAt | `2026-09-16` |

**Cấm:** gộp hub POST / `attendance-report` / `supervise-detail` chrome (org · map CTA · title «Chi tiết check-in») · invent `api/v1/attendance-log` · embed map · `UIAlert` / `AlertDialog` · fake GET 200 · `mfeStdUrl`.

## 1. Goal

Màn **Chi tiết chấm công** dual: hero giờ + badge in-zone · mã · rows thời điểm / tuyến / lý trình / trạng thái / tọa độ readonly / trong vùng / ghi chú. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

## 2. DoD

1. Dual push `#sc-attendance-log` `DES-MOB-ATT-LOG` · title **Chi tiết chấm công** · back iOS text «Ngày công» · Android icon-only.
2. Entry: day log row → **push** + `id` · **cấm** toast-only.
3. Appear: GET `patrol/attendance-logs/{id}` · bind BE · missing → «—» · **cấm** invent QL.1 / Ca sáng / Đúng tuyến / Đã ghi điểm tuần.
4. Fail → EmptyChrome + toast · 404 empty · 403 toast + pop · **cấm** fake 200.
5. GPS readonly · **không** request location · **không** CTA bản đồ P1.
6. Kit: `LinmTopBar` · Text hero `heroWho` · `LinmBadge` · `LinmListRow` · `LinmEmptyChrome` · `LinmToast`.
7. Typography: label **13** · hero token `heroWho` · row ≥**16**.

## 3. BFF

| Action | Method | Path |
|--------|--------|------|
| Load | GET | `patrol/attendance-logs/{id}` |

## 4. AC

| ID | AC |
|----|-----|
| AC-F-01 | Appear GET by id · bind |
| AC-F-02 | Back → `attendance-day` |
| AC-F-03 | Tap log day → push · **cấm** toast-only |
| AC-F-04 | Dual parity copy (trừ back chrome) |
| AC-D-02 | GPS readonly · không request |
| AC-D-04 | Cấm native alert |
| AC-F-08 | Cấm device label / watermark Gói |
