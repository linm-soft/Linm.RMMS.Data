# T-PILOT-01 — Pilot Sự cố (`incident` · `/su-co`)

| Field | Value |
|-------|-------|
| id | `T-PILOT-01` |
| slug | `incident` |
| route | `/su-co` |
| HĐ | `37001-08/2026-LIC/LINM-JNET` · PL01 mục **06** · P1-900 |
| status | `pending` |
| deps | T-QA-CRUD-01 |
| board | `qldb-incident` · notes `pilot=1` · `e2eQa=1` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| MFE | `Linm.Web.RMMS.Field` |
| BE | `Linm.RMMS.WebService` · `api/v1/su-co/incidents` |
| createdAt | `2026-08-28` |

Pilot **1 tính năng HĐ** — không enqueue lại MAIN3 / không rewrite LIST/FORM.

---

## Phạm vi

| # | Việc | Slash / CLI | Output |
|---|------|-------------|--------|
| 1 | E2E web runtime | Board **E2E QA** đã ON · `/agent-qa` · `yarn e2e-qa` | `specs/incident/qa/screens/{caseId}.png` + `qa/scenarios.md` |
| 2 | User case từng màn | `/run-user-doc @incident` (headed · localRoot) · `/gen-doc-hdsd` | `{DocsRoot}/user-doc/incident/` + `{MFE}/docs/hdsd/su-co/` |
| 3 | Guide theo tính năng | `/gen-guide-document incident` | `{DocsRoot}/user-doc/incident/guide.md` · `{domain}/docs/guide/incident/` |

**Cấm** `yarn e2e-qa-mobile`. **Cấm** PASS e2e khi không có PNG. **Cấm** bịa UI / paste password.

---

## Cần có trước khi chạy

| Hạng mục | Path / giá trị |
|----------|----------------|
| Docker API + BFF | `{BeRoot}` listen `:5101` · BFF `:5201` |
| UI std | `{MfeRoot}` `yarn start:std` · `mfeStdUrl` |
| Cases | `S-01`…`S-12` · `QA-20`…`QA-28` (từ `qa/scenarios.md`) |
| Env HDSD | `{RulesRoot}/.env` — `{PREFIX}_PAGE` / `_USER` / `_PASSWORD` · **cấm** echo |
| Inventory | `docs/context/features/incident.md` · live DOM |

`--skip-start` chỉ khi std + docker **đã** listen.

---

## Step 1 — E2E

Từ `{AutoCode}`:

```bash
yarn e2e-qa -- --url=http://localhost:9304/su-co --feature=incident --product-root=D:/AI-QLBD/Linm.RMMS.Data \
  --cases=S-01,S-06,QA-20,QA-21 --docker-dir=D:/AI-QLBD/Linm.RMMS.WebService --mfe-root=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field
```

PNG **chỉ** `specs/incident/qa/screens/{caseId}.png`. Embed `![caseId](screens/{caseId}.png)` trong `qa/scenarios.md`.

Form create/edit → từng field + assert body = UI (`T-QA-FORM-01`).

---

## Step 2 — HDSD từng màn (`/gen-doc-hdsd`)

Màn focus (HĐ 06 · web Sự cố):

| Menu / màn | Path |
|------------|------|
| Đăng nhập | `/login` |
| Danh sách sự cố | `/su-co` |
| Thêm / sửa / xem | `/su-co?form=create` · `form=edit&id=` · `form=view&id=` |

1 màn = 1 mục + ảnh + bảng field (nhãn · `*` · cách điền). Form có status → ảnh toolbar từng trạng thái.

---

## Step 3 — Guide (`/gen-guide-document incident`)

§1 Overview · §2 Workflow (tạo / sửa / giao / đóng) · §3 walkthrough list + slideout. Không lộ API path trên bản in user.

---

## DoD

- [ ] `yarn e2e-qa` PASS · PNG khớp `caseId`
- [ ] HDSD `preview.html` + `huong-dan-su-dung.md` · 0 secret
- [ ] `docs/guide/incident/guide.md` + `preview.html`
- [ ] STATUS `T-PILOT-01` → `done` khi đủ 3 output (không fake Dev/QA pipeline)

## Handoff

Sau pilot: Dev implement leftover (STATUS `dev` pending) · không đánh `phase=done`.
