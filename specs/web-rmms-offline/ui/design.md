# Design — web-rmms-offline

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| title | Hàng đợi offline |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_51030f4d`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · UI = **phone full list** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full list (OFF-00) · **N/A** ERP Modal/Slideout |
| DES-GRID / LinErpListFilterBar | **N/A** — phone list · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| mfeStdRoute | `/web-rmms-offline` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| ui1to1 | Android `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` · **bỏ Me tabs** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL` · **cấm** web-bff routes |
| controlHint | `specs/_data-analy/features/web-rmms-offline-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-offline-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T00:30:00.000Z` |
| taskId | `task_51030f4d` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent GET queue · fake GPS / re-geolocate · clear local trước 2xx · clear-all · Me tabs · journal/kết ca/tồn tại/tần suất · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · Route mobile-bff trên web-bff.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-offline.md` | feature P0 |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` · `/offline` | Live API map |
| CTX-03 | `docs/context/features/patrol-offline.md` | peer native DoD replay |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-offline-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | DoD local-first · sync Live |
| Peer proto | `specs/patrol-offline/ui/prototype/android/index.html` `#sc-patrol-offline` | UI 1-1 zones |
| tokens | `docs/mobile-tokens.json` | color/radius/size |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (back · title · sync) · **không** ERP `LinPageLayout` catalog chrome |
| List | Full page OFF-00 — **không** Modal/Slideout |
| Filter | Segment local only · **cấm** invent GET queue / desktop filter bar |
| Leave | Back pop Home / Field hub · **không** dirty form leave |
| Tabs | **không** Me tabs (out of feature) |
| Out | journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`) · native iOS/Android edits |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **OFF-00** | `/web-rmms-offline` · `/offline` · `/field/offline` | Full list | local pending · segment · sync replay |
| **DES-MOB-PAT-OFFLINE-NAV** | topbar | Nav | back · title `offline.title` · syncBtn |
| **DES-MOB-PAT-OFFLINE-SEG** | under nav | Segment | `checkIn` \| `incident` local filter |
| **DES-MOB-PAT-OFFLINE-BANNER** | content | Banner | weak when pending>0 |
| **DES-MOB-PAT-OFFLINE-CARD** | content | List cards | title · location · status «Chờ gửi» |
| empty | content | EmptyChrome | pendingCount=0 |
| toast | overlay | Toast | synced count = apply 2xx · **cấm** `window.alert` |

### IA

```
(auth) → Field hub / Home
  → OFF-00 offline queue
       segment checkIn | incident (P1 filter-only)
       sync → replay POST check-ins (2xx clear only)
       optional offline-batch receipt
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| queue.list | OFF-00 | List local | — | **local only** · **cấm** GET queue |
| title | CARD | Text | — | display · key `offline.card.title` |
| location | CARD | Text | — | display · key `offline.card.location` |
| status | CARD | Badge | — | pending · LOOKUP_STATIC |
| kind | SEG | Segment | — | `checkIn` \| `incident` filter |
| sessionId | hidden | Hidden | * (checkIn) | path `{sessionId}` |
| planPointLabel | hidden | Hidden | — | `PlanPointLabel` |
| route | hidden | Hidden | — | `Route` |
| lat / lng | hidden | Hidden | * | **stored** · **cấm** re-geolocate |
| accuracyM | hidden | Hidden | — | `AccuracyM` |
| distanceToPlanM | hidden | Hidden | — | `DistanceToPlanM` |
| matchOk | hidden | Hidden | — | **cấm** ép true |
| content | hidden | Hidden | — | `Content` |
| photoLocalIds | hidden | Hidden | — | File guid đã enqueue |
| syncBtn | NAV | Button | — | online only · replay 2xx clear |
| sync.receipt | auto | (auto) | — | `POST …/integration/sync/offline-batch` · `RecordCount=N` |
| incident.rows | SEG | List filter | — | P1 **no** POST · P2 `POST …/incident/incidents` |

**Labels:** `useFormOptions()` / `offline.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

### Hành vi (Design chốt)

| Case | UI |
|------|-----|
| Appear | Load local pending · EmptyChrome khi 0 |
| Sync · online | For each pending `checkIn`: POST check-ins · remove OK · keep fail · toast N · optional offline-batch |
| Sync · offline | Toast fail · **cấm** clear |
| Partial fail | Giữ item lỗi · **cấm** clear-all |
| Segment Sự cố | Filter only · sync **không** xóa incident (P1) |
| Back | pop |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | OFF-00 · NAV · SEG · BANNER · CARD · empty · toast |
| Form | Full list · **N/A** Modal/Sheet |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-offline` |
| **real_view_parity** | `v1` |

### Wire

```
OFF-00 NAV: [← Trang Chủ] [title offline.title] [Đồng bộ]
OFF-00 SEG: [Điểm tuần mất sóng] [Sự cố mất sóng]
OFF-00 BANNER: weak signal copy (pending>0)
OFF-00 CARD×N: thumb · title · location · content? · ts · badge Chờ gửi
OFF-00 empty: EmptyChrome khi 0
toast: «Đã đồng bộ N bản ghi» / fail offline / incident empty
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| List queue | **local** IndexedDB/store · **cấm** invent GET queue |
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` |
| Receipt (optional) | `POST mobile-bff/api/v1/integration/sync/offline-batch` |
| Incident P2 | `POST mobile-bff/api/v1/incident/incidents` (cite only · P1 filter) |

**Body check-in** (`CreatePatrolCheckInRequest`): `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`.

**Receipt:** `Partner` · `DeviceId` · `BatchId` · `RecordCount` (= số 2xx) · `Note`.

## 6. UNCLEAR (handoff SA/Dev)

| id | Design chốt | SA/Dev |
|----|-------------|--------|
| UNCLEAR-INCIDENT-REPLAY | Segment giữ · P1 filter-only · sync không clear incident | P2 bind `POST incident/incidents` |
| UNCLEAR-STORE-KEY | Schema khớp peer payload fields (§B sample) | Dev chọn IndexedDB key naming |

## 7. design_confirm

| | |
|--|--|
| autoApprove | ON → **approve** |
| reviewUrl opened | prototype path above |
| handoff | SA · zone ids · control-map · real_view_parity v1 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-26T00:30:00.000Z`
