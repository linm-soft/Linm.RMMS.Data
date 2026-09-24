# Context — nghiem-thu-create (mobile · Tạo nghiệm thu)

| Field | Value |
|-------|-------|
| feature | `nghiem-thu-create` |
| title | [Mobile] [Công tác nghiệm thu] -> Tạo nghiệm thu |
| des | `DES-MOB-NGHIEM-THU-CREATE` |
| demo | `#sc-nghiem-thu-create` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | `sheet` |
| parent | `nghiem-thu` nav **Tạo** |
| domain | Patrol · `NghiemThu` / `rmms_nghiem_thu` — CTX [`nghiem-thu.md`](nghiem-thu.md) |
| BE | `Linm.RMMS.WebService` · `api/v1/patrol/nghiem-thu` — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/nghiem-thu` proxy (SA) |
| peers | `nghiem-thu.md` · `nghiem-thu-detail.md` · `nghiem-thu-mau.md` · `patrol-home.md` · `mobile-bff-file.md` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Sheet **Tạo nghiệm thu**: chọn 1/10 công việc BDTX (MAU-10) · vị trí/GPS · đính kèm ảnh+video · **Kết quả** Đạt/Không đạt/Khấu trừ + checklist tiêu chí · Lưu nháp |
| Persona | Cán bộ nghiệm thu |
| Entry | List `#sc-nghiem-thu` nav **Tạo** |
| DoD P1 | Dual · POST create · persist `mediaIds` guid[] · **cấm** mfeStdUrl · **cấm** invent `nghiem-thu-files` · **cấm** gộp slug list/detail |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Nav | Hủy / title / Lưu | `DES-MOB-NGHIEM-THU-CREATE` | Hủy → list · Lưu = submit **cùng slug** (không enqueue sibling) |
| Mẫu | ListRow | — | LOOKUP_STATIC `mau-01`…`mau-10` · **Label MAU-10** · **cấm** «Mẫu nghiệm thu NN» |
| Kết quả | ListRow | — | `pass` / `fail` / `deduct` + `ResultNote` |
| Tiêu chí | Checklist | — | `scores[]` theo `TemplateTypes[].criteria` |
| Vị trí | ListRow | — | Khu + GPS hiện trường · `route` / `zoneOrgCode` |
| Đính kèm | ListRow | — | Ảnh + video · FileService · max 10 |

**Không** gộp: `#sc-nghiem-thu` list · `nghiem-thu-detail` Xem/Sửa.

## 3. API (cấm invent path `nghiem-thu-create`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `patrol/nghiem-thu/init-data` | `NghiemThuController.GetInitData` | **Live** web · Mobile.Bff **gap** (SA proxy) |
| POST | `patrol/nghiem-thu` | `Create` | **Live** web · Mobile.Bff **gap** |
| files | `files/*` | FileService | **Live** `mobile-bff/api/v1/files/*` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** persist presigned URL.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `nghiem-thu` | Parent list / back |
| `nghiem-thu-detail` | Xem/Sửa sau tạo |
| `patrol-home` | Hub Tuần đường |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-19T17:38:40.427Z` |
