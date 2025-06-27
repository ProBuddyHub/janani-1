# 📦 Janani – IoT-Integrated Maternal Health Suitcase

### 🎯 Samsung Solve for Tomorrow 2025 | Theme: *Health is Wealth with Technology*

Janani is a smart, affordable, and reusable medical suitcase equipped with vital-monitoring devices integrated via IoT. Designed for pregnant and lactating women in underserved areas, this solution aims to reduce maternal and infant complications by enabling daily monitoring, AI-based insights, and periodic doctor reports – all from the safety of their home.

---

## 🔍 Problem Statement

Every year, thousands of women and newborns in India face complications due to inadequate prenatal and postnatal care. Due to lack of awareness, education, affordability, and access to hospitals, health issues are often unnoticed until it's too late. Most rural women visit hospitals only once or twice throughout their pregnancy, if at all.

---

## 💡 Our Solution

**Janani** is a reusable, sensor-integrated health suitcase containing key diagnostic tools for daily and weekly health tracking. Connected to an AI-powered mobile app via an **ESP32 module**, it automates reporting and emergency alerts to designated doctors.

---

## 📦 Kit Components

| Component                 | Purpose                                         |
|--------------------------|-------------------------------------------------|
| Digital BP Monitor       | Monitors blood pressure                         |
| Glucometer + Strips      | Checks blood sugar levels                       |
| Pulse Oximeter           | Measures oxygen saturation and heart rate       |
| Digital Thermometer      | Records body temperature                        |
| Digital Weighing Scale   | Monitors body weight                            |
| Urine Dipsticks          | Detects proteins/sugar levels                   |
| ORS Sachets              | Prevents dehydration                            |
| Pain Balm/Oil            | Muscular relief                                 |
| Hot Water Bag            | For warmth and pain relief                      |
| Reusable Cloth Pads      | Menstrual hygiene                               |
| Manual Nasal Steamer     | For congestion and cold                         |
| Stretching Band          | Prenatal/postnatal fitness                      |
| Basic Medication Kit     | Contains essentials like paracetamol, etc.      |
| LifeStraw Filter         | Ensures clean drinking water                    |
| Instruction Booklet      | Multilingual user guide with illustrations      |

---

## 📡 IoT & Electronics

### Core:
- **ESP32 Dev Board** with Bluetooth/Wi-Fi
- **Power:** Rechargeable Li-ion battery
- **QR Tag:** Unique per kit – links patient profile to doctor
- **Usage Sensor:** Monitors number of uses per device (IR/Hall sensors)

### Bluetooth-Linked Devices:
- BP Monitor, Oximeter, Glucometer (if BT-enabled)

### Features:
- Auto-sync with mobile app
- Tracks daily usage
- Prevents over-reliance (alerts when misused)
- Transmits weekly reports to assigned doctor

---

## 🔁 Reuse & Return Cycle

1. Kit is activated by a **certified doctor**
2. Doctor inputs patient history, current health, and prescriptions into the app
3. User tracks vitals daily with AI assistant guidance
4. After delivery/postnatal period:
   - QR is reset
   - Kit returned to collection center
   - Based on condition, user is refunded partial amount
5. Kit is refurbished and reused for next patient

---

## 🏷️ Estimated Cost (Bulk Manufacturing)

| Item                        | Cost (INR) |
|-----------------------------|------------|
| BP Monitor                  | ₹350       |
| Glucometer + Starter Strips | ₹200       |
| Pulse Oximeter              | ₹150       |
| Digital Thermometer         | ₹100       |
| Weighing Scale              | ₹250       |
| Urine Strips & Meds         | ₹200       |
| ESP + Sensors + QR Setup    | ₹200       |
| Packaging (Suitcase, foam)  | ₹250       |
| **Total Estimated**         | ₹1700–₹2000|

---

## 🛡️ Safety and Trust

