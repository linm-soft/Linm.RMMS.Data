# UX analy — estimate (mobile)

**Sources:** `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` · `ui/design.md` · PO · DA controlHint + real-data  
**Gate:** `/mobile-ui-ux-analy` §1–§9 · **REQUIRED** trước Dev  
**Slash:** `/mobile-ui-ux-analy` · `task_18e9655b` · `2026-09-01T14:35:44.000Z`  
**Brand tokens:** Primary `#0C84C0` · deep `#086A9A` · success `#34C759` · orange `#FF9500` · surface `#F2F2F7` · label `#1C1C1E` · muted `#8E8E93`  
**Hash skip:** DA contentHash `sha256:estimate-mobile-control-hint-20260901-edit01` · **cấm** re-scan DemoRoot (`GAP-DES-DEMO-RESCAN-01`)  
**Delta:** **GAP-MOB-EDIT-01** labelHeader 13pt above 6 form fields (prior ux `task_c0fb308d` **giữ** base)

## 1. IA

```
Login → Tab Công việc (shell Tab 5 · index work)
  → mnt-list hub «Giao việc xử lý» / card #i-sum
       → push #sc-estimate (owner DES-MOB-EST)
  → incident-create / incident-detail CTA «Giao việc xử lý»
       → push #sc-estimate (shared_action · reuse owner)
  → #sc-estimate DES-MOB-EST
       → card Từ sự cố + Loại tài sản (readonly · subtitle label OK)
       → [labelHeader] Giao cho * · Khối lượng · Đơn giá
       → [labelHeader] Thành tiền · SLA 24h · Hạn xử lý (derived)
       → Primary POST work-orders | Secondary draft
       → missing incidentId → banner · chặn Giao việc
  → back → mnt-list (hoặc pop incident parent)
```

`tabs: none` trên surface · **cấm** invent segment (`GAP-TAB-01`). Tab shell **`work`** active khi entry từ mnt-list.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-EST / `#sc-estimate` | Giao việc xử lý | nav back «Công việc» + chevron · title 17 · Tab 5 work | icon-btn chevron · TopAppBar title ~20 · Nav 5 work | Giao việc / Lưu nháp |
| Banner missing (`?missing=1`) | Thiếu sự cố… | in-app banner | same | chặn primary |

## 3. Zone

### DES-MOB-EST

| Zone | Demo (user thấy) | Map row (html-to-native-map) | SwiftUI | Compose |
|------|------------------|------------------------------|---------|---------|
| Header | Công việc · Giao việc xử lý | A `.nav-bar` / `.top-bar` | `LinmTopBar` | same |
| From SC | Từ sự cố / SC-2401 · Ổ gà · QL.1… | A `.row` | `LinmListRow` | same |
| Asset | Loại tài sản / Mặt đường | A `.row` | `LinmListRow` | same |
| Assignee | **label** Giao cho * + value | A `.field > label` | `LinmTextField`+**labelHeader** | same |
| Qty | **label** Khối lượng + 12.5 | A `.field > label` | +**labelHeader** | same |
| Price | **label** Đơn giá + 850.000 | A `.field > label` | +**labelHeader** | same |
| Total | **label** Thành tiền + 10.625.000 | A `.field > label` readonly | +**labelHeader** | same |
| SLA | **label** Thời hạn… + 24 | A `.field > label` readonly | +**labelHeader** | same |
| Due | **label** Hạn xử lý + datetime | A `.field > label` readonly | +**labelHeader** | same |
| Primary | Giao việc | A `.btn-primary` | `LinmPrimaryButton` | same |
| Secondary | Lưu nháp | A `.btn-secondary` | `LinmSecondaryButton` | same |
| Toast | CV-* / nháp / err | D toast | `LinmToast` | same |
| Banner | Thiếu sự cố… | `.banner` | Text/banner kit | same |
| Tab | work active | A `.tabbar` / `.nav` | `LinmTabBar` | NavigationBar |

**labelHeader:** `.field > label` 13pt muted always on · **cấm** native title=placeholder only (**GAP-MOB-EDIT-01** · AC-F-13).

**States:** default (SSOT rows) · loading Giao việc (busy primary) · draft success toast · WO fail toast (**cấm** fake CV) · missing incident banner + disable primary · empty assignee disable/ toast validate · leave dirty confirm (kit — **cấm** system alert) · offline: form mở · POST fail toast · queue DEFER · seed fail → demo fallback rows · filled fields vẫn hiện label header

