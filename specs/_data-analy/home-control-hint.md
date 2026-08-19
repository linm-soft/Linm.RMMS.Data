# Control hint — home (mobile hub)

| | |
|---|---|
| feature | `home` |
| kind | `hub` |
| packKind đề xuất | `hub` (tab Trang Chủ · **cấm** Lin* list / Kind A–G web · **≠** `dashboard`) |
| changeScope | `new_page` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-home` · pack `specs/home/ui/prototype/{ios,android}/index.html` |
| ctx | `docs/context/features/home.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T05:22:12.000Z` |
| thisAction | **Hub Trang Chủ** only · children enqueue `pending_confirm` · reuse `me` / `ops` / `patrol-offline` |
| taskId | `task_46fb294c` |

## Skill packet (`/agent-data-analy-mobile`) — 3 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`home-bff-endpoints.md`](home-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`home-action-tree.md`](home-action-tree.md) | 7 tree + share/reuse |

## UI control — như thế nào

Màn `#sc-home` = hero + quick + grid + wallet (**không** form submit). Design kit dual · Dev **cấm** raw grid/`LazyVerticalGrid` khi thiếu hàng map → `kit_missing_confirm`.

| Field / zone | controlHint | Kit (iOS + Android cùng turn) | Native |
|--------------|-------------|-------------------------------|--------|
| heroTools | Hero tools | `LinmHeroTools` | Profile + Notify |
| profile | Profile button | `LinmProfileButton` | sibling `me` (reuse) |
| notify | Notify + badge | `LinmNotifyButton` · `LinmNotifyCountBadge` | sibling `ops` (reuse) |
| roleSignal | Status capsule | `LinmStatusCapsule` | chrome · **cấm** «Có mạng» |
| who | Text display | — (typography hero) | GET `auth/profile` |
| quick | Quick 2 ô | `LinmQuickActions` · `LinmQuickItem` | siblings |
| section | Section label | `LinmSectionLabel` | không route |
| grid | Home grid 3×2 | `LinmHomeGrid` · `LinmHomeTile` | siblings |
| wallet | Wallet card | `LinmWalletCard` | sibling `asset-hub` |
| foot | Watermark | — | **cấm** ship |
| tabbar | Tab 5 | `LinmTabBar` | `shell-tabs` `shared_kit` |

## Fields (`#sc-home` — dual parity)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| profileBtn | Hồ sơ | ProfileButton | * | `go('me')` | `reuse=me` |
| notifyBtn | Thông báo | NotifyButton | * | `go('ops')` | badge ẩn khi 0 · `reuse=ops` |
| roleLine | Khu QLĐB IV | Text display | | demo mock | **không** invent org API · có thể ẩn live |
| signal | Tín hiệu | SignalQuality | * | `data-net-signal` | `shared_kit` `me-signal` |
| who | (live FullName) | Text display | * | GET `auth/profile` · demo «Nguyễn Văn A» | **cấm** hardcode production |
| quickPatrol | Điểm tuần | QuickItem | * | `go('patrol-home')` | phụ «Ghim định vị · lý trình» |
| quickIncident | Ghi sự cố | QuickItem | * | `startIncidentPick()` | sibling `incident-create` |
| sectionBiz | Nghiệp vụ thường dùng | SectionLabel | * | `.section-label` | không route |
| tileSupervise | Giám sát | HomeTile | * | `go('supervise')` | `#i-list` · bg `#FCB43C` |
| tilePatrol | Tuần đường | HomeTile | * | `go('patrol-home')` | `#i-mappin` · bg `#F03C30` · cùng slug quick |
| tileMnt | Công việc | HomeTile | * | `go('mnt-list')` | `#i-wrench` · bg `#3CB448` |
| tileIncident | Vấn đề | HomeTile | * | `go('incident-list')` | `#i-warning` · bg `#FCB43C` |
| tileAsset | Tài sản | HomeTile | * | `go('asset-hub')` | `#i-cube` · bg `#0C84C0` |
| tileOffline | Lưu trữ | HomeTile | * | `go('patrol-offline')` | `#i-sync` · bg `#086A9A` · `reuse=patrol-offline` |
| wallet | HỒ SƠ TÀI SẢN | WalletCard | * | `go('asset-hub')` | cùng slug tile Tài sản · copy demo |
| foot | Phiên bản Gói 1… | — | | watermark | **cấm** implement |
| tabHome | Trang Chủ | Tab | * | `DES-MOB-TABBAR` | chrome shell |

