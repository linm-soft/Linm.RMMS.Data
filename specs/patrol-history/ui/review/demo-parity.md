# Demo parity — patrol-history (list · Lịch sử ca)

Nguồn: `specs/patrol-history/ui/prototype/ios/index.html` · `android/index.html` `#sc-patrol-history`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-20 · task `task_c3eae165`

## Verdict

**Must đóng** — dual HTML cùng copy zones · 4 rows SSOT · toast PO · trailing Lọc · **cấm** `go('patrol-detail')`.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Large title **Lịch sử ca** dual same |
| GAP-MOB-DEMO-COPY-02 | Back **Tuần đường** + trailing **Lọc** dual |
| GAP-MOB-DEMO-COPY-03 | Row 1 **PAT-20260810-0014** · QL.1 · Tuần đường · 2/3 điểm · **Đang tuần** |
| GAP-MOB-DEMO-COPY-04 | Row 2 **PAT-20260810-0009** · HCM · Tuần kiểm · 100% · **Hoàn thành** |
| GAP-MOB-DEMO-COPY-05 | Row 3 **PAT-20260809-0021** · QL.1 · Thiếu điểm tuần · **Bỏ sót** |
| GAP-MOB-DEMO-COPY-06 | Row 4 **PAT-20260809-0015** · Chờ đồng bộ · 1 điểm tuần · **Mất sóng** |
| GAP-MOB-DEMO-COPY-07 | Toast **Lọc** · **Chi tiết phiên** · **cấm** `go('patrol-detail')` / `window.alert` |
| GAP-MOB-DEMO-COPY-08 | **Cấm** badge «Xong» · **cấm** rút Android còn 3 rows |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-search` dual **cùng `d=`** |
| GAP-MOB-DEMO-TYPE-01 | Tab label **13** · row title **16** · row sub **13** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy + 4 rows + Lọc) |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-MOB-P1-FIX | mobile-p1 Android `#sc-patrol-history` parity | **closed** |

## Should — OK

| Item | Note |
|------|------|
| iOS row chevron | Android no chevron — platform-OK |
| Nav chrome | iOS empty nav title + large title · Android large title below top bar — HIG vs M3 |
| Search hint | Demo dài · native kit **Tìm** — PO §7 |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Search pill radius | 10 | 28 | chrome only |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-patrol-history` | screen root |
| `btn-hist-back` | back Tuần đường |
| `btn-hist-filter` | Lọc |
| `hist-large-title` | Lịch sử ca |
| `hist-search` | search field |
| `row-hist-1` … `row-hist-4` | list rows |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-20T04:25:00.000Z · taskId=task_c3eae165
