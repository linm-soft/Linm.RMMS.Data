# Design — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — Pattern B submit/validate + capture (edit_page) |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_957b179c`) |
| changeScope | `edit_page` |
| packKind | **`list`** (phone Field · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TK-02 list · TK-03 form · TK-04 review · TK-05 detail+recheck) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/phat-hien` |
| mfeStdUrl | `http://localhost:9301/phat-hien` |
| mfeStdRoute | `/phat-hien` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-c-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-c-real-data.md` · §A+§B+§Delta PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |
| delta SSOT | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-27T08:20:00.000Z` |
| taskId | `task_957b179c` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label mới · native `alert`/`confirm` · re-scan demo · invent endpoint · `yarn build` / e2e / start:std · fork `LinImageUpload`.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-c.md` | wave C screens |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-02…05 layout **giữ** |
| DELTA | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` | Pattern B SSOT |
| DEM | — | **N/A** · hash skip · **cấm** crawl |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-c-{control-hint,real-data}.md` | inventory + §Delta |
| PO | `po/requirement.md` · `handoff/po-compact.md` | AC L/F/R/K + PB-01..10 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` |

## 1. Pattern & shell (giữ) + § Delta Pattern B

| | |
|--|--|
| Frame | Phone **430px** · content-only · `/align-mobile-to-mfe` · **không** tab/route/icon mới |
| Shell | App topbar · **không** ERP `LinPageLayout` |
| Full forms | TK-03 / TK-05 — header rồi **Hủy / Lưu** onTop · **cấm** footer · **cấm** «Thử lại GPS» |
| List | TK-02 — cards · Chip/Select · FAB · EmptyState · **không** export |
| Review | TK-04 — journal cards · Radio khớp/lệch · **không** sửa narrative TD |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TK-03 |
| Out of C write-new | TK-06/07 · invent WO/feedback API · **không** xóa feedback Live — chỉ Pattern B nút |

### § Delta CTA / banner (HARD — chốt Design)

| Rule | Design |
|------|--------|
| Submit always-on | `saveFinding` · `reviewSave` · `submitFeedback` · `confirmDone` / `markNotOk` — **chỉ** `disabled={saving\|\|hydrating\|loading}` |
| **Cấm** gate-disable | `!canSave` · `!canConfirm` · `!feedbackQty` · GPS deny trước bấm |
| validationAttempted | Lần bấm đầu mới hiện inline + banner `string[]` |
| Banner | Client errors only · thu gọn/đóng · scroll lỗi đầu · **cấm** `alert.warning` thay banner |
| API errors | toast · **cấm** banner API |
| GPS deny | Báo khi bấm Lưu/confirm · nút vẫn bật · **cấm** fake coords |
| capture | TK-03/05 FileMulti · `capture="environment"` · prop forward hoặc input local · **cấm** fork package |
| Labels | `useFormOptions()` / copy keys |

## 2. Screens / zones (ids — giữ)

| Zone | Route (field) · MFE | Surface | Wire |
|------|---------------------|---------|------|
| **TK-02** | `/field/tuan-kiem/ton-tai` · `/phat-hien/:sessionId` | Full list | giữ layout · no export |
| **TK-03** | `/field/tuan-kiem/phieu/moi` · `/phat-hien/:sessionId/moi` | Full form | Pattern B Lưu · capture · GPS on-submit |
| **TK-04** | `/field/tuan-kiem/doi-chieu` · `/phat-hien/:sessionId/review/:lineId` | Full review | Pattern B Lưu · lech note on click |
| **TK-05** | `/field/tuan-kiem/phieu/:id` · `/phat-hien/:sessionId/:id` | Detail + recheck (+ feedback Live) | Pattern B confirm/feedback · capture |
| **DES-LEAVE** | overlay | Modal | dirty leave TK-03 |

### IA (giữ)