## 4. Copy SSOT

Nhãn lấy đúng HTML dual — **cấm** invent / lệch iOS↔Android (trừ back chrome: iOS có chữ «Công việc»).

**Cấm trên máy:** watermark «bản Gói N» · device label «iPhone»/«· Android» · «Có mạng» · fake CV · Kind B list · multi-line toolbar · bottom-sheet · badge P1/P2 · placeholder-only field labels.

## 5. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | CTA · tab selected · tint |
| Deep | `#086A9A` | accent |
| Orange | `#FF9500` | banner warn accents |
| Surface | `#F2F2F7` | nền |
| Card | `#FFFFFF` | groups · fields |
| Label / muted | `#1C1C1E` / `#8E8E93` | title / row-sub / **field labelHeader** |

**Cấm** skin đỏ Ministry / CCCD (`GAP-MOB-BRAND-01`).

## 6. Signal

Không pill mạng trên pack này. **Cấm** «Có mạng» · **cấm** tap-cycle proto (`AC-D-08`).

## 7. Pictogram

| id | Motif | Native |
|----|-------|--------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | SF `chevron.left` / Material `ArrowBack` |
| `#i-home` `#i-mappin` `#i-warning` `#i-wrench` `#i-person` | shell Tab 5 | reuse shell |

**Cấm** invent tab icon / segment icon mới trên pack.

## 8. Motion

Pack P1: toast fade ~2.4s · primary busy spinner · total recalc on qty/price input · **không** bắt buộc `/wf-anim` ship.

## 9. GAP / Device

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| **GAP-MOB-EDIT-01** | demo `.field > label` vs native placeholder-only | **must** labelHeader 13 above 6 fields · dual · **cấm** placeholder-only |
| GAP-MOB-EST-PACK-01 | sheet meta vs full screen | **sheet** packKind · surface **screen** · **cấm** bottom-sheet |
| GAP-MOB-EST-NAV-01 | toast stub → screen | **must** push `#sc-estimate` |
| GAP-MOB-EST-SIMP-01 | 1 line vs web grid | map `Lines[0]` |
| GAP-MOB-EST-ASSIGNEE-01 | no staff API | free text |
| GAP-MOB-EST-WO-01 | auto WO vs explicit | explicit `POST maintenance/work-orders` |
| GAP-MOB-EST-SLA-01 | no SLA API | local 24h + DueAt |
| AC-D-01 | offline | form mở · fail toast · queue DEFER |
| AC-D-02 | GPS | **N/A** |
| AC-D-03 | leave dirty | in-app confirm · **cấm** native alert |
| AC-D-04 | alert | **cấm** system · Toast only |
| AC-D-05 | keyboard | không đè Primary |
| AC-D-06 | safe area | TopBar + scroll + CTA + tab |
| AC-D-08 | signal | **N/A** · **cấm** «Có mạng» |
| AC-D-10 | tab | shell work · in-screen **none** |
| AC-D-12 | type | label **13** · value ≥16 · title 17 |
| AC-F-01 | appear / seed | from-incident / GET · fail → demo SSOT |
| AC-F-02 | back | pop mnt-list / parent |
| AC-F-03 | prefill header | thiếu incidentId → banner · chặn |
| AC-F-04 | assignee | required free text |
| AC-F-05 | qty/giá/total | editable · derived · `Lines[0]` |
| AC-F-06 | SLA/Due | 24h · derived |
| AC-F-07 | Giao việc | POST WO · toast CV-* · **cấm** fake |
| AC-F-08 | Lưu nháp | POST draft · toast nháp |
| AC-F-09 | entry | mnt-list / incident → push |
| AC-F-10 | dual parity | cùng copy trừ chrome back |
| **AC-F-13** | label header | 6 fields label 13 always visible when valued · **GAP-MOB-EDIT-01** |
| GAP-TAB-01 | tabs none | shell Tab 5 giữ · work |
| kit_missing | — | **N/A** · kits có sẵn · labelHeader = kit/`VStack` |
| DEFER | bezel HTML | chrome native HIG/Material |
| GAP-F-EST-01 | auto WO event | **DEFER** web P2 |

## Gate

Must open = **0** · packet §1–§9 đủ · GAP-MOB-EDIT-01 locked · handoff SA (`be/solution-discovery.md` pending · paths likely skip).

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T14:35:44.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| taskId | `task_18e9655b` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=2 versionGate=rechecked taskId=task_18e9655b -->
