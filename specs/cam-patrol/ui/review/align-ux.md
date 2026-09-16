# Align UX — cam-patrol (live vs demo)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| zone | `#sc-cam-patrol` · DES-MOB-CAM-PATROL · finder DES-MOB-CAM-FINDER |
| this role | `/review-align-ux-ios-android` · QA `task_6ba51c44` |
| verdict | **Aligned** · Must **0** · Should **1** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/cam-patrol/ui/html-to-native-map.md` |
| shots | `ui/review/align/cam-patrol-{ios,android}.png` · fold2 `cam-patrol-android-fold2.png` · live = `qa/screens/A3-CORE` + `P6-CORE`(+2) |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-cam-patrol` · rows **`no-icon`** |
| live capturedAt | `2026-08-28T21:58:17.185Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-28T21:59:16.000Z` |

## Vision CORE (Read PNG — bắt buộc)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav back · title **Thu thập bằng camera** | «Tuần đường» + chevron · title | icon-btn chevron · title · (HIG/Material OK) | **PASS** |
| Finder FOV `#5AC8FA` + stamps | FOV box · route · GPS waiting/lock | live camera + FOV · GPS **đã chốt** | **PASS** |
| Detect `.row.no-icon` Phát hiện / Hành động | text rows · **no** leading tile | same · `leadingSlot=0` | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Score 91% demo-only | **ẩn** | **ẩn** | **PASS** GAP-MOB-CAM-SCORE-01 |
| CTA Confirm · Skip | both visible | both · fold2 | **PASS** |
| Tab `field` active · `#i-*` tabs | 5-tab · Tuần đường on | same | **PASS** |
| Watermark / device label | none | none | **PASS** |

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sc-cam-patrol` | proto full | A3-CORE | P6-CORE | TopBar · Finder · ListRow · Primary/Secondary · Toast | **PASS** |
| Detect pict | **`no-icon`** | EmptyView leading | leadingSlot 0 | MapFile rowDetect/Action | **PASS** |
| Scroll fold | content | A3 full CTA | P6 + P6-2 | scroll-capture | **PASS** |
| Dual copy VN | SSOT | same | same | demo-parity | **PASS** |

## Should — non-block

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-CAM-GPS-TIMING-01 | iOS A3 stamp «Đang lấy định vị…» lúc harvest · Android đã chốt ±5 m — env timing · Confirm dim khi !hasGps | Dev observe · **non-block** |

## Cấm PASS checks

- 3-up / CORE Read done · **PASS**
- Must open = **0** · **PASS**
- CLI ≠ visual · vision done · **PASS**
- GAP-MOB-E2E-VIS-01 · **không**

## Handoff

- Bug log: `qa/bugs/cam-patrol.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` · **cấm** start role khác trong task này
