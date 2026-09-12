# Align UX — field-reflect (live vs demo)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| zone | `#sc-field-reflect` · DES-MOB-FIELD-REFLECT · kind DES-MOB-FIELD-KIND |
| this role | `/review-align-ux-ios-android` · QA `task_003bfdc2` |
| verdict | **Aligned** · Must **0** · Should **0** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/field-reflect/ui/html-to-native-map.md` |
| shots | live = `qa/screens/A3-CORE` + `P6-CORE`(+2) |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-field-reflect` · card `.row` **no-icon** · `#i-camera` photo |
| live capturedAt | `2026-09-12T11:11:32.196Z` · iPhone 17 Pro Max · Pixel **1080×1920** |
| gap | `field_reflect_sessions_live_only` · **GAP-MOB-FIELD-SESS-01** CLOSED |
| updatedAt | `2026-09-12T11:12:00.000Z` |

## Vision CORE (Read PNG — bắt buộc)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav back · title **Ghi nhận hư hỏng** | «Chọn tài sản» + title | Material back · title | **PASS** |
| Kind pills Hư/Mất/Hỏng · default Hư | Hư on | Hư on | **PASS** |
| PhotoRow `#i-camera` glyph | blue camera slot | blue camera slot | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Card `.row` **no-icon** Nhận diện / Vị trí | text rows · no leading tile | same | **PASS** |
| locationRow live-only | `— · chưa chốt` (empty/GPS) | live GPS fold2 `QL.1…` | **PASS** · **cấm** demoToday · GAP-QA-FIELD-GPS-TIMING-01 Defer |
| Checklist BRIDGE | Khe co giãn · Lan can | same | **PASS** |
| Severity Cao · mô tả placeholder | **PASS** | **PASS** | **PASS** |
| CTA Tạo / Draft | below fold Accept | visible P6-2 | **PASS** |
| Tab `field` active | Tuần đường on | same | **PASS** |
| Watermark / device label | none | none | **PASS** |

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sc-field-reflect` | proto full | A3-CORE | P6-CORE | TopBar · KindPills · PhotoRow · ListRow · Primary/Secondary | **PASS** |
| Camera pict | `#i-camera` | glyph | glyph | MapFile Camera | **PASS** |
| Detect/loc pict | **no-icon** `.row` | no leading tile | no leading tile | MapFile | **PASS** |
| Sessions live-only | empty/fail/`?empty=1` | empty loc | live GPS OK | GAP-MOB-FIELD-SESS-01 | **PASS** |
| Scroll fold | content | A3 | P6 + P6-2 | scroll-capture | **PASS** |
| Dual copy VN | SSOT | same | same | demo-parity | **PASS** |

## Should

| id | note | disposition |
|----|------|-------------|
| — | none | — |

## align_confirm

**approve** · autoApprove ON · Must 0 · CLI `ok=true` · next Review.
