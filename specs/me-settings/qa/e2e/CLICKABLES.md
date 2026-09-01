# Clickables — me-settings

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| method | Review Step 5d · **crawl SKIP** (roleOnly=`review` · **cấm** yarn e2e) · evidence = prior QA Maestro + action-tree |
| priorQa | `task_ce3a18c1` · `ok:true` · `#sc-me-settings` |
| actionTree | `specs/_data-analy/me-settings-action-tree.md` |
| updatedAt | `2026-08-30T21:04:16.000Z` |
| taskId | `task_73a51e55` |

## List

| id | label | expectId | result | gap | enqueue |
|----|-------|----------|--------|-----|---------|
| row-settings | Cài đặt (entry Me) | `#sc-me-settings` | **PASS** | — | this pack (already shipped) |
| nav-back | Back Tôi / icon | `#sc-me` | **PASS** | — | reuse `me` · **không** |
| row-location | Vị trí | openAppSettings | **PASS** | — | same-slug OS · **cấm** (`GAP-MOB-ACT-07`) |
| row-camera | Camera | openAppSettings | **PASS** | — | same-slug OS · **cấm** |
| row-notify-os | Thông báo hệ thống | openAppSettings | **PASS** | — | same-slug OS · **cấm** · ≠ ops |
| btn-open-os | Mở Cài đặt hệ thống | openAppSettings | **PASS** | — | same-slug · **cấm** |
| row-offline | Hàng đợi mất sóng | `#sc-patrol-offline` | **PASS** | — | reuse `patrol-offline` · **cấm** enqueue |
| row-version | Phiên bản | Bundle display | **PASS** | — | display · **cấm** |
| row-privacy | Chính sách quyền riêng tư | privacy panel | **PASS** | — | same-slug copy · **cấm** |
| me-profile | Hồ sơ | — | **OUT** | — | sibling riêng · **cấm** start (`GAP-MOB-ACT-06`) |
| login-logout | Đăng xuất | — | **OUT** | — | **cấm** gộp |
| ops | Thông báo inbox | — | **OUT** | — | ≠ notify OS · **cấm** |

## GAP-MOB-ACT-03

**none** — no FAIL toast/no-op hub CTA on this screen. Dead `row-settings` closed by Dev/QA.

## Sibling enqueue

**none** mới từ màn này.

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 taskId=task_73a51e55 -->
