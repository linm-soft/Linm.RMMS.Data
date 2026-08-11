# Design — csdl-so-sach (CSDL 12 biểu + 8 sổ BDTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| Feature Kind | **G** hub + **B** list + **D** Slideout |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset/csdl-so-sach`) |
| updatedAt | 2026-08-09T15:22:00.000Z |
| design_confirm | `approve` (autopilot · task_de8226e1) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-CSDL | `docs/context/features/csdl-so-sach.md` | Hub + list + form · API skeleton |
| DEM-CSDL | `.../csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | SSOT columns/fields · **không** clone chrome |
| DI-CSDL | — | Import Excel **out of pack** (toast stub) |

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **G+B+D** |
| Hub | Tab CSDL/Sổ · KPI · card grid (content-only) |
| List pattern | Catalog list — `LinPageLayout kind="catalog"` · **1×** (cấm nested CatalogListShell) |
| Form pattern | **Slideout** |
| Routes | `/asset/csdl-so-sach` · query `?resource=` drill list · form overlay |
| Toolbar SSOT | `catalogToolbar` + `fa-cog` · Form Z1 icon map |

## 2. Screens / zones (1:1 content)

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Hub catalog | hub | Title · KPI · tabs · cards | Tab buttons · card click |
| List resource | list | **A Header · B Toolbar · C Grid · D Pagination** | SearchTextInput · province/status Select · row menu |
| Form bản ghi | create/edit/view/copy | Slideout **Z1–Z3** (+ entry grid sổ) | fields · readOnly view |

## 3. Field inventory (cho SA)

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã | Text readonly IdCode | — | all readonly |
| roadName | Tên đường | Text | * | view=readOnly |
| province | Tỉnh | Select | * | view=readOnly |
| kmFrom | Lý trình từ | Number/Text | * | view=readOnly |
| kmTo | Lý trình đến | Number/Text | | view=readOnly |
| side | Bên | Select | | view=readOnly |
| status | Trạng thái | Select | * | view=readOnly |
| manageUnit | ĐV quản lý | Text | | view=readOnly |
| ownerUnit | ĐV sở hữu | Text | | view=readOnly |
| detailPrimary | Chi tiết chính | Text | * | view=readOnly · label theo resource |
| detailSpec | Thông số | Text | | view=readOnly |
| detailExtra | Bổ sung | Text | | view=readOnly |
| notes | Ghi chú | Textarea | | view=readOnly |
| bookNo | Số sổ | Text | sổ | view=readOnly |
| contractor | Nhà thầu | Text | sổ | view=readOnly |
| entries[] | Dòng sổ | inline grid | sổ | view=readOnly |

### List columns (header VN)

STT · □ · **Mã** · **Đường** · **Tỉnh** · **Lý trình** · **TT** · **ĐV QL** · **Chi tiết** · ⋯

### controlHint (data-analy)

| Surface | Hint | Control |
|---------|------|---------|
| Filter search | free text mã/đường | SearchTextInput (no Tìm btn) |
| Filter province | enum tỉnh | Select/Dropdown |
| Filter status | enum TT | Select/Dropdown |
| Form province/status/side | enum | Select |
| Entry lines | multi-row | pattern_inline_grid |

## 4. Prototype + reviewUrl

| | |
|--|--|
| artifact | `specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| Content | Zones A–D + hub strip · **skip** chrome/sidebar |

## 5. Handoff → SA

- DOMAIN-MAP: `csdl-so-sach` → Asset · prefix `api/v1/asset`
- Prefer polymorphic catalog record + child book entries (no parent JSON)
- Align demo resource keys; IdCode prefix per resource
- Import/map deep-link OUT pack

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-09T15:22:00.000Z |
| versionGate | rechecked |
