# HTML → MFE — departments

Không có prototype HTML. Live page:

| Control | MFE |
|---------|-----|
| Grid | `LinCatalogDataGrid` `onRowOpenActionMenu` · `rowMenuHintMessage` · `listRowMenuHelp` |
| Menu | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` (`showView` · `showEdit` · `showDelete`) |
| Xóa toolbar | `catalogToolbar.canDelete` / `onDelete` |
| Confirm | `Modal` size `sm` stacked |
| API | `DELETE /integration/departments/{id}` |
