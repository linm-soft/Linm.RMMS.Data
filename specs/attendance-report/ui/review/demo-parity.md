# Demo parity — attendance-report (screen · Báo cáo công)

Nguồn: `specs/attendance-report/ui/prototype/ios/index.html` · `android/index.html` `#sc-attendance-report`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-09-01 · task `task_52898ccc`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng zones · period Tuần/Tháng · KPI×4 · section days · 2 day rows · shell tab Tuần đường.  
Chrome lệch (back text vs icon · card/seg radius · surface) = platform-OK.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title dual **Báo cáo công** |
| GAP-MOB-DEMO-COPY-02 | Segment **Tuần** / **Tháng** · default Tuần dual |
| GAP-MOB-DEMO-COPY-03 | KPI labels **Ngày đủ công** · **Số lần chấm** · **% Trong vùng** · **Ngoài vùng** dual |
| GAP-MOB-DEMO-COPY-04 | KPI SSOT **2** · **4** · **100%** · **0** dual |
| GAP-MOB-DEMO-COPY-05 | Section **Chi tiết theo ngày** dual |
| GAP-MOB-DEMO-COPY-06 | Day T7 **09/08** / **07:05 – 16:40** · T6 **08/08** / **07:12 – 16:28** · badge **Đủ công** dual |
| GAP-MOB-DEMO-COPY-07 | Empty copy **Không có dữ liệu kỳ này** (hidden default) dual |
| GAP-MOB-DEMO-COPY-08 | Toast via `.toast` · **cấm** `window.alert` |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` dual same `d=` · **cấm** invent icon |
| GAP-MOB-DEMO-TYPE-01 | caption/label/tab/segment **13** · KPI/day ≥**16** |
| GAP-MOB-ALIGN-01 | Dual zones + copy · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Tuần đường** · `tabs: none` surface · **cấm** invent tab 6 |
| GAP-MOB-ATT-RPT-PACK-01 | packKind **screen** · full `#sc-attendance-report` · **cấm** sheet chrome |
| GAP-MOB-ATT-RPT-DEMO-01 | Own `#sc-attendance-report` · Dev rewire hub `go('attendance-report')` |

## Should — OK

| Item | Note |
|------|------|
| Back chrome | iOS text «Chấm công» + chevron · Android icon-only |
| Title | Dual **Báo cáo công** |
| Segment chrome | iOS pill 9 · Android chip 20 — platform OK |
| Card radius | iOS 12 · Android 16 — platform OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Back trailing | text+icon | icon-only | chrome only |
| Home indicator | bar | gesture | chrome only |
| hub rewire | Dev | Dev | btnReport push · GAP-MOB-ATT-RPT-NAV-01 |
| Empty / live bind | Dev | Dev | EmptyChrome + GET live |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-attendance-report` | screen root |
| `attendance-report-back` | back |
| `attendance-report-period` | period segment |
| `period-week` / `period-month` | Tuần / Tháng |
| `attendance-report-kpi` | KPI grid |
| `kpi-days` / `kpi-checks` / `kpi-inzone` / `kpi-out` | KPI values |
| `attendance-report-section` | section label |
| `attendance-report-days` | day list |
| `day-row-t7` / `day-row-t6` | day rows |
| `attendance-report-empty` | empty chrome |
| `tab-field` | shell tab Tuần đường |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-09-01T15:11:25.000Z · taskId=task_52898ccc · contentHash=sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9
