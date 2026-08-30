# PLAN — Release mobile (Store waves + toggle)

> **Slash:** `/plan-release-mobile` · alias `/release-mobile-plan`  
> **Gate Submit:** `/review-app-submit` (fail closed · **cấm** READY_TO_SUBMIT từ PLAN này)  
> **Law:** `/review-app-vn-map-law` · [`legal-tech-corridor.md`](../../context/features/legal-tech-corridor.md)  
> **Flags SSOT:** [`flags.json`](flags.json) — hand-sync `ReleaseFlags` iOS + Android  
> **Chốt wave hiện tại:** **0** (`w0_store`) · 2026-08-29

## HARD

| ❌ | ✅ |
|----|-----|
| Xóa màn/API đã implement để “gọn Store” | Giữ code · `flags.*` = `false` · ẩn tile/tab/route |
| Screenshot / e2e màn OFF | Capture + Maestro **chỉ** surface ON |
| Public OSRM / OSM.org CDN ở wave 0 | `net.osrmPublic` · `net.osmCdn` = false |
| Geo-block reviewer | Không chặn IP / quốc gia |
| Nói READY_TO_SUBMIT | Chain `/run-mobile-e2e` rồi `/review-app-submit` |

Gaps: `GAP-REL-DELETE-01` · `GAP-REL-LEAK-01` · `GAP-REL-SHOT-01` · `GAP-REL-OSM-01` · `GAP-REL-GEO-01` · `GAP-REL-BG-01` · `GAP-REL-SUBMIT-01`.

---

## Wave matrix (QLBD)

| Wave | ON (hiển thị) | OFF (toggle, không xóa) | Mở hồ sơ trước khi bật |
|------|---------------|-------------------------|------------------------|
| **0** Store 1.0 | Guest home (Khách, login CTA, FAQ, privacy) · staff lists sau JWT (supervise, history, offline, mnt-*, incident-list, asset-hub **list**, feedback, me, ops) | patrol-map/pin · attendance GPS · cam-* · field-reflect · directions · guest lat/lng · asset map/AI · public OSRM/OSM CDN | Landing HTTPS · `PrivacyInfo.xcprivacy` |
| **1** Map guest | + clip map + directions | Field GPS / cam | gis.vn 34 tỉnh · self-host tile/OSRM |
| **2** Field | + WhenInUse patrol / attendance | Always location · cam AI vận hành | Văn bản GTVT |
| **3** Camera | + cam + GPS field | — | DPIA A05 |

---

## Flag keys (wave 0)

| Key | Wave 0 | Ghi chú |
|-----|--------|---------|
| `guest.home` / `guest.faq` / `guest.privacy` / `guest.login` | true | Utility Store · không GPS |
| `staff.lists` | true | List không xin location |
| `guest.directions` | false | Wave 1 |
| `staff.patrolMap` / `staff.attendanceGps` | false | Wave 2 |
| `staff.camera` | false | Wave 3 |
| `net.osrmPublic` / `net.osmCdn` | false | Mọi wave Store cho đến self-host |

---

## Tasks

| # | Task | DoD |
|---|------|-----|
| 0.1 | Khóa `flags.json` wave 0 | File committed · wave = 0 |
| 0.2 | `/plan-release-mobile` review + wire `#if` / flavor | Dual OS · **cấm** Delete · `GAP-REL-IF-01` = 0 |
| 0.3 | `/build-release-app` | AskQuestion platform + phase · Archive / AAB StoreW0 |
| 0.4 | e2e + screenshot **chỉ** ON | `/run-mobile-e2e` `store_wave=w0_store` trên artifact 0.3 |
| 0.5 | Submit | `/review-app-submit` — còn `GAP-SUBMIT-*` / `GAP-REL-*` → **cấm** Submit |

`0.2`–`0.3` = skill (chưa wire native / chưa có flavor StoreWn trên repo).

---

## Chain

```
implement ALL features (pipeline / edit)
  → /plan-release-mobile   review + add compile if
  → /build-release-app     AskQuestion platform rồi phase
  → /run-mobile-e2e        store_wave = phase · ON only
  → /review-app-submit     submit_phase → toggle_confirm → stores
  → READY_TO_SUBMIT | GAP-SUBMIT-* / GAP-E2E-WAVE-01
```
