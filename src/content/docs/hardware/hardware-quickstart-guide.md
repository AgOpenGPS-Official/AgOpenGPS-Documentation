---
title: 'Hardware quickstart: what to buy'
sidebar:
  label: 'Hardware quickstart guide'
  order: 1
---

This page lists the hardware you need for each feature. Make the
[decisions in Getting started](/getting-started/#decisions-to-make-before-you-buy)
first, and read the pages linked here before you buy anything expensive.

## Guidance

- A [Windows tablet](/hardware/other-components/tablet/)
- A [GNSS receiver](/hardware/other-components/gps-modules-standard-or-micro/),
  such as an ArduSimple ZED-F9P, with an
  [antenna](/hardware/other-components/choosing-an-antenna/) and cable. For two
  antennas, you need two receivers or a dual-antenna receiver such as the
  UM982.

If all you want is guidance (AgOpenGPS shows where to steer and you steer by
hand), you can stop there: plug the receiver into the tablet and you're away.

## Autosteer

On top of the guidance hardware:

- An [all-in-one board](/hardware/boards/all-in-one-boards/) (the current
  version is v4.5)
- A [Teensy 4.1](/hardware/other-components/teensy-4-1/), the 'brain' of the
  board
- A [wheel angle sensor](/hardware/other-components/wheel-angle-sensor/)
- A [steering actuator](/hardware/steering-options/), such as a Keya motor kit,
  a DIY motor or a hydraulic valve
- A [Cytron motor driver](/hardware/other-components/cytron-motor-driver/) to
  power the steering actuator (not needed for the Keya motor)
- An [IMU](/hardware/other-components/imu-inertial-measurement-unit/) if you use
  a single antenna (not needed with two antennas)

## RTK corrections

RTK corrections take the receiver's accuracy down to a few centimetres. You can
either:

- Use an existing correction source, at no extra hardware cost: a government
  network, a free community caster such as RTK2go or Centipede, or a commercial
  service (usually much more expensive, for little extra value to most farmers).
  See [RTK setup](/software/rtk-setup/).
- [Build your own RTK base station](https://github.com/lansalot/FreeRTK/blob/main/README.md).

## Before you order

Read [Suppliers and scammers](/hardware/suppliers-and-scammers/). If anything is
unclear, ask on the [forum](https://discourse.agopengps.com) or in the
[Telegram group](https://t.me/AgOpenGPSInternational) before you buy.
