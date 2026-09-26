# Design — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — danh mục, phiếu, đối chiếu, kiểm tra lại |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_c9f5526b`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TK-02 list · TK-03 form · TK-04 review · TK-05 detail+recheck) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` |
| mfeStdRoute | `/web-rmms-mobile-c` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-c-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-c-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T08:50:00.000Z` |
| taskId | `task_c9f5526b` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · stub WO/feedback đợt D · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-c.md` | feature wave C |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-02 · TK-03 · TK-04 · TK-05 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | GAP-TK-01…03 |
| CTX-04 | peer A hub · peer B journal | nav TK-00/01 · journal-lines · **cấm** clone desktop shell |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-c-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Pattern · Leave · AC L/F/R/K |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TK-03 / TK-05 recheck — header rồi **Hủy / Lưu** trên cùng body (toolbar sticky) · **cấm** footer · **cấm** «Thử lại GPS» |
| List | TK-02 — card list · Chip/Select filter status+route · FAB «Lập phiếu» · EmptyState |
| Review | TK-04 — journal cards · Radio khớp/lệch · **không** sửa narrative TD |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TK-03 · **cấm** native dialog |
| Tabs | none |
| Out of C | TK-06 · TK-07 · WO assign · feedback · nút Giao BDTX trên TK-03 — **hide/disabled** · **cấm** stub |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TK-02** | `/field/tuan-kiem/ton-tai` | Full list | cards findings · filter chip · empty CTA · Back→hub A |
| **TK-03** | `/field/tuan-kiem/phieu/moi` | Full form | create · GPS HARD · Save→TK-05 |
| **TK-04** | `/field/tuan-kiem/doi-chieu` | Full review | journal peer B · review · createFromLech→TK-03 prefill |
| **TK-05** | `/field/tuan-kiem/phieu/:id` | Detail + recheck | GET finding · recheck GPS HARD · confirmDone if dat |
| **DES-LEAVE** | overlay | Modal | dirty leave TK-03 |

### IA

