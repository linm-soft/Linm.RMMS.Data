# UX analy — patrol-offline (edit_page · replay annotate)

**Sources:** `ui/prototype/ios` · `ui/prototype/android` · `ui/design.md` · `_data-analy` § Delta (hash skip · **cấm** re-scan)  
**Brand tokens:** primary `#0C84C0` · warn `#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE` · card `#FFFFFF`

## 1. IA

```
Tab 5 shell (IA 5 — không đổi)
  Home (#sc-home) tile «Lưu trữ» (#i-sync)
  Me (#sc-me) row «Hàng đợi mất sóng»
  Patrol-home nav «Đồng bộ» (reuse route · stub OK P1)
    → push #sc-patrol-offline DES-MOB-PAT-OFFLINE
#sc-patrol-offline
  → Back «Trang Chủ» = pop parent
  → «Đồng bộ» = replay checkIn → POST patrol/sessions/{id}/check-ins
       · optional POST integration/sync/offline-batch receipt
  → Segment 0 = điểm tuần pending · 1 = sự cố pending (P2 · không clear)
  → không child form / sheet / xóa từng bản ghi / conflict UI
```

- Màn **push** trên tab shell — **không** thay tab selected.
- **Cấm** invent tab · GET queue API · layout redesign.
- Badge Me `offlineCount` local — **cấm** badge số trên Home tile.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-PAT-OFFLINE `#sc-patrol-offline` | Dữ liệu lưu trữ | Nav text back + sync · segment · cards | same | Đồng bộ = replay |
| DES-MOB-PAT-OFFLINE-SEG | Segment 2 | `LinmSegment` | `LinmSegment` | filter |
| DES-MOB-PAT-OFFLINE-BANNER | Banner | `LinmBanner` warning | same | — |
| DES-MOB-PAT-OFFLINE-CARD | Rich card ×N | thumb 56 + status strip | same | display |

## 3. Zone

### DES-MOB-PAT-OFFLINE / `#sc-patrol-offline`

| Zone | Demo (user thấy) | Map | SwiftUI | Compose |
|------|------------------|-----|---------|---------|
| Nav back | «Trang Chủ» + chevron | `.nav-bar` / `.nav-btn` | `LinmTopBar` text leading | same |
| Nav title | Dữ liệu lưu trữ | `.nav-title` | TopBar title | TopAppBar |
| Nav sync | «Đồng bộ» text | `#btn-sync` | TopBar text trailing | same · **replay** |
| Segment | 2 tab | `.seg` | `LinmSegment` | same |
| Banner | wifi-off + copy | `.offline-banner` | `LinmBanner` | same |
| Card | title · mappin · content · time · Chờ gửi | `.rich-card` | rich card | same |
| Hidden payload | — | data attrs annotate | local store | sessionId + body |
| Toast | sync / empty / error | `.toast` | `LinmToast` | same |
| Busy | replay in-flight | loading | `LinmBusyOverlay` | same |

**Không** zone: tab 5 · «Có mạng» · watermark · form input · clear-all control.

**States:**

| State | Hành vi |
|-------|---------|
| default | segment 0 · pending cards · banner |
| segment 1 empty | list rỗng · banner ẩn · toast incidentEmpty |
| first launch | seed 1 lần (`GAP-F-OFFLINE-01`) · production = real enqueue |
| sync OK full | toast N · remove all checkIn OK · optional receipt |
| sync partial | toast N OK · **giữ** fail items |
| sync fail/offline | toast lỗi · **giữ** queue · **cấm** alert / clear |
| sync incident tab | **không** xóa incident (P2) |
| post-sync | persist remaining · **cấm** re-seed |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

| ✅ HTML / strings | ❌ Cấm trên máy |
|-------------------|-----------------|
| Dữ liệu lưu trữ | Offline queue EN |
| Trang Chủ | Back only icon |
| Đồng bộ | Sync EN only |
| Điểm tuần mất sóng · Sự cố mất sóng | đổi thứ tự tab |
| Tín hiệu yếu — ghi cục bộ, đồng bộ khi tín hiệu tốt | «Có mạng» |
| Chờ gửi (pill ngắn) | status dài |
| Đã đồng bộ N bản ghi | N = apply OK · **không** clear mù |
| Sự cố mất sóng · chưa có bản ghi | fake count |

## 5. Brand

Primary `#0C84C0` · warn `#FCB43C` · surface iOS `#F2F2F7` · surface Android `#FFFBFE` · card `#FFFFFF` · muted `#8E8E93`.

## 6. Signal

Banner = yếu sóng khi pending>0 trên tab hiện tại — **không** boolean «Có mạng».

## 7. Pictogram

| Control | Motif | SF | Material |
|---------|-------|-----|----------|
| Back | chevron + text | `chevron.left` | `ArrowBack` |
| Banner | wifi off | `wifi.slash` | `WifiOff` |
| Location | mappin | `mappin` | `Place` |
| Entry | sync | `arrow.triangle.2.circlepath` | `Sync` |

## 8. Motion

Không `/wf-anim`. Segment = instant filter · toast fade.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-F-OFFLINE-01 | Seed vs post-sync | Seed 1 lần · sync OK → không re-seed |
| GAP-DES-REPLAY-01 | Sync = offline-batch clear | **edit_page** · replay POST check-ins · remove chỉ 2xx |
| GAP-DES-PAYLOAD-01 | Display-only queue | Persist sessionId + body dual enqueue |
| GAP-DES-INCIDENT-01 | Sync clears incident | P2 keep · **cấm** clear incident |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **cấm** re-scan demo |
| GAP-MOB-ACT-PAT-OFFLINE-01 | Patrol-home Đồng bộ | Defer stub OK P1 |
| GAP-TAB-01 | Segment order | idx 0 check-in · 1 incident — locked |
| GAP-MOB-ALIGN-01 | Dual parity | Cùng zones + copy |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-09-12T14:31:03.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-offline-delta-apply-checkins-20260912 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
