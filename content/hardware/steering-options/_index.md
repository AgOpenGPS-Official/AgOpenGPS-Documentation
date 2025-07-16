+++
title = "Steering Options"
simple_list = true
aliases = ["/hardware/kits"]
weight = 5
description = "Overview of all steering options available for AgOpenGPS. Helps determine which steering solution (CANBUS, hydraulic, Keya motor, DIY motor, etc.) is suitable for your tractor, with links to relevant hardware and guides."
+++

## What are my options for steering the tractor???

Here are the main steering options available for AgOpenGPS:

1. **CANBUS Steering**  
   For tractors that are steer-ready and support CANBUS. Uses the tractor's
   built-in steering system via electronic control.

2. **Hydraulic Valve Steering (PWM-style)**  
   For tractors with a standard hydraulic steering valve (not CANBUS). Uses a
   PWM-controlled valve to steer.

3. **Keya Motorized Steering Wheel**  
   For tractors without built-in steering, using a bolt-on Keya motorized
   steering wheel.

4. **DIY Motor Steering**  
   For tractors without built-in steering, using a custom or off-the-shelf
   electric motor to turn the steering wheel.

5. **Hydraulic Valve Block Add-on**  
   For tractors without built-in steering, by adding your own hydraulic valve
   block to control steering hydraulically.

6. **Danfoss Integrated Valve**  
   For tractors equipped with a Danfoss integrated autosteer valve.

Each option has its own hardware and wiring requirements. Use the links and
guides on this page to find the best fit for your tractor.

---

## My tractor is steer-ready and I believe it can be done via CANBUS.

For this, you will want the CANBUS (aka "Tony's board") PCB. The board is
self-assembly. It's pretty easy to do, but if you're not keen, ask in the forum
or the telegram channel for help. The information for how to build the board is
[here](https://github.com/AgOpenGPS-Official/Boards/tree/main/CANBUS/PCB). You
will also need the [Teensy](Other-components/teensy-4.1), the
[F9P (micro is recommended)](Other-components/gps-modules-standard-or-micro), an
[antenna](Other-components/Choosing-an-Antenna) and the
[BNO085](Other-components/imu-inertial-measurement-unit)

---

## My tractor has a steering valve, but it's not CANBUS. I believe it's a standard PWM-style hydraulic valve

For this, you will want the standard (All-in-one 4.x)
[PCB](<boards/All-In-One-(AIO)-boards/AIO-Board-flavours>). The board can be
ordered mostly pre-assembled. You will also need the
[Teensy](Other-components/teensy-4.1), the
[F9P (micro or standard, depending on the board)](Other-components/gps-modules-standard-or-micro),
an [antenna](Other-components/Choosing-an-Antenna), a
[Cytron](Other-components/cytron-motor-driver), a
[wheel angle sensor](Other-components/wheel-angle-sensor) (if you can't use the
one on the tractor) and the
[BNO085](Other-components/imu-inertial-measurement-unit)

---

## My tractor isn't steer-ready, I want to use the Keya steering wheel

For this, you will want the standard (All-in-one 4.x)
[PCB](<boards/All-In-One-(AIO)-boards/AIO-Board-flavours>). The board can be
ordered mostly pre-assembled. You will also need the
[Teensy](Other-components/teensy-4.1), the
[F9P (micro or standard, depending on the board)](Other-components/gps-modules-standard-or-micro),
an [antenna](Other-components/Choosing-an-Antenna), a
[Cytron](Other-components/cytron-motor-driver), a
[wheel angle sensor](Other-components/wheel-angle-sensor) (if you can't use the
one on the tractor), the [Keya motorised wheel](Other-components/Keya) and the
[BNO085](Other-components/imu-inertial-measurement-unit)

---

## My tractor isn't steer-ready, I want to fit my own hydraulic valve block

For this, you will want the standard (All-in-one 4.x)
[PCB](<boards/All-In-One-(AIO)-boards/AIO-Board-flavours>). The board can be
ordered mostly pre-assembled. You will also need the
[Teensy](Other-components/teensy-4.1), the
[F9P (micro or standard, depending on the board)](Other-components/gps-modules-standard-or-micro),
an [antenna](Other-components/Choosing-an-Antenna), a
[Cytron](Other-components/cytron-motor-driver), a
[wheel angle sensor](Other-components/wheel-angle-sensor) (if you can't use the
one on the tractor), the
[Baraki valve](Other-components/Hydraulic-steering-with-baraki-valve) and the
[BNO085](Other-components/imu-inertial-measurement-unit)

---

## My tractor isn't steer-ready, I want to fit my own wheel motor

For this, you will want the standard (All-in-one 4.x)
[PCB](<boards/All-In-One-(AIO)-boards/AIO-Board-flavours>). The board can be
ordered mostly pre-assembled. You will also need the
[Teensy](Other-components/teensy-4.1), the
[F9P (micro or standard, depending on the board)](Other-components/gps-modules-standard-or-micro),
an [antenna](Other-components/Choosing-an-Antenna), a
[Cytron](Other-components/cytron-motor-driver), a
[wheel angle sensor](Other-components/wheel-angle-sensor) (if you can't use the
one on the tractor), the [motor](Other-components/the-motor) and the
[BNO085](Other-components/imu-inertial-measurement-unit)
