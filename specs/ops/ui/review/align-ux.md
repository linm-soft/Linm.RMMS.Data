# Align UX — ops (live vs demo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| zone | `#sc-ops` · DES-MOB-OPS |
| this role | `/review-align-ux-ios-android` · QA `task_6be285ee` |
| verdict | **Aligned** · Must **0** · Should **1** DEFER |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/ops/ui/html-to-native-map.md` |
| shots | `ui/review/align/ops-{demo,ios,android}.png` |
| live capturedAt | `2026-08-19T12:59:36.360Z` · iPhone 17 Pro Max · Pixel_2 1080×1920 |
| updatedAt | `2026-08-19T13:05:00.000Z` |

## Must — PASS (3-up `#sc-ops`)

| Zone | Demo | iOS live | Android live | Kit / token | Verdict |
|------|------|----------|--------------|-------------|---------|
| `#sc-ops` list | `ops-demo-ios.png` · `ops-demo-android.png` | `ops-ios.png` (A3-CORE) | `ops-android.png` (P6-CORE) | `LinmTopBar` · `LinmListRow` · `LinmBadge` | **PASS** |
| Row 1 copy | Ưu tiên SC-2401 · Hạt trưởng · 08:12 · **Mới** | same | same | demo-parity §Must | **PASS** |
| Row 2 copy | Ca PAT-…0014 độ phủ 67% · Hệ thống · 07:50 · **Đã đọc** | same | same | demo-parity §Must | **PASS** |
| Badge semantic | blue info / gray neutral | `LinmBadge` info/neutral | same | `primary` `#0C84C0` · surface `#F2F2F7` | **PASS** |
| Nav chrome | iOS «Tôi» + chevron · Android icon back | leading a11y `nav-back` | `nav-back` testTag | HIG vs M3 **DEFER** | **PASS** |
| Scroll fold | 2 rows fit 1 viewport | no below-fold | same | scroll **N/A** short list | **PASS** |
| Form submit | **N/A** — list only · mark-read = row tap | Maestro tap → toast **Đã đọc chỉ đạo** | same | form-submit **N/A** | **PASS** |
| Watermark / device label | none demo | none live | none live | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |

## Should — DEFER (platform-OK)

| ID | Note | Owner |
|----|------|-------|
| GAP-MOB-UX-COMP-OPS-01 | Android `LinmTopBar` default trailing `MoreHoriz` visible on `#sc-ops` · iOS `trailingSystemImage: nil` · demo không CTA phải · **không** wire action | Dev dual follow-up `/edit-mobile-feature` · **non-block** QA |

## Cấm PASS checks

- 3-up shots present · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual · **PASS**
- Kit map rows · **PASS** (Should only)

## Handoff

- Bug log: `qa/bugs/ops.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` · `review/findings-mobile.md`
