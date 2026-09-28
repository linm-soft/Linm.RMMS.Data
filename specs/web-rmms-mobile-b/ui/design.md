# Design — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_3d7eae05`) |
| changeScope | `edit_page` · editTask=`1` |
| packKind | **`list`** (phone Field · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TD-04 list · TD-05 create/edit) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone · `{feature}-filter-bar.md` **skip** |
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
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug B |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T07:08:00.000Z` |
| taskId | `task_3d7eae05` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · check-in trong journal list · fake GPS · `disabled={!canSave}` · `alert.warning` thay banner · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · stub WO/scope đợt D · web-bff FE · `yarn build` / e2e / start:std ở role này · tab/route/icon mới · prototype android/ios.

## § Delta Current vs New (edit_page HARD)

Cite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · control-hint § Delta · PO § Delta.

| Area | Current (prior design / shipped) | New (task_3d7eae05) |
|------|----------------------------------|---------------------|
| changeScope | wave B Live journal list/form | `edit_page` · keep prototype · **§ Delta only** |
| JournalFormPage Lưu | `disabled={!canSave}` · GPS+narrative pre-gate | **Pattern B:** luôn bật trừ `saving`/`hydrating` · GPS/narrative thiếu → **khi bấm** banner `string[]` + inline + scroll first error · **cấm** khóa nút trước · **cấm** `alert.warning` |
| GPS deny zone | banner + Lưu disabled | zone `TD-05g` = `validationAttempted` · Lưu **enabled** · banner + inline |
| mediaIds | FileMulti · no capture | `capture="environment"` (LinImageUpload prop hoặc input local) · **cấm** fork package |
| Transport | mixed / web-bff risk | **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` |
| Align | — | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới |
| TD-04 / schema / routes | Live KEEP | **KEEP** · **cấm** invent API · **cấm** new_page |
| Grid / Excel | N/A phone | **KEEP N/A** · no Excel toolbar |

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-b.md` | feature wave B |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-04 · TD-05 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §2 journal ≠ check-in |
| CTX-04 | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B · capture · Mobile.Bff |
| CTX-05 | peer A hub | nav TD-01 → sổ/ghi · **cấm** clone desktop patrol shell |
| DEM | — | **N/A** · hash skip · **cấm** rescan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-b-{control-hint,real-data}.md` | inventory + §B · contentHash khớp |
| PO | `po/requirement.md` · `handoff/po-compact.md` | Screens · Pattern B · Leave · AC |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back `‹` · `+`) · glyph **36px** · flex center trong ô 44×44 · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TD-05 — header **Hủy / Lưu** trên body · **cấm** footer ERP 5-col desktop |
| List | TD-04 — card list theo ca · FAB/CTA «Ghi dòng» · EmptyState |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TD-05 · **cấm** native dialog |
| Submit UX | **Pattern B** · `validationAttempted` · banner zone + inline · API 4xx/5xx = toast only |
| Tabs | none |
| Out of B | TD-06 · TK-02…07 · scope/WO · findings — **hide/disabled** · **cấm** stub |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TD-04** | `/field/tuan-duong/nhat-ky` | Full list | cards journal-lines · empty CTA · **không** check-in rows · Back→TD-01 |
| **TD-05** | `/field/tuan-duong/nhat-ky/moi` · `…/nhat-ky/:lineId` | Full form | create/edit · Pattern B save · capture · Save OK→TD-04 |
| **TD-05g** | same TD-05 · state `validationAttempted` | Full form | GPS deny + empty narrative **sau** bấm Lưu · Lưu vẫn enabled |
| **DES-LEAVE** | overlay | Modal | dirty leave TD-05 |
| **banner** | trong TD-05 | Alert strip | `string[]` messages · zone id `banner` |

### IA

