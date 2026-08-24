# Demo parity — asset (list · Danh mục tài sản)

Nguồn: `specs/asset/ui/prototype/ios/index.html` · `android/index.html` `#sc-asset-list`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-24 · task `task_179e1510`

## Verdict

**Must đóng** — dual HTML cùng copy zones · 2 rows SSOT · toast PO · **cấm** `go('asset-detail')` · **cấm** Ghim P1 · **không** tab bar.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Danh sách** dual same |
| GAP-MOB-DEMO-COPY-02 | Back iOS **Tài sản** + chevron · Android icon chevron |
| GAP-MOB-DEMO-COPY-03 | Row 1 **TS-20260810-014 · Cống ngang** · QL.1 · Km 1556+000 · Cống |
| GAP-MOB-DEMO-COPY-04 | Row 2 **TS-20260809-088 · Biển P.127** · HCM · Biển báo |
| GAP-MOB-DEMO-COPY-05 | Search hint **Tìm mã TS, tuyến, loại…** dual |
| GAP-MOB-DEMO-COPY-06 | Toast **Chi tiết tài sản** · **cấm** push detail / `window.alert` |
| GAP-MOB-DEMO-COPY-07 | **Cấm** badge Ghim P1 · **cấm** rút Android còn 1 row |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` · `#i-search` · `#i-cube` dual **cùng `d=`** |
| GAP-MOB-DEMO-TYPE-01 | Search hint **13** · row title **16** · row sub **13** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy + 2 rows + toast) |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-MOB-P1-FIX | mobile-p1 `#sc-asset-list` push detail / Ghim | **closed** on pack |

## Should — OK

| Item | Note |
|------|------|
| iOS row chevron | Android no chevron — platform-OK |
| Nav chrome | iOS back text **Tài sản** · Android icon-only — PO §3.2 |
| No tab bar | Push screen — PO §3.1 |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Search pill radius | 10 | 28 | chrome only |
| Row icon indigo | `#5856D6` | `#6750A4` | HIG vs M3 |
| Home indicator | inset | gesture bar | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-asset-list` | screen root |
| `nav-back` | back hub |
| `nav-title` | Danh sách |
| `search-asset` | search field |
| `row-asset-TS-20260810-014` | list row 1 |
| `row-asset-TS-20260809-088` | list row 2 |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-24T05:15:00.000Z · taskId=task_179e1510
