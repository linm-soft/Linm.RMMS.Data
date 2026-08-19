# Control hint — asset-hub (mobile hub)

| | |
|---|---|
| feature | `asset-hub` |
| kind | `hub` |
| packKind đề xuất | `hub` (menu Tài sản · **cấm** gộp list/form sibling · **≠** web catalog `asset`) |
| changeScope | `new_page` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-hub` · `DES-MOB-ASSET-HUB` |
| ctx | `docs/context/features/asset-hub.md` · `docs/context/features/asset.md` |
| map | `docs/html-to-native-map.md` |
| agent | `agent-data-analy-mobile` |
| at | `2026-08-19T09:08:31.000Z` |
| thisAction | **Hub Tài sản** only · children enqueue `pending_confirm` · entry từ `home` tile + wallet |
| taskId | `task_e3470cac` |

## Skill packet (`/agent-data-analy-mobile`) — 3 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`asset-hub-bff-endpoints.md`](asset-hub-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`asset-hub-action-tree.md`](asset-hub-action-tree.md) | 7 tree + share/reuse |

## UI control — như thế nào

Màn `#sc-asset-hub` = nav + wallet + hub-grid (2×2 ×3 section) + list row + AI pending (**không** form submit trên hub). Design kit dual · Dev **cấm** raw grid khi thiếu hàng map → `kit_missing_confirm`.

| Field / zone | controlHint | Kit (iOS + Android cùng turn) | Native |
|--------------|-------------|-------------------------------|--------|
| navBack | Back «Trang Chủ» | `LinmTopBar` / nav chrome | `go('home')` |
| wallet | Wallet hồ sơ TS | `LinmWalletCard` · `DES-MOB-ASSET-WALLET` | display · owner slug (home wallet = reuse nav vào đây) |
| tileTypes | Hub tile 32 loại | `LinmHubTile` · `#i-cube` · bg `#0C84C0` | sibling `asset-types` |
| tileMap | Hub tile bản đồ | `LinmHubTile` · `#i-scope` · bg teal | sibling `gis-map` |
| secCollect | Section label | `LinmSectionLabel` | không route |
| tileCollect | Thu thập thủ công | `LinmHubTile` · `#i-plus` | sibling `asset-collect` |
| tileAI | Camera AI | `LinmHubTile` · `#i-camera` · bg indigo | sibling `asset-ai` |
| secManage | Section label | `LinmSectionLabel` | không route |
| tileList | Danh sách | `LinmHubTile` · `#i-cube` · bg gray | sibling `asset-list` |
| tileAdjust | Cập nhật / bớt | `LinmHubTile` · `#i-minus` · bg orange | sibling `asset-adjust` |
| rowMap | Row bản đồ TS | `LinmListRow` · `#i-scope` | cùng slug `gis-map` |
| secAI | Section «Chờ xác nhận AI» | `LinmSectionLabel` | ẩn khi list rỗng live |
| aiRow | Row ứng viên | `LinmListRow` | GET `ai-vision/asset-candidates` |
| aiConfirm | Nút Xác nhận | `LinmPrimaryButton` (compact) | sibling `det-hitl` |

## Fields (`#sc-asset-hub` — dual parity)

| Field | VN | controlHint | Required | Source | Notes |
|-------|----|-------------|----------|--------|-------|
| navBack | Trang Chủ | BackButton | * | `go('home')` | parent `home` |
| walletK | HỒ SƠ TÀI SẢN | Text display | * | demo copy | eyebrow ví |
| walletT | QL.1 · Khu IV | Text display | * | demo / route search | **GAP-F-AHUB-01** · **cấm** invent org API |
| walletM | 32 loại KCHT… | Text display | * | demo + `asset-types` count | iOS thêm patrol demo line |
| tileTypes | 32 loại tài sản | HubTile | * | `go('asset-types')` | subtitle thông số · checklist |
| tileMap | Xem trên bản đồ | HubTile | * | `go('gis-map')` | ghim lý trình |
| secCollect | Thu thập | SectionLabel | * | `.section-label` | không route |
| tileCollect | Thủ công | HubTile | * | `go('asset-collect')` | POST sibling |
| tileAI | Camera AI | HubTile | * | `go('asset-ai')` | detect-assets sibling |
| secManage | Quản lý | SectionLabel | * | `.section-label` | không route |
| tileList | Danh sách | HubTile | * | `go('asset-list')` | GET road-assets sibling |
| tileAdjust | Cập nhật / bớt | HubTile | * | `go('asset-adjust')` | PUT/DELETE sibling |
| rowMap | Bản đồ tài sản | ListRow | * | `go('gis-map')` | trùng tileMap |
| secAI | Chờ xác nhận AI | SectionLabel | | demo / API | ẩn nếu 0 Draft |
| aiTitle | Ứng viên TS-88 · Cống | Text display | | GET candidates | demo mock |
| aiSub | 91% · QL.1 Km… | Text display | | candidate DTO | |
| aiConfirm | Xác nhận | PrimaryButton | * | `go('det-hitl')` | sibling HITL |

