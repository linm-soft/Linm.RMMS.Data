# Align UX — incident-list (live vs demo)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| zone | `#sc-incident-list` · DES-MOB-INC-LIST |
| this role | `/review-align-ux-ios-android` · QA `task_f70a425c` · re-run post edit-mobile-feature |
| verdict | **Aligned** · Must **0** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/incident-list/ui/html-to-native-map.md` · list kit dual |
| shots | live `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` vs proto `ui/prototype/{ios,android}/index.html#sc-incident-list` |
| live capturedAt | `2026-09-01T04:22:00.000Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-09-01T04:25:00.000Z` |

## Must — PASS (3-up `#sc-incident-list`)

| Zone | Demo | iOS live (A3) | Android live (P6) | Kit / token | Verdict |
|------|------|---------------|-------------------|-------------|---------|
| `#sc-incident-list` list | proto iOS/Android | A3-CORE | P6-CORE · P6-CORE-2 | `LinmTopBar` · `LinmSegment` · `LinmSearchField` · banner · rich card · `LinmBadge` · `LinmFAB` · `LinmTabBar` | **PASS** |
| Nav | ← · **Quản lý vấn đề** · **Lọc** | text **Lọc** | icon `#i-list` filter | HIG vs Material OK | **PASS** |
| Segment | Danh sách / Bản đồ | same | same | `LinmSegment` | **PASS** |
| Banner | `#i-camera` · Nhận diện mặt đường | camera glyph | camera glyph | **cấm** GAP-MOB-UX-COMP-03 | **PASS** |
| Cards | 2 · Nứt mặt đường · Cống tắc | same 2 | same 2 (+fold P6-2) | SSOT demo · MapFile text bind | **PASS** |
| Status | warn Đợi phân công · ok Đang được giám sát | same | same | `LinmBadge` | **PASS** |
| Actions | `#i-chat` · `#i-briefcase` · `#i-list` · `#i-mappin` | glyphs | glyphs | outline motif | **PASS** |
| FAB | `#i-plus` | + circle | + circle | `LinmFAB` | **PASS** |
| Tab 5 | Vấn đề on | incident on | incident on | `LinmTabBar` | **PASS** |
| Form submit | **N/A** — list · toast P1 | same | same | form-submit **N/A** | **PASS** |
| Watermark | none | none | none | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |

## Should — DEFER (non-block)

| ID | Note | Owner |
|----|------|-------|
| GAP-MOB-COPY-SEARCH-01 | Kit `LinmSearchField` hardcode **Tìm** · demo **Tìm kiếm vấn đề…** | kit / edit · **non-block** |
| GAP-MOB-A11Y-FAB-01 | wrapper `fab-inc-create` không inherit vào `LinmFab` Button · visual OK | kit · **non-block** |

## Cấm PASS checks

- 3-up Read CORE PNG · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual (cards/banner/status) · **PASS**
- Demo banner `.row-icon` / `#i-camera` → live leading glyph · **PASS**
- Scroll all fold · **PASS** (P6-CORE-2 card 2)
- Form fill→submit · **N/A**

## Handoff

- Bug log: `qa/bugs/incident-list.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile`
