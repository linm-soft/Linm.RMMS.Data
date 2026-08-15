# Data-analy cluster — cluster-asset-header-v1

> Status: done  
> schemaVersion: `1` · contentHash: `sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af` · rulesVersion: `2026.08.14.9`

## Header fingerprint

`sha256:e127da988394014b734c7277ce7e598b892525efcfefb53ecee2b034d1d7b051`

Normalized header (demo + control-map, no Excel in ProductRoot):

`code|name|type|route|kmFrom|kmTo|status|source|lat|lng|qr|photos|valueVnd|note|updatedAt|search|kmFromFilter|kmToFilter`

**Không** tách feature: cùng cột form/list trên `asset.html` / `asset-demo.html` / GOVOne sổ TS.

## Shared columns (+ control hint → PO/Design/SA)

| Column | Type hint | **controlHint** | catalogKind / maps to |
|--------|-----------|-----------------|------------------------|
| search | string | SearchInput | text — mã · tên · QR · tuyến · loại |
| type (filter+form) | master | **SearchInput** | **asset-type** (23 mã CUC2) — **cấm** free Text · demo 8 nhãn = alias, không thay master |
| route | master | **SearchInput** | **road-route** (38 tuyến) — **cấm** Text |
| kmFrom / kmTo (filter) | chainage | Text | lý trình từ/đến · vd km1+100 |
| org / tree tuyến (legacy textfield-1033) | tree | SearchInput tree | **org-unit** — lọc cây đơn vị/tuyến |
| code | IdCode | Text | readonly · `TS-yyyyMMdd-nnn` BE |
| name | string | Text | * |
| kmFrom | chainage | Text | * · Number+Text pair OK · không SearchInput |
| kmTo | chainage | Text | optional |
| status | enum 3 | **Dropdown** | LOOKUP_STATIC: Tốt · Theo dõi · Cần bảo trì |
| source | enum 2 | **Dropdown** | LOOKUP_STATIC: manual · ai |
| lat / lng | number | Text (number) | GPS pair · không SearchInput |
| qr | string | Text | display P1 |
| photos | media | Text | CSV mock P1 · upload DEFER |
| valueVnd | money | Text (Money) | |
| note | string | Text | multiline |
| updatedAt | datetime | Date | ISO + local display · often readonly |

> Rule: `data-analy-control-hint.md` — Master đã có → **SearchInput**; closed ≤~30 → **Dropdown**; else Text.

## Varying dimensions (không tách feature)

| Dim | Examples |
|-----|----------|
| Đơn vị / Chi cục | Chi cục QLĐB II.1 · DRVN |
| Tuyến | QL.1 · HCM · QL.7… (seed 38) |
| Loại TS | CULVERT_X · GUARDRAIL · LIGHTING · KM_POST · … (23) |
| Kỳ / file | seed demo 2026-08-06 · GOVOne capture |

## Files

| Relative path | Rows (approx) | Hash file |
|---------------|---------------|-----------|
| `docs/context/features/asset.md` | — | `sha256:36082136ccb2e818f9f2981085d2f92ec0c3efaea498681823bfcb22bab631d7` |
| `docs/context/_raw/legacy-govone/demo-maps/asset-control-map.md` | 18 fields | `sha256:7cd9b288569012f8ade13f1e56eba0a840f24e8779a35bfcf88c6c9faa831daa` |
| `docs/context/_raw/legacy-govone/demo-maps/asset-actions.md` | — | `sha256:d1a1b356b5123160d693b082c5a4246d06e8abf82d9da9fb76d317eb07d6c59c` |
| `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | — | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| `Linm.RMMS.Demo/src/demo/asset/asset.html` | — | `sha256:1bbe1d23aa02b69ce977cc44913458a703b3389dbd7058a9c907ea9c64fd9c09` |
| `Linm.RMMS.Demo/src/demo/asset/js/asset-data.js` | 3+ seed | `sha256:acb78ff2e92b79443c327eab3f16ddc5663b45e47410d83e408cc1aa474f75c5` |
| Excel `data-import/RMMS CUC 2` | N/A in ProductRoot this run | folder taxonomy already in shared-catalogs |

## Feature mapping

| | |
|--|--|
| featureSlug | `asset` |
| packKind | list (Kind B catalog + full-page form) |
| Demo | DEM-ASSET · `asset-demo.html` → `asset/asset.html` |
| Context | CTX-ASSET · `docs/context/features/asset.md` |
| Shared catalogs | org-unit · road-route · asset-type · partner-unit |
| SA import APIs | `api/v1/asset/road-assets` (CRUD P1) · import/export DEFER |

## GAP vs spec cũ (retry · Design phải re-chốt)

| Field | Design `ui/design.md` hiện tại | controlHint SSOT này |
|-------|-------------------------------|----------------------|
| route | Text | **SearchInput** `road-route` |
| type | Select 8 nhãn VN | **SearchInput** `asset-type` 23 mã |
| search | SearchTextInput | SearchInput (cùng họ filter) |

## Handoff

→ PO: DI-cluster-asset-header-v1 + **controlHint table** · Kind B · không clone chrome demo  
→ Design: control-map từ hint · zones A–D · prototype content-only + reviewUrl · `autoApprove=OFF` → await_confirm  
→ SA: lookup Master vs static status/source · **cấm ERP.*** · `api/v1/asset/road-assets`  
→ TL: T-UI-LKP (route + type) · T-UI-FIELD · T-UI-LIST A–D · T-UI-FORM full page

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| contentHash | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |
| generatedAt | 2026-08-14T14:51:00.000Z |
| versionGate | rechecked |
