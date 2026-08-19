# Demo parity — patrol-map

Nguồn: `ui/prototype/{ios,android}/index.html` `#sc-patrol-map`  
Slash: `/review-demo-design-mobile`  
Ngày: 2026-08-20 · `task_4ba10fbc` · autoApprove=ON

## Verdict

**Must đóng** — dual copy / icon / type map zones. `design_confirm` **approve**.

## Must

| Id | Check | Result |
|----|-------|--------|
| GAP-MOB-DEMO-COPY-01 | Title **Ca đang chạy** dual | **PASS** |
| GAP-MOB-DEMO-COPY-02 | **Ghi điểm tuần** nav + card · toast (không sheet) | **PASS** |
| GAP-MOB-DEMO-COPY-03 | Next **Điểm tiếp theo · OSRM** · **Km 1561+134 · Phước Dinh** | **PASS** |
| GAP-MOB-DEMO-COPY-04 | **Ghim vị trí hiện tại** · toast P1 | **PASS** |
| GAP-MOB-DEMO-COPY-05 | Bar **Đường · Phố · Vệ tinh · Toàn tuyến** | **PASS** |
| GAP-MOB-DEMO-COPY-06 | Legend **Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp** | **PASS** |
| GAP-MOB-DEMO-ICON-01 | `#i-mappin` pin dual · `#i-chevron-left` back | **PASS** |
| GAP-MOB-DEMO-TYPE-01 / GAP-TYP-01 | eyebrow/chip **13** · next/CTA **≥16** · Android eyebrow 13 | **PASS** |
| GAP-MOB-ALIGN-01 | Dual lệch Must **closed** (copy) | **PASS** |
| GAP-MOB-ACT-02 | Map CTAs **không** `openSheet('checkin')` | **PASS** |

## DEFER platform-OK

| Token | iOS | Android |
|-------|-----|---------|
| Back | text Tuần đường + chevron | icon back |
| Map engine | MapKit (native) | OSM tiles (native) |
| Pin done hex | `#34C759` | `#1B8A4A` |
| Next hex | `#FF9500` | `#E67E00` |
| Frame | 390×844 | 412×915 |

## Should (non-blocking)

| Id | Note |
|----|------|
| A11y | ids `btn-map-*` / `mb-*` / `lg-*` dual — OK |

## Gate

Must mở = **0** → `design_confirm` **approve** (autoApprove=ON).
