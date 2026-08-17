# RESUME-CONTEXT — maintenance

> Design role complete · await_confirm · 2026-08-16T00:40:00.000Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_e50a4b4e` |
| alias | `maintenance` |
| title | [Design] Bảo trì |
| phase | `design` |
| status | `await_confirm` |
| mfeRoot | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| notes | roleOnly=design · autoApprove=OFF · next=SA after board Approve |

## Done this turn

- Rewrote `ui/design.md`: Kind B + **full-page form** (cấm Slideout) · Zone F `LinCatalogUiSchemaEditorModal` kind=`work-orders` · SearchInput catalogs **work-order-status** / **work-type** per PO
- Rewrote `ui/prototype/maintenance-list-prototype.html`: A–D + Zone F modal + full-page C/E/Copy + View **display**
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html`

## Next

User Approve Design on `/qldb-workflow` board → enqueue SA (`/agent-sa`). Do not start SA while await_confirm.
