+++
title = "IMU (inertial measurement unit)"
linkTitle = "Inertial Measurement Unit"
weight = 4
+++

## Overview

The IMU's job is to assist with measuring:

- Orientation/Yaw - which way is the tractor heading
- Pitch - how up or down the front of the tractor is
- Roll - how much the tractor is leaning left or right

This information helps immensely with improving accuracy in a single-GPS
configuration. It's not needed if you're going to be using dual-GPS.

IMUs exist in two main setups - an individual IMU component mounted on the PCB,
or an IMU integrated into the GNSS module.

## Module choice

The [Adafruit BNO085](https://www.adafruit.com/product/4754) is typically the
one to go for; it is effective, affordable and widely documented within the
community. If you look at any kind of alternative, the pins have to be in the
same configuration to fit on the AIO boards. Generally it is best to play it
safe and stick with the BNO085.

These can be hard to find, so watch the Discourse or Telegram channels as
helpful members often post when they see stock at $VENDOR.

In 2025 initial testing of the
[SYD Dyamics TM171](https://uk.robotshop.com/products/syd-dynamics-transducerm-tm171-9-axis-ahrs-w-dual-port-communication)
showed promising results. However, it is still in testing stages, so the BNO085
still recommended for most users.

Some users are also experiementing with the U-blox UM981/2 GNSS chip, which has
an integrated IMU, with good results.

## Adafruit BNO085

### Installation

The BNO085 typically comes without header pins soldered - so you will need to
source your own and solder them yourself.

![image](../../img/bno085.png)

The IMU then needs to be placed upright (like on the above picture), with X or Y
matching up with the direction the tractor travels. You can orient it
0,90,180,270 degrees, configure X / Y, and invert accordingly from the software.

### Sample Suppliers

- [adafruit](https://www.adafruit.com/product/4754)
- [digikey](https://www.digikey.fr/fr/products/detail/adafruit-industries-llc/4754/13426653)
- [botland](https://botland.store/9dof-imu-sensors/22113-bno085-9-dof-imu-fusion-breakout-3-axis-accelerometer-magnetometer-and-gyroscope-adafruit-4754.html)
