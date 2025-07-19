+++
title = "Hardware quickstart guide (aka TL;DR - cut to the chase, what do I BUY???)"
linkTitle = "Hardware quickstart guide"
aliases = ["/hardware/tl-dr-cut-to-the-chase-what-do-i-buy"]
weight = 1
+++

This guide is designed to help you rapidly understand the key hardware decisions
that need made, and the equipment you will need to purchase to get up and
running.

It is highly recommended that you read through the docs homepage and getting
started guide, along with the relevant pages for any expensive hardware before
making any purchases.

## Key decisions

1. Which 'level' of autosteer setup you want (Lightbar, Standard Autosteer,
   Autosteer with rate/section control). See the
   ['Levels of AgOpenGPS' comparison table](/getting-started/_index) for a brief
   explaination of options. For beginners, Standard Autosteer is a good place to
   start.
2. Which type of steering actuator you require (e.g., Keya motor, DIY motor,
   Hydraulic). See the [Steering Options section](/hardware/steering-options)
   for a discussion of the different options. This is highly dependent on your
   machine and requirements, but for beginners the Keya system is reportedly one
   of the easiest options
3. Which antenna/IMU setup you require (I.e., single antenna & IMU or dual
   antenna). Generally, single antenna & IMU performs well, though dual can have
   some advantages at extremely low speeds.

## Core Lightbar guidance hardware

- A windows tablet
- at least one or two Ardusimple ZED-F9P GPS modules, plus antenna(s) and
  connection cable

If all you want to do is use AOG as a light bar (where it indicates where you
should steer), you can likely stop there, plug a single F9P into your tablet and
you're away.

## Standard Autosteer hardware

Ontop of the Lightbar hardware listed above, you will need:

- An AgOpenGPS PCB (the new all-in-one design is recommended - latest is V4.5)
- One of the steering actuation options (e.g., Keya motor kit, DIY motor setup,
  Hydraulic conversion kit)
- A Cytron to power your steering actuator (not required for the Keya motor
  steering option)
- an IMU (if going for an F9P single-antenna system - not required for dual
  antenna and ublox UM 982 systems)
- A Teensy 4.1 to run as the 'brain' of your circuit board

## RTK correction signal hardware (optional)

RTK signals correct for the variations in GNSS signals over days and hours that
limit accuracy. To get RTK correction signals for your setup, you will need
either:

- Go the 'no more hardware' route and access to an existing RTK station (often
  through government, or free 'NTRIP caster' services like RTK2go or Centipede.
  Some even use commercial providers, but they are typically much more expensive
  than the alternative options, for limited extra value to the farmer in most
  cases)

  or

- [Build your own RTK base station](https://github.com/lansalot/FreeRTK/blob/main/README.md)

## Next steps

As mentioned above, reading through this page alone is almost certainly not
enough to make an informed decision on purchases. Do not fear - most of the
information you need is in these docs. Have a read, check the discourse and feel
free to ask on the telegram if anything is unclear!
