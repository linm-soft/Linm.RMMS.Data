# SA — Solution — web-rmms-giao-viec-ql-hat

| Field | Value |
|-------|-------|
| feature | `web-rmms-giao-viec-ql-hat` |
| title | Giao việc chỉ QL_HAT |
| packKind | `list` |
| changeScope | `edit_page` |
| status | **confirmed** |
| taskId | `task_aac1513f` |
| solution_confirm | **approve** · autoApprove=ON |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHash | `sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7` |
| writtenAt | `2026-10-01T03:35:00.000Z` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-giao-viec-ql-hat` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm web-bff** |
| demo | **N/A** · **cấm** demo-json / fake WO |
| next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## 1. Scope / OUT

| In | Out |
|----|-----|
| edit CTA gate `roleCaps.qlHat` + GV-F bind Live WO | `new_page` · invent product route · invent `giao-viec/*` |
| DueAt absolute TT41 hint · editable · **cấm** SlaHours=24 default | Excel · tiền Mục IV · Hoàn thành hộ từ GV-F |
| list INC+RPT unscoped QL_HAT · **cấm** creator filter | MANAGER-RMMS suy giao · web-bff · ERP.* · iOS/Android |
| DOMAIN-MAP row slug (GAP-GV-DM-01) | migration / entity mới |

## 2. Domain ownership (GAP-GV-DM-01 → resolved)

| Item | Decision |
|------|----------|
| Primary domain | **Maintenance** · kebab `maintenance` · API `api/v1/maintenance` |
| Write resource | Live `POST …/maintenance/work-orders` · **cấm** invent controller/path |
| Cite Incident | `GET …/incident/incidents` · `GET …/incidents/{id}` · optional `POST …/incidents/{id}/assign` (peer cite only) |
| Cite Patrol | history list + detail `/tuan-duong/lich-su` · `/tuan-duong/:sessionId` (Design PO-DEC-03) |
| Cite Integration | users (assignee SearchInput) · partner/org team |
| Cite Auth / role-gate | `GET auth/profile` · `roleCaps.qlHat` · dep `web-rmms-role-gate` (PO-DEC-05) |
| BFF | Mobile.Bff forward same `{resource}` · **cấm** web-bff base trên Mobile |
| MFE | edit existing product paths · alias queue `/web-rmms-giao-viec-ql-hat` · **cấm** new public route |
| DOMAIN-MAP row | added · see §8 |

## 3. Entity / migration

| Item | Decision |
|------|----------|
| Entity | Reuse Live **WorkOrder** · `CreateWorkOrderRequest` (peer estimate / work) |
| Migration | **skip** · không cột mới bắt buộc đợt này |
| hangMuc | **client static** TT41 PLAN (PO-DEC-01) · cite vào Description/Note hoặc field Live nếu đã có · **cấm** invent hang-muc API |
| DueAt / SlaHours | **SA-DEC-01** (PO-DEC-02): body gửi **`DueAt` absolute** (ISO) required khi submit · **`SlaHours` = omit/null** · **cấm** default `24` · nếu Live DTO bắt buộc non-null → **derive** `ceil((DueAt−Now).TotalHours)` từ DueAt đã chọn · **không** hardcode 24 |
| Status WO | `Status=new` lúc tạo · progress/complete = peer `web-rmms-mnt-progress` · **cấm** complete từ GV-F |

## 4. FormMode ↔ API (HARD · từ real-data §B)

Prefix client: `mobile-bff/api/v1` · downstream ServiceApi `api/v1/{domain}`.

| Mode / zone | uiField | Verb · path (resource) | Body / query | Notes |
|-------------|---------|------------------------|--------------|-------|
| GV-L-INC | list.incidents | `GET incident/incidents` | peer filter · **cấm** creator | unscoped QL_HAT |
| GV-L-RPT | list.reports | `GET patrol/…` history cite | peer | Design path `/tuan-duong/lich-su` |
| GV-D-INC | detail.* | `GET incident/incidents/{id}` | — | RO GPS |
| GV-D-RPT | detail.* | patrol session/report cite | — | `/tuan-duong/:sessionId` |
| gate | assignCta / roleCaps.qlHat | `GET auth/profile` (+ role-gate caps) | — | visible iff qlHat · deny toast |
| GV-F open INC | sourceStamp | query `?incidentId=&mode=assign` | stamp IncidentId | edit `paths.workFor` |
| GV-F open RPT | sourceStamp | query `?reportId=&mode=assign` | stamp report/session cite | `/cong-viec?reportId=&mode=assign` |
| GV-F | assignee | `GET integration/…` users (Mobile.Bff) | search | required · **cấm** fake |
| GV-F | team | partner/org Live peer | search | |
| GV-F | hangMuc | **client** TT41 static | — | trigger due hint · no BE lookup MVP |
| GV-F | dueAt | client hint → bind | write `DueAt` | editable |
| GV-F | note | — | `Description` / Note | optional |
| GV-F stamp | routeName/title/workType | từ nguồn RO | `RouteName` · `Title` · `WorkType` · `Status=new` | |
| GV-F submit | submitAssign | `POST maintenance/work-orders` | CreateWorkOrderRequest Live | busy lock · toast 4xx · **cấm** fake success |
| optional | incident assign | `POST incident/incidents/{id}/assign` | peer cite | chỉ khi Live peer đã ship · không invent |
| after | Leave success | nav | — | `/cong-viec` track (GV-W peer work) |
| deny / leave | DES-LEAVE · TOAST | — | — | cancel discard · non-qlHat deny |

**Cấm:** invent `giao-viec/*` · ERP.* · demo-json assignee · web-bff · SlaHours=24 default · tiền Mục IV.

## 5. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | Auth + forward Incident / Maintenance / Patrol / Integration · **only** base MFE |
| ServiceApi | Domain owners · WO create · incidents · patrol history · users |
| web-bff | **cấm** mount / base trên Mobile MFE |

## 6. Decisions (SA-DEC)

| Id | Decision |
|----|----------|
| SA-DEC-01 | DueAt absolute required · SlaHours omit/null · else derive from DueAt · **never** 24 default (closes UNCLEAR-GV-SLA-MAP) |
| SA-DEC-02 | Primary DOMAIN-MAP = Maintenance · cite Incident+Patrol+Integration+Auth (closes GAP-GV-DM-01) |
| SA-DEC-03 | RPT routes = Design PO-DEC-03 · **cấm** invent (closes UNCLEAR-GV-RPT-ROUTE for SA) |
| SA-DEC-04 | hangMuc = client static TT41 · no BE catalog MVP (closes UNCLEAR-GV-HANGMUC-CAT for SA) |
| SA-DEC-05 | Gate = `roleCaps.qlHat` from `web-rmms-role-gate` · **cấm** MANAGER-RMMS (DEP-GV-ROLE) |
| SA-DEC-06 | Migration skip · reuse CreateWorkOrderRequest |

## 7. Tasks handoff (TL)

| Id | Page / zone | Work | Deps |
|----|-------------|------|------|
| T-GV-01 | GV-D/L CTA | Gate assignCta bằng `roleCaps.qlHat` · deny non-qlHat | DEP-GV-ROLE |
| T-GV-02 | GV-F | Bind assignee/team/hangMuc/dueAt/note · DueAt+SA-DEC-01 · submit POST WO | T-GV-01 |
| T-GV-03 | GV-L-INC/RPT | List unscoped · **cấm** creator filter · RPT Design paths | — |
| T-GV-04 | Leave / nav | submit→`/cong-viec` · LeaveConfirm · busy/toast | T-GV-02 |
| T-GV-05 | DOMAIN-MAP | Verify row slug Maintenance (SA patched) | SA-DEC-02 |

## 8. DOMAIN-MAP patch (PO-DEC-04)

```
| `web-rmms-giao-viec-ql-hat` | Maintenance | `maintenance` · Live POST `work-orders` (+ optional incident assign cite) · cite Incident list/detail · Patrol history/detail · Integration users · Auth profile `roleCaps.qlHat` · MFE `Linm.Web.RMMS.Mobile` product `/cong-viec?…mode=assign` · alias `/web-rmms-giao-viec-ql-hat` · **cấm** invent `giao-viec/*` · **cấm** SlaHours=24 default · **cấm** web-bff |
```

File: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` (applied this role).

## 9. Verify / DoR

| Check | Result |
|-------|--------|
| Design confirmed + compact | PASS |
| real-data §B FormMode↔API · no invent API | PASS |
| GAP-GV-DM-01 DOMAIN-MAP row | PASS |
| UNCLEAR-GV-SLA-MAP SA-DEC-01 | PASS |
| RPT + hangMuc Design resolved · SA cite | PASS |
| DEP-GV-ROLE → role-gate | PASS |
| migration skip · Mobile.Bff only · cấm ERP | PASS |
| solution_confirm approve (autoApprove) | PASS |
| compact handoff ≤5KB | PASS → `handoff/sa-compact.md` |

## Full paths

- design: `…/ui/design.md` · prototype reviewUrl
- po: `…/po/requirement.md`
- control-hint / real-data: `specs/_data-analy/features/web-rmms-giao-viec-ql-hat-*.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- STATUS: `…/STATUS.md`
- next compact: `…/handoff/sa-compact.md`
