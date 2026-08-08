import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/** Canonical 23 from INVESTIGATE-CUC2 §4 + groupCode from context */
const types = [
  ['CULVERT_X', 'Cống thoát nước ngang', 'THOAT_NUOC'],
  ['INTERCHANGE', 'Nút giao đường bộ', 'GIAO_THONG'],
  ['SLOPE_PROTECT', 'Bảo vệ mái dốc', 'AN_TOAN'],
  ['LIGHTING', 'Hệ thống chiếu sáng đường', 'GIAO_THONG'],
  ['GANTRY_SIGN', 'Giá long môn – biển báo', 'GIAO_THONG'],
  ['GUARDRAIL', 'Hộ lan – tôn sóng – hàng rào bảo vệ', 'AN_TOAN'],
  ['DELINEATOR', 'Cọc tiêu / cọc H', 'AN_TOAN'],
  ['CULVERT_L', 'Cống dọc – rảnh dọc – hào kỹ thuật dọc', 'THOAT_NUOC'],
  ['MEDIAN', 'Dải phân cách giữa', 'AN_TOAN'],
  ['ROW_UTIL', 'Công trình HTKT trong hành lang đường bộ', 'KHAC'],
  ['STATION_HOUSE', 'Nhà hạt quản lý đường bộ', 'NHA_TRAM'],
  ['RETAINING', 'Kè / tường chắn', 'AN_TOAN'],
  ['KM_POST', 'Cột Km', 'GIAO_THONG'],
  ['BUS_STATION', 'Bến xe bus / xe khách', 'GIAO_THONG'],
  ['UNDERPASS', 'Cống chui dân sinh / hào kỹ thuật', 'THOAT_NUOC'],
  ['RAIL_CROSS', 'Điểm giao bằng đường sắt', 'GIAO_THONG'],
  ['BUS_STOP', 'Điểm đỗ/dừng xe bus', 'GIAO_THONG'],
  ['EMS_POST', 'Trạm trực cấp cứu y tế', 'NHA_TRAM'],
  ['TOLL', 'Trạm thu phí', 'GIAO_THONG'],
  ['TUNNEL', 'Hầm', 'GIAO_THONG'],
  ['FERRY', 'Bến phà và phà', 'GIAO_THONG'],
  ['REST_AREA', 'Trạm dừng nghỉ / bãi đỗ xe', 'GIAO_THONG'],
  ['LAND_ROW', 'Đất thuộc tài sản hạ tầng đường bộ', 'KHAC'],
];

function guid(n) {
  const hex = n.toString(16).padStart(12, '0');
  return `c1d2e3f4-a5b6-4789-c012-${hex}`;
}

const rows = types.map(([code, name, groupCode], i) => ({
  id: guid(i + 1),
  code,
  name,
  groupCode,
  icon: null,
  legacyAliases: [],
  isActive: true,
  sortOrder: i + 1,
}));

const outs = [
  path.join(root, 'docs/context/seed/asset-type-seed.json'),
  path.join(root, 'specs/_data-analy/shared-catalogs/asset-type-seed.json'),
  path.join(
    root,
    '../Linm.RMMS.WebService/api/shared/RMMS.Service.Persistence/SeedData/asset-type-seed.json',
  ),
];

for (const out of outs) {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(rows, null, 2) + '\n', 'utf8');
  console.log('wrote', out, rows.length);
}

// C# InsertData fragment for migration patcher
const values = rows
  .map((r) => {
    const id = `Guid.Parse("${r.id}")`;
    return `                    { ${id}, "${r.code}", "${r.name.replace(/"/g, '\\"')}", "${r.groupCode}", null, "[]", true, ${r.sortOrder}, new DateTime(2026, 8, 8, 0, 0, 0, DateTimeKind.Utc), new DateTime(2026, 8, 8, 0, 0, 0, DateTimeKind.Utc) }`;
  })
  .join(',\n');

const fragmentPath = path.join(root, 'local-script/_asset-type-insertdata.fragment.cs');
fs.writeFileSync(
  fragmentPath,
  `            migrationBuilder.InsertData(
                table: "rmms_asset_types",
                columns: new[] { "Id", "Code", "Name", "GroupCode", "Icon", "LegacyAliases", "IsActive", "SortOrder", "CreatedAt", "UpdatedAt" },
                values: new object[,]
                {
${values}
                });
`,
  'utf8',
);
console.log('wrote fragment', fragmentPath);
