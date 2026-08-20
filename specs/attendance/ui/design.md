# Design — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Design] [Mobile] Chấm công |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_a59566c2`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = hub DES-MOB-ATT) |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse map dual `LinmLargeTitle` / `LinmSegment` / `LinmHeroCard` / `LinmListRow` / `LinmToast` |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/ios/index.html#sc-attendance` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/android/index.html#sc-attendance` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` |
| prior | PO `confirmed` · `po/requirement.md` · `task_35851eba` · contentHash `sha256:attendance-mobile-hub-20260819` · bffContentHash `sha256:attendance-mobile-bff-20260819` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| requestSource | run packet `task_a59566c2` · `/agent-qldb-workflow-mobile` · roleOnly=`design` · `/agent-design-mobile` |
| updatedAt | `2026-08-19T20:48:00.000Z` |
| taskId | `task_a59566c2` |

## 0. Context & Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/attendance.md` | hub chấm công |
| CTX-02 | `docs/context/features/patrol-home.md` | parent entry |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-attendance` | visual SSOT |
| DEM | `specs/attendance/ui/prototype/{ios,android}/index.html` `#sc-attendance` | board dual |
| DA | `_data-analy/attendance-control-hint.md` · `attendance-bff-endpoints.md` · `attendance-action-tree.md` | |
| PO | `po/requirement.md` | §5 controlHint · §7 chốt |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app.

## 1. Pattern

| | |
|--|--|
| Surface | Push hub · large title · segment 2 · green hero · section + list rows · **không** Modal/Sheet / invent tab |
| FormMode | none |
| Action this slug | Appear GET · Chấm vào POST+GPS · toast report/day |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| Frame | iOS 390×844 · Android 412×915 · safe area |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | Zones | CTA |
|------------|--------|-------|-----|
| `DES-MOB-ATT` `#sc-attendance` | Chấm công | Large title · segment · hero · 7d rows | POST / toast / pop |
| `DES-MOB-ATT-SEG` | Segment 2 | idx **0** Tuần đường · **1** Chấm công | pop / owner |
| `DES-MOB-ATT-HERO` | Hero green | eyebrow · title · meta · Chấm vào · Báo cáo | POST / toast |
| `DES-MOB-ATT-DAYS` | 7 ngày gần đây | section + rows + badge | toast day |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường · #sc-patrol-home
    → segment idx 1 «Chấm công» → push #sc-attendance
#sc-attendance  DES-MOB-ATT  ← this pack
  → segment 0 = pop #sc-patrol-home
  → Chấm vào = GPS + POST patrol/attendance-logs
  → Báo cáo = toast «Báo cáo công» · cấm push report
  → tap day = toast «Chi tiết ngày công» · cấm push detail
  → không child form / sheet
```

**Cấm** invent tab · reorder segment · «Có mạng» · watermark Gói · device label · native alert · start sibling `pending_confirm`.

## 3. Field inventory (kit dual)

| Field | VN | controlHint | Required | Kit dual | Notes |
|-------|----|-------------|----------|----------|-------|
| largeTitle | Chấm công | Text | * | `LinmLargeTitle` | |
| segPatrol | Tuần đường | Segment | * | `LinmSegment` idx **0** | pop |
| segAtt | Chấm công | Segment | * | `LinmSegment` idx **1** | owner |
| heroEyebrow | Chấm công theo định vị | Text | * | `LinmHeroCard` | |
| heroTitle | Chưa chấm vào | Text | * | same | → Đã chấm vào |
| heroMeta | Vị trí: Văn phòng QLĐB IV.1 · Khu IV · ±6 m / Ca sáng · 10/08/2026 | Text | * | same | demo SSOT |
| checkIn | Chấm vào | Button white | * | `LinmHeroAction` | GPS+POST |
| report | Báo cáo | Button ghost | * | `LinmHeroAction` | toast |
| section7d | 7 ngày gần đây | Section | * | `LinmSectionLabel` | |
| day1 | CN 10/08 · — · Nghỉ | Row + badge | * | `LinmListRow` | |
| day2 | T7 09/08 · 07:05 – 16:40 · Đủ công | Row | * | same | |
| day3 | T6 08/08 · 07:12 – 16:55 · Đủ công | Row | * | same | |

Toast → `LinmToast`. **Cấm** invent kit.

## 4. SF ↔ Material

| Demo | Ý nghĩa | iOS | Android |
|------|---------|-----|---------|
| Segment chrome | filter | pill `LinmSegment` | underline `LinmSegment` |
| Hero green | status | `#34C759`→`#248A3D` | `#1B8A4A`→`#0F5C30` (chrome OK · copy same) |
| Badge Đủ công / Nghỉ | status | kit badge success/neutral | same |

## 5. Brand tokens

| Token | Hex | Dùng |
|-------|------|------|
| primary | `#0C84C0` | Android seg selected |
| success / hero | `#34C759` / `#248A3D` | hero gradient iOS |
| hero Android | `#1B8A4A` / `#0F5C30` | Material green chrome |
| surface iOS | `#F2F2F7` | nền |
| surface Android | `#FFFBFE` | nền |
| card | `#FFFFFF` | rows |

**Cấm** skin Ministry · **cấm** M3 tím segment.

## 6. Behaviors

| Case | UI |
|------|-----|
| Appear | GET `patrol/attendance-logs` · map days · fail → demo SSOT · **mở** |
| Seg 0 | pop `#sc-patrol-home` |
| Chấm vào | GPS → POST · toast success · hero Đã chấm |
| GPS deny | toast locDeny · no POST |
| Báo cáo | toast **Báo cáo công** |
| Tap day | toast **Chi tiết ngày công** |
| Entry | patrol seg → push `#sc-attendance` |
| Signal | **N/A** · **cấm** «Có mạng» |

## 7. BFF (Design lock)

| Method | Path | Slug? |
|--------|------|-------|
| GET | `patrol/attendance-logs` | **yes** |
| POST | `patrol/attendance-logs` | **yes** |
| Report / day detail | — | toast P1 |

**Cấm** invent report/zones · Step 4b endpoint mới · ERP.*.

## 8. Cấm

- WebView · `mfeStdUrl` · `yarn start:std`
- Gộp sibling · push report/detail P1
- `UIAlert` / `AlertDialog` / `window.alert`
- Watermark Gói · device label
- Board **không** prefix `ios/` · `android/` (`GAP-MOB-DES-PFX-01`)

## 9. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | reuse GET+POST · Step 4b **N/A** |
| kit_missing_confirm | **N/A** |
| Chain | **không** (roleOnly=`design`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.24 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T20:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.24 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