- Activated and configured **only by registered doctors**
- Contains **clear, non-technical instructions**
- App is multilingual with **AI-based explanation assistant**
- Device usage is tracked to prevent anxiety or misuse

---

## 📲 Next Steps (Software - Pending)

> The app will include:
> - Doctor dashboard
> - Patient AI assistant (multilingual chat + voice)
> - Weekly summary reports
> - Emergency alerts
> - QR scan for profile linking
> - Return kit interface

---

## 🧪 Project Stage

Current Status: ✅ **Prototype Design Stage**

We are building:
- Hardware prototype and connectivity test
- App wireframe and GPT assistant logic
- Red-zone campaign model and awareness plan

---

## 🤝 Acknowledgement

Janani is designed to serve **the underserved**. Built with love and care for all mothers and newborns across Bharat 🇮🇳. Special thanks to health workers and mentors guiding us toward impact-driven innovation.

---

🩺 1. Medical Essentials (Weekly / Emergency Use)
Component	Purpose	Approx. Cost (INR)
BP Monitor	Monitor blood pressure	₹400–₹600
Glucometer + Strips	Track blood sugar levels	₹300–₹450
Digital Thermometer	Measure body temperature	₹60–₹100
Pulse Oximeter	Check oxygen saturation	₹250–₹350
Weighing Scale	Monitor weight changes	₹250–₹350
Urine Dipsticks	Detect UTIs, protein, sugar	₹50–₹100
Basic Medication Kit	Paracetamol, iron, calcium, etc.	₹50–₹80
LifeStraw / Water Purifier Straw	Clean drinking water, prevent infections	₹100–₹150

    Subtotal: ~ ₹1,460 – ₹2,180

🌿 2. Daily Comfort & Hygiene Care
Component	Purpose	Approx. Cost (INR)
ORS Sachets	Hydration	₹10–₹20
Pain Balm / Oil	Muscle & body pain relief	₹20–₹30
Hot Water Bag	Back pain / abdominal pain relief	₹100–₹150
Reusable Cloth Pads	Menstrual hygiene / postnatal bleeding	₹30–₹50
Manual Nasal Steamer	Cold, congestion, headache	₹80–₹120
Reminder Sticker Pack	Pill reminders, routine tracker	₹10–₹20
Stretching Band	Light physical therapy	₹50–₹100

    Subtotal: ~ ₹300 – ₹490

🧘 3. Stress Relief Add-ons
Component	Purpose	Approx. Cost (INR)
Stress Ball / Gel Ball	Anxiety relief	₹20–₹40
Cooling Eye Mask	Relaxation, headache relief	₹30–₹60
Essential Oil Roller (lavender/mint)	Aromatherapy	₹40–₹70
Guided Breathing Card / Wheel	Deep breathing practice	₹5–₹10

    Subtotal: ~ ₹95 – ₹180

📡 4. IoT + Connectivity + Control
Component	Purpose	Approx. Cost (INR)
ESP32 Module	Bluetooth/WiFi IoT Hub	₹250–₹350
Wiring & PCB Setup	Connect all devices to central ESP unit	₹100–₹150
QR Code + Bluetooth ID Tag	Secure kit identification & pairing	₹10–₹20
Battery Pack / Power Adapter	Portable usage	₹50–₹100
Usage Monitoring Sensor	Count usage & prevent overuse anxiety	₹50–₹70

    Subtotal: ~ ₹460 – ₹690

🧳 5. Packaging & Documentation
Component	Purpose	Approx. Cost (INR)
Suitcase / Box	Durable, portable casing	₹150–₹200
Info Booklet (Multi-lingual)	Explain usage and warnings	₹10–₹20
Doctor Certification Label Area	Marking authorized kits	Negligible

    Subtotal: ~ ₹160 – ₹220

