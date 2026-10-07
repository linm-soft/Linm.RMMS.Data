# Design — web-rmms-cam-finding

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-finding` |
| title | Camera phiếu tuần kiểm và SLA |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_4b5dbcef`) |
| changeScope | `edit_page` · **cấm** `new_page` · **cấm** invent product route |
| packKind | **`list`** · phone list + form + detail · **≠** Kind B desktop |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full · Finding* · LeaveConfirmModal · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone · **cấm** clone Kind B |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-finding` (alias only) |
| mfeStdRoute | alias `/web-rmms-cam-finding` · **cấm** invent product slug |
| productRoute | `/phat-hien/:sessionId` · `/phat-hien/:sessionId/moi` · `/phat-hien/:sessionId/:findingId` · `/phat-hien/:sessionId/:findingId/sua` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ FileService · Auth cite) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · `mobile-bff/api/v1` · **cấm** web-bff |
| controlHint | `specs/_data-analy/features/web-rmms-cam-finding-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-cam-finding-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-10-01T00:45:00.000Z` |
| taskId | `task_4b5dbcef` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.27.1` |
| versionGate | `ok` |
| contentHash | `sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · invent `CamFinding*` · invent product route `/web-rmms-cam-finding` · CTA **Giao đơn vị BDTX** trên FIND-* · suy `QL_HAT` từ `MANAGER-RMMS` · `SlaHours=24` only · tiền Mục IV · Excel · Kind B DES-GRID · `LinErpListFilterBar` · hardcode VN labels (wire `useFormOptions`) · native `alert`/`confirm` · fake GPS · re-scan demo · `yarn build` / e2e / start:std · iOS/Android native · web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-cam-finding.md` | PO created · UNCLEAR-FIND-CTX RESOLVED |
| PLAN | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #5 · Tuần kiểm đánh giá SLA | role + TT41 |
| DEM | — | **N/A** · hash skip · **cấm** re-scan |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-cam-finding-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` · `handoff/po-compact.md` | edit_page · no giao |
| peer | `web-rmms-mobile-c` · `web-rmms-giao-viec-ql-hat` · `web-rmms-role-gate` | Live findings · peer giao · caps |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** · control **44** |
| Shell | App topbar (back · title key) · **không** ERP `LinPageLayout` · **không** me tab |
| Lists | FIND-L CardList · GET findings?sessionId · FAB moi (tuần kiểm) |
| Form | FIND-F — RouteCapture · due suggest TT41 · Huỷ/Lưu · Pattern B GPS |
| Detail | FIND-D — RO stamp · SLA badge · recheck · **no** assign CTA |
| Leave | **LeaveConfirmModal** (`DES-LEAVE`) · dirty discard FIND-F · **cấm** native dialog |
| GPS | Pattern B · banner on Lưu/recheck · **cấm** fake · **cấm** pre-disable |
| Out | Excel · Mục IV money · invent route · CTA giao trên FIND-* |

## 2. Screens / zones

| Zone | Route (shipped) | Surface | Wire |
|------|-----------------|---------|------|
| **FIND-00** | phone frame | Layout ≤430 | Android 1-1 · no me |
| **FIND-L** | `/phat-hien/:sessionId` | List phiếu đợt | GET findings?sessionId · cards → FIND-D · FAB moi **chỉ** `roleCaps.tuanKiem` |
| **FIND-F** | `/phat-hien/:sessionId/moi` · `…/:id/sua` | Form lập/sửa | POST/PUT · tuần kiểm only · hangMuc→dueAt · RouteCapture · Pattern B |
| **FIND-D** | `/phat-hien/:sessionId/:findingId` | Detail RO + recheck | GET{id} · SLA badge · confirmPass/Fail · feedback* keep · **REMOVE** assignCta |
| **DES-LEAVE** | overlay | Modal | dirty leave FIND-F |
| **BANNER** | FIND-F/D | Banner | validation · GPS deny · role deny |
| **TOAST** | overlay | Toast | ok/fail · **cấm** `window.alert` |
| **roleGate** | FIND-* | Hidden/Banner | `roleCaps.tuanKiem` · hide FAB/write/recheck |

### IA

```
(auth · roleCaps) → FIND-L (/phat-hien/:sessionId)
  → FAB moi (tuanKiem) → FIND-F (/moi)
      → hangMuc change → dueAt suggest (TT41) · editable
      → Lưu → Pattern B GPS · POST → FIND-D
      → Huỷ dirty → DES-LEAVE
  → card → FIND-D (/:findingId)
      → RO + slaBadge (Trong hạn / Quá hạn)
      → recheck (tuanKiem · status cho-kiem-tra) → confirmPass / confirmFail
      → feedback* (da-giao · BDTX) keep
      → assignCta REMOVED · giao = peer web-rmms-giao-viec-ql-hat
  → non-TK: list RO · no FAB · no Lưu · no recheck
  → std alias /web-rmms-cam-finding → deep-link product /phat-hien/:sessionId
