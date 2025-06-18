+++
title       = "Getting Started"
linkTitle   = "Getting Started"
description = "A 10-minute overview of what you need, what to buy, and how to see AgOpenGPS in action."
weight      = 10
+++

# 🚀 Quick-Start Guide (≈10 minutes)

Welcome! This page gives you the **bare-minimum knowledge** to decide what you
need, place an order, and run AgOpenGPS for the first time. Skim it now—come
back later for the deep dives.

---

## 🛠️ The Two Levels of AgOpenGPS

| Level              | What it does                                   | What you need                                                                                                                                                                                                                                          |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Light-bar only** | Shows guidance lines so **you** steer manually | ① Windows tablet + USB cable ② **One** ZED-F9P GPS receiver + antenna                                                                                                                                                                                  |
| **Full autosteer** | AgOpenGPS drives the wheels for you            | Everything in light-bar **plus**:<br>③ All-In-One (AIO) PCB or Cytron-based build ④ IMU (BNO085 or CMPS14) if you use single-antenna GPS ⑤ Steering motor or hydraulic valve ⑥ 12 V→24 V step-up converter ⑦ RTK corrections (NTRIP, local base, etc.) |

_⏱️ Reading time: 2 minutes_

---

## 🛒 Shopping Checklist

1. **Windows tablet or laptop**
   - 4 GB RAM minimum, Windows 10 or 11
2. **GPS** – Ardusimple ZED-F9P starter kit × 1 (light-bar) or × 2 (dual-antenna
   autosteer)
3. **AIO v4.5 PCB** <small>(recommended)</small> **or** Cytron MD13S driver for
   modular builds
4. **IMU** – BNO085 breakout <small>(skip if you run dual-antenna)</small>
5. **Steering motor or hydraulic block** (Keya, DC gearmotor, proportional
   valve …)
6. **12 V⇢24 V converter** (≥ 10 A)
7. **RTK corrections** – choose one:
   - Government / commercial NTRIP caster
   - Friend’s base station
   - **Build your own** → see
     [FreeRTK guide](https://github.com/lansalot/FreeRTK/blob/main/README.md)

> 📦 Complete parts lists and links: see
> **[Hardware → What to Buy](/build/hardware)**.

---

## 🔧 Five-Step First Run

1. **Download & install AgOpenGPS** →
   [latest release](https://github.com/AgOpenGPS-Official/AgOpenGPS/releases)
2. **Plug your F9P into the Windows tablet (USB)**
3. **Launch AgOpenGPS** → `Settings ► Com ► Auto‐Detect` until GPS turns
   **green**
4. **Create a field boundary** (draw a square on screen)
5. **Drive a test pass** with the light-bar; watch guidance lines update in
   real-time ✅

> ⏱️ Typical first-run time: **10 minutes** once parts arrive.

---

## 🔀 Next Choices

| Question                                   | Where to read next                                      |
| ------------------------------------------ | ------------------------------------------------------- |
| _“Should I use single or dual antenna?”_   | [Hardware ► GNSS Modules](/build/hardware/gnss-modules) |
| _“Which steering method fits my tractor?”_ | [Steering Overview](/build/hardware/steering)           |
| _“How do I flash firmware to the Teensy?”_ | [Configure ► Flash Firmware](/configure/flash-firmware) |

---

## 🙋 Need Help?

- **Telegram (fast chat):**
  [@AgOpenGPSInternational](https://t.me/AgOpenGPSInternational)
- **Discourse forum (detailed help):**
  [discourse.agopengps.com](https://discourse.agopengps.com)
- **Video playlist:**
  [YouTube ► AOG Training](https://www.youtube.com/playlist?list=PL1N2N2XFHWW1fIDhb7koOa7hxH0LGppYc)

---

## 👀 Learn More

Once you’re comfortable with the basics, explore:

- **Build** – step-by-step wiring and soldering
- **Configure** – AgIO, CAN, and PID tuning
- **Operate** – field workflows, rate control, section switching
- **Troubleshoot** – common errors and quick fixes

Happy steering! 🚜💨
