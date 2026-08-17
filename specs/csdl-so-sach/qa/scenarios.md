# QA — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | `done` |
| taskId | `task_4a2be2fe` |
| pack | T-QA-01 · T-QA-CRUD-01 · FormType |
| role | `/agent-qa` · roleOnly=qa |
| method | code-walk + VERIFY GATE (không E2E browser) |
| updatedAt | 2026-08-15T16:55:00.000Z |

## Scenarios

| ID | Layer | Steps | Expected | Result |
|----|-------|-------|----------|--------|
| QA-01 | Hub | Mở `/asset/csdl-so-sach` | Tab CSDL/Sổ · KPI · 12/8 cards | **PASS** (`CSDL_RESOURCES`=12 · `SO_RESOURCES`=8 · KPI «Đã có dữ liệu») |
| QA-02 | List | Click card bridges | 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · back Hub | **PASS** · không nested `CatalogListShell` |
| QA-03 | Search | Gõ mã/đường · đổi tỉnh/TT | `SearchTextInput` + Select filter · không nút Tìm riêng | **PASS** |
| QA-04 | Form | Create/Edit/View/Copy | Slideout Z1–Z3 · View readOnly · footer Sửa/Đóng · leave-confirm dirty | **PASS** |
| QA-05 | Book | Open patrol-logs · entries | Inline grid add/remove · save `entries` khi `isBookResource` | **PASS** |
| QA-06 | API | GET/POST/PUT/DEL `csdl-records` | Asset domain · `ApiResponse` · route `api/v1/asset/csdl-records` | **PASS** |
| QA-07 | BFF | Proxy path | `web-bff/api/v1/asset/csdl-records` POST/PUT/DEL | **PASS** |
| QA-08 | SSOT | Shell + pager | `data-catalog-list-page` · `LinCatalogListPagination` | **PASS** |
| QA-09 | Build | typecheck + yarn build + dotnet API/BFF | 0 errors | **PASS** (gate 2026-08-15) |
| QA-10 | Guard | No ERP.* / Domains/Master writes | void | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| ID | Layer | Steps | Expected | Result |
|----|-------|-------|----------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → Save | POST `csdlService.create` · list refresh | **PASS** (code) |
| QA-22 | Edit | Row/toolbar Edit → Save | PUT · dirty leave-confirm | **PASS** |
| QA-23 | View | Row/toolbar View → Sửa | readOnly · footer Sửa/Đóng | **PASS** |
| QA-24 | Copy | Row Copy → Save | POST new (code tự sinh) | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` → `deleteRow` | **PASS** |
| QA-26 | Delete row menu | Row menu Delete | shared `deleteRow` | **PASS** |
| QA-27 | Deep-link | `?resource=&form=create` / `form=edit&id=` | Slideout open · strip form/id, giữ resource | **PASS** |

## Gaps (this QA pass)

| ID | Status | Note |
|----|--------|------|
| GAP-P2-ACT-DELETE | **CLOSED** | prior |
| GAP-P2-ACT-DEEPLINK | **CLOSED** | prior |
| GAP-TL-FORMTYPE-01 | **CLOSED** | prior |
| GAP-QA-HUB-SLUG | **P2 residual** | Hub card meta hiện `c.key` (slug nội bộ); listTitle `Danh sách · ${resource}` — không chặn DoD list pack |
| GAP-RPT-SRC-CSDL-01 | **open (out of pack)** | sổ report Col1–Col3 typed fields |
| SD-AUTH | **open** | `[RequirePermission]` TODO BE |
| History API | **stub** | `LinCatalogHistoryModal` empty P1 |
| Excel import | **OUT pack** | |

## Verify (task_4a2be2fe · 2026-08-15)

```
yarn typecheck → PASS
yarn build → PASS (webpack 5.109.2, 3 size warnings, 0 errors)
dotnet build RMMS.Service.Api -c Release → PASS (0 errors, 1 MSB3026 file-lock retry warning)
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 errors, 0 warnings)
```

Route: `/asset/csdl-so-sach` · FE BASE `/asset/csdl-records` · BE `api/v1/asset/csdl-records`.

## Notes

- Local fallback localStorage khi API offline (parity asset pack).
- QA method = static code + build; không chạy Playwright.
- autoApprove=OFF → Review **không** auto-confirm; pipeline step 6 remains pending.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T16:55:00.000Z |
| versionGate | rechecked |
| formTypePack | task_4a2be2fe |
