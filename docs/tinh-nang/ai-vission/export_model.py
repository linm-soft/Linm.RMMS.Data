# Sinh combined_traffic_model.onnx từ YOLOv8n.
# Chạy: pip install ultralytics onnx && python export_model.py
from pathlib import Path
import shutil

from ultralytics import YOLO

model = YOLO("yolov8n.pt")
exported = Path(model.export(format="onnx", imgsz=640))
target = (
    Path(__file__).resolve().parents[4]
    / "MFE-Source"
    / "Linm.Web.RMMS.Mobile"
    / "public"
    / "models"
    / "combined_traffic_model.onnx"
)
target.parent.mkdir(parents=True, exist_ok=True)
shutil.copyfile(exported, target)
print(f"Model copied to {target}")
