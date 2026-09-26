# Data-analy — real-data bind — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — danh mục, phiếu, đối chiếu, kiểm tra lại |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2a2290a0` |
| prefix API | `api/v1/patrol` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol` |
| prefix BFF mobile (plan) | `mobile-bff/api/v1` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| domain | **Patrol** (+ Auth · Files · journal peer B · parent session Live) |
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T08:45:00.000Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope đợt C

| In | Out |
|----|-----|
| TK-02 list · TK-03 tạo phiếu · TK-04 đối chiếu · TK-05 detail+recheck | TK-06 · TK-07 |
| API **Mới** findings / recheck / journal review | stub fake findings / seed demo |
| Parent Live sessions · profile · files · peer B journal-lines | `POST maintenance/work-orders` · `POST …/feedback` (D) |
| GPS HARD TK-03 + TK-05 recheck | Giao BDTX nút trên TK-03 (D) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-c.md` | — | — |
| `plan` | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` TK-02…05 | — | SSOT màn C |
| `gap` | `GAP-TUAN-DUONG-TUAN-KIEM.md` GAP-TK-01…03 | — | đối chiếu / phiếu |
| `peer-a` | `web-rmms-mobile-a` CTX + real-data | — | TK-00/01 · sessions |
| `peer-b` | `web-rmms-mobile-b` · journal-lines | empty journal → TK-04 empty | schema B |
| `api-parent` | `GET …/patrol/sessions` · `{id}` | no active đợt → empty hub A | toast · **cấm** `window.alert` |
| `api-new` | **Mới** findings + recheck (chưa có) | empty list TK-02 | 404 until schema · **cấm** mock SSOT |
| `api-review` | **Mới** `PUT …/journal-lines/{id}/review` | — | phụ thuộc Schema_B |
| `entity-new` | `PatrolFinding` · `Schema_PatrolFinding` · đề xuất `rmms_patrol_findings` | — | pair **trước** form |
| `entity-parent` | `PatrolSessionEntity` · `rmms_patrol_sessions` | — | tenant / soft-delete |
| `dto-new` | body IMPLEMENT TK-03 / recheck / review | — | validate GPS + requireds |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol | — | **cấm ERP.*** · SA thêm slug C |
| `auth` | `auth/profile` | — | redirect login |
| `files` | `files/init` · `object` · `commit` | — | resign fail toast |
| `geo` | `navigator.geolocation` | deny → block save/confirm | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — đợt C

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| session.tk | đợt tuần kiểm | context | — | `GET …/sessions` Đang tuần + Tuần kiểm | `sessionId` FK | peer A | n/a |
| finding.list | danh mục tồn tại | List cards | — | `GET …/findings?sessionId&status&route` **Mới** | — | n/a | n/a |
| finding.byId | chi tiết | Detail | — | `GET …/findings/{id}` **Mới** | — | n/a | n/a |
| source | nguồn | Dropdown | LOOKUP_STATIC | — | `source` **required** | gap | n/a |
| journalLineId | liên kết dòng TD | Lookup | — | peer B list | `journalLineId` if tuan-duong | peer B | n/a |
| findingKind | loại phiếu | Dropdown | LOOKUP_STATIC | — | `findingKind` | gap | n/a |
| kmFrom / kmTo | từ–đến km | Text | — | — | `kmFrom` `kmTo` | gap | n/a |
| side | vị trí | Dropdown | LOOKUP_STATIC | — | `side` | gap | n/a |
| hangMuc | hạng mục | Dropdown | LOOKUP_STATIC | — | `hangMuc` | gap | n/a |
| description | mô tả | TextArea | — | — | `description` **required** | gap | n/a |
| qtyEstimate | KL ước tính | Text | — | — | `qtyEstimate` optional | gap | n/a |
| scope | phạm vi | Radio | LOOKUP_STATIC | — | `scope` | gap | n/a |
| mediaIds | ảnh hiện trường | FileMulti | files | detail | `mediaIds[]` | peer A | n/a |
| lat/lng/accuracyM | GPS | GPS | geo | device | create TK-03 · recheck TK-05 | peer CI | n/a |
| dueAt | hạn xử lý | Date | — | — | `dueAt` if bdtx | gap | n/a |
| violationAction | việc VL | Radio | LOOKUP_STATIC | — | if hanh-lang | gap | n/a |
| thiCongFlags | biển/rào/phân luồng | Checkbox | — | — | if thi-cong ≥1 | GAP-TK-03 | n/a |
| status | trạng thái | Chip | LOOKUP_STATIC | list/detail | set `phat-hien` on create | gap | n/a |
| tdSession | ca tuần đường | Dropdown | — | `GET sessions` cùng Route | pick only | peer A | n/a |
| journal.list | dòng đối chiếu | List | — | `GET …/sessions/{id}/journal-lines` | — | peer B | n/a |
| review | khớp/lệch | Radio | LOOKUP_STATIC | — | `review` | GAP-TK-01 | n/a |
| reviewNote | câu lệch | TextArea | — | — | `reviewNote` if lech | gap | n/a |
| findingId | phiếu từ lệch | Text RO | — | after TK-03 | `findingId` on review | gap | n/a |
| recheckResult | kết luận | Radio | LOOKUP_STATIC | — | `result` recheck | gap | n/a |
| recheckNote | nhận xét | TextArea | — | — | if chua-dat | gap | n/a |
| recheckMedia | ảnh sau | FileMulti | files | — | if dat | gap | n/a |
| workOrderId | mã WO | Text RO | — | detail if có | **OUT C write** | D | — |
| feedback.* | phản hồi BDTX | — | — | — | **OUT C** | D | — |

**Create finding body (đề xuất — SA chốt DTO):** `sessionId` · `source` · `journalLineId?` · `linkSessionId?` · `findingKind` · `kmFrom` · `kmTo` · `side` · `hangMuc` · `description` · `qtyEstimate?` · `scope` · `mediaIds` · `lat` · `lng` · `accuracyM` · `dueAt?` · `violationAction?` · `thiCongFlags?` · `status=phat-hien`.

**Recheck body:** `result` · `note?` · `mediaIds?` · `lat` · `lng` · `accuracyM` · `newDueAt?`.

**Review body:** `review` · `reviewNote?` · `findingId?`.

**Cấm** ERP.* · **cấm** fake GPS · **cấm** mock findings khi schema chưa có (empty + gap) · **cấm** sửa narrative tuần đường trên TK-04.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` (status · source · findingKind · side · scope · review · recheck · hangMuc · violation) | CTX + IMPLEMENT | hardcode label VN trên form |
| files | `POST files/init` → `PUT object` → `POST commit` | FileService BFF | persist full URL |
| profile | `GET auth/profile` | Auth | invent user API trong Patrol |
| road-route | Integration search (peer A) | Integration | optional nếu đợt đã có Route |
| sessions | `GET patrol/sessions` | Patrol Live | invent session ngoài Patrol |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** trên đợt C (list/form) |
| GPS | point capture TK-03 + TK-05 recheck · prefill TK-04 từ journal |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| finding.status | `rmms_patrol_findings` (Mới) | create / recheck / (D assign+feedback) | POST findings · POST recheck | chip TK-02/05 |
| phat-hien → … → xong | entity | C: create+recheck · D: giao+feedback | | |
| journal.review | journal-line | user TK-04 | PUT review | radio + note |
| session.Status | parent Live | A/D | sessions | chỉ đọc |

