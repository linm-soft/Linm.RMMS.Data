# UX analy — patrol-home (mobile hub · Tuần đường · edit_page)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · control-hint · PO compact  
**Brand tokens:** primary `#0C84C0` · success `#34C759`/`#3CB448` · warn `#FF9500`/`#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE`

## 1. IA

```
(auth) Login → Tab 5
  Tuần đường (selected) → #sc-patrol-home DES-MOB-PAT-HOME
#sc-patrol-home
  → no active: emptyActive + btn-open-session → POST patrol/sessions → reload
  → has active: heroActive live fields · ẩn mở ca
  → today → detail · btnEndSession → PUT · reload hub
  → nav sync / Lưu trữ → push #sc-patrol-offline
  → keep segment/pin/kpi/quick · sibling toast · cấm sheet
```

- Tab **Tuần đường** = owner slug `patrol-home`.
- Segment idx **0** Tuần đường · **1** Chấm công — **locked** (`GAP-TAB-01`).
- **Cấm** start 6 sibling `pending_confirm` (`GAP-MOB-ACT-06`).
- **Cấm** re-scan demo (hash skip · GAP-DES-DEMO-RESCAN-01).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-HOME `#sc-patrol-home` | Tuần đường | nav · large title · pill seg | top-bar · underline seg | POST mở ca / toast / push |
| DES-MOB-PAT-ACTIVE | Hero ca | `LinmHeroCard` | same | sibling toast |
| DES-MOB-PAT-EMPTY | Hero empty | `LinmHeroCard` + CTA | same | **Mở ca** POST |
| DES-MOB-CI-PIN-HERE | Pin | `LinmPrimaryButton` | same | toast P1 |
| DES-MOB-PAT-KPI | KPI 3 | `LinmKpiStrip` | same | live / — |
| DES-MOB-PAT-TODAY | Hôm nay | `LinmListRow` | same | → detail END PUT |
| DES-MOB-PAT-QUICK | Thao tác nhanh | `LinmListRow` | same | toast / push |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | same | shell |

## 3. Zone

### DES-MOB-PAT-HOME / `#sc-patrol-home`

| Zone | Demo (user thấy) | Map | Native |
|------|------------------|-----|--------|
| Nav sync / notify | icons · badge 0 ẩn | `.nav-btn` / `.icon-btn` | `LinmTopBar` |
| Title | Tuần đường | `.large-title` | `LinmLargeTitle` |
| Segment | Tuần đường / Chấm công | `.seg` | `LinmSegment` |
| heroActive | live route · meta · progress · map/check-in | `#hero-active` | `LinmHeroCard` · empty=`—` |
| emptyActive | Chưa có ca · — · **Mở ca** | `#hero-empty` · `#btn-open-session` | POST |
| Pin | Ghim vị trí hiện tại | `#pin-here` | keep |
| KPI | 2/1/67% hoặc — | `.kpi-strip` | `LinmKpiStrip` |
| Today / Quick | rows | `.row` | `LinmListRow` |
| Toast | nhãn / POST hint | `.toast` | `LinmToast` |
| Tab | Tuần đường on | `.tab` | `LinmTabBar` |

**Không** zone: check-in sheet · map live · «Có mạng» · watermark · badge `3`.

**States:**

| State | Hành vi |
|-------|---------|
| has active | heroActive · ẩn btn-open-session |
| no active | emptyActive + **Mở ca** → POST |
| loading | refresh nhẹ · **cấm** block tab |
| error / offline | toast + empty/`—` · **cấm** demo bind |
| empty fields | `—` · **cấm** QL.1 / Nguyễn Văn A / 07:20 fallback |
| leave dirty | **N/A** |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm |
|-------------------|--------|
| Tuần đường · Chấm công | Patrol EN |
| Ca đang chạy · Tốt/TB/Yếu | «Có mạng» |
| Chưa có ca đang chạy · Mở ca | invent CTA EN |
| — (empty) | mapper sample Km468 / Nguyễn Văn A / 07:20 |
| Đã ghi điểm tuần · Còn lại · Độ phủ | |
| Tiếp tục bản đồ · Ghi điểm tuần · Ghim vị trí hiện tại | openSheet |
| Thông báo · Chấm công (toast) | AlertDialog |

## 5. Brand

Primary `#0C84C0` · hero gradient `#086A9A`→`#0C84C0`→`#2A9AD4` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin CCCD · **cấm** M3 tím tab.

## 6. Signal

`LinmNetSignalMark` · hạng **Tốt / Trung bình / Yếu**. **Cấm** «Có mạng» · tap-cycle product.

## 7. Pictogram

| Control | Motif | Kit |
|---------|-------|-----|
| Sync / Bell / Map / Plus / Pin / Walk / Check / Camera / Video / List | `#i-*` prior | dual same `d=` |

## 8. Motion

Không `/wf-anim`. Segment instant · toast fade · push offline standard · state toggle = preview only.

## 9. GAP

| ID | Quyết định |
|----|------------|
| GAP-PAT-HOME-SESSION-01 | Open → Dev POST mở ca dual |
| GAP-PAT-HOME-SESSION-02 | Open → Dev PUT kết ca dual |
| GAP-PAT-HOME-HERO-01 | Open → Dev purge mapper fallback |
| GAP-DES-DEMO-RESCAN-01 | **closed** — hash skip · no re-scan |
| GAP-MOB-ACT-02 | none child form on hub |
| GAP-MOB-ACT-06 | sibling pending_confirm · không start |
| GAP-TAB-01 | segment 0/1 lock |
| GAP-TYP-01 | label 13 · field ≥16 |
| GAP-MOB-DES-PFX-01 | `ios/` · `android/` |
| GAP-MOB-UX-07 | design ↔ HTML khớp emptyActive + Mở ca |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T15:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 -->
