# Align UX — incident-create (live vs demo)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| zone | `#sc-inc-form` · DES-MOB-INC-FORM · kind DES-MOB-INC-KIND |
| this role | `/review-align-ux-ios-android` · QA `task_2c51c707` |
| verdict | **Aligned** · Must **0** · Should **1** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| TokenFile | `docs/mobile-tokens.json` |
| MapFile | `specs/incident-create/ui/html-to-native-map.md` |
| shots | live = `qa/screens/A3-CORE` + `P6-CORE`(+2) |
| demo | `ui/prototype/{ios,android}/index.html` `#sc-inc-form` · AI `.row` **no-icon** · `#i-camera` photo |
| live capturedAt | `2026-08-29T01:14:03.688Z` · iPhone 17 Pro Max · wm **1080×1920** |
| updatedAt | `2026-08-29T01:16:27.000Z` |

## Vision CORE (Read PNG — bắt buộc)

| Demo HTML | iOS A3-CORE | Android P6-CORE / P6-CORE-2 | Verdict |
|-----------|-------------|-----------------------------|---------|
| Nav back · title **Ghi sự cố** | «Thông tin tài sản» + chevron · title | icon-btn chevron · title · (HIG/Material OK) | **PASS** |
| WalletCard TÀI SẢN ĐÃ CHỌN | CULVERT_X live bind (API) | same | **PASS** · demo BRIDGE = SSOT sample |
| Kind pills Hư/Mất/Hỏng · default Hư | Hư on | Hư on | **PASS** |
| PhotoRow `#i-camera` glyph | blue camera slot | blue camera slot | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Card `.row` **no-icon** Nhận diện | text · no leading tile | same | **PASS** · demo no `.row-icon` |
| Checklist theo loại | CULVERT_X CHK (Sập miệng · Xói) | same · fold2 CTAs | **PASS** |
| CTA Tạo vấn đề · 3 secondary | toast GPS overlay fold1 | Primary + 3 Secondary fold2 | **PASS** |
| Tab `home` active · `#i-*` tabs | 5-tab · Trang Chủ on | same | **PASS** |
| Watermark / device label | none | none | **PASS** |

## Must — PASS

| Zone | Demo | iOS live | Android live | Kit | Verdict |
|------|------|----------|--------------|-----|---------|
| `#sc-inc-form` | proto full | A3-CORE | P6-CORE | TopBar · WalletCard · KindPills · PhotoRow · ListRow · Select · TextArea · Primary/Secondary · Toast | **PASS** |
| Camera pict | `#i-camera` | glyph | glyph | MapFile Camera | **PASS** |
| Detect pict | **no-icon** `.row` | no leading tile | no leading tile | MapFile aiRow | **PASS** |
| Pick `.ak32-ico` 36 | QCVN pict | `LinmAssetKchtPict` | `LinmAssetKchtPict` | MapFile pick | **lock 2026-08-29** |
| Scroll fold | content | A3 form+toast | P6 + P6-2 | scroll-capture | **PASS** |
| Dual copy VN | SSOT zones | same | same | demo-parity | **PASS** |

## Should — non-block

| ID | Note | Owner |
|----|------|-------|
| GAP-QA-INC-GPS-TIMING-01 | iOS A3 «— · chưa chốt» + toast «Chưa lấy được vị trí» lúc harvest · Create gated !hasGps · **cấm** fake lat/lng | Dev observe · **non-block** |

## Cấm PASS checks

- 3-up / CORE Read done · **PASS**
- Must open = **0** · **PASS**
- CLI ≠ visual · vision done · **PASS**
- GAP-MOB-E2E-VIS-01 · **không**

## Handoff

- Bug log: `qa/bugs/incident-create.md` · STATUS **CLOSED** Must 0
- Next: Review `/agent-review-mobile` · **cấm** start role khác trong task này
