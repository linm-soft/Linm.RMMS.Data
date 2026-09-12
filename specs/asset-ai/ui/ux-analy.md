# UX analy — asset-ai (mobile)

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_a951f813` · `2026-09-01T17:10:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:asset-ai-control-hint-20260901` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Trang Chủ (shell Tab 5 · index home)
  → asset-hub tile «Camera AI» (#i-camera)
       → push #sc-asset-ai (owner DES-MOB-ASSET-AI)
  → #sc-asset-ai
       → Section «Chụp tài sản / thiết bị mới»
       → PhotoRow + CameraButton openCapture('asset-ai')
       → ListRow Vị trí đã chốt (Route+GPS *)
       → ListRow Loại đề xuất / Độ tin cậy (sau detect · Score % P1)
       → Primary POST detect-assets → toast Code → enqueue det-hitl
       → Secondary Hủy → pop asset-hub
  → GPS deny → DES-MOB-GPS-DENY · CTA off
  → Confirm/Dismiss → OUT (sibling det-hitl)
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`home`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-AI / `#sc-asset-ai` | Camera AI | nav back «Tài sản» + chevron · title 17 · Tab 5 home | icon-btn chevron · TopAppBar ~20 · Nav 5 home | Gửi nhận diện / Hủy |
| GPS deny (`?gpsdeny=1`) | Định vị bị tắt… | in-app banner | same | chặn primary |

## 3. Zone

### DES-MOB-ASSET-AI

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tài sản · Camera AI | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Section | Chụp tài sản / thiết bị mới | A `.section-label` | SectionLabel | same |
| Photo | slot + camera | A `.photo-row` · `#i-camera` | PhotoRow · CameraButton | same |
| rowPos | Vị trí đã chốt / QL.1 · Km… | A `.row` | `LinmListRow` | same |
| rowClass | Loại đề xuất / Cống | A `.row` | `LinmListRow` | same |
| rowScore | Độ tin cậy / 91% | A `.row` | `LinmListRow` | **P1 show %** |
| Primary | Gửi nhận diện | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Hủy | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | Code / err | D toast | `LinmToast` | same |
| GPS deny | Định vị bị tắt… | `.banner` | `DES-MOB-GPS-DENY` | same |
| Tab | home active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**States:** default SSOT · GPS deny + disable primary · no photo block send · busy primary · success toast+HITL · 422/network toast (**cấm** fake 200) · offline toast · pre-detect class/score `—`

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tài sản»).

**Cấm trên máy:** watermark «bản Gói N» · device label · «Có mạng» · fake Code · bottom-sheet · Confirm/Dismiss · gõ tay tọa độ · mock://.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | GPS deny / warn |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · photo |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub / section |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

| Signal | Pattern |
|--------|---------|
| Success | `LinmToast` Code · navigate `det-hitl` |
| Error | `LinmToast` · giữ form |
| GPS deny | banner + CTA off |
| Loading | primary busy |
| Empty photo | disable / toast validate |

**Cấm** system alert / AlertDialog (`GAP-MOB-ALERT-01`).

## 7. A11y / touch

| Gate | Value |
|------|-------|
| Hit target | ≥44×44 (iOS) / ≥48dp (Android) — camera · CTA · back |
| Contrast | label/muted trên surface/card đạt WCAG AA intent |
| Dynamic Type | row value ≥16 · section/label 13 |

## 8. Platform parity

| Item | Parity |
|------|--------|
| Zones / copy / bind | **same** dual |
| Back chrome | iOS text+chevron · Android icon-only — **OK** |
| Radius | iOS 12 · Android 16–28 — **OK** |
| Score % | **same** show P1 |

## 9. DoR → Dev

| Check | Status |
|-------|--------|
| dual reviewUrl + `#sc-asset-ai` | PASS |
| controlHint inventory mapped | PASS |
| real-data §B bind | PASS |
| SCORE-01 show % | PASS |
| HITL OUT · det-hitl enqueue | PASS |
| no invent path / ERP.* / mfeStdUrl | PASS |
| design_confirm autoApprove | **approve** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| generatedAt | 2026-09-01T17:10:00.000Z |
| contentHash | sha256:asset-ai-ux-analy-20260901 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 -->
