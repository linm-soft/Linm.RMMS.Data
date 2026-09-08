# PO — Requirement — khu-1-pilot (Pilot dữ liệu Khu I)

| Field | Value |
|-------|-------|
| feature | `khu-1-pilot` |
| title | Pilot dữ liệu Khu I |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.06.01` |
| rulesVersion | `2026.08.30.6` |
| versionGate | `rechecked` |
| taskId | `task_25122961` |
| lane | `web` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| prior | data_analy=`confirmed` · compact=`handoff/data_analy-compact.md` |
| demo | **N/A** (không demo HTML · hash skip · **cấm** rescan) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/khu-1-pilot` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain đề xuất **Asset** + lookups **Integration** · **cấm ERP.*** |
| context | `docs/context/features/khu-1-pilot.md` |
| controlHint | `specs/_data-analy/features/khu-1-pilot-control-hint.md` |
| realData | `specs/_data-analy/features/khu-1-pilot-real-data.md` |
| peers | `org-route-scope` · `import-gov-ssot` · `reports-filter-bar` (`/rmms-filter-org`) |

> Họp **04/09/2026** hạng **3 + S1**: filter org-route-scope **Khu I** + `ReImportSeed`/`ReInitData` scoped zone.  
> Typography SSOT: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **Cấm** nhầm Chi cục **II.1** / `VP-II.*` / demo **QL.1** · **cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** invent-seed · **cấm** gộp zone vào `gov-vn` · **cấm** dataset khu-2/khu-4 · **cấm** enqueue lại 16 biểu + 10 sổ · **cấm** mobile lane.

## 1. Goal / Intent

Người dùng vận hành pilot trên MFE Asset (`:9301`) xem **list/status counts** dữ liệu đã import **trong scope Khu QLĐB I (`REG-I`)** và chạy ops **ReImportSeed / ReInitData scoped zone** — không đụng nationwide wipe / typed CSDL.

## 2. packKind confirm

| | |
|--|--|
| packKind | **`list`** |
| Kind UI | **A/B** list + `LinErpListFilterBar` |
| Report AC | **N/A** |
| Typed form | **cấm** |

## 3. Personas / Actors

| Actor | Need |
|-------|------|
| Data / Admin Khu I | Xem counts route/asset/pavement trong `REG-I`; ReImport/ReInit scoped |
| Viewer ngoài Khu I | Không thấy counts ngoài scope (RBAC — SA/Dev) |

## 4. Screens

| ID | Route | Surface | Notes |
|----|-------|---------|-------|
| SCR-K1-01 | `/khu-1-pilot` | List Kind A/B | Zone A header · B filter+toolbar · C grid · D pagination |
| SCR-K1-MAP | Gis/Field (peer) | Filter consume | Cùng `zoneOrgCode=REG-I` — **không** invent map API trong pack |

**Skip chrome:** GOVOne · Signed demo · hub nav demo · mobile shell · nút Thêm mới catalog.

## 5. Zone layout (DoD Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Pilot dữ liệu Khu I» · badge zone `REG-I` · **cấm** Thêm mới |
| B filter | `LinErpListFilterBar` · `/rmms-filter-org` | Khu **locked REG-I** · VP ⊆ I.1–I.4 · ĐV · Tuyến · search · 🔍 · **cấm** native `<select>` · **cấm** `ErpListHeaderFilters` / `LinListFilterField` |
| B toolbar | Refresh · ReImport · ReInit | confirm danger trên ReInit · scope chip `REG-I` · **cấm** export chrome demo |
| C | Grid / cards | catalog · countInScope · lastImportAt · status — **cấm** mock / HasData JSON |
| D | Pagination | flat list khi có rows chi tiết |

## 6. Filter keys (Zone B) — Grid AC

| Field key | Label | controlHint | catalogKind | Slot | AC |
|-----------|-------|-------------|-------------|------|----|
| zoneOrgCode | Khu | SearchInput tree **hoặc** locked chip | org-unit | leading | **default + lock `REG-I`** · reject/hide REG-II…IV · **cấm** ô Cục · **cấm** mix Sở |
| vpOrgCode | Văn phòng | SearchInput | org-unit kind=`VP` | leading | ⊆ `REG-I` → `VP-I.1`…`VP-I.4` · **cấm** `VP-II.*` |
| assigneeCode | Đơn vị | SearchInput | org-unit SU **hoặc** partner-unit | leading | cascade sau VP · **cấm** nhét Sở vào org tree |
| routeCode | Tuyến | SearchInput | road-route | leading | ⊆ org-route-scope Khu I · **cấm** NHANH/TRANH/GOM · **cấm** `KM0+*` · **cấm** default demo QL.1 |
| search | Tìm kiếm | SearchTextInput | text | leading | mã/tên · **không** nút Tìm riêng |
| — | Đoạn | **không ô** P0 | — | — | `km_skip` · **GAP-ORS-CASCADE-01** · **cấm** invent `segmentId` |

