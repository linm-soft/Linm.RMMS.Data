# Real-data bind — khu-1-pilot (Pilot dữ liệu Khu I)

| | |
|---|---|
| feature | `khu-1-pilot` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d855768c` |
| prefix | lookups **live** `web-bff/api/v1/integration` · page list/status + scoped import = **GAP** đến SA |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (+ Field / Gis consume filter) |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| mfeStdRoute | `/khu-1-pilot` |
| map | Gis/Field **consume** cùng `zoneOrgCode=REG-I` — **cấm** invent map canvas API trong pack |
| demo | **N/A** (list pilot · **không** demo HTML · **không** demo-json) |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| lane | **web only** · **cấm** qlbd-mobile / `yarn run-implement-mobile` |

## § Delta Current vs New (`new_page` · `task_d855768c`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | draft stubs | §A–§G filled · status **done** |
| Page | **0** MFE route `/khu-1-pilot` | Kind A/B list + FilterBar REG-I **GAP** |
| DOMAIN-MAP | thiếu slug | SA row → Asset (đề xuất) **GAP-K1-DM-01** |
| Import | `gov-vn` toàn quốc + `t6-org-scope` | Pilot ops **scoped REG-I** ReImportSeed+ReInitData **GAP** |
| Alias risk | II.1 / QL.1 demo | Filter + copy **chỉ** Khu I · exclude `VP-II.*` |
| Typed CSDL | 16 biểu + 10 sổ **done** | **cấm** enqueue lại |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/khu-1-pilot.md` | — | version mismatch → gate |
| `context` | `docs/context/features/org-route-scope.md` | — | zone + cascade peer |
| `context` | `docs/context/features/import-gov-ssot.md` | — | ReImportSeed · ReInitData · sets |
| `context` | `docs/context/20-ORG-STRUCTURE-DRVN.md` | — | REG-I · GAP-ORG-01 II.1 legacy |
| `context` | `docs/context/features/reports-filter-bar.md` | — | `/rmms-filter-org` field order |
| `import` | `docs/context/seed/org-unit-seed.json` | tree trống | seed `drvn-org` · REG-I + VP-I.1…I.4 |
| `import` | set `gov-vn` (mirror WebService) | empty counts | rebuild + ReImport — **không** seed bịa |
| `import` | set `t6-org-scope` | 0 gán | Excel T6 · **cấm** invent-seed (**GOV-IMP-01/03**) |
| `api` · org-unit **live** | `OrgUnitsController` `api/v1/integration/org-units` (+ `/tree` · `/search`) | empty tree | toast · **cấm** alert |
| `api` · road-route **live** | `RoadRoutesController` `api/v1/integration/road-routes` | empty list | toast |
| `api` · partner-unit **live** | `PartnerUnitsController` `api/v1/integration/partner-units` | empty list | toast |
| `api` · org-route-scope **peer** | `…/integration/org-route-scopes` (peer done) | empty gán | toast · filter tuyến ⊆ Khu I |
| `api` · pilot list/status | **GAP** — chưa controller/page resource | grid trống | toast · **cấm** mock |
| `api` · scoped ReImport/ReInit | **GAP** — flags/ops scoped `REG-I` | — | confirm + toast |
| `mfe` · page | **GAP** — Asset `index` **chưa** `/khu-1-pilot` | — | Design/Dev |
| `domain` | `docs/DOMAIN-MAP.md` | — | **GAP-K1-DM-01** slug |

`sourceCite` = file **có trong repo**. Pilot CRUD/status path = **GAP** đến SA — **cấm** bịa endpoint như live (**GAP-DA-REAL-03**).

### Org scope SSOT (Khu I) — **cấm** nhầm II.1

| code | name | kind | Notes |
|------|------|------|-------|
| `REG-I` | Khu Quản lý đường bộ I | REG | **pilot zone** |
| `REG-I-TCHC` … `REG-I-QLGT` | 4 phòng Khu I | ROOM | **không** gán km · **không** ô filter chính |
| `VP-I.1` … `VP-I.4` | Văn phòng QLĐB I.1–I.4 | VP | cascade ⊆ REG-I |
| `VP-II.1` / `VP-II.6` | legacy Chi cục II.1 / II.6 | VP | **GAP-ORG-01** · **cấm** pilot default / filter |

## §B — Bind field (HARD)

