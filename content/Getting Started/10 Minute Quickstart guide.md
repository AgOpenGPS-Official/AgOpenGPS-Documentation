+++
linkTitle   = "Getting Started"
weight      = 10
+++

# 🚀 Quick-Start Guide (≈10 minutes)

Welcome! This page gives you the **bare-minimum knowledge** to understand what  
AgOpenGPS is all about. Before making any big decisions, it is strongly  
recommended you read the relevant “in-depth” sections of this documentation.

---

## What is AgOpenGPS?

AgOpenGPS (AOG) is an open-source autosteer and implement-control project. The  
software runs on a Windows tablet and uses community-developed hardware
systems  
(such as circuit boards), guides farm machinery with centimetre-level accuracy.

---

## Why do people want autosteer?

Autosteer systems have many benefits, including:

- Reduced driver fatigue
- Input savings due to increased accuracy (particularly relevant for spraying,  
  fertilising and sowing)
- Ability to work accurately during periods of low visibility (e.g.,  
  dusk/darkness)

---

## Why do people want to install AgOpenGPS?

Commercial autosteer systems are typically expensive, closed-source and  
difficult to adapt to your specific needs on-farm. They also fall into one of  
the many products sold to farmers which, while useful, outsource a valuable
part  
of the business to another entity.

AgOpenGPS solves some of these challenges. it is:

- **Cheaper than most/all commercial systems.** AgOpenGPS costs ~£1000-£1500
  for  
  a typical setup, vs £5000+ for most comparable commercial systems.
- **Open source, for everyone, forever.** The code is freely available to all  
  users, and you can adapt as you see fit if you so desire (at your own risk).  
  It is improved by the community, for the community.
- **Adaptable to your setup.** Hardware and software can be adapted to fit
  your  
  machines and farming requirements – often with a bit of tinkering and  
  community support!

---

## 🛠️ The Differing Levels of AgOpenGPS

| Level                                   | What it does                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Light-bar guidance**                  | Uses a GPS signal to generate guidance lines for you to follow **manually**                                                                                                          |
| **Full autosteer**                      | Uses a GPS signal to steer the machine wheels automatically (e.g., via hydraulics or a steering motor)                                                                               |
| **Full autosteer with Section Control** | As in “full autosteer”, but with the ability to switch sections of your implement on or off at certain points (e.g., to avoid double spraying headlands)                             |
| **Full autosteer with Rate Control**    | As in “full autosteer”, but with the ability to increase or decrease machine output based on certain factors (e.g., machine speed or nitrogen requirements in different field zones) |

---

## What level of AgOpenGPS should I start with?

A great place to start is building towards your own 'full autosteer' system.
This is where a large amount of users begin.

If you are certain you only want lightbar guidance, feel free to keep it simple
and go for that instead.

If you want section or rate control, full autosteer is still recommended as a
place to start - you can add the extra capability later

---

## Basic overview of the system

Below is a high level overview of the system. The rest of the documentation
contains most of the specifics you will need to make actual purchases, but the
aim of this section is to make sure the purpose of the most fundamental elements
of the system are clear.

- **Location Signal.** All levels of AgopenGPS require location signal, which
  comes from GNSS (Global Navigation Satellite System; confusingly this is
  sometimes known as GPS, which is the US element of GNSS). These signals are
  the very similar what you find in your phone or car satnav. They tell the
  AgOpenGPS software the location of your tractor, which is a key first step in
  achieving lightbar guidance or autosteer. In practice this means you need an
  antenna mounted on your tractor
- **A Windows device.** Most commonly a rugged & bright screened tablet, this
  device is placed in the tractor cab. It is used to run the AgOpenGPS software,
  and allow the user to interact with the software (e.g., to activate and
  deactivate autosteer).
- **AgOpenGPS Software.** The core software which collects different signals
  (e.g., location signals) and converts them into commands (e.g., steer three
  degrees left). This can be thought of as the brain of the system - it collects
  external feedback and makes a decision on what to do next.

The above components are enough to achieve basic lightbar guidance In order to
achieve full autosteer you will also need:

- **A wheel angle sensor.** In order to generate accurate steering commands, the
  AgOpenGPS software needs to know which way your wheels are pointing. This
  sensor achieves this
- **A way to steer your wheels.** For the system to steer, it needs a way to
  turn the command from the AgOpenGPS software (e.g., turn three degrees right)
  into physical movement of the tractor onto the desired line. Common methods
  include DIY steering motors, retrofit motorised steering wheels, and hydraulic
  steering.
- _(Optional)_ **A way to account for tractor roll.** When the machine you are
  autosteering is on a slope, the angle of the tractor means the location signal
  can give an incorrect reading. Adding a component to measure this roll means
  the software can correct for it, improving accuracy. The two main methods of
  doing this are either installing an IMU (inertial measurement unit) or using
  two GNSS antennae instead of one.
- **A PCB (Printed Circuit Board).** This board acts as the physical point where
  all the signals passing to and from your tablet are gathered together. It
  ensures these signals are routed correctly, allowing the whole system to work
  as intended.
- _(Optional)_ **An RTK correction signal.** To achieve the most accurate
  steering (1-2cm) an RTK correction signal is required. RTK corrections use the
  signal from existing fixed antennae with a known location to correct for the
  errors in GPS signals that arise from various quirks of GNSS systems (e.g.,
  conflicts with the earths atmosphere). AgOpenGPS takes this into account to
  improve the accuracy of your steering.

---

## 🔀 Key choices to make

| Question                                       | Key considerations                                                                                                            | Where to read next |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| _“Which tractor/machine should I install on?”_ | Use on farm, value of vehicle, current level of autosteer readiness (e.g., tractor may already have hydraulic steering setup) | TBC                |
| _“Which steering method fits my tractor?”_     | Project budget, level of desire for 'professional' look                                                                       | TBC                |
| _“Single or Dual GPS?”_                        | TBC                                                                                                                           | TBC                |
| _“IMU or no IMU?”_                             | TBC                                                                                                                           | TBC                |
| _“RTK or no RTK?”_                             | TBC                                                                                                                           | TBC                |

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
