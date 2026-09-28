# SA — solution-discovery — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` · **delta** SUBMIT-VALIDATE overlay · keep baseline SA |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ **Maintenance** WO · Auth · Files · **Integration** users/routes · peer A–C) · DOMAIN-MAP slug `web-rmms-mobile-d` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/kien-nghi/moi` · `mfeStdUrl=http://localhost:9301/kien-nghi/moi` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_04d764a4`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| updatedAt | `2026-09-27T08:55:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **D** · delta TD-06 + TK-06 submit-validate · keep TK-03 / TK-05 baseline · out: TK-07 (E) |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

> SA **chốt** FormMode↔API · entity+Schema pair · BFF vs API · delta DTO.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** new WS endpoint · **cấm** fake GPS · **cấm** ROAD_ROUTE_SEED · **cấm** HOW (TL) · **cấm** Write MFE · **cấm** Step 4b / migration ở role này.

## § Delta overlay (HARD)

| Area | Prior SA (baseline) | New (this pass) |
|------|---------------------|-----------------|
| `receiverName` | Text tay + profile prefill · GAP-RECEIVER | **SearchInput users** · BFF forward Live `integration/users` · miss `--` · **cấm** free-text |
| `route` (TK-06) | free / seed allowed gap | **SearchInput** `integration/road-routes/search` · **no** `ROAD_ROUTE_SEED` · miss `--` |
| Submit UX | canSave / disabled gates | **Pattern B** always-on Lưu · validate-on-click · banner+inline · API 4xx toast only |
| BFF users | missing | **forward-only** `GET mobile-bff/…/integration/users` · **cấm** new WS API |
| mfeStd | `/web-rmms-mobile-d` | **`/kien-nghi/moi`** |
| Entity / petition / WO / feedback | keep | **no change** this delta |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · Maintenance / `maintenance` · **Integration** / `integration` (users · road-routes) · Auth · Files |
| API host | Live Patrol / Maintenance / Integration — **no new WS controllers** this delta |
| Entity / Schema | keep baseline: `PatrolPetitionEntity` + `Schema_PatrolPetition` · session handover/pause cols · finding feedback/WO · journal WO |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `maintenance/**` · **`integration/users`** · `integration/road-routes/**` · cùng `{resource}` |
| BFF web | cite peer only · **cấm** MFE dùng web-bff |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · route `/kien-nghi/moi` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Persist | scalar · MediaIds CSV · **cấm** parent `*Json` · **cấm** full URL |
| Out of D | TK-07 (E) · native · desktop Asset · Excel · `new_page` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI SearchInput | Mobile kit pattern (= road-routes SearchInput) | **cấm** ERP `UserSearchInput` nguyên bản |
| HTTP | `mobileApiBase()` only | **cấm** web-bff · **cấm** direct WS host from MFE |
| Catalog users | Live Integration AppUsers via BFF | empty list OK · **cấm** mock |
| Catalog routes | `ROAD_ROUTE_LOOKUP_CONFIG` · no seed | remove `ROAD_ROUTE_SEED` / QL.22 filter |
| WO / petition | keep baseline | **cấm** invent WO in Patrol · petition ≠ inbox |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full phone 430 · Pattern B submit · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC / DES-GRID / `LinErpListFilterBar` | **N/A** |
| Report AC / Excel | **N/A** |
| Leave | dirty TD-06 / TK-06 → LeaveConfirmModal |
| Map | none · GPS TK-06 optional (deny after click · no-face OK) · TD-06 none |

## § UNCLEAR CLOSED (SA chốt — delta + keep)

### UNCLEAR-USER-SEARCH-CTRL → CLOSED

| | |
|--|--|
| Decision | Mobile **SearchInput** = same UX pattern as road-routes SearchInput (Design chốt) |
| Transport | `GET mobile-bff/api/v1/integration/users?search=&page=&pageSize=` → Live WebService `integration/users` |
| DTO map (real-data §B) | `username` \| `code` → mã hiển thị · `fullName` → tên · select → write `receiverName` string (code or display) |
| Miss / empty | display `--` · **cấm** free-text fallback · **cấm** invent roster API in Patrol |
| BFF | **forward-only** · no business logic · closes `GAP-DA-MOB-D-USERS-01` for SA scope |

### UNCLEAR-RECEIVER-MISS → CLOSED (PO)

| | |
|--|--|
| Decision | no match → `--` · **cấm** free-text |

### UNCLEAR-RECEIVER-API (baseline) → SUPERSEDED

| | |
|--|--|
| Prior | Text tay + profile prefill · GAP-RECEIVER |
| New | SearchInput users via Integration Live + BFF forward · GAP-RECEIVER retired for this delta |
| **Cấm** | invent new WS user-picker · ERP UserSearchInput copy |

### UNCLEAR-ROUTE-SEED → CLOSED

| | |
|--|--|
| Decision | `GET …/integration/road-routes/search` via lookups · **remove** `ROAD_ROUTE_SEED` · miss `--` · closes `GAP-DA-MOB-D-SEED-01` SA scope |

### Keep CLOSED (baseline — no re-open)

| id | Decision (keep) |
|----|-----------------|
| UNCLEAR-HANDOVER-COL | scalar session cols · Note tạm `D1\|` until migrate |
| UNCLEAR-PAUSE-STATUS | `IsPaused` flag · Status stays `Đang tuần` |
| UNCLEAR-PETITION-SCHEMA | `Schema_PatrolPetition` pair trước form |
| UNCLEAR-FEEDBACK-DTO | POST findings/{id}/feedback body §B |
| UNCLEAR-WO-LINK | WorkOrderId + Live maintenance WO |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP → Patrol (+ Maintenance · Integration cite) |

