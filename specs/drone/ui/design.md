# Design — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| packKind | `list` |
| Kind | **B** list + **D** form |
| status | `confirmed` (autopilot) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/drone/ui/prototype/drone-list-prototype.html` |

## Prototype (REQUIRED) — List shell

| | |
|--|--|
| Artifact | `ui/prototype/drone-list-prototype.html` |
| Zones | **A Header · B Toolbar · C Grid · D Pagination** |
| Scope | content-only (no chrome/note/menu) |
| SSOT | `list-shell-prototype.md` · `po-design-grid-standard` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/drone/ui/prototype/drone-list-prototype.html` |

### Wire

[A] icon `fa-helicopter` + title **Drone / Reality Capture** (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(`fa-cog`) · Xem/Sửa/Xóa khi chọn  |  **[+ Tạo scan]**
[C] card: list title · row-menu help · SearchTextInput · grid (sort/filter on Mã)
[D] Tổng · Trang · Hiển thị [50/100/200/500] · FA pager

## DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` header |
| B | DES-GRID-B | `catalogToolbar` |
| C1 | search | `SearchTextInput` |
| C2 | grid | `LinCatalogDataGrid` (column drag default ON) |
| C3 | row menu | `LinCatalogRowActionMenu` |
| D | pager | `LinCatalogListPagination` |
| — | shell | **1×** `LinPageLayout` — cấm nested CatalogListShell |

## Form (Kind D)

| Zone | Content |
|------|---------|
| Z1 | Quay lại · title · mode badge · dirty · P2–P3 badge |
| Z2a | Validation banner (name · flightType · road) |
| Z2b | Header fields (controlHint) |
| Z2c | Output keys (point cloud · ortho · tiles · refs) |
| Z2d | Artifact lines inline grid |
| Z3 | Lưu · Lưu nháp · Upload · Process · Hủy |

## Control-map (from controlHint)

SearchTextInput (list search) · Dropdown (flightType/status/office/device/tilesStatus/artifact*) · Text/Date/Number · readonly code

## Handoff → SA

- APIs: `GET/POST /api/v1/drone/scans` · `GET/PUT/DELETE …/{id}` · `POST …/{id}/process` · `GET …/{id}/artifacts`
- Domain: Drone only · BE `Linm.RMMS.WebService`
- reviewUrl above · prototype A–D complete

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
| design_confirm | approve (autopilot) |
