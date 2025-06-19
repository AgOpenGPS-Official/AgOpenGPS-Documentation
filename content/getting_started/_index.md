+++
linkTitle = "Getting Started"
description = "A 10-minute overview of AgOpenGPS—what it is, why farmers use it, and the hardware you need."
weight = 10
+++

# 🚀 Quick-Start Guide (≈ 10 minutes)

Welcome! This page gives you the **bare-minimum knowledge** to understand
AgOpenGPS. Before making big purchase decisions, dive into the in-depth sections
linked throughout.

---

## What is AgOpenGPS?

**AgOpenGPS (AOG)** is an open-source autosteer and implement-control system.  
The software runs on a Windows tablet and, together with community-built
hardware (PCBs, sensors, motor drivers), guides farm machinery with
**centimetre-level accuracy**.

---

## Why do farmers want autosteer?

- Reduce driver fatigue
- Save inputs through precise spraying, fertilising, and seeding
- Work accurately in dust, fog, or after dark
- Increase field capacity thanks to straight, repeatable passes

---

## Why choose AgOpenGPS over commercial kits?

- **Cost:** ~£1000–£1500 for a full setup (vs £5000+ for proprietary systems)
- **Open source:** free code, schematics, and PCB files—improve or customise at
  will
- **Adaptable:** fits almost any tractor with a bit of tinkering and community
  support

---

## 🛠️ Levels of AgOpenGPS

| Level                           | What it does                                                           |
| ------------------------------- | ---------------------------------------------------------------------- |
| **Light-bar guidance**          | Generates guidance lines—driver steers manually                        |
| **Full autosteer**              | Tablet sends commands; motor or valve steers automatically             |
| **Autosteer + Section Control** | Autosteer plus automatic boom/section on-off to avoid overlap          |
| **Autosteer + Rate Control**    | Autosteer plus variable-rate output based on speed or prescription map |

---

## Which level should I start with?

Most users jump straight to **full autosteer**; you can add Section or Rate
Control later.  
If you only need a light-bar, start simple—but know you can upgrade without
replacing core components.

---

## Basic overview of the system

Before you dive into part lists, here’s what each main component does.

### Components needed for **light-bar guidance**

- **Location signal** – Every AgOpenGPS setup needs a GNSS fix (often called
  GPS).  
  A **ZED-F9P receiver plus roof-mounted antenna** streams position to the
  tablet so the software always knows where the tractor is—typically within a
  few centimetres.
- **Windows tablet or laptop** – Rugged, sunlight-readable Windows 10/11 device
  (4 GB RAM min). Runs AgOpenGPS and lets you switch guidance on/off.
- **AgOpenGPS software** – The “brain” of the system: reads GNSS data, shows a
  live map/light-bar, logs coverage, and decides the next steering move.

### Extra parts for **full autosteer**

- **Wheel-angle sensor (WAS)** – Reports the actual steering angle so AgOpenGPS
  can correct in real time.
- **Steering actuator** – Converts software commands into wheel movement.
  Options include a DC steering motor, retrofit motorised wheel, proportional
  hydraulic valve, or factory CAN valve.
- **Roll / heading compensation (optional)**
  - _Single-antenna builds:_ add an **IMU** (e.g. BNO085).
  - _Dual-antenna builds:_ two GNSS receivers provide heading and roll, so no
    IMU is needed.
- **Control PCB** – Houses a **Teensy 4.1 running AgIO firmware**, routes power
  and signals, connects sensors, and drives the motor or valve.
- **Power & motor driver** – 12 V → 24 V converter plus a Cytron/AIO driver
  stage to power the steering motor or valve.
- **RTK correction signal** _(optional but recommended)_ – AgOpenGPS’s built-in
  NTRIP client can fetch RTCM data from public, commercial, or DIY base stations
  to reach 1–2 cm accuracy.

With these elements installed, you can upgrade from simple light-bar guidance to
fully automated, centimetre-accurate steering.

---

## 🙋 Need help?

- **Telegram (fast chat):**
  [@AgOpenGPSInternational](https://t.me/AgOpenGPSInternational)
- **Forum (detailed):** <https://discourse.agopengps.com>
- **Videos:**
  [AOG Training Playlist](https://www.youtube.com/playlist?list=PL1N2N2XFHWW1fIDhb7koOa7hxH0LGppYc)

---

## 👀 Learn more

- [**Software**] – installation and configuration
- [**Hardware**] – sourcing and building every component

Happy steering! 🚜💨