## FormMode ↔ API

| FormMode / zone | Method | Path (API · BFF same resource) | Live / Mới | Notes |
|-----------------|--------|--------------------------------|------------|-------|
| TD-06 load ca | GET | `…/patrol/sessions/{id}` | Live | keep |
| TD-06 receiver search | GET | `…/integration/users?search=&page=&pageSize=` | Live + **BFF forward** | SearchInput · map §B · miss `--` |
| TD-06 save ket-ca / ban-giao / tam-dung | PUT | `…/patrol/sessions/{id}` | Live + Schema D | Pattern B · `receiverName` from Search select |
| TK-06 route search | GET | `…/integration/road-routes/search` | Live | no seed · miss `--` |
| TK-06 list | GET | `…/patrol/petitions` | Live/Mới baseline | empty OK · **cấm** mock |
| TK-06 create | POST | `…/patrol/petitions` | Live/Mới baseline | Pattern B · `route` from Search · GPS deny after click |
| TK-03 assignWo | POST | `…/maintenance/work-orders` | Live | **keep** baseline |
| TK-05 feedback | POST | `…/patrol/findings/{id}/feedback` | Live/Mới baseline | **keep** |
| profile | GET | `auth/profile` | Live | senderUnit · **not** free receiver |
| files | POST/PUT | `files/*` | Live | mediaIds only |

### PUT session body (chốt — keep + receiver from Search)

```json
{
  "status": "Hoàn thành | Đang tuần",
  "handoverNote": "string?",
  "handoverOpenLineIds": ["guid?"],
  "receiverName": "string?",
  "pauseReason": "string?",
  "isPaused": "bool?",
  "noteTmp": "D1|…?"
}
```

`receiverName` = selected user `code`/`username` (or display per FE bind) · **not** free typed string. `noteTmp` chỉ khi cols chưa migrate.

### Users SearchInput DTO (chốt)

| Response field | UI |
|----------------|-----|
| `username` \| `code` | mã |
| `fullName` | tên |
| (no row / 404 empty) | `--` |

Paged: `page` · `pageSize` · `search` query. **Cấm** invent fields.

### Petition body (chốt — keep · route from Search)

```json
{
  "senderUnit": "string",
  "route": "string",
  "kmText": "string",
  "content": "string",
  "kind": "string",
  "lat": "number?",
  "lng": "number?",
  "accuracyM": "number?",
  "noFace": "bool",
  "status": "moi",
  "findingId": "guid?"
}
```

`route` = selected road-route code · miss UI `--` · **cấm** seed invent.

### Feedback / WO bodies

Keep baseline SA (unchanged this delta).

## Entity / Schema pair (HARD — keep · no new entity this delta)

| Entity | Table | Schema | Wave |
|--------|-------|--------|------|
| `PatrolPetitionEntity` | `rmms_patrol_petitions` | `Schema_PatrolPetition` | D keep |
| `PatrolSessionEntity` + handover/pause | `rmms_patrol_sessions` | Schema session extend | D keep |
| `PatrolFindingEntity` + feedback/WO | `rmms_patrol_findings` | Schema finding extend | D keep |
| Integration users / road-routes | Live AppUsers / routes | — | **no** new entity · BFF forward only |

## BFF vs API

| Concern | Owner |
|---------|-------|
| Business + persist sessions/petitions/WO | API Patrol / Maintenance |
| Users / road-routes catalog | API Integration Live |
| MFE bind | `mobile-bff` **proxy/forward only** · add users forward if missing |
| Web peer | `web-bff` cite only · **cấm** MFE bind |

## Pattern B (submit HARD)

| Zone | Rule |
|------|------|
| TD-06 · TK-06 Lưu | always enabled except `saving` |
| Validate | first click → `validationAttempted` · banner `string[]` + inline |
| API errors | toast only · **cấm** invent field map from 4xx |
| GPS TK-06 | deny banner **after** submit click · no-face OK · **cấm** fake |

## GPS HARD

| Zone | Rule |
|------|------|
| TD-06 | **none** |
| TK-06 | deny after click · no-face → save w/o coords · **cấm** fake |
| TK-03 / TK-05 | keep baseline (no new GPS) |

## Gaps closed this SA (scope)

| id | SA decision |
|----|-------------|
| GAP-DA-MOB-D-USERS-01 | BFF forward `integration/users` · Dev implements · **cấm** new WS |
| GAP-DA-MOB-D-SEED-01 | remove `ROAD_ROUTE_SEED` · Dev lookups |
| GAP-DA-MOB-D-PATTERN-B | Pattern B FormMode · Dev CloseSession + PetitionForm |
| UNCLEAR-USER-SEARCH-CTRL | DTO map CLOSED above |

## Gates / DoR SA

| Gate | Result |
|------|--------|
| Design confirmed + compact | PASS |
| real-data §A+§B | PASS · FormMode↔API + users/routes DTO |
| UNCLEAR all CLOSED | PASS (delta + baseline keep) |
| Schema-before-form | PASS (keep · no new entity) |
| be/ui repo confirm | PASS |
| solution_confirm | **approve** (autoApprove) |
| ERP.* / new WS API | none |
| Write MFE / Step 4b / e2e | **skipped** (roleOnly=sa) |

## Handoff next

| Role | Packet |
|------|--------|
| team-lead | T-* edit delta: Pattern B · SearchInput users/routes · BFF users forward · no-seed · mfeStd `/kien-nghi/moi` |
| dev | CloseSession + PetitionForm + lookups + Mobile.Bff users · `mobileApiBase()` |
| qa | Pattern B · users 200 · route `--` · GPS deny after click · e2eQa queued |

## Full paths

- design compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/design-compact.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md`
