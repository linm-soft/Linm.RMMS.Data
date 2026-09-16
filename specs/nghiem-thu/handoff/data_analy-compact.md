# Handoff compact — data_analy

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-12T09:00:00.000Z
changeScope: new_page
contentHash: sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea

## Decisions
- changeScope: new_page (greenfield Field `/nghiem-thu`)
- formPattern: Full page (clone patrol Kind B)
- packKind: list · demo N/A
- mfe: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · mfeStdUrl `http://localhost:9301/nghiem-thu`
- be: `D:/AI-QLBD/Linm.RMMS.WebService` · proposed domain Patrol sibling · **cấm ERP.*** · **cấm** maintenance WO
- upload: FileService `web-bff/api/v1/files/*` · persist guid · resign · **cấm** invent file API
- real-data §A+§B: yes (proposed API · sameMfe=gap until Dev)
- open questions: GAP-DA-NT-TMPL-01 (10 mẫu names) · GAP-DA-NT-STATUS-01 · GAP-DA-NT-DOMAIN-01 · GAP-DA-NT-API-01 · GAP-DA-NT-FORM-01

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter leading |
| status | Trạng thái | SearchInput | enum VN |
| route | Tuyến | SearchInput | road-route |
| templateType | Mẫu NT | SearchInput | 10 mẫu · UNCLEAR names |
| fromDate/toDate | Kỳ | Date | filter |
| code | Mã NT | Text | auto NT-* |
| zoneOrgCode | Khu | SearchInput | org-unit |
| vpOrgCode | VP | SearchInput | org-unit |
| assigneeCode | Cán bộ NT | SearchInput | org |
| inspectedAt | Ngày NT | Date | required |
| kmFrom/kmTo | Km | Number | chainage |
| fieldInfo | Hiện trường | Text | required |
| note | Ghi chú | Text | |
| mediaIds | Ảnh/video | FileMulti | FileService guid |
| updatedAt | Cập nhật | Date | readonly |

## Screens / zones (ids only)
- DES-GRID-A Header · B Toolbar+filter · C Grid · D Pagination
- Form full-page `/nghiem-thu/new` · `/nghiem-thu/:id` · upload zone
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9304/patrol (clone ref)
- filter-bar: LinErpListFilterBar wrap · 🔍 right

## API / tasks (ids only)
- Proposed: `api/v1/patrol/nghiem-thu` + BFF same resource · SA confirm DOMAIN-MAP row
- Files: `web-bff/api/v1/files/*`
- Mobile: enqueue_later — **not** this lane

## UNCLEAR
- GAP-DA-NT-TMPL-01: exact names of 10 mẫu
- GAP-DA-NT-STATUS-01: final VN status labels
- GAP-DA-NT-DOMAIN-01 / API-01: SA confirm Patrol path (no live controller yet)

## Full paths (Read only if needed)
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-real-data.md`
- filter-bar: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/nghiem-thu-filter-bar.md`
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
