# SA — solution-discovery — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ **Maintenance** WO · Auth · Files · peer A–C) · DOMAIN-MAP slug `web-rmms-mobile-d` → Patrol (+ Maintenance cite) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-d` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-d` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_5b248a11`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T09:45:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **D** · TD-06 ket-ca/ban-giao/tam-dung · TK-03 assign WO · TK-05 feedback · TK-06 petitions · out: TK-07 (E) |

> SA **chốt** FormMode↔API · entity+Schema pair · Note tạm 1 format · BFF vs API · gates.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock petitions · **cấm** inbox=sổ KN · **cấm** HOW (TL) · **cấm** Write MFE ở role này · **cấm** Step 4b / migration ở role này.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Maintenance / `maintenance` (WO Live) · Auth · Files · peer A sessions · B journal · C findings |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` · Maint WO `Domains/Maintenance/` |
| Entity / table **Mới** | `PatrolPetitionEntity` → `rmms_patrol_petitions` · pair `Schema_PatrolPetition` **trước** form TK-06 |
| Entity extend (migration D) | `PatrolSessionEntity` handover/pause cols · `PatrolFindingEntity` feedback + `WorkOrderId` · `PatrolJournalLineEntity` `WorkOrderId` (TD-05 peer) |
| Entity Live cite | `PatrolSession` · `PatrolFinding` · Maintenance WO |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · `web-bff/api/v1/maintenance/**` |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/maintenance/**` · cùng `{resource}` |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol + new petition/feedback/session-close codes |
| Persist | scalar columns · `MediaIds` CSV guid · **cấm** parent `*Json` blob · **cấm** full URL |
| Out of D | TK-07 (E) · native · desktop Asset |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix mobile-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol · new D perms |
| Files | FileService BFF `files/*` | guid only · **cấm** full URL persist |
| Catalog | LOOKUP_STATIC FE keys | actionKind · pauseReason · petitionKind · feedbackQuality · status — **không** invent `patrol/init-data` |
| Persist | no-parent-json-field | MediaIds CSV · scalar handover/pause/feedback/WO |
| WO | Maintenance Live only | **cấm** invent WO trong Patrol |
| Petition ≠ inbox | separate entity/API | **cấm** `ops` / notification inbox làm sổ KN |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TD-06 · TK-03 assign · TK-05 feedback · TK-06 list+form) · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards |
| Report AC | **N/A** |
| List query keys (TK-06) | `status?` · `route?` · `page?` · `pageSize?` |
| filterItems | **cấm** DES-GRID |
| Leave | dirty TD-06 / TK-06 create → LeaveConfirmModal (DES-LEAVE) |
| Tabs | `none` |
| Map | none wave D · GPS TK-06 optional (no-face OK) · TD-06 none |

## § UNCLEAR CLOSED (SA chốt)

### UNCLEAR-HANDOVER-COL → CLOSED

| | |
|--|--|
| Decision | **Target:** migration D add scalar cols trên `PatrolSession` · pair Schema_Session extend **trước** form TD-06 |
| Columns | `HandoverNote` (max 2000) · `HandoverOpenLineIds` (CSV guid, max 2000) · `ReceiverName` (max 200) · `PauseReason` (max 64) · `IsPaused` (bool) |
| Interim Note tạm (1 format — FE/BE cùng parse đến khi cols Live) | Prefix `D1\|` · fields `|`-separated · **không** JSON blob |
| Format ban-giao | `D1\|handover\|{receiverName}\|{openIdsCsv}\|{note}` |
| Format tam-dung | `D1\|pause\|{pauseReason}\|{note?}` |
| Format ket-ca | **không** ghi Note tạm — chỉ `Status=Hoàn thành` · clear `IsPaused` / pause fields |
| Rationale | PO stance «Note tạm 1 format» · GAP-DA-MOB-D-NOTE-01 · scalar ưu tiên khi migration D xong |

### UNCLEAR-PAUSE-STATUS → CLOSED

| | |
|--|--|
| Decision | **Flag trên Đang tuần** — `Status` giữ `Đang tuần` khi tam-dung · set `IsPaused=true` + `PauseReason` required |
| ket-ca | `Status=Hoàn thành` · `IsPaused=false` · clear pause/handover |
| ban-giao | `Status=Đang tuần` · write handover cols/Note · `IsPaused=false` |
| **Cấm** | invent Status value `Tạm dừng` riêng trên Live enum hiện tại |

### UNCLEAR-PETITION-SCHEMA → CLOSED (gate)

| | |
|--|--|
| Decision | Pair **entity + `Schema_PatrolPetition` + table `rmms_patrol_petitions` trước** wire form TK-06 |
| Entity | `PatrolPetitionEntity` |
| Soft-delete | KEEP peer Patrol (`IsActive`) |
| Code | Server-generated `KN-{yyyyMMdd}-{seq:D3}` · **cấm** client gửi code |
| Dev | migration + controller **Mới** (TL T-* / Step 4b) — **không** mock list khi 404 · empty + gap OK |
| **Cấm** | reuse notification / inbox DTO |

### UNCLEAR-FEEDBACK-DTO → CLOSED

| | |
|--|--|
| Decision | Body chốt theo real-data §B |
| Endpoint | `POST …/patrol/findings/{id}/feedback` **Mới** |
| Body | `{ qtyDone: string, quality: "dat"\|"chua-dat", at: datetime, mediaIds?: guid[], note?: string }` |
| Side-effect | finding.status → `cho-kiem-tra` |
| Persist | scalar feedback cols trên finding (migration D) · MediaIds CSV · **cấm** parent Json |

### UNCLEAR-WO-LINK → CLOSED

| | |
|--|--|
| Decision | `WorkOrderId` (Guid?) trên **cả** finding **và** journal-line |
| TK-03 assign | `POST maintenance/work-orders` Live → set `finding.WorkOrderId` · status `da-giao` |
| TD-05 peer B | scope `bdtx` → set `journalLine.WorkOrderId` (cùng CreateWorkOrderRequest) |
| CreateWorkOrderRequest (Live) | `RouteName` · `WorkType` · `Status=new` · `DueAt` · `SlaHours?` · `AssigneeName?` · `TeamName?` · `IncidentId=` (trống) · `Title`=mã tồn tại · `Description?` |
| **Cấm** | invent WO entity trong Patrol |

### UNCLEAR-RECEIVER-API → CLOSED (GAP keep)

| | |
|--|--|
| Decision | `receiverName` = **Text tay** · prefill optional từ `GET auth/profile` display name |
| **Cấm** | invent user-picker / same-unit roster API trong Patrol |
| GAP | `GAP-DA-MOB-D-RECEIVER-01` giữ — TL/Dev không block TD-06 |

### UNCLEAR-DOMAIN-SLUG → CLOSED

| | |
|--|--|
| Decision | DOMAIN-MAP row `web-rmms-mobile-d` → **Patrol** · `patrol` · cite Maintenance WO · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-mobile-d` |
| Cite | peer rows `web-rmms-mobile-a` / `b` / `c` |
| Action | row added in this SA pass |

## FormMode ↔ API

| FormMode / zone | Method | Path (API · BFF same resource) | Live / Mới | Notes |
|-----------------|--------|--------------------------------|------------|-------|
| TD-06 load ca | GET | `…/patrol/sessions/{id}` | Live | no active → chặn (peer A) |
| TD-06 save ket-ca | PUT | `…/patrol/sessions/{id}` | Live Status | body `{ Status: "Hoàn thành" }` · clear pause |
| TD-06 save ban-giao | PUT | `…/patrol/sessions/{id}` | Live + Schema D cols | Status `Đang tuần` · handover fields / Note tạm `D1\|handover\|…` |
| TD-06 save tam-dung | PUT | `…/patrol/sessions/{id}` | Live + Schema D | Status `Đang tuần` · `IsPaused` + `PauseReason` / Note `D1\|pause\|…` |
| TK-03 assignWo | POST | `…/maintenance/work-orders` | Live | then PATCH/PUT finding `workOrderId` + status `da-giao` |
| finding after WO | PUT/PATCH | `…/patrol/findings/{id}` | Schema D | `workOrderId` · status |
| TK-05 feedback | POST | `…/patrol/findings/{id}/feedback` | Mới | body §B · → `cho-kiem-tra` |
| TK-06 list | GET | `…/patrol/petitions` | Mới | empty OK · **cấm** mock |
| TK-06 create | POST | `…/patrol/petitions` | Mới | body §B · status `moi` · GPS optional if noFace |
| open lines (TD-06) | GET | peer B `…/journal-lines?sessionId&open` | Live peer | handoverOpenIds |
| files | POST/PUT | `files/init` · `object` · `commit` | Live | mediaIds only |
| profile | GET | `auth/profile` | Live | senderUnit / receiver prefill |

### PUT session body (chốt)

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

`noteTmp` chỉ khi cols chưa migrate — cùng format `D1|` ở trên. Sau migration D: **cấm** ghi Note tạm; dùng scalar cols.

### Feedback body (chốt)

```json
{ "qtyDone": "string", "quality": "dat|chua-dat", "at": "ISO-8601", "mediaIds": ["guid?"], "note": "string?" }
```

### Petition body (chốt)

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

## Entity / Schema pair (HARD trước form)

| Entity | Table | Schema | Wave |
|--------|-------|--------|------|
| `PatrolPetitionEntity` | `rmms_patrol_petitions` | `Schema_PatrolPetition` | D **Mới** |
| `PatrolSessionEntity` + cols | `rmms_patrol_sessions` | Schema session extend | D migration |
| `PatrolFindingEntity` + feedback/WO | `rmms_patrol_findings` | Schema finding extend | D migration |
| `PatrolJournalLineEntity` + `WorkOrderId` | `rmms_patrol_journal_lines` | Schema_B extend | D migration (TD-05) |

## BFF vs API

| Concern | Owner |
|---------|-------|
| Business + persist | API Patrol / Maintenance |
| MFE bind | `mobile-bff` proxy only · **không** business logic mới trên BFF |
| Web peer cite | `web-bff` cùng resource |

## LOOKUP_STATIC keys (labels via useFormOptions)

| Field | Keys |
|-------|------|
| actionKind | `ket-ca` · `ban-giao` · `tam-dung` |
| pauseReason | 5 keys (PO/CTX — FE catalog; **cấm** hardcode VN) |
| feedbackQuality | `dat` · `chua-dat` |
| petitionKind | PO/CTX catalog keys |
| petition.status | `moi` (+ peer close later) |
| finding.status deltas | `da-giao` · `cho-kiem-tra` |

## GPS HARD

| Zone | Rule |
|------|------|
| TD-06 | **none** |
| TK-03 assign | no new GPS |
| TK-05 feedback | no HARD GPS |
| TK-06 | deny → block nút cần tọa độ · **no-face** → save w/o coords · **cấm** fake lat/lng |

## Gates / DoR SA

| Gate | Result |
|------|--------|
| Design confirmed + compact | PASS |
| real-data §A+§B | PASS · FormMode↔API mapped |
| UNCLEAR all CLOSED | PASS |
| Schema-before-form | PASS (pair listed · TL owns migration) |
| be/ui repo confirm | PASS |
| solution_confirm | **approve** (autoApprove) |
| ERP.* | none |
| Write MFE / Step 4b | **skipped** (roleOnly=sa) |

## Handoff next

| Role | Packet |
|------|--------|
| team-lead | T-* tasks · migration D order · Step 4b BE · HOW |
| dev | MFE bind mobile-bff · **không** desktop Asset |
| qa | empty petition · GPS deny-vs-no-face · assign WO · pause required · Note `D1|` parity |

## Full paths

- design compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/handoff/design-compact.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-d-real-data.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/STATUS.md`