**Cascade HARD:** locked `REG-I` → VP → ĐV → Tuyến. Đổi VP → clear ĐV · page=1. Layout: `filter-bar-layout-hard`.

## 7. Pilot ops (Zone B toolbar)

| Field key | Label | controlHint | AC |
|-----------|-------|-------------|----|
| importSet | Bộ import | Dropdown / chips RO | chỉ `gov-vn` · `t6-org-scope` · `drvn-org` — **cấm** khu-2/khu-4 |
| pilotScope | Phạm vi | locked chip | luôn `zoneOrgCode=REG-I` |
| reImport | ReImportSeed | Button + confirm | scoped REG-I — path **GAP-K1-API-01** SA |
| reInit | ReInitData | Button danger + confirm | gỡ mã rác **trong scope** — **cấm** wipe ngoài REG-I |

## 8. Grid columns (Zone C) — Grid AC

| Field key | Label | controlHint | AC |
|-----------|-------|-------------|----|
| catalog | Catalog | Text / Badge | route · pavement · asset-type aggregate |
| countInScope | Số lượng (Khu I) | Number | DB sau import · filter `zoneOrgCode=REG-I` · **cấm** mock |
| lastImportAt | Lần import | Datetime | từ status API (**GAP** SA) |
| status | Trạng thái | Badge | ok · empty · gap-no-source · error → toast (**cấm** `alert`) |

## 9. Real-data bind (cite · không invent live path)

### Lookups live (Integration)

| uiField | GET (live) |
|---------|------------|
| zoneOrgCode | `GET /web-bff/api/v1/integration/org-units{/tree,/search}` · force `REG-I` |
| vpOrgCode | `…/org-units/search?kind=VP&parentCode=REG-I` |
| assigneeCode | org-unit SU **hoặc** partner-units search |
| routeCode | `…/road-routes{/search}` (+ org-route-scopes by zone) |

### Page / ops (**GAP** → SA — **cấm** bịa như live)

| Operation | Đề xuất SA |
|-----------|------------|
| List / stats | `GET /web-bff/api/v1/asset/{resource}?zoneOrgCode=REG-I` |
| Scoped ReImport | `POST …/import/re-seed?zoneOrgCode=REG-I` **hoặc** flag scoped |
| Scoped ReInit | `POST …/import/re-init?zoneOrgCode=REG-I` |

## 10. Empty / error / Leave

| Case | Behavior |
|------|----------|
| 0 row / chưa import Khu I | empty state + CTA import scoped · toast |
| Lookup fail | toast · **cấm** `alert` |
| Zone ≠ REG-I | reject / keep lock |
| ReInit | danger modal · chip `REG-I` |
| Leave dirty filter | giữ query trên URL hoặc clear theo Design — **không** silent wipe ngoài scope |

## 11. Non-goals (HARD)

- ERP.* / `Linm.Web.ERP.WebService` / Domains/Master ERP
- Invent-seed · gộp zone km vào `gov-vn`
- Dataset khu-2 / khu-4 · re-enqueue 16 biểu + 10 sổ
- Mobile / `yarn run-implement-mobile` / qlbd-mobile
- Demo HTML / demo-json / HasData mock rows
- Rescan demo (`--rescan` chỉ `/agent-data-analy*`) — **GAP-PO-DEMO-RESCAN-01**

## 12. GAPs → next roles

| ID | Owner | Note |
|----|-------|------|
| GAP-K1-DM-01 | SA | DOMAIN-MAP row `khu-1-pilot` → Asset |
| GAP-K1-API-01 | SA | List/status + scoped ReImport/ReInit |
| GAP-K1-PAGE-01 | Design/Dev | Route `/khu-1-pilot` + FilterBar |
| GAP-K1-SCOPE-01 | SA/Data | Import flags scoped REG-I |
| GAP-K1-ALIAS-01 | Design (PO chốt) | Copy + filter exclude II.1 / QL.1 — **PASS PO** |
| GAP-ORS-CASCADE-01 | peer | Đoạn `km_skip` |
| GAP-K1-MOBILE-01 | TL | Lane web only |

## 13. Acceptance (PO DoR)

- [x] packKind=`list` · changeScope=`new_page`
- [x] Grid AC filter + columns + cascade REG-I lock
- [x] Screens + Leave + ops scoped
- [x] Copy alias **cấm** II.1 / QL.1 (**GAP-K1-ALIAS-01** closed ở PO)
- [x] Cite analy controlHint + real-data · contentHash khớp
- [x] Handoff Design · compact `handoff/po-compact.md`
- [x] **Không** implement · **không** e2e / start:std

## 14. Handoff

→ **Design** (`ui/design.md` + prototype + reviewUrl) · Autopilot ON.  
Compact: `specs/khu-1-pilot/handoff/po-compact.md`
