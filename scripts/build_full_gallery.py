import os
import json
import re

base_dir = r"c:\Users\KIIT\OneDrive\Desktop\Raj Resort Patna"
images_dir = os.path.join(base_dir, "public", "images")
catalog_path = os.path.join(base_dir, "public", "images_catalog.json")

with open(catalog_path, "r", encoding="utf-8") as f:
    catalog = json.load(f)

# Build a lookup of ratio/dimensions
file_info = {}
for group in ['landscape', 'portrait', 'square']:
    for item in catalog.get(group, []):
        file_info[item['file']] = {
            'ratio': item.get('ratio', 1.0),
            'width': item.get('width', 900),
            'height': item.get('height', 975)
        }

# Curated specific photos that we know in detail
known_meta = {
    "landingpage3.png": ("The Open Wedding Lawn at Night", "Grand Lawns", "Our green open lawn under the evening stars, where your entire family can gather and celebrate together."),
    "venue-02.jpg": ("The Bride's Walk with Loved Ones", "Ceremonial Pergola", "The bride walking toward the mandap under a flower canopy held lovingly by her brothers."),
    "venue-03.png": ("Blessings at the Wedding Stage", "Stage & Mandap", "The bride and groom seated on the royal stage receiving prayers and heartfelt wishes from family."),
    "venue-04.png": ("The Groom in Traditional Sherwani", "Stage & Mandap", "The groom ready on the illuminated stage for the arrival of the bride and the Varmala ceremony."),
    "venue-05.png": ("The Groom's Grand Entry", "Ceremonial Pergola", "The groom stepping along the illuminated glass walkway under circular flower arches."),
    "venue-06.png": ("Royal Bridal Procession with Dancers", "Ceremonial Pergola", "Cold fireworks, dancers, and traditional music making the bridal entrance unforgettable."),
    "venue-07.png": ("Circular Floral Welcome Gateway", "Ceremonial Pergola", "Delicate hanging chandeliers and fresh floral arches framing the main aisle."),
    "venue-10.jpg": ("The Main Flower Entrance Gate", "Ceremonial Pergola", "A tall gateway dressed in fresh blossoms where relatives take their first photos of the night."),
    "venue-11.jpg": ("Evening Garden Lantern Pathway", "Ceremonial Pergola", "Warm golden lanterns and green leaves guiding guests from the main entrance into the resort."),
    "venue-12.jpg": ("The Baraat Welcome Walkway", "Ceremonial Pergola", "A 150-foot flower-covered walkway with chandeliers and warm lights welcoming the Baraat."),
    "venue-13.jpg": ("Lantern Walkway for Guests", "Ceremonial Pergola", "Soft lantern lights and fresh greenery guiding relatives into the main celebration arena."),
    "venue-14.jpg": ("Floral Overhead Canopy & Bells", "Ceremonial Pergola", "Overhead flower garlands and auspicious bells welcoming guests into the courtyard."),
    "venue-15.jpg": ("The Varmala & Stage Ceremony", "Stage & Mandap", "The central raised stage where the bride and groom exchange garlands with family blessings."),
    "venue-16.jpg": ("The Bride in Traditional Red Lehenga", "Stage & Mandap", "A touching portrait of the bride smiling in her ceremonial attire before the vows."),
    "venue-17.jpg": ("The Starlit Celebration Lawn", "Grand Lawns", "Our open lawn at night with the glowing heart arch and fairy lights under Patna skies."),
    "venue-18.jpg": ("Celebration Lawn Dining Gathering", "Grand Lawns", "Expansive open lawn with dining tables where families meet and talk over fresh hot meals."),
    "venue-19.jpg": ("Evening Garden Courtyard Setup", "Grand Lawns", "Festive lawn lighting creating a warm, joyful atmosphere across the grounds."),
    "venue-20.jpg": ("Ceremonial Aisle with Ambient Lighting", "Ceremonial Pergola", "Illuminated carpeted path where family members and guests arrive in style."),
    "venue-21.jpg": ("Mandap Pillar & Floral Art", "Stage & Mandap", "Intricately woven fresh flowers decorating the sacred wedding mandap."),
    "venue-22.jpg": ("Lawn Courtyard Under Fairy Lights", "Grand Lawns", "Delicate fairy lights draping the lawn for extended family conversations."),
    "venue-23.jpg": ("Wedding Reception Garden Seating", "Grand Lawns", "Comfortable open-air seating for elders and guests on the soft green lawn."),
    "venue-24.jpg": ("Bride & Groom Under Fairy Lights", "Banquets & Lighting", "A tender portrait of the couple smiling together under warm golden string lights."),
    "venue-25.jpg": ("The Floral Stage Arch", "Stage & Mandap", "Hand-arranged flowers and stage lighting framing the bride and groom."),
    "venue-26.jpg": ("Shahi Darbar AC Hall", "Banquets & Lighting", "A cool, climate-controlled hall where guests enjoy fresh feasts and intimate ceremonies."),
    "venue-27.jpg": ("Crystal Chandeliers & Warm Lights", "Banquets & Lighting", "Sparkling crystal chandeliers creating an enchanting evening glow."),
    "venue-28.jpg": ("The Sacred Vivah Mandap", "Stage & Mandap", "Decorated with marigolds and holy lights for the Saat Phere and family blessings."),
    "venue-29.jpg": ("Evening Banquet Lighting Details", "Banquets & Lighting", "Golden ambient illumination highlighting every table and food pavilion."),
    "venue-30.jpg": ("Bride under Chandelier Walkway", "Ceremonial Pergola", "The bride in royal maroon lehenga standing beneath the illuminated flower ceiling."),
    "venue-31.jpg": ("Fireworks Over the Grand Stage", "Banquets & Lighting", "Brilliant fireworks lighting up the Patna night sky as the couple takes the stage."),
    "venue-32.jpg": ("Grand Stage with Flower Shower", "Stage & Mandap", "The couple on the central stage with celebratory flower showers and festive music."),
}

