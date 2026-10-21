import os
import shutil
from PIL import Image
import json

base_dir = r"c:\Users\KIIT\OneDrive\Desktop\Raj Resort Patna"
src_img_dir = os.path.join(base_dir, "Images")
dest_img_dir = os.path.join(base_dir, "public", "images")
os.makedirs(dest_img_dir, exist_ok=True)

# 1. Copy LandingHeroSection.mp4
src_mp4 = os.path.join(base_dir, "LandingHeroSection.mp4")
dest_mp4 = os.path.join(base_dir, "public", "LandingHeroSection.mp4")
if os.path.exists(src_mp4) and not os.path.exists(dest_mp4):
    print("Copying LandingHeroSection.mp4 to public...")
    shutil.copy2(src_mp4, dest_mp4)
    print("Copied LandingHeroSection.mp4 successfully.")
elif os.path.exists(dest_mp4):
    print("LandingHeroSection.mp4 already in public.")

# 2. Process and categorize images
landscape_list = []
portrait_list = []
square_list = []

files = sorted(os.listdir(src_img_dir))
for idx, f in enumerate(files):
    src_path = os.path.join(src_img_dir, f)
    if not os.path.isfile(src_path):
        continue
    
    ext = os.path.splitext(f)[1].lower()
    if ext not in [".jpg", ".jpeg", ".png", ".webp"]:
        continue

    try:
        with Image.open(src_path) as img:
            w, h = img.size
            ratio = round(w / h, 2)
            
            clean_name = f"venue-{idx+1:02d}{ext}"
            if f.lower() == "landingpage3.png":
                clean_name = "landingpage3.png"
            
            dest_path = os.path.join(dest_img_dir, clean_name)
            if not os.path.exists(dest_path):
                shutil.copy2(src_path, dest_path)
            
            item = {
                "file": clean_name,
                "orig": f,
                "width": w,
                "height": h,
                "ratio": ratio
            }
            
            if ratio >= 1.2:
                landscape_list.append(item)
            elif ratio <= 0.85:
                portrait_list.append(item)
            else:
                square_list.append(item)
    except Exception as e:
        print(f"Error reading {f}: {e}")

report = {
    "landscape": landscape_list,
    "portrait": portrait_list,
    "square": square_list
}

with open(os.path.join(base_dir, "public", "images_catalog.json"), "w", encoding="utf-8") as out:
    json.dump(report, out, indent=2)

print(f"Process complete: {len(landscape_list)} Landscape, {len(portrait_list)} Portrait, {len(square_list)} Square.")
print("Saved report to public/images_catalog.json")
