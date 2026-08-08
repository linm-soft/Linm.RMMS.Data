import fs from 'fs';

const seed = JSON.parse(
  fs.readFileSync('D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/road-route-seed.json', 'utf8'),
);
const ts = 'new DateTime(2026, 8, 8, 0, 0, 0, DateTimeKind.Utc)';
const rows = seed
  .map((s) => {
    const name = s.name.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `                    { Guid.Parse("${s.id}"), "${s.code}", "${name}", null, "${s.routeKind}", null, "[]", true, ${s.sortOrder}, ${ts}, ${ts} }`;
  })
  .join(',\n');

const insert = `
            migrationBuilder.InsertData(
                table: "rmms_road_routes",
                columns: new[] { "Id", "Code", "Name", "ParentCode", "RouteKind", "Notes", "LegacyAliases", "IsActive", "SortOrder", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
${rows}
                });
`;

const path =
  'D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Migrations/Migrations/20260808114114_Schema_RmmsRoadRoutes.cs';
let cs = fs.readFileSync(path, 'utf8');
if (cs.includes('InsertData')) {
  console.log('already seeded');
  process.exit(0);
}

const re =
  /            migrationBuilder\.CreateIndex\(\r?\n                name: "IX_rmms_road_routes_RouteKind_IsActive",\r?\n                table: "rmms_road_routes",\r?\n                columns: new\[] \{ "RouteKind", "IsActive" \}\);/;

if (!re.test(cs)) {
  console.error('marker not found');
  process.exit(1);
}

cs = cs.replace(re, (m) => insert.replace(/\n/g, '\r\n') + '\r\n' + m);
fs.writeFileSync(path, cs);
console.log('seed patched', seed.length);
