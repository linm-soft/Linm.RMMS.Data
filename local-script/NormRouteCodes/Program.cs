using System.Globalization;
using System.Security.Cryptography;
using System.Text;

if (args.Length < 1)
{
    Console.Error.WriteLine("usage: NormRouteCodes <set-dir> [<set-dir>...]");
    return 1;
}

foreach (var arg in args)
    ProcessSet(arg);
return 0;

static void ProcessSet(string setDir)
{
    var routesPath = Path.Combine(setDir, "road_routes.csv");
    if (!File.Exists(routesPath))
        throw new FileNotFoundException(routesPath);
    var (n, collisions) = RewriteRoutes(routesPath);
    Console.WriteLine($"routes {routesPath}: rows={n} collisions_merged={collisions}");

    foreach (var part in Directory.GetFiles(setDir, "road_assets.part*.csv").OrderBy(p => p, StringComparer.OrdinalIgnoreCase))
    {
        var nchg = RewriteAssets(part);
        Console.WriteLine($"assets {Path.GetFileName(part)}: mapped={nchg}");
    }
}

static (int rows, int collisions) RewriteRoutes(string path)
{
    string[] fieldnames;
    Dictionary<string, int> idx;
    var seen = new Dictionary<string, string[]>(StringComparer.OrdinalIgnoreCase);
    var collisions = 0;
    using (var reader = new StreamReader(path, new UTF8Encoding(true)))
    {
        var headerLine = reader.ReadLine() ?? throw new InvalidDataException("empty routes");
        fieldnames = SplitCsv(headerLine);
        idx = IndexOf(fieldnames);
        string? line;
        while ((line = reader.ReadLine()) != null)
        {
            if (string.IsNullOrWhiteSpace(line)) continue;
            var row = SplitCsv(line);
            if (row.Length < fieldnames.Length)
                Array.Resize(ref row, fieldnames.Length);
            var old = Get(row, idx, "code");
            var neu = FoldCode(old);
            if (neu.Length == 0) continue;
            var parent = FoldCode(Get(row, idx, "parent_code"));
            if (string.Equals(parent, neu, StringComparison.OrdinalIgnoreCase)) parent = "";
            var aliases = Get(row, idx, "legacy_aliases")
                .Split(';', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
                .ToList();
            if (old.Length > 0 && !string.Equals(old, neu, StringComparison.OrdinalIgnoreCase) && !aliases.Contains(old, StringComparer.OrdinalIgnoreCase))
                aliases.Add(old);
            Set(row, idx, "code", neu);
            Set(row, idx, "parent_code", parent);
            Set(row, idx, "legacy_aliases", string.Join(";", aliases));
            if (seen.ContainsKey(neu))
            {
                collisions++;
                var prev = seen[neu];
                var prevAlias = Get(prev, idx, "legacy_aliases");
                var extra = aliases.Where(a => prevAlias.Split(';', StringSplitOptions.RemoveEmptyEntries).All(p => !string.Equals(p, a, StringComparison.OrdinalIgnoreCase)));
                var merged = (prevAlias + ";" + string.Join(";", extra)).Trim(';');
                Set(prev, idx, "legacy_aliases", merged);
                continue;
            }

            seen[neu] = row;
        }
    }

    if (!seen.ContainsKey("KHAC"))
    {
        var khac = new string[fieldnames.Length];
        Array.Fill(khac, "");
        Set(khac, idx, "code", "KHAC");
        Set(khac, idx, "name", "Khác");
        Set(khac, idx, "route_kind", "KHAC");
        Set(khac, idx, "notes", "fallback khi dump thiếu tuyến");
        Set(khac, idx, "sort_order", "0");
        var ordered = new Dictionary<string, string[]>(StringComparer.OrdinalIgnoreCase) { ["KHAC"] = khac };
        foreach (var kv in seen) ordered[kv.Key] = kv.Value;
        seen = ordered;
    }

    using (var writer = new StreamWriter(path, false, new UTF8Encoding(true)))
    {
        writer.WriteLine(JoinCsv(fieldnames));
        foreach (var row in seen.Values)
            writer.WriteLine(JoinCsv(row));
    }

    return (seen.Count, collisions);
}

static int RewriteAssets(string path)
{
    string[] fieldnames;
    Dictionary<string, int> idx;
    var rows = new List<string[]>();
    var changed = 0;
    using (var reader = new StreamReader(path, new UTF8Encoding(true)))
    {
        var headerLine = reader.ReadLine() ?? throw new InvalidDataException("empty assets");
        fieldnames = SplitCsv(headerLine);
        idx = IndexOf(fieldnames);
        string? line;
        while ((line = reader.ReadLine()) != null)
        {
            if (string.IsNullOrWhiteSpace(line)) continue;
            var row = SplitCsv(line);
            if (row.Length < fieldnames.Length)
                Array.Resize(ref row, fieldnames.Length);
            var route = FoldCode(Get(row, idx, "route"));
            if (route.Length == 0) route = "KHAC";
            var named = FoldCode(Get(row, idx, "route_named"));
            if (string.Equals(named, route, StringComparison.OrdinalIgnoreCase)) named = "";
            if (!string.Equals(Get(row, idx, "route"), route, StringComparison.Ordinal) ||
                !string.Equals(Get(row, idx, "route_named"), named, StringComparison.Ordinal))
                changed++;
            Set(row, idx, "route", route);
            Set(row, idx, "route_named", named);
            rows.Add(row);
        }
    }

    using (var writer = new StreamWriter(path, false, new UTF8Encoding(true)))
    {
        writer.WriteLine(JoinCsv(fieldnames));
        foreach (var row in rows)
            writer.WriteLine(JoinCsv(row));
    }

    return changed;
}

static string FoldCode(string raw)
{
    if (string.IsNullOrWhiteSpace(raw)) return "";
    var formD = raw.Trim().ToUpperInvariant().Normalize(NormalizationForm.FormD);
    var sb = new StringBuilder(formD.Length);
    foreach (var ch in formD)
    {
        if (CharUnicodeInfo.GetUnicodeCategory(ch) == UnicodeCategory.NonSpacingMark) continue;
        if (char.IsWhiteSpace(ch)) continue;
        sb.Append(ch is 'Đ' or 'Ð' ? 'D' : ch);
    }

    var code = sb.ToString();
    if (code.Length <= 64) return code;
    var hex = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(code))).AsSpan(0, 8);
    return string.Concat(code.AsSpan(0, 55), "-", hex);
}

