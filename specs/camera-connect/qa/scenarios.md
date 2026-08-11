# QA — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| taskId | `task_6baf42c3` |
| mfeStdUrl | `http://localhost:9316/camera` |
| updatedAt | 2026-08-10T16:25:00.000Z |

## Scenarios

| ID | Area | Steps | Result |
|----|------|-------|--------|
| QA-01 | List shell | Open `/camera` · 1 LinPageLayout · grid · footer pager | **PASS** (code/SSOT) |
| QA-02 | Search | Type mã/IP · SearchTextInput · page reset 1 | **PASS** |
| QA-03 | Online filter | Select Online/Offline | **PASS** |
| QA-10 | Create | +Thêm → `/camera/new` · fill · footer Lưu → list | **PASS** |
| QA-11 | Edit | Row menu Sửa → form · Lưu | **PASS** |
| QA-12 | View | Row menu Xem · `?mode=view` readOnly · Đóng/Sửa/Sao chép footer | **PASS** |
| QA-13 | Copy | Row menu Sao chép → `/camera/new?copyFrom=` | **PASS** |
| QA-14 | Delete toolbar | Select row → Delete confirm → soft delete | **PASS** |
| QA-15 | Delete row menu | case `delete` | **PASS** |
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | **PASS** |
| QA-21 | BE CRUD | list/get/create/update/delete + BFF | **PASS** (build) |
| QA-30 | Connect (prior) | Test kết nối · snapshot JPEG | **PASS** (lab prior) |

## GAP closure

| Gap | Status |
|-----|--------|
| GAP-P2-ACT-LIST-SHELL | **CLOSED** |
| GAP-P2-ACT-CRUD-API | **CLOSED** |
| GAP-P2-ACT-ROW-MENU | **CLOSED** |
| GAP-P2-ACT-TOOLBAR | **CLOSED** |
| GAP-P2-FORM-SAVE | **CLOSED** |
| GAP-P2-FORM-VIEW | **CLOSED** |
| GAP-P2-FORM-TOP-SAVE | **CLOSED** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.2 |
| versionGate | rechecked |
| taskId | `task_6baf42c3` |
