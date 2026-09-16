# Handoff compact — design

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:20:00.000Z
changeScope: new_page
taskId: task_16791ccc
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea
featureKind: B
real_view_parity: v1
shared_grid_example: v1

## Decisions
- changeScope: new_page · packKind list
- formPattern: **Full page** · `data-form-cols=5` · URL `/nghiem-thu/new` · `/nghiem-thu/:id`
- demo N/A · hash skip · **cấm** re-scan demo
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · mfeStdUrl `http://localhost:9301/nghiem-thu`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · proposed `api/v1/patrol/nghiem-thu` · **cấm ERP.*** · **cấm** WO
- upload: FileService `web-bff/api/v1/files/*` · mediaIds guid · DES-NT-UPLOAD
- Leave: LeaveConfirmModal (DES-LEAVE) · **cấm** native confirm
- filter: LinErpListFilterBar · lấp hàng rồi wrap · 🔍 mép phải
- design_confirm: **approve** (autoApprove ON)
- OPEN → SA: GAP-DA-NT-DOMAIN-01 / API-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| status | TT | SearchInput | Nháp/Đang NT/Hoàn thành/Hủy |
| route | Tuyến | SearchInput | road-route |
| templateType | Mẫu NT | SearchInput | mau-01…10 |
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
- DES-GRID-A Header · B Toolbar · C Grid · C2a Filter · C3 Menu · D Pagination · F Config · H History · Z Full form
- DES-NT-UPLOAD · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/index.html`
- peerStdUrl=`http://localhost:9304/patrol`
- formPattern=Full · real_view_parity=v1 · Grid AC yes · Leave AC yes

## API / tasks (ids only)
- Proposed: `api/v1/patrol/nghiem-thu` + BFF · Files `web-bff/api/v1/files/*`
- SA: DOMAIN-MAP nghiem-thu→Patrol
- Mobile: enqueue_later — not this lane
- next: `/agent-sa` · compact → sa

## UNCLEAR
- DOMAIN/API → SA only (không block Design)

## Full paths (Read only if needed)
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/design.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/ui/prototype/`
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-real-data.md`
- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/po/requirement.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