static Dictionary<string, int> IndexOf(string[] header)
{
    var idx = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
    for (var i = 0; i < header.Length; i++)
        if (!idx.ContainsKey(header[i])) idx[header[i]] = i;
    return idx;
}

static string Get(string[] row, Dictionary<string, int> idx, string key)
    => idx.TryGetValue(key, out var i) && i < row.Length ? row[i] ?? "" : "";

static void Set(string[] row, Dictionary<string, int> idx, string key, string value)
{
    if (!idx.TryGetValue(key, out var i) || i >= row.Length) return;
    row[i] = value;
}

static string[] SplitCsv(string line)
{
    var list = new List<string>();
    var sb = new StringBuilder();
    var inQuotes = false;
    for (var i = 0; i < line.Length; i++)
    {
        var c = line[i];
        if (inQuotes)
        {
            if (c == '"')
            {
                if (i + 1 < line.Length && line[i + 1] == '"') { sb.Append('"'); i++; }
                else inQuotes = false;
            }
            else sb.Append(c);
        }
        else if (c == '"') inQuotes = true;
        else if (c == ',') { list.Add(sb.ToString()); sb.Clear(); }
        else sb.Append(c);
    }

    list.Add(sb.ToString());
    return list.ToArray();
}

static string JoinCsv(string[] cells)
    => string.Join(",", cells.Select(Esc));

static string Esc(string? s)
{
    s ??= "";
    if (s.IndexOfAny([',', '"', '\n', '\r']) < 0) return s;
    return "\"" + s.Replace("\"", "\"\"") + "\"";
}
