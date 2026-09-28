# Design — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị · **delta SUBMIT-VALIDATE** |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_bf0f4ace`) |
| changeScope | `edit_page` |
| packKind | **`list`** (phone Field · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full 430 · **N/A** ERP Modal/Slideout Kind B |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** Excel |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| mfeStdRoute | `/kien-nghi/moi` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance + Integration · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-d-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-d-real-data.md` · §A+§B PASS |
| citeDelta | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| keepBaseline | prior Design wave (TD-06/TK-03/05/06 shell) · **overlay delta only** |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T08:50:00.000Z` |
| taskId | `task_bf0f4ace` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · ERP `UserSearchInput` nguyên bản · free-text receiver/route · `ROAD_ROUTE_SEED` · `disabled={!canSave}` · fake GPS · web-bff · Kind B DES-GRID · Excel · `new_page` · iOS/Android dual · re-scan demo · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-d.md` | feature wave D |
| DELTA | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · SearchInput users/routes · BFF |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-d-{control-hint,real-data}.md` | inventory + §B delta |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Decisions delta |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · 430 |

## 1. Pattern & shell (keep)

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens · `/align-mobile-to-mfe` · **cấm** tab/route/icon mới |
| Shell | App topbar · **không** ERP `LinPageLayout` chrome |
| Full forms | TD-06 · TK-06 create — Hủy / Lưu onTop sticky · **cấm** footer |
| Pattern B | Lưu **always-on** (chỉ `disabled` khi `saving`) · bấm → `validationAttempted` · banner `string[]` + inline · API 4xx = toast only |
| Leave | **LeaveConfirmModal** · dirty TD-06 / TK-06 · **cấm** native dialog |
| Out of D | TK-07 · Excel · native · desktop Asset — **hide** |

## 2. Screens / zones

| Zone | Route | Surface | Wire **delta** |
|------|-------|---------|----------------|
| **TD-06** | `/field/tuan-duong/ket-ca` | Full form | `receiverName` → **SearchInput users** · Pattern B Lưu |
| **TK-06** create | `/kien-nghi/moi` | Full form | `route` → **SearchInput road-routes** · no seed · Pattern B Lưu |
| **TK-06** Pattern B | `/kien-nghi/moi` | validate state | banner + inline · miss route `--` |
| **TK-03 / TK-05** | baseline | — | **không** delta submit-validate |
| **DES-LEAVE** | overlay | Modal | keep |

### IA (delta focus)

```
TD-06 ban-giao → SearchInput users (BFF) → Pattern B Lưu → PUT sessions
TK-06 /moi → SearchInput road-routes (no seed) → Pattern B Lưu → POST petitions
GPS deny / missing fields → báo sau bấm Lưu · cấm khóa nút trước
```

## 3. Field inventory (Control = controlHint) — **delta overlays**

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| receiverName | TD-06 | **SearchInput** (users) | — | `GET mobile-bff/…/integration/users?search=` · mã=`username`\|`code` · tên=`fullName` · miss=`--` · **cấm** free-text · **cấm** ERP UserSearchInput |
| handoverNote | TD-06 | TextArea | if ban-giao · on-submit | Pattern B |
| pauseReason | TD-06 | Dropdown | if tam-dung · on-submit | LOOKUP_STATIC |
| saveSession | TD-06 | Button | — | **always-on** trừ saving · PUT sessions |
| route | TK-06 | **SearchInput** (road-routes) | * on-submit | `ROAD_ROUTE_LOOKUP_CONFIG` · **no** seed · miss=`--` |
| senderUnit / km / content / kind | TK-06 | Text/TextArea/Dropdown | * on-submit | Pattern B |
| getGps · lat/lng · noFace | TK-06 | GPS + Flag | optional | deny báo **sau** submit · **cấm** fake |
| savePetition | TK-06 | Button | — | **always-on** trừ saving · POST petitions |
| actionKind / assignWo / feedback.* / petitionList | baseline | keep | — | no delta shape |

**Labels:** `useFormOptions()` / copy keys — **cấm** hardcode VN trên form production.

**UNCLEAR-USER-SEARCH-CTRL (Design chốt):** Mobile SearchInput reuse pattern road-routes (`SearchInput` + lookup config) · **không** gắn ERP `UserSearchInput`.

**UNCLEAR-RECEIVER-MISS (PO chốt):** miss → `--` · không free-text fallback.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones patched | TD-06b `receiverName` SearchInput · TK-06c/g `route` SearchInput · **TK-06v** Pattern B banner+inline · save `data-pattern="B"` |
| Keep | TD-06k/p · TK-03a · TK-05f · TK-06e/list · DES-LEAVE |
| Grid/filter desktop | **N/A** |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/kien-nghi/moi` |
| **real_view_parity** | `v1` |

### Wire (delta)

```
TD-06 ban-giao: SearchInput users (code+name) · Lưu Pattern B always-on
TK-06 create: SearchInput road-routes · no seed hint · Lưu Pattern B
TK-06 Pattern B: banner string[] · route miss -- · inline errors · Lưu enabled
TK-06 no-face: route SearchInput · GPS deny after · Lưu w/o coords
```

## 5. API map (cite real-data §B — delta)

| Action | API |
|--------|-----|
| Users search | `GET …/integration/users?search=` Live WS · **Mobile.Bff forward** |
| Road routes | `GET …/integration/road-routes/search` Live BFF · **cấm** seed FE |
| Session close/handover/pause | `PUT …/patrol/sessions/{id}` Live |
| Petition create | `POST …/patrol/petitions` Live |
| Transport | **chỉ** `mobileApiBase()` · **cấm** web-bff |
| New WS endpoint | **cấm** |

## 6. UNCLEAR → SA

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-USER-SEARCH-CTRL | Mobile SearchInput = road-routes pattern | Confirm BFF DTO map username/code/fullName |
| UNCLEAR-RECEIVER-MISS | `--` · no free-text | CLOSED (PO) |
| GAP-DA-MOB-D-USERS-01 | — | Forward-only BFF users |
| GAP-DA-MOB-D-SEED-01 | Prototype không seed | Remove FE ROAD_ROUTE_SEED |
| (baseline CLOSED) | Handover/pause/petition Schema | **không** mở lại trừ GAP mới |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above · zones SearchInput + Pattern B |
| handoff | SA · zone ids · control-map · real_view_parity v1 · **cấm** paste HTML |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T08:50:00.000Z`
