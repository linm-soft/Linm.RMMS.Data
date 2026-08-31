# Split a CSV over 95 MiB into N parts (each with header) for GitHub 100 MiB limit.
param(
    [string]$Path = ''
)
$ErrorActionPreference = 'Stop'
$maxBytes = 95L * 1024 * 1024
$src = $Path
if (-not $src) {
    $src = 'D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\data\import\sets\gov-vn\road_assets.csv'
}
if (-not (Test-Path -LiteralPath $src)) { throw ('Missing ' + $src) }

$fi = Get-Item -LiteralPath $src
$dir = $fi.DirectoryName
$name = [IO.Path]::GetFileNameWithoutExtension($fi.Name)
Get-ChildItem -LiteralPath $dir -Filter ($name + '.part*.csv') -ErrorAction SilentlyContinue | Remove-Item -Force

if ($fi.Length -le $maxBytes) {
    Write-Host ('OK under limit bytes=' + $fi.Length)
    exit 0
}

$nParts = [int][Math]::Ceiling($fi.Length / [double]$maxBytes)
if ($nParts -lt 2) { $nParts = 2 }

$utf8 = New-Object System.Text.UTF8Encoding $true
$dataLines = 0
$header = $null
$sr = [IO.StreamReader]::new($fi.FullName, $utf8)
try {
    $header = $sr.ReadLine()
    if ($null -eq $header) { throw 'Empty CSV' }
    while ($null -ne $sr.ReadLine()) { $dataLines++ }
}
finally { $sr.Dispose() }

$per = [Math]::Max(1, [int]($dataLines / $nParts))
Write-Host ('SPLIT ' + $fi.Name + ' bytes=' + $fi.Length + ' lines=' + $dataLines + ' parts=' + $nParts + ' per=' + $per)

$sr = [IO.StreamReader]::new($fi.FullName, $utf8)
try {
    [void]$sr.ReadLine()
    $part = 1
    $written = 0
    $outPath = Join-Path $dir ($name + '.part' + $part + '.csv')
    $sw = New-Object IO.StreamWriter($outPath, $false, $utf8)
    $sw.WriteLine($header)
    while ($null -ne ($line = $sr.ReadLine())) {
        $sw.WriteLine($line)
        $written++
        if ($written -ge $per -and $part -lt $nParts) {
            $sw.Flush(); $sw.Dispose()
            Write-Host ('  wrote ' + $outPath)
            $part++
            $written = 0
            $outPath = Join-Path $dir ($name + '.part' + $part + '.csv')
            $sw = New-Object IO.StreamWriter($outPath, $false, $utf8)
            $sw.WriteLine($header)
        }
    }
    $sw.Flush(); $sw.Dispose()
    Write-Host ('  wrote ' + $outPath)
}
finally { $sr.Dispose() }

$limit = 100L * 1024 * 1024
Get-ChildItem -LiteralPath $dir -Filter ($name + '.part*.csv') | ForEach-Object {
    $mib = [math]::Round($_.Length / 1MB, 2)
    Write-Host ('PART ' + $_.Name + ' ' + $mib + ' MiB')
    if ($_.Length -ge $limit) { throw ('Part still over GitHub 100 MiB: ' + $_.Name) }
}
