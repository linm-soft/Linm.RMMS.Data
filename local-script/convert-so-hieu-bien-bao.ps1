# Convert "Số hiệu biển báo.xlsx" → official traffic_sign_types.csv (UTF-8).
# Map: dump sign_code_number = Excel "Mã biển báo". Name = "Tên tiếng việt" (Nội dung biển báo).
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Xml.Linq

$srcDir = "D:\AI-QLBD\Linm.RMMS.Data\data-import\so-hieu-bien-bao"
$xlsx = Get-ChildItem -LiteralPath $srcDir -Filter "*.xlsx" | Select-Object -First 1
if (-not $xlsx) { throw "No xlsx in $srcDir" }
$xlsx = $xlsx.FullName
$outOfficial = Join-Path $srcDir "traffic_sign_types.csv"
$outSet = "D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\data\import\sets\so-hieu-bien-bao\traffic_sign_types.csv"

function Load-XmlFile([string]$path) {
    $settings = New-Object System.Xml.XmlReaderSettings
    $settings.DtdProcessing = [System.Xml.DtdProcessing]::Prohibit
    $settings.XmlResolver = $null
    $reader = [System.Xml.XmlReader]::Create($path, $settings)
    try {
        $doc = New-Object System.Xml.XmlDocument
        $doc.PreserveWhitespace = $false
        $doc.Load($reader)
        return $doc
    }
    finally { $reader.Close() }
}

function Get-ColIndex([string]$cellRef) {
    $letters = ($cellRef -replace "[0-9]", "")
    $n = 0
    foreach ($ch in $letters.ToCharArray()) { $n = $n * 26 + ([int][char]$ch - 64) }
    return $n
}

function Fold([string]$s) {
    if ([string]::IsNullOrWhiteSpace($s)) { return "" }
    $n = $s.Trim().ToLowerInvariant().Normalize([Text.NormalizationForm]::FormD)
    $sb = New-Object System.Text.StringBuilder
    foreach ($ch in $n.ToCharArray()) {
        if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$sb.Append($ch)
        }
    }
    return $sb.ToString().Normalize([Text.NormalizationForm]::FormC)
}

function Infer-Group([string]$code, [string]$nhom) {
    $g = (Fold $nhom)
    if ($g -match "cam" -and $g -notmatch "camera") { return "P" }
    if ($g -match "nguy") { return "W" }
    if ($g -match "hieu lenh" -or $g -match "hieu-lenh") { return "R" }
    if ($g -match "chi dan" -or $g -match "chi-dan") { return "I" }
    if ($g -match "phu") { return "S" }
    $t = if ([string]::IsNullOrWhiteSpace($code)) { "" } else { $code.Trim() }
    if ($t.Length -eq 0) { return "KHAC" }
    $letter = [char]::ToUpperInvariant($t[0])
    if ($letter -in @([char]"P", [char]"W", [char]"R", [char]"I", [char]"S")) { return [string]$letter }
    return "KHAC"
}

function Esc([string]$s) {
    if ($null -eq $s) { $s = "" }
    $s = $s.Trim()
    if ($s.IndexOfAny([char[]]@(',', '"', "`n", "`r")) -ge 0) {
        return '"' + ($s.Replace('"', '""')) + '"'
    }
    return $s
}

function Looks-LikeCode([string]$code) {
    if ([string]::IsNullOrWhiteSpace($code)) { return $false }
    $t = $code.Trim()
    if ($t.Length -lt 2 -or $t.Length -gt 32) { return $false }
    if ($t.StartsWith("QL.") -or $t.StartsWith("CT.") -or $t.StartsWith("Km")) { return $false }
    return ($t.IndexOf(".") -ge 0) -or [char]::IsLetter($t[0])
}

