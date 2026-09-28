# Design — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub, mở ca, check-in, lịch sử |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_2149670c`) |
| changeScope | `edit_page` · `editTask=1` · keep prior · **§ Delta only** |
| packKind | **`list`** (PO confirm · UI = **phone Field hub** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TD-00/01/02/07 · TK-00/01) · **Sheet** (TD-03) |
| DES-GRID / LinErpListFilterBar | **N/A** — phone hub · **cấm** clone · WAIVE |
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
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T14:20:00.000Z` |
| taskId | `task_2149670c` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent journal/findings A · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · **cấm** khóa Lưu TD-03 trước bấm (Pattern B).

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-a.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | screens A |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | Note-encode |
| CTX-04 | `docs/context/features/patrol.md` | peer desktop · **cấm** clone shell |
| DELTA | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · no-seed · users · mobileApiBase |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-a-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Pattern · Leave · § Delta |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 0b. § Delta Current vs New (edit_page HARD)

| Area | Current (shipped) | New (Design chốt) |
|------|-------------------|-------------------|
| CheckInSheet Lưu | `disabled={!gps.ok && !saving}` | **Pattern B:** Lưu **luôn bật** trừ `saving` · GPS deny → **banner khi bấm** · **cấm** khóa nút trước |
| Route SearchInput | `ROAD_ROUTE_SEED` / filterSeed / QL.22 | **no seed** · API rỗng/lỗi → list rỗng · mã không catalog → **`--`** |
| «Người» TD-02/TK-01 | Text RO resolve miss `--` | **SearchInput** `GET patrol/actors` · danh mục user/emp **theo quyền tuần** · default = nhân viên đang đăng nhập |
| Transport | mixed / web-bff risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| Align | — | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới |
| Grid / filter | N/A phone | **KEEP WAIVE** |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back · sync/notify) · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TD-02 · TK-01 — header rồi **Hủy / Lưu** onTop · **cấm** footer |
| Sheet | TD-03 — bottom sheet + scrim · footer sheet Hủy/Đóng + Lưu (**Pattern B**) |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TD-02/TK-01/TD-03 · **cấm** native dialog |
| Tabs | none (app tab peer — **cấm** invent segment pack) |
| Out of A | TD-04/05/06 · TK-02…07 — **hide/disable** · **cấm** stub fake list |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TD-00** | `/field` | Full | 2 doors Tuần đường / Tuần kiểm · badge ca · sync → `/field/offline` · notify → `/ops` |
| **TD-01** | `/field/tuan-duong` | Full | empty → Mở ca · active → Check-in · history · journal/book/end **disabled A** |
| **TD-02** | `/field/tuan-duong/mo-ca` | Full | SearchInput route (no seed) · Dropdown chiều · Date · SearchInput người theo quyền · POST sessions |
| **TD-03** | `/field/tuan-duong/check-in` | **Sheet** | planPoint optional · route RO (`--` miss) · GPS · content · FileMulti · POST check-ins · **Pattern B** |
| **TD-07** | `/field/tuan-duong/lich-su` | Full | optional SearchInput route · **card list** · **cấm** LinErpListFilterBar |
| **TD-01 detail** | `/tuan-duong/:id` | Full | Chi tiết ca · nav back = danh sách đã mở (Hôm nay hoặc Lịch sử) · hit **56px** · scale khi nhấn |
| **TK-00** | `/field/tuan-kiem` | Full | Mở đợt · list active inspect empty OK |
| **TK-01** | `/field/tuan-kiem/mo-dot` | Full | route · kmFrom/To · inspectMode · reason if đột xuất · SearchInput người theo quyền · POST sessions `Tuần kiểm` |
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
| route | TD-02 · TK-01 · TD-07 | **SearchInput** | * (open) | `GET integration/road-routes/search` · **no seed** · miss → **`--`** |
| direction | TD-02 | **Dropdown** | * | LOOKUP `chieu-*` · Note `chieu=` |
| userName | TD-02 · TK-01 | **SearchInput** | * | `GET patrol/actors` · scope: admin / VP / tổ trưởng / chính mình · default caller · `userName`=username · `assigneeCode`=mã emp |
| plannedDate | TD-02 · TK-01 | **Date** | * | default hôm nay |
| patrolType / status | TD-02 · TK-01 | hidden | * | khóa loại + `Đang tuần` |
| kmFrom / kmTo | TK-01 | **Number** | * | Note encode |
| inspectMode | TK-01 | **Dropdown** | * | `dinh-ky` / `dot-xuat` |
| inspectReason | TK-01 | **Text** | if đột xuất | Note · Pattern B: không khóa submit trước bấm |
| planPointLabel | TD-03 | Text | — | empty OK · **cấm** fake match |
| checkInRoute | TD-03 | Text RO | * | từ ca · miss catalog → **`--`** |
| lat / lng / accuracyM | TD-03 | **GPS** | * | «Ghim vị trí hiện tại» · deny → **banner on Lưu click** · **cấm** `disabled={!gps}` · **cấm** «Thử lại GPS» |
| submitCheckIn | TD-03 | Button | * | Pattern B · disable **chỉ** `saving` |
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
| Form | Full header actions · Sheet TD-03 Pattern B · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-a` |
| **real_view_parity** | `v1` |

### Wire

```
TD-00: [title Field] [sync] [notify] · door TD · door TK (+ badge ca)
TD-01 loading: skeleton · cấm «Mở ca» / «Chưa có ca» / «Đang tải…» trước khi list về
TD-01 empty: CTA Mở ca · Lịch sử
TD-01 active: card ca · nhân sự = `userDisplayName` trên GET sessions (không gọi danh mục theo card) · Check-in
TD-02: [Hủy|Mở ca] · SearchInput (no seed) · Dropdown chiều · Date · SearchInput người (quyền tuần · default caller)
TD-03 sheet: planPoint · route RO (miss → --) · GPS · Lưu always-on except saving · banner on deny-click · content · FileMulti
TD-07: SearchInput route optional · cards history
TK-00: Mở đợt · empty active list
TK-01: [Hủy|Mở đợt] · route · km · mode · reason? · SearchInput người (quyền tuần · default caller) · Date
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
| Route search | `GET integration/road-routes/search` via **mobileApiBase** · **no seed** |
| Users resolve | `GET integration/users?search=` via Mobile.Bff · A resolve-only |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit |

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-PLAN-POINT | empty OK · không auto MatchOk | giữ |
| UNCLEAR-NOTE-ENCODE | UI fields chiều/km/mode · encode Note | format một lần |
| UNCLEAR-USER-RESOLVE-A | resolve-only A (PO chốt) | Bff forward users |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · Pattern B · `--` miss · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-09-27T14:20:00.000Z`
