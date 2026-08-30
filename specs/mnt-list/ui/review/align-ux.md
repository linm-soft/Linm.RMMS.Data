# Align UX — mnt-list (live vs demo)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| zone | `#sc-mnt-list` · DES-MOB-MNT-LIST |
| this role | `/review-align-ux-ios-android` · QA `task_63e3aa7d` |
| verdict | **Aligned** · Must **0** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/mnt-list/ui/html-to-native-map.md` · list kit dual |
| shots | live `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` vs proto `ui/prototype/{ios,android}/index.html#sc-mnt-list` |
| live capturedAt | `2026-08-28T19:39:37.967Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-28T19:40:00.000Z` |

## Must — PASS (3-up `#sc-mnt-list`)

| Zone | Demo | iOS live (A3) | Android live (P6) | Kit / token | Verdict |
|------|------|---------------|-------------------|-------------|---------|
| `#sc-mnt-list` list | proto iOS/Android | A3-CORE | P6-CORE · P6-CORE-2 | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · rich card · `LinmBadge` · `LinmTabBar` | **PASS** |
| Nav | ← · **Danh sách công việc** · **Lọc** | text **Lọc** | icon `#i-list` filter | HIG vs Material OK | **PASS** |
| Hub row | `.row-icon` green `#i-sum` · **Giao việc xử lý** | green + glyph | green + glyph | **cấm** GAP-MOB-UX-COMP-03 | **PASS** |
| Cards | 2 · Vá mặt đường · Nạo cống | same 2 | same 2 (+fold P6-2) | SSOT demo | **PASS** |
| Status | warn Chờ xử lý · ok Đã hoàn thành | same | same | `LinmBadge` | **PASS** |
| Actions | `#i-chat` · `#i-sync`/`#i-list` · `#i-sum` | glyphs | glyphs | outline motif | **PASS** |
| Tab 5 | Công việc on | work on | work on | `LinmTabBar` | **PASS** |
| Form submit | **N/A** — list · toast P1 | same | same | form-submit **N/A** | **PASS** |
| Watermark | none | none | none | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |

## Should — DEFER (non-block)

| ID | Note | Owner |
|----|------|-------|
| GAP-MOB-COPY-SEARCH-01 | Kit `LinmSearchField` hardcode **Tìm** · demo **Tìm kiếm công việc…** | kit / edit · **non-block** |

## Cấm PASS checks

- 3-up Read CORE PNG · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual (cards/hub/status) · **PASS**
- Demo hub `.row-icon` → live leading glyph · **PASS**
- Scroll all fold · **PASS** (P6-CORE-2 below-fold status)
- Form fill→submit · **N/A**

## Handoff

- Bug log: `qa/bugs/mnt-list.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile`
