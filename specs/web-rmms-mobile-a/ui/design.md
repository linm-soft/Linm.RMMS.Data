# Design — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_e41da45e`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field hub** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TD-00/01/02/07 · TK-00/01) · **Sheet** (TD-03) |
| DES-GRID / LinErpListFilterBar | **N/A** — phone hub · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` |
| mfeStdRoute | `/web-rmms-mobile-a` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration + Auth + Files · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-a-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-a-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T07:00:00.000Z` |
| taskId | `task_e41da45e` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent journal/findings A · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-a.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | screens A |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | Note-encode |
| CTX-04 | `docs/context/features/patrol.md` | peer desktop · **cấm** clone shell |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-a-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Pattern · Leave |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back · sync/notify) · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TD-02 · TK-01 — header rồi **Hủy / Lưu** onTop · **cấm** footer |
| Sheet | TD-03 — bottom sheet + scrim · footer sheet Hủy/Đóng + Lưu |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TD-02/TK-01 · **cấm** native dialog |
| Tabs | none (app tab peer — **cấm** invent segment pack) |
| Out of A | TD-04/05/06 · TK-02…07 — **hide/disable** · **cấm** stub fake list |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TD-00** | `/field` | Full | 2 doors Tuần đường / Tuần kiểm · badge ca · sync → `/field/offline` · notify → `/ops` |
| **TD-01** | `/field/tuan-duong` | Full | empty → Mở ca · active → Check-in · history · journal/book/end **disabled A** |
| **TD-02** | `/field/tuan-duong/mo-ca` | Full | SearchInput route · Dropdown chiều · Date · User RO · POST sessions |
| **TD-03** | `/field/tuan-duong/check-in` | **Sheet** | planPoint optional · route RO · GPS HARD · content · FileMulti · POST check-ins |
| **TD-07** | `/field/tuan-duong/lich-su` | Full | optional SearchInput route · **card list** · **cấm** LinErpListFilterBar |
| **TK-00** | `/field/tuan-kiem` | Full | Mở đợt · list active inspect empty OK |
| **TK-01** | `/field/tuan-kiem/mo-dot` | Full | route · kmFrom/To · inspectMode · reason if đột xuất · POST sessions `Tuần kiểm` |
| **DES-LEAVE** | overlay | Modal | dirty leave |

### IA

```
(auth) → app tab Field
  TD-00 hub
    → TD-01 (Tuần đường) → TD-02 mở ca | TD-03 sheet CI | TD-07 lịch sử
    → TK-00 (Tuần kiểm) → TK-01 mở đợt
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| doorPatrol / doorInspect | TD-00 | Button/Nav | * | routes hub |
| syncBtn / notifyBtn | TD-00 | Button | — | peer offline / ops |
| openSession / checkInNav / historyNav | TD-01 | Button | * | journal/book/end out A |
| route | TD-02 · TK-01 · TD-07 | **SearchInput** | * (open) | `GET integration/road-routes/search` |
| direction | TD-02 | **Dropdown** | * | LOOKUP `chieu-*` · Note `chieu=` |
| userName | TD-02 · TK-01 | Text RO | * | `GET auth/profile` |
| plannedDate | TD-02 · TK-01 | **Date** | * | default hôm nay |
| patrolType / status | TD-02 · TK-01 | hidden | * | khóa loại + `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number** | * | Note encode |
| inspectMode | TK-01 | **Dropdown** | * | `dinh-ky` / `dot-xuat` |
| inspectReason | TK-01 | **Text** | if đột xuất | Note |
| planPointLabel | TD-03 | Text | — | empty OK · **cấm** fake match |
| checkInRoute | TD-03 | Text RO | * | từ ca |
| lat / lng / accuracyM | TD-03 | **GPS** | * | nút «Ghim vị trí hiện tại» · OK = `[lat, lng]` · deny → **disable Lưu** · **cấm** «Thử lại GPS» |
| content | TD-03 | Text | — | |
| photoLocalIds | TD-03 | FileMulti | — | `files/*` guid |
| historyCards | TD-07 | List cards | — | Code · Route · PlannedDate · Status · CheckInCount |
| activeInspect | TK-00 | List | — | sessions TK + Đang tuần |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TD-00 · TD-01 (empty+active) · TD-02 · TD-03 sheet · TD-07 · TK-00 · TK-01 · DES-LEAVE |
| Form | Full header actions · Sheet TD-03 · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-a` |
| **real_view_parity** | `v1` |

### Wire

```
TD-00: [title Field] [sync] [notify] · door TD · door TK (+ badge ca)
TD-01 empty: CTA Mở ca · Lịch sử
TD-01 active: card ca · Check-in · (journal/book/end disabled A)
TD-02: [Hủy|Mở ca] · SearchInput · Dropdown chiều · Date · User RO
TD-03 sheet: planPoint · route RO · GPS (deny blocks Lưu) · content · FileMulti
TD-07: SearchInput route optional · cards history
TK-00: Mở đợt · empty active list
TK-01: [Hủy|Mở đợt] · route · km · mode · reason? · User · Date
Leave: Modal Ở lại / Rời
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List / active ca | `GET …/patrol/sessions?status=Đang tuần` · filter `PatrolType` client |
| Open session | `POST …/patrol/sessions` |
| Check-in | `POST …/sessions/{id}/check-ins` |
| Plan points | `GET …/sessions/{id}/plan-points` (empty OK) |
| History | `GET …/sessions?route&page&pageSize` |
| Route search | `GET integration/road-routes/search` |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit |

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-PLAN-POINT | empty OK · không auto MatchOk | giữ |
| UNCLEAR-NOTE-ENCODE | UI fields chiều/km/mode · encode Note | format một lần |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T07:00:00.000Z`