💰 Total Cost Estimate (Bulk Production)
Tier	Cost Range
Basic Version (Essential + Connectivity)	₹1,800 – ₹2,200
Premium with Stress & Daily Care Additions	₹2,300 – ₹2,700
✅ Summary of Categories

    Medical Monitoring (8 items)

    Daily Use & Hygiene (7 items)

    Emotional Wellness (4 items)

    Electronics / IoT (5 items)

    Casing & Documentation (3 items)

-------------------------------------------------


## 🩺 1. Medical Essentials (Weekly / Emergency Use)

| Component               | Purpose                                | Approx. Cost (INR) |
|-------------------------|----------------------------------------|--------------------|
| BP Monitor              | Monitor blood pressure                 | ₹400–₹600          |
| Glucometer + Strips     | Track blood sugar levels               | ₹300–₹450          |
| Digital Thermometer     | Measure body temperature               | ₹60–₹100           |
| Pulse Oximeter          | Check oxygen saturation                | ₹250–₹350          |
| Weighing Scale          | Monitor weight changes                 | ₹250–₹350          |
| Urine Dipsticks         | Detect UTIs, protein, sugar            | ₹50–₹100           |
| Basic Medication Kit    | Paracetamol, iron, calcium, etc.       | ₹50–₹80            |
| LifeStraw / Water Filter| Clean drinking water, prevent infections| ₹100–₹150         |


## 🌿 2. Daily Comfort & Hygiene Care

| Component            | Purpose                            | Approx. Cost (INR) |
|----------------------|------------------------------------|--------------------|
| ORS Sachets          | Hydration                          | ₹10–₹20            |
| Pain Balm / Oil      | Muscle & body pain relief          | ₹20–₹30            |
| Hot Water Bag        | Back/abdominal pain relief         | ₹100–₹150          |
| Reusable Cloth Pads  | Menstrual/postnatal hygiene        | ₹30–₹50            |
| Manual Nasal Steamer | Cold, congestion, headache relief  | ₹80–₹120           |
| Reminder Sticker Pack| Pill reminders, routine tracker    | ₹10–₹20            |
| Stretching Band      | Light physical therapy             | ₹50–₹100           |


## 🧘 3. Stress Relief Add-ons

| Component                  | Purpose                        | Approx. Cost (INR) |
|----------------------------|--------------------------------|--------------------|
| Stress Ball / Gel Ball     | Anxiety relief                 | ₹20–₹40            |
| Cooling Eye Mask           | Relaxation, headache relief    | ₹30–₹60            |
| Essential Oil Roller       | Aromatherapy                   | ₹40–₹70            |
| Guided Breathing Card/Wheel| Deep breathing practice        | ₹5–₹10             |

## 📡 4. IoT + Connectivity + Monitoring

| Component              | Purpose                                  | Approx. Cost (INR) |
|------------------------|------------------------------------------|--------------------|
| ESP32 Module           | Bluetooth/WiFi IoT Hub                   | ₹250–₹350          |
| Wiring & PCB Setup     | Connect all devices to ESP               | ₹100–₹150          |
| QR Code + Bluetooth ID | Secure pairing and kit verification      | ₹10–₹20            |
| Battery Pack/Adapter   | Portable power for electronics           | ₹50–₹100           |
| Usage Monitoring Sensor| Count usage and prevent overuse anxiety  | ₹50–₹70            |

## 🧳 5. Packaging & Documentation

| Component                 | Purpose                                | Approx. Cost (INR) |
|---------------------------|----------------------------------------|--------------------|
| Suitcase / Box            | Durable, portable casing               | ₹150–₹200          |
| Info Booklet (Multi-lingual)| Explain usage, warnings             | ₹10–₹20            |
| Certification Label Area | Tag authorized doctor/hospital details | Negligible         |

## 💰 Total Cost Estimate (Bulk Manufacturing)

| Tier                               | Cost Range (INR)  |
|------------------------------------|-------------------|
| Basic Version (Essentials + IoT)   | ₹1,800 – ₹2,200   |
| Premium Version (Full Add-ons)     | ₹2,300 – ₹2,700   |




---