### B1 — Filter lookups (live · sameMfe=cite Integration)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| zoneOrgCode | Khu | SearchInput / locked | org-unit | `GET …/org-units/search?kind=REG` · `/tree` | `zoneOrgCode` | cite · **force `REG-I`** |
| vpOrgCode | Văn phòng | SearchInput | org-unit | `…/org-units/search?kind=VP&parentCode=REG-I` | `vpOrgCode` | cite |
| assigneeCode | Đơn vị | SearchInput | org-unit \| partner-unit | peer search | `assigneeCode` | cite · tách tree |
| routeCode | Tuyến | SearchInput | road-route | `…/road-routes/search` (+ routeKind) | `routeCode` | cite · ⊆ org-route-scope Khu I khi có |
| search | Tìm | SearchTextInput | — | list `?search=` **GAP** | — | **gap** page |

**Prefix map peers (live):**

| Catalog | Operation | Path |
|---------|-----------|------|
| org-unit | Tree / Search / List | `GET /web-bff/api/v1/integration/org-units{/tree,/search,}` |
| road-route | Search / List | `GET /web-bff/api/v1/integration/road-routes{/search,}` |
| partner-unit | Search / List | `GET /web-bff/api/v1/integration/partner-units{/search,}` |
| org-route-scope | List / by zone | `GET /web-bff/api/v1/integration/org-route-scopes` (+ query zone) |

### B2 — Pilot list / status grid (HARD · **GAP**)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| catalog | Catalog | Text/Badge | — | list **GAP** | — | **gap** |
| countInScope | Số lượng | Number | — | list **GAP** · filter `zoneOrgCode=REG-I` | — | **gap** |
| lastImportAt | Lần import | Datetime | — | list/status **GAP** | — | **gap** |
| status | Trạng thái | Badge | — | list **GAP** | — | **gap** |

**Đề xuất SA (không phải SSOT API):** resource dưới **Asset** — ví dụ `khu-1-pilot` / `pilot-zone-stats` — query bắt buộc `zoneOrgCode=REG-I` (reject khác zone). Counts = DB sau import · **cấm** demo JSON.

| Operation | Path (đề xuất SA · **GAP**) |
|-----------|------------------------------|
| List / stats | `GET /web-bff/api/v1/asset/{resource}?zoneOrgCode=REG-I` |
| Scoped ReImport | `POST …/import/re-seed?zoneOrgCode=REG-I` **hoặc** flag `DataImport__*` scoped — SA chốt |
| Scoped ReInit | `POST …/import/re-init?zoneOrgCode=REG-I` — **cấm** wipe ngoài scope |

### B3 — Import sets (cite · không invent rows)

| set | role | Cấm |
|-----|------|-----|
| `drvn-org` | cây org 60 · REG-I | invent node |
| `gov-vn` | routes/assets/pavement nationwide | gộp zone km vào gov-vn · seed bịa · khu-2/khu-4 set |
| `t6-org-scope` | gán Khu↔km | invented-seed từ dump moc |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| org-unit | Integration org-units | `org-unit-seed.json` · `drvn-org` | mix Sở · default II.1 |
| road-route | Integration road-routes | `gov-vn` road_routes | NHANH/TRANH/GOM làm tuyến chính · QL.1 demo default |
| partner-unit | Integration partner-units | t6 / partner seed | nhét vào org tree |
| org-route-scope | Integration org-route-scopes | `t6-org-scope` | invent gán |
| khu-1-pilot | **GAP** Asset | counts DB | mock / HasData |

## §D — Empty / error

| Case | UI |
|------|-----|
| Chưa import / 0 row Khu I | empty state + CTA import scoped · toast |
| Lookup org/route fail | toast · **cấm** `alert` |
| User chọn zone ≠ REG-I | reject / hide · keep lock REG-I |
| ReInit confirm | danger modal · scope chip `REG-I` |

## §E — Security / lane

- BE **chỉ** `Linm.RMMS.WebService` · DOMAIN-MAP domains.
- **Cấm** `Linm.Web.ERP.WebService` · `Domains/Master` ERP.
- **Cấm** mobile implement queue.
- RBAC: user ngoài Khu I không thấy pilot counts ngoài scope (SA/Dev chốt claim).

## §F — DoR data-analy

- [x] control-hint **done**
- [x] real-data **done** (§A+§B)
- [x] contentHash = CTX sha256
- [x] demo N/A
- [x] packKind `list`
- [x] compact handoff path

## §G — Handoff

→ PO (`po/requirement.md`) khi compact PASS.  
Compact: `specs/khu-1-pilot/handoff/data_analy-compact.md`
