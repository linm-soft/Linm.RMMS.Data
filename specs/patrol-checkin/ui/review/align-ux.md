# Align UX — patrol-checkin (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| zone | `#sheet-checkin` · DES-MOB-PAT-CHECKIN-SHEET |
| this role | `/review-align-ux-ios-android` · QA `task_2b5905e4` |
| verdict | **Aligned** · Must **0** · Should **1** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/patrol-checkin/ui/html-to-native-map.md` |
| shots | `ui/review/align/patrol-checkin-{ios,android}.png` · fold2 `patrol-checkin-android-fold2.png` · live = `qa/screens/A3-CORE` + `P6-CORE`(+2) |
| demo | `ui/prototype/{ios,android}/index.html` `#sheet-checkin` · `#i-camera` |
| live capturedAt | `2026-08-28T20:47:00.000Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-29T03:48:00.000Z` |

## Vision CORE (Read PNG — bắt buộc)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav **Hủy** / **Ghi điểm tuần** / **Lưu** | same | same | **PASS** |
| Banner `DES-MOB-LOC-MISMATCH` | **Đúng điểm · 0 m · ±5 m · ghim tự động** (green) | same green match | **PASS** |
| Fields KH / Tuyến / GPS / Cách điểm / Nội dung | prefill SSOT + GPS `11.6030,109.0160` + fill notes | same zones · GPS pinned | **PASS** |
| `#i-camera` photo add | dashed slot + camera glyph | fold2 camera glyph | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Primary **Ghi nhận điểm tuần** + **Hủy** | both visible | both on P6-CORE-2 | **PASS** |
| Watermark / «iPhone» label | none | none | **PASS** |

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sheet-checkin` | proto sheet | A3-CORE | P6-CORE | `LinmSheet` · Banner · Fields · Photo · Primary/Secondary | **PASS** |
| Pict `#i-camera` | SVG use | SF camera | Material CameraAlt outline | MapFile PhotoRow | **PASS** |
| Scroll all fold | sheet body | A3 full CTA | P6 + P6-2 | scroll-capture | **PASS** |
| Form fill→submit | demo filled | fill Nội dung · matchOk enables CTA | CTA visible fold2 · GPS matchOk | form-field-e2e | **PASS** |
| Dual copy VN | SSOT | same | same | demo-parity | **PASS** |

## Should — non-block

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-A11Y-SHEET-TAG-01 | Android ModalBottomSheet `testTag(sheet-checkin)` không expose `resource-id` · Maestro assert text | `/edit-mobile-feature` kit · **non-block** |

## Cấm PASS checks

- 3-up / CORE Read done · **PASS**
- Must open = **0** · **PASS**
- CLI ≠ visual · vision done · **PASS**
- GAP-MOB-E2E-VIS-01 · **không**

## Handoff

- Bug log: `qa/bugs/patrol-checkin.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` · **cấm** start role khác trong task này
