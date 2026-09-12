# Design — asset-ai (mobile sheet · Camera AI)

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm`) |
| packKind | **`sheet`** (PO · GAP-MOB-ASSET-AI-PACK-01 · surface = **full screen** `#sc-asset-ai` · **cấm** bottom-sheet chrome) |
| changeScope | `new_page` |
| stack | `native_dual` |
| taskId | `task_a951f813` |
| priorPo | `po/requirement.md` **confirmed** · task `task_1c830b88` |
| priorDa | `_data-analy/asset-ai-control-hint.md` + `asset-ai-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:asset-ai-control-hint-20260901` |
| realDataHash | `sha256:asset-ai-real-data-20260901` |
| actionTreeHash | `sha256:asset-ai-action-tree-20260901` |
| bffContentHash | `sha256:asset-ai-bff-20260901` |
| ctxContentHash | `sha256:asset-ai-ctx-20260901` |
| demoContentHash | `sha256:mobile-p1-sc-asset-ai-20260901` |
| updatedAt | `2026-09-01T17:10:00.000Z` |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (Design lock) | Surface |
|----|------------------|-------------------|---------|
| GAP-MOB-ASSET-AI-NAV-01 | Hub tile toast / stub | Push `#sc-asset-ai` · back → `#sc-asset-hub` | asset-hub · ai |
| GAP-MOB-ASSET-AI-SCR-01 | Không màn | Full `#sc-asset-ai` · `DES-MOB-ASSET-AI` | screen |
| GAP-MOB-ASSET-AI-CAP-01 | — | PhotoRow · `#i-camera` · `openCapture('asset-ai')` | camera |
| GAP-MOB-ASSET-AI-GPS-01 | — | rowPos Route+GPS * · deny `?gpsdeny=1` | GPS |
| GAP-MOB-ASSET-AI-DET-01 | — | rowClass / rowScore sau detect | list |
| GAP-MOB-ASSET-AI-MEDIA-01 | — | Upload → `ImageUrl` · **cấm** mock:// | media |
| GAP-MOB-ASSET-AI-CTA-01 | — | Primary POST detect · toast Code · push HITL | CTA |
| GAP-MOB-ASSET-AI-HITL-01 | — | Confirm/Dismiss **OUT** · enqueue `det-hitl` | sibling |
| GAP-MOB-ASSET-AI-SCORE-01 | Demo 91% | **P1 show Score %** (PO) · **không** ẩn brand | list |
| GAP-MOB-ASSET-AI-PACK-01 | STATUS sheet | Full screen · **cấm** bottom-sheet | meta |

