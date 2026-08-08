import fs from 'fs';
import path from 'path';

const routes = [
  ['QL.1', 'Quốc lộ 1', 'QUOC_LO'],
  ['HCM', 'Đường Hồ Chí Minh', 'HCM'],
  ['QL.7', 'Quốc lộ 7', 'QUOC_LO'],
  ['QL.7B', 'Quốc lộ 7B', 'QUOC_LO'],
  ['QL.8', 'Quốc lộ 8', 'QUOC_LO'],
  ['QL.8B', 'Quốc lộ 8B', 'QUOC_LO'],
  ['QL.8C', 'Quốc lộ 8C', 'QUOC_LO'],
  ['QL.9', 'Quốc lộ 9', 'QUOC_LO'],
  ['QL.9B', 'Quốc lộ 9B', 'QUOC_LO'],
  ['QL.9D', 'Quốc lộ 9D', 'QUOC_LO'],
  ['QL.10', 'Quốc lộ 10', 'QUOC_LO'],
  ['QL.12A', 'Quốc lộ 12A', 'QUOC_LO'],
  ['QL.12C', 'Quốc lộ 12C', 'QUOC_LO'],
  ['QL.15', 'Quốc lộ 15', 'QUOC_LO'],
  ['QL.15A', 'Quốc lộ 15A', 'QUOC_LO'],
  ['QL.15B', 'Quốc lộ 15B', 'QUOC_LO'],
  ['QL.15C', 'Quốc lộ 15C', 'QUOC_LO'],
  ['QL.15D', 'Quốc lộ 15D', 'QUOC_LO'],
  ['QL.16', 'Quốc lộ 16', 'QUOC_LO'],
  ['QL.45', 'Quốc lộ 45', 'QUOC_LO'],
  ['QL.46', 'Quốc lộ 46', 'QUOC_LO'],
  ['QL.46B', 'Quốc lộ 46B', 'QUOC_LO'],
  ['QL.46C', 'Quốc lộ 46C', 'QUOC_LO'],
  ['QL.47', 'Quốc lộ 47', 'QUOC_LO'],
  ['QL.47B', 'Quốc lộ 47B', 'QUOC_LO'],
  ['QL.47C', 'Quốc lộ 47C', 'QUOC_LO'],
  ['QL.48', 'Quốc lộ 48', 'QUOC_LO'],
  ['QL.48B', 'Quốc lộ 48B', 'QUOC_LO'],
  ['QL.48C', 'Quốc lộ 48C', 'QUOC_LO'],
  ['QL.48D', 'Quốc lộ 48D', 'QUOC_LO'],
  ['QL.48E', 'Quốc lộ 48E', 'QUOC_LO'],
  ['QL.49', 'Quốc lộ 49', 'QUOC_LO'],
  ['QL.49B', 'Quốc lộ 49B', 'QUOC_LO'],
  ['QL.49C', 'Quốc lộ 49C', 'QUOC_LO'],
  ['QL.217', 'Quốc lộ 217', 'QUOC_LO'],
  ['QL.217B', 'Quốc lộ 217B', 'QUOC_LO'],
  ['CT.NS-HCM', 'Đường nối cảng Nghi Sơn – HCM', 'CAO_TOC'],
  ['CT.001', 'Cao tốc (CUC 2)', 'CAO_TOC'],
];

const pad = (n) => n.toString(16).padStart(12, '0');
const seed = routes.map((r, i) => ({
  id: `b1c2d3e4-f5a6-4789-b012-${pad(i + 1)}`,
  code: r[0],
  name: r[1],
  routeKind: r[2],
  parentCode: null,
  notes: null,
  legacyAliases: [],
  isActive: true,
  sortOrder: i + 1,
}));

const dirs = [
  'D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed',
  'D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/shared-catalogs',
  'D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Persistence/SeedData',
];

for (const d of dirs) {
  fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, 'road-route-seed.json'), JSON.stringify(seed, null, 2));
}

// Generate seed migration C# values
const ts = 'new DateTime(2026, 8, 8, 0, 0, 0, DateTimeKind.Utc)';
const rows = seed
  .map((s) => {
    const aliases = JSON.stringify(s.legacyAliases).replace(/"/g, '""');
    return `                    { Guid.Parse("${s.id}"), "${s.code}", "${s.name.replace(/"/g, '\\"')}", null, "${s.routeKind}", null, "[]", true, ${s.sortOrder}, ${ts}, ${ts} }`;
  })
  .join(',\n');

const mig = `using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RMMS.Service.Migrations.Migrations
{
    /// <inheritdoc />
    public partial class Seed_RmmsRoadRoutes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "rmms_road_routes",
                columns: new[] { "Id", "Code", "Name", "ParentCode", "RouteKind", "Notes", "LegacyAliases", "IsActive", "SortOrder", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
${rows}
                },
                columnTypes: new[]
                {
                    "uuid",
                    "character varying(64)",
                    "character varying(256)",
                    "character varying(64)",
                    "character varying(16)",
                    "character varying(2000)",
                    "character varying(2000)",
                    "boolean",
                    "integer",
                    "timestamp with time zone",
                    "timestamp with time zone"
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DELETE FROM rmms_road_routes WHERE ""Id""::text LIKE 'b1c2d3e4-f5a6-4789-b012-%';");
        }
    }
}
`;

const migDir = 'D:/AI-QLBD/Linm.RMMS.WebService/api/shared/RMMS.Service.Migrations/Migrations';
fs.writeFileSync(path.join(migDir, '20260808190000_Seed_RmmsRoadRoutes.cs'), mig);
console.log('OK seed', seed.length);
