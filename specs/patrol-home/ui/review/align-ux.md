# Align UX — patrol-home (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| zone | `#sc-patrol-home` · DES-MOB-PAT-HOME |
| this role | `/review-align-ux-ios-android` · QA `task_c882b8bd` |
| verdict | **Aligned** · Must **0** · Should **1** DEFER |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/patrol-home/ui/html-to-native-map.md` |
| shots | `ui/review/align/patrol-home-{demo,ios,android}.png` · fold2 `patrol-home-android-fold2.png` |
| live capturedAt | `2026-08-19T14:47:21.050Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-19T14:50:00.000Z` |

## Must — PASS (3-up `#sc-patrol-home`)

| Zone | Demo | iOS live | Android live | Kit / token | Verdict |
|------|------|----------|--------------|-------------|---------|
| `#sc-patrol-home` hub | `patrol-home-demo.png` | `patrol-home-ios.png` (A3-CORE) | `patrol-home-android.png` (P6-CORE) | `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmListRow` · `LinmTabBar` | **PASS** |
| Title / segment | **Tuần đường** · idx 0 / Chấm công | same | same | demo-parity §Must | **PASS** |
| Hero copy | Ca đang chạy · Tốt · PAT-…0014 · 2/3 · 67% | same zones | same | `LinmHeroCard` · primary `#0C84C0` | **PASS** |
| Pin CTA | **Ghim vị trí hiện tại** | `LinmPrimaryButton` `btn-pin-here` | same | MapFile pin | **PASS** |
| KPI | 2 / 1 / 67% | same | same | `LinmKpiStrip` | **PASS** |
| Today | PAT-…0014 **Đang tuần** · PAT-…0009 **Xong** | same | same (P6 fold + A3) | `LinmListRow` | **PASS** |
| Quick fold | 6 rows · Lưu trữ last | A3 above-fold 1st row | P6-CORE-2 + `row-quick-patrol-offline` | scroll **PASS** | **PASS** |
| Tab 5 | field selected | same | same | `LinmTabBar` · **cấm** pill 1 OS | **PASS** |
| Form submit | **N/A** — hub không CTA Lưu/Gửi | toast P1 only | same | form-submit **N/A** | **PASS** |
| Watermark / device label | none demo | none live | none live | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |

## Should — DEFER (platform-OK)

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-A11Y-TAB-FIELD-01 | iOS tab items Maestro `resource-id` = `tab-bar` (không `tab-field`) · Android `tab-field` OK · e2e iOS dùng `tile-patrol` | kit follow-up `/edit-mobile-feature` · **non-block** QA |

## Cấm PASS checks

- 3-up shots present · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual · **PASS**
- Kit map rows · **PASS** (Should only)
- Scroll all fold · **PASS** (P6-CORE-2)
- Form fill→submit · **N/A**

## Handoff

- Bug log: `qa/bugs/patrol-home.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile`
