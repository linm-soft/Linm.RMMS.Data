# Data-analy — asset-ai (controlHint · mobile Camera AI)

| | |
|---|---|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile`) · surface = full screen `#sc-asset-ai` |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_fcd587c7` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-asset-ai` · `DES-MOB-ASSET-AI` · entry hub tile `#i-camera` |
| ctx | `docs/context/features/asset-ai.md` · peer `ai-asset-detect.md` · `asset-hub.md` · DOMAIN-MAP AiVision |
| generatedAt | `2026-09-01T17:00:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/asset-ai` · invent Finance `api/v1/assets` · gộp `#sc-asset-collect` / `#sc-det-hitl` / `#sc-cam-patrol` / defect `ai-vision` · ERP.* · mfeStdUrl · system alert · fake toast · gõ tay lat/lng · auto vào sổ.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`asset-ai-bff-endpoints.md`](asset-ai-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`asset-ai-action-tree.md`](asset-ai-action-tree.md) | 7 tree + share/reuse |
| [`asset-ai-real-data.md`](asset-ai-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo + detect-assets) | Surface |
|----|------------------|----------------------------------|---------|
| GAP-MOB-ASSET-AI-NAV-01 | Hub tile toast / stub · **không** push | Push `#sc-asset-ai` · back → `#sc-asset-hub` | asset-hub · ai |
| GAP-MOB-ASSET-AI-SCR-01 | Không màn Camera AI | Full `#sc-asset-ai` · `DES-MOB-ASSET-AI` | screen |
| GAP-MOB-ASSET-AI-CAP-01 | — | PhotoRow `#i-camera` · `openCapture('asset-ai')` | camera |
| GAP-MOB-ASSET-AI-GPS-01 | — | Vị trí đã chốt · Lat/Lng + Route · deny chrome | GPS |
| GAP-MOB-ASSET-AI-DET-01 | — | Rows Loại đề xuất / Độ tin cậy sau detect | list |
| GAP-MOB-ASSET-AI-MEDIA-01 | — | Upload frame → `ImageUrl` thật · **cấm** mock:// | media |
| GAP-MOB-ASSET-AI-CTA-01 | — | Primary «Gửi nhận diện» → POST detect · push HITL | CTA |
| GAP-MOB-ASSET-AI-HITL-01 | — | Confirm/Dismiss **OUT** · enqueue `det-hitl` | sibling |
| GAP-MOB-ASSET-AI-SCORE-01 | — | Demo 91% · Design **có thể** ẩn % ship | Design |
| GAP-MOB-ASSET-AI-PACK-01 | STATUS `sheet` | Demo full screen — PO/Design chốt | meta |

**Không** đổi (OUT): Thu thập thủ công · adjust PUT/DELETE · list/detail · confirm HITL UI · cam-patrol defect · web Kind B candidates grid.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | **yes** | Chốt * · accuracy · deny → `DES-MOB-GPS-DENY` · **cấm** fake · **cấm** gõ tay · BE reject Lat=Lng=0 |
| Camera | **yes** | Capture slot `asset-ai` · PhotoRow · upload → detect |
| Offline | yes | Detect fail → toast · queue draft optional P2 · **cấm** fake 200 |
| Map | n/a | Không embed map · pin = GPS/route text |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên upload/detect |

## § Tab index

`tabs: none` trên surface — demo `data-tab="home"` (shell Tab **Trang chủ**). **Không** segment (`GAP-TAB-01`). Entry từ hub — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-asset-ai` | Android `#sc-asset-ai` | `#i-*` |
|---|--------------------|------------------------|--------|
| Back | text «Tài sản» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Camera AI | **same** | — |
| Section | Chụp tài sản / thiết bị mới | **same** | — |
| Ảnh | PhotoRow + slot | **same** | `#i-camera` |
| Vị trí | QL.1 · Km 1556+000 | **same** | ListRow |
| Loại đề xuất | Cống | **same** | ListRow |
| Độ tin cậy | 91% | **same** | ListRow · SCORE-01 |
| CTA primary | Gửi nhận diện → `det-hitl` | **same** | PrimaryButton |
| CTA secondary | Hủy → hub | **same** | SecondaryButton |

**Cấm** invent icon. Chrome top-bar text vs icon-btn = Design parity — không đổi field bind SSOT.

## controlHint — `#sc-asset-ai` (`DES-MOB-ASSET-AI`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tài sản | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` / pop hub |
| title | Camera AI | TopBar title | 17 | `LinmTopBar` | dual chrome only |
| photoLabel | Chụp tài sản / thiết bị mới | SectionLabel | **13** | | |
| photos | (slots) | PhotoRow | — | | local → upload |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | `openCapture('asset-ai')` |
| rowPos | Vị trí đã chốt / QL.1 · Km … | ListRow | 13 / ≥16 | `LinmListRow` | RouteLabel + Km · GPS bind |
| rowClass | Loại đề xuất / {AssetClass} | ListRow | 13 / ≥16 | `LinmListRow` | sau detect |
| rowScore | Độ tin cậy / {Score}% | ListRow | 13 / ≥16 | `LinmListRow` | demo · SCORE-01 |
| btnSend | Gửi nhận diện | PrimaryButton | 16 | `LinmPrimaryButton` | POST detect · push `det-hitl` |
| btnCancel | Hủy | SecondaryButton | 16 | `LinmSecondaryButton` | `go('asset-hub')` |
| toastOk | Đã gửi nhận diện · {Code} | Toast | 13–16 | `LinmToast` | candidate Code |
| toastErr | (lỗi mạng / 422) | Toast | 13–16 | `LinmToast` | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | Modal | 17/13 | `DES-MOB-GPS-DENY` | reuse · CTA disabled |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileAI | Camera AI | HubTile | `LinmHubTile` `#i-camera` | `asset-hub` · wire `go('asset-ai')` |

## UNCLEAR

**none** trên path detect-assets live + uploads + AssetCandidateDto. Open Q = SCORE chrome · packKind sheet vs screen · HITL handoff id — PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Hub tile → Camera AI · GPS · capture · upload · POST detect thật · đề xuất · push HITL |
| Gaps | NAV-01 · MEDIA-01 · GPS-01 · HITL-01 · SCORE-01 · PACK-01 |
| OUT | invent path · ERP.* · mfeStdUrl · gộp collect/confirm · auto sổ · gõ tay tọa độ |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-control-hint-20260901 |
| ctxContentHash | sha256:asset-ai-ctx-20260901 |
| demoContentHash | sha256:mobile-p1-sc-asset-ai-20260901 |
| taskId | `task_fcd587c7` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
