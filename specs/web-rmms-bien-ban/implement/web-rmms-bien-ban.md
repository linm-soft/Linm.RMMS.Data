# Implement — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (phone) |
| mfe | `Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/bien-ban` |
| mfeStdUrl | `http://localhost:9301/bien-ban` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T16:30:00.000Z` |
| taskId | `task_863a1efc` |
| build | MFE `yarn build` **PASS** · BE `dotnet build` **PASS** |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## Surfaces

| Zone | Route | Notes |
|------|-------|-------|
| BB-00/01 | `/bien-ban` | GET petitions `kind=hanh-lang` · search · empty · auth gate · **cấm** Excel |
| BB-02 | `/bien-ban/td/new?journalLineId=` | Pattern B · SearchInput road-routes · GPS deny-on-submit · POST + PUT journal ViolationFlag |
| BB-03 | `/bien-ban/tk/new?findingId=` | Pattern B · SearchInput · GPS deny-on-submit · POST + PUT findings ViolationAction |
| BB-04/05 | `/bien-ban/:id` | detail RO · leadSo07 disable+copy · capture N/A (no file input) |
| BB-06 | peer nav | TD → mobile-b · TK → mobile-c |
| BB-07 | chips on list | create TD/TK |
| DES-LEAVE | LeaveConfirmModal | dirty BB-02/03 |

## Delta HARD (edit_page) — shipped

| Rule | Implementation |
|------|----------------|
| Pattern B Lưu luôn bật | `disabled={saving}` only · **cấm** `disabled={!canSave}` |
| Banner + inline | `validationAttempted` · banner `string[]` + fieldError · scroll first error |
| GPS deny-on-submit | banner/inline trên submit · noFace exception · không khóa nút trước |
| SearchInput road-routes | `ROAD_ROUTE_LOOKUP_CONFIG` · no SEED · miss=`--` · TK prefill resolve getDetail |
| capture=environment | N/A — create/detail không có `<input type=file>` / LinImageUpload |
| cấm Excel | list phone không export |

## APIs (mobile-bff)

| Call | Path |
|------|------|
| LIST | `GET …/patrol/petitions?kind=hanh-lang` |
| CREATE | `POST …/patrol/petitions` |
| DETAIL | `GET …/patrol/petitions/{id}` |
| PARENT TD | `GET\|PUT …/patrol/journal-lines/{id}` ViolationFlag |
| PARENT TK | `GET\|PUT …/patrol/findings/{id}` ViolationAction |
| ROUTE LKP | `GET …/integration/road-routes/search` (Mobile.Bff Live) |
| AUTH | `hasAccessToken` + profile lite |

## BE Step 4b

- Entity/migration: **none Mới** · Live reuse · **cấm** invent BienBan*
- Live OK: petitions · journal ViolationFlag · findings ViolationAction · road-routes/search
- Mobile.Bff: `RoadRoutesMobileController` forward Live · catch-all patrol/*
- DOMAIN-MAP: route SSOT `/bien-ban` · migration skip note
- **cấm** ERP.* · **cấm** web-bff client

## T-* status

| Task | Status |
|------|--------|
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **done** (Live) |
| T-BE-SCHEMA-01 | **WAIVE** migration skip |
| T-UI-LIST/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP/HIST · T-UI-LKP-01 | **done** |
| T-UI-FILTER/CFG · UISCHEMA | **WAIVE** phone |
| T-QA-* | pending (queued `/agent-qa*`) |

## Debt

- SO07: Mobile không host → button disable + toast (PO)
- Create TD/TK cần `journalLineId` / `findingId` (parent required)
- capture=environment: khi thêm ảnh upload sau này phải gắn `capture="environment"`

## Verify

```
yarn build  # PASS (chunk bien-ban)
dotnet build api/src/RMMS.Service.Api -c Release  # PASS
```

## Files touched (this task)

- `src/pages/WebRmmsBienBan/BienBanCreateTdPage.tsx`
- `src/pages/WebRmmsBienBan/BienBanCreateTkPage.tsx`
- `src/pages/WebRmmsBienBan/lookupStatic.ts`
- `src/pages/WebRmmsBienBan/styles.module.css`
- `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` (route `/bien-ban`)
