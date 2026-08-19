# UI review — me

Frames: iOS dest **iPhone 17 Pro** build PASS · Android `assembleDebug` PASS.

Must=0 (code review vs ux-analy):

- IA tab 5 + `#sc-me` large title **Tôi**
- Tab chrome **`LinmTabBar`** dual — **GAP-MOB-ALIGN-01** (cấm `TabView` / M3 `NavigationBar`)
- Home kit **`LinmTopBar`** dual — **GAP-MOB-ALIGN-01b** (glyph vector 22 · tap 44 · **cấm** chữ `▦`/`⋯`)
- Tab label **`tabLabel` 13** · Tuần đường **`LinmMapPinGlyph`** — **GAP-MOB-ALIGN-01d**
- Copy VN · **cấm** watermark / «Có mạng»
- Kit `LinmListRow` · signal OS path
- Dual Cài đặt (`row-settings`) toast · tab **không** pill nền
- Logout danger row

Live PNG = QA `yarn e2e-qa-mobile`.