## Không có trên slug `home` (cấm gộp)

| Surface | Lý do |
|---------|--------|
| `#sc-me` / `#sc-ops` / `#sc-patrol-home` / `#sc-supervise` / `#sc-mnt-list` / `#sc-incident-list` / `#sc-asset-hub` / `#sc-patrol-offline` / `#sc-inc-form` | sibling `{feature}` |
| Web KPI dashboard | pack `dashboard` web — **≠** mobile home |
| Submit / Lưu trên hub | **không** — **GAP-MOB-ACT-07** |
| `.home-foot` Gói N | watermark process — **cấm** ship |

## Kit map (Design → Dev)

Nguồn `docs/html-to-native-map.md`. Thiếu kit dual → Design `kit_missing_confirm=implement_kit`.

| Demo chrome | Map | Kit dual |
|-------------|---------|----------|
| `.vn-hero-tools` | hero tools | `LinmHeroTools` |
| `.hero-ico` person | profile | `LinmProfileButton` |
| `.hero-ico` + `.dot` | notify | `LinmNotifyButton` · `LinmNotifyCountBadge` |
| `.role` + `data-net-signal` | status | `LinmStatusCapsule` |
| `.vn-quick` | quick | `LinmQuickActions` · `LinmQuickItem` |
| `.section-label` | label | `LinmSectionLabel` |
| `.home-grid` / `.home-tile` | grid | `LinmHomeGrid` · `LinmHomeTile` |
| `.wallet-card` | wallet | `LinmWalletCard` |
| `.tabbar` | tabs | `LinmTabBar` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | Hub `home` | Note |
|--------|----------|------|
| GPS | no | quick/tile Tuần đường = sibling `patrol-home` |
| camera | no | Ghi sự cố = sibling `incident-create` |
| offline | **hub vẫn mở** | GET profile fail → fallback `lastUserName` · **cấm** block tab |
| map | no | — |
| biometric | no | — |
| push | no | badge Thông báo = sibling `ops` |
| token | Keychain / Encrypted | GET `auth/profile` Bearer |

## Hành vi (không `alert`)

| Case | UI |
|------|----|
| Profile OK | `.who` = `fullName` (trim) · role ẩn nếu không có field live |
| Profile fail / offline | `.who` = `lastUserName` · toast in-app **không** chặn màn |
| Tap sibling (tile / quick / wallet / hero) | **Không** mở màn sibling trong turn `home` · toast tên hành động (pack hub only) **hoặc** nav stub theo TL — PO chốt |
| Tap tín hiệu | Display only / refresh toast · **cấm** cycle hạng proto |
| Leave dirty | N/A (không form) |

## UNCLEAR

**none** trên field hub. Open Q = GAP wallet/org live — PO **không** bịa path.

## Cấm

- Invent `api/v1/home` / wallet / org-unit cho hub  
- Gộp sibling screens vào slug `home` (`GAP-MOB-ACT-01/02`)  
- Enqueue `shared_kit` / `reuse=*` / watermark (`GAP-MOB-ACT-05/07`)  
- «Có mạng» · watermark Gói · WebView HTML · web `dashboard`

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **hub** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| controlHint / UNCLEAR | file này · UNCLEAR **none** |
| Action tree | `home-action-tree.md` |
| BFF | `home-bff-endpoints.md` · `GET auth/profile` |
| Kit | `LinmHomeGrid` / `LinmQuickActions` / `LinmWalletCard` — Design verify dual |
| Next | `/agent-po-mobile` · AC đúng **1** hub `#sc-home` |
| autoApprove | ON · roleOnly `data_analy` `task_46fb294c` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:22:12.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
