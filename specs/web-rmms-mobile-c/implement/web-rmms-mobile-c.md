# Dev implement — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field list+form) |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-c` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T09:45:00.000Z` |
| taskId | `task_7b320485` |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |

## Delivered

### BE (Step 4b)
- `PatrolFindingEntity` + `Schema_PatrolFinding` (`rmms_patrol_findings`)
- Migration C: journal `Review` · `ReviewNote` · `FindingId`
- API: `GET/POST findings` · `GET findings/{id}` · `POST findings/{id}/recheck`
- API: `PUT journal-lines/{id}/review`
- Code gen server-only: `TK-{yyyyMMdd}-{seq:D3}`
- Web BFF proxy: `PatrolFindingsBffController` + journal review
- Mobile BFF: catch-all (no change)
- Perm codes documented (TODO RequirePermission peer pattern): `patrol.findings.*` · `patrol.journal-lines.review`

### FE
- Routes under `/web-rmms-mobile-c`: entry · list TK-02 · form TK-03 · review TK-04 · detail/recheck TK-05
- LOOKUP_STATIC: source·findingKind·side·hangMuc·scope·status·review·recheck
- GPS HARD block save/confirm · LeaveConfirmModal · LinImageUpload
- InspectHub → findings list · phone 430

## WAIVE (cite TL)
- Kind B grid · LinErpListFilterBar · ui-schema · LKP SearchInput · HIST

## Debt / next QA
- PUT findings edit not in wave C (create + detail/recheck)
- RequirePermission attributes when CommonLib wired
- E2E queued `/agent-qa*` — **cấm** start:std ở Dev

## Notes

- 2026-09-25 edit-web-feature: radio phạm vi / đối chiếu / chất lượng / kết luận dùng `choiceGrid` + `choiceRow` (20×20, hàng chọn viền primary). Không kéo `.field input` lên radio/checkbox.
- 2026-09-25: GPS copy SSOT `src/pages/gpsPinCopy.ts` — nút «Ghim vị trí hiện tại» · OK `[lat, lng]`. **Cấm** «Thử lại GPS». TK-03 / TK-04: header rồi Hủy/Lưu onTop (toolbar sticky).
