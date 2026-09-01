# Align UX — patrol-checkin (live vs demo)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| zone | `#sheet-checkin` · DES-MOB-PAT-CHECKIN-SHEET |
| this role | `/review-align-ux-ios-android` · QA `task_753d9648` |
| verdict | **Aligned** · Must **0** · Should **2** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/patrol-checkin/ui/html-to-native-map.md` |
| shots | live = `qa/screens/A3-CORE` + `P6-CORE`(+2) · align copies `ui/review/align/` |
| demo | `ui/prototype/{ios,android}/index.html` `#sheet-checkin` |
| live capturedAt | `2026-09-01T07:12:56.182Z` · iPhone 17 Pro Max · AVD 1080×1920 |
| updatedAt | `2026-09-01T07:15:30.000Z` |
| edit note | cleanup_mock live-only · plan/route = session `QL.1` (không demo Phước Dinh) |

## Vision CORE (Read PNG)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav **Hủy** / **Ghi điểm tuần** / **Lưu** | same | same | **PASS** |
| Banner match/mismatch | orange loading GPS (timing) | green **Đúng điểm · 0 m · ±5 m** | **PASS** structure · Should timing |
| Fields KH / Tuyến / GPS / Cách / Nội dung | `QL.1` live + notes fill | `QL.1` + GPS `21.0285,105.8048` · fold2 Ảnh+CTA | **PASS** |
| `#i-camera` photo | dashed + camera | fold2 camera | **PASS** |
| Primary **Ghi nhận điểm tuần** + **Hủy** | both | fold2 both | **PASS** |
| Watermark | none | none | **PASS** |

## Must — PASS

| Zone | Verdict |
|------|---------|
| `#sheet-checkin` zones | **PASS** |
| PhotoRow camera | **PASS** |
| Scroll fold | **PASS** |
| Dual copy VN | **PASS** |

## Should — non-block

| ID | Note |
|----|------|
| GAP-QA-A11Y-SHEET-TAG-01 | Android sheet testTag resource-id |
| GAP-QA-GPS-TIMING-01 | iOS A3 GPS loading at capture |

## Cấm PASS checks

- CORE Read done · Must open **0** · CLI ≠ visual done · GAP-MOB-E2E-VIS-01 **không**

## Handoff

Next: Review `/agent-review-mobile` · **cấm** start role khác trong task này.
