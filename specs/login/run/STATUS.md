# RUN — login

| Field | Value |
|-------|-------|
| skill | qldb-implement-permission-access |
| slug | login |
| phase | p0-p15 |
| mode | continue |
| lastStep | L6 |
| lastRunAt | 2026-08-15 |
| backendFirst | required |
| split | Auth=package sẵn · Job/catalog=hạng mục RMMS mới + lifecycle HĐ |

## Steps

| id | layer | status | at | notes |
|----|-------|--------|----|-------|
| L0 | auth | done | 2026-08-15 | Login+refresh reject Status≠Active (generic). Auth API build PASS |
| L1 | bff | done | 2026-08-15 | `Linm.Platform.Authentication.Bff` 1.26.0 · `docs/init-bff-auth.md` · BFF build PASS |
| L2 | be | done | 2026-08-15 | `20260815065113_Schema_ContractAccountLifecycle` pair · Up=`rmms_contract_accounts` |
| L3 | job | done | 2026-08-15 | `Linm.RMMS.Permission.Job` · evaluate + Auth HTTP · Job build PASS |
| L4 | api | done | 2026-08-15 | `POST …/run` + hosted schedule + enqueue khi đổi ngày/status/xóa HĐ |
| L5 | bff | done | 2026-08-15 | `GET session-window` + BFF 403 `CONTRACT_WINDOW_CLOSED` forceLogout |
| L6 | job | done | 2026-08-15 | `README.md` + `catalog/` RMMS-* · GET `…/catalog` · Job build PASS · API alt-out PASS (host lock) |

## History

| at | mode | step | result |
|----|------|------|--------|
| 2026-08-15 | continue | L0–L5 | done — Auth API / Job / API (alt-out) / BFF PASS |
| 2026-08-15 | continue | L6 | done — catalog + README quyền chỉ trong Permission.Job |
