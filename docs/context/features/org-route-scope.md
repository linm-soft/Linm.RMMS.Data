# Phân khu lý trình (zone km) — Feature Context

> **Slug:** `org-route-scope` · **Module:** Master × Integration × Users  
> **Phase:** P1 support (nền Asset / Patrol / Report)  
> **Status:** Context · **PO confirmed** · confirm 2026-08-30 
> **Feature Kind:** **B** — catalog list + form gán km (không voucher)  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **changeScope:** `new_page` (lớp gán mới — **không** reopen CRUD `org-unit` / `road-route` đã `done`)  
> **MFE:** `Linm.Web.RMMS.Master` · đề xuất `/mas/phan-khu` (SA chốt path)  
> **Peers:** [`org-unit.md`](org-unit.md) · [`road-route.md`](road-route.md) · [`partner-unit.md`](partner-unit.md) · [`pavement-section.md`](pavement-section.md) · [`users.md`](users.md) · [`login.md`](login.md) · [`import-gov-ssot.md`](import-gov-ssot.md) · form org [`org-route-scope-form-org.md`](org-route-scope-form-org.md)  
> **SSOT org:** [`../20-ORG-STRUCTURE-DRVN.md`](../20-ORG-STRUCTURE-DRVN.md) · seed 60 [`../seed/org-unit-seed.json`](../seed/org-unit-seed.json)  
> **LRS:** [`../24-TUAN-DUONG-DUONG-BO.md`](../24-TUAN-DUONG-DUONG-BO.md) §6  
> **Review data:** `/data-gov-integration` 2026-08-30 — **không** có dump gán Khu↔tuyến km (**GOV-IMP-03**)

## 0. Chốt user (2026-08-30)

| Quyết định | Giá trị |
|------------|---------|
| Slug | **Mới** `org-route-scope` — không sửa pipeline `done` của 4 catalog master |
| **Tách zone** | Zone = **REG-I…REG-IV** (Khu QLĐB). Mỗi zone **config riêng** `kmFrom–kmTo` theo **tuyến** rồi **đoạn**. Không entity «khu địa lý» ngoài org REG |
| Đơn vị vận hành | **SU** (đơn vị sự nghiệp trên cây DRVN) **và** **nhà thầu** (`partner-unit`) — **không** thêm kind UNIT dưới VP |
| Cây SearchInput | Cây DRVN **tách** khỏi Sở/BOT. Sở Xây dựng… = `partner-unit` — **cấm** sibling dưới Cục trong cùng tree |
| Thay đổi | Gán zone/đoạn **có hiệu lực** (effectiveFrom/To) — tuyến/đoạn đổi được theo thời gian |
| **Xem cấp dưới** | Config `/mas/phan-khu`: cấp trên thấy hợp con. Ô trống = mọi con. Đoạn **bắt buộc** `vpOrgCode` neo VP |
| **Cây 6 cấp (chốt)** | **Cục → Khu → Văn phòng → Đơn vị → tuyến → đoạn** — 1→nhiều; cấp trên xem hợp con |
| Enqueue | `roleOnly=data_analy` · **cấm** invent API / seed gán từ dump |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tách **zone (Khu I–IV)** khỏi cây tổ chức thuần + khỏi catalog tuyến dump, để **cấu hình phạm vi km–km** theo tuyến → đoạn; cascade filter Cục→Khu→VP→Đơn vị→tuyến; tài khoản scoped đoạn/tuyến |
| Persona | Admin hệ thống · Khu QLĐB · Văn phòng · Ban QLDA (SU) · nhà thầu BDTX |
| App hiện có | `/mas/co-cau-tc` tree 60 node · `/mas/tuyen-duong` · `/mas/doi-tac` · SearchInput «Đơn vị quản lý» (đang **trộn** Sở vào cây Cục) · Báo cáo Web dropdown «Tuyến» = tên `Km 0+000 – Km …` (NHANH/TRANH/GOM) |
| DoD ngắn | 1 zone = N dòng gán tuyến+km · đoạn ⊆ km zone · SearchInput cascade tuyến→zone→đoạn · user INTERNAL/CONTRACT chỉ thấy đoạn được gán · **0** row gán bịa từ CSV |

## 2. Hai cây — không gộp (HARD)

### 2.1 Cây tổ chức DRVN (`org-unit`) — filter / RBAC

Nguồn: sơ đồ DRVN + seed 60. **Không** gắn km trên node.

