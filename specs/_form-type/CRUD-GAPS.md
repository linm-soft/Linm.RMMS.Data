# CRUD / formType gaps — RMMS (re-implement queue)

**SSOT pack:** `Linm.Development.Rules/common/skill/agent-qldb-workflow/example/form-type-task-pack.md`  
**When:** Feature `phase=done` nhưng thiếu surfaces theo formType · hoặc task MD thiếu pack ids.  
**Queue:** AI-AutoCode `workspaces/qlbd` · slash `/agent-qldb-workflow` · `changeScope=edit_page` · notes `gap=crud_formtype`.

---

## Chuẩn hóa (tóm tắt)

| formType | Required surfaces | SA | TL task ids |
|----------|-------------------|----|-------------|
| **list / master** | List A–D + **Create/Edit/View/Copy** + mọi action→form | FormMode↔API CRUD | T-UI-LIST · **T-UI-FORM** · **T-UI-ACT** · **T-BE-CRUD** · T-QA-CRUD |
| **map** | Full-page OMS + attribute/save form | layers · drawings · attrs | T-UI-MAP · **T-UI-MAP-FORM** · T-BE-GIS · T-QA-MAP |
| **ai** | Capture/result + HITL forms | infer · HITL | T-UI-AI · **T-UI-AI-FORM** · T-BE-AI · T-QA-AI |
| **report** | **Search work** + grid · Ask export · Ask chart | query + flags | T-UI-RPT · EXPORT? · CHART? · T-BE-RPT |
| **dashboard** | KPI + chart (confirm) + drill | aggregates | T-UI-DASH · CHART · T-BE-DASH |

**Systemic gap (audit 2026-08-10):** **0** specs có `T-UI-ACT` / `T-BE-CRUD` canonical — hầu hết chỉ LIST+FORM; map `gis` **skip** form; `ai-vision` FORM còn pending trong task dù STATUS done.

---

## Wave A — enqueue ưu tiên (CRUD / formType)

| # | feature | formType | Gap | Action |
|---|---------|----------|-----|--------|
| 1 | `gis` | map | `T-UI-FORM` **skip** P1 — thiếu attribute/save form | force enqueue · TL paste **T-UI-MAP-FORM-01** |
| 2 | `ai-vision` | ai | task FORM/LIST **pending** · STATUS done | force · pack **ai** (HITL forms) |
| 3 | `camera-connect` | list | phase `dev` · **không** `task/` · CRUD camera + live gateway | enqueue/continue · pack **list** + ACT |
| 4 | `gis-draw-live` | map | context mới · chưa pipeline | enqueue pack **map** |
| 5 | `patrol` | list | có FORM id nhưng thiếu **T-UI-ACT** / action inventory | force · edit_page · ACT+CRUD |
| 6 | `incident` | list |同上 | force · ACT+CRUD |
| 7 | `attendance` | list |同上 | force · ACT+CRUD |

## Wave B — list/master còn lại (sau Wave A style)

Mọi `packKind=list|master` thiếu `T-UI-ACT-01` trong `task/*.md` → batch `--force` (trừ Wave A đã enqueue).

| # | feature | formType |
|---|---------|----------|
| 1 | `asset` | list |
| 2 | `pavement-section` | list |
| 3 | `csdl-so-sach` | list |
| 4 | `citizen` | list |
| 5 | `contract` | list |
| 6 | `drone` | list |
| 7 | `feedback` | list |
| 8 | `integration` | list |
| 9 | `inventory` | list |
| 10 | `maintenance` | list |
| 11 | `ops` | list |
| 12 | `users` | list |
| 13 | `asset-type` | master |
| 14 | `org-unit` | master |
| 15 | `partner-unit` | master |
| 16 | `road-route` | master |

**Skipped Wave B:** Wave A (`patrol`·`incident`·`attendance`·`camera-connect`) · umbrella `master` · map/ai (`gis`·`gis-draw-live`·`ai-vision`).

```bash
cd D:/AI-Extension/AI-AutoCode
yarn scan-qlbd-form-type -- --form-types=list,master --features=asset,asset-type,citizen,contract,csdl-so-sach,drone,feedback,integration,inventory,maintenance,ops,org-unit,partner-unit,pavement-section,road-route,users --run-mode=run_by_form_type --enqueue --force --yes
```

## Wave C — report / dashboard

Khi có feature `reports` / `dashboard` trong inventory → SA Ask **`report_export`** + **`report_chart`** trước solution_confirm.

---

## Worker notes (mỗi task)

```
slash=/agent-qldb-workflow
changeScope=edit_page
gap=crud_formtype
runMode=crud_gap
roleOnly=team_lead · chainRole → Dev
mode=fix_gaps
load=form-type-task-pack.md · list-form-quality-gates.md
TL: PATCH task.md thêm T-UI-ACT / T-BE-CRUD · **T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01** — cấm full_pipeline PO/Design/SA
```

## CLI — đúng (CRUD gap)

```bash
cd D:/AI-Extension/AI-AutoCode
# REQUIRED: --gap=crud_formtype  (không dùng --force đơn độc → full_pipeline)
yarn scan-qlbd-form-type -- --form-types=list,master --features=asset,patrol,... --run-mode=run_by_form_type --enqueue --force --gap=crud_formtype --yes
```

## CLI — SAI (đã cancel 2026-08-10)

```bash
# --force không có --gap → runMode=full_pipeline · reset board po — ĐÃ HUỶ task Wave A/B
yarn scan-qlbd-form-type -- ... --enqueue --force --yes
```

## Wave A CLI (lịch sử — wrong full_pipeline)

```bash
# superseded — xem CLI đúng ở trên
cd D:/AI-Extension/AI-AutoCode
yarn scan-qlbd-form-type -- --form-types=list,map,ai --features=gis,ai-vision,camera-connect,gis-draw-live,patrol,incident,attendance --run-mode=run_by_form_type --enqueue --force --gap=crud_formtype --yes
```

Hoặc `yarn run-implement -- --pack … --features=… --force` nếu pack hỗ trợ.
