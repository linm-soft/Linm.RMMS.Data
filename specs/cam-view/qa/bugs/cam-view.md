# QA bugs — cam-view

STATUS: **CLOSED** · Must **0** · Should **1**
Handoff: Review `/agent-review-mobile` (Must 0 · không `/edit-mobile-feature`)
align_confirm: **approve** (autoApprove ON)

| ID | Zone | Demo shot | iOS shot | Android shot | SSOT | Lệch | Owner |
|----|------|-----------|----------|--------------|------|------|-------|
| GAP-MOB-UX-COMP-03 | `.empty-state` glyph | prototype `?empty=1` `#i-video` | A3-CORE.png (dashed) | P6-CORE.png (text-only) | MapFile emptyCam=EmptyState · visual-compare-core | Android thiếu leading glyph — **Should** (không Must · EmptyState kit) | Dev polish optional |
| — | JPEG / events filled | default proto JPEG+rows | — | — | real-data · PO Empty OK | API `cameras` totalCount=0 — **DEFER env** | Ops seed |

**Cấm** PASS khi Must > 0 — Must = 0 · QA **confirmed**.
