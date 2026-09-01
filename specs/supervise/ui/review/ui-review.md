# UI review: supervise

Reviewed: `design.md` · `ui/ux-analy.md` · constitution P1–7 · `/dev-ios-swiftui` · `/dev-android-compose`  
Date: 2026-08-19 · task `task_e29847e6`

## Screenshots

| File | Surface |
|------|---------|
| `review-supervise-ios-390.png` | iOS frame 390×844 · `#sc-supervise` (proto SSOT) |
| `review-supervise-android-412.png` | Android frame 412×915 · `#sc-supervise` (proto SSOT) |

Live sim/emulator store PNG → QA `yarn e2e-qa-mobile` (`qa/store/supervise`). **Cấm** `mfeStdUrl`.

## Must fix

_(none)_

## Should fix

1. Live native capture trên sim 6.9" + emulator — Dev không login session; QA e2eQa=ON.

## Could improve

1. Kit `LinmSegment` font 15 vs demo 13 — T-KIT **n/a** this pack.
2. A11y `seg-list` / `seg-map` trên option — cần slot kit; host đã `sup-segment`.

## Pass

- [x] P1 surface 1 cột native · [x] P4 spacing 12/14/16 · [x] P6 loading overlay + EmptyChrome live-only · [x] P7 VoiceOver/TalkBack label card
- Native dual: cùng zone DES-MOB-SUP-* · copy VN · toast siblings · **cấm** WebView-as-app · **cấm** demoItems
- GAP-MOB-SUP-03 org fallback SSOT · GAP-MOB-ICON-02 outline building/mappin `d=` · cleanup_mock `task_65931a17`
- Must **0** · `align_confirm` N/A (cùng zone)

## Checklist

| # | Result |
|---|--------|
| P1 | PASS — 1 cột 390 / 412 |
| P2–3 | PASS — `LinmTopBar` / `LinmSegment` / `LinmToast` · không invent `LinmRichCheckinCard` |
| P4 | PASS — card pad 14 · list gap 12 · thumb 56 |
| P5 | PASS — 0 invent breakpoint |
| P6 | PASS — loading overlay · error/empty → demo · list mở |
| P7 | PASS — back/filter identifiers · card a11y name |
| Native | PASS — field+CTA 1:1 packet · 0 WebView-as-app |
| Dual | PASS — GAP-MOB-ALIGN-01 chrome pill vs underline OK |