```
(auth) → app tab Field → TK hub (peer A)
  → TK-02 danh mục tồn tại
    → TK-03 /phieu/moi · Save→TK-05
    → TK-05 /phieu/:id · recheck
  → TK-04 đối chiếu
    → createFromLech → TK-03 prefill (source=tuan-duong)
  ← Back hub A
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| findingList | TK-02 | List cards | — | `GET …/findings?sessionId&status&route` **Mới** |
| filter.status | TK-02 | Chip/Select | — | `phat-hien` · `da-giao` · `cho-kiem-tra` · `xong` |
| filter.route | TK-02 | Dropdown | — | LOOKUP road-route / ca Route |
| card.code / route / km / kind / due / status | TK-02 | Text/Chip | — | |
| card.tap | TK-02 | Nav | — | → TK-05 |
| createFinding | TK-02 | Button | — | → TK-03 |
| emptyHint | TK-02 | EmptyState | — | «Chưa có tồn tại trong đợt» |
| source | TK-03 | Dropdown | * | 5 keys · `tuan-duong`→journalLineId* |
| journalLineId / linkSessionId | TK-03 | Lookup/Text | if TD | peer B |
| findingKind | TK-03 | Dropdown | * | 7 keys |
| kmFrom / kmTo | TK-03 | Text | — | tay |
| side | TK-03 | Dropdown | * | 5 keys |
| hangMuc | TK-03 | Dropdown | * | PO keys CTX §5 |
| description | TK-03 | TextArea | * | |
| qtyEstimate | TK-03 | Text | — | optional + unit |
| scope | TK-03 | Radio | * | `bdtx` \| `vuot-bdtx` · `choiceGrid` + `choiceRow` · 20×20 |
| dueAt | TK-03 | Date | if bdtx | |
| mediaIds | TK-03 | FileMulti | — | `files/*` |
| getGps · lat/lng/accuracyM | TK-03 | GPS | * | nút «Ghim vị trí hiện tại» · OK = `[lat, lng]` · deny → **disable Lưu** · **cấm** fake · **cấm** «Thử lại GPS» |
| violationAction | TK-03 | Radio | if hanh-lang | **không** sổ 07 · cùng choice chrome |
| thiCongChecks | TK-03 | Checkbox×3 | if thi-cong | ≥1 biển/rào/phân luồng · `choiceRow` 20×20 |
| saveFinding / cancel | TK-03 | Button | — | POST · cancel leave |
| assignWo | TK-03 | — | — | **OUT C** ẩn |
| tdSessionPick | TK-04 | Dropdown | — | sessions cùng tuyến |
| journalList | TK-04 | List cards | — | peer B journal-lines |
| review | TK-04 | Radio | * | `khop` \| `lech` · `choiceGrid` |
| reviewNote | TK-04 | TextArea | if lech | |
| createFromLech | TK-04 | Button | if lech | → TK-03 prefill · GPS từ journal |
| reviewSave | TK-04 | Button | — | `PUT …/journal-lines/{id}/review` |
| detailRO | TK-05 | Detail | — | GET finding |
| recheckResult | TK-05 | Radio | * | `dat` \| `chua-dat` · `choiceGrid` |
| recheckNote | TK-05 | TextArea | if chua | |
| recheckMedia | TK-05 | FileMulti | if dat | |
| recheckGps | TK-05 | GPS | * | deny → chặn xác nhận |
| newDueAt | TK-05 | Date | if chua | |
| confirmDone | TK-05 | Button | if dat | POST recheck → `xong` |
| feedbackBlock | TK-05 | — | — | **OUT C** |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

**hangMuc keys (PO):** `nen` · `mat` · `cau` · `cong` · `ham` · `thoat-nuoc` · `atgt` · `ho-lan` · `bien` · `dai-phan-cach` · `thiet-bi` · `thi-cong`

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TK-02 empty · TK-02 data · TK-03 form · TK-03 GPS deny · TK-04 review · TK-05 recheck · DES-LEAVE |
| Form | Full header Hủy/Lưu · LeaveConfirmModal |
| Grid/filter desktop | **N/A** — Chip phone only |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-c` |
| **real_view_parity** | `v1` |

### Wire

```
TK-02 empty: EmptyState · CTA Lập phiếu → TK-03
TK-02 data: chips status/route · cards (code·km·kind·due·status) · tap→TK-05 · FAB Lập phiếu
TK-03: header · [Hủy|Lưu] onTop · source · findingKind · km · side · hangMuc · description* · scope · due(if) · FileMulti · Định vị `[lat, lng]` · nút «Ghim vị trí hiện tại» · conditional thi-cong/hanh-lang
TK-03 GPS deny: banner đỏ · Lưu disabled
TK-04: pick ca TD · journal cards · review khop/lech · note if lech · createFromLech → TK-03 · no rewrite narrative
TK-05: detail RO · recheck radio · GPS · confirmDone only if dat
Leave: Modal Ở lại / Rời (dirty TK-03)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Parent đợt | `GET …/patrol/sessions` · `{id}` |
| List findings | `GET …/patrol/findings?sessionId&status&route` **Mới** |
| Create | `POST …/patrol/findings` **Mới** |
| Detail | `GET …/patrol/findings/{id}` **Mới** |
| Recheck | `POST …/patrol/findings/{id}/recheck` **Mới** |
| Journal peer | `GET …/patrol/sessions/{id}/journal-lines` |
| Review | `PUT …/patrol/journal-lines/{id}/review` **Mới** |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit |
| Schema | `Schema_PatrolFinding` + entity **trước** wire form |

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-FIND-SCHEMA | empty list + gap UI · **cấm** mock | entity+schema trước form |
| UNCLEAR-FIND-CODE | UI hiện `code` RO sau create | format mã server |
| UNCLEAR-REVIEW-COL | UI gọi PUT review 1 path | Schema_B vs migration C |
| UNCLEAR-DOMAIN-SLUG | cite Patrol prefix | thêm row DOMAIN-MAP |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T08:50:00.000Z`
