# Align UX — nghiem-thu-create (live vs demo)

| | |
|--|--|
| feature | `nghiem-thu-create` |
| method | Read A3-CORE + P6-CORE (+ P6-CORE-2) vs `ui/prototype/{ios,android}/index.html` `#sc-nghiem-thu-create` |
| writtenAt | 2026-09-19T17:35:00.000Z |
| autoApprove | ON · align_confirm **approve** |

## 3-up

| Zone / check | Demo | iOS A3 | Android P6 | Verdict |
|--------------|------|--------|------------|---------|
| Title | Tạo nghiệm thu | Tạo nghiệm thu | Tạo nghiệm thu | **Aligned** |
| navCancel | Hủy | Hủy (kit chevron) | Back icon | Aligned dual kit |
| navSave | Lưu | Lưu | Lưu | **Aligned** |
| row-template | Mẫu · Mẫu nghiệm thu 03 | Mẫu · 03 | Mẫu · 03 | **Aligned** COPY-01 |
| row-location | Vị trí · GPS/tuyến | Chưa chốt GPS · tuyến | same | **Aligned** |
| row-attach | Đính kèm · max 10 | Thêm ảnh (tối đa 10) | same | **Aligned** |
| photo add | Thêm | Thêm | Thêm | **Aligned** |
| sheet-mau | Chọn mẫu | (E2E skip iOS a11y) | P6-CORE-2 list + check | **Aligned** And |
| GPS | deny modal / live | Toast sim «Chưa lấy được vị trí» | same toast | Should · sim env |

## Must

| id | Severity | Notes |
|----|----------|-------|
| — | — | **Must open = 0** |

## Should

| id | Notes |
|----|-------|
| GPS-SIM | Simulator không GPS → toast fail vị trí · không chặn store CORE |

## Verdict

**Aligned** · title · tính năng Create · việc cán bộ (list→Tạo→form) · dual OS.  
CLI PASS ≠ visual — visual **PASS** sau Read PNG.
