# Demo parity — attendance (list · Chấm công)

Nguồn: `specs/attendance/ui/prototype/ios/index.html` · `android/index.html` `#sc-attendance`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-19 · task `task_a59566c2`

## Verdict

**Must đóng** — dual HTML cùng copy zones · hero CTA · 3 day rows SSOT · toast PO.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Large title **Chấm công** dual same |
| GAP-MOB-DEMO-COPY-02 | Segment **Tuần đường** / **Chấm công** · idx 0/1 lock |
| GAP-MOB-DEMO-COPY-03 | Hero eyebrow **Chấm công theo định vị** |
| GAP-MOB-DEMO-COPY-04 | Hero title **Chưa chấm vào** |
| GAP-MOB-DEMO-COPY-05 | Hero meta **Vị trí: Văn phòng QLĐB IV.1 · Khu IV · ±6 m** · **Ca sáng · 10/08/2026** dual |
| GAP-MOB-DEMO-COPY-06 | CTA **Chấm vào** · **Báo cáo** dual |
| GAP-MOB-DEMO-COPY-07 | Section **7 ngày gần đây** |
| GAP-MOB-DEMO-COPY-08 | Day CN 10/08 · — · Nghỉ · T7 09/08 · 07:05 – 16:40 · Đủ công · T6 08/08 · 07:12 – 16:55 · Đủ công |
| GAP-MOB-DEMO-COPY-09 | Toast **Báo cáo công** · **Chi tiết ngày công** · **cấm** `go(sibling)` / `window.alert` |
| GAP-MOB-DEMO-TYPE-01 | Segment **13** · title **≥16** · meta/row **13** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy) |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |

## Should — OK

| Item | Note |
|------|------|
| Segment chrome | iOS pill · Android underline — HIG vs M3 |
| Hero gradient | iOS `#34c759→#248a3d` · Android `#1B8A4A→#0F5C30` — chrome OK · copy same |

## DEFER (platform-OK)

| Token | iOS | Android | Note |
|-------|-----|---------|------|
| Frame | 390×844 | 412×915 | Device chrome |
| Surface | `#F2F2F7` | `#FFFBFE` | HIG vs M3 |
| Seg style | pill | underline | chrome only |
| Home indicator | bar | gesture | chrome only |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-attendance` | screen root |
| `att-segment` | segment host |
| `att-hero` | hero card |
| `att-day-*` | day rows |
| `tab-field` | shell tab Tuần đường (entry) |

## Version meta

skillId=review-demo-design-mobile · generatedAt=2026-08-19T20:48:00.000Z · taskId=task_a59566c2
