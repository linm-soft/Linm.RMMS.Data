# Action tree — asset-hub (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · demo iOS + Android `#sc-asset-hub`  
Verify demo — **không** bịa nút.

```
asset-hub                     ← kind=hub · DES-MOB-ASSET-HUB · entry home tile+wallet · **this turn**
├── home                      ← nav back · go('home') · parent entry (reuse nav)
├── asset-types               ← tile 32 loại · go('asset-types') · shared incident-create
│   ├── asset-type            ← hộ chiếu loại · go('asset-type') · enqueue
│   └── incident-create       ← Ghi sự cố từ type · openIncidentForm() · reuse owner
├── gis-map                   ← tile + row bản đồ · go('gis-map') · enqueue
├── asset-collect             ← tile Thu thập thủ công · go('asset-collect') · enqueue
├── asset-ai                  ← tile Camera AI · go('asset-ai') · enqueue
├── asset-list                ← tile Danh sách · go('asset-list') · enqueue
│   └── asset-detail          ← row chi tiết · go('asset-detail') · enqueue
├── asset-adjust              ← tile Cập nhật/bớt · go('asset-adjust') · enqueue
└── det-hitl                  ← AI pending Xác nhận · go('det-hitl') · enqueue
```

Cùng `go('gis-map')` trên tile + row = **một** slug.  
Entry từ `home`: tile Tài sản + wallet = **một** slug `asset-hub`.

| feature | parent | action | demo | kind | share | reuse | mapCite | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|---------|
| `asset-hub` | `home` | Hub Tài sản / ví | `#sc-asset-hub` `DES-MOB-ASSET-HUB` | hub | shared_action owner | — | `LinmHubTile` · `LinmWalletCard` · `LinmListRow` | **this turn** `task_e3470cac` |
| `home` | — | Back Trang Chủ | nav `go('home')` | hub | shared_action | `home` | `LinmTopBar` | **không** (parent reuse) |
| `asset-types` | `asset-hub` | 32 loại tài sản | `#sc-asset-types` `DES-MOB-ASSET-32` | list | shared_action | — | `LinmHubTile` `#i-cube` | **pending_confirm** |
| `asset-type` | `asset-types` | Hộ chiếu loại | `#sc-asset-type` `DES-MOB-ASSET-TYPE` | sheet | unique | — | `LinmWalletCard` · `LinmListRow` | **pending_confirm** |
| `incident-create` | `asset-type` | Ghi sự cố | `#sc-inc-form` · `openIncidentForm()` | sheet | shared_action owner | — | `LinmPrimaryButton` | **không** (reuse · đã home enqueue) |
| `gis-map` | `asset-hub` | Xem bản đồ / row | `#sc-gis-map` `DES-MOB-GIS` | map | shared_action | — | `LinmHubTile` `#i-scope` · `LinmListRow` | **pending_confirm** |
| `asset-collect` | `asset-hub` | Thu thập thủ công | `#sc-asset-collect` `DES-MOB-ASSET-COLLECT` | form | unique | — | `LinmHubTile` `#i-plus` | **pending_confirm** |
| `asset-ai` | `asset-hub` | Camera AI | `#sc-asset-ai` `DES-MOB-ASSET-AI` | form | unique | — | `LinmHubTile` `#i-camera` | **pending_confirm** |
| `asset-list` | `asset-hub` | Danh sách | `#sc-asset-list` `DES-MOB-ASSET-LIST` | list | unique | — | `LinmHubTile` · `LinmSearchField` | **pending_confirm** |
| `asset-detail` | `asset-list` | Chi tiết TS | `#sc-asset-detail` `DES-MOB-ASSET-DETAIL` | sheet | unique | — | `LinmListRow` | **this turn** `task_f6ca06ad` · data_analy PASS |
| `asset-adjust` | `asset-hub` | Cập nhật / bớt | `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` | list | unique | — | `LinmHubTile` `#i-minus` | **pending_confirm** |
| `det-hitl` | `asset-hub` | Xác nhận AI | `#sc-det-hitl` · hub row CTA | sheet | shared_action | — | `LinmPrimaryButton` | **pending_confirm** |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Section labels Thu thập / Quản lý / Chờ xác nhận AI | `LinmSectionLabel` · không route |
| Wallet card trên hub (display) | `LinmWalletCard` · không submit |
| Back chevron | chrome |
| Tab 5 | `shell-tabs` `shared_kit` |

**GAP-MOB-ACT-01:** không. Hub = 1 slug `asset-hub`.  
**GAP-MOB-ACT-02:** không. `#sc-asset-hub` **không** child form. Action có route = sibling.  
**GAP-MOB-ACT-03:** sibling route → enqueue `pending_confirm` (không start).  
**GAP-MOB-ACT-07:** không enqueue submit trên hub (form = sibling).

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
| contentHash | sha256:1ab1e355fc6ffd940035cf5724088e15eed8a72cf2e67784e784689601802698 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