```

## 3. Control inventory (A–D) · cite controlHint

### A — FIND-L

| id | controlHint | role | note |
|----|-------------|------|------|
| screenTitle | Text | all | list phiếu đợt |
| listCards | List | all | GET findings?sessionId · open FIND-D |
| statusChip | Badge | all | FINDING_STATUS |
| fabCreate | FAB Button | `tuanKiem` | **ẩn** non-TK · nav `/moi` |
| emptyState | Text | all | «Chưa có phiếu» |

### B — FIND-F

| id | controlHint | role | note |
|----|-------------|------|------|
| source | Select | TK write | FINDING_SOURCE |
| journalLineId | TextInput | TK | required nếu `tuan-duong` |
| findingKind | Select | TK | FINDING_KIND |
| kmFrom / kmTo | TextInput | TK | required |
| side | Select | TK | FINDING_SIDE |
| hangMuc | Select | TK | FINDING_HANGMUC · **trigger** due suggest |
| description | TextArea | TK | required |
| scope | Radio | TK | FINDING_SCOPE · `bdtx` → dueAt |
| dueAt | Date | TK | gợi ý TT41 · **editable** · cấm SlaHours=24 |
| gps | GPS + Banner | TK | Pattern B on Lưu |
| photos | RouteCaptureControl | TK | purpose patrol-finding |
| saveSubmit | Button primary | TK | lock saving/photoBusy |
| cancel | Button | TK | leaveConfirm dirty |
| bannerErrors | Banner | TK | km · desc · gps · due · journal |

### C — FIND-D

| id | controlHint | role | note |
|----|-------------|------|------|
| stamp* | Text RO | all | kind · km · hangMuc · desc · scope · dueAtDisplay |
| statusBadge | Badge | all | FINDING_STATUS |
| slaBadge | Badge | all | **Trong hạn / Quá hạn** · derive dueAt vs now/recheckAt |
| detailPhotos | RouteCapture view | all | mode=view |
| recheckResult | Radio | TK | FINDING_RECHECK · dat / chua-dat |
| recheckNote | TextArea | TK | optional |
| recheckPhotos | RouteCapture | TK | purpose patrol-finding-recheck |
| confirmPass | Button primary | TK | **Xác nhận đạt** · status `cho-kiem-tra` |
| confirmFail | Button primary | TK | **Ghi chưa đạt** |
| feedback* | Form | BDTX | giữ khi `da-giao` · **không** phải giao việc |
| assignCta | — | — | **REMOVE** · cấm «Giao đơn vị BDTX» |
| gpsRecheck | GPS + Banner | TK | Pattern B on confirm |

### D — Shared / out

| id | note |
|----|------|
| roleCaps | Hidden · cite `web-rmms-role-gate` · `tuanKiem` |
| DES-GRID / Excel | **N/A** |
| assign-work-order UI | **OUT** · peer `web-rmms-giao-viec-ql-hat` |
| Mục IV tiền / SlaHours=24 | **OUT** |

## 4. Role matrix (HARD)

| Vai | FIND-F write | FIND-L FAB | FIND-D recheck | Giao trên FIND-D |
|-----|--------------|------------|----------------|------------------|
| Tuần kiểm | yes | yes | yes | **no** |
| Tuần đường | no | no | no | no |
| `QL_HAT` (HAT-TRUONG+HAT-PHO) | no | no | no | **no** · peer giao |
| Nghiệm thu | no | no | no | no |

## 5. Due suggest TT41 (FIND-F) · UNCLEAR-FIND-DUE-CATALOG

| hangMuc (catalog) | Gợi ý dueAt |
|-------------------|-------------|
| Vá ổ gà (cấp I–II) | +3 ngày |
| Vá ổ gà (cấp III–VI) | +5 ngày |
| Nứt dọc/ngang/mai rùa | +7 mưa · +14 khô |
| Lún lõm / sình lún | +10 ngày |
| Vệ sinh / chướng ngại nguy hiểm | +1 giờ · còn lại +7 ngày |
| Nước đọng mặt đường | ≤ 24 giờ (hạn lịch · **≠** SlaHours form) |
| Biển cấm / hiệu lệnh | +1 · biển khác +3 |
| Vạch sơn cục bộ | +28 ngày |
| Tồn tại nghiệm thu | +5 ngày từ văn bản |

Wire: client catalog map hangMuc→offset · user **sửa được** trước Lưu. Dev cite PLAN Phụ lục IV. **Cấm** default SLA 24h only.

## 6. SLA badge (FIND-D) · UNCLEAR-FIND-SLA-FIELD

| | |
|--|--|
| Derive | `dueAt` vs `now` (hoặc `recheckAt`) → **Trong hạn** / **Quá hạn** |
| Pair | cùng lúc Đạt / Chưa đạt (recheck result) |
| SA | confirm DTO `slaStatus` hoặc client-only derive |
| Out | trừ tiền Mục IV |

## 7. GPS Pattern B

| Màn | Rule |
|-----|------|
| FIND-F | Lưu không pre-disable · deny/pending → BANNER |
| FIND-D recheck | confirmPass/Fail không pre-disable · deny → BANNER |
| FIND-L / FIND-D RO | không bắt GPS mới |

## 8. API cite (Live — SA confirm)

| Method | Path | UI |
|--------|------|-----|
| GET | `patrol/findings?sessionId=` | FIND-L |
| POST/PUT | `patrol/findings` · `/{id}` | FIND-F · TK only |
| GET | `patrol/findings/{id}` | FIND-D |
| POST | `…/{id}/recheck` | confirmPass/Fail |
| POST | `…/{id}/feedback` | feedback* keep |
| POST | `…/{id}/assign-work-order` | **không gọi từ UI slug** |
| GET | `patrol/sessions/{id}` | stamp RO |
| files/* | FileService | RouteCapture |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `cam-finding/*`.

## 9. Prototype review (list A–D)

| Screen | Zones shown | Delta vs current ship |
|--------|-------------|----------------------|
| FIND-L | cards · FAB TK · empty | FAB gated `tuanKiem` |
| FIND-F | fields · due hint · capture · Lưu | due suggest · role gate · Pattern B banner |
| FIND-D | RO · slaBadge · recheck · **no** assign | SLA badge · remove Giao đơn vị BDTX |
| Non-TK | list RO · no FAB | role banner |

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-finding/ui/prototype/index.html`

## 10. Leave / toast / a11y

| Rule | Spec |
|------|------|
| Leave | LeaveConfirmModal FIND-F dirty · **cấm** `window.confirm` |
| Toast | success/error/deny · **cấm** `window.alert` |
| Labels | `useFormOptions('web-rmms-mobile-c')` / FINDING_*_LOOKUP_STATIC |
| Touch | control ≥44 · field ≥52 · phone 430 |

## 11. UNCLEAR → next

| id | Owner |
|----|-------|
| UNCLEAR-FIND-DOMAIN-ROW | SA — DOMAIN-MAP slug hoặc bind `web-rmms-mobile-c` |
| UNCLEAR-FIND-ROLE-SOURCE | deps `web-rmms-role-gate` |
| UNCLEAR-FIND-DUE-CATALOG | Dev — client/BE suggest map (Design chốt table §5) |
| UNCLEAR-FIND-SLA-FIELD | SA — derive client vs DTO field |

## 12. design_confirm

| | |
|--|--|
| autoApprove | **ON** → **approve** |
| result | `confirmed` |
| next | SA · `be/solution-discovery.md` · pending |
| handoff compact | `handoff/design-compact.md` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:a7c3e91f0b4d62e8c5f1a9d0e3b7c4f6a2d8e1b5c9f0a4d7e6b3c1f8a5d2e0b9` · `rulesVersion=2026.09.27.1` · `updatedAt=2026-10-01T00:45:00.000Z` · `changeScope=edit_page` · `design_confirm=approve`
