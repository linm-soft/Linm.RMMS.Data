# SA — solution-discovery — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `new_page` |
| packKind | `list` (phone list/form ≠ desktop Kind B grid) |
| domain | **Patrol** · DOMAIN-MAP slug `web-rmms-bien-ban` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-bien-ban` · `mfeStdUrl=http://localhost:9301/web-rmms-bien-ban` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_edc348ac`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T00:55:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| peer lock | B journal · C findings · D petitions · E frequency · **cấm** gộp sổ 07 form |

> SA **chốt** FormMode↔API · entity Live reuse · BFF vs API · 3 UNCLEAR.  
> **Cấm** invent BienBan* · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock petitions · **cấm** HOW (TL) · **cấm** Write MFE · **cấm** Step 4b / migration ở role này.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · peer B journal · C findings · D petitions |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity **Live reuse** | `PatrolPetitionEntity` → `rmms_patrol_petitions` · `Schema_PatrolPetition` (wave D) |
| Parent Live | `PatrolJournalLineEntity.ViolationFlag` (bool) · `PatrolFindingEntity.ViolationAction` (string) |
| Entity **Mới** | **none** P1 · **cấm** invent `BienBan*` controller/entity/table |
| BFF web (cite) | `web-bff/api/v1/patrol/petitions` · `PatrolPetitionsBffController` proxy-only |
| BFF mobile (UI bind) | `mobile-bff/api/v1` · catch-all `{**path}` → `api/v1/{path}` · cùng resource |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Persist | scalar · MediaIds CSV guid · **cấm** parent Json blob · **cấm** full URL |
| Out of BB | sổ 07 form · journal CRUD full · kết ca · findings full · frequency · me* · native · desktop |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | labels `useFormOptions()` / `bienBan.*` |
| HTTP | apiClient SSOT | re-export · prefix **mobile-bff only** · **cấm** web-bff client |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication | `patrol.petitions.read` · `patrol.petitions.create` (+ peer journal/finding) |
| Files | FileService BFF `files/*` | guid only |
| Catalog | LOOKUP_STATIC FE | entryPath · tdFlag · tkAction · petition.kind/status — **không** invent `patrol/init-data` |
| Petition ≠ inbox | peer D entity | **cấm** ops/notification inbox |
| SO07 | nav only | `leadSo07` → `csdl-bieu-07` · **cấm** embed form |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Mobile list + create TD/TK + detail · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards |
| Report AC | **N/A** |
| List query keys | `kind=hanh-lang` · `status?` · `route?` · `page?` · `pageSize?` |
| Leave | dirty BB-02/03 → LeaveConfirmModal (DES-LEAVE) |
| Tabs | `none` |
| Map | none P1 · GPS create only |

## § UNCLEAR CLOSED (SA chốt)

### UNCLEAR-DOMAIN-MAP-BB → CLOSED

| | |
|--|--|
| Decision | DOMAIN-MAP row `web-rmms-bien-ban` → **Patrol** · `patrol` |
| Cite | Live petitions + journal `ViolationFlag` + findings `ViolationAction` · peer B–D · MFE `/web-rmms-bien-ban` |
| **Cấm** | invent BienBanController / `bien-ban*` path · ERP.* |
| Action | row added in this SA pass (`docs/DOMAIN-MAP.md`) |

### UNCLEAR-BFF-PROXY → CLOSED

| | |
|--|--|
| Decision | Mobile.Bff **catch-all** `MobileApiProxyController` `{**path}` covers `patrol/petitions` · `patrol/journal-lines` · `patrol/findings` · `auth/*` · `files/*` |
| Web cite | `PatrolPetitionsBffController` → `web-bff/api/v1/patrol/petitions` proxy-only (T-BFF-01) |
| MFE bind | **chỉ** `mobile-bff/api/v1/{resource}` · cùng path API sau proxy |
| **Cấm** | invent BFF business logic · nest mobile-bff route trên web-bff · MFE gọi thẳng `:5101` · invent `BienBanBff*` |

### UNCLEAR-JOURNAL-KIND-FIELD → CLOSED

| | |
|--|--|
| Decision | Live column = **`bool ViolationFlag`** trên `PatrolJournalLineEntity` / DTO |
| UI key | `de-nghi-bien-ban` via `useFormOptions()` LOOKUP_STATIC → map **`ViolationFlag=true`** on `PUT …/journal-lines/{id}` |
| Finding | `ViolationAction` string Live ∈ `lap-bien-ban` \| `de-nghi-vphc` (BB-03) |
| **Cấm** | invent string column cho UI key · invent flag API riêng · hardcode VN label |

