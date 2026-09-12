# Align UX — patrol-home (live vs demo · edit_page SESSION/HERO)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| zone | `#sc-patrol-home` · DES-MOB-PAT-HOME |
| this role | `/review-align-ux-ios-android` · QA `task_56abf022` |
| verdict | **Aligned** · Must **0** · Should **1** DEFER |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/patrol-home/ui/html-to-native-map.md` |
| live | `qa/screens/A3-CORE.png` · `P6-CORE.png` · fold2 `P6-CORE-2.png` |
| live capturedAt | `2026-09-12T15:25:02.199Z` · iPhone 17 Pro Max · AVD **1080×1920** |
| updatedAt | `2026-09-12T15:26:00.000Z` |

## Must — PASS (3-up `#sc-patrol-home`)

| Zone | Demo | iOS live | Android live | Kit / token | Verdict |
|------|------|----------|--------------|-------------|---------|
| `#sc-patrol-home` hub | proto `#sc-patrol-home` | A3-CORE | P6-CORE | `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmListRow` · `LinmTabBar` | **PASS** |
| Title / segment | **Tuần đường** · idx 0 / Chấm công | same | same | demo-parity §Must | **PASS** |
| Hero (active seed) | Ca đang chạy · Tốt · PAT · route · KPI | same zones · live PAT-20260810-0014 · QL.1 · 2/3 · 67% | same | `LinmHeroCard` · primary | **PASS** |
| emptyActive / btn-open-session | when no active | **N/A this seed** (active present) | same | edit_page SESSION-01 | **PASS** (path N/A seed) |
| Pin CTA | **Ghim vị trí hiện tại** | `btn-pin-here` | same | MapFile pin | **PASS** |
| KPI | 2 / 1 / 67% | same | same | `LinmKpiStrip` | **PASS** |
| Today | PAT rows · Đang tuần / Xong | A3 above-fold | P6 fold + A3 | `LinmListRow` | **PASS** |
| Quick fold | 6 rows · Lưu trữ last | scroll | P6-CORE-2 | scroll **PASS** | **PASS** |
| Tab 5 | field selected | same | same | `LinmTabBar` | **PASS** |
| Form submit | **N/A** — hub | toast P1 only | same | form-submit **N/A** | **PASS** |
| Watermark / device label | none | none | none | **GAP-DEV-MOB-PLACEHOLDER-01** | **PASS** |
| HERO-01 no sample empty | empty=`—` / emptyActive | active seed · live fields only | same | **cấm** fake QL.1 when empty | **PASS** |

## Should — DEFER (platform-OK)

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-A11Y-TAB-FIELD-01 | iOS tab items Maestro `resource-id` = `tab-bar` (không `tab-field`) · Android `tab-field` OK · e2e iOS dùng `tile-patrol` | kit follow-up · **non-block** QA |

## Cấm PASS checks

- 3-up / CORE Read present · **PASS**
- Must open = **0** · **PASS**
- Live copy VN dual · **PASS**
- Kit map rows · **PASS** (Should only)
- Scroll all fold · **PASS** (P6-CORE-2)
- Form fill→submit · **N/A**
- CLI PASS ≠ visual · vision done · **PASS** (no GAP-MOB-E2E-VIS-01)

## Handoff

- Bug log: `qa/bugs/patrol-home.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile`