```
DRVN                         Cục Đường bộ Việt Nam
├── HQ                       Lãnh đạo Cục
├── ADV + ROOM               Cơ quan tham mưu (11 phòng)
├── REG                      Cơ quan quản lý khu vực
│   └── REG-I … REG-IV       ← ZONE (tách để config km)
│         ├── ROOM ×4        Phòng chức năng — không gán km
│         └── VP-*.*         Văn phòng QLĐB (I.1…IV.4)
└── SU                       Đơn vị sự nghiệp (Ban QLDA · TT KT · CĐ)
```

Filter cascade (1→nhiều) **đủ case:** **Cục → Khu → Văn phòng → Đơn vị → tuyến → đoạn**.

«Đơn vị» = **SU** (cùng cây) **hoặc** `partner-unit` (cây khác). **Đoạn** = child `org-route-scope-segments` (km ⊆ zone + `vpOrgCode` + assignee) — **không** = Biểu 1 `pavement-section`.

**Rule xem:** không nhân bản row theo 6 cấp. Đọc = **tập con** dưới node đã chọn. Ô trống = hợp mọi con.

| Cấp | Catalog / lưu | Live `/mas/phan-khu` (2026-08-30) | Target |
|-----|---------------|-----------------------------------|--------|
| Cục | `org-unit` `DRVN` | **không ô** — implicit Cục QLĐB | **cấm** hiện filter |
| Khu | `REG-I`…`IV` | SearchInput trong bar | Ô trong bar · cascade |
| Văn phòng | `VP-*` | SearchInput `vpOrgCode` · form * | Giữ · lookup ⊆ Khu |
| Đơn vị | SU + **`partner-unit` `/mas/doi-tac`** | SearchInput theo phân công Khu/VP/Tuyến trên form đối tác · **cấm** nhét node VP | Lookup ⊆ phân công · list phân khu BE union đoạn gán + zone/route/VP đối tác |
| Tuyến | `road-route` mẹ | SearchInput `routeCode` | Lookup ⊆ cấp trên đã gán |
| Đoạn | segment km | **Tab form** — **không** ô filter / không lưới đoạn | SearchInput + list/filter theo đoạn |

Cấp dưới không thấy sibling. ROOM không gán tuyến. **GAP-ORS-CASCADE-01** — Cục ẩn (implicit QLĐB) · Khu bar **closed** · đoạn chưa là bậc filter/list.

### 2.2 Cây đối tác (`partner-unit`) — tách zone UI

Sở GTVT / Sở Xây dựng / BOT / Cty BDTX **không** thuộc cây DRVN.

**GAP-ORS-UI-01:** SearchInput «Đơn vị quản lý» live đang hiện `Sở Xây dựng tỉnh Lạng Sơn` cùng cấp Khu I–IV dưới Cục → **mapped-wrong** catalog. Sửa: tree `org-unit` **chỉ** DRVN; Sở = `partner-unit`.

### 2.3 Lớp zone km (mới) — tách khỏi tree + khỏi dump tuyến

| Lớp | Là gì | Km |
|-----|--------|-----|
| **Tuyến** | Catalog `road-route` tuyến chính (`QL.1`, `HCM`, …) | Extent tuyến (km đầu–cuối) — **thiếu cột** trên entity hiện tại |
| **Zone** | `REG-I`…`REG-IV` | **Config** «quản lý từ km–km» **trên từng tuyến** (1 Khu → nhiều tuyến; 1 tuyến → nhiều Khu, đoạn không chồng) |
| **Đoạn** | Đoạn vận hành ⊆ km zone | km–km nhỏ hơn; gán VP / SU / nhà thầu |
| **Biểu 1** | `pavement-section` | **Khác** đoạn quản lý — không dùng `tbl_rmd` làm zone |

Tìm kiếm nghiệp vụ: **tuyến → khu (zone) → đoạn**.

```
Tuyến QL.1  (km 0 → km L)
  ├── Zone REG-I     km A–B
  │     ├── Đoạn VP-I.1 / SU / DN-…   km a1–a2 ⊆ A–B
  │     └── Đoạn …
  ├── Zone REG-II    km B–C
  └── …
```

**1–nhiều:** 1 Cục → 4 zone · 1 zone → N VP + N dòng gán tuyến · 1 tuyến → N zone (cắt km) · 1 zone-tuyến → N đoạn · 1 đoạn → N tài khoản (⊆ đoạn).

## 3. Hiện trạng vs yêu cầu

