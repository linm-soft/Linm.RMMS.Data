# Implement — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field list+form) |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-d` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO · **cấm ERP.*** |
| BFF | `web-bff/api/v1/patrol/**` · `maintenance/**` · mobile-bff same `{resource}` |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T10:15:00.000Z` |
| taskId | `task_8c29a4e4` |
| build | MFE `yarn build` **PASS** · API `dotnet build` **PASS** · Patrol.Bff **PASS** |

## Delivered

### BE (Step 4b)
- Migration `Schema_PatrolPetition` (`20260925170000`): session handover/pause cols · finding feedback cols · journal `WorkOrderId` · table `rmms_patrol_petitions`
- Entity `PatrolPetitionEntity` + DbSet + fluent config
- `PUT sessions/{id}` wave D fields (`Handover*` · `ReceiverName` · `PauseReason` · `IsPaused`) · ket-ca clears pause/handover
- `GET sessions/{id}/journal-lines?open=true`
- `POST findings/{id}/feedback` → `cho-kiem-tra`
- `POST findings/{id}/assign-work-order` → `da-giao` + `WorkOrderId`
- `GET|POST patrol/petitions` · code `KN-{yyyyMMdd}-{seq:D3}` server-only
- BFF: `PatrolPetitionsBffController` · Findings BFF feedback/assign

### FE
- Route shell `/web-rmms-mobile-d` · phone 430
- **TD-06** `CloseSessionPage` — Radio actionKind · LeaveConfirm · PUT sessions · no GPS
- **TK-06** petition list cards + create (GPS deny / noFace) + detail RO
- **TK-03 / TK-05** delta on `FindingDetailPage` — assign WO Live · feedback form · recheck on `cho-kiem-tra`
- Hub links: Field · Patrol ket-ca · Inspect sổ KN · `devRoutes`

## APIs wired

| Surface | Method | Path |
|---------|--------|------|
| TD-06 | GET/PUT | `patrol/sessions/{id}` |
| open lines | GET | `patrol/sessions/{id}/journal-lines?open=true` |
| assign | POST | `maintenance/work-orders` + `patrol/findings/{id}/assign-work-order` |
| feedback | POST | `patrol/findings/{id}/feedback` |
| petitions | GET/POST | `patrol/petitions` |

## WAIVE (phone)
Kind B grid · LinErpListFilterBar · ui-schema editor · LKP SearchInput · HIST — N/A

## Debt / GAP keep
- `GAP-RECEIVER` Text tay (non-blocking)
- mobile-bff sibling repo — UI bind same resource path
- RequirePermission TODO peer (CommonLib ≥1.4.0)
- e2e **queued QA** — cấm Dev

## Verify
- [x] `yarn build` PASS (chunk `web-rmms-mobile-d`)
- [x] `dotnet build` RMMS.Service.Api PASS
- [x] Patrol.Bff PASS
- [ ] e2e — `/agent-qa*` only

## Notes

- 2026-09-25 edit-web-feature: TD-06 radio `choiceStack` + `choiceRow` · checkbox dòng mở và «Không có mặt» cùng `choiceRow` · control 20×20. **Cấm** revert `.field input` cho radio/checkbox (đã làm control thành ô 52px).
- 2026-09-25: TD-06 và TK-06 — Hủy/Lưu onTop dưới header. GPS kiến nghị dùng `gpsPinCopy` · **cấm** «Thử lại GPS».
