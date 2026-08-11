# Design — pavement-section

> Status: **confirmed** (`design_confirm=approve` · autopilot task_94b861f5)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| packKind | `list` |
| Kind | **B** catalog + Full page form |
| status | `confirmed` |
| updatedAt | 2026-08-10T01:12:00.000Z |

## Prototype (REQUIRED) — List shell

| | |
|--|--|
| Artifact | `ui/prototype/pavement-section-list-prototype.html` |
| Zones | **A Header · B Toolbar · C Grid · D Pagination** |
| Scope | content-only (no chrome/note/menu) |
| SSOT | `list-shell-prototype.md` · `shared-grid-example.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/pavement-section/ui/prototype/pavement-section-list-prototype.html` |

### Wire

[A] icon + title «Phân loại mặt đường (Biểu 1)» (**no** Thêm mới)  
[B] Làm mới · Lịch sử · config(`fa-cog`) · Xem/Sửa/Xóa khi chọn · **[+ Thêm mới]**  
[C] card: list title · row-menu help · Tìm kiếm · grid Biểu 1  
[D] Tổng · Trang · Hiển thị [50/100/200/500] · FA pager

## Form (Full page)

| Zone | Content |
|------|---------|
| Z1 toolbar | Lưu · Huỷ/Đóng · Xóa (edit) · Mở bản đồ live · Sửa (view) |
| Z2 sections | Đoạn đường · Kết cấu · Khai thác · Đơn vị · Audit |
| Z3 | View = readOnly fields (not disabled grey shell) |

## controlHint

| Field | Hint |
|-------|------|
| search | SearchTextInput |
| province / status | Select |
| structureType / roadClass | Select |
| kmFrom / kmTo / widths | Number |
| handover* | Checkbox |

## Handoff → SA

API resource `pavement-sections` under **Asset** domain (không dùng context skeleton `/api/v1/infra`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T01:12:00.000Z |
| versionGate | rechecked |
