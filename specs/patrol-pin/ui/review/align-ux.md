# Align UX — patrol-pin (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| zone | `#btn-pin-here` · DES-MOB-CI-PIN-HERE · hub + map |
| this role | `/review-align-ux-ios-android` · QA `task_c5415843` |
| verdict | **Aligned** · Must **0** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| MapFile | `specs/patrol-pin/ui/html-to-native-map.md` |
| demo | `ui/prototype/{ios,android}/index.html` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` |
| capturedAt | `2026-09-01T07:41:09.032Z` · iPhone 17 Pro Max · Pixel 2 **1080×1920** |
| updatedAt | `2026-09-01T07:42:00.000Z` |

## Must — PASS (Read CORE PNG)

| Zone | Demo | iOS live (A3) | Android live (P6) | Kit / token | Verdict |
|------|------|---------------|-------------------|-------------|---------|
| Pin CTA hub | `#btn-pin-here` + `#i-mappin` · **Ghim vị trí hiện tại** | Primary + map-pin glyph · same copy | same | MapFile pin | **PASS** |
| Pin CTA map | map card CTA + `#i-mappin` | (iOS store A3 = hub) | P6-CORE-2 `sc-patrol-map` + `btn-pin-here` | same | **PASS** |
| Title / tab | Tuần đường · tab 5 | same · tab field on | same | `LinmTabBar` | **PASS** |
| Glyph leading | SVG `#i-mappin` on CTA | pin glyph visible (not text-only) | pin glyph visible | **GAP-MOB-UX-COMP-03** check | **PASS** |
| Watermark | none | none | none | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |
| Form submit | **N/A** — pack không submit form | stub check-in only | same | form-submit **N/A** | **PASS** |

## Should — note (non-block)

| ID | Note | Owner |
|----|------|-------|
| — | Demo HTML tối giản (hero + pin); live = shell `patrol-home` đầy đủ KPI/list — pin CTA + glyph parity đủ Must | — |

## Cấm PASS checks

- 3-up CORE Read · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual · **PASS**
- CLI PASS ≠ Aligned (vision done) · **PASS**

## Handoff

- Bug log: `qa/bugs/patrol-pin.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` (pending · roleOnly gate)
