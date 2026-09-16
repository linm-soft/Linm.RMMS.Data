# PO — Requirement — asset-ai

| | |
|--|--|
| Feature | `asset-ai` |
| Title | [Mobile] [Tài sản] -> Camera AI |
| Role | `po` · `/agent-po-mobile` |
| packKind | **sheet** · surface full `#sc-asset-ai` · `DES-MOB-ASSET-AI` |
| changeScope | `new_page` |
| lane | `mobile` · native iOS + Android · **cấm** mfeStdUrl · **cấm** ERP.* |
| Prior | data_analy **confirmed** · compact `handoff/data_analy-compact.md` |
| Status | **confirmed** · autoApprove=ON · task `task_1c830b88` |
| generatedAt | `2026-09-01T17:05:00.000Z` |

## 1. Goal / DoD

Patrol user mở hub Tài sản → tile **Camera AI** → màn `#sc-asset-ai` → chốt GPS · chụp · upload frame → POST `ai-vision/detect-assets` → bind **AssetClass** / **Score** → toast Code → push sibling **`det-hitl`** (enqueue).  
**Không** auto vào sổ · **không** Confirm/Dismiss trên slug này · **không** gộp `asset-collect` / `cam-patrol` / defect `ai-vision`.

## 2. Screens (1 feature = 1 owner surface)

| Screen id | Title VN | Entry | Exit |
|-----------|----------|-------|------|
| `#sc-asset-ai` | Camera AI | `asset-hub` tile `#i-camera` · `go('asset-ai')` | Back/Hủy → hub · Success → `go('det-hitl')` + candidate Id |

**Tabs:** none trên surface · shell Tab Trang chủ · **không** segment (`GAP-TAB-01`).

### controlHint (SSOT · copy analy)

| id | Label VN | controlHint | Kit | AC |
|----|----------|-------------|-----|-----|
| navBack | Tài sản | BackButton | `LinmTopBar` `#i-chevron-left` | pop → `asset-hub` |
| title | Camera AI | TopBar title | `LinmTopBar` | dual chrome iOS text / Android icon-only back |
| photoLabel | Chụp tài sản / thiết bị mới | SectionLabel | | size 13 |
| photos | (slots) | PhotoRow | | local → upload |
| addPhoto | (camera) | CameraButton | `#i-camera` | `openCapture('asset-ai')` |
| rowPos | Vị trí đã chốt | ListRow | `LinmListRow` | RouteLabel + Km · Lat/Lng * |
| rowClass | Loại đề xuất | ListRow | `LinmListRow` | sau detect · `AssetClass` |
| rowScore | Độ tin cậy | ListRow | `LinmListRow` | sau detect · **Score %** (SCORE-01 P1) |
| btnSend | Gửi nhận diện | PrimaryButton | `LinmPrimaryButton` | POST detect · enable khi GPS+ImageUrl+Route |
| btnCancel | Hủy | SecondaryButton | `LinmSecondaryButton` | → hub · discard local |
| toastOk | Đã gửi nhận diện · {Code} | Toast | `LinmToast` | 200 + Code |
| toastErr | (lỗi mạng / 422) | Toast | `LinmToast` | **cấm** fake 200 |
| gpsDeny | Định vị bị tắt | Modal | `DES-MOB-GPS-DENY` | CTA send disabled |
| tileAI | Camera AI | HubTile | `LinmHubTile` `#i-camera` | parent wire `go('asset-ai')` |

## 3. Action tree (1 action = 1 feature)

```
asset-hub
└── asset-ai                 ← THIS · DES-MOB-ASSET-AI
    ├── camera / PhotoRow    ← same-slug · không enqueue
    ├── GPS / vị trí chốt    ← same-slug · không enqueue
    ├── upload + detect      ← same-slug submit · không enqueue
    ├── Hủy / back           ← nav hub · không enqueue
    └── det-hitl             ← enqueue sibling (HITL-01)
```

| feature | enqueue | Note |
|---------|---------|------|
| `asset-ai` | this | owner pack |
| `det-hitl` | **yes** | sau Gửi nhận diện OK |
| `asset-collect` / adjust / list | **no** | sibling hub · OUT |

## 4. Device / platform AC

| Factor | P1 AC |
|--------|-------|
| GPS | Chốt * trước send · accuracy · deny → `DES-MOB-GPS-DENY` · **cấm** fake / gõ tay · BE reject Lat=Lng=0 |
| Camera | Capture slot `asset-ai` · PhotoRow ≥1 frame trước upload |
| Media | Upload → `ImageUrl` thật · **cấm** `mock://` · fail → block detect + toast |
| Offline | Detect/upload fail → toast · **cấm** fake 200 · queue draft = P2 optional |
| Map | none embed · vị trí = ListRow text |
| Auth | Bearer Keychain/Encrypted trên upload + detect |
| Dual | iOS + Android cùng §B bind · chrome back parity Design |

## 5. Real-data bind (cite §B)

Prefix `mobile-bff/api/v1` · **cấm invent** `api/v1/asset-ai` / Finance `assets`.

| uiField | write / source |
|---------|----------------|
| photos / addPhoto | device → POST/PUT `ai-vision/uploads/*` → `ImageUrl` |
| rowPos | GPS + GET `patrol/sessions` · `integration/road-routes/search` → `RouteId` · `RouteLabel` · `Lat` · `Lng` |
| rowClass / rowScore | POST `ai-vision/detect-assets` → display `AssetClass` · `Score` |
| btnSend | full `DetectAssetsRequest` body |
| toastOk | response `Code` · handoff Id → `det-hitl` |

Empty detect list → toast không đề xuất · giữ form. 422 → toast · giữ form.

## 6. GAP close (PO)

| GAP | Decision |
|-----|----------|
| NAV-01 | Hub tile **push** `#sc-asset-ai` · back hub |
| SCR-01 / CAP-01 | Full Camera AI · `openCapture('asset-ai')` |
| GPS-01 | Lat/Lng required · deny chrome |
| MEDIA-01 | uploads live ImageUrl |
| DET-01 / CTA-01 | bind class/score · POST detect · toast Code |
| HITL-01 | Confirm/Dismiss **OUT** · enqueue `det-hitl` + candidate Id |
| SCORE-01 | **P1 ship Score %** từ API (demo 91% pattern) · Design không ẩn % trừ brand exception ghi `ui/design.md` |
| PACK-01 | Giữ **sheet** meta · surface = full screen |

## 7. OUT / cấm

- invent path · ERP.* · mfeStdUrl · watermark Gói  
- gộp collect / confirm HITL UI / cam-patrol / defect detect  
- auto sổ · fake GPS · mock:// · fake toast 200  
- Step 4b migration · e2e ở role PO  

## 8. Handoff

| Next | Artifact |
|------|----------|
| Design | `ui/design.md` · `ui/ux-analy.md` · prototype dual `#sc-asset-ai` · SCORE chrome · back dual |
| SA | `be/solution-discovery.md` · giữ detect+uploads · Step 4b **N/A** |
| Compact | `handoff/po-compact.md` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-po-req-20260901 |
| priorHashes | control-hint-20260901 · real-data-20260901 · action-tree-20260901 |
| taskId | `task_1c830b88` |
| changeScope | `new_page` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
