# Align UX — patrol-history (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| zone | `#sc-patrol-history` · DES-MOB-PAT-LIST |
| this role | `/review-align-ux-ios-android` · QA `task_203672b2` |
| verdict | **Aligned** · Must **0** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | list kit dual · `LinmListRow` leadingSlot 0 |
| shots | live `qa/screens/A3-CORE.png` · `P6-CORE.png` · `P6-CORE-2.png` vs proto `ui/prototype/{ios,android}/index.html#sc-patrol-history` |
| live capturedAt | `2026-09-01T05:48:28.371Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-09-01T05:50:00.000Z` |

## Must — PASS (3-up `#sc-patrol-history`)

| Zone | Demo | iOS live (A3) | Android live (P6) | Kit / token | Verdict |
|------|------|---------------|-------------------|-------------|---------|
| `#sc-patrol-history` list | proto iOS/Android | A3-CORE | P6-CORE | `LinmTopBar` · `LinmLargeTitle` · `LinmSearchField` · `LinmListRow` · `LinmTabBar` | **PASS** |
| Nav | ← **Tuần đường** · **Lọc** | same | same | back + filter | **PASS** |
| Title | **Lịch sử ca** | same | same | large title | **PASS** |
| Search | search + placeholder | field visible | field visible | `history-search` | **PASS** |
| Rows | 4 · `.row.no-icon` · PAT-* · chevron | 4 · no leading · chevron | same | leadingSlot **0** · **cấm** GAP-MOB-UX-COMP-03 | **PASS** |
| Badges | Đang tuần · Hoàn thành · Bỏ sót · Mất sóng | same 4 | same 4 | green **Hoàn thành** · orange **Mất sóng** | **PASS** |
| Tab 5 | field selected | Tuần đường on | Tuần đường on | `LinmTabBar` | **PASS** |
| Form submit | **N/A** — list · toast P1 only | same | same | form-submit **N/A** | **PASS** |
| Watermark | none | none | none | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |

## Should — DEFER (non-block)

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-P6-FOLD-SAME-01 | P6-CORE ≈ P6-CORE-2 (list ≤1 fold) · ≥2 Play shots vẫn đủ Guideline | QA note · **non-block** |

## Cấm PASS checks

- 3-up Read CORE PNG · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual · **PASS**
- Demo no-icon → live no leading · **PASS**
- Scroll all fold · **PASS** (content fits · P6-2 same fold OK)
- Form fill→submit · **N/A**

## Handoff

- Bug log: `qa/bugs/patrol-history.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile`
