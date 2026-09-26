# Design — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Đợt D — kết ca, giao việc, sổ kiến nghị |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_d6793a26`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Full page (TD-06 form · TK-03 assign delta · TK-05 feedback · TK-06 list+form) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-d` |
| mfeStdRoute | `/web-rmms-mobile-d` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-d-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-d-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T09:40:00.000Z` |
| taskId | `task_d6793a26` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · stub TK-07 · dùng notification/inbox làm sổ KN · `yarn build` / e2e / start:std ở role này.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-d.md` | feature wave D |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TD-06 · TK-03 assign · TK-05 feedback · TK-06 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | GAP-TK-04 sổ kiến nghị |
| CTX-04 | peer A/B/C | sessions · journal · findings · **cấm** clone desktop shell |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-d-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | Screens · Schema-before-form · AC L/S/W/F/P |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · back) · **không** ERP `LinPageLayout` catalog chrome |
| Full forms | TD-06 · TK-06 create — header rồi **Hủy / Lưu** onTop (toolbar sticky) · **cấm** footer · GPS nút «Ghim vị trí hiện tại» · **cấm** «Thử lại GPS» |
| List | TK-06 — card list petitions · EmptyState · FAB «Tạo kiến nghị» |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty TD-06 / TK-06 form · **cấm** native dialog |
| Tabs | none |
| Out of D | TK-07 · track GPS liên tục · native · desktop Asset — **hide** · **cấm** stub |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TD-06** | `/field/tuan-duong/ket-ca` | Full form | Radio 1-of-3 · conditional handover/pause · PUT sessions · Back→TD-01 |
| **TK-03** | `/field/tuan-kiem/phieu/moi` | Full form (delta D) | nút **Giao BDTX** sau có finding id · POST WO · `workOrderId` RO · status `da-giao` |
| **TK-05** | `/field/tuan-kiem/phieu/:id` | Detail + feedback | khối Phản hồi BDTX · POST feedback → `cho-kiem-tra` |
| **TK-06** | `/field/tuan-kiem/kien-nghi` · `/moi` | List + form | GET/POST petitions · GPS optional no-face · ≠ inbox |
| **DES-LEAVE** | overlay | Modal | dirty leave TD-06 / TK-06 create |

### IA

```
(auth) → Field → TD hub (peer A)
  → TD-06 kết ca / bàn giao / tạm dừng · Save PUT → hub
  → TK hub → TK-03 (peer C) + assignWo (D)
  → TK-05 detail + feedback (D) · recheck peer C
  → TK-06 sổ KN list → /moi create · openFinding→TK-03 nguồn kien-nghi
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| actionKind | TD-06 | Radio | * | `ket-ca` \| `ban-giao` \| `tam-dung` · **một** chọn · `choiceStack` + `choiceRow` 20×20 |
| summaryDone | TD-06 | Text RO | — | count journal xong / chưa (peer B) |
| openLinesList | TD-06 | List RO | — | dòng chưa xong · **không** xóa |
| handoverNote | TD-06 | TextArea | if ban-giao | Schema D / Note tạm 1 format |
| handoverOpenIds | TD-06 | Chip/List | if ban-giao | ids dòng chưa xong |
| receiverName | TD-06 | Text | — | Text tay + GAP · Lookup nếu có API |
| pauseReason | TD-06 | Dropdown | if tam-dung | 5 keys LOOKUP_STATIC |
| saveSession | TD-06 | Button | — | `PUT sessions/{id}` Live Status |
| cancel | TD-06 | Button | — | về TD-01 · không ghi |
| assignWo | TK-03 | Button | — | `POST maintenance/work-orders` Live · sau có id |
| workOrderId | TK-03/05 | Text RO | — | sau assign · Schema D cột |
| feedbackQty | TK-05 | Text | — | khối lượng thực hiện |
| feedbackQuality | TK-05 | Radio | * | `dat` \| `chua-dat` |
| feedbackAt | TK-05 | DateTime | * | thời điểm |
| feedbackMedia | TK-05 | FileMulti | — | ảnh sau · files/* |
| feedbackNote | TK-05 | TextArea | — | ghi chú |
| saveFeedback | TK-05 | Button | — | `POST …/feedback` → `cho-kiem-tra` |
| petitionList | TK-06 | List cards | — | `GET …/petitions` **Mới** |
| createPetition | TK-06 | Button | — | → `/moi` |
| senderUnit | TK-06 | Text | * | profile / đơn vị |
| route / km | TK-06 | Text | * | |
| content | TK-06 | TextArea | * | |
| petitionKind | TK-06 | Dropdown | * | 5 keys |
| getGps · lat/lng/accuracyM | TK-06 | GPS | optional | hiện trường · deny+no-face → Lưu w/o coords · **cấm** fake |
| noFaceFlag | TK-06 | Checkbox | — | cho phép lưu không GPS |
| savePetition | TK-06 | Button | — | POST status `moi` |
| openFinding | TK-06 | Button | — | → TK-03 nguồn `kien-nghi` |
| closePetition | TK-06 | Button | — | khi phiếu liên kết `xong` hoặc lý do đóng |
| emptyHint | TK-06 | EmptyState | — | copy key · **cấm** mock list |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

**pauseReason keys (PO):** 5 keys LOOKUP — Design: `thoi-tiet` · `an-toan` · `thiet-bi` · `chi-dao` · `khac` (SA/PO confirm label via useFormOptions).

**petitionKind keys (PO):** 5 keys LOOKUP — Design: `mat-duong` · `thoat-nuoc` · `atgt` · `hanh-lang` · `khac`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TD-06 ket-ca · TD-06 ban-giao · TD-06 tam-dung · TK-03 assign · TK-05 feedback · TK-06 empty · TK-06 list · TK-06 create · TK-06 GPS no-face · DES-LEAVE |
| Form | Full header Hủy/Lưu · LeaveConfirmModal |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-d` |
| **real_view_parity** | `v1` |