```
(auth) → app tab Field → TD-01 (peer A)
  → TD-04 sổ nhật ký (trong ca)
    → TD-05 /moi | :lineId
    ← Back TD-01 · Save OK→TD-04 · Save fail→banner+inline (stay)
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
| userName | TD-05 | Text RO | * | `GET auth/profile` · users miss → `--` |
| getGps | TD-05 | Button | * | «Ghim vị trí hiện tại» · `navigator.geolocation` |
| lat / lng / accuracyM | TD-05 | GPS | * | OK → `[lat, lng]` 6 chữ số · deny → **banner/inline on submit** · **cấm** fake · **cấm** pre-disable Lưu |
| kmText | TD-05 | Text | — | tay · GAP-TD-LRS-01 |
| direction | TD-05 | Dropdown | * | default ca Note `chieu=` |
| weather | TD-05 | Dropdown | * | 6 keys Live |
| kind | TD-05 | Radio/Dropdown | * | 9 keys |
| narrative | TD-05 | TextArea | * | required · fail → banner/inline **on submit** |
| mediaIds | TD-05 | FileMulti | — | `files/*` guid · **`capture=environment`** |
| onSiteAction | TD-05 | Toggle | — | `toggleRow` · checkbox 20×20 · **cấm** text-field chrome |
| onSiteResult | TD-05 | Text | — | trống nếu chỉ phát hiện |
| reportedTo / reportedAt | TD-05 | Button+DateTime | — | «Báo tuần kiểm» · **không** TK-03 |
| violationFlag | TD-05 | Button/flag | if hanh-lang | đề nghị BB · **không** sổ 07 |
| status | TD-05 | Dropdown | * | 4 keys |
| scope / workOrderId | TD-05 | — | — | **OUT B** ẩn/disabled |
| save | TD-05 | Button | — | Pattern B · disable **chỉ** `saving`/`hydrating` · POST/PUT |
| cancel | TD-05 | Button | — | →TD-04 · LeaveConfirmModal nếu dirty |
| validationBanner | TD-05 | Banner `string[]` | — | zone `banner` · GPS/narrative keys · prefer `useFormOptions` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TD-04 empty · TD-04 data · TD-05 create · TD-05g validationAttempted · DES-LEAVE · banner |
| Form | Full header Hủy/Lưu · LeaveConfirmModal · Pattern B |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-b` |
| **real_view_parity** | `v1` |

### Wire

```
TD-04 empty: EmptyState · CTA Ghi dòng → TD-05
TD-04 data: cards (at · km · kind chip · status) · tap → TD-05 · FAB Ghi dòng
TD-04 HARD: không dòng check-in · không filter bar desktop
TD-05: [Hủy|Lưu] · at · user RO · Định vị `[lat, lng]` · «Ghim vị trí hiện tại» · kmText · direction · weather · kind · narrative* · FileMulti capture=environment · onSite toggleRow · báo TK · violation(if) · status
TD-05 onSite: hàng thẻ · nhãn đầu · checkbox 20×20 cuối
TD-05g Pattern B: after Lưu click · banner string[] (GPS + narrative) · inline · Lưu vẫn enabled · cấm alert.warning
Leave: Modal Ở lại / Rời (dirty)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Parent ca | `GET …/patrol/sessions/{id}` via **mobileApiBase** |
| List sổ | `GET …/patrol/sessions/{id}/journal-lines` |
| Create | `POST …/patrol/journal-lines` |
| Update | `PUT …/patrol/journal-lines/{id}` |
| Detail | `GET …/patrol/journal-lines/{id}` |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit · capture env |
| Users (peer) | Mobile.Bff forward `GET integration/users` nếu thiếu · **không** picker trên TD-04/05 |
| Transport | **chỉ** `mobileApiBase()` · **cấm** web-bff FE |
| Schema | Live `Schema_PatrolJournalLine` · **KEEP** · **cấm** invent |

## 6. List / Form AC (ids — cite PO)

| id | Note |
|----|------|
| L-01…L-06 | KEEP TD-04 |
| F-01/02 | Pattern B validate on click |
| F-03 | save gate · disable only saving/hydrating |
| F-04 | API journal-lines Live |
| F-05 | labels useFormOptions |
| F-06 | TK mark only · no TK-03 |
| F-07 | violation if hanh-lang |
| F-08 | out đợt D |
| F-09 | capture=environment |
| F-10 | mobileApiBase only |
| F-11 | LeaveConfirmModal |
| Grid AC | **N/A/WAIVE** |
| Report AC | **N/A** |

## 7. UNCLEAR (handoff)

| id | Design chốt | Owner |
|----|-------------|-------|
| UNCLEAR-CAPTURE-PROP | UI: capture env bắt buộc · prop forward hoặc input local | Dev |
| UNCLEAR-BANNER-KEYS | prefer existing `useFormOptions`/copy keys · **cấm** invent VN nếu key có | Dev |
| UNCLEAR-LRS | giữ Text `kmText` tay | **KEEP** |

**Closed:** UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-WEATHER (Live).

## 8. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above · zones TD-04 / TD-05 / TD-05g / DES-LEAVE / banner |
| handoff | SA · zone ids · Pattern B · capture · mobileApiBase · real_view_parity v1 |
| next | `/agent-sa` · **roleOnly stop** (**GAP-PKT-ROLE-01**) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-09-27T07:08:00.000Z` · `taskId=task_3d7eae05` · `changeScope=edit_page` · `design_confirm=approve`
