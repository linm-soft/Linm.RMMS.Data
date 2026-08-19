# Demo parity — ops (mobile list · Thông báo)

Nguồn: `specs/ops/ui/prototype/ios/index.html` · `android/index.html` `#sc-ops`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-19 · task `task_7e65792d`

## Verdict

**Must đóng** — dual HTML copy / 2 rows / badge / title / `#i-chevron-left` khớp.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Title **Thông báo** dual same |
| GAP-MOB-DEMO-COPY-02 | Row 1 «Ưu tiên SC-2401» · «Hạt trưởng · 08:12» · «Mới» |
| GAP-MOB-DEMO-COPY-03 | Row 2 «Ca PAT-…0014 độ phủ 67%» · «Hệ thống · 07:50» · «Đã đọc» |
| GAP-MOB-DEMO-ICON-01 | `#i-chevron-left` back dual |
| GAP-MOB-DEMO-TYPE-01 | Row title ≥16 · badge caption 13 |
| GAP-MOB-OPS-DEMO-01 | Android patched 2 rows (was 1) |
| GAP-MOB-ALIGN-01 | dual lệch Must **closed** |

## Should — OK

| Item | Note |
|------|------|
| iOS back text «Tôi» | Android icon-only back — platform-OK per HIG/M3 |
| Badge color | iOS blue/gray · Android blue/gray — semantic match |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Nav chrome | text «Tôi» + chevron | icon chevron only | HIG vs M3 |
| Row min-height | 44 | 56 | HIG vs M3 |
| `.nav-title` | 17 | 18 | 1px |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-ops` | screen root |
| `nav-back` | back button |
| `row-ops-1` | demo row 1 (proto) |
| `row-ops-2` | demo row 2 (proto) |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-19T12:40:00.000Z · taskId=task_7e65792d
