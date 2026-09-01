# UX analy — me-settings

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_d7095795` · `2026-08-30T20:25:00.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:me-settings-control-hint-20260830` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)

## 1. IA

```
Login → Tab Tôi (shell Tab 5 · index me)
  → Hub #sc-me
       → row-settings #i-gear → push #sc-me-settings (owner)  [thay toast]
  → #sc-me-settings DES-MOB-ME-SETTINGS
       → Section «Quyền ứng dụng»
       → ListRow Vị trí / Camera / Thông báo hệ thống → openAppSettings
       → Secondary «Mở Cài đặt hệ thống» → openAppSettings
       → Section «Đồng bộ» → row Hàng đợi mất sóng → reuse patrol-offline
       → Section «Thông tin» → Phiên bản (Bundle) · Chính sách → privacy panel
       → toast fail OS
  → back → me
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`me`** active.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ME-SETTINGS / `#sc-me-settings` | Cài đặt | nav back «Tôi» + chevron · title 17 · Tab 5 me | icon-btn chevron · TopAppBar title · Nav 5 me | Mở Cài đặt hệ thống |
| DES-MOB-ME-SETTINGS-PRIVACY | Chính sách quyền riêng tư | push panel · back «Cài đặt» | same | — |

## 3. Zone

### DES-MOB-ME-SETTINGS

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Tôi · Cài đặt | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| Section perm | Quyền ứng dụng | A `.section-label` | `LinmSectionLabel` 13 | same |
| rowLocation | Vị trí + status | A `.row` `#i-mappin` | `LinmListRow` | same |
| rowCamera | Camera + status | A `.row` `#i-camera` | `LinmListRow` | same |
| rowNotifyOs | Thông báo hệ thống | A `.row` `#i-bell` | `LinmListRow` | same |
| CTA OS | Mở Cài đặt hệ thống | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Section sync | Đồng bộ | A `.section-label` | `LinmSectionLabel` | same |
| rowOffline | Hàng đợi mất sóng | A `.row` `#i-sync` | `LinmListRow` nav | same |
| Section about | Thông tin | A `.section-label` | `LinmSectionLabel` | same |
| appVersion | Phiên bản · value | A `.version-row` | Text display | same |
| rowPrivacy | Chính sách quyền riêng tư | A `.row` `#i-info` | `LinmListRow` | same |
| Toast | Không mở được Cài đặt hệ thống | D toast | `LinmToast` | same |
| Tab | me active | A `.tab-bar` / `.nav-bar` | `LinmTabBar` | NavigationBar |

**States:** default (OS status bind) · unknown status · OS open fail toast · empty version «—» · offline màn vẫn mở · privacy panel · **cấm** system alert · **cấm** fake «Đã lưu»

### DES-MOB-ME-SETTINGS-PRIVACY

| Zone | Demo | Map row | SwiftUI | Compose |
|------|------|---------|---------|---------|
| Title | Chính sách quyền riêng tư | `h2` / copy title | Text | same |
| Body | `home.privacy.body` | `#privacy-body` | Text scroll | same |
| Back | Cài đặt | leading | pop | same |

**Cấm** invent HTTPS landing (`GAP-MOB-MESET-PRIVACY-01`).

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Tôi»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake toast «Đã lưu cài đặt» · invent prefs API.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint · Vị trí icon |
| Deep | `#086A9A` | accent |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | list groups |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / section / status |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này · **cấm** tap-cycle proto · **cấm** «Có mạng» (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-chevron-right` | `M9 5l7 7-7 7` | SF `chevron.right` / Material `ChevronRight` |
| `#i-mappin` | pin + circle r=2.2 | SF `mappin` / Material `Place` |
| `#i-camera` | body + lens | SF `camera` / Material `PhotoCamera` |
| `#i-bell` | bell | SF `bell` / Material `Notifications` |
| `#i-sync` | dual arcs | SF sync / Material `Sync` |
| `#i-info` | circle + i | SF `info.circle` / Material `Info` |
| `#i-gear` | cog (entry) | SF `gearshape` / Material `Settings` |
| Tab shell | home / mappin / warning / wrench / person | reuse |

**Cấm** invent tab icon / FaceID/Finger bind P1.

## 8. Motion

Pack P1: toast fade ~2.4s · privacy panel push · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-MESET-DEMO-01 | thiếu dual HTML | **IN** · dual `#sc-me-settings` · closed |
| GAP-MOB-MESET-NAV-01 | Me toast → push | **IN** · push owner |
| GAP-MOB-MESET-SCR-01 | thiếu màn | **IN** · DES-MOB-ME-SETTINGS |
| GAP-MOB-MESET-OS-01 | deep-link OS | openAppSettings · toast fail |
| GAP-MOB-MESET-STATUS-01 | status quyền | Đã cấp / Chưa cấp / Không xác định · **không** request |
| GAP-MOB-MESET-VER-01 | version | Bundle `x.y.z (build)` · empty «—» |
| GAP-MOB-MESET-PRIVACY-01 | Privacy URL | static `home.privacy.*` · HTTPS khi khách giao |
| GAP-MOB-MESET-API-01 | prefs server | **P1 skip** · **cấm invent** |
| AC-D-01 | offline | màn local mở · **cấm** fake save |
| AC-D-02 / AC-D-11 | GPS/Camera | status-only · tap → OS |
| AC-D-03 | leave dirty | **N/A** |
| AC-D-04 | alert | **cấm** system · Toast only |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-07 | biometric | **N/A** P1 |
| AC-D-08 | signal | **N/A** · **cấm** «Có mạng» |
| AC-D-10 | tab | Tab Tôi active · **cấm** segment |
| AC-D-12 | push | OS only ≠ ops inbox |
| AC-F-01 | appear/resume | refresh OS status |
| AC-F-02 | openAppSettings | rows + CTA · fail toast |
| AC-F-03 | version | Bundle readonly |
| AC-F-04 | privacy | reuse copy |
| AC-F-05 | offline nav | → patrol-offline |
| AC-F-06 | dual parity | cùng copy zones |
| AC-F-07 | entry | Me → push · **cấm** toast-only |
| AC-F-08 | ≠ siblings | **cấm** gộp profile/logout/ops |
| AC-F-09 | no fake save | **cấm** «Đã lưu cài đặt» |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ |
| DEFER | bezel HTML | chrome native HIG/Material |

## Gate

Must open = **0** · packet §1–§9 đủ · handoff SA (`be/solution-discovery.md` pending).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-30T20:25:00.000Z |
| contentHash | sha256:me-settings-control-hint-20260830 |
| designContentHash | sha256:me-settings-design-20260830 |
| taskId | `task_d7095795` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
