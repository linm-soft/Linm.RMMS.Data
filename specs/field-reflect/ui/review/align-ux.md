# Align UX — field-reflect (live vs demo)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| zone | `#sc-field-reflect` · DES-MOB-FIELD-REFLECT · kind DES-MOB-FIELD-KIND |
| this role | `/review-align-ux-ios-android` · QA `task_8a5fa81c` |
| verdict | **Aligned** · Must **0** · Should **1** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/field-reflect/ui/html-to-native-map.md` |
| shots | live = `qa/screens/A3-CORE` + `P6-CORE`(+2) |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-field-reflect` · card `.row` **no-icon** · `#i-camera` photo |
| live capturedAt | `2026-08-28T22:47:13.520Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-29T05:50:00.000Z` |

## Vision CORE (Read PNG — bắt buộc)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav back · title **Ghi nhận hư hỏng** | «Tuần đường» + chevron · title | icon-btn chevron · title · (HIG/Material OK) | **PASS** |
| Kind pills Hư/Mất/Hỏng · default Hư | Hư on | Hư on | **PASS** |
| PhotoRow `#i-camera` glyph | blue camera slot | blue camera slot | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Card `.row` **no-icon** Nhận diện / Mức / Vị trí | text rows · no leading tile | same | **PASS** · demo no `.row-icon` |
| Detect seed «Ổ gà» demo-only | empty `—` until detect | empty `—` until detect | **PASS** GAP-MOB-REAL-01 |
| Checklist PAVEMENT | Ổ gà · nứt · lún · bong · sơn | same · fold2 CTAs | **PASS** |
| CTA Tạo vấn đề · Lưu nháp | both visible (Create dim !GPS) | both · fold2 | **PASS** |
| Tab `field` active · `#i-*` tabs | 5-tab · Tuần đường on | same | **PASS** |
| Watermark / device label | none | none | **PASS** |

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sc-field-reflect` | proto full | A3-CORE | P6-CORE | TopBar · KindPills · PhotoRow · ListRow · Primary/Secondary · Toast | **PASS** |
| Camera pict | `#i-camera` | glyph | glyph | MapFile Camera | **PASS** |
| Detect pict | **no-icon** `.row` | no leading tile | no leading tile | MapFile detectRow | **PASS** |
| Scroll fold | content | A3 full checklist+CTA | P6 + P6-2 | scroll-capture | **PASS** |
| Dual copy VN | SSOT | same | same | demo-parity | **PASS** |

## Should — non-block

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-FIELD-GPS-TIMING-01 | iOS A3 «— · chưa chốt» lúc harvest · Android GPS **QL.1 · Km 468+200 · ±5 m** — env timing · Create dim khi !hasGps | Dev observe · **non-block** |

## Cấm PASS checks

- 3-up / CORE Read done · **PASS**
- Must open = **0** · **PASS**
- CLI ≠ visual · vision done · **PASS**
- GAP-MOB-E2E-VIS-01 · **không**

## Handoff

- Bug log: `qa/bugs/field-reflect.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` · **cấm** start role khác trong task này
