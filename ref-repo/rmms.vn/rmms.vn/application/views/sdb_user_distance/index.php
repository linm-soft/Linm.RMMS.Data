    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.1.219/styles/kendo.default-v2.min.css" />
    
    <script src="https://kendo.cdn.telerik.com/2020.1.219/js/kendo.all.min.js"></script>
    
     <div id="example" class="p-2">
            <div id="treelist"></div>

            <script>
                $(document).ready(function () {
                    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

                    var dataSource = new kendo.data.TreeListDataSource({
                            transport: {
                                read: {
                                    url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                                    dataType: "jsonp"
                                },
                                update: {
                                    url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                                    dataType: "jsonp"
                                },
                                destroy: {
                                    url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                                    dataType: "jsonp"
                                },
                                create: {
                                    url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                                    dataType: "jsonp"
                                },
                                parameterMap: function(options, operation) {
                                    if (operation !== "read" && options.models) {
                                        return {models: kendo.stringify(options.models)};
                                    }
                                }
                            },
                            batch: true,
                            schema: {
                                model: {
                                    id: "EmployeeId",
                                    parentId: "ReportsTo",
                                    fields: {
                                        EmployeeId: { type: "number", editable: false, nullable: false },
                                        ReportsTo: { nullable: true, type: "number" },
                                        FirstName: { validation: { required: true } },
                                        LastName: { validation: { required: true } },
                                        HireDate: { type: "date" },
                                        Phone: { type: "string" },
                                        HireDate: { type: "date" },
                                        BirthDate: { type: "date" },
                                        Extension: { type: "number", validation: { min: 0, required: true } },
                                        Position: { type: "string" }
                                    },
                                    expanded: true
                                }
                            }
                        });

                    $("#treelist").kendoTreeList({
                        dataSource: dataSource,
                        // toolbar: [ "create" ],
                        editable: "popup",
                        height: 450,
                        columns: [
                            { field: "FirstName", expandable: true, title: "Tài khoản", width: 250 },
                            { field: "LastName", title: "Last Name" },
                            { field: "Position" },
                            { field: "Phone", title: "Phone" },
                            { field: "Extension", title: "Ext", format: "{0:#}" },
                            { command: [{name: "createchild", text: "Add child"},"edit", "destroy" ], width: 300 }
                        ]
                    });
                });
            </script>
        </div>

<style>
    .k-treelist .k-command-cell .k-button {
        min-width: 0px;
        padding: 10px 10px 10px 10px;
    }
    .k-grid-toolbar{
        background: #3c8dbc;
    }
</style>
