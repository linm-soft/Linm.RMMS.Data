# UX analy — patrol-history-detail (mobile · Chi tiết ca)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · analy control-hint + real-data (hash skip) · PO compact  
**Brand tokens:** primary `#0C84C0` · surface iOS `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`/`#79747E`  
**changeScope:** `edit_page` · Delta timeline live

## 1. IA

```
(auth) Login → Tab 5 (lock — không invent / reorder)
  Tuần đường → … → #sc-patrol-history / today
    → row + Id → push #sc-patrol-detail
#sc-patrol-detail DES-MOB-PAT-DETAIL   ← this pack (Full · sheet meta)
  → back → pop list
  → share → toast «Chia sẻ»
  → GET sessions/{id} · GET …/check-ins live
  → map CTA → patrol-map + Id (no toast khi có Id)
  → end CTA → toast · cấm PUT
  → tl tap done → checkin-detail + Id (≠ toast · ≠ save)
  → [] → tlEmpty · cấm timelineDemo
  → in-screen tabs none · Tab 5 Tuần đường on
```

- **Cấm** gộp list / CI save / invent path / ERP.* / re-scan demo.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-DETAIL `#sc-patrol-detail` | Chi tiết ca | text back Lịch sử · title · ellipsis | icon-only back · title · ellipsis | map / toast / pop |
| DES-MOB-PAT-DETAIL-HERO | Hero | code 28 bold · badge | code ≥26 bold · badge | — |
| DES-MOB-PAT-DETAIL-INFO | Thông tin | 6 ListRow | same copy | — |
| DES-MOB-PAT-DETAIL-TL | Điểm tuần | live rows / empty | same | checkin-detail |
| DES-MOB-PAT-DETAIL-CTA | CTA | Primary + Secondary | same | map / end toast |
| DES-MOB-TABBAR | Tab 5 | Tuần đường on | same | shell |

## 3. Zone

### DES-MOB-PAT-DETAIL / `#sc-patrol-detail`

| Zone | Demo (user thấy) | Map | SwiftUI / Compose |
|------|------------------|-----|-------------------|
| Nav back | ‹ Lịch sử / icon | `#i-chevron-left` | `LinmTopBar` leading |
| Title | Chi tiết ca | `.nav-title` | TopBar title |
| Share | ellipsis | `#i-ellipsis` | trailing → toast |
| Hero | Mã phiên · PAT-* · Đang tuần | `.code-hero` ≥26/28 · `.badge` | Text + `LinmBadge` |
| Info rows | 6 label/value | `.row-label` 13 / `.row-value` ≥16 | `LinmListRow` |
| Timeline | board 3-row **ref** | `.tl-item` · `data-runtime=GET check-ins` | `LinmTimelineRow` live |
| Empty TL | `#tlEmpty` (hidden board) | empty chrome | when `[]` |
| CTA | Mở bản đồ ca · Kết thúc ca | `#btnMap` / `#btnEnd` | Primary / Secondary |
| Toast | Chia sẻ / end / err | `.toast` | `LinmToast` |
| Tab | 5 · Tuần đường | `.tab` | `LinmTabBar` |

**Không** zone: filter · search · embed map · share sheet · leave-dirty · «Có mạng» · watermark · device label.

**States:**

| State | Hành vi |
|-------|---------|
| default | GET session + check-ins bind |
| loading | nhẹ · **cấm** block tab |
| timeline empty | tlEmpty · **cấm** demo 3 rows |
| error session | EmptyChrome + toast · **cấm** fake 200 |
| error check-ins | tl empty + toast · **cấm** timelineDemo |
| 404 | empty · back list |
| leave dirty | **N/A** |

## 4. Copy SSOT

| ✅ | ❌ |
|----|----|
| Chi tiết ca · Lịch sử · Mã phiên · Thông tin · Điểm tuần | EN-only titles |
| PAT-20260810-0014 · Đang tuần · Nguyễn Văn A | invent codes/status |
| QL.1 · … · 10/08/2026 · 07:20 (UTC+7) · 67% | invent session bind |
| Board TL Xuân Hải · Cống ngang · Phước Dinh = **UI ref** | ship timelineDemo runtime |
| Runtime: PlanPointLabel · HH:mm · định vị đạt/chưa đạt · Ảnh ×N | invent DTO |
| Chưa có điểm tuần (empty) | fake 3 rows khi `[]` |
| Mở bản đồ ca · Kết thúc ca · Chia sẻ · Kết thúc ca — xác nhận sau | PUT / share sheet / alert |
| Xem → checkin-detail | toast checkin khi done |

## 5. Brand

Primary `#0C84C0` · iOS surface `#F2F2F7` · Android `#FFFBFE` · card `#FFFFFF`.  
Badge info «Đang tuần» · pending marker orange = board ref only (runtime = check-in DTOs).  
**Cấm** skin CCCD · M3 tím.

## 6. Signal

**N/A** trên detail. **Cấm** boolean «Có mạng» · **cấm** tap-cycle.

## 7. Pictogram

| Control | Motif | SF / Material |
|---------|-------|---------------|
| Back | `#i-chevron-left` | chevron.left / ArrowBack |
| Share | `#i-ellipsis` | ellipsis / more_horiz |
| Tab | house · mappin · warning · wrench · person | kit same `d=` |

Dual **cùng `d=`** cho chevron + ellipsis.

## 8. Motion

Không `/wf-anim` riêng. Toast fade · push/pop list standard · CTA instant.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-PAT-HIST-DET-TIMELINE-01 | board 3-row ≠ runtime | **open → Dev** strip timelineDemo · GET check-ins · empty OK |
| GAP-MOB-PAT-HIST-DET-TAP-01 | board toast label | **open → Dev** nav checkin-detail + Id |
| GAP-MOB-PAT-HIST-DET-MAP-01 | board toast label | **open → Dev** verify nav + Id · no toast |
| GAP-MOB-PAT-HIST-DET-END-01 | end toast | **closed Design** — keep toast P1 · no PUT |
| GAP-DES-DEMO-RESCAN-01 | hash skip | **closed** — analy inventory |
| GAP-MOB-PAT-HIST-DET-PACK-01 | sheet / Full | **closed** — Full surface |
| GAP-MOB-ALIGN-01 | dual chrome | text vs icon back OK · copy đồng |
| GAP-TAB-01 | Tab 5 | Tuần đường on · no in-screen tabs |
| GAP-TYP-01 | sizes | label 13 · field/title ≥16 · code ≥26/28 |
| GAP-MOB-DES-PFX-01 | board prefix | ios/ · android/ |
| GAP-MOB-UX-07 | design ↔ HTML | pack khớp · runtime note |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T13:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