**OUT:** Thu thập thủ công · confirm HITL UI · cam-patrol · invent `api/v1/asset-ai` · ERP.* · mfeStdUrl · fake GPS · auto sổ.

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/ios/index.html` |
| iOS GPS deny | same + `?gpsdeny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/ios/index.html?gpsdeny=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/android/index.html` |
| Android GPS deny | same + `?gpsdeny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/android/index.html?gpsdeny=1` |
| Workflow (ref) | mobile-p1 `#sc-asset-ai` | cite only · hash skip · **cấm** re-scan |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301 · **cấm** board path chỉ `index.html` (`GAP-MOB-DES-PFX-01`).

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tài sản** | icon-btn chevron only (parity OK) |
| Title | inline **Camera AI** 17 | TopAppBar **Camera AI** ~20 |
| Shell | Tab 5 · tab **`home`** active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-asset-ai` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-ASSET-AI` | Screen owner `#sc-asset-ai` | push từ asset-hub tile | same | `data-tab="home"` |
| Section | Chụp tài sản / thiết bị mới | SectionLabel 13 | same | |
| photos / addPhoto | PhotoRow + CameraButton | `#i-camera` | same | `openCapture('asset-ai')` |
| rowPos | Vị trí đã chốt | `LinmListRow` | same | RouteLabel + Km · GPS * |
| rowClass | Loại đề xuất | `LinmListRow` | same | `AssetClass` sau detect |
| rowScore | Độ tin cậy | `LinmListRow` | same | `Score` % · **P1 show** |
| Primary | Gửi nhận diện | `LinmPrimaryButton` | same | POST detect · enqueue HITL |
| Secondary | Hủy | `LinmSecondaryButton` | same | `go('asset-hub')` |
| Toast OK / Err | banner | `LinmToast` | same | Code · **cấm** fake 200 |
| GPS deny | Modal / banner | `DES-MOB-GPS-DENY` | same | `?gpsdeny=1` · CTA off |
| Shell Tab 5 | chrome | `LinmTabBar` | NavigationBar | **giữ** · home active |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT) | SF Symbol | Material |
|--------|--------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-camera` | camera body + lens | `camera` | `PhotoCamera` |
| `#i-home` | house path | `house` | `Home` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Camera AI** |
| Back (iOS) | **Tài sản** |
| Section | **Chụp tài sản / thiết bị mới** |
| rowPos label / value | **Vị trí đã chốt** / **QL.1 · Km 1556+000** |
| rowClass label / value | **Loại đề xuất** / **Cống** |
| rowScore label / value | **Độ tin cậy** / **91%** |
| Primary | **Gửi nhận diện** |
| Secondary | **Hủy** |
| Toast OK | **Đã gửi nhận diện · AC-20260901-0001** |
| Toast Err | **Không gửi được — kiểm tra mạng / ảnh / vị trí** |
| GPS deny | **Định vị bị tắt — bật GPS để gửi nhận diện** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · fake Code khi fail · invent path · bottom-sheet · Confirm/Dismiss trên slug · gõ tay lat/lng · mock:// ImageUrl.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | iOS back text «Tài sản» · Android icon-only |
| `.section-label` | SectionLabel | 13 muted |
| `.photo-row` / `.cam-btn` | PhotoRow · CameraButton | `#i-camera` |
| `.card-group` `.row` | `LinmListRow` | label 13 / value ≥16 |
| `.btn-primary` | `LinmPrimaryButton` | Gửi nhận diện |
| `.btn-secondary` | `LinmSecondaryButton` | Hủy |
| `#toast` | `LinmToast` | **cấm** UIAlert / AlertDialog |
| `#banner-gpsdeny` | `DES-MOB-GPS-DENY` reuse | CTA disabled |
| `.tabbar` / `.nav` | `LinmTabBar` / NavBar | home |

## SCORE-01 (Design lock)

| Decision | Value |
|----------|-------|
| Show Score % | **yes · P1** (PO SCORE-01) |
| Brand hide | **không** — không có brand note ẩn % |
| Pre-detect | value `—` · sau detect bind `Score` |
| Demo SSOT | `91%` (fallback UI only · **không** fake POST) |

## BFF bind (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Upload | POST/PUT `ai-vision/uploads/*` → `ImageUrl` |
| Detect | POST `ai-vision/detect-assets` |
| Route prefill | GET `patrol/sessions` · `integration/road-routes/search` |
| Confirm | **OUT** → enqueue `det-hitl` + candidate Id |

**Cấm** invent `api/v1/asset-ai` · Finance `api/v1/assets` · ERP.*.

## States

| State | UI |
|-------|-----|
| default (SSOT) | photo slot · rowPos filled · class/score demo · primary enabled |
| GPS deny (`?gpsdeny=1`) | banner deny · rowPos `—` · primary **disabled** |
| no photo | primary disabled / toast validate |
| busy send | primary busy |
| success | toast Code · push `det-hitl` |
| fail 422/network | toast err · **cấm** fake 200 · giữ form |
| offline | toast · **cấm** fake success |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:10:00.000Z |
| versionGate | rechecked |
| design_confirm | approve |
| contentHash | sha256:asset-ai-design-20260901 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
