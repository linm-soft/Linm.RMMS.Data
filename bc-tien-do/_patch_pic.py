import re
import zipfile
from pathlib import Path

src = Path("bao-cao-danh-gia-rmms-20261001-20261105.pptx")
tmp = Path("_patched.pptx")
with zipfile.ZipFile(src, "r") as zin, zipfile.ZipFile(tmp, "w") as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename in (
            "ppt/slideLayouts/slideLayout2.xml",
            "ppt/slideLayouts/slideLayout3.xml",
        ):
            text = data.decode("utf-8")
            text = text.replace("<p:ph", '<p:ph type="pic"', 99)
            text = text.replace('type="pic" type="pic"', 'type="pic"')
            data = text.encode("utf-8")
        zout.writestr(item, data, compress_type=item.compress_type)
tmp.replace(src)
print("patched")