## FormMode ↔ API

| FormMode / zone | Method | Path (API · BFF same resource) | Live / Mới | Notes |
|-----------------|--------|--------------------------------|------------|-------|
| BB-00/01 list | GET | `…/patrol/petitions` | Live | filter `kind=hanh-lang` · empty OK · **cấm** mock |
| BB-01 search | GET | same + `route`/`status` query | Live | client chips optional peer flag → BB-02/03 |
| BB-02 load parent | GET | `…/patrol/journal-lines/{id}` | Live peer B | no parent → chặn |
| BB-02 save | POST + PUT | `…/patrol/petitions` + `…/journal-lines/{id}` | Live | body petition §B · `ViolationFlag=true` |
| BB-03 load parent | GET | `…/patrol/findings/{id}` | Live peer C | no finding → chặn |
| BB-03 save | POST + PUT | `…/patrol/petitions` + `…/findings/{id}` | Live | `ViolationAction` ∈ catalog · `FindingId?` on petition |
| BB-04/05 detail | GET | `…/patrol/petitions/{id}` | Live | RO · `leadSo07` nav only |
| BB-06 Field deep | — | query `entryPath` + parent id | CTX | TD-05 / TK-03 doors |
| BB-07 GPS | device | `navigator.geolocation` | Live | deny block trừ `noFace` · **cấm** fake |
| profile | GET | `auth/profile` | Live | `senderUnit` prefill |
| files | POST/PUT | `files/init` · object · `commit` | Live | mediaIds only |
| sessions (opt) | GET | `…/patrol/sessions/{id}` | Live peer A | route/km prefill |

### Petition body (chốt · Live CreatePatrolPetitionRequest)

```json
{
  "senderUnit": "string",
  "route": "string",
  "kmText": "string",
  "content": "string",
  "kind": "hanh-lang",
  "lat": "number?",
  "lng": "number?",
  "accuracyM": "number?",
  "noFace": "bool",
  "status": "moi",
  "findingId": "guid?"
}
```

Code server-generated `KN-{yyyyMMdd}-{seq:D3}` · **cấm** client gửi code.

### Parent write bodies (chốt)

| Path | Body |
|------|------|
| `PUT …/journal-lines/{id}` | `{ "violationFlag": true, …peer B required fields }` |
| `PUT …/findings/{id}` | `{ "violationAction": "lap-bien-ban" \| "de-nghi-vphc", …peer C }` |

## Entity / Schema pair

| Entity | Table | Schema | Wave |
|--------|-------|--------|------|
| `PatrolPetitionEntity` | `rmms_patrol_petitions` | `Schema_PatrolPetition` | **Live** (D) — reuse |
| `PatrolJournalLineEntity` | `rmms_patrol_journal_lines` | Schema_B | **Live** `ViolationFlag` bool |
| `PatrolFindingEntity` | `rmms_patrol_findings` | Schema_C | **Live** `ViolationAction` |
| **Mới** | — | — | **none** P1 |

## BFF vs API

| Concern | Owner |
|---------|-------|
| Business + persist | API Patrol (`PatrolPetitionsController` · journal · findings) |
| MFE bind | `mobile-bff` catch-all proxy · **không** business logic mới |
| Web peer cite | `web-bff` `PatrolPetitionsBffController` cùng resource |
| Auth / Files | existing prefixes · **cấm** nest under patrol |

## LOOKUP_STATIC keys (labels via useFormOptions)

| Key | Values |
|-----|--------|
| `bienBan.entry` | `tuan-duong` · `tuan-kiem` |
| `bienBan.deNghi` | `de-nghi-bien-ban` → bool |
| `bienBan.action` | `lap-bien-ban` · `de-nghi-vphc` |
| `bienBan.kind` | `hanh-lang` (+ AllowedKinds) |
| `bienBan.status` | `moi` … (peer D) |

## Gates / DoR SA

| Gate | Result |
|------|--------|
| Design confirmed | PASS |
| FormMode↔API complete | PASS |
| Entity Live / no invent | PASS |
| BFF vs API chốt | PASS |
| 3 UNCLEAR CLOSED | PASS |
| solution_confirm | **approve** (autoApprove) |
| Migration / Step 4b | **skip** role SA |
| Write MFE | **cấm** |

## Handoff next

| Field | Value |
|-------|-------|
| next role | `team_lead` · `/agent-team-lead` |
| write | `specs/web-rmms-bien-ban/task/web-rmms-bien-ban.md` |
| compact | `handoff/sa-compact.md` |
| e2eQa | queued `/agent-qa*` only |
| blockers | **none** (UNCLEAR closed) |