`progress: finding lifecycle C` (`phat-hien` · … · `xong` via recheck). WO / feedback = đợt D.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD «list = data thật findings» · GPS deny · schema-before-form · GAP-TK-01 |
| Design | control-map khớp §B · phone 430 · zone TK-02…05 |
| SA | Schema_PatrolFinding + recheck + review · chốt code gen · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `mobile-bff` · **không** desktop Asset |
| QA | empty · GPS deny · prefill lệch · no WO/feedback in C · no fake coords |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-C-CTX-01 | CTX `web-rmms-mobile-c.md` thiếu lúc start → tạo từ IMPLEMENT + GAP-TK |
| GAP-DA-MOB-C-SCHEMA-01 | Chưa có entity/Schema_PatrolFinding Live — **HARD** pair trước form |
| GAP-DA-MOB-C-REVIEW-01 | Cột review trên journal-line — phụ thuộc Schema_B · SA chốt |
| GAP-DA-MOB-C-CODE-01 | Format mã tồn tại server-generated |
| GAP-DA-MOB-C-DOMAIN-01 | DOMAIN-MAP slug `web-rmms-mobile-c` — SA thêm row Patrol |
| GAP-DA-MOB-C-OUT-D | assign WO · feedback · TK-06/07 = đợt D/E · **cấm** stub trong C |
| GAP-TK-01 | Đối chiếu khớp/lệch · lập phiếu từ lệch |
| GAP-TK-02 | Phạm vi bdtx / vượt · hạn |
| GAP-TK-03 | Loại `thi-cong` ≥1 checkbox |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T08:45:00.000Z`