| Lớp | Có | Thiếu / lệch |
|-----|----|----------------|
| `OrgUnit` | Tree `parentCode` · kind ORG/HQ/ADV/REG/VP/SU/ROOM · 60 seed | **0** km · **0** FK tuyến |
| `RoadRoute` | code/name/`routeKind`/`parentCode` | **0** `KmFrom`/`KmTo` (km chỉ trong `notes`) |
| CSV `gov-vn` `road_routes` | ~146 `QUOC_LO` (`QL.*`) + ~267 `NHANH`/`TRANH`/`GOM` mã `KM0+000-KM…` tên «Km 0 + 000 – Km …» | Dump **trộn** tuyến chính với nhánh — dropdown Báo cáo Web đang chọn nhánh như «Tuyến» |
| `pavement_sections` | 2.920 · `km_from`/`km_to` · `manage_unit` | `manage_unit` = Sở/đối tác, **không** map REG/VP |
| `UserRoute` / `ContractRoute` | SPEC login approved | **0** entity WebService |
| Users «phân tuyến» | SearchInput multi `road-route` | Không km · không đoạn · không zone |
| Dump moc | 35 xlsx → `gov-vn` | **Không** bảng gán Khu↔tuyến km |

## 4. Design / UI (draft — Design chốt)

| Screen | Pattern | Zones |
|--------|---------|-------|
| List zone | Kind B · chọn REG-I…IV (tree hoặc tabs 4 Khu) | A header · B toolbar · C grid gán tuyến+km · D pager |
| Form / grid dòng gán | Inline hoặc Slideout | SearchInput `road-route` (tuyến chính) · Km từ · Km đến · EffectiveFrom/To · Active |
| Đoạn (child) | Nested list / tab | ⊆ km zone · assignee SearchInput `org-unit` (VP/SU) **hoặc** `partner-unit` |
| Filter consumer | `LinErpListFilterBar` | Cascade Cục→Khu→VP→Đơn vị→tuyến · **không** date trên catalog |
| SearchInput LRS | 3 bước | Tuyến → zone còn lại trên tuyến đó → đoạn ⊆ zone |
| User form | Pack `users` / HĐ | Gán đoạn ⊆ zone của org user — **cấm** CSV |

**Cấm:** nhét CRUD zone vào form `org-unit` 5 field hiện tại · dùng `pavement-section` làm đoạn quản lý · hardcode label VN.

## 5. API / schema (SA chốt — **cấm invent** path trước DOMAIN-MAP)

Cite hiện có (không bịa endpoint mới trong Dev):

| Đã có | Path |
|-------|------|
| Org tree/list | `api/v1/integration/org-units` · `/tree` · `/search` · `/init-data` |
| Tuyến | `api/v1/integration/road-routes` |
| Đối tác | `api/v1/integration/partner-units` |
| Users assign | `PUT …/admin/user/{id}/assign-routes` (SPEC login — body route+km) |
| HĐ tuyến | `PUT …/hd-ns/contracts/{id}/routes` (SPEC — **chưa** ship entity) |

**Đề xuất SA (không phải SSOT API):** bảng con gán zone — unique `(ZoneOrgCode, RouteCode, KmFrom, KmTo, EffectiveFrom)` · đoạn child ⊆ zone · overlap cùng tuyến **cấm** trong cùng cửa sổ hiệu lực. Migration `Schema_*` pair khi SA approve.

User `INTERNAL`: filter data overlap zone/đoạn của `AppUser.OrgCode` (và tổ tiên).  
User `CONTRACT`: giữ rule login — `UserRoute` ⊆ `ContractRoute`.

## 6. Fields (draft)

### 6.1 Zone assignment (1 dòng = 1 Khu × 1 tuyến × 1 đoạn km)

| Field | Control | Notes |
|-------|---------|-------|
| zoneOrgCode | SearchInput tree · kind REG leaf I–IV | `REG-I`…`REG-IV` — không gán trên node `REG` nhóm |
| routeCode | SearchInput `road-route` | Ưu tiên `QUOC_LO` / `HCM` / `CAO_TOC` — **không** chọn mã `KM0+000-*` làm tuyến chính |
| kmFrom · kmTo | Number LRS | ≥ 0 · kmTo > kmFrom · ⊆ extent tuyến khi có |
| effectiveFrom · effectiveTo | Datetime UTC helpers | Bắt buộc — «sẽ thay đổi» |
| isActive | Switch | |

### 6.2 Đoạn (child)

| Field | Control | Notes |
|-------|---------|-------|
| parentAssignmentId | hidden | ⊆ zone km |
| kmFrom · kmTo | Number | ⊆ parent |
| vpOrgCode | SearchInput `org-unit` kind VP · `parentCode` = zone | **Bắt buộc** — neo Văn phòng. Kind=`VP` → `vpOrgCode` = `assigneeCode` |
| assigneeKind | LOOKUP | `VP` · `SU` · `PARTNER` |
| assigneeCode | SearchInput | `org-unit` hoặc `partner-unit` theo kind |

## 7. Data-gov review (slice tuyến / đoạn / zone)

