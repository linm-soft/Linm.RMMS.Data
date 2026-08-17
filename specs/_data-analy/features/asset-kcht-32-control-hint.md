# Data-analy — controlHint — asset-kcht-32

| Field | Value |
|-------|-------|
| feature | `asset-kcht-32` |
| packKind | `master` + mobile hub (edit `mobile-p1` · `asset-type`) |
| mode | `feature_context` |
| changeScope | `edit_page` (asset / asset-type) + `new_page` catalog 32 |
| status | `done` (analy) · gaps **await confirm** |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `rechecked` |
| analyzedAt | `2026-08-18T00:50:00.000Z` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput.

## Sources

| Source | Path |
|--------|------|
| Context mới | `docs/context/features/asset-kcht-32.md` |
| Asset list | `docs/context/features/asset.md` · hint `asset-control-hint.md` |
| Loại 23 | `docs/context/features/asset-type.md` · INVESTIGATE-CUC2 §4 |
| CSDL 12 biểu | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` |
| Sự cố | `docs/context/features/incident.md` |
| Mẫu import | `docs/Mẫu import/*.xlsx` (18) — header **chưa** hash máy |
| Layout | `docs/mobile-legacy/layout/*.jpg` (VNeID khung) |

## § Delta Current vs New

| Current | New |
|---------|-----|
| Master `asset-type` **23** mã CUC 2 | **36** mã (confirm expand_36) |
| Form TS phẳng 8 loại demo | Thông số **theo type** (§4 context) |
| Sự cố độc lập | Tab sự cố trên hộ chiếu + prefill `assetType` |
| Mobile hub 4 ô thu thập | + lưới 32 + thẻ ví giấy tờ (layout VNeID) |
| Cầu / mặt đường UNCLEAR trên asset-hint | Đề xuất `BRIDGE` · `PAVEMENT` — **GAP-AK32-02 closed** |
| 36 loại = SSOT | **GAP-AK32-10:** `Sau-sat-nhap` = đoạn tuyến 85 cột, không 36 loại |

## Control hint — dùng chung

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| type | Loại tài sản | SearchInput | **asset-type** (36) |
| route | Tuyến | SearchInput | **road-route** |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** |
| kmFrom / kmTo | Lý trình | Text | chainage |
| side | Vị trí | Dropdown | LOOKUP_STATIC |
| status | Tình trạng KT | Dropdown | LOOKUP_STATIC |
| lat / lng | GPS | Number | ghim — cấm sửa sau Lưu |
| incidentType | Loại sự cố | Dropdown | per-type §5 · **UNCLEAR** đến GAP-AK32-04 |
| severity | Mức sự cố | Dropdown | incident init-data |

## Control hint — thông số (rút)

| Type | Fields | controlHint |
|------|--------|-------------|
| PAVEMENT | StructureType · RoadClass | Dropdown |
| PAVEMENT | LengthKm · widths · thickness | Number |
| BRIDGE | CrossingType · DesignLoad | Dropdown |
| BRIDGE | LengthM · WidthM · ClearanceM · SpanCount · BuiltYear | Number |
| TUNNEL | HasVentilation / Lighting / Fire / Cctv | Switch |
| CULVERT_X / DITCH / UNDERPASS | Shape · Kind · Aperture | Dropdown + Text |
| TRAFFIC_SIGN / GANTRY | SignCode · GantryKind | Text / Dropdown |
| GUARDRAIL / MEDIAN / RETAINING / SLOPE | LengthM · HeightM · Kind | Number + Dropdown |
| LIGHTING | GridLed* · Solar* · PoleCount | Number · **UNCLEAR** GAP-AK32-07 |
| GREEN | clumps · GrassAreaM2 | Number · **UNCLEAR** loài GAP-AK32-08 |
| KM_POST | StationKm | Text chainage |
| BOUNDARY | MarkerKind | Dropdown |
| *còn lại* | Name / Qty / AreaM2 | Text / Number |

**UNCLEAR** giữ: GAP-AK32-01…09 trên context §8 — **PO MUST AskQuestion** trước Design web form.

## Handoff

→ **PO:** duyệt 32 mã + 9 GAP · copy delta vào requirement  
→ **Design:** mobile VNeID khung (đã proto) · web Kind B 32 + hộ chiếu tab  
→ **SA:** seed asset-types 32 · **cấm** `*LinesJson` sự cố  
→ **TL/Dev:** sau confirm gaps + `design_confirm`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-18T00:50:00.000Z |
| versionGate | rechecked |