# Theme pools for remaining photos (venue-33 to venue-77)
lawn_captions = [
    ("Open Lawn Celebration View", "Grand Lawns", "Spacious green lawn accommodating grand family weddings under open skies."),
    ("Starlit Lawn Evening Ambiance", "Grand Lawns", "Warm garden lighting across the lawn where families gather peacefully."),
    ("Night Sky Wedding Lawn", "Grand Lawns", "Gentle evening breezes and open lawns creating a comfortable celebration space."),
    ("Lawn Seating & Family Gathering", "Grand Lawns", "Well-arranged round tables and chairs allowing relatives to talk and relax."),
    ("Celebration Lawn Grounds", "Grand Lawns", "Wide lawn layout giving children space to play and elders a calm place to sit."),
]

pergola_captions = [
    ("Illuminated Flower Corridor", "Ceremonial Pergola", "Delicate blossoms and golden lights welcoming the Baraat with dignity."),
    ("Grand Arrival Archway", "Ceremonial Pergola", "A majestic flower gate welcoming guests with traditional warmth."),
    ("Aisle Decor & Floral Ceiling", "Ceremonial Pergola", "Hanging greenery and chandeliers framing the ceremonial procession."),
    ("Carpeted Baraat Pathway", "Ceremonial Pergola", "Wide ceremonial walkway dressed in fresh flowers and fairy lighting."),
    ("Welcome Gateway Illuminations", "Ceremonial Pergola", "Festive lights and floral drapes marking the entrance to the wedding."),
]

stage_captions = [
    ("Sacred Mandap Setup", "Stage & Mandap", "Fresh traditional flowers and holy Havankund space for the Saat Phere."),
    ("The Varmala Stage Decor", "Stage & Mandap", "Elevated ceremonial pavilion designed for memorable wedding vows."),
    ("Stage Floral Backdrops", "Stage & Mandap", "Artisan floral arrangements framing the couple for timeless family portraits."),
    ("Ceremonial Stage Architecture", "Stage & Mandap", "Grand illuminated stage providing clear sightlines for all wedding guests."),
    ("Traditional Vivah Stage", "Stage & Mandap", "Where blessings are exchanged and two families unite in sacred tradition."),
]

banquet_captions = [
    ("Evening Chandelier Illumination", "Banquets & Lighting", "Warm ambient lighting and sparkling chandeliers brightening the celebration."),
    ("Shahi Darbar Hall Ambiance", "Banquets & Lighting", "Climate-controlled comfort keeping elders and guests relaxed throughout the night."),
    ("Dining Pavilion & Halwai Counter", "Banquets & Lighting", "Generous dining space where fresh multi-cuisine wedding feasts are served."),
    ("Fairy Light Canopy Design", "Banquets & Lighting", "Golden string lights creating an intimate, festive glow over dinner tables."),
    ("Banquet Hall Hospitality Setup", "Banquets & Lighting", "Attentive service and comfortable seating for wedding feasts and receptions."),
]

all_files = sorted([f for f in os.listdir(images_dir) if f != "ankita.jpg"])

gallery_items = []
categories = ['Grand Lawns', 'Ceremonial Pergola', 'Stage & Mandap', 'Banquets & Lighting']

# Track cycling indices for the pools
l_idx = 0
p_idx = 0
s_idx = 0
b_idx = 0

for i, filename in enumerate(all_files):
    item_id = f"gal-{i+1:02d}"
    
    # Aspect
    ratio = file_info.get(filename, {}).get('ratio', 1.0)
    if ratio >= 1.2:
        aspect = "landscape"
    elif ratio <= 0.8:
        aspect = "portrait"
    else:
        aspect = "square"

    if filename in known_meta:
        title, cat, caption = known_meta[filename]
    else:
        # Assign rotating category & caption based on filename and aspect
        cat_choice = categories[i % 4]
        if cat_choice == 'Grand Lawns':
            title, cat, caption = lawn_captions[l_idx % len(lawn_captions)]
            l_idx += 1
        elif cat_choice == 'Ceremonial Pergola':
            title, cat, caption = pergola_captions[p_idx % len(pergola_captions)]
            p_idx += 1
        elif cat_choice == 'Stage & Mandap':
            title, cat, caption = stage_captions[s_idx % len(stage_captions)]
            s_idx += 1
        else:
            title, cat, caption = banquet_captions[b_idx % len(banquet_captions)]
            b_idx += 1
        
        # Add index hint if repetitive title
        title = f"{title} · Part {((i // 4) + 1)}"

    gallery_items.append({
        "id": item_id,
        "title": title,
        "category": cat,
        "caption": caption,
        "aspect": aspect,
        "image": f"/images/{filename}"
    })

print(f"Generated {len(gallery_items)} gallery items successfully!")

# Write to a typescript snippet
ts_output_path = os.path.join(base_dir, "data", "gallery-items.ts")
with open(ts_output_path, "w", encoding="utf-8") as f:
    f.write("import { GalleryItem } from './resort-data';\n\n")
    f.write("export const FULL_GALLERY_ITEMS: GalleryItem[] = ")
    json.dump(gallery_items, f, indent=2, ensure_ascii=False)
    f.write(";\n")

print(f"Wrote to {ts_output_path}")
