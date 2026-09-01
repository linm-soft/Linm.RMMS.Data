# Align UX — ops (live vs demo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| zone | `#sc-ops` · DES-MOB-OPS |
| this role | `/review-align-ux-ios-android` · QA `task_1f014c56` |
| verdict | **Aligned** · Must **0** · Should **1** DEFER · empty-path live |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/ops/ui/html-to-native-map.md` |
| shots | `qa/screens/A3-CORE.png` · `qa/screens/P6-CORE.png` · demo `prototype/{ios,android}/index.html#sc-ops` |
| live capturedAt | `2026-09-01T02:26:26.540Z` · harvest remedi `02:35Z` · iPhone 17 Pro Max · Pixel_2 1080×1920 |
| updatedAt | `2026-09-01T02:35:00.000Z` |

## Must — PASS (3-up `#sc-ops` · empty-path)

| Zone | Demo | iOS live | Android live | Kit / token | Verdict |
|------|------|----------|--------------|-------------|---------|
| `#sc-ops` chrome | TopBar «Thông báo» · nav back | same · `LinmTopBar` | same + trailing MoreHoriz | MapFile | **PASS** |
| Empty / fail | prototype shows 2 demo rows (HTML) | EmptyChrome `ops-empty` + toast loadFail | same empty + toast | live-only cleanup_mock · API inbox **500** | **PASS** (empty SSOT · **cấm** demoItems) |
| Row tiles | demo `row no-icon` (no `.row-icon`) | N/A empty | N/A empty | **không** GAP-MOB-UX-COMP-03 | **PASS** |
| Watermark / «dữ liệu mẫu» | none | none · toast = loadFail only | same | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |
| Scroll fold | short | empty 1 fold | same | N/A | **PASS** |
| Form submit | N/A list | mark-read N/A (no row) | same | N/A | **PASS** |

## Should — DEFER

| ID | Note | Owner |
|----|------|-------|
| GAP-MOB-UX-COMP-OPS-01 | Android TopBar trailing `MoreHoriz` · demo không CTA phải | Dev · non-block |
| GAP-BE-OPS-INBOX-500 | API GET inbox 500 · EmptyChrome OK · seed/fix BE | BE · non-block QA |

## Cấm PASS checks

- Read CORE PNG vs demo · **done** · Must open = **0**
- CLI PASS ≠ visual · harvest remedi applied · **PASS**
- Live copy VN dual · **PASS**

## Handoff

- Bug log: `qa/bugs/ops.md`
- Next: Review `/agent-review-mobile`