### Wire

```
TD-06 ket-ca: choiceStack radio 20×20 · summary RO · Lưu → Status Hoàn thành
TD-06 ban-giao: TextArea handover* · open lines checkbox choiceRow · receiver · Lưu giữ Đang tuần + Note
TD-06 tam-dung: Dropdown pauseReason* · Lưu flag pause
TK-03 assign: form peer C + nút Giao BDTX · workOrderId RO sau POST
TK-05 feedback: detail RO · qty · quality choiceGrid · at · media · note · Lưu → cho-kiem-tra
TK-06 empty: EmptyState · CTA tạo
TK-06 list: cards status moi · FAB · openFinding / close
TK-06 create: sender* · route/km* · content* · kind* · GPS · no-face choiceRow
TK-06 no-face: GPS deny banner · checkbox no-face 20×20 · Lưu enabled w/o coords
Leave: Modal Ở lại / Rời (dirty TD-06 / TK-06)
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Session status / handover / pause | `PUT …/patrol/sessions/{id}` **Live** Status · Schema D cols |
| Assign WO | `POST …/maintenance/work-orders` **Live** · lưu `workOrderId` |
| Feedback | `POST …/patrol/findings/{id}/feedback` **Mới** |
| Petition list/create | `GET\|POST …/patrol/petitions` **Mới** |
| Parent session / finding | peer A/C GET |
| Journal open lines | peer B `GET …/journal-lines` |
| Profile | `GET auth/profile` |
| Photos | `files/init` → object → commit |
| Schema HARD | handover/pause · petition · feedback · workOrderId **trước** form |

## 6. UNCLEAR (handoff SA)

| id | Design chốt | SA |
|----|-------------|-----|
| UNCLEAR-HANDOVER-COL | UI 1 Note format tạm · fields handoverNote + openIds + receiver | Schema session vs bảng · 1 format |
| UNCLEAR-PAUSE-STATUS | UI flag trên Đang tuần · pauseReason required | Status riêng vs flag |
| UNCLEAR-PETITION-SCHEMA | empty + gap · **cấm** mock · ≠ inbox | `Schema_PatrolPetition` trước form |
| UNCLEAR-FEEDBACK-DTO | UI body qty/quality/at/media/note | chốt DTO §B |
| UNCLEAR-WO-LINK | UI hiện workOrderId trên finding (+ journal peer) | finding+journal |
| UNCLEAR-RECEIVER-API | Text tay | Lookup nếu có · GAP |
| UNCLEAR-DOMAIN-SLUG | cite Patrol + Maintenance WO | DOMAIN-MAP row D |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:7ea5a5b9a00060f5de09af3b8e3688b39fd566383859a8e73748b9d3885ea034` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T09:40:00.000Z`