```
(auth) → Field → TK hub (peer A)
  → TK-02 danh mục
    → TK-03 /moi · Save→TK-05
    → TK-05 /:id · recheck (+ feedback Live Pattern B)
  → TK-04 đối chiếu · createFromLech → TK-03 prefill
  ← Back hub A
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Delta / notes |
|---------|--------|-------------|----------|---------------|
| findingList | TK-02 | List cards | — | giữ · GET findings |
| filter.status / route | TK-02 | Chip/Select | — | phone · no ERP filter bar |
| createFinding | TK-02 | Button | — | → TK-03 |
| source…dueAt / fields | TK-03 | form | * per PO | giữ catalog · validate on submit |
| getGps · lat/lng/accuracyM | TK-03 | GPS | * | deny → banner on Lưu · **không** disable Lưu |
| mediaIds | TK-03 | FileMulti | — | + `capture="environment"` |
| saveFinding / cancel | TK-03 | Button | — | Pattern B · cancel leave |
| review / reviewNote | TK-04 | Radio+TextArea | note if lech | validate on click |
| reviewSave | TK-04 | Button | — | Pattern B |
| createFromLech | TK-04 | Button | if lech | → TK-03 prefill GPS journal |
| feedbackQty | TK-05 | Text | if send | **không** gate nút |
| submitFeedback | TK-05 | Button | — | Pattern B · Live only · no CRUD D expand |
| recheckResult / note / media / gps | TK-05 | form | * | GPS/media/note on submit |
| confirmDone / markNotOk | TK-05 | Button | — | chỉ `disabled={saving}` |

**hangMuc keys (PO):** `nen` · `mat` · `cau` · `cong` · `ham` · `thoat-nuoc` · `atgt` · `ho-lan` · `bien` · `dai-phan-cach` · `thiet-bi` · `thi-cong`

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TK-02 empty · TK-02 data · TK-03 form · **TK-03 Pattern B fail** (post-click banner) · TK-04 · TK-05 · DES-LEAVE |
| Form | Full header Hủy/Lưu · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | control-hint · SUBMIT-VALIDATE · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/phat-hien` |
| **real_view_parity** | `v1` |

### Wire (Delta annotate)

```
TK-02: giữ cards/filter/FAB · no export
TK-03 ok: Lưu enabled · capture hint · Pattern B hint
TK-03 Pattern B fail: Lưu STILL enabled · banner string[] (GPS + mô tả) · inline err · cấm disabled Lưu
TK-04: reviewSave always-on · lech note on click
TK-05: submitFeedback + confirmDone always-on · capture · GPS deny on click
Leave: Modal Ở lại / Rời
```

## 5. API map (cite real-data §B — giữ · không invent)

| Action | API |
|--------|-----|
| List / create / detail | `GET/POST …/patrol/findings` · `GET …/findings/{id}` |
| Recheck | `POST …/patrol/findings/{id}/recheck` |
| Review | `PUT …/patrol/journal-lines/{id}/review` |
| Journal peer | `GET …/patrol/sessions/{id}/journal-lines` |
| Sessions | `GET …/patrol/sessions` |
| Photos | `files/init` → object → commit |
| Road routes | `GET …/integration/road-routes/search` via Mobile.Bff |
| Users (peer) | `GET …/integration/users` BFF forward nếu thiếu · **cấm** invent WebService |

Prefix runtime: `mobile-bff/api/v1` via `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** web-bff trực tiếp.

## 6. UNCLEAR (soft → Dev)

| id | Design chốt | Owner |
|----|-------------|-------|
| UNCLEAR-CAPTURE-PROP | capture bắt buộc trên TK-03/05 · prop nếu có · else input local | Dev |
| UNCLEAR-FEEDBACK-SCOPE | Pattern B nút nếu Live · **không** expand CRUD đợt D | Dev |
| prior schema/code/DOMAIN | resolved review PASS | — |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl | prototype path above · Delta CTA/banner annotated |
| handoff | SA · zone ids · Pattern B control-map · real_view_parity v1 · mfeStd=/phat-hien |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-27T08:20:00.000Z` · `taskId=task_957b179c`
