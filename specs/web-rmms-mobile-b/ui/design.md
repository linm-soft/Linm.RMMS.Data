# Design — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_839ca8ac`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TD-04 list · TD-05 create/edit) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` |
| mfeStdRoute | `/web-rmms-mobile-b` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-b-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-b-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T08:10:00.000Z` |
| taskId | `task_839ca8ac` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · check-in trong journal list · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · stub WO/scope đợt D · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-b.md` | feature wave B |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-04 · TD-05 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §2 journal ≠ check-in |
| CTX-04 | peer A hub | nav TD-01 → sổ/ghi · **cấm** clone desktop patrol shell |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-b-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Pattern · Leave · AC |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back `‹` · `+`) · glyph **36px** · flex center trong ô 44×44 · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TD-05 — header **Hủy / Lưu** trên body · **cấm** footer ERP 5-col desktop |
| List | TD-04 — card list theo ca · FAB/CTA «Ghi dòng» · EmptyState |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TD-05 · **cấm** native dialog |
| Tabs | none |
| Out of B | TD-06 · TK-02…07 · scope/WO · findings — **hide/disabled** · **cấm** stub |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TD-04** | `/field/tuan-duong/nhat-ky` | Full list | cards journal-lines · empty CTA · **không** check-in rows · Back→TD-01 |
| **TD-05** | `/field/tuan-duong/nhat-ky/moi` · `…/nhat-ky/:lineId` | Full form | create/edit · GPS HARD · Save→TD-04 |
| **DES-LEAVE** | overlay | Modal | dirty leave TD-05 |

### IA

```
(auth) → app tab Field → TD-01 (peer A)
  → TD-04 sổ nhật ký (trong ca)
    → TD-05 /moi | :lineId
    ← Back TD-01 · Save→TD-04
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| journalList | TD-04 | List cards | — | `GET …/sessions/{id}/journal-lines` · **≠** check-in |
| card.at | TD-04 | Text | — | giờ dòng |
| card.kmText | TD-04 | Text | — | lý trình |
| card.kind | TD-04 | Chip/Text | — | LOOKUP kind |
| card.status | TD-04 | Chip | — | 4 status keys |
| card.tap | TD-04 | Nav | — | → TD-05 `:lineId` |
| addLine | TD-04 | Button | — | → TD-05 `/moi` |
| emptyHint | TD-04 | EmptyState | — | copy key «Chưa ghi việc» |
| at | TD-05 | DateTime | * | default now |
| userName | TD-05 | Text RO | * | `GET auth/profile` |
| getGps | TD-05 | Button | * | «Ghim vị trí hiện tại» · `navigator.geolocation` |
| lat / lng / accuracyM | TD-05 | GPS | * | khi OK hiện `[lat, lng]` 6 chữ số · accuracy vẫn lưu · deny → **disable Lưu** · **cấm** fake |
| kmText | TD-05 | Text | — | tay · GAP-TD-LRS-01 |
| direction | TD-05 | Dropdown | * | default ca Note `chieu=` |
| weather | TD-05 | Dropdown | * | 6 keys |
| kind | TD-05 | Radio/Dropdown | * | 9 keys |
| narrative | TD-05 | TextArea | * | chặn Lưu nếu thiếu |
| mediaIds | TD-05 | FileMulti | — | `files/*` guid |
| onSiteAction | TD-05 | Toggle | — | đã xử lý tại chỗ · `toggleRow` · checkbox 20×20 · **cấm** text-field chrome |
| onSiteResult | TD-05 | Text | — | trống nếu chỉ phát hiện |
| reportedTo / reportedAt | TD-05 | Button+DateTime | — | «Báo tuần kiểm» · **không** TK-03 |
| violationFlag | TD-05 | Button/flag | if hanh-lang | đề nghị BB · **không** sổ 07 |
| status | TD-05 | Dropdown | * | 4 keys |
| scope / workOrderId | TD-05 | — | — | **OUT B** ẩn/disabled |
| save / cancel | TD-05 | Button | — | POST/PUT · cancel→TD-04 |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TD-04 empty · TD-04 data · TD-05 create · TD-05 GPS deny · DES-LEAVE |
| Form | Full header Hủy/Lưu · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-b` |
| **real_view_parity** | `v1` |

### Wire

```
TD-04 empty: EmptyState · CTA Ghi dòng → TD-05
TD-04 data: cards (at · km · kind chip · status) · tap → TD-05 · FAB Ghi dòng
TD-04 HARD: không dòng check-in · không filter bar desktop
TD-05: [Hủy|Lưu] · at · user RO · Định vị `[lat, lng]` · nút «Ghim vị trí hiện tại» · kmText · direction · weather · kind · narrative* · FileMulti · onSite toggleRow · báo TK · violation(if) · status
TD-05 onSite: hàng thẻ · nhãn đầu · checkbox 20×20 cuối · **cấm** text-field chrome trên checkbox
TD-05 GPS deny: banner đỏ · Lưu disabled
Leave: Modal Ở lại / Rời (dirty)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Parent ca | `GET …/patrol/sessions/{id}` |
| List sổ | `GET …/patrol/sessions/{id}/journal-lines` **Mới** |
| Create | `POST …/patrol/journal-lines` (SA chốt nested vs top-level) |
| Update | `PUT …/patrol/journal-lines/{id}` |
| Detail | `GET …/patrol/journal-lines/{id}` (SA confirm) |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit |
| Schema | `Schema_PatrolJournalLine` + entity **trước** wire form |

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-JL-PATH | UI gọi 1 path sau SA | chốt nested vs top-level POST |
| UNCLEAR-JL-SCHEMA | empty list + gap UI · **cấm** mock | entity+schema trước form |
| UNCLEAR-LRS | giữ Text `kmText` tay | LRS later |
| UNCLEAR-WEATHER | 6 keys IMPLEMENT | confirm enum |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T08:10:00.000Z`
