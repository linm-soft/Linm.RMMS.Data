# Data-analy — real-data bind — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị · **delta SUBMIT-VALIDATE** |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_b83eb3a7` |
| priorTask | `task_0ba23800` |
| prefix API | `api/v1/patrol` · `api/v1/maintenance` · `api/v1/integration` |
| prefix BFF mobile | `mobile-bff/api/v1` · cùng `{resource}` · **cấm** web-bff |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdRoute | `/kien-nghi/moi` |
| domain | **Patrol** (+ **Maintenance** WO · Auth · Files · Integration users/routes · peer A–C) |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-27T08:35:00.000Z` |
| demo | **N/A** · **cấm** demo-json / mock SSOT / fake GPS |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

## § Delta Current vs New (HARD)

| Area | Current | New |
|------|---------|-----|
| `receiverName` bind | free text / profile string | SearchInput → `GET mobile-bff/api/v1/integration/users?search=&page=&pageSize=` · display `--` if miss |
| `route` bind (petition) | free text | SearchInput → `GET …/integration/road-routes/search` · **no** `ROAD_ROUTE_SEED` |
| Submit UX | `canSave` gates `disabled` | Pattern B: always-on submit · validate-on-first-click · banner+inline · API errors = toast only |
| BFF users | missing forward | Add Mobile.Bff forward to Live WebService `integration/users` · **no** new WS endpoint |
| Export / new page | — | **cấm** Excel · **cấm** `new_page` |
| Align | — | MFE-only 430 · no new tab/route/icon · no native prototype |

## § Scope đợt D (baseline + delta)

| In | Out |
|----|-----|
| TD-06 CloseSession Pattern B + users SearchInput | TK-07 (E) |
| TK-06 PetitionForm Pattern B + road-routes SearchInput | free-text receiver/route |
| Mobile.Bff users forward · lookups no-seed | invent WO in Patrol · web-bff · ERP.* |
| PUT sessions · POST petitions (baseline) | stub fake petition · seed routes |
| GPS HARD TK-06 (validate-on-submit) | fake lat/lng · desktop Asset · iOS/Android |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mobile-d.md` | — | — |
| `delta-plan` | `SUBMIT-VALIDATE.md` · slug D | — | Pattern B · Search |
| `plan` | `IMPLEMENT-SCREENS.md` TD-06 · TK-06 | — | baseline screens |
| `code` | `CloseSessionPage.tsx` · `PetitionFormPage.tsx` | — | Current canSave/input |
| `api-live` | `PUT …/patrol/sessions/{id}` · `GET\|POST …/patrol/petitions` · `POST …/maintenance/work-orders` | — | 4xx toast |
| `api-integration` | `GET …/integration/users` · `…/road-routes/search` | empty list OK | 404 BFF until forward · **cấm** mock |
| `lookups` | `services/patrol/lookups.ts` | no seed | remove ROAD_ROUTE_SEED |
| `auth` | `auth/profile` | — | login |
| `geo` | `navigator.geolocation` | deny → banner **after** submit | **cấm** fake |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD) — **delta overlays**

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | note |
|---------|-------------|-------------|-------------|-----|-------------|---------|------|
| receiverName | người nhận | **SearchInput** | users | `integration/users?search=` | selected user display/code · miss=`--` | Mobile | **replace** free input |
| handoverNote | nội dung bàn giao | TextArea | — | — | req if ban-giao · **on-submit** | Schema D | Pattern B |
| pauseReason | lý do tạm dừng | Dropdown | LOOKUP_STATIC | — | req if tam-dung · **on-submit** | Schema D | Pattern B |
| saveSession | Lưu | Button | — | — | PUT session | Live | **never** disable for required |
| route | tuyến | **SearchInput** | road-routes | `integration/road-routes/search` | route code · miss=`--` | lookups | **no** seed |
| senderUnit | đơn vị | Text | — | profile | required on-submit | auth | giữ |
| kmText / content / kind | km · nội dung · loại | Text/TextArea/Dropdown | LOOKUP_STATIC | — | required on-submit | gap | Pattern B |
| lat/lng/accuracyM | GPS | GPS | geo | device | optional if noFace | geo | deny after click |
| savePetition | Lưu | Button | — | — | POST petition | Live | **never** disable for required |
| session.id / Status / actionKind | (baseline) | — | — | peer A | giữ | — | no delta shape |
| assignWo / feedback* / petition.list | (baseline peer) | — | — | — | giữ | — | ngoài delta D submit |

**Users SearchInput response map:** `username`|`code` → mã · `fullName` → tên · no match → `--`.

**Road-routes:** dùng `ROAD_ROUTE_LOOKUP_CONFIG` sau khi xóa seed; `getDetail` miss → `--`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| users | `GET mobile-bff/…/integration/users` | WebService AppUsers · BFF forward | ERP `UserSearchInput` nguyên bản · free-text fallback |
| road-routes | `GET …/integration/road-routes/search` | lookups · **no seed** | ROAD_ROUTE_SEED · invent mã |
| LOOKUP_STATIC | `useFormOptions` | CTX | hardcode VN label |
| sessions / petitions | patrol Live | baseline | web-bff |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **none** |
| GPS | TK-06 optional · Pattern B (không khóa nút) |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI delta |
|------------|-------|--------|-----|----------|
| session.Status / handover / pause | baseline D | user TD-06 | PUT | Pattern B validate |
| petition create | baseline | user TK-06 | POST | route SearchInput + Pattern B |
| (không đổi) finding WO/feedback | peer | — | — | ngoài delta |

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD delta: Pattern B · users/routes SearchInput · no seed · BFF users · mfe `/kien-nghi/moi` |
| Design | Zone receiver + route control · phone 430 · giữ reviewUrl nếu layout OK |
| SA | Forward-only users · **cấm** ERP.* / new WS API |
| Dev | CloseSession + PetitionForm + lookups + Mobile.Bff · `mobileApiBase()` |
| QA | Submit enabled · banner · users 200 · route `--` · GPS deny after click |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-MOB-D-DELTA-01 | SUBMIT-VALIDATE delta · edit_page · **cấm** new_page CRUD |
| GAP-DA-MOB-D-USERS-01 | Mobile.Bff thiếu `integration/users` → forward |
| GAP-DA-MOB-D-SEED-01 | Xóa `ROAD_ROUTE_SEED` / filter QL.22 trên lookups shared |
| GAP-DA-MOB-D-PATTERN-B | `disabled={!canSave}` trên CloseSession + PetitionForm → bỏ |
| GAP-DA-MOB-D-MFEURL | Real std = `/kien-nghi/moi` · không `/web-rmms-mobile-d` |
| GAP-TK-04 | Sổ KN ≠ inbox (baseline keep) |

## Version meta

| skillVersion | schemaVersion | workflowVersion | rulesVersion |
|--------------|---------------|-----------------|--------------|
| 2026.09.05.03 | 2 | 2026.09.19.02 | 2026.09.25.2 |
