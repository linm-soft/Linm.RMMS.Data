# SA — solution-discovery — web-rmms-bien-ban

| Field | Value |
|-------|-------|
| feature | `web-rmms-bien-ban` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone list/form ≠ desktop Kind B grid) |
| domain | **Patrol** · DOMAIN-MAP slug `web-rmms-bien-ban` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/bien-ban` · `mfeStdUrl=http://localhost:9301/bien-ban` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_b445a51e`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype · `task_889425f7` |
| prior · po | `confirmed` · compact + `po/requirement.md` · `task_3dddf896` |
| prior · data_analy | `confirmed` · hash `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` · `task_af34e11a` |
| contentHash | `sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T16:10:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| peer lock | B journal · C findings · D petitions · E frequency · **cấm** gộp sổ 07 form |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

> SA **reconfirm** edit_page: FormMode↔API · Live reuse · BFF vs API · delta Pattern B + SearchInput + GPS deny-on-submit.  
> **Cấm** invent BienBan* · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock petitions · **cấm** HOW (TL) · **cấm** Write MFE · **cấm** Step 4b / migration ở role này.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · peer B journal · C findings · D petitions · road-routes |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity **Live reuse** | `PatrolPetitionEntity` → `rmms_patrol_petitions` · `Schema_PatrolPetition` (wave D) |
| Parent Live | `PatrolJournalLineEntity.ViolationFlag` (bool) · `PatrolFindingEntity.ViolationAction` (string) |
| Entity **Mới** | **none** P1 · **cấm** invent `BienBan*` controller/entity/table |
| BFF web (cite) | `web-bff/api/v1/patrol/petitions` · `PatrolPetitionsBffController` proxy-only |
| BFF mobile (UI bind) | `mobile-bff/api/v1` · catch-all `{**path}` → `api/v1/{path}` · cùng resource |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · route **`/bien-ban`** · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Persist | scalar · MediaIds CSV guid · **cấm** parent Json blob · **cấm** full URL |
| Out of BB | sổ 07 form · journal CRUD full · kết ca · findings full · frequency · me* · native · desktop · Excel |

## § Delta edit_page (SUBMIT-VALIDATE · SA chốt)

| # | Delta | SA decision |
|---|-------|-------------|
| 1 | Pattern B submit | CTA **Lưu luôn bật** · chỉ `saving` disable · **cấm** `disabled={!canSave}` · banner + inline errors |
| 2 | GPS deny-on-submit | Deny block **khi submit** (trừ `noFace`) · **cấm** fake GPS · **cấm** block sớm làm CTA disabled |
| 3 | route = SearchInput | Live `GET …/patrol/road-routes/search` via mobile-bff · **cấm** SEED · miss display=`--` |
| 4 | capture | `capture=environment` nếu có ảnh · mediaIds guid only |
| 5 | Excel | **cấm** export |
| Soft | LIST-SCOPE | **petitions-only** · `kind=hanh-lang` |
| Soft | SO07 | nav slug `csdl-bieu-07` · **cấm** embed |
| Route | STD-ROUTE | **CLOSED** `/bien-ban` (was `/web-rmms-bien-ban`) |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | labels `useFormOptions()` / `bienBan.*` · SearchInput road-route |
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
| formPattern | Mobile list + create TD/TK + detail · LeaveConfirmModal · Pattern B · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards |
| Report AC | **N/A** |
| List query keys | `kind=hanh-lang` · `status?` · `route?` · `page?` · `pageSize?` |
| Leave | dirty BB-02/03 → LeaveConfirmModal (DES-LEAVE) · **cấm** native alert/confirm |
| Tabs | `none` |
| Map | none P1 · GPS create only · deny-on-submit |

## § UNCLEAR CLOSED (giữ · reconfirm)

### UNCLEAR-DOMAIN-MAP-BB → CLOSED

| | |
|--|--|
| Decision | DOMAIN-MAP row `web-rmms-bien-ban` → **Patrol** · `patrol` |
| Cite | Live petitions + journal `ViolationFlag` + findings `ViolationAction` · peer B–D · MFE `/bien-ban` |
| **Cấm** | invent BienBanController / `bien-ban*` path · ERP.* |

### UNCLEAR-BFF-PROXY → CLOSED

| | |
|--|--|
| Decision | Mobile.Bff **catch-all** covers `patrol/petitions` · `patrol/journal-lines` · `patrol/findings` · `patrol/road-routes/*` · `auth/*` · `files/*` |
| Web cite | `PatrolPetitionsBffController` → `web-bff/api/v1/patrol/petitions` proxy-only |
| MFE bind | **chỉ** `mobile-bff/api/v1/{resource}` |
| **Cấm** | invent BFF business · nest mobile trên web-bff · MFE gọi thẳng `:5101` · invent `BienBanBff*` |

### UNCLEAR-JOURNAL-KIND-FIELD → CLOSED

| | |
|--|--|
| Decision | Live column = **`bool ViolationFlag`** trên `PatrolJournalLineEntity` / DTO |
| UI key | `de-nghi-bien-ban` → map **`ViolationFlag=true`** on `PUT …/journal-lines/{id}` |
| Finding | `ViolationAction` string Live ∈ `lap-bien-ban` \| `de-nghi-vphc` (BB-03) |
| **Cấm** | invent string column · invent flag API riêng · hardcode VN label |

### UNCLEAR-STD-ROUTE → CLOSED (edit)

| | |
|--|--|
| Decision | MFE route = **`/bien-ban`** · mfeStdUrl `http://localhost:9301/bien-ban` |
| **Cấm** | invent parallel route `/web-rmms-bien-ban` as primary |

## FormMode ↔ API

| FormMode / zone | Method | Path (API · BFF same resource) | Live / Mới | Notes |
|-----------------|--------|--------------------------------|------------|-------|
| BB-00/01 list | GET | `…/patrol/petitions` | Live | filter `kind=hanh-lang` · empty OK · **cấm** mock · LIST-SCOPE petitions-only |
| BB-01 search | GET | same + `route`/`status` query | Live | client chips optional |
| BB-02/03 route | GET | `…/patrol/road-routes/search` | Live | SearchInput · no SEED · miss=`--` |
| BB-02 load parent | GET | `…/patrol/journal-lines/{id}` | Live peer B | no parent → chặn |
| BB-02 save | POST + PUT | `…/patrol/petitions` + `…/journal-lines/{id}` | Live | Pattern B · `ViolationFlag=true` · GPS deny-on-submit |
| BB-03 load parent | GET | `…/patrol/findings/{id}` | Live peer C | no finding → chặn |
| BB-03 save | POST + PUT | `…/patrol/petitions` + `…/findings/{id}` | Live | Pattern B · `ViolationAction` · GPS deny-on-submit |
| BB-04/05 detail | GET | `…/patrol/petitions/{id}` | Live | RO · `leadSo07` → `csdl-bieu-07` nav |
| BB-06 Field deep | — | query `entryPath` + parent id | CTX | TD-05 / TK-03 doors |
| BB-07 GPS | device | `navigator.geolocation` | Live | deny **on submit** trừ `noFace` · **cấm** fake |
| profile | GET | `auth/profile` | Live | `senderUnit` prefill |
| files | POST/PUT | `files/init` · object · `commit` | Live | mediaIds · capture=environment |
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
| Road routes | Live search API | — | **Live** · no new entity |
| **Mới** | — | — | **none** P1 |

## BFF vs API

| Concern | Owner |
|---------|-------|
| Business + persist | API Patrol (`PatrolPetitionsController` · journal · findings · road-routes) |
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
| FormMode↔API complete (incl. road-routes/search) | PASS |
| Entity Live / no invent | PASS |
| BFF vs API chốt | PASS |
| UNCLEAR CLOSED (+ STD-ROUTE) | PASS |
| Delta SUBMIT-VALIDATE chốt | PASS |
| solution_confirm | **approve** (autoApprove · `task_b445a51e`) |
| Migration / Step 4b | **skip** role SA |
| Write MFE | **cấm** |

## Handoff next

| Field | Value |
|-------|-------|
| next role | `team_lead` · `/agent-team-lead` |
| write | `specs/web-rmms-bien-ban/task/web-rmms-bien-ban.md` |
| compact | `handoff/sa-compact.md` |
| e2eQa | queued `/agent-qa*` only |
| blockers | **none** (UNCLEAR closed · delta chốt) |