## Không có trên slug `asset-hub` (cấm gộp)

| Surface | Lý do |
|---------|--------|
| `#sc-asset-types` / `#sc-asset-type` / `#sc-asset-list` / `#sc-asset-detail` / `#sc-asset-collect` / `#sc-asset-adjust` / `#sc-asset-ai` / `#sc-asset-form` / `#sc-gis-map` / `#sc-det-hitl` / `#sc-inc-form` | sibling `{feature}` |
| Web catalog `asset` MFE list | pack web Kind B — **≠** mobile hub |
| Submit Lưu / Tạo / Bớt trên hub | **GAP-MOB-ACT-07** — form = sibling |
| Hard delete tài sản | **cấm** — chỉ soft delete sibling |

## Kit map (Design → Dev)

Nguồn `docs/html-to-native-map.md`. Thiếu kit dual → Design `kit_missing_confirm=implement_kit`.

| Demo chrome | Map | Kit dual |
|-------------|---------|----------|
| `.top-bar` / `.nav-bar` | top bar | `LinmTopBar` |
| `.wallet-card` · DES-MOB-ASSET-WALLET | wallet | `LinmWalletCard` |
| `.hub-grid` / `.hub-tile` | hub tile | `LinmHubTile` |
| `.section-label` | label | `LinmSectionLabel` |
| `.card-group` / `.row` | list row | `LinmListRow` |
| `.btn-primary` compact | CTA | `LinmPrimaryButton` |
| toast | toast | `LinmToast` |

## Tech factors

| Factor | Hub `asset-hub` | Note |
|--------|-----------------|------|
| GPS | no (hub) | sibling `asset-collect` · `asset-ai` · `gis-map` |
| camera | no (hub) | sibling `asset-ai` |
| offline | **hub vẫn mở** | summary fail → demo wallet copy · **cấm** block nav từ home |
| map | no (hub) | sibling `gis-map` |
| biometric | no | — |
| push | no | — |
| token | Keychain / Encrypted | Bearer trên BFF proxy |

## Hành vi (không `alert`)

| Case | UI |
|------|----|
| Hub mở từ home tile/wallet | Nav push `#sc-asset-hub` · back → `home` |
| Wallet live fail | Giữ demo copy 3 dòng · toast in-app **không** chặn hub |
| AI pending empty | Ẩn section «Chờ xác nhận AI» |
| AI pending ≥1 | Row đầu + nút Xác nhận → `det-hitl` |
| Tap sibling tile/row | **Không** implement sibling trong turn hub · nav stub theo TL |
| Leave dirty | N/A (không form) |

## UNCLEAR

| ID | Field | Note |
|----|-------|------|
| GAP-F-AHUB-01 | walletT | Route/org live — PO **không** bịa path |
| GAP-F-AHUB-02 | walletM | 32 vs 36 catalog — count API vs demo copy |

## Cấm

- Invent `api/v1/asset-hub` / hub wallet controller  
- Gộp sibling screens vào slug `asset-hub` (`GAP-MOB-ACT-01/02`)  
- Enqueue `shared_kit` / watermark  
- Hard delete TS · WebView HTML · ERP.*

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `asset-hub` / **hub** |
| phase_from / phase_to | `data_analy` **done** → `po` |
| controlHint / UNCLEAR | file này · GAP-F-AHUB-01/02 |
| Action tree | `asset-hub-action-tree.md` |
| BFF | `asset-hub-bff-endpoints.md` |
| Kit | `LinmHubTile` / `LinmWalletCard` / `LinmListRow` — Design verify dual |
| Next | `/agent-po-mobile` · AC đúng **1** hub `#sc-asset-hub` |
| autoApprove | ON · roleOnly `data_analy` `task_e3470cac` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T09:08:31.000Z |
| versionGate | rechecked |
| contentHash | sha256:c4be71e3e31309204f5a43ff4fd1aed611bcc7ab643bcdb054e0170334628bf2 |
| bffContentHash | sha256:6c32dc678168a7923cbd7c06a412ac5c3628d112a6d44ea22c4086128f9bf2a0 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
