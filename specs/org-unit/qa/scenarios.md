# QA scenarios — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `draft` |
| updatedAt | 2026-08-08T18:15:00.000Z |

## Preconditions

- Migrations `Schema_RmmsOrgUnits` + `Seed_RmmsOrgUnits` applied
- Seed **60** nodes · GAP-ORG-01 keep_legacy
- FE `Linm.Web.RMMS.Master` · `/master/org-unit`
- API/BFF `…/integration/org-units`

## Scenarios

| ID | Title | Steps | Expect |
|----|-------|-------|--------|
| QA-01 | Tree load | Open list | LinTreeNav shows DRVN → HQ/ADV/REG… |
| QA-02 | List search CI | Type `van phong` (no dấu) → Tìm | Matches «Văn phòng…» |
| QA-03 | Badge hệ cũ | Find `VP-II.1` / `VP-II.6` | Badge **hệ cũ** visible |
| QA-04 | Parent SearchInput | Tạo mới → Đơn vị cha → gõ mã | Dropdown `code — name` · **không** Text thuần |
| QA-05 | CRUD create | Create `TEST-OU` under REG-II | List + tree refresh · unique code |
| QA-06 | Edit / View | Sửa name · Xem | Edit saves · View readOnly (no grey disabled) |
| QA-07 | Copy | Sao chép row | Modal mode Sao chép · code empty · POST |
| QA-08 | Cycle guard | Set parent to descendant | 422 message |
| QA-09 | Shared Type A | Call API without tenant filter expectation | All companies see same catalog |
| QA-10 | Route BASE | Network tab | `/integration/org-units` · **not** `/rmms/org-units` |
| QA-11 | No ERP fork | Grep FE/BE | **no** `ERP.*` imports |
| QA-12 | Page size | Change 50/100/200/500 | List reloads |

## Exit

- [ ] QA-01…12 pass (manual or API smoke)
- [ ] Build API + FE PASS
