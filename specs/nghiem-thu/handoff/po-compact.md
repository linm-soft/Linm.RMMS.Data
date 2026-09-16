# Handoff compact — po

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:05:00.000Z
changeScope: new_page
taskId: task_8d642b15
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
featureKind: B

## Decisions
- changeScope: new_page · packKind list (PO confirm)
- formPattern: Full page (clone patrol) · URL `/nghiem-thu/new` · `/nghiem-thu/:id`
- demo: N/A · continue_no_demo · peerStdUrl `http://localhost:9304/patrol`
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · mfeStdUrl `http://localhost:9301/nghiem-thu`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · proposed `api/v1/patrol/nghiem-thu` · **cấm ERP.*** · **cấm** WO · **cấm** sessions reuse
- upload: FileService `web-bff/api/v1/files/*` · mediaIds guid · resign · MIME 10MB/50MB · max 10
- templateType CLOSED: mau-01…10 · label Mẫu nghiệm thu 01…10
- status CLOSED: Nháp · Đang NT · Hoàn thành · Hủy
- Grid AC + LeaveConfirmModal REQUIRED · filter LinErpListFilterBar wrap · 🔍 mép phải
- OPEN → SA: GAP-DA-NT-DOMAIN-01 / API-01
- autoApprove ON · e2eQa queued QA only · hash skip no demo rescan

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | TT | SearchInput | enum VN §6 |
| route | Tuyến | SearchInput | road-route |
| templateType | Mẫu NT | SearchInput | LOOKUP 10 |
| fromDate/toDate | Kỳ | Date | filter |
| code | Mã NT | Text | auto NT-* |
| zoneOrgCode | Khu | SearchInput | org-unit |
| vpOrgCode | VP | SearchInput | org-unit |
| assigneeCode | Cán bộ NT | SearchInput | required |
| inspectedAt | Ngày NT | Date | required |
| kmFrom/kmTo | Km | Number | |
| fieldInfo | Hiện trường | Text | required |
| note | Ghi chú | Text | |
| mediaIds | Ảnh/video | FileMulti | FileService |
| updatedAt | Cập nhật | Date | readonly |

## Screens / zones (ids only)
- DES-GRID-A Header · B Toolbar+filter · C Grid · D Pagination
- Form full-page C/E/V/Copy · upload zone · leave LeaveConfirmModal
- reviewUrl= (Design) · peerStdUrl=http://localhost:9304/patrol
- Grid AC: yes · Leave AC: yes · Report AC: n/a
- controlHint cite: `_data-analy/features/nghiem-thu-control-hint.md`
- filter-bar: LinErpListFilterBar · lấp hàng rồi wrap · 🔍 right
- devSlash: `/agent-dev`

## API / tasks (ids only)
- Proposed: `api/v1/patrol/nghiem-thu` + BFF · Files `web-bff/api/v1/files/*`
- SA: DOMAIN-MAP row nghiem-thu→Patrol
- Mobile: enqueue_later — not this lane

## UNCLEAR
- none blocking PO→Design · DOMAIN/API → SA

## Full paths (Read only if needed)
- requirement: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/po/requirement.md`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-real-data.md`
- filter-bar: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-filter-bar.md`
- prior compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/handoff/data_analy-compact.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