$tmp = Join-Path $env:TEMP ("xlsx-sign-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tmp | Out-Null
try {
    Copy-Item -LiteralPath $xlsx -Destination (Join-Path $tmp "book.zip")
    [IO.Compression.ZipFile]::ExtractToDirectory((Join-Path $tmp "book.zip"), (Join-Path $tmp "unz"))
    $unz = Join-Path $tmp "unz"
    $ssPath = Join-Path $unz "xl\sharedStrings.xml"
    $strings = New-Object System.Collections.Generic.List[string]
    if (Test-Path $ssPath) {
        $ss = Load-XmlFile $ssPath
        $nsSs = New-Object Xml.XmlNamespaceManager($ss.NameTable)
        $nsSs.AddNamespace("m", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")
        foreach ($si in $ss.SelectNodes("//m:si", $nsSs)) {
            $t = $si.SelectSingleNode("m:t", $nsSs)
            if ($t) { [void]$strings.Add([string]$t.InnerText) }
            else {
                $parts = @($si.SelectNodes(".//m:t", $nsSs) | ForEach-Object { $_.InnerText })
                [void]$strings.Add(($parts -join ""))
            }
        }
    }
    $sheet = Get-ChildItem (Join-Path $unz "xl\worksheets") -Filter "sheet*.xml" | Sort-Object Name | Select-Object -First 1
    $xml = Load-XmlFile $sheet.FullName
    $ns = New-Object Xml.XmlNamespaceManager($xml.NameTable)
    $ns.AddNamespace("m", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")
    $rows = $xml.SelectNodes("//m:sheetData/m:row", $ns)
    $grid = New-Object System.Collections.Generic.List[hashtable]
    $maxCol = 1
    foreach ($row in $rows) {
        $map = @{}
        foreach ($c in $row.c) {
            $idx = Get-ColIndex $c.r
            if ($idx -gt $maxCol) { $maxCol = $idx }
            $val = ""
            if ($c.t -eq "s") {
                $i = [int]$c.v
                if ($i -ge 0 -and $i -lt $strings.Count) { $val = $strings[$i] }
            }
            elseif ($c.t -eq "inlineStr") { $val = [string]$c.is.t }
            else { $val = [string]$c.v }
            $map[$idx] = $val
        }
        $grid.Add($map)
    }

    $iStt = 1; $iCode = 2; $iEn = 3; $iVi = 4; $iShape = 5; $iGroup = 6; $iW = 7; $iH = 8
    if ($grid.Count -gt 0) {
        $hdr = $grid[0]
        for ($c = 1; $c -le $maxCol; $c++) {
            $h = Fold ([string]$hdr[$c])
            if ($h -match "^stt$") { $iStt = $c }
            elseif ($h -match "ma bien") { $iCode = $c }
            elseif ($h -match "tieng anh" -or $h -match "english") { $iEn = $c }
            elseif ($h -match "tieng viet" -or $h -match "ten bien" -or $h -match "noi dung") { $iVi = $c }
            elseif ($h -match "hinh dang") { $iShape = $c }
            elseif ($h -match "nhom") { $iGroup = $c }
            elseif ($h -match "rong") { $iW = $c }
            elseif ($h -match "dai" -or $h -match "cao") { $iH = $c }
        }
    }

    $utf8 = New-Object System.Text.UTF8Encoding $true
    $lines = New-Object System.Collections.Generic.List[string]
    [void]$lines.Add("code,name,name_en,group_code,shape,width,height,sort_order")
    $seen = @{}
    $n = 0
    for ($r = 1; $r -lt $grid.Count; $r++) {
        $map = $grid[$r]
        $code = ([string]$map[$iCode]).Trim()
        if (-not (Looks-LikeCode $code)) { continue }
        if ($seen.ContainsKey($code.ToLowerInvariant())) { continue }
        $seen[$code.ToLowerInvariant()] = $true
        $name = ([string]$map[$iVi]).Trim()
        if ($name.Length -eq 0) { $name = $code }
        $en = ([string]$map[$iEn]).Trim()
        $shape = ([string]$map[$iShape]).Trim()
        $group = Infer-Group $code ([string]$map[$iGroup])
        $w = ([string]$map[$iW]).Trim()
        $h = ([string]$map[$iH]).Trim()
        $stt = ([string]$map[$iStt]).Trim()
        if ($stt -notmatch "^\d+$") { $stt = ($n + 1).ToString() }
        [void]$lines.Add((@(
            (Esc $code), (Esc $name), (Esc $en), (Esc $group), (Esc $shape), (Esc $w), (Esc $h), (Esc $stt)
        ) -join ","))
        $n++
    }

    $text = ($lines -join "`n") + "`n"
    $dirOff = Split-Path $outOfficial -Parent
    if (-not (Test-Path $dirOff)) { New-Item -ItemType Directory -Force -Path $dirOff | Out-Null }
    $dirSet = Split-Path $outSet -Parent
    if (-not (Test-Path $dirSet)) { New-Item -ItemType Directory -Force -Path $dirSet | Out-Null }
    [IO.File]::WriteAllText($outOfficial, $text, $utf8)
    [IO.File]::WriteAllText($outSet, $text, $utf8)
    Write-Host "OK official rows=$n cols=$maxCol -> $outOfficial"
    Write-Host "OK set copy -> $outSet"
    $lines | Select-Object -First 8 | ForEach-Object { Write-Host $_ }
}
finally {
    Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue
}
