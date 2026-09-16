# Clickables — home (Store W3 crawl 2026-09-16)

method: e2e runtime · `/run-mobile-e2e` `--store-wave=w3_camera` · Release sim 1.0.7(4) · `rmms-001` → prod BFF

| id | label | expectId | result | gap |
|----|-------|----------|--------|-----|
| faq | Câu hỏi thường gặp | sc-faq | PASS | |
| privacy | Chính sách quyền riêng tư | sc-privacy | PASS | |
| tile-supervise | Giám sát | sc-supervise | PASS | |
| tile-patrol | Tuần đường | sc-patrol-home | PASS | (from maestro log prefix) |
| tile-mnt | Công việc | sc-mnt-list | PASS | |
| tile-incident | Vấn đề | sc-incident-list | PASS | |
| tile-asset | Tài sản | sc-asset-hub | PASS | |
| tile-offline | Lưu trữ | sc-patrol-offline | FAIL | GAP-MOB-ACT-03 — id+text không hit sau back từ asset-hub (có thể tab-home/scroll) |
| wallet | Ví | sc-asset-hub | SKIP | chưa tới |
| quick-patrol | Điểm tuần | sc-patrol-home | SKIP | chưa tới |
| quick-incident | Ghi sự cố | sc-inc-pick | SKIP | chưa tới |

Skip map taps (không nằm home-staff). Enqueue sibling `tile-offline` pending_confirm — không `READY_TO_SUBMIT`.
