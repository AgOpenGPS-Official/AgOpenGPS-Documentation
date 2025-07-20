+++
title = "GNSS / GPS Modules"
weight = 1
+++

## Overview

The GNSS module interprets the raw satellite signals collected by your antenna,
turning them into usable location data.

The systems work with NMEA strings (data that came from GNSS receivers with
actual position, ground speed, heading, and so on.) So, to know where your
tractor is you need one.

### GNSS/GPS naming confusion

GNSS stands for Global Navigation Satellite System. It's the Collective name for
multi GNSS Satellites like GPS, Glonass, Galileo, Beidou and QZSS. Mostly
everyone calls their system a GPS Autosteer System, but GPS is the American
Satellite system. That's where the confusion often comes from.

## Module selection

In the world are AgOpenGPS there are basically two GNSS modules of interest:

- Ardsusimple SimpleRTK2B (available in standard or micro sizes)
- Unicore UM982

[Ardusimple's SimpleRTK2B](https://www.ardusimple.com/simplertk2b/) F9P receiver
boards are the most popular at present (2025). They are very good and low priced
(if you are in certain parts of the world) multi GNSS receivers and also RTK
ready. For a good auto steer system you need very high accuracy. with rtk
corrections fed into the SimpleRTK2b board it can get to a <2cm precision. I
tell more about that in the NTRIP/RTK page.

### Single or Dual

AgOpenGPS is configurable with one or two GNSS modules (and one or two antennas
respectively). Some users report high performance at low speeds with dual
systems, but generally performance of a single antenna + IMU system is very
good. For beginners it is likely best to start with single + IMU, test it, and
see if dual is required.

If you are going for a dual setup, antennas must be placed at least 150cm apart.
![image](../../img/dual-antenna-photo.png)

## Ardsusimple SimpleRTK2B

### Standard or Micro?

Here, you'll be following your board choice - you can't fit Micro GPS modules to
a standard board, or vice versa.

Standard:
[https://www.ardusimple.com/product/simplertk2b/](https://www.ardusimple.com/product/simplertk2b/)

Standard with Antenna
[https://www.ardusimple.com/product/simplertk2b-basic-starter-kit-ip65/](https://www.ardusimple.com/product/simplertk2b-basic-starter-kit-ip65/)

![image](../../img/simplertk2b.png)

or Micro:
[https://www.ardusimple.com/product/simplertk2b-micro/](https://www.ardusimple.com/product/simplertk2b-micro/)

![image](../../img/simplertk2b-micro.png)
![image](../../img/simplertk2b-micro-pinout.png)

Options :\
Variant - ZED-F9P (absolutely NOT F9R!!)\
RF connector - SMA\
Form Factor- Through hole

If you want to use it standalone or with an rtkbase, here's a breakout board -
then USB should recognize it:
https://github.com/AgOpenGPS-Official/Boards/tree/main/Ublox%20F9P/BuckWheat%20Micro%20breakout

## Unicore UM982

_Unicore information is currently dispersed across the AgOpenGPS community.
Willing to contribute? please reach out via the AgOpenGPS Github._

## XBee module pinout

![image](../../img/xbee-module-pinout.png)

If you match up the angled corners then the pinout matches, XBEE calls the
communication pins DOUT/DIN instead of TX/RX. The only connections that the USB
adapter makes is power, ground, DIN, DOUT, and RSSI (the led will just be off).
Install with the RF connector away from the USB connector.

Note that the ArduSimple adapter doesn’t use the micro F9P’s USB connection, it
uses the micro F9P’s serial connection through an FTDI converter. If you are
going to use RTKBase for the base station then the micro F9P won’t be
automatically recognized. You’ll want to jump to step 7 of the RTKBase Github
install page “Connect your gnss receiver to raspberry pi/orange pi/… with usb or
uart, and check which com port it uses (ttyS1, ttyAMA0, something else…)” Just a
couple extra setup steps, not that time consuming.
