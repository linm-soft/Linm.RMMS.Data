# QA — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | `done` |
| taskId | `task_45a05a05` |
| pack | T-QA-CRUD-01 · FormType |
| updatedAt | 2026-08-14T19:05:00.000Z |

## Scenarios

| ID | Layer | Steps | Expected | Result |
|----|-------|-------|----------|--------|
| QA-01 | Hub | Mở `/asset/csdl-so-sach` | Tab CSDL/Sổ · KPI · 12/8 cards | **PASS** (code) |
| QA-02 | List | Click card bridges | LinPageLayout · grid · pager · back Hub | **PASS** |
| QA-03 | Search | Gõ mã/đường · đổi tỉnh/TT | List filter work · no Tìm btn | **PASS** |
| QA-04 | Form | Create/Edit/View/Copy | Slideout Z1–Z3 · View readOnly · leave-confirm dirty | **PASS** |
| QA-05 | Book | Open patrol-logs · entries | Inline grid add/remove · save | **PASS** |
| QA-06 | API | GET/POST/PUT/DEL `csdl-records` | Asset domain · ApiResponse | **PASS** (build) |
| QA-07 | BFF | Proxy path | `web-bff/api/v1/asset/csdl-records` | **PASS** (build) |
| QA-08 | SSOT | No nested CatalogListShell · LinCatalogListPagination | DoD | **PASS** |
| QA-09 | Build | typecheck + yarn build + dotnet API/BFF | 0 errors | **PASS** (gate) |
| QA-10 | Guard | No ERP.* / Domains/Master writes | void | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| ID | Layer | Steps | Expected | Result |
|----|-------|-------|----------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → Save | POST soft create · list refresh | **PASS** (code) |
| QA-22 | Edit | Row/toolbar Edit → Save | PUT · dirty leave-confirm | **PASS** |
| QA-23 | View | Row/toolbar View → Sửa | readOnly · footer Sửa/Đóng | **PASS** |
| QA-24 | Copy | Row Copy → Save | POST new code | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete row menu | Row menu Delete | shared `deleteRow` | **PASS** |
| QA-27 | Deep-link | `?resource=bridges&form=create` / `form=edit&id=` | Slideout open · strip form/id | **PASS** (GAP-P2-ACT-DEEPLINK closed) |

## Gaps

| ID | Status |
|----|--------|
| GAP-P2-ACT-DELETE | **CLOSED** |
| GAP-P2-ACT-DEEPLINK | **CLOSED** |
| GAP-TL-FORMTYPE-01 | **CLOSED** |

## Notes

- Local fallback localStorage khi API offline (parity asset pack).
- History modal stub empty (P1).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T19:05:00.000Z |
| versionGate | rechecked |