| # | Nguồn | Status | Note |
|---|-------|--------|------|
| t01 / t34–t36 | `road_routes` | `imported` | Ô KCHT tuyến — **không** asset type |
| t02 | `pavement_sections` `tbl_rmd` | `imported` | Đoạn **mặt đường** — không zone |
| Gán Khu↔km | — | `gap-no-source` | **Cấm** seed (**GOV-IMP-01/03**) |
| Dropdown «Tuyến» = `Km 0+000…` | `route_kind` NHANH/TRANH/GOM | `mapped-wrong` (UX) | GAP-ROUTE-01/02 — tách tuyến chính vs nhánh |
| `manage_unit` Sở | pavement CSV | `imported` · sai catalog UI | Dùng `partner-unit` — không nhét vào org tree |

`invented-seed`: **không** — chưa có bảng gán. Recapture dump **không** tạo quan hệ zone.

## 8. Consumers (sau Signed)

| Page | Dùng zone |
|------|-----------|
| Asset / GIS / Patrol | Filter + scope km user |
| Báo cáo Web | Tuyến = tuyến chính · thêm zone · đoạn — **không** list NHANH như tuyến |
| HĐ / users | `UserRoute` ⊆ đoạn zone (INTERNAL) hoặc ⊆ HĐ (CONTRACT) |
| KCHT công trình | `orgUnitCode` + `roadRouteCode` đã có — bind zone khi SA map |

## 9. Gaps

| ID | P | Mô tả |
|----|---|--------|
| GAP-ORS-01 | P0 | Dump không có gán Khu↔tuyến km — config tay / file quản trị riêng · **cấm** suy từ `manage_unit` Sở |
| GAP-ORS-02 | P0 | Tách zone UI: SearchInput org **không** mix `partner-unit` |
| GAP-ORS-03 | P0 | Tách zone data: bảng gán km trên REG-I…IV · không nhét km vào `OrgUnit` |
| GAP-ORS-04 | P1 | `RoadRoute` thiếu KmFrom/KmTo — SA: cột catalog vs chỉ trên assignment |
| GAP-ORS-05 | P1 | CSV trộn QL.* với `KM0+000-*` — rebuild/classify; dropdown BC phải lọc tuyến chính |
| GAP-ORS-06 | P1 | Đoạn quản lý ≠ `pavement-section` |
| GAP-ORS-07 | P1 | `UserRoute`/`ContractRoute` chưa có entity — peer login SPEC |
| GAP-ORS-08 | P2 | Overlap km cùng tuyến + cửa sổ hiệu lực — rule SA |
| GAP-ROUTE-01 | — | Mở — segment code vs route (đã có trên `road-route`) |
| GAP-ORS-LKP-DISPLAY-01 | P0 | SearchInput form/filter — sau chọn fill **mã + tên** (dual-box) — **closed** `/edit-web-feature` 2026-08-30 |
| GAP-ORS-VP-01 | P0 | Đoạn thiếu `vpOrgCode` — VP không suy đơn vị con — **closed** Schema + form 2026-08-30 |
| GAP-ORS-CASCADE-01 | P0 | Cây đủ **Cục → Khu → VP → Đơn vị → tuyến → đoạn** — Cục ẩn · Khu+VP+Đơn vị⊆VP **closed** 2026-08-30 · form Create/Edit thứ tự SearchInput **closed** `/rmms-form-input-org-tree` 2026-08-31 · còn thiếu filter/list đoạn; lookup tuyến chưa ⊆ cấp trên |

## 10. Pipeline

`/agent-qldb-workflow` · `roleOnly=data_analy` · mode `feature_context` · `packKind=master`.

Downstream (sau SA, **không** enqueue Dev trong task này): edit filter `org-unit` tree-only · classify `road-route` · users gán đoạn · reports cascade.

## 11. Checklist data-analy

- [x] Context §1–§9 + chốt zone / SU+nhà thầu / cấm mix Sở
- [x] Control-hint `_data-analy/features/org-route-scope-control-hint.md` · real-data `org-route-scope-real-data.md` (`task_8a74dc46`)
- [x] PO `specs/org-route-scope/po/requirement.md` (`task_70c1a441`) · packKind=`master` · Grid AC · Screens · Leave
- [x] Design `specs/org-route-scope/ui/design.md` + prototype + reviewUrl (`task_4126a205`) · `design_confirm=approve`
- [x] SA DOMAIN-MAP + solution `org-route-scopes` · Schema_* = Step 4b Dev (`task_0c95c02f`)
- [ ] Nguồn danh sách gán km (file quản trị) — **không** invent từ dump

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-08-30T12:32:04.988Z` |
| mobile | — | — | — |
