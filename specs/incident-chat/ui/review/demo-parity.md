# Demo parity — incident-chat (toast · Trao đổi sự cố)

Nguồn: `specs/incident-chat/ui/prototype/ios/index.html` · `android/index.html` `#sc-incident-list` entry `#i-chat`  
Slash: `/review-demo-design-mobile` · gate `ios-android-demo-parity.md`  
Ngày: 2026-08-29 · task `task_e8acde41`  
Hash skip: inventory từ control-hint + real-data + PO · **cấm** re-scan mobile-p1 (`GAP-DES-DEMO-RESCAN-01`)

## Verdict

**Must đóng** — dual HTML cùng toast copy «Trao đổi sự cố» · `#i-chat` title «Trao đổi» · `stopPropagation` · **không** sheet/composer/thread P1.  
`design_confirm` **approve** (autoApprove=ON).

## Must — verified

| Id | Check |
|----|-------|
| GAP-MOB-DEMO-COPY-01 | Toast **Trao đổi sự cố** dual same |
| GAP-MOB-DEMO-COPY-02 | Icon title **Trao đổi** dual same |
| GAP-MOB-DEMO-ICON-01 | `#i-chat` dual same `d=` path |
| GAP-MOB-DEMO-TYPE-01 | tab label **13** · toast kit size |
| GAP-MOB-ALIGN-01 | Dual toast + `#i-chat` · Must **closed** |
| GAP-MOB-DES-PFX-01 | Board `ios/` · `android/` |
| GAP-TAB-01 | Shell tab **Vấn đề** selected · `tabs: none` surface · **cấm** invent tab 6 |
| GAP-MOB-INC-CHAT-UI-01 | **Không** `#sheet-incident-chat` / composer / thread P1 |
| GAP-MOB-ACT-07 | Toast feedback cùng slug · **không** enqueue |

## Should — OK

| Item | Note |
|------|------|
| Parent list chrome | reuse entry context · **không** re-own flex actions |
| Filter trailing | iOS text «Lọc» · Android icon `#i-list` — chrome parent OK |
| Surface | iOS `#F2F2F7` · Android `#FFFBFE` — platform OK |
| Toast chrome | iOS rounded 12 · Android 8 — kit OK · cùng copy |

## DEFER (platform-OK / P2)

| Token | Note |
|-------|------|
| Frame | iOS 390×844 · Android 412×915 |
| `DES-MOB-INC-CHAT` sheet | **DEFER** khi comments Signed |
| Comments thread / composer | **DEFER** · **cấm** fake P1 |

## A11y ids (Maestro)

| Id | Element |
|----|---------|
| `sc-incident-list` | entry screen root (parent chrome) |
| `act-chat-1` / `act-chat-2` | `#i-chat` buttons · slug `incident-chat` |
| `toast-incident-chat` | toast host «Trao đổi sự cố» |
| `tab-incident` | shell tab Vấn đề |

## Version meta

skillId=review-demo-design-mobile · skillVersion=2026.08.25.01 · generatedAt=2026-08-29T10:43:22.000Z · taskId=task_e8acde41 · contentHash=sha256:incident-chat-mobile-control-hint-20260829
