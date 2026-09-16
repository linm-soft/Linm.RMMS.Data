# Clickables — me-profile

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| method | Review Step 5d · **crawl SKIP** (roleOnly=`review` · **cấm** yarn e2e) · evidence = prior QA Maestro + action-tree |
| priorQa | `task_b53c3814` · `ok:true` · `#sc-me-profile` |
| actionTree | `specs/_data-analy/me-profile-action-tree.md` |
| updatedAt | `2026-08-30T20:06:30.000Z` |
| taskId | `task_b5e30af4` |

## List

| id | label | expectId | result | gap | enqueue |
|----|-------|----------|--------|-----|---------|
| row-profile | Hồ sơ (entry Me) | `#sc-me-profile` | **PASS** | — | this pack (already shipped) |
| btn-back | Back Tôi / icon | `#sc-me` | **PASS** | — | reuse `me` · **không** |
| btn-save | Lưu | PUT `auth/profile` | **PASS** | — | same-slug submit · **cấm** (`GAP-MOB-ACT-07`) |
| btn-change-pwd | Đổi mật khẩu | POST `auth/change-password` | **PASS** | — | same-slug submit · **cấm** |
| confirm-pwd | Xác nhận MK | local validate | **PASS** | — | chrome · **cấm** |
| fields / avatar | form bind | GET profile | **PASS** | — | display · **cấm** |
| me-settings | Cài đặt | — | **OUT** | — | sibling riêng · **cấm** start (`GAP-MOB-ACT-06`) |
| login-logout | Đăng xuất | — | **OUT** | — | **cấm** gộp |

## GAP-MOB-ACT-03

**none** — no FAIL toast/no-op hub CTA on this screen. Dead `row-profile` closed by Dev/QA.

## Sibling enqueue

**none** mới từ màn này.

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 taskId=task_b5e30af4 -->
